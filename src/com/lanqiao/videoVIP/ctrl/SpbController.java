package com.lanqiao.videoVIP.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lanqiao.videoVIP.entity.Spb;
import com.lanqiao.videoVIP.service.SpbService;

@Controller
@RequestMapping("SpbController")
public class SpbController {
	
	@Autowired
	private SpbService spbService;
	
	/** 上传视频*/
	@RequestMapping("add.do")
	@ResponseBody
	public String add(Spb spb) {
		return spbService.add(spb);
	}
	
	/** 上传视频*/
	/*@RequestMapping("addSpid.do")
	@ResponseBody
	public Serializable addSpid(Spb spb) {
		return spbService.addSpid(spb);
	}*/
	
	/** 删除视频*/
	@RequestMapping("deleteById.do")
	@ResponseBody
	public boolean deleteById(String spid) {
		return spbService.deleteById(spid);
	}
	
	/** 更改视频信息*/
	@RequestMapping("update.do")
	@ResponseBody
	public boolean update(Spb spb) {
		return spbService.update(spb);
	}
	
	/** 更改视频封面*/
	@RequestMapping("updateSpfm.do")
	@ResponseBody
	public boolean updateSpfm(Spb spb) {
		return spbService.updateSpfm(spb);
	}
	
	/** 更改视频播放数*/
	@RequestMapping("updateBfnum.do")
	@ResponseBody
	public boolean updateBfnum(Spb spb) {
		return spbService.updateBfnum(spb);
	}
	
	/** 通过spid查询视频*/
	@RequestMapping("selectById.do")
	@ResponseBody
	public Spb selectById(String spid) {
		return spbService.selectById(spid);
	}
	
	/** 通过类型查询视频表 */
	@RequestMapping("listByType.do")
	@ResponseBody
	public List<Spb> listByType(String splx){
		return spbService.listByType(splx);
	}
	
	/** 查询视频表 */
	@RequestMapping("list.do")
	@ResponseBody
	public List<Spb> list(Spb sp){
		return spbService.list(sp);
	}
}
