module.exports = function reverse (n) {
    let arr = [];
    let str = '';
    arr = String(n).split('').reverse();
    if (n > 0) {
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
  return +str;
} else {
    for (let i = 0; i < arr.length - 1; i++) {
        str += arr[i];
    }
  return +str;
}
};
