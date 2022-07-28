//spid在UrlParm.js中定义页面内直接可用

url = "/videoVIP/SpbController/selectById.do";
parm = {"spid":spid};
$.post(url,parm,function(data){

	$("#fmimg").attr("src","/videoVIP/spfmfile/"+data.spfm);
	
	$("#spname").html("片名："+data.sppm);
	$("#sptype").html("类型："+getLx(data.splx));
	$("#spdq").html("地区："+ getDq(data.spdq));
	$("#sptime").html("时间："+data.spsj);
	$("#spjj").html("简介："+data.spjj);
})

function getLx(ret){
	var dq ;
	switch (parseInt(ret)){
	case 1 :
		dq = "电影";
		break;
	case 2 :
		dq = "动漫";
		break;
	case 3 :
		dq = "纪录片";
		break;
	case 4 :
		dq = "综艺";
		break;
	}
	return dq;
}

function getDq(ret){
	var dq ;
	switch (parseInt(ret)){
	case 1 :
		dq = "中国大陆";
		break;
	case 2 :
		dq = "欧美地区";
		break;
	case 3 :
		dq = "日韩地区";
		break;
	}
	return dq;
}

$("#bfbtn").click(function(){
	//addls();
	$.ajaxSettings.async = false;	//ajax同步
	selectls();			//加入历史
	addbfnum();			//播放数加1
	$.ajaxSettings.async = true;	//ajax异步
	splink = "/videoVIP/pages_video/video.html?spid="+spid;	//跳转链接
	location.href=splink;
})

// 查询并加入历史记录
function selectls(){
	var user = sessionStorage.getItem("user");
	if(null!=user){
		var yhtt = JSON.parse(user);
		var gkurl = "/videoVIP/GklsbController/selectByObj.do";
		var gkparam = {
			"yhzh":yhtt.yhzh,
			"spid":spid
		}
		$.post(gkurl,gkparam,function(data){
			if(data){
				console.log("加入历史失败")
			}else{
				addls();
			}
		})
	}
}

// 加入历史记录
function addls(){
	var user = sessionStorage.getItem("user");
	if(null!=user){
		var yhtt = JSON.parse(user);
		gkurl = "/videoVIP/GklsbController/add.do"
		gkparam = {
			"yhzh":yhtt.yhzh,
			"spid":spid,
			"gksj":gettime()
		}
		$.post(gkurl,gkparam,function(data){})
	}
}

//播放数加1
function addbfnum(){
	bfnumurl = "/videoVIP/SpbController/updateBfnum.do"
	$.post(url,parm,function(data1){
		par = {
			"spid":spid,
			"bfnum":parseInt(data1.bfnum)+1	
		}
		$.post(bfnumurl,par,function(data2){})
	})
}

//获取时间
function gettime() {
  let dateTime
  let yy = new Date().getFullYear()
  let mm = new Date().getMonth() + 1
  let dd = new Date().getDate()
  let hh = new Date().getHours()
  let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes():new Date().getMinutes()
  let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds():new Date().getSeconds()
  dateTime = yy + '/' + mm + '/' + dd + '-' + hh + ':' + mf + ':' + ss
  return dateTime
}

/************************ 用户给视频的评分 ****************************/