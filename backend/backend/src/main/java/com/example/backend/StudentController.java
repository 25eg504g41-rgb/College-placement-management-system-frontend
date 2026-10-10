package com.example.backend;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
    @PutMapping("/{id}")
public Student updateStudent(
        @PathVariable Long id,
        @RequestBody Student updatedStudent) {

    Student student = studentRepository.findById(id).orElseThrow();

    student.setPhone(updatedStudent.getPhone());
    student.setBranch(updatedStudent.getBranch());
    student.setYear(updatedStudent.getYear());

    return studentRepository.save(student);
}
}