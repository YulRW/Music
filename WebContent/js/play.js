var time_1 = null;
var l_moving = 1; //初始化移动状态,使拖动时滑动条位置不随歌曲播放而更新
var music_count = 0; //初始化歌曲编号,默认选择第一首歌曲
time_updata = true; //初始化时间进度条更新状态,时歌曲时间"00:00"与歌曲同步

function play() {


    //（全局变量）获取目标元素
    start = document.getElementById("start");
    lump = document.getElementById("lump");
    progress_move = document.getElementById("progress_move");
    pre_music = document.getElementById("music_pre");
    next_music = document.getElementById("music_next");
    now_cover = document.getElementsByClassName("disc");

    progressw = document.getElementById("progress");
    progress_width = progressw.offsetWidth - 30;

    allTime = audio.duration;
    audio.addEventListener("canplay", function () {
        allTime = audio.duration;
        var now = transform(audio.currentTime);
        var all = transform(allTime);
        music_time.innerHTML = now + "/" + all;

    })

    //注册切换播放监听
    pre_music.addEventListener("click", preMusic);
    next_music.addEventListener("click", nextMusic);


    play_btn = document.getElementById("play_btn");

    //初始化播放信息
    song_data = document.getElementById("song_data");
    song_data.innerHTML = "歌名:" + songData[0].songName + "---歌手:" + songData[0].songer;
    music_time = document.getElementById("music_time");
    music_time.innerHTML = "00:00/" + songData[0].songLen;
    now_cover[0].style.cssText = "background-image:url(" + songData[0].songImgSrc + ");transform: translateX(0px) rotate(0deg)";

    soundOnOff = document.getElementById("sound_volume").getElementsByTagName("div")[0];
    document.getElementById("my_love").addEventListener("click", function () {

        this.style.backgroundImage == "url('./images/love.png')" ? this.style.backgroundImage = "url('./images/love.png')" : this.style.backgroundImage = "url('./images/love_1.png')";
    })



    //  循环/随机播放/单曲循环 三种状态切换
    var play_way = 0
    var play_way_btn = document.getElementById("play_way_btn");
    play_way_btn.addEventListener("click", function () {


        if (play_way == 0) {
            //  值为0时表明状态是循环播放
            play_way_btn.style.backgroundImage = "url(./images/随机.svg)";
            play_way_btn.title = "随机播放";
            document.getElementById("audio").loop = false;
        } else if (play_way == 1) {

            //值为1时表明状态是随机播放
            play_way_btn.style.backgroundImage = "url(./images/单曲循环.svg)";
            play_way_btn.title = "单曲循环";
            document.getElementById("audio").loop = true;
        } else if (play_way == 2) {

            //  值为2时表明状态是单曲循环播放
            play_way_btn.style.backgroundImage = "url(./images/循环.svg)";
            play_way_btn.title = "循环";
            document.getElementById("audio").loop = false;
            play_way = -1;
        }
        play_way++;
    })

    //随机播放数初始化
    var p_random = 0
    //音乐播放完后的执行
    audio.addEventListener("ended", function () {
        if (play_way == 0) {
            nextMusic();
            startMusic(0);
        } else if (play_way == 1) {
            music_count = parseInt(songData.length * Math.random());
            nextMusic();
            startMusic(0);
        } else if (play_way == 2) {
            return;
        }
    })


    my_music_start = document.getElementById("my_music_start");
    my_music_start.onclick = function () {
        startMusic(0);
    }



    document.getElementById("play_music").addEventListener("click", function (ev) {
        ev.stopPropagation();
    })



    document.onkeydown = function (e) {
        var e = e || window.event;
        var input = document.getElementsByTagName("input");
        var editing = document.getElementById("editing");
        if (e && e.keyCode == 32 && !(input[0] == document.activeElement) && !(editing == document.activeElement)) { // 按 "空格" 暂停/播放歌曲
            startMusic(0);
            return false;
        }
        if (e && e.keyCode == 37) { // 按 "左方向键" 切换上一首歌曲
            preMusic();
        }
        if (e && e.keyCode == 39) { // 按 "右方向键"    切换下一首歌曲
            nextMusic();
        }

        if (e && e.keyCode == 77 && !(input[0] == document.activeElement)) { //按"m" 弹出/关闭菜单
            menu.click();
        }

        if (e && e.keyCode == 49 && !(input[0] == document.activeElement)) { //按"1" 切换至第一页
            page_li[0].click();
        }

        if (e && e.keyCode == 50 && !(input[0] == document.activeElement)) { //按"2" 切换至第二页
            page_li[1].click();
        }

        if (e && e.keyCode == 51 && !(input[0] == document.activeElement)) { //按"3" 切换至第三页
            page_li[2].click();
        }

        if (e && e.keyCode == 52 && !(input[0] == document.activeElement)) { //按"4" 切换至第四页
            page_li[3].click();
        }

        if (e && e.keyCode == 53 && !(input[0] == document.activeElement)) { //按"5" 切换至第五页
            page_li[4].click();
        }

        if (e && e.keyCode == 13 && input[0] == document.activeElement) { //按"回车键" 搜索
            document.getElementById("search_1_run").getElementsByTagName("img")[0].click();
        }

        if (e && e.keyCode == 9 && editing == document.activeElement) {
            editing.appendChild(document.createTextNode("\xa0-"));
            return false;
        }
    }
}


