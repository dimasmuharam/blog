source "https://rubygems.org"

# 1. CORE ENGINE
gem "jekyll", "~> 4.3.4"

# 2. THEME
gem "minima", "~> 2.5"

# 3. PLUGINS
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  gem "jekyll-redirect-from"
end

# 4. SYSTEM FIXES (Ruby 3.4+ Compatibility Pack)
# Wajib ada agar Cloudflare tidak error
gem "webrick"
gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "kramdown-parser-gfm"

# FIX KHUSUS RUBY 3.4 (Ini solusi error Anda)
gem "csv"
gem "base64"
gem "bigdecimal"
gem "mutex_m"
