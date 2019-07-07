        index_RC = 0;
        var time_2 = null;

        //首页轮播图按钮样式初始化
        function setBtnBolor() {
                var aspan = document.getElementById("rotation_chart_btn").getElementsByTagName("span");
                for (var i = 0, len = aspan.length; i < len; i++) {
                        aspan[i].style.backgroundColor = "grey";
                }
                aspan[index_RC].style.backgroundColor = "yellow";
        }



        //轮播图class数组
        alist = ["list1", "list2", "list3", "list4", "list5", "list6", "list7"];

        //轮播图下一张图片
        function nextRun() {
                var ali = document.getElementById("main_rotation_chart").getElementsByTagName("li");
                var len_a = alist.length - 1;

                //alist里面的class进行位置调整
                alist.unshift(alist[len_a]);
                alist.pop();

                //对所有图片进行class设置
                for (var i = 0, len = alist.length; i < len; i++) {
                        ali[i].setAttribute("class", alist[i]);
                }

                index_RC = parseInt(index_RC) + 1;
                if (index_RC > 6) {
                        index_RC = 0;
                }

                setBtnBolor();

        }

        //轮播上一张图片
        function preRun() {
                var ali = document.getElementById("main_rotation_chart").getElementsByTagName("li");

                //alist里面的class进行位置调整
                alist.push(alist[0]);
                alist.shift();

                //对所有图片进行class设置
                for (var i = 0, len = alist.length; i < len; i++) {
                        ali[i].setAttribute("class", alist[i]);
                }
                index_RC = index_RC - 1;
                if (index_RC == -1) {
                        index_RC = 6;
                }
                setBtnBolor();

        }


        //轮播图开始播放
        function runBtn() {
                var main_1 = document.getElementById("main_1");
                time_2 = setInterval(nextRun, 3000);
                main_1.addEventListener("click", function (ev) {

                        //获取点击图片时该li的class
                        var list = ev.target.parentNode.getAttribute("class");

                        //判断class,再根据class进行上一个/下一个轮播
                        if (list == "list3") {
                                preRun();
                        } else if (list == "list5") {
                                nextRun();
                        }
                })

        }


        function RC_btn (){
                var RC_L = document.getElementById("RC_L");
                var RC_R = document.getElementById("RC_R");

                RC_L.addEventListener("click",function(){
                        preRun();
                })

                RC_R.addEventListener("click",function(){
                        nextRun();
                })

        }




        //鼠标悬停在按钮/图片上时 停止轮播
        function hoverStop() {
                var ul = document.getElementById("main_rotation_chart").getElementsByTagName("ul")[0];
                var RC_L = document.getElementById("RC_L");
                var RC_R = document.getElementById("RC_R");
                ul.addEventListener("mouseover", function () {
                        clearInterval(time_2);
                })
                ul.addEventListener("mouseout", function () {
                        time_2 = setInterval(nextRun, 3000);
                })

                RC_L.addEventListener("mouseover", function () {
                        clearInterval(time_2);
                })
                RC_L.addEventListener("mouseout", function () {
                        time_2 = setInterval(nextRun, 3000);
                })

                RC_R.addEventListener("mouseover", function () {
                        clearInterval(time_2);
                })
                RC_R.addEventListener("mouseout", function () {
                        time_2 = setInterval(nextRun, 3000);
                })


        }


        //鼠标悬停在按钮上时,播放切换至指定图片
        function select_btn() {
                var aspan = document.getElementById("rotation_chart_btn").getElementsByTagName("span");
                var ali = document.getElementById("main_rotation_chart").getElementsByTagName("li");
                var adiv = document.getElementById("rotation_chart_btn");
                for (var i = 0, len = aspan.length; i < len; i++) {
                        aspan[i].addEventListener("mouseover", function () {

                                //悬停后停止轮播图播放
                                clearInterval(time_2);

                                //悬停时,更新按钮样式
                                aspan[index_RC].style.backgroundColor = "grey";
                                this.style.backgroundColor = "yellow";
                                var l_index_RC = this.getAttribute("l_index_RC");

                                //获取悬停按钮和上一个选中按钮之间的位置差值
                                var count = index_RC - l_index_RC;
                                index_RC = l_index_RC;

                                if (count > 0) {

                                        //根据差值对class数组进行重新排序
                                        for (var i = 0; i < count; i++) {
                                                alist.push(alist[0]);
                                                alist.shift();
                                        }

                                        //class设置
                                        for (var i = 0, len = alist.length; i < len; i++) {
                                                ali[i].setAttribute("class", alist[i]);
                                        }
                                } else if (count < 0) {

                                        //根据差值对class数组进行重新排序
                                        count = -count;
                                        for (var i = 0; i < count; i++) {
                                                alist.unshift(alist[6]);
                                                alist.pop();
                                        }
                                        for (var i = 0, len = alist.length; i < len; i++) {
                                                ali[i].setAttribute("class", alist[i]);
                                        }
                                }
                        })

                        //鼠标移除后重新开始定时器
                        adiv.addEventListener("mouseout", function () {
                                clearInterval(time_2);
                                time_2 = setInterval(nextRun, 3000);
                        })
                }
        }