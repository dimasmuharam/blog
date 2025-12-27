---
layout: default
title: Inclusive Event Checklist - Alat Bantu Aksesibilitas Acara
permalink: /tools/event-checklist/
description: Pastikan webinar atau seminar Anda aksesibel bagi semua orang dengan Checklist Inklusi interaktif dari Dimas P. Muharam.
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Inclusive Event Checklist",
  "operatingSystem": "All",
  "applicationCategory": "BusinessApplication",
  "description": "Alat bantu interaktif untuk mengevaluasi dan memastikan aksesibilitas acara bagi penyandang disabilitas.",
  "author": {
    "@type": "Person",
    "name": "Dimas P. Muharam"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "IDR"
  }
}
</script>

<div class="container" style="padding: 40px 0; max-width: 850px;">
    
    <header style="margin-bottom: 50px; text-align: center;">
        <a href="/tools/">&larr; Kembali ke Strategic Tools</a>
        <h1 style="margin-top: 20px; font-size: 2.8rem;">Inclusive Event Checklist</h1>
        <div style="text-align: left; background: var(--card-bg); padding: 25px; border-radius: 12px; border-left: 5px solid var(--primary-color); margin-top: 30px;">
            <p style="font-size: 1.1rem; line-height: 1.8;">
                Menyelenggarakan acara yang inklusif bukan hanya soal kepatuhan terhadap regulasi, tetapi tentang memberikan hak yang setara bagi setiap individu untuk berpartisipasi. Sebagai peneliti dan aktivis, saya sering menemui hambatan teknis yang sebenarnya bisa dihindari dengan perencanaan yang matang. 
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
                Checklist ini dirancang secara sistematis untuk membantu panitia acara, praktisi HR, dan komunikator publik dalam memetakan kebutuhan aksesibilitas, mulai dari tahap registrasi hingga penyampaian materi secara visual dan auditori.
            </p>
        </div>
    </header>

    <div style="background: var(--bg-color); border: 2px solid var(--border-color); padding: 30px; border-radius: 15px; margin-bottom: 50px;">
        <h2 style="text-align: center; margin-bottom: 30px;">Mulai Evaluasi Acara Anda</h2>
        
        <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: bold;">
                <span>Kesiapan Inklusi:</span>
                <span id="progress-text">0%</span>
            </div>
            <div style="background: #eee; height: 12px; border-radius: 10px; overflow: hidden;">
                <div id="progress-bar" style="background: var(--primary-color); width: 0%; height: 100%; transition: width 0.4s ease;"></div>
            </div>
        </div>

        <div id="checklist-container">
            <section style="margin-bottom: 30px;">
                <h3 style="font-size: 1.2rem; color: var(--primary-color);">I. Komunikasi & Pendaftaran</h3>
                <label class="check-item"><input type="checkbox" onchange="updateProgress()"> Formulir pendaftaran mendukung penggunaan Screen Reader.</label>
                <label class="check-item"><input type="checkbox" onchange="updateProgress()"> Menanyakan kebutuhan akomodasi khusus (JBI, Braille, dll).</label>
            </section>
            
            <section style="margin-bottom: 30px;">
                <h3 style="font-size: 1.2rem; color: var(--primary-color);">II. Konten & Materi</h3>
                <label class="check-item"><input type="checkbox" onchange="updateProgress()"> Video promosi memiliki teks/subtitle.</label>
                <label class="check-item"><input type="checkbox" onchange="updateProgress()"> Slide presentasi menggunakan kontras warna tinggi.</label>
                <label class="check-item"><input type="checkbox" onchange="updateProgress()"> Pembicara didorong melakukan deskripsi audio secara verbal.</label>
            </section>
        </div>

        <div id="final-result" style="display: none; margin-top: 30px; padding: 20px; background: rgba(120, 29, 66, 0.05); border-radius: 10px; text-align: center;">
            <h3 id="result-title"></h3>
            <p id="result-text"></p>
        </div>
    </div>

    <article style="line-height: 1.8; font-size: 1.1rem; color: var(--text-color);">
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">
        <h2>Mengapa Aksesibilitas Acara Sangat Penting?</h2>
        <p>
            Berdasarkan data WHO, sekitar 15% penduduk dunia hidup dengan disabilitas. Di Indonesia, angka ini merepresentasikan jutaan potensi peserta yang seringkali terabaikan dalam acara publik. Dengan menerapkan prinsip <strong>Universal Design</strong>, acara Anda tidak hanya bermanfaat bagi penyandang disabilitas, tetapi juga bagi lansia, orang dengan keterbatasan koneksi internet (melalui teks), hingga mereka yang berada di lingkungan bising.
        </p>
        <h3>Langkah Selanjutnya untuk Penyelenggara</h3>
        <p>
            Setelah menggunakan checklist di atas, Anda mungkin menyadari adanya celah dalam perencanaan Anda. Langkah pertama yang paling efektif adalah melibatkan penyandang disabilitas dalam proses perencanaan (<em>"Nothing about us without us"</em>). 
        </p>
        <p>
            Jika Anda membutuhkan pendampingan lebih lanjut atau pelatihan mengenai cara membangun ekosistem acara yang inklusif secara sistematis, Anda dapat mempelajari lebih lanjut di halaman <a href="/speaking/">layanan konsultasi saya</a>.
        </p>
    </article>

</div>

<style>
    .check-item {
        display: block;
        background: var(--card-bg);
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: 0.2s;
    }
    .check-item:hover { background: rgba(120, 29, 66, 0.02); border-color: var(--primary-color); }
    .check-item input { margin-right: 15px; transform: scale(1.2); }
</style>

<script>
    function updateProgress() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checked = document.querySelectorAll('input[type="checkbox"]:checked');
        const percentage = Math.round((checked.length / checkboxes.length) * 100);
        
        document.getElementById('progress-bar').style.width = percentage + '%';
        document.getElementById('progress-text').innerText = percentage + '%';

        const resultDiv = document.getElementById('final-result');
        if (percentage > 0) {
            resultDiv.style.display = 'block';
            document.getElementById('result-title').innerText = percentage === 100 ? "Inclusion Champion!" : "Terus Tingkatkan!";
            document.getElementById('result-text').innerText = "Kesiapan acara Anda mencapai " + percentage + "%. Simpan halaman ini atau cetak sebagai laporan evaluasi internal Anda.";
        }
    }
</script>
