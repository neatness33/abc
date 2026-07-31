(function () {
  var digits = document.querySelectorAll('#activationCta .ac-digit');
  if (!digits.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function roll(digit, delay) {
    setTimeout(function () {
      digit.classList.remove('roll');
      digit.textContent = Math.floor(Math.random() * 10);
      void digit.offsetWidth;
      digit.classList.add('roll');
    }, delay);
  }

  function cycle() {
    digits.forEach(function (digit, i) {
      roll(digit, i * 90);
    });
  }

  cycle();
  setInterval(cycle, 1600);
})();

(function () {
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();
