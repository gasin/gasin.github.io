function button(){
	var bodyElement = document.body;
	var rand = [];
	for(var i = 0; i < 3; i++) rand.push(Math.floor(Math.random()*256));
	bodyElement.style.backgroundColor = "#"+rand[0].toString(16)+rand[1].toString(16)+rand[2].toString(16);
}