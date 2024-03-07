package com.wangFa.Dao;

import com.wangFa.Model.Product;

import java.util.List;


public interface ProductDao {

    public Product CreateProduct(Product product) ;

    public String ReadProductId(Integer id);

    List<Product> getAllProducts();

    public int UpdateProduct(Product product);

    public int DeleteProduct(Integer id);

}
