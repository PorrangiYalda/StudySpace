package com.example.studyspace.controller;

import com.example.studyspace.model.TaskCourse;
import com.example.studyspace.repository.TaskCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task-courses")
public class TaskCourseController {

    @Autowired
    private TaskCourseRepository taskCourseRepository;

    @GetMapping
    public List<TaskCourse> getAllLinks() {
        return taskCourseRepository.findAll();
    }

    @PostMapping
    public TaskCourse createLink(@RequestBody TaskCourse taskCourse) {
        return taskCourseRepository.save(taskCourse);
    }
}