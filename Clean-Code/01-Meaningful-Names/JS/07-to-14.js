/*--- Avoid Mental Mapping ---*/

// Readers shouldn't have to mentally translate your names into other names they already know.

// Example
// A loop counter may be named i or j or k if its scope is very small
// This is because those single-letter names for loop counters are traditional.

// One difference between a smart programmer and a professional programmer
// is that the proffesional understand that clarity is king and writes code that others can understand


/*--- Class Names ---*/

// Classes and objects should have noun or noun phrase names and not be a verb

// Bad example
// Manager, Processor, Data, Info

// Good example
// Customer, WikiPage, Account, AddressParser


/*--- Method Names ---*/

// Methods should have a verb or verb phrase name
// Accessors, mutators and predicates should be named for their value and prefixed with get, set and is

let name = employee.getName();
customer.setName("mike");
if (paycheck.isPosted()) //...


/*--- Don't be cute ---*/

// Choose clarity over entertainment value.
// Example
// Don't use whack() to mean kill() or eatMyShorts() to mean abort()
// Say what you mean, mean what you say


/*--- Pick One Word Per Concept ---*/

// Bad example
// Having fetch, retrieve, and get as equivalent methods of different classes
// Having a controller and a manager and a driver in the same codebase


/*--- Don't Pun ---*/

// Avoid using the same word for two purposes.
// Be care following the "one word per concept", ensure same names do the same thing
// Bad example
// An add method that creates a new value and another add method that appends a value


/*--- Use Solution Domain Names ---*/

// Go ahead and use computer science terms, algorithm names, pattern names, math terms and so forth.
// People who read your code will be programmers.


/*--- Use Problem Domain Names ---*/

// If there's no a programming term to describe what you're doing, use problem domain names
// At least the programmers can ask a domain expert what does it means.
