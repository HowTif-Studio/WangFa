package com.wangFa.Controller;

import com.wangFa.Dao.ProductDaoImpl;
import com.wangFa.Dao.UserDao;
import com.wangFa.Model.Product;
import com.wangFa.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    @Autowired
    UserDao userDao;
    @RequestMapping(value = { "/login"}, method = RequestMethod.POST)
    public String login(@RequestBody User user) {
        userDao.findByUsername(user.getusername() , user.getpassword());
        return "User";
    }

    @Autowired
    ProductDaoImpl productDaoImpl;
    @RequestMapping(value = { "/product"}, method = RequestMethod.POST)
    public String product(@RequestBody Product product) {
//        productDaoImpl.CreateProduct()
        return "product";
    }
}
