

//导航栏选项卡
function select_page_music() {
    var page_li =  document.getElementsByClassName("music_page")
    var page_div = document.getElementsByClassName("music_context");
    page_div[0].style.display = "block";

    for (var i = 0, len = page_li.length; i < len; i++) {
        page_li[i].index = i;
        page_li[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                page_div[j].style.display = "none";
                // page_li[j].classList.remove("page_li_style");
            }
            page_div[this.index].style.display = "block";
            // page_li[this.index].classList.add("page_li_style");
        }
    }
}