
var yh1 = sessionStorage.getItem("user");
var user1 = JSON.parse(yh1);

if(yh1!=null){yhzh = user1.yhzh;}
param = {
	"yhzh":yhzh
}


zuijin();
genzao();


/********************* 最近记录Ajax遍历视频封面 ********************/
function zuijin(){
	$.ajax({
		type:"post",
		url:"/videoVIP/SpGklsbController/selectById.do",
		dataType:"json",
		data:param,
		success:function(data){
			var zy = '';
			n = 0;
			for(i = 0;i < data.length;i++,n++){
			  if(n>=8){break;}
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" href="javascript:deletesp(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-gkls1").html(zy);
		}
	});
}

/********************* 更早记录Ajax遍历视频封面 ********************/
function genzao(){
	$.ajax({
		type:"post",
		url:"/videoVIP/SpGklsbController/selectById.do",
		data:param,
		dataType:"json",
		success:function(data){
			var zy = '';
			for(i = 8;i < data.length;i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" href="javascript:deletesp(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-gkls2").html(zy);
		}
	});
}

/********************* 删除视频 ********************/
function deletesp(spid){
	$.ajax({
		type:"post",
		url:"/videoVIP/GklsbController/deleteByObj.do",
		data:{"yhzh":yhzh,"spid":spid},
		dataType:"json",
		success:function(data){
			if(data){
				zuijin();
				genzao();
			}else{
				alert("删除失败！！！")
			}
		}
	});
}

/********************* 删除所有视频 ********************/
$("#clearall").click(function(){
	$.ajax({
		type:"post",
		url:"/videoVIP/GklsbController/deleteByAll.do?yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			if(data){
				zuijin();
				genzao();
			}else{
				alert("删除失败！！！")
			}
		}
	});
})