//播放菜单 ON/OFF
function s_menu() {
    menu = document.getElementById("sound_menu");
    play_menu = document.getElementById("play_menu");
    play_menu.style.display = "none";
    menu.addEventListener("click", function (e) {
        if (play_menu.style.display == "none") {
            play_menu.style.display = "block";
            setTimeout(function () {
                play_menu.style.height = "360px";
            }, 0);
        } else {
            play_menu.style.height = "0";
            setTimeout(function () {
                play_menu.style.display = "none";
            }, 500);
        }
        e.stopPropagation();
    })
    play_menu.addEventListener("click", function (e) {
        e.stopPropagation();
    })
}


//  播放音乐  ON/OFF
function startMusic(moveing) {
    if (audio.paused || moveing) {
        audio.play();
        play_btn.src = "images/暂停.png";
        time_1 = setInterval(progress, 30);
        my_music_start.innerHTML = "暂停";
        disc("on");
    } else {
        audio.pause();
        play_btn.src = "images/播放.png";
        clearInterval(time_1);
        my_music_start.innerHTML = "播放";
        disc("off");
    }
}

function run_music() {
    start.onclick = function () {
        startMusic(0);
    }
}


//      *播放音乐重置*
function music_reset(music_count) {
    clearInterval(time_1);

    //初始化拖动条和进度条位置,按钮
    lump.style.cssText = "transform: translateX(0px) rotate(" + deg_count + "deg)";
    progress_move.style.width = "0px";
    play_btn.src = "images/播放.png";

    //初始化歌名歌手歌词 等信息
    song_data.innerHTML = "歌名:" + songData[music_count].songName + "---歌手:" + songData[music_count].songer;
    lyrics_index = 0;
    disc_deg = 0;
    putIn(music_count);

    //重置封面/音乐盒子
    musicCover(music_count);
    disc("off");

    audio.load();
}




//  *实时获取并更新播放信息*
function progress() {
    var now = audio.currentTime; //获取当前播放时间
    var n = parseInt(progress_width) * (now / allTime);
    deg_count += 4;
    disc_deg += 1;

    //将秒 转换成 "00:00"形式 并更新信息
    if (time_updata) {
        var c_now = transform(audio.currentTime);
        var all = transform(allTime);
        music_time.innerHTML = c_now + "/" + all;
    }


    //音乐盒子转动
    now_cover[0].style.cssText += "transform: translateX(100px) rotate(" + disc_deg + "deg);";


    //检测是否正在拖动,若正在拖动则取消进度块和进度条的位置更新
    if (l_moving) {
        lump.style.cssText = "transform: translateX(" + n + "px) rotate(" + deg_count + "deg)";
        progress_move.style.width = n + "px";
    }
}


//拖动块角度初始化
var deg_count = 0;


