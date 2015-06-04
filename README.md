# Easescroll

```js
var scrollToY = require('easescroll');

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
Open http://localhost:8000, scroll to bottom and click on the trigger

## Easing Equations

- easeOutSine
- easeInOutSine
- easeInOutQuint
