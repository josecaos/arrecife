////written by @joseCao5
//SinOsc
var sin = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: 220,
        mul: 0.25
    }
});
var seno = flock.synth(sin);
//
$(function() {

})
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