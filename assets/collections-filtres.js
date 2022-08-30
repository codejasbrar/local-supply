typeof JSON != "object" && (JSON = {}),
  function() {
    "use strict";

    function f(a) {
      return a < 10 ? "0" + a : a
    }

    function quote(a) {
      return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(h) {
        var i = meta[h];
        return typeof i == "string" ? i : "\\u" + ("0000" + h.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + a + '"'
    }

    function str(a, h) {
      var i, s, l, u, r = gap,
        c, p = h[a];
      switch (p && typeof p == "object" && typeof p.toJSON == "function" && (p = p.toJSON(a)), typeof rep == "function" && (p = rep.call(h, a, p)), typeof p) {
        case "string":
          return quote(p);
        case "number":
          return isFinite(p) ? String(p) : "null";
        case "boolean":
        case "null":
          return String(p);
        case "object":
          if (!p) return "null";
          if (gap += indent, c = [], Object.prototype.toString.apply(p) === "[object Array]") {
            for (u = p.length, i = 0; i < u; i += 1) c[i] = str(i, p) || "null";
            return l = c.length === 0 ? "[]" : gap ? `[
` + gap + c.join(`,
` + gap) + `
` + r + "]" : "[" + c.join(",") + "]", gap = r, l
          }
          if (rep && typeof rep == "object")
            for (u = rep.length, i = 0; i < u; i += 1) typeof rep[i] == "string" && (s = rep[i], l = str(s, p), l && c.push(quote(s) + (gap ? ": " : ":") + l));
          else
            for (s in p) Object.prototype.hasOwnProperty.call(p, s) && (l = str(s, p), l && c.push(quote(s) + (gap ? ": " : ":") + l));
          return l = c.length === 0 ? "{}" : gap ? `{
` + gap + c.join(`,
` + gap) + `
` + r + "}" : "{" + c.join(",") + "}", gap = r, l
      }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(a) {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
      return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(a, h, i) {
      var s;
      if (gap = "", indent = "", typeof i == "number")
        for (s = 0; s < i; s += 1) indent += " ";
      else typeof i == "string" && (indent = i);
      if (rep = h, !h || typeof h == "function" || typeof h == "object" && typeof h.length == "number") return str("", {
        "": a
      });
      throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
      function walk(a, h) {
        var i, s, l = a[h];
        if (l && typeof l == "object")
          for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (s = walk(l, i), s !== void 0 ? l[i] = s : delete l[i]);
        return reviver.call(a, h, l)
      }
      var j;
      if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
        "": j
      }, "") : j;
      throw new SyntaxError("JSON.parse")
    })
  }(),
  function(a, h) {
    "use strict";
    var i = a.History = a.History || {},
      s = a.jQuery;
    if (typeof i.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    i.Adapter = {
      bind: function(l, u, r) {
        s(l).bind(u, r)
      },
      trigger: function(l, u, r) {
        s(l).trigger(u, r)
      },
      extractEventData: function(l, u, r) {
        var c = u && u.originalEvent && u.originalEvent[l] || r && r[l] || h;
        return c
      },
      onDomLoad: function(l) {
        s(l)
      }
    }, typeof i.init != "undefined" && i.init()
  }(window),
  function(a, h) {
    "use strict";
    var i = a.document,
      s = a.setTimeout || s,
      l = a.clearTimeout || l,
      u = a.setInterval || u,
      r = a.History = a.History || {};
    if (typeof r.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    r.initHtml4 = function() {
      if (typeof r.initHtml4.initialized != "undefined") return !1;
      r.initHtml4.initialized = !0, r.enabled = !0, r.savedHashes = [], r.isLastHash = function(c) {
        var p = r.getHashByIndex(),
          g;
        return g = c === p, g
      }, r.isHashEqual = function(c, p) {
        return c = encodeURIComponent(c).replace(/%25/g, "%"), p = encodeURIComponent(p).replace(/%25/g, "%"), c === p
      }, r.saveHash = function(c) {
        return r.isLastHash(c) ? !1 : (r.savedHashes.push(c), !0)
      }, r.getHashByIndex = function(c) {
        var p = null;
        return typeof c == "undefined" ? p = r.savedHashes[r.savedHashes.length - 1] : c < 0 ? p = r.savedHashes[r.savedHashes.length + c] : p = r.savedHashes[c], p
      }, r.discardedHashes = {}, r.discardedStates = {}, r.discardState = function(c, p, g) {
        var S = r.getHashByState(c),
          v;
        return v = {
          discardedState: c,
          backState: g,
          forwardState: p
        }, r.discardedStates[S] = v, !0
      }, r.discardHash = function(c, p, g) {
        var S = {
          discardedHash: c,
          backState: g,
          forwardState: p
        };
        return r.discardedHashes[c] = S, !0
      }, r.discardedState = function(c) {
        var p = r.getHashByState(c),
          g;
        return g = r.discardedStates[p] || !1, g
      }, r.discardedHash = function(c) {
        var p = r.discardedHashes[c] || !1;
        return p
      }, r.recycleState = function(c) {
        var p = r.getHashByState(c);
        return r.discardedState(c) && delete r.discardedStates[p], !0
      }, r.emulated.hashChange && (r.hashChangeInit = function() {
        r.checkerFunction = null;
        var c = "",
          p, g, S, v, t = Boolean(r.getHash());
        return r.isInternetExplorer() ? (p = "historyjs-iframe", g = i.createElement("iframe"), g.setAttribute("id", p), g.setAttribute("src", "#"), g.style.display = "none", i.body.appendChild(g), g.contentWindow.document.open(), g.contentWindow.document.close(), S = "", v = !1, r.checkerFunction = function() {
          if (v) return !1;
          v = !0;
          var b = r.getHash(),
            m = r.getHash(g.contentWindow.document);
          return b !== c ? (c = b, m !== b && (S = m = b, g.contentWindow.document.open(), g.contentWindow.document.close(), g.contentWindow.document.location.hash = r.escapeHash(b)), r.Adapter.trigger(a, "hashchange")) : m !== S && (S = m, t && m === "" ? r.back() : r.setHash(m, !1)), v = !1, !0
        }) : r.checkerFunction = function() {
          var b = r.getHash() || "";
          return b !== c && (c = b, r.Adapter.trigger(a, "hashchange")), !0
        }, r.intervalList.push(u(r.checkerFunction, r.options.hashChangeInterval)), !0
      }, r.Adapter.onDomLoad(r.hashChangeInit)), r.emulated.pushState && (r.onHashChange = function(c) {
        var p = c && c.newURL || r.getLocationHref(),
          g = r.getHashByUrl(p),
          S = null,
          v = null,
          t = null,
          b;
        return r.isLastHash(g) ? (r.busy(!1), !1) : (r.doubleCheckComplete(), r.saveHash(g), g && r.isTraditionalAnchor(g) ? (r.Adapter.trigger(a, "anchorchange"), r.busy(!1), !1) : (S = r.extractState(r.getFullUrl(g || r.getLocationHref()), !0), r.isLastSavedState(S) ? (r.busy(!1), !1) : (v = r.getHashByState(S), b = r.discardedState(S), b ? (r.getHashByIndex(-2) === r.getHashByState(b.forwardState) ? r.back(!1) : r.forward(!1), !1) : (r.pushState(S.data, S.title, encodeURI(S.url), !1), !0))))
      }, r.Adapter.bind(a, "hashchange", r.onHashChange), r.pushState = function(c, p, g, S) {
        if (g = encodeURI(g).replace(/%25/g, "%"), r.getHashByUrl(g)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
        if (S !== !1 && r.busy()) return r.pushQueue({
          scope: r,
          callback: r.pushState,
          args: arguments,
          queue: S
        }), !1;
        r.busy(!0);
        var v = r.createStateObject(c, p, g),
          t = r.getHashByState(v),
          b = r.getState(!1),
          m = r.getHashByState(b),
          H = r.getHash(),
          e = r.expectedStateId == v.id;
        return r.storeState(v), r.expectedStateId = v.id, r.recycleState(v), r.setTitle(v), t === m ? (r.busy(!1), !1) : (r.saveState(v), e || r.Adapter.trigger(a, "statechange"), !r.isHashEqual(t, H) && !r.isHashEqual(t, r.getShortUrl(r.getLocationHref())) && r.setHash(t, !1), r.busy(!1), !0)
      }, r.replaceState = function(c, p, g, S) {
        if (g = encodeURI(g).replace(/%25/g, "%"), r.getHashByUrl(g)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
        if (S !== !1 && r.busy()) return r.pushQueue({
          scope: r,
          callback: r.replaceState,
          args: arguments,
          queue: S
        }), !1;
        r.busy(!0);
        var v = r.createStateObject(c, p, g),
          t = r.getHashByState(v),
          b = r.getState(!1),
          m = r.getHashByState(b),
          H = r.getStateByIndex(-2);
        return r.discardState(b, v, H), t === m ? (r.storeState(v), r.expectedStateId = v.id, r.recycleState(v), r.setTitle(v), r.saveState(v), r.Adapter.trigger(a, "statechange"), r.busy(!1)) : r.pushState(v.data, v.title, v.url, !1), !0
      }), r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad(function() {
        r.Adapter.trigger(a, "hashchange")
      })
    }, typeof r.init != "undefined" && r.init()
  }(window),
  function(a, h) {
    "use strict";
    var i = a.console || h,
      s = a.document,
      l = a.navigator,
      u = !1,
      r = a.setTimeout,
      c = a.clearTimeout,
      p = a.setInterval,
      g = a.clearInterval,
      S = a.JSON,
      v = a.alert,
      t = a.History = a.History || {},
      b = a.history;
    try {
      u = a.sessionStorage, u.setItem("TEST", "1"), u.removeItem("TEST")
    } catch {
      u = !1
    }
    if (S.stringify = S.stringify || S.encode, S.parse = S.parse || S.decode, typeof t.init != "undefined") throw new Error("History.js Core has already been loaded...");
    t.init = function(m) {
      return typeof t.Adapter == "undefined" ? !1 : (typeof t.initCore != "undefined" && t.initCore(), typeof t.initHtml4 != "undefined" && t.initHtml4(), !0)
    }, t.initCore = function(m) {
      if (typeof t.initCore.initialized != "undefined") return !1;
      if (t.initCore.initialized = !0, t.options = t.options || {}, t.options.hashChangeInterval = t.options.hashChangeInterval || 100, t.options.safariPollInterval = t.options.safariPollInterval || 500, t.options.doubleCheckInterval = t.options.doubleCheckInterval || 500, t.options.disableSuid = t.options.disableSuid || !1, t.options.storeInterval = t.options.storeInterval || 1e3, t.options.busyDelay = t.options.busyDelay || 250, t.options.debug = t.options.debug || !1, t.options.initialTitle = t.options.initialTitle || s.title, t.options.html4Mode = t.options.html4Mode || !1, t.options.delayInit = t.options.delayInit || !1, t.intervalList = [], t.clearAllIntervals = function() {
          var e, n = t.intervalList;
          if (typeof n != "undefined" && n !== null) {
            for (e = 0; e < n.length; e++) g(n[e]);
            t.intervalList = null
          }
        }, t.debug = function() {
          (t.options.debug || !1) && t.log.apply(t, arguments)
        }, t.log = function() {
          var e = typeof i != "undefined" && typeof i.log != "undefined" && typeof i.log.apply != "undefined",
            n = s.getElementById("log"),
            o, d, y, I, w;
          for (e ? (I = Array.prototype.slice.call(arguments), o = I.shift(), typeof i.debug != "undefined" ? i.debug.apply(i, [o, I]) : i.log.apply(i, [o, I])) : o = `
` + arguments[0] + `
`, d = 1, y = arguments.length; d < y; ++d) {
            if (w = arguments[d], typeof w == "object" && typeof S != "undefined") try {
              w = S.stringify(w)
            } catch {}
            o += `
` + w + `
`
          }
          return n ? (n.value += o + `
-----
`, n.scrollTop = n.scrollHeight - n.clientHeight) : e || v(o), !0
        }, t.getInternetExplorerMajorVersion = function() {
          var e = t.getInternetExplorerMajorVersion.cached = typeof t.getInternetExplorerMajorVersion.cached != "undefined" ? t.getInternetExplorerMajorVersion.cached : function() {
            for (var n = 3, o = s.createElement("div"), d = o.getElementsByTagName("i");
              (o.innerHTML = "<!--[if gt IE " + ++n + "]><i></i><![endif]-->") && d[0];);
            return n > 4 ? n : !1
          }();
          return e
        }, t.isInternetExplorer = function() {
          var e = t.isInternetExplorer.cached = typeof t.isInternetExplorer.cached != "undefined" ? t.isInternetExplorer.cached : Boolean(t.getInternetExplorerMajorVersion());
          return e
        }, t.options.html4Mode ? t.emulated = {
          pushState: !0,
          hashChange: !0
        } : t.emulated = {
          pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(l.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(l.userAgent)),
          hashChange: Boolean(!("onhashchange" in a || "onhashchange" in s) || t.isInternetExplorer() && t.getInternetExplorerMajorVersion() < 8)
        }, t.enabled = !t.emulated.pushState, t.bugs = {
          setHash: Boolean(!t.emulated.pushState && l.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(l.userAgent)),
          safariPoll: Boolean(!t.emulated.pushState && l.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(l.userAgent)),
          ieDoubleCheck: Boolean(t.isInternetExplorer() && t.getInternetExplorerMajorVersion() < 8),
          hashEscape: Boolean(t.isInternetExplorer() && t.getInternetExplorerMajorVersion() < 7)
        }, t.isEmptyObject = function(e) {
          for (var n in e)
            if (e.hasOwnProperty(n)) return !1;
          return !0
        }, t.cloneObject = function(e) {
          var n, o;
          return e ? (n = S.stringify(e), o = S.parse(n)) : o = {}, o
        }, t.getRootUrl = function() {
          var e = s.location.protocol + "//" + (s.location.hostname || s.location.host);
          return s.location.port && (e += ":" + s.location.port), e += "/", e
        }, t.getBaseHref = function() {
          var e = s.getElementsByTagName("base"),
            n = null,
            o = "";
          return e.length === 1 && (n = e[0], o = n.href.replace(/[^\/]+$/, "")), o = o.replace(/\/+$/, ""), o && (o += "/"), o
        }, t.getBaseUrl = function() {
          var e = t.getBaseHref() || t.getBasePageUrl() || t.getRootUrl();
          return e
        }, t.getPageUrl = function() {
          var e = t.getState(!1, !1),
            n = (e || {}).url || t.getLocationHref(),
            o;
          return o = n.replace(/\/+$/, "").replace(/[^\/]+$/, function(d, y, I) {
            return /\./.test(d) ? d : d + "/"
          }), o
        }, t.getBasePageUrl = function() {
          var e = t.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(n, o, d) {
            return /[^\/]$/.test(n) ? "" : n
          }).replace(/\/+$/, "") + "/";
          return e
        }, t.getFullUrl = function(e, n) {
          var o = e,
            d = e.substring(0, 1);
          return n = typeof n == "undefined" ? !0 : n, /[a-z]+\:\/\//.test(e) || (d === "/" ? o = t.getRootUrl() + e.replace(/^\/+/, "") : d === "#" ? o = t.getPageUrl().replace(/#.*/, "") + e : d === "?" ? o = t.getPageUrl().replace(/[\?#].*/, "") + e : n ? o = t.getBaseUrl() + e.replace(/^(\.\/)+/, "") : o = t.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), o.replace(/\#$/, "")
        }, t.getShortUrl = function(e) {
          var n = e,
            o = t.getBaseUrl(),
            d = t.getRootUrl();
          return t.emulated.pushState && (n = n.replace(o, "")), n = n.replace(d, "/"), t.isTraditionalAnchor(n) && (n = "./" + n), n = n.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), n
        }, t.getLocationHref = function(e) {
          return e = e || s, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash || e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        }, t.store = {}, t.idToState = t.idToState || {}, t.stateToId = t.stateToId || {}, t.urlToId = t.urlToId || {}, t.storedStates = t.storedStates || [], t.savedStates = t.savedStates || [], t.normalizeStore = function() {
          t.store.idToState = t.store.idToState || {}, t.store.urlToId = t.store.urlToId || {}, t.store.stateToId = t.store.stateToId || {}
        }, t.getState = function(e, n) {
          typeof e == "undefined" && (e = !0), typeof n == "undefined" && (n = !0);
          var o = t.getLastSavedState();
          return !o && n && (o = t.createStateObject()), e && (o = t.cloneObject(o), o.url = o.cleanUrl || o.url), o
        }, t.getIdByState = function(e) {
          var n = t.extractId(e.url),
            o;
          if (!n)
            if (o = t.getStateString(e), typeof t.stateToId[o] != "undefined") n = t.stateToId[o];
            else if (typeof t.store.stateToId[o] != "undefined") n = t.store.stateToId[o];
          else {
            for (; n = new Date().getTime() + String(Math.random()).replace(/\D/g, ""), !(typeof t.idToState[n] == "undefined" && typeof t.store.idToState[n] == "undefined"););
            t.stateToId[o] = n, t.idToState[n] = e
          }
          return n
        }, t.normalizeState = function(e) {
          var n, o;
          return (!e || typeof e != "object") && (e = {}), typeof e.normalized != "undefined" ? e : ((!e.data || typeof e.data != "object") && (e.data = {}), n = {}, n.normalized = !0, n.title = e.title || "", n.url = t.getFullUrl(e.url ? e.url : t.getLocationHref()), n.hash = t.getShortUrl(n.url), n.data = t.cloneObject(e.data), n.id = t.getIdByState(n), n.cleanUrl = n.url.replace(/\??\&_suid.*/, ""), n.url = n.cleanUrl, o = !t.isEmptyObject(n.data), (n.title || o) && t.options.disableSuid !== !0 && (n.hash = t.getShortUrl(n.url).replace(/\??\&_suid.*/, ""), /\?/.test(n.hash) || (n.hash += "?"), n.hash += "&_suid=" + n.id), n.hashedUrl = t.getFullUrl(n.hash), (t.emulated.pushState || t.bugs.safariPoll) && t.hasUrlDuplicate(n) && (n.url = n.hashedUrl), n)
        }, t.createStateObject = function(e, n, o) {
          var d = {
            data: e,
            title: n,
            url: o
          };
          return d = t.normalizeState(d), d
        }, t.getStateById = function(e) {
          e = String(e);
          var n = t.idToState[e] || t.store.idToState[e] || h;
          return n
        }, t.getStateString = function(e) {
          var n, o, d;
          return n = t.normalizeState(e), o = {
            data: n.data,
            title: e.title,
            url: e.url
          }, d = S.stringify(o), d
        }, t.getStateId = function(e) {
          var n, o;
          return n = t.normalizeState(e), o = n.id, o
        }, t.getHashByState = function(e) {
          var n, o;
          return n = t.normalizeState(e), o = n.hash, o
        }, t.extractId = function(e) {
          var n, o, d, y;
          return e.indexOf("#") != -1 ? y = e.split("#")[0] : y = e, o = /(.*)\&_suid=([0-9]+)$/.exec(y), d = o && o[1] || e, n = o ? String(o[2] || "") : "", n || !1
        }, t.isTraditionalAnchor = function(e) {
          var n = !/[\/\?\.]/.test(e);
          return n
        }, t.extractState = function(e, n) {
          var o = null,
            d, y;
          return n = n || !1, d = t.extractId(e), d && (o = t.getStateById(d)), o || (y = t.getFullUrl(e), d = t.getIdByUrl(y) || !1, d && (o = t.getStateById(d)), !o && n && !t.isTraditionalAnchor(e) && (o = t.createStateObject(null, null, y))), o
        }, t.getIdByUrl = function(e) {
          var n = t.urlToId[e] || t.store.urlToId[e] || h;
          return n
        }, t.getLastSavedState = function() {
          return t.savedStates[t.savedStates.length - 1] || h
        }, t.getLastStoredState = function() {
          return t.storedStates[t.storedStates.length - 1] || h
        }, t.hasUrlDuplicate = function(e) {
          var n = !1,
            o;
          return o = t.extractState(e.url), n = o && o.id !== e.id, n
        }, t.storeState = function(e) {
          return t.urlToId[e.url] = e.id, t.storedStates.push(t.cloneObject(e)), e
        }, t.isLastSavedState = function(e) {
          var n = !1,
            o, d, y;
          return t.savedStates.length && (o = e.id, d = t.getLastSavedState(), y = d.id, n = o === y), n
        }, t.saveState = function(e) {
          return t.isLastSavedState(e) ? !1 : (t.savedStates.push(t.cloneObject(e)), !0)
        }, t.getStateByIndex = function(e) {
          var n = null;
          return typeof e == "undefined" ? n = t.savedStates[t.savedStates.length - 1] : e < 0 ? n = t.savedStates[t.savedStates.length + e] : n = t.savedStates[e], n
        }, t.getCurrentIndex = function() {
          var e = null;
          return t.savedStates.length < 1 ? e = 0 : e = t.savedStates.length - 1, e
        }, t.getHash = function(e) {
          var n = t.getLocationHref(e),
            o;
          return o = t.getHashByUrl(n), o
        }, t.unescapeHash = function(e) {
          var n = t.normalizeHash(e);
          return n = decodeURIComponent(n), n
        }, t.normalizeHash = function(e) {
          var n = e.replace(/[^#]*#/, "").replace(/#.*/, "");
          return n
        }, t.setHash = function(e, n) {
          var o, d;
          return n !== !1 && t.busy() ? (t.pushQueue({
            scope: t,
            callback: t.setHash,
            args: arguments,
            queue: n
          }), !1) : (t.busy(!0), o = t.extractState(e, !0), o && !t.emulated.pushState ? t.pushState(o.data, o.title, o.url, !1) : t.getHash() !== e && (t.bugs.setHash ? (d = t.getPageUrl(), t.pushState(null, null, d + "#" + e, !1)) : s.location.hash = e), t)
        }, t.escapeHash = function(e) {
          var n = t.normalizeHash(e);
          return n = a.encodeURIComponent(n), t.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, t.getHashByUrl = function(e) {
          var n = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
          return n = t.unescapeHash(n), n
        }, t.setTitle = function(e) {
          var n = e.title,
            o;
          n || (o = t.getStateByIndex(0), o && o.url === e.url && (n = o.title || t.options.initialTitle));
          try {
            s.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
          } catch {}
          return s.title = n, t
        }, t.queues = [], t.busy = function(e) {
          if (typeof e != "undefined" ? t.busy.flag = e : typeof t.busy.flag == "undefined" && (t.busy.flag = !1), !t.busy.flag) {
            c(t.busy.timeout);
            var n = function() {
              var o, d, y;
              if (!t.busy.flag)
                for (o = t.queues.length - 1; o >= 0; --o) d = t.queues[o], d.length !== 0 && (y = d.shift(), t.fireQueueItem(y), t.busy.timeout = r(n, t.options.busyDelay))
            };
            t.busy.timeout = r(n, t.options.busyDelay)
          }
          return t.busy.flag
        }, t.busy.flag = !1, t.fireQueueItem = function(e) {
          return e.callback.apply(e.scope || t, e.args || [])
        }, t.pushQueue = function(e) {
          return t.queues[e.queue || 0] = t.queues[e.queue || 0] || [], t.queues[e.queue || 0].push(e), t
        }, t.queue = function(e, n) {
          return typeof e == "function" && (e = {
            callback: e
          }), typeof n != "undefined" && (e.queue = n), t.busy() ? t.pushQueue(e) : t.fireQueueItem(e), t
        }, t.clearQueue = function() {
          return t.busy.flag = !1, t.queues = [], t
        }, t.stateChanged = !1, t.doubleChecker = !1, t.doubleCheckComplete = function() {
          return t.stateChanged = !0, t.doubleCheckClear(), t
        }, t.doubleCheckClear = function() {
          return t.doubleChecker && (c(t.doubleChecker), t.doubleChecker = !1), t
        }, t.doubleCheck = function(e) {
          return t.stateChanged = !1, t.doubleCheckClear(), t.bugs.ieDoubleCheck && (t.doubleChecker = r(function() {
            return t.doubleCheckClear(), t.stateChanged || e(), !0
          }, t.options.doubleCheckInterval)), t
        }, t.safariStatePoll = function() {
          var e = t.extractState(t.getLocationHref()),
            n;
          if (!t.isLastSavedState(e)) return n = e, n || (n = t.createStateObject()), t.Adapter.trigger(a, "popstate"), t
        }, t.back = function(e) {
          return e !== !1 && t.busy() ? (t.pushQueue({
            scope: t,
            callback: t.back,
            args: arguments,
            queue: e
          }), !1) : (t.busy(!0), t.doubleCheck(function() {
            t.back(!1)
          }), b.go(-1), !0)
        }, t.forward = function(e) {
          return e !== !1 && t.busy() ? (t.pushQueue({
            scope: t,
            callback: t.forward,
            args: arguments,
            queue: e
          }), !1) : (t.busy(!0), t.doubleCheck(function() {
            t.forward(!1)
          }), b.go(1), !0)
        }, t.go = function(e, n) {
          var o;
          if (e > 0)
            for (o = 1; o <= e; ++o) t.forward(n);
          else {
            if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
            for (o = -1; o >= e; --o) t.back(n)
          }
          return t
        }, t.emulated.pushState) {
        var H = function() {};
        t.pushState = t.pushState || H, t.replaceState = t.replaceState || H
      } else t.onPopState = function(e, n) {
        var o = !1,
          d = !1,
          y, I;
        return t.doubleCheckComplete(), y = t.getHash(), y ? (I = t.extractState(y || t.getLocationHref(), !0), I ? t.replaceState(I.data, I.title, I.url, !1) : (t.Adapter.trigger(a, "anchorchange"), t.busy(!1)), t.expectedStateId = !1, !1) : (o = t.Adapter.extractEventData("state", e, n) || !1, o ? d = t.getStateById(o) : t.expectedStateId ? d = t.getStateById(t.expectedStateId) : d = t.extractState(t.getLocationHref()), d || (d = t.createStateObject(null, null, t.getLocationHref())), t.expectedStateId = !1, t.isLastSavedState(d) ? (t.busy(!1), !1) : (t.storeState(d), t.saveState(d), t.setTitle(d), t.Adapter.trigger(a, "statechange"), t.busy(!1), !0))
      }, t.Adapter.bind(a, "popstate", t.onPopState), t.pushState = function(e, n, o, d) {
        if (t.getHashByUrl(o) && t.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
        if (d !== !1 && t.busy()) return t.pushQueue({
          scope: t,
          callback: t.pushState,
          args: arguments,
          queue: d
        }), !1;
        t.busy(!0);
        var y = t.createStateObject(e, n, o);
        return t.isLastSavedState(y) ? t.busy(!1) : (t.storeState(y), t.expectedStateId = y.id, b.pushState(y.id, y.title, y.url), t.Adapter.trigger(a, "popstate")), !0
      }, t.replaceState = function(e, n, o, d) {
        if (t.getHashByUrl(o) && t.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
        if (d !== !1 && t.busy()) return t.pushQueue({
          scope: t,
          callback: t.replaceState,
          args: arguments,
          queue: d
        }), !1;
        t.busy(!0);
        var y = t.createStateObject(e, n, o);
        return t.isLastSavedState(y) ? t.busy(!1) : (t.storeState(y), t.expectedStateId = y.id, b.replaceState(y.id, y.title, y.url), t.Adapter.trigger(a, "popstate")), !0
      };
      if (u) {
        try {
          t.store = S.parse(u.getItem("History.store")) || {}
        } catch {
          t.store = {}
        }
        t.normalizeStore()
      } else t.store = {}, t.normalizeStore();
      t.Adapter.bind(a, "unload", t.clearAllIntervals), t.saveState(t.storeState(t.extractState(t.getLocationHref(), !0))), u && (t.onUnload = function() {
        var e, n, o;
        try {
          e = S.parse(u.getItem("History.store")) || {}
        } catch {
          e = {}
        }
        e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
        for (n in t.idToState) !t.idToState.hasOwnProperty(n) || (e.idToState[n] = t.idToState[n]);
        for (n in t.urlToId) !t.urlToId.hasOwnProperty(n) || (e.urlToId[n] = t.urlToId[n]);
        for (n in t.stateToId) !t.stateToId.hasOwnProperty(n) || (e.stateToId[n] = t.stateToId[n]);
        t.store = e, t.normalizeStore(), o = S.stringify(e);
        try {
          u.setItem("History.store", o)
        } catch (d) {
          if (d.code !== DOMException.QUOTA_EXCEEDED_ERR) throw d;
          u.length && (u.removeItem("History.store"), u.setItem("History.store", o))
        }
      }, t.intervalList.push(p(t.onUnload, t.options.storeInterval)), t.Adapter.bind(a, "beforeunload", t.onUnload), t.Adapter.bind(a, "unload", t.onUnload)), t.emulated.pushState || (t.bugs.safariPoll && t.intervalList.push(p(t.safariStatePoll, t.options.safariPollInterval)), (l.vendor === "Apple Computer, Inc." || (l.appCodeName || "") === "Mozilla") && (t.Adapter.bind(a, "hashchange", function() {
        t.Adapter.trigger(a, "popstate")
      }), t.getHash() && t.Adapter.onDomLoad(function() {
        t.Adapter.trigger(a, "hashchange")
      })))
    }, (!t.options || !t.options.delayInit) && t.init()
  }(window),
  function(a) {
    History.Adapter.bind(window, "statechange", function() {
      if (a(".product-listing").length > 0 || a(".filters-row").length > 0) {
        if (!i.ajaxClickHandlerState) {
          var s = location.search == "" ? "" : "?" + location.search,
            l = location.pathname + s;
          i.getCollectionContent(l)
        }
        i.ajaxClickHandlerState = !1
      }
    });
    var h = {},
      i = {
        init: function() {
          h = this.getQueryParams(), this.initSidebar(), this.initToolbar(), this.initShowMore()
        },
        initSidebar: function() {
          i.initFiltresEvent(), i.initFiltresRemoveEvent()
        },
        initToolbar: function() {
          i.initSortbyState(), i.initSortbyEvent(), i.initPerpageEvent(), i.initPaginationEvent()
        },
        initShowMore: function() {
          i.initShowMoreEvent()
        },
        initShowMoreEvent: function() {
          a(".show-more a").length > 0 && a(".show-more a").click(function(s) {
            a(this).hasClass("disable") || i.showMoreHandler(), s.preventDefault()
          })
        },
        showMoreHandler: function() {
          var s = a(".show-more a").last().attr("href");
          a.ajax({
            type: "GET",
            url: s,
            beforeSend: function() {
              i.showPreloader()
            },
            success: function(l) {
              i.hidePreloader(), a(l).find(".show-more a").length > 0 ? (a(".show-more").replaceWith(a(l).find(".show-more")), a(".show-more a").attr("href") && i.initShowMoreEvent()) : a(".show-more a").length > 0 && a(".show-more a").remove(), a(l).find(".tt-product-listing").length > 0 && (a(l).find(".tt-product-listing > div").each(function() {
                a(".tt-product-listing").append(a(this))
              }), $("body").trigger("refreshCurrency"), $("body").trigger("listingpageajax"), a(".spr-badge").length > 0 && a.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js"), ttProductSmall(), countDown(!0), initImagesSize(), lazyload(), setTimeout(ttReinitflowProduct, 3e3)), l = null
            },
            error: function(l, u) {
              i.hidePreloader(), alert("error")
            },
            dataType: "html"
          })
        },
        initFiltresEvent: function() {
          a(".filtres-js").length > 0 && a(".filtres-js:not(.clear-filters) a").unbind().click(function(s) {
            s.preventDefault(), delete h.page;
            var l = a(this),
              u = l.attr("href").split("/").pop().split("?").shift(),
              r = h.constraint;
            a(".filtres-remove-js").prepend('<a href="'+a(this).attr('href')+'" class="'+a(this).text().toLowerCase()+'">'+a(this).text().toLowerCase()+'</a>')
            h.constraint = r ? r + "+" + u : u, i.ajaxClick(i.getAjaxLink(h));
            a(".reset-flter").show();
          })
        },
        initFiltresRemoveEvent: function() {
          a(".filtres-remove-js").length > 0 && a(".filtres-remove-js a").unbind().click(function(s) {
            s.preventDefault(), delete h.page;
            var l = a(this);
            let params = new Proxy(new URLSearchParams(window.location.search), {
						  get: (searchParams, prop) => searchParams.get(prop),
						});
            let value = params.constraint;
            if (l.hasClass("clear_all")) {
            	delete h.constraint;
            	a(".filtres-remove-js a:not(.clear_all)").remove();
            	a(".reset-flter").hide();
            }
            else {
              var u = l.attr("href"),
                r = location.pathname,
                c = i.getUrlSubcategory("/collections/", r),
                p = u.split("/collections/" + c).pop().split("/").pop().split("?view=").shift().split("&view=").shift().split("?sort_by=").shift().split("&sort_by=").shift();
              	p != "" ? h.constraint = value.replace(p,'').replace('  ',' ').trim() : delete h.constraint, h.page = "clearlink||" + l.attr("href");
              	l.remove();
            }
            if (h.constraint == '') {
            	delete h.constraint;
            	a(".reset-flter").hide();
            }
            delete h.page;
            i.ajaxClick(i.getAjaxLink(h))
          })
        },
        initSortbyState: function() {
          a(".sort-position").length > 0 && h.sort_by && a(".sort-position").each(function() {
            a(this).val(h.sort_by)
          })
        },
        initSortbyEvent: function() {
          a(".sort-position").length > 0 && a(".sort-position").change(function(s) {
            var l = a(this).val();
            h.sort_by = l, i.ajaxClick(i.getAjaxLink(h))
          })
        },
        initPerpageEvent: function() {
          a(".show-qty").length > 0 && a(".show-qty").change(function(s) {
            var l = a(this).val();
            a(this).find("option:selected").index() == 0 ? delete h.view : h.view = l, delete h.page, i.ajaxClick(i.getAjaxLink(h))
          })
        },
        initPaginationEvent: function() {
          a(".pagination").length > 0 && a(".pagination a").unbind().click(function(s) {
            if (s.preventDefault(), !a(this).parent().hasClass("active")) {
              var l = a(this).attr("href").match(/page=\d+/g);
              if (!l) return !1;
              h.page = parseInt(l[0].match(/\d+/g)), i.ajaxClick(i.getAjaxLink(h));
              var u = ".product-listing",
                r = a(".stuck").length ? a(".stuck").height() : 0,
                c = a(u).offset().top - r;
              a(window).scrollTop(c)
            }
          })
        },
        getAjaxLink: function(s) {
          if (String(h.page).indexOf("clearlink||") > -1) {
            var l = String(h.page).split("clearlink||").pop().split("?view=ajax").shift().split("&view=ajax").shift();
            return delete h.page, l
          } else {
            var u = i.getUrlSubcategory("/collections/", location.pathname),
              r = "/collections/" + u;
            return s = i.getDecodedUrl(s), s != "" ? r + "?" + s : r
          }
        },
        ajaxClick: function(s) {
          i.ajaxClickHandlerState = !0, History.pushState({
            param: Shopify.queryParams
          }, document.title, s), i.getCollectionContent(s)
        },
        getCollectionContent: function(s) {
          var l = s.match(/view=([^&#]*)/);
          l ? (l = l[0], s = s.replace(l, l + "ajax")) : s += String(s.indexOf("?") > -1 ? "&" : "?") + "view=ajax";
          var u = {
            type: "get",
            url: s,
            beforeSend: function() {
              i.showPreloader()
            },
            success: function(r) {
              i.hidePreloader(), i.pageData(r), i.initPaginationEvent(), i.initSidebar(), i.initShowMore()
            },
            error: function(r, c) {
              i.hidePreloader(), alert("error")
            }
          };
          jQuery.ajax(u)
        },
        pageData: function(s) {
          var l = ".tt-product-listing",
            u = a(s).find(l).children();
          a(l).empty(), u.appendTo(l), l = ".filtres-js", a(l).each(function(r) {
            var c = a(this),
              p = c.closest(".tt-collapse");
            u = a(s).find(l + ":eq(" + r + ")"), c.replaceWith(u), u = a(s).find(l + ":eq(" + r + ")").closest(".tt-collapse"), u.hasClass("hide") ? p.addClass("hide") : p.removeClass("hide")
          }), u = a(s).find(".product-pagintion"), u.length && a.type(u.html()) === "undefined" ? a(".product-pagintion").empty() : a(".product-pagintion").replaceWith(u), u = a(s).find(".listing-total-js"), u.length && a(".listing-total-js").replaceWith(u), u = a(s).find(".infinitybutton"), u.length && a(".infinitybutton").replaceWith(u), $(".tt-filters-options .tt-quantity").length && $(".tt-filters-options .tt-quantity").find(".active").trigger("click"), $("body").trigger("refreshCurrency"), $("body").trigger("listingpageajax"), a(".spr-badge").length > 0 && a.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js"), ttProductSmall(), countDown(!0), initImagesSize(), lazyload(), setTimeout(ttReinitflowProduct, 3e3), u = null, s = null
        },
        showPreloader: function() {
          a(".custom-loader").show()
        },
        hidePreloader: function() {
          a(".custom-loader").hide()
        },
        getUrlSubcategory: function(s, l) {
          var u = l,
            r = u.indexOf(s);
          if (r < 0) return "";
          u = u.slice(r + s.length, u.length);
          var c = u.indexOf("/") > -1 ? u.indexOf("/") : u.length;
          return u = u.slice(0, c).toLowerCase(), u.replace(name + "=", "")
        },
        getQueryParams: function() {
          var s = location.pathname,
            l = location.search,
            u = s.split("/");
          return u.length > 3 ? u = "constraint=" + u.pop().replace(/&/g, "") : u = l.split("?").pop(), u == "" ? {} : i.uriToJson(u)
        },
        uriToJson: function(s) {
          return JSON.parse('{"' + decodeURI(s.replace(/&/g, '","').replace(/=/g, '":"')) + '"}')
        },
        getDecodedUrl: function(s) {
          return decodeURIComponent($.param(s))
        }
      };
    a(document).ready(function() {
      i.init()
    })
  }(jQuery), $(".autoscroll_yes").length && $(window).scroll(function() {
    autoscrollhandler()
  });

function autoscrollhandler() {
  var a = $(".autoscroll");
  if (a.length == 0) return !1;
  var h = parseInt(a.parent().offset().top),
    i = getWindowHeight() + getWindowTopY();
  h <= i && a.removeClass("autoscroll").trigger("click")
}

function getWindowHeight() {
  return window.innerHeight
}

function getWindowTopY() {
  return window.pageYOffset || document.documentElement.scrollTop
}
//# sourceMappingURL=/s/files/1/0264/3073/t/81/assets/collections-filtres.js.map?v=1603784927