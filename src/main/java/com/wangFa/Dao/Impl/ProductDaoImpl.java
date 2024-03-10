package com.wangFa.Dao.Impl;

import com.wangFa.Dao.ProductDao;
import com.wangFa.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;


@Repository
public class ProductDaoImpl implements ProductDao {


    @Autowired
    private DataSource dataSource;
    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public List<Product> getAllProducts() {
        String sqlfind = " SELECT id, des, product_pic, productname, size, spec_pic, traits, priority FROM product order by priority";
        List<Product> result = jdbcTemplate.query(sqlfind, new BeanPropertyRowMapper<Product>(Product.class));

        return result;
    }

    @Override
    public Product getProductById(int id) {
        String sqlfind = " SELECT id, des, product_pic, productname, size, spec_pic, traits, priority " +
                "FROM product" +
                " WHERE id = " +
                id;
        Product result = jdbcTemplate.queryForObject(sqlfind, new BeanPropertyRowMapper<>(Product.class));
        return result;
    }

    @Override
    public String addProduct(Product product) {
        String sqlCreat = " insert into product " +
                "(productname, size, traits, des, product_pic, spec_pic, priority)"
                + " values (?, ?, ?, ?, ?, ?, ?)";

        int resultCreat = this.jdbcTemplate.update(sqlCreat, product.getProductname() ,product.getSize(), product.getTraits(), product.getDes(), product.getProduct_pic(), product.getSpec_pic(), product.getPriority());

        if (resultCreat != 0) {
            System.out.println(resultCreat);
            return "success";
        } else {
            return "false";
        }
    }

    @Override
    public int deleteProduct(int id) {
        String sql = "DELETE FROM product WHERE id=" + id;
        int result = jdbcTemplate.update(sql);
        return result;
        }

    @Override
    public int updateProduct ( Product product ){
        String sqlUpdate = " UPDATE product "
                + " SET "
                + "productname = ?, size = ?, traits = ?, des = ?, product_pic = ?, spec_pic = ?, priority = ?"
                + " WHERE id = ? " ;

        int Updatesuccess = this.jdbcTemplate.update(sqlUpdate, product.getProductname(), product.getSize(), product.getTraits(), product.getDes(), product.getProduct_pic(), product.getSpec_pic(), product.getPriority(), product.getId());
        return Updatesuccess;

    }
}