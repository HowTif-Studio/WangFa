package com.wangFa.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ImagesUploadConfig implements WebMvcConfigurer {
    // 取得圖片真實路徑
    @Value("${file.upload.path}")
    private String filePath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 將讀取圖片路徑 /image/** 映射到真實的圖片存放路徑上
        registry.addResourceHandler("/image/**").addResourceLocations("file:"+filePath);
    }
}

