"use strict";
(self.webpackChunkc3_components_docs =
  self.webpackChunkc3_components_docs || []).push([
  [179],
  {
    845: (He, se, T) => {
      var _ = T(1481),
        M = T(9197),
        P = T(4650),
        K = T(4859);
      let Q = (() => {
        class w {}
        return (
          (w.ɵfac = function (u) {
            return new (u || w)();
          }),
          (w.ɵcmp = P.Xpm({
            type: w,
            selectors: [["ng-component"]],
            decls: 10,
            vars: 0,
            consts: [
              [1, "primary"],
              [1, "docs-header-section"],
              [1, "docs-header-section__title"],
              [1, "docs-header-section__nav"],
              [
                "mat-raised-button",
                "",
                "routerLink",
                "/guide/getting-started",
                "routerLinkActive",
                "docs-navbar-item-selected",
              ],
            ],
            template: function (u, b) {
              1 & u &&
                (P.TgZ(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1"),
                P._uU(4, "c3 Components"),
                P.qZA(),
                P.TgZ(5, "h4"),
                P._uU(6, "Extension components for angular Material"),
                P.qZA()(),
                P.TgZ(7, "div", 3)(8, "a", 4),
                P._uU(9, "Get started"),
                P.qZA()()()());
            },
            dependencies: [M.rH, M.Od, K.zs],
            styles: [
              "header[_ngcontent-%COMP%]{height:420px;position:relative}header[_ngcontent-%COMP%]   .docs-header-section[_ngcontent-%COMP%]{width:90%;position:absolute;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}header[_ngcontent-%COMP%]   .docs-header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;font-weight:700;margin-bottom:0}header[_ngcontent-%COMP%]   .docs-header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .docs-header-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:inherit}",
            ],
          })),
          w
        );
      })();
      var Y = T(6895),
        te = T(3238);
      const q = [
        { path: "", component: Q },
        {
          path: "components",
          loadChildren: () =>
            T.e(838)
              .then(T.bind(T, 7838))
              .then((w) => w.ComponentsModule),
        },
        {
          path: "not-found",
          component: (() => {
            class w {}
            return (
              (w.ɵfac = function (u) {
                return new (u || w)();
              }),
              (w.ɵcmp = P.Xpm({
                type: w,
                selectors: [["ng-component"]],
                standalone: !0,
                features: [P.jDz],
                decls: 28,
                vars: 0,
                consts: [
                  [1, "wrapper"],
                  [
                    "version",
                    "1.1",
                    "xmlns",
                    "http://www.w3.org/2000/svg",
                    0,
                    "xmlns",
                    "xlink",
                    "http://www.w3.org/1999/xlink",
                    "viewBox",
                    "0 0 200 200",
                    0,
                    "xml",
                    "space",
                    "preserve",
                  ],
                  ["id", "color-variation"],
                  [
                    "type",
                    "matrix",
                    "values",
                    "1.1 0 0 0 0\n                                                0 1.5 0 0 0\n                                                0 0 1.2 0 0\n                                                0 0 0 1 0",
                  ],
                  [
                    "d",
                    "M5.7,33.2L98.8,0l95.5,32.6l-15.4,123.1L98.8,200L20,156.3L5.7,33.2z",
                    1,
                    "shield-left",
                  ],
                  [
                    "d",
                    "M194.3,32.6L98.8,0v200l80.1-44.3L194.3,32.6L194.3,32.6z",
                    "filter",
                    "url(#color-variation)",
                    1,
                    "shield-right",
                  ],
                  ["cx", "61.7", "cy", "80", "r", "10.7", 1, "eye"],
                  ["cx", "138.3", "cy", "80", "r", "10.7", 1, "eye"],
                  [
                    "stroke-width",
                    "10",
                    "stroke-linecap",
                    "round",
                    "fill",
                    "none",
                    "d",
                    "M138,130.6c0,0-33.5-42.5-76,0",
                    1,
                    "frown",
                  ],
                  [
                    "routerlink",
                    "/",
                    "mat-raised-button",
                    "",
                    "color",
                    "primary",
                    "href",
                    "/",
                    "aria-disabled",
                    "false",
                    1,
                    "mdc-button",
                    "mdc-button--raised",
                    "mat-mdc-raised-button",
                    "mat-primary",
                    "mat-mdc-button-base",
                  ],
                  [1, "mat-mdc-button-persistent-ripple", "mdc-button__ripple"],
                  [1, "mdc-button__label"],
                  [1, "mat-mdc-focus-indicator"],
                  ["matripple", "", 1, "mat-ripple", "mat-mdc-button-ripple"],
                  [1, "mat-mdc-button-touch-target"],
                  [
                    "routerlink",
                    "/guides",
                    "mat-raised-button",
                    "",
                    "aria-disabled",
                    "false",
                    1,
                    "mdc-button",
                    "mdc-button--raised",
                    "mat-mdc-raised-button",
                    "mat-unthemed",
                    "mat-mdc-button-base",
                  ],
                ],
                template: function (u, b) {
                  1 & u &&
                    (P.TgZ(0, "div", 0),
                    P.O4$(),
                    P.TgZ(1, "svg", 1)(2, "filter", 2),
                    P._UZ(3, "feColorMatrix", 3),
                    P.qZA(),
                    P._UZ(4, "path", 4)(5, "path", 5)(6, "circle", 6)(
                      7,
                      "circle",
                      7,
                    )(8, "path", 8),
                    P.qZA(),
                    P.kcU(),
                    P.TgZ(9, "div")(10, "h1"),
                    P._uU(11, "Page Not Found"),
                    P.qZA(),
                    P.TgZ(12, "p"),
                    P._uU(
                      13,
                      "We're sorry. The page you are looking for cannot be found.",
                    ),
                    P.qZA(),
                    P.TgZ(14, "a", 9),
                    P._UZ(15, "span", 10),
                    P.TgZ(16, "span", 11),
                    P._uU(17, "Go Home"),
                    P.qZA(),
                    P._UZ(18, "span", 12)(19, "span", 13)(20, "span", 14),
                    P.qZA(),
                    P.TgZ(21, "a", 15),
                    P._UZ(22, "span", 10),
                    P.TgZ(23, "span", 11),
                    P._uU(24, "Read Guides"),
                    P.qZA(),
                    P._UZ(25, "span", 12)(26, "span", 13)(27, "span", 14),
                    P.qZA()()());
                },
                dependencies: [Y.ez, K.ot, K.zs, M.Bz, te.si],
                styles: [
                  ".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:64px}.wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:300px;max-width:100%;margin-right:32px}.wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .shield-left[_ngcontent-%COMP%]{fill:var(--primary-color)}.wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .shield-right[_ngcontent-%COMP%]{fill:var(--primary-color)}.wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]{fill:var(--background-card)}.wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .frown[_ngcontent-%COMP%]{stroke:var(--background-card)}",
                ],
              })),
              w
            );
          })(),
        },
        { path: "**", redirectTo: "not-found" },
      ];
      let X = (() => {
        class w {}
        return (
          (w.ɵfac = function (u) {
            return new (u || w)();
          }),
          (w.ɵmod = P.oAB({ type: w })),
          (w.ɵinj = P.cJS({ imports: [M.Bz.forRoot(q), M.Bz] })),
          w
        );
      })();
      var G = T(7340);
      function Ee(w) {
        return new P.vHH(3e3, !1);
      }
      function sn() {
        return typeof window < "u" && typeof window.document < "u";
      }
      function jn() {
        return (
          typeof process < "u" &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function an(w) {
        switch (w.length) {
          case 0:
            return new G.ZN();
          case 1:
            return w[0];
          default:
            return new G.ZE(w);
        }
      }
      function tr(w, c, u, b, I = new Map(), F = new Map()) {
        const B = [],
          j = [];
        let re = -1,
          he = null;
        if (
          (b.forEach((Ue) => {
            const Xe = Ue.get("offset"),
              dt = Xe == re,
              yt = (dt && he) || new Map();
            Ue.forEach((ze, Dt) => {
              let Ut = Dt,
                Wt = ze;
              if ("offset" !== Dt)
                switch (((Ut = c.normalizePropertyName(Ut, B)), Wt)) {
                  case G.k1:
                    Wt = I.get(Dt);
                    break;
                  case G.l3:
                    Wt = F.get(Dt);
                    break;
                  default:
                    Wt = c.normalizeStyleValue(Dt, Ut, Wt, B);
                }
              yt.set(Ut, Wt);
            }),
              dt || j.push(yt),
              (he = yt),
              (re = Xe);
          }),
          B.length)
        )
          throw (function le(w) {
            return new P.vHH(3502, !1);
          })();
        return j;
      }
      function qt(w, c, u, b) {
        switch (c) {
          case "start":
            w.onStart(() => b(u && Le(u, "start", w)));
            break;
          case "done":
            w.onDone(() => b(u && Le(u, "done", w)));
            break;
          case "destroy":
            w.onDestroy(() => b(u && Le(u, "destroy", w)));
        }
      }
      function Le(w, c, u) {
        const F = tn(
            w.element,
            w.triggerName,
            w.fromState,
            w.toState,
            c || w.phaseName,
            u.totalTime ?? w.totalTime,
            !!u.disabled,
          ),
          B = w._data;
        return null != B && (F._data = B), F;
      }
      function tn(w, c, u, b, I = "", F = 0, B) {
        return {
          element: w,
          triggerName: c,
          fromState: u,
          toState: b,
          phaseName: I,
          totalTime: F,
          disabled: !!B,
        };
      }
      function Zt(w, c, u) {
        let b = w.get(c);
        return b || w.set(c, (b = u)), b;
      }
      function cn(w) {
        const c = w.indexOf(":");
        return [w.substring(1, c), w.slice(c + 1)];
      }
      let Yn = (w, c) => !1,
        nr = (w, c, u) => [],
        Vt = null;
      function jt(w) {
        const c = w.parentNode || w.host;
        return c === Vt ? null : c;
      }
      (jn() || typeof Element < "u") &&
        (sn()
          ? ((Vt = (() => document.documentElement)()),
            (Yn = (w, c) => {
              for (; c; ) {
                if (c === w) return !0;
                c = jt(c);
              }
              return !1;
            }))
          : (Yn = (w, c) => w.contains(c)),
        (nr = (w, c, u) => {
          if (u) return Array.from(w.querySelectorAll(c));
          const b = w.querySelector(c);
          return b ? [b] : [];
        }));
      let hn = null,
        Pn = !1;
      const Rr = Yn,
        Pt = nr;
      let _t = (() => {
          class w {
            validateStyleProperty(u) {
              return (function zt(w) {
                hn ||
                  ((hn =
                    (function nn() {
                      return typeof document < "u" ? document.body : null;
                    })() || {}),
                  (Pn = !!hn.style && "WebkitAppearance" in hn.style));
                let c = !0;
                return (
                  hn.style &&
                    !(function ct(w) {
                      return "ebkit" == w.substring(1, 6);
                    })(w) &&
                    ((c = w in hn.style),
                    !c &&
                      Pn &&
                      (c =
                        "Webkit" + w.charAt(0).toUpperCase() + w.slice(1) in
                        hn.style)),
                  c
                );
              })(u);
            }
            matchesElement(u, b) {
              return !1;
            }
            containsElement(u, b) {
              return Rr(u, b);
            }
            getParentElement(u) {
              return jt(u);
            }
            query(u, b, I) {
              return Pt(u, b, I);
            }
            computeStyle(u, b, I) {
              return I || "";
            }
            animate(u, b, I, F, B, j = [], re) {
              return new G.ZN(I, F);
            }
          }
          return (
            (w.ɵfac = function (u) {
              return new (u || w)();
            }),
            (w.ɵprov = P.Yz7({ token: w, factory: w.ɵfac })),
            w
          );
        })(),
        or = (() => {
          class w {}
          return (w.NOOP = new _t()), w;
        })();
      const ye = 1e3,
        be = "ng-enter",
        Qe = "ng-leave",
        wt = "ng-trigger",
        Bt = ".ng-trigger",
        Sn = "ng-animating",
        ir = ".ng-animating";
      function Ht(w) {
        if ("number" == typeof w) return w;
        const c = w.match(/^(-?[\.\d]+)(m?s)/);
        return !c || c.length < 2 ? 0 : Ft(parseFloat(c[1]), c[2]);
      }
      function Ft(w, c) {
        return "s" === c ? w * ye : w;
      }
      function rn(w, c, u) {
        return w.hasOwnProperty("duration")
          ? w
          : (function ln(w, c, u) {
              let I,
                F = 0,
                B = "";
              if ("string" == typeof w) {
                const j = w.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
                );
                if (null === j)
                  return c.push(Ee()), { duration: 0, delay: 0, easing: "" };
                I = Ft(parseFloat(j[1]), j[2]);
                const re = j[3];
                null != re && (F = Ft(parseFloat(re), j[4]));
                const he = j[5];
                he && (B = he);
              } else I = w;
              if (!u) {
                let j = !1,
                  re = c.length;
                I < 0 &&
                  (c.push(
                    (function de() {
                      return new P.vHH(3100, !1);
                    })(),
                  ),
                  (j = !0)),
                  F < 0 &&
                    (c.push(
                      (function Te() {
                        return new P.vHH(3101, !1);
                      })(),
                    ),
                    (j = !0)),
                  j && c.splice(re, 0, Ee());
              }
              return { duration: I, delay: F, easing: B };
            })(w, c, u);
      }
      function bt(w, c = {}) {
        return (
          Object.keys(w).forEach((u) => {
            c[u] = w[u];
          }),
          c
        );
      }
      function ee(w) {
        const c = new Map();
        return (
          Object.keys(w).forEach((u) => {
            c.set(u, w[u]);
          }),
          c
        );
      }
      function C(w, c = new Map(), u) {
        if (u) for (let [b, I] of u) c.set(b, I);
        for (let [b, I] of w) c.set(b, I);
        return c;
      }
      function N(w, c, u) {
        return u ? c + ":" + u + ";" : "";
      }
      function W(w) {
        let c = "";
        for (let u = 0; u < w.style.length; u++) {
          const b = w.style.item(u);
          c += N(0, b, w.style.getPropertyValue(b));
        }
        for (const u in w.style)
          w.style.hasOwnProperty(u) &&
            !u.startsWith("_") &&
            (c += N(0, xt(u), w.style[u]));
        w.setAttribute("style", c);
      }
      function pe(w, c, u) {
        w.style &&
          (c.forEach((b, I) => {
            const F = br(I);
            u && !u.has(I) && u.set(I, w.style[F]), (w.style[F] = b);
          }),
          jn() && W(w));
      }
      function $e(w, c) {
        w.style &&
          (c.forEach((u, b) => {
            const I = br(b);
            w.style[I] = "";
          }),
          jn() && W(w));
      }
      function ut(w) {
        return Array.isArray(w) ? (1 == w.length ? w[0] : (0, G.vP)(w)) : w;
      }
      const xn = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Kr(w) {
        let c = [];
        if ("string" == typeof w) {
          let u;
          for (; (u = xn.exec(w)); ) c.push(u[1]);
          xn.lastIndex = 0;
        }
        return c;
      }
      function Pr(w, c, u) {
        const b = w.toString(),
          I = b.replace(xn, (F, B) => {
            let j = c[B];
            return (
              null == j &&
                (u.push(
                  (function De(w) {
                    return new P.vHH(3003, !1);
                  })(),
                ),
                (j = "")),
              j.toString()
            );
          });
        return I == b ? w : I;
      }
      function Yr(w) {
        const c = [];
        let u = w.next();
        for (; !u.done; ) c.push(u.value), (u = w.next());
        return c;
      }
      const _r = /-+([a-z0-9])/g;
      function br(w) {
        return w.replace(_r, (...c) => c[1].toUpperCase());
      }
      function xt(w) {
        return w.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Xt(w, c, u) {
        switch (c.type) {
          case 7:
            return w.visitTrigger(c, u);
          case 0:
            return w.visitState(c, u);
          case 1:
            return w.visitTransition(c, u);
          case 2:
            return w.visitSequence(c, u);
          case 3:
            return w.visitGroup(c, u);
          case 4:
            return w.visitAnimate(c, u);
          case 5:
            return w.visitKeyframes(c, u);
          case 6:
            return w.visitStyle(c, u);
          case 8:
            return w.visitReference(c, u);
          case 9:
            return w.visitAnimateChild(c, u);
          case 10:
            return w.visitAnimateRef(c, u);
          case 11:
            return w.visitQuery(c, u);
          case 12:
            return w.visitStagger(c, u);
          default:
            throw (function st(w) {
              return new P.vHH(3004, !1);
            })();
        }
      }
      function on(w, c) {
        return window.getComputedStyle(w)[c];
      }
      const gn = "*";
      function yr(w, c) {
        const u = [];
        return (
          "string" == typeof w
            ? w.split(/\s*,\s*/).forEach((b) =>
                (function un(w, c, u) {
                  if (":" == w[0]) {
                    const re = (function sr(w, c) {
                      switch (w) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (u, b) => parseFloat(b) > parseFloat(u);
                        case ":decrement":
                          return (u, b) => parseFloat(b) < parseFloat(u);
                        default:
                          return (
                            c.push(
                              (function ce(w) {
                                return new P.vHH(3016, !1);
                              })(),
                            ),
                            "* => *"
                          );
                      }
                    })(w, u);
                    if ("function" == typeof re) return void c.push(re);
                    w = re;
                  }
                  const b = w.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == b || b.length < 4)
                    return (
                      u.push(
                        (function ae(w) {
                          return new P.vHH(3015, !1);
                        })(),
                      ),
                      c
                    );
                  const I = b[1],
                    F = b[2],
                    B = b[3];
                  c.push(ar(I, B));
                  "<" == F[0] && !(I == gn && B == gn) && c.push(ar(B, I));
                })(b, u, c),
              )
            : u.push(w),
          u
        );
      }
      const Ot = new Set(["true", "1"]),
        dn = new Set(["false", "0"]);
      function ar(w, c) {
        const u = Ot.has(w) || dn.has(w),
          b = Ot.has(c) || dn.has(c);
        return (I, F) => {
          let B = w == gn || w == I,
            j = c == gn || c == F;
          return (
            !B && u && "boolean" == typeof I && (B = I ? Ot.has(w) : dn.has(w)),
            !j && b && "boolean" == typeof F && (j = F ? Ot.has(c) : dn.has(c)),
            B && j
          );
        };
      }
      const Fr = new RegExp("s*:selfs*,?", "g");
      function Qn(w, c, u, b) {
        return new Nr(w).build(c, u, b);
      }
      class Nr {
        constructor(c) {
          this._driver = c;
        }
        build(c, u, b) {
          const I = new Lr(u);
          return this._resetContextStyleTimingState(I), Xt(this, ut(c), I);
        }
        _resetContextStyleTimingState(c) {
          (c.currentQuerySelector = ""),
            (c.collectedStyles = new Map()),
            c.collectedStyles.set("", new Map()),
            (c.currentTime = 0);
        }
        visitTrigger(c, u) {
          let b = (u.queryCount = 0),
            I = (u.depCount = 0);
          const F = [],
            B = [];
          return (
            "@" == c.name.charAt(0) &&
              u.errors.push(
                (function Be() {
                  return new P.vHH(3006, !1);
                })(),
              ),
            c.definitions.forEach((j) => {
              if ((this._resetContextStyleTimingState(u), 0 == j.type)) {
                const re = j,
                  he = re.name;
                he
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((Ue) => {
                    (re.name = Ue), F.push(this.visitState(re, u));
                  }),
                  (re.name = he);
              } else if (1 == j.type) {
                const re = this.visitTransition(j, u);
                (b += re.queryCount), (I += re.depCount), B.push(re);
              } else
                u.errors.push(
                  (function oe() {
                    return new P.vHH(3007, !1);
                  })(),
                );
            }),
            {
              type: 7,
              name: c.name,
              states: F,
              transitions: B,
              queryCount: b,
              depCount: I,
              options: null,
            }
          );
        }
        visitState(c, u) {
          const b = this.visitStyle(c.styles, u),
            I = (c.options && c.options.params) || null;
          if (b.containsDynamicStyles) {
            const F = new Set(),
              B = I || {};
            b.styles.forEach((j) => {
              j instanceof Map &&
                j.forEach((re) => {
                  Kr(re).forEach((he) => {
                    B.hasOwnProperty(he) || F.add(he);
                  });
                });
            }),
              F.size &&
                (Yr(F.values()),
                u.errors.push(
                  (function U(w, c) {
                    return new P.vHH(3008, !1);
                  })(),
                ));
          }
          return {
            type: 0,
            name: c.name,
            style: b,
            options: I ? { params: I } : null,
          };
        }
        visitTransition(c, u) {
          (u.queryCount = 0), (u.depCount = 0);
          const b = Xt(this, ut(c.animation), u);
          return {
            type: 1,
            matchers: yr(c.expr, u.errors),
            animation: b,
            queryCount: u.queryCount,
            depCount: u.depCount,
            options: vr(c.options),
          };
        }
        visitSequence(c, u) {
          return {
            type: 2,
            steps: c.steps.map((b) => Xt(this, b, u)),
            options: vr(c.options),
          };
        }
        visitGroup(c, u) {
          const b = u.currentTime;
          let I = 0;
          const F = c.steps.map((B) => {
            u.currentTime = b;
            const j = Xt(this, B, u);
            return (I = Math.max(I, u.currentTime)), j;
          });
          return (
            (u.currentTime = I), { type: 3, steps: F, options: vr(c.options) }
          );
        }
        visitAnimate(c, u) {
          const b = (function qr(w, c) {
            if (w.hasOwnProperty("duration")) return w;
            if ("number" == typeof w) return Gt(rn(w, c).duration, 0, "");
            const u = w;
            if (
              u
                .split(/\s+/)
                .some((F) => "{" == F.charAt(0) && "{" == F.charAt(1))
            ) {
              const F = Gt(0, 0, "");
              return (F.dynamic = !0), (F.strValue = u), F;
            }
            const I = rn(u, c);
            return Gt(I.duration, I.delay, I.easing);
          })(c.timings, u.errors);
          u.currentAnimateTimings = b;
          let I,
            F = c.styles ? c.styles : (0, G.oB)({});
          if (5 == F.type) I = this.visitKeyframes(F, u);
          else {
            let B = c.styles,
              j = !1;
            if (!B) {
              j = !0;
              const he = {};
              b.easing && (he.easing = b.easing), (B = (0, G.oB)(he));
            }
            u.currentTime += b.duration + b.delay;
            const re = this.visitStyle(B, u);
            (re.isEmptyStep = j), (I = re);
          }
          return (
            (u.currentAnimateTimings = null),
            { type: 4, timings: b, style: I, options: null }
          );
        }
        visitStyle(c, u) {
          const b = this._makeStyleAst(c, u);
          return this._validateStyleAst(b, u), b;
        }
        _makeStyleAst(c, u) {
          const b = [],
            I = Array.isArray(c.styles) ? c.styles : [c.styles];
          for (let j of I)
            "string" == typeof j
              ? j === G.l3
                ? b.push(j)
                : u.errors.push(new P.vHH(3002, !1))
              : b.push(ee(j));
          let F = !1,
            B = null;
          return (
            b.forEach((j) => {
              if (
                j instanceof Map &&
                (j.has("easing") && ((B = j.get("easing")), j.delete("easing")),
                !F)
              )
                for (let re of j.values())
                  if (re.toString().indexOf("{{") >= 0) {
                    F = !0;
                    break;
                  }
            }),
            {
              type: 6,
              styles: b,
              easing: B,
              offset: c.offset,
              containsDynamicStyles: F,
              options: null,
            }
          );
        }
        _validateStyleAst(c, u) {
          const b = u.currentAnimateTimings;
          let I = u.currentTime,
            F = u.currentTime;
          b && F > 0 && (F -= b.duration + b.delay),
            c.styles.forEach((B) => {
              "string" != typeof B &&
                B.forEach((j, re) => {
                  const he = u.collectedStyles.get(u.currentQuerySelector),
                    Ue = he.get(re);
                  let Xe = !0;
                  Ue &&
                    (F != I &&
                      F >= Ue.startTime &&
                      I <= Ue.endTime &&
                      (u.errors.push(
                        (function Ie(w, c, u, b, I) {
                          return new P.vHH(3010, !1);
                        })(),
                      ),
                      (Xe = !1)),
                    (F = Ue.startTime)),
                    Xe && he.set(re, { startTime: F, endTime: I }),
                    u.options &&
                      (function Tn(w, c, u) {
                        const b = c.params || {},
                          I = Kr(w);
                        I.length &&
                          I.forEach((F) => {
                            b.hasOwnProperty(F) ||
                              u.push(
                                (function Ye(w) {
                                  return new P.vHH(3001, !1);
                                })(),
                              );
                          });
                      })(j, u.options, u.errors);
                });
            });
        }
        visitKeyframes(c, u) {
          const b = { type: 5, styles: [], options: null };
          if (!u.currentAnimateTimings)
            return (
              u.errors.push(
                (function xe() {
                  return new P.vHH(3011, !1);
                })(),
              ),
              b
            );
          let F = 0;
          const B = [];
          let j = !1,
            re = !1,
            he = 0;
          const Ue = c.steps.map((Wt) => {
            const En = this._makeStyleAst(Wt, u);
            let Hn =
                null != En.offset
                  ? En.offset
                  : (function cr(w) {
                      if ("string" == typeof w) return null;
                      let c = null;
                      if (Array.isArray(w))
                        w.forEach((u) => {
                          if (u instanceof Map && u.has("offset")) {
                            const b = u;
                            (c = parseFloat(b.get("offset"))),
                              b.delete("offset");
                          }
                        });
                      else if (w instanceof Map && w.has("offset")) {
                        const u = w;
                        (c = parseFloat(u.get("offset"))), u.delete("offset");
                      }
                      return c;
                    })(En.styles),
              On = 0;
            return (
              null != Hn && (F++, (On = En.offset = Hn)),
              (re = re || On < 0 || On > 1),
              (j = j || On < he),
              (he = On),
              B.push(On),
              En
            );
          });
          re &&
            u.errors.push(
              (function rt() {
                return new P.vHH(3012, !1);
              })(),
            ),
            j &&
              u.errors.push(
                (function at() {
                  return new P.vHH(3200, !1);
                })(),
              );
          const Xe = c.steps.length;
          let dt = 0;
          F > 0 && F < Xe
            ? u.errors.push(
                (function nt() {
                  return new P.vHH(3202, !1);
                })(),
              )
            : 0 == F && (dt = 1 / (Xe - 1));
          const yt = Xe - 1,
            ze = u.currentTime,
            Dt = u.currentAnimateTimings,
            Ut = Dt.duration;
          return (
            Ue.forEach((Wt, En) => {
              const Hn = dt > 0 ? (En == yt ? 1 : dt * En) : B[En],
                On = Hn * Ut;
              (u.currentTime = ze + Dt.delay + On),
                (Dt.duration = On),
                this._validateStyleAst(Wt, u),
                (Wt.offset = Hn),
                b.styles.push(Wt);
            }),
            b
          );
        }
        visitReference(c, u) {
          return {
            type: 8,
            animation: Xt(this, ut(c.animation), u),
            options: vr(c.options),
          };
        }
        visitAnimateChild(c, u) {
          return u.depCount++, { type: 9, options: vr(c.options) };
        }
        visitAnimateRef(c, u) {
          return {
            type: 10,
            animation: this.visitReference(c.animation, u),
            options: vr(c.options),
          };
        }
        visitQuery(c, u) {
          const b = u.currentQuerySelector,
            I = c.options || {};
          u.queryCount++, (u.currentQuery = c);
          const [F, B] = (function An(w) {
            const c = !!w.split(/\s*,\s*/).find((u) => ":self" == u);
            return (
              c && (w = w.replace(Fr, "")),
              (w = w
                .replace(/@\*/g, Bt)
                .replace(/@\w+/g, (u) => Bt + "-" + u.slice(1))
                .replace(/:animating/g, ir)),
              [w, c]
            );
          })(c.selector);
          (u.currentQuerySelector = b.length ? b + " " + F : F),
            Zt(u.collectedStyles, u.currentQuerySelector, new Map());
          const j = Xt(this, ut(c.animation), u);
          return (
            (u.currentQuery = null),
            (u.currentQuerySelector = b),
            {
              type: 11,
              selector: F,
              limit: I.limit || 0,
              optional: !!I.optional,
              includeSelf: B,
              animation: j,
              originalSelector: c.selector,
              options: vr(c.options),
            }
          );
        }
        visitStagger(c, u) {
          u.currentQuery ||
            u.errors.push(
              (function Tt() {
                return new P.vHH(3013, !1);
              })(),
            );
          const b =
            "full" === c.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : rn(c.timings, u.errors, !0);
          return {
            type: 12,
            animation: Xt(this, ut(c.animation), u),
            timings: b,
            options: null,
          };
        }
      }
      class Lr {
        constructor(c) {
          (this.errors = c),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = new Map()),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function vr(w) {
        return (
          w
            ? (w = bt(w)).params &&
              (w.params = (function yi(w) {
                return w ? bt(w) : null;
              })(w.params))
            : (w = {}),
          w
        );
      }
      function Gt(w, c, u) {
        return { duration: w, delay: c, easing: u };
      }
      function qn(w, c, u, b, I, F, B = null, j = !1) {
        return {
          type: 1,
          element: w,
          keyframes: c,
          preStyleProps: u,
          postStyleProps: b,
          duration: I,
          delay: F,
          totalTime: I + F,
          easing: B,
          subTimeline: j,
        };
      }
      class Xr {
        constructor() {
          this._map = new Map();
        }
        get(c) {
          return this._map.get(c) || [];
        }
        append(c, u) {
          let b = this._map.get(c);
          b || this._map.set(c, (b = [])), b.push(...u);
        }
        has(c) {
          return this._map.has(c);
        }
        clear() {
          this._map.clear();
        }
      }
      const vi = new RegExp(":enter", "g"),
        Fn = new RegExp(":leave", "g");
      function uo(w, c, u, b, I, F = new Map(), B = new Map(), j, re, he = []) {
        return new zn().buildKeyframes(w, c, u, b, I, F, B, j, re, he);
      }
      class zn {
        buildKeyframes(c, u, b, I, F, B, j, re, he, Ue = []) {
          he = he || new Xr();
          const Xe = new Br(c, u, he, I, F, Ue, []);
          Xe.options = re;
          const dt = re.delay ? Ht(re.delay) : 0;
          Xe.currentTimeline.delayNextStep(dt),
            Xe.currentTimeline.setStyles([B], null, Xe.errors, re),
            Xt(this, b, Xe);
          const yt = Xe.timelines.filter((ze) => ze.containsAnimation());
          if (yt.length && j.size) {
            let ze;
            for (let Dt = yt.length - 1; Dt >= 0; Dt--) {
              const Ut = yt[Dt];
              if (Ut.element === u) {
                ze = Ut;
                break;
              }
            }
            ze &&
              !ze.allowOnlyTimelineStyles() &&
              ze.setStyles([j], null, Xe.errors, re);
          }
          return yt.length
            ? yt.map((ze) => ze.buildKeyframes())
            : [qn(u, [], [], [], 0, dt, "", !1)];
        }
        visitTrigger(c, u) {}
        visitState(c, u) {}
        visitTransition(c, u) {}
        visitAnimateChild(c, u) {
          const b = u.subInstructions.get(u.element);
          if (b) {
            const I = u.createSubContext(c.options),
              F = u.currentTimeline.currentTime,
              B = this._visitSubInstructions(b, I, I.options);
            F != B && u.transformIntoNewTimeline(B);
          }
          u.previousNode = c;
        }
        visitAnimateRef(c, u) {
          const b = u.createSubContext(c.options);
          b.transformIntoNewTimeline(),
            this._applyAnimationRefDelays(
              [c.options, c.animation.options],
              u,
              b,
            ),
            this.visitReference(c.animation, b),
            u.transformIntoNewTimeline(b.currentTimeline.currentTime),
            (u.previousNode = c);
        }
        _applyAnimationRefDelays(c, u, b) {
          for (const I of c) {
            const F = I?.delay;
            if (F) {
              const B =
                "number" == typeof F ? F : Ht(Pr(F, I?.params ?? {}, u.errors));
              b.delayNextStep(B);
            }
          }
        }
        _visitSubInstructions(c, u, b) {
          let F = u.currentTimeline.currentTime;
          const B = null != b.duration ? Ht(b.duration) : null,
            j = null != b.delay ? Ht(b.delay) : null;
          return (
            0 !== B &&
              c.forEach((re) => {
                const he = u.appendInstructionToTimeline(re, B, j);
                F = Math.max(F, he.duration + he.delay);
              }),
            F
          );
        }
        visitReference(c, u) {
          u.updateOptions(c.options, !0),
            Xt(this, c.animation, u),
            (u.previousNode = c);
        }
        visitSequence(c, u) {
          const b = u.subContextCount;
          let I = u;
          const F = c.options;
          if (
            F &&
            (F.params || F.delay) &&
            ((I = u.createSubContext(F)),
            I.transformIntoNewTimeline(),
            null != F.delay)
          ) {
            6 == I.previousNode.type &&
              (I.currentTimeline.snapshotCurrentStyles(),
              (I.previousNode = Nn));
            const B = Ht(F.delay);
            I.delayNextStep(B);
          }
          c.steps.length &&
            (c.steps.forEach((B) => Xt(this, B, I)),
            I.currentTimeline.applyStylesToKeyframe(),
            I.subContextCount > b && I.transformIntoNewTimeline()),
            (u.previousNode = c);
        }
        visitGroup(c, u) {
          const b = [];
          let I = u.currentTimeline.currentTime;
          const F = c.options && c.options.delay ? Ht(c.options.delay) : 0;
          c.steps.forEach((B) => {
            const j = u.createSubContext(c.options);
            F && j.delayNextStep(F),
              Xt(this, B, j),
              (I = Math.max(I, j.currentTimeline.currentTime)),
              b.push(j.currentTimeline);
          }),
            b.forEach((B) => u.currentTimeline.mergeTimelineCollectedStyles(B)),
            u.transformIntoNewTimeline(I),
            (u.previousNode = c);
        }
        _visitTiming(c, u) {
          if (c.dynamic) {
            const b = c.strValue;
            return rn(u.params ? Pr(b, u.params, u.errors) : b, u.errors);
          }
          return { duration: c.duration, delay: c.delay, easing: c.easing };
        }
        visitAnimate(c, u) {
          const b = (u.currentAnimateTimings = this._visitTiming(c.timings, u)),
            I = u.currentTimeline;
          b.delay && (u.incrementTime(b.delay), I.snapshotCurrentStyles());
          const F = c.style;
          5 == F.type
            ? this.visitKeyframes(F, u)
            : (u.incrementTime(b.duration),
              this.visitStyle(F, u),
              I.applyStylesToKeyframe()),
            (u.currentAnimateTimings = null),
            (u.previousNode = c);
        }
        visitStyle(c, u) {
          const b = u.currentTimeline,
            I = u.currentAnimateTimings;
          !I && b.hasCurrentStyleProperties() && b.forwardFrame();
          const F = (I && I.easing) || c.easing;
          c.isEmptyStep
            ? b.applyEmptyStep(F)
            : b.setStyles(c.styles, F, u.errors, u.options),
            (u.previousNode = c);
        }
        visitKeyframes(c, u) {
          const b = u.currentAnimateTimings,
            I = u.currentTimeline.duration,
            F = b.duration,
            j = u.createSubContext().currentTimeline;
          (j.easing = b.easing),
            c.styles.forEach((re) => {
              j.forwardTime((re.offset || 0) * F),
                j.setStyles(re.styles, re.easing, u.errors, u.options),
                j.applyStylesToKeyframe();
            }),
            u.currentTimeline.mergeTimelineCollectedStyles(j),
            u.transformIntoNewTimeline(I + F),
            (u.previousNode = c);
        }
        visitQuery(c, u) {
          const b = u.currentTimeline.currentTime,
            I = c.options || {},
            F = I.delay ? Ht(I.delay) : 0;
          F &&
            (6 === u.previousNode.type ||
              (0 == b && u.currentTimeline.hasCurrentStyleProperties())) &&
            (u.currentTimeline.snapshotCurrentStyles(), (u.previousNode = Nn));
          let B = b;
          const j = u.invokeQuery(
            c.selector,
            c.originalSelector,
            c.limit,
            c.includeSelf,
            !!I.optional,
            u.errors,
          );
          u.currentQueryTotal = j.length;
          let re = null;
          j.forEach((he, Ue) => {
            u.currentQueryIndex = Ue;
            const Xe = u.createSubContext(c.options, he);
            F && Xe.delayNextStep(F),
              he === u.element && (re = Xe.currentTimeline),
              Xt(this, c.animation, Xe),
              Xe.currentTimeline.applyStylesToKeyframe(),
              (B = Math.max(B, Xe.currentTimeline.currentTime));
          }),
            (u.currentQueryIndex = 0),
            (u.currentQueryTotal = 0),
            u.transformIntoNewTimeline(B),
            re &&
              (u.currentTimeline.mergeTimelineCollectedStyles(re),
              u.currentTimeline.snapshotCurrentStyles()),
            (u.previousNode = c);
        }
        visitStagger(c, u) {
          const b = u.parentContext,
            I = u.currentTimeline,
            F = c.timings,
            B = Math.abs(F.duration),
            j = B * (u.currentQueryTotal - 1);
          let re = B * u.currentQueryIndex;
          switch (F.duration < 0 ? "reverse" : F.easing) {
            case "reverse":
              re = j - re;
              break;
            case "full":
              re = b.currentStaggerTime;
          }
          const Ue = u.currentTimeline;
          re && Ue.delayNextStep(re);
          const Xe = Ue.currentTime;
          Xt(this, c.animation, u),
            (u.previousNode = c),
            (b.currentStaggerTime =
              I.currentTime - Xe + (I.startTime - b.currentTimeline.startTime));
        }
      }
      const Nn = {};
      class Br {
        constructor(c, u, b, I, F, B, j, re) {
          (this._driver = c),
            (this.element = u),
            (this.subInstructions = b),
            (this._enterClassName = I),
            (this._leaveClassName = F),
            (this.errors = B),
            (this.timelines = j),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Nn),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = re || new lr(this._driver, u, 0)),
            j.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(c, u) {
          if (!c) return;
          const b = c;
          let I = this.options;
          null != b.duration && (I.duration = Ht(b.duration)),
            null != b.delay && (I.delay = Ht(b.delay));
          const F = b.params;
          if (F) {
            let B = I.params;
            B || (B = this.options.params = {}),
              Object.keys(F).forEach((j) => {
                (!u || !B.hasOwnProperty(j)) &&
                  (B[j] = Pr(F[j], B, this.errors));
              });
          }
        }
        _copyOptions() {
          const c = {};
          if (this.options) {
            const u = this.options.params;
            if (u) {
              const b = (c.params = {});
              Object.keys(u).forEach((I) => {
                b[I] = u[I];
              });
            }
          }
          return c;
        }
        createSubContext(c = null, u, b) {
          const I = u || this.element,
            F = new Br(
              this._driver,
              I,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(I, b || 0),
            );
          return (
            (F.previousNode = this.previousNode),
            (F.currentAnimateTimings = this.currentAnimateTimings),
            (F.options = this._copyOptions()),
            F.updateOptions(c),
            (F.currentQueryIndex = this.currentQueryIndex),
            (F.currentQueryTotal = this.currentQueryTotal),
            (F.parentContext = this),
            this.subContextCount++,
            F
          );
        }
        transformIntoNewTimeline(c) {
          return (
            (this.previousNode = Nn),
            (this.currentTimeline = this.currentTimeline.fork(this.element, c)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(c, u, b) {
          const I = {
              duration: u ?? c.duration,
              delay: this.currentTimeline.currentTime + (b ?? 0) + c.delay,
              easing: "",
            },
            F = new Xn(
              this._driver,
              c.element,
              c.keyframes,
              c.preStyleProps,
              c.postStyleProps,
              I,
              c.stretchStartingKeyframe,
            );
          return this.timelines.push(F), I;
        }
        incrementTime(c) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + c);
        }
        delayNextStep(c) {
          c > 0 && this.currentTimeline.delayNextStep(c);
        }
        invokeQuery(c, u, b, I, F, B) {
          let j = [];
          if ((I && j.push(this.element), c.length > 0)) {
            c = (c = c.replace(vi, "." + this._enterClassName)).replace(
              Fn,
              "." + this._leaveClassName,
            );
            let he = this._driver.query(this.element, c, 1 != b);
            0 !== b &&
              (he =
                b < 0 ? he.slice(he.length + b, he.length) : he.slice(0, b)),
              j.push(...he);
          }
          return (
            !F &&
              0 == j.length &&
              B.push(
                (function Ze(w) {
                  return new P.vHH(3014, !1);
                })(),
              ),
            j
          );
        }
      }
      class lr {
        constructor(c, u, b, I) {
          (this._driver = c),
            (this.element = u),
            (this.startTime = b),
            (this._elementTimelineStylesLookup = I),
            (this.duration = 0),
            (this.easing = null),
            (this._previousKeyframe = new Map()),
            (this._currentKeyframe = new Map()),
            (this._keyframes = new Map()),
            (this._styleSummary = new Map()),
            (this._localTimelineStyles = new Map()),
            (this._pendingStyles = new Map()),
            (this._backFill = new Map()),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(u)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                u,
                this._localTimelineStyles,
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.hasCurrentStyleProperties();
            default:
              return !0;
          }
        }
        hasCurrentStyleProperties() {
          return this._currentKeyframe.size > 0;
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(c) {
          const u = 1 === this._keyframes.size && this._pendingStyles.size;
          this.duration || u
            ? (this.forwardTime(this.currentTime + c),
              u && this.snapshotCurrentStyles())
            : (this.startTime += c);
        }
        fork(c, u) {
          return (
            this.applyStylesToKeyframe(),
            new lr(
              this._driver,
              c,
              u || this.currentTime,
              this._elementTimelineStylesLookup,
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = new Map()),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(c) {
          this.applyStylesToKeyframe(),
            (this.duration = c),
            this._loadKeyframe();
        }
        _updateStyle(c, u) {
          this._localTimelineStyles.set(c, u),
            this._globalTimelineStyles.set(c, u),
            this._styleSummary.set(c, { time: this.currentTime, value: u });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(c) {
          c && this._previousKeyframe.set("easing", c);
          for (let [u, b] of this._globalTimelineStyles)
            this._backFill.set(u, b || G.l3),
              this._currentKeyframe.set(u, G.l3);
          this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        setStyles(c, u, b, I) {
          u && this._previousKeyframe.set("easing", u);
          const F = (I && I.params) || {},
            B = (function fo(w, c) {
              const u = new Map();
              let b;
              return (
                w.forEach((I) => {
                  if ("*" === I) {
                    b = b || c.keys();
                    for (let F of b) u.set(F, G.l3);
                  } else C(I, u);
                }),
                u
              );
            })(c, this._globalTimelineStyles);
          for (let [j, re] of B) {
            const he = Pr(re, F, b);
            this._pendingStyles.set(j, he),
              this._localTimelineStyles.has(j) ||
                this._backFill.set(
                  j,
                  this._globalTimelineStyles.get(j) ?? G.l3,
                ),
              this._updateStyle(j, he);
          }
        }
        applyStylesToKeyframe() {
          0 != this._pendingStyles.size &&
            (this._pendingStyles.forEach((c, u) => {
              this._currentKeyframe.set(u, c);
            }),
            this._pendingStyles.clear(),
            this._localTimelineStyles.forEach((c, u) => {
              this._currentKeyframe.has(u) || this._currentKeyframe.set(u, c);
            }));
        }
        snapshotCurrentStyles() {
          for (let [c, u] of this._localTimelineStyles)
            this._pendingStyles.set(c, u), this._updateStyle(c, u);
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const c = [];
          for (let u in this._currentKeyframe) c.push(u);
          return c;
        }
        mergeTimelineCollectedStyles(c) {
          c._styleSummary.forEach((u, b) => {
            const I = this._styleSummary.get(b);
            (!I || u.time > I.time) && this._updateStyle(b, u.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const c = new Set(),
            u = new Set(),
            b = 1 === this._keyframes.size && 0 === this.duration;
          let I = [];
          this._keyframes.forEach((j, re) => {
            const he = C(j, new Map(), this._backFill);
            he.forEach((Ue, Xe) => {
              Ue === G.k1 ? c.add(Xe) : Ue === G.l3 && u.add(Xe);
            }),
              b || he.set("offset", re / this.duration),
              I.push(he);
          });
          const F = c.size ? Yr(c.values()) : [],
            B = u.size ? Yr(u.values()) : [];
          if (b) {
            const j = I[0],
              re = new Map(j);
            j.set("offset", 0), re.set("offset", 1), (I = [j, re]);
          }
          return qn(
            this.element,
            I,
            F,
            B,
            this.duration,
            this.startTime,
            this.easing,
            !1,
          );
        }
      }
      class Xn extends lr {
        constructor(c, u, b, I, F, B, j = !1) {
          super(c, u, B.delay),
            (this.keyframes = b),
            (this.preStyleProps = I),
            (this.postStyleProps = F),
            (this._stretchStartingKeyframe = j),
            (this.timings = {
              duration: B.duration,
              delay: B.delay,
              easing: B.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let c = this.keyframes,
            { delay: u, duration: b, easing: I } = this.timings;
          if (this._stretchStartingKeyframe && u) {
            const F = [],
              B = b + u,
              j = u / B,
              re = C(c[0]);
            re.set("offset", 0), F.push(re);
            const he = C(c[0]);
            he.set("offset", yn(j)), F.push(he);
            const Ue = c.length - 1;
            for (let Xe = 1; Xe <= Ue; Xe++) {
              let dt = C(c[Xe]);
              const yt = dt.get("offset");
              dt.set("offset", yn((u + yt * b) / B)), F.push(dt);
            }
            (b = B), (u = 0), (I = ""), (c = F);
          }
          return qn(
            this.element,
            c,
            this.preStyleProps,
            this.postStyleProps,
            b,
            u,
            I,
            !0,
          );
        }
      }
      function yn(w, c = 3) {
        const u = Math.pow(10, c - 1);
        return Math.round(w * u) / u;
      }
      class zi {}
      const So = new Set([
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
        "left",
        "top",
        "bottom",
        "right",
        "fontSize",
        "outlineWidth",
        "outlineOffset",
        "paddingTop",
        "paddingLeft",
        "paddingBottom",
        "paddingRight",
        "marginTop",
        "marginLeft",
        "marginBottom",
        "marginRight",
        "borderRadius",
        "borderWidth",
        "borderTopWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "textIndent",
        "perspective",
      ]);
      class Xo extends zi {
        normalizePropertyName(c, u) {
          return br(c);
        }
        normalizeStyleValue(c, u, b, I) {
          let F = "";
          const B = b.toString().trim();
          if (So.has(u) && 0 !== b && "0" !== b)
            if ("number" == typeof b) F = "px";
            else {
              const j = b.match(/^[+-]?[\d\.]+([a-z]*)$/);
              j &&
                0 == j[1].length &&
                I.push(
                  (function Oe(w, c) {
                    return new P.vHH(3005, !1);
                  })(),
                );
            }
          return B + F;
        }
      }
      function si(w, c, u, b, I, F, B, j, re, he, Ue, Xe, dt) {
        return {
          type: 0,
          element: w,
          triggerName: c,
          isRemovalTransition: I,
          fromState: u,
          fromStyles: F,
          toState: b,
          toStyles: B,
          timelines: j,
          queriedElements: re,
          preStyleProps: he,
          postStyleProps: Ue,
          totalTime: Xe,
          errors: dt,
        };
      }
      const Gi = {};
      class Wi {
        constructor(c, u, b) {
          (this._triggerName = c), (this.ast = u), (this._stateStyles = b);
        }
        match(c, u, b, I) {
          return (function Di(w, c, u, b, I) {
            return w.some((F) => F(c, u, b, I));
          })(this.ast.matchers, c, u, b, I);
        }
        buildStyles(c, u, b) {
          let I = this._stateStyles.get("*");
          return (
            void 0 !== c && (I = this._stateStyles.get(c?.toString()) || I),
            I ? I.buildStyles(u, b) : new Map()
          );
        }
        build(c, u, b, I, F, B, j, re, he, Ue) {
          const Xe = [],
            dt = (this.ast.options && this.ast.options.params) || Gi,
            ze = this.buildStyles(b, (j && j.params) || Gi, Xe),
            Dt = (re && re.params) || Gi,
            Ut = this.buildStyles(I, Dt, Xe),
            Wt = new Set(),
            En = new Map(),
            Hn = new Map(),
            On = "void" === I,
            xr = { params: Ei(Dt, dt), delay: this.ast.options?.delay },
            Wn = Ue
              ? []
              : uo(c, u, this.ast.animation, F, B, ze, Ut, xr, he, Xe);
          let wn = 0;
          if (
            (Wn.forEach((D) => {
              wn = Math.max(D.duration + D.delay, wn);
            }),
            Xe.length)
          )
            return si(
              u,
              this._triggerName,
              b,
              I,
              On,
              ze,
              Ut,
              [],
              [],
              En,
              Hn,
              wn,
              Xe,
            );
          Wn.forEach((D) => {
            const g = D.element,
              x = Zt(En, g, new Set());
            D.preStyleProps.forEach((ie) => x.add(ie));
            const k = Zt(Hn, g, new Set());
            D.postStyleProps.forEach((ie) => k.add(ie)), g !== u && Wt.add(g);
          });
          const h = Yr(Wt.values());
          return si(u, this._triggerName, b, I, On, ze, Ut, Wn, h, En, Hn, wn);
        }
      }
      function Ei(w, c) {
        const u = bt(c);
        for (const b in w) w.hasOwnProperty(b) && null != w[b] && (u[b] = w[b]);
        return u;
      }
      class Fs {
        constructor(c, u, b) {
          (this.styles = c), (this.defaultParams = u), (this.normalizer = b);
        }
        buildStyles(c, u) {
          const b = new Map(),
            I = bt(this.defaultParams);
          return (
            Object.keys(c).forEach((F) => {
              const B = c[F];
              null !== B && (I[F] = B);
            }),
            this.styles.styles.forEach((F) => {
              "string" != typeof F &&
                F.forEach((B, j) => {
                  B && (B = Pr(B, I, u));
                  const re = this.normalizer.normalizePropertyName(j, u);
                  (B = this.normalizer.normalizeStyleValue(j, re, B, u)),
                    b.set(j, B);
                });
            }),
            b
          );
        }
      }
      class es {
        constructor(c, u, b) {
          (this.name = c),
            (this.ast = u),
            (this._normalizer = b),
            (this.transitionFactories = []),
            (this.states = new Map()),
            u.states.forEach((I) => {
              this.states.set(
                I.name,
                new Fs(I.style, (I.options && I.options.params) || {}, b),
              );
            }),
            ai(this.states, "true", "1"),
            ai(this.states, "false", "0"),
            u.transitions.forEach((I) => {
              this.transitionFactories.push(new Wi(c, I, this.states));
            }),
            (this.fallbackTransition = (function To(w, c, u) {
              return new Wi(
                w,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(B, j) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                c,
              );
            })(c, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(c, u, b, I) {
          return (
            this.transitionFactories.find((B) => B.match(c, u, b, I)) || null
          );
        }
        matchStyles(c, u, b) {
          return this.fallbackTransition.buildStyles(c, u, b);
        }
      }
      function ai(w, c, u) {
        w.has(c)
          ? w.has(u) || w.set(u, w.get(c))
          : w.has(u) && w.set(c, w.get(u));
      }
      const Yi = new Xr();
      class xo {
        constructor(c, u, b) {
          (this.bodyNode = c),
            (this._driver = u),
            (this._normalizer = b),
            (this._animations = new Map()),
            (this._playersById = new Map()),
            (this.players = []);
        }
        register(c, u) {
          const b = [],
            I = [],
            F = Qn(this._driver, u, b, I);
          if (b.length)
            throw (function Me(w) {
              return new P.vHH(3503, !1);
            })();
          this._animations.set(c, F);
        }
        _buildPlayer(c, u, b) {
          const I = c.element,
            F = tr(0, this._normalizer, 0, c.keyframes, u, b);
          return this._driver.animate(
            I,
            F,
            c.duration,
            c.delay,
            c.easing,
            [],
            !0,
          );
        }
        create(c, u, b = {}) {
          const I = [],
            F = this._animations.get(c);
          let B;
          const j = new Map();
          if (
            (F
              ? ((B = uo(
                  this._driver,
                  u,
                  F,
                  be,
                  Qe,
                  new Map(),
                  new Map(),
                  b,
                  Yi,
                  I,
                )),
                B.forEach((Ue) => {
                  const Xe = Zt(j, Ue.element, new Map());
                  Ue.postStyleProps.forEach((dt) => Xe.set(dt, null));
                }))
              : (I.push(
                  (function ue() {
                    return new P.vHH(3300, !1);
                  })(),
                ),
                (B = [])),
            I.length)
          )
            throw (function Fe(w) {
              return new P.vHH(3504, !1);
            })();
          j.forEach((Ue, Xe) => {
            Ue.forEach((dt, yt) => {
              Ue.set(yt, this._driver.computeStyle(Xe, yt, G.l3));
            });
          });
          const he = an(
            B.map((Ue) => {
              const Xe = j.get(Ue.element);
              return this._buildPlayer(Ue, new Map(), Xe);
            }),
          );
          return (
            this._playersById.set(c, he),
            he.onDestroy(() => this.destroy(c)),
            this.players.push(he),
            he
          );
        }
        destroy(c) {
          const u = this._getPlayer(c);
          u.destroy(), this._playersById.delete(c);
          const b = this.players.indexOf(u);
          b >= 0 && this.players.splice(b, 1);
        }
        _getPlayer(c) {
          const u = this._playersById.get(c);
          if (!u)
            throw (function Ge(w) {
              return new P.vHH(3301, !1);
            })();
          return u;
        }
        listen(c, u, b, I) {
          const F = tn(u, "", "", "");
          return qt(this._getPlayer(c), b, F, I), () => {};
        }
        command(c, u, b, I) {
          if ("register" == b) return void this.register(c, I[0]);
          if ("create" == b) return void this.create(c, u, I[0] || {});
          const F = this._getPlayer(c);
          switch (b) {
            case "play":
              F.play();
              break;
            case "pause":
              F.pause();
              break;
            case "reset":
              F.reset();
              break;
            case "restart":
              F.restart();
              break;
            case "finish":
              F.finish();
              break;
            case "init":
              F.init();
              break;
            case "setPosition":
              F.setPosition(parseFloat(I[0]));
              break;
            case "destroy":
              this.destroy(c);
          }
        }
      }
      const ho = "ng-animate-queued",
        Ir = "ng-animate-disabled",
        Oo = [],
        Zi = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Mi = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Gn = "__ng_removed";
      class po {
        get params() {
          return this.options.params;
        }
        constructor(c, u = "") {
          this.namespaceId = u;
          const b = c && c.hasOwnProperty("value");
          if (
            ((this.value = (function xi(w) {
              return w ?? null;
            })(b ? c.value : c)),
            b)
          ) {
            const F = bt(c);
            delete F.value, (this.options = F);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        absorbOptions(c) {
          const u = c.params;
          if (u) {
            const b = this.options.params;
            Object.keys(u).forEach((I) => {
              null == b[I] && (b[I] = u[I]);
            });
          }
        }
      }
      const li = "void",
        Ii = new po(li);
      class ur {
        constructor(c, u, b) {
          (this.id = c),
            (this.hostElement = u),
            (this._engine = b),
            (this.players = []),
            (this._triggers = new Map()),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + c),
            Kt(u, this._hostClassName);
        }
        listen(c, u, b, I) {
          if (!this._triggers.has(u))
            throw (function ft(w, c) {
              return new P.vHH(3302, !1);
            })();
          if (null == b || 0 == b.length)
            throw (function it(w) {
              return new P.vHH(3303, !1);
            })();
          if (
            !(function $t(w) {
              return "start" == w || "done" == w;
            })(b)
          )
            throw (function je(w, c) {
              return new P.vHH(3400, !1);
            })();
          const F = Zt(this._elementListeners, c, []),
            B = { name: u, phase: b, callback: I };
          F.push(B);
          const j = Zt(this._engine.statesByElement, c, new Map());
          return (
            j.has(u) || (Kt(c, wt), Kt(c, wt + "-" + u), j.set(u, Ii)),
            () => {
              this._engine.afterFlush(() => {
                const re = F.indexOf(B);
                re >= 0 && F.splice(re, 1),
                  this._triggers.has(u) || j.delete(u);
              });
            }
          );
        }
        register(c, u) {
          return !this._triggers.has(c) && (this._triggers.set(c, u), !0);
        }
        _getTrigger(c) {
          const u = this._triggers.get(c);
          if (!u)
            throw (function Lt(w) {
              return new P.vHH(3401, !1);
            })();
          return u;
        }
        trigger(c, u, b, I = !0) {
          const F = this._getTrigger(u),
            B = new Ti(this.id, u, c);
          let j = this._engine.statesByElement.get(c);
          j ||
            (Kt(c, wt),
            Kt(c, wt + "-" + u),
            this._engine.statesByElement.set(c, (j = new Map())));
          let re = j.get(u);
          const he = new po(b, this.id);
          if (
            (!(b && b.hasOwnProperty("value")) &&
              re &&
              he.absorbOptions(re.options),
            j.set(u, he),
            re || (re = Ii),
            he.value !== li && re.value === he.value)
          ) {
            if (
              !(function $r(w, c) {
                const u = Object.keys(w),
                  b = Object.keys(c);
                if (u.length != b.length) return !1;
                for (let I = 0; I < u.length; I++) {
                  const F = u[I];
                  if (!c.hasOwnProperty(F) || w[F] !== c[F]) return !1;
                }
                return !0;
              })(re.params, he.params)
            ) {
              const Dt = [],
                Ut = F.matchStyles(re.value, re.params, Dt),
                Wt = F.matchStyles(he.value, he.params, Dt);
              Dt.length
                ? this._engine.reportError(Dt)
                : this._engine.afterFlush(() => {
                    $e(c, Ut), pe(c, Wt);
                  });
            }
            return;
          }
          const dt = Zt(this._engine.playersByElement, c, []);
          dt.forEach((Dt) => {
            Dt.namespaceId == this.id &&
              Dt.triggerName == u &&
              Dt.queued &&
              Dt.destroy();
          });
          let yt = F.matchTransition(re.value, he.value, c, he.params),
            ze = !1;
          if (!yt) {
            if (!I) return;
            (yt = F.fallbackTransition), (ze = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: c,
              triggerName: u,
              transition: yt,
              fromState: re,
              toState: he,
              player: B,
              isFallbackTransition: ze,
            }),
            ze ||
              (Kt(c, ho),
              B.onStart(() => {
                jr(c, ho);
              })),
            B.onDone(() => {
              let Dt = this.players.indexOf(B);
              Dt >= 0 && this.players.splice(Dt, 1);
              const Ut = this._engine.playersByElement.get(c);
              if (Ut) {
                let Wt = Ut.indexOf(B);
                Wt >= 0 && Ut.splice(Wt, 1);
              }
            }),
            this.players.push(B),
            dt.push(B),
            B
          );
        }
        deregister(c) {
          this._triggers.delete(c),
            this._engine.statesByElement.forEach((u) => u.delete(c)),
            this._elementListeners.forEach((u, b) => {
              this._elementListeners.set(
                b,
                u.filter((I) => I.name != c),
              );
            });
        }
        clearElementCache(c) {
          this._engine.statesByElement.delete(c),
            this._elementListeners.delete(c);
          const u = this._engine.playersByElement.get(c);
          u &&
            (u.forEach((b) => b.destroy()),
            this._engine.playersByElement.delete(c));
        }
        _signalRemovalForInnerTriggers(c, u) {
          const b = this._engine.driver.query(c, Bt, !0);
          b.forEach((I) => {
            if (I[Gn]) return;
            const F = this._engine.fetchNamespacesByElement(I);
            F.size
              ? F.forEach((B) => B.triggerLeaveAnimation(I, u, !1, !0))
              : this.clearElementCache(I);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              b.forEach((I) => this.clearElementCache(I)),
            );
        }
        triggerLeaveAnimation(c, u, b, I) {
          const F = this._engine.statesByElement.get(c),
            B = new Map();
          if (F) {
            const j = [];
            if (
              (F.forEach((re, he) => {
                if ((B.set(he, re.value), this._triggers.has(he))) {
                  const Ue = this.trigger(c, he, li, I);
                  Ue && j.push(Ue);
                }
              }),
              j.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, c, !0, u, B),
                b && an(j).onDone(() => this._engine.processLeaveNode(c)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(c) {
          const u = this._elementListeners.get(c),
            b = this._engine.statesByElement.get(c);
          if (u && b) {
            const I = new Set();
            u.forEach((F) => {
              const B = F.name;
              if (I.has(B)) return;
              I.add(B);
              const re = this._triggers.get(B).fallbackTransition,
                he = b.get(B) || Ii,
                Ue = new po(li),
                Xe = new Ti(this.id, B, c);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: c,
                  triggerName: B,
                  transition: re,
                  fromState: he,
                  toState: Ue,
                  player: Xe,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(c, u) {
          const b = this._engine;
          if (
            (c.childElementCount && this._signalRemovalForInnerTriggers(c, u),
            this.triggerLeaveAnimation(c, u, !0))
          )
            return;
          let I = !1;
          if (b.totalAnimations) {
            const F = b.players.length ? b.playersByQueriedElement.get(c) : [];
            if (F && F.length) I = !0;
            else {
              let B = c;
              for (; (B = B.parentNode); )
                if (b.statesByElement.get(B)) {
                  I = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(c), I))
            b.markElementAsRemoved(this.id, c, !1, u);
          else {
            const F = c[Gn];
            (!F || F === Zi) &&
              (b.afterFlush(() => this.clearElementCache(c)),
              b.destroyInnerAnimations(c),
              b._onRemovalComplete(c, u));
          }
        }
        insertNode(c, u) {
          Kt(c, this._hostClassName);
        }
        drainQueuedTransitions(c) {
          const u = [];
          return (
            this._queue.forEach((b) => {
              const I = b.player;
              if (I.destroyed) return;
              const F = b.element,
                B = this._elementListeners.get(F);
              B &&
                B.forEach((j) => {
                  if (j.name == b.triggerName) {
                    const re = tn(
                      F,
                      b.triggerName,
                      b.fromState.value,
                      b.toState.value,
                    );
                    (re._data = c), qt(b.player, j.phase, re, j.callback);
                  }
                }),
                I.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      I.destroy();
                    })
                  : u.push(b);
            }),
            (this._queue = []),
            u.sort((b, I) => {
              const F = b.transition.ast.depCount,
                B = I.transition.ast.depCount;
              return 0 == F || 0 == B
                ? F - B
                : this._engine.driver.containsElement(b.element, I.element)
                  ? 1
                  : -1;
            })
          );
        }
        destroy(c) {
          this.players.forEach((u) => u.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, c);
        }
        elementContainsData(c) {
          let u = !1;
          return (
            this._elementListeners.has(c) && (u = !0),
            (u = !!this._queue.find((b) => b.element === c) || u),
            u
          );
        }
      }
      class Si {
        _onRemovalComplete(c, u) {
          this.onRemovalComplete(c, u);
        }
        constructor(c, u, b) {
          (this.bodyNode = c),
            (this.driver = u),
            (this._normalizer = b),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (I, F) => {});
        }
        get queuedPlayers() {
          const c = [];
          return (
            this._namespaceList.forEach((u) => {
              u.players.forEach((b) => {
                b.queued && c.push(b);
              });
            }),
            c
          );
        }
        createNamespace(c, u) {
          const b = new ur(c, u, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, u)
              ? this._balanceNamespaceList(b, u)
              : (this.newHostElements.set(u, b), this.collectEnterElement(u)),
            (this._namespaceLookup[c] = b)
          );
        }
        _balanceNamespaceList(c, u) {
          const b = this._namespaceList,
            I = this.namespacesByHostElement;
          if (b.length - 1 >= 0) {
            let B = !1,
              j = this.driver.getParentElement(u);
            for (; j; ) {
              const re = I.get(j);
              if (re) {
                const he = b.indexOf(re);
                b.splice(he + 1, 0, c), (B = !0);
                break;
              }
              j = this.driver.getParentElement(j);
            }
            B || b.unshift(c);
          } else b.push(c);
          return I.set(u, c), c;
        }
        register(c, u) {
          let b = this._namespaceLookup[c];
          return b || (b = this.createNamespace(c, u)), b;
        }
        registerTrigger(c, u, b) {
          let I = this._namespaceLookup[c];
          I && I.register(u, b) && this.totalAnimations++;
        }
        destroy(c, u) {
          if (!c) return;
          const b = this._fetchNamespace(c);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(b.hostElement),
              delete this._namespaceLookup[c];
            const I = this._namespaceList.indexOf(b);
            I >= 0 && this._namespaceList.splice(I, 1);
          }),
            this.afterFlushAnimationsDone(() => b.destroy(u));
        }
        _fetchNamespace(c) {
          return this._namespaceLookup[c];
        }
        fetchNamespacesByElement(c) {
          const u = new Set(),
            b = this.statesByElement.get(c);
          if (b)
            for (let I of b.values())
              if (I.namespaceId) {
                const F = this._fetchNamespace(I.namespaceId);
                F && u.add(F);
              }
          return u;
        }
        trigger(c, u, b, I) {
          if (Dr(u)) {
            const F = this._fetchNamespace(c);
            if (F) return F.trigger(u, b, I), !0;
          }
          return !1;
        }
        insertNode(c, u, b, I) {
          if (!Dr(u)) return;
          const F = u[Gn];
          if (F && F.setForRemoval) {
            (F.setForRemoval = !1), (F.setForMove = !0);
            const B = this.collectedLeaveElements.indexOf(u);
            B >= 0 && this.collectedLeaveElements.splice(B, 1);
          }
          if (c) {
            const B = this._fetchNamespace(c);
            B && B.insertNode(u, b);
          }
          I && this.collectEnterElement(u);
        }
        collectEnterElement(c) {
          this.collectedEnterElements.push(c);
        }
        markElementAsDisabled(c, u) {
          u
            ? this.disabledNodes.has(c) ||
              (this.disabledNodes.add(c), Kt(c, Ir))
            : this.disabledNodes.has(c) &&
              (this.disabledNodes.delete(c), jr(c, Ir));
        }
        removeNode(c, u, b, I) {
          if (Dr(u)) {
            const F = c ? this._fetchNamespace(c) : null;
            if (
              (F ? F.removeNode(u, I) : this.markElementAsRemoved(c, u, !1, I),
              b)
            ) {
              const B = this.namespacesByHostElement.get(u);
              B && B.id !== c && B.removeNode(u, I);
            }
          } else this._onRemovalComplete(u, I);
        }
        markElementAsRemoved(c, u, b, I, F) {
          this.collectedLeaveElements.push(u),
            (u[Gn] = {
              namespaceId: c,
              setForRemoval: I,
              hasAnimation: b,
              removedBeforeQueried: !1,
              previousTriggersValues: F,
            });
        }
        listen(c, u, b, I, F) {
          return Dr(u) ? this._fetchNamespace(c).listen(u, b, I, F) : () => {};
        }
        _buildInstruction(c, u, b, I, F) {
          return c.transition.build(
            this.driver,
            c.element,
            c.fromState.value,
            c.toState.value,
            b,
            I,
            c.fromState.options,
            c.toState.options,
            u,
            F,
          );
        }
        destroyInnerAnimations(c) {
          let u = this.driver.query(c, Bt, !0);
          u.forEach((b) => this.destroyActiveAnimationsForElement(b)),
            0 != this.playersByQueriedElement.size &&
              ((u = this.driver.query(c, ir, !0)),
              u.forEach((b) => this.finishActiveQueriedAnimationOnElement(b)));
        }
        destroyActiveAnimationsForElement(c) {
          const u = this.playersByElement.get(c);
          u &&
            u.forEach((b) => {
              b.queued ? (b.markedForDestroy = !0) : b.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(c) {
          const u = this.playersByQueriedElement.get(c);
          u && u.forEach((b) => b.finish());
        }
        whenRenderingDone() {
          return new Promise((c) => {
            if (this.players.length) return an(this.players).onDone(() => c());
            c();
          });
        }
        processLeaveNode(c) {
          const u = c[Gn];
          if (u && u.setForRemoval) {
            if (((c[Gn] = Zi), u.namespaceId)) {
              this.destroyInnerAnimations(c);
              const b = this._fetchNamespace(u.namespaceId);
              b && b.clearElementCache(c);
            }
            this._onRemovalComplete(c, u.setForRemoval);
          }
          c.classList?.contains(Ir) && this.markElementAsDisabled(c, !1),
            this.driver.query(c, ".ng-animate-disabled", !0).forEach((b) => {
              this.markElementAsDisabled(b, !1);
            });
        }
        flush(c = -1) {
          let u = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((b, I) =>
                this._balanceNamespaceList(b, I),
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let b = 0; b < this.collectedEnterElements.length; b++)
              Kt(this.collectedEnterElements[b], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const b = [];
            try {
              u = this._flushAnimations(b, c);
            } finally {
              for (let I = 0; I < b.length; I++) b[I]();
            }
          } else
            for (let b = 0; b < this.collectedLeaveElements.length; b++)
              this.processLeaveNode(this.collectedLeaveElements[b]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((b) => b()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const b = this._whenQuietFns;
            (this._whenQuietFns = []),
              u.length
                ? an(u).onDone(() => {
                    b.forEach((I) => I());
                  })
                : b.forEach((I) => I());
          }
        }
        reportError(c) {
          throw (function In(w) {
            return new P.vHH(3402, !1);
          })();
        }
        _flushAnimations(c, u) {
          const b = new Xr(),
            I = [],
            F = new Map(),
            B = [],
            j = new Map(),
            re = new Map(),
            he = new Map(),
            Ue = new Set();
          this.disabledNodes.forEach((Ae) => {
            Ue.add(Ae);
            const Ne = this.driver.query(Ae, ".ng-animate-queued", !0);
            for (let ke = 0; ke < Ne.length; ke++) Ue.add(Ne[ke]);
          });
          const Xe = this.bodyNode,
            dt = Array.from(this.statesByElement.keys()),
            yt = ei(dt, this.collectedEnterElements),
            ze = new Map();
          let Dt = 0;
          yt.forEach((Ae, Ne) => {
            const ke = be + Dt++;
            ze.set(Ne, ke), Ae.forEach((Je) => Kt(Je, ke));
          });
          const Ut = [],
            Wt = new Set(),
            En = new Set();
          for (let Ae = 0; Ae < this.collectedLeaveElements.length; Ae++) {
            const Ne = this.collectedLeaveElements[Ae],
              ke = Ne[Gn];
            ke &&
              ke.setForRemoval &&
              (Ut.push(Ne),
              Wt.add(Ne),
              ke.hasAnimation
                ? this.driver
                    .query(Ne, ".ng-star-inserted", !0)
                    .forEach((Je) => Wt.add(Je))
                : En.add(Ne));
          }
          const Hn = new Map(),
            On = ei(dt, Array.from(Wt));
          On.forEach((Ae, Ne) => {
            const ke = Qe + Dt++;
            Hn.set(Ne, ke), Ae.forEach((Je) => Kt(Je, ke));
          }),
            c.push(() => {
              yt.forEach((Ae, Ne) => {
                const ke = ze.get(Ne);
                Ae.forEach((Je) => jr(Je, ke));
              }),
                On.forEach((Ae, Ne) => {
                  const ke = Hn.get(Ne);
                  Ae.forEach((Je) => jr(Je, ke));
                }),
                Ut.forEach((Ae) => {
                  this.processLeaveNode(Ae);
                });
            });
          const xr = [],
            Wn = [];
          for (let Ae = this._namespaceList.length - 1; Ae >= 0; Ae--)
            this._namespaceList[Ae].drainQueuedTransitions(u).forEach((ke) => {
              const Je = ke.player,
                St = ke.element;
              if ((xr.push(Je), this.collectedEnterElements.length)) {
                const Yt = St[Gn];
                if (Yt && Yt.setForMove) {
                  if (
                    Yt.previousTriggersValues &&
                    Yt.previousTriggersValues.has(ke.triggerName)
                  ) {
                    const hr = Yt.previousTriggersValues.get(ke.triggerName),
                      Mn = this.statesByElement.get(ke.element);
                    if (Mn && Mn.has(ke.triggerName)) {
                      const Ni = Mn.get(ke.triggerName);
                      (Ni.value = hr), Mn.set(ke.triggerName, Ni);
                    }
                  }
                  return void Je.destroy();
                }
              }
              const Mt = !Xe || !this.driver.containsElement(Xe, St),
                Rt = Hn.get(St),
                Cn = ze.get(St),
                At = this._buildInstruction(ke, b, Cn, Rt, Mt);
              if (At.errors && At.errors.length) return void Wn.push(At);
              if (Mt)
                return (
                  Je.onStart(() => $e(St, At.fromStyles)),
                  Je.onDestroy(() => pe(St, At.toStyles)),
                  void I.push(Je)
                );
              if (ke.isFallbackTransition)
                return (
                  Je.onStart(() => $e(St, At.fromStyles)),
                  Je.onDestroy(() => pe(St, At.toStyles)),
                  void I.push(Je)
                );
              const fr = [];
              At.timelines.forEach((Yt) => {
                (Yt.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(Yt.element) || fr.push(Yt);
              }),
                (At.timelines = fr),
                b.append(St, At.timelines),
                B.push({ instruction: At, player: Je, element: St }),
                At.queriedElements.forEach((Yt) => Zt(j, Yt, []).push(Je)),
                At.preStyleProps.forEach((Yt, hr) => {
                  if (Yt.size) {
                    let Mn = re.get(hr);
                    Mn || re.set(hr, (Mn = new Set())),
                      Yt.forEach((Ni, Li) => Mn.add(Li));
                  }
                }),
                At.postStyleProps.forEach((Yt, hr) => {
                  let Mn = he.get(hr);
                  Mn || he.set(hr, (Mn = new Set())),
                    Yt.forEach((Ni, Li) => Mn.add(Li));
                });
            });
          if (Wn.length) {
            const Ae = [];
            Wn.forEach((Ne) => {
              Ae.push(
                (function bn(w, c) {
                  return new P.vHH(3505, !1);
                })(),
              );
            }),
              xr.forEach((Ne) => Ne.destroy()),
              this.reportError(Ae);
          }
          const wn = new Map(),
            h = new Map();
          B.forEach((Ae) => {
            const Ne = Ae.element;
            b.has(Ne) &&
              (h.set(Ne, Ne),
              this._beforeAnimationBuild(
                Ae.player.namespaceId,
                Ae.instruction,
                wn,
              ));
          }),
            I.forEach((Ae) => {
              const Ne = Ae.element;
              this._getPreviousPlayers(
                Ne,
                !1,
                Ae.namespaceId,
                Ae.triggerName,
                null,
              ).forEach((Je) => {
                Zt(wn, Ne, []).push(Je), Je.destroy();
              });
            });
          const D = Ut.filter((Ae) => Tr(Ae, re, he)),
            g = new Map();
          Ur(g, this.driver, En, he, G.l3).forEach((Ae) => {
            Tr(Ae, re, he) && D.push(Ae);
          });
          const k = new Map();
          yt.forEach((Ae, Ne) => {
            Ur(k, this.driver, new Set(Ae), re, G.k1);
          }),
            D.forEach((Ae) => {
              const Ne = g.get(Ae),
                ke = k.get(Ae);
              g.set(
                Ae,
                new Map([
                  ...Array.from(Ne?.entries() ?? []),
                  ...Array.from(ke?.entries() ?? []),
                ]),
              );
            });
          const ie = [],
            ve = [],
            tt = {};
          B.forEach((Ae) => {
            const { element: Ne, player: ke, instruction: Je } = Ae;
            if (b.has(Ne)) {
              if (Ue.has(Ne))
                return (
                  ke.onDestroy(() => pe(Ne, Je.toStyles)),
                  (ke.disabled = !0),
                  ke.overrideTotalTime(Je.totalTime),
                  void I.push(ke)
                );
              let St = tt;
              if (h.size > 1) {
                let Rt = Ne;
                const Cn = [];
                for (; (Rt = Rt.parentNode); ) {
                  const At = h.get(Rt);
                  if (At) {
                    St = At;
                    break;
                  }
                  Cn.push(Rt);
                }
                Cn.forEach((At) => h.set(At, St));
              }
              const Mt = this._buildAnimation(ke.namespaceId, Je, wn, F, k, g);
              if ((ke.setRealPlayer(Mt), St === tt)) ie.push(ke);
              else {
                const Rt = this.playersByElement.get(St);
                Rt && Rt.length && (ke.parentPlayer = an(Rt)), I.push(ke);
              }
            } else
              $e(Ne, Je.fromStyles),
                ke.onDestroy(() => pe(Ne, Je.toStyles)),
                ve.push(ke),
                Ue.has(Ne) && I.push(ke);
          }),
            ve.forEach((Ae) => {
              const Ne = F.get(Ae.element);
              if (Ne && Ne.length) {
                const ke = an(Ne);
                Ae.setRealPlayer(ke);
              }
            }),
            I.forEach((Ae) => {
              Ae.parentPlayer
                ? Ae.syncPlayerEvents(Ae.parentPlayer)
                : Ae.destroy();
            });
          for (let Ae = 0; Ae < Ut.length; Ae++) {
            const Ne = Ut[Ae],
              ke = Ne[Gn];
            if ((jr(Ne, Qe), ke && ke.hasAnimation)) continue;
            let Je = [];
            if (j.size) {
              let Mt = j.get(Ne);
              Mt && Mt.length && Je.push(...Mt);
              let Rt = this.driver.query(Ne, ir, !0);
              for (let Cn = 0; Cn < Rt.length; Cn++) {
                let At = j.get(Rt[Cn]);
                At && At.length && Je.push(...At);
              }
            }
            const St = Je.filter((Mt) => !Mt.destroyed);
            St.length ? Hr(this, Ne, St) : this.processLeaveNode(Ne);
          }
          return (
            (Ut.length = 0),
            ie.forEach((Ae) => {
              this.players.push(Ae),
                Ae.onDone(() => {
                  Ae.destroy();
                  const Ne = this.players.indexOf(Ae);
                  this.players.splice(Ne, 1);
                }),
                Ae.play();
            }),
            ie
          );
        }
        elementContainsData(c, u) {
          let b = !1;
          const I = u[Gn];
          return (
            I && I.setForRemoval && (b = !0),
            this.playersByElement.has(u) && (b = !0),
            this.playersByQueriedElement.has(u) && (b = !0),
            this.statesByElement.has(u) && (b = !0),
            this._fetchNamespace(c).elementContainsData(u) || b
          );
        }
        afterFlush(c) {
          this._flushFns.push(c);
        }
        afterFlushAnimationsDone(c) {
          this._whenQuietFns.push(c);
        }
        _getPreviousPlayers(c, u, b, I, F) {
          let B = [];
          if (u) {
            const j = this.playersByQueriedElement.get(c);
            j && (B = j);
          } else {
            const j = this.playersByElement.get(c);
            if (j) {
              const re = !F || F == li;
              j.forEach((he) => {
                he.queued || (!re && he.triggerName != I) || B.push(he);
              });
            }
          }
          return (
            (b || I) &&
              (B = B.filter(
                (j) =>
                  !((b && b != j.namespaceId) || (I && I != j.triggerName)),
              )),
            B
          );
        }
        _beforeAnimationBuild(c, u, b) {
          const F = u.element,
            B = u.isRemovalTransition ? void 0 : c,
            j = u.isRemovalTransition ? void 0 : u.triggerName;
          for (const re of u.timelines) {
            const he = re.element,
              Ue = he !== F,
              Xe = Zt(b, he, []);
            this._getPreviousPlayers(he, Ue, B, j, u.toState).forEach((yt) => {
              const ze = yt.getRealPlayer();
              ze.beforeDestroy && ze.beforeDestroy(), yt.destroy(), Xe.push(yt);
            });
          }
          $e(F, u.fromStyles);
        }
        _buildAnimation(c, u, b, I, F, B) {
          const j = u.triggerName,
            re = u.element,
            he = [],
            Ue = new Set(),
            Xe = new Set(),
            dt = u.timelines.map((ze) => {
              const Dt = ze.element;
              Ue.add(Dt);
              const Ut = Dt[Gn];
              if (Ut && Ut.removedBeforeQueried)
                return new G.ZN(ze.duration, ze.delay);
              const Wt = Dt !== re,
                En = (function Ro(w) {
                  const c = [];
                  return Sr(w, c), c;
                })((b.get(Dt) || Oo).map((wn) => wn.getRealPlayer())).filter(
                  (wn) => !!wn.element && wn.element === Dt,
                ),
                Hn = F.get(Dt),
                On = B.get(Dt),
                xr = tr(0, this._normalizer, 0, ze.keyframes, Hn, On),
                Wn = this._buildPlayer(ze, xr, En);
              if ((ze.subTimeline && I && Xe.add(Dt), Wt)) {
                const wn = new Ti(c, j, Dt);
                wn.setRealPlayer(Wn), he.push(wn);
              }
              return Wn;
            });
          he.forEach((ze) => {
            Zt(this.playersByQueriedElement, ze.element, []).push(ze),
              ze.onDone(() =>
                (function vn(w, c, u) {
                  let b = w.get(c);
                  if (b) {
                    if (b.length) {
                      const I = b.indexOf(u);
                      b.splice(I, 1);
                    }
                    0 == b.length && w.delete(c);
                  }
                  return b;
                })(this.playersByQueriedElement, ze.element, ze),
              );
          }),
            Ue.forEach((ze) => Kt(ze, Sn));
          const yt = an(dt);
          return (
            yt.onDestroy(() => {
              Ue.forEach((ze) => jr(ze, Sn)), pe(re, u.toStyles);
            }),
            Xe.forEach((ze) => {
              Zt(I, ze, []).push(yt);
            }),
            yt
          );
        }
        _buildPlayer(c, u, b) {
          return u.length > 0
            ? this.driver.animate(
                c.element,
                u,
                c.duration,
                c.delay,
                c.easing,
                b,
              )
            : new G.ZN(c.duration, c.delay);
        }
      }
      class Ti {
        constructor(c, u, b) {
          (this.namespaceId = c),
            (this.triggerName = u),
            (this.element = b),
            (this._player = new G.ZN()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = new Map()),
            (this.destroyed = !1),
            (this.parentPlayer = null),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(c) {
          this._containsRealPlayer ||
            ((this._player = c),
            this._queuedCallbacks.forEach((u, b) => {
              u.forEach((I) => qt(c, b, void 0, I));
            }),
            this._queuedCallbacks.clear(),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(c.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(c) {
          this.totalTime = c;
        }
        syncPlayerEvents(c) {
          const u = this._player;
          u.triggerCallback && c.onStart(() => u.triggerCallback("start")),
            c.onDone(() => this.finish()),
            c.onDestroy(() => this.destroy());
        }
        _queueEvent(c, u) {
          Zt(this._queuedCallbacks, c, []).push(u);
        }
        onDone(c) {
          this.queued && this._queueEvent("done", c), this._player.onDone(c);
        }
        onStart(c) {
          this.queued && this._queueEvent("start", c), this._player.onStart(c);
        }
        onDestroy(c) {
          this.queued && this._queueEvent("destroy", c),
            this._player.onDestroy(c);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(c) {
          this.queued || this._player.setPosition(c);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(c) {
          const u = this._player;
          u.triggerCallback && u.triggerCallback(c);
        }
      }
      function Dr(w) {
        return w && 1 === w.nodeType;
      }
      function Qi(w, c) {
        const u = w.style.display;
        return (w.style.display = c ?? "none"), u;
      }
      function Ur(w, c, u, b, I) {
        const F = [];
        u.forEach((re) => F.push(Qi(re)));
        const B = [];
        b.forEach((re, he) => {
          const Ue = new Map();
          re.forEach((Xe) => {
            const dt = c.computeStyle(he, Xe, I);
            Ue.set(Xe, dt),
              (!dt || 0 == dt.length) && ((he[Gn] = Mi), B.push(he));
          }),
            w.set(he, Ue);
        });
        let j = 0;
        return u.forEach((re) => Qi(re, F[j++])), B;
      }
      function ei(w, c) {
        const u = new Map();
        if ((w.forEach((j) => u.set(j, [])), 0 == c.length)) return u;
        const b = 1,
          I = new Set(c),
          F = new Map();
        function B(j) {
          if (!j) return b;
          let re = F.get(j);
          if (re) return re;
          const he = j.parentNode;
          return (
            (re = u.has(he) ? he : I.has(he) ? b : B(he)), F.set(j, re), re
          );
        }
        return (
          c.forEach((j) => {
            const re = B(j);
            re !== b && u.get(re).push(j);
          }),
          u
        );
      }
      function Kt(w, c) {
        w.classList?.add(c);
      }
      function jr(w, c) {
        w.classList?.remove(c);
      }
      function Hr(w, c, u) {
        an(u).onDone(() => w.processLeaveNode(c));
      }
      function Sr(w, c) {
        for (let u = 0; u < w.length; u++) {
          const b = w[u];
          b instanceof G.ZE ? Sr(b.players, c) : c.push(b);
        }
      }
      function Tr(w, c, u) {
        const b = u.get(w);
        if (!b) return !1;
        let I = c.get(w);
        return I ? b.forEach((F) => I.add(F)) : c.set(w, b), u.delete(w), !0;
      }
      class gt {
        constructor(c, u, b) {
          (this.bodyNode = c),
            (this._driver = u),
            (this._normalizer = b),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (I, F) => {}),
            (this._transitionEngine = new Si(c, u, b)),
            (this._timelineEngine = new xo(c, u, b)),
            (this._transitionEngine.onRemovalComplete = (I, F) =>
              this.onRemovalComplete(I, F));
        }
        registerTrigger(c, u, b, I, F) {
          const B = c + "-" + I;
          let j = this._triggerCache[B];
          if (!j) {
            const re = [],
              he = [],
              Ue = Qn(this._driver, F, re, he);
            if (re.length)
              throw (function Pe(w, c) {
                return new P.vHH(3404, !1);
              })();
            (j = (function Ki(w, c, u) {
              return new es(w, c, u);
            })(I, Ue, this._normalizer)),
              (this._triggerCache[B] = j);
          }
          this._transitionEngine.registerTrigger(u, I, j);
        }
        register(c, u) {
          this._transitionEngine.register(c, u);
        }
        destroy(c, u) {
          this._transitionEngine.destroy(c, u);
        }
        onInsert(c, u, b, I) {
          this._transitionEngine.insertNode(c, u, b, I);
        }
        onRemove(c, u, b, I) {
          this._transitionEngine.removeNode(c, u, I || !1, b);
        }
        disableAnimations(c, u) {
          this._transitionEngine.markElementAsDisabled(c, u);
        }
        process(c, u, b, I) {
          if ("@" == b.charAt(0)) {
            const [F, B] = cn(b);
            this._timelineEngine.command(F, u, B, I);
          } else this._transitionEngine.trigger(c, u, b, I);
        }
        listen(c, u, b, I, F) {
          if ("@" == b.charAt(0)) {
            const [B, j] = cn(b);
            return this._timelineEngine.listen(B, u, j, F);
          }
          return this._transitionEngine.listen(c, u, b, I, F);
        }
        flush(c = -1) {
          this._transitionEngine.flush(c);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players,
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      let qi = (() => {
        class w {
          constructor(u, b, I) {
            (this._element = u),
              (this._startStyles = b),
              (this._endStyles = I),
              (this._state = 0);
            let F = w.initialStylesByElement.get(u);
            F || w.initialStylesByElement.set(u, (F = new Map())),
              (this._initialStyles = F);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                pe(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (pe(this._element, this._initialStyles),
                this._endStyles &&
                  (pe(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (w.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  ($e(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  ($e(this._element, this._endStyles),
                  (this._endStyles = null)),
                pe(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (w.initialStylesByElement = new WeakMap()), w;
      })();
      function Vr(w) {
        let c = null;
        return (
          w.forEach((u, b) => {
            (function Po(w) {
              return "display" === w || "position" === w;
            })(b) && ((c = c || new Map()), c.set(b, u));
          }),
          c
        );
      }
      class go {
        constructor(c, u, b, I) {
          (this.element = c),
            (this.keyframes = u),
            (this.options = b),
            (this._specialStyles = I),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = new Map()),
            (this._duration = b.duration),
            (this._delay = b.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((c) => c()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const c = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            c,
            this.options,
          )),
            (this._finalKeyframe = c.length ? c[c.length - 1] : new Map()),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _convertKeyframesToObject(c) {
          const u = [];
          return (
            c.forEach((b) => {
              u.push(Object.fromEntries(b));
            }),
            u
          );
        }
        _triggerWebAnimation(c, u, b) {
          return c.animate(this._convertKeyframesToObject(u), b);
        }
        onStart(c) {
          this._originalOnStartFns.push(c), this._onStartFns.push(c);
        }
        onDone(c) {
          this._originalOnDoneFns.push(c), this._onDoneFns.push(c);
        }
        onDestroy(c) {
          this._onDestroyFns.push(c);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((c) => c()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((c) => c()),
            (this._onDestroyFns = []));
        }
        setPosition(c) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = c * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const c = new Map();
          this.hasStarted() &&
            this._finalKeyframe.forEach((b, I) => {
              "offset" !== I &&
                c.set(I, this._finished ? b : on(this.element, I));
            }),
            (this.currentSnapshot = c);
        }
        triggerCallback(c) {
          const u = "start" === c ? this._onStartFns : this._onDoneFns;
          u.forEach((b) => b()), (u.length = 0);
        }
      }
      class _o {
        validateStyleProperty(c) {
          return !0;
        }
        validateAnimatableStyleProperty(c) {
          return !0;
        }
        matchesElement(c, u) {
          return !1;
        }
        containsElement(c, u) {
          return Rr(c, u);
        }
        getParentElement(c) {
          return jt(c);
        }
        query(c, u, b) {
          return Pt(c, u, b);
        }
        computeStyle(c, u, b) {
          return window.getComputedStyle(c)[u];
        }
        animate(c, u, b, I, F, B = []) {
          const re = {
            duration: b,
            delay: I,
            fill: 0 == I ? "both" : "forwards",
          };
          F && (re.easing = F);
          const he = new Map(),
            Ue = B.filter((yt) => yt instanceof go);
          (function pn(w, c) {
            return 0 === w || 0 === c;
          })(b, I) &&
            Ue.forEach((yt) => {
              yt.currentSnapshot.forEach((ze, Dt) => he.set(Dt, ze));
            });
          let Xe = (function O(w) {
            return w.length
              ? w[0] instanceof Map
                ? w
                : w.map((c) => ee(c))
              : [];
          })(u).map((yt) => C(yt));
          Xe = (function mn(w, c, u) {
            if (u.size && c.length) {
              let b = c[0],
                I = [];
              if (
                (u.forEach((F, B) => {
                  b.has(B) || I.push(B), b.set(B, F);
                }),
                I.length)
              )
                for (let F = 1; F < c.length; F++) {
                  let B = c[F];
                  I.forEach((j) => B.set(j, on(w, j)));
                }
            }
            return c;
          })(c, Xe, he);
          const dt = (function mo(w, c) {
            let u = null,
              b = null;
            return (
              Array.isArray(c) && c.length
                ? ((u = Vr(c[0])), c.length > 1 && (b = Vr(c[c.length - 1])))
                : c instanceof Map && (u = Vr(c)),
              u || b ? new qi(w, u, b) : null
            );
          })(c, Xe);
          return new go(c, Xe, re, dt);
        }
      }
      let ts = (() => {
        class w extends G._j {
          constructor(u, b) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = u.createRenderer(b.body, {
                id: "0",
                encapsulation: P.ifc.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(u) {
            const b = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const I = Array.isArray(u) ? (0, G.vP)(u) : u;
            return (
              Nt(this._renderer, null, b, "register", [I]),
              new Fo(b, this._renderer)
            );
          }
        }
        return (
          (w.ɵfac = function (u) {
            return new (u || w)(P.LFG(P.FYo), P.LFG(Y.K0));
          }),
          (w.ɵprov = P.Yz7({ token: w, factory: w.ɵfac })),
          w
        );
      })();
      class Fo extends G.LC {
        constructor(c, u) {
          super(), (this._id = c), (this._renderer = u);
        }
        create(c, u) {
          return new fe(this._id, c, u || {}, this._renderer);
        }
      }
      class fe {
        constructor(c, u, b, I) {
          (this.id = c),
            (this.element = u),
            (this._renderer = I),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", b);
        }
        _listen(c, u) {
          return this._renderer.listen(this.element, `@@${this.id}:${c}`, u);
        }
        _command(c, ...u) {
          return Nt(this._renderer, this.element, this.id, c, u);
        }
        onDone(c) {
          this._listen("done", c);
        }
        onStart(c) {
          this._listen("start", c);
        }
        onDestroy(c) {
          this._listen("destroy", c);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(c) {
          this._command("setPosition", c);
        }
        getPosition() {
          return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
        }
      }
      function Nt(w, c, u, b, I) {
        return w.setProperty(c, `@@${u}:${b}`, I);
      }
      const Oi = "@.disabled";
      let fn = (() => {
        class w {
          constructor(u, b, I) {
            (this.delegate = u),
              (this.engine = b),
              (this._zone = I),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (b.onRemovalComplete = (F, B) => {
                const j = B?.parentNode(F);
                j && B.removeChild(j, F);
              });
          }
          createRenderer(u, b) {
            const F = this.delegate.createRenderer(u, b);
            if (!(u && b && b.data && b.data.animation)) {
              let Ue = this._rendererCache.get(F);
              return (
                Ue ||
                  ((Ue = new zr("", F, this.engine, () =>
                    this._rendererCache.delete(F),
                  )),
                  this._rendererCache.set(F, Ue)),
                Ue
              );
            }
            const B = b.id,
              j = b.id + "-" + this._currentId;
            this._currentId++, this.engine.register(j, u);
            const re = (Ue) => {
              Array.isArray(Ue)
                ? Ue.forEach(re)
                : this.engine.registerTrigger(B, j, u, Ue.name, Ue);
            };
            return (
              b.data.animation.forEach(re), new Ri(this, j, F, this.engine)
            );
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(u, b, I) {
            u >= 0 && u < this._microtaskId
              ? this._zone.run(() => b(I))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((F) => {
                        const [B, j] = F;
                        B(j);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([b, I]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (w.ɵfac = function (u) {
            return new (u || w)(P.LFG(P.FYo), P.LFG(gt), P.LFG(P.R0b));
          }),
          (w.ɵprov = P.Yz7({ token: w, factory: w.ɵfac })),
          w
        );
      })();
      class zr {
        constructor(c, u, b, I) {
          (this.namespaceId = c),
            (this.delegate = u),
            (this.engine = b),
            (this._onDestroy = I),
            (this.destroyNode = this.delegate.destroyNode
              ? (F) => u.destroyNode(F)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy(),
            this._onDestroy?.();
        }
        createElement(c, u) {
          return this.delegate.createElement(c, u);
        }
        createComment(c) {
          return this.delegate.createComment(c);
        }
        createText(c) {
          return this.delegate.createText(c);
        }
        appendChild(c, u) {
          this.delegate.appendChild(c, u),
            this.engine.onInsert(this.namespaceId, u, c, !1);
        }
        insertBefore(c, u, b, I = !0) {
          this.delegate.insertBefore(c, u, b),
            this.engine.onInsert(this.namespaceId, u, c, I);
        }
        removeChild(c, u, b) {
          this.engine.onRemove(this.namespaceId, u, this.delegate, b);
        }
        selectRootElement(c, u) {
          return this.delegate.selectRootElement(c, u);
        }
        parentNode(c) {
          return this.delegate.parentNode(c);
        }
        nextSibling(c) {
          return this.delegate.nextSibling(c);
        }
        setAttribute(c, u, b, I) {
          this.delegate.setAttribute(c, u, b, I);
        }
        removeAttribute(c, u, b) {
          this.delegate.removeAttribute(c, u, b);
        }
        addClass(c, u) {
          this.delegate.addClass(c, u);
        }
        removeClass(c, u) {
          this.delegate.removeClass(c, u);
        }
        setStyle(c, u, b, I) {
          this.delegate.setStyle(c, u, b, I);
        }
        removeStyle(c, u, b) {
          this.delegate.removeStyle(c, u, b);
        }
        setProperty(c, u, b) {
          "@" == u.charAt(0) && u == Oi
            ? this.disableAnimations(c, !!b)
            : this.delegate.setProperty(c, u, b);
        }
        setValue(c, u) {
          this.delegate.setValue(c, u);
        }
        listen(c, u, b) {
          return this.delegate.listen(c, u, b);
        }
        disableAnimations(c, u) {
          this.engine.disableAnimations(c, u);
        }
      }
      class Ri extends zr {
        constructor(c, u, b, I, F) {
          super(u, b, I, F), (this.factory = c), (this.namespaceId = u);
        }
        setProperty(c, u, b) {
          "@" == u.charAt(0)
            ? "." == u.charAt(1) && u == Oi
              ? this.disableAnimations(c, (b = void 0 === b || !!b))
              : this.engine.process(this.namespaceId, c, u.slice(1), b)
            : this.delegate.setProperty(c, u, b);
        }
        listen(c, u, b) {
          if ("@" == u.charAt(0)) {
            const I = (function dr(w) {
              switch (w) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return w;
              }
            })(c);
            let F = u.slice(1),
              B = "";
            return (
              "@" != F.charAt(0) &&
                ([F, B] = (function bo(w) {
                  const c = w.indexOf(".");
                  return [w.substring(0, c), w.slice(c + 1)];
                })(F)),
              this.engine.listen(this.namespaceId, I, F, B, (j) => {
                this.factory.scheduleListenerCallback(j._data || -1, b, j);
              })
            );
          }
          return this.delegate.listen(c, u, b);
        }
      }
      const Xi = [
          { provide: G._j, useClass: ts },
          {
            provide: zi,
            useFactory: function ns() {
              return new Xo();
            },
          },
          {
            provide: gt,
            useClass: (() => {
              class w extends gt {
                constructor(u, b, I, F) {
                  super(u.body, b, I);
                }
                ngOnDestroy() {
                  this.flush();
                }
              }
              return (
                (w.ɵfac = function (u) {
                  return new (u || w)(
                    P.LFG(Y.K0),
                    P.LFG(or),
                    P.LFG(zi),
                    P.LFG(P.z2F),
                  );
                }),
                (w.ɵprov = P.Yz7({ token: w, factory: w.ɵfac })),
                w
              );
            })(),
          },
          {
            provide: P.FYo,
            useFactory: function No(w, c, u) {
              return new fn(w, c, u);
            },
            deps: [_.se, gt, P.R0b],
          },
        ],
        Dn = [
          { provide: or, useFactory: () => new _o() },
          { provide: P.QbO, useValue: "BrowserAnimations" },
          ...Xi,
        ],
        Jn = [
          { provide: or, useClass: _t },
          { provide: P.QbO, useValue: "NoopAnimations" },
          ...Xi,
        ];
      let Gr = (() => {
        class w {
          static withConfig(u) {
            return { ngModule: w, providers: u.disableAnimations ? Jn : Dn };
          }
        }
        return (
          (w.ɵfac = function (u) {
            return new (u || w)();
          }),
          (w.ɵmod = P.oAB({ type: w })),
          (w.ɵinj = P.cJS({ providers: Dn, imports: [_.b2] })),
          w
        );
      })();
      const ui = function () {
          return { exact: !0 };
        },
        Ji = function () {
          return ["/components"];
        };
      let Lo = (() => {
          class w {}
          return (
            (w.ɵfac = function (u) {
              return new (u || w)();
            }),
            (w.ɵcmp = P.Xpm({
              type: w,
              selectors: [["app-navbar"]],
              hostAttrs: [1, "app-navbar", "px-1"],
              standalone: !0,
              features: [P.jDz],
              decls: 4,
              vars: 4,
              consts: [
                [
                  "mat-button",
                  "",
                  "routerLink",
                  "/",
                  "routerLinkActive",
                  "docs-navbar-item-selected",
                  3,
                  "routerLinkActiveOptions",
                ],
                [
                  "mat-button",
                  "",
                  "routerLinkActive",
                  "docs-navbar-item-selected",
                  3,
                  "routerLink",
                ],
              ],
              template: function (u, b) {
                1 & u &&
                  (P.TgZ(0, "a", 0),
                  P._uU(1, "c3 Components"),
                  P.qZA(),
                  P.TgZ(2, "a", 1),
                  P._uU(3, "Components"),
                  P.qZA()),
                  2 & u &&
                    (P.Q6J("routerLinkActiveOptions", P.DdM(2, ui)),
                    P.xp6(2),
                    P.Q6J("routerLink", P.DdM(3, Ji)));
              },
              dependencies: [Y.ez, K.ot, K.zs, M.Bz, M.rH, M.Od],
              styles: [
                ".app-navbar{position:relative;background-color:var(--background-app-bar);color:var(--foreground-text);height:64px;display:flex;flex-direction:row;align-items:center;justify-content:start;z-index:1000;box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.app-navbar.primary{background-color:var(--primary-color);color:var(--foreground-text)}.app-navbar.accent{background-color:var(--accent-color);color:var(--foreground-text)}.app-navbar.warn{background-color:var(--warn-color);color:var(--foreground-text)}\n",
              ],
              encapsulation: 2,
            })),
            w
          );
        })(),
        eo = (() => {
          class w {}
          return (
            (w.ɵfac = function (u) {
              return new (u || w)();
            }),
            (w.ɵcmp = P.Xpm({
              type: w,
              selectors: [["app-docs"]],
              decls: 3,
              vars: 0,
              consts: [
                [1, "primary"],
                [1, "content"],
              ],
              template: function (u, b) {
                1 & u &&
                  (P._UZ(0, "app-navbar", 0),
                  P.TgZ(1, "div", 1),
                  P._UZ(2, "router-outlet"),
                  P.qZA());
              },
              dependencies: [M.lC, Lo],
            })),
            w
          );
        })(),
        Fi = (() => {
          class w {}
          return (
            (w.ɵfac = function (u) {
              return new (u || w)();
            }),
            (w.ɵmod = P.oAB({ type: w, bootstrap: [eo] })),
            (w.ɵinj = P.cJS({ imports: [_.b2, X, Gr, Lo, K.ot] })),
            w
          );
        })();
      _.q6()
        .bootstrapModule(Fi)
        .catch((w) => console.error(w));
    },
    1135: (He, se, T) => {
      T.d(se, { X: () => M });
      var _ = T(7579);
      class M extends _.x {
        constructor(K) {
          super(), (this._value = K);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(K) {
          const Q = super._subscribe(K);
          return !Q.closed && K.next(this._value), Q;
        }
        getValue() {
          const { hasError: K, thrownError: Q, _value: Y } = this;
          if (K) throw Q;
          return this._throwIfClosed(), Y;
        }
        next(K) {
          super.next((this._value = K));
        }
      }
    },
    9751: (He, se, T) => {
      T.d(se, { y: () => J });
      var _ = T(930),
        M = T(727),
        P = T(8822),
        K = T(9635),
        Q = T(2416),
        Y = T(576),
        te = T(2806);
      let J = (() => {
        class H {
          constructor(de) {
            de && (this._subscribe = de);
          }
          lift(de) {
            const Te = new H();
            return (Te.source = this), (Te.operator = de), Te;
          }
          subscribe(de, Te, Ye) {
            const De = (function G(H) {
              return (
                (H && H instanceof _.Lv) ||
                ((function X(H) {
                  return (
                    H &&
                    (0, Y.m)(H.next) &&
                    (0, Y.m)(H.error) &&
                    (0, Y.m)(H.complete)
                  );
                })(H) &&
                  (0, M.Nn)(H))
              );
            })(de)
              ? de
              : new _.Hp(de, Te, Ye);
            return (
              (0, te.x)(() => {
                const { operator: st, source: Oe } = this;
                De.add(
                  st
                    ? st.call(De, Oe)
                    : Oe
                      ? this._subscribe(De)
                      : this._trySubscribe(De),
                );
              }),
              De
            );
          }
          _trySubscribe(de) {
            try {
              return this._subscribe(de);
            } catch (Te) {
              de.error(Te);
            }
          }
          forEach(de, Te) {
            return new (Te = q(Te))((Ye, De) => {
              const st = new _.Hp({
                next: (Oe) => {
                  try {
                    de(Oe);
                  } catch (Be) {
                    De(Be), st.unsubscribe();
                  }
                },
                error: De,
                complete: Ye,
              });
              this.subscribe(st);
            });
          }
          _subscribe(de) {
            var Te;
            return null === (Te = this.source) || void 0 === Te
              ? void 0
              : Te.subscribe(de);
          }
          [P.L]() {
            return this;
          }
          pipe(...de) {
            return (0, K.U)(de)(this);
          }
          toPromise(de) {
            return new (de = q(de))((Te, Ye) => {
              let De;
              this.subscribe(
                (st) => (De = st),
                (st) => Ye(st),
                () => Te(De),
              );
            });
          }
        }
        return (H.create = (Ee) => new H(Ee)), H;
      })();
      function q(H) {
        var Ee;
        return null !== (Ee = H ?? Q.v.Promise) && void 0 !== Ee ? Ee : Promise;
      }
    },
    7579: (He, se, T) => {
      T.d(se, { x: () => te });
      var _ = T(9751),
        M = T(727);
      const K = (0, T(3888).d)(
        (q) =>
          function () {
            q(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          },
      );
      var Q = T(8737),
        Y = T(2806);
      let te = (() => {
        class q extends _.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(G) {
            const H = new J(this, this);
            return (H.operator = G), H;
          }
          _throwIfClosed() {
            if (this.closed) throw new K();
          }
          next(G) {
            (0, Y.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const H of this.currentObservers) H.next(G);
              }
            });
          }
          error(G) {
            (0, Y.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = G);
                const { observers: H } = this;
                for (; H.length; ) H.shift().error(G);
              }
            });
          }
          complete() {
            (0, Y.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: G } = this;
                for (; G.length; ) G.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var G;
            return (
              (null === (G = this.observers) || void 0 === G
                ? void 0
                : G.length) > 0
            );
          }
          _trySubscribe(G) {
            return this._throwIfClosed(), super._trySubscribe(G);
          }
          _subscribe(G) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(G),
              this._innerSubscribe(G)
            );
          }
          _innerSubscribe(G) {
            const { hasError: H, isStopped: Ee, observers: de } = this;
            return H || Ee
              ? M.Lc
              : ((this.currentObservers = null),
                de.push(G),
                new M.w0(() => {
                  (this.currentObservers = null), (0, Q.P)(de, G);
                }));
          }
          _checkFinalizedStatuses(G) {
            const { hasError: H, thrownError: Ee, isStopped: de } = this;
            H ? G.error(Ee) : de && G.complete();
          }
          asObservable() {
            const G = new _.y();
            return (G.source = this), G;
          }
        }
        return (q.create = (X, G) => new J(X, G)), q;
      })();
      class J extends te {
        constructor(X, G) {
          super(), (this.destination = X), (this.source = G);
        }
        next(X) {
          var G, H;
          null ===
            (H =
              null === (G = this.destination) || void 0 === G
                ? void 0
                : G.next) ||
            void 0 === H ||
            H.call(G, X);
        }
        error(X) {
          var G, H;
          null ===
            (H =
              null === (G = this.destination) || void 0 === G
                ? void 0
                : G.error) ||
            void 0 === H ||
            H.call(G, X);
        }
        complete() {
          var X, G;
          null ===
            (G =
              null === (X = this.destination) || void 0 === X
                ? void 0
                : X.complete) ||
            void 0 === G ||
            G.call(X);
        }
        _subscribe(X) {
          var G, H;
          return null !==
            (H =
              null === (G = this.source) || void 0 === G
                ? void 0
                : G.subscribe(X)) && void 0 !== H
            ? H
            : M.Lc;
        }
      }
    },
    930: (He, se, T) => {
      T.d(se, { Hp: () => Ye, Lv: () => H });
      var _ = T(576),
        M = T(727),
        P = T(2416),
        K = T(7849),
        Q = T(5032);
      const Y = q("C", void 0, void 0);
      function q(oe, U, we) {
        return { kind: oe, value: U, error: we };
      }
      var X = T(3410),
        G = T(2806);
      class H extends M.w0 {
        constructor(U) {
          super(),
            (this.isStopped = !1),
            U
              ? ((this.destination = U), (0, M.Nn)(U) && U.add(this))
              : (this.destination = Be);
        }
        static create(U, we, et) {
          return new Ye(U, we, et);
        }
        next(U) {
          this.isStopped
            ? Oe(
                (function J(oe) {
                  return q("N", oe, void 0);
                })(U),
                this,
              )
            : this._next(U);
        }
        error(U) {
          this.isStopped
            ? Oe(
                (function te(oe) {
                  return q("E", void 0, oe);
                })(U),
                this,
              )
            : ((this.isStopped = !0), this._error(U));
        }
        complete() {
          this.isStopped
            ? Oe(Y, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(U) {
          this.destination.next(U);
        }
        _error(U) {
          try {
            this.destination.error(U);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Ee = Function.prototype.bind;
      function de(oe, U) {
        return Ee.call(oe, U);
      }
      class Te {
        constructor(U) {
          this.partialObserver = U;
        }
        next(U) {
          const { partialObserver: we } = this;
          if (we.next)
            try {
              we.next(U);
            } catch (et) {
              De(et);
            }
        }
        error(U) {
          const { partialObserver: we } = this;
          if (we.error)
            try {
              we.error(U);
            } catch (et) {
              De(et);
            }
          else De(U);
        }
        complete() {
          const { partialObserver: U } = this;
          if (U.complete)
            try {
              U.complete();
            } catch (we) {
              De(we);
            }
        }
      }
      class Ye extends H {
        constructor(U, we, et) {
          let Ie;
          if ((super(), (0, _.m)(U) || !U))
            Ie = {
              next: U ?? void 0,
              error: we ?? void 0,
              complete: et ?? void 0,
            };
          else {
            let xe;
            this && P.v.useDeprecatedNextContext
              ? ((xe = Object.create(U)),
                (xe.unsubscribe = () => this.unsubscribe()),
                (Ie = {
                  next: U.next && de(U.next, xe),
                  error: U.error && de(U.error, xe),
                  complete: U.complete && de(U.complete, xe),
                }))
              : (Ie = U);
          }
          this.destination = new Te(Ie);
        }
      }
      function De(oe) {
        P.v.useDeprecatedSynchronousErrorHandling ? (0, G.O)(oe) : (0, K.h)(oe);
      }
      function Oe(oe, U) {
        const { onStoppedNotification: we } = P.v;
        we && X.z.setTimeout(() => we(oe, U));
      }
      const Be = {
        closed: !0,
        next: Q.Z,
        error: function st(oe) {
          throw oe;
        },
        complete: Q.Z,
      };
    },
    727: (He, se, T) => {
      T.d(se, { Lc: () => Y, w0: () => Q, Nn: () => te });
      var _ = T(576);
      const P = (0, T(3888).d)(
        (q) =>
          function (G) {
            q(this),
              (this.message = G
                ? `${G.length} errors occurred during unsubscription:\n${G.map(
                    (H, Ee) => `${Ee + 1}) ${H.toString()}`,
                  ).join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = G);
          },
      );
      var K = T(8737);
      class Q {
        constructor(X) {
          (this.initialTeardown = X),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let X;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: G } = this;
            if (G)
              if (((this._parentage = null), Array.isArray(G)))
                for (const de of G) de.remove(this);
              else G.remove(this);
            const { initialTeardown: H } = this;
            if ((0, _.m)(H))
              try {
                H();
              } catch (de) {
                X = de instanceof P ? de.errors : [de];
              }
            const { _finalizers: Ee } = this;
            if (Ee) {
              this._finalizers = null;
              for (const de of Ee)
                try {
                  J(de);
                } catch (Te) {
                  (X = X ?? []),
                    Te instanceof P ? (X = [...X, ...Te.errors]) : X.push(Te);
                }
            }
            if (X) throw new P(X);
          }
        }
        add(X) {
          var G;
          if (X && X !== this)
            if (this.closed) J(X);
            else {
              if (X instanceof Q) {
                if (X.closed || X._hasParent(this)) return;
                X._addParent(this);
              }
              (this._finalizers =
                null !== (G = this._finalizers) && void 0 !== G ? G : []).push(
                X,
              );
            }
        }
        _hasParent(X) {
          const { _parentage: G } = this;
          return G === X || (Array.isArray(G) && G.includes(X));
        }
        _addParent(X) {
          const { _parentage: G } = this;
          this._parentage = Array.isArray(G) ? (G.push(X), G) : G ? [G, X] : X;
        }
        _removeParent(X) {
          const { _parentage: G } = this;
          G === X
            ? (this._parentage = null)
            : Array.isArray(G) && (0, K.P)(G, X);
        }
        remove(X) {
          const { _finalizers: G } = this;
          G && (0, K.P)(G, X), X instanceof Q && X._removeParent(this);
        }
      }
      Q.EMPTY = (() => {
        const q = new Q();
        return (q.closed = !0), q;
      })();
      const Y = Q.EMPTY;
      function te(q) {
        return (
          q instanceof Q ||
          (q &&
            "closed" in q &&
            (0, _.m)(q.remove) &&
            (0, _.m)(q.add) &&
            (0, _.m)(q.unsubscribe))
        );
      }
      function J(q) {
        (0, _.m)(q) ? q() : q.unsubscribe();
      }
    },
    2416: (He, se, T) => {
      T.d(se, { v: () => _ });
      const _ = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    9841: (He, se, T) => {
      T.d(se, { a: () => X });
      var _ = T(9751),
        M = T(4742),
        P = T(2076),
        K = T(4671),
        Q = T(3268),
        Y = T(3269),
        te = T(1810),
        J = T(5403),
        q = T(9672);
      function X(...Ee) {
        const de = (0, Y.yG)(Ee),
          Te = (0, Y.jO)(Ee),
          { args: Ye, keys: De } = (0, M.D)(Ee);
        if (0 === Ye.length) return (0, P.D)([], de);
        const st = new _.y(
          (function G(Ee, de, Te = K.y) {
            return (Ye) => {
              H(
                de,
                () => {
                  const { length: De } = Ee,
                    st = new Array(De);
                  let Oe = De,
                    Be = De;
                  for (let oe = 0; oe < De; oe++)
                    H(
                      de,
                      () => {
                        const U = (0, P.D)(Ee[oe], de);
                        let we = !1;
                        U.subscribe(
                          (0, J.x)(
                            Ye,
                            (et) => {
                              (st[oe] = et),
                                we || ((we = !0), Be--),
                                Be || Ye.next(Te(st.slice()));
                            },
                            () => {
                              --Oe || Ye.complete();
                            },
                          ),
                        );
                      },
                      Ye,
                    );
                },
                Ye,
              );
            };
          })(Ye, de, De ? (Oe) => (0, te.n)(De, Oe) : K.y),
        );
        return Te ? st.pipe((0, Q.Z)(Te)) : st;
      }
      function H(Ee, de, Te) {
        Ee ? (0, q.f)(Te, Ee, de) : de();
      }
    },
    7272: (He, se, T) => {
      T.d(se, { z: () => Q });
      var _ = T(8189),
        P = T(3269),
        K = T(2076);
      function Q(...Y) {
        return (function M() {
          return (0, _.J)(1);
        })()((0, K.D)(Y, (0, P.yG)(Y)));
      }
    },
    9770: (He, se, T) => {
      T.d(se, { P: () => P });
      var _ = T(9751),
        M = T(8421);
      function P(K) {
        return new _.y((Q) => {
          (0, M.Xf)(K()).subscribe(Q);
        });
      }
    },
    515: (He, se, T) => {
      T.d(se, { E: () => M });
      const M = new (T(9751).y)((Q) => Q.complete());
    },
    2076: (He, se, T) => {
      T.d(se, { D: () => et });
      var _ = T(8421),
        M = T(9672),
        P = T(4482),
        K = T(5403);
      function Q(Ie, xe = 0) {
        return (0, P.e)((rt, at) => {
          rt.subscribe(
            (0, K.x)(
              at,
              (nt) => (0, M.f)(at, Ie, () => at.next(nt), xe),
              () => (0, M.f)(at, Ie, () => at.complete(), xe),
              (nt) => (0, M.f)(at, Ie, () => at.error(nt), xe),
            ),
          );
        });
      }
      function Y(Ie, xe = 0) {
        return (0, P.e)((rt, at) => {
          at.add(Ie.schedule(() => rt.subscribe(at), xe));
        });
      }
      var q = T(9751),
        G = T(2202),
        H = T(576);
      function de(Ie, xe) {
        if (!Ie) throw new Error("Iterable cannot be null");
        return new q.y((rt) => {
          (0, M.f)(rt, xe, () => {
            const at = Ie[Symbol.asyncIterator]();
            (0, M.f)(
              rt,
              xe,
              () => {
                at.next().then((nt) => {
                  nt.done ? rt.complete() : rt.next(nt.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      var Te = T(3670),
        Ye = T(8239),
        De = T(1144),
        st = T(6495),
        Oe = T(2206),
        Be = T(4532),
        oe = T(3260);
      function et(Ie, xe) {
        return xe
          ? (function we(Ie, xe) {
              if (null != Ie) {
                if ((0, Te.c)(Ie))
                  return (function te(Ie, xe) {
                    return (0, _.Xf)(Ie).pipe(Y(xe), Q(xe));
                  })(Ie, xe);
                if ((0, De.z)(Ie))
                  return (function X(Ie, xe) {
                    return new q.y((rt) => {
                      let at = 0;
                      return xe.schedule(function () {
                        at === Ie.length
                          ? rt.complete()
                          : (rt.next(Ie[at++]), rt.closed || this.schedule());
                      });
                    });
                  })(Ie, xe);
                if ((0, Ye.t)(Ie))
                  return (function J(Ie, xe) {
                    return (0, _.Xf)(Ie).pipe(Y(xe), Q(xe));
                  })(Ie, xe);
                if ((0, Oe.D)(Ie)) return de(Ie, xe);
                if ((0, st.T)(Ie))
                  return (function Ee(Ie, xe) {
                    return new q.y((rt) => {
                      let at;
                      return (
                        (0, M.f)(rt, xe, () => {
                          (at = Ie[G.h]()),
                            (0, M.f)(
                              rt,
                              xe,
                              () => {
                                let nt, Tt;
                                try {
                                  ({ value: nt, done: Tt } = at.next());
                                } catch (Ze) {
                                  return void rt.error(Ze);
                                }
                                Tt ? rt.complete() : rt.next(nt);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => (0, H.m)(at?.return) && at.return()
                      );
                    });
                  })(Ie, xe);
                if ((0, oe.L)(Ie))
                  return (function U(Ie, xe) {
                    return de((0, oe.Q)(Ie), xe);
                  })(Ie, xe);
              }
              throw (0, Be.z)(Ie);
            })(Ie, xe)
          : (0, _.Xf)(Ie);
      }
    },
    8421: (He, se, T) => {
      T.d(se, { Xf: () => Ee });
      var _ = T(655),
        M = T(1144),
        P = T(8239),
        K = T(9751),
        Q = T(3670),
        Y = T(2206),
        te = T(4532),
        J = T(6495),
        q = T(3260),
        X = T(576),
        G = T(7849),
        H = T(8822);
      function Ee(oe) {
        if (oe instanceof K.y) return oe;
        if (null != oe) {
          if ((0, Q.c)(oe))
            return (function de(oe) {
              return new K.y((U) => {
                const we = oe[H.L]();
                if ((0, X.m)(we.subscribe)) return we.subscribe(U);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable",
                );
              });
            })(oe);
          if ((0, M.z)(oe))
            return (function Te(oe) {
              return new K.y((U) => {
                for (let we = 0; we < oe.length && !U.closed; we++)
                  U.next(oe[we]);
                U.complete();
              });
            })(oe);
          if ((0, P.t)(oe))
            return (function Ye(oe) {
              return new K.y((U) => {
                oe.then(
                  (we) => {
                    U.closed || (U.next(we), U.complete());
                  },
                  (we) => U.error(we),
                ).then(null, G.h);
              });
            })(oe);
          if ((0, Y.D)(oe)) return st(oe);
          if ((0, J.T)(oe))
            return (function De(oe) {
              return new K.y((U) => {
                for (const we of oe) if ((U.next(we), U.closed)) return;
                U.complete();
              });
            })(oe);
          if ((0, q.L)(oe))
            return (function Oe(oe) {
              return st((0, q.Q)(oe));
            })(oe);
        }
        throw (0, te.z)(oe);
      }
      function st(oe) {
        return new K.y((U) => {
          (function Be(oe, U) {
            var we, et, Ie, xe;
            return (0, _.mG)(this, void 0, void 0, function* () {
              try {
                for (we = (0, _.KL)(oe); !(et = yield we.next()).done; )
                  if ((U.next(et.value), U.closed)) return;
              } catch (rt) {
                Ie = { error: rt };
              } finally {
                try {
                  et && !et.done && (xe = we.return) && (yield xe.call(we));
                } finally {
                  if (Ie) throw Ie.error;
                }
              }
              U.complete();
            });
          })(oe, U).catch((we) => U.error(we));
        });
      }
    },
    6451: (He, se, T) => {
      T.d(se, { T: () => Y });
      var _ = T(8189),
        M = T(8421),
        P = T(515),
        K = T(3269),
        Q = T(2076);
      function Y(...te) {
        const J = (0, K.yG)(te),
          q = (0, K._6)(te, 1 / 0),
          X = te;
        return X.length
          ? 1 === X.length
            ? (0, M.Xf)(X[0])
            : (0, _.J)(q)((0, Q.D)(X, J))
          : P.E;
      }
    },
    9646: (He, se, T) => {
      T.d(se, { of: () => P });
      var _ = T(3269),
        M = T(2076);
      function P(...K) {
        const Q = (0, _.yG)(K);
        return (0, M.D)(K, Q);
      }
    },
    2843: (He, se, T) => {
      T.d(se, { _: () => P });
      var _ = T(9751),
        M = T(576);
      function P(K, Q) {
        const Y = (0, M.m)(K) ? K : () => K,
          te = (J) => J.error(Y());
        return new _.y(Q ? (J) => Q.schedule(te, 0, J) : te);
      }
    },
    5403: (He, se, T) => {
      T.d(se, { x: () => M });
      var _ = T(930);
      function M(K, Q, Y, te, J) {
        return new P(K, Q, Y, te, J);
      }
      class P extends _.Lv {
        constructor(Q, Y, te, J, q, X) {
          super(Q),
            (this.onFinalize = q),
            (this.shouldUnsubscribe = X),
            (this._next = Y
              ? function (G) {
                  try {
                    Y(G);
                  } catch (H) {
                    Q.error(H);
                  }
                }
              : super._next),
            (this._error = J
              ? function (G) {
                  try {
                    J(G);
                  } catch (H) {
                    Q.error(H);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = te
              ? function () {
                  try {
                    te();
                  } catch (G) {
                    Q.error(G);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var Q;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Y } = this;
            super.unsubscribe(),
              !Y &&
                (null === (Q = this.onFinalize) ||
                  void 0 === Q ||
                  Q.call(this));
          }
        }
      }
    },
    262: (He, se, T) => {
      T.d(se, { K: () => K });
      var _ = T(8421),
        M = T(5403),
        P = T(4482);
      function K(Q) {
        return (0, P.e)((Y, te) => {
          let X,
            J = null,
            q = !1;
          (J = Y.subscribe(
            (0, M.x)(te, void 0, void 0, (G) => {
              (X = (0, _.Xf)(Q(G, K(Q)(Y)))),
                J ? (J.unsubscribe(), (J = null), X.subscribe(te)) : (q = !0);
            }),
          )),
            q && (J.unsubscribe(), (J = null), X.subscribe(te));
        });
      }
    },
    4351: (He, se, T) => {
      T.d(se, { b: () => P });
      var _ = T(5577),
        M = T(576);
      function P(K, Q) {
        return (0, M.m)(Q) ? (0, _.z)(K, Q, 1) : (0, _.z)(K, 1);
      }
    },
    8372: (He, se, T) => {
      T.d(se, { b: () => K });
      var _ = T(4986),
        M = T(4482),
        P = T(5403);
      function K(Q, Y = _.z) {
        return (0, M.e)((te, J) => {
          let q = null,
            X = null,
            G = null;
          const H = () => {
            if (q) {
              q.unsubscribe(), (q = null);
              const de = X;
              (X = null), J.next(de);
            }
          };
          function Ee() {
            const de = G + Q,
              Te = Y.now();
            if (Te < de)
              return (q = this.schedule(void 0, de - Te)), void J.add(q);
            H();
          }
          te.subscribe(
            (0, P.x)(
              J,
              (de) => {
                (X = de),
                  (G = Y.now()),
                  q || ((q = Y.schedule(Ee, Q)), J.add(q));
              },
              () => {
                H(), J.complete();
              },
              void 0,
              () => {
                X = q = null;
              },
            ),
          );
        });
      }
    },
    1884: (He, se, T) => {
      T.d(se, { x: () => K });
      var _ = T(4671),
        M = T(4482),
        P = T(5403);
      function K(Y, te = _.y) {
        return (
          (Y = Y ?? Q),
          (0, M.e)((J, q) => {
            let X,
              G = !0;
            J.subscribe(
              (0, P.x)(q, (H) => {
                const Ee = te(H);
                (G || !Y(X, Ee)) && ((G = !1), (X = Ee), q.next(H));
              }),
            );
          })
        );
      }
      function Q(Y, te) {
        return Y === te;
      }
    },
    9300: (He, se, T) => {
      T.d(se, { h: () => P });
      var _ = T(4482),
        M = T(5403);
      function P(K, Q) {
        return (0, _.e)((Y, te) => {
          let J = 0;
          Y.subscribe((0, M.x)(te, (q) => K.call(Q, q, J++) && te.next(q)));
        });
      }
    },
    8746: (He, se, T) => {
      T.d(se, { x: () => M });
      var _ = T(4482);
      function M(P) {
        return (0, _.e)((K, Q) => {
          try {
            K.subscribe(Q);
          } finally {
            Q.add(P);
          }
        });
      }
    },
    4004: (He, se, T) => {
      T.d(se, { U: () => P });
      var _ = T(4482),
        M = T(5403);
      function P(K, Q) {
        return (0, _.e)((Y, te) => {
          let J = 0;
          Y.subscribe(
            (0, M.x)(te, (q) => {
              te.next(K.call(Q, q, J++));
            }),
          );
        });
      }
    },
    9718: (He, se, T) => {
      T.d(se, { h: () => M });
      var _ = T(4004);
      function M(P) {
        return (0, _.U)(() => P);
      }
    },
    8189: (He, se, T) => {
      T.d(se, { J: () => P });
      var _ = T(5577),
        M = T(4671);
      function P(K = 1 / 0) {
        return (0, _.z)(M.y, K);
      }
    },
    5577: (He, se, T) => {
      T.d(se, { z: () => J });
      var _ = T(4004),
        M = T(8421),
        P = T(4482),
        K = T(9672),
        Q = T(5403),
        te = T(576);
      function J(q, X, G = 1 / 0) {
        return (0, te.m)(X)
          ? J(
              (H, Ee) =>
                (0, _.U)((de, Te) => X(H, de, Ee, Te))((0, M.Xf)(q(H, Ee))),
              G,
            )
          : ("number" == typeof X && (G = X),
            (0, P.e)((H, Ee) =>
              (function Y(q, X, G, H, Ee, de, Te, Ye) {
                const De = [];
                let st = 0,
                  Oe = 0,
                  Be = !1;
                const oe = () => {
                    Be && !De.length && !st && X.complete();
                  },
                  U = (et) => (st < H ? we(et) : De.push(et)),
                  we = (et) => {
                    de && X.next(et), st++;
                    let Ie = !1;
                    (0, M.Xf)(G(et, Oe++)).subscribe(
                      (0, Q.x)(
                        X,
                        (xe) => {
                          Ee?.(xe), de ? U(xe) : X.next(xe);
                        },
                        () => {
                          Ie = !0;
                        },
                        void 0,
                        () => {
                          if (Ie)
                            try {
                              for (st--; De.length && st < H; ) {
                                const xe = De.shift();
                                Te ? (0, K.f)(X, Te, () => we(xe)) : we(xe);
                              }
                              oe();
                            } catch (xe) {
                              X.error(xe);
                            }
                        },
                      ),
                    );
                  };
                return (
                  q.subscribe(
                    (0, Q.x)(X, U, () => {
                      (Be = !0), oe();
                    }),
                  ),
                  () => {
                    Ye?.();
                  }
                );
              })(H, Ee, q, G),
            ));
      }
    },
    3099: (He, se, T) => {
      T.d(se, { B: () => Q });
      var _ = T(8421),
        M = T(7579),
        P = T(930),
        K = T(4482);
      function Q(te = {}) {
        const {
          connector: J = () => new M.x(),
          resetOnError: q = !0,
          resetOnComplete: X = !0,
          resetOnRefCountZero: G = !0,
        } = te;
        return (H) => {
          let Ee,
            de,
            Te,
            Ye = 0,
            De = !1,
            st = !1;
          const Oe = () => {
              de?.unsubscribe(), (de = void 0);
            },
            Be = () => {
              Oe(), (Ee = Te = void 0), (De = st = !1);
            },
            oe = () => {
              const U = Ee;
              Be(), U?.unsubscribe();
            };
          return (0, K.e)((U, we) => {
            Ye++, !st && !De && Oe();
            const et = (Te = Te ?? J());
            we.add(() => {
              Ye--, 0 === Ye && !st && !De && (de = Y(oe, G));
            }),
              et.subscribe(we),
              !Ee &&
                Ye > 0 &&
                ((Ee = new P.Hp({
                  next: (Ie) => et.next(Ie),
                  error: (Ie) => {
                    (st = !0), Oe(), (de = Y(Be, q, Ie)), et.error(Ie);
                  },
                  complete: () => {
                    (De = !0), Oe(), (de = Y(Be, X)), et.complete();
                  },
                })),
                (0, _.Xf)(U).subscribe(Ee));
          })(H);
        };
      }
      function Y(te, J, ...q) {
        if (!0 === J) return void te();
        if (!1 === J) return;
        const X = new P.Hp({
          next: () => {
            X.unsubscribe(), te();
          },
        });
        return (0, _.Xf)(J(...q)).subscribe(X);
      }
    },
    5684: (He, se, T) => {
      T.d(se, { T: () => M });
      var _ = T(9300);
      function M(P) {
        return (0, _.h)((K, Q) => P <= Q);
      }
    },
    8675: (He, se, T) => {
      T.d(se, { O: () => K });
      var _ = T(7272),
        M = T(3269),
        P = T(4482);
      function K(...Q) {
        const Y = (0, M.yG)(Q);
        return (0, P.e)((te, J) => {
          (Y ? (0, _.z)(Q, te, Y) : (0, _.z)(Q, te)).subscribe(J);
        });
      }
    },
    3900: (He, se, T) => {
      T.d(se, { w: () => K });
      var _ = T(8421),
        M = T(4482),
        P = T(5403);
      function K(Q, Y) {
        return (0, M.e)((te, J) => {
          let q = null,
            X = 0,
            G = !1;
          const H = () => G && !q && J.complete();
          te.subscribe(
            (0, P.x)(
              J,
              (Ee) => {
                q?.unsubscribe();
                let de = 0;
                const Te = X++;
                (0, _.Xf)(Q(Ee, Te)).subscribe(
                  (q = (0, P.x)(
                    J,
                    (Ye) => J.next(Y ? Y(Ee, Ye, Te, de++) : Ye),
                    () => {
                      (q = null), H();
                    },
                  )),
                );
              },
              () => {
                (G = !0), H();
              },
            ),
          );
        });
      }
    },
    5698: (He, se, T) => {
      T.d(se, { q: () => K });
      var _ = T(515),
        M = T(4482),
        P = T(5403);
      function K(Q) {
        return Q <= 0
          ? () => _.E
          : (0, M.e)((Y, te) => {
              let J = 0;
              Y.subscribe(
                (0, P.x)(te, (q) => {
                  ++J <= Q && (te.next(q), Q <= J && te.complete());
                }),
              );
            });
      }
    },
    2722: (He, se, T) => {
      T.d(se, { R: () => Q });
      var _ = T(4482),
        M = T(5403),
        P = T(8421),
        K = T(5032);
      function Q(Y) {
        return (0, _.e)((te, J) => {
          (0, P.Xf)(Y).subscribe((0, M.x)(J, () => J.complete(), K.Z)),
            !J.closed && te.subscribe(J);
        });
      }
    },
    8505: (He, se, T) => {
      T.d(se, { b: () => Q });
      var _ = T(576),
        M = T(4482),
        P = T(5403),
        K = T(4671);
      function Q(Y, te, J) {
        const q =
          (0, _.m)(Y) || te || J ? { next: Y, error: te, complete: J } : Y;
        return q
          ? (0, M.e)((X, G) => {
              var H;
              null === (H = q.subscribe) || void 0 === H || H.call(q);
              let Ee = !0;
              X.subscribe(
                (0, P.x)(
                  G,
                  (de) => {
                    var Te;
                    null === (Te = q.next) || void 0 === Te || Te.call(q, de),
                      G.next(de);
                  },
                  () => {
                    var de;
                    (Ee = !1),
                      null === (de = q.complete) || void 0 === de || de.call(q),
                      G.complete();
                  },
                  (de) => {
                    var Te;
                    (Ee = !1),
                      null === (Te = q.error) ||
                        void 0 === Te ||
                        Te.call(q, de),
                      G.error(de);
                  },
                  () => {
                    var de, Te;
                    Ee &&
                      (null === (de = q.unsubscribe) ||
                        void 0 === de ||
                        de.call(q)),
                      null === (Te = q.finalize) || void 0 === Te || Te.call(q);
                  },
                ),
              );
            })
          : K.y;
      }
    },
    4408: (He, se, T) => {
      T.d(se, { o: () => Q });
      var _ = T(727);
      class M extends _.w0 {
        constructor(te, J) {
          super();
        }
        schedule(te, J = 0) {
          return this;
        }
      }
      const P = {
        setInterval(Y, te, ...J) {
          const { delegate: q } = P;
          return q?.setInterval
            ? q.setInterval(Y, te, ...J)
            : setInterval(Y, te, ...J);
        },
        clearInterval(Y) {
          const { delegate: te } = P;
          return (te?.clearInterval || clearInterval)(Y);
        },
        delegate: void 0,
      };
      var K = T(8737);
      class Q extends M {
        constructor(te, J) {
          super(te, J),
            (this.scheduler = te),
            (this.work = J),
            (this.pending = !1);
        }
        schedule(te, J = 0) {
          var q;
          if (this.closed) return this;
          this.state = te;
          const X = this.id,
            G = this.scheduler;
          return (
            null != X && (this.id = this.recycleAsyncId(G, X, J)),
            (this.pending = !0),
            (this.delay = J),
            (this.id =
              null !== (q = this.id) && void 0 !== q
                ? q
                : this.requestAsyncId(G, this.id, J)),
            this
          );
        }
        requestAsyncId(te, J, q = 0) {
          return P.setInterval(te.flush.bind(te, this), q);
        }
        recycleAsyncId(te, J, q = 0) {
          if (null != q && this.delay === q && !1 === this.pending) return J;
          null != J && P.clearInterval(J);
        }
        execute(te, J) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const q = this._execute(te, J);
          if (q) return q;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(te, J) {
          let X,
            q = !1;
          try {
            this.work(te);
          } catch (G) {
            (q = !0),
              (X = G || new Error("Scheduled action threw falsy error"));
          }
          if (q) return this.unsubscribe(), X;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: te, scheduler: J } = this,
              { actions: q } = J;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              (0, K.P)(q, this),
              null != te && (this.id = this.recycleAsyncId(J, te, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
    },
    640: (He, se, T) => {
      T.d(se, { v: () => P });
      const _ = { now: () => (_.delegate || Date).now(), delegate: void 0 };
      class M {
        constructor(Q, Y = M.now) {
          (this.schedulerActionCtor = Q), (this.now = Y);
        }
        schedule(Q, Y = 0, te) {
          return new this.schedulerActionCtor(this, Q).schedule(te, Y);
        }
      }
      M.now = _.now;
      class P extends M {
        constructor(Q, Y = M.now) {
          super(Q, Y), (this.actions = []), (this._active = !1);
        }
        flush(Q) {
          const { actions: Y } = this;
          if (this._active) return void Y.push(Q);
          let te;
          this._active = !0;
          do {
            if ((te = Q.execute(Q.state, Q.delay))) break;
          } while ((Q = Y.shift()));
          if (((this._active = !1), te)) {
            for (; (Q = Y.shift()); ) Q.unsubscribe();
            throw te;
          }
        }
      }
    },
    4986: (He, se, T) => {
      T.d(se, { P: () => K, z: () => P });
      var _ = T(4408);
      const P = new (T(640).v)(_.o),
        K = P;
    },
    3410: (He, se, T) => {
      T.d(se, { z: () => _ });
      const _ = {
        setTimeout(M, P, ...K) {
          const { delegate: Q } = _;
          return Q?.setTimeout
            ? Q.setTimeout(M, P, ...K)
            : setTimeout(M, P, ...K);
        },
        clearTimeout(M) {
          const { delegate: P } = _;
          return (P?.clearTimeout || clearTimeout)(M);
        },
        delegate: void 0,
      };
    },
    2202: (He, se, T) => {
      T.d(se, { h: () => M });
      const M = (function _() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (He, se, T) => {
      T.d(se, { L: () => _ });
      const _ =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    3269: (He, se, T) => {
      T.d(se, { _6: () => Y, jO: () => K, yG: () => Q });
      var _ = T(576),
        M = T(3532);
      function P(te) {
        return te[te.length - 1];
      }
      function K(te) {
        return (0, _.m)(P(te)) ? te.pop() : void 0;
      }
      function Q(te) {
        return (0, M.K)(P(te)) ? te.pop() : void 0;
      }
      function Y(te, J) {
        return "number" == typeof P(te) ? te.pop() : J;
      }
    },
    4742: (He, se, T) => {
      T.d(se, { D: () => Q });
      const { isArray: _ } = Array,
        { getPrototypeOf: M, prototype: P, keys: K } = Object;
      function Q(te) {
        if (1 === te.length) {
          const J = te[0];
          if (_(J)) return { args: J, keys: null };
          if (
            (function Y(te) {
              return te && "object" == typeof te && M(te) === P;
            })(J)
          ) {
            const q = K(J);
            return { args: q.map((X) => J[X]), keys: q };
          }
        }
        return { args: te, keys: null };
      }
    },
    8737: (He, se, T) => {
      function _(M, P) {
        if (M) {
          const K = M.indexOf(P);
          0 <= K && M.splice(K, 1);
        }
      }
      T.d(se, { P: () => _ });
    },
    3888: (He, se, T) => {
      function _(M) {
        const K = M((Q) => {
          Error.call(Q), (Q.stack = new Error().stack);
        });
        return (
          (K.prototype = Object.create(Error.prototype)),
          (K.prototype.constructor = K),
          K
        );
      }
      T.d(se, { d: () => _ });
    },
    1810: (He, se, T) => {
      function _(M, P) {
        return M.reduce((K, Q, Y) => ((K[Q] = P[Y]), K), {});
      }
      T.d(se, { n: () => _ });
    },
    2806: (He, se, T) => {
      T.d(se, { O: () => K, x: () => P });
      var _ = T(2416);
      let M = null;
      function P(Q) {
        if (_.v.useDeprecatedSynchronousErrorHandling) {
          const Y = !M;
          if ((Y && (M = { errorThrown: !1, error: null }), Q(), Y)) {
            const { errorThrown: te, error: J } = M;
            if (((M = null), te)) throw J;
          }
        } else Q();
      }
      function K(Q) {
        _.v.useDeprecatedSynchronousErrorHandling &&
          M &&
          ((M.errorThrown = !0), (M.error = Q));
      }
    },
    9672: (He, se, T) => {
      function _(M, P, K, Q = 0, Y = !1) {
        const te = P.schedule(function () {
          K(), Y ? M.add(this.schedule(null, Q)) : this.unsubscribe();
        }, Q);
        if ((M.add(te), !Y)) return te;
      }
      T.d(se, { f: () => _ });
    },
    4671: (He, se, T) => {
      function _(M) {
        return M;
      }
      T.d(se, { y: () => _ });
    },
    1144: (He, se, T) => {
      T.d(se, { z: () => _ });
      const _ = (M) =>
        M && "number" == typeof M.length && "function" != typeof M;
    },
    2206: (He, se, T) => {
      T.d(se, { D: () => M });
      var _ = T(576);
      function M(P) {
        return Symbol.asyncIterator && (0, _.m)(P?.[Symbol.asyncIterator]);
      }
    },
    576: (He, se, T) => {
      function _(M) {
        return "function" == typeof M;
      }
      T.d(se, { m: () => _ });
    },
    3670: (He, se, T) => {
      T.d(se, { c: () => P });
      var _ = T(8822),
        M = T(576);
      function P(K) {
        return (0, M.m)(K[_.L]);
      }
    },
    6495: (He, se, T) => {
      T.d(se, { T: () => P });
      var _ = T(2202),
        M = T(576);
      function P(K) {
        return (0, M.m)(K?.[_.h]);
      }
    },
    8239: (He, se, T) => {
      T.d(se, { t: () => M });
      var _ = T(576);
      function M(P) {
        return (0, _.m)(P?.then);
      }
    },
    3260: (He, se, T) => {
      T.d(se, { L: () => K, Q: () => P });
      var _ = T(655),
        M = T(576);
      function P(Q) {
        return (0, _.FC)(this, arguments, function* () {
          const te = Q.getReader();
          try {
            for (;;) {
              const { value: J, done: q } = yield (0, _.qq)(te.read());
              if (q) return yield (0, _.qq)(void 0);
              yield yield (0, _.qq)(J);
            }
          } finally {
            te.releaseLock();
          }
        });
      }
      function K(Q) {
        return (0, M.m)(Q?.getReader);
      }
    },
    3532: (He, se, T) => {
      T.d(se, { K: () => M });
      var _ = T(576);
      function M(P) {
        return P && (0, _.m)(P.schedule);
      }
    },
    4482: (He, se, T) => {
      T.d(se, { A: () => M, e: () => P });
      var _ = T(576);
      function M(K) {
        return (0, _.m)(K?.lift);
      }
      function P(K) {
        return (Q) => {
          if (M(Q))
            return Q.lift(function (Y) {
              try {
                return K(Y, this);
              } catch (te) {
                this.error(te);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (He, se, T) => {
      T.d(se, { Z: () => K });
      var _ = T(4004);
      const { isArray: M } = Array;
      function K(Q) {
        return (0, _.U)((Y) =>
          (function P(Q, Y) {
            return M(Y) ? Q(...Y) : Q(Y);
          })(Q, Y),
        );
      }
    },
    5032: (He, se, T) => {
      function _() {}
      T.d(se, { Z: () => _ });
    },
    9635: (He, se, T) => {
      T.d(se, { U: () => P, z: () => M });
      var _ = T(4671);
      function M(...K) {
        return P(K);
      }
      function P(K) {
        return 0 === K.length
          ? _.y
          : 1 === K.length
            ? K[0]
            : function (Y) {
                return K.reduce((te, J) => J(te), Y);
              };
      }
    },
    7849: (He, se, T) => {
      T.d(se, { h: () => P });
      var _ = T(2416),
        M = T(3410);
      function P(K) {
        M.z.setTimeout(() => {
          const { onUnhandledError: Q } = _.v;
          if (!Q) throw K;
          Q(K);
        });
      }
    },
    4532: (He, se, T) => {
      function _(M) {
        return new TypeError(
          `You provided ${
            null !== M && "object" == typeof M ? "an invalid object" : `'${M}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      T.d(se, { z: () => _ });
    },
    655: (He, se, T) => {
      function H(ae, ce, me, Ce) {
        return new (me || (me = Promise))(function (le, Me) {
          function ue(ft) {
            try {
              Ge(Ce.next(ft));
            } catch (it) {
              Me(it);
            }
          }
          function Fe(ft) {
            try {
              Ge(Ce.throw(ft));
            } catch (it) {
              Me(it);
            }
          }
          function Ge(ft) {
            ft.done
              ? le(ft.value)
              : (function Pe(le) {
                  return le instanceof me
                    ? le
                    : new me(function (Me) {
                        Me(le);
                      });
                })(ft.value).then(ue, Fe);
          }
          Ge((Ce = Ce.apply(ae, ce || [])).next());
        });
      }
      function oe(ae) {
        return this instanceof oe ? ((this.v = ae), this) : new oe(ae);
      }
      function U(ae, ce, me) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Pe,
          Ce = me.apply(ae, ce || []),
          le = [];
        return (
          (Pe = {}),
          Me("next"),
          Me("throw"),
          Me("return"),
          (Pe[Symbol.asyncIterator] = function () {
            return this;
          }),
          Pe
        );
        function Me(je) {
          Ce[je] &&
            (Pe[je] = function (Lt) {
              return new Promise(function (In, Qt) {
                le.push([je, Lt, In, Qt]) > 1 || ue(je, Lt);
              });
            });
        }
        function ue(je, Lt) {
          try {
            !(function Fe(je) {
              je.value instanceof oe
                ? Promise.resolve(je.value.v).then(Ge, ft)
                : it(le[0][2], je);
            })(Ce[je](Lt));
          } catch (In) {
            it(le[0][3], In);
          }
        }
        function Ge(je) {
          ue("next", je);
        }
        function ft(je) {
          ue("throw", je);
        }
        function it(je, Lt) {
          je(Lt), le.shift(), le.length && ue(le[0][0], le[0][1]);
        }
      }
      function et(ae) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var me,
          ce = ae[Symbol.asyncIterator];
        return ce
          ? ce.call(ae)
          : ((ae = (function Ye(ae) {
              var ce = "function" == typeof Symbol && Symbol.iterator,
                me = ce && ae[ce],
                Ce = 0;
              if (me) return me.call(ae);
              if (ae && "number" == typeof ae.length)
                return {
                  next: function () {
                    return (
                      ae && Ce >= ae.length && (ae = void 0),
                      { value: ae && ae[Ce++], done: !ae }
                    );
                  },
                };
              throw new TypeError(
                ce
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined.",
              );
            })(ae)),
            (me = {}),
            Ce("next"),
            Ce("throw"),
            Ce("return"),
            (me[Symbol.asyncIterator] = function () {
              return this;
            }),
            me);
        function Ce(le) {
          me[le] =
            ae[le] &&
            function (Me) {
              return new Promise(function (ue, Fe) {
                !(function Pe(le, Me, ue, Fe) {
                  Promise.resolve(Fe).then(function (Ge) {
                    le({ value: Ge, done: ue });
                  }, Me);
                })(ue, Fe, (Me = ae[le](Me)).done, Me.value);
              });
            };
        }
      }
      T.d(se, { FC: () => U, KL: () => et, mG: () => H, qq: () => oe });
    },
    7340: (He, se, T) => {
      T.d(se, {
        IO: () => Te,
        LC: () => M,
        SB: () => q,
        X$: () => K,
        ZE: () => Oe,
        ZN: () => st,
        _j: () => _,
        eR: () => G,
        jt: () => Q,
        k1: () => Be,
        l3: () => P,
        oB: () => J,
        pV: () => Ee,
        ru: () => Y,
        vP: () => te,
      });
      class _ {}
      class M {}
      const P = "*";
      function K(oe, U) {
        return { type: 7, name: oe, definitions: U, options: {} };
      }
      function Q(oe, U = null) {
        return { type: 4, styles: U, timings: oe };
      }
      function Y(oe, U = null) {
        return { type: 3, steps: oe, options: U };
      }
      function te(oe, U = null) {
        return { type: 2, steps: oe, options: U };
      }
      function J(oe) {
        return { type: 6, styles: oe, offset: null };
      }
      function q(oe, U, we) {
        return { type: 0, name: oe, styles: U, options: we };
      }
      function G(oe, U, we = null) {
        return { type: 1, expr: oe, animation: U, options: we };
      }
      function Ee(oe = null) {
        return { type: 9, options: oe };
      }
      function Te(oe, U, we = null) {
        return { type: 11, selector: oe, animation: U, options: we };
      }
      function De(oe) {
        Promise.resolve().then(oe);
      }
      class st {
        constructor(U = 0, we = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = U + we);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((U) => U()),
            (this._onDoneFns = []));
        }
        onStart(U) {
          this._originalOnStartFns.push(U), this._onStartFns.push(U);
        }
        onDone(U) {
          this._originalOnDoneFns.push(U), this._onDoneFns.push(U);
        }
        onDestroy(U) {
          this._onDestroyFns.push(U);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          De(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((U) => U()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((U) => U()),
            (this._onDestroyFns = []));
        }
        reset() {
          (this._started = !1),
            (this._finished = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        setPosition(U) {
          this._position = this.totalTime ? U * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(U) {
          const we = "start" == U ? this._onStartFns : this._onDoneFns;
          we.forEach((et) => et()), (we.length = 0);
        }
      }
      class Oe {
        constructor(U) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = U);
          let we = 0,
            et = 0,
            Ie = 0;
          const xe = this.players.length;
          0 == xe
            ? De(() => this._onFinish())
            : this.players.forEach((rt) => {
                rt.onDone(() => {
                  ++we == xe && this._onFinish();
                }),
                  rt.onDestroy(() => {
                    ++et == xe && this._onDestroy();
                  }),
                  rt.onStart(() => {
                    ++Ie == xe && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (rt, at) => Math.max(rt, at.totalTime),
              0,
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((U) => U()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((U) => U.init());
        }
        onStart(U) {
          this._onStartFns.push(U);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((U) => U()),
            (this._onStartFns = []));
        }
        onDone(U) {
          this._onDoneFns.push(U);
        }
        onDestroy(U) {
          this._onDestroyFns.push(U);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((U) => U.play());
        }
        pause() {
          this.players.forEach((U) => U.pause());
        }
        restart() {
          this.players.forEach((U) => U.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((U) => U.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((U) => U.destroy()),
            this._onDestroyFns.forEach((U) => U()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((U) => U.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(U) {
          const we = U * this.totalTime;
          this.players.forEach((et) => {
            const Ie = et.totalTime ? Math.min(1, we / et.totalTime) : 1;
            et.setPosition(Ie);
          });
        }
        getPosition() {
          const U = this.players.reduce(
            (we, et) => (null === we || et.totalTime > we.totalTime ? et : we),
            null,
          );
          return null != U ? U.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((U) => {
            U.beforeDestroy && U.beforeDestroy();
          });
        }
        triggerCallback(U) {
          const we = "start" == U ? this._onStartFns : this._onDoneFns;
          we.forEach((et) => et()), (we.length = 0);
        }
      }
      const Be = "!";
    },
    2693: (He, se, T) => {
      T.d(se, {
        rt: () => ee,
        kH: () => Ht,
        Em: () => Lt,
        tE: () => ir,
        qV: () => Vt,
        qm: () => bt,
        ic: () => Qt,
        X6: () => ht,
        yG: () => nn,
      });
      var _ = T(6895),
        M = T(4650),
        P = T(3353),
        K = T(7579),
        Q = T(727),
        Y = T(1135),
        te = T(9646),
        J = T(9521),
        q = T(8505),
        X = T(8372),
        G = T(9300),
        H = T(4004),
        Ee = T(5698),
        de = T(5684),
        Te = T(1884),
        Ye = T(2722),
        De = T(1281),
        st = T(9643),
        Oe = T(9841),
        Be = T(7272),
        oe = T(9751),
        U = T(8675);
      const et = new Set();
      let Ie,
        xe = (() => {
          class O {
            constructor(C) {
              (this._platform = C),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : at);
            }
            matchMedia(C) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function rt(O) {
                    if (!et.has(O))
                      try {
                        Ie ||
                          ((Ie = document.createElement("style")),
                          Ie.setAttribute("type", "text/css"),
                          document.head.appendChild(Ie)),
                          Ie.sheet &&
                            (Ie.sheet.insertRule(`@media ${O} {body{ }}`, 0),
                            et.add(O));
                      } catch (v) {
                        console.error(v);
                      }
                  })(C),
                this._matchMedia(C)
              );
            }
          }
          return (
            (O.ɵfac = function (C) {
              return new (C || O)(M.LFG(P.t4));
            }),
            (O.ɵprov = M.Yz7({
              token: O,
              factory: O.ɵfac,
              providedIn: "root",
            })),
            O
          );
        })();
      function at(O) {
        return {
          matches: "all" === O || "" === O,
          media: O,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let nt = (() => {
        class O {
          constructor(C, N) {
            (this._mediaMatcher = C),
              (this._zone = N),
              (this._queries = new Map()),
              (this._destroySubject = new K.x());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(C) {
            return Tt((0, De.Eq)(C)).some(
              (W) => this._registerQuery(W).mql.matches,
            );
          }
          observe(C) {
            const W = Tt((0, De.Eq)(C)).map(
              ($e) => this._registerQuery($e).observable,
            );
            let pe = (0, Oe.a)(W);
            return (
              (pe = (0, Be.z)(
                pe.pipe((0, Ee.q)(1)),
                pe.pipe((0, de.T)(1), (0, X.b)(0)),
              )),
              pe.pipe(
                (0, H.U)(($e) => {
                  const ut = { matches: !1, breakpoints: {} };
                  return (
                    $e.forEach(({ matches: Tn, query: xn }) => {
                      (ut.matches = ut.matches || Tn),
                        (ut.breakpoints[xn] = Tn);
                    }),
                    ut
                  );
                }),
              )
            );
          }
          _registerQuery(C) {
            if (this._queries.has(C)) return this._queries.get(C);
            const N = this._mediaMatcher.matchMedia(C),
              pe = {
                observable: new oe.y(($e) => {
                  const ut = (Tn) => this._zone.run(() => $e.next(Tn));
                  return (
                    N.addListener(ut),
                    () => {
                      N.removeListener(ut);
                    }
                  );
                }).pipe(
                  (0, U.O)(N),
                  (0, H.U)(({ matches: $e }) => ({ query: C, matches: $e })),
                  (0, Ye.R)(this._destroySubject),
                ),
                mql: N,
              };
            return this._queries.set(C, pe), pe;
          }
        }
        return (
          (O.ɵfac = function (C) {
            return new (C || O)(M.LFG(xe), M.LFG(M.R0b));
          }),
          (O.ɵprov = M.Yz7({ token: O, factory: O.ɵfac, providedIn: "root" })),
          O
        );
      })();
      function Tt(O) {
        return O.map((v) => v.split(","))
          .reduce((v, C) => v.concat(C))
          .map((v) => v.trim());
      }
      class it {
        constructor(v) {
          (this._items = v),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new K.x()),
            (this._typeaheadSubscription = Q.w0.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._pageUpAndDown = { enabled: !1, delta: 10 }),
            (this._skipPredicateFn = (C) => C.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new K.x()),
            (this.change = new K.x()),
            v instanceof M.n_E &&
              (this._itemChangesSubscription = v.changes.subscribe((C) => {
                if (this._activeItem) {
                  const W = C.toArray().indexOf(this._activeItem);
                  W > -1 &&
                    W !== this._activeItemIndex &&
                    (this._activeItemIndex = W);
                }
              }));
        }
        skipPredicate(v) {
          return (this._skipPredicateFn = v), this;
        }
        withWrap(v = !0) {
          return (this._wrap = v), this;
        }
        withVerticalOrientation(v = !0) {
          return (this._vertical = v), this;
        }
        withHorizontalOrientation(v) {
          return (this._horizontal = v), this;
        }
        withAllowedModifierKeys(v) {
          return (this._allowedModifierKeys = v), this;
        }
        withTypeAhead(v = 200) {
          return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
              .pipe(
                (0, q.b)((C) => this._pressedLetters.push(C)),
                (0, X.b)(v),
                (0, G.h)(() => this._pressedLetters.length > 0),
                (0, H.U)(() => this._pressedLetters.join("")),
              )
              .subscribe((C) => {
                const N = this._getItemsArray();
                for (let W = 1; W < N.length + 1; W++) {
                  const pe = (this._activeItemIndex + W) % N.length,
                    $e = N[pe];
                  if (
                    !this._skipPredicateFn($e) &&
                    0 === $e.getLabel().toUpperCase().trim().indexOf(C)
                  ) {
                    this.setActiveItem(pe);
                    break;
                  }
                }
                this._pressedLetters = [];
              })),
            this
          );
        }
        cancelTypeahead() {
          return (this._pressedLetters = []), this;
        }
        withHomeAndEnd(v = !0) {
          return (this._homeAndEnd = v), this;
        }
        withPageUpDown(v = !0, C = 10) {
          return (this._pageUpAndDown = { enabled: v, delta: C }), this;
        }
        setActiveItem(v) {
          const C = this._activeItem;
          this.updateActiveItem(v),
            this._activeItem !== C && this.change.next(this._activeItemIndex);
        }
        onKeydown(v) {
          const C = v.keyCode,
            W = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
              (pe) => !v[pe] || this._allowedModifierKeys.indexOf(pe) > -1,
            );
          switch (C) {
            case J.Mf:
              return void this.tabOut.next();
            case J.JH:
              if (this._vertical && W) {
                this.setNextItemActive();
                break;
              }
              return;
            case J.LH:
              if (this._vertical && W) {
                this.setPreviousItemActive();
                break;
              }
              return;
            case J.SV:
              if (this._horizontal && W) {
                "rtl" === this._horizontal
                  ? this.setPreviousItemActive()
                  : this.setNextItemActive();
                break;
              }
              return;
            case J.oh:
              if (this._horizontal && W) {
                "rtl" === this._horizontal
                  ? this.setNextItemActive()
                  : this.setPreviousItemActive();
                break;
              }
              return;
            case J.Sd:
              if (this._homeAndEnd && W) {
                this.setFirstItemActive();
                break;
              }
              return;
            case J.uR:
              if (this._homeAndEnd && W) {
                this.setLastItemActive();
                break;
              }
              return;
            case J.Ku:
              if (this._pageUpAndDown.enabled && W) {
                const pe = this._activeItemIndex - this._pageUpAndDown.delta;
                this._setActiveItemByIndex(pe > 0 ? pe : 0, 1);
                break;
              }
              return;
            case J.VM:
              if (this._pageUpAndDown.enabled && W) {
                const pe = this._activeItemIndex + this._pageUpAndDown.delta,
                  $e = this._getItemsArray().length;
                this._setActiveItemByIndex(pe < $e ? pe : $e - 1, -1);
                break;
              }
              return;
            default:
              return void (
                (W || (0, J.Vb)(v, "shiftKey")) &&
                (v.key && 1 === v.key.length
                  ? this._letterKeyStream.next(v.key.toLocaleUpperCase())
                  : ((C >= J.A && C <= J.Z) || (C >= J.xE && C <= J.aO)) &&
                    this._letterKeyStream.next(String.fromCharCode(C)))
              );
          }
          (this._pressedLetters = []), v.preventDefault();
        }
        get activeItemIndex() {
          return this._activeItemIndex;
        }
        get activeItem() {
          return this._activeItem;
        }
        isTyping() {
          return this._pressedLetters.length > 0;
        }
        setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        setNextItemActive() {
          this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
        }
        setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
        }
        updateActiveItem(v) {
          const C = this._getItemsArray(),
            N = "number" == typeof v ? v : C.indexOf(v);
          (this._activeItem = C[N] ?? null), (this._activeItemIndex = N);
        }
        destroy() {
          this._typeaheadSubscription.unsubscribe(),
            this._itemChangesSubscription?.unsubscribe(),
            this._letterKeyStream.complete(),
            this.tabOut.complete(),
            this.change.complete(),
            (this._pressedLetters = []);
        }
        _setActiveItemByDelta(v) {
          this._wrap
            ? this._setActiveInWrapMode(v)
            : this._setActiveInDefaultMode(v);
        }
        _setActiveInWrapMode(v) {
          const C = this._getItemsArray();
          for (let N = 1; N <= C.length; N++) {
            const W = (this._activeItemIndex + v * N + C.length) % C.length;
            if (!this._skipPredicateFn(C[W])) return void this.setActiveItem(W);
          }
        }
        _setActiveInDefaultMode(v) {
          this._setActiveItemByIndex(this._activeItemIndex + v, v);
        }
        _setActiveItemByIndex(v, C) {
          const N = this._getItemsArray();
          if (N[v]) {
            for (; this._skipPredicateFn(N[v]); ) if (!N[(v += C)]) return;
            this.setActiveItem(v);
          }
        }
        _getItemsArray() {
          return this._items instanceof M.n_E
            ? this._items.toArray()
            : this._items;
        }
      }
      class Lt extends it {
        constructor() {
          super(...arguments), (this._origin = "program");
        }
        setFocusOrigin(v) {
          return (this._origin = v), this;
        }
        setActiveItem(v) {
          super.setActiveItem(v),
            this.activeItem && this.activeItem.focus(this._origin);
        }
      }
      let Qt = (() => {
        class O {
          constructor(C) {
            this._platform = C;
          }
          isDisabled(C) {
            return C.hasAttribute("disabled");
          }
          isVisible(C) {
            return (
              (function Un(O) {
                return !!(
                  O.offsetWidth ||
                  O.offsetHeight ||
                  ("function" == typeof O.getClientRects &&
                    O.getClientRects().length)
                );
              })(C) && "visible" === getComputedStyle(C).visibility
            );
          }
          isTabbable(C) {
            if (!this._platform.isBrowser) return !1;
            const N = (function bn(O) {
              try {
                return O.frameElement;
              } catch {
                return null;
              }
            })(
              (function Yn(O) {
                return (
                  (O.ownerDocument && O.ownerDocument.defaultView) || window
                );
              })(C),
            );
            if (N && (-1 === tn(N) || !this.isVisible(N))) return !1;
            let W = C.nodeName.toLowerCase(),
              pe = tn(C);
            return C.hasAttribute("contenteditable")
              ? -1 !== pe
              : !(
                  "iframe" === W ||
                  "object" === W ||
                  (this._platform.WEBKIT &&
                    this._platform.IOS &&
                    !(function Zt(O) {
                      let v = O.nodeName.toLowerCase(),
                        C = "input" === v && O.type;
                      return (
                        "text" === C ||
                        "password" === C ||
                        "select" === v ||
                        "textarea" === v
                      );
                    })(C))
                ) &&
                  ("audio" === W
                    ? !!C.hasAttribute("controls") && -1 !== pe
                    : "video" === W
                      ? -1 !== pe &&
                        (null !== pe ||
                          this._platform.FIREFOX ||
                          C.hasAttribute("controls"))
                      : C.tabIndex >= 0);
          }
          isFocusable(C, N) {
            return (
              (function cn(O) {
                return (
                  !(function jn(O) {
                    return (
                      (function tr(O) {
                        return "input" == O.nodeName.toLowerCase();
                      })(O) && "hidden" == O.type
                    );
                  })(O) &&
                  ((function sn(O) {
                    let v = O.nodeName.toLowerCase();
                    return (
                      "input" === v ||
                      "select" === v ||
                      "button" === v ||
                      "textarea" === v
                    );
                  })(O) ||
                    (function an(O) {
                      return (
                        (function qt(O) {
                          return "a" == O.nodeName.toLowerCase();
                        })(O) && O.hasAttribute("href")
                      );
                    })(O) ||
                    O.hasAttribute("contenteditable") ||
                    Le(O))
                );
              })(C) &&
              !this.isDisabled(C) &&
              (N?.ignoreVisibility || this.isVisible(C))
            );
          }
        }
        return (
          (O.ɵfac = function (C) {
            return new (C || O)(M.LFG(P.t4));
          }),
          (O.ɵprov = M.Yz7({ token: O, factory: O.ɵfac, providedIn: "root" })),
          O
        );
      })();
      function Le(O) {
        if (!O.hasAttribute("tabindex") || void 0 === O.tabIndex) return !1;
        let v = O.getAttribute("tabindex");
        return !(!v || isNaN(parseInt(v, 10)));
      }
      function tn(O) {
        if (!Le(O)) return null;
        const v = parseInt(O.getAttribute("tabindex") || "", 10);
        return isNaN(v) ? -1 : v;
      }
      class nr {
        get enabled() {
          return this._enabled;
        }
        set enabled(v) {
          (this._enabled = v),
            this._startAnchor &&
              this._endAnchor &&
              (this._toggleAnchorTabIndex(v, this._startAnchor),
              this._toggleAnchorTabIndex(v, this._endAnchor));
        }
        constructor(v, C, N, W, pe = !1) {
          (this._element = v),
            (this._checker = C),
            (this._ngZone = N),
            (this._document = W),
            (this._hasAttached = !1),
            (this.startAnchorListener = () => this.focusLastTabbableElement()),
            (this.endAnchorListener = () => this.focusFirstTabbableElement()),
            (this._enabled = !0),
            pe || this.attachAnchors();
        }
        destroy() {
          const v = this._startAnchor,
            C = this._endAnchor;
          v &&
            (v.removeEventListener("focus", this.startAnchorListener),
            v.remove()),
            C &&
              (C.removeEventListener("focus", this.endAnchorListener),
              C.remove()),
            (this._startAnchor = this._endAnchor = null),
            (this._hasAttached = !1);
        }
        attachAnchors() {
          return (
            !!this._hasAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._startAnchor ||
                ((this._startAnchor = this._createAnchor()),
                this._startAnchor.addEventListener(
                  "focus",
                  this.startAnchorListener,
                )),
                this._endAnchor ||
                  ((this._endAnchor = this._createAnchor()),
                  this._endAnchor.addEventListener(
                    "focus",
                    this.endAnchorListener,
                  ));
            }),
            this._element.parentNode &&
              (this._element.parentNode.insertBefore(
                this._startAnchor,
                this._element,
              ),
              this._element.parentNode.insertBefore(
                this._endAnchor,
                this._element.nextSibling,
              ),
              (this._hasAttached = !0)),
            this._hasAttached)
          );
        }
        focusInitialElementWhenReady(v) {
          return new Promise((C) => {
            this._executeOnStable(() => C(this.focusInitialElement(v)));
          });
        }
        focusFirstTabbableElementWhenReady(v) {
          return new Promise((C) => {
            this._executeOnStable(() => C(this.focusFirstTabbableElement(v)));
          });
        }
        focusLastTabbableElementWhenReady(v) {
          return new Promise((C) => {
            this._executeOnStable(() => C(this.focusLastTabbableElement(v)));
          });
        }
        _getRegionBoundary(v) {
          const C = this._element.querySelectorAll(
            `[cdk-focus-region-${v}], [cdkFocusRegion${v}], [cdk-focus-${v}]`,
          );
          return "start" == v
            ? C.length
              ? C[0]
              : this._getFirstTabbableElement(this._element)
            : C.length
              ? C[C.length - 1]
              : this._getLastTabbableElement(this._element);
        }
        focusInitialElement(v) {
          const C = this._element.querySelector(
            "[cdk-focus-initial], [cdkFocusInitial]",
          );
          if (C) {
            if (!this._checker.isFocusable(C)) {
              const N = this._getFirstTabbableElement(C);
              return N?.focus(v), !!N;
            }
            return C.focus(v), !0;
          }
          return this.focusFirstTabbableElement(v);
        }
        focusFirstTabbableElement(v) {
          const C = this._getRegionBoundary("start");
          return C && C.focus(v), !!C;
        }
        focusLastTabbableElement(v) {
          const C = this._getRegionBoundary("end");
          return C && C.focus(v), !!C;
        }
        hasAttached() {
          return this._hasAttached;
        }
        _getFirstTabbableElement(v) {
          if (this._checker.isFocusable(v) && this._checker.isTabbable(v))
            return v;
          const C = v.children;
          for (let N = 0; N < C.length; N++) {
            const W =
              C[N].nodeType === this._document.ELEMENT_NODE
                ? this._getFirstTabbableElement(C[N])
                : null;
            if (W) return W;
          }
          return null;
        }
        _getLastTabbableElement(v) {
          if (this._checker.isFocusable(v) && this._checker.isTabbable(v))
            return v;
          const C = v.children;
          for (let N = C.length - 1; N >= 0; N--) {
            const W =
              C[N].nodeType === this._document.ELEMENT_NODE
                ? this._getLastTabbableElement(C[N])
                : null;
            if (W) return W;
          }
          return null;
        }
        _createAnchor() {
          const v = this._document.createElement("div");
          return (
            this._toggleAnchorTabIndex(this._enabled, v),
            v.classList.add("cdk-visually-hidden"),
            v.classList.add("cdk-focus-trap-anchor"),
            v.setAttribute("aria-hidden", "true"),
            v
          );
        }
        _toggleAnchorTabIndex(v, C) {
          v ? C.setAttribute("tabindex", "0") : C.removeAttribute("tabindex");
        }
        toggleAnchors(v) {
          this._startAnchor &&
            this._endAnchor &&
            (this._toggleAnchorTabIndex(v, this._startAnchor),
            this._toggleAnchorTabIndex(v, this._endAnchor));
        }
        _executeOnStable(v) {
          this._ngZone.isStable
            ? v()
            : this._ngZone.onStable.pipe((0, Ee.q)(1)).subscribe(v);
        }
      }
      let Vt = (() => {
        class O {
          constructor(C, N, W) {
            (this._checker = C), (this._ngZone = N), (this._document = W);
          }
          create(C, N = !1) {
            return new nr(C, this._checker, this._ngZone, this._document, N);
          }
        }
        return (
          (O.ɵfac = function (C) {
            return new (C || O)(M.LFG(Qt), M.LFG(M.R0b), M.LFG(_.K0));
          }),
          (O.ɵprov = M.Yz7({ token: O, factory: O.ɵfac, providedIn: "root" })),
          O
        );
      })();
      function ht(O) {
        return 0 === O.buttons || (0 === O.offsetX && 0 === O.offsetY);
      }
      function nn(O) {
        const v =
          (O.touches && O.touches[0]) ||
          (O.changedTouches && O.changedTouches[0]);
        return !(
          !v ||
          -1 !== v.identifier ||
          (null != v.radiusX && 1 !== v.radiusX) ||
          (null != v.radiusY && 1 !== v.radiusY)
        );
      }
      const Rr = new M.OlP("cdk-input-modality-detector-options"),
        Pt = { ignoreKeys: [J.zL, J.jx, J.b2, J.MW, J.JU] },
        _t = (0, P.i$)({ passive: !0, capture: !0 });
      let or = (() => {
        class O {
          get mostRecentModality() {
            return this._modality.value;
          }
          constructor(C, N, W, pe) {
            (this._platform = C),
              (this._mostRecentTarget = null),
              (this._modality = new Y.X(null)),
              (this._lastTouchMs = 0),
              (this._onKeydown = ($e) => {
                this._options?.ignoreKeys?.some((ut) => ut === $e.keyCode) ||
                  (this._modality.next("keyboard"),
                  (this._mostRecentTarget = (0, P.sA)($e)));
              }),
              (this._onMousedown = ($e) => {
                Date.now() - this._lastTouchMs < 650 ||
                  (this._modality.next(ht($e) ? "keyboard" : "mouse"),
                  (this._mostRecentTarget = (0, P.sA)($e)));
              }),
              (this._onTouchstart = ($e) => {
                nn($e)
                  ? this._modality.next("keyboard")
                  : ((this._lastTouchMs = Date.now()),
                    this._modality.next("touch"),
                    (this._mostRecentTarget = (0, P.sA)($e)));
              }),
              (this._options = { ...Pt, ...pe }),
              (this.modalityDetected = this._modality.pipe((0, de.T)(1))),
              (this.modalityChanged = this.modalityDetected.pipe((0, Te.x)())),
              C.isBrowser &&
                N.runOutsideAngular(() => {
                  W.addEventListener("keydown", this._onKeydown, _t),
                    W.addEventListener("mousedown", this._onMousedown, _t),
                    W.addEventListener("touchstart", this._onTouchstart, _t);
                });
          }
          ngOnDestroy() {
            this._modality.complete(),
              this._platform.isBrowser &&
                (document.removeEventListener("keydown", this._onKeydown, _t),
                document.removeEventListener(
                  "mousedown",
                  this._onMousedown,
                  _t,
                ),
                document.removeEventListener(
                  "touchstart",
                  this._onTouchstart,
                  _t,
                ));
          }
        }
        return (
          (O.ɵfac = function (C) {
            return new (C || O)(
              M.LFG(P.t4),
              M.LFG(M.R0b),
              M.LFG(_.K0),
              M.LFG(Rr, 8),
            );
          }),
          (O.ɵprov = M.Yz7({ token: O, factory: O.ɵfac, providedIn: "root" })),
          O
        );
      })();
      const Bt = new M.OlP("cdk-focus-monitor-default-options"),
        Sn = (0, P.i$)({ passive: !0, capture: !0 });
      let ir = (() => {
          class O {
            constructor(C, N, W, pe, $e) {
              (this._ngZone = C),
                (this._platform = N),
                (this._inputModalityDetector = W),
                (this._origin = null),
                (this._windowFocused = !1),
                (this._originFromTouchInteraction = !1),
                (this._elementInfo = new Map()),
                (this._monitoredElementCount = 0),
                (this._rootNodeFocusListenerCount = new Map()),
                (this._windowFocusListener = () => {
                  (this._windowFocused = !0),
                    (this._windowFocusTimeoutId = window.setTimeout(
                      () => (this._windowFocused = !1),
                    ));
                }),
                (this._stopInputModalityDetector = new K.x()),
                (this._rootNodeFocusAndBlurListener = (ut) => {
                  for (let xn = (0, P.sA)(ut); xn; xn = xn.parentElement)
                    "focus" === ut.type
                      ? this._onFocus(ut, xn)
                      : this._onBlur(ut, xn);
                }),
                (this._document = pe),
                (this._detectionMode = $e?.detectionMode || 0);
            }
            monitor(C, N = !1) {
              const W = (0, De.fI)(C);
              if (!this._platform.isBrowser || 1 !== W.nodeType)
                return (0, te.of)(null);
              const pe = (0, P.kV)(W) || this._getDocument(),
                $e = this._elementInfo.get(W);
              if ($e) return N && ($e.checkChildren = !0), $e.subject;
              const ut = { checkChildren: N, subject: new K.x(), rootNode: pe };
              return (
                this._elementInfo.set(W, ut),
                this._registerGlobalListeners(ut),
                ut.subject
              );
            }
            stopMonitoring(C) {
              const N = (0, De.fI)(C),
                W = this._elementInfo.get(N);
              W &&
                (W.subject.complete(),
                this._setClasses(N),
                this._elementInfo.delete(N),
                this._removeGlobalListeners(W));
            }
            focusVia(C, N, W) {
              const pe = (0, De.fI)(C);
              pe === this._getDocument().activeElement
                ? this._getClosestElementsInfo(pe).forEach(([ut, Tn]) =>
                    this._originChanged(ut, N, Tn),
                  )
                : (this._setOrigin(N),
                  "function" == typeof pe.focus && pe.focus(W));
            }
            ngOnDestroy() {
              this._elementInfo.forEach((C, N) => this.stopMonitoring(N));
            }
            _getDocument() {
              return this._document || document;
            }
            _getWindow() {
              return this._getDocument().defaultView || window;
            }
            _getFocusOrigin(C) {
              return this._origin
                ? this._originFromTouchInteraction
                  ? this._shouldBeAttributedToTouch(C)
                    ? "touch"
                    : "program"
                  : this._origin
                : this._windowFocused && this._lastFocusOrigin
                  ? this._lastFocusOrigin
                  : C && this._isLastInteractionFromInputLabel(C)
                    ? "mouse"
                    : "program";
            }
            _shouldBeAttributedToTouch(C) {
              return (
                1 === this._detectionMode ||
                !!C?.contains(this._inputModalityDetector._mostRecentTarget)
              );
            }
            _setClasses(C, N) {
              C.classList.toggle("cdk-focused", !!N),
                C.classList.toggle("cdk-touch-focused", "touch" === N),
                C.classList.toggle("cdk-keyboard-focused", "keyboard" === N),
                C.classList.toggle("cdk-mouse-focused", "mouse" === N),
                C.classList.toggle("cdk-program-focused", "program" === N);
            }
            _setOrigin(C, N = !1) {
              this._ngZone.runOutsideAngular(() => {
                (this._origin = C),
                  (this._originFromTouchInteraction = "touch" === C && N),
                  0 === this._detectionMode &&
                    (clearTimeout(this._originTimeoutId),
                    (this._originTimeoutId = setTimeout(
                      () => (this._origin = null),
                      this._originFromTouchInteraction ? 650 : 1,
                    )));
              });
            }
            _onFocus(C, N) {
              const W = this._elementInfo.get(N),
                pe = (0, P.sA)(C);
              !W ||
                (!W.checkChildren && N !== pe) ||
                this._originChanged(N, this._getFocusOrigin(pe), W);
            }
            _onBlur(C, N) {
              const W = this._elementInfo.get(N);
              !W ||
                (W.checkChildren &&
                  C.relatedTarget instanceof Node &&
                  N.contains(C.relatedTarget)) ||
                (this._setClasses(N), this._emitOrigin(W, null));
            }
            _emitOrigin(C, N) {
              C.subject.observers.length &&
                this._ngZone.run(() => C.subject.next(N));
            }
            _registerGlobalListeners(C) {
              if (!this._platform.isBrowser) return;
              const N = C.rootNode,
                W = this._rootNodeFocusListenerCount.get(N) || 0;
              W ||
                this._ngZone.runOutsideAngular(() => {
                  N.addEventListener(
                    "focus",
                    this._rootNodeFocusAndBlurListener,
                    Sn,
                  ),
                    N.addEventListener(
                      "blur",
                      this._rootNodeFocusAndBlurListener,
                      Sn,
                    );
                }),
                this._rootNodeFocusListenerCount.set(N, W + 1),
                1 == ++this._monitoredElementCount &&
                  (this._ngZone.runOutsideAngular(() => {
                    this._getWindow().addEventListener(
                      "focus",
                      this._windowFocusListener,
                    );
                  }),
                  this._inputModalityDetector.modalityDetected
                    .pipe((0, Ye.R)(this._stopInputModalityDetector))
                    .subscribe((pe) => {
                      this._setOrigin(pe, !0);
                    }));
            }
            _removeGlobalListeners(C) {
              const N = C.rootNode;
              if (this._rootNodeFocusListenerCount.has(N)) {
                const W = this._rootNodeFocusListenerCount.get(N);
                W > 1
                  ? this._rootNodeFocusListenerCount.set(N, W - 1)
                  : (N.removeEventListener(
                      "focus",
                      this._rootNodeFocusAndBlurListener,
                      Sn,
                    ),
                    N.removeEventListener(
                      "blur",
                      this._rootNodeFocusAndBlurListener,
                      Sn,
                    ),
                    this._rootNodeFocusListenerCount.delete(N));
              }
              --this._monitoredElementCount ||
                (this._getWindow().removeEventListener(
                  "focus",
                  this._windowFocusListener,
                ),
                this._stopInputModalityDetector.next(),
                clearTimeout(this._windowFocusTimeoutId),
                clearTimeout(this._originTimeoutId));
            }
            _originChanged(C, N, W) {
              this._setClasses(C, N),
                this._emitOrigin(W, N),
                (this._lastFocusOrigin = N);
            }
            _getClosestElementsInfo(C) {
              const N = [];
              return (
                this._elementInfo.forEach((W, pe) => {
                  (pe === C || (W.checkChildren && pe.contains(C))) &&
                    N.push([pe, W]);
                }),
                N
              );
            }
            _isLastInteractionFromInputLabel(C) {
              const { _mostRecentTarget: N, mostRecentModality: W } =
                this._inputModalityDetector;
              if (
                "mouse" !== W ||
                !N ||
                N === C ||
                ("INPUT" !== C.nodeName && "TEXTAREA" !== C.nodeName) ||
                C.disabled
              )
                return !1;
              const pe = C.labels;
              if (pe)
                for (let $e = 0; $e < pe.length; $e++)
                  if (pe[$e].contains(N)) return !0;
              return !1;
            }
          }
          return (
            (O.ɵfac = function (C) {
              return new (C || O)(
                M.LFG(M.R0b),
                M.LFG(P.t4),
                M.LFG(or),
                M.LFG(_.K0, 8),
                M.LFG(Bt, 8),
              );
            }),
            (O.ɵprov = M.Yz7({
              token: O,
              factory: O.ɵfac,
              providedIn: "root",
            })),
            O
          );
        })(),
        Ht = (() => {
          class O {
            constructor(C, N) {
              (this._elementRef = C),
                (this._focusMonitor = N),
                (this._focusOrigin = null),
                (this.cdkFocusChange = new M.vpe());
            }
            get focusOrigin() {
              return this._focusOrigin;
            }
            ngAfterViewInit() {
              const C = this._elementRef.nativeElement;
              this._monitorSubscription = this._focusMonitor
                .monitor(
                  C,
                  1 === C.nodeType && C.hasAttribute("cdkMonitorSubtreeFocus"),
                )
                .subscribe((N) => {
                  (this._focusOrigin = N), this.cdkFocusChange.emit(N);
                });
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef),
                this._monitorSubscription &&
                  this._monitorSubscription.unsubscribe();
            }
          }
          return (
            (O.ɵfac = function (C) {
              return new (C || O)(M.Y36(M.SBq), M.Y36(ir));
            }),
            (O.ɵdir = M.lG2({
              type: O,
              selectors: [
                ["", "cdkMonitorElementFocus", ""],
                ["", "cdkMonitorSubtreeFocus", ""],
              ],
              outputs: { cdkFocusChange: "cdkFocusChange" },
              exportAs: ["cdkMonitorFocus"],
            })),
            O
          );
        })();
      const Ft = "cdk-high-contrast-black-on-white",
        rn = "cdk-high-contrast-white-on-black",
        ln = "cdk-high-contrast-active";
      let bt = (() => {
          class O {
            constructor(C, N) {
              (this._platform = C),
                (this._document = N),
                (this._breakpointSubscription = (0, M.f3M)(nt)
                  .observe("(forced-colors: active)")
                  .subscribe(() => {
                    this._hasCheckedHighContrastMode &&
                      ((this._hasCheckedHighContrastMode = !1),
                      this._applyBodyHighContrastModeCssClasses());
                  }));
            }
            getHighContrastMode() {
              if (!this._platform.isBrowser) return 0;
              const C = this._document.createElement("div");
              (C.style.backgroundColor = "rgb(1,2,3)"),
                (C.style.position = "absolute"),
                this._document.body.appendChild(C);
              const N = this._document.defaultView || window,
                W = N && N.getComputedStyle ? N.getComputedStyle(C) : null,
                pe = ((W && W.backgroundColor) || "").replace(/ /g, "");
              switch ((C.remove(), pe)) {
                case "rgb(0,0,0)":
                case "rgb(45,50,54)":
                case "rgb(32,32,32)":
                  return 2;
                case "rgb(255,255,255)":
                case "rgb(255,250,239)":
                  return 1;
              }
              return 0;
            }
            ngOnDestroy() {
              this._breakpointSubscription.unsubscribe();
            }
            _applyBodyHighContrastModeCssClasses() {
              if (
                !this._hasCheckedHighContrastMode &&
                this._platform.isBrowser &&
                this._document.body
              ) {
                const C = this._document.body.classList;
                C.remove(ln, Ft, rn), (this._hasCheckedHighContrastMode = !0);
                const N = this.getHighContrastMode();
                1 === N ? C.add(ln, Ft) : 2 === N && C.add(ln, rn);
              }
            }
          }
          return (
            (O.ɵfac = function (C) {
              return new (C || O)(M.LFG(P.t4), M.LFG(_.K0));
            }),
            (O.ɵprov = M.Yz7({
              token: O,
              factory: O.ɵfac,
              providedIn: "root",
            })),
            O
          );
        })(),
        ee = (() => {
          class O {
            constructor(C) {
              C._applyBodyHighContrastModeCssClasses();
            }
          }
          return (
            (O.ɵfac = function (C) {
              return new (C || O)(M.LFG(bt));
            }),
            (O.ɵmod = M.oAB({ type: O })),
            (O.ɵinj = M.cJS({ imports: [st.Q8] })),
            O
          );
        })();
    },
    445: (He, se, T) => {
      T.d(se, { Is: () => te, vT: () => q });
      var _ = T(4650),
        M = T(6895);
      const P = new _.OlP("cdk-dir-doc", {
          providedIn: "root",
          factory: function K() {
            return (0, _.f3M)(M.K0);
          },
        }),
        Q =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      let te = (() => {
          class X {
            constructor(H) {
              (this.value = "ltr"),
                (this.change = new _.vpe()),
                H &&
                  (this.value = (function Y(X) {
                    const G = X?.toLowerCase() || "";
                    return "auto" === G &&
                      typeof navigator < "u" &&
                      navigator?.language
                      ? Q.test(navigator.language)
                        ? "rtl"
                        : "ltr"
                      : "rtl" === G
                        ? "rtl"
                        : "ltr";
                  })(
                    (H.body ? H.body.dir : null) ||
                      (H.documentElement ? H.documentElement.dir : null) ||
                      "ltr",
                  ));
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (X.ɵfac = function (H) {
              return new (H || X)(_.LFG(P, 8));
            }),
            (X.ɵprov = _.Yz7({
              token: X,
              factory: X.ɵfac,
              providedIn: "root",
            })),
            X
          );
        })(),
        q = (() => {
          class X {}
          return (
            (X.ɵfac = function (H) {
              return new (H || X)();
            }),
            (X.ɵmod = _.oAB({ type: X })),
            (X.ɵinj = _.cJS({})),
            X
          );
        })();
    },
    1281: (He, se, T) => {
      T.d(se, {
        Eq: () => Q,
        HM: () => Y,
        Ig: () => M,
        fI: () => te,
        su: () => P,
      });
      var _ = T(4650);
      function M(q) {
        return null != q && "false" != `${q}`;
      }
      function P(q, X = 0) {
        return (function K(q) {
          return !isNaN(parseFloat(q)) && !isNaN(Number(q));
        })(q)
          ? Number(q)
          : X;
      }
      function Q(q) {
        return Array.isArray(q) ? q : [q];
      }
      function Y(q) {
        return null == q ? "" : "string" == typeof q ? q : `${q}px`;
      }
      function te(q) {
        return q instanceof _.SBq ? q.nativeElement : q;
      }
    },
    9521: (He, se, T) => {
      T.d(se, {
        A: () => ue,
        JH: () => Be,
        JU: () => Y,
        K5: () => Q,
        Ku: () => Ee,
        LH: () => st,
        L_: () => H,
        MW: () => hn,
        Mf: () => P,
        SV: () => Oe,
        Sd: () => Ye,
        VM: () => de,
        Vb: () => sr,
        Z: () => ct,
        aO: () => me,
        b2: () => un,
        hY: () => G,
        jx: () => te,
        oh: () => De,
        uR: () => Te,
        xE: () => Ie,
        zL: () => J,
      });
      const P = 9,
        Q = 13,
        Y = 16,
        te = 17,
        J = 18,
        G = 27,
        H = 32,
        Ee = 33,
        de = 34,
        Te = 35,
        Ye = 36,
        De = 37,
        st = 38,
        Oe = 39,
        Be = 40,
        Ie = 48,
        me = 57,
        ue = 65,
        ct = 90,
        hn = 91,
        un = 224;
      function sr(Ot, ...dn) {
        return dn.length
          ? dn.some((ar) => Ot[ar])
          : Ot.altKey || Ot.shiftKey || Ot.ctrlKey || Ot.metaKey;
      }
    },
    9643: (He, se, T) => {
      T.d(se, { Q8: () => q, wD: () => J });
      var _ = T(1281),
        M = T(4650),
        P = T(9751),
        K = T(7579),
        Q = T(8372);
      let Y = (() => {
          class X {
            create(H) {
              return typeof MutationObserver > "u"
                ? null
                : new MutationObserver(H);
            }
          }
          return (
            (X.ɵfac = function (H) {
              return new (H || X)();
            }),
            (X.ɵprov = M.Yz7({
              token: X,
              factory: X.ɵfac,
              providedIn: "root",
            })),
            X
          );
        })(),
        te = (() => {
          class X {
            constructor(H) {
              (this._mutationObserverFactory = H),
                (this._observedElements = new Map());
            }
            ngOnDestroy() {
              this._observedElements.forEach((H, Ee) =>
                this._cleanupObserver(Ee),
              );
            }
            observe(H) {
              const Ee = (0, _.fI)(H);
              return new P.y((de) => {
                const Ye = this._observeElement(Ee).subscribe(de);
                return () => {
                  Ye.unsubscribe(), this._unobserveElement(Ee);
                };
              });
            }
            _observeElement(H) {
              if (this._observedElements.has(H))
                this._observedElements.get(H).count++;
              else {
                const Ee = new K.x(),
                  de = this._mutationObserverFactory.create((Te) =>
                    Ee.next(Te),
                  );
                de &&
                  de.observe(H, {
                    characterData: !0,
                    childList: !0,
                    subtree: !0,
                  }),
                  this._observedElements.set(H, {
                    observer: de,
                    stream: Ee,
                    count: 1,
                  });
              }
              return this._observedElements.get(H).stream;
            }
            _unobserveElement(H) {
              this._observedElements.has(H) &&
                (this._observedElements.get(H).count--,
                this._observedElements.get(H).count ||
                  this._cleanupObserver(H));
            }
            _cleanupObserver(H) {
              if (this._observedElements.has(H)) {
                const { observer: Ee, stream: de } =
                  this._observedElements.get(H);
                Ee && Ee.disconnect(),
                  de.complete(),
                  this._observedElements.delete(H);
              }
            }
          }
          return (
            (X.ɵfac = function (H) {
              return new (H || X)(M.LFG(Y));
            }),
            (X.ɵprov = M.Yz7({
              token: X,
              factory: X.ɵfac,
              providedIn: "root",
            })),
            X
          );
        })(),
        J = (() => {
          class X {
            get disabled() {
              return this._disabled;
            }
            set disabled(H) {
              (this._disabled = (0, _.Ig)(H)),
                this._disabled ? this._unsubscribe() : this._subscribe();
            }
            get debounce() {
              return this._debounce;
            }
            set debounce(H) {
              (this._debounce = (0, _.su)(H)), this._subscribe();
            }
            constructor(H, Ee, de) {
              (this._contentObserver = H),
                (this._elementRef = Ee),
                (this._ngZone = de),
                (this.event = new M.vpe()),
                (this._disabled = !1),
                (this._currentSubscription = null);
            }
            ngAfterContentInit() {
              !this._currentSubscription && !this.disabled && this._subscribe();
            }
            ngOnDestroy() {
              this._unsubscribe();
            }
            _subscribe() {
              this._unsubscribe();
              const H = this._contentObserver.observe(this._elementRef);
              this._ngZone.runOutsideAngular(() => {
                this._currentSubscription = (
                  this.debounce ? H.pipe((0, Q.b)(this.debounce)) : H
                ).subscribe(this.event);
              });
            }
            _unsubscribe() {
              this._currentSubscription?.unsubscribe();
            }
          }
          return (
            (X.ɵfac = function (H) {
              return new (H || X)(M.Y36(te), M.Y36(M.SBq), M.Y36(M.R0b));
            }),
            (X.ɵdir = M.lG2({
              type: X,
              selectors: [["", "cdkObserveContent", ""]],
              inputs: {
                disabled: ["cdkObserveContentDisabled", "disabled"],
                debounce: "debounce",
              },
              outputs: { event: "cdkObserveContent" },
              exportAs: ["cdkObserveContent"],
            })),
            X
          );
        })(),
        q = (() => {
          class X {}
          return (
            (X.ɵfac = function (H) {
              return new (H || X)();
            }),
            (X.ɵmod = M.oAB({ type: X })),
            (X.ɵinj = M.cJS({ providers: [Y] })),
            X
          );
        })();
    },
    3353: (He, se, T) => {
      T.d(se, {
        Mq: () => de,
        Oy: () => oe,
        _i: () => Te,
        ht: () => Oe,
        i$: () => G,
        kV: () => st,
        qK: () => J,
        sA: () => Be,
        t4: () => K,
      });
      var _ = T(4650),
        M = T(6895);
      let P;
      try {
        P = typeof Intl < "u" && Intl.v8BreakIterator;
      } catch {
        P = !1;
      }
      let Y,
        K = (() => {
          class U {
            constructor(et) {
              (this._platformId = et),
                (this.isBrowser = this._platformId
                  ? (0, M.NF)(this._platformId)
                  : "object" == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !P) &&
                  typeof CSS < "u" &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !("MSStream" in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (U.ɵfac = function (et) {
              return new (et || U)(_.LFG(_.Lbi));
            }),
            (U.ɵprov = _.Yz7({
              token: U,
              factory: U.ɵfac,
              providedIn: "root",
            })),
            U
          );
        })();
      const te = [
        "color",
        "button",
        "checkbox",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ];
      function J() {
        if (Y) return Y;
        if ("object" != typeof document || !document)
          return (Y = new Set(te)), Y;
        let U = document.createElement("input");
        return (
          (Y = new Set(
            te.filter((we) => (U.setAttribute("type", we), U.type === we)),
          )),
          Y
        );
      }
      let q, H, Ee, Ye;
      function G(U) {
        return (function X() {
          if (null == q && typeof window < "u")
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (q = !0) }),
              );
            } finally {
              q = q || !1;
            }
          return q;
        })()
          ? U
          : !!U.capture;
      }
      function de() {
        if (null == Ee) {
          if (
            "object" != typeof document ||
            !document ||
            "function" != typeof Element ||
            !Element
          )
            return (Ee = !1), Ee;
          if ("scrollBehavior" in document.documentElement.style) Ee = !0;
          else {
            const U = Element.prototype.scrollTo;
            Ee = !!U && !/\{\s*\[native code\]\s*\}/.test(U.toString());
          }
        }
        return Ee;
      }
      function Te() {
        if ("object" != typeof document || !document) return 0;
        if (null == H) {
          const U = document.createElement("div"),
            we = U.style;
          (U.dir = "rtl"),
            (we.width = "1px"),
            (we.overflow = "auto"),
            (we.visibility = "hidden"),
            (we.pointerEvents = "none"),
            (we.position = "absolute");
          const et = document.createElement("div"),
            Ie = et.style;
          (Ie.width = "2px"),
            (Ie.height = "1px"),
            U.appendChild(et),
            document.body.appendChild(U),
            (H = 0),
            0 === U.scrollLeft &&
              ((U.scrollLeft = 1), (H = 0 === U.scrollLeft ? 1 : 2)),
            U.remove();
        }
        return H;
      }
      function st(U) {
        if (
          (function De() {
            if (null == Ye) {
              const U = typeof document < "u" ? document.head : null;
              Ye = !(!U || (!U.createShadowRoot && !U.attachShadow));
            }
            return Ye;
          })()
        ) {
          const we = U.getRootNode ? U.getRootNode() : null;
          if (typeof ShadowRoot < "u" && ShadowRoot && we instanceof ShadowRoot)
            return we;
        }
        return null;
      }
      function Oe() {
        let U =
          typeof document < "u" && document ? document.activeElement : null;
        for (; U && U.shadowRoot; ) {
          const we = U.shadowRoot.activeElement;
          if (we === U) break;
          U = we;
        }
        return U;
      }
      function Be(U) {
        return U.composedPath ? U.composedPath()[0] : U.target;
      }
      function oe() {
        return (
          (typeof __karma__ < "u" && !!__karma__) ||
          (typeof jasmine < "u" && !!jasmine) ||
          (typeof jest < "u" && !!jest) ||
          (typeof Mocha < "u" && !!Mocha)
        );
      }
    },
    6895: (He, se, T) => {
      T.d(se, {
        Do: () => Oe,
        EM: () => Ci,
        HT: () => K,
        JF: () => po,
        K0: () => Y,
        Mx: () => Qr,
        NF: () => ho,
        O5: () => ar,
        Ov: () => kr,
        PC: () => qr,
        PM: () => Ao,
        RF: () => Mr,
        S$: () => Ye,
        V_: () => q,
        Ye: () => Be,
        b0: () => st,
        bD: () => To,
        ez: () => es,
        mk: () => pt,
        n9: () => Nr,
        q: () => P,
        sg: () => sr,
        tP: () => vr,
        w_: () => Q,
      });
      var _ = T(4650);
      let M = null;
      function P() {
        return M;
      }
      function K(h) {
        M || (M = h);
      }
      class Q {}
      const Y = new _.OlP("DocumentToken");
      let te = (() => {
        class h {
          historyGo(g) {
            throw new Error("Not implemented");
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)();
          }),
          (h.ɵprov = _.Yz7({
            token: h,
            factory: function () {
              return (function J() {
                return (0, _.LFG)(X);
              })();
            },
            providedIn: "platform",
          })),
          h
        );
      })();
      const q = new _.OlP("Location Initialized");
      let X = (() => {
        class h extends te {
          constructor(g) {
            super(),
              (this._doc = g),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return P().getBaseHref(this._doc);
          }
          onPopState(g) {
            const x = P().getGlobalEventTarget(this._doc, "window");
            return (
              x.addEventListener("popstate", g, !1),
              () => x.removeEventListener("popstate", g)
            );
          }
          onHashChange(g) {
            const x = P().getGlobalEventTarget(this._doc, "window");
            return (
              x.addEventListener("hashchange", g, !1),
              () => x.removeEventListener("hashchange", g)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(g) {
            this._location.pathname = g;
          }
          pushState(g, x, k) {
            G() ? this._history.pushState(g, x, k) : (this._location.hash = k);
          }
          replaceState(g, x, k) {
            G()
              ? this._history.replaceState(g, x, k)
              : (this._location.hash = k);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(g = 0) {
            this._history.go(g);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)(_.LFG(Y));
          }),
          (h.ɵprov = _.Yz7({
            token: h,
            factory: function () {
              return (function H() {
                return new X((0, _.LFG)(Y));
              })();
            },
            providedIn: "platform",
          })),
          h
        );
      })();
      function G() {
        return !!window.history.pushState;
      }
      function Ee(h, D) {
        if (0 == h.length) return D;
        if (0 == D.length) return h;
        let g = 0;
        return (
          h.endsWith("/") && g++,
          D.startsWith("/") && g++,
          2 == g ? h + D.substring(1) : 1 == g ? h + D : h + "/" + D
        );
      }
      function de(h) {
        const D = h.match(/#|\?|$/),
          g = (D && D.index) || h.length;
        return h.slice(0, g - ("/" === h[g - 1] ? 1 : 0)) + h.slice(g);
      }
      function Te(h) {
        return h && "?" !== h[0] ? "?" + h : h;
      }
      let Ye = (() => {
        class h {
          historyGo(g) {
            throw new Error("Not implemented");
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)();
          }),
          (h.ɵprov = _.Yz7({
            token: h,
            factory: function () {
              return (0, _.f3M)(st);
            },
            providedIn: "root",
          })),
          h
        );
      })();
      const De = new _.OlP("appBaseHref");
      let st = (() => {
          class h extends Ye {
            constructor(g, x) {
              super(),
                (this._platformLocation = g),
                (this._removeListenerFns = []),
                (this._baseHref =
                  x ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, _.f3M)(Y).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(g) {
              return Ee(this._baseHref, g);
            }
            path(g = !1) {
              const x =
                  this._platformLocation.pathname +
                  Te(this._platformLocation.search),
                k = this._platformLocation.hash;
              return k && g ? `${x}${k}` : x;
            }
            pushState(g, x, k, ie) {
              const ve = this.prepareExternalUrl(k + Te(ie));
              this._platformLocation.pushState(g, x, ve);
            }
            replaceState(g, x, k, ie) {
              const ve = this.prepareExternalUrl(k + Te(ie));
              this._platformLocation.replaceState(g, x, ve);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.LFG(te), _.LFG(De, 8));
            }),
            (h.ɵprov = _.Yz7({
              token: h,
              factory: h.ɵfac,
              providedIn: "root",
            })),
            h
          );
        })(),
        Oe = (() => {
          class h extends Ye {
            constructor(g, x) {
              super(),
                (this._platformLocation = g),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != x && (this._baseHref = x);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(g = !1) {
              let x = this._platformLocation.hash;
              return null == x && (x = "#"), x.length > 0 ? x.substring(1) : x;
            }
            prepareExternalUrl(g) {
              const x = Ee(this._baseHref, g);
              return x.length > 0 ? "#" + x : x;
            }
            pushState(g, x, k, ie) {
              let ve = this.prepareExternalUrl(k + Te(ie));
              0 == ve.length && (ve = this._platformLocation.pathname),
                this._platformLocation.pushState(g, x, ve);
            }
            replaceState(g, x, k, ie) {
              let ve = this.prepareExternalUrl(k + Te(ie));
              0 == ve.length && (ve = this._platformLocation.pathname),
                this._platformLocation.replaceState(g, x, ve);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.LFG(te), _.LFG(De, 8));
            }),
            (h.ɵprov = _.Yz7({ token: h, factory: h.ɵfac })),
            h
          );
        })(),
        Be = (() => {
          class h {
            constructor(g) {
              (this._subject = new _.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = g);
              const x = this._locationStrategy.getBaseHref();
              (this._basePath = (function et(h) {
                if (new RegExp("^(https?:)?//").test(h)) {
                  const [, g] = h.split(/\/\/[^\/]+/);
                  return g;
                }
                return h;
              })(de(we(x)))),
                this._locationStrategy.onPopState((k) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: k.state,
                    type: k.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(g = !1) {
              return this.normalize(this._locationStrategy.path(g));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(g, x = "") {
              return this.path() == this.normalize(g + Te(x));
            }
            normalize(g) {
              return h.stripTrailingSlash(
                (function U(h, D) {
                  if (!h || !D.startsWith(h)) return D;
                  const g = D.substring(h.length);
                  return "" === g || ["/", ";", "?", "#"].includes(g[0])
                    ? g
                    : D;
                })(this._basePath, we(g)),
              );
            }
            prepareExternalUrl(g) {
              return (
                g && "/" !== g[0] && (g = "/" + g),
                this._locationStrategy.prepareExternalUrl(g)
              );
            }
            go(g, x = "", k = null) {
              this._locationStrategy.pushState(k, "", g, x),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + Te(x)),
                  k,
                );
            }
            replaceState(g, x = "", k = null) {
              this._locationStrategy.replaceState(k, "", g, x),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + Te(x)),
                  k,
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(g = 0) {
              this._locationStrategy.historyGo?.(g);
            }
            onUrlChange(g) {
              return (
                this._urlChangeListeners.push(g),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((x) => {
                    this._notifyUrlChangeListeners(x.url, x.state);
                  })),
                () => {
                  const x = this._urlChangeListeners.indexOf(g);
                  this._urlChangeListeners.splice(x, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(g = "", x) {
              this._urlChangeListeners.forEach((k) => k(g, x));
            }
            subscribe(g, x, k) {
              return this._subject.subscribe({
                next: g,
                error: x,
                complete: k,
              });
            }
          }
          return (
            (h.normalizeQueryParams = Te),
            (h.joinWithSlash = Ee),
            (h.stripTrailingSlash = de),
            (h.ɵfac = function (g) {
              return new (g || h)(_.LFG(Ye));
            }),
            (h.ɵprov = _.Yz7({
              token: h,
              factory: function () {
                return (function oe() {
                  return new Be((0, _.LFG)(Ye));
                })();
              },
              providedIn: "root",
            })),
            h
          );
        })();
      function we(h) {
        return h.replace(/\/index.html$/, "");
      }
      function Qr(h, D) {
        D = encodeURIComponent(D);
        for (const g of h.split(";")) {
          const x = g.indexOf("="),
            [k, ie] = -1 == x ? [g, ""] : [g.slice(0, x), g.slice(x + 1)];
          if (k.trim() === D) return decodeURIComponent(ie);
        }
        return null;
      }
      const Zn = /\s+/,
        Ve = [];
      let pt = (() => {
        class h {
          constructor(g, x, k, ie) {
            (this._iterableDiffers = g),
              (this._keyValueDiffers = x),
              (this._ngEl = k),
              (this._renderer = ie),
              (this.initialClasses = Ve),
              (this.stateMap = new Map());
          }
          set klass(g) {
            this.initialClasses = null != g ? g.trim().split(Zn) : Ve;
          }
          set ngClass(g) {
            this.rawClass = "string" == typeof g ? g.trim().split(Zn) : g;
          }
          ngDoCheck() {
            for (const x of this.initialClasses) this._updateState(x, !0);
            const g = this.rawClass;
            if (Array.isArray(g) || g instanceof Set)
              for (const x of g) this._updateState(x, !0);
            else if (null != g)
              for (const x of Object.keys(g))
                this._updateState(x, Boolean(g[x]));
            this._applyStateDiff();
          }
          _updateState(g, x) {
            const k = this.stateMap.get(g);
            void 0 !== k
              ? (k.enabled !== x && ((k.changed = !0), (k.enabled = x)),
                (k.touched = !0))
              : this.stateMap.set(g, { enabled: x, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const g of this.stateMap) {
              const x = g[0],
                k = g[1];
              k.changed
                ? (this._toggleClass(x, k.enabled), (k.changed = !1))
                : k.touched ||
                  (k.enabled && this._toggleClass(x, !1),
                  this.stateMap.delete(x)),
                (k.touched = !1);
            }
          }
          _toggleClass(g, x) {
            (g = g.trim()).length > 0 &&
              g.split(Zn).forEach((k) => {
                x
                  ? this._renderer.addClass(this._ngEl.nativeElement, k)
                  : this._renderer.removeClass(this._ngEl.nativeElement, k);
              });
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)(
              _.Y36(_.ZZ4),
              _.Y36(_.aQg),
              _.Y36(_.SBq),
              _.Y36(_.Qsj),
            );
          }),
          (h.ɵdir = _.lG2({
            type: h,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            standalone: !0,
          })),
          h
        );
      })();
      class un {
        constructor(D, g, x, k) {
          (this.$implicit = D),
            (this.ngForOf = g),
            (this.index = x),
            (this.count = k);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let sr = (() => {
        class h {
          set ngForOf(g) {
            (this._ngForOf = g), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(g) {
            this._trackByFn = g;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(g, x, k) {
            (this._viewContainer = g),
              (this._template = x),
              (this._differs = k),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(g) {
            g && (this._template = g);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const g = this._ngForOf;
              !this._differ &&
                g &&
                (this._differ = this._differs
                  .find(g)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const g = this._differ.diff(this._ngForOf);
              g && this._applyChanges(g);
            }
          }
          _applyChanges(g) {
            const x = this._viewContainer;
            g.forEachOperation((k, ie, ve) => {
              if (null == k.previousIndex)
                x.createEmbeddedView(
                  this._template,
                  new un(k.item, this._ngForOf, -1, -1),
                  null === ve ? void 0 : ve,
                );
              else if (null == ve) x.remove(null === ie ? void 0 : ie);
              else if (null !== ie) {
                const tt = x.get(ie);
                x.move(tt, ve), Ot(tt, k);
              }
            });
            for (let k = 0, ie = x.length; k < ie; k++) {
              const tt = x.get(k).context;
              (tt.index = k), (tt.count = ie), (tt.ngForOf = this._ngForOf);
            }
            g.forEachIdentityChange((k) => {
              Ot(x.get(k.currentIndex), k);
            });
          }
          static ngTemplateContextGuard(g, x) {
            return !0;
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)(_.Y36(_.s_b), _.Y36(_.Rgc), _.Y36(_.ZZ4));
          }),
          (h.ɵdir = _.lG2({
            type: h,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          })),
          h
        );
      })();
      function Ot(h, D) {
        h.context.$implicit = D.item;
      }
      let ar = (() => {
        class h {
          constructor(g, x) {
            (this._viewContainer = g),
              (this._context = new mt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = x);
          }
          set ngIf(g) {
            (this._context.$implicit = this._context.ngIf = g),
              this._updateView();
          }
          set ngIfThen(g) {
            Fr("ngIfThen", g),
              (this._thenTemplateRef = g),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(g) {
            Fr("ngIfElse", g),
              (this._elseTemplateRef = g),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngTemplateContextGuard(g, x) {
            return !0;
          }
        }
        return (
          (h.ɵfac = function (g) {
            return new (g || h)(_.Y36(_.s_b), _.Y36(_.Rgc));
          }),
          (h.ɵdir = _.lG2({
            type: h,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          h
        );
      })();
      class mt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Fr(h, D) {
        if (D && !D.createEmbeddedView)
          throw new Error(
            `${h} must be a TemplateRef, but received '${(0, _.AaK)(D)}'.`,
          );
      }
      class Qn {
        constructor(D, g) {
          (this._viewContainerRef = D),
            (this._templateRef = g),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(D) {
          D && !this._created
            ? this.create()
            : !D && this._created && this.destroy();
        }
      }
      let Mr = (() => {
          class h {
            constructor() {
              (this._defaultViews = []),
                (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(g) {
              (this._ngSwitch = g),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(g) {
              this._defaultViews.push(g);
            }
            _matchCase(g) {
              const x = g == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || x),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                x
              );
            }
            _updateDefaultCases(g) {
              if (this._defaultViews.length > 0 && g !== this._defaultUsed) {
                this._defaultUsed = g;
                for (const x of this._defaultViews) x.enforceState(g);
              }
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)();
            }),
            (h.ɵdir = _.lG2({
              type: h,
              selectors: [["", "ngSwitch", ""]],
              inputs: { ngSwitch: "ngSwitch" },
              standalone: !0,
            })),
            h
          );
        })(),
        Nr = (() => {
          class h {
            constructor(g, x, k) {
              (this.ngSwitch = k), k._addCase(), (this._view = new Qn(g, x));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.Y36(_.s_b), _.Y36(_.Rgc), _.Y36(Mr, 9));
            }),
            (h.ɵdir = _.lG2({
              type: h,
              selectors: [["", "ngSwitchCase", ""]],
              inputs: { ngSwitchCase: "ngSwitchCase" },
              standalone: !0,
            })),
            h
          );
        })(),
        qr = (() => {
          class h {
            constructor(g, x, k) {
              (this._ngEl = g),
                (this._differs = x),
                (this._renderer = k),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(g) {
              (this._ngStyle = g),
                !this._differ &&
                  g &&
                  (this._differ = this._differs.find(g).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const g = this._differ.diff(this._ngStyle);
                g && this._applyChanges(g);
              }
            }
            _setStyle(g, x) {
              const [k, ie] = g.split("."),
                ve = -1 === k.indexOf("-") ? void 0 : _.JOm.DashCase;
              null != x
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    k,
                    ie ? `${x}${ie}` : x,
                    ve,
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, k, ve);
            }
            _applyChanges(g) {
              g.forEachRemovedItem((x) => this._setStyle(x.key, null)),
                g.forEachAddedItem((x) =>
                  this._setStyle(x.key, x.currentValue),
                ),
                g.forEachChangedItem((x) =>
                  this._setStyle(x.key, x.currentValue),
                );
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.Y36(_.SBq), _.Y36(_.aQg), _.Y36(_.Qsj));
            }),
            (h.ɵdir = _.lG2({
              type: h,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
              standalone: !0,
            })),
            h
          );
        })(),
        vr = (() => {
          class h {
            constructor(g) {
              (this._viewContainerRef = g),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(g) {
              if (g.ngTemplateOutlet || g.ngTemplateOutletInjector) {
                const x = this._viewContainerRef;
                if (
                  (this._viewRef && x.remove(x.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: k,
                    ngTemplateOutletContext: ie,
                    ngTemplateOutletInjector: ve,
                  } = this;
                  this._viewRef = x.createEmbeddedView(
                    k,
                    ie,
                    ve ? { injector: ve } : void 0,
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  g.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.Y36(_.s_b));
            }),
            (h.ɵdir = _.lG2({
              type: h,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector",
              },
              standalone: !0,
              features: [_.TTD],
            })),
            h
          );
        })();
      class Xr {
        createSubscription(D, g) {
          return D.subscribe({
            next: g,
            error: (x) => {
              throw x;
            },
          });
        }
        dispose(D) {
          D.unsubscribe();
        }
      }
      class lo {
        createSubscription(D, g) {
          return D.then(g, (x) => {
            throw x;
          });
        }
        dispose(D) {}
      }
      const oi = new lo(),
        vi = new Xr();
      let kr = (() => {
          class h {
            constructor(g) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = g);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(g) {
              return this._obj
                ? g !== this._obj
                  ? (this._dispose(), this.transform(g))
                  : this._latestValue
                : (g && this._subscribe(g), this._latestValue);
            }
            _subscribe(g) {
              (this._obj = g),
                (this._strategy = this._selectStrategy(g)),
                (this._subscription = this._strategy.createSubscription(
                  g,
                  (x) => this._updateLatestValue(g, x),
                ));
            }
            _selectStrategy(g) {
              if ((0, _.QGY)(g)) return oi;
              if ((0, _.F4k)(g)) return vi;
              throw (function qn(h, D) {
                return new _.vHH(2100, !1);
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(g, x) {
              g === this._obj &&
                ((this._latestValue = x), this._ref.markForCheck());
            }
          }
          return (
            (h.ɵfac = function (g) {
              return new (g || h)(_.Y36(_.sBO, 16));
            }),
            (h.ɵpipe = _.Yjl({
              name: "async",
              type: h,
              pure: !1,
              standalone: !0,
            })),
            h
          );
        })(),
        es = (() => {
          class h {}
          return (
            (h.ɵfac = function (g) {
              return new (g || h)();
            }),
            (h.ɵmod = _.oAB({ type: h })),
            (h.ɵinj = _.cJS({})),
            h
          );
        })();
      const To = "browser",
        ai = "server";
      function ho(h) {
        return h === To;
      }
      function Ao(h) {
        return h === ai;
      }
      let Ci = (() => {
        class h {}
        return (
          (h.ɵprov = (0, _.Yz7)({
            token: h,
            providedIn: "root",
            factory: () => new Oo((0, _.LFG)(Y), window),
          })),
          h
        );
      })();
      class Oo {
        constructor(D, g) {
          (this.document = D), (this.window = g), (this.offset = () => [0, 0]);
        }
        setOffset(D) {
          this.offset = Array.isArray(D) ? () => D : D;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(D) {
          this.supportsScrolling() && this.window.scrollTo(D[0], D[1]);
        }
        scrollToAnchor(D) {
          if (!this.supportsScrolling()) return;
          const g = (function Mi(h, D) {
            const g = h.getElementById(D) || h.getElementsByName(D)[0];
            if (g) return g;
            if (
              "function" == typeof h.createTreeWalker &&
              h.body &&
              (h.body.createShadowRoot || h.body.attachShadow)
            ) {
              const x = h.createTreeWalker(h.body, NodeFilter.SHOW_ELEMENT);
              let k = x.currentNode;
              for (; k; ) {
                const ie = k.shadowRoot;
                if (ie) {
                  const ve =
                    ie.getElementById(D) || ie.querySelector(`[name="${D}"]`);
                  if (ve) return ve;
                }
                k = x.nextNode();
              }
            }
            return null;
          })(this.document, D);
          g && (this.scrollToElement(g), g.focus());
        }
        setHistoryScrollRestoration(D) {
          if (this.supportScrollRestoration()) {
            const g = this.window.history;
            g && g.scrollRestoration && (g.scrollRestoration = D);
          }
        }
        scrollToElement(D) {
          const g = D.getBoundingClientRect(),
            x = g.left + this.window.pageXOffset,
            k = g.top + this.window.pageYOffset,
            ie = this.offset();
          this.window.scrollTo(x - ie[0], k - ie[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const D =
              Zi(this.window.history) ||
              Zi(Object.getPrototypeOf(this.window.history));
            return !(!D || (!D.writable && !D.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function Zi(h) {
        return Object.getOwnPropertyDescriptor(h, "scrollRestoration");
      }
      class po {}
    },
    4650: (He, se, T) => {
      T.d(se, {
        $8M: () => Bo,
        $WT: () => Xt,
        $Z: () => qd,
        AFp: () => Xp,
        ALo: () => yp,
        AaK: () => J,
        Akn: () => mi,
        BQk: () => Za,
        CHM: () => Ai,
        CRH: () => xp,
        CZH: () => cc,
        CqO: () => Pf,
        D6c: () => AD,
        DdM: () => dp,
        EJc: () => K0,
        EiD: () => md,
        EpF: () => Of,
        F$t: () => Bf,
        F4k: () => Rf,
        FYo: () => xd,
        FiY: () => ro,
        Gf: () => Sp,
        GfV: () => Ad,
        Gpc: () => G,
        Hsn: () => Uf,
        Ikx: () => kl,
        JOm: () => Ui,
        JVY: () => Og,
        JZr: () => Ye,
        Jf7: () => Od,
        KtG: () => Oi,
        L6k: () => Rg,
        LAX: () => Fg,
        LFG: () => ye,
        LSH: () => zc,
        Lbi: () => V0,
        Lck: () => Hv,
        MAs: () => xf,
        MMx: () => Kl,
        MR2: () => Qg,
        NdJ: () => Sl,
        O4$: () => Dt,
        OlP: () => en,
        Oqu: () => Ll,
        P3R: () => _d,
        PXZ: () => cD,
        Q6J: () => wl,
        QGY: () => Il,
        QbO: () => z0,
        Qsj: () => d_,
        R0b: () => ri,
        RDi: () => Cg,
        Rgc: () => pa,
        SBq: () => ea,
        Sil: () => Z0,
        Suo: () => Tp,
        TTD: () => ci,
        TgZ: () => Wa,
        Tol: () => nh,
        Udp: () => Pl,
        VKq: () => fp,
        W1O: () => Pp,
        WFA: () => Tl,
        WLB: () => hp,
        XFs: () => Le,
        Xpm: () => $e,
        Xts: () => Wc,
        Y36: () => _s,
        YKP: () => np,
        YNc: () => Tf,
        Yjl: () => br,
        Yz7: () => it,
        Z0I: () => Qt,
        ZZ4: () => bu,
        _Bn: () => tp,
        _UZ: () => Ml,
        _Vd: () => Js,
        _c5: () => TD,
        _uU: () => lh,
        aQg: () => yu,
        c2e: () => G0,
        cJS: () => Lt,
        cg1: () => Ul,
        d8E: () => Bl,
        dDg: () => iD,
        dqk: () => Vt,
        eBb: () => Pg,
        eFA: () => dm,
        eJc: () => nu,
        ekj: () => Fl,
        eoX: () => am,
        f3M: () => $,
        g9A: () => em,
        h0i: () => Os,
        hGG: () => xD,
        hij: () => Xa,
        iGM: () => Ip,
        ifc: () => rn,
        ip1: () => qp,
        jDz: () => ip,
        kL8: () => Sh,
        kcU: () => Wt,
        lG2: () => _r,
        lcZ: () => vp,
        lqb: () => Go,
        lri: () => om,
        mCW: () => Ra,
        n5z: () => to,
        n_E: () => rc,
        oAB: () => Kr,
        oJD: () => gd,
        oxw: () => kf,
        pB0: () => Ng,
        q3G: () => kn,
        qLn: () => ta,
        qOj: () => yl,
        qZA: () => Ka,
        qzn: () => fs,
        rWj: () => sm,
        sBO: () => hD,
        s_b: () => oc,
        soG: () => lc,
        tBr: () => zs,
        tb: () => lm,
        tp0: () => Gs,
        uIk: () => El,
        uOi: () => Gc,
        vHH: () => De,
        vpe: () => Vi,
        wAp: () => vt,
        xp6: () => Bd,
        ynx: () => Ya,
        z2F: () => uc,
        z3N: () => io,
        zSh: () => Qc,
        zs3: () => Wo,
      });
      var _ = T(7579),
        M = T(727),
        P = T(9751),
        K = T(6451),
        Q = T(3099);
      function Y(e) {
        for (let t in e) if (e[t] === Y) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function te(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function J(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(J).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function q(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
            ? e
            : e + " " + t;
      }
      const X = Y({ __forward_ref__: Y });
      function G(e) {
        return (
          (e.__forward_ref__ = G),
          (e.toString = function () {
            return J(this());
          }),
          e
        );
      }
      function H(e) {
        return Ee(e) ? e() : e;
      }
      function Ee(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(X) &&
          e.__forward_ref__ === G
        );
      }
      function de(e) {
        return e && !!e.ɵproviders;
      }
      const Ye = "https://g.co/ng/security#xss";
      class De extends Error {
        constructor(t, n) {
          super(st(t, n)), (this.code = t);
        }
      }
      function st(e, t) {
        return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
      }
      function Oe(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function et(e, t) {
        throw new De(-201, !1);
      }
      function Me(e, t) {
        null == e &&
          (function ue(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`),
            );
          })(t, e, null, "!=");
      }
      function it(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Lt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function In(e) {
        return bn(e, jn) || bn(e, tr);
      }
      function Qt(e) {
        return null !== In(e);
      }
      function bn(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function sn(e) {
        return e && (e.hasOwnProperty(an) || e.hasOwnProperty(qt))
          ? e[an]
          : null;
      }
      const jn = Y({ ɵprov: Y }),
        an = Y({ ɵinj: Y }),
        tr = Y({ ngInjectableDef: Y }),
        qt = Y({ ngInjectorDef: Y });
      var Le = (() => (
        ((Le = Le || {})[(Le.Default = 0)] = "Default"),
        (Le[(Le.Host = 1)] = "Host"),
        (Le[(Le.Self = 2)] = "Self"),
        (Le[(Le.SkipSelf = 4)] = "SkipSelf"),
        (Le[(Le.Optional = 8)] = "Optional"),
        Le
      ))();
      let tn;
      function cn(e) {
        const t = tn;
        return (tn = e), t;
      }
      function Yn(e, t, n) {
        const r = In(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Le.Optional
            ? null
            : void 0 !== t
              ? t
              : void et(J(e));
      }
      const Vt = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        hn = {},
        Pn = "__NG_DI_FLAG__",
        zt = "ngTempTokenPath",
        ht = "ngTokenPath",
        nn = /\n/gm,
        Rr = "\u0275",
        Pt = "__source";
      let rr;
      function _t(e) {
        const t = rr;
        return (rr = e), t;
      }
      function or(e, t = Le.Default) {
        if (void 0 === rr) throw new De(-203, !1);
        return null === rr
          ? Yn(e, void 0, t)
          : rr.get(e, t & Le.Optional ? null : void 0, t);
      }
      function ye(e, t = Le.Default) {
        return (
          (function Zt() {
            return tn;
          })() || or
        )(H(e), t);
      }
      function $(e, t = Le.Default) {
        return ye(e, be(t));
      }
      function be(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Qe(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = H(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new De(900, !1);
            let i,
              o = Le.Default;
            for (let a = 0; a < r.length; a++) {
              const f = r[a],
                m = Bt(f);
              "number" == typeof m
                ? -1 === m
                  ? (i = f.token)
                  : (o |= m)
                : (i = f);
            }
            t.push(ye(i, o));
          } else t.push(ye(r));
        }
        return t;
      }
      function wt(e, t) {
        return (e[Pn] = t), (e.prototype[Pn] = t), e;
      }
      function Bt(e) {
        return e[Pn];
      }
      function Ht(e) {
        return { toString: e }.toString();
      }
      var Ft = (() => (
          ((Ft = Ft || {})[(Ft.OnPush = 0)] = "OnPush"),
          (Ft[(Ft.Default = 1)] = "Default"),
          Ft
        ))(),
        rn = (() => {
          return (
            ((e = rn || (rn = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            rn
          );
          var e;
        })();
      const ln = {},
        bt = [],
        ee = Y({ ɵcmp: Y }),
        O = Y({ ɵdir: Y }),
        v = Y({ ɵpipe: Y }),
        C = Y({ ɵmod: Y }),
        N = Y({ ɵfac: Y }),
        W = Y({ __NG_ELEMENT_ID__: Y });
      let pe = 0;
      function $e(e) {
        return Ht(() => {
          const t = Zr(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Ft.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              data: e.data || {},
              encapsulation: e.encapsulation || rn.Emulated,
              id: "c" + pe++,
              styles: e.styles || bt,
              _: null,
              schemas: e.schemas || null,
              tView: null,
            };
          ii(n);
          const r = e.dependencies;
          return (n.directiveDefs = Qr(r, !1)), (n.pipeDefs = Qr(r, !0)), n;
        });
      }
      function Tn(e) {
        return xt(e) || pn(e);
      }
      function xn(e) {
        return null !== e;
      }
      function Kr(e) {
        return Ht(() => ({
          type: e.type,
          bootstrap: e.bootstrap || bt,
          declarations: e.declarations || bt,
          imports: e.imports || bt,
          exports: e.exports || bt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Yr(e, t) {
        if (null == e) return ln;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])),
              (n[i] = r),
              t && (t[i] = o);
          }
        return n;
      }
      function _r(e) {
        return Ht(() => {
          const t = Zr(e);
          return ii(t), t;
        });
      }
      function br(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function xt(e) {
        return e[ee] || null;
      }
      function pn(e) {
        return e[O] || null;
      }
      function mn(e) {
        return e[v] || null;
      }
      function Xt(e) {
        const t = xt(e) || pn(e) || mn(e);
        return null !== t && t.standalone;
      }
      function on(e, t) {
        const n = e[C] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${J(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Zr(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          selectors: e.selectors || bt,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Yr(e.inputs, t),
          outputs: Yr(e.outputs),
        };
      }
      function ii(e) {
        e.features?.forEach((t) => t(e));
      }
      function Qr(e, t) {
        if (!e) return null;
        const n = t ? mn : Tn;
        return () =>
          ("function" == typeof e ? e() : e).map((r) => n(r)).filter(xn);
      }
      const Zn = 0,
        Ve = 1,
        pt = 2,
        Jt = 3,
        gn = 4,
        yr = 5,
        un = 6,
        sr = 7,
        Ot = 8,
        dn = 9,
        ar = 10,
        mt = 11,
        Fr = 12,
        Qn = 13,
        Mr = 14,
        Nr = 15,
        An = 16,
        yi = 17,
        Lr = 18,
        cr = 19,
        qr = 20,
        vr = 21,
        Gt = 22,
        Xr = 1,
        lo = 2,
        oi = 7,
        vi = 8,
        kr = 9,
        Fn = 10;
      function zn(e) {
        return Array.isArray(e) && "object" == typeof e[Xr];
      }
      function Nn(e) {
        return Array.isArray(e) && !0 === e[Xr];
      }
      function Br(e) {
        return 0 != (4 & e.flags);
      }
      function lr(e) {
        return e.componentOffset > -1;
      }
      function Xn(e) {
        return 1 == (1 & e.flags);
      }
      function yn(e) {
        return !!e.template;
      }
      function fo(e) {
        return 0 != (256 & e[pt]);
      }
      function Ir(e, t) {
        return e.hasOwnProperty(N) ? e[N] : null;
      }
      class wi {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ci() {
        return Ci;
      }
      function Ci(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Zi), Oo;
      }
      function Oo() {
        const e = Gn(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === ln) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Zi(e, t, n, r) {
        const i = this.declaredInputs[n],
          o =
            Gn(e) ||
            (function po(e, t) {
              return (e[Mi] = t);
            })(e, { previous: ln, current: null }),
          a = o.current || (o.current = {}),
          f = o.previous,
          m = f[i];
        (a[i] = new wi(m && m.currentValue, t, f === ln)), (e[r] = t);
      }
      ci.ngInherit = !0;
      const Mi = "__ngSimpleChanges__";
      function Gn(e) {
        return e[Mi] || null;
      }
      const ur = function (e, t, n) {},
        Si = "svg";
      function vn(e) {
        for (; Array.isArray(e); ) e = e[Zn];
        return e;
      }
      function Dr(e, t) {
        return vn(t[e]);
      }
      function $t(e, t) {
        return vn(t[e.index]);
      }
      function Ur(e, t) {
        return e.data[t];
      }
      function ei(e, t) {
        return e[t];
      }
      function Kt(e, t) {
        const n = t[e];
        return zn(n) ? n : n[Zn];
      }
      function Hr(e) {
        return 64 == (64 & e[pt]);
      }
      function Sr(e, t) {
        return null == t ? null : e[t];
      }
      function $r(e) {
        e[Lr] = 0;
      }
      function Tr(e, t) {
        e[yr] += t;
        let n = e,
          r = e[Jt];
        for (
          ;
          null !== r && ((1 === t && 1 === n[yr]) || (-1 === t && 0 === n[yr]));

        )
          (r[yr] += t), (n = r), (r = r[Jt]);
      }
      const gt = { lFrame: B(null), bindingsEnabled: !0 };
      function _o() {
        return gt.bindingsEnabled;
      }
      function fe() {
        return gt.lFrame.lView;
      }
      function Nt() {
        return gt.lFrame.tView;
      }
      function Ai(e) {
        return (gt.lFrame.contextLView = e), e[Ot];
      }
      function Oi(e) {
        return (gt.lFrame.contextLView = null), e;
      }
      function fn() {
        let e = zr();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function zr() {
        return gt.lFrame.currentTNode;
      }
      function dr(e, t) {
        const n = gt.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function bo() {
        return gt.lFrame.isParent;
      }
      function yo() {
        gt.lFrame.isParent = !1;
      }
      function Dn() {
        const e = gt.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Pi() {
        return gt.lFrame.bindingIndex++;
      }
      function Er(e) {
        const t = gt.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Ji(e, t) {
        const n = gt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), eo(t);
      }
      function eo(e) {
        gt.lFrame.currentDirectiveIndex = e;
      }
      function Fi(e) {
        const t = gt.lFrame.currentDirectiveIndex;
        return -1 === t ? null : e[t];
      }
      function w() {
        return gt.lFrame.currentQueryIndex;
      }
      function c(e) {
        gt.lFrame.currentQueryIndex = e;
      }
      function u(e) {
        const t = e[Ve];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[un] : null;
      }
      function b(e, t, n) {
        if (n & Le.SkipSelf) {
          let i = t,
            o = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              n & Le.Host ||
              ((i = u(o)), null === i || ((o = o[Nr]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = o);
        }
        const r = (gt.lFrame = F());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function I(e) {
        const t = F(),
          n = e[Ve];
        (gt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function F() {
        const e = gt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? B(e) : t;
      }
      function B(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function j() {
        const e = gt.lFrame;
        return (
          (gt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const re = j;
      function he() {
        const e = j();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function dt() {
        return gt.lFrame.selectedIndex;
      }
      function yt(e) {
        gt.lFrame.selectedIndex = e;
      }
      function ze() {
        const e = gt.lFrame;
        return Ur(e.tView, e.selectedIndex);
      }
      function Dt() {
        gt.lFrame.currentNamespace = Si;
      }
      function Wt() {
        !(function En() {
          gt.lFrame.currentNamespace = null;
        })();
      }
      function xr(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const o = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: f,
              ngAfterViewInit: m,
              ngAfterViewChecked: E,
              ngOnDestroy: A,
            } = o;
          a && (e.contentHooks ?? (e.contentHooks = [])).push(-n, a),
            f &&
              ((e.contentHooks ?? (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks ?? (e.contentCheckHooks = [])).push(n, f)),
            m && (e.viewHooks ?? (e.viewHooks = [])).push(-n, m),
            E &&
              ((e.viewHooks ?? (e.viewHooks = [])).push(n, E),
              (e.viewCheckHooks ?? (e.viewCheckHooks = [])).push(n, E)),
            null != A && (e.destroyHooks ?? (e.destroyHooks = [])).push(n, A);
        }
      }
      function Wn(e, t, n) {
        D(e, t, 3, n);
      }
      function wn(e, t, n, r) {
        (3 & e[pt]) === n && D(e, t, n, r);
      }
      function h(e, t) {
        let n = e[pt];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[pt] = n));
      }
      function D(e, t, n, r) {
        const o = r ?? -1,
          a = t.length - 1;
        let f = 0;
        for (let m = void 0 !== r ? 65535 & e[Lr] : 0; m < a; m++)
          if ("number" == typeof t[m + 1]) {
            if (((f = t[m]), null != r && f >= r)) break;
          } else
            t[m] < 0 && (e[Lr] += 65536),
              (f < o || -1 == o) &&
                (g(e, n, t, m), (e[Lr] = (4294901760 & e[Lr]) + m + 2)),
              m++;
      }
      function g(e, t, n, r) {
        const i = n[r] < 0,
          o = n[r + 1],
          f = e[i ? -n[r] : n[r]];
        if (i) {
          if (e[pt] >> 11 < e[Lr] >> 16 && (3 & e[pt]) === t) {
            (e[pt] += 2048), ur(4, f, o);
            try {
              o.call(f);
            } finally {
              ur(5, f, o);
            }
          }
        } else {
          ur(4, f, o);
          try {
            o.call(f);
          } finally {
            ur(5, f, o);
          }
        }
      }
      const x = -1;
      class k {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Mt(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ("number" == typeof i) {
            if (0 !== i) break;
            r++;
            const o = n[r++],
              a = n[r++],
              f = n[r++];
            e.setAttribute(t, a, f, o);
          } else {
            const o = i,
              a = n[++r];
            Cn(o) ? e.setProperty(t, o, a) : e.setAttribute(t, o, a), r++;
          }
        }
        return r;
      }
      function Rt(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Cn(e) {
        return 64 === e.charCodeAt(0);
      }
      function At(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              "number" == typeof i
                ? (n = i)
                : 0 === n ||
                  fr(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function fr(e, t, n, r, i) {
        let o = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; o < e.length; ) {
            const f = e[o++];
            if ("number" == typeof f) {
              if (f === t) {
                a = -1;
                break;
              }
              if (f > t) {
                a = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const f = e[o];
          if ("number" == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void (e[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== a && (e.splice(a, 0, t), (o = a + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== i && e.splice(o++, 0, i);
      }
      function er(e) {
        return e !== x;
      }
      function Yt(e) {
        return 32767 & e;
      }
      function Mn(e, t) {
        let n = (function hr(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Nr]), n--;
        return r;
      }
      let Ni = !0;
      function Li(e) {
        const t = Ni;
        return (Ni = e), t;
      }
      const ga = 255,
        _a = 5;
      let rs = 0;
      const ti = {};
      function Do(e, t) {
        const n = ba(e, t);
        if (-1 !== n) return n;
        const r = t[Ve];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ns(r.data, e),
          Ns(t, null),
          Ns(r.blueprint, null));
        const i = Ls(e, t),
          o = e.injectorIndex;
        if (er(i)) {
          const a = Yt(i),
            f = Mn(i, t),
            m = f[Ve].data;
          for (let E = 0; E < 8; E++) t[o + E] = f[a + E] | m[a + E];
        }
        return (t[o + 8] = i), o;
      }
      function Ns(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function ba(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Ls(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          if (((r = di(i)), null === r)) return x;
          if ((n++, (i = i[Nr]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return x;
      }
      function ks(e, t, n) {
        !(function pc(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(W) && (r = n[W]),
            null == r && (r = n[W] = rs++);
          const i = r & ga;
          t.data[e + (i >> _a)] |= 1 << i;
        })(e, t, n);
      }
      function ya(e, t, n) {
        if (n & Le.Optional || void 0 !== e) return e;
        et();
      }
      function ko(e, t, n, r) {
        if (
          (n & Le.Optional && void 0 === r && (r = null),
          !(n & (Le.Self | Le.Host)))
        ) {
          const i = e[dn],
            o = cn(void 0);
          try {
            return i ? i.get(t, r, n & Le.Optional) : Yn(t, r, n & Le.Optional);
          } finally {
            cn(o);
          }
        }
        return ya(r, 0, n);
      }
      function Bs(e, t, n, r = Le.Default, i) {
        if (null !== e) {
          if (1024 & t[pt]) {
            const a = (function wa(e, t, n, r, i) {
              let o = e,
                a = t;
              for (
                ;
                null !== o && null !== a && 1024 & a[pt] && !(256 & a[pt]);

              ) {
                const f = va(o, a, n, r | Le.Self, ti);
                if (f !== ti) return f;
                let m = o.parent;
                if (!m) {
                  const E = a[vr];
                  if (E) {
                    const A = E.get(n, ti, r);
                    if (A !== ti) return A;
                  }
                  (m = di(a)), (a = a[Nr]);
                }
                o = m;
              }
              return i;
            })(e, t, n, r, ti);
            if (a !== ti) return a;
          }
          const o = va(e, t, n, r, ti);
          if (o !== ti) return o;
        }
        return ko(t, n, r, i);
      }
      function va(e, t, n, r, i) {
        const o = (function mc(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(W) ? e[W] : void 0;
          return "number" == typeof t ? (t >= 0 ? t & ga : gc) : t;
        })(n);
        if ("function" == typeof o) {
          if (!b(t, e, r)) return r & Le.Host ? ya(i, 0, r) : ko(t, n, r, i);
          try {
            const a = o(r);
            if (null != a || r & Le.Optional) return a;
            et();
          } finally {
            re();
          }
        } else if ("number" == typeof o) {
          let a = null,
            f = ba(e, t),
            m = x,
            E = r & Le.Host ? t[An][un] : null;
          for (
            (-1 === f || r & Le.SkipSelf) &&
            ((m = -1 === f ? Ls(e, t) : t[f + 8]),
            m !== x && js(r, !1)
              ? ((a = t[Ve]), (f = Yt(m)), (t = Mn(m, t)))
              : (f = -1));
            -1 !== f;

          ) {
            const A = t[Ve];
            if (is(o, f, A.data)) {
              const L = Da(f, t, n, a, r, E);
              if (L !== ti) return L;
            }
            (m = t[f + 8]),
              m !== x && js(r, t[Ve].data[f + 8] === E) && is(o, f, t)
                ? ((a = A), (f = Yt(m)), (t = Mn(m, t)))
                : (f = -1);
          }
        }
        return i;
      }
      function Da(e, t, n, r, i, o) {
        const a = t[Ve],
          f = a.data[e + 8],
          A = Us(
            f,
            a,
            n,
            null == r ? lr(f) && Ni : r != a && 0 != (3 & f.type),
            i & Le.Host && o === f,
          );
        return null !== A ? Eo(t, a, A, f) : ti;
      }
      function Us(e, t, n, r, i) {
        const o = e.providerIndexes,
          a = t.data,
          f = 1048575 & o,
          m = e.directiveStart,
          A = o >> 20,
          z = i ? f + A : e.directiveEnd;
        for (let ne = r ? f : f + A; ne < z; ne++) {
          const _e = a[ne];
          if ((ne < m && n === _e) || (ne >= m && _e.type === n)) return ne;
        }
        if (i) {
          const ne = a[m];
          if (ne && yn(ne) && ne.type === n) return m;
        }
        return null;
      }
      function Eo(e, t, n, r) {
        let i = e[n];
        const o = t.data;
        if (
          (function ie(e) {
            return e instanceof k;
          })(i)
        ) {
          const a = i;
          a.resolving &&
            (function oe(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new De(
                -200,
                `Circular dependency in DI detected for ${e}${n}`,
              );
            })(
              (function Be(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                      null != e &&
                      "function" == typeof e.type
                    ? e.type.name || e.type.toString()
                    : Oe(e);
              })(o[n]),
            );
          const f = Li(a.canSeeViewProviders);
          a.resolving = !0;
          const m = a.injectImpl ? cn(a.injectImpl) : null;
          b(e, r, Le.Default);
          try {
            (i = e[n] = a.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function On(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: o,
                  } = t.type.prototype;
                  if (r) {
                    const a = Ci(t);
                    (n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  i &&
                    (n.preOrderHooks ?? (n.preOrderHooks = [])).push(0 - e, i),
                    o &&
                      ((n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, o),
                      (
                        n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])
                      ).push(e, o));
                })(n, o[n], t);
          } finally {
            null !== m && cn(m), Li(f), (a.resolving = !1), re();
          }
        }
        return i;
      }
      function is(e, t, n) {
        return !!(n[t + (e >> _a)] & (1 << e));
      }
      function js(e, t) {
        return !(e & Le.Self || (e & Le.Host && t));
      }
      class $n {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Bs(this._tNode, this._lView, t, be(r), n);
        }
      }
      function gc() {
        return new $n(fn(), fe());
      }
      function to(e) {
        return Ht(() => {
          const t = e.prototype.constructor,
            n = t[N] || Ea(t),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const o = i[N] || Ea(i);
            if (o && o !== n) return o;
            i = Object.getPrototypeOf(i);
          }
          return (o) => new o();
        });
      }
      function Ea(e) {
        return Ee(e)
          ? () => {
              const t = Ea(H(e));
              return t && t();
            }
          : Ir(e);
      }
      function di(e) {
        const t = e[Ve],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[un] : null;
      }
      function Bo(e) {
        return (function wr(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const o = n[i];
              if (Rt(o)) break;
              if (0 === o) i += 2;
              else if ("number" == typeof o)
                for (i++; i < r && "string" == typeof n[i]; ) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(fn(), e);
      }
      const Uo = "__parameters__";
      function ki(e, t, n) {
        return Ht(() => {
          const r = (function os(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...o) {
            if (this instanceof i) return r.apply(this, o), this;
            const a = new i(...o);
            return (f.annotation = a), f;
            function f(m, E, A) {
              const L = m.hasOwnProperty(Uo)
                ? m[Uo]
                : Object.defineProperty(m, Uo, { value: [] })[Uo];
              for (; L.length <= A; ) L.push(null);
              return (L[A] = L[A] || []).push(a), m;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      class en {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = it({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function no(e, t) {
        e.forEach((n) => (Array.isArray(n) ? no(n, t) : t(n)));
      }
      function Vs(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function as(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function cs(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function y(e, t, n) {
        let r = R(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function s(e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; )
                    (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function S(e, t) {
        const n = R(e, t);
        if (n >= 0) return e[1 | n];
      }
      function R(e, t) {
        return (function ge(e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const o = r + ((i - r) >> 1),
              a = e[o << n];
            if (t === a) return o << n;
            a > t ? (i = o) : (r = o + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const zs = wt(
          ki("Inject", (e) => ({ token: e })),
          -1,
        ),
        ro = wt(ki("Optional"), 8),
        Gs = wt(ki("SkipSelf"), 4);
      var Ui = (() => (
        ((Ui = Ui || {})[(Ui.Important = 1)] = "Important"),
        (Ui[(Ui.DashCase = 2)] = "DashCase"),
        Ui
      ))();
      const wc = new Map();
      let Km = 0;
      const Mc = "__ngContext__";
      function mr(e, t) {
        zn(t)
          ? ((e[Mc] = t[qr]),
            (function Zm(e) {
              wc.set(e[qr], e);
            })(t))
          : (e[Mc] = t);
      }
      let Ic;
      function Sc(e, t) {
        return Ic(e, t);
      }
      function Zs(e) {
        const t = e[Jt];
        return Nn(t) ? t[Jt] : t;
      }
      function Tc(e) {
        return Vu(e[Qn]);
      }
      function xc(e) {
        return Vu(e[gn]);
      }
      function Vu(e) {
        for (; null !== e && !Nn(e); ) e = e[gn];
        return e;
      }
      function us(e, t, n, r, i) {
        if (null != r) {
          let o,
            a = !1;
          Nn(r) ? (o = r) : zn(r) && ((a = !0), (r = r[Zn]));
          const f = vn(r);
          0 === e && null !== n
            ? null == i
              ? Zu(t, n, f)
              : $o(t, n, f, i || null, !0)
            : 1 === e && null !== n
              ? $o(t, n, f, i || null, !0)
              : 2 === e
                ? (function Lc(e, t, n) {
                    const r = Sa(e, t);
                    r &&
                      (function mg(e, t, n, r) {
                        e.removeChild(t, n, r);
                      })(e, r, t, n);
                  })(t, f, a)
                : 3 === e && t.destroyNode(f),
            null != o &&
              (function bg(e, t, n, r, i) {
                const o = n[oi];
                o !== vn(n) && us(t, e, r, o, i);
                for (let f = Fn; f < n.length; f++) {
                  const m = n[f];
                  Qs(m[Ve], m, e, t, r, o);
                }
              })(t, e, o, n, i);
        }
      }
      function Oc(e, t, n) {
        return e.createElement(t, n);
      }
      function Gu(e, t) {
        const n = e[kr],
          r = n.indexOf(t),
          i = t[Jt];
        512 & t[pt] && ((t[pt] &= -513), Tr(i, -1)), n.splice(r, 1);
      }
      function Rc(e, t) {
        if (e.length <= Fn) return;
        const n = Fn + t,
          r = e[n];
        if (r) {
          const i = r[yi];
          null !== i && i !== e && Gu(i, r), t > 0 && (e[n - 1][gn] = r[gn]);
          const o = as(e, Fn + t);
          !(function ag(e, t) {
            Qs(e, t, t[mt], 2, null, null), (t[Zn] = null), (t[un] = null);
          })(r[Ve], r);
          const a = o[cr];
          null !== a && a.detachView(o[Ve]),
            (r[Jt] = null),
            (r[gn] = null),
            (r[pt] &= -65);
        }
        return r;
      }
      function Wu(e, t) {
        if (!(128 & t[pt])) {
          const n = t[mt];
          n.destroyNode && Qs(e, t, n, 3, null, null),
            (function ug(e) {
              let t = e[Qn];
              if (!t) return Pc(e[Ve], e);
              for (; t; ) {
                let n = null;
                if (zn(t)) n = t[Qn];
                else {
                  const r = t[Fn];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[gn] && t !== e; )
                    zn(t) && Pc(t[Ve], t), (t = t[Jt]);
                  null === t && (t = e),
                    zn(t) && Pc(t[Ve], t),
                    (n = t && t[gn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Pc(e, t) {
        if (!(128 & t[pt])) {
          (t[pt] &= -65),
            (t[pt] |= 128),
            (function pg(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof k)) {
                    const o = n[r + 1];
                    if (Array.isArray(o))
                      for (let a = 0; a < o.length; a += 2) {
                        const f = i[o[a]],
                          m = o[a + 1];
                        ur(4, f, m);
                        try {
                          m.call(f);
                        } finally {
                          ur(5, f, m);
                        }
                      }
                    else {
                      ur(4, i, o);
                      try {
                        o.call(i);
                      } finally {
                        ur(5, i, o);
                      }
                    }
                  }
                }
            })(e, t),
            (function hg(e, t) {
              const n = e.cleanup,
                r = t[sr];
              let i = -1;
              if (null !== n)
                for (let o = 0; o < n.length - 1; o += 2)
                  if ("string" == typeof n[o]) {
                    const a = n[o + 3];
                    a >= 0 ? r[(i = a)]() : r[(i = -a)].unsubscribe(), (o += 2);
                  } else {
                    const a = r[(i = n[o + 1])];
                    n[o].call(a);
                  }
              if (null !== r) {
                for (let o = i + 1; o < r.length; o++) (0, r[o])();
                t[sr] = null;
              }
            })(e, t),
            1 === t[Ve].type && t[mt].destroy();
          const n = t[yi];
          if (null !== n && Nn(t[Jt])) {
            n !== t[Jt] && Gu(n, t);
            const r = t[cr];
            null !== r && r.detachView(e);
          }
          !(function Qm(e) {
            wc.delete(e[qr]);
          })(t);
        }
      }
      function Ku(e, t, n) {
        return (function Yu(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Zn];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: o } = e.data[r.directiveStart + i];
              if (o === rn.None || o === rn.Emulated) return null;
            }
            return $t(r, n);
          }
        })(e, t.parent, n);
      }
      function $o(e, t, n, r, i) {
        e.insertBefore(t, n, r, i);
      }
      function Zu(e, t, n) {
        e.appendChild(t, n);
      }
      function Qu(e, t, n, r, i) {
        null !== r ? $o(e, t, n, r, i) : Zu(e, t, n);
      }
      function Sa(e, t) {
        return e.parentNode(t);
      }
      function qu(e, t, n) {
        return Ju(e, t, n);
      }
      let Fc,
        Aa,
        Uc,
        Oa,
        Ju = function Xu(e, t, n) {
          return 40 & e.type ? $t(e, n) : null;
        };
      function Ta(e, t, n, r) {
        const i = Ku(e, r, t),
          o = t[mt],
          f = qu(r.parent || t[un], r, t);
        if (null != i)
          if (Array.isArray(n))
            for (let m = 0; m < n.length; m++) Qu(o, i, n[m], f, !1);
          else Qu(o, i, n, f, !1);
        void 0 !== Fc && Fc(o, r, t, n, i);
      }
      function xa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return $t(t, e);
          if (4 & n) return Nc(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return xa(e, r);
            {
              const i = e[t.index];
              return Nn(i) ? Nc(-1, i) : vn(i);
            }
          }
          if (32 & n) return Sc(t, e)() || vn(e[t.index]);
          {
            const r = td(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : xa(Zs(e[An]), r)
              : xa(e, t.next);
          }
        }
        return null;
      }
      function td(e, t) {
        return null !== t ? e[An][un].projection[t.projection] : null;
      }
      function Nc(e, t) {
        const n = Fn + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[Ve].firstChild;
          if (null !== i) return xa(r, i);
        }
        return t[oi];
      }
      function kc(e, t, n, r, i, o, a) {
        for (; null != n; ) {
          const f = r[n.index],
            m = n.type;
          if (
            (a && 0 === t && (f && mr(vn(f), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & m) kc(e, t, n.child, r, i, o, !1), us(t, e, i, f, o);
            else if (32 & m) {
              const E = Sc(n, r);
              let A;
              for (; (A = E()); ) us(t, e, i, A, o);
              us(t, e, i, f, o);
            } else 16 & m ? nd(e, t, r, n, i, o) : us(t, e, i, f, o);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Qs(e, t, n, r, i, o) {
        kc(n, r, e.firstChild, t, i, o, !1);
      }
      function nd(e, t, n, r, i, o) {
        const a = n[An],
          m = a[un].projection[r.projection];
        if (Array.isArray(m))
          for (let E = 0; E < m.length; E++) us(t, e, i, m[E], o);
        else kc(e, t, m, a[Jt], i, o, !0);
      }
      function rd(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function id(e, t, n) {
        const { mergedAttrs: r, classes: i, styles: o } = n;
        null !== r && Mt(e, t, r),
          null !== i && rd(e, t, i),
          null !== o &&
            (function vg(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, o);
      }
      function ds(e) {
        return (
          (function Bc() {
            if (void 0 === Aa && ((Aa = null), Vt.trustedTypes))
              try {
                Aa = Vt.trustedTypes.createPolicy("angular", {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Aa;
          })()?.createHTML(e) || e
        );
      }
      function Cg(e) {
        Uc = e;
      }
      function jc() {
        if (void 0 === Oa && ((Oa = null), Vt.trustedTypes))
          try {
            Oa = Vt.trustedTypes.createPolicy("angular#unsafe-bypass", {
              createHTML: (e) => e,
              createScript: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch {}
        return Oa;
      }
      function sd(e) {
        return jc()?.createHTML(e) || e;
      }
      function cd(e) {
        return jc()?.createScriptURL(e) || e;
      }
      class Vo {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ye})`;
        }
      }
      class Mg extends Vo {
        getTypeName() {
          return "HTML";
        }
      }
      class Ig extends Vo {
        getTypeName() {
          return "Style";
        }
      }
      class Sg extends Vo {
        getTypeName() {
          return "Script";
        }
      }
      class Tg extends Vo {
        getTypeName() {
          return "URL";
        }
      }
      class xg extends Vo {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function io(e) {
        return e instanceof Vo ? e.changingThisBreaksApplicationSecurity : e;
      }
      function fs(e, t) {
        const n = (function Ag(e) {
          return (e instanceof Vo && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${Ye})`);
        }
        return n === t;
      }
      function Og(e) {
        return new Mg(e);
      }
      function Rg(e) {
        return new Ig(e);
      }
      function Pg(e) {
        return new Sg(e);
      }
      function Fg(e) {
        return new Tg(e);
      }
      function Ng(e) {
        return new xg(e);
      }
      class Lg {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              ds(t),
              "text/html",
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch {
            return null;
          }
        }
      }
      class kg {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert",
              ));
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          return (n.innerHTML = ds(t)), n;
        }
      }
      const Ug = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      function Ra(e) {
        return (e = String(e)).match(Ug) ? e : "unsafe:" + e;
      }
      function oo(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function qs(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const ud = oo("area,br,col,hr,img,wbr"),
        dd = oo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        fd = oo("rp,rt"),
        Hc = qs(
          ud,
          qs(
            dd,
            oo(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
            ),
          ),
          qs(
            fd,
            oo(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
            ),
          ),
          qs(fd, dd),
        ),
        $c = oo("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        hd = qs(
          $c,
          oo(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
          ),
          oo(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
          ),
        ),
        jg = oo("script,style,template");
      class Hg {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                  ? this.chars(n.nodeValue)
                  : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let i = this.checkClobberedElement(n, n.nextSibling);
                if (i) {
                  n = i;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Hc.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !jg.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          const r = t.attributes;
          for (let i = 0; i < r.length; i++) {
            const o = r.item(i),
              a = o.name,
              f = a.toLowerCase();
            if (!hd.hasOwnProperty(f)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let m = o.value;
            $c[f] && (m = Ra(m)), this.buf.push(" ", a, '="', pd(m), '"');
          }
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Hc.hasOwnProperty(n) &&
            !ud.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(pd(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`,
            );
          return n;
        }
      }
      const $g = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Vg = /([^\#-~ |!])/g;
      function pd(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace($g, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Vg, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let Pa;
      function md(e, t) {
        let n = null;
        try {
          Pa =
            Pa ||
            (function ld(e) {
              const t = new kg(e);
              return (function Bg() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    ds(""),
                    "text/html",
                  );
                } catch {
                  return !1;
                }
              })()
                ? new Lg(t)
                : t;
            })(e);
          let r = t ? String(t) : "";
          n = Pa.getInertBodyElement(r);
          let i = 5,
            o = r;
          do {
            if (0 === i)
              throw new Error(
                "Failed to sanitize html because the input is unstable",
              );
            i--, (r = o), (o = n.innerHTML), (n = Pa.getInertBodyElement(r));
          } while (r !== o);
          return ds(new Hg().sanitizeChildren(Vc(n) || n));
        } finally {
          if (n) {
            const r = Vc(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function Vc(e) {
        return "content" in e &&
          (function zg(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var kn = (() => (
        ((kn = kn || {})[(kn.NONE = 0)] = "NONE"),
        (kn[(kn.HTML = 1)] = "HTML"),
        (kn[(kn.STYLE = 2)] = "STYLE"),
        (kn[(kn.SCRIPT = 3)] = "SCRIPT"),
        (kn[(kn.URL = 4)] = "URL"),
        (kn[(kn.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        kn
      ))();
      function gd(e) {
        const t = Xs();
        return t
          ? sd(t.sanitize(kn.HTML, e) || "")
          : fs(e, "HTML")
            ? sd(io(e))
            : md(
                (function od() {
                  return void 0 !== Uc
                    ? Uc
                    : typeof document < "u"
                      ? document
                      : void 0;
                })(),
                Oe(e),
              );
      }
      function zc(e) {
        const t = Xs();
        return t
          ? t.sanitize(kn.URL, e) || ""
          : fs(e, "URL")
            ? io(e)
            : Ra(Oe(e));
      }
      function Gc(e) {
        const t = Xs();
        if (t) return cd(t.sanitize(kn.RESOURCE_URL, e) || "");
        if (fs(e, "ResourceURL")) return cd(io(e));
        throw new De(904, !1);
      }
      function _d(e, t, n) {
        return (function Zg(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? Gc
            : zc;
        })(
          t,
          n,
        )(e);
      }
      function Xs() {
        const e = fe();
        return e && e[Fr];
      }
      const Wc = new en("ENVIRONMENT_INITIALIZER"),
        bd = new en("INJECTOR", -1),
        yd = new en("INJECTOR_DEF_TYPES");
      class vd {
        get(t, n = hn) {
          if (n === hn) {
            const r = new Error(`NullInjectorError: No provider for ${J(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function Qg(e) {
        return { ɵproviders: e };
      }
      function qg(...e) {
        return { ɵproviders: Dd(0, e), ɵfromNgModule: !0 };
      }
      function Dd(e, ...t) {
        const n = [],
          r = new Set();
        let i;
        return (
          no(t, (o) => {
            const a = o;
            Kc(a, n, [], r) && (i || (i = []), i.push(a));
          }),
          void 0 !== i && Ed(i, n),
          n
        );
      }
      function Ed(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: i } = e[n];
          Yc(i, (o) => {
            t.push(o);
          });
        }
      }
      function Kc(e, t, n, r) {
        if (!(e = H(e))) return !1;
        let i = null,
          o = sn(e);
        const a = !o && xt(e);
        if (o || a) {
          if (a && !a.standalone) return !1;
          i = e;
        } else {
          const m = e.ngModule;
          if (((o = sn(m)), !o)) return !1;
          i = m;
        }
        const f = r.has(i);
        if (a) {
          if (f) return !1;
          if ((r.add(i), a.dependencies)) {
            const m =
              "function" == typeof a.dependencies
                ? a.dependencies()
                : a.dependencies;
            for (const E of m) Kc(E, t, n, r);
          }
        } else {
          if (!o) return !1;
          {
            if (null != o.imports && !f) {
              let E;
              r.add(i);
              try {
                no(o.imports, (A) => {
                  Kc(A, t, n, r) && (E || (E = []), E.push(A));
                });
              } finally {
              }
              void 0 !== E && Ed(E, t);
            }
            if (!f) {
              const E = Ir(i) || (() => new i());
              t.push(
                { provide: i, useFactory: E, deps: bt },
                { provide: yd, useValue: i, multi: !0 },
                { provide: Wc, useValue: () => ye(i), multi: !0 },
              );
            }
            const m = o.providers;
            null == m ||
              f ||
              Yc(m, (A) => {
                t.push(A);
              });
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function Yc(e, t) {
        for (let n of e)
          de(n) && (n = n.ɵproviders), Array.isArray(n) ? Yc(n, t) : t(n);
      }
      const Xg = Y({ provide: String, useValue: Y });
      function Zc(e) {
        return null !== e && "object" == typeof e && Xg in e;
      }
      function zo(e) {
        return "function" == typeof e;
      }
      const Qc = new en("Set Injector scope."),
        Fa = {},
        e_ = {};
      let qc;
      function Na() {
        return void 0 === qc && (qc = new vd()), qc;
      }
      class Go {}
      class Md extends Go {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, i) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Jc(t, (a) => this.processProvider(a)),
            this.records.set(bd, hs(void 0, this)),
            i.has("environment") && this.records.set(Go, hs(void 0, this));
          const o = this.records.get(Qc);
          null != o && "string" == typeof o.value && this.scopes.add(o.value),
            (this.injectorDefTypes = new Set(this.get(yd.multi, bt, Le.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = _t(this),
            r = cn(void 0);
          try {
            return t();
          } finally {
            _t(n), cn(r);
          }
        }
        get(t, n = hn, r = Le.Default) {
          this.assertNotDestroyed(), (r = be(r));
          const i = _t(this),
            o = cn(void 0);
          try {
            if (!(r & Le.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const m =
                  (function o_(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof en)
                    );
                  })(t) && In(t);
                (f = m && this.injectableDefInScope(m) ? hs(Xc(t), Fa) : null),
                  this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & Le.Self ? Na() : this.parent).get(
              t,
              (n = r & Le.Optional && n === hn ? null : n),
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[zt] = a[zt] || []).unshift(J(t)), i)) throw a;
              return (function Sn(e, t, n, r) {
                const i = e[zt];
                throw (
                  (t[Pt] && i.unshift(t[Pt]),
                  (e.message = (function ir(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && e.charAt(1) == Rr
                        ? e.slice(2)
                        : e;
                    let i = J(t);
                    if (Array.isArray(t)) i = t.map(J).join(" -> ");
                    else if ("object" == typeof t) {
                      let o = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let f = t[a];
                          o.push(
                            a +
                              ":" +
                              ("string" == typeof f ? JSON.stringify(f) : J(f)),
                          );
                        }
                      i = `{${o.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(
                      nn,
                      "\n  ",
                    )}`;
                  })("\n" + e.message, i, n, r)),
                  (e[ht] = i),
                  (e[zt] = null),
                  e)
                );
              })(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            cn(o), _t(i);
          }
        }
        resolveInjectorInitializers() {
          const t = _t(this),
            n = cn(void 0);
          try {
            const r = this.get(Wc.multi, bt, Le.Self);
            for (const i of r) i();
          } finally {
            _t(t), cn(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(J(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new De(205, !1);
        }
        processProvider(t) {
          let n = zo((t = H(t))) ? t : H(t && t.provide);
          const r = (function n_(e) {
            return Zc(e) ? hs(void 0, e.useValue) : hs(Id(e), Fa);
          })(t);
          if (zo(t) || !0 !== t.multi) this.records.get(n);
          else {
            let i = this.records.get(n);
            i ||
              ((i = hs(void 0, Fa, !0)),
              (i.factory = () => Qe(i.multi)),
              this.records.set(n, i)),
              (n = t),
              i.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Fa && ((n.value = e_), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function i_(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = H(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Xc(e) {
        const t = In(e),
          n = null !== t ? t.factory : Ir(e);
        if (null !== n) return n;
        if (e instanceof en) throw new De(204, !1);
        if (e instanceof Function)
          return (function t_(e) {
            const t = e.length;
            if (t > 0) throw (cs(t, "?"), new De(204, !1));
            const n = (function Un(e) {
              return (e && (e[jn] || e[tr])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new De(204, !1);
      }
      function Id(e, t, n) {
        let r;
        if (zo(e)) {
          const i = H(e);
          return Ir(i) || Xc(i);
        }
        if (Zc(e)) r = () => H(e.useValue);
        else if (
          (function Cd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Qe(e.deps || []));
        else if (
          (function wd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => ye(H(e.useExisting));
        else {
          const i = H(e && (e.useClass || e.provide));
          if (
            !(function r_(e) {
              return !!e.deps;
            })(e)
          )
            return Ir(i) || Xc(i);
          r = () => new i(...Qe(e.deps));
        }
        return r;
      }
      function hs(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Jc(e, t) {
        for (const n of e)
          Array.isArray(n) ? Jc(n, t) : n && de(n) ? Jc(n.ɵproviders, t) : t(n);
      }
      class s_ {}
      class Sd {}
      class c_ {
        resolveComponentFactory(t) {
          throw (function a_(e) {
            const t = Error(
              `No component factory found for ${J(
                e,
              )}. Did you add it to @NgModule.entryComponents?`,
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Js = (() => {
        class e {}
        return (e.NULL = new c_()), e;
      })();
      function l_() {
        return ps(fn(), fe());
      }
      function ps(e, t) {
        return new ea($t(e, t));
      }
      let ea = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = l_), e;
      })();
      function u_(e) {
        return e instanceof ea ? e.nativeElement : e;
      }
      class xd {}
      let d_ = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function f_() {
                const e = fe(),
                  n = Kt(fn().index, e);
                return (zn(n) ? n : e)[mt];
              })()),
            e
          );
        })(),
        h_ = (() => {
          class e {}
          return (
            (e.ɵprov = it({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class Ad {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const p_ = new Ad("15.2.8"),
        el = {},
        tl = "ngOriginalError";
      function nl(e) {
        return e[tl];
      }
      class ta {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && nl(t);
          for (; n && nl(n); ) n = nl(n);
          return n || null;
        }
      }
      function Od(e) {
        return e.ownerDocument.defaultView;
      }
      function so(e) {
        return e instanceof Function ? e() : e;
      }
      function Pd(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      const Fd = "ng-template";
      function C_(e, t, n) {
        let r = 0,
          i = !0;
        for (; r < e.length; ) {
          let o = e[r++];
          if ("string" == typeof o && i) {
            const a = e[r++];
            if (n && "class" === o && -1 !== Pd(a.toLowerCase(), t, 0))
              return !0;
          } else {
            if (1 === o) {
              for (; r < e.length && "string" == typeof (o = e[r++]); )
                if (o.toLowerCase() === t) return !0;
              return !1;
            }
            "number" == typeof o && (i = !1);
          }
        }
        return !1;
      }
      function Nd(e) {
        return 4 === e.type && e.value !== Fd;
      }
      function M_(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Fd);
      }
      function I_(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          o = (function x_(e) {
            for (let t = 0; t < e.length; t++) if (Rt(e[t])) return t;
            return e.length;
          })(i);
        let a = !1;
        for (let f = 0; f < t.length; f++) {
          const m = t[f];
          if ("number" != typeof m) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== m && !M_(e, m, n)) || ("" === m && 1 === t.length))
                ) {
                  if (pi(r)) return !1;
                  a = !0;
                }
              } else {
                const E = 8 & r ? m : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!C_(e.attrs, E, n)) {
                    if (pi(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const L = S_(8 & r ? "class" : m, i, Nd(e), n);
                if (-1 === L) {
                  if (pi(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== E) {
                  let z;
                  z = L > o ? "" : i[L + 1].toLowerCase();
                  const ne = 8 & r ? z : null;
                  if ((ne && -1 !== Pd(ne, E, 0)) || (2 & r && E !== z)) {
                    if (pi(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !pi(r) && !pi(m)) return !1;
            if (a && pi(m)) continue;
            (a = !1), (r = m | (1 & r));
          }
        }
        return pi(r) || a;
      }
      function pi(e) {
        return 0 == (1 & e);
      }
      function S_(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let o = !1;
          for (; i < t.length; ) {
            const a = t[i];
            if (a === e) return i;
            if (3 === a || 6 === a) o = !0;
            else {
              if (1 === a || 2 === a) {
                let f = t[++i];
                for (; "string" == typeof f; ) f = t[++i];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function A_(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Ld(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (I_(e, t[r], n)) return !0;
        return !1;
      }
      function O_(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function kd(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function R_(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = "",
          o = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const f = e[++n];
              i += "[" + a + (f.length > 0 ? '="' + f + '"' : "") + "]";
            } else 8 & r ? (i += "." + a) : 4 & r && (i += " " + a);
          else
            "" !== i && !pi(a) && ((t += kd(o, i)), (i = "")),
              (r = a),
              (o = o || !pi(r));
          n++;
        }
        return "" !== i && (t += kd(o, i)), t;
      }
      const It = {};
      function Bd(e) {
        Ud(Nt(), fe(), dt() + e, !1);
      }
      function Ud(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[pt])) {
            const o = e.preOrderCheckHooks;
            null !== o && Wn(t, o, n);
          } else {
            const o = e.preOrderHooks;
            null !== o && wn(t, o, 0, n);
          }
        yt(n);
      }
      function Vd(e, t = null, n = null, r) {
        const i = zd(e, t, n, r);
        return i.resolveInjectorInitializers(), i;
      }
      function zd(e, t = null, n = null, r, i = new Set()) {
        const o = [n || bt, qg(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : J(e))),
          new Md(o, t || Na(), r || null, i)
        );
      }
      let Wo = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return Vd({ name: "" }, r, n, "");
            {
              const i = n.name ?? "";
              return Vd({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = hn),
          (e.NULL = new vd()),
          (e.ɵprov = it({
            token: e,
            providedIn: "any",
            factory: () => ye(bd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function _s(e, t = Le.Default) {
        const n = fe();
        return null === n ? ye(e, t) : Bs(fn(), n, H(e), t);
      }
      function qd() {
        throw new Error("invalid");
      }
      function Xd(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r + 1];
            if (-1 !== o) {
              const a = e.data[o];
              c(n[r]), a.contentQueries(2, t[o], o);
            }
          }
      }
      function ka(e, t, n, r, i, o, a, f, m, E, A) {
        const L = t.blueprint.slice();
        return (
          (L[Zn] = i),
          (L[pt] = 76 | r),
          (null !== A || (e && 1024 & e[pt])) && (L[pt] |= 1024),
          $r(L),
          (L[Jt] = L[Nr] = e),
          (L[Ot] = n),
          (L[ar] = a || (e && e[ar])),
          (L[mt] = f || (e && e[mt])),
          (L[Fr] = m || (e && e[Fr]) || null),
          (L[dn] = E || (e && e[dn]) || null),
          (L[un] = o),
          (L[qr] = (function Ym() {
            return Km++;
          })()),
          (L[vr] = A),
          (L[An] = 2 == t.type ? e[An] : L),
          L
        );
      }
      function bs(e, t, n, r, i) {
        let o = e.data[t];
        if (null === o)
          (o = (function al(e, t, n, r, i) {
            const o = zr(),
              a = bo(),
              m = (e.data[t] = (function ib(e, t, n, r, i, o) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: i,
                  attrs: o,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tView: null,
                  next: null,
                  prev: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? o : o && o.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = m),
              null !== o &&
                (a
                  ? null == o.child && null !== m.parent && (o.child = m)
                  : null === o.next && ((o.next = m), (m.prev = o))),
              m
            );
          })(e, t, n, r, i)),
            (function vo() {
              return gt.lFrame.inI18n;
            })() && (o.flags |= 32);
        else if (64 & o.type) {
          (o.type = n), (o.value = r), (o.attrs = i);
          const a = (function Ri() {
            const e = gt.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          o.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return dr(o, !0), o;
      }
      function na(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let o = 0; o < n; o++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function cl(e, t, n) {
        I(t);
        try {
          const r = e.viewQuery;
          null !== r && _l(1, r, n);
          const i = e.template;
          null !== i && Jd(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Xd(e, t),
            e.staticViewQueries && _l(2, e.viewQuery, n);
          const o = e.components;
          null !== o &&
            (function tb(e, t) {
              for (let n = 0; n < t.length; n++) Cb(e, t[n]);
            })(t, o);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[pt] &= -5), he();
        }
      }
      function Ba(e, t, n, r) {
        const i = t[pt];
        if (128 != (128 & i)) {
          I(t);
          try {
            $r(t),
              (function Gr(e) {
                return (gt.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Jd(e, t, n, 2, r);
            const a = 3 == (3 & i);
            if (a) {
              const E = e.preOrderCheckHooks;
              null !== E && Wn(t, E, null);
            } else {
              const E = e.preOrderHooks;
              null !== E && wn(t, E, 0, null), h(t, 0);
            }
            if (
              ((function Eb(e) {
                for (let t = Tc(e); null !== t; t = xc(t)) {
                  if (!t[lo]) continue;
                  const n = t[kr];
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r];
                    512 & i[pt] || Tr(i[Jt], 1), (i[pt] |= 512);
                  }
                }
              })(t),
              (function Db(e) {
                for (let t = Tc(e); null !== t; t = xc(t))
                  for (let n = Fn; n < t.length; n++) {
                    const r = t[n],
                      i = r[Ve];
                    Hr(r) && Ba(i, r, i.template, r[Ot]);
                  }
              })(t),
              null !== e.contentQueries && Xd(e, t),
              a)
            ) {
              const E = e.contentCheckHooks;
              null !== E && Wn(t, E);
            } else {
              const E = e.contentHooks;
              null !== E && wn(t, E, 1), h(t, 1);
            }
            !(function J_(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const i = n[r];
                    if (i < 0) yt(~i);
                    else {
                      const o = i,
                        a = n[++r],
                        f = n[++r];
                      Ji(a, o), f(2, t[o]);
                    }
                  }
                } finally {
                  yt(-1);
                }
            })(e, t);
            const f = e.components;
            null !== f &&
              (function eb(e, t) {
                for (let n = 0; n < t.length; n++) wb(e, t[n]);
              })(t, f);
            const m = e.viewQuery;
            if ((null !== m && _l(2, m, r), a)) {
              const E = e.viewCheckHooks;
              null !== E && Wn(t, E);
            } else {
              const E = e.viewHooks;
              null !== E && wn(t, E, 2), h(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[pt] &= -41),
              512 & t[pt] && ((t[pt] &= -513), Tr(t[Jt], -1));
          } finally {
            he();
          }
        }
      }
      function Jd(e, t, n, r, i) {
        const o = dt(),
          a = 2 & r;
        try {
          yt(-1),
            a && t.length > Gt && Ud(e, t, Gt, !1),
            ur(a ? 2 : 0, i),
            n(r, i);
        } finally {
          yt(o), ur(a ? 3 : 1, i);
        }
      }
      function ll(e, t, n) {
        if (Br(t)) {
          const i = t.directiveEnd;
          for (let o = t.directiveStart; o < i; o++) {
            const a = e.data[o];
            a.contentQueries && a.contentQueries(1, n[o], o);
          }
        }
      }
      function ul(e, t, n) {
        _o() &&
          ((function db(e, t, n, r) {
            const i = n.directiveStart,
              o = n.directiveEnd;
            lr(n) &&
              (function bb(e, t, n) {
                const r = $t(t, e),
                  i = ef(n),
                  o = e[ar],
                  a = Ua(
                    e,
                    ka(
                      e,
                      i,
                      null,
                      n.onPush ? 32 : 16,
                      r,
                      t,
                      o,
                      o.createRenderer(r, n),
                      null,
                      null,
                      null,
                    ),
                  );
                e[t.index] = a;
              })(t, n, e.data[i + n.componentOffset]),
              e.firstCreatePass || Do(n, t),
              mr(r, t);
            const a = n.initialInputs;
            for (let f = i; f < o; f++) {
              const m = e.data[f],
                E = Eo(t, e, f, n);
              mr(E, t),
                null !== a && yb(0, f - i, E, m, 0, a),
                yn(m) && (Kt(n.index, t)[Ot] = Eo(t, e, f, n));
            }
          })(e, t, n, $t(n, t)),
          64 == (64 & n.flags) && af(e, t, n));
      }
      function dl(e, t, n = $t) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let o = 0; o < r.length; o += 2) {
            const a = r[o + 1],
              f = -1 === a ? n(t, e) : e[a];
            e[i++] = f;
          }
        }
      }
      function ef(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = fl(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
            ))
          : t;
      }
      function fl(e, t, n, r, i, o, a, f, m, E) {
        const A = Gt + r,
          L = A + i,
          z = (function nb(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : It);
            return n;
          })(A, L),
          ne = "function" == typeof E ? E() : E;
        return (z[Ve] = {
          type: e,
          blueprint: z,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: z.slice().fill(null, A),
          bindingStartIndex: A,
          expandoStartIndex: L,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof o ? o() : o,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: m,
          consts: ne,
          incompleteFirstPass: !1,
        });
      }
      function tf(e, t, n, r) {
        const i = lf(t);
        null === n
          ? i.push(r)
          : (i.push(n), e.firstCreatePass && uf(e).push(r, i.length - 1));
      }
      function nf(e, t, n, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            n = null === n ? {} : n;
            const o = e[i];
            null === r
              ? rf(n, t, i, o)
              : r.hasOwnProperty(i) && rf(n, t, r[i], o);
          }
        return n;
      }
      function rf(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function Wr(e, t, n, r, i, o, a, f) {
        const m = $t(t, n);
        let A,
          E = t.inputs;
        !f && null != E && (A = E[r])
          ? (bl(e, n, A, r, i),
            lr(t) &&
              (function ab(e, t) {
                const n = Kt(t, e);
                16 & n[pt] || (n[pt] |= 32);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function sb(e) {
              return "class" === e
                ? "className"
                : "for" === e
                  ? "htmlFor"
                  : "formaction" === e
                    ? "formAction"
                    : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                        ? "readOnly"
                        : "tabindex" === e
                          ? "tabIndex"
                          : e;
            })(r)),
            (i = null != a ? a(i, t.value || "", r) : i),
            o.setProperty(m, r, i));
      }
      function hl(e, t, n, r) {
        if (_o()) {
          const i = null === r ? null : { "": -1 },
            o = (function hb(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                i = null;
              if (n)
                for (let o = 0; o < n.length; o++) {
                  const a = n[o];
                  if (Ld(t, a.selectors, !1))
                    if ((r || (r = []), yn(a)))
                      if (null !== a.findHostDirectiveDefs) {
                        const f = [];
                        (i = i || new Map()),
                          a.findHostDirectiveDefs(a, f, i),
                          r.unshift(...f, a),
                          pl(e, t, f.length);
                      } else r.unshift(a), pl(e, t, 0);
                    else
                      (i = i || new Map()),
                        a.findHostDirectiveDefs?.(a, r, i),
                        r.push(a);
                }
              return null === r ? null : [r, i];
            })(e, n);
          let a, f;
          null === o ? (a = f = null) : ([a, f] = o),
            null !== a && sf(e, t, n, a, i, f),
            i &&
              (function pb(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < t.length; i += 2) {
                    const o = n[t[i + 1]];
                    if (null == o) throw new De(-301, !1);
                    r.push(t[i], o);
                  }
                }
              })(n, r, i);
        }
        n.mergedAttrs = At(n.mergedAttrs, n.attrs);
      }
      function sf(e, t, n, r, i, o) {
        for (let E = 0; E < r.length; E++) ks(Do(n, t), e, r[E].type);
        !(function gb(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let E = 0; E < r.length; E++) {
          const A = r[E];
          A.providersResolver && A.providersResolver(A);
        }
        let a = !1,
          f = !1,
          m = na(e, t, r.length, null);
        for (let E = 0; E < r.length; E++) {
          const A = r[E];
          (n.mergedAttrs = At(n.mergedAttrs, A.hostAttrs)),
            _b(e, n, t, m, A),
            mb(m, A, i),
            null !== A.contentQueries && (n.flags |= 4),
            (null !== A.hostBindings ||
              null !== A.hostAttrs ||
              0 !== A.hostVars) &&
              (n.flags |= 64);
          const L = A.type.prototype;
          !a &&
            (L.ngOnChanges || L.ngOnInit || L.ngDoCheck) &&
            ((e.preOrderHooks ?? (e.preOrderHooks = [])).push(n.index),
            (a = !0)),
            !f &&
              (L.ngOnChanges || L.ngDoCheck) &&
              ((e.preOrderCheckHooks ?? (e.preOrderCheckHooks = [])).push(
                n.index,
              ),
              (f = !0)),
            m++;
        }
        !(function ob(e, t, n) {
          const i = t.directiveEnd,
            o = e.data,
            a = t.attrs,
            f = [];
          let m = null,
            E = null;
          for (let A = t.directiveStart; A < i; A++) {
            const L = o[A],
              z = n ? n.get(L) : null,
              _e = z ? z.outputs : null;
            (m = nf(L.inputs, A, m, z ? z.inputs : null)),
              (E = nf(L.outputs, A, E, _e));
            const Re = null === m || null === a || Nd(t) ? null : vb(m, A, a);
            f.push(Re);
          }
          null !== m &&
            (m.hasOwnProperty("class") && (t.flags |= 8),
            m.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = f),
            (t.inputs = m),
            (t.outputs = E);
        })(e, n, o);
      }
      function af(e, t, n) {
        const r = n.directiveStart,
          i = n.directiveEnd,
          o = n.index,
          a = (function Lo() {
            return gt.lFrame.currentDirectiveIndex;
          })();
        try {
          yt(o);
          for (let f = r; f < i; f++) {
            const m = e.data[f],
              E = t[f];
            eo(f),
              (null !== m.hostBindings ||
                0 !== m.hostVars ||
                null !== m.hostAttrs) &&
                fb(m, E);
          }
        } finally {
          yt(-1), eo(a);
        }
      }
      function fb(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function pl(e, t, n) {
        (t.componentOffset = n),
          (e.components ?? (e.components = [])).push(t.index);
      }
      function mb(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          yn(t) && (n[""] = e);
        }
      }
      function _b(e, t, n, r, i) {
        e.data[r] = i;
        const o = i.factory || (i.factory = Ir(i.type)),
          a = new k(o, yn(i), _s);
        (e.blueprint[r] = a),
          (n[r] = a),
          (function lb(e, t, n, r, i) {
            const o = i.hostBindings;
            if (o) {
              let a = e.hostBindingOpCodes;
              null === a && (a = e.hostBindingOpCodes = []);
              const f = ~t.index;
              (function ub(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(a) != f && a.push(f),
                a.push(n, r, o);
            }
          })(e, t, r, na(e, n, i.hostVars, It), i);
      }
      function ji(e, t, n, r, i, o) {
        const a = $t(e, t);
        !(function ml(e, t, n, r, i, o, a) {
          if (null == o) e.removeAttribute(t, i, n);
          else {
            const f = null == a ? Oe(o) : a(o, r || "", i);
            e.setAttribute(t, i, f, n);
          }
        })(t[mt], a, o, e.value, n, r, i);
      }
      function yb(e, t, n, r, i, o) {
        const a = o[t];
        if (null !== a) {
          const f = r.setInput;
          for (let m = 0; m < a.length; ) {
            const E = a[m++],
              A = a[m++],
              L = a[m++];
            null !== f ? r.setInput(n, L, E, A) : (n[A] = L);
          }
        }
      }
      function vb(e, t, n) {
        let r = null,
          i = 0;
        for (; i < n.length; ) {
          const o = n[i];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              if (e.hasOwnProperty(o)) {
                null === r && (r = []);
                const a = e[o];
                for (let f = 0; f < a.length; f += 2)
                  if (a[f] === t) {
                    r.push(o, a[f + 1], n[i + 1]);
                    break;
                  }
              }
              i += 2;
            } else i += 2;
          else i += 4;
        }
        return r;
      }
      function cf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function wb(e, t) {
        const n = Kt(t, e);
        if (Hr(n)) {
          const r = n[Ve];
          48 & n[pt] ? Ba(r, n, r.template, n[Ot]) : n[yr] > 0 && gl(n);
        }
      }
      function gl(e) {
        for (let r = Tc(e); null !== r; r = xc(r))
          for (let i = Fn; i < r.length; i++) {
            const o = r[i];
            if (Hr(o))
              if (512 & o[pt]) {
                const a = o[Ve];
                Ba(a, o, a.template, o[Ot]);
              } else o[yr] > 0 && gl(o);
          }
        const n = e[Ve].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = Kt(n[r], e);
            Hr(i) && i[yr] > 0 && gl(i);
          }
      }
      function Cb(e, t) {
        const n = Kt(t, e),
          r = n[Ve];
        (function Mb(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          cl(r, n, n[Ot]);
      }
      function Ua(e, t) {
        return e[Qn] ? (e[Mr][gn] = t) : (e[Qn] = t), (e[Mr] = t), t;
      }
      function ja(e) {
        for (; e; ) {
          e[pt] |= 32;
          const t = Zs(e);
          if (fo(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Ha(e, t, n, r = !0) {
        const i = t[ar];
        i.begin && i.begin();
        try {
          Ba(e, t, e.template, n);
        } catch (a) {
          throw (r && ff(t, a), a);
        } finally {
          i.end && i.end();
        }
      }
      function _l(e, t, n) {
        c(0), t(e, n);
      }
      function lf(e) {
        return e[sr] || (e[sr] = []);
      }
      function uf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function df(e, t, n) {
        return (
          (null === e || yn(e)) &&
            (n = (function xi(e) {
              for (; Array.isArray(e); ) {
                if ("object" == typeof e[Xr]) return e;
                e = e[Zn];
              }
              return null;
            })(n[t.index])),
          n[mt]
        );
      }
      function ff(e, t) {
        const n = e[dn],
          r = n ? n.get(ta, null) : null;
        r && r.handleError(t);
      }
      function bl(e, t, n, r, i) {
        for (let o = 0; o < n.length; ) {
          const a = n[o++],
            f = n[o++],
            m = t[a],
            E = e.data[a];
          null !== E.setInput ? E.setInput(m, i, r, f) : (m[f] = i);
        }
      }
      function $a(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          o = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const f = t[a];
            "number" == typeof f
              ? (o = f)
              : 1 == o
                ? (i = q(i, f))
                : 2 == o && (r = q(r, f + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function Va(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const o = t[n.index];
          if ((null !== o && r.push(vn(o)), Nn(o)))
            for (let f = Fn; f < o.length; f++) {
              const m = o[f],
                E = m[Ve].firstChild;
              null !== E && Va(m[Ve], m, E, r);
            }
          const a = n.type;
          if (8 & a) Va(e, t, n.child, r);
          else if (32 & a) {
            const f = Sc(n, t);
            let m;
            for (; (m = f()); ) r.push(m);
          } else if (16 & a) {
            const f = td(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const m = Zs(t[An]);
              Va(m[Ve], m, f, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      class ra {
        get rootNodes() {
          const t = this._lView,
            n = t[Ve];
          return Va(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Ot];
        }
        set context(t) {
          this._lView[Ot] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[pt]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Jt];
            if (Nn(t)) {
              const n = t[vi],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Rc(t, r), as(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Wu(this._lView[Ve], this._lView);
        }
        onDestroy(t) {
          tf(this._lView[Ve], this._lView, null, t);
        }
        markForCheck() {
          ja(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[pt] &= -65;
        }
        reattach() {
          this._lView[pt] |= 64;
        }
        detectChanges() {
          Ha(this._lView[Ve], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new De(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function lg(e, t) {
              Qs(e, t, t[mt], 2, null, null);
            })(this._lView[Ve], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new De(902, !1);
          this._appRef = t;
        }
      }
      class Ib extends ra {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Ha(t[Ve], t, t[Ot], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class hf extends Js {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = xt(t);
          return new ia(n, this.ngModule);
        }
      }
      function pf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Tb {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = be(r);
          const i = this.injector.get(t, el, r);
          return i !== el || n === el ? i : this.parentInjector.get(t, n, r);
        }
      }
      class ia extends Sd {
        get inputs() {
          return pf(this.componentDef.inputs);
        }
        get outputs() {
          return pf(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function P_(e) {
              return e.map(R_).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, i) {
          let o = (i = i || this.ngModule) instanceof Go ? i : i?.injector;
          o &&
            null !== this.componentDef.getStandaloneInjector &&
            (o = this.componentDef.getStandaloneInjector(o) || o);
          const a = o ? new Tb(t, o) : t,
            f = a.get(xd, null);
          if (null === f) throw new De(407, !1);
          const m = a.get(h_, null),
            E = f.createRenderer(null, this.componentDef),
            A = this.componentDef.selectors[0][0] || "div",
            L = r
              ? (function rb(e, t, n) {
                  return e.selectRootElement(t, n === rn.ShadowDom);
                })(E, r, this.componentDef.encapsulation)
              : Oc(
                  E,
                  A,
                  (function Sb(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? Si : "math" === t ? "math" : null;
                  })(A),
                ),
            z = this.componentDef.onPush ? 288 : 272,
            ne = fl(0, null, null, 1, 0, null, null, null, null, null),
            _e = ka(null, ne, null, z, null, null, f, E, m, a, null);
          let Re, Ke;
          I(_e);
          try {
            const ot = this.componentDef;
            let Et,
              Se = null;
            ot.findHostDirectiveDefs
              ? ((Et = []),
                (Se = new Map()),
                ot.findHostDirectiveDefs(ot, Et, Se),
                Et.push(ot))
              : (Et = [ot]);
            const Ct = (function Ab(e, t) {
                const n = e[Ve],
                  r = Gt;
                return (e[r] = t), bs(n, r, 2, "#host", null);
              })(_e, L),
              _n = (function Ob(e, t, n, r, i, o, a, f) {
                const m = i[Ve];
                !(function Rb(e, t, n, r) {
                  for (const i of e)
                    t.mergedAttrs = At(t.mergedAttrs, i.hostAttrs);
                  null !== t.mergedAttrs &&
                    ($a(t, t.mergedAttrs, !0), null !== n && id(r, n, t));
                })(r, e, t, a);
                const E = o.createRenderer(t, n),
                  A = ka(
                    i,
                    ef(n),
                    null,
                    n.onPush ? 32 : 16,
                    i[e.index],
                    e,
                    o,
                    E,
                    f || null,
                    null,
                    null,
                  );
                return (
                  m.firstCreatePass && pl(m, e, r.length - 1),
                  Ua(i, A),
                  (i[e.index] = A)
                );
              })(Ct, L, ot, Et, _e, f, E);
            (Ke = Ur(ne, Gt)),
              L &&
                (function Fb(e, t, n, r) {
                  if (r) Mt(e, n, ["ng-version", p_.full]);
                  else {
                    const { attrs: i, classes: o } = (function F_(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        i = 2;
                      for (; r < e.length; ) {
                        let o = e[r];
                        if ("string" == typeof o)
                          2 === i
                            ? "" !== o && t.push(o, e[++r])
                            : 8 === i && n.push(o);
                        else {
                          if (!pi(i)) break;
                          i = o;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    i && Mt(e, n, i),
                      o && o.length > 0 && rd(e, n, o.join(" "));
                  }
                })(E, ot, L, r),
              void 0 !== n &&
                (function Nb(e, t, n) {
                  const r = (e.projection = []);
                  for (let i = 0; i < t.length; i++) {
                    const o = n[i];
                    r.push(null != o ? Array.from(o) : null);
                  }
                })(Ke, this.ngContentSelectors, n),
              (Re = (function Pb(e, t, n, r, i, o) {
                const a = fn(),
                  f = i[Ve],
                  m = $t(a, i);
                sf(f, i, a, n, null, r);
                for (let A = 0; A < n.length; A++)
                  mr(Eo(i, f, a.directiveStart + A, a), i);
                af(f, i, a), m && mr(m, i);
                const E = Eo(i, f, a.directiveStart + a.componentOffset, a);
                if (((e[Ot] = i[Ot] = E), null !== o))
                  for (const A of o) A(E, t);
                return ll(f, a, e), E;
              })(_n, ot, Et, Se, _e, [Lb])),
              cl(ne, _e, null);
          } finally {
            he();
          }
          return new xb(this.componentType, Re, ps(Ke, _e), _e, Ke);
        }
      }
      class xb extends s_ {
        constructor(t, n, r, i, o) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = o),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Ib(i)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[t])) {
            const o = this._rootLView;
            bl(o[Ve], o, i, t, n), ja(Kt(this._tNode.index, o));
          }
        }
        get injector() {
          return new $n(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function Lb() {
        const e = fn();
        xr(fe()[Ve], e);
      }
      function yl(e) {
        let t = (function mf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let i;
          if (yn(e)) i = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new De(903, !1);
            i = t.ɵdir;
          }
          if (i) {
            if (n) {
              r.push(i);
              const a = e;
              (a.inputs = vl(e.inputs)),
                (a.declaredInputs = vl(e.declaredInputs)),
                (a.outputs = vl(e.outputs));
              const f = i.hostBindings;
              f && jb(e, f);
              const m = i.viewQuery,
                E = i.contentQueries;
              if (
                (m && Bb(e, m),
                E && Ub(e, E),
                te(e.inputs, i.inputs),
                te(e.declaredInputs, i.declaredInputs),
                te(e.outputs, i.outputs),
                yn(i) && i.data.animation)
              ) {
                const A = e.data;
                A.animation = (A.animation || []).concat(i.data.animation);
              }
            }
            const o = i.features;
            if (o)
              for (let a = 0; a < o.length; a++) {
                const f = o[a];
                f && f.ngInherit && f(e), f === yl && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function kb(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = t += i.hostVars),
              (i.hostAttrs = At(i.hostAttrs, (n = At(n, i.hostAttrs))));
          }
        })(r);
      }
      function vl(e) {
        return e === ln ? {} : e === bt ? [] : e;
      }
      function Bb(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function Ub(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, i, o) => {
              t(r, i, o), n(r, i, o);
            }
          : t;
      }
      function jb(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, i) => {
              t(r, i), n(r, i);
            }
          : t;
      }
      function za(e) {
        return (
          !!Dl(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function Dl(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Hi(e, t, n) {
        return (e[t] = n);
      }
      function gr(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function El(e, t, n, r) {
        const i = fe();
        return gr(i, Pi(), t) && (Nt(), ji(ze(), i, e, t, n, r)), El;
      }
      function Tf(e, t, n, r, i, o, a, f) {
        const m = fe(),
          E = Nt(),
          A = e + Gt,
          L = E.firstCreatePass
            ? (function Qb(e, t, n, r, i, o, a, f, m) {
                const E = t.consts,
                  A = bs(t, e, 4, a || null, Sr(E, f));
                hl(t, n, A, Sr(E, m)), xr(t, A);
                const L = (A.tView = fl(
                  2,
                  A,
                  r,
                  i,
                  o,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  E,
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, A),
                    (L.queries = t.queries.embeddedTView(A))),
                  A
                );
              })(A, E, m, t, n, r, i, o, a)
            : E.data[A];
        dr(L, !1);
        const z = m[mt].createComment("");
        Ta(E, m, z, L),
          mr(z, m),
          Ua(m, (m[A] = cf(z, m, z, L))),
          Xn(L) && ul(E, m, L),
          null != a && dl(m, L, f);
      }
      function xf(e) {
        return ei(
          (function ns() {
            return gt.lFrame.contextLView;
          })(),
          Gt + e,
        );
      }
      function wl(e, t, n) {
        const r = fe();
        return gr(r, Pi(), t) && Wr(Nt(), ze(), r, e, t, r[mt], n, !1), wl;
      }
      function Cl(e, t, n, r, i) {
        const a = i ? "class" : "style";
        bl(e, n, t.inputs[a], a, r);
      }
      function Wa(e, t, n, r) {
        const i = fe(),
          o = Nt(),
          a = Gt + e,
          f = i[mt],
          m = o.firstCreatePass
            ? (function Xb(e, t, n, r, i, o) {
                const a = t.consts,
                  m = bs(t, e, 2, r, Sr(a, i));
                return (
                  hl(t, n, m, Sr(a, o)),
                  null !== m.attrs && $a(m, m.attrs, !1),
                  null !== m.mergedAttrs && $a(m, m.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, m),
                  m
                );
              })(a, o, i, t, n, r)
            : o.data[a],
          E = (i[a] = Oc(
            f,
            t,
            (function Hn() {
              return gt.lFrame.currentNamespace;
            })(),
          )),
          A = Xn(m);
        return (
          dr(m, !0),
          id(f, E, m),
          32 != (32 & m.flags) && Ta(o, i, E, m),
          0 ===
            (function Vr() {
              return gt.lFrame.elementDepthCount;
            })() && mr(E, i),
          (function Po() {
            gt.lFrame.elementDepthCount++;
          })(),
          A && (ul(o, i, m), ll(o, m, i)),
          null !== r && dl(i, m),
          Wa
        );
      }
      function Ka() {
        let e = fn();
        bo() ? yo() : ((e = e.parent), dr(e, !1));
        const t = e;
        !(function go() {
          gt.lFrame.elementDepthCount--;
        })();
        const n = Nt();
        return (
          n.firstCreatePass && (xr(n, e), Br(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Ne(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Cl(n, t, fe(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function ke(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Cl(n, t, fe(), t.stylesWithoutHost, !1),
          Ka
        );
      }
      function Ml(e, t, n, r) {
        return Wa(e, t, n, r), Ka(), Ml;
      }
      function Ya(e, t, n) {
        const r = fe(),
          i = Nt(),
          o = e + Gt,
          a = i.firstCreatePass
            ? (function Jb(e, t, n, r, i) {
                const o = t.consts,
                  a = Sr(o, r),
                  f = bs(t, e, 8, "ng-container", a);
                return (
                  null !== a && $a(f, a, !0),
                  hl(t, n, f, Sr(o, i)),
                  null !== t.queries && t.queries.elementStart(t, f),
                  f
                );
              })(o, i, r, t, n)
            : i.data[o];
        dr(a, !0);
        const f = (r[o] = r[mt].createComment(""));
        return (
          Ta(i, r, f, a),
          mr(f, r),
          Xn(a) && (ul(i, r, a), ll(i, a, r)),
          null != n && dl(r, a),
          Ya
        );
      }
      function Za() {
        let e = fn();
        const t = Nt();
        return (
          bo() ? yo() : ((e = e.parent), dr(e, !1)),
          t.firstCreatePass && (xr(t, e), Br(e) && t.queries.elementEnd(e)),
          Za
        );
      }
      function Of() {
        return fe();
      }
      function Il(e) {
        return !!e && "function" == typeof e.then;
      }
      function Rf(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const Pf = Rf;
      function Sl(e, t, n, r) {
        const i = fe(),
          o = Nt(),
          a = fn();
        return Ff(o, i, i[mt], a, e, t, r), Sl;
      }
      function Tl(e, t) {
        const n = fn(),
          r = fe(),
          i = Nt();
        return Ff(i, r, df(Fi(i.data), n, r), n, e, t), Tl;
      }
      function Ff(e, t, n, r, i, o, a) {
        const f = Xn(r),
          E = e.firstCreatePass && uf(e),
          A = t[Ot],
          L = lf(t);
        let z = !0;
        if (3 & r.type || a) {
          const Re = $t(r, t),
            Ke = a ? a(Re) : Re,
            ot = L.length,
            Et = a ? (Ct) => a(vn(Ct[r.index])) : r.index;
          let Se = null;
          if (
            (!a &&
              f &&
              (Se = (function ey(e, t, n, r) {
                const i = e.cleanup;
                if (null != i)
                  for (let o = 0; o < i.length - 1; o += 2) {
                    const a = i[o];
                    if (a === n && i[o + 1] === r) {
                      const f = t[sr],
                        m = i[o + 2];
                      return f.length > m ? f[m] : null;
                    }
                    "string" == typeof a && (o += 2);
                  }
                return null;
              })(e, t, i, r.index)),
            null !== Se)
          )
            ((Se.__ngLastListenerFn__ || Se).__ngNextListenerFn__ = o),
              (Se.__ngLastListenerFn__ = o),
              (z = !1);
          else {
            o = Lf(r, t, A, o, !1);
            const Ct = n.listen(Ke, i, o);
            L.push(o, Ct), E && E.push(i, Et, ot, ot + 1);
          }
        } else o = Lf(r, t, A, o, !1);
        const ne = r.outputs;
        let _e;
        if (z && null !== ne && (_e = ne[i])) {
          const Re = _e.length;
          if (Re)
            for (let Ke = 0; Ke < Re; Ke += 2) {
              const _n = t[_e[Ke]][_e[Ke + 1]].subscribe(o),
                Bn = L.length;
              L.push(o, _n), E && E.push(i, r.index, Bn, -(Bn + 1));
            }
        }
      }
      function Nf(e, t, n, r) {
        try {
          return ur(6, t, n), !1 !== n(r);
        } catch (i) {
          return ff(e, i), !1;
        } finally {
          ur(7, t, n);
        }
      }
      function Lf(e, t, n, r, i) {
        return function o(a) {
          if (a === Function) return r;
          ja(e.componentOffset > -1 ? Kt(e.index, t) : t);
          let m = Nf(t, n, r, a),
            E = o.__ngNextListenerFn__;
          for (; E; ) (m = Nf(t, n, E, a) && m), (E = E.__ngNextListenerFn__);
          return i && !1 === m && (a.preventDefault(), (a.returnValue = !1)), m;
        };
      }
      function kf(e = 1) {
        return (function Ue(e) {
          return (gt.lFrame.contextLView = (function Xe(e, t) {
            for (; e > 0; ) (t = t[Nr]), e--;
            return t;
          })(e, gt.lFrame.contextLView))[Ot];
        })(e);
      }
      function ty(e, t) {
        let n = null;
        const r = (function T_(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          if ("*" !== o) {
            if (null === r ? Ld(e, o, !0) : O_(r, o)) return i;
          } else n = i;
        }
        return n;
      }
      function Bf(e) {
        const t = fe()[An][un];
        if (!t.projection) {
          const r = (t.projection = cs(e ? e.length : 1, null)),
            i = r.slice();
          let o = t.child;
          for (; null !== o; ) {
            const a = e ? ty(o, e) : 0;
            null !== a &&
              (i[a] ? (i[a].projectionNext = o) : (r[a] = o), (i[a] = o)),
              (o = o.next);
          }
        }
      }
      function Uf(e, t = 0, n) {
        const r = fe(),
          i = Nt(),
          o = bs(i, Gt + e, 16, null, n || null);
        null === o.projection && (o.projection = t),
          yo(),
          32 != (32 & o.flags) &&
            (function _g(e, t, n) {
              nd(t[mt], 0, t, n, Ku(e, n, t), qu(n.parent || t[un], n, t));
            })(i, r, o);
      }
      function Qa(e, t) {
        return (e << 17) | (t << 2);
      }
      function Mo(e) {
        return (e >> 17) & 32767;
      }
      function Al(e) {
        return 2 | e;
      }
      function Yo(e) {
        return (131068 & e) >> 2;
      }
      function Ol(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Rl(e) {
        return 1 | e;
      }
      function Zf(e, t, n, r, i) {
        const o = e[n + 1],
          a = null === t;
        let f = r ? Mo(o) : Yo(o),
          m = !1;
        for (; 0 !== f && (!1 === m || a); ) {
          const A = e[f + 1];
          ay(e[f], t) && ((m = !0), (e[f + 1] = r ? Rl(A) : Al(A))),
            (f = r ? Mo(A) : Yo(A));
        }
        m && (e[n + 1] = r ? Al(o) : Rl(o));
      }
      function ay(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && R(e, t) >= 0)
        );
      }
      const Kn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Qf(e) {
        return e.substring(Kn.key, Kn.keyEnd);
      }
      function cy(e) {
        return e.substring(Kn.value, Kn.valueEnd);
      }
      function qf(e, t) {
        const n = Kn.textEnd;
        return n === t
          ? -1
          : ((t = Kn.keyEnd =
              (function dy(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (Kn.key = t), n)),
            Ts(e, t, n));
      }
      function Xf(e, t) {
        const n = Kn.textEnd;
        let r = (Kn.key = Ts(e, t, n));
        return n === r
          ? -1
          : ((r = Kn.keyEnd =
              (function fy(e, t, n) {
                let r;
                for (
                  ;
                  t < n &&
                  (45 === (r = e.charCodeAt(t)) ||
                    95 === r ||
                    ((-33 & r) >= 65 && (-33 & r) <= 90) ||
                    (r >= 48 && r <= 57));

                )
                  t++;
                return t;
              })(e, r, n)),
            (r = eh(e, r, n)),
            (r = Kn.value = Ts(e, r, n)),
            (r = Kn.valueEnd =
              (function hy(e, t, n) {
                let r = -1,
                  i = -1,
                  o = -1,
                  a = t,
                  f = a;
                for (; a < n; ) {
                  const m = e.charCodeAt(a++);
                  if (59 === m) return f;
                  34 === m || 39 === m
                    ? (f = a = th(e, m, a, n))
                    : t === a - 4 &&
                        85 === o &&
                        82 === i &&
                        76 === r &&
                        40 === m
                      ? (f = a = th(e, 41, a, n))
                      : m > 32 && (f = a),
                    (o = i),
                    (i = r),
                    (r = -33 & m);
                }
                return f;
              })(e, r, n)),
            eh(e, r, n));
      }
      function Jf(e) {
        (Kn.key = 0),
          (Kn.keyEnd = 0),
          (Kn.value = 0),
          (Kn.valueEnd = 0),
          (Kn.textEnd = e.length);
      }
      function Ts(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function eh(e, t, n, r) {
        return (t = Ts(e, t, n)) < n && t++, t;
      }
      function th(e, t, n, r) {
        let i = -1,
          o = n;
        for (; o < r; ) {
          const a = e.charCodeAt(o++);
          if (a == t && 92 !== i) return o;
          i = 92 == a && 92 === i ? 0 : a;
        }
        throw new Error();
      }
      function Pl(e, t, n) {
        return gi(e, t, n, !1), Pl;
      }
      function Fl(e, t) {
        return gi(e, t, null, !0), Fl;
      }
      function mi(e) {
        _i(oh, py, e, !1);
      }
      function py(e, t) {
        for (
          let n = (function uy(e) {
            return Jf(e), Xf(e, Ts(e, 0, Kn.textEnd));
          })(t);
          n >= 0;
          n = Xf(t, n)
        )
          oh(e, Qf(t), cy(t));
      }
      function nh(e) {
        _i(vy, $i, e, !0);
      }
      function $i(e, t) {
        for (
          let n = (function ly(e) {
            return Jf(e), qf(e, Ts(e, 0, Kn.textEnd));
          })(t);
          n >= 0;
          n = qf(t, n)
        )
          y(e, Qf(t), !0);
      }
      function gi(e, t, n, r) {
        const i = fe(),
          o = Nt(),
          a = Er(2);
        o.firstUpdatePass && ih(o, e, a, r),
          t !== It &&
            gr(i, a, t) &&
            sh(
              o,
              o.data[dt()],
              i,
              i[mt],
              e,
              (i[a + 1] = (function Ey(e, t) {
                return (
                  null == e ||
                    "" === e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = J(io(e)))),
                  e
                );
              })(t, n)),
              r,
              a,
            );
      }
      function _i(e, t, n, r) {
        const i = Nt(),
          o = Er(2);
        i.firstUpdatePass && ih(i, null, o, r);
        const a = fe();
        if (n !== It && gr(a, o, n)) {
          const f = i.data[dt()];
          if (ch(f, r) && !rh(i, o)) {
            let m = r ? f.classesWithoutHost : f.stylesWithoutHost;
            null !== m && (n = q(m, n || "")), Cl(i, f, a, n, r);
          } else
            !(function Dy(e, t, n, r, i, o, a, f) {
              i === It && (i = bt);
              let m = 0,
                E = 0,
                A = 0 < i.length ? i[0] : null,
                L = 0 < o.length ? o[0] : null;
              for (; null !== A || null !== L; ) {
                const z = m < i.length ? i[m + 1] : void 0,
                  ne = E < o.length ? o[E + 1] : void 0;
                let Re,
                  _e = null;
                A === L
                  ? ((m += 2), (E += 2), z !== ne && ((_e = L), (Re = ne)))
                  : null === L || (null !== A && A < L)
                    ? ((m += 2), (_e = A))
                    : ((E += 2), (_e = L), (Re = ne)),
                  null !== _e && sh(e, t, n, r, _e, Re, a, f),
                  (A = m < i.length ? i[m] : null),
                  (L = E < o.length ? o[E] : null);
              }
            })(
              i,
              f,
              a,
              a[mt],
              a[o + 1],
              (a[o + 1] = (function yy(e, t, n) {
                if (null == n || "" === n) return bt;
                const r = [],
                  i = io(n);
                if (Array.isArray(i))
                  for (let o = 0; o < i.length; o++) e(r, i[o], !0);
                else if ("object" == typeof i)
                  for (const o in i) i.hasOwnProperty(o) && e(r, o, i[o]);
                else "string" == typeof i && t(r, i);
                return r;
              })(e, t, n)),
              r,
              o,
            );
        }
      }
      function rh(e, t) {
        return t >= e.expandoStartIndex;
      }
      function ih(e, t, n, r) {
        const i = e.data;
        if (null === i[n + 1]) {
          const o = i[dt()],
            a = rh(e, n);
          ch(o, r) && null === t && !a && (t = !1),
            (t = (function my(e, t, n, r) {
              const i = Fi(e);
              let o = r ? t.residualClasses : t.residualStyles;
              if (null === i)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = sa((n = Nl(null, e, t, n, r)), t.attrs, r)),
                  (o = null));
              else {
                const a = t.directiveStylingLast;
                if (-1 === a || e[a] !== i)
                  if (((n = Nl(i, e, t, n, r)), null === o)) {
                    let m = (function gy(e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Yo(r)) return e[Mo(r)];
                    })(e, t, r);
                    void 0 !== m &&
                      Array.isArray(m) &&
                      ((m = Nl(null, e, t, m[1], r)),
                      (m = sa(m, t.attrs, r)),
                      (function _y(e, t, n, r) {
                        e[Mo(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, m));
                  } else
                    o = (function by(e, t, n) {
                      let r;
                      const i = t.directiveEnd;
                      for (let o = 1 + t.directiveStylingLast; o < i; o++)
                        r = sa(r, e[o].hostAttrs, n);
                      return sa(r, t.attrs, n);
                    })(e, t, r);
              }
              return (
                void 0 !== o &&
                  (r ? (t.residualClasses = o) : (t.residualStyles = o)),
                n
              );
            })(i, o, t, r)),
            (function oy(e, t, n, r, i, o) {
              let a = o ? t.classBindings : t.styleBindings,
                f = Mo(a),
                m = Yo(a);
              e[r] = n;
              let A,
                E = !1;
              if (
                (Array.isArray(n)
                  ? ((A = n[1]), (null === A || R(n, A) > 0) && (E = !0))
                  : (A = n),
                i)
              )
                if (0 !== m) {
                  const z = Mo(e[f + 1]);
                  (e[r + 1] = Qa(z, f)),
                    0 !== z && (e[z + 1] = Ol(e[z + 1], r)),
                    (e[f + 1] = (function ry(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[f + 1], r));
                } else
                  (e[r + 1] = Qa(f, 0)),
                    0 !== f && (e[f + 1] = Ol(e[f + 1], r)),
                    (f = r);
              else
                (e[r + 1] = Qa(m, 0)),
                  0 === f ? (f = r) : (e[m + 1] = Ol(e[m + 1], r)),
                  (m = r);
              E && (e[r + 1] = Al(e[r + 1])),
                Zf(e, A, r, !0),
                Zf(e, A, r, !1),
                (function sy(e, t, n, r, i) {
                  const o = i ? e.residualClasses : e.residualStyles;
                  null != o &&
                    "string" == typeof t &&
                    R(o, t) >= 0 &&
                    (n[r + 1] = Rl(n[r + 1]));
                })(t, A, e, r, o),
                (a = Qa(f, m)),
                o ? (t.classBindings = a) : (t.styleBindings = a);
            })(i, o, t, n, a, r);
        }
      }
      function Nl(e, t, n, r, i) {
        let o = null;
        const a = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (
          -1 === f ? (f = n.directiveStart) : f++;
          f < a && ((o = t[f]), (r = sa(r, o.hostAttrs, i)), o !== e);

        )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function sa(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const a = t[o];
            "number" == typeof a
              ? (i = a)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                y(e, a, !!n || t[++o]));
          }
        return void 0 === e ? null : e;
      }
      function oh(e, t, n) {
        y(e, t, io(n));
      }
      function vy(e, t, n) {
        const r = String(t);
        "" !== r && !r.includes(" ") && y(e, r, n);
      }
      function sh(e, t, n, r, i, o, a, f) {
        if (!(3 & t.type)) return;
        const m = e.data,
          E = m[f + 1],
          A = (function iy(e) {
            return 1 == (1 & e);
          })(E)
            ? ah(m, t, n, i, Yo(E), a)
            : void 0;
        qa(A) ||
          (qa(o) ||
            ((function ny(e) {
              return 2 == (2 & e);
            })(E) &&
              (o = ah(m, null, n, i, f, a))),
          (function yg(e, t, n, r, i) {
            if (t) i ? e.addClass(n, r) : e.removeClass(n, r);
            else {
              let o = -1 === r.indexOf("-") ? void 0 : Ui.DashCase;
              null == i
                ? e.removeStyle(n, r, o)
                : ("string" == typeof i &&
                    i.endsWith("!important") &&
                    ((i = i.slice(0, -10)), (o |= Ui.Important)),
                  e.setStyle(n, r, i, o));
            }
          })(r, a, Dr(dt(), n), i, o));
      }
      function ah(e, t, n, r, i, o) {
        const a = null === t;
        let f;
        for (; i > 0; ) {
          const m = e[i],
            E = Array.isArray(m),
            A = E ? m[1] : m,
            L = null === A;
          let z = n[i + 1];
          z === It && (z = L ? bt : void 0);
          let ne = L ? S(z, r) : A === r ? z : void 0;
          if ((E && !qa(ne) && (ne = S(m, r)), qa(ne) && ((f = ne), a)))
            return f;
          const _e = e[i + 1];
          i = a ? Mo(_e) : Yo(_e);
        }
        if (null !== t) {
          let m = o ? t.residualClasses : t.residualStyles;
          null != m && (f = S(m, r));
        }
        return f;
      }
      function qa(e) {
        return void 0 !== e;
      }
      function ch(e, t) {
        return 0 != (e.flags & (t ? 8 : 16));
      }
      function lh(e, t = "") {
        const n = fe(),
          r = Nt(),
          i = e + Gt,
          o = r.firstCreatePass ? bs(r, i, 1, t, null) : r.data[i],
          a = (n[i] = (function Ac(e, t) {
            return e.createText(t);
          })(n[mt], t));
        Ta(r, n, a, o), dr(o, !1);
      }
      function Ll(e) {
        return Xa("", e, ""), Ll;
      }
      function Xa(e, t, n) {
        const r = fe(),
          i = (function vs(e, t, n, r) {
            return gr(e, Pi(), n) ? t + Oe(n) + r : It;
          })(r, e, t, n);
        return (
          i !== It &&
            (function ao(e, t, n) {
              const r = Dr(t, e);
              !(function zu(e, t, n) {
                e.setValue(t, n);
              })(e[mt], r, n);
            })(r, dt(), i),
          Xa
        );
      }
      function kl(e, t, n) {
        const r = fe();
        return gr(r, Pi(), t) && Wr(Nt(), ze(), r, e, t, r[mt], n, !0), kl;
      }
      function Bl(e, t, n) {
        const r = fe();
        if (gr(r, Pi(), t)) {
          const o = Nt(),
            a = ze();
          Wr(o, a, r, e, t, df(Fi(o.data), a, r), n, !0);
        }
        return Bl;
      }
      const Zo = void 0;
      var $y = [
        "en",
        [["a", "p"], ["AM", "PM"], Zo],
        [["AM", "PM"], Zo, Zo],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Zo,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Zo,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Zo, "{1} 'at' {0}", Zo],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function Hy(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let xs = {};
      function Ul(e) {
        const t = (function Vy(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Th(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = Th(r)), n)) return n;
        if ("en" === r) return $y;
        throw new De(701, !1);
      }
      function Sh(e) {
        return Ul(e)[vt.PluralCase];
      }
      function Th(e) {
        return (
          e in xs ||
            (xs[e] =
              Vt.ng &&
              Vt.ng.common &&
              Vt.ng.common.locales &&
              Vt.ng.common.locales[e]),
          xs[e]
        );
      }
      var vt = (() => (
        ((vt = vt || {})[(vt.LocaleId = 0)] = "LocaleId"),
        (vt[(vt.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (vt[(vt.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (vt[(vt.DaysFormat = 3)] = "DaysFormat"),
        (vt[(vt.DaysStandalone = 4)] = "DaysStandalone"),
        (vt[(vt.MonthsFormat = 5)] = "MonthsFormat"),
        (vt[(vt.MonthsStandalone = 6)] = "MonthsStandalone"),
        (vt[(vt.Eras = 7)] = "Eras"),
        (vt[(vt.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (vt[(vt.WeekendRange = 9)] = "WeekendRange"),
        (vt[(vt.DateFormat = 10)] = "DateFormat"),
        (vt[(vt.TimeFormat = 11)] = "TimeFormat"),
        (vt[(vt.DateTimeFormat = 12)] = "DateTimeFormat"),
        (vt[(vt.NumberSymbols = 13)] = "NumberSymbols"),
        (vt[(vt.NumberFormats = 14)] = "NumberFormats"),
        (vt[(vt.CurrencyCode = 15)] = "CurrencyCode"),
        (vt[(vt.CurrencySymbol = 16)] = "CurrencySymbol"),
        (vt[(vt.CurrencyName = 17)] = "CurrencyName"),
        (vt[(vt.Currencies = 18)] = "Currencies"),
        (vt[(vt.Directionality = 19)] = "Directionality"),
        (vt[(vt.PluralCase = 20)] = "PluralCase"),
        (vt[(vt.ExtraData = 21)] = "ExtraData"),
        vt
      ))();
      const As = "en-US";
      let xh = As;
      function $l(e, t, n, r, i) {
        if (((e = H(e)), Array.isArray(e)))
          for (let o = 0; o < e.length; o++) $l(e[o], t, n, r, i);
        else {
          const o = Nt(),
            a = fe();
          let f = zo(e) ? e : H(e.provide),
            m = Id(e);
          const E = fn(),
            A = 1048575 & E.providerIndexes,
            L = E.directiveStart,
            z = E.providerIndexes >> 20;
          if (zo(e) || !e.multi) {
            const ne = new k(m, i, _s),
              _e = zl(f, t, i ? A : A + z, L);
            -1 === _e
              ? (ks(Do(E, a), o, f),
                Vl(o, e, t.length),
                t.push(f),
                E.directiveStart++,
                E.directiveEnd++,
                i && (E.providerIndexes += 1048576),
                n.push(ne),
                a.push(ne))
              : ((n[_e] = ne), (a[_e] = ne));
          } else {
            const ne = zl(f, t, A + z, L),
              _e = zl(f, t, A, A + z),
              Ke = _e >= 0 && n[_e];
            if ((i && !Ke) || (!i && !(ne >= 0 && n[ne]))) {
              ks(Do(E, a), o, f);
              const ot = (function jv(e, t, n, r, i) {
                const o = new k(e, n, _s);
                return (
                  (o.multi = []),
                  (o.index = t),
                  (o.componentProviders = 0),
                  ep(o, i, r && !n),
                  o
                );
              })(i ? Uv : Bv, n.length, i, r, m);
              !i && Ke && (n[_e].providerFactory = ot),
                Vl(o, e, t.length, 0),
                t.push(f),
                E.directiveStart++,
                E.directiveEnd++,
                i && (E.providerIndexes += 1048576),
                n.push(ot),
                a.push(ot);
            } else Vl(o, e, ne > -1 ? ne : _e, ep(n[i ? _e : ne], m, !i && r));
            !i && r && Ke && n[_e].componentProviders++;
          }
        }
      }
      function Vl(e, t, n, r) {
        const i = zo(t),
          o = (function Jg(e) {
            return !!e.useClass;
          })(t);
        if (i || o) {
          const m = (o ? H(t.useClass) : t).prototype.ngOnDestroy;
          if (m) {
            const E = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
              const A = E.indexOf(n);
              -1 === A ? E.push(n, [r, m]) : E[A + 1].push(r, m);
            } else E.push(n, m);
          }
        }
      }
      function ep(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function zl(e, t, n, r) {
        for (let i = n; i < r; i++) if (t[i] === e) return i;
        return -1;
      }
      function Bv(e, t, n, r) {
        return Gl(this.multi, []);
      }
      function Uv(e, t, n, r) {
        const i = this.multi;
        let o;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            f = Eo(n, n[Ve], this.providerFactory.index, r);
          (o = f.slice(0, a)), Gl(i, o);
          for (let m = a; m < f.length; m++) o.push(f[m]);
        } else (o = []), Gl(i, o);
        return o;
      }
      function Gl(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function tp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, i) =>
            (function kv(e, t, n) {
              const r = Nt();
              if (r.firstCreatePass) {
                const i = yn(e);
                $l(n, r.data, r.blueprint, i, !0),
                  $l(t, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, t);
        };
      }
      class Os {}
      class np {}
      function Hv(e, t) {
        return new rp(e, t ?? null);
      }
      class rp extends Os {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new hf(this));
          const r = on(t);
          (this._bootstrapComponents = so(r.bootstrap)),
            (this._r3Injector = zd(
              t,
              n,
              [
                { provide: Os, useValue: this },
                { provide: Js, useValue: this.componentFactoryResolver },
              ],
              J(t),
              new Set(["environment"]),
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Wl extends np {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new rp(this.moduleType, t);
        }
      }
      class $v extends Os {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new hf(this)),
            (this.instance = null);
          const i = new Md(
            [
              ...t,
              { provide: Os, useValue: this },
              { provide: Js, useValue: this.componentFactoryResolver },
            ],
            n || Na(),
            r,
            new Set(["environment"]),
          );
          (this.injector = i), i.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Kl(e, t, n = null) {
        return new $v(e, t, n).injector;
      }
      let Vv = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Dd(0, n.type),
                i =
                  r.length > 0
                    ? Kl([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, i);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = it({
            token: e,
            providedIn: "environment",
            factory: () => new e(ye(Go)),
          })),
          e
        );
      })();
      function ip(e) {
        e.getStandaloneInjector = (t) =>
          t.get(Vv).getOrCreateStandaloneInjector(e);
      }
      function dp(e, t, n) {
        const r = Dn() + e,
          i = fe();
        return i[r] === It
          ? Hi(i, r, n ? t.call(n) : t())
          : (function oa(e, t) {
              return e[t];
            })(i, r);
      }
      function fp(e, t, n, r) {
        return pp(fe(), Dn(), e, t, n, r);
      }
      function hp(e, t, n, r, i) {
        return (function mp(e, t, n, r, i, o, a) {
          const f = t + n;
          return (function Ko(e, t, n, r) {
            const i = gr(e, t, n);
            return gr(e, t + 1, r) || i;
          })(e, f, i, o)
            ? Hi(e, f + 2, a ? r.call(a, i, o) : r(i, o))
            : fa(e, f + 2);
        })(fe(), Dn(), e, t, n, r, i);
      }
      function fa(e, t) {
        const n = e[t];
        return n === It ? void 0 : n;
      }
      function pp(e, t, n, r, i, o) {
        const a = t + n;
        return gr(e, a, i)
          ? Hi(e, a + 1, o ? r.call(o, i) : r(i))
          : fa(e, a + 1);
      }
      function yp(e, t) {
        const n = Nt();
        let r;
        const i = e + Gt;
        n.firstCreatePass
          ? ((r = (function s0(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy &&
              (n.destroyHooks ?? (n.destroyHooks = [])).push(i, r.onDestroy))
          : (r = n.data[i]);
        const o = r.factory || (r.factory = Ir(r.type)),
          a = cn(_s);
        try {
          const f = Li(!1),
            m = o();
          return (
            Li(f),
            (function qb(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, fe(), i, m),
            m
          );
        } finally {
          cn(a);
        }
      }
      function vp(e, t, n) {
        const r = e + Gt,
          i = fe(),
          o = ei(i, r);
        return (function ha(e, t) {
          return e[Ve].data[t].pure;
        })(i, r)
          ? pp(i, Dn(), t, o.transform, n, o)
          : o.transform(n);
      }
      function Zl(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Vi = class d0 extends _.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let i = t,
            o = n || (() => null),
            a = r;
          if (t && "object" == typeof t) {
            const m = t;
            (i = m.next?.bind(m)),
              (o = m.error?.bind(m)),
              (a = m.complete?.bind(m));
          }
          this.__isAsync && ((o = Zl(o)), i && (i = Zl(i)), a && (a = Zl(a)));
          const f = super.subscribe({ next: i, error: o, complete: a });
          return t instanceof M.w0 && t.add(f), f;
        }
      };
      function f0() {
        return this._results[Symbol.iterator]();
      }
      class rc {
        get changes() {
          return this._changes || (this._changes = new Vi());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = rc.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = f0);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = (function Ar(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function yc(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                o = t[r];
              if ((n && ((i = n(i)), (o = n(o))), o !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let pa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = m0), e;
      })();
      const h0 = pa,
        p0 = class extends h0 {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tView,
              i = ka(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null,
              );
            i[yi] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[cr];
            return (
              null !== a && (i[cr] = a.createEmbeddedView(r)),
              cl(r, i, t),
              new ra(i)
            );
          }
        };
      function m0() {
        return ic(fn(), fe());
      }
      function ic(e, t) {
        return 4 & e.type ? new p0(t, e, ps(e, t)) : null;
      }
      let oc = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = g0), e;
      })();
      function g0() {
        return wp(fn(), fe());
      }
      const _0 = oc,
        Dp = class extends _0 {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return ps(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new $n(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Ls(this._hostTNode, this._hostLView);
            if (er(t)) {
              const n = Mn(t, this._hostLView),
                r = Yt(t);
              return new $n(n[Ve].data[r + 8], n);
            }
            return new $n(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Ep(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Fn;
          }
          createEmbeddedView(t, n, r) {
            let i, o;
            "number" == typeof r
              ? (i = r)
              : null != r && ((i = r.index), (o = r.injector));
            const a = t.createEmbeddedView(n || {}, o);
            return this.insert(a, i), a;
          }
          createComponent(t, n, r, i, o) {
            const a =
              t &&
              !(function Ho(e) {
                return "function" == typeof e;
              })(t);
            let f;
            if (a) f = n;
            else {
              const L = n || {};
              (f = L.index),
                (r = L.injector),
                (i = L.projectableNodes),
                (o = L.environmentInjector || L.ngModuleRef);
            }
            const m = a ? t : new ia(xt(t)),
              E = r || this.parentInjector;
            if (!o && null == m.ngModule) {
              const z = (a ? E : this.parentInjector).get(Go, null);
              z && (o = z);
            }
            const A = m.create(E, i, void 0, o);
            return this.insert(A.hostView, f), A;
          }
          insert(t, n) {
            const r = t._lView,
              i = r[Ve];
            if (
              (function Ro(e) {
                return Nn(e[Jt]);
              })(r)
            ) {
              const A = this.indexOf(t);
              if (-1 !== A) this.detach(A);
              else {
                const L = r[Jt],
                  z = new Dp(L, L[un], L[Jt]);
                z.detach(z.indexOf(t));
              }
            }
            const o = this._adjustIndex(n),
              a = this._lContainer;
            !(function dg(e, t, n, r) {
              const i = Fn + r,
                o = n.length;
              r > 0 && (n[i - 1][gn] = t),
                r < o - Fn
                  ? ((t[gn] = n[i]), Vs(n, Fn + r, t))
                  : (n.push(t), (t[gn] = null)),
                (t[Jt] = n);
              const a = t[yi];
              null !== a &&
                n !== a &&
                (function fg(e, t) {
                  const n = e[kr];
                  t[An] !== t[Jt][Jt][An] && (e[lo] = !0),
                    null === n ? (e[kr] = [t]) : n.push(t);
                })(a, t);
              const f = t[cr];
              null !== f && f.insertView(e), (t[pt] |= 64);
            })(i, r, a, o);
            const f = Nc(o, a),
              m = r[mt],
              E = Sa(m, a[oi]);
            return (
              null !== E &&
                (function cg(e, t, n, r, i, o) {
                  (r[Zn] = i), (r[un] = t), Qs(e, r, n, 1, i, o);
                })(i, a[un], m, r, E, f),
              t.attachToViewContainerRef(),
              Vs(Ql(a), o, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Ep(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Rc(this._lContainer, n);
            r && (as(Ql(this._lContainer), n), Wu(r[Ve], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Rc(this._lContainer, n);
            return r && null != as(Ql(this._lContainer), n) ? new ra(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Ep(e) {
        return e[vi];
      }
      function Ql(e) {
        return e[vi] || (e[vi] = []);
      }
      function wp(e, t) {
        let n;
        const r = t[e.index];
        if (Nn(r)) n = r;
        else {
          let i;
          if (8 & e.type) i = vn(r);
          else {
            const o = t[mt];
            i = o.createComment("");
            const a = $t(e, t);
            $o(
              o,
              Sa(o, a),
              i,
              (function gg(e, t) {
                return e.nextSibling(t);
              })(o, a),
              !1,
            );
          }
          (t[e.index] = n = cf(r, t, i, e)), Ua(t, n);
        }
        return new Dp(n, e, t);
      }
      class ql {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new ql(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Xl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let o = 0; o < r; o++) {
              const a = n.getByIndex(o);
              i.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new Xl(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Rp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Cp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Jl {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              o = this.getByIndex(r).embeddedTView(t, i);
            o &&
              ((o.indexInDeclarationView = r),
              null !== n ? n.push(o) : (n = [o]));
          }
          return null !== n ? new Jl(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class eu {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new eu(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const o = r[i];
              this.matchTNodeWithReadOption(t, n, b0(n, o)),
                this.matchTNodeWithReadOption(t, n, Us(n, t, o, !1, !1));
            }
          else
            r === pa
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Us(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === ea || i === oc || (i === pa && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const o = Us(n, t, i, !1, !1);
                null !== o && this.addMatch(n.index, o);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function b0(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function v0(e, t, n, r) {
        return -1 === n
          ? (function y0(e, t) {
              return 11 & e.type ? ps(e, t) : 4 & e.type ? ic(e, t) : null;
            })(t, e)
          : -2 === n
            ? (function D0(e, t, n) {
                return n === ea
                  ? ps(t, e)
                  : n === pa
                    ? ic(t, e)
                    : n === oc
                      ? wp(t, e)
                      : void 0;
              })(e, t, r)
            : Eo(e, e[Ve], n, t);
      }
      function Mp(e, t, n, r) {
        const i = t[cr].queries[r];
        if (null === i.matches) {
          const o = e.data,
            a = n.matches,
            f = [];
          for (let m = 0; m < a.length; m += 2) {
            const E = a[m];
            f.push(E < 0 ? null : v0(t, o[E], a[m + 1], n.metadata.read));
          }
          i.matches = f;
        }
        return i.matches;
      }
      function tu(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          o = i.matches;
        if (null !== o) {
          const a = Mp(e, t, i, n);
          for (let f = 0; f < o.length; f += 2) {
            const m = o[f];
            if (m > 0) r.push(a[f / 2]);
            else {
              const E = o[f + 1],
                A = t[-m];
              for (let L = Fn; L < A.length; L++) {
                const z = A[L];
                z[yi] === z[Jt] && tu(z[Ve], z, E, r);
              }
              if (null !== A[kr]) {
                const L = A[kr];
                for (let z = 0; z < L.length; z++) {
                  const ne = L[z];
                  tu(ne[Ve], ne, E, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Ip(e) {
        const t = fe(),
          n = Nt(),
          r = w();
        c(r + 1);
        const i = Rp(n, r);
        if (
          e.dirty &&
          (function jr(e) {
            return 4 == (4 & e[pt]);
          })(t) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const o = i.crossesNgTemplate ? tu(n, t, r, []) : Mp(n, t, i, r);
            e.reset(o, u_), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Sp(e, t, n) {
        const r = Nt();
        r.firstCreatePass &&
          (Op(r, new Cp(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Ap(r, fe(), t);
      }
      function Tp(e, t, n, r) {
        const i = Nt();
        if (i.firstCreatePass) {
          const o = fn();
          Op(i, new Cp(t, n, r), o.index),
            (function w0(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        Ap(i, fe(), n);
      }
      function xp() {
        return (function E0(e, t) {
          return e[cr].queries[t].queryList;
        })(fe(), w());
      }
      function Ap(e, t, n) {
        const r = new rc(4 == (4 & n));
        tf(e, t, r, r.destroy),
          null === t[cr] && (t[cr] = new Xl()),
          t[cr].queries.push(new ql(r));
      }
      function Op(e, t, n) {
        null === e.queries && (e.queries = new Jl()),
          e.queries.track(new eu(t, n));
      }
      function Rp(e, t) {
        return e.queries.getByIndex(t);
      }
      function Pp(e, t) {
        return ic(e, t);
      }
      function nu(e) {
        return !!on(e);
      }
      function ac(...e) {}
      const qp = new en("Application Initializer");
      let cc = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = ac),
              (this.reject = ac),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, i) => {
                (this.resolve = r), (this.reject = i);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let i = 0; i < this.appInits.length; i++) {
                const o = this.appInits[i]();
                if (Il(o)) n.push(o);
                else if (Pf(o)) {
                  const a = new Promise((f, m) => {
                    o.subscribe({ complete: f, error: m });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((i) => {
                this.reject(i);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(qp, 8));
          }),
          (e.ɵprov = it({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Xp = new en("AppId", {
        providedIn: "root",
        factory: function Jp() {
          return `${au()}${au()}${au()}`;
        },
      });
      function au() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const em = new en("Platform Initializer"),
        V0 = new en("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        z0 = new en("AnimationModuleType");
      let G0 = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = it({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const lc = new en("LocaleId", {
          providedIn: "root",
          factory: () =>
            $(lc, Le.Optional | Le.SkipSelf) ||
            (function W0() {
              return (typeof $localize < "u" && $localize.locale) || As;
            })(),
        }),
        K0 = new en("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class Y0 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let Z0 = (() => {
        class e {
          compileModuleSync(n) {
            return new Wl(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              o = so(on(n).declarations).reduce((a, f) => {
                const m = xt(f);
                return m && a.push(new ia(m)), a;
              }, []);
            return new Y0(r, o);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = it({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const X0 = (() => Promise.resolve(0))();
      function cu(e) {
        typeof Zone > "u"
          ? X0.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class ri {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Vi(!1)),
            (this.onMicrotaskEmpty = new Vi(!1)),
            (this.onStable = new Vi(!1)),
            (this.onError = new Vi(!1)),
            typeof Zone > "u")
          )
            throw new De(908, !1);
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function J0() {
              let e = Vt.requestAnimationFrame,
                t = Vt.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function nD(e) {
              const t = () => {
                !(function tD(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Vt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                uu(e),
                                (e.isCheckStableRunning = !0),
                                lu(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {},
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    uu(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, o, a, f) => {
                  try {
                    return rm(e), n.invokeTask(i, o, a, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      im(e);
                  }
                },
                onInvoke: (n, r, i, o, a, f, m) => {
                  try {
                    return rm(e), n.invoke(i, o, a, f, m);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), im(e);
                  }
                },
                onHasTask: (n, r, i, o) => {
                  n.hasTask(i, o),
                    r === i &&
                      ("microTask" == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask),
                          uu(e),
                          lu(e))
                        : "macroTask" == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (n, r, i, o) => (
                  n.handleError(i, o),
                  e.runOutsideAngular(() => e.onError.emit(o)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!ri.isInAngularZone()) throw new De(909, !1);
        }
        static assertNotInAngularZone() {
          if (ri.isInAngularZone()) throw new De(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const o = this._inner,
            a = o.scheduleEventTask("NgZoneEvent: " + i, t, eD, ac, ac);
          try {
            return o.runTask(a, n, r);
          } finally {
            o.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const eD = {};
      function lu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function uu(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function rm(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function im(e) {
        e._nesting--, lu(e);
      }
      class rD {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Vi()),
            (this.onMicrotaskEmpty = new Vi()),
            (this.onStable = new Vi()),
            (this.onError = new Vi());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, i) {
          return t.apply(n, r);
        }
      }
      const om = new en(""),
        sm = new en("");
      let du,
        iD = (() => {
          class e {
            constructor(n, r, i) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                du ||
                  ((function oD(e) {
                    du = e;
                  })(i),
                  i.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ri.assertNotInAngularZone(),
                        cu(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                cu(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let o = -1;
              r &&
                r > 0 &&
                (o = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== o,
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: o, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, i) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(ye(ri), ye(am), ye(sm));
            }),
            (e.ɵprov = it({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        am = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return du?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = it({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })();
      const co = !1;
      let Io = null;
      const cm = new en("AllowMultipleToken"),
        fu = new en("PlatformDestroyListeners"),
        lm = new en("appBootstrapListener");
      class cD {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function dm(e, t, n = []) {
        const r = `Platform: ${t}`,
          i = new en(r);
        return (o = []) => {
          let a = hu();
          if (!a || a.injector.get(cm, !1)) {
            const f = [...n, ...o, { provide: i, useValue: !0 }];
            e
              ? e(f)
              : (function lD(e) {
                  if (Io && !Io.get(cm, !1)) throw new De(400, !1);
                  Io = e;
                  const t = e.get(hm);
                  (function um(e) {
                    const t = e.get(em, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function fm(e = [], t) {
                    return Wo.create({
                      name: t,
                      providers: [
                        { provide: Qc, useValue: "platform" },
                        { provide: fu, useValue: new Set([() => (Io = null)]) },
                        ...e,
                      ],
                    });
                  })(f, r),
                );
          }
          return (function dD(e) {
            const t = hu();
            if (!t) throw new De(401, !1);
            return t;
          })();
        };
      }
      function hu() {
        return Io?.get(hm) ?? null;
      }
      let hm = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const i = (function mm(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new rD()
                      : ("zone.js" === e ? void 0 : e) || new ri(t)),
                  n
                );
              })(
                r?.ngZone,
                (function pm(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r),
              ),
              o = [{ provide: ri, useValue: i }];
            return i.run(() => {
              const a = Wo.create({
                  providers: o,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                f = n.create(a),
                m = f.injector.get(ta, null);
              if (!m) throw new De(402, !1);
              return (
                i.runOutsideAngular(() => {
                  const E = i.onError.subscribe({
                    next: (A) => {
                      m.handleError(A);
                    },
                  });
                  f.onDestroy(() => {
                    dc(this._modules, f), E.unsubscribe();
                  });
                }),
                (function gm(e, t, n) {
                  try {
                    const r = n();
                    return Il(r)
                      ? r.catch((i) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(i)), i)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(m, i, () => {
                  const E = f.injector.get(cc);
                  return (
                    E.runInitializers(),
                    E.donePromise.then(
                      () => (
                        (function Ah(e) {
                          Me(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (xh = e.toLowerCase().replace(/_/g, "-"));
                        })(f.injector.get(lc, As) || As),
                        this._moduleDoBootstrap(f),
                        f
                      ),
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const i = _m({}, r);
            return (function sD(e, t, n) {
              const r = new Wl(n);
              return Promise.resolve(r);
            })(0, 0, n).then((o) => this.bootstrapModuleFactory(o, i));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(uc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((i) => r.bootstrap(i));
            else {
              if (!n.instance.ngDoBootstrap) throw new De(-403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new De(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(fu, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(Wo));
          }),
          (e.ɵprov = it({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function _m(e, t) {
        return Array.isArray(t) ? t.reduce(_m, e) : { ...e, ...t };
      }
      let uc = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, r, i) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const o = new P.y((f) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    f.next(this._stable), f.complete();
                  });
              }),
              a = new P.y((f) => {
                let m;
                this._zone.runOutsideAngular(() => {
                  m = this._zone.onStable.subscribe(() => {
                    ri.assertNotInAngularZone(),
                      cu(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), f.next(!0));
                      });
                  });
                });
                const E = this._zone.onUnstable.subscribe(() => {
                  ri.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        f.next(!1);
                      }));
                });
                return () => {
                  m.unsubscribe(), E.unsubscribe();
                };
              });
            this.isStable = (0, K.T)(o, a.pipe((0, Q.B)()));
          }
          bootstrap(n, r) {
            const i = n instanceof Sd;
            if (!this._injector.get(cc).done) {
              !i && Xt(n);
              throw new De(405, co);
            }
            let a;
            (a = i ? n : this._injector.get(Js).resolveComponentFactory(n)),
              this.componentTypes.push(a.componentType);
            const f = (function aD(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(Os),
              E = a.create(Wo.NULL, [], r || a.selector, f),
              A = E.location.nativeElement,
              L = E.injector.get(om, null);
            return (
              L?.registerApplication(A),
              E.onDestroy(() => {
                this.detachView(E.hostView),
                  dc(this.components, E),
                  L?.unregisterApplication(A);
              }),
              this._loadComponent(E),
              E
            );
          }
          tick() {
            if (this._runningTick) throw new De(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n),
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            dc(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(lm, []);
            r.push(...this._bootstrapListeners), r.forEach((i) => i(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => dc(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new De(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(ri), ye(Go), ye(ta));
          }),
          (e.ɵprov = it({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function dc(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let hD = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = pD), e;
      })();
      function pD(e) {
        return (function mD(e, t, n) {
          if (lr(e) && !n) {
            const r = Kt(e.index, t);
            return new ra(r, r);
          }
          return 47 & e.type ? new ra(t[An], t) : null;
        })(fn(), fe(), 16 == (16 & e));
      }
      class Em {
        constructor() {}
        supports(t) {
          return za(t);
        }
        create(t) {
          return new DD(t);
        }
      }
      const vD = (e, t) => t;
      class DD {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || vD);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            o = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < Cm(r, i, o)) ? n : r,
              f = Cm(a, i, o),
              m = a.currentIndex;
            if (a === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) i++;
            else {
              o || (o = []);
              const E = f - i,
                A = m - i;
              if (E != A) {
                for (let z = 0; z < E; z++) {
                  const ne = z < o.length ? o[z] : (o[z] = 0),
                    _e = ne + z;
                  A <= _e && _e < E && (o[z] = ne + 1);
                }
                o[a.previousIndex] = A - E;
              }
            }
            f !== m && t(a, f, m);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !za(t))) throw new De(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            o,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (o = t[f]),
                (a = this._trackByFn(f, o)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, o, a, f)),
                    Object.is(n.item, o) || this._addIdentityChange(n, o))
                  : ((n = this._mismatch(n, o, a, f)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function Kb(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (a = this._trackByFn(i, f)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, f, a, i)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, a, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let o;
          return (
            null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, o, i))
              : null !==
                  (t =
                    null === this._linkedRecords
                      ? null
                      : this._linkedRecords.get(r, i))
                ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                  this._moveAfter(t, o, i))
                : (t = this._addAfter(new ED(n, r), o, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let o =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== o
              ? (t = this._reinsertAfter(o, t._prev, i))
              : t.currentIndex != i &&
                ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            o = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = o) : (i._nextRemoved = o),
            null === o ? (this._removalsTail = i) : (o._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new wm()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new wm()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ED {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class wD {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class wm {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new wD()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Cm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class Mm {
        constructor() {}
        supports(t) {
          return t instanceof Map || Dl(t);
        }
        create() {
          return new CD();
        }
      }
      class CD {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Dl(t))) throw new De(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const o = i._prev,
              a = i._next;
            return (
              o && (o._next = a),
              a && (a._prev = o),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new MD(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class MD {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Im() {
        return new bu([new Em()]);
      }
      let bu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Im()),
              deps: [[e, new Gs(), new ro()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new De(901, !1);
          }
        }
        return (e.ɵprov = it({ token: e, providedIn: "root", factory: Im })), e;
      })();
      function Sm() {
        return new yu([new Mm()]);
      }
      let yu = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Sm()),
              deps: [[e, new Gs(), new ro()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new De(901, !1);
          }
        }
        return (e.ɵprov = it({ token: e, providedIn: "root", factory: Sm })), e;
      })();
      const TD = dm(null, "core", []);
      let xD = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(ye(uc));
          }),
          (e.ɵmod = Kr({ type: e })),
          (e.ɵinj = Lt({})),
          e
        );
      })();
      function AD(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
    },
    4859: (He, se, T) => {
      T.d(se, { RK: () => me, lW: () => et, ot: () => Pe, zs: () => Ie });
      var _ = T(3353),
        M = T(4650),
        P = T(2693),
        K = T(3238);
      const Q = ["mat-button", ""],
        Y = [
          [
            ["", 8, "material-icons", 3, "iconPositionEnd", ""],
            ["mat-icon", 3, "iconPositionEnd", ""],
            ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
          ],
          "*",
          [
            ["", "iconPositionEnd", "", 8, "material-icons"],
            ["mat-icon", "iconPositionEnd", ""],
            ["", "matButtonIcon", "", "iconPositionEnd", ""],
          ],
        ],
        te = [
          ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
          "*",
          ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
        ],
        q =
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        Ee = ["mat-icon-button", ""],
        de = ["*"],
        st = [
          {
            selector: "mat-button",
            mdcClasses: ["mdc-button", "mat-mdc-button"],
          },
          {
            selector: "mat-flat-button",
            mdcClasses: [
              "mdc-button",
              "mdc-button--unelevated",
              "mat-mdc-unelevated-button",
            ],
          },
          {
            selector: "mat-raised-button",
            mdcClasses: [
              "mdc-button",
              "mdc-button--raised",
              "mat-mdc-raised-button",
            ],
          },
          {
            selector: "mat-stroked-button",
            mdcClasses: [
              "mdc-button",
              "mdc-button--outlined",
              "mat-mdc-outlined-button",
            ],
          },
          { selector: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
          {
            selector: "mat-mini-fab",
            mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
          },
          {
            selector: "mat-icon-button",
            mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
          },
        ],
        Oe = (0, K.pj)(
          (0, K.Id)(
            (0, K.Kr)(
              class {
                constructor(le) {
                  this._elementRef = le;
                }
              },
            ),
          ),
        );
      let Be = (() => {
          class le extends Oe {
            constructor(ue, Fe, Ge, ft) {
              super(ue),
                (this._platform = Fe),
                (this._ngZone = Ge),
                (this._animationMode = ft),
                (this._focusMonitor = (0, M.f3M)(P.tE)),
                (this._isFab = !1);
              const it = ue.nativeElement.classList;
              for (const je of st)
                this._hasHostAttributes(je.selector) &&
                  je.mdcClasses.forEach((Lt) => {
                    it.add(Lt);
                  });
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this._elementRef, !0);
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            focus(ue = "program", Fe) {
              ue
                ? this._focusMonitor.focusVia(
                    this._elementRef.nativeElement,
                    ue,
                    Fe,
                  )
                : this._elementRef.nativeElement.focus(Fe);
            }
            _hasHostAttributes(...ue) {
              return ue.some((Fe) =>
                this._elementRef.nativeElement.hasAttribute(Fe),
              );
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
          }
          return (
            (le.ɵfac = function (ue) {
              M.$Z();
            }),
            (le.ɵdir = M.lG2({
              type: le,
              viewQuery: function (ue, Fe) {
                if ((1 & ue && M.Gf(K.wG, 5), 2 & ue)) {
                  let Ge;
                  M.iGM((Ge = M.CRH())) && (Fe.ripple = Ge.first);
                }
              },
              features: [M.qOj],
            })),
            le
          );
        })(),
        we = (() => {
          class le extends Be {
            constructor(ue, Fe, Ge, ft) {
              super(ue, Fe, Ge, ft),
                (this._haltDisabledEvents = (it) => {
                  this.disabled &&
                    (it.preventDefault(), it.stopImmediatePropagation());
                });
            }
            ngOnInit() {
              this._ngZone.runOutsideAngular(() => {
                this._elementRef.nativeElement.addEventListener(
                  "click",
                  this._haltDisabledEvents,
                );
              });
            }
            ngOnDestroy() {
              super.ngOnDestroy(),
                this._elementRef.nativeElement.removeEventListener(
                  "click",
                  this._haltDisabledEvents,
                );
            }
          }
          return (
            (le.ɵfac = function (ue) {
              M.$Z();
            }),
            (le.ɵdir = M.lG2({ type: le, features: [M.qOj] })),
            le
          );
        })(),
        et = (() => {
          class le extends Be {
            constructor(ue, Fe, Ge, ft) {
              super(ue, Fe, Ge, ft);
            }
          }
          return (
            (le.ɵfac = function (ue) {
              return new (ue || le)(
                M.Y36(M.SBq),
                M.Y36(_.t4),
                M.Y36(M.R0b),
                M.Y36(M.QbO, 8),
              );
            }),
            (le.ɵcmp = M.Xpm({
              type: le,
              selectors: [
                ["button", "mat-button", ""],
                ["button", "mat-raised-button", ""],
                ["button", "mat-flat-button", ""],
                ["button", "mat-stroked-button", ""],
              ],
              hostVars: 7,
              hostBindings: function (ue, Fe) {
                2 & ue &&
                  (M.uIk("disabled", Fe.disabled || null),
                  M.ekj(
                    "_mat-animation-noopable",
                    "NoopAnimations" === Fe._animationMode,
                  )("mat-unthemed", !Fe.color)("mat-mdc-button-base", !0));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
              },
              exportAs: ["matButton"],
              features: [M.qOj],
              attrs: Q,
              ngContentSelectors: te,
              decls: 8,
              vars: 6,
              consts: [
                [1, "mat-mdc-button-persistent-ripple"],
                [1, "mdc-button__label"],
                [1, "mat-mdc-focus-indicator"],
                [
                  "matRipple",
                  "",
                  1,
                  "mat-mdc-button-ripple",
                  3,
                  "matRippleDisabled",
                  "matRippleTrigger",
                ],
                [1, "mat-mdc-button-touch-target"],
              ],
              template: function (ue, Fe) {
                1 & ue &&
                  (M.F$t(Y),
                  M._UZ(0, "span", 0),
                  M.Hsn(1),
                  M.TgZ(2, "span", 1),
                  M.Hsn(3, 1),
                  M.qZA(),
                  M.Hsn(4, 2),
                  M._UZ(5, "span", 2)(6, "span", 3)(7, "span", 4)),
                  2 & ue &&
                    (M.ekj("mdc-button__ripple", !Fe._isFab)(
                      "mdc-fab__ripple",
                      Fe._isFab,
                    ),
                    M.xp6(6),
                    M.Q6J("matRippleDisabled", Fe._isRippleDisabled())(
                      "matRippleTrigger",
                      Fe._elementRef.nativeElement,
                    ));
              },
              dependencies: [K.wG],
              styles: [
                '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(\n      100% + 4px\n    );width:calc(\n      100% + 4px\n    );display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height, 36px);border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, inherit)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height, 36px);border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color, transparent)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, inherit)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height, 36px);border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:var(--mdc-protected-button-container-elevation, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color, transparent)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, inherit)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button.mdc-ripple-upgraded--background-focused,.mat-mdc-raised-button:not(.mdc-ripple-upgraded):focus{box-shadow:var(--mdc-protected-button-focus-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled):active{box-shadow:var(--mdc-protected-button-pressed-container-elevation, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height, 36px);border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, inherit)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-button .mat-ripple-element,.mat-mdc-unelevated-button .mat-ripple-element,.mat-mdc-raised-button .mat-ripple-element,.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px) * -1)}',
                ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            le
          );
        })(),
        Ie = (() => {
          class le extends we {
            constructor(ue, Fe, Ge, ft) {
              super(ue, Fe, Ge, ft);
            }
          }
          return (
            (le.ɵfac = function (ue) {
              return new (ue || le)(
                M.Y36(M.SBq),
                M.Y36(_.t4),
                M.Y36(M.R0b),
                M.Y36(M.QbO, 8),
              );
            }),
            (le.ɵcmp = M.Xpm({
              type: le,
              selectors: [
                ["a", "mat-button", ""],
                ["a", "mat-raised-button", ""],
                ["a", "mat-flat-button", ""],
                ["a", "mat-stroked-button", ""],
              ],
              hostVars: 9,
              hostBindings: function (ue, Fe) {
                2 & ue &&
                  (M.uIk("disabled", Fe.disabled || null)(
                    "tabindex",
                    Fe.disabled ? -1 : Fe.tabIndex,
                  )("aria-disabled", Fe.disabled.toString()),
                  M.ekj(
                    "_mat-animation-noopable",
                    "NoopAnimations" === Fe._animationMode,
                  )("mat-unthemed", !Fe.color)("mat-mdc-button-base", !0));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
                tabIndex: "tabIndex",
              },
              exportAs: ["matButton", "matAnchor"],
              features: [M.qOj],
              attrs: Q,
              ngContentSelectors: te,
              decls: 8,
              vars: 6,
              consts: [
                [1, "mat-mdc-button-persistent-ripple"],
                [1, "mdc-button__label"],
                [1, "mat-mdc-focus-indicator"],
                [
                  "matRipple",
                  "",
                  1,
                  "mat-mdc-button-ripple",
                  3,
                  "matRippleDisabled",
                  "matRippleTrigger",
                ],
                [1, "mat-mdc-button-touch-target"],
              ],
              template: function (ue, Fe) {
                1 & ue &&
                  (M.F$t(Y),
                  M._UZ(0, "span", 0),
                  M.Hsn(1),
                  M.TgZ(2, "span", 1),
                  M.Hsn(3, 1),
                  M.qZA(),
                  M.Hsn(4, 2),
                  M._UZ(5, "span", 2)(6, "span", 3)(7, "span", 4)),
                  2 & ue &&
                    (M.ekj("mdc-button__ripple", !Fe._isFab)(
                      "mdc-fab__ripple",
                      Fe._isFab,
                    ),
                    M.xp6(6),
                    M.Q6J("matRippleDisabled", Fe._isRippleDisabled())(
                      "matRippleTrigger",
                      Fe._elementRef.nativeElement,
                    ));
              },
              dependencies: [K.wG],
              styles: [
                '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(\n      100% + 4px\n    );width:calc(\n      100% + 4px\n    );display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height, 36px);border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, inherit)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height, 36px);border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color, transparent)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, inherit)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height, 36px);border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:var(--mdc-protected-button-container-elevation, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color, transparent)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, inherit)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button.mdc-ripple-upgraded--background-focused,.mat-mdc-raised-button:not(.mdc-ripple-upgraded):focus{box-shadow:var(--mdc-protected-button-focus-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled):active{box-shadow:var(--mdc-protected-button-pressed-container-elevation, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height, 36px);border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, inherit)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-button .mat-ripple-element,.mat-mdc-unelevated-button .mat-ripple-element,.mat-mdc-raised-button .mat-ripple-element,.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px) * -1)}',
                q,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            le
          );
        })(),
        me = (() => {
          class le extends Be {
            constructor(ue, Fe, Ge, ft) {
              super(ue, Fe, Ge, ft);
            }
          }
          return (
            (le.ɵfac = function (ue) {
              return new (ue || le)(
                M.Y36(M.SBq),
                M.Y36(_.t4),
                M.Y36(M.R0b),
                M.Y36(M.QbO, 8),
              );
            }),
            (le.ɵcmp = M.Xpm({
              type: le,
              selectors: [["button", "mat-icon-button", ""]],
              hostVars: 7,
              hostBindings: function (ue, Fe) {
                2 & ue &&
                  (M.uIk("disabled", Fe.disabled || null),
                  M.ekj(
                    "_mat-animation-noopable",
                    "NoopAnimations" === Fe._animationMode,
                  )("mat-unthemed", !Fe.color)("mat-mdc-button-base", !0));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
              },
              exportAs: ["matButton"],
              features: [M.qOj],
              attrs: Ee,
              ngContentSelectors: de,
              decls: 5,
              vars: 3,
              consts: [
                [
                  1,
                  "mat-mdc-button-persistent-ripple",
                  "mdc-icon-button__ripple",
                ],
                [1, "mat-mdc-focus-indicator"],
                [
                  "matRipple",
                  "",
                  1,
                  "mat-mdc-button-ripple",
                  3,
                  "matRippleDisabled",
                  "matRippleCentered",
                  "matRippleTrigger",
                ],
                [1, "mat-mdc-button-touch-target"],
              ],
              template: function (ue, Fe) {
                1 & ue &&
                  (M.F$t(),
                  M._UZ(0, "span", 0),
                  M.Hsn(1),
                  M._UZ(2, "span", 1)(3, "span", 2)(4, "span", 3)),
                  2 & ue &&
                    (M.xp6(3),
                    M.Q6J("matRippleDisabled", Fe._isRippleDisabled())(
                      "matRippleCentered",
                      !0,
                    )("matRippleTrigger", Fe._elementRef.nativeElement));
              },
              dependencies: [K.wG],
              styles: [
                '.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{max-height:48px;max-width:48px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{height:var(--mdc-icon-button-state-layer-size, 48px);width:var(--mdc-icon-button-state-layer-size, 48px);color:var(--mdc-icon-button-icon-color, inherit);border-radius:50%;flex-shrink:0;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size, 24px);height:var(--mdc-icon-button-icon-size, 24px)}.mat-mdc-icon-button:disabled{opacity:var(--mdc-icon-button-disabled-icon-opacity, 0.38)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color, #000)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled]{cursor:default;pointer-events:none;opacity:1}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
                q,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            le
          );
        })(),
        Pe = (() => {
          class le {}
          return (
            (le.ɵfac = function (ue) {
              return new (ue || le)();
            }),
            (le.ɵmod = M.oAB({ type: le })),
            (le.ɵinj = M.cJS({ imports: [K.BQ, K.si, K.BQ] })),
            le
          );
        })();
    },
    3238: (He, se, T) => {
      T.d(se, {
        rD: () => ft,
        Y2: () => Zt,
        BQ: () => oe,
        wG: () => cn,
        si: () => Yn,
        pj: () => xe,
        Kr: () => rt,
        Id: () => Ie,
        FD: () => nt,
        sb: () => at,
      });
      var _ = T(4650),
        M = T(2693),
        P = T(445),
        Q = T(6895),
        Y = T(3353),
        te = T(1281);
      const Be = new _.OlP("mat-sanity-checks", {
        providedIn: "root",
        factory: function Oe() {
          return !0;
        },
      });
      let oe = (() => {
        class ye {
          constructor($, be, Qe) {
            (this._sanityChecks = be),
              (this._document = Qe),
              (this._hasDoneGlobalChecks = !1),
              $._applyBodyHighContrastModeCssClasses(),
              this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
          }
          _checkIsEnabled($) {
            return (
              !(0, Y.Oy)() &&
              ("boolean" == typeof this._sanityChecks
                ? this._sanityChecks
                : !!this._sanityChecks[$])
            );
          }
        }
        return (
          (ye.ɵfac = function ($) {
            return new ($ || ye)(_.LFG(M.qm), _.LFG(Be, 8), _.LFG(Q.K0));
          }),
          (ye.ɵmod = _.oAB({ type: ye })),
          (ye.ɵinj = _.cJS({ imports: [P.vT, P.vT] })),
          ye
        );
      })();
      function Ie(ye) {
        return class extends ye {
          get disabled() {
            return this._disabled;
          }
          set disabled(V) {
            this._disabled = (0, te.Ig)(V);
          }
          constructor(...V) {
            super(...V), (this._disabled = !1);
          }
        };
      }
      function xe(ye, V) {
        return class extends ye {
          get color() {
            return this._color;
          }
          set color($) {
            const be = $ || this.defaultColor;
            be !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  `mat-${this._color}`,
                ),
              be && this._elementRef.nativeElement.classList.add(`mat-${be}`),
              (this._color = be));
          }
          constructor(...$) {
            super(...$), (this.defaultColor = V), (this.color = V);
          }
        };
      }
      function rt(ye) {
        return class extends ye {
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(V) {
            this._disableRipple = (0, te.Ig)(V);
          }
          constructor(...V) {
            super(...V), (this._disableRipple = !1);
          }
        };
      }
      function at(ye, V = 0) {
        return class extends ye {
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
          }
          set tabIndex($) {
            this._tabIndex = null != $ ? (0, te.su)($) : this.defaultTabIndex;
          }
          constructor(...$) {
            super(...$), (this._tabIndex = V), (this.defaultTabIndex = V);
          }
        };
      }
      function nt(ye) {
        return class extends ye {
          updateErrorState() {
            const V = this.errorState,
              wt = (
                this.errorStateMatcher || this._defaultErrorStateMatcher
              ).isErrorState(
                this.ngControl ? this.ngControl.control : null,
                this._parentFormGroup || this._parentForm,
              );
            wt !== V && ((this.errorState = wt), this.stateChanges.next());
          }
          constructor(...V) {
            super(...V), (this.errorState = !1);
          }
        };
      }
      let ft = (() => {
        class ye {
          isErrorState($, be) {
            return !!($ && $.invalid && ($.touched || (be && be.submitted)));
          }
        }
        return (
          (ye.ɵfac = function ($) {
            return new ($ || ye)();
          }),
          (ye.ɵprov = _.Yz7({
            token: ye,
            factory: ye.ɵfac,
            providedIn: "root",
          })),
          ye
        );
      })();
      class Qt {
        constructor(V, $, be, Qe = !1) {
          (this._renderer = V),
            (this.element = $),
            (this.config = be),
            (this._animationForciblyDisabledThroughCss = Qe),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const bn = (0, Y.i$)({ passive: !0, capture: !0 });
      class Un {
        constructor() {
          (this._events = new Map()),
            (this._delegateEventHandler = (V) => {
              const $ = (0, Y.sA)(V);
              $ &&
                this._events.get(V.type)?.forEach((be, Qe) => {
                  (Qe === $ || Qe.contains($)) &&
                    be.forEach((wt) => wt.handleEvent(V));
                });
            });
        }
        addHandler(V, $, be, Qe) {
          const wt = this._events.get($);
          if (wt) {
            const Bt = wt.get(be);
            Bt ? Bt.add(Qe) : wt.set(be, new Set([Qe]));
          } else
            this._events.set($, new Map([[be, new Set([Qe])]])),
              V.runOutsideAngular(() => {
                document.addEventListener($, this._delegateEventHandler, bn);
              });
        }
        removeHandler(V, $, be) {
          const Qe = this._events.get(V);
          if (!Qe) return;
          const wt = Qe.get($);
          wt &&
            (wt.delete(be),
            0 === wt.size && Qe.delete($),
            0 === Qe.size &&
              (this._events.delete(V),
              document.removeEventListener(V, this._delegateEventHandler, bn)));
        }
      }
      const sn = { enterDuration: 225, exitDuration: 150 },
        an = (0, Y.i$)({ passive: !0, capture: !0 }),
        tr = ["mousedown", "touchstart"],
        qt = ["mouseup", "mouseleave", "touchend", "touchcancel"];
      class Le {
        constructor(V, $, be, Qe) {
          (this._target = V),
            (this._ngZone = $),
            (this._platform = Qe),
            (this._isPointerDown = !1),
            (this._activeRipples = new Map()),
            (this._pointerUpEventsRegistered = !1),
            Qe.isBrowser && (this._containerElement = (0, te.fI)(be));
        }
        fadeInRipple(V, $, be = {}) {
          const Qe = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            wt = { ...sn, ...be.animation };
          be.centered &&
            ((V = Qe.left + Qe.width / 2), ($ = Qe.top + Qe.height / 2));
          const Bt =
              be.radius ||
              (function tn(ye, V, $) {
                const be = Math.max(
                    Math.abs(ye - $.left),
                    Math.abs(ye - $.right),
                  ),
                  Qe = Math.max(Math.abs(V - $.top), Math.abs(V - $.bottom));
                return Math.sqrt(be * be + Qe * Qe);
              })(V, $, Qe),
            Sn = V - Qe.left,
            ir = $ - Qe.top,
            Ht = wt.enterDuration,
            Ft = document.createElement("div");
          Ft.classList.add("mat-ripple-element"),
            (Ft.style.left = Sn - Bt + "px"),
            (Ft.style.top = ir - Bt + "px"),
            (Ft.style.height = 2 * Bt + "px"),
            (Ft.style.width = 2 * Bt + "px"),
            null != be.color && (Ft.style.backgroundColor = be.color),
            (Ft.style.transitionDuration = `${Ht}ms`),
            this._containerElement.appendChild(Ft);
          const rn = window.getComputedStyle(Ft),
            bt = rn.transitionDuration,
            ee =
              "none" === rn.transitionProperty ||
              "0s" === bt ||
              "0s, 0s" === bt ||
              (0 === Qe.width && 0 === Qe.height),
            O = new Qt(this, Ft, be, ee);
          (Ft.style.transform = "scale3d(1, 1, 1)"),
            (O.state = 0),
            be.persistent || (this._mostRecentTransientRipple = O);
          let v = null;
          return (
            !ee &&
              (Ht || wt.exitDuration) &&
              this._ngZone.runOutsideAngular(() => {
                const C = () => this._finishRippleTransition(O),
                  N = () => this._destroyRipple(O);
                Ft.addEventListener("transitionend", C),
                  Ft.addEventListener("transitioncancel", N),
                  (v = { onTransitionEnd: C, onTransitionCancel: N });
              }),
            this._activeRipples.set(O, v),
            (ee || !Ht) && this._finishRippleTransition(O),
            O
          );
        }
        fadeOutRipple(V) {
          if (2 === V.state || 3 === V.state) return;
          const $ = V.element,
            be = { ...sn, ...V.config.animation };
          ($.style.transitionDuration = `${be.exitDuration}ms`),
            ($.style.opacity = "0"),
            (V.state = 2),
            (V._animationForciblyDisabledThroughCss || !be.exitDuration) &&
              this._finishRippleTransition(V);
        }
        fadeOutAll() {
          this._getActiveRipples().forEach((V) => V.fadeOut());
        }
        fadeOutAllNonPersistent() {
          this._getActiveRipples().forEach((V) => {
            V.config.persistent || V.fadeOut();
          });
        }
        setupTriggerEvents(V) {
          const $ = (0, te.fI)(V);
          !this._platform.isBrowser ||
            !$ ||
            $ === this._triggerElement ||
            (this._removeTriggerEvents(),
            (this._triggerElement = $),
            tr.forEach((be) => {
              Le._eventManager.addHandler(this._ngZone, be, $, this);
            }));
        }
        handleEvent(V) {
          "mousedown" === V.type
            ? this._onMousedown(V)
            : "touchstart" === V.type
              ? this._onTouchStart(V)
              : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._ngZone.runOutsideAngular(() => {
                qt.forEach(($) => {
                  this._triggerElement.addEventListener($, this, an);
                });
              }),
              (this._pointerUpEventsRegistered = !0));
        }
        _finishRippleTransition(V) {
          0 === V.state
            ? this._startFadeOutTransition(V)
            : 2 === V.state && this._destroyRipple(V);
        }
        _startFadeOutTransition(V) {
          const $ = V === this._mostRecentTransientRipple,
            { persistent: be } = V.config;
          (V.state = 1), !be && (!$ || !this._isPointerDown) && V.fadeOut();
        }
        _destroyRipple(V) {
          const $ = this._activeRipples.get(V) ?? null;
          this._activeRipples.delete(V),
            this._activeRipples.size || (this._containerRect = null),
            V === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            (V.state = 3),
            null !== $ &&
              (V.element.removeEventListener(
                "transitionend",
                $.onTransitionEnd,
              ),
              V.element.removeEventListener(
                "transitioncancel",
                $.onTransitionCancel,
              )),
            V.element.remove();
        }
        _onMousedown(V) {
          const $ = (0, M.X6)(V),
            be =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          !this._target.rippleDisabled &&
            !$ &&
            !be &&
            ((this._isPointerDown = !0),
            this.fadeInRipple(V.clientX, V.clientY, this._target.rippleConfig));
        }
        _onTouchStart(V) {
          if (!this._target.rippleDisabled && !(0, M.yG)(V)) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const $ = V.changedTouches;
            for (let be = 0; be < $.length; be++)
              this.fadeInRipple(
                $[be].clientX,
                $[be].clientY,
                this._target.rippleConfig,
              );
          }
        }
        _onPointerUp() {
          this._isPointerDown &&
            ((this._isPointerDown = !1),
            this._getActiveRipples().forEach((V) => {
              !V.config.persistent &&
                (1 === V.state ||
                  (V.config.terminateOnPointerUp && 0 === V.state)) &&
                V.fadeOut();
            }));
        }
        _getActiveRipples() {
          return Array.from(this._activeRipples.keys());
        }
        _removeTriggerEvents() {
          const V = this._triggerElement;
          V &&
            (tr.forEach(($) => Le._eventManager.removeHandler($, V, this)),
            this._pointerUpEventsRegistered &&
              qt.forEach(($) => V.removeEventListener($, this, an)));
        }
      }
      Le._eventManager = new Un();
      const Zt = new _.OlP("mat-ripple-global-options");
      let cn = (() => {
          class ye {
            get disabled() {
              return this._disabled;
            }
            set disabled($) {
              $ && this.fadeOutAllNonPersistent(),
                (this._disabled = $),
                this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement;
            }
            set trigger($) {
              (this._trigger = $), this._setupTriggerEventsIfEnabled();
            }
            constructor($, be, Qe, wt, Bt) {
              (this._elementRef = $),
                (this._animationMode = Bt),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = wt || {}),
                (this._rippleRenderer = new Le(this, be, $, Qe));
            }
            ngOnInit() {
              (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll();
            }
            fadeOutAllNonPersistent() {
              this._rippleRenderer.fadeOutAllNonPersistent();
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: {
                  ...this._globalOptions.animation,
                  ...("NoopAnimations" === this._animationMode
                    ? { enterDuration: 0, exitDuration: 0 }
                    : {}),
                  ...this.animation,
                },
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
              };
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch($, be = 0, Qe) {
              return "number" == typeof $
                ? this._rippleRenderer.fadeInRipple($, be, {
                    ...this.rippleConfig,
                    ...Qe,
                  })
                : this._rippleRenderer.fadeInRipple(0, 0, {
                    ...this.rippleConfig,
                    ...$,
                  });
            }
          }
          return (
            (ye.ɵfac = function ($) {
              return new ($ || ye)(
                _.Y36(_.SBq),
                _.Y36(_.R0b),
                _.Y36(Y.t4),
                _.Y36(Zt, 8),
                _.Y36(_.QbO, 8),
              );
            }),
            (ye.ɵdir = _.lG2({
              type: ye,
              selectors: [
                ["", "mat-ripple", ""],
                ["", "matRipple", ""],
              ],
              hostAttrs: [1, "mat-ripple"],
              hostVars: 2,
              hostBindings: function ($, be) {
                2 & $ && _.ekj("mat-ripple-unbounded", be.unbounded);
              },
              inputs: {
                color: ["matRippleColor", "color"],
                unbounded: ["matRippleUnbounded", "unbounded"],
                centered: ["matRippleCentered", "centered"],
                radius: ["matRippleRadius", "radius"],
                animation: ["matRippleAnimation", "animation"],
                disabled: ["matRippleDisabled", "disabled"],
                trigger: ["matRippleTrigger", "trigger"],
              },
              exportAs: ["matRipple"],
            })),
            ye
          );
        })(),
        Yn = (() => {
          class ye {}
          return (
            (ye.ɵfac = function ($) {
              return new ($ || ye)();
            }),
            (ye.ɵmod = _.oAB({ type: ye })),
            (ye.ɵinj = _.cJS({ imports: [oe, oe] })),
            ye
          );
        })();
    },
    1481: (He, se, T) => {
      T.d(se, {
        Dx: () => jt,
        H7: () => Ft,
        b2: () => Zt,
        q6: () => tr,
        se: () => Ze,
      });
      var _ = T(6895),
        M = T(4650);
      class P extends _.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class K extends P {
        static makeCurrent() {
          (0, _.HT)(new K());
        }
        onAndCancel(O, v, C) {
          return (
            O.addEventListener(v, C, !1),
            () => {
              O.removeEventListener(v, C, !1);
            }
          );
        }
        dispatchEvent(O, v) {
          O.dispatchEvent(v);
        }
        remove(O) {
          O.parentNode && O.parentNode.removeChild(O);
        }
        createElement(O, v) {
          return (v = v || this.getDefaultDocument()).createElement(O);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(O) {
          return O.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(O) {
          return O instanceof DocumentFragment;
        }
        getGlobalEventTarget(O, v) {
          return "window" === v
            ? window
            : "document" === v
              ? O
              : "body" === v
                ? O.body
                : null;
        }
        getBaseHref(O) {
          const v = (function Y() {
            return (
              (Q = Q || document.querySelector("base")),
              Q ? Q.getAttribute("href") : null
            );
          })();
          return null == v
            ? null
            : (function J(ee) {
                (te = te || document.createElement("a")),
                  te.setAttribute("href", ee);
                const O = te.pathname;
                return "/" === O.charAt(0) ? O : `/${O}`;
              })(v);
        }
        resetBaseElement() {
          Q = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(O) {
          return (0, _.Mx)(document.cookie, O);
        }
      }
      let te,
        Q = null;
      const q = new M.OlP("TRANSITION_ID"),
        G = [
          {
            provide: M.ip1,
            useFactory: function X(ee, O, v) {
              return () => {
                v.get(M.CZH).donePromise.then(() => {
                  const C = (0, _.q)(),
                    N = O.querySelectorAll(`style[ng-transition="${ee}"]`);
                  for (let W = 0; W < N.length; W++) C.remove(N[W]);
                });
              };
            },
            deps: [q, _.K0, M.zs3],
            multi: !0,
          },
        ];
      let Ee = (() => {
        class ee {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (ee.ɵfac = function (v) {
            return new (v || ee)();
          }),
          (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
          ee
        );
      })();
      const de = new M.OlP("EventManagerPlugins");
      let Te = (() => {
        class ee {
          constructor(v, C) {
            (this._zone = C),
              (this._eventNameToPlugin = new Map()),
              v.forEach((N) => {
                N.manager = this;
              }),
              (this._plugins = v.slice().reverse());
          }
          addEventListener(v, C, N) {
            return this._findPluginFor(C).addEventListener(v, C, N);
          }
          addGlobalEventListener(v, C, N) {
            return this._findPluginFor(C).addGlobalEventListener(v, C, N);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(v) {
            const C = this._eventNameToPlugin.get(v);
            if (C) return C;
            const N = this._plugins;
            for (let W = 0; W < N.length; W++) {
              const pe = N[W];
              if (pe.supports(v)) return this._eventNameToPlugin.set(v, pe), pe;
            }
            throw new Error(`No event manager plugin found for event ${v}`);
          }
        }
        return (
          (ee.ɵfac = function (v) {
            return new (v || ee)(M.LFG(de), M.LFG(M.R0b));
          }),
          (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
          ee
        );
      })();
      class Ye {
        constructor(O) {
          this._doc = O;
        }
        addGlobalEventListener(O, v, C) {
          const N = (0, _.q)().getGlobalEventTarget(this._doc, O);
          if (!N)
            throw new Error(`Unsupported event target ${N} for event ${v}`);
          return this.addEventListener(N, v, C);
        }
      }
      let De = (() => {
          class ee {
            constructor() {
              this.usageCount = new Map();
            }
            addStyles(v) {
              for (const C of v)
                1 === this.changeUsageCount(C, 1) && this.onStyleAdded(C);
            }
            removeStyles(v) {
              for (const C of v)
                0 === this.changeUsageCount(C, -1) && this.onStyleRemoved(C);
            }
            onStyleRemoved(v) {}
            onStyleAdded(v) {}
            getAllStyles() {
              return this.usageCount.keys();
            }
            changeUsageCount(v, C) {
              const N = this.usageCount;
              let W = N.get(v) ?? 0;
              return (W += C), W > 0 ? N.set(v, W) : N.delete(v), W;
            }
            ngOnDestroy() {
              for (const v of this.getAllStyles()) this.onStyleRemoved(v);
              this.usageCount.clear();
            }
          }
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)();
            }),
            (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
            ee
          );
        })(),
        st = (() => {
          class ee extends De {
            constructor(v) {
              super(),
                (this.doc = v),
                (this.styleRef = new Map()),
                (this.hostNodes = new Set()),
                this.resetHostNodes();
            }
            onStyleAdded(v) {
              for (const C of this.hostNodes) this.addStyleToHost(C, v);
            }
            onStyleRemoved(v) {
              const C = this.styleRef;
              C.get(v)?.forEach((W) => W.remove()), C.delete(v);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.styleRef.clear(), this.resetHostNodes();
            }
            addHost(v) {
              this.hostNodes.add(v);
              for (const C of this.getAllStyles()) this.addStyleToHost(v, C);
            }
            removeHost(v) {
              this.hostNodes.delete(v);
            }
            addStyleToHost(v, C) {
              const N = this.doc.createElement("style");
              (N.textContent = C), v.appendChild(N);
              const W = this.styleRef.get(C);
              W ? W.push(N) : this.styleRef.set(C, [N]);
            }
            resetHostNodes() {
              const v = this.hostNodes;
              v.clear(), v.add(this.doc.head);
            }
          }
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)(M.LFG(_.K0));
            }),
            (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
            ee
          );
        })();
      const Oe = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Be = /%COMP%/g,
        U = "%COMP%",
        we = `_nghost-${U}`,
        et = `_ngcontent-${U}`,
        xe = new M.OlP("RemoveStylesOnCompDestory", {
          providedIn: "root",
          factory: () => !1,
        });
      function nt(ee, O) {
        return O.flat(100).map((v) => v.replace(Be, ee));
      }
      function Tt(ee) {
        return (O) => {
          if ("__ngUnwrap__" === O) return ee;
          !1 === ee(O) && (O.preventDefault(), (O.returnValue = !1));
        };
      }
      let Ze = (() => {
        class ee {
          constructor(v, C, N, W) {
            (this.eventManager = v),
              (this.sharedStylesHost = C),
              (this.appId = N),
              (this.removeStylesOnCompDestory = W),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new ae(v));
          }
          createRenderer(v, C) {
            if (!v || !C) return this.defaultRenderer;
            const N = this.getOrCreateRenderer(v, C);
            return (
              N instanceof Me
                ? N.applyToHost(v)
                : N instanceof le && N.applyStyles(),
              N
            );
          }
          getOrCreateRenderer(v, C) {
            const N = this.rendererByCompId;
            let W = N.get(C.id);
            if (!W) {
              const pe = this.eventManager,
                $e = this.sharedStylesHost,
                ut = this.removeStylesOnCompDestory;
              switch (C.encapsulation) {
                case M.ifc.Emulated:
                  W = new Me(pe, $e, C, this.appId, ut);
                  break;
                case M.ifc.ShadowDom:
                  return new Pe(pe, $e, v, C);
                default:
                  W = new le(pe, $e, C, ut);
              }
              (W.onDestroy = () => N.delete(C.id)), N.set(C.id, W);
            }
            return W;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          begin() {}
          end() {}
        }
        return (
          (ee.ɵfac = function (v) {
            return new (v || ee)(M.LFG(Te), M.LFG(st), M.LFG(M.AFp), M.LFG(xe));
          }),
          (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
          ee
        );
      })();
      class ae {
        constructor(O) {
          (this.eventManager = O),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(O, v) {
          return v
            ? document.createElementNS(Oe[v] || v, O)
            : document.createElement(O);
        }
        createComment(O) {
          return document.createComment(O);
        }
        createText(O) {
          return document.createTextNode(O);
        }
        appendChild(O, v) {
          (Ce(O) ? O.content : O).appendChild(v);
        }
        insertBefore(O, v, C) {
          O && (Ce(O) ? O.content : O).insertBefore(v, C);
        }
        removeChild(O, v) {
          O && O.removeChild(v);
        }
        selectRootElement(O, v) {
          let C = "string" == typeof O ? document.querySelector(O) : O;
          if (!C)
            throw new Error(`The selector "${O}" did not match any elements`);
          return v || (C.textContent = ""), C;
        }
        parentNode(O) {
          return O.parentNode;
        }
        nextSibling(O) {
          return O.nextSibling;
        }
        setAttribute(O, v, C, N) {
          if (N) {
            v = N + ":" + v;
            const W = Oe[N];
            W ? O.setAttributeNS(W, v, C) : O.setAttribute(v, C);
          } else O.setAttribute(v, C);
        }
        removeAttribute(O, v, C) {
          if (C) {
            const N = Oe[C];
            N ? O.removeAttributeNS(N, v) : O.removeAttribute(`${C}:${v}`);
          } else O.removeAttribute(v);
        }
        addClass(O, v) {
          O.classList.add(v);
        }
        removeClass(O, v) {
          O.classList.remove(v);
        }
        setStyle(O, v, C, N) {
          N & (M.JOm.DashCase | M.JOm.Important)
            ? O.style.setProperty(v, C, N & M.JOm.Important ? "important" : "")
            : (O.style[v] = C);
        }
        removeStyle(O, v, C) {
          C & M.JOm.DashCase ? O.style.removeProperty(v) : (O.style[v] = "");
        }
        setProperty(O, v, C) {
          O[v] = C;
        }
        setValue(O, v) {
          O.nodeValue = v;
        }
        listen(O, v, C) {
          return "string" == typeof O
            ? this.eventManager.addGlobalEventListener(O, v, Tt(C))
            : this.eventManager.addEventListener(O, v, Tt(C));
        }
      }
      function Ce(ee) {
        return "TEMPLATE" === ee.tagName && void 0 !== ee.content;
      }
      class Pe extends ae {
        constructor(O, v, C, N) {
          super(O),
            (this.sharedStylesHost = v),
            (this.hostEl = C),
            (this.shadowRoot = C.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const W = nt(N.id, N.styles);
          for (const pe of W) {
            const $e = document.createElement("style");
            ($e.textContent = pe), this.shadowRoot.appendChild($e);
          }
        }
        nodeOrShadowRoot(O) {
          return O === this.hostEl ? this.shadowRoot : O;
        }
        appendChild(O, v) {
          return super.appendChild(this.nodeOrShadowRoot(O), v);
        }
        insertBefore(O, v, C) {
          return super.insertBefore(this.nodeOrShadowRoot(O), v, C);
        }
        removeChild(O, v) {
          return super.removeChild(this.nodeOrShadowRoot(O), v);
        }
        parentNode(O) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(O)),
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class le extends ae {
        constructor(O, v, C, N, W = C.id) {
          super(O),
            (this.sharedStylesHost = v),
            (this.removeStylesOnCompDestory = N),
            (this.rendererUsageCount = 0),
            (this.styles = nt(W, C.styles));
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles),
            this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class Me extends le {
        constructor(O, v, C, N, W) {
          const pe = N + "-" + C.id;
          super(O, v, C, W, pe),
            (this.contentAttr = (function rt(ee) {
              return et.replace(Be, ee);
            })(pe)),
            (this.hostAttr = (function at(ee) {
              return we.replace(Be, ee);
            })(pe));
        }
        applyToHost(O) {
          this.applyStyles(), this.setAttribute(O, this.hostAttr, "");
        }
        createElement(O, v) {
          const C = super.createElement(O, v);
          return super.setAttribute(C, this.contentAttr, ""), C;
        }
      }
      let ue = (() => {
        class ee extends Ye {
          constructor(v) {
            super(v);
          }
          supports(v) {
            return !0;
          }
          addEventListener(v, C, N) {
            return (
              v.addEventListener(C, N, !1),
              () => this.removeEventListener(v, C, N)
            );
          }
          removeEventListener(v, C, N) {
            return v.removeEventListener(C, N);
          }
        }
        return (
          (ee.ɵfac = function (v) {
            return new (v || ee)(M.LFG(_.K0));
          }),
          (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
          ee
        );
      })();
      const Fe = ["alt", "control", "meta", "shift"],
        Ge = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        ft = {
          alt: (ee) => ee.altKey,
          control: (ee) => ee.ctrlKey,
          meta: (ee) => ee.metaKey,
          shift: (ee) => ee.shiftKey,
        };
      let it = (() => {
        class ee extends Ye {
          constructor(v) {
            super(v);
          }
          supports(v) {
            return null != ee.parseEventName(v);
          }
          addEventListener(v, C, N) {
            const W = ee.parseEventName(C),
              pe = ee.eventCallback(W.fullKey, N, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, _.q)().onAndCancel(v, W.domEventName, pe),
              );
          }
          static parseEventName(v) {
            const C = v.toLowerCase().split("."),
              N = C.shift();
            if (0 === C.length || ("keydown" !== N && "keyup" !== N))
              return null;
            const W = ee._normalizeKey(C.pop());
            let pe = "",
              $e = C.indexOf("code");
            if (
              ($e > -1 && (C.splice($e, 1), (pe = "code.")),
              Fe.forEach((Tn) => {
                const xn = C.indexOf(Tn);
                xn > -1 && (C.splice(xn, 1), (pe += Tn + "."));
              }),
              (pe += W),
              0 != C.length || 0 === W.length)
            )
              return null;
            const ut = {};
            return (ut.domEventName = N), (ut.fullKey = pe), ut;
          }
          static matchEventFullKeyCode(v, C) {
            let N = Ge[v.key] || v.key,
              W = "";
            return (
              C.indexOf("code.") > -1 && ((N = v.code), (W = "code.")),
              !(null == N || !N) &&
                ((N = N.toLowerCase()),
                " " === N ? (N = "space") : "." === N && (N = "dot"),
                Fe.forEach((pe) => {
                  pe !== N && (0, ft[pe])(v) && (W += pe + ".");
                }),
                (W += N),
                W === C)
            );
          }
          static eventCallback(v, C, N) {
            return (W) => {
              ee.matchEventFullKeyCode(W, v) && N.runGuarded(() => C(W));
            };
          }
          static _normalizeKey(v) {
            return "esc" === v ? "escape" : v;
          }
        }
        return (
          (ee.ɵfac = function (v) {
            return new (v || ee)(M.LFG(_.K0));
          }),
          (ee.ɵprov = M.Yz7({ token: ee, factory: ee.ɵfac })),
          ee
        );
      })();
      const tr = (0, M.eFA)(M._c5, "browser", [
          { provide: M.Lbi, useValue: _.bD },
          {
            provide: M.g9A,
            useValue: function Un() {
              K.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: _.K0,
            useFactory: function jn() {
              return (0, M.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        qt = new M.OlP(""),
        Le = [
          {
            provide: M.rWj,
            useClass: class H {
              addToWindow(O) {
                (M.dqk.getAngularTestability = (C, N = !0) => {
                  const W = O.findTestabilityInTree(C, N);
                  if (null == W)
                    throw new Error("Could not find testability for element.");
                  return W;
                }),
                  (M.dqk.getAllAngularTestabilities = () =>
                    O.getAllTestabilities()),
                  (M.dqk.getAllAngularRootElements = () =>
                    O.getAllRootElements()),
                  M.dqk.frameworkStabilizers ||
                    (M.dqk.frameworkStabilizers = []),
                  M.dqk.frameworkStabilizers.push((C) => {
                    const N = M.dqk.getAllAngularTestabilities();
                    let W = N.length,
                      pe = !1;
                    const $e = function (ut) {
                      (pe = pe || ut), W--, 0 == W && C(pe);
                    };
                    N.forEach(function (ut) {
                      ut.whenStable($e);
                    });
                  });
              }
              findTestabilityInTree(O, v, C) {
                return null == v
                  ? null
                  : O.getTestability(v) ??
                      (C
                        ? (0, _.q)().isShadowRoot(v)
                          ? this.findTestabilityInTree(O, v.host, !0)
                          : this.findTestabilityInTree(O, v.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: M.lri, useClass: M.dDg, deps: [M.R0b, M.eoX, M.rWj] },
          { provide: M.dDg, useClass: M.dDg, deps: [M.R0b, M.eoX, M.rWj] },
        ],
        tn = [
          { provide: M.zSh, useValue: "root" },
          {
            provide: M.qLn,
            useFactory: function sn() {
              return new M.qLn();
            },
            deps: [],
          },
          { provide: de, useClass: ue, multi: !0, deps: [_.K0, M.R0b, M.Lbi] },
          { provide: de, useClass: it, multi: !0, deps: [_.K0] },
          { provide: Ze, useClass: Ze, deps: [Te, st, M.AFp, xe] },
          { provide: M.FYo, useExisting: Ze },
          { provide: De, useExisting: st },
          { provide: st, useClass: st, deps: [_.K0] },
          { provide: Te, useClass: Te, deps: [de, M.R0b] },
          { provide: _.JF, useClass: Ee, deps: [] },
          [],
        ];
      let Zt = (() => {
          class ee {
            constructor(v) {}
            static withServerTransition(v) {
              return {
                ngModule: ee,
                providers: [
                  { provide: M.AFp, useValue: v.appId },
                  { provide: q, useExisting: M.AFp },
                  G,
                ],
              };
            }
          }
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)(M.LFG(qt, 12));
            }),
            (ee.ɵmod = M.oAB({ type: ee })),
            (ee.ɵinj = M.cJS({
              providers: [...tn, ...Le],
              imports: [_.ez, M.hGG],
            })),
            ee
          );
        })(),
        jt = (() => {
          class ee {
            constructor(v) {
              this._doc = v;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(v) {
              this._doc.title = v || "";
            }
          }
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)(M.LFG(_.K0));
            }),
            (ee.ɵprov = M.Yz7({
              token: ee,
              factory: function (v) {
                let C = null;
                return (
                  (C = v
                    ? new v()
                    : (function Vt() {
                        return new jt((0, M.LFG)(_.K0));
                      })()),
                  C
                );
              },
              providedIn: "root",
            })),
            ee
          );
        })();
      typeof window < "u" && window;
      let Ft = (() => {
          class ee {}
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)();
            }),
            (ee.ɵprov = M.Yz7({
              token: ee,
              factory: function (v) {
                let C = null;
                return (C = v ? new (v || ee)() : M.LFG(ln)), C;
              },
              providedIn: "root",
            })),
            ee
          );
        })(),
        ln = (() => {
          class ee extends Ft {
            constructor(v) {
              super(), (this._doc = v);
            }
            sanitize(v, C) {
              if (null == C) return null;
              switch (v) {
                case M.q3G.NONE:
                  return C;
                case M.q3G.HTML:
                  return (0, M.qzn)(C, "HTML")
                    ? (0, M.z3N)(C)
                    : (0, M.EiD)(this._doc, String(C)).toString();
                case M.q3G.STYLE:
                  return (0, M.qzn)(C, "Style") ? (0, M.z3N)(C) : C;
                case M.q3G.SCRIPT:
                  if ((0, M.qzn)(C, "Script")) return (0, M.z3N)(C);
                  throw new Error("unsafe value used in a script context");
                case M.q3G.URL:
                  return (0, M.qzn)(C, "URL")
                    ? (0, M.z3N)(C)
                    : (0, M.mCW)(String(C));
                case M.q3G.RESOURCE_URL:
                  if ((0, M.qzn)(C, "ResourceURL")) return (0, M.z3N)(C);
                  throw new Error(
                    `unsafe value used in a resource URL context (see ${M.JZr})`,
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${v} (see ${M.JZr})`,
                  );
              }
            }
            bypassSecurityTrustHtml(v) {
              return (0, M.JVY)(v);
            }
            bypassSecurityTrustStyle(v) {
              return (0, M.L6k)(v);
            }
            bypassSecurityTrustScript(v) {
              return (0, M.eBb)(v);
            }
            bypassSecurityTrustUrl(v) {
              return (0, M.LAX)(v);
            }
            bypassSecurityTrustResourceUrl(v) {
              return (0, M.pB0)(v);
            }
          }
          return (
            (ee.ɵfac = function (v) {
              return new (v || ee)(M.LFG(_.K0));
            }),
            (ee.ɵprov = M.Yz7({
              token: ee,
              factory: function (v) {
                let C = null;
                return (
                  (C = v
                    ? new v()
                    : (function rn(ee) {
                        return new ln(ee.get(_.K0));
                      })(M.LFG(M.zs3))),
                  C
                );
              },
              providedIn: "root",
            })),
            ee
          );
        })();
    },
    9197: (He, se, T) => {
      T.d(se, {
        gz: () => Jr,
        rH: () => ko,
        Od: () => Bs,
        Bz: () => Ln,
        lC: () => Ci,
      });
      var _ = T(4650),
        M = T(2076),
        P = T(9646),
        K = T(1135);
      const Y = (0, T(3888).d)(
        (l) =>
          function () {
            l(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          },
      );
      var te = T(9841),
        J = T(7272),
        q = T(9770),
        X = T(9635),
        G = T(2843),
        H = T(9751),
        Ee = T(515),
        de = T(727),
        Te = T(4482),
        Ye = T(5403);
      function De() {
        return (0, Te.e)((l, d) => {
          let s = null;
          l._refCount++;
          const p = (0, Ye.x)(d, void 0, void 0, void 0, () => {
            if (!l || l._refCount <= 0 || 0 < --l._refCount)
              return void (s = null);
            const y = l._connection,
              S = s;
            (s = null),
              y && (!S || y === S) && y.unsubscribe(),
              d.unsubscribe();
          });
          l.subscribe(p), p.closed || (s = l.connect());
        });
      }
      class st extends H.y {
        constructor(d, s) {
          super(),
            (this.source = d),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Te.A)(d) && (this.lift = d.lift);
        }
        _subscribe(d) {
          return this.getSubject().subscribe(d);
        }
        getSubject() {
          const d = this._subject;
          return (
            (!d || d.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: d } = this;
          (this._subject = this._connection = null), d?.unsubscribe();
        }
        connect() {
          let d = this._connection;
          if (!d) {
            d = this._connection = new de.w0();
            const s = this.getSubject();
            d.add(
              this.source.subscribe(
                (0, Ye.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (p) => {
                    this._teardown(), s.error(p);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              d.closed && ((this._connection = null), (d = de.w0.EMPTY));
          }
          return d;
        }
        refCount() {
          return De()(this);
        }
      }
      var Oe = T(7579),
        Be = T(6895),
        oe = T(4004),
        U = T(3900),
        we = T(5698),
        et = T(8675),
        Ie = T(9300),
        xe = T(5577);
      function rt(l) {
        return (0, Te.e)((d, s) => {
          let p = !1;
          d.subscribe(
            (0, Ye.x)(
              s,
              (y) => {
                (p = !0), s.next(y);
              },
              () => {
                p || s.next(l), s.complete();
              },
            ),
          );
        });
      }
      function at(l = nt) {
        return (0, Te.e)((d, s) => {
          let p = !1;
          d.subscribe(
            (0, Ye.x)(
              s,
              (y) => {
                (p = !0), s.next(y);
              },
              () => (p ? s.complete() : s.error(l())),
            ),
          );
        });
      }
      function nt() {
        return new Y();
      }
      var Tt = T(4671);
      function Ze(l, d) {
        const s = arguments.length >= 2;
        return (p) =>
          p.pipe(
            l ? (0, Ie.h)((y, S) => l(y, S, p)) : Tt.y,
            (0, we.q)(1),
            s ? rt(d) : at(() => new Y()),
          );
      }
      var ae = T(4351),
        ce = T(8505),
        me = T(262);
      function Pe(l, d) {
        return (0, Te.e)(
          (function Ce(l, d, s, p, y) {
            return (S, R) => {
              let Z = s,
                ge = d,
                We = 0;
              S.subscribe(
                (0, Ye.x)(
                  R,
                  (qe) => {
                    const kt = We++;
                    (ge = Z ? l(ge, qe, kt) : ((Z = !0), qe)), p && R.next(ge);
                  },
                  y &&
                    (() => {
                      Z && R.next(ge), R.complete();
                    }),
                ),
              );
            };
          })(l, d, arguments.length >= 2, !0),
        );
      }
      function le(l) {
        return l <= 0
          ? () => Ee.E
          : (0, Te.e)((d, s) => {
              let p = [];
              d.subscribe(
                (0, Ye.x)(
                  s,
                  (y) => {
                    p.push(y), l < p.length && p.shift();
                  },
                  () => {
                    for (const y of p) s.next(y);
                    s.complete();
                  },
                  void 0,
                  () => {
                    p = null;
                  },
                ),
              );
            });
      }
      function Me(l, d) {
        const s = arguments.length >= 2;
        return (p) =>
          p.pipe(
            l ? (0, Ie.h)((y, S) => l(y, S, p)) : Tt.y,
            le(1),
            s ? rt(d) : at(() => new Y()),
          );
      }
      var Fe = T(9718),
        Ge = T(8746),
        ft = T(8189),
        it = T(1481);
      const je = "primary",
        Lt = Symbol("RouteTitle");
      class In {
        constructor(d) {
          this.params = d || {};
        }
        has(d) {
          return Object.prototype.hasOwnProperty.call(this.params, d);
        }
        get(d) {
          if (this.has(d)) {
            const s = this.params[d];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(d) {
          if (this.has(d)) {
            const s = this.params[d];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Qt(l) {
        return new In(l);
      }
      function bn(l, d, s) {
        const p = s.path.split("/");
        if (
          p.length > l.length ||
          ("full" === s.pathMatch && (d.hasChildren() || p.length < l.length))
        )
          return null;
        const y = {};
        for (let S = 0; S < p.length; S++) {
          const R = p[S],
            Z = l[S];
          if (R.startsWith(":")) y[R.substring(1)] = Z;
          else if (R !== Z.path) return null;
        }
        return { consumed: l.slice(0, p.length), posParams: y };
      }
      function sn(l, d) {
        const s = l ? Object.keys(l) : void 0,
          p = d ? Object.keys(d) : void 0;
        if (!s || !p || s.length != p.length) return !1;
        let y;
        for (let S = 0; S < s.length; S++)
          if (((y = s[S]), !jn(l[y], d[y]))) return !1;
        return !0;
      }
      function jn(l, d) {
        if (Array.isArray(l) && Array.isArray(d)) {
          if (l.length !== d.length) return !1;
          const s = [...l].sort(),
            p = [...d].sort();
          return s.every((y, S) => p[S] === y);
        }
        return l === d;
      }
      function an(l) {
        return Array.prototype.concat.apply([], l);
      }
      function tr(l) {
        return l.length > 0 ? l[l.length - 1] : null;
      }
      function Le(l, d) {
        for (const s in l) l.hasOwnProperty(s) && d(l[s], s);
      }
      function tn(l) {
        return (0, _.CqO)(l)
          ? l
          : (0, _.QGY)(l)
            ? (0, M.D)(Promise.resolve(l))
            : (0, P.of)(l);
      }
      const Zt = !1,
        cn = {
          exact: function jt(l, d, s) {
            if (
              !Pt(l.segments, d.segments) ||
              !Pn(l.segments, d.segments, s) ||
              l.numberOfChildren !== d.numberOfChildren
            )
              return !1;
            for (const p in d.children)
              if (!l.children[p] || !jt(l.children[p], d.children[p], s))
                return !1;
            return !0;
          },
          subset: ct,
        },
        Yn = {
          exact: function Vt(l, d) {
            return sn(l, d);
          },
          subset: function lt(l, d) {
            return (
              Object.keys(d).length <= Object.keys(l).length &&
              Object.keys(d).every((s) => jn(l[s], d[s]))
            );
          },
          ignored: () => !0,
        };
      function nr(l, d, s) {
        return (
          cn[s.paths](l.root, d.root, s.matrixParams) &&
          Yn[s.queryParams](l.queryParams, d.queryParams) &&
          !("exact" === s.fragment && l.fragment !== d.fragment)
        );
      }
      function ct(l, d, s) {
        return hn(l, d, d.segments, s);
      }
      function hn(l, d, s, p) {
        if (l.segments.length > s.length) {
          const y = l.segments.slice(0, s.length);
          return !(!Pt(y, s) || d.hasChildren() || !Pn(y, s, p));
        }
        if (l.segments.length === s.length) {
          if (!Pt(l.segments, s) || !Pn(l.segments, s, p)) return !1;
          for (const y in d.children)
            if (!l.children[y] || !ct(l.children[y], d.children[y], p))
              return !1;
          return !0;
        }
        {
          const y = s.slice(0, l.segments.length),
            S = s.slice(l.segments.length);
          return (
            !!(Pt(l.segments, y) && Pn(l.segments, y, p) && l.children[je]) &&
            hn(l.children[je], d, S, p)
          );
        }
      }
      function Pn(l, d, s) {
        return d.every((p, y) => Yn[s](l[y].parameters, p.parameters));
      }
      class zt {
        constructor(d = new ht([], {}), s = {}, p = null) {
          (this.root = d), (this.queryParams = s), (this.fragment = p);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Qt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return ye.serialize(this);
        }
      }
      class ht {
        constructor(d, s) {
          (this.segments = d),
            (this.children = s),
            (this.parent = null),
            Le(s, (p, y) => (p.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return V(this);
        }
      }
      class nn {
        constructor(d, s) {
          (this.path = d), (this.parameters = s);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Qt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Ht(this);
        }
      }
      function Pt(l, d) {
        return l.length === d.length && l.every((s, p) => s.path === d[p].path);
      }
      let _t = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = _.Yz7({
            token: l,
            factory: function () {
              return new or();
            },
            providedIn: "root",
          })),
          l
        );
      })();
      class or {
        parse(d) {
          const s = new N(d);
          return new zt(
            s.parseRootSegment(),
            s.parseQueryParams(),
            s.parseFragment(),
          );
        }
        serialize(d) {
          const s = `/${$(d.root, !0)}`,
            p = (function rn(l) {
              const d = Object.keys(l)
                .map((s) => {
                  const p = l[s];
                  return Array.isArray(p)
                    ? p.map((y) => `${Qe(s)}=${Qe(y)}`).join("&")
                    : `${Qe(s)}=${Qe(p)}`;
                })
                .filter((s) => !!s);
              return d.length ? `?${d.join("&")}` : "";
            })(d.queryParams);
          return `${s}${p}${
            "string" == typeof d.fragment
              ? `#${(function wt(l) {
                  return encodeURI(l);
                })(d.fragment)}`
              : ""
          }`;
        }
      }
      const ye = new or();
      function V(l) {
        return l.segments.map((d) => Ht(d)).join("/");
      }
      function $(l, d) {
        if (!l.hasChildren()) return V(l);
        if (d) {
          const s = l.children[je] ? $(l.children[je], !1) : "",
            p = [];
          return (
            Le(l.children, (y, S) => {
              S !== je && p.push(`${S}:${$(y, !1)}`);
            }),
            p.length > 0 ? `${s}(${p.join("//")})` : s
          );
        }
        {
          const s = (function rr(l, d) {
            let s = [];
            return (
              Le(l.children, (p, y) => {
                y === je && (s = s.concat(d(p, y)));
              }),
              Le(l.children, (p, y) => {
                y !== je && (s = s.concat(d(p, y)));
              }),
              s
            );
          })(l, (p, y) =>
            y === je ? [$(l.children[je], !1)] : [`${y}:${$(p, !1)}`],
          );
          return 1 === Object.keys(l.children).length && null != l.children[je]
            ? `${V(l)}/${s[0]}`
            : `${V(l)}/(${s.join("//")})`;
        }
      }
      function be(l) {
        return encodeURIComponent(l)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Qe(l) {
        return be(l).replace(/%3B/gi, ";");
      }
      function Bt(l) {
        return be(l)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Sn(l) {
        return decodeURIComponent(l);
      }
      function ir(l) {
        return Sn(l.replace(/\+/g, "%20"));
      }
      function Ht(l) {
        return `${Bt(l.path)}${(function Ft(l) {
          return Object.keys(l)
            .map((d) => `;${Bt(d)}=${Bt(l[d])}`)
            .join("");
        })(l.parameters)}`;
      }
      const ln = /^[^\/()?;=#]+/;
      function bt(l) {
        const d = l.match(ln);
        return d ? d[0] : "";
      }
      const ee = /^[^=?&#]+/,
        v = /^[^&#]+/;
      class N {
        constructor(d) {
          (this.url = d), (this.remaining = d);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new ht([], {})
              : new ht([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const d = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(d);
            } while (this.consumeOptional("&"));
          return d;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const d = [];
          for (
            this.peekStartsWith("(") || d.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), d.push(this.parseSegment());
          let s = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (s = this.parseParens(!0)));
          let p = {};
          return (
            this.peekStartsWith("(") && (p = this.parseParens(!1)),
            (d.length > 0 || Object.keys(s).length > 0) &&
              (p[je] = new ht(d, s)),
            p
          );
        }
        parseSegment() {
          const d = bt(this.remaining);
          if ("" === d && this.peekStartsWith(";")) throw new _.vHH(4009, Zt);
          return this.capture(d), new nn(Sn(d), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const d = {};
          for (; this.consumeOptional(";"); ) this.parseParam(d);
          return d;
        }
        parseParam(d) {
          const s = bt(this.remaining);
          if (!s) return;
          this.capture(s);
          let p = "";
          if (this.consumeOptional("=")) {
            const y = bt(this.remaining);
            y && ((p = y), this.capture(p));
          }
          d[Sn(s)] = Sn(p);
        }
        parseQueryParam(d) {
          const s = (function O(l) {
            const d = l.match(ee);
            return d ? d[0] : "";
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let p = "";
          if (this.consumeOptional("=")) {
            const R = (function C(l) {
              const d = l.match(v);
              return d ? d[0] : "";
            })(this.remaining);
            R && ((p = R), this.capture(p));
          }
          const y = ir(s),
            S = ir(p);
          if (d.hasOwnProperty(y)) {
            let R = d[y];
            Array.isArray(R) || ((R = [R]), (d[y] = R)), R.push(S);
          } else d[y] = S;
        }
        parseParens(d) {
          const s = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const p = bt(this.remaining),
              y = this.remaining[p.length];
            if ("/" !== y && ")" !== y && ";" !== y) throw new _.vHH(4010, Zt);
            let S;
            p.indexOf(":") > -1
              ? ((S = p.slice(0, p.indexOf(":"))),
                this.capture(S),
                this.capture(":"))
              : d && (S = je);
            const R = this.parseChildren();
            (s[S] = 1 === Object.keys(R).length ? R[je] : new ht([], R)),
              this.consumeOptional("//");
          }
          return s;
        }
        peekStartsWith(d) {
          return this.remaining.startsWith(d);
        }
        consumeOptional(d) {
          return (
            !!this.peekStartsWith(d) &&
            ((this.remaining = this.remaining.substring(d.length)), !0)
          );
        }
        capture(d) {
          if (!this.consumeOptional(d)) throw new _.vHH(4011, Zt);
        }
      }
      function W(l) {
        return l.segments.length > 0 ? new ht([], { [je]: l }) : l;
      }
      function pe(l) {
        const d = {};
        for (const p of Object.keys(l.children)) {
          const S = pe(l.children[p]);
          (S.segments.length > 0 || S.hasChildren()) && (d[p] = S);
        }
        return (function $e(l) {
          if (1 === l.numberOfChildren && l.children[je]) {
            const d = l.children[je];
            return new ht(l.segments.concat(d.segments), d.children);
          }
          return l;
        })(new ht(l.segments, d));
      }
      function ut(l) {
        return l instanceof zt;
      }
      const Tn = !1;
      function Yr(l, d, s, p, y) {
        if (0 === s.length) return xt(d.root, d.root, d.root, p, y);
        const S = (function Xt(l) {
          if ("string" == typeof l[0] && 1 === l.length && "/" === l[0])
            return new mn(!0, 0, l);
          let d = 0,
            s = !1;
          const p = l.reduce((y, S, R) => {
            if ("object" == typeof S && null != S) {
              if (S.outlets) {
                const Z = {};
                return (
                  Le(S.outlets, (ge, We) => {
                    Z[We] = "string" == typeof ge ? ge.split("/") : ge;
                  }),
                  [...y, { outlets: Z }]
                );
              }
              if (S.segmentPath) return [...y, S.segmentPath];
            }
            return "string" != typeof S
              ? [...y, S]
              : 0 === R
                ? (S.split("/").forEach((Z, ge) => {
                    (0 == ge && "." === Z) ||
                      (0 == ge && "" === Z
                        ? (s = !0)
                        : ".." === Z
                          ? d++
                          : "" != Z && y.push(Z));
                  }),
                  y)
                : [...y, S];
          }, []);
          return new mn(s, d, p);
        })(s);
        return S.toRoot()
          ? xt(d.root, d.root, new ht([], {}), p, y)
          : (function R(ge) {
              const We = (function ii(l, d, s, p) {
                  if (l.isAbsolute) return new on(d.root, !0, 0);
                  if (-1 === p) return new on(s, s === d.root, 0);
                  return (function Qr(l, d, s) {
                    let p = l,
                      y = d,
                      S = s;
                    for (; S > y; ) {
                      if (((S -= y), (p = p.parent), !p))
                        throw new _.vHH(4005, Tn && "Invalid number of '../'");
                      y = p.segments.length;
                    }
                    return new on(p, !1, y - S);
                  })(s, p + (_r(l.commands[0]) ? 0 : 1), l.numberOfDoubleDots);
                })(S, d, l.snapshot?._urlSegment, ge),
                qe = We.processChildren
                  ? pt(We.segmentGroup, We.index, S.commands)
                  : Ve(We.segmentGroup, We.index, S.commands);
              return xt(d.root, We.segmentGroup, qe, p, y);
            })(l.snapshot?._lastPathIndex);
      }
      function _r(l) {
        return (
          "object" == typeof l && null != l && !l.outlets && !l.segmentPath
        );
      }
      function br(l) {
        return "object" == typeof l && null != l && l.outlets;
      }
      function xt(l, d, s, p, y) {
        let R,
          S = {};
        p &&
          Le(p, (ge, We) => {
            S[We] = Array.isArray(ge) ? ge.map((qe) => `${qe}`) : `${ge}`;
          }),
          (R = l === d ? s : pn(l, d, s));
        const Z = W(pe(R));
        return new zt(Z, S, y);
      }
      function pn(l, d, s) {
        const p = {};
        return (
          Le(l.children, (y, S) => {
            p[S] = y === d ? s : pn(y, d, s);
          }),
          new ht(l.segments, p)
        );
      }
      class mn {
        constructor(d, s, p) {
          if (
            ((this.isAbsolute = d),
            (this.numberOfDoubleDots = s),
            (this.commands = p),
            d && p.length > 0 && _r(p[0]))
          )
            throw new _.vHH(
              4003,
              Tn && "Root segment cannot have matrix parameters",
            );
          const y = p.find(br);
          if (y && y !== tr(p))
            throw new _.vHH(
              4004,
              Tn && "{outlets:{}} has to be the last command",
            );
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class on {
        constructor(d, s, p) {
          (this.segmentGroup = d), (this.processChildren = s), (this.index = p);
        }
      }
      function Ve(l, d, s) {
        if (
          (l || (l = new ht([], {})),
          0 === l.segments.length && l.hasChildren())
        )
          return pt(l, d, s);
        const p = (function Jt(l, d, s) {
            let p = 0,
              y = d;
            const S = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; y < l.segments.length; ) {
              if (p >= s.length) return S;
              const R = l.segments[y],
                Z = s[p];
              if (br(Z)) break;
              const ge = `${Z}`,
                We = p < s.length - 1 ? s[p + 1] : null;
              if (y > 0 && void 0 === ge) break;
              if (ge && We && "object" == typeof We && void 0 === We.outlets) {
                if (!sr(ge, We, R)) return S;
                p += 2;
              } else {
                if (!sr(ge, {}, R)) return S;
                p++;
              }
              y++;
            }
            return { match: !0, pathIndex: y, commandIndex: p };
          })(l, d, s),
          y = s.slice(p.commandIndex);
        if (p.match && p.pathIndex < l.segments.length) {
          const S = new ht(l.segments.slice(0, p.pathIndex), {});
          return (
            (S.children[je] = new ht(
              l.segments.slice(p.pathIndex),
              l.children,
            )),
            pt(S, 0, y)
          );
        }
        return p.match && 0 === y.length
          ? new ht(l.segments, {})
          : p.match && !l.hasChildren()
            ? gn(l, d, s)
            : p.match
              ? pt(l, 0, y)
              : gn(l, d, s);
      }
      function pt(l, d, s) {
        if (0 === s.length) return new ht(l.segments, {});
        {
          const p = (function Zn(l) {
              return br(l[0]) ? l[0].outlets : { [je]: l };
            })(s),
            y = {};
          if (
            !p[je] &&
            l.children[je] &&
            1 === l.numberOfChildren &&
            0 === l.children[je].segments.length
          ) {
            const S = pt(l.children[je], d, s);
            return new ht(l.segments, S.children);
          }
          return (
            Le(p, (S, R) => {
              "string" == typeof S && (S = [S]),
                null !== S && (y[R] = Ve(l.children[R], d, S));
            }),
            Le(l.children, (S, R) => {
              void 0 === p[R] && (y[R] = S);
            }),
            new ht(l.segments, y)
          );
        }
      }
      function gn(l, d, s) {
        const p = l.segments.slice(0, d);
        let y = 0;
        for (; y < s.length; ) {
          const S = s[y];
          if (br(S)) {
            const ge = yr(S.outlets);
            return new ht(p, ge);
          }
          if (0 === y && _r(s[0])) {
            p.push(new nn(l.segments[d].path, un(s[0]))), y++;
            continue;
          }
          const R = br(S) ? S.outlets[je] : `${S}`,
            Z = y < s.length - 1 ? s[y + 1] : null;
          R && Z && _r(Z)
            ? (p.push(new nn(R, un(Z))), (y += 2))
            : (p.push(new nn(R, {})), y++);
        }
        return new ht(p, {});
      }
      function yr(l) {
        const d = {};
        return (
          Le(l, (s, p) => {
            "string" == typeof s && (s = [s]),
              null !== s && (d[p] = gn(new ht([], {}), 0, s));
          }),
          d
        );
      }
      function un(l) {
        const d = {};
        return Le(l, (s, p) => (d[p] = `${s}`)), d;
      }
      function sr(l, d, s) {
        return l == s.path && sn(d, s.parameters);
      }
      const Ot = "imperative";
      class dn {
        constructor(d, s) {
          (this.id = d), (this.url = s);
        }
      }
      class ar extends dn {
        constructor(d, s, p = "imperative", y = null) {
          super(d, s),
            (this.type = 0),
            (this.navigationTrigger = p),
            (this.restoredState = y);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class mt extends dn {
        constructor(d, s, p) {
          super(d, s), (this.urlAfterRedirects = p), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Fr extends dn {
        constructor(d, s, p, y) {
          super(d, s), (this.reason = p), (this.code = y), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Qn extends dn {
        constructor(d, s, p, y) {
          super(d, s), (this.reason = p), (this.code = y), (this.type = 16);
        }
      }
      class Mr extends dn {
        constructor(d, s, p, y) {
          super(d, s), (this.error = p), (this.target = y), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Nr extends dn {
        constructor(d, s, p, y) {
          super(d, s),
            (this.urlAfterRedirects = p),
            (this.state = y),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class An extends dn {
        constructor(d, s, p, y) {
          super(d, s),
            (this.urlAfterRedirects = p),
            (this.state = y),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class yi extends dn {
        constructor(d, s, p, y, S) {
          super(d, s),
            (this.urlAfterRedirects = p),
            (this.state = y),
            (this.shouldActivate = S),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Lr extends dn {
        constructor(d, s, p, y) {
          super(d, s),
            (this.urlAfterRedirects = p),
            (this.state = y),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class cr extends dn {
        constructor(d, s, p, y) {
          super(d, s),
            (this.urlAfterRedirects = p),
            (this.state = y),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class qr {
        constructor(d) {
          (this.route = d), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class vr {
        constructor(d) {
          (this.route = d), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Gt {
        constructor(d) {
          (this.snapshot = d), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class qn {
        constructor(d) {
          (this.snapshot = d), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Xr {
        constructor(d) {
          (this.snapshot = d), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class lo {
        constructor(d) {
          (this.snapshot = d), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class oi {
        constructor(d, s, p) {
          (this.routerEvent = d),
            (this.position = s),
            (this.anchor = p),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let Fn = (() => {
          class l {
            createUrlTree(s, p, y, S, R, Z) {
              return Yr(s || p.root, y, S, R, Z);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac })),
            l
          );
        })(),
        zn = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: function (d) {
                return Fn.ɵfac(d);
              },
              providedIn: "root",
            })),
            l
          );
        })();
      class Nn {
        constructor(d) {
          this._root = d;
        }
        get root() {
          return this._root.value;
        }
        parent(d) {
          const s = this.pathFromRoot(d);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(d) {
          const s = Br(d, this._root);
          return s ? s.children.map((p) => p.value) : [];
        }
        firstChild(d) {
          const s = Br(d, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(d) {
          const s = lr(d, this._root);
          return s.length < 2
            ? []
            : s[s.length - 2].children
                .map((y) => y.value)
                .filter((y) => y !== d);
        }
        pathFromRoot(d) {
          return lr(d, this._root).map((s) => s.value);
        }
      }
      function Br(l, d) {
        if (l === d.value) return d;
        for (const s of d.children) {
          const p = Br(l, s);
          if (p) return p;
        }
        return null;
      }
      function lr(l, d) {
        if (l === d.value) return [d];
        for (const s of d.children) {
          const p = lr(l, s);
          if (p.length) return p.unshift(d), p;
        }
        return [];
      }
      class Xn {
        constructor(d, s) {
          (this.value = d), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function yn(l) {
        const d = {};
        return l && l.children.forEach((s) => (d[s.value.outlet] = s)), d;
      }
      class fo extends Nn {
        constructor(d, s) {
          super(d), (this.snapshot = s), Wi(this, d);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function qo(l, d) {
        const s = (function zi(l, d) {
            const R = new si([], {}, {}, "", {}, je, d, null, l.root, -1, {});
            return new Gi("", new Xn(R, []));
          })(l, d),
          p = new K.X([new nn("", {})]),
          y = new K.X({}),
          S = new K.X({}),
          R = new K.X({}),
          Z = new K.X(""),
          ge = new Jr(p, y, R, Z, S, je, d, s.root);
        return (ge.snapshot = s.root), new fo(new Xn(ge, []), s);
      }
      class Jr {
        constructor(d, s, p, y, S, R, Z, ge) {
          (this.url = d),
            (this.params = s),
            (this.queryParams = p),
            (this.fragment = y),
            (this.data = S),
            (this.outlet = R),
            (this.component = Z),
            (this.title =
              this.data?.pipe((0, oe.U)((We) => We[Lt])) ?? (0, P.of)(void 0)),
            (this._futureSnapshot = ge);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, oe.U)((d) => Qt(d)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, oe.U)((d) => Qt(d)),
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function So(l, d = "emptyOnly") {
        const s = l.pathFromRoot;
        let p = 0;
        if ("always" !== d)
          for (p = s.length - 1; p >= 1; ) {
            const y = s[p],
              S = s[p - 1];
            if (y.routeConfig && "" === y.routeConfig.path) p--;
            else {
              if (S.component) break;
              p--;
            }
          }
        return (function Xo(l) {
          return l.reduce(
            (d, s) => ({
              params: { ...d.params, ...s.params },
              data: { ...d.data, ...s.data },
              resolve: {
                ...s.data,
                ...d.resolve,
                ...s.routeConfig?.data,
                ...s._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} },
          );
        })(s.slice(p));
      }
      class si {
        get title() {
          return this.data?.[Lt];
        }
        constructor(d, s, p, y, S, R, Z, ge, We, qe, kt) {
          (this.url = d),
            (this.params = s),
            (this.queryParams = p),
            (this.fragment = y),
            (this.data = S),
            (this.outlet = R),
            (this.component = Z),
            (this.routeConfig = ge),
            (this._urlSegment = We),
            (this._lastPathIndex = qe),
            (this._resolve = kt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Qt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Qt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((p) => p.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Gi extends Nn {
        constructor(d, s) {
          super(s), (this.url = d), Wi(this, s);
        }
        toString() {
          return Jo(this._root);
        }
      }
      function Wi(l, d) {
        (d.value._routerState = l), d.children.forEach((s) => Wi(l, s));
      }
      function Jo(l) {
        const d =
          l.children.length > 0 ? ` { ${l.children.map(Jo).join(", ")} } ` : "";
        return `${l.value}${d}`;
      }
      function Di(l) {
        if (l.snapshot) {
          const d = l.snapshot,
            s = l._futureSnapshot;
          (l.snapshot = s),
            sn(d.queryParams, s.queryParams) ||
              l.queryParams.next(s.queryParams),
            d.fragment !== s.fragment && l.fragment.next(s.fragment),
            sn(d.params, s.params) || l.params.next(s.params),
            (function Un(l, d) {
              if (l.length !== d.length) return !1;
              for (let s = 0; s < l.length; ++s) if (!sn(l[s], d[s])) return !1;
              return !0;
            })(d.url, s.url) || l.url.next(s.url),
            sn(d.data, s.data) || l.data.next(s.data);
        } else
          (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
      }
      function Ei(l, d) {
        const s =
          sn(l.params, d.params) &&
          (function Rr(l, d) {
            return (
              Pt(l, d) && l.every((s, p) => sn(s.parameters, d[p].parameters))
            );
          })(l.url, d.url);
        return (
          s &&
          !(!l.parent != !d.parent) &&
          (!l.parent || Ei(l.parent, d.parent))
        );
      }
      function Ki(l, d, s) {
        if (s && l.shouldReuseRoute(d.value, s.value.snapshot)) {
          const p = s.value;
          p._futureSnapshot = d.value;
          const y = (function es(l, d, s) {
            return d.children.map((p) => {
              for (const y of s.children)
                if (l.shouldReuseRoute(p.value, y.value.snapshot))
                  return Ki(l, p, y);
              return Ki(l, p);
            });
          })(l, d, s);
          return new Xn(p, y);
        }
        {
          if (l.shouldAttach(d.value)) {
            const S = l.retrieve(d.value);
            if (null !== S) {
              const R = S.route;
              return (
                (R.value._futureSnapshot = d.value),
                (R.children = d.children.map((Z) => Ki(l, Z))),
                R
              );
            }
          }
          const p = (function To(l) {
              return new Jr(
                new K.X(l.url),
                new K.X(l.params),
                new K.X(l.queryParams),
                new K.X(l.fragment),
                new K.X(l.data),
                l.outlet,
                l.component,
                l,
              );
            })(d.value),
            y = d.children.map((S) => Ki(l, S));
          return new Xn(p, y);
        }
      }
      const ai = "ngNavigationCancelingError";
      function Yi(l, d) {
        const { redirectTo: s, navigationBehaviorOptions: p } = ut(d)
            ? { redirectTo: d, navigationBehaviorOptions: void 0 }
            : d,
          y = xo(!1, 0, d);
        return (y.url = s), (y.navigationBehaviorOptions = p), y;
      }
      function xo(l, d, s) {
        const p = new Error("NavigationCancelingError: " + (l || ""));
        return (p[ai] = !0), (p.cancellationCode = d), s && (p.url = s), p;
      }
      function ho(l) {
        return Ao(l) && ut(l.url);
      }
      function Ao(l) {
        return l && l[ai];
      }
      class Ir {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new wi()),
            (this.attachRef = null);
        }
      }
      let wi = (() => {
        class l {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, p) {
            const y = this.getOrCreateContext(s);
            (y.outlet = p), this.contexts.set(s, y);
          }
          onChildOutletDestroyed(s) {
            const p = this.getContext(s);
            p && ((p.outlet = null), (p.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let p = this.getContext(s);
            return p || ((p = new Ir()), this.contexts.set(s, p)), p;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const ci = !1;
      let Ci = (() => {
        class l {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = je),
              (this.activateEvents = new _.vpe()),
              (this.deactivateEvents = new _.vpe()),
              (this.attachEvents = new _.vpe()),
              (this.detachEvents = new _.vpe()),
              (this.parentContexts = (0, _.f3M)(wi)),
              (this.location = (0, _.f3M)(_.s_b)),
              (this.changeDetector = (0, _.f3M)(_.sBO)),
              (this.environmentInjector = (0, _.f3M)(_.lqb));
          }
          ngOnChanges(s) {
            if (s.name) {
              const { firstChange: p, previousValue: y } = s.name;
              if (p) return;
              this.isTrackedInParentContexts(y) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(y)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(s) {
            return this.parentContexts.getContext(s)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const s = this.parentContexts.getContext(this.name);
            s?.route &&
              (s.attachRef
                ? this.attach(s.attachRef, s.route)
                : this.activateWith(s.route, s.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new _.vHH(4012, ci);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new _.vHH(4012, ci);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new _.vHH(4012, ci);
            this.location.detach();
            const s = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(s.instance),
              s
            );
          }
          attach(s, p) {
            (this.activated = s),
              (this._activatedRoute = p),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, p) {
            if (this.isActivated) throw new _.vHH(4013, ci);
            this._activatedRoute = s;
            const y = this.location,
              R = s.snapshot.component,
              Z = this.parentContexts.getOrCreateContext(this.name).children,
              ge = new Oo(s, Z, y.injector);
            if (
              p &&
              (function Zi(l) {
                return !!l.resolveComponentFactory;
              })(p)
            ) {
              const We = p.resolveComponentFactory(R);
              this.activated = y.createComponent(We, y.length, ge);
            } else
              this.activated = y.createComponent(R, {
                index: y.length,
                injector: ge,
                environmentInjector: p ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵdir = _.lG2({
            type: l,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [_.TTD],
          })),
          l
        );
      })();
      class Oo {
        constructor(d, s, p) {
          (this.route = d), (this.childContexts = s), (this.parent = p);
        }
        get(d, s) {
          return d === Jr
            ? this.route
            : d === wi
              ? this.childContexts
              : this.parent.get(d, s);
        }
      }
      let Mi = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵcmp = _.Xpm({
            type: l,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [_.jDz],
            decls: 1,
            vars: 0,
            template: function (s, p) {
              1 & s && _._UZ(0, "router-outlet");
            },
            dependencies: [Ci],
            encapsulation: 2,
          })),
          l
        );
      })();
      function Gn(l, d) {
        return (
          l.providers &&
            !l._injector &&
            (l._injector = (0, _.MMx)(l.providers, d, `Route: ${l.path}`)),
          l._injector ?? d
        );
      }
      function Dr(l) {
        const d = l.children && l.children.map(Dr),
          s = d ? { ...l, children: d } : { ...l };
        return (
          !s.component &&
            !s.loadComponent &&
            (d || s.loadChildren) &&
            s.outlet &&
            s.outlet !== je &&
            (s.component = Mi),
          s
        );
      }
      function $t(l) {
        return l.outlet || je;
      }
      function Qi(l, d) {
        const s = l.filter((p) => $t(p) === d);
        return s.push(...l.filter((p) => $t(p) !== d)), s;
      }
      function Ur(l) {
        if (!l) return null;
        if (l.routeConfig?._injector) return l.routeConfig._injector;
        for (let d = l.parent; d; d = d.parent) {
          const s = d.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class Kt {
        constructor(d, s, p, y) {
          (this.routeReuseStrategy = d),
            (this.futureState = s),
            (this.currState = p),
            (this.forwardEvent = y);
        }
        activate(d) {
          const s = this.futureState._root,
            p = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, p, d),
            Di(this.futureState.root),
            this.activateChildRoutes(s, p, d);
        }
        deactivateChildRoutes(d, s, p) {
          const y = yn(s);
          d.children.forEach((S) => {
            const R = S.value.outlet;
            this.deactivateRoutes(S, y[R], p), delete y[R];
          }),
            Le(y, (S, R) => {
              this.deactivateRouteAndItsChildren(S, p);
            });
        }
        deactivateRoutes(d, s, p) {
          const y = d.value,
            S = s ? s.value : null;
          if (y === S)
            if (y.component) {
              const R = p.getContext(y.outlet);
              R && this.deactivateChildRoutes(d, s, R.children);
            } else this.deactivateChildRoutes(d, s, p);
          else S && this.deactivateRouteAndItsChildren(s, p);
        }
        deactivateRouteAndItsChildren(d, s) {
          d.value.component &&
          this.routeReuseStrategy.shouldDetach(d.value.snapshot)
            ? this.detachAndStoreRouteSubtree(d, s)
            : this.deactivateRouteAndOutlet(d, s);
        }
        detachAndStoreRouteSubtree(d, s) {
          const p = s.getContext(d.value.outlet),
            y = p && d.value.component ? p.children : s,
            S = yn(d);
          for (const R of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[R], y);
          if (p && p.outlet) {
            const R = p.outlet.detach(),
              Z = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(d.value.snapshot, {
              componentRef: R,
              route: d,
              contexts: Z,
            });
          }
        }
        deactivateRouteAndOutlet(d, s) {
          const p = s.getContext(d.value.outlet),
            y = p && d.value.component ? p.children : s,
            S = yn(d);
          for (const R of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[R], y);
          p &&
            (p.outlet &&
              (p.outlet.deactivate(), p.children.onOutletDeactivated()),
            (p.attachRef = null),
            (p.resolver = null),
            (p.route = null));
        }
        activateChildRoutes(d, s, p) {
          const y = yn(s);
          d.children.forEach((S) => {
            this.activateRoutes(S, y[S.value.outlet], p),
              this.forwardEvent(new lo(S.value.snapshot));
          }),
            d.children.length && this.forwardEvent(new qn(d.value.snapshot));
        }
        activateRoutes(d, s, p) {
          const y = d.value,
            S = s ? s.value : null;
          if ((Di(y), y === S))
            if (y.component) {
              const R = p.getOrCreateContext(y.outlet);
              this.activateChildRoutes(d, s, R.children);
            } else this.activateChildRoutes(d, s, p);
          else if (y.component) {
            const R = p.getOrCreateContext(y.outlet);
            if (this.routeReuseStrategy.shouldAttach(y.snapshot)) {
              const Z = this.routeReuseStrategy.retrieve(y.snapshot);
              this.routeReuseStrategy.store(y.snapshot, null),
                R.children.onOutletReAttached(Z.contexts),
                (R.attachRef = Z.componentRef),
                (R.route = Z.route.value),
                R.outlet && R.outlet.attach(Z.componentRef, Z.route.value),
                Di(Z.route.value),
                this.activateChildRoutes(d, null, R.children);
            } else {
              const Z = Ur(y.snapshot),
                ge = Z?.get(_._Vd) ?? null;
              (R.attachRef = null),
                (R.route = y),
                (R.resolver = ge),
                (R.injector = Z),
                R.outlet && R.outlet.activateWith(y, R.injector),
                this.activateChildRoutes(d, null, R.children);
            }
          } else this.activateChildRoutes(d, null, p);
        }
      }
      class jr {
        constructor(d) {
          (this.path = d), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Hr {
        constructor(d, s) {
          (this.component = d), (this.route = s);
        }
      }
      function Ro(l, d, s) {
        const p = l._root;
        return Tr(p, d ? d._root : null, s, [p.value]);
      }
      function $r(l, d) {
        const s = Symbol(),
          p = d.get(l, s);
        return p === s
          ? "function" != typeof l || (0, _.Z0I)(l)
            ? d.get(l)
            : l
          : p;
      }
      function Tr(
        l,
        d,
        s,
        p,
        y = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const S = yn(d);
        return (
          l.children.forEach((R) => {
            (function gt(
              l,
              d,
              s,
              p,
              y = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const S = l.value,
                R = d ? d.value : null,
                Z = s ? s.getContext(l.value.outlet) : null;
              if (R && S.routeConfig === R.routeConfig) {
                const ge = (function mo(l, d, s) {
                  if ("function" == typeof s) return s(l, d);
                  switch (s) {
                    case "pathParamsChange":
                      return !Pt(l.url, d.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Pt(l.url, d.url) || !sn(l.queryParams, d.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Ei(l, d) || !sn(l.queryParams, d.queryParams);
                    default:
                      return !Ei(l, d);
                  }
                })(R, S, S.routeConfig.runGuardsAndResolvers);
                ge
                  ? y.canActivateChecks.push(new jr(p))
                  : ((S.data = R.data), (S._resolvedData = R._resolvedData)),
                  Tr(l, d, S.component ? (Z ? Z.children : null) : s, p, y),
                  ge &&
                    Z &&
                    Z.outlet &&
                    Z.outlet.isActivated &&
                    y.canDeactivateChecks.push(new Hr(Z.outlet.component, R));
              } else
                R && qi(d, Z, y),
                  y.canActivateChecks.push(new jr(p)),
                  Tr(l, null, S.component ? (Z ? Z.children : null) : s, p, y);
            })(R, S[R.value.outlet], s, p.concat([R.value]), y),
              delete S[R.value.outlet];
          }),
          Le(S, (R, Z) => qi(R, s.getContext(Z), y)),
          y
        );
      }
      function qi(l, d, s) {
        const p = yn(l),
          y = l.value;
        Le(p, (S, R) => {
          qi(S, y.component ? (d ? d.children.getContext(R) : null) : d, s);
        }),
          s.canDeactivateChecks.push(
            new Hr(
              y.component && d && d.outlet && d.outlet.isActivated
                ? d.outlet.component
                : null,
              y,
            ),
          );
      }
      function Vr(l) {
        return "function" == typeof l;
      }
      function Oi(l) {
        return l instanceof Y || "EmptyError" === l?.name;
      }
      const fn = Symbol("INITIAL_VALUE");
      function zr() {
        return (0, U.w)((l) =>
          (0, te.a)(l.map((d) => d.pipe((0, we.q)(1), (0, et.O)(fn)))).pipe(
            (0, oe.U)((d) => {
              for (const s of d)
                if (!0 !== s) {
                  if (s === fn) return fn;
                  if (!1 === s || s instanceof zt) return s;
                }
              return !0;
            }),
            (0, Ie.h)((d) => d !== fn),
            (0, we.q)(1),
          ),
        );
      }
      function Gr(l) {
        return (0, X.z)(
          (0, ce.b)((d) => {
            if (ut(d)) throw Yi(0, d);
          }),
          (0, oe.U)((d) => !0 === d),
        );
      }
      const Er = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function vo(l, d, s, p, y) {
        const S = ui(l, d, s);
        return S.matched
          ? (function Pi(l, d, s, p) {
              const y = d.canMatch;
              if (!y || 0 === y.length) return (0, P.of)(!0);
              const S = y.map((R) => {
                const Z = $r(R, l);
                return tn(
                  (function fe(l) {
                    return l && Vr(l.canMatch);
                  })(Z)
                    ? Z.canMatch(d, s)
                    : l.runInContext(() => Z(d, s)),
                );
              });
              return (0, P.of)(S).pipe(zr(), Gr());
            })((p = Gn(d, p)), d, s).pipe(
              (0, oe.U)((R) => (!0 === R ? S : { ...Er })),
            )
          : (0, P.of)(S);
      }
      function ui(l, d, s) {
        if ("" === d.path)
          return "full" === d.pathMatch && (l.hasChildren() || s.length > 0)
            ? { ...Er }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: s,
                parameters: {},
                positionalParamSegments: {},
              };
        const y = (d.matcher || bn)(s, l, d);
        if (!y) return { ...Er };
        const S = {};
        Le(y.posParams, (Z, ge) => {
          S[ge] = Z.path;
        });
        const R =
          y.consumed.length > 0
            ? { ...S, ...y.consumed[y.consumed.length - 1].parameters }
            : S;
        return {
          matched: !0,
          consumedSegments: y.consumed,
          remainingSegments: s.slice(y.consumed.length),
          parameters: R,
          positionalParamSegments: y.posParams ?? {},
        };
      }
      function Ji(l, d, s, p) {
        if (
          s.length > 0 &&
          (function Fi(l, d, s) {
            return s.some((p) => c(l, d, p) && $t(p) !== je);
          })(l, s, p)
        ) {
          const S = new ht(
            d,
            (function eo(l, d, s, p) {
              const y = {};
              (y[je] = p),
                (p._sourceSegment = l),
                (p._segmentIndexShift = d.length);
              for (const S of s)
                if ("" === S.path && $t(S) !== je) {
                  const R = new ht([], {});
                  (R._sourceSegment = l),
                    (R._segmentIndexShift = d.length),
                    (y[$t(S)] = R);
                }
              return y;
            })(l, d, p, new ht(s, l.children)),
          );
          return (
            (S._sourceSegment = l),
            (S._segmentIndexShift = d.length),
            { segmentGroup: S, slicedSegments: [] }
          );
        }
        if (
          0 === s.length &&
          (function w(l, d, s) {
            return s.some((p) => c(l, d, p));
          })(l, s, p)
        ) {
          const S = new ht(
            l.segments,
            (function Lo(l, d, s, p, y) {
              const S = {};
              for (const R of p)
                if (c(l, s, R) && !y[$t(R)]) {
                  const Z = new ht([], {});
                  (Z._sourceSegment = l),
                    (Z._segmentIndexShift = d.length),
                    (S[$t(R)] = Z);
                }
              return { ...y, ...S };
            })(l, d, s, p, l.children),
          );
          return (
            (S._sourceSegment = l),
            (S._segmentIndexShift = d.length),
            { segmentGroup: S, slicedSegments: s }
          );
        }
        const y = new ht(l.segments, l.children);
        return (
          (y._sourceSegment = l),
          (y._segmentIndexShift = d.length),
          { segmentGroup: y, slicedSegments: s }
        );
      }
      function c(l, d, s) {
        return (
          (!(l.hasChildren() || d.length > 0) || "full" !== s.pathMatch) &&
          "" === s.path
        );
      }
      function u(l, d, s, p) {
        return (
          !!($t(l) === p || (p !== je && c(d, s, l))) &&
          ("**" === l.path || ui(d, l, s).matched)
        );
      }
      function b(l, d, s) {
        return 0 === d.length && !l.children[s];
      }
      const I = !1;
      class F {
        constructor(d) {
          this.segmentGroup = d || null;
        }
      }
      class B {
        constructor(d) {
          this.urlTree = d;
        }
      }
      function j(l) {
        return (0, G._)(new F(l));
      }
      function re(l) {
        return (0, G._)(new B(l));
      }
      class dt {
        constructor(d, s, p, y, S) {
          (this.injector = d),
            (this.configLoader = s),
            (this.urlSerializer = p),
            (this.urlTree = y),
            (this.config = S),
            (this.allowRedirects = !0);
        }
        apply() {
          const d = Ji(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new ht(d.segments, d.children);
          return this.expandSegmentGroup(this.injector, this.config, s, je)
            .pipe(
              (0, oe.U)((S) =>
                this.createUrlTree(
                  pe(S),
                  this.urlTree.queryParams,
                  this.urlTree.fragment,
                ),
              ),
            )
            .pipe(
              (0, me.K)((S) => {
                if (S instanceof B)
                  return (this.allowRedirects = !1), this.match(S.urlTree);
                throw S instanceof F ? this.noMatchError(S) : S;
              }),
            );
        }
        match(d) {
          return this.expandSegmentGroup(this.injector, this.config, d.root, je)
            .pipe(
              (0, oe.U)((y) =>
                this.createUrlTree(pe(y), d.queryParams, d.fragment),
              ),
            )
            .pipe(
              (0, me.K)((y) => {
                throw y instanceof F ? this.noMatchError(y) : y;
              }),
            );
        }
        noMatchError(d) {
          return new _.vHH(4002, I);
        }
        createUrlTree(d, s, p) {
          const y = W(d);
          return new zt(y, s, p);
        }
        expandSegmentGroup(d, s, p, y) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.expandChildren(d, s, p).pipe((0, oe.U)((S) => new ht([], S)))
            : this.expandSegment(d, p, s, p.segments, y, !0);
        }
        expandChildren(d, s, p) {
          const y = [];
          for (const S of Object.keys(p.children))
            "primary" === S ? y.unshift(S) : y.push(S);
          return (0, M.D)(y).pipe(
            (0, ae.b)((S) => {
              const R = p.children[S],
                Z = Qi(s, S);
              return this.expandSegmentGroup(d, Z, R, S).pipe(
                (0, oe.U)((ge) => ({ segment: ge, outlet: S })),
              );
            }),
            Pe((S, R) => ((S[R.outlet] = R.segment), S), {}),
            Me(),
          );
        }
        expandSegment(d, s, p, y, S, R) {
          return (0, M.D)(p).pipe(
            (0, ae.b)((Z) =>
              this.expandSegmentAgainstRoute(d, s, p, Z, y, S, R).pipe(
                (0, me.K)((We) => {
                  if (We instanceof F) return (0, P.of)(null);
                  throw We;
                }),
              ),
            ),
            Ze((Z) => !!Z),
            (0, me.K)((Z, ge) => {
              if (Oi(Z)) return b(s, y, S) ? (0, P.of)(new ht([], {})) : j(s);
              throw Z;
            }),
          );
        }
        expandSegmentAgainstRoute(d, s, p, y, S, R, Z) {
          return u(y, s, S, R)
            ? void 0 === y.redirectTo
              ? this.matchSegmentAgainstRoute(d, s, y, S, R)
              : Z && this.allowRedirects
                ? this.expandSegmentAgainstRouteUsingRedirect(d, s, p, y, S, R)
                : j(s)
            : j(s);
        }
        expandSegmentAgainstRouteUsingRedirect(d, s, p, y, S, R) {
          return "**" === y.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, p, y, R)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                d,
                s,
                p,
                y,
                S,
                R,
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(d, s, p, y) {
          const S = this.applyRedirectCommands([], p.redirectTo, {});
          return p.redirectTo.startsWith("/")
            ? re(S)
            : this.lineralizeSegments(p, S).pipe(
                (0, xe.z)((R) => {
                  const Z = new ht(R, {});
                  return this.expandSegment(d, Z, s, R, y, !1);
                }),
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(d, s, p, y, S, R) {
          const {
            matched: Z,
            consumedSegments: ge,
            remainingSegments: We,
            positionalParamSegments: qe,
          } = ui(s, y, S);
          if (!Z) return j(s);
          const kt = this.applyRedirectCommands(ge, y.redirectTo, qe);
          return y.redirectTo.startsWith("/")
            ? re(kt)
            : this.lineralizeSegments(y, kt).pipe(
                (0, xe.z)((Vn) =>
                  this.expandSegment(d, s, p, Vn.concat(We), R, !1),
                ),
              );
        }
        matchSegmentAgainstRoute(d, s, p, y, S) {
          return "**" === p.path
            ? ((d = Gn(p, d)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? (0, P.of)({
                        routes: p._loadedRoutes,
                        injector: p._loadedInjector,
                      })
                    : this.configLoader.loadChildren(d, p)
                  ).pipe(
                    (0, oe.U)(
                      (Z) => (
                        (p._loadedRoutes = Z.routes),
                        (p._loadedInjector = Z.injector),
                        new ht(y, {})
                      ),
                    ),
                  )
                : (0, P.of)(new ht(y, {})))
            : vo(s, p, y, d).pipe(
                (0, U.w)(
                  ({
                    matched: R,
                    consumedSegments: Z,
                    remainingSegments: ge,
                  }) =>
                    R
                      ? this.getChildConfig((d = p._injector ?? d), p, y).pipe(
                          (0, xe.z)((qe) => {
                            const kt = qe.injector ?? d,
                              Vn = qe.routes,
                              { segmentGroup: Bi, slicedSegments: fi } = Ji(
                                s,
                                Z,
                                ge,
                                Vn,
                              ),
                              hi = new ht(Bi.segments, Bi.children);
                            if (0 === fi.length && hi.hasChildren())
                              return this.expandChildren(kt, Vn, hi).pipe(
                                (0, oe.U)((Ca) => new ht(Z, Ca)),
                              );
                            if (0 === Vn.length && 0 === fi.length)
                              return (0, P.of)(new ht(Z, {}));
                            const pr = $t(p) === S;
                            return this.expandSegment(
                              kt,
                              hi,
                              Vn,
                              fi,
                              pr ? je : S,
                              !0,
                            ).pipe(
                              (0, oe.U)(
                                (ro) =>
                                  new ht(Z.concat(ro.segments), ro.children),
                              ),
                            );
                          }),
                        )
                      : j(s),
                ),
              );
        }
        getChildConfig(d, s, p) {
          return s.children
            ? (0, P.of)({ routes: s.children, injector: d })
            : s.loadChildren
              ? void 0 !== s._loadedRoutes
                ? (0, P.of)({
                    routes: s._loadedRoutes,
                    injector: s._loadedInjector,
                  })
                : (function Jn(l, d, s, p) {
                    const y = d.canLoad;
                    if (void 0 === y || 0 === y.length) return (0, P.of)(!0);
                    const S = y.map((R) => {
                      const Z = $r(R, l);
                      return tn(
                        (function go(l) {
                          return l && Vr(l.canLoad);
                        })(Z)
                          ? Z.canLoad(d, s)
                          : l.runInContext(() => Z(d, s)),
                      );
                    });
                    return (0, P.of)(S).pipe(zr(), Gr());
                  })(d, s, p).pipe(
                    (0, xe.z)((y) =>
                      y
                        ? this.configLoader.loadChildren(d, s).pipe(
                            (0, ce.b)((S) => {
                              (s._loadedRoutes = S.routes),
                                (s._loadedInjector = S.injector);
                            }),
                          )
                        : (function Ue(l) {
                            return (0, G._)(xo(I, 3));
                          })(),
                    ),
                  )
              : (0, P.of)({ routes: [], injector: d });
        }
        lineralizeSegments(d, s) {
          let p = [],
            y = s.root;
          for (;;) {
            if (((p = p.concat(y.segments)), 0 === y.numberOfChildren))
              return (0, P.of)(p);
            if (y.numberOfChildren > 1 || !y.children[je])
              return d.redirectTo, (0, G._)(new _.vHH(4e3, I));
            y = y.children[je];
          }
        }
        applyRedirectCommands(d, s, p) {
          return this.applyRedirectCreateUrlTree(
            s,
            this.urlSerializer.parse(s),
            d,
            p,
          );
        }
        applyRedirectCreateUrlTree(d, s, p, y) {
          const S = this.createSegmentGroup(d, s.root, p, y);
          return new zt(
            S,
            this.createQueryParams(s.queryParams, this.urlTree.queryParams),
            s.fragment,
          );
        }
        createQueryParams(d, s) {
          const p = {};
          return (
            Le(d, (y, S) => {
              if ("string" == typeof y && y.startsWith(":")) {
                const Z = y.substring(1);
                p[S] = s[Z];
              } else p[S] = y;
            }),
            p
          );
        }
        createSegmentGroup(d, s, p, y) {
          const S = this.createSegments(d, s.segments, p, y);
          let R = {};
          return (
            Le(s.children, (Z, ge) => {
              R[ge] = this.createSegmentGroup(d, Z, p, y);
            }),
            new ht(S, R)
          );
        }
        createSegments(d, s, p, y) {
          return s.map((S) =>
            S.path.startsWith(":")
              ? this.findPosParam(d, S, y)
              : this.findOrReturn(S, p),
          );
        }
        findPosParam(d, s, p) {
          const y = p[s.path.substring(1)];
          if (!y) throw new _.vHH(4001, I);
          return y;
        }
        findOrReturn(d, s) {
          let p = 0;
          for (const y of s) {
            if (y.path === d.path) return s.splice(p), y;
            p++;
          }
          return d;
        }
      }
      class Dt {}
      class En {
        constructor(d, s, p, y, S, R, Z) {
          (this.injector = d),
            (this.rootComponentType = s),
            (this.config = p),
            (this.urlTree = y),
            (this.url = S),
            (this.paramsInheritanceStrategy = R),
            (this.urlSerializer = Z);
        }
        recognize() {
          const d = Ji(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo),
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            d,
            je,
          ).pipe(
            (0, oe.U)((s) => {
              if (null === s) return null;
              const p = new si(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  je,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {},
                ),
                y = new Xn(p, s),
                S = new Gi(this.url, y);
              return this.inheritParamsAndData(S._root), S;
            }),
          );
        }
        inheritParamsAndData(d) {
          const s = d.value,
            p = So(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(p.params)),
            (s.data = Object.freeze(p.data)),
            d.children.forEach((y) => this.inheritParamsAndData(y));
        }
        processSegmentGroup(d, s, p, y) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.processChildren(d, s, p)
            : this.processSegment(d, s, p, p.segments, y);
        }
        processChildren(d, s, p) {
          return (0, M.D)(Object.keys(p.children)).pipe(
            (0, ae.b)((y) => {
              const S = p.children[y],
                R = Qi(s, y);
              return this.processSegmentGroup(d, R, S, y);
            }),
            Pe((y, S) => (y && S ? (y.push(...S), y) : null)),
            (function ue(l, d = !1) {
              return (0, Te.e)((s, p) => {
                let y = 0;
                s.subscribe(
                  (0, Ye.x)(p, (S) => {
                    const R = l(S, y++);
                    (R || d) && p.next(S), !R && p.complete();
                  }),
                );
              });
            })((y) => null !== y),
            rt(null),
            Me(),
            (0, oe.U)((y) => {
              if (null === y) return null;
              const S = Wn(y);
              return (
                (function Hn(l) {
                  l.sort((d, s) =>
                    d.value.outlet === je
                      ? -1
                      : s.value.outlet === je
                        ? 1
                        : d.value.outlet.localeCompare(s.value.outlet),
                  );
                })(S),
                S
              );
            }),
          );
        }
        processSegment(d, s, p, y, S) {
          return (0, M.D)(s).pipe(
            (0, ae.b)((R) =>
              this.processSegmentAgainstRoute(R._injector ?? d, R, p, y, S),
            ),
            Ze((R) => !!R),
            (0, me.K)((R) => {
              if (Oi(R)) return b(p, y, S) ? (0, P.of)([]) : (0, P.of)(null);
              throw R;
            }),
          );
        }
        processSegmentAgainstRoute(d, s, p, y, S) {
          if (s.redirectTo || !u(s, p, y, S)) return (0, P.of)(null);
          let R;
          if ("**" === s.path) {
            const Z = y.length > 0 ? tr(y).parameters : {},
              ge = D(p) + y.length,
              We = new si(
                y,
                Z,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                x(s),
                $t(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                h(p),
                ge,
                k(s),
              );
            R = (0, P.of)({
              snapshot: We,
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            R = vo(p, s, y, d).pipe(
              (0, oe.U)(
                ({
                  matched: Z,
                  consumedSegments: ge,
                  remainingSegments: We,
                  parameters: qe,
                }) => {
                  if (!Z) return null;
                  const kt = D(p) + ge.length;
                  return {
                    snapshot: new si(
                      ge,
                      qe,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      x(s),
                      $t(s),
                      s.component ?? s._loadedComponent ?? null,
                      s,
                      h(p),
                      kt,
                      k(s),
                    ),
                    consumedSegments: ge,
                    remainingSegments: We,
                  };
                },
              ),
            );
          return R.pipe(
            (0, U.w)((Z) => {
              if (null === Z) return (0, P.of)(null);
              const {
                snapshot: ge,
                consumedSegments: We,
                remainingSegments: qe,
              } = Z;
              d = s._injector ?? d;
              const kt = s._loadedInjector ?? d,
                Vn = (function On(l) {
                  return l.children
                    ? l.children
                    : l.loadChildren
                      ? l._loadedRoutes
                      : [];
                })(s),
                { segmentGroup: Bi, slicedSegments: fi } = Ji(
                  p,
                  We,
                  qe,
                  Vn.filter((pr) => void 0 === pr.redirectTo),
                );
              if (0 === fi.length && Bi.hasChildren())
                return this.processChildren(kt, Vn, Bi).pipe(
                  (0, oe.U)((pr) => (null === pr ? null : [new Xn(ge, pr)])),
                );
              if (0 === Vn.length && 0 === fi.length)
                return (0, P.of)([new Xn(ge, [])]);
              const hi = $t(s) === S;
              return this.processSegment(kt, Vn, Bi, fi, hi ? je : S).pipe(
                (0, oe.U)((pr) => (null === pr ? null : [new Xn(ge, pr)])),
              );
            }),
          );
        }
      }
      function xr(l) {
        const d = l.value.routeConfig;
        return d && "" === d.path && void 0 === d.redirectTo;
      }
      function Wn(l) {
        const d = [],
          s = new Set();
        for (const p of l) {
          if (!xr(p)) {
            d.push(p);
            continue;
          }
          const y = d.find((S) => p.value.routeConfig === S.value.routeConfig);
          void 0 !== y ? (y.children.push(...p.children), s.add(y)) : d.push(p);
        }
        for (const p of s) {
          const y = Wn(p.children);
          d.push(new Xn(p.value, y));
        }
        return d.filter((p) => !s.has(p));
      }
      function h(l) {
        let d = l;
        for (; d._sourceSegment; ) d = d._sourceSegment;
        return d;
      }
      function D(l) {
        let d = l,
          s = d._segmentIndexShift ?? 0;
        for (; d._sourceSegment; )
          (d = d._sourceSegment), (s += d._segmentIndexShift ?? 0);
        return s - 1;
      }
      function x(l) {
        return l.data || {};
      }
      function k(l) {
        return l.resolve || {};
      }
      function Je(l) {
        return "string" == typeof l.title || null === l.title;
      }
      function St(l) {
        return (0, U.w)((d) => {
          const s = l(d);
          return s ? (0, M.D)(s).pipe((0, oe.U)(() => d)) : (0, P.of)(d);
        });
      }
      const Rt = new _.OlP("ROUTES");
      let Cn = (() => {
        class l {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = (0, _.f3M)(_.Sil));
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s))
              return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, P.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const p = tn(s.loadComponent()).pipe(
                (0, oe.U)(fr),
                (0, ce.b)((S) => {
                  this.onLoadEndListener && this.onLoadEndListener(s),
                    (s._loadedComponent = S);
                }),
                (0, Ge.x)(() => {
                  this.componentLoaders.delete(s);
                }),
              ),
              y = new st(p, () => new Oe.x()).pipe(De());
            return this.componentLoaders.set(s, y), y;
          }
          loadChildren(s, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes)
              return (0, P.of)({
                routes: p._loadedRoutes,
                injector: p._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const S = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, oe.U)((Z) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let ge,
                    We,
                    qe = !1;
                  Array.isArray(Z)
                    ? (We = Z)
                    : ((ge = Z.create(s).injector),
                      (We = an(ge.get(Rt, [], _.XFs.Self | _.XFs.Optional))));
                  return { routes: We.map(Dr), injector: ge };
                }),
                (0, Ge.x)(() => {
                  this.childrenLoaders.delete(p);
                }),
              ),
              R = new st(S, () => new Oe.x()).pipe(De());
            return this.childrenLoaders.set(p, R), R;
          }
          loadModuleFactoryOrRoutes(s) {
            return tn(s()).pipe(
              (0, oe.U)(fr),
              (0, xe.z)((p) =>
                p instanceof _.YKP || Array.isArray(p)
                  ? (0, P.of)(p)
                  : (0, M.D)(this.compiler.compileModuleAsync(p)),
              ),
            );
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      function fr(l) {
        return (function At(l) {
          return l && "object" == typeof l && "default" in l;
        })(l)
          ? l.default
          : l;
      }
      let Yt = (() => {
        class l {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Oe.x()),
              (this.configLoader = (0, _.f3M)(Cn)),
              (this.environmentInjector = (0, _.f3M)(_.lqb)),
              (this.urlSerializer = (0, _.f3M)(_t)),
              (this.rootContexts = (0, _.f3M)(wi)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, P.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (y) =>
                this.events.next(new vr(y))),
              (this.configLoader.onLoadStartListener = (y) =>
                this.events.next(new qr(y)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(s) {
            const p = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...s, id: p });
          }
          setupNavigations(s) {
            return (
              (this.transitions = new K.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: s.currentUrlTree,
                currentRawUrl: s.currentUrlTree,
                extractedUrl: s.urlHandlingStrategy.extract(s.currentUrlTree),
                urlAfterRedirects: s.urlHandlingStrategy.extract(
                  s.currentUrlTree,
                ),
                rawUrl: s.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Ot,
                restoredState: null,
                currentSnapshot: s.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: s.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, Ie.h)((p) => 0 !== p.id),
                (0, oe.U)((p) => ({
                  ...p,
                  extractedUrl: s.urlHandlingStrategy.extract(p.rawUrl),
                })),
                (0, U.w)((p) => {
                  let y = !1,
                    S = !1;
                  return (0, P.of)(p).pipe(
                    (0, ce.b)((R) => {
                      this.currentNavigation = {
                        id: R.id,
                        initialUrl: R.rawUrl,
                        extractedUrl: R.extractedUrl,
                        trigger: R.source,
                        extras: R.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, U.w)((R) => {
                      const Z = s.browserUrlTree.toString(),
                        ge =
                          !s.navigated ||
                          R.extractedUrl.toString() !== Z ||
                          Z !== s.currentUrlTree.toString();
                      if (
                        !ge &&
                        "reload" !==
                          (R.extras.onSameUrlNavigation ??
                            s.onSameUrlNavigation)
                      ) {
                        const qe = "";
                        return (
                          this.events.next(
                            new Qn(R.id, s.serializeUrl(p.rawUrl), qe, 0),
                          ),
                          (s.rawUrlTree = R.rawUrl),
                          R.resolve(null),
                          Ee.E
                        );
                      }
                      if (s.urlHandlingStrategy.shouldProcessUrl(R.rawUrl))
                        return (
                          hr(R.source) && (s.browserUrlTree = R.extractedUrl),
                          (0, P.of)(R).pipe(
                            (0, U.w)((qe) => {
                              const kt = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new ar(
                                    qe.id,
                                    this.urlSerializer.serialize(
                                      qe.extractedUrl,
                                    ),
                                    qe.source,
                                    qe.restoredState,
                                  ),
                                ),
                                kt !== this.transitions?.getValue()
                                  ? Ee.E
                                  : Promise.resolve(qe)
                              );
                            }),
                            (function yt(l, d, s, p) {
                              return (0, U.w)((y) =>
                                (function Xe(l, d, s, p, y) {
                                  return new dt(l, d, s, p, y).apply();
                                })(l, d, s, y.extractedUrl, p).pipe(
                                  (0, oe.U)((S) => ({
                                    ...y,
                                    urlAfterRedirects: S,
                                  })),
                                ),
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              s.config,
                            ),
                            (0, ce.b)((qe) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: qe.urlAfterRedirects,
                              }),
                                (p.urlAfterRedirects = qe.urlAfterRedirects);
                            }),
                            (function ie(l, d, s, p, y) {
                              return (0, xe.z)((S) =>
                                (function Wt(
                                  l,
                                  d,
                                  s,
                                  p,
                                  y,
                                  S,
                                  R = "emptyOnly",
                                ) {
                                  return new En(l, d, s, p, y, R, S)
                                    .recognize()
                                    .pipe(
                                      (0, U.w)((Z) =>
                                        null === Z
                                          ? (function Ut(l) {
                                              return new H.y((d) => d.error(l));
                                            })(new Dt())
                                          : (0, P.of)(Z),
                                      ),
                                    );
                                })(
                                  l,
                                  d,
                                  s,
                                  S.urlAfterRedirects,
                                  p.serialize(S.urlAfterRedirects),
                                  p,
                                  y,
                                ).pipe(
                                  (0, oe.U)((R) => ({
                                    ...S,
                                    targetSnapshot: R,
                                  })),
                                ),
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              s.config,
                              this.urlSerializer,
                              s.paramsInheritanceStrategy,
                            ),
                            (0, ce.b)((qe) => {
                              if (
                                ((p.targetSnapshot = qe.targetSnapshot),
                                "eager" === s.urlUpdateStrategy)
                              ) {
                                if (!qe.extras.skipLocationChange) {
                                  const Vn = s.urlHandlingStrategy.merge(
                                    qe.urlAfterRedirects,
                                    qe.rawUrl,
                                  );
                                  s.setBrowserUrl(Vn, qe);
                                }
                                s.browserUrlTree = qe.urlAfterRedirects;
                              }
                              const kt = new Nr(
                                qe.id,
                                this.urlSerializer.serialize(qe.extractedUrl),
                                this.urlSerializer.serialize(
                                  qe.urlAfterRedirects,
                                ),
                                qe.targetSnapshot,
                              );
                              this.events.next(kt);
                            }),
                          )
                        );
                      if (
                        ge &&
                        s.urlHandlingStrategy.shouldProcessUrl(s.rawUrlTree)
                      ) {
                        const {
                            id: qe,
                            extractedUrl: kt,
                            source: Vn,
                            restoredState: Bi,
                            extras: fi,
                          } = R,
                          hi = new ar(
                            qe,
                            this.urlSerializer.serialize(kt),
                            Vn,
                            Bi,
                          );
                        this.events.next(hi);
                        const pr = qo(kt, this.rootComponentType).snapshot;
                        return (
                          (p = {
                            ...R,
                            targetSnapshot: pr,
                            urlAfterRedirects: kt,
                            extras: {
                              ...fi,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          }),
                          (0, P.of)(p)
                        );
                      }
                      {
                        const qe = "";
                        return (
                          this.events.next(
                            new Qn(R.id, s.serializeUrl(p.extractedUrl), qe, 1),
                          ),
                          (s.rawUrlTree = R.rawUrl),
                          R.resolve(null),
                          Ee.E
                        );
                      }
                    }),
                    (0, ce.b)((R) => {
                      const Z = new An(
                        R.id,
                        this.urlSerializer.serialize(R.extractedUrl),
                        this.urlSerializer.serialize(R.urlAfterRedirects),
                        R.targetSnapshot,
                      );
                      this.events.next(Z);
                    }),
                    (0, oe.U)(
                      (R) =>
                        (p = {
                          ...R,
                          guards: Ro(
                            R.targetSnapshot,
                            R.currentSnapshot,
                            this.rootContexts,
                          ),
                        }),
                    ),
                    (function Ri(l, d) {
                      return (0, xe.z)((s) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: y,
                          guards: {
                            canActivateChecks: S,
                            canDeactivateChecks: R,
                          },
                        } = s;
                        return 0 === R.length && 0 === S.length
                          ? (0, P.of)({ ...s, guardsResult: !0 })
                          : (function dr(l, d, s, p) {
                              return (0, M.D)(l).pipe(
                                (0, xe.z)((y) =>
                                  (function Dn(l, d, s, p, y) {
                                    const S =
                                      d && d.routeConfig
                                        ? d.routeConfig.canDeactivate
                                        : null;
                                    if (!S || 0 === S.length)
                                      return (0, P.of)(!0);
                                    const R = S.map((Z) => {
                                      const ge = Ur(d) ?? y,
                                        We = $r(Z, ge);
                                      return tn(
                                        (function Fo(l) {
                                          return l && Vr(l.canDeactivate);
                                        })(We)
                                          ? We.canDeactivate(l, d, s, p)
                                          : ge.runInContext(() =>
                                              We(l, d, s, p),
                                            ),
                                      ).pipe(Ze());
                                    });
                                    return (0, P.of)(R).pipe(zr());
                                  })(y.component, y.route, s, d, p),
                                ),
                                Ze((y) => !0 !== y, !0),
                              );
                            })(R, p, y, l).pipe(
                              (0, xe.z)((Z) =>
                                Z &&
                                (function Po(l) {
                                  return "boolean" == typeof l;
                                })(Z)
                                  ? (function bo(l, d, s, p) {
                                      return (0, M.D)(d).pipe(
                                        (0, ae.b)((y) =>
                                          (0, J.z)(
                                            (function ns(l, d) {
                                              return (
                                                null !== l && d && d(new Gt(l)),
                                                (0, P.of)(!0)
                                              );
                                            })(y.route.parent, p),
                                            (function yo(l, d) {
                                              return (
                                                null !== l && d && d(new Xr(l)),
                                                (0, P.of)(!0)
                                              );
                                            })(y.route, p),
                                            (function Xi(l, d, s) {
                                              const p = d[d.length - 1],
                                                S = d
                                                  .slice(0, d.length - 1)
                                                  .reverse()
                                                  .map((R) =>
                                                    (function Sr(l) {
                                                      const d = l.routeConfig
                                                        ? l.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return d && 0 !== d.length
                                                        ? { node: l, guards: d }
                                                        : null;
                                                    })(R),
                                                  )
                                                  .filter((R) => null !== R)
                                                  .map((R) =>
                                                    (0, q.P)(() => {
                                                      const Z = R.guards.map(
                                                        (ge) => {
                                                          const We =
                                                              Ur(R.node) ?? s,
                                                            qe = $r(ge, We);
                                                          return tn(
                                                            (function ts(l) {
                                                              return (
                                                                l &&
                                                                Vr(
                                                                  l.canActivateChild,
                                                                )
                                                              );
                                                            })(qe)
                                                              ? qe.canActivateChild(
                                                                  p,
                                                                  l,
                                                                )
                                                              : We.runInContext(
                                                                  () =>
                                                                    qe(p, l),
                                                                ),
                                                          ).pipe(Ze());
                                                        },
                                                      );
                                                      return (0, P.of)(Z).pipe(
                                                        zr(),
                                                      );
                                                    }),
                                                  );
                                              return (0, P.of)(S).pipe(zr());
                                            })(l, y.path, s),
                                            (function No(l, d, s) {
                                              const p = d.routeConfig
                                                ? d.routeConfig.canActivate
                                                : null;
                                              if (!p || 0 === p.length)
                                                return (0, P.of)(!0);
                                              const y = p.map((S) =>
                                                (0, q.P)(() => {
                                                  const R = Ur(d) ?? s,
                                                    Z = $r(S, R);
                                                  return tn(
                                                    (function _o(l) {
                                                      return (
                                                        l && Vr(l.canActivate)
                                                      );
                                                    })(Z)
                                                      ? Z.canActivate(d, l)
                                                      : R.runInContext(() =>
                                                          Z(d, l),
                                                        ),
                                                  ).pipe(Ze());
                                                }),
                                              );
                                              return (0, P.of)(y).pipe(zr());
                                            })(l, y.route, s),
                                          ),
                                        ),
                                        Ze((y) => !0 !== y, !0),
                                      );
                                    })(p, S, l, d)
                                  : (0, P.of)(Z),
                              ),
                              (0, oe.U)((Z) => ({ ...s, guardsResult: Z })),
                            );
                      });
                    })(this.environmentInjector, (R) => this.events.next(R)),
                    (0, ce.b)((R) => {
                      if (
                        ((p.guardsResult = R.guardsResult), ut(R.guardsResult))
                      )
                        throw Yi(0, R.guardsResult);
                      const Z = new yi(
                        R.id,
                        this.urlSerializer.serialize(R.extractedUrl),
                        this.urlSerializer.serialize(R.urlAfterRedirects),
                        R.targetSnapshot,
                        !!R.guardsResult,
                      );
                      this.events.next(Z);
                    }),
                    (0, Ie.h)(
                      (R) =>
                        !!R.guardsResult ||
                        (s.restoreHistory(R),
                        this.cancelNavigationTransition(R, "", 3),
                        !1),
                    ),
                    St((R) => {
                      if (R.guards.canActivateChecks.length)
                        return (0, P.of)(R).pipe(
                          (0, ce.b)((Z) => {
                            const ge = new Lr(
                              Z.id,
                              this.urlSerializer.serialize(Z.extractedUrl),
                              this.urlSerializer.serialize(Z.urlAfterRedirects),
                              Z.targetSnapshot,
                            );
                            this.events.next(ge);
                          }),
                          (0, U.w)((Z) => {
                            let ge = !1;
                            return (0, P.of)(Z).pipe(
                              (function ve(l, d) {
                                return (0, xe.z)((s) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: y },
                                  } = s;
                                  if (!y.length) return (0, P.of)(s);
                                  let S = 0;
                                  return (0, M.D)(y).pipe(
                                    (0, ae.b)((R) =>
                                      (function tt(l, d, s, p) {
                                        const y = l.routeConfig,
                                          S = l._resolve;
                                        return (
                                          void 0 !== y?.title &&
                                            !Je(y) &&
                                            (S[Lt] = y.title),
                                          (function Ae(l, d, s, p) {
                                            const y = (function Ne(l) {
                                              return [
                                                ...Object.keys(l),
                                                ...Object.getOwnPropertySymbols(
                                                  l,
                                                ),
                                              ];
                                            })(l);
                                            if (0 === y.length)
                                              return (0, P.of)({});
                                            const S = {};
                                            return (0, M.D)(y).pipe(
                                              (0, xe.z)((R) =>
                                                (function ke(l, d, s, p) {
                                                  const y = Ur(d) ?? p,
                                                    S = $r(l, y);
                                                  return tn(
                                                    S.resolve
                                                      ? S.resolve(d, s)
                                                      : y.runInContext(() =>
                                                          S(d, s),
                                                        ),
                                                  );
                                                })(l[R], d, s, p).pipe(
                                                  Ze(),
                                                  (0, ce.b)((Z) => {
                                                    S[R] = Z;
                                                  }),
                                                ),
                                              ),
                                              le(1),
                                              (0, Fe.h)(S),
                                              (0, me.K)((R) =>
                                                Oi(R) ? Ee.E : (0, G._)(R),
                                              ),
                                            );
                                          })(S, l, d, p).pipe(
                                            (0, oe.U)(
                                              (R) => (
                                                (l._resolvedData = R),
                                                (l.data = So(l, s).resolve),
                                                y &&
                                                  Je(y) &&
                                                  (l.data[Lt] = y.title),
                                                null
                                              ),
                                            ),
                                          )
                                        );
                                      })(R.route, p, l, d),
                                    ),
                                    (0, ce.b)(() => S++),
                                    le(1),
                                    (0, xe.z)((R) =>
                                      S === y.length ? (0, P.of)(s) : Ee.E,
                                    ),
                                  );
                                });
                              })(
                                s.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              (0, ce.b)({
                                next: () => (ge = !0),
                                complete: () => {
                                  ge ||
                                    (s.restoreHistory(Z),
                                    this.cancelNavigationTransition(Z, "", 2));
                                },
                              }),
                            );
                          }),
                          (0, ce.b)((Z) => {
                            const ge = new cr(
                              Z.id,
                              this.urlSerializer.serialize(Z.extractedUrl),
                              this.urlSerializer.serialize(Z.urlAfterRedirects),
                              Z.targetSnapshot,
                            );
                            this.events.next(ge);
                          }),
                        );
                    }),
                    St((R) => {
                      const Z = (ge) => {
                        const We = [];
                        ge.routeConfig?.loadComponent &&
                          !ge.routeConfig._loadedComponent &&
                          We.push(
                            this.configLoader
                              .loadComponent(ge.routeConfig)
                              .pipe(
                                (0, ce.b)((qe) => {
                                  ge.component = qe;
                                }),
                                (0, oe.U)(() => {}),
                              ),
                          );
                        for (const qe of ge.children) We.push(...Z(qe));
                        return We;
                      };
                      return (0, te.a)(Z(R.targetSnapshot.root)).pipe(
                        rt(),
                        (0, we.q)(1),
                      );
                    }),
                    St(() => this.afterPreactivation()),
                    (0, oe.U)((R) => {
                      const Z = (function Fs(l, d, s) {
                        const p = Ki(l, d._root, s ? s._root : void 0);
                        return new fo(p, d);
                      })(
                        s.routeReuseStrategy,
                        R.targetSnapshot,
                        R.currentRouterState,
                      );
                      return (p = { ...R, targetRouterState: Z });
                    }),
                    (0, ce.b)((R) => {
                      (s.currentUrlTree = R.urlAfterRedirects),
                        (s.rawUrlTree = s.urlHandlingStrategy.merge(
                          R.urlAfterRedirects,
                          R.rawUrl,
                        )),
                        (s.routerState = R.targetRouterState),
                        "deferred" === s.urlUpdateStrategy &&
                          (R.extras.skipLocationChange ||
                            s.setBrowserUrl(s.rawUrlTree, R),
                          (s.browserUrlTree = R.urlAfterRedirects));
                    }),
                    ((l, d, s) =>
                      (0, oe.U)(
                        (p) => (
                          new Kt(
                            d,
                            p.targetRouterState,
                            p.currentRouterState,
                            s,
                          ).activate(l),
                          p
                        ),
                      ))(this.rootContexts, s.routeReuseStrategy, (R) =>
                      this.events.next(R),
                    ),
                    (0, we.q)(1),
                    (0, ce.b)({
                      next: (R) => {
                        (y = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (s.navigated = !0),
                          this.events.next(
                            new mt(
                              R.id,
                              this.urlSerializer.serialize(R.extractedUrl),
                              this.urlSerializer.serialize(s.currentUrlTree),
                            ),
                          ),
                          s.titleStrategy?.updateTitle(
                            R.targetRouterState.snapshot,
                          ),
                          R.resolve(!0);
                      },
                      complete: () => {
                        y = !0;
                      },
                    }),
                    (0, Ge.x)(() => {
                      y || S || this.cancelNavigationTransition(p, "", 1),
                        this.currentNavigation?.id === p.id &&
                          (this.currentNavigation = null);
                    }),
                    (0, me.K)((R) => {
                      if (((S = !0), Ao(R))) {
                        ho(R) || ((s.navigated = !0), s.restoreHistory(p, !0));
                        const Z = new Fr(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          R.message,
                          R.cancellationCode,
                        );
                        if ((this.events.next(Z), ho(R))) {
                          const ge = s.urlHandlingStrategy.merge(
                              R.url,
                              s.rawUrlTree,
                            ),
                            We = {
                              skipLocationChange: p.extras.skipLocationChange,
                              replaceUrl:
                                "eager" === s.urlUpdateStrategy || hr(p.source),
                            };
                          s.scheduleNavigation(ge, Ot, null, We, {
                            resolve: p.resolve,
                            reject: p.reject,
                            promise: p.promise,
                          });
                        } else p.resolve(!1);
                      } else {
                        s.restoreHistory(p, !0);
                        const Z = new Mr(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          R,
                          p.targetSnapshot ?? void 0,
                        );
                        this.events.next(Z);
                        try {
                          p.resolve(s.errorHandler(R));
                        } catch (ge) {
                          p.reject(ge);
                        }
                      }
                      return Ee.E;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(s, p, y) {
            const S = new Fr(
              s.id,
              this.urlSerializer.serialize(s.extractedUrl),
              p,
              y,
            );
            this.events.next(S), s.resolve(!1);
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      function hr(l) {
        return l !== Ot;
      }
      let Mn = (() => {
          class l {
            buildTitle(s) {
              let p,
                y = s.root;
              for (; void 0 !== y; )
                (p = this.getResolvedTitleForRoute(y) ?? p),
                  (y = y.children.find((S) => S.outlet === je));
              return p;
            }
            getResolvedTitleForRoute(s) {
              return s.data[Lt];
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: function () {
                return (0, _.f3M)(Ni);
              },
              providedIn: "root",
            })),
            l
          );
        })(),
        Ni = (() => {
          class l extends Mn {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const p = this.buildTitle(s);
              void 0 !== p && this.title.setTitle(p);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(_.LFG(it.Dx));
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })(),
        Li = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: function () {
                return (0, _.f3M)(ga);
              },
              providedIn: "root",
            })),
            l
          );
        })();
      class vu {
        shouldDetach(d) {
          return !1;
        }
        store(d, s) {}
        shouldAttach(d) {
          return !1;
        }
        retrieve(d) {
          return null;
        }
        shouldReuseRoute(d, s) {
          return d.routeConfig === s.routeConfig;
        }
      }
      let ga = (() => {
        class l extends vu {}
        return (
          (l.ɵfac = (function () {
            let d;
            return function (p) {
              return (d || (d = _.n5z(l)))(p || l);
            };
          })()),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const rs = new _.OlP("", { providedIn: "root", factory: () => ({}) });
      let ti = (() => {
          class l {}
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: function () {
                return (0, _.f3M)(pc);
              },
              providedIn: "root",
            })),
            l
          );
        })(),
        pc = (() => {
          class l {
            shouldProcessUrl(s) {
              return !0;
            }
            extract(s) {
              return s;
            }
            merge(s, p) {
              return s;
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })();
      function Ns(l) {
        throw l;
      }
      function ba(l, d, s) {
        return d.parse("/");
      }
      const Ls = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        ks = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let wr = (() => {
          class l {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              if ("computed" === this.canceledNavigationResolution)
                return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, _.f3M)(_.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, _.f3M)(rs, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || Ns),
                (this.malformedUriErrorHandler =
                  this.options.malformedUriErrorHandler || ba),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, _.f3M)(ti)),
                (this.routeReuseStrategy = (0, _.f3M)(Li)),
                (this.urlCreationStrategy = (0, _.f3M)(zn)),
                (this.titleStrategy = (0, _.f3M)(Mn)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || "ignore"),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || "emptyOnly"),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || "deferred"),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || "replace"),
                (this.config = an((0, _.f3M)(Rt, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, _.f3M)(Yt)),
                (this.urlSerializer = (0, _.f3M)(_t)),
                (this.location = (0, _.f3M)(Be.Ye)),
                (this.isNgZoneEnabled =
                  (0, _.f3M)(_.R0b) instanceof _.R0b &&
                  _.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new zt()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = qo(this.currentUrlTree, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (s) => {
                    (this.lastSuccessfulId = s.id),
                      (this.currentPageId = this.browserPageId ?? 0);
                  },
                  (s) => {
                    this.console.warn(`Unhandled Navigation Error: ${s}`);
                  },
                );
            }
            resetRootComponentType(s) {
              (this.routerState.root.component = s),
                (this.navigationTransitions.rootComponentType = s);
            }
            initialNavigation() {
              if (
                (this.setUpLocationChangeListener(),
                !this.navigationTransitions.hasRequestedNavigation)
              ) {
                const s = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), Ot, s);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((s) => {
                  const p = "popstate" === s.type ? "popstate" : "hashchange";
                  "popstate" === p &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(s.url, p, s.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(s, p, y) {
              const S = { replaceUrl: !0 },
                R = y?.navigationId ? y : null;
              if (y) {
                const ge = { ...y };
                delete ge.navigationId,
                  delete ge.ɵrouterPageId,
                  0 !== Object.keys(ge).length && (S.state = ge);
              }
              const Z = this.parseUrl(s);
              this.scheduleNavigation(Z, p, R, S);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(s) {
              (this.config = s.map(Dr)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(s, p = {}) {
              const {
                  relativeTo: y,
                  queryParams: S,
                  fragment: R,
                  queryParamsHandling: Z,
                  preserveFragment: ge,
                } = p,
                We = ge ? this.currentUrlTree.fragment : R;
              let qe = null;
              switch (Z) {
                case "merge":
                  qe = { ...this.currentUrlTree.queryParams, ...S };
                  break;
                case "preserve":
                  qe = this.currentUrlTree.queryParams;
                  break;
                default:
                  qe = S || null;
              }
              return (
                null !== qe && (qe = this.removeEmptyProps(qe)),
                this.urlCreationStrategy.createUrlTree(
                  y,
                  this.routerState,
                  this.currentUrlTree,
                  s,
                  qe,
                  We ?? null,
                )
              );
            }
            navigateByUrl(s, p = { skipLocationChange: !1 }) {
              const y = ut(s) ? s : this.parseUrl(s),
                S = this.urlHandlingStrategy.merge(y, this.rawUrlTree);
              return this.scheduleNavigation(S, Ot, null, p);
            }
            navigate(s, p = { skipLocationChange: !1 }) {
              return (
                (function ya(l) {
                  for (let d = 0; d < l.length; d++) {
                    const s = l[d];
                    if (null == s) throw new _.vHH(4008, false);
                  }
                })(s),
                this.navigateByUrl(this.createUrlTree(s, p), p)
              );
            }
            serializeUrl(s) {
              return this.urlSerializer.serialize(s);
            }
            parseUrl(s) {
              let p;
              try {
                p = this.urlSerializer.parse(s);
              } catch (y) {
                p = this.malformedUriErrorHandler(y, this.urlSerializer, s);
              }
              return p;
            }
            isActive(s, p) {
              let y;
              if (
                ((y = !0 === p ? { ...Ls } : !1 === p ? { ...ks } : p), ut(s))
              )
                return nr(this.currentUrlTree, s, y);
              const S = this.parseUrl(s);
              return nr(this.currentUrlTree, S, y);
            }
            removeEmptyProps(s) {
              return Object.keys(s).reduce((p, y) => {
                const S = s[y];
                return null != S && (p[y] = S), p;
              }, {});
            }
            scheduleNavigation(s, p, y, S, R) {
              if (this.disposed) return Promise.resolve(!1);
              let Z, ge, We, qe;
              return (
                R
                  ? ((Z = R.resolve), (ge = R.reject), (We = R.promise))
                  : (We = new Promise((kt, Vn) => {
                      (Z = kt), (ge = Vn);
                    })),
                (qe =
                  "computed" === this.canceledNavigationResolution
                    ? y && y.ɵrouterPageId
                      ? y.ɵrouterPageId
                      : (this.browserPageId ?? 0) + 1
                    : 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: qe,
                  source: p,
                  restoredState: y,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: s,
                  extras: S,
                  resolve: Z,
                  reject: ge,
                  promise: We,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                We.catch((kt) => Promise.reject(kt))
              );
            }
            setBrowserUrl(s, p) {
              const y = this.urlSerializer.serialize(s);
              if (
                this.location.isCurrentPathEqualTo(y) ||
                p.extras.replaceUrl
              ) {
                const R = {
                  ...p.extras.state,
                  ...this.generateNgRouterState(p.id, this.browserPageId),
                };
                this.location.replaceState(y, "", R);
              } else {
                const S = {
                  ...p.extras.state,
                  ...this.generateNgRouterState(p.id, p.targetPageId),
                };
                this.location.go(y, "", S);
              }
            }
            restoreHistory(s, p = !1) {
              if ("computed" === this.canceledNavigationResolution) {
                const S =
                  this.currentPageId -
                  (this.browserPageId ?? this.currentPageId);
                0 !== S
                  ? this.location.historyGo(S)
                  : this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === S &&
                    (this.resetState(s),
                    (this.browserUrlTree = s.currentUrlTree),
                    this.resetUrlToCurrentUrlTree());
              } else
                "replace" === this.canceledNavigationResolution &&
                  (p && this.resetState(s), this.resetUrlToCurrentUrlTree());
            }
            resetState(s) {
              (this.routerState = s.currentRouterState),
                (this.currentUrlTree = s.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  s.rawUrl,
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId,
                ),
              );
            }
            generateNgRouterState(s, p) {
              return "computed" === this.canceledNavigationResolution
                ? { navigationId: s, ɵrouterPageId: p }
                : { navigationId: s };
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = _.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })(),
        ko = (() => {
          class l {
            constructor(s, p, y, S, R, Z) {
              (this.router = s),
                (this.route = p),
                (this.tabIndexAttribute = y),
                (this.renderer = S),
                (this.el = R),
                (this.locationStrategy = Z),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new Oe.x());
              const ge = R.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = "a" === ge || "area" === ge),
                this.isAnchorElement
                  ? (this.subscription = s.events.subscribe((We) => {
                      We instanceof mt && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl("0");
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, _.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, _.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, _.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(s) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", s);
            }
            ngOnChanges(s) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(s) {
              null != s
                ? ((this.commands = Array.isArray(s) ? s : [s]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(s, p, y, S, R) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== s ||
                      p ||
                      y ||
                      S ||
                      R ||
                      ("string" == typeof this.target &&
                        "_self" != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree),
                    )
                  : null;
              const s =
                null === this.href
                  ? null
                  : (0, _.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      "href",
                    );
              this.applyAttributeValue("href", s);
            }
            applyAttributeValue(s, p) {
              const y = this.renderer,
                S = this.el.nativeElement;
              null !== p ? y.setAttribute(S, s, p) : y.removeAttribute(S, s);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(
                _.Y36(wr),
                _.Y36(Jr),
                _.$8M("tabindex"),
                _.Y36(_.Qsj),
                _.Y36(_.SBq),
                _.Y36(Be.S$),
              );
            }),
            (l.ɵdir = _.lG2({
              type: l,
              selectors: [["", "routerLink", ""]],
              hostVars: 1,
              hostBindings: function (s, p) {
                1 & s &&
                  _.NdJ("click", function (S) {
                    return p.onClick(
                      S.button,
                      S.ctrlKey,
                      S.shiftKey,
                      S.altKey,
                      S.metaKey,
                    );
                  }),
                  2 & s && _.uIk("target", p.target);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [_.TTD],
            })),
            l
          );
        })(),
        Bs = (() => {
          class l {
            get isActive() {
              return this._isActive;
            }
            constructor(s, p, y, S, R) {
              (this.router = s),
                (this.element = p),
                (this.renderer = y),
                (this.cdr = S),
                (this.link = R),
                (this.classes = []),
                (this._isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new _.vpe()),
                (this.routerEventsSubscription = s.events.subscribe((Z) => {
                  Z instanceof mt && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, P.of)(this.links.changes, (0, P.of)(null))
                .pipe((0, ft.J)())
                .subscribe((s) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const s = [...this.links.toArray(), this.link]
                .filter((p) => !!p)
                .map((p) => p.onChanges);
              this.linkInputChangesSubscription = (0, M.D)(s)
                .pipe((0, ft.J)())
                .subscribe((p) => {
                  this._isActive !== this.isLinkActive(this.router)(p) &&
                    this.update();
                });
            }
            set routerLinkActive(s) {
              const p = Array.isArray(s) ? s : s.split(" ");
              this.classes = p.filter((y) => !!y);
            }
            ngOnChanges(s) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const s = this.hasActiveLinks();
                  this._isActive !== s &&
                    ((this._isActive = s),
                    this.cdr.markForCheck(),
                    this.classes.forEach((p) => {
                      s
                        ? this.renderer.addClass(this.element.nativeElement, p)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            p,
                          );
                    }),
                    s && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          "aria-current",
                          this.ariaCurrentWhenActive.toString(),
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          "aria-current",
                        ),
                    this.isActiveChange.emit(s));
                });
            }
            isLinkActive(s) {
              const p = (function va(l) {
                return !!l.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (y) => !!y.urlTree && s.isActive(y.urlTree, p);
            }
            hasActiveLinks() {
              const s = this.isLinkActive(this.router);
              return (this.link && s(this.link)) || this.links.some(s);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(
                _.Y36(wr),
                _.Y36(_.SBq),
                _.Y36(_.Qsj),
                _.Y36(_.sBO),
                _.Y36(ko, 8),
              );
            }),
            (l.ɵdir = _.lG2({
              type: l,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (s, p, y) {
                if ((1 & s && _.Suo(y, ko, 5), 2 & s)) {
                  let S;
                  _.iGM((S = _.CRH())) && (p.links = S);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                ariaCurrentWhenActive: "ariaCurrentWhenActive",
                routerLinkActive: "routerLinkActive",
              },
              outputs: { isActiveChange: "isActiveChange" },
              exportAs: ["routerLinkActive"],
              standalone: !0,
              features: [_.TTD],
            })),
            l
          );
        })();
      class Da {}
      let mc = (() => {
        class l {
          constructor(s, p, y, S, R) {
            (this.router = s),
              (this.injector = y),
              (this.preloadingStrategy = S),
              (this.loader = R);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, Ie.h)((s) => s instanceof mt),
                (0, ae.b)(() => this.preload()),
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(s, p) {
            const y = [];
            for (const S of p) {
              S.providers &&
                !S._injector &&
                (S._injector = (0, _.MMx)(S.providers, s, `Route: ${S.path}`));
              const R = S._injector ?? s,
                Z = S._loadedInjector ?? R;
              ((S.loadChildren && !S._loadedRoutes && void 0 === S.canLoad) ||
                (S.loadComponent && !S._loadedComponent)) &&
                y.push(this.preloadConfig(R, S)),
                (S.children || S._loadedRoutes) &&
                  y.push(this.processRoutes(Z, S.children ?? S._loadedRoutes));
            }
            return (0, M.D)(y).pipe((0, ft.J)());
          }
          preloadConfig(s, p) {
            return this.preloadingStrategy.preload(p, () => {
              let y;
              y =
                p.loadChildren && void 0 === p.canLoad
                  ? this.loader.loadChildren(s, p)
                  : (0, P.of)(null);
              const S = y.pipe(
                (0, xe.z)((R) =>
                  null === R
                    ? (0, P.of)(void 0)
                    : ((p._loadedRoutes = R.routes),
                      (p._loadedInjector = R.injector),
                      this.processRoutes(R.injector ?? s, R.routes)),
                ),
              );
              if (p.loadComponent && !p._loadedComponent) {
                const R = this.loader.loadComponent(p);
                return (0, M.D)([S, R]).pipe((0, ft.J)());
              }
              return S;
            });
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(
              _.LFG(wr),
              _.LFG(_.Sil),
              _.LFG(_.lqb),
              _.LFG(Da),
              _.LFG(Cn),
            );
          }),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const is = new _.OlP("");
      let js = (() => {
        class l {
          constructor(s, p, y, S, R = {}) {
            (this.urlSerializer = s),
              (this.transitions = p),
              (this.viewportScroller = y),
              (this.zone = S),
              (this.options = R),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (R.scrollPositionRestoration =
                R.scrollPositionRestoration || "disabled"),
              (R.anchorScrolling = R.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof ar
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = s.navigationTrigger),
                  (this.restoredId = s.restoredState
                    ? s.restoredState.navigationId
                    : 0))
                : s instanceof mt &&
                  ((this.lastId = s.id),
                  this.scheduleScrollEvent(
                    s,
                    this.urlSerializer.parse(s.urlAfterRedirects).fragment,
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof oi &&
                (s.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(s.position)
                  : s.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(s.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(s, p) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new oi(
                      s,
                      "popstate" === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      p,
                    ),
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (l.ɵfac = function (s) {
            _.$Z();
          }),
          (l.ɵprov = _.Yz7({ token: l, factory: l.ɵfac })),
          l
        );
      })();
      var $n = (() => (
        (($n = $n || {})[($n.COMPLETE = 0)] = "COMPLETE"),
        ($n[($n.FAILED = 1)] = "FAILED"),
        ($n[($n.REDIRECTING = 2)] = "REDIRECTING"),
        $n
      ))();
      const to = !1;
      function di(l, d) {
        return { ɵkind: l, ɵproviders: d };
      }
      const Bo = new _.OlP("", { providedIn: "root", factory: () => !1 });
      function Hs() {
        const l = (0, _.f3M)(_.zs3);
        return (d) => {
          const s = l.get(_.z2F);
          if (d !== s.components[0]) return;
          const p = l.get(wr),
            y = l.get(os);
          1 === l.get(ki) && p.initialNavigation(),
            l.get(bc, null, _.XFs.Optional)?.setUpPreloading(),
            l.get(is, null, _.XFs.Optional)?.init(),
            p.resetRootComponentType(s.componentTypes[0]),
            y.closed || (y.next(), y.complete(), y.unsubscribe());
        };
      }
      const os = new _.OlP(to ? "bootstrap done indicator" : "", {
          factory: () => new Oe.x(),
        }),
        ki = new _.OlP(to ? "initial navigation" : "", {
          providedIn: "root",
          factory: () => 1,
        });
      function en() {
        let l = [];
        return (
          (l = to
            ? [
                {
                  provide: _.Xts,
                  multi: !0,
                  useFactory: () => {
                    const d = (0, _.f3M)(wr);
                    return () =>
                      d.events.subscribe((s) => {
                        console.group?.(`Router Event: ${s.constructor.name}`),
                          console.log(
                            (function vi(l) {
                              if (!("type" in l))
                                return `Unknown Router Event: ${l.constructor.name}`;
                              switch (l.type) {
                                case 14:
                                  return `ActivationEnd(path: '${
                                    l.snapshot.routeConfig?.path || ""
                                  }')`;
                                case 13:
                                  return `ActivationStart(path: '${
                                    l.snapshot.routeConfig?.path || ""
                                  }')`;
                                case 12:
                                  return `ChildActivationEnd(path: '${
                                    l.snapshot.routeConfig?.path || ""
                                  }')`;
                                case 11:
                                  return `ChildActivationStart(path: '${
                                    l.snapshot.routeConfig?.path || ""
                                  }')`;
                                case 8:
                                  return `GuardsCheckEnd(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}', state: ${l.state}, shouldActivate: ${l.shouldActivate})`;
                                case 7:
                                  return `GuardsCheckStart(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}', state: ${l.state})`;
                                case 2:
                                  return `NavigationCancel(id: ${l.id}, url: '${l.url}')`;
                                case 16:
                                  return `NavigationSkipped(id: ${l.id}, url: '${l.url}')`;
                                case 1:
                                  return `NavigationEnd(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}')`;
                                case 3:
                                  return `NavigationError(id: ${l.id}, url: '${l.url}', error: ${l.error})`;
                                case 0:
                                  return `NavigationStart(id: ${l.id}, url: '${l.url}')`;
                                case 6:
                                  return `ResolveEnd(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}', state: ${l.state})`;
                                case 5:
                                  return `ResolveStart(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}', state: ${l.state})`;
                                case 10:
                                  return `RouteConfigLoadEnd(path: ${l.route.path})`;
                                case 9:
                                  return `RouteConfigLoadStart(path: ${l.route.path})`;
                                case 4:
                                  return `RoutesRecognized(id: ${l.id}, url: '${l.url}', urlAfterRedirects: '${l.urlAfterRedirects}', state: ${l.state})`;
                                case 15:
                                  return `Scroll(anchor: '${
                                    l.anchor
                                  }', position: '${
                                    l.position
                                      ? `${l.position[0]}, ${l.position[1]}`
                                      : null
                                  }')`;
                              }
                            })(s),
                          ),
                          console.log(s),
                          console.groupEnd?.();
                      });
                  },
                },
              ]
            : []),
          di(1, l)
        );
      }
      const bc = new _.OlP(to ? "router preloader" : "");
      function Eu(l) {
        return di(0, [
          { provide: bc, useExisting: mc },
          { provide: Da, useExisting: l },
        ]);
      }
      const ss = !1,
        Co = new _.OlP(
          ss ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD",
        ),
        wu = [
          Be.Ye,
          { provide: _t, useClass: or },
          wr,
          wi,
          {
            provide: Jr,
            useFactory: function wa(l) {
              return l.routerState.root;
            },
            deps: [wr],
          },
          Cn,
          ss ? { provide: Bo, useValue: !0 } : [],
        ];
      function Cu() {
        return new _.PXZ("Router", wr);
      }
      let Ln = (() => {
        class l {
          constructor(s) {}
          static forRoot(s, p) {
            return {
              ngModule: l,
              providers: [
                wu,
                ss && p?.enableTracing ? en().ɵproviders : [],
                { provide: Rt, multi: !0, useValue: s },
                {
                  provide: Co,
                  useFactory: Ar,
                  deps: [[wr, new _.FiY(), new _.tp0()]],
                },
                { provide: rs, useValue: p || {} },
                p?.useHash
                  ? { provide: Be.S$, useClass: Be.Do }
                  : { provide: Be.S$, useClass: Be.b0 },
                {
                  provide: is,
                  useFactory: () => {
                    const l = (0, _.f3M)(Be.EM),
                      d = (0, _.f3M)(_.R0b),
                      s = (0, _.f3M)(rs),
                      p = (0, _.f3M)(Yt),
                      y = (0, _.f3M)(_t);
                    return (
                      s.scrollOffset && l.setOffset(s.scrollOffset),
                      new js(y, p, l, d, s)
                    );
                  },
                },
                p?.preloadingStrategy
                  ? Eu(p.preloadingStrategy).ɵproviders
                  : [],
                { provide: _.PXZ, multi: !0, useFactory: Cu },
                p?.initialNavigation ? no(p) : [],
                [
                  { provide: Vs, useFactory: Hs },
                  { provide: _.tb, multi: !0, useExisting: Vs },
                ],
              ],
            };
          }
          static forChild(s) {
            return {
              ngModule: l,
              providers: [{ provide: Rt, multi: !0, useValue: s }],
            };
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(_.LFG(Co, 8));
          }),
          (l.ɵmod = _.oAB({ type: l })),
          (l.ɵinj = _.cJS({ imports: [Mi] })),
          l
        );
      })();
      function Ar(l) {
        if (ss && l)
          throw new _.vHH(
            4007,
            "The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.",
          );
        return "guarded";
      }
      function no(l) {
        return [
          "disabled" === l.initialNavigation
            ? di(3, [
                {
                  provide: _.ip1,
                  multi: !0,
                  useFactory: () => {
                    const d = (0, _.f3M)(wr);
                    return () => {
                      d.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: ki, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === l.initialNavigation
            ? di(2, [
                { provide: ki, useValue: 0 },
                {
                  provide: _.ip1,
                  multi: !0,
                  deps: [_.zs3],
                  useFactory: (d) => {
                    const s = d.get(Be.V_, Promise.resolve());
                    return () =>
                      s.then(
                        () =>
                          new Promise((p) => {
                            const y = d.get(wr),
                              S = d.get(os);
                            (function gc(l, d) {
                              l.events
                                .pipe(
                                  (0, Ie.h)(
                                    (s) =>
                                      s instanceof mt ||
                                      s instanceof Fr ||
                                      s instanceof Mr ||
                                      s instanceof Qn,
                                  ),
                                  (0, oe.U)((s) =>
                                    s instanceof mt || s instanceof Qn
                                      ? $n.COMPLETE
                                      : s instanceof Fr &&
                                          (0 === s.code || 1 === s.code)
                                        ? $n.REDIRECTING
                                        : $n.FAILED,
                                  ),
                                  (0, Ie.h)((s) => s !== $n.REDIRECTING),
                                  (0, we.q)(1),
                                )
                                .subscribe(() => {
                                  d();
                                });
                            })(y, () => {
                              p(!0);
                            }),
                              (d.get(Yt).afterPreactivation = () => (
                                p(!0), S.closed ? (0, P.of)(void 0) : S
                              )),
                              y.initialNavigation();
                          }),
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const Vs = new _.OlP(ss ? "Router Initializer" : "");
    },
  },
  (He) => {
    He((He.s = 845));
  },
]);
