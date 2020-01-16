package com.jhee.demo.repository;


import com.jhee.demo.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryListRepository extends JpaRepository<Grocery, Integer> {

}
