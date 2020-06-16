// Use Intention-Revealing names

// The name of a variable. function, or class, should answer all the big questions.
// It should tell you why it exists, what it does, and how it is used.
// If a name requires a comment, then the name does not reveal its intent.

// Bad example
int d; // elapsed time in days

// Good example
int elapsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;

// Bad example
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
    return list1;
}

// Good example
public List<int[]> getFlaggedCells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
    if (cell[STATUS_VALUE] == FLAGGED)
      flaggedCells.add(cell);
    return flaggedCells;
}

// Better example
public List<Cell> getFlaggedCells() {
  List<Cell> flaggedCells = new ArrayList<Cell>();
  for (Cell cell : gameBoard)
    if (cell.isFlagged())
      flaggedCells.add(cell);
    return flaggedCells;
}
