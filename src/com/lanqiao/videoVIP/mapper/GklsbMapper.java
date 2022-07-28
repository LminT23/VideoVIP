package com.lanqiao.videoVIP.mapper;

import java.io.Serializable;
import java.util.List;

import org.apache.ibatis.annotations.CacheNamespace;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;

import com.lanqiao.videoVIP.entity.Gklsb;


@CacheNamespace
public interface GklsbMapper {
	
	/** 新增观看历史 */
	@Insert("insert into Gklsb(yhzh,gkls,gksj,spid) values(#{yhzh},#{gkls},#{gksj},#{spid})")
	boolean add(Gklsb gklsb);
	
	/** 删除全部历史记录 */
	@Delete("delete from Gklsb where yhzh = #{yhzh}")
	boolean deleteByAll(Serializable yhzh);
	
	/** 删除一条历史记录 */
	@Delete("delete from Gklsb where spid = #{spid}")
	boolean deleteById(Serializable id);
	
	/** 删除一条历史记录 */
	@Delete("delete from Gklsb where spid = #{spid} and yhzh=#{yhzh}")
	boolean deleteByIObj(Gklsb gklsb);
	
	@Update("update Gklsb set gksj = #{gksj},spid = #{spid},gkls = #{gkls} where yhzh = #{yhzh}")
	boolean update(Gklsb gklsb);
		
	@Select("select yhzh,gkls,gksj,spid from Gklsb where yhzh = #{yhzh}")
	Gklsb selectById(Serializable yhzh);
		
	@Select("select yhzh,gkls,gksj,spid from Gklsb where yhzh = #{yhzh} and spid=#{spid}")
	Gklsb selectByObj(Gklsb gklsb);
	
	@SelectProvider(type=GklsbProvider.class, method="getListSql")
	List<Gklsb> list(Gklsb user);
	
}
