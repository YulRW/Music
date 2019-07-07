        //占位符提示
        function tips() {
            var editing = document.getElementById("editing");
            editing.onclick = function () {
                editing.className = "a";
            }

        }

        //富文本编辑器
        function edit_tool() {
            var btn = document.getElementById("edit_tool").getElementsByTagName("button");
            btn[0].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[1].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[2].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[3].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[4].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[5].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[6].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[7].onclick = function () {
                execCommandCM(this.dataset);
            }
            btn[8].onclick = function () {
                execCommandCM(this.dataset);
            }

        }

        //核心：当传参的data中有data.value时，则data.value作为第三个参数，否则为空
        function execCommandCM(data) {

            if (data.value) {
                document.execCommand(data.command, false, data.value);
            } else {
                document.execCommand(data.command, false, null)
            }

        }

        function postText() {


            var get = document.getElementById("post_html");
            var editing = document.getElementById("editing");

            //定义并初始化时间变量
            var my_date_h = 0

            var my_date_m = 0;

            var my_date_s = 0;

            get.addEventListener("click", function () {

                
                //创建一个article元素
                var creat = document.createElement("article");

                var article = document.getElementsByTagName("article")[0];

                var cm_context = document.getElementById("cm_context");

                var post_text = editing.innerHTML;

                if(post_text == ""){
                    return false;
                }

                //创建一个日期对象
                var my_date = new Date();

                //时间换算：当时间<10时，个位数前加“0”；
                if (my_date.getHours() < 10) {
                    my_date_h = "0" + my_date.getHours();
                }else{
                    my_date_h = my_date.getHours();
                }

                if (my_date.getMinutes() < 10) {
                    my_date_m = "0" + my_date.getMinutes();
                }else{
                    my_date_m = my_date.getMinutes();
                }

                if (my_date.getSeconds() < 10) {
                    my_date_s = "0" + my_date.getSeconds();
                }else{
                    my_date_s = my_date.getSeconds();
                }

                now_date = my_date.getFullYear() + "-" + (my_date.getMonth() + 1) + "-" + my_date.getDate() + "---" + my_date_h + ":" + my_date_m + ":" + my_date_s;

                //生成html文本
                var str = "<header><div><img src=\"./images/头像.jpg\" alt=\"\" width=\"38px\"></div><div class=\"personal_text\"><div class=\"article_name\">猴博士</div><div>前端工程师</div></div></header><div class=\"article_context\">" + post_text + "</div><div class=\"article_time\">" + now_date + "</div><footer><ul><li><a href=\"##\">赞同</a></li><li><a href=\"##\">反对</a></li><li><a href=\"##\">评论</a></li><li><a href=\"##\">收藏</a></li><li><a href=\"##\">分享</a></li></ul></footer>";

                // var creatNode = document.createTextNode(str);
                // creat.appendChild(creatNode);
                creat.innerHTML = str;

                cm_context.insertBefore(creat, article);
            })

        }