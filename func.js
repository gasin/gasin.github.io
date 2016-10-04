var isPC;
var isSwell = 0;

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
/*
$(function() {
    var $clickable = $(".header");

    $clickable.on('mousedown', function(e) {
        var _self   = this;
        var x       = e.offsetX;
        var y       = e.offsetY;

        var $effect = $(_self).find('.free');
        var w       = $effect.width();
        var h       = $effect.height();

        $effect.css({
            left: x - w / 2,
            top: y - h / 2
        });

        if (!$effect.hasClass('is-show')) {
            $effect.addClass('is-show');

            setTimeout(function() {
                $effect.removeClass('is-show');
            }, 1500);
        }
        return false;
    });

});
*/

function swell(){
    if(isPC == 0) return;
    if(isSwell%4 == 0){
        document.getElementById("swell").style.fontSize="500%";
        document.getElementById("swell").innerHTML = "shrink";
    } else if(isSwell%4 == 2){
        document.getElementById("swell").style.fontSize="100%";
        document.getElementById("swell").style.width="50%";
        document.getElementById("swell").innerHTML = "swell";
    } else if(isSwell%4 == 1){
        document.getElementById("swell").style.fontSize="200%";
    } else{
        document.getElementById("swell").style.fontSize="200%";
        document.getElementById("swell").style.width="";
    }
    isSwell += 1;
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

