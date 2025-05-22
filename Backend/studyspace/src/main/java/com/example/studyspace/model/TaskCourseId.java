package com.example.studyspace.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class TaskCourseId implements Serializable {
    private Long TID;
    private Long CID;

    public TaskCourseId() {}

    public TaskCourseId(Long TID, Long CID) {
        this.TID = TID;
        this.CID = CID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TaskCourseId)) return false;
        TaskCourseId that = (TaskCourseId) o;
        return Objects.equals(TID, that.TID) && Objects.equals(CID, that.CID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(TID, CID);
    }
}
