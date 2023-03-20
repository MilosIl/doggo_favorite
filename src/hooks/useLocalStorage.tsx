import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, fallbackValue: string[]) {
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [key, fallbackValue]);

  return [value, setValue] as const;
}
