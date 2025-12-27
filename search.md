---
layout: default
title: Pencarian
permalink: /search/
description: Cari arsip riset dan tulisan di Dimasmuharam.com
---

<div class="container" style="max-width: 800px; padding: 40px 20px;">
    
    <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="margin-bottom: 10px;">Arsip Riset & Tulisan</h1>
        <p>Ketik kata kunci untuk mencari topik kebijakan, inklusi, atau teknologi.</p>
    </div>

    <div style="position: relative; margin-bottom: 30px;">
        <input 
            type="text" 
            id="search-input" 
            placeholder="Ketik kata kunci (misal: BRIN, Inklusi, UU Disabilitas)..."
            aria-label="Kotak Pencarian"
            style="
                width: 100%; 
                padding: 20px; 
                font-size: 1.2rem; 
                border: 2px solid var(--border-color); 
                border-radius: 50px; 
                background: var(--bg-color); 
                color: var(--text-color);
                box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                outline: none;
                transition: border-color 0.3s;
            "
            onfocus="this.style.borderColor='var(--primary-color)'"
            onblur="this.style.borderColor='var(--border-color)'"
        >
        <span style="position: absolute; right: 25px; top: 22px; font-size: 1.5rem; color: var(--text-color); opacity: 0.5;">🔍</span>
    </div>

    <ul id="results-container" style="list-style: none; padding: 0;"></ul>

</div>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script>
window.simpleJekyllSearch = new SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: `
    <li style="margin-bottom: 20px; padding: 20px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px;">
        <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--primary-color); font-weight: bold; letter-spacing: 1px; margin-bottom: 5px;">
            {date}
        </div>
        <h3 style="margin: 0 0 10px 0;">
            <a href="{url}" style="text-decoration: none; color: var(--text-color);">{title}</a>
        </h3>
        <p style="margin: 0; opacity: 0.8; font-size: 0.95rem;">{snippet}...</p>
    </li>
  `,
  noResultsText: '<li style="text-align:center; padding: 20px; color: #666;">Topik tidak ditemukan. Coba kata kunci lain.</li>',
  limit: 10,
  fuzzy: false
})
</script>
