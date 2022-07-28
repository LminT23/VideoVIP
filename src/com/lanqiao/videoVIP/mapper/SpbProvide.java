package com.lanqiao.videoVIP.mapper;

import com.lanqiao.videoVIP.entity.Spb;
import com.lanqiao.videoVIP.util.StrUtil;

public class SpbProvide {
	public String getListSql(Spb sp) {
		StringBuffer sql = new StringBuffer("select spid,sppm,spfm,splx,spdq,spsj,spjj,bfnum,spdz from spb where 1=1 ");
		
		if (null != sp) {
			if(StrUtil.isNotEmpty(sp.getSpid())) {
				sql.append(" and spid like concat('%',#{spid},'%') ");
				
			}
			if(StrUtil.isNotEmpty(sp.getSppm())) {
				sql.append(" and sppm like concat('%',#{sppm},'%') ");
				
			}
			if(StrUtil.isNotEmpty(sp.getSpfm())) {
				sql.append(" and sjh spfm concat('%',#{spfm},'%') ");
				
			}
			if(StrUtil.isNotEmpty(sp.getSplx())) {
				sql.append(" and splx = #{splx} ");
				
			}
			if(StrUtil.isNotEmpty(sp.getSpdq())) {
				sql.append(" and spdq = #{spdq} ");
				
			}
			if(StrUtil.isNotEmpty(sp.getSpsj())) {
				sql.append(" and spsj like concat('%',#{spsj},'%') ");
			}
			if(StrUtil.isNotEmpty(sp.getSpjj())) {
				sql.append(" and spjj like concat('%',#{spjj},'%') ");
			}
			if(StrUtil.isNotEmpty(sp.getBfnum())) {
				sql.append(" and bfnum like concat('%',#{bfnum},'%') ");
			}
			if(StrUtil.isNotEmpty(sp.getSpdz())) {
				sql.append(" and spdz like concat('%',#{spdz},'%') ");
			}
		}
		sql.append(" order by LENGTH(bfnum) desc,bfnum desc ");
		return sql.toString();
	}
}
