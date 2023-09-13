package com.edtex.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class App 
{
    public static void main( String[] args )
    {
    	//application context is an interface 
    	//ClassPathXmlAPplicationCOntext is a method for creating object
    	
    	ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
    	
    	car car1 = (car)context.getBean("car");
    	car1.drive();
    	
//    	tyre t = (tyre)context.getBean("tyre"); //Here vehicle is just a keyword and we need to specify what vehicle is
//    	System.out.println(t);
    }
}
