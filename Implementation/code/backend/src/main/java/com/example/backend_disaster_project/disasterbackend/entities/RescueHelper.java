package com.example.backend_disaster_project.disasterbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "rescueHelpers")
public class RescueHelper implements Serializable {
    private static final long serialVersionUID = -8836056693631358014L;

    public RescueHelper() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public RescueHelper(String username, String password, String name, String email, String birthday, int age, String department, String description, long phoneNumber, String profession) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.age = age;
        this.department = department;
        this.description = description;
        this.phoneNumber = phoneNumber;
        this.profession = profession;
        this.username = username;
        this.password = password;
    }

    private String name;
    private String email;
    private String birthday;
    private int age;
    private String department;
    private String description;
    private long phoneNumber;
    private String profession;

    @Column(unique = true)
    private String username;
    @Column
    @JsonIgnore
    private String password;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
}
