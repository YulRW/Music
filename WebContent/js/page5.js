

//头像选择,模态框on/off
function alert_w() {
    var btn_show = document.getElementById("head_sculpture");
    var cover_bg = document.getElementById("cover_bg");
    var windows_1 = document.getElementById("windows_1");
    btn_show.onclick = function () {
        cover_bg.style.display = "block";
        windows_1.style.display = "block";
    }

    var btn_off = document.getElementById("close_w");
    btn_off.onclick = function () {
        cover_bg.style.display = "none";
        windows_1.style.display = "none";
    }
}