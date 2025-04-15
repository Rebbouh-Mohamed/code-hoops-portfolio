
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  return { theme, toggleTheme };
}
