/**
 * @see https://www.geeksforgeeks.org/interesting-facts-about-json/
 * @see https://www.geeksforgeeks.org/json-introduction/
 */
export function getJsonMsgs() {
  const MSGS = [
    "JSON stands for JavaScript Object Notation, and frequently used with JavaScript",
    "JSON is a lightweight, text-based data format used to represent structured data",
    "JSON is a format for storing and exchanging data, consisting of key-value pairs (objects) and ordered lists (arrays)",
    "JSON was derived from JavaScript but by 2017 many programming languages include code to invoke and parse JSON-format data",
    "The first person to specify and popularize the JSON format was Douglas Crockford",
    "The JavaScript running in the browser decrypts the JSON string and shows the product details in the page for the user",
    'For JSON text, the official MIME type is "application/json" and this have been adopted by many of the modern implementations',
    "There is expanding support for JSON through the use of many lightweight third-party packages",
    "The simplicity of JSON has resulted in its global use, especially as a substitute to XML in Ajax",
    "JSON was originally intended to be a subset of the JavaScript scripting language",
    "One of the main advantages of JSON over XML as a data interchange format is that it is much easier to write a JSON parser",
    "JSON is easy to understand and write, making it suitable for developers and non-developers alike",
    "JSON is supported by virtually all modern programming languages and platforms, including browsers, mobile apps, and servers",
    "JSON supports strings, numbers, arrays, objects, booleans, and null values, making it highly versatile for various use cases",
    "Whether we're working on front-end or back-end development, understanding how to work with JSON is crucial for efficiently handling data",
    "Don't objectify him!",
    "Json?, I loved his work in the 80's",
    "SyntaxError: JSON.parse: expected ':' after property name in object at line 1 column 5...",
    "[object Object]...",
    "Compared to XML, JSON is far less verbose. This concise nature makes it faster to transmit over networks and easier to read and debug",
    "Many modern databases (like MongoDB) use JSON or JSON-like formats (BSON) to store data, capitalizing on its natural fit for handling nested, structured data",
  ] as const;

  return MSGS[Math.floor(Math.random() * MSGS.length)];
}

/**
 * @see https://toml.io
 * @see https://en.wikipedia.org/wiki/TOML
 * @see https://learnxinyminutes.com/toml/
 */

export function getTomlMsgs() {
  const MSGS = [
    '"A config file format for humans"',
    "TOML stands for Tom's Obvious, Minimal Language",
    "TOML aims to be a minimal configuration file format",
    "TOML is easy to read due to obvious semantics, maps unambiguously to a hash table, and is easy to parse into data structures in a wide variety of languages",
    "TOML already has implementations in most of the most popular programming languages in use today",
    "When transferring TOML files over the internet, the appropriate MIME type is application/toml",
    "Originally created by Tom Preston-Werner, its specification is open source",
    "TOML is used in a number of software projects and is implemented in many programming languages",
    "TOML is great if you think of it as JSON, but optimized for being written by humans instead of machines",
    "It is an alternative to YAML and JSON. It aims to be more human friendly than JSON and simpler that YAML",
    "Cargo, the Rust package manager, uses TOML for its configuration",
    "TOML allows both basic and multiline strings, so you can include long or formatted text directly in your configuration without sacrificing readability",
    "With its dot notation for nested tables, TOML lets you organize configuration hierarchically",
    "TOML was first created in 2013 by Tom Preston-Werner",
    "Someone named Tom might not like the name...",
    "TOML is an open-source specification and has been standardized enough to have its own MIME type, application/toml",
  ] as const;

  return MSGS[Math.floor(Math.random() * MSGS.length)];
}

/**
 * @see https://www.geeksforgeeks.org/what-is-xml/
 * @see https://www.w3schools.com/xml/xml_whatis.asp
 * @see https://en.wikipedia.org/wiki/XML
 *
 */
