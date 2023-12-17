package com.example.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.Entity.FrameDetails;
import com.example.Repository.FrameDetailsRepo;
import com.example.Service.FrameDetailsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/frames")
public class FrameDetailsController {
    @Autowired
    private FrameDetailsRepo f_repo;
    @Autowired
    private FrameDetailsService f_service;

    
    
    //Retrieve Info with Pagination and Sorting
    
    @GetMapping("/getframes")
    public Page<FrameDetails> getAllFrames(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size, @RequestParam(defaultValue = "prdtId") String sortBy) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortBy));
        return f_repo.findAll(pageRequest);
    }
    
    // Create INfo

    @PostMapping("/postframes")
    public FrameDetails createframes(@RequestBody FrameDetails frame) {
        return f_repo.save(frame);
    }

    
    //  Get Info By ID
    
    @GetMapping("/getframes/{id}")
    public ResponseEntity<Optional<FrameDetails>> getFrameById(@PathVariable int id) {
        Optional<FrameDetails> frame = f_repo.findById(id);
        return ResponseEntity.ok(frame);
    }
    
    // Update Info By ID
    
    @PutMapping("/updateframes/{id}")
    public ResponseEntity<FrameDetails> update(@PathVariable int id, @RequestBody FrameDetails frame) {
        FrameDetails update = f_repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Details not found with id: " + id));

        update.setBrandname(frame.getBrandname());
        update.setFrametype(frame.getFrametype());
        update.setRating(frame.getRating());
        update.setPrice(frame.getPrice());

        f_repo.save(update);
        return ResponseEntity.ok(update);
    }
    
    // Delete Info By ID

    @DeleteMapping("/deleteframes/{id}")
    public String deleteDetails(@PathVariable int id) {
        if (f_repo.existsById(id)) {
            f_repo.deleteById(id);
            return "Id: " + id + " is deleted";
        } else {
            throw new IllegalArgumentException("Id: " + id + " does not exist");
        }
    }
    
    // Delete All Info
    
    @DeleteMapping
    public String deleteAllDetails() {
        f_repo.deleteAll();
        return "All details of frame were deleted";
    }
    
  //SELECT QUERY
	 
  	 //Starting_Query
    
  	 @GetMapping("/getframesByBrandname/{brandname}")
  	 public List<FrameDetails> getFrames(@PathVariable String brandname)
  	 {
  		 return f_service.getFrames(brandname);
  	 }
  	 
  	 
  	 //Starting AND eNDING QUERY
  	 
  	 @GetMapping("/getframesByRating/{start}/{end}")
  	 public List<FrameDetails> findFramesbyRating(@PathVariable String start, @PathVariable String end)
  	 {
  		 return f_service.findFramesByRating(start, end);
  	 }
  	 
  	 //DELETE
  	 
  	 @DeleteMapping("/deleteframesByRating/{status}")
  	 public String deleteFramesByRating(@PathVariable String status) {
  		 int result=f_service.deleteFramesByrating(status);
  		 if(result>0)
  			 return result+" Frame details deleted";
  		 else
  			 return "Problem occured while deleting";
  	 }
  	
  	
  	//UPDATE
  	 @PutMapping("/upadteFramePriceByRating/{price}/{rating}")
  	 public String updateFramePrice(@PathVariable String price,@PathVariable String rating) {
  		 int result=f_service.UpdateFramesprice(price,rating);
  		 if(result>0)
  			 return  result+ " Frame details record updated";
  		 else
  			 return "Problem occured while updating";
  	 }
  	 
  	
  		
}