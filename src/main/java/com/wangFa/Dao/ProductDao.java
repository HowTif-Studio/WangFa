package com.wangFa.Dao;

import com.wangFa.Model.Product;


public interface ProductDao {

    public Product CreateProduct(Product product) ;

    public String ReadProductId(Integer id);

    public int UpdateProduct(Product product);

    public int DeleteProduct(Integer id);

}
