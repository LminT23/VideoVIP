package com.lanqiao.videoVIP.ctrl;

import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.lanqiao.videoVIP.entity.Spb;
import com.lanqiao.videoVIP.service.SpbService;
import com.lanqiao.videoVIP.util.UUIDUtil;

@Controller
@RequestMapping("SpfmFileUploadController")
public class SpfmFileUploadController {
	@Autowired
	private SpbService spbService;
	
	/** 上传视频封面*/
	@RequestMapping("uploadSpfm.do")
	@ResponseBody
	public String uploadSpfm(MultipartFile spfm,String spid) throws IOException{
		String fileName = null;
		//限制只上传图片文件			
		if(!spfm.isEmpty() && null != ImageIO.read(spfm.getInputStream())){
			// 获取文件名
			fileName = spfm.getOriginalFilename();
			System.out.println(fileName);
			// 设置 文件新的名字
			fileName = UUIDUtil.getUUID() + fileName.substring(fileName.lastIndexOf("."));
			
			// 上传图片到 c:/upload/spfm
			File targetFile = new File("c:/upload/spfm", fileName);
			targetFile.createNewFile();
			spfm.transferTo(targetFile);
			
			// 将 图片名 保存到数据库
			Spb sp = new Spb();
			sp.setSpid(spid);
			sp.setSpfm(fileName);
			boolean ret = spbService.updateSpfm(sp);
			if(ret == false) {
				fileName = null;//更新失败，返回空信息
			}
		}
		return fileName;
	}
}
