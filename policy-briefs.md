---
layout: default
title: Policy Briefs & Research
permalink: /policy-briefs/
description: Dokumen analisis kebijakan dan hasil riset strategis mengenai inklusi disabilitas oleh Dimas P. Muharam.
---

<div class="container" style="padding: 60px 0;">
    <header style="text-align: center; margin-bottom: 5rem;">
        <h1 style="font-size: 3rem; margin-bottom: 20px;">Policy Briefs & Research</h1>
        <p style="font-size: 1.25rem; max-width: 800px; margin: 0 auto; opacity: 0.9; line-height: 1.6;">
            Kumpulan analisis kebijakan berbasis data (evidence-based) untuk mendorong perubahan sistemik yang inklusif di sektor publik maupun privat.
        </p>
    </header>

    <div style="max-width: 900px; margin: 0 auto;">
        {% assign briefs = site.policy_briefs | sort: 'date' | reverse %}
        {% for brief in briefs %}
        <article style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 40px; border-radius: 15px; margin-bottom: 40px; transition: transform 0.3s ease; position: relative;" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <span style="background: rgba(120, 29, 66, 0.1); color: var(--primary-color); padding: 5px 15px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase;">
                    {{ brief.category | default: "Research" }}
                </span>
                <time style="font-size: 0.9rem; opacity: 0.7;">{{ brief.date | date: "%B %Y" }}</time>
            </div>

            <h2 style="margin: 0 0 15px 0; font-size: 1.8rem; line-height: 1.3;">
                <a href="{{ brief.url | relative_url }}" style="text-decoration: none; color: var(--text-color);">{{ brief.title }}</a>
            </h2>

            <p style="font-size: 1.1rem; opacity: 0.8; margin-bottom: 25px; line-height: 1.7;">
                {{ brief.excerpt | strip_html | truncatewords: 35 }}
            </p>

            <div style="display: flex; gap: 20px; align-items: center;">
                <a href="{{ brief.url | relative_url }}" style="font-weight: bold; color: var(--primary-color); text-decoration: none;">
                    Baca Analisis Lengkap &rarr;
                </a>
                {% if brief.pdf_url %}
                <a href="{{ brief.pdf_url }}" target="_blank" style="font-size: 0.9rem; color: var(--text-color); opacity: 0.6; text-decoration: underline;">
                    Download PDF
                </a>
                {% endif %}
            </div>
        </article>
        {% else %}
        <div style="text-align: center; padding: 50px; background: var(--card-bg); border-radius: 12px; border: 1px dashed var(--border-color);">
            <p style="font-style: italic; opacity: 0.7;">Sedang menyiapkan publikasi riset terbaru. Silakan kembali lagi nanti.</p>
        </div>
        {% endfor %}
    </div>
</div>
