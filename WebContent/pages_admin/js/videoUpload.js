//显示当前上传图片的样子
		$(".spfm").change(function() {
			$(".img").attr("src", URL.createObjectURL($(this)[0].files[0]));
			$(".img").attr("style", "width: 200px;height: 260px;");
		});

		function doAdd() {
			var url = "/videoVIP/SpbController/add.do";
			$.post(url, {
					sppm: $("#sppm").val(),
					spdz: $("#spdz").val(),
					spjj: $("#spjj").val(),
					splx: $("#splx").val(),
					spdq: $("#spdq").val(),
					spsj: $("#spsj").val()
				},
				function doUpload(ret){

					var reg = /\.(png|jpg|jpeg|bmp)$/; //支持的图片格式
					var spfm = $("#exampleInputFile").val(); //获取图片名
					$("#spid").val(ret);
					if(spfm == ""){
						$("#showInfo").html("请选择图片");
					}else if(reg.test(spfm) == false){
						$("#showInfo").html("图片格式不正确（支持png、jpg、jpeg、 bmp等格式）");
					}else{
						$("#showInfo").html("&nbsp;");
					// Ajax 请求
						$.ajaxSettings.async = false;
					$.ajax({
						type: "POST",
						url: "/videoVIP/SpfmFileUploadController/uploadSpfm.do?spid="+$("#spid").val(),
						data: new FormData(form1), // 提交数据
						processData: false, // 告诉jQuery不要去处理发送的数据
						contentType: false, // 告诉jQuery不要去设置Content-Type请求头
						success: function(fileName) {
							if (fileName != null && fileName != "") {
								var pic = "/videoVIP/spfmfile/" + fileName;
								// 更新父窗口中的用户图像（就是页面左上角头像）
								/* window.parent.document.getElementById("item-yhtx").src = pic; */
								$("#exampleInputFile").attr("src", pic);
								
							} else {
								$("#showInfo").html("头像更新失败！");
							}
						}
					})
					$.ajaxSettings.async = true;
					window.location.href = "/videoVIP/pages_admin/videoMgr.html";
					}
				}
			);
		}