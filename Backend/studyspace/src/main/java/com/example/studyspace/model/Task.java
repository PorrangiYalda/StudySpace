package com.example.studyspace.model;
import jakarta.persistence.*;
import java.sql.Date;

import jakarta.persistence.*;
import java.sql.Date;

@Entity // ← This is the key annotation you're missing
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long TID;

    private String name;
    private Date due_date;
    private String description;
    private String status;

    // Add getters and setters
}
