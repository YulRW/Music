function ajaxRegister() {
    var register_click = document.getElementById("mimalogin");
    var repeat = document.getElementById("repeat");
    var password_value = document.getElementById("signpassword1");
    var warning = document.getElementById("warning");
    var signpassword2 = document.getElementById("signpassword2");
    var user4 = document.getElementById("user4");
    //点击注册用ajax发送请求
    document.getElementById("submit_3").onclick = function () {


        if(password_value.value == ""){
            alert("请输入密码");
            return;
        }

        if(warning.style.display == "block"){
            alert("请输入规范密码");
            return;
        }

        if(warning.style.display == "block"){
            alert("请输入规范密码");
            return;
        }

        if(signpassword2.value == ""){
            alert("\"再输入一次密码\"不能为空");
            return;
        }


        if(repeat.style.display == "block"){
            alert("两次输入密码不一致!");
            return;
        }

        if(success == false){
            alert("请完成滑动验证");
            return;
        }

        //创建ajax
        var ajax_1 = new XMLHttpRequest();

        var username = document.getElementById("user4").value;
        var password = document.getElementById("signpassword2").value;

        //请求行(发送方式/发送目标url)
        ajax_1.open("post", "../register");

        //请求头
        ajax_1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        //回调函数
        ajax_1.onreadystatechange = function () {
            if (ajax_1.readyState == 4 && ajax_1.status == 200) {
                if(ajax_1.responseText == "success"){
                    alert("注册成功!");
                    user4.value = "";
                    password_value.value = "";
                    signpassword2.value = "";
                    // register_click.click();
                    window.location.reload();
                }else{
                    alert("该用户名已被注册!请重新注册!")
                }
            }
        }

        //请求主体(请求发送)
        ajax_1.send("username_register="+username+"&password_register="+password);

      

    }

}

function ajaxLogin() {

    
    
    //点击登录用ajax发送请求
    document.getElementById("submit_1").onclick = function () {

        //获取当前按钮状态
        var btn = document.getElementById("submit_1");


        //在发送请求前验证表单内容
        if(btn.style.backgroundColor == "grey"){
            return false;
        }

        var ajax_2 = new XMLHttpRequest();

        var username = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        ajax_2.open("post", "../login");

        ajax_2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax_2.onreadystatechange = function () {
            if (ajax_2.readyState == 4 && ajax_2.status == 200) {
                if(ajax_2.responseText == "success"){
                    alert("登录成功!");
                    window.location.href = "../index.html" ;
                }else{
                    alert("登录失败!用户名或密码错误!")
                }
            }
        }

        ajax_2.send("username_login="+username+"&password_login="+password);

      

    }

}