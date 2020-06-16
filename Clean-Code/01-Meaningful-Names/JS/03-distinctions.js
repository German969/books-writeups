// Make Meaningful Distinctions

// If names must be different, then they should also mean something different

// Number series naming are not disinformative, they are noninfirmative;
// they provide no clue to the author's intention.

// Bad example
function copyChars(a1, a2)
{
  for (int i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}

// Good example
function copyChars(source, destination)
{
  for (int i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
}

// Noise words are another meaningless distinction.

// Bad example
// 1- Product, ProductInfo and ProductData classes
// 2- NameString instead of Name
// 3- Customer and CustomerObject classes
// 4- moneyAmount instead of money
// 5- theMessage instead of message
// 6-
getActiveAccount();
getActiveAccounts();
getActiveAccountInfo();
