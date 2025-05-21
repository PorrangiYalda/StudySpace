package com.example.studyspace.model;

import jakarta.persistence.*;

@Entity
public class StudentCourse {

    @EmbeddedId
    private StudentCourseId id;

    @ManyToOne
    @MapsId("SID")
    @JoinColumn(name = "SID")
    private Student student;

    @ManyToOne
    @MapsId("CID")
    @JoinColumn(name = "CID")
    private Course course;

    // Getters and Setters
}