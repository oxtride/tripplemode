import { useState, useEffect } from 'react';

const codeSnippet = `
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};
`;

const CodeAnimation = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < codeSnippet.length) {
      const timeoutId = setTimeout(() => {
        setText(text + codeSnippet.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text]);

  const renderColoredText = () => {
    const keywords = ['const', 'return'];
    const parts = text.split(/(".*?")|\b(const|return)\b/g).filter(Boolean);

    return parts.map((part, i) => {
      if (part.startsWith('"')) {
        return <span key={i} className="text-green-400">{part}</span>;
      } else if (keywords.includes(part)) {
        return <span key={i} className="text-blue-400">{part}</span>;
      } else {
        return <span key={i}>{part}</span>;
      }
    });
  };

  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-4 rounded-lg font-mono text-sm overflow-hidden w-64 md:w-80 lg:w-96 h-48">
      <pre><code>{renderColoredText()}</code></pre>
    </div>
  );
};

export default CodeAnimation;