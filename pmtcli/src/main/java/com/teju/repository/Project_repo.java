package com.teju.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teju.model.Project;

@Repository
public interface Project_repo extends JpaRepository<Project, Integer> {
	
	//Optional<Project> findById(String Id);
	
	//List<Project> findAll();
	
	List<Project>findByProjectname (String name);
	

	@Query(value = "select p from Project p where p.projectidentifier= :projectidentifier")
	Project getProjectByIdentifier(@Param("projectidentifier") String projectidentifier);

	@Query("delete from Project p where p.projectidentifier= :projectidentifier")
	void deleteByIdentifier(@Param("projectidentifier") String projectidentifier);

}
