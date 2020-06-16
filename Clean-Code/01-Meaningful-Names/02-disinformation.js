// Avoid Disinformation

// Programmers must avoid leaving false clues that obscure the meaning of code.
// We should avoid words whose entrenched meanings vary from our intended meaning.

// Bad example
// use accountList for a variable that is not of type List

// Good example
// use accountGroup or bunchOfAccounts

// Beware of using names that vary very small
// example XYZControllerForEfficientHandlingOfStrings and XYZControllerForEfficientStorageOfStrings

// Bad example
// using the lowercase L or uppercase O as variable names
a = 1;
if ( O == 1 )
  a = 01;
else
  l = 01;
// *This may vary according to the font and colors used
