package com.wangFa.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping("/home")
    public String sayHello() {
        return "index";
    }
}
