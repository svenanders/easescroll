# Easescroll

```js
var scrollToY = require('scroll-to-y');

// scrollToY(scrollTargetY, speed, easing);
// 
// scrollTargetY: the target scrollY property of the window
// speed: time in pixels per second
// easing: easing equation to use

scrollToY(0, 1500, 'easeInOutQuint');

```

## Demo

```js
node demo/server.js
```
Open http://localhost:8000

## Easing Equations

- easeOutSine
- easeInOutSine
- easeInOutQuint
