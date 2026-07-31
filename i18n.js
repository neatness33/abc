(function () {
  var STORAGE_KEY = 'abc_lang';

  var dict = {
    en: {
      'meta.title': 'ABC IPTV Player - Easy IPTV Login',
      'meta.description': 'ABC IPTV Player makes IPTV membership login simple and fast. Use an activation code — no long URL, username or password typing on your TV.',
      'nav.features': 'Features',
      'nav.download': 'Download',
      'nav.activation': 'Activation Code',
      'nav.contact': 'Contact',
      'nav.privacy': 'Privacy Policy',
      'nav.menu': 'Open menu',
      'hero.eyebrow': 'Fast & Easy IPTV Player',
      'hero.title': 'Enter your IPTV membership the easy way',
      'hero.lead': 'ABC IPTV Player is built for speed and simple login. Add your membership once, then sign in on any device in seconds.',
      'hero.download': 'Download Now',
      'hero.features': 'See Features',
      'hero.acTitle': 'Activation Code',
      'hero.acText': 'Skip typing long server URLs, usernames and passwords on your TV remote. One short activation code logs you into all our apps instantly.',
      'download.title': 'Download',
      'download.sub': 'Install the player and log in in minutes',
      'dl.getItOn': 'Get it on',
      'dl.androidTv': 'Android TV',
      'dl.androidPhone': 'Android Phone',
      'dl.downloadOn': 'Download on the',
      'dl.appStore': 'App Store',
      'dl.downloadFor': 'Download for',
      'dl.windows': 'Windows v1.0.5',
      'features.title': 'Why ABC IPTV Player',
      'features.sub': 'Designed for fast performance and effortless IPTV login',
      'feat.live': 'Easy IPTV Login',
      'feat.liveText': 'Enter your IPTV membership details once — no complicated setup on every device.',
      'feat.movies': 'Activation Code',
      'feat.moviesText': 'A short code replaces long URLs, usernames and passwords. Login becomes much easier, especially on TV remotes.',
      'feat.multi': 'Works Everywhere',
      'feat.multiText': 'Use the same simple login flow on phones, tablets, Smart TVs, Android TV and Windows.',
      'feat.fast': 'Lightning Fast',
      'feat.fastText': 'A lightweight player that opens quickly, responds instantly and keeps playback smooth.',
      'contact.title': 'Contact',
      'contact.sub': 'Need help with login or activation? We are here for you.',
      'contact.email': 'Email Support',
      'footer.copy': '© 2026 ABC IPTV Player. All rights reserved.',
      'privacy.metaTitle': 'Privacy Policy - ABC IPTV Player',
      'privacy.metaDesc': 'Privacy Policy for ABC IPTV Player. Learn how we collect, use and protect your information.',
      'privacy.title': 'Privacy Policy',
      'privacy.updated': 'Last updated: July 31, 2026',
      'privacy.intro': 'ABC IPTV Player ("we", "our", or "us") respects your privacy. This Privacy Policy explains how information is handled when you use our website and applications.',
      'privacy.h1': '1. Information We Collect',
      'privacy.p1': 'We may collect limited information such as:',
      'privacy.li1': 'Contact details you voluntarily send us (for example, email messages)',
      'privacy.li2': 'Basic analytics data (pages visited, device type, approximate location)',
      'privacy.li3': 'App usage data needed to improve stability and performance',
      'privacy.h2': '2. How We Use Information',
      'privacy.p2': 'We use collected information to:',
      'privacy.li4': 'Provide and improve our website and applications',
      'privacy.li5': 'Respond to support requests',
      'privacy.li6': 'Understand traffic and usage trends',
      'privacy.li7': 'Protect against abuse and technical issues',
      'privacy.h3': '3. Analytics',
      'privacy.p3': 'We use Google Analytics to understand how visitors use our website. Analytics tools may use cookies or similar technologies. You can control cookies through your browser settings.',
      'privacy.h4': '4. Third-Party Services',
      'privacy.p4': 'Our site and apps may link to third-party platforms such as Google Play, the App Store, or live chat providers. Those services have their own privacy policies.',
      'privacy.h5': '5. Data Security',
      'privacy.p5': 'We take reasonable measures to protect information. No method of transmission over the internet is fully secure, so we cannot guarantee absolute security.',
      'privacy.h6': '6. Children\'s Privacy',
      'privacy.p6': 'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.',
      'privacy.h7': '7. Changes to This Policy',
      'privacy.p7': 'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect the latest revision.',
      'privacy.h8': '8. Contact Us',
      'privacy.p8': 'If you have questions about this Privacy Policy, contact us at',
      'act.metaTitle': 'Activation Code - ABC IPTV Player',
      'act.metaDesc': 'Create an activation code and log into your IPTV membership instantly. No long URL, username or password typing on your device.',
      'act.eyebrow': 'Easiest IPTV Login',
      'act.title': 'Activation Code',
      'act.lead': 'Make IPTV membership login effortless. Create a short activation code once, then enter it in any ABC IPTV Player app — no URL, username or password to type on your TV or phone.',
      'act.s1': 'Add your membership',
      'act.s1t': 'Enter your IPTV membership details once on this page, using your keyboard.',
      'act.s2': 'Get your code',
      'act.s2t': 'You receive a short activation code linked to your membership.',
      'act.s3': 'Enter it in the app',
      'act.s3t': 'Type the code in any ABC IPTV Player app and you are logged in.',
      'act.formTitle': 'Create your activation code',
      'act.name': 'Playlist name',
      'act.namePh': 'My Playlist',
      'act.url': 'Server URL or M3U link',
      'act.user': 'Username',
      'act.pass': 'Password',
      'act.optional': '(Xtream Codes only)',
      'act.submit': 'Get Activation Code',
      'act.faq': 'Frequently asked questions',
      'act.q1': 'Which apps support activation codes?',
      'act.a1': 'All ABC IPTV Player apps — Android TV, Android phone, iPhone, Mac and Windows.',
      'act.q2': 'Do I need to enter my details again on every device?',
      'act.a2': 'No. One activation code works across our apps, so login stays quick and simple.',
      'act.q3': 'Is my playlist information kept private?',
      'act.a3': 'Your details are only used to load your membership inside the app. See our',
      'act.errFill': 'Please fill in the playlist name and server URL.',
      'act.errApi': 'Activation service is not connected yet. Please contact',
      'act.creating': 'Creating your activation code...',
      'act.yourCode': 'Your activation code: ',
      'act.errGeneric': 'Something went wrong. Please try again later.'
    },
    tr: {
      'meta.title': 'ABC IPTV Player - Kolay IPTV Girişi',
      'meta.description': 'ABC IPTV Player ile IPTV üyeliğinize çok kolay ve hızlı giriş yapın. Aktivasyon kodu sayesinde uzun URL, kullanıcı adı ve şifre yazmanıza gerek kalmaz.',
      'nav.features': 'Özellikler',
      'nav.download': 'İndir',
      'nav.activation': 'Aktivasyon Kodu',
      'nav.contact': 'İletişim',
      'nav.privacy': 'Gizlilik Politikası',
      'nav.menu': 'Menüyü aç',
      'hero.eyebrow': 'Hızlı ve Kolay IPTV Oynatıcı',
      'hero.title': 'IPTV üyeliğinize en kolay şekilde giriş yapın',
      'hero.lead': 'ABC IPTV Player hız ve basit giriş için tasarlandı. Üyeliğinizi bir kez ekleyin, tüm cihazlarda saniyeler içinde giriş yapın.',
      'hero.download': 'Hemen İndir',
      'hero.features': 'Özelliklere Bak',
      'hero.acTitle': 'Aktivasyon Kodu',
      'hero.acText': 'TV kumandasında uzun sunucu adresi, kullanıcı adı ve şifre yazmayı bırakın. Kısa bir aktivasyon kodu ile tüm uygulamalarımıza anında giriş yapın.',
      'download.title': 'İndir',
      'download.sub': 'Uygulamayı kurun ve dakikalar içinde giriş yapın',
      'dl.getItOn': 'İndirin',
      'dl.androidTv': 'Android TV',
      'dl.androidPhone': 'Android Telefon',
      'dl.downloadOn': 'İndirin',
      'dl.appStore': 'App Store',
      'dl.downloadFor': 'İndirin',
      'dl.windows': 'Windows v1.0.5',
      'features.title': 'Neden ABC IPTV Player',
      'features.sub': 'Hızlı performans ve zahmetsiz IPTV girişi için tasarlandı',
      'feat.live': 'Kolay IPTV Girişi',
      'feat.liveText': 'IPTV üyelik bilgilerinizi bir kez girin — her cihazda karmaşık kurulum yok.',
      'feat.movies': 'Aktivasyon Kodu',
      'feat.moviesText': 'Kısa bir kod, uzun URL, kullanıcı adı ve şifrenin yerini alır. Özellikle TV kumandasında giriş çok kolaylaşır.',
      'feat.multi': 'Her Yerde Çalışır',
      'feat.multiText': 'Aynı kolay giriş akışını telefon, tablet, Smart TV, Android TV ve Windows’ta kullanın.',
      'feat.fast': 'Çok Hızlı',
      'feat.fastText': 'Hızlı açılan, anında tepki veren ve akıcı çalışan hafif bir oynatıcı.',
      'contact.title': 'İletişim',
      'contact.sub': 'Giriş veya aktivasyon konusunda yardıma mı ihtiyacınız var? Buradayız.',
      'contact.email': 'E-posta Destek',
      'footer.copy': '© 2026 ABC IPTV Player. Tüm hakları saklıdır.',
      'privacy.metaTitle': 'Gizlilik Politikası - ABC IPTV Player',
      'privacy.metaDesc': 'ABC IPTV Player Gizlilik Politikası. Bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.',
      'privacy.title': 'Gizlilik Politikası',
      'privacy.updated': 'Son güncelleme: 31 Temmuz 2026',
      'privacy.intro': 'ABC IPTV Player ("biz", "bizim") gizliliğinize saygı duyar. Bu Gizlilik Politikası, web sitemizi ve uygulamalarımızı kullanırken bilgilerin nasıl işlendiğini açıklar.',
      'privacy.h1': '1. Topladığımız Bilgiler',
      'privacy.p1': 'Sınırlı bilgiler toplayabiliriz, örneğin:',
      'privacy.li1': 'Bize gönüllü olarak gönderdiğiniz iletişim bilgileri (örneğin e-posta mesajları)',
      'privacy.li2': 'Temel analitik veriler (ziyaret edilen sayfalar, cihaz türü, yaklaşık konum)',
      'privacy.li3': 'Kararlılık ve performansı iyileştirmek için gereken uygulama kullanım verileri',
      'privacy.h2': '2. Bilgileri Nasıl Kullanırız',
      'privacy.p2': 'Toplanan bilgileri şu amaçlarla kullanırız:',
      'privacy.li4': 'Web sitemizi ve uygulamalarımızı sağlamak ve geliştirmek',
      'privacy.li5': 'Destek taleplerine yanıt vermek',
      'privacy.li6': 'Trafik ve kullanım trendlerini anlamak',
      'privacy.li7': 'Kötüye kullanım ve teknik sorunlara karşı koruma sağlamak',
      'privacy.h3': '3. Analitik',
      'privacy.p3': 'Ziyaretçilerin web sitemizi nasıl kullandığını anlamak için Google Analytics kullanırız. Analitik araçlar çerez veya benzer teknolojiler kullanabilir. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.',
      'privacy.h4': '4. Üçüncü Taraf Hizmetler',
      'privacy.p4': 'Sitemiz ve uygulamalarımız Google Play, App Store veya canlı destek sağlayıcıları gibi üçüncü taraf platformlara bağlanabilir. Bu hizmetlerin kendi gizlilik politikaları vardır.',
      'privacy.h5': '5. Veri Güvenliği',
      'privacy.p5': 'Bilgileri korumak için makul önlemler alırız. İnternet üzerinden hiçbir iletim yöntemi tamamen güvenli değildir; mutlak güvenlik garanti edilemez.',
      'privacy.h6': '6. Çocukların Gizliliği',
      'privacy.p6': 'Hizmetlerimiz 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamayız.',
      'privacy.h7': '7. Bu Politikadaki Değişiklikler',
      'privacy.p7': 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Sayfanın üstündeki "Son güncelleme" tarihi en son revizyonu gösterir.',
      'privacy.h8': '8. Bize Ulaşın',
      'privacy.p8': 'Bu Gizlilik Politikası hakkında sorularınız varsa bize ulaşın:',
      'act.metaTitle': 'Aktivasyon Kodu - ABC IPTV Player',
      'act.metaDesc': 'Aktivasyon kodu oluşturun ve IPTV üyeliğinize anında giriş yapın. Cihazınızda uzun URL, kullanıcı adı veya şifre yazmanıza gerek yok.',
      'act.eyebrow': 'En Kolay IPTV Girişi',
      'act.title': 'Aktivasyon Kodu',
      'act.lead': 'IPTV üyeliğinize girişi zahmetsiz hale getirin. Kısa bir aktivasyon kodunu bir kez oluşturun, ardından herhangi bir ABC IPTV Player uygulamasına yazın — TV veya telefonda URL, kullanıcı adı ya da şifre yazmanıza gerek yok.',
      'act.s1': 'Üyeliğinizi ekleyin',
      'act.s1t': 'IPTV üyelik bilgilerinizi bir kez, klavyenizle bu sayfada girin.',
      'act.s2': 'Kodunuzu alın',
      'act.s2t': 'Üyeliğinize bağlı kısa bir aktivasyon kodu alırsınız.',
      'act.s3': 'Uygulamaya girin',
      'act.s3t': 'Kodu herhangi bir ABC IPTV Player uygulamasına yazın ve giriş tamamlanır.',
      'act.formTitle': 'Aktivasyon kodunuzu oluşturun',
      'act.name': 'Liste adı',
      'act.namePh': 'Listem',
      'act.url': 'Sunucu URL veya M3U bağlantısı',
      'act.user': 'Kullanıcı adı',
      'act.pass': 'Şifre',
      'act.optional': '(Yalnızca Xtream Codes)',
      'act.submit': 'Aktivasyon Kodu Al',
      'act.faq': 'Sık sorulan sorular',
      'act.q1': 'Hangi uygulamalar aktivasyon kodunu destekler?',
      'act.a1': 'Tüm ABC IPTV Player uygulamaları — Android TV, Android telefon, iPhone, Mac ve Windows.',
      'act.q2': 'Her cihazda bilgileri tekrar girmem gerekir mi?',
      'act.a2': 'Hayır. Tek bir aktivasyon kodu uygulamalarımızda çalışır; giriş hızlı ve basit kalır.',
      'act.q3': 'Liste bilgilerim gizli tutulur mu?',
      'act.a3': 'Bilgileriniz yalnızca uygulamanın içinde üyeliğinizi yüklemek için kullanılır. Bkz.',
      'act.errFill': 'Lütfen liste adını ve sunucu URL’sini doldurun.',
      'act.errApi': 'Aktivasyon servisi henüz bağlı değil. Lütfen iletişime geçin:',
      'act.creating': 'Aktivasyon kodunuz oluşturuluyor...',
      'act.yourCode': 'Aktivasyon kodunuz: ',
      'act.errGeneric': 'Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.'
    }
  };

  function getSaved() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === 'tr' || v === 'en') return v;
    } catch (e) {}
    return null;
  }

  function save(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function guessLocal() {
    var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    var tz = '';
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (e) {}
    if (lang.indexOf('tr') === 0 || tz === 'Europe/Istanbul') return 'tr';
    return 'en';
  }

  function detectByIp() {
    return new Promise(function (resolve) {
      var done = false;
      var timer = setTimeout(function () {
        if (!done) {
          done = true;
          resolve(guessLocal());
        }
      }, 2500);

      fetch('https://ipapi.co/country/', { cache: 'no-store' })
        .then(function (res) {
          if (!res.ok) throw new Error('geo');
          return res.text();
        })
        .then(function (text) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(String(text).trim().toUpperCase() === 'TR' ? 'tr' : 'en');
        })
        .catch(function () {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(guessLocal());
        });
    });
  }

  function t(key, lang) {
    var pack = dict[lang] || dict.en;
    return pack[key] != null ? pack[key] : (dict.en[key] || key);
  }

  function apply(lang) {
    var pack = dict[lang] || dict.en;
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key || pack[key] == null) return;
      el.textContent = pack[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key || pack[key] == null) return;
      el.innerHTML = pack[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key || pack[key] == null) return;
      el.setAttribute('placeholder', pack[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key || pack[key] == null) return;
      el.setAttribute('aria-label', pack[key]);
    });

    var titleKey = document.body.getAttribute('data-i18n-title') || 'meta.title';
    var descKey = document.body.getAttribute('data-i18n-desc') || 'meta.description';
    if (pack[titleKey]) document.title = pack[titleKey];
    var desc = document.querySelector('meta[name="description"]');
    if (desc && pack[descKey]) desc.setAttribute('content', pack[descKey]);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    window.ABC_LANG = lang;
    document.dispatchEvent(new CustomEvent('abc:lang', { detail: { lang: lang } }));
  }

  function setLang(lang, persist) {
    if (lang !== 'tr' && lang !== 'en') lang = 'en';
    if (persist) save(lang);
    apply(lang);
  }

  function bindSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'), true);
      });
    });
  }

  function init() {
    bindSwitcher();
    var saved = getSaved();
    if (saved) {
      apply(saved);
      return;
    }
    apply('en');
    detectByIp().then(function (lang) {
      if (getSaved()) return;
      apply(lang);
    });
  }

  window.ABC_I18N = {
    t: t,
    setLang: setLang,
    apply: apply,
    getLang: function () { return window.ABC_LANG || 'en'; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
