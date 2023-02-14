/* eslint-disable react/jsx-key */
import theme from 'prism-react-renderer/themes/oceanicNext';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { cn } from '@/utils';
import { Button } from '../copy-button';

const Code = ({ code, language, isCopied, setIsCopied }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(className, 'pr-16 relative')}
          style={{ ...style, paddingRight: '64px' }}
        >
          <Button
            onClick={() => {
              navigator.clipboard.writeText(code);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            }}
          >
            {isCopied ? '🎉 Copied!' : 'Copy'}
          </Button>

          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
