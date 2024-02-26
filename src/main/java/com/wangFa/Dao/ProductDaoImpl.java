package com.wangFa.Dao;

import com.wangFa.Model.Product;
import com.wangFa.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;


@Repository
public class ProductDaoImpl implements ProductDoa {


    @Autowired
    private DataSource dataSource;
    @Autowired
    private JdbcTemplate jdbcTemplate;


    public Product CreateProduct(Product product) {
        String sqlCreat = " insert into wangfa_db.product " +
                "(id, productname, size, traits, des, product_pic, spec_picture)"
                + " values " +
                "(product.setId() ,product.setproduct() ,product.setsize(), product.settraits(), product.setdes(), product.setproduct_pic(),product.setspec_pic() ) ";


        Product resultCreat = this.jdbcTemplate.queryForObject(sqlCreat, new BeanPropertyRowMapper<Product>(Product.class));


        if (resultCreat != null) {
            System.out.println(resultCreat);
            return resultCreat;
        } else {
            return null;
        }
    }

    public String ReadProductId(Integer id) {
        String sqlfind = " SELECT "
                + "	id "
                + " FROM "
                + "	wangfa_db.product "
                + " WHERE "
                + " id = ? ";

        Product result = this.jdbcTemplate.queryForObject(sqlfind, new BeanPropertyRowMapper<Product>(Product.class), id);


        if (result != null) {
            System.out.println(result.getProductname());
            return "ID found";
        }
            return null;

        }

        public int UpdateProduct (Product product){
            String sqlUpdate = " UPDATE wangfa_db.product "
                    + " SET "
                    + "id = ?, productname = ?, size = ?, traits = ?, des = ?, product_pic = ?, spec_picture = ?"
                    + " WHERE "
                    + " (product.getId() ,product.getproduct() ,product.getsize(), product.gettraits(), product.getdes(), product.getproduct_pic(),product.getspec_picture()  ";

            int Updatesuccess = this.jdbcTemplate.update(sqlUpdate);

            return Updatesuccess;

        }

        public int DeleteProduct(Integer id) {
            return jdbcTemplate.update(
                    "delete from product where id =?", id);
        }

}