//  *音乐进度-滑动块/点击块
function drag() {
    var p_left = progressw.offsetLeft;
    var lump_width = lump.offsetWidth;
    var range_p = 0;
    lump.onmousedown = function () {

        l_moving = 0; //状态:让progress函数暂停对滑动块和进度条的位置更新

        document.onmousemove = function (e) { //docment.onmousemove 让鼠标可以脱离按钮事件依然有效
            var e = e || window.event;
            var moved = e.clientX; //移动鼠标时的距离
            var lastest = moved - p_left - lump_width / 2;
            range_p = lastest / progress_width; //滑动块的位置在总进度条的进度百分比 [0,1] 
            deg_count += 4; //滑动块转动速度
            if (range_p > 1) {
                range_p = 1; //如果滑过了终点，就将它停留在终点位置
            } else if (range_p < 0) {
                range_p = 0; //如果滑到了起点的左侧，就将它重置为起点位置
            }

            //滑动时时刻改变滑块位置对应的歌曲时间
            time_updata = false; //改变状态,使拖动时下方的歌曲时间不再更新
            var now = transform(range_p * allTime);
            var all = transform(allTime);
            music_time.innerHTML = now + "/" + all;

            //拖动滑动块,对其位置更新
            lump.style.cssText = "transform: translateX(" + range_p * progress_width + "px) rotate(" + deg_count + "deg)";
            progress_move.style.width = range_p * progress_width + "px";


        }
        document.onmouseup = function (e) {
            var e = e || window.event;

            //松开鼠标时,让音乐播放进度和滑动块的位置同步
            audio.currentTime = range_p * allTime;

            //状态:让progress函数又开始对滑动块和进度条的位置更新
            l_moving = 1;

            //状态:让下方歌曲时间继续更新
            time_updata = true;

            //清除事件
            document.onmousemove = null;
            document.onmouseup = null;

            //重置
            clearInterval(time_1);

            //滑动块位置更新后自动开始播放
            startMusic(1);
        }
    }

    //点击进度条,让音乐同步
    document.getElementById("progress").addEventListener("click", function (e) {
        var e = e || window.event;

        //获取点击进度条时的位置
        var moved = e.clientX;
        var lastest = moved - p_left - lump_width / 2;

        var range = lastest / progress_width;


        //防止点击时超出进度条范围
        if (range < 0) {
            range = 0;
        } else if (range > 1) {
            range = 1;
        }

        //对点击后 滑动块、进度条、音乐播放进度 进行更新
        lump.style.cssText = "transform: translateX(" + range * progress_width + "px)";
        progress_move.style.width = range * progress_width + "px";
        audio.currentTime = range * allTime;

        //重置
        clearInterval(time_1);

        //滑动块位置更新后自动开始播放
        startMusic(1);
    })
}




//下一首音乐
function nextMusic() {
    music_count++;
    if (music_count == songData.length) {
        music_count = 0;
    }
    var now_music = songData[music_count].songSrc;
    audio.src = now_music;
    music_reset(music_count);
}


//上一首音乐
function preMusic() {

    music_count--;
    if (music_count == -1) {
        music_count = songData.length - 1;
    }
    var now_music = songData[music_count].songSrc;
    audio.src = now_music;
    music_reset(music_count);
}



