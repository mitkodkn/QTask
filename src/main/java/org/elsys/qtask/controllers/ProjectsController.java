package org.elsys.qtask.controllers;

import org.elsys.qtask.errors.ResourceNotFoundException;
import org.elsys.qtask.models.Project;
import org.elsys.qtask.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProjectsController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/projects/{id}")
    public Project getProjectById(@PathVariable(value = "id") Long projectId) {
        return projectRepository.findById(projectId).orElseThrow(() -> new ResourceNotFoundException("Project"));
    }

    @PostMapping("/projects")
    public Project createProject(@Valid @RequestBody Project project) {
        return projectRepository.save(project);
    }

    @PutMapping("/projects/{id}")
    public Project updateProject(@PathVariable(value = "id") Long projectId, @Valid @RequestBody Project projectDetails) {
        Project project = projectRepository.findById(projectId).orElseThrow(() -> new ResourceNotFoundException("Project"));

        project.setName(projectDetails.getName());
        project.setManager(projectDetails.getManager());

        return projectRepository.save(project);
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable(value = "id") Long projectId) {
        projectRepository.deleteById(projectId);
        return ResponseEntity.ok().build();
    }
}
