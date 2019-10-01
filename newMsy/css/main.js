//À¸Ä¿ÇÐ»»
(function () {
    var aSpan = document.querySelectorAll('.page_info section .info_title > span');
    var aMore = document.querySelectorAll('.info_title .more > a');
    var aContent = document.querySelectorAll('.info_content > div');
    for (var i= 0,len=aSpan.length; i < len; i++) {
        aSpan[i].idx = i;
        aSpan[i].onclick = function () {
            var i = this.idx;
            if(i%2 === 0){
                aSpan[i+1].className = '';
                aMore[i+1].className = ''
                aContent[i+1].className = ''
            }else {
                aSpan[i-1].className = '';
                aMore[i-1].className = ''
                aContent[i-1].className = ''
            }
            this.className = 'currSpan';
            aMore[i].className = 'moreShow';
            aContent[i].className = 'moreShow';
        }
    }
})();

//Ê±¼äÐÞ¸Ä
(function () {
    var times = document.querySelectorAll('.list_content .postTime');
    for(var i = 0,len=times.length;i<len;i++){
        var item = times[i];
        var html = item.innerHTML;
        item.innerHTML = html.split('-').join('/');
    };
}());

//ÂÖ²¥Í¼
// (function () {
//     var oBg = document.querySelector('.bg');
//     var imgLists = document.querySelector('.bg .bg-imgLists');
//     var imgs = document.querySelectorAll('.bg .bg-imgLists img');
//     var leftBtn = document.getElementById('left');
//     var rightBtn = document.getElementById('right');
//     var index = 0;
//     var length = imgs.length;
//     var offset = 0;
//     if(imgs){
//         offset = imgs[0].offsetWidth;
//     }
//     leftBtn.onclick = function () {
//         if( index <= 0 ){
//             index = length - 1;
//         }else {
//             index--;
//         }
//         move(index);
//     }
//     rightBtn.onclick = function () {
//         if( index >= length -1 ){
//             index = 0;
//         }else {
//             index++;
//         }
//         move(index);
//     }
//     function move(index) {
//         imgLists.style.marginLeft = -(offset*index) + 'px';
//     }
//     var timer = setInterval(function () {
//         if( index >= length -1 ){
//             index = 0;
//         }else {
//             index++;
//         }
//         move(index);
//     },3000);
//     window.onblur = imgLists.onmouseover = function () {
//         clearInterval(timer);
//     };
//     window.onfocus = oBg.onmouseleave = function () {
//         clearInterval(timer);
//         timer = setInterval(function () {
//             if( index >= length -1 ){
//                 index = 0;
//             }else {
//                 index++;
//             }
//             move(index);
//         },3000);
//     };
//     window.addEventListener('resize',function () {
//         if(imgs){
//             offset = imgs[0].offsetWidth;
//         }
//     })
// })();

// µ¯´°ÒÆ¶¯
(function () {
    var alters = document.getElementById('alter');
    var speedX = 0.8;
    var speedY = 0.6;
    var alterW = alters.offsetWidth;
    var alterH = alters.offsetHeight;
    var width = document.body.offsetWidth;
    var height = document.body.offsetHeight;
    var timer1 = setInterval(function () {
        if( alters.offsetLeft < 0 ){
            speedX = -speedX;
        }
        if( alters.offsetTop < 0 ){
            speedY = -speedY;
        }
        if( alters.offsetLeft > width-alterW ){
            speedX = -speedX;
        }
        if( alters.offsetTop > height-alterH ){
            speedY = -speedY;
        }
        alters.style.left = alters.offsetLeft + speedX + 'px';
        alters.style.top = alters.offsetTop + speedY + 'px';
    },1000/60);
    alters.onmouseover = function () {
        clearInterval(timer1);
    }

    alters.onmouseleave = function () {
        clearInterval(timer1);
        timer1 = setInterval(function () {
            if( alters.offsetLeft < 0 ){
                speedX = -speedX
            }
            if( alters.offsetTop < 0 ){
                speedY = -speedY
            }
            if( alters.offsetLeft > width-alterW ){
                speedX = -speedX
            }
            if( alters.offsetTop > height-alterH ){
                speedY = -speedY
            }
            alters.style.left = alters.offsetLeft + speedX + 'px';
            alters.style.top = alters.offsetTop + speedY + 'px';
        },1000/60);
    }
    var close = document.getElementById('close');
    close.onclick = function () {
        clearInterval(timer1);
        alters.style.display = 'none';
    }
})();
