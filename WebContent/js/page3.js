//音乐类型标签选择卡
function musicList() {
    var tbody = document.getElementsByTagName("tbody");
    var str = "";
    for (var i = 0, len = songData.length; i < len; i++) {

        str += "<tr><th>▶</th><th>" + songData[i].songName + "</th><th>" + songData[i].songLen + "</th><th>" + songData[i].songer + "</th></tr>"

    }
    tbody[0].innerHTML = str;
    var atr = document.getElementsByTagName("tr");
    for (var i = 0, len = atr.length; i < len; i++) {
        if (i % 2 == 0) {
            atr[i].classList.add("evenrowcolor");
        } else {
            atr[i].classList.add("oddrowcolor");
        }
    }

}

function listPlay() {
    th_play = document.getElementsByTagName("tbody")[0].getElementsByTagName("th");
    for (var i = 0, len = th_play.length; i < len; i++) {
        th_play[i].index = i ;
    }
    for (var i = 0, len = th_play.length; i < len; i++) {
        th_play[i].addEventListener("click", function () {
            music_count = this.index/4;
            var now_music1 = songData[music_count].songSrc;
            audio.src = now_music1;
            music_reset(music_count);
            startMusic();
        })
    }
}



// 音频加载完成后的一系列操作
// function duration() {
//     if (audio != null) {
//         audio.load();
//         audio.oncanplay = function () {
//         }
//     }
// }