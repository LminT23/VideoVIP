var user = sessionStorage.getItem("user");
var yh = JSON.parse(user);
var yhzh = yh.yhzh;
//失去焦点
$("#password").on("blur", function() {
	checkPwd();
})

//校验密码
function checkPwd() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form1.pwd.value)) {
		$("#pwdPrompt").html("");
		return true;
	} else {
		$("#pwdPrompt").html("密码错误(至少四位字母或数字)");
		return false;
	}
}



//通过 主键账号 获取用户信息，显示在表单中
$(function(){
	$.post("/videoVIP/YhbController/selectById.do?yhzh="+yhzh,function(user){
		$("#pwd").val(user.pwd);
		$("#yhnc").val(user.yhnc);			
	});
});

$("#update").click(function() {
	update();
});

function update(){
	if (checkPwd()) {
		var yh = JSON.parse(user);
		var yhzh = yh.yhzh;
		$.post("/videoVIP/YhbController/update.do",
			{	
				yhzh:yhzh,
				pwd:form1.pwd.value,
				yhnc:form1.yhnc.value
			},
			function(ret){
				if(ret == true){
					$.ajaxSettings.async = false;
					doUpdateList();
					$.ajaxSettings.async = true;
					top.document.location.reload();
				}else{
					alert("更新失败！");
				}
			}
		);
	}
}

function doUpdateList() {
	var url = "/videoVIP/YhbController/selectById.do?yhzh="+yhzh;
	$.post(url,function(user) {
		if (null != user && "" != user) {// 不为空说明该用户存在，登录成功
			sessionStorage.setItem("user", JSON.stringify(user));
		}
	});
}




