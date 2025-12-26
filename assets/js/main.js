document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE MANAGER (Tetap sama) ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Mode saat ini Gelap. Klik untuk ganti ke Terang' : 'Mode saat ini Terang. Klik untuk ganti ke Gelap');
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

    // --- 2. LANGUAGE TOGGLE (PERBAIKAN TOTAL) ---
    const langToggle = document.getElementById('lang-toggle');
    
    // Fungsi membaca cookie
    function getCookie(name) {
        const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    // Fungsi menghapus cookie (Reset Bahasa)
    function clearCookie(name, domain) {
        document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + domain;
        document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=." + domain;
        document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }

    // Fungsi set cookie (Aktifkan Bahasa)
    function setCookie(name, value) {
        const domain = window.location.hostname;
        // Hapus dulu biar bersih
        clearCookie(name, domain);
        
        // Set cookie baru ke semua variasi domain agar "nempel"
        document.cookie = name + "=" + value + "; path=/; domain=" + domain;
        document.cookie = name + "=" + value + "; path=/; domain=." + domain;
        document.cookie = name + "=" + value + "; path=/;";
    }

    if (langToggle) {
        const currentLang = getCookie('googtrans');
        
        // Cek Status Awal saat Halaman Dimuat
        if (currentLang && currentLang.includes('/en')) {
            // Jika sedang Bahasa Inggris
            langToggle.textContent = 'EN';
            langToggle.setAttribute('aria-label', 'Bahasa saat ini Inggris. Klik untuk kembali ke Bahasa Indonesia.');
            langToggle.setAttribute('lang', 'en'); // Memberitahu screen reader ini teks Inggris
        } else {
            // Jika sedang Bahasa Indonesia (Default)
            langToggle.textContent = 'ID';
            langToggle.setAttribute('aria-label', 'Bahasa saat ini Indonesia. Klik untuk terjemahkan ke Inggris.');
            langToggle.setAttribute('lang', 'id');
        }

        // Event Klik
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const current = getCookie('googtrans');

            if (current && current.includes('/en')) {
                // Sedang Inggris -> Mau balik ke Indo
                // Caranya: Hapus cookie googtrans agar kembali ke default
                const domain = window.location.hostname;
                clearCookie('googtrans', domain);
                
                // Beri feedback suara ke screen reader sebelum reload (opsional, tapi reload biasanya memutus ini)
                langToggle.setAttribute('aria-label', 'Mengembalikan ke Bahasa Indonesia...');
            } else {
                // Sedang Indo -> Mau ke Inggris
                // Set cookie Google Translate: /auto/en (Auto detect ke English)
                setCookie('googtrans', '/auto/en');
                langToggle.setAttribute('aria-label', 'Menerjemahkan ke Bahasa Inggris...');
            }
            
            // Reload halaman untuk menerapkan perubahan
            setTimeout(() => {
                location.reload();
            }, 200);
        });
    }
});
