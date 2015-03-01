////written by @joseCao5
//
var arrecife = flock.init();// enviroment //inicia toda la sesion de sintesis
//funciones
function on() {
      arrecife.play();
    };
function off() {
      arrecife.stop();
    };
//oscilador
function sinte() {
 return flock.synth({
    synthDef: {
       id: "nodo",
       ugen: "flock.ugen.sin",
       freq: 120
    }
 });
};
//
$(function() {
  arrecife.play();
});
/*
//crea el sinte
//
//alternativa para instanciar un sinte
function synth(rate) {
 return flock.synth({
    synthDef: {
       ugen: "flock.ugen.triggerGrains",
       // some parameters here
       speed: rate
    }
 })
};

var newSynth = synth(2.0);
var newNewSynth = synth(0.5);

//Or without the argument:

function synth() {
 return flock.synth({
    synthDef: {
       id: "granulator",
       ugen: "flock.ugen.triggerGrains",
       // some parameters here
    }
 })
};

var newSynth = synth();
newSynth.set("granulator.speed", 0.5);

var newNewSynth = synth();
newNewSynth.set("granulator.speed", 2.0);
*/
