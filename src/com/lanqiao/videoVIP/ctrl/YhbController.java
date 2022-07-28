package com.lanqiao.videoVIP.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lanqiao.videoVIP.entity.Yhb;
import com.lanqiao.videoVIP.service.YhbService;

@Controller
@RequestMapping("YhbController")
public class YhbController {
	@Autowired
	private YhbService yhbService;

	/** 新增用户 */
	@RequestMapping("add.do")
	@ResponseBody
	public boolean add(Yhb yhb) {
		return yhbService.add(yhb);
	}

	/** 删除用户 */
	@RequestMapping("deleteById.do")
	@ResponseBody
	public boolean deleteById(String yhzh) {
		return yhbService.deleteById(yhzh);
	}

	/** 更新用户 */
	@RequestMapping("update.do")
	@ResponseBody
	private boolean update(Yhb yhb) {
		return yhbService.update(yhb);
	}

	/** 更新用户头像 */
	@RequestMapping("updateYhtx.do")
	@ResponseBody
	private boolean updateYhtx(Yhb yhb) {
		return yhbService.update(yhb);
	}

	/** 通过ID查询用户 */
	@RequestMapping("selectById.do")
	@ResponseBody
	public Yhb selectById(String yhzh) {
		return yhbService.selectById(yhzh);
	}

	/** 通过对象查询用户 */
	@RequestMapping("selectByObj.do")
	@ResponseBody
	public Yhb selectByObj(Yhb obj) {
		return yhbService.selectByObj(obj);
	}

	/** 模糊查询用户 */
	@RequestMapping("mhselectSql.do")
	@ResponseBody
	public List<Yhb> mhselectSql(Yhb yhb) {
		return (List<Yhb>) yhbService.mhselectSql(yhb);
	}

	/** 查询用户 */
	@RequestMapping("list.do")
	@ResponseBody
	public List<Yhb> list(Yhb yhb) {
		return yhbService.list(yhb);
	}

	/** 查询用户是否存在 */
	@RequestMapping("isExists.do")
	@ResponseBody
	public boolean isExists(String yhzh) {
		return yhbService.isExists(yhzh);
	}

}
