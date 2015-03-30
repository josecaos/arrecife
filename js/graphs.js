//written by @joseCao5
var lienzo = document.getElementById("lienzo");
var context = lienzo.getContext("2d");
var a,x=50,y=50,mx=2,my=1;//,i = 1;
var canvas = $(".contlienzo");
var alto = lienzo.height+10;
var ancho = lienzo.width+10;
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

function nodo() { // circulo
	if( x >= ancho || x <= 0 )
  	 	mx = mx*-1;
	if( y >= alto || y <= 0 )
   		my = my*-1;
	x = x+mx;
	y = y+my;
    for (i = 0; i <= 8; i++) {
	context.beginPath();
	context.clearRect(0,0,700,500);
	context.fillStyle="black";
	context.arc(x+10,y-10, 20, 0,2*Math.PI,false);//circulo
	context.fill();
    //texto de la esfera
	//context.font = "0.3em Arial";
	//context.strokeText("un oscilador",x,y)
    }
}
//loop
	//setInterval("nodo()",30); //se manda a llamar cada 30ms
//
canvas.resize( function() {
alert('estoy cambiando de tamano :) p.d. extrno a mi pandita');
});
/*
//pinta
$('#lienzo').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});
*/
//doc ready:
function inicio(){
    nodo();
	}
canvas.addOnResizeEvent();//agrega a deteccion de cambio de tamano
//ready
$(function() {
//posiciones aleatorias cada refresh
    var c = Math.floor(Math.random() * 199);
    var d = Math.floor(Math.random() * 99);
    var e = Math.floor(Math.random() * 209);
    var f = Math.floor(Math.random() * 179);
    var g = Math.floor(Math.random() * 29);
    var a = Math.floor(Math.random() * 259);
    var b = Math.floor(Math.random() * 129);
    var c = Math.floor(Math.random() * 340);    
	inicio();
    //drawAsteroids();
});
//
