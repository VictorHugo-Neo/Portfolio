import { useState, useCallback } from 'react';

export const useClipboard = (timeout = 2000) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), timeout);
  }, [timeout]);

  return { hasCopied, copy };
};
