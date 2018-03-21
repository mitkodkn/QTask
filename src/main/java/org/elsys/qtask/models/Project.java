package org.elsys.qtask.models;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Project {
    @Column(nullable = false, length = 50)
    private String name;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private User manager;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getManager() {
        return manager;
    }

    public void setManager(User manager) {
        this.manager = manager;
    }
}
