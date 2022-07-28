//当前页页码
currentPage = 1;
rets = spdatas;
dqno = 0;
time = 0;

fenyeyema();
//分页页码列表
function fenyeyema(){
	maxCurrentPage = Math.floor((rets.length+12)/12)
	fenyestr ='<li><a href="javascript:uppage()">上一页</a></li>';
	for(i=1;i<=maxCurrentPage;i++){
		fenyestr +='<li><a href="javascript:xuanran('+i+')">'+i+'</a></li>'
	}
	fenyestr +='<li><a href="javascript:downpage()">下一页</a></li>'
	$("#item-fenye").html(fenyestr)
}
//上一页函数
function uppage(){
	if(currentPage>1){
		currentPage--;
		xuanran(currentPage);
	}
}
//下一页函数
function downpage(){
	if(currentPage<maxCurrentPage){
		currentPage++;
		xuanran(currentPage);
	}
}
//当前页渲染
function xuanran(curr){
	var num = 0;
	var zy = '';
	for(i = 0+(curr-1)*12;i < rets.length;i++,num++){
	  if(num==12){break;}
	  zy +=	'<div class="col-md-2 item-img">'
		 +	'<div class="thumbnail">'
		 +	'<a href="/videoVIP/pages_xq/spxq.html?spid='+rets[i].spid+'"><img alt="....." src="/videoVIP/spfmfile/'+ rets[i].spfm +'" /></a>'
		 +	'<h5>剧名：'+ rets[i].sppm +'</h5>'
		 +	'</div>'
		 +	'</div>'
	}
	$(".item-spfl").html(zy);
}

//分地区数据筛选 - 输入地区编号
function diqu(dq){
	dqno = dq;
	selectData(dqno,time);
}

//分时间数据筛选 - 输入年份
function fentime(sj){
	time = sj;
	selectData(dqno,time);
}

//两个筛选
function selectData(dqno,time){
	rets = [];
	retstem = [];
	if(dqno==0){
		retstem = spdatas;
	}else{
		for(i = 0;i < spdatas.length;i++){
		  if(spdatas[i].spdq == dqno){
			retstem.push(spdatas[i]);
		  }
		}
	}
	if(time==0){
		rets = retstem;
	}else{
		for(i = 0;i < retstem.length;i++){
		  if(retstem[i].spsj == time){
			rets.push(retstem[i]);
		  }
		}
	}
	currentPage = 1;
	fenyeyema();
	xuanran(currentPage);
}
