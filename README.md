# Useless Thai Baht Converter

Node.js package to convert numerical values into written text in both Thai and English, specifically formatted for Thai Baht currency values. It leverages the 'to-words' package with some conditions for English conversions and utilizes 'bahttext' for Thai language support.

## Features and Usage

- Converts numerical values into written text in both Thai and English

```ts
// ---- Import ----

// CommonJS
const toBahtText = require("thai-baht-text-but-useless").default;
const { toBahtTextEnglish, toBahtTextThai } = require("thai-baht-text-but-useless");

// ES6
import toBahtText, { toBahtTextThai, toBahtTextEnglish } from "thai-baht-text-but-useless";

// ---- Usage ----

console.log(toBahtText(123)); // OUTPUT: หนึ่งร้อยยี่สิบสามบาทถ้วน
console.log(toBahtTextThai(123)); // OUTPUT: หนึ่งร้อยยี่สิบสามบาทถ้วน
console.log(toBahtTextThai(55.36)); // OUTPUT: ห้าสิบห้าบาทสามสิบหกสตางค์

console.log(toBahtText(123, "en")); // OUTPUT: One hundred Twenty Three Baht Only
console.log(toBahtTextEnglish(123)); // OUTPUT: One hundred Twenty Three Baht Only
console.log(toBahtTextEnglish(55.36)); // OUTPUT: Fifty Five Baht and Thirty Six Satang
```

- Nothing else

## Installation

```bash
npm install --save thai-baht-text-but-useless
yarn add thai-baht-text-but-useless
pnpm add thai-baht-text-but-useless
```

## License

This project is licensed under the [MIT License](LICENSE)

## Acknowledgements

- [to-words](https://www.npmjs.com/package/to-words) - Converts numbers into words
- [bahttext](https://www.npmjs.com/package/bahttext) - Converts numbers into Thai words

Thanks to the creators of the 'to-words' and 'bahttext' packages for providing the foundational tools used in this project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