//  *音量进度-滑动块/点击块
function soundDrag() {
    //音量初始化
    audio.volume = 0.5;
    var sound_progress = document.getElementById("sound_progress");
    var sound_lump = document.getElementById("sound_lump");
    var s_left = sound_progress.offsetLeft;
    var lump_width = sound_lump.offsetWidth;
    var progress_width = sound_progress.offsetWidth - sound_progress.offsetWidth / 20;
    sound_move.style.width = progress_width / 2 + "px";
    sound_lump.style.cssText = "transform: translateX(" + progress_width / 2 + "px)";

    sound_lump.onmousedown = function () {
        document.onmousemove = function (e) { //docment.onmousemove 让鼠标可以脱离按钮
            var e = e || window.event;

            var moved = e.clientX;

            var sound_lastest = moved - s_left - lump_width / 2; //获取滑动块距离进度条左边的距离

            var range = sound_lastest / progress_width;

            if (range >= 1) {
                range = 1; //如果滑过了终点，就将它停留在终点位置
            } else if (range <= 0) {
                range = 0; //如果滑到了起点的左侧，就将它重置为起点位置
            }

            //实时更新滑动块位置
            sound_lump.style.cssText = "transform: translateX(" + range * progress_width + "px)";
            audio.volume = range;
            sound_move.style.width = range * progress_width + "px";

        }

        document.onmouseup = function (e) {
            var e = e || window.event;
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    //点击音量进度条进行音量的改变
    document.getElementById("sound_progress").addEventListener("click", function (e) {
        var e = e || window.event;
        var moved = e.clientX;
        var sound_lastest = moved - s_left - lump_width / 2;
        var range = sound_lastest / progress_width;

        if (range < 0) {
            range = 0;
        }

        //实时更新音量滑动块位置
        sound_lump.style.cssText = "transform: translateX(" + range * progress_width + "px)";
        sound_move.style.width = range * progress_width + "px";
        audio.volume = range;
    })


    // var soundOnOff_value = 0;

    //点击按钮静音
    soundOnOff.addEventListener("click", function () {
        // var sound_value = sound_lump.getAttribute("style", "transform:translateX");
        // soundOnOff_value = sound_value.replace(/[^0-9.]/ig, "");

        //调到静音位置
        sound_lump.style.cssText = "transform: translateX(0px)";
        sound_move.style.width = "0px";
        audio.volume = 0;

    })
}

//对json-songData的歌词进行提取并写入div
function putIn(count) {
    var lyrics_str = "";
    var split_1 = songData[count].songLyrics.split("[");

    //提取歌词和时间,并对歌词进行id标记
    split_1.forEach(function (split_2) {
        var split_3 = split_2.split("]");
        var lyrics = split_3[1];
        var l_time = split_3[0].split(".");
        var l_time_1 = l_time[0].split(":");
        var time = l_time_1[0] * 60 + parseInt(l_time_1[1]);
        if (lyrics) {
            lyrics_str += '<p id = "s' + time + '">' + lyrics + "<p>";
        }
    })

    lyrics_str += "<p>--</p><p>--</p><p>--</p><p>--</p>";
    //歌词写入div
    document.getElementById("menu_right").innerHTML = lyrics_str;
}



var lyrics_index = 0;

//让歌词样式和滚动条位置对当前播放的歌词进行同步
function lyricsSyn() {
    var menu_right = document.getElementById("menu_right");
    audio.addEventListener("timeupdate", function () {
        var now = parseInt(this.currentTime);
        if (document.getElementById("s" + now)) {

            //对当前播放的歌词进行样式
            document.getElementById("s" + lyrics_index).style.backgroundColor = "grey";
            lyrics_index = now;
            document.getElementById("s" + now).style.backgroundColor = "white";

            //滚动条和歌词同步
            var skip = document.getElementById("skip");
            skip.setAttribute("href", "#s" + now);
            skip.click();
            menu_right.scrollTop = menu_right.scrollTop - menu_right.offsetHeight / 2; //设置x轴滚动一百像素
        }
    })

}



function musicCover(music_count) {

    //重置封面,且让音乐盒子归位
    now_cover[0].style.backgroundImage = "url(" + songData[music_count].songImgSrc + ")";
}


var disc_deg = 0;

function disc(state) {

    var front_box = document.getElementsByClassName("front_box");
    var back_box = document.getElementsByClassName("back_box");
    var disc = document.getElementsByClassName("disc");

    if (state == "on") {

        front_box[0].classList.add("box_after");
        back_box[0].classList.add("box_after");
        disc[0].classList.add("disc_after");

    } else {
        disc_deg = 0;
        front_box[0].classList.remove("box_after");
        back_box[0].classList.remove("box_after");
        disc[0].classList.remove("disc_after");
        now_cover[0].style.cssText += "transform: translateX(0px)";
    }
}

//令十进制的秒数转换为 "00:00"格式
function transform(times) {
    var result = "00:00";
    var minute, second
    minute = Math.floor(times / 60);
    if (minute < 10) {
        minute = "0" + minute;
    }
    second = Math.floor(times - 60 * minute);
    if (second < 10) {
        second = "0" + second;
    }
    result = minute + ":" + second;
    return result;
}