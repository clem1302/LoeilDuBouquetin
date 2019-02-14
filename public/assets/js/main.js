var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
	const image = new Image();
	image.src = "https://media1.tenor.com/images/1c206f81e946ce9532351d1c49bf730a/tenor.gif?itemid=5255913";
	image.style.position= "fixed";
	image.style.top = "50%";
	image.style.left = "50%";
	image.style.transform = "translate(-50%, -50%)";
	image.style.zIndex = 9999999;
	image.onload = function(){
		document.body.appendChild(image);
		setTimeout(function(){
			document.body.removeChild(image);
		},3000)
	}


}).listen();