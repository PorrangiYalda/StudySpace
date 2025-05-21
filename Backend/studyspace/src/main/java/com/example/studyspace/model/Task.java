package com.example.studyspace.model;
import jakarta.persistence.*;
import java.sql.Date;

public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long TID;

    private String name;
    private Date due_date;
    private String description;
    private String status;

    // add getters and setters
    
}
