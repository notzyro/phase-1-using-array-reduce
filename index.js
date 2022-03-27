const batteryBatches = [4, 5, 3, 4, 4, 6, 5].reduce(add, 0);
// Code your solution here
var totalBatteries = batteryBatches;
function add(accumulator, a) {
    return accumulator + a;
  }