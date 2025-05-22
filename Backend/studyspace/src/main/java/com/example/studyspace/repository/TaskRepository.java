package com.example.studyspace.repository;

import com.example.studyspace.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    //query
}

