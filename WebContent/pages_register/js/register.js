//失去焦点
$("#username").on("blur", function() {
	checkYhzh();
})

//校验
function checkYhzh() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form2.yhzh.value)) {
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
	if (/^[A-Za-z0-9]{4,30}$/.test(form2.pwd.value)) {
		$("#pwdPrompt").html("");
		return true;
	} else {
		$("#pwdPrompt").html("密码错误(至少四位字母或数字)");
		return false;
	}
}

$("#register").click(function() {
	register();
});


function register() {
	if (checkYhzh() && checkPwd()) {
		var url = "/videoVIP/RegisterController/register.do";
		var params = {
				yhzh : form2.yhzh.value,
				pwd : form2.pwd.value,
				yhnc : form2.yhnc.value
			}
		$.post(url, params, function(ret) {
			if (ret) {
				alert("注册成功！");
				// 跳转到登录界面
				location.href = "/videoVIP/pages_Login/userlogin.html";
			} else {
				alert("注册失败！");
			}
		});
	}
}



