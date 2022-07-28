package com.lanqiao.videoVIP.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lanqiao.videoVIP.entity.Yhb;
import com.lanqiao.videoVIP.service.YhbService;

@Controller
@RequestMapping("RegisterController")
public class RegisterController {
	@Autowired
	private YhbService yhbService;
	
	@RequestMapping("register.do")
	@ResponseBody
	public boolean register(Yhb yhb) {
		return yhbService.add(yhb);
	}
}
