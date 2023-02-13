import { useEffect } from 'react';
import Prism from 'prismjs';

const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="h-full">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default Code;
