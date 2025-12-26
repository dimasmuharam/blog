---
layout: default
title: Accessibility ROI Calculator
permalink: /tools/roi-calculator/
description: Hitung dampak ekonomi dan potensi kerugian pendapatan (The Purple Pound) jika bisnis Anda mengabaikan aksesibilitas digital.
---

<div class="container">
  <div style="text-align: center; margin-bottom: 2rem;">
    <span style="font-size: 3rem;">🧮</span>
    <h1 style="margin-top: 10px;">Accessibility ROI Calculator</h1>
    <p class="lead">Mengubah narasi sosial menjadi data ekonomi. Hitung potensi pasar yang hilang (Missed Opportunity) dari bisnis Anda.</p>
  </div>

  <div style="background: var(--card-bg); padding: 2.5rem; border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 4rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    
    <div style="max-width: 600px; margin: 0 auto;">
        <label for="visitors" style="display:block; font-weight:bold; margin-bottom:8px; color: var(--primary-color);">
            1. Estimasi Total Pengunjung (Website/Toko) per Bulan:
        </label>
        <input type="number" id="visitors" placeholder="Contoh: 10000" aria-describedby="visitor-hint" style="padding:12px; width:100%; margin-bottom:5px; border:1px solid #ccc; border-radius:6px; font-size: 1rem;">
        <p id="visitor-hint" style="font-size: 0.85rem; color: #666; margin-bottom: 20px;">Masukkan rata-rata trafik bulanan atau jumlah kunjungan fisik.</p>

        <label for="conversion" style="display:block; font-weight:bold; margin-bottom:8px; color: var(--primary-color);">
            2. Rata-rata Nilai Transaksi per Pelanggan (Rp) - Opsional:
        </label>
        <input type="number" id="conversion" placeholder="Contoh: 50000" style="padding:12px; width:100%; margin-bottom:25px; border:1px solid #ccc; border-radius:6px; font-size: 1rem;">

        <button onclick="calculateROI()" class="button" style="width: 100%; background: var(--primary-color); color: white; padding: 15px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 1.1rem; transition: background 0.3s;">
            Hitung Potensi Rugi (Calculate Loss)
        </button>
    </div>

    <div id="result-box" aria-live="polite" style="margin-top: 40px; display: none; padding: 30px; background: rgba(120, 29, 66, 0.08); border: 1px solid var(--primary-color); border-radius: 8px; text-align: center;">
      <h3 style="margin-top:0; color: var(--primary-color);">Analisis Potensi Dampak</h3>
      
      <div style="display: grid; gap: 20px; margin-top: 20px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div>
              <p style="margin: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Audiens Terabaikan</p>
              <p style="margin: 5px 0 0; font-size: 2.5rem; font-weight: bold; color: var(--text-color);">
                  <span id="res-people">0</span> <span style="font-size: 1rem;">orang/bln</span>
              </p>
          </div>
          
          <div>
              <p style="margin: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Estimasi Uang Hilang</p>
              <p style="margin: 5px 0 0; font-size: 2.5rem; font-weight: bold; color: #d32f2f;">
                  <span id="res-money">Rp 0</span>
              </p>
          </div>
      </div>

      <p style="font-size: 0.9rem; margin-top: 20px; color: var(--text-color); opacity: 0.8;">
          *Angka ini menggunakan asumsi konservatif prevalensi disabilitas global sebesar 15% (Data: <em>WHO World Report on Disability</em>).
      </p>
    </div>
  </div>

  <script>
    function calculateROI() {
      const visitors = document.getElementById('visitors').value || 0;
      const value = document.getElementById('conversion').value || 0;
      
      // Logika: 15% dari total pengunjung adalah penyandang disabilitas
      const missedPeople = Math.round(visitors * 0.15);
      const missedMoney = missedPeople * value;

      // Format Angka ke Indonesia (Ada titik pemisah ribuan)
      const fmt = new Intl.NumberFormat('id-ID');

      document.getElementById('res-people').innerText = fmt.format(missedPeople);
      document.getElementById('res-money').innerText = "Rp " + fmt.format(missedMoney);
      
      const resBox = document.getElementById('result-box');
      resBox.style.display = 'block';
      
      // Scroll ke hasil agar user fokus
      resBox.scrollIntoView({behavior: "smooth"});
    }
  </script>

  <article style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
    <hr style="margin: 3rem 0; border: 0; border-top: 1px solid var(--border-color);">
    
    <h2>Mengapa Inklusi Adalah Strategi Ekonomi, Bukan Sekadar Amal</h2>
    <p>
        Dalam diskusi kebijakan publik maupun strategi bisnis, aksesibilitas seringkali ditempatkan di pos "Tanggung Jawab Sosial" (CSR). Padahal, data menunjukkan bahwa inklusi adalah pendorong pertumbuhan ekonomi yang signifikan. Kalkulator di atas dirancang untuk memvisualisasikan apa yang disebut sebagai <em>The Cost of Exclusion</em> (Biaya Pengabaian).
    </p>

    <h3>Memahami "The Purple Pound"</h3>
    <p>
        Di Inggris, daya beli rumah tangga yang memiliki penyandang disabilitas dikenal sebagai <strong>The Purple Pound</strong>, yang nilainya diperkirakan mencapai £274 miliar per tahun. Di Indonesia, dengan jumlah penyandang disabilitas yang mencapai jutaan jiwa, potensi pasar ini sangat besar namun seringkali tidak tergarap (<em>untapped market</em>).
    </p>
    <p>
        Ketika sebuah website <em>e-commerce</em> tidak memiliki label pada tombolnya (sehingga tidak terbaca screen reader), atau sebuah toko fisik tidak memiliki bidang miring (ramp), bisnis tersebut secara efektif menolak uang dari 15% populasi.
    </p>

    <h3>Click-Away Pound: Kerugian Digital</h3>
    <p>
        Fenomena <em>Click-Away Pound</em> terjadi ketika pengguna dengan kebutuhan aksesibilitas meninggalkan sebuah website karena website tersebut sulit digunakan, dan beralih ke kompetitor yang lebih aksesibel. Studi menunjukkan bahwa 71% pengguna disabilitas akan langsung meninggalkan website yang tidak aksesibel.
    </p>
    <blockquote>
        "Aksesibilitas bukan tentang membatasi kreativitas desain, melainkan tentang menghilangkan hambatan konsumsi. Bisnis yang inklusif memenangkan loyalitas pelanggan yang sering diabaikan oleh kompetitornya."
    </blockquote>

    <h3>Investasi vs Biaya</h3>
    <p>
        Memperbaiki aksesibilitas sering dianggap mahal. Namun, perbaikan seperti peningkatan kontras warna, penambahan <em>alt text</em>, dan struktur heading yang jelas, sebenarnya juga meningkatkan performa SEO (Search Engine Optimization) secara drastis. Google menyukai website yang aksesibel karena struktur datanya jelas. Jadi, investasi pada inklusi adalah investasi pada keterlihatan bisnis Anda secara umum.
    </p>
  </article>

</div>
