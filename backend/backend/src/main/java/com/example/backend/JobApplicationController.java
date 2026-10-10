package com.example.backend;

import com.example.backend.model.JobApplication;
import com.example.backend.repository.JobApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class JobApplicationController {

    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationController(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    @PostMapping
    public JobApplication addApplication(@RequestBody JobApplication application) {
        return jobApplicationRepository.save(application);
    }

    @GetMapping
    public List<JobApplication> getApplications() {
        return jobApplicationRepository.findAll();
    }
}