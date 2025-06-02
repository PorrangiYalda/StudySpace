package com.example.studyspace.controller;

import com.example.studyspace.model.StudentCourse;
import com.example.studyspace.repository.StudentCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student-courses")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentCourseController {

    @Autowired
    private StudentCourseRepository studentCourseRepository;

    @GetMapping
    public List<StudentCourse> getAllLinks() {
        return studentCourseRepository.findAll();
    }

    @PostMapping
    public StudentCourse createLink(@RequestBody StudentCourse studentCourse) {
        return studentCourseRepository.save(studentCourse);
    }
}
