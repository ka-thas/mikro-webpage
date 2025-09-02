import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState<boolean>(document.documentElement.classList.contains('dark'));

    useEffect(() => {
        // Initial setup based on system preference
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        
        if (storedTheme === 'dark' || (!storedTheme && isDark)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
                     hover:bg-mikro-yellow-light dark:hover:bg-mikro-yellow transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
        </button>
    );
};

export default ThemeToggle;