package com.jhee.demo.service;

import com.jhee.demo.model.Users;
import com.jhee.demo.repository.UsersRepository;

import javax.servlet.http.HttpServletRequest;

public class JoinService {

    public void joinUser(HttpServletRequest request, UsersRepository usersRepository) {
        String userId = request.getParameter("user_id");
        String userPw = request.getParameter("user_pw");
        String userName = request.getParameter("user_name");

        Users users = new Users();
        users.setUser_id(userId);
        users.setUser_pw(userPw);
        users.setUser_name(userName);

        usersRepository.save(users);
    }
}
