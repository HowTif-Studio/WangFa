package com.wangFa.Dao;

import com.wangFa.Model.Product;
import org.hibernate.annotations.Comment;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProductDoa {

    public Product CreateProduct(Product product) ;

    public String ReadProductId(Integer id);

    public int UpdateProduct(Product product);

    public int DeleteProduct(Integer id);

}
