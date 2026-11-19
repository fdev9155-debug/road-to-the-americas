(function () {
  // --- dash: decorative start-up sweep (same shift-light colours as the in-game dash) ---
  var strip = document.getElementById("revs");
  var spd = document.getElementById("spd");
  var gearEl = document.getElementById("gear");
  if (strip && spd && gearEl) {
    var segs = Array.prototype.slice.call(strip.children);
    var N = segs.length;
    var lit = function (n) { segs.forEach(function (s, i) { s.classList.toggle("on", i < n); }); };
    var settle = function () { strip.classList.remove("blue"); lit(4); spd.textContent = "0"; gearEl.textContent = "N"; };
    settle();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lit(0);
      var step = function (i) {
        setTimeout(function () {
          lit(i);
          spd.textContent = String(Math.round(i / N * 182));
          gearEl.textContent = String(1 + Math.min(3, Math.floor((i - 1) / 5)));
        }, 350 + i * 55);
      };
      for (var i = 1; i <= N; i++) step(i);
      var flashAt = 350 + N * 55 + 150;
      for (var k = 0; k < 6; k++) setTimeout(function () { strip.classList.toggle("blue"); }, flashAt + k * 110);
      setTimeout(settle, flashAt + 6 * 110 + 120);
    }
  }

  // --- nav: mark the page section being read (sidebar and bottom tabs) ---
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-item, .tab"));
  var ids = ["play", "disciplines", "setup", "screens", "controls", "updates"];
  var wide = window.matchMedia("(min-width: 1280px)");
  function mark(id) {
    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  function current() {
    var line = window.innerHeight * 0.4, best = "play";
    ids.forEach(function (id) {
      if (id === "setup" && wide.matches) return; // the setup panel sits beside the play cards on wide screens
      var el = document.getElementById(id);
      if (!el) return;
      var r = el.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) best = id;
    });
    var doc = document.documentElement;
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) best = "updates";
    return best;
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; mark(current()); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  links.forEach(function (a) {
    a.addEventListener("click", function () { mark(a.getAttribute("href").slice(1)); });
  });
  mark(current());
})();
