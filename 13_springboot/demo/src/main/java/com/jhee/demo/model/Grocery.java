package com.jhee.demo.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

// @Entity tells Hibernate to make a table out of this class
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Grocery {
    //    @Id is used to set our primary key
    @Id
//    BELOW is used to tell Spring to automatically set the value of pk
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private int quantity;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
