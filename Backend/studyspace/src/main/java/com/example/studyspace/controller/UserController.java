package com.example.studyspace.controller;

import com.example.studyspace.model.Student;
import com.example.studyspace.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private StudentRepository userRepository;

    @GetMapping
    public List<Student> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public Student createUser(@RequestBody Student user) {
        return userRepository.save(user);
    }
}
