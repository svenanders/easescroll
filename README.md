# Easescroll

```js
var Easescroll = require('easescroll');

// Easescroll(targetY, speed, easing);
// 
// targetY: the target scrollY property of the window
// speed: time in pixels per second
// easing: easing equation to use

Easescroll(0, 60, 'easeInOutQuint');

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
