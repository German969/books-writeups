// Use Pronounceable Names

// Words are, by definition, pronounceables, names should be also, so you can discuss it properly.

// Bad example
class DtaRcrd102 {
  // Public and private field declarations are an experimental feature (stage 3) proposed at TC39 but can be used with Babel
  genymdhms; // (generation date, year, month, day, hour, minute and second)
  modymdhms;
  pszqint = "102";
  /**/
};

// Good example
class Customer {
  // Public and private field declarations are an experimental feature (stage 3) proposed at TC39 but can be used with Babel
  generationTimestamp;
  modificationtimestamp;
  recordId = "102";
  /**/
}
