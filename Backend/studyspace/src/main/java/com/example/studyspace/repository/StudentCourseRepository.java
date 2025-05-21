package com.example.studyspace.repository;

import com.example.studyspace.model.StudentCourse;
import com.example.studyspace.model.StudentCourseId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, StudentCourseId> {}