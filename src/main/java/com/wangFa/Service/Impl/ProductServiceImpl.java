package com.wangFa.Service.Impl;

import com.wangFa.Dao.Impl.ProductDaoImpl;
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
        Product Product = productDao.getProductById(id);
        return Product;
    }

    @Override
    public String addProduct(Product product) {
        String Product = productDao.addProduct(product);
        return Product;
    }

    @Override
    public int updateProduct(Product product) {
        int Product = productDao.updateProduct(product);
        return Product;
    }

    @Override
    public int deleteProduct(int id) {
        int Product = productDao.deleteProduct(id);
        return Product;
    }
}