export function getXmlMsgs() {
  const MSGS = [
    "XML stands for extensible Markup Language",
    "XML is a type of markup language that establishes a set of guidelines for encoding texts in a way that is both machine- and human-readable",
    "XML steps in as a versatile tool for encoding and organizing data in a way that both humans and machines can comprehend",
    "XML emerged in the late 1990s as a revolutionary concept in the evolving landscape of the internet",
    "Before XML, HTML served as the predominant language for web content, but it lacked the flexibility needed for complex data representation",
    "Think of tags as containers that hold different pieces of information",
    "Think of XML as a digital filing cabinet for managing documents",
    "When it comes to exchanging data between different computer systems, XML acts as a kind of universal translator",
    "XML is perfect for storing data in databases because it provides a clear and structured way to organize information",
    "XML has inspired popular data formats like JSON and YAML",
    "Managing namespaces, schemas, and other XML-related concepts can add layers of complexity",
    "Parsing XML documents can be resource-intensive, especially for large datasets",
    "The XML language has no predefined tags",
    "The main purpose of XML is serialization, storing, transmitting, and reconstructing arbitrary data",
    "As a markup language, XML labels, categorizes, and structurally organizes information",
    "XML has three media types: application/xml, application/xml-external-parsed-entity, and application/xml-dtd",
    "The markup language was created by the World Wide Web Consortium (W3) in 1996",
    '"Some languages can be read by human, but not by machines, while others can be read by machines but not by humans. XML solves this problem by being readable to neither."', //? It's just a joke from reddit.
    "XML Responses?!",
    "XML Requests?!",
  ] as const;

  return MSGS[Math.floor(Math.random() * MSGS.length)];
}

/**
 * @see https://www.geeksforgeeks.org/csv-file-format/
 * @see https://en.wikipedia.org/wiki/Comma-separated_values
 * @see https://blog.sqlizer.io/posts/csv-history/
 */

export function getCsvMsgs() {
  const MSGS = [
    "The full form of CSV is Comma-separated values",
    "Comma-separated value is a simple yet powerful file format to store and exchange data",
    "CSV files are often used to store data in a tabular format, such as spreadsheets or databases",
    "CSV files are used in a variety of applications, including databases, web applications, data science, and spreadsheets",
    "Sharing is easy as CSV files are plain text files",
    "CSV files are a versatile and easy-to-use file format for storing and exchanging data",
    "CSV files are widely supported by a variety of software applications, making them a good choice for a wide range of tasks",
    "CSV is a text file format that uses commas to separate values, and newlines to separate records",
    "Among its most common uses is moving tabular data between programs that natively operate on incompatible formats",
    "Most spreadsheet programs can read CSV data, allowing CSV to be used as an intermediate format when transferring data from a database to a spreadsheet",
    "CSV files have a simple structure and are human-readable",
    "Perfect fit for getting data out of one application and into another one",
    "This,is,a,message",
    "CSV's origins can be traced back to the early days of computing. In 1972, the IBM Fortran compiler under OS/360 already supported CSV",
    "CSV files are still around and in widespread use because they're an easy way to transfer data",
    "the CSV file is one of the most ubiquitous and useful file types there is",
    "One of the most common uses of a CSV file is transferring data between databases",
  ] as const;

  return MSGS[Math.floor(Math.random() * MSGS.length)];
}

/**
 * @see https://www.geeksforgeeks.org/yaml-full-form/
 * @see https://en.wikipedia.org/wiki/YAML
 */

export function getYamlMsgs() {
  const MSGS = [
    'YAML stands for "YAML Ain\'t Markup Language."',
    "YAML is the same as YML.",
    "YAML is a human-readable data serialization language that is commonly used for writing configuration files and transferring data between applications",
    "YAML has a simple and intuitive syntax that can represent structured and semi-structured data, such as lists, dictionaries, scalars, and collections",
    "YAML files usually have the extension .yml or .yaml",
    "It's used for a variety of purposes, primarily in software development and configuration management",
    "YAML uses indentation to represent hierarchy and structure, similar to how Python uses indentation",
    "The official recommended filename extension for YAML files has been .yaml since 2006",
    "In 2024, the MIME type application/yaml has been finalized",
    "Originally YAML was said to mean Yet Another Markup Language",
    "YAML was first proposed and designed in May 2001 by Clark Evans, Ingy döt Net, and Oren Ben-Kiki",
    "Indentantion.",
    "NASA utilized YAML in the Mars 2020 Helicopter mission, demonstrating its reliability in critical applications",
    "YAML is designed to be a strict superset of JSON, meaning any valid JSON file is also a valid YAML file",
    "YAML uses indentation to denote structure, relying on spaces (not tabs)",
  ] as const;

  return MSGS[Math.floor(Math.random() * MSGS.length)];
}
