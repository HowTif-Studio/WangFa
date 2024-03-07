package com.wangFa.Service.Impl;

import com.wangFa.Dao.ProductDaoImpl;
import com.wangFa.Model.Product;
import com.wangFa.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDaoImpl productDao;

    @Override
    public List<Product> getAllProducts() {
        List<Product> productList = productDao.getAllProducts();
        return productList;
    }

    @Override
    public Product getProductById(int id) {
        return null;
    }

    @Override
    public Product addProduct(Product product) {
        return null;
    }

    @Override
    public int updateProduct(Product product) {
        return 0;
    }

    @Override
    public int deleteProduct(int productId) {
        return 0;
    }
}
