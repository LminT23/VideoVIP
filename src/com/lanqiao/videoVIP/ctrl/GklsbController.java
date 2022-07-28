package com.lanqiao.videoVIP.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lanqiao.videoVIP.entity.Gklsb;
import com.lanqiao.videoVIP.service.GklsbService;

@Controller
@RequestMapping("GklsbController")
public class GklsbController {
	@Autowired
	private GklsbService gklsbService;

	/** 新增历史记录*/
	@RequestMapping("add.do")
	@ResponseBody
	public boolean add(Gklsb gklsb){
		return gklsbService.add(gklsb);
	}

	/** 删除全部历史记录*/
	@RequestMapping("deleteByAll.do")
	@ResponseBody
	public boolean deleteByAll(String yhzh){
		return gklsbService.deleteByAll(yhzh);
	}
	
	/** 删除一条历史记录*/
	@RequestMapping("deleteById.do")
	@ResponseBody
	public boolean deleteById(String gklsb){
		return gklsbService.deleteById(gklsb);
	}
	
	/** 删除一条历史记录*/
	@RequestMapping("deleteByObj.do")
	@ResponseBody
	public boolean deleteByIObj(Gklsb gklsb){
		return gklsbService.deleteByIObj(gklsb);
	}
	
	/** 更新*/
	@RequestMapping("update.do")
	@ResponseBody
	private boolean update(Gklsb gklsb){
		return gklsbService.update(gklsb);
	}
	
	/** 查询一个 */
	@RequestMapping("selectById.do")
	@ResponseBody
	public boolean selectById(String yhzh) {
		return gklsbService.selectById(yhzh);
	}
	
	/** 查询一个 */
	@RequestMapping("selectByObj.do")
	@ResponseBody
	public boolean selectById(Gklsb gklsb) {
		return gklsbService.selectByObj(gklsb);
	}
		
	/** 查询全部 */
	@RequestMapping("list.do")
	@ResponseBody
	public List<Gklsb> list(Gklsb gklsb){
		return gklsbService.list(gklsb);
	}
	
}
