---
layout: default
title: Inclusive Event Checklist
permalink: /tools/event-checklist/
description: Alat bantu interaktif untuk memastikan acara Anda aksesibel bagi semua orang.
---

<div class="container" style="padding: 60px 0; max-width: 800px;">
    
    <div style="text-align: center; margin-bottom: 50px;">
        <a href="/tools/">&larr; Kembali ke Strategic Tools</a>
        <h1 style="margin-top: 20px;">Inclusive Event Checklist</h1>
        <p style="font-size: 1.1rem; opacity: 0.9;">
            Gunakan alat bantu interaktif ini untuk memantau sejauh mana kesiapan aksesibilitas acara Anda (Webinar, Seminar, atau Rapat).
        </p>
    </div>

    <div style="background: var(--border-color); height: 10px; border-radius: 10px; margin-bottom: 30px; overflow: hidden;">
        <div id="progress-bar" style="background: var(--primary-color); width: 0%; height: 100%; transition: width 0.3s ease;"></div>
    </div>

    <div id="checklist-container">
        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.3rem; border-bottom: 2px solid var(--primary-color); display: inline-block; margin-bottom: 20px;">1. Komunikasi & Registrasi</h2>
            <div class="check-item">
                <input type="checkbox" id="item1" onchange="updateProgress()">
                <label for="item1">Formulir pendaftaran aksesibel (mendukung Screen Reader).</label>
            </div>
            <div class="check-item">
                <input type="checkbox" id="item2" onchange="updateProgress()">
                <label for="item2">Ada pertanyaan khusus mengenai kebutuhan akomodasi (misal: JBI, kursi roda).</label>
            </div>
            <div class="check-item">
                <input type="checkbox" id="item3" onchange="updateProgress()">
                <label for="item3">Materi promosi menggunakan teks alternatif (Alt-text) pada gambar.</label>
            </div>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.3rem; border-bottom: 2px solid var(--primary-color); display: inline-block; margin-bottom: 20px;">2. Aksesibilitas Tempat/Platform</h2>
            <div class="check-item">
                <input type="checkbox" id="item4" onchange="updateProgress()">
                <label for="item4">Lokasi memiliki ramp/lift untuk pengguna kursi roda (Fisik) atau mendukung pintasan keyboard (Online).</label>
            </div>
            <div class="check-item">
                <input type="checkbox" id="item5" onchange="updateProgress()">
                <label for="item5">Tersedia pencahayaan yang cukup bagi peserta Low Vision atau Tuli.</label>
            </div>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.3rem; border-bottom: 2px solid var(--primary-color); display: inline-block; margin-bottom: 20px;">3. Materi & Penyampaian</h2>
            <div class="check-item">
                <input type="checkbox" id="item6" onchange="updateProgress()">
                <label for="item6">Pembicara diingatkan untuk mendeskripsikan konten visual (slide) secara verbal.</label>
            </div>
            <div class="check-item">
                <input type="checkbox" id="item7" onchange="updateProgress()">
                <label for="item7">Tersedia teks tertutup (Caption) atau Juru Bahasa Isyarat (JBI).</label>
            </div>
            <div class="check-item">
                <input type="checkbox" id="item8" onchange="updateProgress()">
                <label for="item8">Slide presentasi memiliki kontras warna yang tinggi.</label>
            </div>
        </section>
    </div>

    <div id="final-result" style="display: none; background: var(--card-bg); padding: 30px; border-radius: 12px; border: 2px solid var(--primary-color); text-align: center;">
        <h3 id="result-title">Luar Biasa!</h3>
        <p id="result-text"></p>
        <button onclick="window.print()" class="button" style="background: var(--primary-color); color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 15px;">Simpan sebagai PDF Checklist</button>
    </div>

    <div style="margin-top: 50px; text-align: center; font-style: italic; opacity: 0.8;">
        <p>Butuh konsultasi lebih mendalam untuk acara Anda? <a href="/speaking/">Hubungi Dimas P. Muharam</a>.</p>
    </div>

</div>

<style>
    .check-item {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        background: var(--card-bg);
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        border: 1px solid var(--border-color);
        transition: 0.2s;
        cursor: pointer;
    }
    .check-item:hover {
        border-color: var(--primary-color);
    }
    .check-item input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-top: 3px;
        cursor: pointer;
    }
    .check-item label {
        cursor: pointer;
        flex: 1;
    }
</style>

<script>
    function updateProgress() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checked = document.querySelectorAll('input[type="checkbox"]:checked');
        const progress = (checked.length / checkboxes.length) * 100;
        
        document.getElementById('progress-bar').style.width = progress + '%';

        const resultDiv = document.getElementById('final-result');
        const resultText = document.getElementById('result-text');
        const resultTitle = document.getElementById('result-title');

        if (progress > 0) {
            resultDiv.style.display = 'block';
            if (progress < 50) {
                resultTitle.innerText = "Awal yang Baik!";
                resultText.innerText = "Anda sudah mulai memperhatikan aksesibilitas. Masih ada beberapa poin krusial yang perlu dipenuhi agar acara benar-benar inklusif.";
            } else if (progress < 100) {
                resultTitle.innerText = "Hampir Sempurna!";
                resultText.innerText = "Acara Anda sudah sangat inklusif. Tinggal sedikit lagi untuk memastikan semua orang bisa berpartisipasi tanpa hambatan.";
            } else {
                resultTitle.innerText = "Inclusion Champion!";
                resultText.innerText = "Luar biasa! Checklist Anda lengkap. Acara ini siap menjadi standar bagi penyelenggaraan acara inklusif.";
            }
        } else {
            resultDiv.style.display = 'none';
        }
    }
</script>
