package com.wangFa.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


import java.io.File;
import java.io.IOException;
import java.util.UUID;

import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;

@Component
public class UploadFile{

    @Value("${file.upload.path}")
    private String filePath;

    public String uploadImgFile(MultipartFile file) {

        // 取得上傳圖片名稱
        String filename = file.getOriginalFilename();
        // 取得上傳圖片副檔名
        String suffixName = filename.substring(filename.lastIndexOf("."));
        // 定義路徑
        String path = filePath;
        // 新檔名
//        String newImgName = UUID.randomUUID().toString() + suffixName;
        String newImgName = System.currentTimeMillis()+suffixName;


        // 新增一個 File 用於判斷路徑是否存在
        File filepath = new File(path, newImgName);

        // 判斷路徑是否存在，如果不存在就建立新的路徑
        if (!filepath.getParentFile().exists()) {
            filepath.getParentFile().mkdirs();
        }
        try {
            // 將上傳的圖片，存在 path 底下
            file.transferTo(new File(path + File.separator + newImgName));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "/image/" + newImgName;

    }
}
