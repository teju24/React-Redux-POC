package com.teju.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teju.model.Project;
import com.teju.model.ProjectTask;
import com.teju.repository.ProjectTask_repo;
import com.teju.repository.Project_repo;

@RestController
@CrossOrigin
public class ProjectController {
	
	@Autowired
	Project_repo project_repo;
	
	@Autowired
	ProjectTask_repo projectTask_repo;
	
	@RequestMapping("/getAll")
	public List<Project> getAllProjects(){
		List <Project> allprojects=project_repo.findAll();
		return allprojects;
	}
	
	@RequestMapping("/getProject/{id}")
	public Project getProjectById(@PathVariable String id) {
		Project project = project_repo.getProjectByIdentifier(id);
		return project;
	}
	
	@PostMapping("/projects")
	public ResponseEntity<?> saveProject(@Valid @RequestBody Project project, BindingResult result) throws SQLException {
		ResponseEntity<Map<String,String>> errorMap= getValidation(result);
		Project p = new Project();
		if(errorMap!=null) {
			return errorMap;
		}
		ResponseEntity<?> savedPoject =saveProject(project);
		return new ResponseEntity<Project>(p,HttpStatus.OK);
		
	}

	private ResponseEntity<?> saveProject(Project project){
		Project p = new Project();
		try {
		
		p =project_repo.save(project);
		}catch(Exception ex) {
			return new ResponseEntity<Project>(p,HttpStatus.CONFLICT);
		}
		return new ResponseEntity<Project>(p,HttpStatus.OK);
	}
	
	@RequestMapping("/deleteProject/{id}")
	void deleteProject(@PathVariable String id) {
        project_repo.deleteByIdentifier(id);
    }
	
	
	private ResponseEntity<Map<String,String>> getValidation(BindingResult res){
		
		if(res.hasErrors()) {
			List<FieldError> allErrors =res.getFieldErrors();
			Map<String, String> errormap = new HashMap<String, String>();
			
			for(FieldError error:allErrors) {
				errormap.put(error.getField(),error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String,String>> (errormap,HttpStatus.BAD_REQUEST);
		}
		return null;
		
	}

	
	@PostMapping("/tasks")
	public ResponseEntity<?> saveTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result) throws SQLException {
		ResponseEntity<Map<String,String>> errorMap= getValidation(result);
		
		if(errorMap!=null) {
			return errorMap;
		}
		ProjectTask task =projectTask_repo.save(projectTask);
		
		return new ResponseEntity<ProjectTask>(task,HttpStatus.OK);
		
	}
	
	@RequestMapping("/getTask/{id}")
	public List<ProjectTask> getTaskById(@PathVariable Integer id) {
		List<ProjectTask> projectTasks = projectTask_repo.findByProjectId(id);
		return projectTasks;
	}
	
	@RequestMapping("/deleteTask/{id}")
	void deleteTask(@PathVariable Integer id) {
		projectTask_repo.deleteById(id);
    }

}
