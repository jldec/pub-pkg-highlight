---- ----
title: JavaScript

### JavaScript
```js
/*
 * asyncbuilder
 * simple semi-asynchronous list builder
 * Copyright (c) 2015-2022 Jürgen Leschner - github.com/jldec - MIT license
*/

module.exports = asyncbuilder;

function asyncbuilder(mainCallBack) {

  if (!(this instanceof asyncbuilder)) return new asyncbuilder(mainCallBack);

  // private
  var results = [];
  var pending = 0;        // number of outstanding results
  var isComplete = false; // true after complete()
  var spent = false;      // true after mainCallBack()
  var asyncErr = null;    // queued async err

  // public
  this.append = append;
  this.asyncAppend = asyncAppend;
  this.complete = complete;

  //--//--//--//--//--//--//--//--//--//

  // append result immediately (no callback required)
  function append(result) {
    if (spent) throw new Error('asyncbuilder append after mainCallBack');
    if (isComplete) {
      asyncErr = asyncErr || new Error('asyncbuilder append after complete.');
      return;
    }
    results.push(result);
  }

  // reserve a slot and return a callback(err, result) for async result
  // the callback inserts the result into the slot (or propagetes any error)
  function asyncAppend() {
    if (spent) throw new Error('asyncbuilder asyncAppend after mainCallBack');
    if (isComplete) {
      asyncErr = asyncErr || new Error('asyncbuilder asyncAppend after complete.');
      return function(){};
    }
    var slot = results.push('') - 1;
    pending++;
    return function(err, result) {
      pending--;
      asyncErr = asyncErr || err;
      results[slot] = result;
      if (isComplete && !spent && !pending) {
        spent = true;
        mainCallBack(asyncErr, results);
      }
    };
  }

  // call ab.complete() after the last append() or asyncAppend()
  function complete() {
    isComplete = true;
    if (!pending && !spent) {
      spent = true;
      process.nextTick(function() {
        mainCallBack(asyncErr, results);
      });
    }
  }

}
```
