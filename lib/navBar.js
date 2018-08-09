var navBar = document.getElementById("navBar");
var navMobile = document.getElementById('navBarMobile');
var navHeight = navBar.offsetHeight;
var homeNav = document.getElementById("homeNav");
var hoverNavDisplay = document.getElementById("hoverNavDisplay");



function navAppear(){

    if(window.pageYOffset > 10){
        navMobile.style.top = "0";
            if(document.documentElement.clientWidth >= 760){
            navBar.style.top = "0";
    }
    }
    else{
        navMobile.style.top = "-50px";
        toggleNavMobile(false);
        if(document.documentElement.clientWidth< 760)
            navBar.style.top = "-400px";
        else
            navBar.style.top = "-100px";
    }

}


             

var navSets = document.getElementsByClassName("navLinkSet");

window.onscroll = function(){
    navAppear();

};
window.onresize = function(){
    toggleNavMobile(false);
    if(document.documentElement.clientWidth >= 760){
        navSets[0].style.flex = "3 0 0";
        navSets[1].style.flex = "1 0 0";
        navSets[2].style.flex = "4 0 0";

    }
    else{
        navSets[0].style.flex =  "1 0 100%";
        navSets[1].style.flex =  "1 0 100%";
        navSets[2].style.flex =  "1 0 100%";
    }
    navAppear();
};
window.onload = function(){
    toggleNavMobile(false);
    if(document.documentElement.clientWidth >= 760){
        navSets[0].style.flex = "3 0 0";
        navSets[1].style.flex = "1 0 0";
        navSets[2].style.flex = "4 0 0";
    }
    else{
        navSets[0].style.flex =  "1 0 100%";
        navSets[1].style.flex =  "1 0 100%";
        navSets[2].style.flex =  "1 0 100%";
    }
    navAppear();
};


var ham = document.getElementById('hamburgerButton');
var navDisplay = false;     //whether or not nav menu is displayed on mobile

function toggleNavMobile(disp){         //shows nav menu for mobile if argument is true, otherwise hides
    
    if(!disp){
        navMobile.style.borderBottom = "#ffee9c solid 1px";
        navBar.style.top = "-400px";
        ham.classList.remove('is-active');
        homeNav.style.opacity= "0";
    }
    else{
        navMobile.style.borderBottom = "#000000 solid 1px";
        navBar.style.top = "44px";
        ham.classList.add('is-active');
        homeNav.style.opacity= "1";
    }
    navDisplay = !navDisplay;
}



/*
ham.onclick = function() {
    toggleNavMobile(!navDisplay);
};
*/

ham.addEventListener("click", function() {
    toggleNavMobile(!navDisplay);
    }, true);


 


hoverNavDisplay.onmouseover = function(){
    if(document.documentElement.clientWidth >= 760){
            navBar.style.top = "0";
    }

}

hoverNavDisplay.onmouseout = function(){
    if((document.documentElement.clientWidth >= 760) && (window.pageYOffset < 10)){
            navBar.style.top = "-100px";
    }
}

var t=0;
var testBox = setInterval(function(){
    document.getElementById("test").innerHTML =  (window.pageYOffset) + "<br>" + (navBar.style.top) + "<br>" + (document.documentElement.clientWidth) + "<br>" + t;
        t++;
} , 500);