package com.lanqiao.videoVIP.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lanqiao.videoVIP.entity.Glyb;
import com.lanqiao.videoVIP.service.GlybService;

@Controller
@RequestMapping("GlybController")
public class GlybController {
	@Autowired
	private GlybService glybService;

	/** 增加 */
	@RequestMapping("add.do")
	@ResponseBody
	public boolean add(Glyb glyb) {
		return glybService.add(glyb);
	}

	/** 通过账号删除 */
	@RequestMapping("deleteById.do")
	@ResponseBody
	public boolean deleteById(String glyzh) {
		return glybService.deleteById(glyzh);
	}

	/** 修改 */
	@RequestMapping("update.do")
	@ResponseBody
	public boolean update(Glyb glyb) {
		return glybService.update(glyb);
	}

	/** 查询密码 */
	@RequestMapping("selectById.do")
	@ResponseBody
	public Glyb selectById(String glyzh) {
		return glybService.selectById(glyzh);
	}

	/** 查询管理员列表 */
	@RequestMapping("list.do")
	@ResponseBody
	public List<Glyb> list(Glyb glyb) {
		return glybService.list(glyb);
	}

	/** 查询密码 */
	@RequestMapping("doGlyLogin.do")
	@ResponseBody
	public Glyb doGlyLogin(Glyb obj) {
		return glybService.selectByObj(obj);
	}

}
