package com.wangFa.Controller;

import com.wangFa.Dao.UserDao;
import com.wangFa.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class PageController {
    @GetMapping("/home")
    public String sayHello() {
        return "index";
    }

}
