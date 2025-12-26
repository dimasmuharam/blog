---
layout: default
title: Academic Citation Generator
permalink: /tools/citation/
description: Generator kutipan otomatis untuk karya tulis Dimas P. Muharam. Mendukung format APA dan Harvard untuk integritas akademik.
---

<div class="container">
  <div style="text-align: center; margin-bottom: 2rem;">
    <span style="font-size: 3rem;">📚</span>
    <h1 style="margin-top: 10px;">Academic Citation Generator</h1>
    <p class="lead">Fasilitas bagi rekan peneliti dan mahasiswa untuk mengutip karya tulis, opini kebijakan, dan riset saya secara presisi.</p>
  </div>

  <div style="background: var(--card-bg); padding: 2.5rem; border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 4rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    
    <label for="paper-select" style="display:block; font-weight:bold; margin-bottom:10px; color: var(--primary-color);">
        Pilih Karya Tulis / Publikasi:
    </label>
    <div style="position: relative;">
        <select id="paper-select" onchange="updateCitation()" style="width:100%; padding:15px; border-radius:6px; border:1px solid #ccc; font-size:1rem; appearance: none; background: var(--bg-color);">
            <option value="p1">Jurnal: Inclusive Policy in Digital Era (2024)</option>
            <option value="p2">Laporan Riset: Accessibility Audit Report Indonesia (2023)</option>
            <option value="p3">Buku: The Role of Civil Servants in Disability Advocacy (2022)</option>
            <option value="p4">Opini: Menghapus Sekat Digital bagi ASN (Media Indonesia, 2021)</option>
        </select>
        <div style="position: absolute; right: 15px; top: 18px; pointer-events: none;">▼</div>
    </div>

    <div style="margin-top: 30px;">
      <div style="display:flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
          <label for="res-apa" style="font-weight:bold; color: var(--text-color);">Format APA (7th Edition):</label>
          <span style="font-size: 0.8rem; background: #eee; color: #333; padding: 2px 6px; border-radius: 4px;">Standar Akademik</span>
      </div>
      <div style="display:flex; gap:10px;">
        <input type="text" id="res-apa" readonly style="width:100%; background: rgba(0,0,0,0.05); color: var(--text-color); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; font-family: monospace;">
        <button onclick="copyToClipboard('res-apa')" aria-label="Copy APA Citation" style="cursor:pointer; padding: 0 20px; background: var(--primary-color); color: white; border: none; border-radius: 6px; font-weight: bold;">
            📋 Copy
        </button>
      </div>
    </div>

    <div style="margin-top: 25px;">
      <label for="res-harvard" style="display:block; font-weight:bold; margin-bottom:8px; color: var(--text-color);">Format Harvard:</label>
      <div style="display:flex; gap:10px;">
        <input type="text" id="res-harvard" readonly style="width:100%; background: rgba(0,0,0,0.05); color: var(--text-color); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; font-family: monospace;">
        <button onclick="copyToClipboard('res-harvard')" aria-label="Copy Harvard Citation" style="cursor:pointer; padding: 0 20px; background: var(--text-color); color: var(--bg-color); border: none; border-radius: 6px; font-weight: bold;">
            📋 Copy
        </button>
      </div>
    </div>

  </div>

  <script>
    // Database Publikasi Mas Dimas (Bisa ditambah nanti)
    const papers = {
      p1: {
        apa: "Muharam, D. P. (2024). Inclusive Policy in Digital Era: Challenges and Opportunities in Indonesia. Journal of Social Policy, 12(3), 45-67.",
        harvard: "Muharam, D.P. (2024) 'Inclusive Policy in Digital Era: Challenges and Opportunities in Indonesia', Journal of Social Policy, 12(3), pp. 45-67."
      },
      p2: {
        apa: "Muharam, D. P. (2023). Accessibility Audit Report: State of Indonesia Government Websites. BRIN Center for Educational Research.",
        harvard: "Muharam, D.P. (2023) Accessibility Audit Report: State of Indonesia Government Websites. Jakarta: BRIN Center for Educational Research."
      },
      p3: {
        apa: "Muharam, D. P. (2022). The Role of Civil Servants in Disability Advocacy. ASN Inklusif Press.",
        harvard: "Muharam, D.P. (2022) The Role of Civil Servants in Disability Advocacy. Jakarta: ASN Inklusif Press."
      },
      p4: {
        apa: "Muharam, D. P. (2021, December 3). Menghapus Sekat Digital bagi ASN Disabilitas. Media Indonesia, p. 4.",
        harvard: "Muharam, D.P. (2021) 'Menghapus Sekat Digital bagi ASN Disabilitas', Media Indonesia, 3 December, p. 4."
      }
    };

    function updateCitation() {
      const id = document.getElementById('paper-select').value;
      if(papers[id]) {
        document.getElementById('res-apa').value = papers[id].apa;
        document.getElementById('res-harvard').value = papers[id].harvard;
      }
    }

    function copyToClipboard(elementId) {
      const copyText = document.getElementById(elementId);
      copyText.select();
      copyText.setSelectionRange(0, 99999); // Untuk Mobile
      
      navigator.clipboard.writeText(copyText.value).then(() => {
          alert("Kutipan berhasil disalin ke clipboard!");
      }).catch(err => {
          console.error('Gagal menyalin: ', err);
      });
    }
    
    // Jalankan saat halaman dimuat
    document.addEventListener('DOMContentLoaded', updateCitation);
  </script>

  <article style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
    <hr style="margin: 3rem 0; border: 0; border-top: 1px solid var(--border-color);">
    
    <h2>Etika Akademik dan Perspektif Disabilitas</h2>
    <p>
        Dalam ekosistem akademik, tindakan mengutip (sitasi) bukan sekadar formalitas administratif untuk menghindari plagiarisme. Lebih dari itu, sitasi adalah tindakan <strong>politik pengetahuan</strong>. Siapa yang kita kutip mencerminkan siapa yang kita anggap sebagai pemilik otoritas ilmu.
    </p>

    <h3>"Nothing About Us Without Us" dalam Riset</h3>
    <p>
        Selama beberapa dekade, penyandang disabilitas seringkali hanya menjadi <em>objek</em> kajian—data statistik dalam tabel kemiskinan atau studi kasus medis. Prinsip gerakan disabilitas global, <em>"Nothing About Us Without Us"</em> (Tidak ada tentang kami tanpa melibatkan kami), menuntut pergeseran paradigma ini.
    </p>
    <p>
        Ketika Anda mengutip karya yang ditulis oleh peneliti disabilitas atau aktivis yang terlibat langsung, Anda turut memperkuat validitas perspektif orang dalam (<em>insider perspective</em>). Hal ini memperkaya diskursus kebijakan publik agar tidak bias pada kacamata non-disabilitas (<em>ableist perspective</em>).
    </p>

    <h3>Pentingnya Open Access</h3>
    <p>
        Semua kutipan yang dihasilkan di halaman ini merujuk pada karya-karya saya yang sebagian besar bersifat <em>Open Access</em>. Saya percaya bahwa pengetahuan tentang kebijakan inklusif tidak boleh terkunci di balik tembok berbayar (<em>paywall</em>). Pengetahuan harus dapat diakses oleh semua orang, termasuk mereka yang menggunakan teknologi asistif seperti pembaca layar (screen reader).
    </p>

    <div style="margin-top: 2rem; padding: 15px; border: 1px dashed var(--border-color); border-radius: 6px; font-size: 0.9rem;">
        <strong>Catatan untuk Mahasiswa/Peneliti:</strong><br>
        Jika Anda memerlukan naskah lengkap (Full PDF) dari publikasi yang tertera di atas untuk keperluan riset namun tidak dapat menemukannya secara daring, silakan hubungi saya melalui halaman <a href="/contact/">Kontak</a>. Saya dengan senang hati akan berbagi materi tersebut.
    </div>
  </article>

</div>
