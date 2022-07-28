package com.lanqiao.videoVIP.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import com.lanqiao.videoVIP.entity.ScbList;

public interface ScbListMapper {
		
	@Select("SELECT sc.yhzh,sp.* from spb sp,scb sc WHERE sp.spid = sc.spid and sc.yhzh = #{yhzh}")
	List<ScbList> list(String yhzh);
	
	@Select("SELECT sc.yhzh,sp.* from spb sp,scb sc WHERE sp.spid = sc.spid and sc.yhzh = #{yhzh} and sp.splx = #{splx}")
	List<ScbList> list2(ScbList scbList);
	
}
