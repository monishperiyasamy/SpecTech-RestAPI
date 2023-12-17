package com.example.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Entity.FrameDetails;
import com.example.Repository.FrameDetailsRepo;
import jakarta.transaction.Transactional;

@Service
public class FrameDetailsService {
	
	@Autowired
	FrameDetailsRepo f_repo;

	
	//SELECT
	
		//Starting_Query
			public List<FrameDetails> getFrames(String brandname)
			{
				return f_repo.getFramesByBrandname(brandname);
			}
			
		//Starting AND ending Query 
			public List<FrameDetails> findFramesByRating (String start, String end)
			{
				return f_repo.findByRatingBetween(start, end);
			}
			
			
			//DELETE
			
			@Transactional
			public int deleteFramesByrating (String status) {
				return f_repo.deleteFramesByRating(status);
			}
			
			//UPDATE
			
			@Transactional
			public int UpdateFramesprice (String price, String rating)
			{
				return f_repo.UpdateFramePrice(price, rating);
			}

}