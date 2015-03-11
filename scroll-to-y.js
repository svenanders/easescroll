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
var scrollToY = function(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = global.scrollY,
        currentTime = 0;

    scrollTargetY = scrollTargetY || 0;
    speed = speed || 2000;
    easing = easing || 'easeOutSine';

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
            console.log('scroll done');
            global.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
};

module.exports = scrollToY;
