package com.example.studyspace.controller;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studyspace.model.Student;
import com.example.studyspace.repository.StudentCourseRepository;
import com.example.studyspace.repository.StudentRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/auth")
public class AuthController {
@Autowired
StudentRepository studentRepository;

private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


@PostMapping("/signup")
    public String signUp(@RequestBody Student student) {
        if (studentRepository.findByEmail(student.getEmail()) != null) {
            return "Email already registered.";
        }
        studentRepository.save(student);
        return "User registered successfully.";
    }

    // Login
    @PostMapping("/login")
    public Object login(@RequestBody Student student) {
        Student existingstudent = studentRepository.findByEmail(student.getEmail());
        if (existingstudent != null && existingstudent.getPassword().equals(student.getPassword())) {
            return existingstudent;
        }
        return "Invalid email or password.";
    }

    
}
