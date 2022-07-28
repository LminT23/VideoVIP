package com.lanqiao.videoVIP.ctrl;

import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.lanqiao.videoVIP.entity.Yhb;
import com.lanqiao.videoVIP.service.YhbService;
import com.lanqiao.videoVIP.util.UUIDUtil;

@Controller
@RequestMapping("FileUploadController")
public class FileUploadController {
	@Autowired
	private YhbService yhbService;
	
	/** 上传用户头像*/
	@RequestMapping("uploadYhtx.do")
	@ResponseBody
	public String uploadYhtx(MultipartFile yhtx,String yhzh) throws IOException{
		String fileName = null;
		//限制只上传图片文件			
				if(!yhtx.isEmpty() && null != ImageIO.read(yhtx.getInputStream())){
					// 获取文件名
					fileName = yhtx.getOriginalFilename();
					System.out.println(fileName);
					// 设置 文件新的名字
					fileName = UUIDUtil.getUUID() + fileName.substring(fileName.lastIndexOf("."));
					
					// 上传图片到 c:/upload
					File targetFile = new File("c:/upload/yhtx", fileName);
					targetFile.createNewFile();
					yhtx.transferTo(targetFile);
					
					// 将 图片名 保存到数据库
					Yhb user = new Yhb();
					user.setYhzh(yhzh);
					user.setYhtx(fileName);
					boolean ret = yhbService.updateYhtx(user);
					if(ret == false) {
						fileName = null;//更新失败，返回空信息
					}
				}
		return fileName;
	}
}
