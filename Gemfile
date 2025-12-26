source "https://rubygems.org"

# 1. CORE ENGINE
# Mengunci versi Jekyll terbaru yang stabil
gem "jekyll", "~> 4.3.2"

# 2. THEME DEFAULT (Pondasi)
gem "minima", "~> 2.5"

# 3. PLUGINS (Fitur-fitur Website)
group :jekyll_plugins do
  
  # A. SEO & Identitas
  gem "jekyll-seo-tag"    # Wajib: Canonical Link & Meta Tag otomatis
  gem "jekyll-sitemap"    # Wajib: Agar Google mudah mengindeks semua halaman
  gem "jekyll-feed"       # Wajib: RSS Feed untuk pembaca akademis
  
  # B. Manajemen Konten (Request Mas Dimas)
  gem "jekyll-paginate"   # Wajib: Membagi postingan menjadi hal 1, 2, dst.
  gem "jekyll-archives"   # Bonus: Membuat halaman khusus per Kategori/Tags otomatis
  
  # C. Utilitas
  gem "jekyll-redirect-from" # Jaga-jaga jika nanti ada link lama yang mau dialihkan
end

# 4. SYSTEM & PERFORMANCE FIXES (Wajib untuk Cloudflare)
# Tanpa ini, build di Cloudflare sering gagal (Error Webrick/Timezone)
gem "webrick"
gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "kramdown-parser-gfm" # Parser Markdown yang lebih cepat & standar GitHub
