/********************* 视频分类Ajax遍历视频封面 ********************/
// url = "/videoVIP/SpbController/list.do"
var splx = UrlParm.parm("splx");
url = "/videoVIP/SpbController/listByType.do"
pram = {
	splx:splx
}

function getdata(url,pram){
	pagedata = [];
	$.ajax({
		type:"post",
		url:url,
		data:pram,
		dataType:"json",
		async:false,	//关闭异步
		success:function(data){
			pagedata = data;
			 var zy = '';
			 n = 0;
			 for(i = 0;i < data.length;i++,n++){
			   if(n==12){break;}
			   zy +=	'<div class="col-md-2 item-img">'
			 	 +	'<div class="thumbnail">'
			 	 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+data[i].spid+'"><img alt="....." src="/videoVIP/spfmfile/'+ data[i].spfm +'" /></a>'
			 	 +	'<h5>剧名：'+ data[i].sppm +'</h5>'
			 	 +	'</div>'
			 	 +	'</div>'
			 }
			 $(".item-spfl").append(zy);
		}
	})
	return pagedata;
}

function newsp(splx){
	newspm = "";
	switch(parseInt(splx)){
		case 1:
			newspm = "电影"; 
			break;
		case 2:
			newspm = "动漫";
			break;
		case 3:
			newspm = "记录片"; 
			break;
		case 4:
			newspm = "综艺"; 
			break;
	}
	$("#newSP").html("最新"+newspm)
}

newsp(splx);
spdatas = getdata(url,pram)
