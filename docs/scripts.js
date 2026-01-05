/*!
  Highlight.js v11.10.0 (git: 366a8bd012)
  (c) 2006-2024 Josh Goebel <hello@joshgoebel.com> and other contributors
  License: BSD-3-Clause
 */
var hljs = (function() {
  "use strict";
  function e(t2) {
    return t2 instanceof Map ? t2.clear = t2.delete = t2.set = () => {
      throw Error("map is read-only");
    } : t2 instanceof Set && (t2.add = t2.clear = t2.delete = () => {
      throw Error("set is read-only");
    }), Object.freeze(t2), Object.getOwnPropertyNames(t2).forEach((n2) => {
      const i2 = t2[n2], s2 = typeof i2;
      "object" !== s2 && "function" !== s2 || Object.isFrozen(i2) || e(i2);
    }), t2;
  }
  class t {
    constructor(e2) {
      void 0 === e2.data && (e2.data = {}), this.data = e2.data, this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function n(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function i(e2, ...t2) {
    const n2 = /* @__PURE__ */ Object.create(null);
    for (const t3 in e2) n2[t3] = e2[t3];
    return t2.forEach((e3) => {
      for (const t3 in e3) n2[t3] = e3[t3];
    }), n2;
  }
  const s = (e2) => !!e2.scope;
  class o {
    constructor(e2, t2) {
      this.buffer = "", this.classPrefix = t2.classPrefix, e2.walk(this);
    }
    addText(e2) {
      this.buffer += n(e2);
    }
    openNode(e2) {
      if (!s(e2)) return;
      const t2 = ((e3, { prefix: t3 }) => {
        if (e3.startsWith("language:"))
          return e3.replace("language:", "language-");
        if (e3.includes(".")) {
          const n2 = e3.split(".");
          return [
            `${t3}${n2.shift()}`,
            ...n2.map((e4, t4) => `${e4}${"_".repeat(t4 + 1)}`)
          ].join(" ");
        }
        return `${t3}${e3}`;
      })(e2.scope, { prefix: this.classPrefix });
      this.span(t2);
    }
    closeNode(e2) {
      s(e2) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e2) {
      this.buffer += `<span class="${e2}">`;
    }
  }
  const r = (e2 = {}) => {
    const t2 = { children: [] };
    return Object.assign(t2, e2), t2;
  };
  class a {
    constructor() {
      this.rootNode = r(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e2) {
      this.top.children.push(e2);
    }
    openNode(e2) {
      const t2 = r({ scope: e2 });
      this.add(t2), this.stack.push(t2);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e2) {
      return this.constructor._walk(e2, this.rootNode);
    }
    static _walk(e2, t2) {
      return "string" == typeof t2 ? e2.addText(t2) : t2.children && (e2.openNode(t2), t2.children.forEach((t3) => this._walk(e2, t3)), e2.closeNode(t2)), e2;
    }
    static _collapse(e2) {
      "string" != typeof e2 && e2.children && (e2.children.every((e3) => "string" == typeof e3) ? e2.children = [e2.children.join("")] : e2.children.forEach((e3) => {
        a._collapse(e3);
      }));
    }
  }
  class c extends a {
    constructor(e2) {
      super(), this.options = e2;
    }
    addText(e2) {
      "" !== e2 && this.add(e2);
    }
    startScope(e2) {
      this.openNode(e2);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(e2, t2) {
      const n2 = e2.root;
      t2 && (n2.scope = "language:" + t2), this.add(n2);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), true;
    }
  }
  function l(e2) {
    return e2 ? "string" == typeof e2 ? e2 : e2.source : null;
  }
  function g(e2) {
    return h("(?=", e2, ")");
  }
  function u(e2) {
    return h("(?:", e2, ")*");
  }
  function d(e2) {
    return h("(?:", e2, ")?");
  }
  function h(...e2) {
    return e2.map((e3) => l(e3)).join("");
  }
  function f(...e2) {
    const t2 = ((e3) => {
      const t3 = e3[e3.length - 1];
      return "object" == typeof t3 && t3.constructor === Object ? (e3.splice(e3.length - 1, 1), t3) : {};
    })(e2);
    return "(" + (t2.capture ? "" : "?:") + e2.map((e3) => l(e3)).join("|") + ")";
  }
  function p(e2) {
    return RegExp(e2.toString() + "|").exec("").length - 1;
  }
  const b = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function m(e2, { joinWith: t2 }) {
    let n2 = 0;
    return e2.map((e3) => {
      n2 += 1;
      const t3 = n2;
      let i2 = l(e3), s2 = "";
      for (; i2.length > 0; ) {
        const e4 = b.exec(i2);
        if (!e4) {
          s2 += i2;
          break;
        }
        s2 += i2.substring(0, e4.index), i2 = i2.substring(e4.index + e4[0].length), "\\" === e4[0][0] && e4[1] ? s2 += "\\" + (Number(e4[1]) + t3) : (s2 += e4[0], "(" === e4[0] && n2++);
      }
      return s2;
    }).map((e3) => `(${e3})`).join(t2);
  }
  const E = "[a-zA-Z]\\w*", x = "[a-zA-Z_]\\w*", w = "\\b\\d+(\\.\\d+)?", y = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", _ = "\\b(0b[01]+)", O = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, v = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [O]
  }, k = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [O]
  }, N = (e2, t2, n2 = {}) => {
    const s2 = i({ scope: "comment", begin: e2, end: t2, contains: [] }, n2);
    s2.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const o2 = f(
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/
    );
    return s2.contains.push({
      begin: h(/[ ]+/, "(", o2, /[.]?[:]?([.][ ]|[ ])/, "){3}")
    }), s2;
  }, S = N("//", "$"), M = N("/\\*", "\\*/"), R = N("#", "$");
  var j = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: v,
    BACKSLASH_ESCAPE: O,
    BINARY_NUMBER_MODE: {
      scope: "number",
      begin: _,
      relevance: 0
    },
    BINARY_NUMBER_RE: _,
    COMMENT: N,
    C_BLOCK_COMMENT_MODE: M,
    C_LINE_COMMENT_MODE: S,
    C_NUMBER_MODE: { scope: "number", begin: y, relevance: 0 },
    C_NUMBER_RE: y,
    END_SAME_AS_BEGIN: (e2) => Object.assign(e2, {
      "on:begin": (e3, t2) => {
        t2.data._beginMatch = e3[1];
      },
      "on:end": (e3, t2) => {
        t2.data._beginMatch !== e3[1] && t2.ignoreMatch();
      }
    }),
    HASH_COMMENT_MODE: R,
    IDENT_RE: E,
    MATCH_NOTHING_RE: /\b\B/,
    METHOD_GUARD: { begin: "\\.\\s*" + x, relevance: 0 },
    NUMBER_MODE: { scope: "number", begin: w, relevance: 0 },
    NUMBER_RE: w,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    QUOTE_STRING_MODE: k,
    REGEXP_MODE: {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [O, { begin: /\[/, end: /\]/, relevance: 0, contains: [O] }]
    },
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e2 = {}) => {
      const t2 = /^#![ ]*\//;
      return e2.binary && (e2.begin = h(t2, /.*\b/, e2.binary, /\b.*/)), i(
        {
          scope: "meta",
          begin: t2,
          end: /$/,
          relevance: 0,
          "on:begin": (e3, t3) => {
            0 !== e3.index && t3.ignoreMatch();
          }
        },
        e2
      );
    },
    TITLE_MODE: { scope: "title", begin: E, relevance: 0 },
    UNDERSCORE_IDENT_RE: x,
    UNDERSCORE_TITLE_MODE: { scope: "title", begin: x, relevance: 0 }
  });
  function A(e2, t2) {
    "." === e2.input[e2.index - 1] && t2.ignoreMatch();
  }
  function I(e2, t2) {
    void 0 !== e2.className && (e2.scope = e2.className, delete e2.className);
  }
  function T(e2, t2) {
    t2 && e2.beginKeywords && (e2.begin = "\\b(" + e2.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e2.__beforeBegin = A, e2.keywords = e2.keywords || e2.beginKeywords, delete e2.beginKeywords, void 0 === e2.relevance && (e2.relevance = 0));
  }
  function L(e2, t2) {
    Array.isArray(e2.illegal) && (e2.illegal = f(...e2.illegal));
  }
  function B(e2, t2) {
    if (e2.match) {
      if (e2.begin || e2.end)
        throw Error("begin & end are not supported with match");
      e2.begin = e2.match, delete e2.match;
    }
  }
  function P(e2, t2) {
    void 0 === e2.relevance && (e2.relevance = 1);
  }
  const D = (e2, t2) => {
    if (!e2.beforeMatch) return;
    if (e2.starts) throw Error("beforeMatch cannot be used with starts");
    const n2 = Object.assign({}, e2);
    Object.keys(e2).forEach((t3) => {
      delete e2[t3];
    }), e2.keywords = n2.keywords, e2.begin = h(n2.beforeMatch, g(n2.begin)), e2.starts = {
      relevance: 0,
      contains: [Object.assign(n2, { endsParent: true })]
    }, e2.relevance = 0, delete n2.beforeMatch;
  }, H = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value"
  ], C = "keyword";
  function $(e2, t2, n2 = C) {
    const i2 = /* @__PURE__ */ Object.create(null);
    return "string" == typeof e2 ? s2(n2, e2.split(" ")) : Array.isArray(e2) ? s2(n2, e2) : Object.keys(e2).forEach((n3) => {
      Object.assign(i2, $(e2[n3], t2, n3));
    }), i2;
    function s2(e3, n3) {
      t2 && (n3 = n3.map((e4) => e4.toLowerCase())), n3.forEach((t3) => {
        const n4 = t3.split("|");
        i2[n4[0]] = [e3, U(n4[0], n4[1])];
      });
    }
  }
  function U(e2, t2) {
    return t2 ? Number(t2) : ((e3) => H.includes(e3.toLowerCase()))(e2) ? 0 : 1;
  }
  const z = {}, W = (e2) => {
    console.error(e2);
  }, X = (e2, ...t2) => {
    console.log("WARN: " + e2, ...t2);
  }, G = (e2, t2) => {
    z[`${e2}/${t2}`] || (console.log(`Deprecated as of ${e2}. ${t2}`), z[`${e2}/${t2}`] = true);
  }, K = Error();
  function F(e2, t2, { key: n2 }) {
    let i2 = 0;
    const s2 = e2[n2], o2 = {}, r2 = {};
    for (let e3 = 1; e3 <= t2.length; e3++)
      r2[e3 + i2] = s2[e3], o2[e3 + i2] = true, i2 += p(t2[e3 - 1]);
    e2[n2] = r2, e2[n2]._emit = o2, e2[n2]._multi = true;
  }
  function Z(e2) {
    ((e3) => {
      e3.scope && "object" == typeof e3.scope && null !== e3.scope && (e3.beginScope = e3.scope, delete e3.scope);
    })(e2), "string" == typeof e2.beginScope && (e2.beginScope = {
      _wrap: e2.beginScope
    }), "string" == typeof e2.endScope && (e2.endScope = { _wrap: e2.endScope }), ((e3) => {
      if (Array.isArray(e3.begin)) {
        if (e3.skip || e3.excludeBegin || e3.returnBegin)
          throw W(
            "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
          ), K;
        if ("object" != typeof e3.beginScope || null === e3.beginScope)
          throw W("beginScope must be object"), K;
        F(e3, e3.begin, { key: "beginScope" }), e3.begin = m(e3.begin, { joinWith: "" });
      }
    })(e2), ((e3) => {
      if (Array.isArray(e3.end)) {
        if (e3.skip || e3.excludeEnd || e3.returnEnd)
          throw W(
            "skip, excludeEnd, returnEnd not compatible with endScope: {}"
          ), K;
        if ("object" != typeof e3.endScope || null === e3.endScope)
          throw W("endScope must be object"), K;
        F(e3, e3.end, { key: "endScope" }), e3.end = m(e3.end, { joinWith: "" });
      }
    })(e2);
  }
  function V(e2) {
    function t2(t3, n3) {
      return RegExp(
        l(t3),
        "m" + (e2.case_insensitive ? "i" : "") + (e2.unicodeRegex ? "u" : "") + (n3 ? "g" : "")
      );
    }
    class n2 {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(e3, t3) {
        t3.position = this.position++, this.matchIndexes[this.matchAt] = t3, this.regexes.push([t3, e3]), this.matchAt += p(e3) + 1;
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e3 = this.regexes.map((e4) => e4[1]);
        this.matcherRe = t2(m(e3, { joinWith: "|" }), true), this.lastIndex = 0;
      }
      exec(e3) {
        this.matcherRe.lastIndex = this.lastIndex;
        const t3 = this.matcherRe.exec(e3);
        if (!t3) return null;
        const n3 = t3.findIndex((e4, t4) => t4 > 0 && void 0 !== e4), i2 = this.matchIndexes[n3];
        return t3.splice(0, n3), Object.assign(t3, i2);
      }
    }
    class s2 {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(e3) {
        if (this.multiRegexes[e3]) return this.multiRegexes[e3];
        const t3 = new n2();
        return this.rules.slice(e3).forEach(([e4, n3]) => t3.addRule(e4, n3)), t3.compile(), this.multiRegexes[e3] = t3, t3;
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e3, t3) {
        this.rules.push([e3, t3]), "begin" === t3.type && this.count++;
      }
      exec(e3) {
        const t3 = this.getMatcher(this.regexIndex);
        t3.lastIndex = this.lastIndex;
        let n3 = t3.exec(e3);
        if (this.resumingScanAtSamePosition())
          if (n3 && n3.index === this.lastIndex) ;
          else {
            const t4 = this.getMatcher(0);
            t4.lastIndex = this.lastIndex + 1, n3 = t4.exec(e3);
          }
        return n3 && (this.regexIndex += n3.position + 1, this.regexIndex === this.count && this.considerAll()), n3;
      }
    }
    if (e2.compilerExtensions || (e2.compilerExtensions = []), e2.contains && e2.contains.includes("self"))
      throw Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
      );
    return e2.classNameAliases = i(e2.classNameAliases || {}), (function n3(o2, r2) {
      const a2 = o2;
      if (o2.isCompiled) return a2;
      [I, B, Z, D].forEach((e3) => e3(o2, r2)), e2.compilerExtensions.forEach((e3) => e3(o2, r2)), o2.__beforeBegin = null, [T, L, P].forEach((e3) => e3(o2, r2)), o2.isCompiled = true;
      let c2 = null;
      return "object" == typeof o2.keywords && o2.keywords.$pattern && (o2.keywords = Object.assign({}, o2.keywords), c2 = o2.keywords.$pattern, delete o2.keywords.$pattern), c2 = c2 || /\w+/, o2.keywords && (o2.keywords = $(o2.keywords, e2.case_insensitive)), a2.keywordPatternRe = t2(c2, true), r2 && (o2.begin || (o2.begin = /\B|\b/), a2.beginRe = t2(a2.begin), o2.end || o2.endsWithParent || (o2.end = /\B|\b/), o2.end && (a2.endRe = t2(a2.end)), a2.terminatorEnd = l(a2.end) || "", o2.endsWithParent && r2.terminatorEnd && (a2.terminatorEnd += (o2.end ? "|" : "") + r2.terminatorEnd)), o2.illegal && (a2.illegalRe = t2(o2.illegal)), o2.contains || (o2.contains = []), o2.contains = [].concat(
        ...o2.contains.map(
          (e3) => ((e4) => (e4.variants && !e4.cachedVariants && (e4.cachedVariants = e4.variants.map(
            (t3) => i(
              e4,
              {
                variants: null
              },
              t3
            )
          )), e4.cachedVariants ? e4.cachedVariants : q(e4) ? i(e4, {
            starts: e4.starts ? i(e4.starts) : null
          }) : Object.isFrozen(e4) ? i(e4) : e4))("self" === e3 ? o2 : e3)
        )
      ), o2.contains.forEach((e3) => {
        n3(e3, a2);
      }), o2.starts && n3(o2.starts, r2), a2.matcher = ((e3) => {
        const t3 = new s2();
        return e3.contains.forEach(
          (e4) => t3.addRule(e4.begin, { rule: e4, type: "begin" })
        ), e3.terminatorEnd && t3.addRule(e3.terminatorEnd, { type: "end" }), e3.illegal && t3.addRule(e3.illegal, { type: "illegal" }), t3;
      })(a2), a2;
    })(e2);
  }
  function q(e2) {
    return !!e2 && (e2.endsWithParent || q(e2.starts));
  }
  class J extends Error {
    constructor(e2, t2) {
      super(e2), this.name = "HTMLInjectionError", this.html = t2;
    }
  }
  const Y = n, Q = i, ee = Symbol("nomatch"), te = (n2) => {
    const i2 = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), o2 = [];
    let r2 = true;
    const a2 = "Could not find the language '{}', did you forget to load/include a language module?", l2 = {
      disableAutodetect: true,
      name: "Plain text",
      contains: []
    };
    let p2 = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: c
    };
    function b2(e2) {
      return p2.noHighlightRe.test(e2);
    }
    function m2(e2, t2, n3) {
      let i3 = "", s3 = "";
      "object" == typeof t2 ? (i3 = e2, n3 = t2.ignoreIllegals, s3 = t2.language) : (G("10.7.0", "highlight(lang, code, ...args) has been deprecated."), G(
        "10.7.0",
        "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
      ), s3 = e2, i3 = t2), void 0 === n3 && (n3 = true);
      const o3 = { code: i3, language: s3 };
      N2("before:highlight", o3);
      const r3 = o3.result ? o3.result : E2(o3.language, o3.code, n3);
      return r3.code = o3.code, N2("after:highlight", r3), r3;
    }
    function E2(e2, n3, s3, o3) {
      const c2 = /* @__PURE__ */ Object.create(null);
      function l3() {
        if (!N3.keywords) return void M2.addText(R2);
        let e3 = 0;
        N3.keywordPatternRe.lastIndex = 0;
        let t2 = N3.keywordPatternRe.exec(R2), n4 = "";
        for (; t2; ) {
          n4 += R2.substring(e3, t2.index);
          const s4 = _3.case_insensitive ? t2[0].toLowerCase() : t2[0], o4 = (i3 = s4, N3.keywords[i3]);
          if (o4) {
            const [e4, i4] = o4;
            if (M2.addText(n4), n4 = "", c2[s4] = (c2[s4] || 0) + 1, c2[s4] <= 7 && (j2 += i4), e4.startsWith("_"))
              n4 += t2[0];
            else {
              const n5 = _3.classNameAliases[e4] || e4;
              u2(t2[0], n5);
            }
          } else n4 += t2[0];
          e3 = N3.keywordPatternRe.lastIndex, t2 = N3.keywordPatternRe.exec(R2);
        }
        var i3;
        n4 += R2.substring(e3), M2.addText(n4);
      }
      function g2() {
        null != N3.subLanguage ? (() => {
          if ("" === R2) return;
          let e3 = null;
          if ("string" == typeof N3.subLanguage) {
            if (!i2[N3.subLanguage]) return void M2.addText(R2);
            e3 = E2(N3.subLanguage, R2, true, S2[N3.subLanguage]), S2[N3.subLanguage] = e3._top;
          } else e3 = x2(R2, N3.subLanguage.length ? N3.subLanguage : null);
          N3.relevance > 0 && (j2 += e3.relevance), M2.__addSublanguage(e3._emitter, e3.language);
        })() : l3(), R2 = "";
      }
      function u2(e3, t2) {
        "" !== e3 && (M2.startScope(t2), M2.addText(e3), M2.endScope());
      }
      function d2(e3, t2) {
        let n4 = 1;
        const i3 = t2.length - 1;
        for (; n4 <= i3; ) {
          if (!e3._emit[n4]) {
            n4++;
            continue;
          }
          const i4 = _3.classNameAliases[e3[n4]] || e3[n4], s4 = t2[n4];
          i4 ? u2(s4, i4) : (R2 = s4, l3(), R2 = ""), n4++;
        }
      }
      function h2(e3, t2) {
        return e3.scope && "string" == typeof e3.scope && M2.openNode(_3.classNameAliases[e3.scope] || e3.scope), e3.beginScope && (e3.beginScope._wrap ? (u2(
          R2,
          _3.classNameAliases[e3.beginScope._wrap] || e3.beginScope._wrap
        ), R2 = "") : e3.beginScope._multi && (d2(e3.beginScope, t2), R2 = "")), N3 = Object.create(e3, {
          parent: {
            value: N3
          }
        }), N3;
      }
      function f2(e3, n4, i3) {
        let s4 = ((e4, t2) => {
          const n5 = e4 && e4.exec(t2);
          return n5 && 0 === n5.index;
        })(e3.endRe, i3);
        if (s4) {
          if (e3["on:end"]) {
            const i4 = new t(e3);
            e3["on:end"](n4, i4), i4.isMatchIgnored && (s4 = false);
          }
          if (s4) {
            for (; e3.endsParent && e3.parent; ) e3 = e3.parent;
            return e3;
          }
        }
        if (e3.endsWithParent) return f2(e3.parent, n4, i3);
      }
      function b3(e3) {
        return 0 === N3.matcher.regexIndex ? (R2 += e3[0], 1) : (T2 = true, 0);
      }
      function m3(e3) {
        const t2 = e3[0], i3 = n3.substring(e3.index), s4 = f2(N3, e3, i3);
        if (!s4) return ee;
        const o4 = N3;
        N3.endScope && N3.endScope._wrap ? (g2(), u2(t2, N3.endScope._wrap)) : N3.endScope && N3.endScope._multi ? (g2(), d2(N3.endScope, e3)) : o4.skip ? R2 += t2 : (o4.returnEnd || o4.excludeEnd || (R2 += t2), g2(), o4.excludeEnd && (R2 = t2));
        do {
          N3.scope && M2.closeNode(), N3.skip || N3.subLanguage || (j2 += N3.relevance), N3 = N3.parent;
        } while (N3 !== s4.parent);
        return s4.starts && h2(s4.starts, e3), o4.returnEnd ? 0 : t2.length;
      }
      let w3 = {};
      function y3(i3, o4) {
        const a3 = o4 && o4[0];
        if (R2 += i3, null == a3) return g2(), 0;
        if ("begin" === w3.type && "end" === o4.type && w3.index === o4.index && "" === a3) {
          if (R2 += n3.slice(o4.index, o4.index + 1), !r2) {
            const t2 = Error(`0 width match regex (${e2})`);
            throw t2.languageName = e2, t2.badRule = w3.rule, t2;
          }
          return 1;
        }
        if (w3 = o4, "begin" === o4.type)
          return ((e3) => {
            const n4 = e3[0], i4 = e3.rule, s4 = new t(i4), o5 = [i4.__beforeBegin, i4["on:begin"]];
            for (const t2 of o5)
              if (t2 && (t2(e3, s4), s4.isMatchIgnored)) return b3(n4);
            return i4.skip ? R2 += n4 : (i4.excludeBegin && (R2 += n4), g2(), i4.returnBegin || i4.excludeBegin || (R2 = n4)), h2(i4, e3), i4.returnBegin ? 0 : n4.length;
          })(o4);
        if ("illegal" === o4.type && !s3) {
          const e3 = Error(
            'Illegal lexeme "' + a3 + '" for mode "' + (N3.scope || "<unnamed>") + '"'
          );
          throw e3.mode = N3, e3;
        }
        if ("end" === o4.type) {
          const e3 = m3(o4);
          if (e3 !== ee) return e3;
        }
        if ("illegal" === o4.type && "" === a3) return 1;
        if (I2 > 1e5 && I2 > 3 * o4.index)
          throw Error(
            "potential infinite loop, way more iterations than matches"
          );
        return R2 += a3, a3.length;
      }
      const _3 = O2(e2);
      if (!_3)
        throw W(a2.replace("{}", e2)), Error('Unknown language: "' + e2 + '"');
      const v3 = V(_3);
      let k3 = "", N3 = o3 || v3;
      const S2 = {}, M2 = new p2.__emitter(p2);
      (() => {
        const e3 = [];
        for (let t2 = N3; t2 !== _3; t2 = t2.parent) t2.scope && e3.unshift(t2.scope);
        e3.forEach((e4) => M2.openNode(e4));
      })();
      let R2 = "", j2 = 0, A2 = 0, I2 = 0, T2 = false;
      try {
        if (_3.__emitTokens) _3.__emitTokens(n3, M2);
        else {
          for (N3.matcher.considerAll(); ; ) {
            I2++, T2 ? T2 = false : N3.matcher.considerAll(), N3.matcher.lastIndex = A2;
            const e3 = N3.matcher.exec(n3);
            if (!e3) break;
            const t2 = y3(n3.substring(A2, e3.index), e3);
            A2 = e3.index + t2;
          }
          y3(n3.substring(A2));
        }
        return M2.finalize(), k3 = M2.toHTML(), {
          language: e2,
          value: k3,
          relevance: j2,
          illegal: false,
          _emitter: M2,
          _top: N3
        };
      } catch (t2) {
        if (t2.message && t2.message.includes("Illegal"))
          return {
            language: e2,
            value: Y(n3),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: t2.message,
              index: A2,
              context: n3.slice(A2 - 100, A2 + 100),
              mode: t2.mode,
              resultSoFar: k3
            },
            _emitter: M2
          };
        if (r2)
          return {
            language: e2,
            value: Y(n3),
            illegal: false,
            relevance: 0,
            errorRaised: t2,
            _emitter: M2,
            _top: N3
          };
        throw t2;
      }
    }
    function x2(e2, t2) {
      t2 = t2 || p2.languages || Object.keys(i2);
      const n3 = ((e3) => {
        const t3 = {
          value: Y(e3),
          illegal: false,
          relevance: 0,
          _top: l2,
          _emitter: new p2.__emitter(p2)
        };
        return t3._emitter.addText(e3), t3;
      })(e2), s3 = t2.filter(O2).filter(k2).map((t3) => E2(t3, e2, false));
      s3.unshift(n3);
      const o3 = s3.sort((e3, t3) => {
        if (e3.relevance !== t3.relevance) return t3.relevance - e3.relevance;
        if (e3.language && t3.language) {
          if (O2(e3.language).supersetOf === t3.language) return 1;
          if (O2(t3.language).supersetOf === e3.language) return -1;
        }
        return 0;
      }), [r3, a3] = o3, c2 = r3;
      return c2.secondBest = a3, c2;
    }
    function w2(e2) {
      let t2 = null;
      const n3 = ((e3) => {
        let t3 = e3.className + " ";
        t3 += e3.parentNode ? e3.parentNode.className : "";
        const n4 = p2.languageDetectRe.exec(t3);
        if (n4) {
          const t4 = O2(n4[1]);
          return t4 || (X(a2.replace("{}", n4[1])), X("Falling back to no-highlight mode for this block.", e3)), t4 ? n4[1] : "no-highlight";
        }
        return t3.split(/\s+/).find((e4) => b2(e4) || O2(e4));
      })(e2);
      if (b2(n3)) return;
      if (N2("before:highlightElement", { el: e2, language: n3 }), e2.dataset.highlighted)
        return void console.log(
          "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
          e2
        );
      if (e2.children.length > 0 && (p2.ignoreUnescapedHTML || (console.warn(
        "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
      ), console.warn(
        "https://github.com/highlightjs/highlight.js/wiki/security"
      ), console.warn("The element with unescaped HTML:"), console.warn(e2)), p2.throwUnescapedHTML))
        throw new J(
          "One of your code blocks includes unescaped HTML.",
          e2.innerHTML
        );
      t2 = e2;
      const i3 = t2.textContent, o3 = n3 ? m2(i3, { language: n3, ignoreIllegals: true }) : x2(i3);
      e2.innerHTML = o3.value, e2.dataset.highlighted = "yes", ((e3, t3, n4) => {
        const i4 = t3 && s2[t3] || n4;
        e3.classList.add("hljs"), e3.classList.add("language-" + i4);
      })(e2, n3, o3.language), e2.result = {
        language: o3.language,
        re: o3.relevance,
        relevance: o3.relevance
      }, o3.secondBest && (e2.secondBest = {
        language: o3.secondBest.language,
        relevance: o3.secondBest.relevance
      }), N2("after:highlightElement", { el: e2, result: o3, text: i3 });
    }
    let y2 = false;
    function _2() {
      "loading" !== document.readyState ? document.querySelectorAll(p2.cssSelector).forEach(w2) : y2 = true;
    }
    function O2(e2) {
      return e2 = (e2 || "").toLowerCase(), i2[e2] || i2[s2[e2]];
    }
    function v2(e2, { languageName: t2 }) {
      "string" == typeof e2 && (e2 = [e2]), e2.forEach((e3) => {
        s2[e3.toLowerCase()] = t2;
      });
    }
    function k2(e2) {
      const t2 = O2(e2);
      return t2 && !t2.disableAutodetect;
    }
    function N2(e2, t2) {
      const n3 = e2;
      o2.forEach((e3) => {
        e3[n3] && e3[n3](t2);
      });
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener(
      "DOMContentLoaded",
      () => {
        y2 && _2();
      },
      false
    ), Object.assign(n2, {
      highlight: m2,
      highlightAuto: x2,
      highlightAll: _2,
      highlightElement: w2,
      highlightBlock: (e2) => (G("10.7.0", "highlightBlock will be removed entirely in v12.0"), G("10.7.0", "Please use highlightElement now."), w2(e2)),
      configure: (e2) => {
        p2 = Q(p2, e2);
      },
      initHighlighting: () => {
        _2(), G(
          "10.6.0",
          "initHighlighting() deprecated.  Use highlightAll() now."
        );
      },
      initHighlightingOnLoad: () => {
        _2(), G(
          "10.6.0",
          "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
        );
      },
      registerLanguage: (e2, t2) => {
        let s3 = null;
        try {
          s3 = t2(n2);
        } catch (t3) {
          if (W(
            "Language definition for '{}' could not be registered.".replace(
              "{}",
              e2
            )
          ), !r2)
            throw t3;
          W(t3), s3 = l2;
        }
        s3.name || (s3.name = e2), i2[e2] = s3, s3.rawDefinition = t2.bind(null, n2), s3.aliases && v2(s3.aliases, {
          languageName: e2
        });
      },
      unregisterLanguage: (e2) => {
        delete i2[e2];
        for (const t2 of Object.keys(s2)) s2[t2] === e2 && delete s2[t2];
      },
      listLanguages: () => Object.keys(i2),
      getLanguage: O2,
      registerAliases: v2,
      autoDetection: k2,
      inherit: Q,
      addPlugin: (e2) => {
        ((e3) => {
          e3["before:highlightBlock"] && !e3["before:highlightElement"] && (e3["before:highlightElement"] = (t2) => {
            e3["before:highlightBlock"](Object.assign({ block: t2.el }, t2));
          }), e3["after:highlightBlock"] && !e3["after:highlightElement"] && (e3["after:highlightElement"] = (t2) => {
            e3["after:highlightBlock"](
              Object.assign({ block: t2.el }, t2)
            );
          });
        })(e2), o2.push(e2);
      },
      removePlugin: (e2) => {
        const t2 = o2.indexOf(e2);
        -1 !== t2 && o2.splice(t2, 1);
      }
    }), n2.debugMode = () => {
      r2 = false;
    }, n2.safeMode = () => {
      r2 = true;
    }, n2.versionString = "11.10.0", n2.regex = {
      concat: h,
      lookahead: g,
      either: f,
      optional: d,
      anyNumberOfTimes: u
    };
    for (const t2 in j) "object" == typeof j[t2] && e(j[t2]);
    return Object.assign(n2, j), n2;
  }, ne = te({});
  return ne.newInstance = () => te({}), ne;
})();
"object" == typeof exports && "undefined" != typeof module && (module.exports = hljs);
/*! `css` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    const e2 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "optgroup",
      "option",
      "p",
      "picture",
      "q",
      "quote",
      "samp",
      "section",
      "select",
      "source",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
      "defs",
      "g",
      "marker",
      "mask",
      "pattern",
      "svg",
      "switch",
      "symbol",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feFlood",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMorphology",
      "feOffset",
      "feSpecularLighting",
      "feTile",
      "feTurbulence",
      "linearGradient",
      "radialGradient",
      "stop",
      "circle",
      "ellipse",
      "image",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "text",
      "use",
      "textPath",
      "tspan",
      "foreignObject",
      "clipPath"
    ], r = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ].sort().reverse(), t = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ].sort().reverse(), i = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ].sort().reverse(), o = [
      "accent-color",
      "align-content",
      "align-items",
      "align-self",
      "alignment-baseline",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "cx",
      "cy",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "color-scheme",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "empty-cells",
      "enable-background",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "flood-color",
      "flood-opacity",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "kerning",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "lighting-color",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "mask",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "r",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "rotate",
      "row-gap",
      "scale",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-anchor",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-offset",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "vector-effect",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "x",
      "y",
      "z-index"
    ].sort().reverse();
    return (n) => {
      const a = n.regex, l = ((e3) => ({
        IMPORTANT: { scope: "meta", begin: "!important" },
        BLOCK_COMMENT: e3.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [e3.APOS_STRING_MODE, e3.QUOTE_STRING_MODE]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: e3.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z_][A-Za-z0-9_-]*/
        }
      }))(n), s = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];
      return {
        name: "CSS",
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: { keyframePosition: "from to" },
        classNameAliases: { keyframePosition: "selector-tag" },
        contains: [
          l.BLOCK_COMMENT,
          {
            begin: /-(webkit|moz|ms|o)-(?=[a-z])/
          },
          l.CSS_NUMBER_MODE,
          {
            className: "selector-id",
            begin: /#[A-Za-z0-9_-]+/,
            relevance: 0
          },
          {
            className: "selector-class",
            begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
            relevance: 0
          },
          l.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            variants: [
              {
                begin: ":(" + t.join("|") + ")"
              },
              { begin: ":(:)?(" + i.join("|") + ")" }
            ]
          },
          l.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + o.join("|") + ")\\b"
          },
          {
            begin: /:/,
            end: /[;}{]/,
            contains: [
              l.BLOCK_COMMENT,
              l.HEXCOLOR,
              l.IMPORTANT,
              l.CSS_NUMBER_MODE,
              ...s,
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0,
                keywords: { built_in: "url data-uri" },
                contains: [
                  ...s,
                  {
                    className: "string",
                    begin: /[^)]/,
                    endsWithParent: true,
                    excludeEnd: true
                  }
                ]
              },
              l.FUNCTION_DISPATCH
            ]
          },
          {
            begin: a.lookahead(/@/),
            end: "[{;]",
            relevance: 0,
            illegal: /:/,
            contains: [
              { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
              {
                begin: /\s/,
                endsWithParent: true,
                excludeEnd: true,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: "and or not only",
                  attribute: r.join(" ")
                },
                contains: [
                  {
                    begin: /[a-z-]+(?=:)/,
                    className: "attribute"
                  },
                  ...s,
                  l.CSS_NUMBER_MODE
                ]
              }
            ]
          },
          {
            className: "selector-tag",
            begin: "\\b(" + e2.join("|") + ")\\b"
          }
        ]
      };
    };
  })();
  hljs.registerLanguage("css", e);
})();
/*! `javascript` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    const e2 = "[A-Za-z$_][0-9A-Za-z$_]*", n = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ], a = ["true", "false", "null", "undefined", "NaN", "Infinity"], t = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly"
    ], s = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ], r = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ], c = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "sessionStorage",
      "module",
      "global"
    ], i = [].concat(r, t, s);
    return (o) => {
      const l = o.regex, b = e2, d = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (e3, n2) => {
          const a2 = e3[0].length + e3.index, t2 = e3.input[a2];
          if ("<" === t2 || "," === t2) return void n2.ignoreMatch();
          let s2;
          ">" === t2 && (((e4, { after: n3 }) => {
            const a3 = "</" + e4[0].slice(1);
            return -1 !== e4.input.indexOf(a3, n3);
          })(e3, { after: a2 }) || n2.ignoreMatch());
          const r2 = e3.input.substring(a2);
          ((s2 = r2.match(/^\s*=/)) || (s2 = r2.match(/^\s+extends\s+/)) && 0 === s2.index) && n2.ignoreMatch();
        }
      }, g = {
        $pattern: e2,
        keyword: n,
        literal: a,
        built_in: i,
        "variable.language": c
      }, u = "[0-9](_?[0-9])*", m = `\\.(${u})`, E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", A = {
        className: "number",
        variants: [
          {
            begin: `(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`
          },
          {
            begin: `\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`
          },
          {
            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
          },
          {
            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          },
          {
            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          {
            begin: "\\b0[0-7]+n?\\b"
          }
        ],
        relevance: 0
      }, y = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: g,
        contains: []
      }, h = {
        begin: ".?html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o.BACKSLASH_ESCAPE, y],
          subLanguage: "xml"
        }
      }, N = {
        begin: ".?css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o.BACKSLASH_ESCAPE, y],
          subLanguage: "css"
        }
      }, _ = {
        begin: ".?gql`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o.BACKSLASH_ESCAPE, y],
          subLanguage: "graphql"
        }
      }, f = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [o.BACKSLASH_ESCAPE, y]
      }, p = {
        className: "comment",
        variants: [
          o.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: true,
                    excludeBegin: true,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: b + "(?=\\s*(-)|$)",
                    endsParent: true,
                    relevance: 0
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 }
                ]
              }
            ]
          }),
          o.C_BLOCK_COMMENT_MODE,
          o.C_LINE_COMMENT_MODE
        ]
      }, v = [
        o.APOS_STRING_MODE,
        o.QUOTE_STRING_MODE,
        h,
        N,
        _,
        f,
        { match: /\$\d+/ },
        A
      ];
      y.contains = v.concat({
        begin: /\{/,
        end: /\}/,
        keywords: g,
        contains: ["self"].concat(v)
      });
      const S = [].concat(p, y.contains), w = S.concat([
        {
          begin: /(\s*)\(/,
          end: /\)/,
          keywords: g,
          contains: ["self"].concat(S)
        }
      ]), R = {
        className: "params",
        begin: /(\s*)\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: g,
        contains: w
      }, O = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              b,
              /\s+/,
              /extends/,
              /\s+/,
              l.concat(b, "(", l.concat(/\./, b), ")*")
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          },
          {
            match: [/class/, /\s+/, b],
            scope: { 1: "keyword", 3: "title.class" }
          }
        ]
      }, k = {
        relevance: 0,
        match: l.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...t, ...s] }
      }, I = {
        variants: [
          {
            match: [/function/, /\s+/, b, /(?=\s*\()/]
          },
          { match: [/function/, /\s*(?=\()/] }
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [R],
        illegal: /%/
      }, x = {
        match: l.concat(
          /\b/,
          (T = [...r, "super", "import"].map((e3) => e3 + "\\s*\\("), l.concat("(?!", T.join("|"), ")")),
          b,
          l.lookahead(/\s*\(/)
        ),
        className: "title.function",
        relevance: 0
      };
      var T;
      const C = {
        begin: l.concat(/\./, l.lookahead(l.concat(b, /(?![0-9A-Za-z$_(])/))),
        end: b,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
      }, M = {
        match: [/get|set/, /\s+/, b, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, R]
      }, B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o.UNDERSCORE_IDENT_RE + ")\\s*=>", $ = {
        match: [
          /const|var|let/,
          /\s+/,
          b,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          l.lookahead(B)
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [R]
      };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: g,
        exports: {
          PARAMS_CONTAINS: w,
          CLASS_REFERENCE: k
        },
        illegal: /#(?![$_A-z])/,
        contains: [
          o.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
          {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          o.APOS_STRING_MODE,
          o.QUOTE_STRING_MODE,
          h,
          N,
          _,
          f,
          p,
          { match: /\$\d+/ },
          A,
          k,
          {
            className: "attr",
            begin: b + l.lookahead(":"),
            relevance: 0
          },
          $,
          {
            begin: "(" + o.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            relevance: 0,
            contains: [
              p,
              o.REGEXP_MODE,
              {
                className: "function",
                begin: B,
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      { begin: o.UNDERSCORE_IDENT_RE, relevance: 0 },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /(\s*)\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: g,
                        contains: w
                      }
                    ]
                  }
                ]
              },
              { begin: /,/, relevance: 0 },
              { match: /\s+/, relevance: 0 },
              {
                variants: [
                  { begin: "<>", end: "</>" },
                  {
                    match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                  },
                  {
                    begin: d.begin,
                    "on:begin": d.isTrulyOpeningTag,
                    end: d.end
                  }
                ],
                subLanguage: "xml",
                contains: [
                  {
                    begin: d.begin,
                    end: d.end,
                    skip: true,
                    contains: ["self"]
                  }
                ]
              }
            ]
          },
          I,
          {
            beginKeywords: "while if switch catch for"
          },
          {
            begin: "\\b(?!function)" + o.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: true,
            label: "func.def",
            contains: [
              R,
              o.inherit(o.TITLE_MODE, {
                begin: b,
                className: "title.function"
              })
            ]
          },
          { match: /\.\.\./, relevance: 0 },
          C,
          { match: "\\$" + b, relevance: 0 },
          {
            match: [/\bconstructor(?=\s*\()/],
            className: { 1: "title.function" },
            contains: [R]
          },
          x,
          {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: "variable.constant"
          },
          O,
          M,
          { match: /\$[(.]/ }
        ]
      };
    };
  })();
  hljs.registerLanguage("javascript", e);
})();
/*! `json` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    return (e2) => {
      const a = ["true", "false", "null"], s = {
        scope: "literal",
        beginKeywords: a.join(" ")
      };
      return {
        name: "JSON",
        aliases: ["jsonc"],
        keywords: { literal: a },
        contains: [
          {
            className: "attr",
            begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
            relevance: 1.01
          },
          { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
          e2.QUOTE_STRING_MODE,
          s,
          e2.C_NUMBER_MODE,
          e2.C_LINE_COMMENT_MODE,
          e2.C_BLOCK_COMMENT_MODE
        ],
        illegal: "\\S"
      };
    };
  })();
  hljs.registerLanguage("json", e);
})();
/*! `scss` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    const e2 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "optgroup",
      "option",
      "p",
      "picture",
      "q",
      "quote",
      "samp",
      "section",
      "select",
      "source",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
      "defs",
      "g",
      "marker",
      "mask",
      "pattern",
      "svg",
      "switch",
      "symbol",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feFlood",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMorphology",
      "feOffset",
      "feSpecularLighting",
      "feTile",
      "feTurbulence",
      "linearGradient",
      "radialGradient",
      "stop",
      "circle",
      "ellipse",
      "image",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "text",
      "use",
      "textPath",
      "tspan",
      "foreignObject",
      "clipPath"
    ], r = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ].sort().reverse(), t = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where"
    ].sort().reverse(), i = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error"
    ].sort().reverse(), o = [
      "accent-color",
      "align-content",
      "align-items",
      "align-self",
      "alignment-baseline",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "cx",
      "cy",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "color-scheme",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "empty-cells",
      "enable-background",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "flood-color",
      "flood-opacity",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "kerning",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "lighting-color",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "mask",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "r",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "rotate",
      "row-gap",
      "scale",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-anchor",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-offset",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "vector-effect",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "x",
      "y",
      "z-index"
    ].sort().reverse();
    return (n) => {
      const a = ((e3) => ({
        IMPORTANT: { scope: "meta", begin: "!important" },
        BLOCK_COMMENT: e3.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [e3.APOS_STRING_MODE, e3.QUOTE_STRING_MODE]
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin: e3.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z_][A-Za-z0-9_-]*/
        }
      }))(n), l = i, s = t, d = "@[a-z-]+", c = {
        className: "variable",
        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
        relevance: 0
      };
      return {
        name: "SCSS",
        case_insensitive: true,
        illegal: "[=/|']",
        contains: [
          n.C_LINE_COMMENT_MODE,
          n.C_BLOCK_COMMENT_MODE,
          a.CSS_NUMBER_MODE,
          {
            className: "selector-id",
            begin: "#[A-Za-z0-9_-]+",
            relevance: 0
          },
          {
            className: "selector-class",
            begin: "\\.[A-Za-z0-9_-]+",
            relevance: 0
          },
          a.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-tag",
            begin: "\\b(" + e2.join("|") + ")\\b",
            relevance: 0
          },
          { className: "selector-pseudo", begin: ":(" + s.join("|") + ")" },
          { className: "selector-pseudo", begin: ":(:)?(" + l.join("|") + ")" },
          c,
          { begin: /\(/, end: /\)/, contains: [a.CSS_NUMBER_MODE] },
          a.CSS_VARIABLE,
          { className: "attribute", begin: "\\b(" + o.join("|") + ")\\b" },
          {
            begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
          },
          {
            begin: /:/,
            end: /[;}{]/,
            relevance: 0,
            contains: [
              a.BLOCK_COMMENT,
              c,
              a.HEXCOLOR,
              a.CSS_NUMBER_MODE,
              n.QUOTE_STRING_MODE,
              n.APOS_STRING_MODE,
              a.IMPORTANT,
              a.FUNCTION_DISPATCH
            ]
          },
          {
            begin: "@(page|font-face)",
            keywords: { $pattern: d, keyword: "@page @font-face" }
          },
          {
            begin: "@",
            end: "[{;]",
            returnBegin: true,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: "and or not only",
              attribute: r.join(" ")
            },
            contains: [
              { begin: d, className: "keyword" },
              { begin: /[a-z-]+(?=:)/, className: "attribute" },
              c,
              n.QUOTE_STRING_MODE,
              n.APOS_STRING_MODE,
              a.HEXCOLOR,
              a.CSS_NUMBER_MODE
            ]
          },
          a.FUNCTION_DISPATCH
        ]
      };
    };
  })();
  hljs.registerLanguage("scss", e);
})();
/*! `typescript` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    const e2 = "[A-Za-z$_][0-9A-Za-z$_]*", n = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ], a = ["true", "false", "null", "undefined", "NaN", "Infinity"], t = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly"
    ], s = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ], r = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ], c = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "sessionStorage",
      "module",
      "global"
    ], i = [].concat(r, t, s);
    function o(o2) {
      const l = o2.regex, d = e2, b = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (e3, n2) => {
          const a2 = e3[0].length + e3.index, t2 = e3.input[a2];
          if ("<" === t2 || "," === t2) return void n2.ignoreMatch();
          let s2;
          ">" === t2 && (((e4, { after: n3 }) => {
            const a3 = "</" + e4[0].slice(1);
            return -1 !== e4.input.indexOf(a3, n3);
          })(e3, { after: a2 }) || n2.ignoreMatch());
          const r2 = e3.input.substring(a2);
          ((s2 = r2.match(/^\s*=/)) || (s2 = r2.match(/^\s+extends\s+/)) && 0 === s2.index) && n2.ignoreMatch();
        }
      }, g = {
        $pattern: e2,
        keyword: n,
        literal: a,
        built_in: i,
        "variable.language": c
      }, u = "[0-9](_?[0-9])*", m = `\\.(${u})`, E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", A = {
        className: "number",
        variants: [
          {
            begin: `(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`
          },
          {
            begin: `\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`
          },
          {
            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
          },
          {
            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          },
          {
            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          {
            begin: "\\b0[0-7]+n?\\b"
          }
        ],
        relevance: 0
      }, y = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: g,
        contains: []
      }, p = {
        begin: ".?html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o2.BACKSLASH_ESCAPE, y],
          subLanguage: "xml"
        }
      }, N = {
        begin: ".?css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o2.BACKSLASH_ESCAPE, y],
          subLanguage: "css"
        }
      }, f = {
        begin: ".?gql`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [o2.BACKSLASH_ESCAPE, y],
          subLanguage: "graphql"
        }
      }, _ = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [o2.BACKSLASH_ESCAPE, y]
      }, h = {
        className: "comment",
        variants: [
          o2.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: true,
                    excludeBegin: true,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: d + "(?=\\s*(-)|$)",
                    endsParent: true,
                    relevance: 0
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 }
                ]
              }
            ]
          }),
          o2.C_BLOCK_COMMENT_MODE,
          o2.C_LINE_COMMENT_MODE
        ]
      }, S = [
        o2.APOS_STRING_MODE,
        o2.QUOTE_STRING_MODE,
        p,
        N,
        f,
        _,
        { match: /\$\d+/ },
        A
      ];
      y.contains = S.concat({
        begin: /\{/,
        end: /\}/,
        keywords: g,
        contains: ["self"].concat(S)
      });
      const v = [].concat(h, y.contains), w = v.concat([
        {
          begin: /(\s*)\(/,
          end: /\)/,
          keywords: g,
          contains: ["self"].concat(v)
        }
      ]), R = {
        className: "params",
        begin: /(\s*)\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: g,
        contains: w
      }, k = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              d,
              /\s+/,
              /extends/,
              /\s+/,
              l.concat(d, "(", l.concat(/\./, d), ")*")
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          },
          {
            match: [/class/, /\s+/, d],
            scope: { 1: "keyword", 3: "title.class" }
          }
        ]
      }, x = {
        relevance: 0,
        match: l.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...t, ...s] }
      }, O = {
        variants: [
          {
            match: [/function/, /\s+/, d, /(?=\s*\()/]
          },
          { match: [/function/, /\s*(?=\()/] }
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [R],
        illegal: /%/
      }, I = {
        match: l.concat(
          /\b/,
          (C = [...r, "super", "import"].map((e3) => e3 + "\\s*\\("), l.concat("(?!", C.join("|"), ")")),
          d,
          l.lookahead(/\s*\(/)
        ),
        className: "title.function",
        relevance: 0
      };
      var C;
      const T = {
        begin: l.concat(/\./, l.lookahead(l.concat(d, /(?![0-9A-Za-z$_(])/))),
        end: d,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
      }, M = {
        match: [/get|set/, /\s+/, d, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, R]
      }, B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o2.UNDERSCORE_IDENT_RE + ")\\s*=>", $ = {
        match: [
          /const|var|let/,
          /\s+/,
          d,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          l.lookahead(B)
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [R]
      };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: g,
        exports: {
          PARAMS_CONTAINS: w,
          CLASS_REFERENCE: x
        },
        illegal: /#(?![$_A-z])/,
        contains: [
          o2.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
          {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          o2.APOS_STRING_MODE,
          o2.QUOTE_STRING_MODE,
          p,
          N,
          f,
          _,
          h,
          { match: /\$\d+/ },
          A,
          x,
          {
            className: "attr",
            begin: d + l.lookahead(":"),
            relevance: 0
          },
          $,
          {
            begin: "(" + o2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            relevance: 0,
            contains: [
              h,
              o2.REGEXP_MODE,
              {
                className: "function",
                begin: B,
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      { begin: o2.UNDERSCORE_IDENT_RE, relevance: 0 },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /(\s*)\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: g,
                        contains: w
                      }
                    ]
                  }
                ]
              },
              { begin: /,/, relevance: 0 },
              { match: /\s+/, relevance: 0 },
              {
                variants: [
                  { begin: "<>", end: "</>" },
                  {
                    match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                  },
                  {
                    begin: b.begin,
                    "on:begin": b.isTrulyOpeningTag,
                    end: b.end
                  }
                ],
                subLanguage: "xml",
                contains: [
                  {
                    begin: b.begin,
                    end: b.end,
                    skip: true,
                    contains: ["self"]
                  }
                ]
              }
            ]
          },
          O,
          {
            beginKeywords: "while if switch catch for"
          },
          {
            begin: "\\b(?!function)" + o2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: true,
            label: "func.def",
            contains: [
              R,
              o2.inherit(o2.TITLE_MODE, {
                begin: d,
                className: "title.function"
              })
            ]
          },
          { match: /\.\.\./, relevance: 0 },
          T,
          { match: "\\$" + d, relevance: 0 },
          {
            match: [/\bconstructor(?=\s*\()/],
            className: { 1: "title.function" },
            contains: [R]
          },
          I,
          {
            relevance: 0,
            match: /\b[A-Z][A-Z_0-9]+\b/,
            className: "variable.constant"
          },
          k,
          M,
          { match: /\$[(.]/ }
        ]
      };
    }
    return (t2) => {
      const s2 = o(t2), r2 = e2, l = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "symbol",
        "bigint",
        "unknown"
      ], d = {
        begin: [/namespace/, /\s+/, t2.IDENT_RE],
        beginScope: { 1: "keyword", 3: "title.class" }
      }, b = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: true,
        keywords: {
          keyword: "interface extends",
          built_in: l
        },
        contains: [s2.exports.CLASS_REFERENCE]
      }, g = {
        $pattern: e2,
        keyword: n.concat([
          "type",
          "interface",
          "public",
          "private",
          "protected",
          "implements",
          "declare",
          "abstract",
          "readonly",
          "enum",
          "override",
          "satisfies"
        ]),
        literal: a,
        built_in: i.concat(l),
        "variable.language": c
      }, u = { className: "meta", begin: "@" + r2 }, m = (e3, n2, a2) => {
        const t3 = e3.contains.findIndex((e4) => e4.label === n2);
        if (-1 === t3) throw Error("can not find mode to replace");
        e3.contains.splice(t3, 1, a2);
      };
      Object.assign(s2.keywords, g), s2.exports.PARAMS_CONTAINS.push(u);
      const E = s2.contains.find((e3) => "attr" === e3.className);
      return s2.exports.PARAMS_CONTAINS.push([s2.exports.CLASS_REFERENCE, E]), s2.contains = s2.contains.concat([u, d, b]), m(s2, "shebang", t2.SHEBANG()), m(s2, "use_strict", {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      }), s2.contains.find((e3) => "func.def" === e3.label).relevance = 0, Object.assign(s2, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), s2;
    };
  })();
  hljs.registerLanguage("typescript", e);
})();
/*! `xml` grammar compiled for Highlight.js 11.10.0 */
(() => {
  var e = (() => {
    "use strict";
    return (e2) => {
      const a = e2.regex, n = a.concat(
        /[\p{L}_]/u,
        a.optional(/[\p{L}0-9_.-]*:/u),
        /[\p{L}0-9_.-]*/u
      ), s = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      }, t = {
        begin: /\s/,
        contains: [
          {
            className: "keyword",
            begin: /#?[a-z_][a-z1-9_-]+/,
            illegal: /\n/
          }
        ]
      }, i = e2.inherit(t, { begin: /\(/, end: /\)/ }), c = e2.inherit(e2.APOS_STRING_MODE, {
        className: "string"
      }), l = e2.inherit(e2.QUOTE_STRING_MODE, { className: "string" }), r = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [
          { className: "attr", begin: /[\p{L}0-9._:-]+/u, relevance: 0 },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: "string",
                endsParent: true,
                variants: [
                  { begin: /"/, end: /"/, contains: [s] },
                  {
                    begin: /'/,
                    end: /'/,
                    contains: [s]
                  },
                  { begin: /[^\s"'=<>`]+/ }
                ]
              }
            ]
          }
        ]
      };
      return {
        name: "HTML, XML",
        aliases: [
          "html",
          "xhtml",
          "rss",
          "atom",
          "xjb",
          "xsd",
          "xsl",
          "plist",
          "wsf",
          "svg"
        ],
        case_insensitive: true,
        unicodeRegex: true,
        contains: [
          {
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            relevance: 10,
            contains: [
              t,
              l,
              c,
              i,
              {
                begin: /\[/,
                end: /\]/,
                contains: [
                  {
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    contains: [t, i, l, c]
                  }
                ]
              }
            ]
          },
          e2.COMMENT(/<!--/, /-->/, { relevance: 10 }),
          { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
          s,
          {
            className: "meta",
            end: /\?>/,
            variants: [
              { begin: /<\?xml/, relevance: 10, contains: [l] },
              { begin: /<\?[a-z][a-z0-9]+/ }
            ]
          },
          {
            className: "tag",
            begin: /<style(?=\s|>)/,
            end: />/,
            keywords: { name: "style" },
            contains: [r],
            starts: {
              end: /<\/style>/,
              returnEnd: true,
              subLanguage: ["css", "xml"]
            }
          },
          {
            className: "tag",
            begin: /<script(?=\s|>)/,
            end: />/,
            keywords: { name: "script" },
            contains: [r],
            starts: {
              end: /<\/script>/,
              returnEnd: true,
              subLanguage: ["javascript", "handlebars", "xml"]
            }
          },
          {
            className: "tag",
            begin: /<>|<\/>/
          },
          {
            className: "tag",
            begin: a.concat(
              /</,
              a.lookahead(a.concat(n, a.either(/\/>/, />/, /\s/)))
            ),
            end: /\/?>/,
            contains: [
              { className: "name", begin: n, relevance: 0, starts: r }
            ]
          },
          {
            className: "tag",
            begin: a.concat(/<\//, a.lookahead(a.concat(n, />/))),
            contains: [
              {
                className: "name",
                begin: n,
                relevance: 0
              },
              { begin: />/, relevance: 0, endsParent: true }
            ]
          }
        ]
      };
    };
  })();
  hljs.registerLanguage("xml", e);
})();
//# sourceMappingURL=scripts.js.map
