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

    <section id="resources" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 15px; padding: 40px; margin-bottom: 5rem;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; align-items: center;">
            <div>
                <h2 style="margin-top: 0; color: var(--primary-color);">Resources for Press</h2>
                <p>Unduh materi resmi untuk keperluan publikasi, poster acara, atau artikel berita.</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <a href="/assets/docs/bio-dimas-prasetyo.pdf" class="btn-press">📄 Download Professional Bio (PDF)</a>
                <a href="/assets/img/press/dimas-photos.zip" class="btn-press">🖼️ Download Press Photos (High-Res)</a>
                <a href="/speaking/" class="btn-press primary">🎤 Inquire for Speaking Engagement</a>
            </div>
        </div>
    </section>

    <section id="featured" style="margin-bottom: 5rem;">
        <h2 style="text-align: center; margin-bottom: 30px;">Featured Appearances</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
            {% assign featured = site.data.media | where: "featured", true %}
            {% for item in featured %}
            <div class="featured-card">
                <div style="font-size: 0.8rem; font-weight: bold; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase;">
                    {{ item.channel }} • {{ item.date | date: "%Y" }}
                </div>
                <h3 style="margin: 0 0 15px 0; font-size: 1.5rem;">{{ item.program }}: {{ item.title }}</h3>
                <a href="{{ item.link }}" target="_blank" class="link-watch">Tonton di YouTube &rarr;</a>
            </div>
            {% endfor %}
        </div>
    </section>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 4rem;">

    <section id="archive">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 25px; flex-wrap: wrap; gap: 20px;">
            <div>
                <h2 style="margin: 0;">Complete Speaking Record</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.8;">Total {{ site.data.media.size }} appearances since 2009.</p>
            </div>
            <div style="flex: 1; max-width: 400px; min-width: 280px;">
                <label for="mediaSearch" class="sr-only">Cari penampilan media atau topik:</label>
                <input type="text" id="mediaSearch" onkeyup="filterMedia()" placeholder="🔍 Cari acara, media, atau topik..." style="width: 100%; padding: 12px 15px; border-radius: 30px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); font-size: 1rem;">
            </div>
        </div>

        <div class="table-container" style="overflow-x: auto; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color);">
            <table id="mediaTable" style="width: 100%; border-collapse: collapse; min-width: 600px;">
                <thead>
                    <tr style="background: rgba(0,0,0,0.03); border-bottom: 2px solid var(--border-color); text-align: left;">
                        <th style="padding: 15px;">Year</th>
                        <th style="padding: 15px;">Program / Institution</th>
                        <th style="padding: 15px;">Event & Topic</th>
                        <th style="padding: 15px;">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {% assign all_media = site.data.media | sort: 'date' | reverse %}
                    {% for item in all_media %}
                    <tr class="media-row" style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                        <td style="padding: 15px; font-weight: bold; width: 80px;">{{ item.date | date: "%Y" }}</td>
                        <td style="padding: 15px;">
                            <span style="display: block; font-weight: bold;">{{ item.program }}</span>
                            <span style="font-size: 0.85rem; opacity: 0.7;">{{ item.channel }}</span>
                        </td>
                        <td style="padding: 15px;">
                            {{ item.title }}
                            {% if item.link != "#" %}
                             • <a href="{{ item.link }}" target="_blank" style="font-size: 0.85rem; color: var(--primary-color);">Link</a>
                            {% endif %}
                        </td>
                        <td style="padding: 15px;">
                            <span class="badge">{{ item.type }}</span>
                        </td>
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    </section>

</div>

<style>
    /* Button & Badge Styles */
    .btn-press { display: block; padding: 12px 20px; border-radius: 8px; text-decoration: none; color: var(--text-color); border: 1px solid var(--border-color); font-weight: bold; transition: 0.2s; text-align: center; }
    .btn-press:hover { background: var(--border-color); }
    .btn-press.primary { background: var(--primary-color); color: white; border-color: var(--primary-color); }
    .btn-press.primary:hover { opacity: 0.9; }
    
    .badge { font-size: 0.75rem; padding: 4px 10px; border-radius: 12px; background: rgba(0,0,0,0.05); color: var(--text-color); opacity: 0.8; }

    /* Featured Cards */
    .featured-card { background: var(--card-bg); padding: 30px; border-radius: 15px; border: 1px solid var(--border-color); border-top: 5px solid var(--primary-color); display: flex; flex-direction: column; transition: transform 0.3s; }
    .featured-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
    .link-watch { font-weight: bold; color: var(--primary-color); text-decoration: none; margin-top: auto; }

    /* Table Hover */
    .media-row:hover { background: rgba(120, 29, 66, 0.02); }

    /* Search Input Accessibility */
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
</style>

<script>
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
