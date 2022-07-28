//失去焦点
$("#username").on("blur", function() {
	checkGlyzh();
})

//校验
function checkGlyzh() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form1.glyzh.value)) {
		$("#namePrompt").html("");
		return true;
	} else {
		$("#namePrompt").html("账号错误(至少四位字母或数字)");
		return false;
	}
}

$("#password").on("blur", function() {
	checkGlypwd();
})

function checkGlypwd() {
	if (/^[A-Za-z0-9]{4,30}$/.test(form1.glypwd.value)) {
		$("#glypwdPrompt").html("");
		return true;
	} else {
		$("#glypwdPrompt").html("密码错误(至少四位字母或数字)");
		return false;
	}
}

function doLogin() {
	
	if (checkGlyzh() && checkGlypwd()) {
		
		var url = "/videoVIP/GlybController/doGlyLogin.do";
		var params = {
			glyzh : form1.glyzh.value,
			glypwd : form1.glypwd.value
		}
		$.post(url, params, function(obj) {
			if (null != obj && "" != obj) {// 不为空说明该用户存在，登录成功
				// 登录成功，将user转成json字符串存放在sessionStorage中，方便在其他页面使用user
				sessionStorage.setItem("obj", JSON.stringify(obj));
				// 跳转到管理员界面
				location.href = "/videoVIP/pages_admin/admin.html?glyzh="+obj.glyzh;
			} else {//user值为空，说明该用户不存在，用户名或密码有误，重新登录
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