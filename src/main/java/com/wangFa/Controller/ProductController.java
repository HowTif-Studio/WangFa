package com.wangFa.Controller;

import com.wangFa.Model.Product;
import com.wangFa.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @RequestMapping(value = { "/product"}, method = RequestMethod.GET)
    public List<Product> getAllProduct() {
        List<Product> productList = productService.getAllProducts();
        return productList;
    }

    @RequestMapping(value = { "/product/{id}"}, method = RequestMethod.GET)
    public Product getProductById(@PathVariable("id") int id) {
        Product product = productService.getProductById(id);
        return product;
    }

    @RequestMapping(value = { "/product"}, method = RequestMethod.POST)
    public Product addProduct(@RequestBody Product product) {
        Product result = productService.addProduct(product);
        return result;
    }

    @RequestMapping(value = { "/product"}, method = RequestMethod.PUT)
    public boolean updateProduct(@RequestBody Product product) {
        int updateCount = productService.updateProduct(product);
        boolean result = false;
        if(updateCount > 0){
            result = true;
        } else {
            System.out.println("Cannot find Product(id): " + product.getId() + "to update.");
        }
        return result;
    }

    @RequestMapping(value = { "/product/{id}"}, method = RequestMethod.DELETE)
    public boolean deleteProduct(@PathVariable("id") int id) {
        int deleteCount = productService.deleteProduct(id);
        boolean result = false;
        if(deleteCount > 0){
            result = true;
        }
        return result;
    }

}
