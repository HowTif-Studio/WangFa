package com.wangFa.Service;

import net.sf.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpServletRequest;
import java.io.File;

@Component
public class UploadFile {
    public JSONObject uploadImgFile(HttpServletRequest request,String filePath ,MultipartFile file) {

        // 獲取完整的文件名
        String trueFileName = file.getOriginalFilename();
        // 獲取副檔名
        String suffix = trueFileName.substring(trueFileName.lastIndexOf("."));
        // 生成新文件的名字，時間 編號 副檔名
        String fileName = System.currentTimeMillis() + "_" + getRandomNumber(1, 999) + suffix;
        // 獲取項目地址
        String itemPath = getItemPath(request);

        // 判斷當前要上傳的路徑是否存在
        File targetFile = new File(filePath, fileName);
        if (!targetFile.exists()) {
            targetFile.getParentFile().mkdirs();
        }

        //保存文件
        try {
            file.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
        }

        JSONObject res = new JSONObject();
        // 圖片上傳後地址
        res.put("url", itemPath + fileName); ///圖片地址和上傳後的文件名
        // 圖片上傳的狀態 1成功0失敗
        res.put("success", 1);
        // 圖片上傳回傳的信息
        res.put("message", "upload success!");

        return res;
    }

    private String getRandomNumber(int min, int max) {
        return String.valueOf((int)(Math.random() * (max - min + 1)) + min);
    }

    private String getItemPath(HttpServletRequest request) {
        // 在此實現獲取項目地址的邏輯，例如：
        // return request.getSession().getServletContext().getRealPath("/");
        return "";
    }
}
