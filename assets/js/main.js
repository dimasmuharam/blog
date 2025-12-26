document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        }
    }

    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // --- 2. LANGUAGE TOGGLE (Bulletproof) ---
    const langToggle = document.getElementById('lang-toggle');
    
    function setCookie(value) {
        const domain = window.location.hostname;
        document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=." + domain;
        document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "googtrans=" + value + "; path=/; domain=" + domain;
        document.cookie = "googtrans=" + value + "; path=/;";
    }

    if (langToggle) {
        const cookies = document.cookie;
        if (cookies.includes('/en')) {
            langToggle.textContent = 'EN';
        } else {
            langToggle.textContent = 'ID';
        }

        langToggle.addEventListener('click', () => {
            if (langToggle.textContent === 'ID') {
                setCookie('/id/en');
            } else {
                setCookie('/id/id');
            }
            location.reload();
        });
    }
});
