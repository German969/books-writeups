// Use Pronounceable Names

// Words are, by definition, pronounceables, names should be also, so you can discuss it properly.

// Bad example
class DtaRcrd102 {
  private Date genymdhms; // (generation date, year, month, day, hour, minute and second)
  private Date modymdhms;
  private final String pszqint = "102";
  /**/
};

// Good example
class Customer {
  private Date generationTimestamp;
  private Date modificationtimestamp;
  private final String recordId = "102";
  /**/
}
