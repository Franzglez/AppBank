package com.app.Bank.controllers;
import com.app.Bank.models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.app.Bank.services.UserService;

import java.util.ArrayList;


@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService userService;




    @GetMapping
    public ArrayList<UserModel> getUsers() {

        return this.userService.getUsers();
    }

    @PostMapping
    public UserModel saveUser(@RequestBody UserModel user){
        return this.userService.saveUser(user);
    }


}
