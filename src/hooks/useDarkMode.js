import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("isDarkMode", false);
    useEffect(() => {
        let body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);
    return [darkMode, setDarkMode]
}