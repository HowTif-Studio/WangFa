package com.wangFa.Dao;

import com.wangFa.Model.Product;
import org.hibernate.annotations.Comment;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProductDoa {

    public int CreateProduct(Product product) ;

    public Product findProductId(String id);

    public int UpdateProduct();

    public int DeleteProduct(String id);

}
