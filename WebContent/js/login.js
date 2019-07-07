window.onload = function () {
	QRCode();
	PClogin();
	login();
	duanxin();
	mima();
	hiddenpassword1();
	sign();
	passwordrequired();
	weiplaceholder1();
	weiplaceholder2();
	weiplaceholder3();
	login_img();
	checkPhone();
	ajaxRegister();
	ajaxLogin();
	register();
	test_drag();
}



//登录样式切换
function login() {
	var div1 = document.getElementById("submit_1");
	var user = document.getElementById("user");
	var password = document.getElementById("password");
	div1.style.backgroundColor = "grey";
	user.onkeyup = function () {
		if (password.value != "" && user.value != "") {
			div1.style.backgroundColor = "#00f1a4";
		} else {
			div1.style.backgroundColor = "grey";
		}
	}
	password.onkeydown = function () {
		if (password.value != "" && user.value != "") {
			div1.style.backgroundColor = "#00f1a4";
		} else {
			div1.style.backgroundColor = "grey";
		}
	}

	div1.onclick = function () {

		if (user.value == "" && password.value == "") {
			tan1();
			tan2();
			return false;
		} else if (user.value == "") {
			tan1();
			return false;
		} else if (password.value == "") {
			tan2();
			return false;
		} 


	}


}


//用户注册
function register() {
	var div1 = document.getElementById("submit_3");
	var div2 = document.getElementById("sign_user1");
	var div3 = document.getElementById("user4");
	var div4 = document.getElementById("signpassword1");
	var div5 = document.getElementById("signpassword2");
	div1.style.backgroundColor = "grey";
	div3.onkeyup = function () {
		if (div3.value != "" && div4.value != "" && div5.value != "") {
			div1.style.backgroundColor = "#00f1a4";
		} else {
			div1.style.backgroundColor = "grey";
		}
	}
	div4.onkeyup = function () {
		if (div3.value != "" && div4.value != "" && div5.value != "") {
			div1.style.backgroundColor = "#00f1a4";
		} else {
			div1.style.backgroundColor = "grey";
		}
	}
	div5.onkeyup = function () {
		if (div3.value != "" && div4.value != "" && div5.value != "") {
			div1.style.backgroundColor = "#00f1a4";
		} else {
			div1.style.backgroundColor = "grey";
		}
	}
}


function tan1() { //"气泡框渐变1"
	reset1();
	show1();
	setTimeout("hidden1()", 1000);
}

function reset1() {
	i = 0;
	var div1 = document.getElementById("borderuser1");
	div1.style.opacity = 0;
}

function show1() {
	var div1 = document.getElementById("borderuser1");
	div1.style.display = "block";
	if (i < 1) {
		i += 0.1;
		div1.style.opacity = i;
		setTimeout("show1()", 100);
	}
}

function hidden1() {
	var div1 = document.getElementById("borderuser1");
	var i = div1.style.opacity;
	if (i > 0.1) {
		i -= 0.1;
		div1.style.opacity = i;
		setTimeout("hidden1()", 100);
	} else {
		div1.style.opacity = 0;
		div1.style.display = "none";
	}
}






function tan2() { //"气泡框渐变2"
	reset2();
	show2();
	setTimeout("hidden2()", 1000);
}

function reset2() {
	i = 0;
	var div1 = document.getElementById("borderuser2");
	div1.style.opacity = 0;
}

function show2() {
	var div1 = document.getElementById("borderuser2");
	div1.style.display = "block";
	if (i < 1) {
		i += 0.1;
		div1.style.opacity = i;
		setTimeout("show2()", 100);
	}
}

function hidden2() {
	var div1 = document.getElementById("borderuser2");
	var i = div1.style.opacity;
	if (i > 0.1) {
		i -= 0.1;
		div1.style.opacity = i;
		setTimeout("hidden2()", 100);
	} else {
		div1.style.opacity = 0;
		div1.style.display = "none";
	}
}





//二维码登录切换
function QRCode() {
	var links = document.getElementById('QRC');
	links.onmouseover = function () {
		links.setAttribute("src", "../images/login/右上角二维码2.png");
	}
	links.onmouseout = function () {
		links.setAttribute("src", "../images/login/右上角二维码.png");
	}
	links.onclick = function () {
		var div1 = document.getElementsByClassName("tab1");
		for (var i = 0; i < div1.length; i++) {
			div1[i].style.display = "none";
		}
		var div2 = document.getElementsByClassName("tab3");
		div2[0].style.display = "none";

		var div3 = document.getElementsByClassName("tab2");
		for (var i = 0; i < div3.length; i++) {
			div3[i].style.display = "block";
		}

	}
}


