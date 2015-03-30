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
//copo de Koch
function fractalRecta(xa,ya,xb,yb){
    var largo = Math.sqrt(Math.pow(xb-xa,2) + Math.pow(yb-ya,2));
    if (largo > 1){
        //Dividimos la recta en 3 partes
        var sx = (xb-xa)/3;
        var sy = (yb-ya)/3;
        //Buscamos los puntos de las 4 rectas
        var x1 = xa;
        var y1 = ya;
        var x2 = xa + sx;
        var y2 = ya + sy;
        var vx = (Math.sqrt(3)/6)*(xb-xa);
        var vy = (Math.sqrt(3)/6)*(yb-ya);
        var x3 = x1 + ((xb-xa)/2) - vy;
        var y3 = y1 + ((yb-ya)/2) + vx;
        var x4 = xb - sx;
        var y4 = yb - sy; 
        var x5 = xb;
        var y5 = yb;
        //Borramos recta anterior
        cwxe.beginPath();
        cwxe.moveTo(xa,-ya+he);
        cwxe.lineTo(xb,-yb+he);
        cwxe.stroke();
        cwxe.closePath();
        //Pintamos las 4 nuevas rectas
        cwxe.beginPath();
        cwxe.moveTo(x1,-y1+he);
        cwxe.lineTo(x2,-y2+he);
        cwxe.lineTo(x3,-y3+he);
        cwxe.lineTo(x4,-y4+he);
        cwxe.lineTo(x5,-y5+he);
        cwxe.fill();
        cwxe.closePath();
        //Nueva llamada recursiva a cada segmento
        fractalRecta(x1,y1,x2,y2);
        fractalRecta(x2,y2,x3,y3);
        fractalRecta(x3,y3,x4,y4);
        fractalRecta(x4,y4,x5,y5);
    }
}
    //fractal
    //Calculamos los puntos de un triángulo inicial
    var p1x = we/2-lado/2;
    var p1y = he/2-altura/3;
    var p2x = p1x+lado;
    var p2y = p1y;
    var p3x = p1x+lado/2;
    var p3y = p1y+altura;
    //Lo pintamos
    cwxe.beginPath();
    cwxe.moveTo(p1x,-p1y+he);
    cwxe.lineTo(p2x,-p2y+he);
    cwxe.lineTo(p3x,-p3y+he);
    cwxe.lineTo(p1x,-p1y+he);
    cwxe.fill();
    cwxe.closePath();
//
canvas.resize( function() {
alert('estoy cambiando de tamano :) p.d. extrano a mi pandita');
});
//ready
$(function() {
    //Llamamos al fractal 
    fractalRecta(p1x,p1y,p3x,p3y);
    fractalRecta(p3x,p3y,p2x,p2y);
    fractalRecta(p2x,p2y,p1x,p1y);
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
