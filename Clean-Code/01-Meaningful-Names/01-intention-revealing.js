// Use Intention-Revealing names

// The name of a variable. function, or class, should answer all the big questions.
// It should tell you why it exists, what it does, and how it is used.
// If a name requires a comment, then the name does not reveal its intent.

// Bad example
var d; // elapsed time in days

// Good example
var elapsedTimeInDays;
var daysSinceCreation;
var daysSinceModification;
var fileAgeInDays;

// Bad example
function getThem() {
  var list1 = [];
  for (var x in theList)
    if (x[0] == 4)
      list1.push(x);
    return list1;
}

// Good example
function getFlaggedCells() {
  var flaggedCells = [];
  for (var cell in gameBoard)
    if (cell[STATUS_VALUE] == FLAGGED)
      flaggedCells.push(cell);
    return flaggedCells;
}

// Better example
function getFlaggedCells() {
  var flaggedCells = [];
  for (var cell in gameBoard)
    if (cell.isFlagged())
      flaggedCells.push(cell);
    return flaggedCells;
}
