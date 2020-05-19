package com.teju.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	
	@NotBlank(message = "Project Identifier is required")
	@Size(min = 4, max = 5 ,message = "Project Identifier must be between 4 to 5 character")
	@Column(updatable = false, unique = true)
	private String projectidentifier;
	
	@NotBlank(message = "Project name is required")
	@Size(min = 4, max = 225 ,message = "Project Name must be between 4 to 225 character")
	private String projectname;
	
	@NotBlank(message = "Description is required")
	@Size(min = 4,message = "Project description must be minimum 4 character")
	private String description;
	
	private String start_date;
	
	private String end_date;
	
	private String created_at;
	
	private String updated_at;
	
//	@OneToMany(mappedBy="project",cascade = CascadeType.ALL)
//	private List<ProjectTask> projecttask = new ArrayList<ProjectTask>();
	

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getProjectIdentifier() {
		return projectidentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectidentifier = projectIdentifier;
	}

	public String getProjectName() {
		return projectname;
	}

	public void setProjectName(String projectName) {
		this.projectname = projectName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public String getCreated_At() {
		return created_at;
	}

	public void setCreated_At(String created_At) {
		this.created_at = created_At;
	}

	public String getUpdated_At() {
		return updated_at;
	}

	public void setUpdated_At(String updated_At) {
		this.updated_at = updated_At;
	}
	
	

}
