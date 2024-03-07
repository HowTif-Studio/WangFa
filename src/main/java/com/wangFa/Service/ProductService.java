package com.wangFa.Service;


import com.wangFa.Model.Product;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();

    Product getProductById(int id);

    Product addProduct(Product product);

    int updateProduct(Product product);

    int deleteProduct(int productId);

}
