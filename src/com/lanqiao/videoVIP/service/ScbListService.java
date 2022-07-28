package com.lanqiao.videoVIP.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanqiao.videoVIP.mapper.ScbListMapper;
import com.lanqiao.videoVIP.entity.ScbList;

@Service
public class ScbListService {
	@Autowired
	private ScbListMapper scbListMapper;
	
	public List<ScbList> list(String yhzh) {
		List<ScbList> list = scbListMapper.list(yhzh);
		return list;
	}
	
	public List<ScbList> list2(ScbList scbList) {
		List<ScbList> list = scbListMapper.list2(scbList);
		return list;
	}
	
}
