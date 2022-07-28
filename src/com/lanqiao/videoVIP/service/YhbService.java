package com.lanqiao.videoVIP.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanqiao.videoVIP.entity.Yhb;
import com.lanqiao.videoVIP.mapper.YhbMapper;

@Service
public class YhbService {
	@Autowired
	private YhbMapper yhbMapper;

	public boolean add(Yhb yhb) {
		return yhbMapper.add(yhb);
	}

	public boolean deleteById(String yhzh) {
		return yhbMapper.deleteById(yhzh);
	}

	public boolean update(Yhb yhb) {
		return yhbMapper.update(yhb);
	}

	public boolean updateYhtx(Yhb yhb) {
		return yhbMapper.updateYhtx(yhb);
	}

	public Yhb selectById(String yhzh) {
		return yhbMapper.selectById(yhzh);
	}

	public Yhb selectByObj(Yhb obj) {
		return yhbMapper.selectByObj(obj);
	}
	
	public List<Yhb> mhselectSql(Yhb yhb) {
		return yhbMapper.mhselectSql(yhb);
	}

	public List<Yhb> list(Yhb user) {
		List<Yhb> list = yhbMapper.list(user);
		return list;
	}

	public boolean isExists(String yhzh) {
		return yhbMapper.isExists(yhzh) != null;
	}
}