//电脑登录切换
function PClogin() {
	var links = document.getElementById("PC");
	links.onmouseover = function () {
		links.setAttribute("src", "../images/login/电脑2.png");
	}
	links.onmouseout = function () {
		links.setAttribute("src", "../images/login/电脑1.png");
	}
	links.onclick = function () {
		var div1 = document.getElementsByClassName("tab2");
		for (var i = 0; i < div1.length; i++) {
			div1[i].style.display = "none";
		}
		var div2 = document.getElementsByClassName("tab1");
		for (var i = 0; i < div2.length; i++) {
			div2[i].style.display = "block";
		}
	}
}


//"短信登录"切换
function duanxin() {
	var links = document.getElementById("duanxinlogin");
	links.onclick = function () {
		var div1 = document.getElementsByClassName("tab1");
		div1[2].style.display = "none";
		var div3 = document.getElementsByClassName("tab4");
		div3[0].style.display = "none";
		var div2 = document.getElementsByClassName("tab3");
		for (var i = 0; i < div2.length; i++) {
			div2[i].style.display = "block";
		}
	}
}



//"密码登录"切换
function mima() {
	var links = document.getElementById("mimalogin");
	links.onclick = function () {
		var div1 = document.getElementsByClassName("tab3");
		div1[0].style.display = "none";
		var div3 = document.getElementsByClassName("tab4");
		div3[0].style.display = "none";
		var div2 = document.getElementsByClassName("tab1");
		div2[2].style.display = "block";

	}
}


//"注册"切换
function sign() {
	var links = document.getElementsByClassName("sign");
	links[0].onclick = function () {
		var div1 = document.getElementsByClassName("tab1");
		div1[2].style.display = "none";
		var div2 = document.getElementsByClassName("tab4");
		div2[0].style.display = "block";
	}
	links[1].onclick = function () {
		var div1 = document.getElementsByClassName("tab3");
		div1[0].style.display = "none";
		var div2 = document.getElementsByClassName("tab4");
		div2[0].style.display = "block";
	}
}


//隐藏密码
function hiddenpassword1() {
	document.getElementById("hiddenpassword").onclick = function () {
		var div1 = document.getElementById("hiddenpassword");
		var div2 = document.getElementById("password");
		if (div1.getAttribute("src") == "../images/login/隐藏on.png") {
			div1.setAttribute("src", "../images/login/隐藏off.png");
			div2.setAttribute("type", "text");
		} else {
			div1.setAttribute("src", "../images/login/隐藏on.png");
			div2.setAttribute("type", "password");
		}
	}
}




//密码输入验证
function passwordrequired() {
	var div1 = document.getElementById("signpassword1");
	var div2 = document.getElementById("signpassword2");
	var div3 = document.getElementById("required");
	var div4 = document.getElementById("pass");
	var div5 = document.getElementById("warning");
	var div6 = document.getElementById("repeat");
	var div7 = document.getElementById("user4");
	var div8 = document.getElementById("sign_user1");
	div1.onkeydown = function () {
		if (div1.value != "") {
			div3.setAttribute("style", "display:block");
		}
	}
	div7.onchange = function () {
		if (div7.value != "") {
			div8.style.display = "block";

		} else {
			div8.style.display = "none";
		}
	}
	div1.onchange = function () {
		if (div1.value) {
			if ((/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,20}$/.test(div1.value))) {
				div3.setAttribute("style", "display:none");
				div4.setAttribute("style", "display:block");
				div5.setAttribute("style", "display:none");
			} else {
				div5.setAttribute("style", "display:block");
				div4.setAttribute("style", "display:none");
			}
		}
	}
	div2.onchange = function () {
		if (div1.value != div2.value) {
			div6.setAttribute("style", "display:block");
		} else {
			div6.setAttribute("style", "display:none");
		}
	}
}


//手机格式验证
function checkPhone() {
	var div1 = document.getElementById("CAPbtn");
	var div2 = document.getElementById("tel")
	div1.style.backgroundColor = "rgb(221,221,221)";
	div2.onkeyup = function () {
		var phone = document.getElementById("tel").value;
		if ((/^1[34578]\d{9}$/.test(phone))) {
			div1.style.backgroundColor = "#00f1a4";
			div1.className = "jia1";
		} else {
			div1.style.backgroundColor = "rgb(221,221,221)";
			div1.className = "jia2";
		}
	}
	div2.onkeypress = function () {
		return event.keyCode >= 48 && event.keyCode <= 57;
	}

	div1.onclick = function () {
		var div1 = document.getElementById("CAPbtn");
		if (div1.style.backgroundColor == "rgb(221, 221, 221)") {
			return false;
		} else {
			div1.style.backgroundColor = "rgb(221, 221, 221)";
			div1.className = "jia2";
			print_1();
		}
	}
}

