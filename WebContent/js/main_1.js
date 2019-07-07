window.onload = function () {

    search();
    play();
    setBtnBolor();
    runBtn();
    drag();
    run_music();
    select_btn();
    soundDrag();
    s_menu();
    select_page();
    select_page_music();
    putIn(0);
    lyricsSyn();
    hoverStop();
    search_btn();
    musicList();
    alert_w();
    listPlay();
    RC_btn();
    ajaxSearch();
    tips();
    edit_tool();
    postText();
    initializeMusic();
    shareContent();



}

e = event || window.e;

function select_page() {
    page_li = document.getElementsByClassName("page_li")
    var page_div = document.getElementsByClassName("page_div");
    page_li[0].classList.add("page_li_style");
    for (var i = 0, len = page_li.length; i < len; i++) {
        page_li[i].index = i;
        page_li[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                page_div[j].style.display = "none";
                page_li[j].classList.remove("page_li_style");
            }
            page_div[this.index].style.display = "block";
            page_li[this.index].classList.add("page_li_style");
        }
    }
}



function search() {
    var timer = null;
    var odiv1 = document.getElementById("search_1");
    var odiv2 = document.getElementById("search_recommend");
    var odiv3 = document.getElementById("btm_bg");
    var odiv4 = document.getElementById("top_bg");
    odiv1.onclick = function (e) {
        var e = event || window.e;
        odiv3.style.display = "none";
        odiv4.style.display = "block";
        odiv2.style.display = "block";
        e.stopPropagation();
    }


    odiv2.onclick = function (e) {
        var e = event || window.e;
        odiv3.style.display = "none";
        odiv4.style.display = "block";
        odiv2.style.display = "block";
        e.stopPropagation();
    }

    document.body.onclick = function () {
        odiv2.style.display = "none";
        odiv3.style.display = "block";
        odiv4.style.display = "none";
        document.getElementById("play_menu").style.display = "none";
    }


}

function search_btn() {
    alist_2 = ["s_list1", "s_list2", "s_list3", "s_list4"];
    var index_search = 0;
    var aspan = document.getElementById("search_button").getElementsByTagName("span");
    aspan[0].style.backgroundColor = "yellow";
    var ali = document.getElementById("search_context").getElementsByTagName("li");
    for (var i = 0, len = aspan.length; i < len; i++) {

        aspan[i].addEventListener("click", function () {

            aspan[index_search].style.backgroundColor = "grey";
            this.style.backgroundColor = "yellow";
            var l_index = this.getAttribute("l_index");
            var count = index_search - l_index;
            index_search = l_index;
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    alist_2.unshift(alist_2[3]);
                    alist_2.pop();
                }
                for (var i = 0, len = alist_2.length; i < len; i++) {
                    ali[i].setAttribute("class", alist_2[i]);
                }
            } else if (count < 0) {
                count = -count;
                for (var i = 0; i < count; i++) {
                    alist_2.push(alist_2[0]);
                    alist_2.shift();
                }
                for (var i = 0, len = alist_2.length; i < len; i++) {
                    ali[i].setAttribute("class", alist_2[i]);
                }
            }
        })
    }
}