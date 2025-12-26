---
layout: default
title: Beranda
permalink: /
description: Dimas P. Muharam - Chevening Scholar 2025, Peneliti BRIN, dan Pendiri Dimaster Group. Mengadvokasi kebijakan inklusif melalui riset dan teknologi.
---

<section style="padding: 40px 0; border-bottom: 1px dashed var(--border-color); display: flex; flex-wrap: wrap-reverse; align-items: center; gap: 40px;">
  
  <div style="flex: 2; min-width: 300px;">
    <span style="background: var(--primary-color); color: white; padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; letter-spacing: 0.5px;">
      🇬🇧 Chevening Scholar 2025
    </span>
    
    <h1 style="font-size: 2.5rem; margin-top: 15px; line-height: 1.2;">
      Menjembatani Kebijakan, Teknologi, dan Inklusivitas.
    </h1>
    
    <p style="font-size: 1.2rem; margin-bottom: 25px;">
      Halo, saya <strong>Dimas P. Muharam</strong>. <br>
      Peneliti di <strong>BRIN</strong> (Pusat Riset Pendidikan), Mahasiswa Kebijakan Sosial di <strong>University of Leeds</strong>, dan Pendiri <strong>Dimaster Group</strong>.
    </p>

    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <a href="/blog/" class="button" style="background: var(--primary-color); color: white; padding: 12px 25px; border-radius: 6px; font-weight: bold;">Baca Riset Saya</a>
      <a href="/speaking/" class="button" style="border: 2px solid var(--primary-color); color: var(--primary-color); padding: 12px 25px; border-radius: 6px; font-weight: bold;">Undang Bicara</a>
    </div>
  </div>

  <div style="flex: 1; min-width: 250px; text-align: center;">
    <img 
      src="/images/profile-dimas.jpg" 
      alt="Foto Resmi Dimas Prasetyo Muharam" 
      style="width: 240px; height: auto; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 10px 20px rgba(0,0,0,0.1); object-fit: contain;"
      onerror="this.style.display='none'" 
    >
  </div>
</section>

<section style="padding: 40px 0; border-bottom: 1px dashed var(--border-color);">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
    <h2 style="margin: 0; font-size: 1.8rem;">Latest Insights</h2>
    <a href="/blog/" style="font-weight: bold;">Lihat Arsip &rarr;</a>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
    {% for post in site.posts limit:3 %}
    <article style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">
          {{ post.date | date: "%d %B %Y" }}
        </div>
        <h3 style="margin-top: 5px; margin-bottom: 10px; font-size: 1.3rem;">
          <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--primary-color);">
            {{ post.title }}
          </a>
        </h3>
        <p style="font-size: 1rem; color: var(--text-color); opacity: 0.9; margin-bottom: 15px;">
          {{ post.excerpt | strip_html | truncatewords: 20 }}
        </p>
      </div>
      <a href="{{ post.url | relative_url }}" style="font-size: 0.9rem; font-weight: bold;">Baca Selengkapnya &rarr;</a>
    </article>
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
  <p style="font-style: italic; color: #666;">Belum ada tulisan terbaru. Segera hadir.</p>
  {% endif %}
</section>

<section style="padding: 40px 0;">
  <h2>Ekosistem Digital</h2>
  <p>Memimpin gerakan inklusi digital di Indonesia melalui jaringan Dimaster Group:</p>
  <ul style="list-style: none; padding: 0; display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
    <li>🏢 <a href="https://kartunet.com" target="_blank" style="font-weight:bold;">Kartunet</a> (Media)</li>
    <li>🛠️ <a href="https://accessible.web.id" target="_blank" style="font-weight:bold;">Accessible.web.id</a> (Tech Tools)</li>
    <li>⚖️ <a href="https://disabilitas.com" target="_blank" style="font-weight:bold;">Disabilitas.com</a> (Konsultan)</li>
    <li>🤝 <a href="https://www.asninklusif.or.id" target="_blank" style="font-weight:bold;">Forum ASN Inklusif</a> (Advokasi)</li>
  </ul>
</section>

<section style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); margin-top: 30px;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 20px;">
    <h2 style="margin: 0;">Strategic Tools</h2>
    <a href="/tools/" style="font-weight: bold;">Lihat Semua &rarr;</a>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
    <a href="/tools/roi-calculator/" style="text-decoration: none; color: var(--text-color); background: var(--bg-color); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); transition: transform 0.2s; display: block;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <span style="font-size: 2rem;">🧮</span>
      <h3 style="margin: 10px 0; font-size: 1.2rem; color: var(--primary-color);">ROI Calculator</h3>
      <p style="font-size: 0.9rem; margin: 0;">Hitung kerugian ekonomi jika bisnis Anda tidak aksesibel.</p>
    </a>
    <a href="/tools/citation/" style="text-decoration: none; color: var(--text-color); background: var(--bg-color); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); transition: transform 0.2s; display: block;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <span style="font-size: 2rem;">📚</span>
      <h3 style="margin: 10px 0; font-size: 1.2rem; color: var(--primary-color);">Citation Generator</h3>
      <p style="font-size: 0.9rem; margin: 0;">Buat kutipan akademik otomatis untuk karya tulis saya.</p>
    </a>
  </div>
</section>
