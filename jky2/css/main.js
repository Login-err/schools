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
    timer = setInterval(move,4000);
    window.onfocus = fatherContent.onmouseleave = function () {
      clearInterval(timer);
      timer = setInterval(move,4000);
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

    // 新版 学院新闻轮播部分
    (function () {
      // 方便后台调试 这里的后台预览样式会崩掉，但是前台显示是没有问题的 下面同理
      // 如果想正确预览 注释掉if判断即可，但是频道选择会消失
      if(location.origin === 'http://webplus.scuec.edu.cn'){
        return;
      }
      var ulTag = document.querySelector('.carousel ul');
      var carouselImg = document.querySelectorAll('.carousel .picture19');
      var len = carouselImg.length;
      var html = '';
      for (var i= 0;  i< len; i++) {
        var item = carouselImg[i];
        var aHref = item.getAttribute('href');
        var aHtml = item.getAttribute('title');
        var src = item.querySelector('img').src;
        html +=
        '<li class="car-hide">' +
          '<a href="' + aHref +'">' +
            '<img src="' + src +'" class="carImg">' +
          '</a>' +
          '<p class="carP">' +
            '<a href="' + aHref +'">'+ aHtml + '</a>' +
          '</p>' +
        '</li>'
      }
      html +=
        '<div class="tab-btn">' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
        '</div>';

      ulTag.innerHTML = html;
    })();

    // 新版 学院新闻右边列表部分
    (function () {
      if(location.origin === 'http://webplus.scuec.edu.cn'){
        return;
      }
      var pTag = document.querySelectorAll('.first_content .getPro .table-first  > tbody > tr > td > p');
      var divTag = document.querySelectorAll('.first_content .car-new-lists .table-first div');
      var tdTag = document.querySelectorAll('.first_content .car-new-lists .table-first td[align="right"]');
      var news = document.querySelector('.first_content .car-new-lists');
      var len = divTag.length;
      var pHtml = [];
      var html = ''
      for (var i= 0; i < len; i++) {
        var item = pTag[i].children[0].innerHTML;
        pHtml.push(item);
      }
      for (var j = 0; j < len; j++) {
        var divHtml = divTag[j].innerHTML;
        var year = divHtml.substring(0,4);
        var monthDay = divHtml.substring(5,10);
        var tdHtml = tdTag[j].children[0].innerHTML;
        var aHref = tdTag[j].children[0].getAttribute('href');
        html +=
          '<li>' +
            '<a href="'+ aHref+'">' +
              '<div class="left-time">' +
                '<span class="time-m-d">'+ monthDay +'</span>' +
                '<span class="time-year">'+ year +'</span>' +
              '</div>' +
              '<div class="right-news">' +
                '<h6>'+ tdHtml +'</h6>' +
                '<p>'+ pHtml[j] +'</p>' +
              '</div>' +
            '</a>' +
          '</li>';
      }
      news.innerHTML = html;
    })();

    // 轮播图控制运动
    (function () {
      if(location.origin === 'http://webplus.scuec.edu.cn'){
        return;
      }
      var car = document.querySelector('.carousel > ul');
      var carLi = car.querySelectorAll('li');
      var carSpan = car.querySelectorAll('.tab-btn span');
      var liLen = carLi.length;
      var carIndex = 0;
      var varAgo = new Date()-800;
      var varNow = new Date();
      carLi[carIndex].className = 'car-show';
      carSpan[carIndex].className = 'on';
      var carTimer = setInterval(carMove,4000);
      function carMove() {
        carLi[carIndex].className = 'car-hide';
        carSpan[carIndex].className = '';
        carIndex++;
        if( carIndex >= liLen ){
          carIndex = 0;
        }
        carLi[carIndex].className = 'car-show';
        carSpan[carIndex].className = 'on';
      }
      window.onfocus = car.onmouseleave = function () {
        clearInterval(carTimer);
        carTimer = setInterval(carMove,4000);
      };
      window.onblur = car.onmouseover = function () {
        clearInterval(carTimer);
      };

      for (var j = 0; j < liLen; j++) {
        var item = carSpan[j];
        item.j = j;
        item.onclick = function () {
          varNow = new Date();
          if( varNow - varAgo < 800 ){
              return
          }
          carLi[carIndex].className = 'car-hide';
          carSpan[carIndex].className = '';
          carIndex = this.j;
          carLi[carIndex].className = 'car-show';
          carSpan[carIndex].className = 'on';
          varAgo = new Date();
        }
      }
    })();
  }());
}
















