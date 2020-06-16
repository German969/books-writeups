// Avoid Encodings

// Encoding type or scope information into names simply adds an extra burden of deciphering.

// Java has strong typing so it doesn't need type enconding.

PhoneNumber phoneString;
// name not changed when type changed!

// You also don't need prefixes for variables

// Bad example
public class Part {
  private String m_dsc; // The textual description
  void setName(String name) {
    m_dsc = name;
  }
}

// Good example
public class Part {
  String description;
  void setDescription(String description) {
    this.description = description;
  }
}
