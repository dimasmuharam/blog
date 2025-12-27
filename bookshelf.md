---
layout: default
title: The Accessible Bookshelf
permalink: /bookshelf/
description: Kurasi buku dan literatur pilihan Dimas P. Muharam mengenai disabilitas, kebijakan publik, dan inklusi digital.
---

<div class="container" style="padding: 60px 0;">
    <header style="text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 3rem; margin-bottom: 15px;">The Accessible Bookshelf</h1>
        <p style="font-size: 1.25rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">
            Koleksi literatur yang membentuk perspektif saya. Dari teori keadilan hingga implementasi teknologi aksesibel.
        </p>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
        
        <div class="book-card">
            <div class="book-info">
                <span class="book-tag">Highly Recommended</span>
                <h2 class="book-title">Crip Theory</h2>
                <p class="book-author">Oleh Robert McRuer</p>
                <p class="book-notes">
                    "Buku ini mengubah cara saya melihat hubungan antara identitas disabilitas dan norma-norma sosial dalam konteks neoliberalisme."
                </p>
                <div style="margin-top: auto;">
                    <a href="#" class="book-link">Lihat di Goodreads &rarr;</a>
                </div>
            </div>
        </div>

        <div class="book-card">
            <div class="book-info">
                <span class="book-tag">Policy & Law</span>
                <h2 class="book-title">Disability Rights Law</h2>
                <p class="book-author">Oleh Samuel Bagenstos</p>
                <p class="book-notes">
                    "Referensi wajib untuk memahami evolusi hukum hak disabilitas dari model amal ke model hak asasi manusia di tingkat global."
                </p>
                <div style="margin-top: auto;">
                    <a href="#" class="book-link">Lihat di Goodreads &rarr;</a>
                </div>
            </div>
        </div>

        <div class="book-card">
            <div class="book-info">
                <span class="book-tag">Digital Inclusion</span>
                <h2 class="book-title">Mismatch</h2>
                <p class="book-author">Oleh Kat Holmes</p>
                <p class="book-notes">
                    "Bagaimana inklusi dapat mendorong inovasi. Kat Holmes menjelaskan bahwa desain yang buruk menciptakan 'mismatch' yang mengecualikan orang."
                </p>
                <div style="margin-top: auto;">
                    <a href="#" class="book-link">Lihat di Goodreads &rarr;</a>
                </div>
            </div>
        </div>

    </div>

    <div style="margin-top: 5rem; padding: 40px; background: var(--card-bg); border-radius: 15px; text-align: center; border: 1px solid var(--border-color);">
        <h3>Punya Rekomendasi Buku?</h3>
        <p>Saya selalu mencari perspektif baru. Jika ada buku yang menurut Anda harus saya baca selama saya di UK, silakan <a href="/about/">hubungi saya</a>.</p>
    </div>
</div>

<style>
    .book-card {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        display: flex;
        overflow: hidden;
        transition: transform 0.3s ease;
        min-height: 250px;
    }
    .book-card:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
    }
    .book-info {
        padding: 30px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .book-tag {
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--primary-color);
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
    }
    .book-title {
        margin: 0 0 5px 0;
        font-size: 1.5rem;
    }
    .book-author {
        font-size: 0.9rem;
        opacity: 0.7;
        margin-bottom: 20px;
        font-style: italic;
    }
    .book-notes {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 25px;
        border-left: 3px solid var(--border-color);
        padding-left: 15px;
        opacity: 0.9;
    }
    .book-link {
        font-size: 0.9rem;
        font-weight: bold;
        text-decoration: none;
        color: var(--primary-color);
    }
</style>
