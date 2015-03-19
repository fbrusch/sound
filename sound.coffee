context = new AudioContext()

osc = context.createOscillator()

gain = context.createGain()
gain.gain.value = 0

osc.connect gain
osc.start()
gain.connect context.destination

class Oscillator

    constructor: ->
        @osc = context.createOscillator()
        @osc.type = "triangle"
        @gain = context.createGain()
        @gain.gain.value = 0
        @gain.connect context.destination
        @osc.connect(@gain)
        
    play: (freq, startOffset) -> 
        curTime = context.currentTime
        startTime = curTime + startOffset
        console.log "play"
        @osc.start curTime + startOffset
        #@gain.gain.cancelScheduledValues(curTime)
        @osc.frequency.value = freq
        @gain.gain.linearRampToValueAtTime 0, startTime
        @gain.gain.linearRampToValueAtTime 0.5, startTime + 0.0001 
        @gain.gain.exponentialRampToValueAtTime 0.01, startTime + 3 
        @gain.gain.linearRampToValueAtTime 0, startTime + 3.1
        #@osc.stop()

    freq: (f) ->
        @osc.frequency.value = f


module.exports = 
    Oscillator: Oscillator
    #stop: stop
