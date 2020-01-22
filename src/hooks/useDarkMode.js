import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initial) => {
    const [darkMode, setDarkMode] = useLocalStorage("isDarkMode", initial);
    useEffect(() => {
        let body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);
    return [darkMode, setDarkMode]
}

export default useDarkMode;