var time_60 = 10;
var k = 0;
//验证码倒计时
function print_1() {
	var div1 = document.getElementById("CAPbtn");
	if (k < time_60) {
		div1.innerHTML = time_60 + "s重新发送";
		time_60 -= 1;
		setTimeout("print_1()", 1000);
	} else {
		time_60 = 10;
		div1.style.backgroundColor = "#00f1a4";
		div1.className = "jia1";
		div1.innerHTML = "重新发送验证码";
	}
}

//用户名输入信息提示(伪placeholder)
function weiplaceholder1() {
	var div1 = document.getElementById("login1_1");
	var div2 = document.getElementById("user");
	div2.onfocus = function () {
		div1.className = "login1_2";
		div2.style.border = "2px purple solid";
	}
	div2.onblur = function () {
		if (div2.value == "") {
			div1.className = "login1_3";
			div2.style.border = "2px grey solid";
		}
	}
	document.getElementById("login1_1").onclick = function () {
		div1.className = "login1_2";
		div2.style.border = "2px purple solid";
	}
}



//密码输入信息提示(伪placeholder)
function weiplaceholder2() {
	var div1 = document.getElementById("login2_1");
	var div2 = document.getElementById("password");
	div2.onfocus = function () {
		div1.className = "login2_2";
		div2.style.border = "2px purple solid";
	}
	div2.onblur = function () {
		if (div2.value == "") {
			div1.className = "login2_3";
			div2.style.border = "2px grey solid";
		}
	}
	div1.onclick = function () {
		div1.className = "login2_2";
		div2.style.border = "2px purple solid";
	}
}



//手机号输入信息提示(伪placeholder)
function weiplaceholder3() {
	var div1 = document.getElementById("login3_1");
	var div2 = document.getElementById("tel");
	div2.onfocus = function () {
		div1.className = "login3_2";
		div2.style.border = "2px purple solid";
	}
	div2.onblur = function () {
		if (div2.value == "") {
			div1.className = "login3_3";
			div2.style.border = "2px grey solid";
		}
	}
}

function login_img() {
	var div1 = document.getElementById("imageslogin7");
	var div2 = document.getElementsByClassName("show_1");
	div1.onclick = function () {
		div1.style.display = "none";
		for (var i = 0; i < div2.length; i++) {
			div2[i].style.display = "inline";
		}

	}
}


function test_drag() {

	var box = document.getElementById("test_drag");
	var bg = document.getElementById("test_bg");
	var text = document.getElementById("test_text");
	var btn = document.getElementById("test_btn");
	success = false; //是否通过验证的初始化
	var distance = 347; //滑动成功的距离
	btn.onmousedown = function (e) {
		var e = e || window.event;
		//清除后面设置的过渡动画属性
		btn.style.transition = "";
		bg.style.transition = "";

		//获得鼠标按下时水平位置
		var downed = e.clientX;

		document.onmousemove = function (e) {

			var e = e || window.event;
			//获得鼠标移动时的水平位置
			var moved = e.clientX;

			//鼠标的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
			var shifting = moved - downed;
			console.log(shifting)

			//判断 鼠标拖动后的水平距离 与 滑动成功的距离 的关系
			if (shifting > distance) {
				shifting = distance; //如果滑块滑过终点，则停留在终点位置
			} else if (shifting < 0) {
				shifting = 0; //如果滑块滑过起点的左侧，则重置为起点位置
			}

			//根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
			btn.style.left = shifting + "px";
			bg.style.width = shifting + "px";

			//判断是否滑到了滑块成功的距离
			if (shifting == distance) {


				//通过验证 设置状态
				success = true;

				//滑动成功后的样式
				text.style.color = "#fff";
				btn.innerHTML = "√";
				bg.style.backgroundColor = "#9973d0";
				text.innerHTML = "验证通过";
				btn.style.color = "green";

				//清除鼠标按下事件和移动事件
				btn.onmousedown = null;
				document.onmousemove = null;

			}
		}
		document.onmouseup = function (e) {

			//如果鼠标松开时，已经滑到了终点，则验证通过
			if (success) {
				return;
			} else {
				//如果鼠标松开时，没有滑到终点，则滑块初始化位置
				btn.style.left = 0;
				bg.style.width = 0;
				btn.style.transition = "left 1s";
				bg.style.transition = "width 1s";
			}
			document.onmousemove = null;
			document.onmouseup = null;
		}


	}



}
















// ---------------------------------------------------------------------------------------------------------------------------//