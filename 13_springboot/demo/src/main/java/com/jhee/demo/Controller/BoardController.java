package com.jhee.demo.Controller;


import com.jhee.demo.model.Articles;
import com.jhee.demo.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BoardController {

    @Autowired
    BoardRepository boardRepository;

    @GetMapping("/articles")
    public List<Articles> getAllArticles() {
        List<Articles> articles = new ArrayList<>();
        boardRepository.findAll().forEach(articles :: add);
        return articles;
    }

    @PostMapping(path = "/articles")
    public Articles addArticle(Articles articles) {
        boardRepository.save(articles);
        return articles;
    }
}
