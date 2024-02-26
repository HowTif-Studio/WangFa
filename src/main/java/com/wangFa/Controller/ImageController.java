package com.wangFa.Controller;

import com.wangFa.Model.User;
import com.wangFa.Service.ImageService;
import com.wangFa.Service.UploadFile;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


@RestController
public class ImageController {

    @Autowired
    ImageService imageService;

    @RequestMapping(value = {"/image/{filename:.+}"}, produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getFilename(@PathVariable String filename) throws IOException {
        imageService.getImage();
        return imageService.getImage();
        }


    @Autowired
    UploadFile uploadFile;

    @RequestMapping(value = {"/upload"}, method = RequestMethod.POST)
    public JSONObject uploadImg(HttpServletRequest request,String filePath ,MultipartFile file) {
        return uploadFile.uploadImgFile(request, filePath, file);
    }
}


