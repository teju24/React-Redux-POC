package com.teju.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class ProjectTask {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer task_Id;
	
//	@ManyToOne
//	@JoinColumn(name ="projectId")
//    private Project project;
	@Column(updatable = false)
	private Integer projectId;
	
	@NotBlank(message = "Task summary is required")
	@Size(min = 4,message = "Task summary must be minimum 4 character")
	private String summary;
	
	@NotBlank(message = "Acceptance criteria is required")
	@Size(min = 4,message = "Acceptance criteria must be minimum 4 character")
	private String acceptancecriteria;
	
	public String getAcceptancecriteria() {
		return acceptancecriteria;
	}
	public void setAcceptancecriteria(String acceptancecriteria) {
		this.acceptancecriteria = acceptancecriteria;
	}
	@NotBlank(message = "Please select status")
	private String status;
	
	@NotBlank(message = "Please select priority")
	private String priority;
	
	private String due_date;
	
	public Integer getTaskId() {
		return task_Id;
	}
	public void setTaskId(Integer task_Id) {
		this.task_Id = task_Id;
	}
	
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getDue_date() {
		return due_date;
	}
	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}
	
	public Integer getProjectId() {
		return projectId;
	}
	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	

}
