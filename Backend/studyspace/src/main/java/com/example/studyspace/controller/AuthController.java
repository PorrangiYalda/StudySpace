package com.example.studyspace.controller;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studyspace.model.Student;

import com.example.studyspace.repository.StudentRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private StudentRepository studentRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public String signUp(@RequestBody Student student) {
        if (studentRepository.findByEmail(student.getEmail()) != null) {
            return "Email already registered.";
        }

        student.setPassword(passwordEncoder.encode(student.getPassword()));
        studentRepository.save(student);
        return "User registered successfully.";
    }

    @PostMapping("/login")
    public Object login(@RequestBody Student student) {
        Student existingStudent = studentRepository.findByEmail(student.getEmail());
        if (existingStudent != null && passwordEncoder.matches(student.getPassword(), existingStudent.getPassword())) {
            return existingStudent;
        }
        return "Invalid email or password.";
    }
}
