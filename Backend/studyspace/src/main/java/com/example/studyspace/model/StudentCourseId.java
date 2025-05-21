package com.example.studyspace.model;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class StudentCourseId implements Serializable {
    
        private Long SID;
        private Long CID;
    
        public StudentCourseId() {}
    
        public StudentCourseId(Long SID, Long CID) {
            this.SID = SID;
            this.CID = CID;
        }
    
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof StudentCourseId)) return false;
            StudentCourseId that = (StudentCourseId) o;
            return Objects.equals(SID, that.SID) && Objects.equals(CID, that.CID);
        }
    
        @Override
        public int hashCode() {
            return Objects.hash(SID, CID);
        }
    

    
}
