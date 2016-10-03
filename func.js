var isPC;

function init(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone')>0||ua.indexOf('iPod')>0||ua.indexOf('Android')>0||ua.indexOf('Mobile')>0||ua.indexOf('iPad')>0){
        document.write('<link rel="stylesheet" type="text/css" href="tablet.css">');
        isPC = 0;
    } else{
        document.write('<link rel="stylesheet" type="text/css" href="style.css">');
        isPC = 1;
    }
    document.close();
}

window.onload = function(){
    if(isPC == 0){
        document.getElementById("footer").innerHTML="For more beautiful design and more exciting gimmicks, <br>please view this site on the PC!";
    }
}

function disappear(){
    if(isPC == 0) return;
    document.getElementById("gimmick").style.display="none";
    document.getElementById("introduce").style.display="none";
}

function appear(){
    if(isPC == 0) return;
    document.getElementById("gimmick").style.display="block";
    document.getElementById("introduce").style.display="block";
}

function black(){
    if(isPC == 0) return;
    document.getElementById("main").style.backgroundColor= "#000000";
}

function preblack(){
    if(isPC == 0) return;
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
}
