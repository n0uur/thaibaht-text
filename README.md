# Thai Baht To Text Converter (EN/TH)

Node.js package to convert numerical values into written text in both Thai and English, specifically formatted for Thai Baht currency values. It leverages the 'to-words' package with some conditions for English conversions and utilizes 'bahttext' for Thai language support.

PS. I'm creating this package for my own personal use and I just wanted to make it public in case anyone else finds it useful even if it's pretty useless.

## Features and Usage

- Converts numerical values into written text in both Thai and English

```ts
// ---- Import ----

// CommonJS
const toBahtText = require("@n0uur/thaibaht-text").default;
const { toBahtTextEnglish, toBahtTextThai } = require("@n0uur/thaibaht-text");

// ES6
import toBahtText, { toBahtTextThai, toBahtTextEnglish } from "@n0uur/thaibaht-text";

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
# NPM
npm install --save @n0uur/thaibaht-text

# Yarn
yarn add @n0uur/thaibaht-text

# PNPM
pnpm add @n0uur/thaibaht-text
```

## License

This project is licensed under the [MIT License](LICENSE)

## Acknowledgements

- [to-words](https://www.npmjs.com/package/to-words) - Converts numbers into words
- [bahttext](https://www.npmjs.com/package/bahttext) - Converts numbers into Thai words

Thanks to the creators of the 'to-words' and 'bahttext' packages for providing the foundational tools used in this project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
