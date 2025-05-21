package com.example.studyspace.repository;

import com.example.studyspace.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Student, Long> {
    Student findByEmail(String email);
}