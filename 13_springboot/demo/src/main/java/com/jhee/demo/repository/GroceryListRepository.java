package com.jhee.demo.repository;

import com.jhee.demo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryListRepository extends JpaRepository<Item, Integer> {


}