function button(){
	/*
	var bodyElement = document.body;
	var rand = [];
	for(var i = 0; i < 3; i++) rand.push(Math.floor(Math.random()*256));
	bodyElement.style.backgroundColor = "#"+rand[0].toString(16)+rand[1].toString(16)+rand[2].toString(16);
	*/
	var buttonElement = document.getElementById("button0");
	buttonElement.style.fontSize = String((Math.floor(Math.random()*20+10))*10)+"%";
}

function drawCircle() {
	var canvas = document.getElementById('circle');
	if ( ! canvas || ! canvas.getContext ) { return false; }
	var ctx = canvas.getContext('2d');
	var rand = [];
	for(var i = 0; i < 3; i++) rand.push(Math.floor(Math.random()*256));
	ctx.beginPath();
	ctx.fillStyle = "#"+rand[0].toString(16)+rand[1].toString(16)+rand[2].toString(16);
	ctx.arc(70, 70, 60, 0, Math.PI*2, false);
	ctx.fill();
}

function changetitle(){
	var rand = [];
	for(var i = 0; i < 3; i++) rand.push(Math.floor(Math.random()*256));
	
	var titleElement = document.getElementById("title");
	titleElement.style.color = "#"+rand[0].toString(16)+rand[1].toString(16)+rand[2].toString(16);
}