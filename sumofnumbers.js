function sumFor(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sumFor([1, 2, 3, 4, 5]));

function sumWhile(array) {
  let index = 0;
  let total = 0;
  while (index < array.length) {
    total += array[index];
    index++;
  }
  return total;
}
console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursionHelper(array, index, total) {
  if (index < array.length) {
    return sumRecursionHelper(array, index + 1, total + array[index]);
  }
  return total;
}
function sumRecursion(array) {
  return sumRecursionHelper(array, 0, 0);
}
console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
