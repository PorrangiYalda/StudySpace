package com.example.studyspace.repository;

import com.example.studyspace.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // Long = type of SID
}