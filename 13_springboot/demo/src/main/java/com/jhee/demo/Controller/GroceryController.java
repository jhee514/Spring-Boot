package com.jhee.demo.Controller;

import com.jhee.demo.model.Grocery;
import com.jhee.demo.repository.GroceryListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GroceryController {

    @Autowired
    GroceryListRepository groceryListRepository;

    @CrossOrigin(origins = "http//localhost:3000")
    @GetMapping(path = "/groceries")
    public List<Grocery> getAllGroceries() {
        List<Grocery> groceries = new ArrayList<>();
        groceryListRepository.findAll().forEach(groceries::add);
        return groceries;
    }

    @CrossOrigin(origins = "http//localhost:3000")
    @PostMapping(path = "/groceries")
    public Grocery addGrocery(@RequestBody Grocery grocery) {
        groceryListRepository.save(grocery);
        return grocery;
    }

    @CrossOrigin(origins = "http//localhost:3000")
    @DeleteMapping(path = "/groceries/{id}")
    public void deleteGrocery(@PathVariable int id) {
        groceryListRepository.deleteById(id);
    }


}
