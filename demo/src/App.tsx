import { useMemo, useState } from "react";
import CodeBlock from "./components/CodeBlock";
import toBahtText, { toBahtTextThai } from "@n0uur/thaibaht-text";

function App() {
  const [number, setNumber] = useState(0);

  const bahtText = useMemo(() => {
    return toBahtTextThai(number);
  }, [number]);

  const bahtTextEnglish = useMemo(() => {
    // return toBahtTextEnglish(number); // <-- This will also work
    return toBahtText(number, "en");
  }, [number]);

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-center text-2xl font-extrabold">
        Thai Baht To Text Converter &mdash; DEMO
      </h1>
      <h2 className="text-center">
        ตัวอย่างการใช้งานแพ็คเกจ{" "}
        <a
          href="https://www.npmjs.com/package/@n0uur/thaibaht-text"
          target="_blank"
          rel="noreferrer"
        >
          <code className="bg-gray-100 p-1 rounded shadow-lg">@n0uur/thaibaht-text</code>
        </a>
      </h2>

      <section className="mt-8">
        <h3 className="text-2xl text-center font-extrabold">
          ตัวอย่างการแปลงเลขจำนวนเงิน เป็นข้อความ
        </h3>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="block w-full p-2 mt-4 text-xl text-center bg-neutral-900 text-white rounded shadow-lg border"
        />

        <p className="text-center mt-4 text-xl">{bahtText}</p>
        <p className="text-center mt-2 text-sm">({bahtTextEnglish})</p>
      </section>

      <div className="border-b my-8" />

      <section className="mt-8">
        <h3 className="text-xl font-bold">ติดตั้ง</h3>
        <CodeBlock language="bash">{`# NPM
npm install --save @n0uur/thaibaht-text

# Yarn
yarn add @n0uur/thaibaht-text

# PNPM
pnpm add @n0uur/thaibaht-text
`}</CodeBlock>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold">วิธีใช้งาน</h3>
        <p>
          ใช้ฟังก์ชัน <code>toBahtText()</code>, <code>toBahtTextThai()</code> หรือ{" "}
          <code>toBahtTextEnglish()</code> เพื่อแปลงตัวเลขเป็นข้อความ
        </p>
        <CodeBlock language="typescript">
          {`// ---- Import ----

// CommonJS
const toBahtText = require("@n0uur/thaibaht-text").default;
const { toBahtTextEnglish, toBahtTextThai } = require("@n0uur/thaibaht-text");

// ES6
import toBahtText, { toBahtTextThai, toBahtTextEnglish } from "@n0uur/thaibaht-text";

// ---- Usage / วิธีใช้งาน ----

console.log(toBahtText(123)); // OUTPUT: หนึ่งร้อยยี่สิบสามบาทถ้วน
console.log(toBahtTextThai(123)); // OUTPUT: หนึ่งร้อยยี่สิบสามบาทถ้วน
console.log(toBahtTextThai(55.36)); // OUTPUT: ห้าสิบห้าบาทสามสิบหกสตางค์

console.log(toBahtText(123, "en")); // OUTPUT: One hundred Twenty Three Baht Only
console.log(toBahtTextEnglish(123)); // OUTPUT: One hundred Twenty Three Baht Only
console.log(toBahtTextEnglish(55.36)); // OUTPUT: Fifty Five Baht and Thirty Six Satang
`}
        </CodeBlock>
      </section>

      <section className="mt-8">
        {/* ## Acknowledgements
          - [to-words](https://www.npmjs.com/package/to-words) - Converts numbers into words
          - [bahttext](https://www.npmjs.com/package/bahttext) - Converts numbers into Thai words
          Thanks to the creators of the 'to-words' and 'bahttext' packages for providing the foundational tools used in this project.
        */}

        <h3 className="text-xl font-bold">ขอขอบคุณ</h3>

        <p>
          ขอขอบคุณผู้สร้างแพ็คเกจ{" "}
          <a href="https://www.npmjs.com/package/to-words" target="_blank" rel="noreferrer">
            <code>to-words</code>
          </a>{" "}
          และ{" "}
          <a href="https://www.npmjs.com/package/bahttext" target="_blank" rel="noreferrer">
            <code>bahttext</code>
          </a>{" "}
          สำหรับการสร้างเครื่องมือที่ใช้ในโปรเจคนี้
        </p>
      </section>
    </main>
  );
}

export default App;
