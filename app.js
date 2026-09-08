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
    openAdd: document.getElementById("openAdd"),
    closeAdd: document.getElementById("closeAdd"),
    addView: document.getElementById("addView"),
    addForm: document.getElementById("addForm"),
    inpTekst: document.getElementById("inpTekst"),
    inpBetekenis: document.getElementById("inpBetekenis"),
    inpOorsprong: document.getElementById("inpOorsprong"),
    customSection: document.getElementById("customSection"),
    customList: document.getElementById("customList"),
    copyCodeBtn: document.getElementById("copyCodeBtn"),
  };

  function dayOfYear(d) {
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d - start;
    return Math.floor(diff / 86400000);
  }

  const STORAGE_KEY = "zegswijzen-custom";

  function loadCustom() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCustom(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) { /* storage unavailable, ignore */ }
  }

  let customEntries = loadCustom();

  function allEntries() {
    return ZEGSWIJZEN.concat(customEntries);
  }

  let offset = 0; // days away from today
  let shuffledIndex = null; // if set, overrides date-based index until "vandaag"/prev/next pressed

  function currentDate() {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d;
  }

  function currentIndex() {
    const list = allEntries();
    if (shuffledIndex !== null) return shuffledIndex;
    const doy = dayOfYear(currentDate());
    return doy % list.length;
  }

  function render() {
    const d = currentDate();
    els.weekday.textContent = WEEKDAYS[d.getDay()];
    els.daynum.textContent = d.getDate();
    els.month.textContent = MONTHS[d.getMonth()];

    const item = allEntries()[currentIndex()];
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
    const list = allEntries();
    let n;
    do { n = Math.floor(Math.random() * list.length); } while (n === currentIndex() && list.length > 1);
    shuffledIndex = n;
  }));

  // ---- List view ----
  function buildList(filter = "") {
    const q = filter.trim().toLowerCase();
    els.sayingList.innerHTML = "";
    allEntries().forEach((item, i) => {
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

  // ---- Add view ----
  function jsEscape(str) {
    return String(str)
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, " ")
      .trim();
  }

  function buildCustomList() {
    els.customSection.hidden = customEntries.length === 0;
    els.customList.innerHTML = "";
    customEntries.forEach((item, i) => {
      const li = document.createElement("li");
      const textDiv = document.createElement("div");
      textDiv.className = "li-text";
      textDiv.textContent = item.tekst;
      const delBtn = document.createElement("button");
      delBtn.className = "custom-delete";
      delBtn.textContent = "Verwijderen";
      delBtn.addEventListener("click", () => {
        customEntries.splice(i, 1);
        saveCustom(customEntries);
        buildCustomList();
        render();
      });
      li.appendChild(textDiv);
      li.appendChild(delBtn);
      els.customList.appendChild(li);
    });
  }

  els.openAdd.addEventListener("click", () => {
    buildCustomList();
    els.addView.hidden = false;
    els.pageView.hidden = true;
  });
  els.closeAdd.addEventListener("click", () => {
    els.addView.hidden = true;
    els.pageView.hidden = false;
  });

  els.addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entry = {
      tekst: els.inpTekst.value.trim(),
      betekenis: els.inpBetekenis.value.trim(),
      oorsprong: els.inpOorsprong.value.trim(),
    };
    if (!entry.tekst || !entry.betekenis || !entry.oorsprong) return;
    customEntries.push(entry);
    saveCustom(customEntries);
    els.addForm.reset();
    buildCustomList();
    render();
  });

  els.copyCodeBtn.addEventListener("click", async () => {
    const code = customEntries.map((item) => (
      "  {\n" +
      `    tekst: "${jsEscape(item.tekst)}",\n` +
      `    betekenis: "${jsEscape(item.betekenis)}",\n` +
      `    oorsprong: "${jsEscape(item.oorsprong)}"\n` +
      "  },"
    )).join("\n");
    try {
      await navigator.clipboard.writeText(code);
      els.copyCodeBtn.textContent = "Gekopieerd!";
      els.copyCodeBtn.classList.add("copied");
      setTimeout(() => {
        els.copyCodeBtn.textContent = "Kopieer alles als code voor data.js";
        els.copyCodeBtn.classList.remove("copied");
      }, 2000);
    } catch (e) {
      // Fallback: select the text via a temporary textarea
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  });

  render();

  // ---- PWA: service worker ----
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
