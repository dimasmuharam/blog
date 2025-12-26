source "https://rubygems.org"

# 1. CORE ENGINE
gem "jekyll", "~> 4.3.2"

# 2. THEME
gem "minima", "~> 2.5"

# 3. PLUGINS (Fitur Lengkap)
group :jekyll_plugins do
  gem "jekyll-seo-tag"    # Wajib: Canonical Link & Meta Tag otomatis
  gem "jekyll-sitemap"    # Wajib: Agar Google mudah mengindeks
  gem "jekyll-feed"       # Wajib: RSS Feed untuk pembaca akademis
  gem "jekyll-paginate"   # Wajib: Membagi postingan menjadi halaman 1, 2, dst
  gem "jekyll-archives"   # Bonus: Halaman kategori otomatis
  gem "jekyll-redirect-from"
end

# 4. SYSTEM FIXES (Wajib untuk Cloudflare)
gem "webrick"
gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "kramdown-parser-gfm"
