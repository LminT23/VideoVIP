package com.lanqiao.videoVIP.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lanqiao.videoVIP.entity.Spb;
import com.lanqiao.videoVIP.mapper.SpbMapper;
import com.lanqiao.videoVIP.util.UUIDUtil;

@Service
public class SpbService {

	@Autowired
	private SpbMapper spbMapper;

	public String add(Spb spb) {
		spb.setSpid(UUIDUtil.getUUID());
		spb.setBfnum("0");
		spbMapper.add(spb);
		String spid = spb.getSpid();
		return spid;
	}
	
	/*public Serializable addSpid(Spb spb) {
		spb.setSpid(UUIDUtil.getUUID());
		spb.setSpsj(DateUtil.getNow());
		return spbMapper.addSpid(spb);
	}*/

	public boolean deleteById(Serializable spid) {
		return spbMapper.deleteById(spid);
	}

	public boolean update(Spb spb) {
		return spbMapper.update(spb);
	}

	public boolean updateSpfm(Spb spb) {
		return spbMapper.updateSpfm(spb);
	}

	public boolean updateBfnum(Spb spb) {
		return spbMapper.updateBfnum(spb);
	}
	
	public Spb selectById(Serializable spid) {
		return spbMapper.selectById(spid);
	}

	public List<Spb> listByType(Serializable splx) {
		List<Spb> list = spbMapper.listByType(splx);
		return list;
	}
	
	public List<Spb> list(Spb sp) {
		List<Spb> list = spbMapper.list(sp);
		/*for (Spb spb : list) {
			String spsj = spb.getSpsj();
			spsj = DateUtil.dateFmt(spsj, DateUtil.DATE_YMDHMS1, DateUtil.DATE_YMDHMS2);
			spb.setSpsj(spsj);
		}*/
		return list;
	}
}
