// Avoid Encodings

// Encoding type or scope information into names simply adds an extra burden of deciphering.

// *JavaScript doesn't has strong typing so it's considerable to have type encondings.

var phoneString = 10;
// name not changed when type changed!

// You also don't need prefixes for variables

// Bad example
public class Part {
  // Public and private field declarations are an experimental feature (stage 3) proposed at TC39 but can be used with Babel
  #m_dsc; // The textual description
  setName(name) {
    m_dsc = name;
  }
}

// Good example
public class Part {
  // Public and private field declarations are an experimental feature (stage 3) proposed at TC39 but can be used with Babel
  description;
  void setDescription(String description) {
    this.description = description;
  }
}
