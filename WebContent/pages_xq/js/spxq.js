/********************* 为你推荐Ajax遍历视频封面 ********************/
$.ajax({
	type:"post",
	url:"/videoVIP/SpbController/list.do?sp=1",
	dataType:"json",
	success:function(data){
		var zy = '';
		for(i = 0;i < 12;i++){
		  zy +=	'<div class="col-md-2 item-img">'
			 +	'<div class="thumbnail">'
			 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
			 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
			 +	'</div>'
			 +	'</div>'
		}
		$(".item-tuijian1").append(zy);
	}
});

/********************* 点击收藏按钮添加入用户收藏夹（可换一个文件夹） ********************/
//var spid = UrlParm.parm("spid");
//用户名待修改
selectsc();
function add(){
	if(null!=yh){
		if($("#scbtn").val()=="点击收藏"){
			$.ajax({
				type:"post",
				url:"/videoVIP/ScbController/add.do?yhzh="+user.yhzh,
				data:{spid:spid},
				dataType:"json",
				success:function(ret){
					if(ret){
						$("#scbtn").val("已收藏");
					}else{
						$("#scbtn").val("点击收藏");
					}
				}
			});
		}else{
			qxsc();
		}
	}else{
		//alert("请登录！");
	}
}

//取消收藏（有问题）
function qxsc(){
	var yhzh = user.yhzh;
	url = "/videoVIP/ScbController/deleteByObj.do";
	parm = {
		"yhzh":yhzh,
		"spid":spid
	}
	$.post(url,parm,function(data){
		if(data){
			$("#scbtn").val("点击收藏");
		}
	})
}

//查询是否收藏
function selectsc(){
	var yh = sessionStorage.getItem("user");
	var user = JSON.parse(yh);
	if(null!=yh){
		var yhzh = user.yhzh;
		var url = "/videoVIP/ScbController/select.do";
		var parm = {
			"yhzh":yhzh,
			"spid":spid
		}
		$.post(url,parm,function(data){
			// 成功执行函数
			if(data){
				$("#scbtn").val("已收藏");
			}else{
				$("#scbtn").val("点击收藏");
			}
		})
	}else{
		$("#coll").addClass("colldiv");
	}
}

//弹框,绑定类.colldiv
new Vue({
      el: '.colldiv',
      data: function() {
        return {}
      },
	  methods:{
		  infomessage:function(){
			  this.$message('请登录后再收藏！！！');
		  },
		  seccessmessage:function(){
			   this.$message({message: '请登录后再收藏！！！',type: 'success'});
		  },
		  alertmessage:function(){
			  this.$message({message: '请登录后再收藏！！！',type: 'warning'});
		  },
		  errormessage:function(){
			  this.$message.error('请登录后再收藏！！！');
		  },
	  }
    })
/********************* 排行榜 ********************/
$.ajax({
	type:"post",
	url:"/videoVIP/SpbController/list.do",
	dataType:"json",
	success:function(data){
		var zy = '';
		n = 0
		for(i = 1;(i-1) < data.length;i++,n++){
			if(n>=10){break;}
			 zy += '<tr>'
				 + '<td>'+i+'</td>'
				 + '<td><a href="/videoVIP/pages_xq/spxq.html?spid='+data[i-1].spid+'">'+data[i-1].sppm+'</a></td>'
				 + '</tr>'
		}
		$("#rank").html(zy);
	}
});