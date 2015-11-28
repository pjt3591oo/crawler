loopNext
========
[![Build Status](https://travis-ci.org/darkowlzz/simple-headers.svg?branch=master)](https://travis-ci.org/darkowlzz/loopNext)

Run loops with async statements in a sync fashion. Did I tell you about nested sync loops? ;)


## To use

  1. Install it:

    ```bash
    $ npm i loopnext
    ```

  2. Require it and use:

    ```js
    var LoopNext = require('loopnext');
    var loop = new LoopNext();
    loop.syncLoop(iterations, function (l) {
      // loop body
      // call `l.next()` for next iteration
    });
    ```

## Example
```js
var LoopNext = require('loopnext');

var loop = new LoopNext();
var count = 0;
loop.syncLoop(4, function (l) {
  setTimeout(function () {
    console.log(count);
    count++;
    l.next();
  }, 3000);
});
// 0
// 1
// 2
// 3
```

## License

MIT &copy; 2015 Sunny (darkowlzz)
