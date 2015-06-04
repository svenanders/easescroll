#!/bin/bash
echo remove index
rm index.js
./node_modules/.bin/babel easescroll.es6 > index.js
