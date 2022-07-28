//失去焦点
$("#username").on("blur", function() {
	checkYhzh();
})

//校验
function checkYhzh() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form1.yhzh.value)) {
		$("#namePrompt").html("");
		return true;
	} else {
		$("#namePrompt").html("账号错误(至少四位字母或数字)");
		return false;
	}
}

$("#password").on("blur", function() {
	checkPwd();
})

function checkPwd() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form1.pwd.value)) {
		$("#pwdPrompt").html("");
		return true;
	} else {
		$("#pwdPrompt").html("密码错误(至少四位字母或数字)");
		return false;
	}
}

function outLogin() {
	var yh = sessionStorage.getItem("user");
	var user = JSON.parse(yh);
	sessionStorage.clear(user);
}


function doLogin() {
	if (checkYhzh() && checkPwd()) {
		var url = "/videoVIP/LoginController/doLogin.do";
		var params = {
			yhzh : form1.yhzh.value,
			pwd : form1.pwd.value
		}
		$.post(url, params, function(user) {
			if (null != user && "" != user) {// 不为空说明该用户存在，登录成功
				// 登录成功，将user转成json字符串存放在sessionStorage中，方便在其他页面使用user
				sessionStorage.setItem("user", JSON.stringify(user));
				
				if("正常" == user.yhzt) {
					// 用户状态正常,跳转到用户界面
					location.href = "/videoVIP/pages_user/user.html?yhnc="+user.yhnc;
				}else if("封号" == user.yhzt){
					// 封号状态，限制登录
					outLogin();
					alert("您已被封号!");
				}else {
					location.href = "/videoVIP/index.html";
				}
			}else {
				alert("账号或密码错误！");
			}
		});
	}
}

$("#login").click(function() {
	doLogin();
});

//判断如果按下Enter回车键，则登录
$(document).keydown(function(e) {
	e = e || window.event
	if (e.keyCode == 13) {//Enter键对应键值为13
		doLogin();
	}
});
