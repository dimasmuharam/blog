---
layout: default
title: The Accessible Bookshelf
permalink: /bookshelf/
---

<div class="container" style="padding: 40px 0;">
    <header style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 2.8rem;">The Accessible Bookshelf</h1>
        <p style="opacity: 0.8; max-width: 700px; margin: 0 auto;">
            Kurasi literatur pilihan Dimas P. Muharam. Dari teori disabilitas hingga kebijakan publik.
        </p>
    </header>

    {% assign books_by_category = site.data.books | group_by: "category" %}

    {% for category in books_by_category %}
    <section style="margin-bottom: 4rem;">
        <h2 style="border-bottom: 2px solid var(--primary-color); display: inline-block; padding-bottom: 5px; margin-bottom: 25px;">
            {{ category.name }}
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
            {% for book in category.items %}
            <div class="book-card" style="background: var(--card-bg); border: 1px solid var(--border-color); padding: 25px; border-radius: 12px; display: flex; flex-direction: column;">
                <span style="font-size: 0.7rem; font-weight: bold; color: var(--primary-color); text-transform: uppercase; margin-bottom: 10px;">
                    {{ book.recommendation }}
                </span>
                <h3 style="margin: 0 0 5px 0; font-size: 1.4rem;">{{ book.title }}</h3>
                <p style="font-style: italic; font-size: 0.9rem; opacity: 0.7; margin-bottom: 15px;">{{ book.author }}</p>
                <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 20px; border-left: 3px solid var(--border-color); padding-left: 15px;">
                    "{{ book.notes }}"
                </p>
                <div style="margin-top: auto;">
                    <a href="{{ book.link }}" target="_blank" style="font-weight: bold; color: var(--primary-color); text-decoration: none; font-size: 0.9rem;">
                        View on Goodreads &rarr;
                    </a>
                </div>
            </div>
            {% endfor %}
        </div>
    </section>
    {% endfor %}

    <div style="text-align: center; padding: 40px; border-top: 1px solid var(--border-color); margin-top: 40px;">
        <p>Total koleksi: {{ site.data.books.size }} buku.</p>
    </div>
</div>
