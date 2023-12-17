package com.example.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Entity.SignUp;
@Repository
public interface UserRepo extends CrudRepository<SignUp, Integer> {
	@Query("select cre.password from SignUp cre where cre.username=?1")
	Iterable<SignUp> findAllUsernamePassword( String username);

}