/**
* Easescroll
* Forked from https://github.com/jbraithwaite/scroll-to-y
* LICENSE: MIT
*/

// http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
var requestAnimFrame = (function(){
  return  global.requestAnimationFrame       ||
          global.webkitRequestAnimationFrame ||
          global.mozRequestAnimationFrame    ||
          function( callback ){
            global.setTimeout(callback, 1000 / 60);
          };
})();

// main function
var easescroll = function(scrollTargetY=0, speed=2000, easing='easeOutSine') {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = global.scrollY,
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutCubic: function(pos) {
                if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,3);
                return 0.5 * (Math.pow((pos-2),3) + 2);
            },
            easeInOutQuart: function(pos) {
              if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
              return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
            },
            easeInExpo: function(pos) {
              return (pos===0) ? 0 : Math.pow(2, 10 * (pos - 1));
            },
            easeOutCirc: function(pos) {
              return Math.sqrt(1 - Math.pow((pos-1), 2));
            },
            easeFrom: function(pos) {
                return Math.pow(pos,4);
            },
            easeTo: function(pos) {
                return Math.pow(pos,0.25);
            },
            bouncePast: function(pos) {
                if (pos < (1/2.75)) {
                  return (7.5625*pos*pos);
                } else if (pos < (2/2.75)) {
                  return 2 - (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
                } else if (pos < (2.5/2.75)) {
                  return 2 - (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
                } else {
                  return 2 - (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
                }
            },
            easeOutBounce: function(pos) {
                if ((pos) < (1/2.75)) {
                  return (7.5625*pos*pos);
                } else if (pos < (2/2.75)) {
                  return (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
                } else if (pos < (2.5/2.75)) {
                  return (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
                } else {
                  return (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
                }
            },
            elastic: function(pos) {
              return -1 * Math.pow(4,-8*pos) * Math.sin((pos*6-1)*(2*Math.PI)/2) + 1;
            },
            bounce: function(pos) {
                if (pos < (1/2.75)) {
                  return (7.5625*pos*pos);
                } else if (pos < (2/2.75)) {
                  return (7.5625*(pos-=(1.5/2.75))*pos + 0.75);
                } else if (pos < (2.5/2.75)) {
                  return (7.5625*(pos-=(2.25/2.75))*pos + 0.9375);
                } else {
                  return (7.5625*(pos-=(2.625/2.75))*pos + 0.984375);
                }
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            global.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            global.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
};

module.exports = easescroll;