//written by @joseCao5
var lienzo = document.getElementById("lienzo");
var context = lienzo.getContext("2d");
var a,x=50,y=50,xx=2,yy=1;//,i = 1;
var canvas = $(".contlienzo");
var alto = lienzo.height-10;
var ancho = lienzo.width-10;
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
//funciones
function nodo() {
	if( x >= ancho || x <= 0 )
  	 	xx = xx*-1;
	if( y >= alto || y <= 0 )
   		yy = yy*-1;
	x = x+xx;
	y = y+yy;
	context.beginPath();
	context.clearRect(0,0,700,500);
	context.fillStyle="lime";
	context.arc(x,y, 5, 0,2*Math.PI,false);
	context.fill();
	context.font = "0.5em Arial";
	context.strokeText("An oscillator",x,y);
	//			
	setTimeout("nodo()",30);
}
//
canvas.resize( function() {
// cuando cambie el tamano del doc
});
//pinta
$('#lienzo').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;	
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});
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