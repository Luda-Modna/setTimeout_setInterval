"use strict";

function printNumbers(from, to, interval) {
  let current = from;
  let timerId = null;

  function timeoutIdFunction() {
    console.log(current);
    if (current === to) {
      clearTimeout(timerId);
    } else {
      current++;
      timerId = setTimeout(timeoutIdFunction, interval);
    }
  }
  timeoutIdFunction();
}

printNumbers(1, 8, 1000);
