//written by @joseCao5
var lienzo = document.getElementById("lienzo");
var context = lienzo.getContext("2d");
var a,x=50,y=50,mx=2,my=1;//,i = 1;
var canvas = $(".contlienzo");
var alto = lienzo.height-5;
var ancho = lienzo.width-5;
//detecta cambio de tamano
$.fn.addOnResizeEvent = function(custom_options) {
	var options = {
		timeInterval : 100,
		forceIE : false
	}
	$.extend( custom_options, options );
	// Soporte IE
	if ($.browser.ie && !options.forceIE) return;
	return this.each( function() {
		var target = $(this);
		var lw, lh;
		var interval = setInterval( function() {
			var w = target.width(),
				h = target.height();
			if (!lw == undefined) lw = w;
			if (!lh == undefined) lh = h;
			if ( lw != w || lh != h )
			{
				lw = w;
				lh = h;
				target.trigger( "resize" );
			}
		}, options.timeInterval );
	} );
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
	context.beginPath();
	context.clearRect(0,0,700,500);
	context.fillStyle="black";
	context.arc(x,y, 8, 0,2*Math.PI,false);//circulo
	context.fill();
    //texto de la esfera
	//context.font = "0.3em Arial";
	//context.strokeText("un oscilador",x,y);
	//
	setTimeout("nodo()",30); //practicamente se manda a llamar cada 30ms !
}
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
	inicio();
});
//
