import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  children: string;
  language: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vs2015}
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
