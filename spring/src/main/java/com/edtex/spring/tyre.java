package com.edtex.spring;

import org.springframework.stereotype.Component;

@Component
public class tyre {
	private String brand;

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	@Override
	public String toString() {
		return "It's Working....";
	}
	
}