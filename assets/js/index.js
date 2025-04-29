"use strict";

function printNumbers(from, to, interval) {
  let current = from;
  const timeoutId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timeoutId);
    }
    current++;
  }, interval);
}

printNumbers(1, 8, 1000);
