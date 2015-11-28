'use strict';

var should   = require('should'),
    LoopNext = require('../');


describe('Test LoopNext', function () {
  it('should be in order for a normal loop', function (done) {
    this.timeout(10000);
    var loop = new LoopNext();
    var i = 0;
    var result = '';
    loop.syncLoop(5, function (l) {
      setTimeout(function () {
        console.log('iteration:', i);
        result += i;
        i++;
        if (i === 5) {
          result.should.be.exactly('01234');
          done();
        }
        l.next();
      }, 100);
    });
  });

  it('should be in order for nested loop', function (done) {
    this.timeout(10000);
    var loop = new LoopNext();
    var nestedLoop = new LoopNext();
    var i = 0, j = 0;
    var result = '';
    var nestedResult = '';
    loop.syncLoop(4, function (l) {
      setTimeout(function () {
        console.log('parent iteration:', i);
        result += i;
        i++;
        j = 0;
        nestedLoop.syncLoop(3, function (x) {
          setTimeout(function () {
            console.log('\tnested iteration:', j);
            nestedResult += j;
            j++;
            if (j === 3) {
              if (i === 4) {
                result.should.be.exactly('0123');
                nestedResult.should.be.exactly('012012012012');
                done();
              }
              l.next();
            }
            x.next();
          }, 100);
        })
        //l.next();
      }, 100);
    });
  });
});
