/**************全部ajax遍历**********************/
var user = sessionStorage.getItem("user");
var yh = JSON.parse(user);
var yhzh = yh.yhzh;

$("#quanbu").click(function(){
	doList();
})

$(function(){
	doList();
	doList1();
	doList2();
	doList3();
	doList4();
})

function doList(){
	$.ajax({
		type:"post",
		url:"/videoVIP/ScbListController/list.do?yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			//查询前清空
			$(".item-img1").empty();
			var zy = '';
			for(i = 0; i < data.length; i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" onclick="doDelete(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-img1").append(zy);
		}
	});
}

//电影分类
function doList1(){
	$.ajax({
		type:"post",
		url:"/videoVIP/ScbListController/list2.do?splx=1&yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			//查询前清空
			$(".item-img2").empty();
			var zy = '';
			for(i = 0; i < data.length; i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" onclick="doDelete1(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-img2").append(zy);
		}
	});
}

//动漫分类
function doList2(){
	$.ajax({
		type:"post",
		url:"/videoVIP/ScbListController/list2.do?splx=2&yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			//查询前清空
			$(".item-img3").empty();
			var zy = '';
			for(i = 0; i < data.length; i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" onclick="doDelete2(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-img3").append(zy);
		}
	});
}

//纪录片分类
function doList3(){
	$.ajax({
		type:"post",
		url:"/videoVIP/ScbListController/list2.do?splx=3&yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			//查询前清空
			$(".item-img4").empty();
			var zy = '';
			for(i = 0; i < data.length; i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" onclick="doDelete3(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-img4").append(zy);
		}
	});
}

//综艺分类
function doList4(){
	$.ajax({
		type:"post",
		url:"/videoVIP/ScbListController/list2.do?splx=4&yhzh="+yhzh,
		dataType:"json",
		success:function(data){
			//查询前清空
			$(".item-img5").empty();
			var zy = '';
			for(i = 0; i < data.length; i++){
			  zy +=	'<div class="col-md-3">'
				 +	'<div class="thumbnail">'
				 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'" target="_Parent"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
				 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
				 +	'<a class="btn btn-danger" onclick="doDelete4(\''+data[i].spid+'\')">删除</a>'
				 +	'</div>'
				 +	'</div>'
			}
			$(".item-img5").append(zy);
		}
	});
}


function doDelete(id){
	//alert(id);
	$.post("/videoVIP/ScbController/deleteByObj.do?yhzh="+yhzh,
		{
			spid:id
		},
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList();
			}
		});
}

function doDelete1(id){
	//alert(id);
	$.post("/videoVIP/ScbController/deleteByObj.do?yhzh="+yhzh,
		{
			spid:id
		},
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList1();
			}
		});
}

function doDelete2(id){
	//alert(id);
	$.post("/videoVIP/ScbController/deleteByObj.do?yhzh="+yhzh,
		{
			spid:id
		},
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList2();
			}
		});
}

function doDelete3(id){
	//alert(id);
	$.post("/videoVIP/ScbController/deleteByObj.do?yhzh="+yhzh,
		{
			spid:id
		},
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList3();
			}
		});
}

function doDelete4(id){
	//alert(id);
	$.post("/videoVIP/ScbController/deleteByObj.do?yhzh="+yhzh,
		{
			spid:id
		},
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList4();
			}
		});
}


//清除所有收藏
function doDeleteAll(){
	$.post("/videoVIP/ScbController/deleteCleanAll.do?yhzh="+yhzh,
		function(ret){
			if(ret == false){
				alert("删除失败！");
			}else{
				alert("删除成功！");
				doList();
				doList1();
				doList2();
				doList3();
				doList4();
			}
		});
}

