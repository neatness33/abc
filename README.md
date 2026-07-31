# ABC IPTV Player — Website

Basit, hızlı ve SEO uyumlu tanıtım sitesi. GitHub Pages ile çalışacak şekilde hazırlanmıştır.

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana sayfa (özellikler + indirme + iletişim) |
| `activation/index.html` | Aktivasyon kodu sayfası (`/activation`) |
| `privacy.html` | Gizlilik politikası |
| `404.html` | Bulunamayan sayfa |
| `styles.css` | Tasarım |
| `script.js` | Mobil menü |
| `favicon.svg` | Site ikonu |
| `robots.txt` | Arama motoru kuralları |
| `sitemap.xml` | SEO site haritası |
| `CNAME` | Özel domain (`abciptvplayer.com`) |

## GitHub'a yükleme

### 1) Yeni repository oluştur
GitHub'da boş bir repo aç (örnek isim: `abciptvplayer` veya `abciptvplayer.github.io`).

### 2) Dosyaları yükle
Bu klasördeki tüm dosyaları repo'ya yükle (web arayüzü veya git ile).

### 3) GitHub Pages aç
1. Repo → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` (veya `master`) / `/ (root)`
4. **Save**

### 4) Özel domain (abciptvplayer.com)
1. Pages ayarlarında Custom domain alanına `abciptvplayer.com` yaz
2. DNS sağlayıcında şu kayıtları ekle:

**A kayıtları (örnek GitHub Pages IP'leri):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

veya subdomain kullanıyorsan:
```
CNAME  www  <kullaniciadi>.github.io
```

3. Pages ayarlarında **Enforce HTTPS** seçeneğini aç

## İndirme linkleri

Ana sayfadaki indirme butonları:

- Android TV → Google Play (`com.abc_iptv_player`)
- Android Phone → Google Play (`com.abc_iptv_player_v2`)
- iOS → App Store
- Windows → `abcinstaller105.exe`

Windows `.exe` dosyasını da repo'ya veya mevcut sunucuya koyduğundan emin ol. Şu an link `https://abciptvplayer.com/abcinstaller105.exe` adresine gidiyor.

## Yerelde önizleme

Dosyaları bir klasöre koyup `index.html` dosyasını tarayıcıda açman yeterli. İstersen:

```bash
npx serve .
```

## Notlar

- Google Analytics (`G-W8WL1511GT`) korundu
- Tawk.to canlı destek korundu
- Canonical, Open Graph, Twitter Card ve JSON-LD eklendi
- Mobil uyumlu sade tasarım
