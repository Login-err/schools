window.onload = function () {
    (function () {
        var aLi = document.querySelectorAll('.second_section > ul > li');
        var aNewLists = document.querySelectorAll('.news_list');
        var top_index = 0;
        var bottom_index = 0;
        var timer = null;
        for (var j = 0; j < aLi.length; j++) {
            aLi[j].idx = j;
            aLi[j].onmouseover = function(){
                var ii = this.idx;
                if( ii === bottom_index ){return;}
                aLi[bottom_index].className = '';
                aNewLists[bottom_index].className = 'news_list';
                bottom_index = ii;
                aLi[bottom_index].className = 'mouse_on';
                aNewLists[bottom_index].className = 'news_list current_news';
            };
        };

        var aTab = document.querySelectorAll('.news_detail   .tabs .tab_btn');
        var marginLeft = document.getElementById("news_content");
        var fatherContent = document.getElementById("news_detail");
        var offset = 304;
        var startTime = new Date();
        for (var i= 0; i < aTab.length; i++){
            aTab[i].idx = i;
            aTab[i].onmouseover = function () {
                var ii = this.idx;
                var endTime = new Date();
                if( endTime - startTime < 280){return;};
                aTab[top_index].className = 'tab_btn';
                top_index = ii;
                aTab[top_index].className = 'on tab_btn';
                marginLeft.style.marginLeft = -offset*top_index + 'px';
            }
        }
        timer = setInterval(move,2800);
        window.onfocus = fatherContent.onmouseleave = function () {
            clearInterval(timer);
            timer = setInterval(move,2800);
        };
        window.onblur = fatherContent.onmouseenter = function () {
            clearInterval(timer);
        };
        function move(){
            aTab[top_index].className = 'tab_btn';
            top_index++;
            if( top_index >= aTab.length){
                top_index = 0;
            }
            marginLeft.style.marginLeft = -offset*top_index + 'px';
            aTab[top_index].className = 'tab_btn on';
        };

        (function () {
            var aNewsDiv = document.querySelectorAll('.news_list table div:first-child');
            var date = [];
            var divLens = aNewsDiv.length;
            var year = [];
            var month = [];
            for (z = 0;z  < divLens; z++) {
                date[z] = aNewsDiv[z].innerHTML;
                month[z] = date[z].substring(5,10);
                year[z] = date[z].substring(0,4);
            }
            for (h = 0; h < divLens; h++) {
                aNewsDiv[h].innerHTML = ''
                    + '<p style="width:68px;height:45px;line-height:45px;padding-left:8px;text-align:left;font-size:22px;color:#fff;background-color: #368bd7;">'
                    + month[h]
                    + '</p>'
                    + '<p style="width:58px;height:15px;line-height:15px;padding:0 0 13px 18px;text-align:left;font-size:15px;color:#fff;;background-color: #368bd7;">'
                    + year[h]
                    + '</p>';
            }
        })();
    }());
}
















