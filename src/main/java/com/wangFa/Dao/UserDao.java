package com.wangFa.Dao;

import com.wangFa.Model.User;
import jakarta.annotation.Resource;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import java.util.List;



@Repository
public class UserDao {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public String findByUsername(String username , String password){

        // 找帳號密碼
        String sql = " SELECT "
                + "	username ,password "
                + " FROM "
                + "	wangfa_db.user "
                + " WHERE "
                + "username = ? and password = ?"; // 指定查詢條件

        // 使用 JdbcTemplate 的 query 方法執行查詢
        // 第一個參數是 SQL 查詢語句
        // 創建一個 BeanPropertyRowMapper 物件，將資料庫查詢出來的數據，轉換成是 Java object
        // SQL 查詢中的參數，用於指定查詢條件

        List<User> result = this.jdbcTemplate.query
                (sql, new BeanPropertyRowMapper<User>(User.class),  username,password );

        // 如果查詢結果非空，返回 Login Success，否則返回 null
        if(result != null && !result.isEmpty()) {
            System.out.println(result.get(0).getusername());
            return "Login Success";
        }
        return null;
    }

}
