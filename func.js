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
