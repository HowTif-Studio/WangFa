package com.wangFa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class WangFaApplication {
    public static void main(String[] args) {
        System.out.printf("Hello and welcome!");
        SpringApplication.run(WangFaApplication.class, args);
    }
}
