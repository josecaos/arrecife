//written by @joseCao5
var lienzo = document.getElementById("lienzo");
var context = lienzo.getContext("2d");
var a,x,y,mx=2,my=1;//,i = 1;
var canvas = $(".contlienzo");
var alto = lienzo.height+10;
var ancho = lienzo.width+10;
//posiciones aleatorias cada refresh
    var c = Math.floor(Math.random() * 199);
    var d = Math.floor(Math.random() * 99);
    var e = Math.floor(Math.random() * 209);
    var f = Math.floor(Math.random() * 179);
    var g = Math.floor(Math.random() * 29);
    var a = Math.floor(Math.random() * 259);
    var b = Math.floor(Math.random() * 129);
    var c = Math.floor(Math.random() * 340); 
    x = d;
    y = g;
//detecta cambio de tamano
$.fn.addOnResizeEvent = function(custom_options) {
	var options = {
		timeInterval : 100,
		forceIE : false
	};
	$.extend( custom_options, options );
};
//
//funciones

function nodo(t,c) { // circulo
	if( x >= ancho || x <= 0 )
  	 	mx = mx*-1;
	if( y >= alto || y <= 0 )
   		my = my*-1;
	x = x+mx;
	y = y+my;
    for (i = 0; i <= 8; i++) {
	context.beginPath();
	context.clearRect(0,0,300,200);
	context.fillStyle=c;
	context.arc(x+10,y-10, t, 0,2*Math.PI,false);//circulo
	context.fill();
    //texto de la esfera
	//context.font = "0.3em Arial";
	//context.strokeText("un oscilador",x,y)
    }
}
//
canvas.resize( function() {
alert('estoy cambiando de tamano :) p.d. extrano a mi pandita');
});

//ready
$(function() {
    //movimiento oscilador
    //loop
	setInterval(function() {
        var w = Math.floor(Math.random() * 20);
        var q = Math.floor(Math.random() * 40);
        var uno = new nodo(q,"black");
        var dos = new nodo(w,"red");
    },250); //se manda a llamar cada 30ms
    canvas.addOnResizeEvent();//agrega a deteccion de cambio de tamano
});
//
