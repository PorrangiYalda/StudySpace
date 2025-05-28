package com.example.studyspace.model;
import lombok.*;

import jakarta.persistence.*;
@Data
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CID;

    private String name;
    private String title;
    private String course_number;
    private String instructor;
    private String status;

    // Getters and Setters
}