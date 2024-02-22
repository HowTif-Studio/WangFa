package com.wangFa.Dao;

import com.wangFa.Model.Product;
import com.wangFa.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;


@Repository
public class ProductDaoImpl implements ProductDoa {


    @Autowired
    private DataSource dataSource;

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public int CreateProduct(Product product) {
        String sql = " insert into wangfa_db.product " +
                "(id, productname, size, traits, des, product_pic, spec_picture)"
                + " values " +
                "(product.setId() ,product.setproduct() ,product.setsize(), product.settraits(), product.setdes(), product.setproduct_pic(),product.setspec_picture() ) ";

        return jdbcTemplate.update(sql);
    }

    public Product findProductId(String id){
        String sql = " SELECT "
                + "	id "
                + " FROM "
                + "	wangfa_db.product "
                + " WHERE "
                + " id = ? ";

        return jdbcTemplate.queryForObject
                (sql,new BeanPropertyRowMapper<Product>(Product.class), id); // ???
    }

    public int UpdateProduct(){
        String sql = " UPDATE wangfa_db.product "
                + " SET "
                + "id = ?, productname = ?, size = ?, traits = ?, des = ?, product_pic = ?, spec_picture = ?"
                + " WHERE "
                + " (product.getId() ,product.getproduct() ,product.getsize(), product.gettraits(), product.getdes(), product.getproduct_pic(),product.getspec_picture()  ";

        return jdbcTemplate.update(sql);

    }

    public int DeleteProduct(String id){
        return jdbcTemplate.update(
                "delete from product where id =?", id);
    }

}
