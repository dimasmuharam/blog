---
layout: default
title: Writings & Thoughts
permalink: /blog/
pagination: 
  enabled: true
---

<div class="container">
    <div style="text-align: center; margin-bottom: 3rem;">
        <h1>Writings & Research</h1>
        <p class="lead">Explorations on public policy, digital accessibility, and social inclusion.</p>
    </div>

    <div class="post-list" style="max-width: 800px; margin: 0 auto;">
        {% for post in paginator.posts %}
        <article style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border-color);">
            
            <div style="font-size: 0.85rem; color: #666; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">
                <span style="color: var(--primary-color); font-weight: bold;">
                    {% if post.categories.size > 0 %}
                        {{ post.categories | first }}
                    {% else %}
                        Uncategorized
                    {% endif %}
                </span>
                &bull; {{ post.date | date: "%d %B %Y" }}
            </div>

            <h2 style="margin-top: 5px; margin-bottom: 10px; font-size: 1.8rem;">
                <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--text-color);">
                    {{ post.title }}
                </a>
            </h2>

            <div style="font-size: 1.1rem; line-height: 1.6; color: var(--text-color); opacity: 0.9;">
                {{ post.excerpt }}
            </div>
            
            <a href="{{ post.url | relative_url }}" style="display: inline-block; margin-top: 10px; font-weight: bold; font-size: 0.95rem;">
                Read Full Article &rarr;
            </a>
        </article>
        {% endfor %}
    </div>

    {% if paginator.total_pages > 1 %}
    <div class="pagination" style="text-align: center; margin-top: 3rem; display: flex; justify-content: center; gap: 20px;">
        
        {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path | relative_url }}" class="button">
                &larr; Newer Posts
            </a>
        {% else %}
            <span style="opacity: 0.3;">&larr; Newer Posts</span>
        {% endif %}

        <span style="align-self: center; font-weight: bold;">
            Page {{ paginator.page }} of {{ paginator.total_pages }}
        </span>

        {% if paginator.next_page %}
            <a href="{{ paginator.next_page_path | relative_url }}" class="button">
                Older Posts &rarr;
            </a>
        {% else %}
            <span style="opacity: 0.3;">Older Posts &rarr;</span>
        {% endif %}
        
    </div>
    {% endif %}
</div>
