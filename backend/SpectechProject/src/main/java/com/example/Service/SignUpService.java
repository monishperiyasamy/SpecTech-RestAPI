package com.example.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.SignUp;
import com.example.Repository.UserRepo;

@Service
public class SignUpService {
	
	@Autowired
	UserRepo s_repo;
	public Iterable<SignUp> GetAll(){
		return s_repo.findAll();
	}
	
	

}