package com.lanqiao.videoVIP.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanqiao.videoVIP.entity.Gklsb;
import com.lanqiao.videoVIP.mapper.GklsbMapper;


@Service
public class GklsbService {
	@Autowired
	private GklsbMapper gklsbMapper ;
	
	public boolean add(Gklsb gklsb) {
		return gklsbMapper.add(gklsb);
	}
	
	public boolean deleteByAll(Serializable yhzh) {
		return gklsbMapper.deleteByAll(yhzh);
	}
	
	public boolean deleteById(Serializable id) {
		return gklsbMapper.deleteById(id);
	}
	
	public boolean update(Gklsb gklsb) {
		return gklsbMapper.update(gklsb);
	}
		
	public boolean selectById(Serializable yhzh) {
		return gklsbMapper.selectById(yhzh)!=null;
	}
	
	public boolean selectByObj(Gklsb gklsb) {
		return gklsbMapper.selectByObj(gklsb)!=null;
	}
	public boolean deleteByIObj(Gklsb gklsb) {
		return gklsbMapper.deleteByIObj(gklsb);
	}
		
	public List<Gklsb> list(Gklsb user){
		List<Gklsb> list = gklsbMapper.list(user);
		return list;
	}
	
}
