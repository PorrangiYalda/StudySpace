
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
    // Getters and Setters
    public Long getSID() {
        return SID;
    }

    public void setSID(Long SID) {
        this.SID = SID;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public String getLevel_of_studies() {
        return level_of_studies;
    }

    public void setLevel_of_studies(String level_of_studies) {
        this.level_of_studies = level_of_studies;
    }
}