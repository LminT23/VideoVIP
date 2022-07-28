package com.lanqiao.videoVIP.mapper;

import java.util.List;

import org.apache.ibatis.annotations.CacheNamespace;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.UpdateProvider;

import com.lanqiao.videoVIP.entity.Yhb;

@CacheNamespace
public interface YhbMapper {

	/** 增加 */
	@Insert("insert into yhb(yhzh,pwd,yhnc,yhzt) values(#{yhzh},#{pwd},#{yhnc},#{yhzt})")
	boolean add(Yhb yhb);

	/** 删除 */
	@Delete("delete from yhb where yhzh = #{yhzh}")
	boolean deleteById(String yhzh);

	/** 动态更新 */
	@UpdateProvider(type = YhbProvider.class, method = "getUpdateSql")
	boolean update(Yhb yhb);

	/** 更新头像 */
	@Update("update yhb set yhtx = #{yhtx} where yhzh = #{yhzh}")
	boolean updateYhtx(Yhb yhb);

	/** 通过用户账号查询 */
	@Select("select yhzh,pwd,yhnc,yhtx,yhzt from yhb where yhzh = #{yhzh}")
	Yhb selectById(String yhzh);

	/** 比对账号密码查询 */
	@Select("select yhzh,pwd,yhnc,yhtx,yhzt from yhb where yhzh = #{yhzh} and pwd = #{pwd}")
	Yhb selectByObj(Yhb obj);

	/** 动态查询，模糊查询 */
	@SelectProvider(type = YhbProvider.class, method = "getListSql")
	List<Yhb> list(Yhb user);
	
	/** 动态查询，模糊查询2 */
	@SelectProvider(type = YhbProvider.class, method = "mhselectSql")
	List<Yhb> mhselectSql(Yhb yhb);
	
	/** 查询待注册或新增的用户名是否已存在 */
	@Select("select yhzh,pwd,yhnc,yhtx,yhzt from yhb where yhzh = #{yhzh}")
	Yhb isExists(String yhzh);

}
