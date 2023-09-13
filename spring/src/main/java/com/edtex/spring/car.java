package com.edtex.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class car implements vehicle{
	@Autowired
	private tyre tyre;
	
	public void drive()
	{
		System.out.println("car " + tyre);
	}
}
 