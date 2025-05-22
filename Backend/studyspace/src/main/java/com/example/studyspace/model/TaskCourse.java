package com.example.studyspace.model;

import jakarta.persistence.*;

@Entity
public class TaskCourse {

    @EmbeddedId
    private TaskCourseId id;

    @ManyToOne
    @MapsId("TID")
    @JoinColumn(name = "TID")
    private Task task;

    @ManyToOne
    @MapsId("CID")
    @JoinColumn(name = "CID")
    private Course course;

    // Getters and Setters
}
