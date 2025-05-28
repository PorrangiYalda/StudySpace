
package com.example.studyspace.model;

import jakarta.persistence.*;
import java.sql.Date;
import lombok.*;

@Entity
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long SID;

    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private String username;
    private Date DOB;
    private String level_of_studies;

    // Getters and Setters
}