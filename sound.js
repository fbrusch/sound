// Generated by CoffeeScript 1.9.1
var Oscillator, context, gain, osc;

context = new AudioContext();

osc = context.createOscillator();

gain = context.createGain();

gain.gain.value = 0;

osc.connect(gain);

osc.start();

gain.connect(context.destination);

Oscillator = (function() {
  function Oscillator() {
    this.osc = context.createOscillator();
    this.osc.type = "triangle";
    this.gain = context.createGain();
    this.gain.gain.value = 0;
    this.gain.connect(context.destination);
    this.osc.connect(this.gain);
  }

  Oscillator.prototype.play = function(freq, startOffset) {
    var curTime, startTime;
    curTime = context.currentTime;
    startTime = curTime + startOffset;
    console.log("play");
    this.osc.start(curTime + startOffset);
    this.osc.frequency.value = freq;
    this.gain.gain.linearRampToValueAtTime(0, startTime);
    this.gain.gain.linearRampToValueAtTime(0.5, startTime + 0.0001);
    this.gain.gain.exponentialRampToValueAtTime(0.01, startTime + 3);
    return this.gain.gain.linearRampToValueAtTime(0, startTime + 3.1);
  };

  Oscillator.prototype.freq = function(f) {
    return this.osc.frequency.value = f;
  };

  return Oscillator;

})();

module.exports = {
  Oscillator: Oscillator
};
