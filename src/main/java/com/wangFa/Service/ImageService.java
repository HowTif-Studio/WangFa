package com.wangFa.Service;


//import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import org.apache.commons.io.IOUtils; //？？？


import org.springframework.core.io.Resource;


import java.io.File;
import java.io.IOException;
import java.io.InputStream;


@Component
public class ImageService {

    @Value("classpath:/image/circle_1.png")
    private Resource resource;

    @Autowired
    private ResourceLoader resourceLoader;

    public byte[] getImage() throws IOException {

//        ClassPathResource classPathResource = new ClassPathResource("*.jpg");
//        InputStream inputStream =classPathResource.getInputStream();

        Resource resource = (Resource) new ClassPathResource("/image/circle_1.png");
        File file = resource.getFile();
        printFileInfo(file);

        InputStream in = resource.getInputStream();

        return IOUtils.toByteArray(in);
    }

    private void printFileInfo(File file) {
        System.out.println(file.canRead());
        System.out.println(file.getName()); // spring.png （檔案名稱）
        System.out.println(file.getPath()); // /Users/.../workspace/demo/target/classes/static/spring.png （檔案系統的路徑）
        System.out.println(file.length()); // 21113 （檔案大小21113bytes）
    }

    }



