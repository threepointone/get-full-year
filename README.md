# get-full-year 🗓️

[![npm version](https://badge.fury.io/js/get-full-year.svg)](https://badge.fury.io/js/get-full-year)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

An unofficial TypeScript client for [getfullyear.com](https://getfullyear.com) that helps you get the full year. Because sometimes you just need to know what year it is, and you need to know it _properly_.

## 🚀 Features

- Written in TypeScript with full type definitions
- Zero dependencies
- Supports both ESM and CommonJS
- Tiny bundle size
- Simple, clean API
- Promise-based for modern JavaScript applications

## 📦 Installation

Using npm:

```bash
npm install get-full-year
```

Using yarn:

```bash
yarn add get-full-year
```

Using pnpm:

```bash
pnpm add get-full-year
```

## 🔨 Usage

### ESM

```typescript
import getFullYear from "get-full-year";

// Using async/await
const main = async () => {
  const data = await getFullYear();
  console.log(data);
};

// Using promises
getFullYear().then((data) => {
  console.log(data);
});
```

### CommonJS

```javascript
const getFullYear = require("get-full-year").default;

getFullYear().then((data) => {
  console.log(data);
});
```

## 🔍 API Reference

### `getFullYear()`

Makes a request to getfullyear.com's API to fetch the current year data.

**Returns**: `Promise<any>` - A promise that resolves with the year data from the API.

**Example**:

```typescript
const yearData = await getFullYear();
```

## 🏗️ Project Structure

```
get-full-year/
├── src/           # Source code
├── dist/          # Compiled output
│   ├── esm/      # ES Modules
│   └── commonjs/  # CommonJS modules
├── example/       # Usage examples
└── .tshy/        # TypeScript build configuration
```

## 🛠️ Development

1. Clone the repository

```bash
git clone https://github.com/threepointone/get-full-year.git
```

2. Install dependencies

```bash
npm install
```

3. Build the project

```bash
npm run prepare
```

## 📝 TypeScript Configuration

This project uses `tshy` for TypeScript builds, supporting both ESM and CommonJS output formats. The TypeScript configuration is split across multiple files:

- `tsconfig.json`: Base TypeScript configuration
- `.tshy/build.json`: Shared build configuration
- `.tshy/esm.json`: ESM-specific configuration
- `.tshy/commonjs.json`: CommonJS-specific configuration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/threepointone/get-full-year/issues).

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sunil Pai**

- Email: threepointone@gmail.com
- GitHub: [@threepointone](https://github.com/threepointone)

## 🙏 Acknowledgments

- Thanks to [getfullyear.com](https://getfullyear.com) for providing this essential service
- The TypeScript team for making type-safe JavaScript possible
- The open-source community for continuous inspiration

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/threepointone/get-full-year?style=social)
![npm downloads](https://img.shields.io/npm/dm/get-full-year)

---

<sub>Made with ❤️ and probably too much coffee ☕️</sub>
