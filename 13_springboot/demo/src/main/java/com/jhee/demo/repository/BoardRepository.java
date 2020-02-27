package com.jhee.demo.repository;

import com.jhee.demo.model.Articles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BoardRepository extends CrudRepository<Articles, Integer> {
}
