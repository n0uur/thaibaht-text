import { bahttext } from "bahttext";
import { ToWords } from "to-words";

const toWords = new ToWords({
  localeCode: "en-US",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    currencyOptions: {
      name: "Baht",
      plural: "Baht",
      symbol: "฿",
      fractionalUnit: {
        name: "Satang",
        plural: "Satang",
        symbol: "",
      },
    },
  },
});

export default function toBahtText(amount: number, language: "th" | "en" = "th"): string {
  if (language === "en") return toBahtTextEnglish(amount);
  return toBahtTextThai(amount);
}

export function toBahtTextEnglish(amount: number): string {
  if (amount === Math.floor(amount)) return toWords.convert(amount);
  return toWords.convert(amount, { doNotAddOnly: true });
}

export function toBahtTextThai(number: number): string {
  return bahttext(number);
}
