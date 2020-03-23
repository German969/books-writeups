// Coercion means a value of one type being converted to its respective representation in another type.

// The == operator performs an equality comparison similarly to how the === performs it, if the comparison is between the same value.

// If the values types are different, the == allows coercion before the comparison.
42 == "42"    // true
1 == true     // true

// In both cases, the == causes the non-number values to be converted to numbers before the comparison.

// Relational comparison operators like <, > (and even <= and >=) allow coercion first.
var arr = [ "1", "10", "100", "1000"];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
  console.log(i); // will run 3 times
}

// The arr[i] < 500 invokes coercion, because the arr[i] values are strings.

// Relational operators typically use numeric comparisons, except when both values were already strings
// In that case they use alphabetically comparison.

var x = "10";
var y = "9";

x < y;    // true, watch out!

// There's no way to get these relational operators to avoid coercion.
