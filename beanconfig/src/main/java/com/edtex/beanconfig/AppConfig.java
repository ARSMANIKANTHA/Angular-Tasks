package com.edtex.beanconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
public class AppConfig {
	@Bean
    public Samsung collegeBean()
    {
        return new Samsung();
    }
	
}
  