package com.app.Bank.services;

import com.app.Bank.models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.Bank.repositories.IUserRepository;

import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public ArrayList <UserModel> getUsers(){

        return (ArrayList<UserModel>)userRepository.findAll();
    }

    public UserModel saveUser(UserModel user){

        return userRepository.save(user);
    }


}
