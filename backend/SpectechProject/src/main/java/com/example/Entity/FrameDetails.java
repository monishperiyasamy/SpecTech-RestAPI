package com.example.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="framedetails")
public class FrameDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int prdtId;
	
	@Override
	public String toString() {
		return "FrameDetails [prdtId=" + prdtId + ", frametype=" + frametype + ", brandname=" + brandname
				+ ", rating=" + rating + ", price=" + price + "]";
	}
	public int getPrdtId() {
		return prdtId;
	}
	public void setPrdtId(int prdtId) {
		this.prdtId = prdtId;
	}
	
	public FrameDetails(int prdtId, String frametype, String brandname, String rating, String price) {
		super();
		this.prdtId = prdtId;
		this.frametype = frametype;
		this.brandname = brandname;
		this.rating = rating;
		this.price = price;
	}
	public String getFrametype() {
		return frametype;
	}
	public void setFrametype(String frametype) {
		this.frametype = frametype;
	}
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	private String frametype;
	private String brandname;
	private String rating;
	private String price;
	public FrameDetails()
	{
		
	}
	

}