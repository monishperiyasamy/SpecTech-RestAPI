package com.example.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.Entity.SignUp;
import com.example.Repository.UserRepo;
@RestController
@RequestMapping("/cred")
@CrossOrigin
public class SignController {
	@Autowired
	UserRepo s_repo;
	@PostMapping("/signup")
	public SignUp GetAll(@RequestBody SignUp s){
		return s_repo.save(s);
	}
	
	

}