function range(start, end) {
  const complete = (s, e) => {
    const st = [s];
    const dif = e - s + 1;

    if (e < s) return [];

    for (let i = 1; i < dif; i++) {
      st.push(s + i);
    }

    return st;
  }

  if (end == undefined) {
    return complete.bind(null, start);
  }

  return complete(start, end);
}

console.log(range(3, 3));  // [3]
console.log(range(3, 8));  // [3, 4, 5, 6, 7, 8]
console.log(range(3, 0));  // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));  // [3]
console.log(start3(8));  // [3, 4, 5, 6, 7, 8]
console.log(start3(0));  // []

console.log(start4(6));  // [4, 5, 6]