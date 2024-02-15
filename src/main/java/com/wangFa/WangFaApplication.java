package com.wangFa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WangFaApplication {
    public static void main(String[] args) {
        System.out.printf("Hello and welcome!");
        SpringApplication.run(WangFaApplication.class, args);
    }
}
