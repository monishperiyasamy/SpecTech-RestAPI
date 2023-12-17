package com.example.Repository;


import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.example.Entity.FrameDetails;

public interface FrameDetailsRepo extends CrudRepository<FrameDetails,Integer>,PagingAndSortingRepository<FrameDetails, Integer>{



	//SELECT
	@Query("select e from FrameDetails e where e.brandname=:brandname")
	public List<FrameDetails>getFramesByBrandname(String brandname);
    
	@Query("select s from FrameDetails s where s.rating BETWEEN :start AND :end")
	public List<FrameDetails> findByRatingBetween(String start, String end);
	
	//DELETE
	@Modifying
	@Query("delete from FrameDetails s where s.rating < :rating")
	public int deleteFramesByRating(@Param("rating") String status);
	//UPDATE
	@Modifying
	@Query("update FrameDetails s set s.price=?1 where s.rating=?2 ")
	public int UpdateFramePrice(String price, String rating);
	
	
}