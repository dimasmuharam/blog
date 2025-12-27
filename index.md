---
layout: default
title: Beranda
permalink: /
description: Dimas P. Muharam - Chevening Scholar 2025, Peneliti BRIN, dan Social Entrepreneur. Mengadvokasi kebijakan inklusif melalui riset dan teknologi.
---

<section style="padding: 40px 0; border-bottom: 1px dashed var(--border-color); display: flex; flex-wrap: wrap-reverse; align-items: center; gap: 40px;">
  <div style="flex: 2; min-width: 300px;">
    <span style="background: var(--primary-color); color: var(--bg-color); padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; letter-spacing: 0.5px;">
      🇬🇧 Chevening Scholar 2025
    </span>
    
    <h1 style="font-size: 2.5rem; margin-top: 15px; line-height: 1.2;">
      Menjembatani Kebijakan, Teknologi, dan Inklusivitas.
    </h1>
    
    <p style="font-size: 1.2rem; margin-bottom: 25px;">
      Halo, saya <strong>Dimas P. Muharam</strong>. <br>
      Peneliti di <strong>BRIN</strong>, mahasiswa MA Social and Public Policy di <strong>University of Leeds</strong>, <strong>Social Entrepreneur</strong>, serta pakar aksesibilitas digital yang berdedikasi menciptakan ekosistem publik yang setara bagi semua.
    </p>

    <div style="margin-bottom: 30px; border-left: 4px solid var(--primary-color); padding-left: 20px; font-style: italic; opacity: 0.8;">
      <p style="font-size: 1.1rem; margin-bottom: 5px; line-height: 1.5;">
        "And, when you want something, all the universe conspires in helping you to achieve it."
      </p>
      <cite style="font-size: 0.9rem; font-weight: bold;">— Paulo Coelho, The Alchemist</cite>
    </div>

    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <a href="/about/" class="button" style="background: var(--primary-color); color: var(--bg-color); padding: 12px 25px; border-radius: 6px; font-weight: bold; text-decoration: none;">Kenali Saya</a>
      <a href="/media/" class="button" style="border: 2px solid var(--primary-color); color: var(--primary-color); padding: 12px 25px; border-radius: 6px; font-weight: bold; text-decoration: none;">Rekam Jejak Media</a>
    </div>
  </div>

  <div style="flex: 1; min-width: 250px; text-align: center;">
    <img 
      src="/images/profile.jpg" 
      alt="Dimas P. Muharam" 
      style="width: 280px; height: auto; border-radius: 15px; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.1); object-fit: cover;"
      onerror="this.style.display='none'" 
    >
  </div>
</section>

<section style="padding: 30px 0; text-align: center; border-bottom: 1px dashed var(--border-color);">
  <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; opacity: 0.6; margin-bottom: 20px;">Featured & Interviewed by</p>
  <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; align-items: center; filter: grayscale(100%); opacity: 0.5;">
    <span style="font-weight: bold; font-size: 1.1rem;">KICK ANDY</span>
    <span style="font-weight: bold; font-size: 1.1rem;">CNN INDONESIA</span>
    <span style="font-weight: bold; font-size: 1.1rem;">NET TV</span>
    <span style="font-weight: bold; font-size: 1.1rem;">KORAN SINDO</span>
    <span style="font-weight: bold; font-size: 1.1rem;">TVRI</span>
  </div>
</section>

<section style="padding: 50px 0; border-bottom: 1px dashed var(--border-color);">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
    <h2 style="margin: 0; font-size: 1.8rem;">Strategic Tools</h2>
    <a href="/tools/" style="font-weight: bold; color: var(--primary-color);">Lihat Semua &rarr;</a>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
    <a href="/tools/roi-calculator/" class="tool-card">
      <div style="font-size: 2rem; margin-bottom: 15px;">🧮</div>
      <h3 style="margin: 0 0 10px 0; color: var(--primary-color);">ROI Calculator</h3>
      <p style="font-size: 0.9rem; margin: 0; opacity: 0.8;">Hitung potensi kerugian ekonomi dari ekosistem digital yang tidak aksesibel.</p>
    </a>

    <a href="/tools/event-checklist/" class="tool-card">
      <div style="font-size: 2rem; margin-bottom: 15px;">🗓️</div>
      <h3 style="margin: 0 0 10px 0; color: var(--primary-color);">Event Checklist</h3>
      <p style="font-size: 0.9rem; margin: 0; opacity: 0.8;">Panduan praktis untuk menyelenggarakan acara yang inklusif dan aksesibel.</p>
    </a>

    <a href="/tools/citation/" class="tool-card">
      <div style="font-size: 2rem; margin-bottom: 15px;">📚</div>
      <h3 style="margin: 0 0 10px 0; color: var(--primary-color);">Citation Generator</h3>
      <p style="font-size: 0.9rem; margin: 0; opacity: 0.8;">Generate sitasi akademik otomatis untuk referensi karya tulis dan riset saya.</p>
    </a>
  </div>
</section>

<section style="padding: 50px 0; border-bottom: 1px dashed var(--border-color);">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
    <h2 style="margin: 0; font-size: 1.8rem;">Latest Insights</h2>
    <a href="/blog/" style="font-weight: bold; color: var(--primary-color);">Lihat Arsip &rarr;</a>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
    {% for post in site.posts limit:3 %}
    <article style="background: var(--card-bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border-color); display: flex; flex-direction: column;">
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 10px; text-transform: uppercase;">{{ post.date | date: "%d %B %Y" }}</div>
        <h3 style="margin: 0 0 15px 0; font-size: 1.3rem;">
          <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--primary-color);">{{ post.title }}</a>
        </h3>
        <p style="font-size: 1rem; opacity: 0.8; margin-bottom: 20px;">{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
        <a href="{{ post.url | relative_url }}" style="margin-top: auto; font-weight: bold; font-size: 0.9rem; color: var(--primary-color); text-decoration: none;">Baca Selengkapnya &rarr;</a>
    </article>
    {% endfor %}
  </div>
</section>

<section style="padding: 50px 0; border-bottom: 1px dashed var(--border-color);">
  <h2 style="font-size: 1.8rem;">Ekosistem Digital & Advokasi</h2>
  <p>Inisiatif strategis untuk mempercepat inklusi disabilitas di Indonesia:</p>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 25px;">
    <a href="https://www.asninklusif.or.id" target="_blank" class="eco-link">🤝 Forum ASN Inklusif</a>
    <a href="https://kartunet.com" target="_blank" class="eco-link">🏢 Kartunet Community</a>
    <a href="https://accessible.web.id" target="_blank" class="eco-link">🛠️ Accessible.web.id</a>
    <a href="https://disabilitas.com" target="_blank" class="eco-link">⚖️ Disabilitas.com</a>
  </div>
</section>

<section style="padding: 60px 0; text-align: center;">
  {% include newsletter.html %}
</section>

<style>
  .tool-card {
    text-decoration: none; 
    color: var(--text-color); 
    background: var(--card-bg); 
    padding: 25px; 
    border-radius: 12px; 
    border: 1px solid var(--border-color); 
    transition: all 0.3s ease;
    display: block;
  }
  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: var(--primary-color);
  }
  .eco-link {
    padding: 18px; 
    border: 1px solid var(--border-color); 
    border-radius: 10px; 
    text-decoration: none; 
    color: var(--text-color); 
    font-weight: bold; 
    background: var(--card-bg);
    text-align: center;
    transition: 0.2s;
  }
  .eco-link:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
</style>
