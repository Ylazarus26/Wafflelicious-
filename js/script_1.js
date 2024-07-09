window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb = window.wsb || {};
window.wsb["Theme28"] =
  window.wsb["Theme28"] ||
  window.radpack("@widget/LAYOUT/bs-layout28-Theme-publish-Theme").then(function (t) {
    return new t.default();
  });
window.wsb["FreemiumAd"] = function (e) {
  let { adEndpoint: t, isPublish: a, containerId: o } = e;
  const r = 1e4,
    l = /<script[^>]*>([\s\S]*)<\/script>/;
  let n, i, s;
  function c(e) {
    e.preventDefault(), e.stopPropagation();
    const t = new CustomEvent("editor", { detail: { type: "showModal", modal: "plans", source: "freemiumAd" } });
    window.dispatchEvent(t);
  }
  function g(e) {
    if (((s = document.getElementById(o)), !s)) return;
    (n = document.createElement("div")),
      (n.style.cssText = "width:100%;"),
      s.prepend(n),
      (i = document.createElement("div")),
      i.setAttribute("data-freemium-ad", !0),
      (i.style.cssText = `overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`),
      (i.innerHTML = (e || "").replace(l, "")),
      s.prepend(i);
    const t = `${i.offsetHeight}px`;
    if (
      ((n.style.minHeight = t),
      window.requestAnimationFrame(() => {
        const e = document.querySelector("[data-stickynav]");
        e && "fixed" === e.style.position && (e.style.top = t);
      }),
      a)
    ) {
      const t = l.exec(e);
      if (t) {
        const e = document.createElement("script");
        e.appendChild(document.createTextNode(t[1])), document.head.appendChild(e);
      }
    } else i.addEventListener("click", c, { useCapture: !0 });
  }
  return (
    (function () {
      const e = (a && sessionStorage.getItem(t)) || "";
      e
        ? g(e)
        : window
            .fetch(t)
            .then((e) => e.ok && e.text())
            .then((e) => {
              e && (sessionStorage.setItem(t, e), g(e));
            })
            .catch(() => {});
    })(),
    function () {
      !a && i && i.removeEventListener("click", c, { useCapture: !0 }), s && (s.removeChild(n), s.removeChild(i));
    }
  );
};
window.wsb["FreemiumAd"](JSON.parse('{"adEndpoint":"/markup/ad","isPublish":true,"containerId":"freemium-ad-69693"}'));
window.wsb["context-bs-1"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["fredoka-one","open-sans",""],"colors":["#feebda"],"locale":"en-GB","language":"en","resellerId":1,"internalLinks":{"106b55e3-141a-442e-91c2-a55e761d3cdd":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","routePath":"/"},"3850e6ea-a4a0-4ef0-9913-fc123a1c746d":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"7e19982e-903a-4eda-95ab-4e6303304097","routePath":"/"},"147e5419-3d55-4524-951b-3927fcfea5f8":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966","routePath":"/"},"2507c639-ccca-4601-9e16-678a4be96ded":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"7e19982e-903a-4eda-95ab-4e6303304097","routePath":"/"},"2067df21-fc7b-465e-b27e-98947ef67cfb":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"5fa03a13-4604-4df4-b3ec-3ddbe4b084ff","routePath":"/"}},"isHomepage":true,"navigationMap":{"17995ab4-7078-4735-abc9-81b83ab11ef5":{"isFlyoutMenu":false,"active":false,"pageId":"17995ab4-7078-4735-abc9-81b83ab11ef5","name":"Contact Us","href":"/#7e19982e-903a-4eda-95ab-4e6303304097","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"7e19982e-903a-4eda-95ab-4e6303304097"},"21a1025c-be80-4b44-b939-a3026ebc51ec":{"isFlyoutMenu":false,"active":false,"pageId":"21a1025c-be80-4b44-b939-a3026ebc51ec","name":"About us","href":"/#5fa03a13-4604-4df4-b3ec-3ddbe4b084ff","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"5fa03a13-4604-4df4-b3ec-3ddbe4b084ff"},"2a4b1076-ecc0-4a22-b63b-b39080beb26e":{"isFlyoutMenu":false,"active":false,"pageId":"2a4b1076-ecc0-4a22-b63b-b39080beb26e","name":"Reviews","href":"/#946b6235-d7a2-4294-bc73-f8f65aed3408","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"946b6235-d7a2-4294-bc73-f8f65aed3408"},"84890ca9-33c3-41fb-9fcf-6d0ca4ddc4ff":{"isFlyoutMenu":false,"active":false,"pageId":"84890ca9-33c3-41fb-9fcf-6d0ca4ddc4ff","name":"Past events","href":"/#dbab3fa2-8926-4cd9-badf-8dcdc15b1966","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966"},"cd81f4a3-15c0-4d8e-9261-d082a5a15ac5":{"isFlyoutMenu":false,"active":false,"pageId":"cd81f4a3-15c0-4d8e-9261-d082a5a15ac5","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"d321a0c0-c07d-4373-80fd-ededd669495b":{"isFlyoutMenu":false,"active":true,"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true}},"dials":{"colors":[{"id":"#feebda","meta":{"primary":"rgb(254, 235, 218)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"fredoka-one","description":"","tags":["sans-serif","modern","clean","bold"],"meta":{"order":13,"primary":{"id":"fredoka-one","name":"Fredoka One","url":"//fonts.googleapis.com/css?family=Fredoka+One:400&display=swap","family":"\'Fredoka One\', arial, sans-serif","size":16,"weight":400,"weights":[400,700]},"alternate":{"id":"poppins","name":"Poppins","url":"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap","family":"\'Poppins\', arial, sans-serif","size":16,"weight":400,"weights":[300,400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesPrimary":[{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"primary":{"family":"Arial, sans-serif"}}}]},"alternate":{"id":"open-sans","description":"","tags":[],"meta":{"order":14,"alternate":{"id":"open-sans","name":"Open Sans","url":"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap","family":"\'Open Sans\', arial, sans-serif","size":16,"weight":400,"weights":[300,400,700,800],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["ja-JP"],"meta":{"alternate":{"family":"Open Sans, MS Mincho, \'\uFF2D\uFF33 \uFF30\u660E\u671D\', serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Open Sans, \'\uBC14\uD0D5\', Batang, \'\uBC14\uD0D5\uCCB4\', BatangChe, serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Open Sans, \'\u534E\u6587\u9ED1\u4F53\', STHeiti, Heiti SC, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Open Sans, Hiragino Sans GB, sans-serif"}}}]}}},"theme":"Theme28"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-1",
    componentName: "@widget/LAYOUT/bs-Hamburger-Component",
    props: JSON.parse(
      '{"toggleId":"n-69691-navId-mobile","uniqueId":"n-69691","style":{"color":"highContrast",":hover":{"color":"highlight"},"@md":{"display":"none"}},"widgetId":"62d4dc36-9deb-4feb-b4d4-f32c84ba1366","section":"default","category":"accent","locale":"en-GB","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"62d4dc36-9deb-4feb-b4d4-f32c84ba1366","widgetType":"HEADER","widgetPreset":"header9","group":"HeaderMedia","groupType":"Fill","section":"default","category":"accent","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-Hamburger-Component",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-2",
    componentName: "@widget/LAYOUT/bs-LinkAwareComponent",
    props: JSON.parse(
      '{"toggleId":"more-69709","label":"More","dataAid":"NAV_MORE","navBarId":"navContainer-69701","widgetId":"62d4dc36-9deb-4feb-b4d4-f32c84ba1366","section":"default","category":"accent","locale":"en-GB","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"widgetId":"62d4dc36-9deb-4feb-b4d4-f32c84ba1366","widgetType":"HEADER","widgetPreset":"header9","group":"Nav","groupType":"Default","section":"default","category":"accent","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/LAYOUT/bs-LinkAwareComponent",
  },
  false
);
window.wsb["CalculateSplitNavSpacing"] = function (e) {
  let { containerId: a, navId: n, splitNavId: i, logoImageId: l, inlineUtilitiesMenu: o, forceBreakpoint: r } = e;
  let c, s, g, p, d, u, y, m;
  const b = document.getElementById(n),
    v = document.getElementById(i);
  function h() {
    if (s || !b || !T(b)) return;
    (p = Array.from(b.children)), (g = Array.from(b.children)), g.forEach(E), o && ((d = g.pop()), M(d)), (u = g.pop());
    const e = u.querySelector("ul");
    (y = e ? Array.from(e.children) : []),
      (b.style.whiteSpace = "normal"),
      (m = T(b.parentElement, "floor")),
      (b.style.whiteSpace = "nowrap"),
      window.requestAnimationFrame(I);
  }
  function I() {
    const e = d && d.querySelector("[data-ux='Pipe']");
    e && R(e);
    const t = g,
      a = t.map((e) => T(e));
    const n = d ? T(d) : 0;
    let i = 0,
      l = a.concat(n).findIndex((e) => {
        if (i + e > m) return e;
        i += e;
      });
    l < 0 && (l = a.length);
    const o = a.slice(0, l);
    let r,
      c,
      s = a.slice(l);
    if (k(s) + n < m) (r = !1), (c = 0);
    else {
      (r = !0), (c = T(u));
      let e = 0,
        t = c + n;
      s.some((a) => {
        if (((t += a), t >= m)) return !0;
        e++;
      }),
        (s = s.slice(0, e));
    }
    for (; o.length > 1 && B(o, s.concat([c, n]).filter(Boolean)); ) s.unshift(o.pop());
    const b = Array.from(v.children);
    if (
      (f(b, 0, o.length, M),
      f(t, 0, o.length, R),
      f(y, 0, o.length, R),
      f(b, o.length, o.length + s.length, R),
      f(t, o.length, o.length + s.length, M),
      f(y, o.length, o.length + s.length, R),
      f(b, o.length + s.length, t.length, R),
      f(t, o.length + s.length, t.length, R),
      f(y, o.length + s.length, t.length, M),
      r ? M(u) : R(u),
      (function () {
        const e = p.filter((e) => "visible" === e.style.visibility && e.classList.contains("nav-item")),
          t = e[e.length - 1];
        t && t.classList.add("last-visible-nav-item");
      })(),
      e)
    ) {
      t.find((e) => "visible" === e.style.visibility) && M(e);
    }
    window.dispatchEvent(new Event("NavItemsResized"));
  }
  function w() {
    (window.innerWidth < 1024 && r && r !== t.Q) || (window.clearTimeout(c), (c = window.setTimeout(h, 50)));
  }
  function f(e, t, a, n) {
    e = e.slice(t, a).map(n).concat(e.slice(a));
  }
  function E(e) {
    (e.style.visibility = "hidden"), (e.style.display = ""), e.classList.remove("last-visible-nav-item", "visible");
  }
  function R(e) {
    (e.style.display = "none"), e.classList.remove("visible");
  }
  function M(e) {
    (e.style.visibility = "visible"), (e.style.display = ""), e.classList.add("visible");
  }
  function k(e) {
    return e.reduce((e, t) => e + t, 0);
  }
  function T(e) {
    return "ceil" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ceil")
      ? Math.ceil(e.getBoundingClientRect().width)
      : Math.floor(e.getBoundingClientRect().width);
  }
  function B(e, t) {
    if (!t.length && e.length > 1) return !0;
    const a = e[e.length - 1],
      n = k(e),
      i = k(t);
    return Math.abs(n - i) > Math.abs(n - a - (i + a));
  }
  if ((w(), window.ResizeObserver)) {
    const e = new window.ResizeObserver(w);
    return (
      [document.getElementById(a), document.getElementById(l)].forEach((t) => t && e.observe(t)),
      () => {
        (s = !0), e.disconnect();
      }
    );
  }
  return (
    window.addEventListener("resize", w, { passive: !0 }),
    () => {
      (s = !0), window.removeEventListener("resize", w, { passive: !0 });
    }
  );
};
window.wsb["CalculateSplitNavSpacing"](
  JSON.parse(
    '{"navId":"n-6969169700-navId-2","inlineUtilitiesMenu":false,"containerId":"navContainer-69701","splitNavId":"n-6969169699-navId-1"}'
  )
);
window.wsb["DynamicFontScaler"] = function (t) {
  let e,
    { containerId: n, targetId: o, fontSizes: r, maxLines: i, prioritizeDefault: s } = t;
  if ("undefined" == typeof document) return;
  const a = document.getElementById(n),
    c = document.getElementById(o);
  function l(t) {
    return (
      (function (t) {
        const e = parseInt(y(t, "padding-left") || 0, 10),
          n = parseInt(y(t, "padding-right") || 0, 10);
        return t.scrollWidth + e + n;
      })(t) <= a.clientWidth &&
      (function (t) {
        const e = t.offsetHeight,
          n = parseInt(y(t, "line-height"), 10) || 1;
        return Math.floor(e / n);
      })(t) <= i
    );
  }
  function p(t) {
    return parseInt(y(t, "font-size") || 0, 10);
  }
  function d(t) {
    if (1 === t.length) return t[0];
    const e = t.filter(l);
    if (1 === e.length) return e[0];
    if (!e.length)
      return (function (t) {
        return t.sort((t, e) => p(t) - p(e))[0];
      })(t);
    return e.sort((t, e) => p(e) - p(t))[0];
  }
  function u() {
    if (!a || !c || e === window.innerWidth) return;
    if (c.hasAttribute("data-font-scaled")) return void g();
    e = window.innerWidth;
    const t = Array.prototype.slice
      .call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`))
      .sort((t, e) => r.indexOf(t.getAttribute("data-size")) - r.indexOf(e.getAttribute("data-size")));
    if (a.clientWidth && t.length) {
      const e = a.style.width || "";
      (a.style.width = "100%"),
        t.forEach((t) => {
          (t.style.display = "inline-block"), (t.style.maxWidth = `${a.clientWidth}px`);
        });
      const n = d(t);
      !(function (t) {
        t.forEach((t) => {
          (t.style.display = "none"), (t.style.maxWidth = "");
        });
      })(t),
        (a.style.width = e);
      const r = y(n, "font-size"),
        i = c.getAttribute("data-last-size");
      if (r && r !== i) {
        if (s) {
          const t = y(c, "font-size");
          if (parseInt(r, 10) >= parseInt(t, 10)) return;
        }
        c.setAttribute("data-last-size", r);
        let t = document.querySelector(`#${o}-style`);
        t || ((t = document.createElement("style")), (t.id = `${o}-style`), document.head.appendChild(t)),
          (t.textContent = `#${c.id} { font-size: ${r} !important; }`);
      }
    }
  }
  function g() {
    c && c.removeAttribute("data-last-size");
    const t = document.querySelector(`#${o}-style`);
    t && t.parentNode.removeChild(t);
  }
  function y(t, e) {
    return document.defaultView.getComputedStyle(t).getPropertyValue(e);
  }
  return (
    u(),
    window.addEventListener("resize", u),
    () => {
      g(), window.removeEventListener("resize", u);
    }
  );
};
window.wsb["DynamicFontScaler"](
  JSON.parse(
    '{"containerId":"tagline-container-69727","targetId":"dynamic-tagline-69728","fontSizes":["xlarge","xxlarge","xxxlarge","large"],"maxLines":4}'
  )
);
window.wsb["DynamicFontScaler"](
  JSON.parse(
    '{"containerId":"tagline-container-69729","targetId":"dynamic-tagline-69730","fontSizes":["xlarge","xxlarge","xxxlarge","large"],"maxLines":4}'
  )
);
window.wsb["context-bs-3"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["fredoka-one","open-sans",""],"colors":["#feebda"],"fontScale":"medium","locale":"en-GB","language":"en","resellerId":1,"internalLinks":{"106b55e3-141a-442e-91c2-a55e761d3cdd":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","routePath":"/"},"3850e6ea-a4a0-4ef0-9913-fc123a1c746d":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"7e19982e-903a-4eda-95ab-4e6303304097","routePath":"/"},"147e5419-3d55-4524-951b-3927fcfea5f8":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966","routePath":"/"},"2507c639-ccca-4601-9e16-678a4be96ded":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"7e19982e-903a-4eda-95ab-4e6303304097","routePath":"/"},"2067df21-fc7b-465e-b27e-98947ef67cfb":{"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","widgetId":"5fa03a13-4604-4df4-b3ec-3ddbe4b084ff","routePath":"/"}},"isHomepage":true,"navigationMap":{"17995ab4-7078-4735-abc9-81b83ab11ef5":{"isFlyoutMenu":false,"active":false,"pageId":"17995ab4-7078-4735-abc9-81b83ab11ef5","name":"Contact Us","href":"/#7e19982e-903a-4eda-95ab-4e6303304097","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"7e19982e-903a-4eda-95ab-4e6303304097"},"21a1025c-be80-4b44-b939-a3026ebc51ec":{"isFlyoutMenu":false,"active":false,"pageId":"21a1025c-be80-4b44-b939-a3026ebc51ec","name":"About us","href":"/#5fa03a13-4604-4df4-b3ec-3ddbe4b084ff","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"5fa03a13-4604-4df4-b3ec-3ddbe4b084ff"},"2a4b1076-ecc0-4a22-b63b-b39080beb26e":{"isFlyoutMenu":false,"active":false,"pageId":"2a4b1076-ecc0-4a22-b63b-b39080beb26e","name":"Reviews","href":"/#946b6235-d7a2-4294-bc73-f8f65aed3408","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"946b6235-d7a2-4294-bc73-f8f65aed3408"},"84890ca9-33c3-41fb-9fcf-6d0ca4ddc4ff":{"isFlyoutMenu":false,"active":false,"pageId":"84890ca9-33c3-41fb-9fcf-6d0ca4ddc4ff","name":"Past events","href":"/#dbab3fa2-8926-4cd9-badf-8dcdc15b1966","target":"","visible":true,"isSectionLink":true,"requiresAuth":false,"destinationPageId":"d321a0c0-c07d-4373-80fd-ededd669495b","tags":[],"rel":"","type":"page","showInFooter":true,"widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966"},"cd81f4a3-15c0-4d8e-9261-d082a5a15ac5":{"isFlyoutMenu":false,"active":false,"pageId":"cd81f4a3-15c0-4d8e-9261-d082a5a15ac5","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false},"d321a0c0-c07d-4373-80fd-ededd669495b":{"isFlyoutMenu":false,"active":true,"pageId":"d321a0c0-c07d-4373-80fd-ededd669495b","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true}},"dials":{"colors":[{"id":"#feebda","meta":{"primary":"rgb(254, 235, 218)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"fredoka-one","description":"","tags":["sans-serif","modern","clean","bold"],"meta":{"order":13,"primary":{"id":"fredoka-one","name":"Fredoka One","url":"//fonts.googleapis.com/css?family=Fredoka+One:400&display=swap","family":"\'Fredoka One\', arial, sans-serif","size":16,"weight":400,"weights":[400,700]},"alternate":{"id":"poppins","name":"Poppins","url":"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap","family":"\'Poppins\', arial, sans-serif","size":16,"weight":400,"weights":[300,400,600,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesPrimary":[{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"primary":{"family":"Arial, sans-serif"}}}]},"alternate":{"id":"open-sans","description":"","tags":[],"meta":{"order":14,"alternate":{"id":"open-sans","name":"Open Sans","url":"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap","family":"\'Open Sans\', arial, sans-serif","size":16,"weight":400,"weights":[300,400,700,800],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["ja-JP"],"meta":{"alternate":{"family":"Open Sans, MS Mincho, \'\uFF2D\uFF33 \uFF30\u660E\u671D\', serif"}}},{"locales":["ko-KR"],"meta":{"alternate":{"family":"Open Sans, \'\uBC14\uD0D5\', Batang, \'\uBC14\uD0D5\uCCB4\', BatangChe, serif"}}},{"locales":["th-TH"],"meta":{"alternate":{"family":"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif"}}},{"locales":["zh-CN","zh-SG"],"meta":{"alternate":{"family":"Open Sans, \'\u534E\u6587\u9ED1\u4F53\', STHeiti, Heiti SC, sans-serif"}}},{"locales":["zh-HK","zh-TW"],"meta":{"alternate":{"family":"Open Sans, Hiragino Sans GB, sans-serif"}}}]}}},"theme":"Theme28"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-3",
    componentName: "@widget/GALLERY/bs-gallery4-Gallery",
    props: JSON.parse(
      '{"upgradeable":false,"preset":"gallery4","id":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966","viewDevice":null,"staticContent":{"showMore":"Show More","demoCaption1":"Use captions to provide more information about your photos","demoCaption2":"Captions can prompt viewers to act. You can even insert a link","demoCaption3":"Use the caption to call out things the viewer may not notice","showLess":"Show Less"},"enableImageDimension":true,"galleryImages":[[{"image":{"width":"100%","left":"0%","height":"100%","scale":0.5324074074074074,"editedAspectRatio":"1.0117096018735363","imageDimension":"fitImage","overlayAlpha":0,"top":"0%","oHeight":427,"fullWidth":false,"oWidth":432,"filter":"NONE","image":"//img1.wsimg.com/isteam/ip/3d18f8ee-1861-4a40-9c71-1a20655d1baa/11Artboard%209%404x.png","coordinates":{"x":0,"y":0},"rotation":"0","index":0}},{"image":{"width":"100%","left":"0%","height":"100%","position":"50% 50%","scale":0.10648148148148148,"editedAspectRatio":"1","imageDimension":null,"overlayAlpha":0,"top":"0%","oHeight":1080,"fullWidth":false,"oWidth":1080,"filter":"NONE","image":"//img1.wsimg.com/isteam/ip/3d18f8ee-1861-4a40-9c71-1a20655d1baa/blob-f08110e.png","coordinates":{"x":0,"y":0},"rotation":"0","index":1}},{"image":{"oHeight":1080,"oWidth":1080,"alt":"","image":"//img1.wsimg.com/isteam/ip/3d18f8ee-1861-4a40-9c71-1a20655d1baa/blob.png","index":2}}]],"renderAsThumbnail":false,"imageCount":3,"widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966","section":"default","category":"primary","locale":"en-GB","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":1,"widgetId":"dbab3fa2-8926-4cd9-badf-8dcdc15b1966","widgetType":"GALLERY","widgetPreset":"gallery4","group":"Section","groupType":"Default","section":"default","category":"primary","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-3",
    radpack: "@widget/GALLERY/bs-gallery4-Gallery",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-5",
    componentName: "@widget/REVIEWS/bs-Component",
    props: JSON.parse(
      '{"hasBgImage":true,"upgradeable":false,"preset":"reviews1","id":"946b6235-d7a2-4294-bc73-f8f65aed3408","planType":"freemiumV1","market":"en-GB","publishDate":"2024-06-19T15:15:29.860Z","fbPageId":null,"gmbShowPendingMessage":false,"publishAfterLastUpgrade":false,"providerType":"gmb","isInternalPage":false,"isReseller":false,"accountId":"5d14abde-2cf6-11ef-8357-3417ebe724ff","viewDevice":null,"sectionTitle":"Don\'t Just Take Our Word for It: See What Our Customers Say!","background":{"image":"//img1.wsimg.com/isteam/stock/38360"},"staticContent":{"txtPendingValidation":"Pending Validation","reviewTitle":"Title","add":"Add","doesNotRecommend":"Doesn\'t recommend","noWrittenReviews":"This customer did not write a review.","connectionSuccess":"Successfully Connected!","cantConnect":"Why can\'t I connect yet?","reviewDate":"Review Date","productReview":"{totalReviews} Product Review","viewAllProductReviews":"View All {totalReviews} Product Reviews","upgradeMessage":"Your site needs to have an online store to use {provider} reviews","productReviews":"{totalReviews} Product Reviews","goToProduct":"Go to {productName}","anonymous":"Anonymous","gmb3Days":"It may take up to 3 days to validate your business. Until then, reviews will not appear on your site.","noReviewsYet":"There are no reviews yet.","reviewerName":"Reviewer Name","basedOn":"Based on the opinion of {reviewCount} people","photo":"Photo","gmbAwaitingData":"We are waiting for data. Please check back later","reviewLink":"Review Link","basedOnOne":"Based on the opinion of 1 person","gmbUnderReview":"Google is reviewing your business info. We\'ll let you know when your listing is live.","gmbPublishMessage":"Your website needs to be published before connecting to Google My Business.","sourceMsgStatic":"Add reviews manually","manualReviews":"Reviews","ratingNone":"None","reviewRating":"Rating","percentRecommend":"{percent} recommend","connectMsg":"To show reviews on your site, connect your account to {provider}","twentyFourHourLag":"Data may take up to 24 hours to display.","recommends":"Recommends","reviewFirst":"Be the first to leave a review","review":"{totalReviews} Review","publishMessage":"Your website needs to be published before connecting to {provider}","sourceMsgDynamic":"Connect to external source","reviewBody":"Review","upgradeNow":"Add Store Now","viewMore":"View More","reviews":"{totalReviews} Reviews","cantConnectMsg":"Your website needs to be published before connecting to {provider}","comingSoon":"Reviews coming soon!","readFullReview":"Read full review","labelForDeleteManualReview":"Delete Review","gmbNoReviews":"You are successfully connected but there are no reviews yet.","connectBtnText":"Connect to {provider}","viewAllReviews":"View All {totalReviews} Reviews"},"websiteId":"3d18f8ee-1861-4a40-9c71-1a20655d1baa","sourceType":"dynamic","manualReviews":[{"photo":{},"title":"Title 2","body":"Review 2","rating":"0","name":"Anonymous","date":"18/06/2024"},{"photo":{},"title":"Title 3","body":"Review 3","rating":"0","name":"Anonymous","date":"18/06/2024"},{"photo":{},"title":"Title 3","body":"Review 3","rating":"0","name":"Anonymous","date":"20/06/2024"}],"widgetId":"946b6235-d7a2-4294-bc73-f8f65aed3408","section":"default","category":"neutral","locale":"en-GB","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":4,"widgetId":"946b6235-d7a2-4294-bc73-f8f65aed3408","widgetType":"REVIEWS","widgetPreset":"reviews1","group":"Section","groupType":"Banner","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-3",
    radpack: "@widget/REVIEWS/bs-Component",
  },
  false
);
window.wsb["PopupWidgetScript"] = function (e) {
  let { id: t, cookieName: o, popupDelay: a } = e;
  if (document.cookie.split(";").find((e) => e.indexOf(o) >= 0)) return;
  const l = document.getElementById(t);
  setTimeout(() => {
    l.style.display = "flex";
  }, 1e3 * a);
  const r = document.getElementById(`${t}-close-icon`),
    i = document.getElementById(`${t}-cta`),
    p = () => {
      const e = new Date();
      e.setTime(e.getTime() + 864e5),
        (document.cookie = [`${o}=true`, `expires=${e.toUTCString()}`, "path=/"].join(";")),
        (l.style.display = "none"),
        i && i.removeEventListener("click", p),
        r && r.removeEventListener("click", p);
    };
  i && i.addEventListener("click", p), r && r.addEventListener("click", p);
};
window.wsb["PopupWidgetScript"](
  JSON.parse(
    '{"id":"popup-widget69748","cookieName":"wam_widgets_popup_closed_3d18f8ee-1861-4a40-9c71-1a20655d1baa_1720543118883","popupDelay":"2"}'
  )
);
Core.utils.renderBootstrap({
  elId: "bs-6",
  componentName: "@widget/MESSAGING/bs-Component",
  contextKey: "context-bs-3",
  radpack: "@widget/MESSAGING/bs-Component",
});
window.wsb["CookieBannerScript"] = function (e) {
  let { id: t, acceptCookie: o, dismissCookie: a } = e;
  const n = 864e5;
  let i, l, r;
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
    const o = new Date();
    o.setTime(o.getTime() + n * t);
    const a = `expires=${o.toUTCString()}`;
    document.cookie = `${e}=true;${a};path=/`;
  }
  function c(e) {
    return document.cookie.includes(e);
  }
  function p() {
    l && l.removeEventListener("click", g), r && r.removeEventListener("click", d), (i.style.display = "none");
  }
  function g(e) {
    e.preventDefault(), u(), s(a), s(o), p();
  }
  function d(e) {
    var t;
    e.preventDefault(),
      s(a),
      c(o) && ((t = o), (document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`)),
      p();
  }
  function u() {
    (window._allowCT = !0), window._allowCTListener && window._allowCTListener.forEach((e) => e());
  }
  c(o)
    ? u()
    : c(a) ||
      setTimeout(() => {
        (i = document.getElementById(`${t}-banner`)),
          (l = document.getElementById(`${t}-accept`)),
          (r = document.getElementById(`${t}-decline`)),
          l && l.addEventListener("click", g),
          r && r.addEventListener("click", d),
          (i.style.transform = "translateY(-500px)");
      }, 200);
};
window.wsb["CookieBannerScript"](
  JSON.parse(
    '{"id":"b23aca80-d659-4971-8d31-36e7547cff63","dismissCookie":"cookie_warning_dismissed","acceptCookie":"cookie_terms_accepted"}'
  )
);
document.getElementById("page-69690").addEventListener("click", function () {}, false);
var t = document.createElement("script");
(t.type = "text/javascript"),
  t.addEventListener("load", () => {
    window.tti.calculateTTI(({ name: t, value: e } = {}) => {
      let i = {
        wam_site_hasPopupWidget: true,
        wam_site_hasMessagingWidget: true,
        wam_site_headerTreatment: "Fill",
        wam_site_hasSlideshow: false,
        wam_site_hasFreemiumBanner: true,
        wam_site_homepageFirstWidgetType: "ABOUT",
        wam_site_homepageFirstWidgetPreset: "about5",
        wam_site_businessCategory: "dessertshop",
        wam_site_theme: "layout28",
        wam_site_locale: "en-GB",
        wam_site_fontPack: "fredoka-one",
        wam_site_cookieBannerEnabled: true,
        wam_site_membershipEnabled: true,
        wam_site_hasHomepageHTML: false,
        wam_site_hasHomepageShop: false,
        wam_site_hasHomepageOla: false,
        wam_site_hasHomepageBlog: false,
        wam_site_hasShop: false,
        wam_site_hasOla: false,
        wam_site_planType: "freemiumV1",
        wam_site_isHomepage: true,
        wam_site_htmlWidget: false,
      };
      window.networkInfo &&
        window.networkInfo.downlink &&
        (i = Object.assign({}, i, { ["wam_site_networkSpeed"]: window.networkInfo.downlink.toFixed(2) })),
        window.tti.setCustomProperties(i),
        window.tti._collectVitals({ name: t, value: e });
    });
  }),
  t.setAttribute("src", "//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),
  document.body.appendChild(t);
