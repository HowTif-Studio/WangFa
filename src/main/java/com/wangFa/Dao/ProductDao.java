package com.wangFa.Dao;

import com.wangFa.Model.Product;

import java.util.List;


public interface ProductDao {

    List<Product> getAllProducts();

    Product getProductById(int id);

    String addProduct(Product product);

    int updateProduct(Product product);

    int deleteProduct(int id);

}
