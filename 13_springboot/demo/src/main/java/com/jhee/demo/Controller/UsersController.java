package com.jhee.demo.Controller;

import com.jhee.demo.repository.UsersRepository;
import com.jhee.demo.service.JoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/joinRequest")
    public String joinRequest(HttpServletRequest request) {
        JoinService joinService = new JoinService();
        joinService.joinUser(request, usersRepository);

        return "Joined";
    }

    @PostMapping("/loginRequest")
    public String loginRequest() {
        return "index";
    }
}
