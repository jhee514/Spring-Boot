package com.jhee.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping(value = "/")
//    위아래 같은 의미
//    @PostMapping
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/join")
    public String join() {
        return "join";
    }

    @RequestMapping(value = "/groceries")
    public String groceries() { return "groceries"; }
}
