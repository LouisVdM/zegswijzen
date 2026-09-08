(function () {
  const WEEKDAYS = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];
  const MONTHS = ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];

  const els = {
    weekday: document.getElementById("weekday"),
    daynum: document.getElementById("daynum"),
    month: document.getElementById("month"),
    saying: document.getElementById("sayingText"),
    betekenis: document.getElementById("betekenisText"),
    oorsprong: document.getElementById("oorsprongText"),
    page: document.getElementById("calendarPage"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    todayBtn: document.getElementById("todayBtn"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    openList: document.getElementById("openList"),
    closeList: document.getElementById("closeList"),
    listView: document.getElementById("listView"),
    pageView: document.getElementById("pageView"),
    searchBox: document.getElementById("searchBox"),
    sayingList: document.getElementById("sayingList"),
  };

  function dayOfYear(d) {
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d - start;
    return Math.floor(diff / 86400000);
  }

  let offset = 0; // days away from today
  let shuffledIndex = null; // if set, overrides date-based index until "vandaag"/prev/next pressed

  function currentDate() {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d;
  }

  function currentIndex() {
    if (shuffledIndex !== null) return shuffledIndex;
    const doy = dayOfYear(currentDate());
    return doy % ZEGSWIJZEN.length;
  }

  function render() {
    const d = currentDate();
    els.weekday.textContent = WEEKDAYS[d.getDay()];
    els.daynum.textContent = d.getDate();
    els.month.textContent = MONTHS[d.getMonth()];

    const item = ZEGSWIJZEN[currentIndex()];
    els.saying.textContent = "\u201C" + item.tekst + "\u201D";
    els.betekenis.textContent = item.betekenis;
    els.oorsprong.textContent = item.oorsprong;
  }

  function animateSwap(fn) {
    els.page.style.opacity = "0";
    els.page.style.transform = "translateY(6px)";
    setTimeout(() => {
      fn();
      render();
      els.page.style.opacity = "1";
      els.page.style.transform = "translateY(0)";
    }, 160);
  }

  els.prevBtn.addEventListener("click", () => animateSwap(() => { shuffledIndex = null; offset -= 1; }));
  els.nextBtn.addEventListener("click", () => animateSwap(() => { shuffledIndex = null; offset += 1; }));
  els.todayBtn.addEventListener("click", () => animateSwap(() => { shuffledIndex = null; offset = 0; }));
  els.shuffleBtn.addEventListener("click", () => animateSwap(() => {
    let n;
    do { n = Math.floor(Math.random() * ZEGSWIJZEN.length); } while (n === currentIndex() && ZEGSWIJZEN.length > 1);
    shuffledIndex = n;
  }));

  // ---- List view ----
  function buildList(filter = "") {
    const q = filter.trim().toLowerCase();
    els.sayingList.innerHTML = "";
    ZEGSWIJZEN.forEach((item, i) => {
      if (q && !item.tekst.toLowerCase().includes(q) && !item.betekenis.toLowerCase().includes(q)) return;
      const li = document.createElement("li");
      li.innerHTML = `<div class="li-text">${item.tekst}</div><div class="li-meaning">${item.betekenis}</div>`;
      li.addEventListener("click", () => {
        shuffledIndex = i;
        render();
        els.listView.hidden = true;
        els.pageView.hidden = false;
      });
      els.sayingList.appendChild(li);
    });
  }

  els.openList.addEventListener("click", () => {
    buildList();
    els.listView.hidden = false;
    els.pageView.hidden = true;
    els.searchBox.value = "";
    els.searchBox.focus();
  });
  els.closeList.addEventListener("click", () => {
    els.listView.hidden = true;
    els.pageView.hidden = false;
  });
  els.searchBox.addEventListener("input", (e) => buildList(e.target.value));

  render();

  // ---- PWA: service worker ----
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
