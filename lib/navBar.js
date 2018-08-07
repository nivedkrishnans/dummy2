var navBarElement = document.getElementById("navBar");
var navMobile = document.getElementById('navBarMobile');
var navHeight = navBarElement.offsetHeight;

function navAppear(){

    if(window.pageYOffset > 10){
        navMobile.style.top = "0";
            if(document.documentElement.clientWidth >= 760){
            navBarElement.style.top = "0";
    }
    }
    else{
        navMobile.style.top = "-42px";
        if(document.documentElement.clientWidth< 760)
            navBarElement.style.top = "-400px";
        else
            navBarElement.style.top = "-100px";
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
        navBarElement.style.top = "-400px";
        ham.classList.remove('is-active');
    }
    else{
        navBarElement.style.top = "48px";
        ham.classList.add('is-active');
    }
    navDisplay = !navDisplay;
}

ham.onclick = function() {
    toggleNavMobile(!navDisplay);
};



var t=0;
var testBox = setInterval(function(){
    document.getElementById("test").innerHTML =  (window.pageYOffset) + "<br>" + (navBarElement.style.top) + "<br>" + (document.documentElement.clientWidth) + "<br>" + t;
        t++;
} , 500);