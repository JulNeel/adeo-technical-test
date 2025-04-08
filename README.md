# Adeo Technical Test

## Description

This project is a technical test for Adeo, developed in Node.js.  
It includes two main features:

- 🔍 **Filter**: filtering data based on animals name
- 🔢 **Count**: counting people by country and animals by people

---

## Installation

Clone the repository:

```bash
git clone https://github.com/JulNeel/adeo-technical-test.git
```

Install the dependencies:

```bash
npm install
```

---

## Usage

The application should be run directly with flags :

### Filter feature

```bash
node app.js --filter <string>
```

or

```bash
node app.js --filter=<string>
```

### Count feature

```bash
node app.js --count
```

### Both features

```bash
node app.js --count --filter=<string>
```

Depending on your needs, you can use various options to filter or count data.

> 💡 For more information on available arguments, add `--help`.

---

## Examples

### Filtering Data

```bash
myapp filter --key age --value 30
```

### Counting Items

```bash
myapp count --group-by city
```

---

## Available Scripts

### Run tests:

```bash
npm test
```

The tests are written using **Vitest**.

---

## Project Structure

```
.
├── app.js          # Main entry point
├── lib/            # Contains the filter and count functions
├── tests/          # Unit tests
├── package.json    # Project configuration
└── README.md       # Documentation
```

---

## Author

Julien Bruneel

---

## Useful Links

- 🐛 [Bug Tracker](https://github.com/JulNeel/adeo-technical-test/issues)
- 🏠 [Project Homepage](https://github.com/JulNeel/adeo-technical-test#readme)
- 📦 [GitHub Repository](https://github.com/JulNeel/adeo-technical-test)

---

## License

This project is licensed under the **MIT** License.

```

```
