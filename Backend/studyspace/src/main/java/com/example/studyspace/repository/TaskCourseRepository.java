package com.example.studyspace.repository;

import com.example.studyspace.model.TaskCourse;
import com.example.studyspace.model.TaskCourseId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskCourseRepository extends JpaRepository<TaskCourse, TaskCourseId> {}

