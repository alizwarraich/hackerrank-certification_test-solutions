
function getFixedCounter(k) {
  // write your code here
  let c = counter;
  return {
    increment: () => {
        c.changeBy(k);
    },
    decrement: () => {
      c.changeBy(-k);  
    },
    getValue: () => {
      return c.getValue();
    }
  }
}