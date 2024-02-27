package com.wangFa.Dao;

import com.wangFa.Model.Product;
import org.springframework.stereotype.Repository;



@Repository
public interface ImageDao {

    // insertToMySQL 用於向 MySQL 數據庫插入圖片名稱和圖片數據
    public boolean insertToMySQL(String imageName, byte[] imageData);

    // queryById 用於根據圖片 ID 查詢相關的產品。
    public Product queryById(int id);
}
