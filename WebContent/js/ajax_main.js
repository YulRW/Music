function ajaxSearch() {
    var search_after = document.getElementById("search_music");
    var search_after_context = "";

    document.getElementById("search_1_run").getElementsByTagName("img")[0].onclick = function () {

        var ajax_search = new XMLHttpRequest();

        var search_context = document.getElementById("search_2").getElementsByTagName("input")[0].value;

        //验证：搜素内容是否为空，为空则阻止提交至后台，并提示
        if(search_context == ""){

            search_after.innerHTML = "请输入搜索内容！";
            return false;

        }
        

        ajax_search.open("post", "./search");

        ajax_search.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax_search.onreadystatechange = function () {
            if (ajax_search.readyState == 4 && ajax_search.status == 200) {

                search_after_context = ""; //重置清空字符串
                
                if(ajax_search.responseText){

                    var str = ajax_search.responseText;
                    var str_array = str.split("**");
    
                    for (var i = 0, len = str_array.length - 1; i < len; i += 3) {
                        search_after_context += "<div class = \"search_resource\"><img src=" + str_array[i + 2] + " alt=" + str_array[i] + "><div>" + str_array[i] + "</div><div>" + str_array[i + 1] + "</div></div>";
                    }
                    search_after.innerHTML = search_after_context;

                }else{
                    search_after.innerHTML = "未查找到该歌曲，请重试或换关键词。";
                }

            }
        }
        ajax_search.send("search_context=" + search_context);
    }
}



function initializeMusic() {

    var music_c = "";
    var ajax = new XMLHttpRequest();
    var test_1 = document.getElementsByClassName("content_1")[0];
    //请求方式:POST  以及请求地址
    ajax.open("post", "./initializeMusic");

    //请求头
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var str = ajax.responseText;
            all_music_list = str.split("**");
            for (i = 0, len = all_music_list.length - 1; i < len; i += 7) {
                music_c += "<div class=\"music_1\"><div><div><img src=" + all_music_list[i + 5] + " width=\"317px\" data-name=" + all_music_list[i + 0] + "></div><div><h2>" + all_music_list[i + 1] + "</h2><div>" + all_music_list[i + 2] + "</div></div></div></div>";
            }
            test_1.innerHTML = music_c;
        }
    }
    ajax.send(null);
}




function shareContent() {

    var share = document.getElementById("post_html");

    share.onclick = function () {

        var stra = document.getElementById("editing");
        var content = stra.innerHTML;
        //创建AJAX
        var ajaxC = new XMLHttpRequest();

        //请求方式:POST  以及请求地址
        ajaxC.open("post", "./share");

        //请求头
        ajaxC.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


        //请求体、发送请求
        ajaxC.send("content="+content);

        stra.innerText = "";


    }
}