// Swipe Detection for Nav Bar on Mobile Devices
// TODO: Deal with inertial scroll bug
function swipeMeasure(el, callback) {
    var startX, startY, endX, endY, res;

    el.addEventListener('touchstart', function (e) {
        var touchObj = e.changedTouches[0]; //Started Touches
        startX = touchObj.pageX;
        startY = touchObj.pageY;
    }, false);
    
    el.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    
    el.addEventListener('touchend', function (e) {
        var touchObj = e.changedTouches[0]; //Finished Touches
        endX = touchObj.pageX;
        endY = touchObj.pageY;
        res = [[startX, startY], [endX, endY]];
        callback(res);
    }, false);
}

var uls = document.querySelectorAll('header > nav ul'),
    oldulstyle = [],
    lis = document.querySelectorAll('header li'),
    links = document.querySelectorAll('header li > a'),
    bigs = document.querySelectorAll('header li > a .big'),
    smalls = document.querySelectorAll('header li > a .small'),
    logo = document.getElementById("logo");
swipeMeasure(document.querySelector('nav'), function (swipe) {
    var i, disp = [swipe[1][0] - swipe[0][0], swipe[1][1] - swipe[0][1]]; //Displacement
    
    if (disp[1] > 20) {
        for (i = 0; i < links.length; i++) {
            lis[i].style.margin = '0.33em 5%';
            bigs[i].style.fontSize = '4em';
            smalls[i].style.fontSize = '1.25em';
        }
        logo.children[1].style.fontSize = "4em";
        logo.style.margin = "1em 0";
        logo.style.flex = "1 0 100%";
        for (i = 0; i < uls.length; i++) {
            oldulstyle[i] = uls[i].style.flex;
            uls[i].style.flex = "1 0 100%";
            uls[i].style.margin = "1em 0";
        }
    }
    else if (disp[1] < -50) {
        for (i = 0; i < links.length; i++) {
            lis[i].style.margin = '0.33em 2%';
            bigs[i].style.fontSize = '2em';
            smalls[i].style.fontSize = '0';
        }
        logo.children[1].style.fontSize = "2em";
        logo.style.margin = "0";
        logo.style.flex = "1 0 0";
        for(i=0; i < uls.length; i++){
            uls[i].style.flex = oldulstyle[i];
            uls[i].style.margin = "0";
        }
    }
});