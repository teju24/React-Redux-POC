package com.teju.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teju.model.ProjectTask;
import java.lang.Integer;
import java.util.List;

@Repository
public interface ProjectTask_repo extends JpaRepository<ProjectTask, Integer> {
	
	
List<ProjectTask> findByProjectId(Integer projectid);

}
