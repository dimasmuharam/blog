---
layout: default
title: Media Kit & Public Speaking Record
permalink: /media/
description: Resources for press and a complete record of Dimas P. Muharam's public speaking engagements, media appearances, and keynotes.
---

<div class="container" style="padding: 40px 0;">
    
    <header style="text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 3rem; margin-bottom: 10px;">Media Kit & Press</h1>
        <p style="font-size: 1.2rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">
            Official resources for media coverage and a comprehensive archive of public appearances.
        </p>
    </header>

    <section id="press-bio" style="margin-bottom: 5rem;">
        <h2 style="border-bottom: 2px solid var(--primary-color); padding-bottom: 10px; margin-bottom: 30px;">Press Biography</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
            <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; font-size: 1.2rem;">Short Bio (The Teaser)</h3>
                    <button onclick="copyBio('short-bio')" style="font-size: 0.8rem; cursor: pointer; padding: 5px 10px; border-radius: 4px; border: 1px solid var(--primary-color); background: transparent; color: var(--primary-color);">Copy</button>
                </div>
                <p id="short-bio" style="font-size: 0.95rem; line-height: 1.6; font-style: italic;">
                    "Dimas Prasetyo Muharam adalah seorang peneliti di Pusat Riset Pendidikan BRIN, aktivis inklusi digital, dan Chevening Scholar di University of Leeds. Beliau dikenal sebagai pendiri Forum ASN Inklusif dan Kartunet yang berfokus pada advokasi kebijakan publik dan aksesibilitas bagi penyandang disabilitas."
                </p>
            </div>

            <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; font-size: 1.2rem;">Long Bio (The Expert)</h3>
                    <button onclick="copyBio('long-bio')" style="font-size: 0.8rem; cursor: pointer; padding: 5px 10px; border-radius: 4px; border: 1px solid var(--primary-color); background: transparent; color: var(--primary-color);">Copy</button>
                </div>
                <p id="long-bio" style="font-size: 0.95rem; line-height: 1.6;">
                    "Dimas P. Muharam memiliki pengalaman lebih dari satu dekade dalam isu inklusi disabilitas. Sebagai ASN, beliau mengawali karier di Kominfo hingga menjabat di Pusat Asesmen Pendidikan Kemendikbudristek, mengawal aksesibilitas Ujian Nasional. Kini sebagai Peneliti BRIN, Dimas fokus pada riset kebijakan inklusif. Ia adalah penerima penghargaan Sindo Young Inspiring People dan Ashoka Changemaker yang aktif menulis kolom di media nasional."
                </p>
            </div>
        </div>
    </section>

    <section id="resources" style="background: rgba(120, 29, 66, 0.05); border-radius: 15px; padding: 40px; margin-bottom: 5rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
            <div style="max-width: 500px;">
                <h2 style="margin-top: 0;">Downloadable Assets</h2>
                <p>Materi visual resmi untuk poster acara dan publikasi media massa.</p>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="/assets/img/press-photo.zip" class="btn-press">🖼️ Press Photos (High-Res)</a>
                <a href="/assets/docs/cv-dimas-prasetyo.pdf" class="btn-press">📄 Full CV (Academic)</a>
            </div>
        </div>
    </section>

    <section id="featured" style="margin-bottom: 5rem;">
        <h2 style="margin-bottom: 30px;">Featured Media</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
            {% assign featured = site.data.media | where: "featured", true %}
            {% for item in featured %}
            <div class="featured-card">
                <span style="font-size: 0.8rem; font-weight: bold; color: var(--primary-color);">{{ item.channel }} • {{ item.date | date: "%Y" }}</span>
                <h3 style="margin: 10px 0;">{{ item.program }}: {{ item.title }}</h3>
                {% if item.link != "#" %}
                <a href="{{ item.link }}" target="_blank" class="link-watch">Watch Video &rarr;</a>
                {% endif %}
            </div>
            {% endfor %}
        </div>
    </section>

    <section id="archive">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 25px; flex-wrap: wrap; gap: 20px;">
            <h2>Complete Speaking & Media Record</h2>
            <input type="text" id="mediaSearch" onkeyup="filterMedia()" placeholder="🔍 Cari acara, media, atau topik..." style="padding: 10px 20px; border-radius: 30px; border: 1px solid var(--border-color); background: var(--card-bg); width: 100%; max-width: 350px;">
        </div>

        <div style="overflow-x: auto; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color);">
            <table id="mediaTable" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.02); border-bottom: 2px solid var(--border-color); text-align: left;">
                        <th style="padding: 15px;">Year</th>
                        <th style="padding: 15px;">Program / Institution</th>
                        <th style="padding: 15px;">Topic</th>
                        <th style="padding: 15px;">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {% assign all_media = site.data.media | sort: 'date' | reverse %}
                    {% for item in all_media %}
                    <tr class="media-row" style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 15px;">{{ item.date | date: "%Y" }}</td>
                        <td style="padding: 15px;"><strong>{{ item.program }}</strong><br><small>{{ item.channel }}</small></td>
                        <td style="padding: 15px;">{{ item.title }}</td>
                        <td style="padding: 15px;"><span class="badge">{{ item.type }}</span></td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    </section>
</div>

<script>
function copyBio(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Bio copied to clipboard!");
  });
}

function filterMedia() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("mediaSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("mediaTable");
  tr = table.getElementsByClassName("media-row");
  for (i = 0; i < tr.length; i++) {
    var match = false;
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          match = true;
          break;
        }
      }
    }
    tr[i].style.display = match ? "" : "none";
  }
}
</script>

<style>
    .btn-press { padding: 10px 20px; border-radius: 8px; text-decoration: none; color: var(--text-color); border: 1px solid var(--border-color); font-weight: bold; background: var(--card-bg); }
    .badge { font-size: 0.7rem; padding: 3px 8px; border-radius: 10px; background: rgba(0,0,0,0.05); }
    .featured-card { padding: 25px; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); border-top: 4px solid var(--primary-color); }
    .link-watch { font-weight: bold; color: var(--primary-color); text-decoration: none; font-size: 0.9rem; }
</style>
