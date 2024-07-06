"use strict";
(self.webpackChunkc3_components_docs =
  self.webpackChunkc3_components_docs || []).push([
  [524],
  {
    8819: ($e, zt, y) => {
      y.d(zt, { Z: () => Qt });
      var et = y(6895),
        O = y(3848),
        i = y(4859),
        h = y(4650),
        Mt = y(3238),
        jt = y(1281),
        it = y(9646),
        gt = y(2843),
        tt = y(4128),
        L = y(727),
        Et = y(8505),
        lt = y(4004),
        Tt = y(262),
        bt = y(8746),
        mt = y(3099),
        at = y(5698),
        ct = y(529),
        G = y(1481);
      const wt = ["*"];
      let T;
      function At(v) {
        return (
          (function ot() {
            if (void 0 === T && ((T = null), typeof window < "u")) {
              const v = window;
              void 0 !== v.trustedTypes &&
                (T = v.trustedTypes.createPolicy("angular#components", {
                  createHTML: (S) => S,
                }));
            }
            return T;
          })()?.createHTML(v) || v
        );
      }
      function Ut(v) {
        return Error(`Unable to find icon with the name "${v}"`);
      }
      function $t(v) {
        return Error(
          `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${v}".`,
        );
      }
      function pt(v) {
        return Error(
          `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${v}".`,
        );
      }
      class R {
        constructor(S, u, f) {
          (this.url = S), (this.svgText = u), (this.options = f);
        }
      }
      let _t = (() => {
        class v {
          constructor(u, f, x, b) {
            (this._httpClient = u),
              (this._sanitizer = f),
              (this._errorHandler = b),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._resolvers = []),
              (this._defaultFontSetClass = [
                "material-icons",
                "mat-ligature-font",
              ]),
              (this._document = x);
          }
          addSvgIcon(u, f, x) {
            return this.addSvgIconInNamespace("", u, f, x);
          }
          addSvgIconLiteral(u, f, x) {
            return this.addSvgIconLiteralInNamespace("", u, f, x);
          }
          addSvgIconInNamespace(u, f, x, b) {
            return this._addSvgIconConfig(u, f, new R(x, null, b));
          }
          addSvgIconResolver(u) {
            return this._resolvers.push(u), this;
          }
          addSvgIconLiteralInNamespace(u, f, x, b) {
            const F = this._sanitizer.sanitize(h.q3G.HTML, x);
            if (!F) throw pt(x);
            const k = At(F);
            return this._addSvgIconConfig(u, f, new R("", k, b));
          }
          addSvgIconSet(u, f) {
            return this.addSvgIconSetInNamespace("", u, f);
          }
          addSvgIconSetLiteral(u, f) {
            return this.addSvgIconSetLiteralInNamespace("", u, f);
          }
          addSvgIconSetInNamespace(u, f, x) {
            return this._addSvgIconSetConfig(u, new R(f, null, x));
          }
          addSvgIconSetLiteralInNamespace(u, f, x) {
            const b = this._sanitizer.sanitize(h.q3G.HTML, f);
            if (!b) throw pt(f);
            const F = At(b);
            return this._addSvgIconSetConfig(u, new R("", F, x));
          }
          registerFontClassAlias(u, f = u) {
            return this._fontCssClassesByAlias.set(u, f), this;
          }
          classNameForFontAlias(u) {
            return this._fontCssClassesByAlias.get(u) || u;
          }
          setDefaultFontSetClass(...u) {
            return (this._defaultFontSetClass = u), this;
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          getSvgIconFromUrl(u) {
            const f = this._sanitizer.sanitize(h.q3G.RESOURCE_URL, u);
            if (!f) throw $t(u);
            const x = this._cachedIconsByUrl.get(f);
            return x
              ? (0, it.of)(Ft(x))
              : this._loadSvgIconFromConfig(new R(u, null)).pipe(
                  (0, Et.b)((b) => this._cachedIconsByUrl.set(f, b)),
                  (0, lt.U)((b) => Ft(b)),
                );
          }
          getNamedSvgIcon(u, f = "") {
            const x = xt(f, u);
            let b = this._svgIconConfigs.get(x);
            if (b) return this._getSvgFromConfig(b);
            if (((b = this._getIconConfigFromResolvers(f, u)), b))
              return this._svgIconConfigs.set(x, b), this._getSvgFromConfig(b);
            const F = this._iconSetConfigs.get(f);
            return F ? this._getSvgFromIconSetConfigs(u, F) : (0, gt._)(Ut(x));
          }
          ngOnDestroy() {
            (this._resolvers = []),
              this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear();
          }
          _getSvgFromConfig(u) {
            return u.svgText
              ? (0, it.of)(Ft(this._svgElementFromConfig(u)))
              : this._loadSvgIconFromConfig(u).pipe((0, lt.U)((f) => Ft(f)));
          }
          _getSvgFromIconSetConfigs(u, f) {
            const x = this._extractIconWithNameFromAnySet(u, f);
            if (x) return (0, it.of)(x);
            const b = f
              .filter((F) => !F.svgText)
              .map((F) =>
                this._loadSvgIconSetFromConfig(F).pipe(
                  (0, Tt.K)((k) => {
                    const st = `Loading icon set URL: ${this._sanitizer.sanitize(
                      h.q3G.RESOURCE_URL,
                      F.url,
                    )} failed: ${k.message}`;
                    return (
                      this._errorHandler.handleError(new Error(st)),
                      (0, it.of)(null)
                    );
                  }),
                ),
              );
            return (0, tt.D)(b).pipe(
              (0, lt.U)(() => {
                const F = this._extractIconWithNameFromAnySet(u, f);
                if (!F) throw Ut(u);
                return F;
              }),
            );
          }
          _extractIconWithNameFromAnySet(u, f) {
            for (let x = f.length - 1; x >= 0; x--) {
              const b = f[x];
              if (b.svgText && b.svgText.toString().indexOf(u) > -1) {
                const F = this._svgElementFromConfig(b),
                  k = this._extractSvgIconFromSet(F, u, b.options);
                if (k) return k;
              }
            }
            return null;
          }
          _loadSvgIconFromConfig(u) {
            return this._fetchIcon(u).pipe(
              (0, Et.b)((f) => (u.svgText = f)),
              (0, lt.U)(() => this._svgElementFromConfig(u)),
            );
          }
          _loadSvgIconSetFromConfig(u) {
            return u.svgText
              ? (0, it.of)(null)
              : this._fetchIcon(u).pipe((0, Et.b)((f) => (u.svgText = f)));
          }
          _extractSvgIconFromSet(u, f, x) {
            const b = u.querySelector(`[id="${f}"]`);
            if (!b) return null;
            const F = b.cloneNode(!0);
            if ((F.removeAttribute("id"), "svg" === F.nodeName.toLowerCase()))
              return this._setSvgAttributes(F, x);
            if ("symbol" === F.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(F), x);
            const k = this._svgElementFromString(At("<svg></svg>"));
            return k.appendChild(F), this._setSvgAttributes(k, x);
          }
          _svgElementFromString(u) {
            const f = this._document.createElement("DIV");
            f.innerHTML = u;
            const x = f.querySelector("svg");
            if (!x) throw Error("<svg> tag not found");
            return x;
          }
          _toSvgElement(u) {
            const f = this._svgElementFromString(At("<svg></svg>")),
              x = u.attributes;
            for (let b = 0; b < x.length; b++) {
              const { name: F, value: k } = x[b];
              "id" !== F && f.setAttribute(F, k);
            }
            for (let b = 0; b < u.childNodes.length; b++)
              u.childNodes[b].nodeType === this._document.ELEMENT_NODE &&
                f.appendChild(u.childNodes[b].cloneNode(!0));
            return f;
          }
          _setSvgAttributes(u, f) {
            return (
              u.setAttribute("fit", ""),
              u.setAttribute("height", "100%"),
              u.setAttribute("width", "100%"),
              u.setAttribute("preserveAspectRatio", "xMidYMid meet"),
              u.setAttribute("focusable", "false"),
              f && f.viewBox && u.setAttribute("viewBox", f.viewBox),
              u
            );
          }
          _fetchIcon(u) {
            const { url: f, options: x } = u,
              b = x?.withCredentials ?? !1;
            if (!this._httpClient)
              throw (function qt() {
                return Error(
                  "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.",
                );
              })();
            if (null == f) throw Error(`Cannot fetch icon from URL "${f}".`);
            const F = this._sanitizer.sanitize(h.q3G.RESOURCE_URL, f);
            if (!F) throw $t(f);
            const k = this._inProgressUrlFetches.get(F);
            if (k) return k;
            const ut = this._httpClient
              .get(F, { responseType: "text", withCredentials: b })
              .pipe(
                (0, lt.U)((st) => At(st)),
                (0, bt.x)(() => this._inProgressUrlFetches.delete(F)),
                (0, mt.B)(),
              );
            return this._inProgressUrlFetches.set(F, ut), ut;
          }
          _addSvgIconConfig(u, f, x) {
            return this._svgIconConfigs.set(xt(u, f), x), this;
          }
          _addSvgIconSetConfig(u, f) {
            const x = this._iconSetConfigs.get(u);
            return x ? x.push(f) : this._iconSetConfigs.set(u, [f]), this;
          }
          _svgElementFromConfig(u) {
            if (!u.svgElement) {
              const f = this._svgElementFromString(u.svgText);
              this._setSvgAttributes(f, u.options), (u.svgElement = f);
            }
            return u.svgElement;
          }
          _getIconConfigFromResolvers(u, f) {
            for (let x = 0; x < this._resolvers.length; x++) {
              const b = this._resolvers[x](f, u);
              if (b)
                return Wt(b) ? new R(b.url, null, b.options) : new R(b, null);
            }
          }
        }
        return (
          (v.ɵfac = function (u) {
            return new (u || v)(
              h.LFG(ct.eN, 8),
              h.LFG(G.H7),
              h.LFG(et.K0, 8),
              h.LFG(h.qLn),
            );
          }),
          (v.ɵprov = h.Yz7({ token: v, factory: v.ɵfac, providedIn: "root" })),
          v
        );
      })();
      function Ft(v) {
        return v.cloneNode(!0);
      }
      function xt(v, S) {
        return v + ":" + S;
      }
      function Wt(v) {
        return !(!v.url || !v.options);
      }
      const Xt = (0, Mt.pj)(
          class {
            constructor(v) {
              this._elementRef = v;
            }
          },
        ),
        ie = new h.OlP("MAT_ICON_DEFAULT_OPTIONS"),
        ne = new h.OlP("mat-icon-location", {
          providedIn: "root",
          factory: function _e() {
            const v = (0, h.f3M)(et.K0),
              S = v ? v.location : null;
            return { getPathname: () => (S ? S.pathname + S.search : "") };
          },
        }),
        yt = [
          "clip-path",
          "color-profile",
          "src",
          "cursor",
          "fill",
          "filter",
          "marker",
          "marker-start",
          "marker-mid",
          "marker-end",
          "mask",
          "stroke",
        ],
        oe = yt.map((v) => `[${v}]`).join(", "),
        Bt = /^url\(['"]?#(.*?)['"]?\)$/;
      let xe = (() => {
          class v extends Xt {
            get inline() {
              return this._inline;
            }
            set inline(u) {
              this._inline = (0, jt.Ig)(u);
            }
            get svgIcon() {
              return this._svgIcon;
            }
            set svgIcon(u) {
              u !== this._svgIcon &&
                (u
                  ? this._updateSvgIcon(u)
                  : this._svgIcon && this._clearSvgElement(),
                (this._svgIcon = u));
            }
            get fontSet() {
              return this._fontSet;
            }
            set fontSet(u) {
              const f = this._cleanupFontValue(u);
              f !== this._fontSet &&
                ((this._fontSet = f), this._updateFontIconClasses());
            }
            get fontIcon() {
              return this._fontIcon;
            }
            set fontIcon(u) {
              const f = this._cleanupFontValue(u);
              f !== this._fontIcon &&
                ((this._fontIcon = f), this._updateFontIconClasses());
            }
            constructor(u, f, x, b, F, k) {
              super(u),
                (this._iconRegistry = f),
                (this._location = b),
                (this._errorHandler = F),
                (this._inline = !1),
                (this._previousFontSetClass = []),
                (this._currentIconFetch = L.w0.EMPTY),
                k &&
                  (k.color && (this.color = this.defaultColor = k.color),
                  k.fontSet && (this.fontSet = k.fontSet)),
                x || u.nativeElement.setAttribute("aria-hidden", "true");
            }
            _splitIconName(u) {
              if (!u) return ["", ""];
              const f = u.split(":");
              switch (f.length) {
                case 1:
                  return ["", f[0]];
                case 2:
                  return f;
                default:
                  throw Error(`Invalid icon name: "${u}"`);
              }
            }
            ngOnInit() {
              this._updateFontIconClasses();
            }
            ngAfterViewChecked() {
              const u = this._elementsWithExternalReferences;
              if (u && u.size) {
                const f = this._location.getPathname();
                f !== this._previousPath &&
                  ((this._previousPath = f), this._prependPathToReferences(f));
              }
            }
            ngOnDestroy() {
              this._currentIconFetch.unsubscribe(),
                this._elementsWithExternalReferences &&
                  this._elementsWithExternalReferences.clear();
            }
            _usingFontIcon() {
              return !this.svgIcon;
            }
            _setSvgElement(u) {
              this._clearSvgElement();
              const f = this._location.getPathname();
              (this._previousPath = f),
                this._cacheChildrenWithExternalReferences(u),
                this._prependPathToReferences(f),
                this._elementRef.nativeElement.appendChild(u);
            }
            _clearSvgElement() {
              const u = this._elementRef.nativeElement;
              let f = u.childNodes.length;
              for (
                this._elementsWithExternalReferences &&
                this._elementsWithExternalReferences.clear();
                f--;

              ) {
                const x = u.childNodes[f];
                (1 !== x.nodeType || "svg" === x.nodeName.toLowerCase()) &&
                  x.remove();
              }
            }
            _updateFontIconClasses() {
              if (!this._usingFontIcon()) return;
              const u = this._elementRef.nativeElement,
                f = (
                  this.fontSet
                    ? this._iconRegistry
                        .classNameForFontAlias(this.fontSet)
                        .split(/ +/)
                    : this._iconRegistry.getDefaultFontSetClass()
                ).filter((x) => x.length > 0);
              this._previousFontSetClass.forEach((x) => u.classList.remove(x)),
                f.forEach((x) => u.classList.add(x)),
                (this._previousFontSetClass = f),
                this.fontIcon !== this._previousFontIconClass &&
                  !f.includes("mat-ligature-font") &&
                  (this._previousFontIconClass &&
                    u.classList.remove(this._previousFontIconClass),
                  this.fontIcon && u.classList.add(this.fontIcon),
                  (this._previousFontIconClass = this.fontIcon));
            }
            _cleanupFontValue(u) {
              return "string" == typeof u ? u.trim().split(" ")[0] : u;
            }
            _prependPathToReferences(u) {
              const f = this._elementsWithExternalReferences;
              f &&
                f.forEach((x, b) => {
                  x.forEach((F) => {
                    b.setAttribute(F.name, `url('${u}#${F.value}')`);
                  });
                });
            }
            _cacheChildrenWithExternalReferences(u) {
              const f = u.querySelectorAll(oe),
                x = (this._elementsWithExternalReferences =
                  this._elementsWithExternalReferences || new Map());
              for (let b = 0; b < f.length; b++)
                yt.forEach((F) => {
                  const k = f[b],
                    ut = k.getAttribute(F),
                    st = ut ? ut.match(Bt) : null;
                  if (st) {
                    let Ot = x.get(k);
                    Ot || ((Ot = []), x.set(k, Ot)),
                      Ot.push({ name: F, value: st[1] });
                  }
                });
            }
            _updateSvgIcon(u) {
              if (
                ((this._svgNamespace = null),
                (this._svgName = null),
                this._currentIconFetch.unsubscribe(),
                u)
              ) {
                const [f, x] = this._splitIconName(u);
                f && (this._svgNamespace = f),
                  x && (this._svgName = x),
                  (this._currentIconFetch = this._iconRegistry
                    .getNamedSvgIcon(x, f)
                    .pipe((0, at.q)(1))
                    .subscribe(
                      (b) => this._setSvgElement(b),
                      (b) => {
                        this._errorHandler.handleError(
                          new Error(
                            `Error retrieving icon ${f}:${x}! ${b.message}`,
                          ),
                        );
                      },
                    ));
              }
            }
          }
          return (
            (v.ɵfac = function (u) {
              return new (u || v)(
                h.Y36(h.SBq),
                h.Y36(_t),
                h.$8M("aria-hidden"),
                h.Y36(ne),
                h.Y36(h.qLn),
                h.Y36(ie, 8),
              );
            }),
            (v.ɵcmp = h.Xpm({
              type: v,
              selectors: [["mat-icon"]],
              hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
              hostVars: 8,
              hostBindings: function (u, f) {
                2 & u &&
                  (h.uIk(
                    "data-mat-icon-type",
                    f._usingFontIcon() ? "font" : "svg",
                  )("data-mat-icon-name", f._svgName || f.fontIcon)(
                    "data-mat-icon-namespace",
                    f._svgNamespace || f.fontSet,
                  )("fontIcon", f._usingFontIcon() ? f.fontIcon : null),
                  h.ekj("mat-icon-inline", f.inline)(
                    "mat-icon-no-color",
                    "primary" !== f.color &&
                      "accent" !== f.color &&
                      "warn" !== f.color,
                  ));
              },
              inputs: {
                color: "color",
                inline: "inline",
                svgIcon: "svgIcon",
                fontSet: "fontSet",
                fontIcon: "fontIcon",
              },
              exportAs: ["matIcon"],
              features: [h.qOj],
              ngContentSelectors: wt,
              decls: 1,
              vars: 0,
              template: function (u, f) {
                1 & u && (h.F$t(), h.Hsn(0));
              },
              styles: [
                ".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            v
          );
        })(),
        se = (() => {
          class v {}
          return (
            (v.ɵfac = function (u) {
              return new (u || v)();
            }),
            (v.ɵmod = h.oAB({ type: v })),
            (v.ɵinj = h.cJS({ imports: [Mt.BQ, Mt.BQ] })),
            v
          );
        })();
      function ye(v, S) {
        1 & v && h.Hsn(0);
      }
      const ve = ["*"];
      let Ce = (() => {
        class v {
          constructor(u) {
            this._viewContainerRef = u;
          }
          ngAfterViewInit() {
            console.log(
              this.template.createEmbeddedView(null).rootNodes[1].innerHTML,
            );
          }
        }
        return (
          (v.ɵfac = function (u) {
            return new (u || v)(h.Y36(h.s_b));
          }),
          (v.ɵcmp = h.Xpm({
            type: v,
            selectors: [["display-html"]],
            viewQuery: function (u, f) {
              if ((1 & u && h.Gf(h.Rgc, 5), 2 & u)) {
                let x;
                h.iGM((x = h.CRH())) && (f.template = x.first);
              }
            },
            standalone: !0,
            features: [h.jDz],
            ngContentSelectors: ve,
            decls: 1,
            vars: 0,
            template: function (u, f) {
              1 & u && (h.F$t(), h.YNc(0, ye, 1, 0, "ng-template"));
            },
            dependencies: [et.ez],
          })),
          v
        );
      })();
      function re(v, S) {
        1 & v &&
          (h.TgZ(0, "div", 6)(1, "mat-tab-group")(2, "mat-tab", 7)(
            3,
            "display-html",
          ),
          h.Hsn(4, 2),
          h.qZA()(),
          h.TgZ(5, "mat-tab", 8),
          h.Hsn(6, 3),
          h.qZA(),
          h.TgZ(7, "mat-tab", 9),
          h.Hsn(8, 4),
          h.qZA()()());
      }
      const Pt = [
          [["", "title", ""]],
          [["", "example", ""]],
          [["", "html", ""]],
          [["", "css", ""]],
          [["", "ts", ""]],
        ],
        le = ["[title]", "[example]", "[html]", "[css]", "[ts]"];
      let Qt = (() => {
        class v {
          constructor() {
            this.sourceView = !1;
          }
          toggleSourceView() {
            this.sourceView = !this.sourceView;
          }
        }
        return (
          (v.ɵfac = function (u) {
            return new (u || v)();
          }),
          (v.ɵcmp = h.Xpm({
            type: v,
            selectors: [["example-viewer"]],
            hostAttrs: [
              1,
              "example-viewer",
              "pa-1",
              "rounded-sm",
              "stroked",
              "mat-elevation-z2",
            ],
            standalone: !0,
            features: [h.jDz],
            ngContentSelectors: le,
            decls: 10,
            vars: 1,
            consts: [
              [1, "example-viewer-header"],
              [1, "example-viewer-header-buttons"],
              ["mat-icon-button", "", 3, "click"],
              [1, "example-viewer-content"],
              ["class", "example-viewer-source", 4, "ngIf"],
              [1, "example-viewer-example"],
              [1, "example-viewer-source"],
              ["label", "HTML"],
              ["label", "CSS"],
              ["label", "TS"],
            ],
            template: function (u, f) {
              1 & u &&
                (h.F$t(Pt),
                h.TgZ(0, "div", 0),
                h.Hsn(1),
                h.TgZ(2, "div", 1)(3, "button", 2),
                h.NdJ("click", function () {
                  return f.toggleSourceView();
                }),
                h.TgZ(4, "mat-icon"),
                h._uU(5, "code"),
                h.qZA()()()(),
                h.TgZ(6, "div", 3),
                h.YNc(7, re, 9, 0, "div", 4),
                h.TgZ(8, "div", 5),
                h.Hsn(9, 1),
                h.qZA()()),
                2 & u && (h.xp6(7), h.Q6J("ngIf", f.sourceView));
            },
            dependencies: [
              et.ez,
              et.O5,
              Ce,
              O.Nh,
              O.uX,
              O.SP,
              i.ot,
              i.RK,
              se,
              xe,
            ],
            styles: [
              ".example-viewer{display:block}.example-viewer .example-viewer-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}\n",
            ],
            encapsulation: 2,
          })),
          v
        );
      })();
    },
    4128: ($e, zt, y) => {
      y.d(zt, { D: () => gt });
      var et = y(9751),
        O = y(4742),
        i = y(8421),
        h = y(3269),
        Mt = y(5403),
        jt = y(3268),
        it = y(1810);
      function gt(...tt) {
        const L = (0, h.jO)(tt),
          { args: Et, keys: lt } = (0, O.D)(tt),
          Tt = new et.y((bt) => {
            const { length: mt } = Et;
            if (!mt) return void bt.complete();
            const at = new Array(mt);
            let ct = mt,
              G = mt;
            for (let wt = 0; wt < mt; wt++) {
              let T = !1;
              (0, i.Xf)(Et[wt]).subscribe(
                (0, Mt.x)(
                  bt,
                  (ot) => {
                    T || ((T = !0), G--), (at[wt] = ot);
                  },
                  () => ct--,
                  void 0,
                  () => {
                    (!ct || !T) &&
                      (G || bt.next(lt ? (0, it.n)(lt, at) : at),
                      bt.complete());
                  },
                ),
              );
            }
          });
        return L ? Tt.pipe((0, jt.Z)(L)) : Tt;
      }
    },
    3357: ($e, zt, y) => {
      function et(e, n, t, o, s, r, l) {
        try {
          var a = e[r](l),
            p = a.value;
        } catch (C) {
          return void t(C);
        }
        a.done ? n(p) : Promise.resolve(p).then(o, s);
      }
      function O(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (o, s) {
            var r = e.apply(n, t);
            function l(p) {
              et(r, o, s, l, a, "next", p);
            }
            function a(p) {
              et(r, o, s, l, a, "throw", p);
            }
            l(void 0);
          });
        };
      }
      y.d(zt, {
        pe: () => lu,
        QE: () => ko,
        Mx: () => eu,
        qd: () => nu,
        z9: () => Io,
        eG: () => gu,
        Ny: () => Lo,
        RR: () => pu,
        ZV: () => _u,
      });
      var i = y(4650),
        h = y(6895),
        Mt = y(2076),
        jt = y(4128),
        it = y(4004);
      let gt = (() => {
          class e {
            constructor(t, o) {
              (this._renderer = t),
                (this._elementRef = o),
                (this.onChange = (s) => {}),
                (this.onTouched = () => {});
            }
            setProperty(t, o) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, o);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty("disabled", t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.Qsj), i.Y36(i.SBq));
            }),
            (e.ɵdir = i.lG2({ type: e })),
            e
          );
        })(),
        tt = (() => {
          class e extends gt {}
          return (
            (e.ɵfac = (function () {
              let n;
              return function (o) {
                return (n || (n = i.n5z(e)))(o || e);
              };
            })()),
            (e.ɵdir = i.lG2({ type: e, features: [i.qOj] })),
            e
          );
        })();
      const L = new i.OlP("NgValueAccessor"),
        Tt = { provide: L, useExisting: (0, i.Gpc)(() => at), multi: !0 },
        mt = new i.OlP("CompositionEventMode");
      let at = (() => {
        class e extends gt {
          constructor(t, o, s) {
            super(t, o),
              (this._compositionMode = s),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function bt() {
                  const e = (0, h.q)() ? (0, h.q)().getUserAgent() : "";
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty("value", t ?? "");
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(i.Qsj), i.Y36(i.SBq), i.Y36(mt, 8));
          }),
          (e.ɵdir = i.lG2({
            type: e,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (t, o) {
              1 & t &&
                i.NdJ("input", function (r) {
                  return o._handleInput(r.target.value);
                })("blur", function () {
                  return o.onTouched();
                })("compositionstart", function () {
                  return o._compositionStart();
                })("compositionend", function (r) {
                  return o._compositionEnd(r.target.value);
                });
            },
            features: [i._Bn([Tt]), i.qOj],
          })),
          e
        );
      })();
      const ct = !1;
      function G(e) {
        return (
          null == e ||
          (("string" == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      function wt(e) {
        return null != e && "number" == typeof e.length;
      }
      const T = new i.OlP("NgValidators"),
        ot = new i.OlP("NgAsyncValidators"),
        At =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Ut {
        static min(n) {
          return (function qt(e) {
            return (n) => {
              if (G(n.value) || G(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e
                ? { min: { min: e, actual: n.value } }
                : null;
            };
          })(n);
        }
        static max(n) {
          return (function $t(e) {
            return (n) => {
              if (G(n.value) || G(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e
                ? { max: { max: e, actual: n.value } }
                : null;
            };
          })(n);
        }
        static required(n) {
          return (function pt(e) {
            return G(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function R(e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function _t(e) {
            return G(e.value) || At.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function Lt(e) {
            return (n) =>
              G(n.value) || !wt(n.value)
                ? null
                : n.value.length < e
                  ? {
                      minlength: {
                        requiredLength: e,
                        actualLength: n.value.length,
                      },
                    }
                  : null;
          })(n);
        }
        static maxLength(n) {
          return (function Vt(e) {
            return (n) =>
              wt(n.value) && n.value.length > e
                ? {
                    maxlength: {
                      requiredLength: e,
                      actualLength: n.value.length,
                    },
                  }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function Ft(e) {
            if (!e) return xt;
            let n, t;
            return (
              "string" == typeof e
                ? ((t = ""),
                  "^" !== e.charAt(0) && (t += "^"),
                  (t += e),
                  "$" !== e.charAt(e.length - 1) && (t += "$"),
                  (n = new RegExp(t)))
                : ((t = e.toString()), (n = e)),
              (o) => {
                if (G(o.value)) return null;
                const s = o.value;
                return n.test(s)
                  ? null
                  : { pattern: { requiredPattern: t, actualValue: s } };
              }
            );
          })(n);
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          return oe(n);
        }
        static composeAsync(n) {
          return xe(n);
        }
      }
      function xt(e) {
        return null;
      }
      function Wt(e) {
        return null != e;
      }
      function Xt(e) {
        const n = (0, i.QGY)(e) ? (0, Mt.D)(e) : e;
        if (ct && !(0, i.CqO)(n)) {
          let t = "Expected async validator to return Promise or Observable.";
          throw (
            ("object" == typeof e &&
              (t +=
                " Are you using a synchronous validator where an async validator is expected?"),
            new i.vHH(-1101, t))
          );
        }
        return n;
      }
      function ie(e) {
        let n = {};
        return (
          e.forEach((t) => {
            n = null != t ? { ...n, ...t } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function ne(e, n) {
        return n.map((t) => t(e));
      }
      function yt(e) {
        return e.map((n) =>
          (function _e(e) {
            return !e.validate;
          })(n)
            ? n
            : (t) => n.validate(t),
        );
      }
      function oe(e) {
        if (!e) return null;
        const n = e.filter(Wt);
        return 0 == n.length
          ? null
          : function (t) {
              return ie(ne(t, n));
            };
      }
      function Bt(e) {
        return null != e ? oe(yt(e)) : null;
      }
      function xe(e) {
        if (!e) return null;
        const n = e.filter(Wt);
        return 0 == n.length
          ? null
          : function (t) {
              const o = ne(t, n).map(Xt);
              return (0, jt.D)(o).pipe((0, it.U)(ie));
            };
      }
      function se(e) {
        return null != e ? xe(yt(e)) : null;
      }
      function ye(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function ve(e) {
        return e._rawValidators;
      }
      function Ce(e) {
        return e._rawAsyncValidators;
      }
      function re(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Pt(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function le(e, n) {
        const t = re(n);
        return (
          re(e).forEach((s) => {
            Pt(t, s) || t.push(s);
          }),
          t
        );
      }
      function Qt(e, n) {
        return re(n).filter((t) => !Pt(e, t));
      }
      class v {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []),
            (this._composedValidatorFn = Bt(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = se(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((n) => n()),
            (this._onDestroyCallbacks = []);
        }
        reset(n) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
        }
      }
      class S extends v {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class u extends v {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class f {
        constructor(n) {
          this._cd = n;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let F = (() => {
        class e extends f {
          constructor(t) {
            super(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(u, 2));
          }),
          (e.ɵdir = i.lG2({
            type: e,
            selectors: [
              ["", "formControlName", ""],
              ["", "ngModel", ""],
              ["", "formControl", ""],
            ],
            hostVars: 14,
            hostBindings: function (t, o) {
              2 & t &&
                i.ekj("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
                  "ng-pristine",
                  o.isPristine,
                )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
                  "ng-invalid",
                  o.isInvalid,
                )("ng-pending", o.isPending);
            },
            features: [i.qOj],
          })),
          e
        );
      })();
      function Qe(e, n) {
        return e ? `with name: '${n}'` : `at index: ${n}`;
      }
      const we = !1,
        ae = "VALID",
        Ae = "INVALID",
        g = "PENDING",
        d = "DISABLED";
      function c(e) {
        return (I(e) ? e.validators : e) || null;
      }
      function m(e, n) {
        return (I(n) ? n.asyncValidators : e) || null;
      }
      function I(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e;
      }
      function j(e, n, t) {
        const o = e.controls;
        if (!(n ? Object.keys(o) : o).length)
          throw new i.vHH(
            1e3,
            we
              ? (function Ri(e) {
                  return `\n    There are no form controls registered with this ${
                    e ? "group" : "array"
                  } yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `;
                })(n)
              : "",
          );
        if (!o[t])
          throw new i.vHH(
            1001,
            we
              ? (function Ii(e, n) {
                  return `Cannot find form control ${Qe(e, n)}`;
                })(n, t)
              : "",
          );
      }
      function E(e, n, t) {
        e._forEachChild((o, s) => {
          if (void 0 === t[s])
            throw new i.vHH(
              1002,
              we
                ? (function ki(e, n) {
                    return `Must supply a value for form control ${Qe(e, n)}`;
                  })(n, s)
                : "",
            );
        });
      }
      class W {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(n),
            this._assignAsyncValidators(t);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === ae;
        }
        get invalid() {
          return this.status === Ae;
        }
        get pending() {
          return this.status == g;
        }
        get disabled() {
          return this.status === d;
        }
        get enabled() {
          return this.status !== d;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
              ? this.parent.updateOn
              : "change";
        }
        setValidators(n) {
          this._assignValidators(n);
        }
        setAsyncValidators(n) {
          this._assignAsyncValidators(n);
        }
        addValidators(n) {
          this.setValidators(le(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(le(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(Qt(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(Qt(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return Pt(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return Pt(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0),
            this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((n) => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1),
            this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = g),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = d),
            (this.errors = null),
            this._forEachChild((o) => {
              o.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((o) => o(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = ae),
            this._forEachChild((o) => {
              o.enable({ ...n, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            }),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((o) => o(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === ae || this.status === g) &&
                this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild((t) => t._updateTreeValidity(n)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? d : ae;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            (this.status = g), (this._hasOwnPendingAsyncValidator = !0);
            const t = Xt(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe((o) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(o, { emitEvent: n });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(n, t = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(n) {
          let t = n;
          return null == t ||
            (Array.isArray(t) || (t = t.split(".")), 0 === t.length)
            ? null
            : t.reduce((o, s) => o && o._find(s), this);
        }
        getError(n, t) {
          const o = t ? this.get(t) : this;
          return o && o.errors ? o.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new i.vpe()), (this.statusChanges = new i.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? d
            : this.errors
              ? Ae
              : this._hasOwnPendingAsyncValidator ||
                  this._anyControlsHaveStatus(g)
                ? g
                : this._anyControlsHaveStatus(Ae)
                  ? Ae
                  : ae;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls((t) => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls((n) => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((n) => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          I(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return (
            !n &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(n) {
          return null;
        }
        _assignValidators(n) {
          (this._rawValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedValidatorFn = (function _(e) {
              return Array.isArray(e) ? Bt(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function A(e) {
              return Array.isArray(e) ? se(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class vt extends W {
        constructor(n, t, o) {
          super(c(t), m(o, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(n, t, o = {}) {
          this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: o.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, t = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, t, o = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: o.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          E(this, !0, n),
            Object.keys(n).forEach((o) => {
              j(this, !0, o),
                this.controls[o].setValue(n[o], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (Object.keys(n).forEach((o) => {
              const s = this.controls[o];
              s && s.patchValue(n[o], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = {}, t = {}) {
          this._forEachChild((o, s) => {
            o.reset(n[s], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (n, t, o) => ((n[o] = t.getRawValue()), n),
          );
        }
        _syncPendingControls() {
          let n = this._reduceChildren(
            !1,
            (t, o) => !!o._syncPendingControls() || t,
          );
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach((t) => {
            const o = this.controls[t];
            o && n(o, t);
          });
        }
        _setUpControls() {
          this._forEachChild((n) => {
            n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const [t, o] of Object.entries(this.controls))
            if (this.contains(t) && n(o)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, o, s) => ((o.enabled || this.disabled) && (t[s] = o.value), t),
          );
        }
        _reduceChildren(n, t) {
          let o = n;
          return (
            this._forEachChild((s, r) => {
              o = t(o, s, r);
            }),
            o
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls))
            if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(n) {
          return this.controls.hasOwnProperty(n) ? this.controls[n] : null;
        }
      }
      class V extends vt {}
      const rt = new i.OlP("CallSetDisabledState", {
          providedIn: "root",
          factory: () => Nt,
        }),
        Nt = "always";
      function Rt(e, n, t = Nt) {
        Ze(e, n),
          n.valueAccessor.writeValue(e.value),
          (e.disabled || "always" === t) &&
            n.valueAccessor.setDisabledState?.(e.disabled),
          (function Go(e, n) {
            n.valueAccessor.registerOnChange((t) => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                "change" === e.updateOn && Ti(e, n);
            });
          })(e, n),
          (function Ho(e, n) {
            const t = (o, s) => {
              n.valueAccessor.writeValue(o), s && n.viewToModelUpdate(o);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function No(e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                "blur" === e.updateOn && e._pendingChange && Ti(e, n),
                "submit" !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function Po(e, n) {
            if (n.valueAccessor.setDisabledState) {
              const t = (o) => {
                n.valueAccessor.setDisabledState(o);
              };
              e.registerOnDisabledChange(t),
                n._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(t);
                });
            }
          })(e, n);
      }
      function de(e, n, t = !0) {
        const o = () => {};
        n.valueAccessor &&
          (n.valueAccessor.registerOnChange(o),
          n.valueAccessor.registerOnTouched(o)),
          Te(e, n),
          e &&
            (n._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(() => {}));
      }
      function ce(e, n) {
        e.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function Ze(e, n) {
        const t = ve(e);
        null !== n.validator
          ? e.setValidators(ye(t, n.validator))
          : "function" == typeof t && e.setValidators([t]);
        const o = Ce(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(ye(o, n.asyncValidator))
          : "function" == typeof o && e.setAsyncValidators([o]);
        const s = () => e.updateValueAndValidity();
        ce(n._rawValidators, s), ce(n._rawAsyncValidators, s);
      }
      function Te(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const s = ve(e);
            if (Array.isArray(s) && s.length > 0) {
              const r = s.filter((l) => l !== n.validator);
              r.length !== s.length && ((t = !0), e.setValidators(r));
            }
          }
          if (null !== n.asyncValidator) {
            const s = Ce(e);
            if (Array.isArray(s) && s.length > 0) {
              const r = s.filter((l) => l !== n.asyncValidator);
              r.length !== s.length && ((t = !0), e.setAsyncValidators(r));
            }
          }
        }
        const o = () => {};
        return ce(n._rawValidators, o), ce(n._rawAsyncValidators, o), t;
      }
      function Ti(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function Li(e, n) {
        Ze(e, n);
      }
      function Vi(e, n) {
        e._syncPendingControls(),
          n.forEach((t) => {
            const o = t.control;
            "submit" === o.updateOn &&
              o._pendingChange &&
              (t.viewToModelUpdate(o._pendingValue), (o._pendingChange = !1));
          });
      }
      const qo = { provide: S, useExisting: (0, i.Gpc)(() => Le) },
        Fe = (() => Promise.resolve())();
      let Le = (() => {
        class e extends S {
          constructor(t, o, s) {
            super(),
              (this.callSetDisabledState = s),
              (this.submitted = !1),
              (this._directives = new Set()),
              (this.ngSubmit = new i.vpe()),
              (this.form = new vt({}, Bt(t), se(o)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(t) {
            Fe.then(() => {
              const o = this._findContainer(t.path);
              (t.control = o.registerControl(t.name, t.control)),
                Rt(t.control, t, this.callSetDisabledState),
                t.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.add(t);
            });
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            Fe.then(() => {
              const o = this._findContainer(t.path);
              o && o.removeControl(t.name), this._directives.delete(t);
            });
          }
          addFormGroup(t) {
            Fe.then(() => {
              const o = this._findContainer(t.path),
                s = new vt({});
              Li(s, t),
                o.registerControl(t.name, s),
                s.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(t) {
            Fe.then(() => {
              const o = this._findContainer(t.path);
              o && o.removeControl(t.name);
            });
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          updateModel(t, o) {
            Fe.then(() => {
              this.form.get(t.path).setValue(o);
            });
          }
          setValue(t) {
            this.control.setValue(t);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              Vi(this.form, this._directives),
              this.ngSubmit.emit(t),
              "dialog" === t?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(t) {
            return t.pop(), t.length ? this.form.get(t) : this.form;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(T, 10), i.Y36(ot, 10), i.Y36(rt, 8));
          }),
          (e.ɵdir = i.lG2({
            type: e,
            selectors: [
              ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
              ["ng-form"],
              ["", "ngForm", ""],
            ],
            hostBindings: function (t, o) {
              1 & t &&
                i.NdJ("submit", function (r) {
                  return o.onSubmit(r);
                })("reset", function () {
                  return o.onReset();
                });
            },
            inputs: { options: ["ngFormOptions", "options"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [i._Bn([qo]), i.qOj],
          })),
          e
        );
      })();
      function Bi(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function Pi(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          "value" in e &&
          "disabled" in e
        );
      }
      const De = class extends W {
        constructor(n = null, t, o) {
          super(c(t), m(o, t)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(n),
            this._setUpdateStrategy(t),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            I(t) &&
              (t.nonNullable || t.initialValueIsDefault) &&
              (this.defaultValue = Pi(n) ? n.value : n);
        }
        setValue(n, t = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach((o) =>
                o(this.value, !1 !== t.emitViewToModelChange),
              ),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          this.setValue(n, t);
        }
        reset(n = this.defaultValue, t = {}) {
          this._applyFormState(n),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _unregisterOnChange(n) {
          Bi(this._onChange, n);
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _unregisterOnDisabledChange(n) {
          Bi(this._onDisabledChange, n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(n) {
          Pi(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      };
      let ji = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({})),
          e
        );
      })();
      const ei = new i.OlP("NgModelWithFormControlWarning"),
        es = { provide: u, useExisting: (0, i.Gpc)(() => ii) };
      let ii = (() => {
        class e extends u {
          set isDisabled(t) {}
          constructor(t, o, s, r, l) {
            super(),
              (this._ngModelWarningConfig = r),
              (this.callSetDisabledState = l),
              (this.update = new i.vpe()),
              (this._ngModelWarningSent = !1),
              this._setValidators(t),
              this._setAsyncValidators(o),
              (this.valueAccessor = (function ti(e, n) {
                if (!n) return null;
                let t, o, s;
                return (
                  Array.isArray(n),
                  n.forEach((r) => {
                    r.constructor === at
                      ? (t = r)
                      : (function jo(e) {
                            return Object.getPrototypeOf(e.constructor) === tt;
                          })(r)
                        ? (o = r)
                        : (s = r);
                  }),
                  s || o || t || null
                );
              })(0, s));
          }
          ngOnChanges(t) {
            if (this._isControlChanged(t)) {
              const o = t.form.previousValue;
              o && de(o, this, !1),
                Rt(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function Ke(e, n) {
              if (!e.hasOwnProperty("model")) return !1;
              const t = e.model;
              return !!t.isFirstChange() || !Object.is(n, t.currentValue);
            })(t, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && de(this.form, this, !1);
          }
          get path() {
            return [];
          }
          get control() {
            return this.form;
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          _isControlChanged(t) {
            return t.hasOwnProperty("form");
          }
        }
        return (
          (e._ngModelWarningSentOnce = !1),
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Y36(T, 10),
              i.Y36(ot, 10),
              i.Y36(L, 10),
              i.Y36(ei, 8),
              i.Y36(rt, 8),
            );
          }),
          (e.ɵdir = i.lG2({
            type: e,
            selectors: [["", "formControl", ""]],
            inputs: {
              form: ["formControl", "form"],
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            exportAs: ["ngForm"],
            features: [i._Bn([es]), i.qOj, i.TTD],
          })),
          e
        );
      })();
      const is = { provide: S, useExisting: (0, i.Gpc)(() => Ve) };
      let Ve = (() => {
          class e extends S {
            constructor(t, o, s) {
              super(),
                (this.callSetDisabledState = s),
                (this.submitted = !1),
                (this._onCollectionChange = () => this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new i.vpe()),
                this._setValidators(t),
                this._setAsyncValidators(o);
            }
            ngOnChanges(t) {
              this._checkFormPresent(),
                t.hasOwnProperty("form") &&
                  (this._updateValidators(),
                  this._updateDomValue(),
                  this._updateRegistrations(),
                  (this._oldForm = this.form));
            }
            ngOnDestroy() {
              this.form &&
                (Te(this.form, this),
                this.form._onCollectionChange === this._onCollectionChange &&
                  this.form._registerOnCollectionChange(() => {}));
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            addControl(t) {
              const o = this.form.get(t.path);
              return (
                Rt(o, t, this.callSetDisabledState),
                o.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(t),
                o
              );
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              de(t.control || null, t, !1),
                (function Uo(e, n) {
                  const t = e.indexOf(n);
                  t > -1 && e.splice(t, 1);
                })(this.directives, t);
            }
            addFormGroup(t) {
              this._setUpFormContainer(t);
            }
            removeFormGroup(t) {
              this._cleanUpFormContainer(t);
            }
            getFormGroup(t) {
              return this.form.get(t.path);
            }
            addFormArray(t) {
              this._setUpFormContainer(t);
            }
            removeFormArray(t) {
              this._cleanUpFormContainer(t);
            }
            getFormArray(t) {
              return this.form.get(t.path);
            }
            updateModel(t, o) {
              this.form.get(t.path).setValue(o);
            }
            onSubmit(t) {
              return (
                (this.submitted = !0),
                Vi(this.form, this.directives),
                this.ngSubmit.emit(t),
                "dialog" === t?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t) {
              this.form.reset(t), (this.submitted = !1);
            }
            _updateDomValue() {
              this.directives.forEach((t) => {
                const o = t.control,
                  s = this.form.get(t.path);
                o !== s &&
                  (de(o || null, t),
                  ((e) => e instanceof De)(s) &&
                    (Rt(s, t, this.callSetDisabledState), (t.control = s)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(t) {
              const o = this.form.get(t.path);
              Li(o, t), o.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(t) {
              if (this.form) {
                const o = this.form.get(t.path);
                o &&
                  (function Yo(e, n) {
                    return Te(e, n);
                  })(o, t) &&
                  o.updateValueAndValidity({ emitEvent: !1 });
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(this._onCollectionChange),
                this._oldForm &&
                  this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              Ze(this.form, this), this._oldForm && Te(this._oldForm, this);
            }
            _checkFormPresent() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(T, 10), i.Y36(ot, 10), i.Y36(rt, 8));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [["", "formGroup", ""]],
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("submit", function (r) {
                    return o.onSubmit(r);
                  })("reset", function () {
                    return o.onReset();
                  });
              },
              inputs: { form: ["formGroup", "form"] },
              outputs: { ngSubmit: "ngSubmit" },
              exportAs: ["ngForm"],
              features: [i._Bn([is]), i.qOj, i.TTD],
            })),
            e
          );
        })(),
        ln = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [ji] })),
            e
          );
        })();
      class an extends W {
        constructor(n, t, o) {
          super(c(t), m(o, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(n) {
          return this.controls[this._adjustIndex(n)];
        }
        push(n, t = {}) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        insert(n, t, o = {}) {
          this.controls.splice(n, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: o.emitEvent });
        }
        removeAt(n, t = {}) {
          let o = this._adjustIndex(n);
          o < 0 && (o = 0),
            this.controls[o] &&
              this.controls[o]._registerOnCollectionChange(() => {}),
            this.controls.splice(o, 1),
            this.updateValueAndValidity({ emitEvent: t.emitEvent });
        }
        setControl(n, t, o = {}) {
          let s = this._adjustIndex(n);
          s < 0 && (s = 0),
            this.controls[s] &&
              this.controls[s]._registerOnCollectionChange(() => {}),
            this.controls.splice(s, 1),
            t && (this.controls.splice(s, 0, t), this._registerControl(t)),
            this.updateValueAndValidity({ emitEvent: o.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          E(this, !1, n),
            n.forEach((o, s) => {
              j(this, !1, s),
                this.at(s).setValue(o, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (n.forEach((o, s) => {
              this.at(s) &&
                this.at(s).patchValue(o, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = [], t = {}) {
          this._forEachChild((o, s) => {
            o.reset(n[s], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map((n) => n.getRawValue());
        }
        clear(n = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }));
        }
        _adjustIndex(n) {
          return n < 0 ? n + this.length : n;
        }
        _syncPendingControls() {
          let n = this.controls.reduce(
            (t, o) => !!o._syncPendingControls() || t,
            !1,
          );
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          this.controls.forEach((t, o) => {
            n(t, o);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((n) => n.enabled || this.disabled)
            .map((n) => n.value);
        }
        _anyControls(n) {
          return this.controls.some((t) => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild((n) => this._registerControl(n));
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this),
            n._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(n) {
          return this.at(n) ?? null;
        }
      }
      function dn(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let vs = (() => {
          class e {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const t = new e();
              return (t.useNonNullable = !0), t;
            }
            group(t, o = null) {
              const s = this._reduceControls(t);
              let r = {};
              return (
                dn(o)
                  ? (r = o)
                  : null !== o &&
                    ((r.validators = o.validator),
                    (r.asyncValidators = o.asyncValidator)),
                new vt(s, r)
              );
            }
            record(t, o = null) {
              const s = this._reduceControls(t);
              return new V(s, o);
            }
            control(t, o, s) {
              let r = {};
              return this.useNonNullable
                ? (dn(o)
                    ? (r = o)
                    : ((r.validators = o), (r.asyncValidators = s)),
                  new De(t, { ...r, nonNullable: !0 }))
                : new De(t, o, s);
            }
            array(t, o, s) {
              const r = t.map((l) => this._createControl(l));
              return new an(r, o, s);
            }
            _reduceControls(t) {
              const o = {};
              return (
                Object.keys(t).forEach((s) => {
                  o[s] = this._createControl(t[s]);
                }),
                o
              );
            }
            _createControl(t) {
              return t instanceof De || t instanceof W
                ? t
                : Array.isArray(t)
                  ? this.control(
                      t[0],
                      t.length > 1 ? t[1] : null,
                      t.length > 2 ? t[2] : null,
                    )
                  : this.control(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        Cs = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: rt, useValue: t.callSetDisabledState ?? Nt },
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [ln] })),
            e
          );
        })(),
        bs = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: ei,
                    useValue: t.warnOnNgModelWithFormControl ?? "always",
                  },
                  { provide: rt, useValue: t.callSetDisabledState ?? Nt },
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [ln] })),
            e
          );
        })();
      var Se = y(6326),
        M = y(1281),
        K = y(3353),
        Dt = y(9300),
        Be = y(5698),
        ht = y(2722),
        Ht = y(445),
        dt = y(4080),
        N = y(7579),
        ai = y(727),
        ue = y(6451);
      const cn = (0, K.Mq)();
      class ws {
        constructor(n, t) {
          (this._viewportRuler = n),
            (this._previousHTMLStyles = { top: "", left: "" }),
            (this._isEnabled = !1),
            (this._document = t);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const n = this._document.documentElement;
            (this._previousScrollPosition =
              this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = n.style.left || ""),
              (this._previousHTMLStyles.top = n.style.top || ""),
              (n.style.left = (0, M.HM)(-this._previousScrollPosition.left)),
              (n.style.top = (0, M.HM)(-this._previousScrollPosition.top)),
              n.classList.add("cdk-global-scrollblock"),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const n = this._document.documentElement,
              o = n.style,
              s = this._document.body.style,
              r = o.scrollBehavior || "",
              l = s.scrollBehavior || "";
            (this._isEnabled = !1),
              (o.left = this._previousHTMLStyles.left),
              (o.top = this._previousHTMLStyles.top),
              n.classList.remove("cdk-global-scrollblock"),
              cn && (o.scrollBehavior = s.scrollBehavior = "auto"),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top,
              ),
              cn && ((o.scrollBehavior = r), (s.scrollBehavior = l));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              "cdk-global-scrollblock",
            ) ||
            this._isEnabled
          )
            return !1;
          const t = this._document.body,
            o = this._viewportRuler.getViewportSize();
          return t.scrollHeight > o.height || t.scrollWidth > o.width;
        }
      }
      class As {
        constructor(n, t, o, s) {
          (this._scrollDispatcher = n),
            (this._ngZone = t),
            (this._viewportRuler = o),
            (this._config = s),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(n) {
          this._overlayRef = n;
        }
        enable() {
          if (this._scrollSubscription) return;
          const n = this._scrollDispatcher
            .scrolled(0)
            .pipe(
              (0, Dt.h)(
                (t) =>
                  !t ||
                  !this._overlayRef.overlayElement.contains(
                    t.getElementRef().nativeElement,
                  ),
              ),
            );
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition =
                this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = n.subscribe(() => {
                const t = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(t - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = n.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class un {
        enable() {}
        disable() {}
        attach() {}
      }
      function di(e, n) {
        return n.some(
          (t) =>
            e.bottom < t.top ||
            e.top > t.bottom ||
            e.right < t.left ||
            e.left > t.right,
        );
      }
      function fn(e, n) {
        return n.some(
          (t) =>
            e.top < t.top ||
            e.bottom > t.bottom ||
            e.left < t.left ||
            e.right > t.right,
        );
      }
      class Fs {
        constructor(n, t, o, s) {
          (this._scrollDispatcher = n),
            (this._viewportRuler = t),
            (this._ngZone = o),
            (this._config = s),
            (this._scrollSubscription = null);
        }
        attach(n) {
          this._overlayRef = n;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const t =
                      this._overlayRef.overlayElement.getBoundingClientRect(),
                    { width: o, height: s } =
                      this._viewportRuler.getViewportSize();
                  di(t, [
                    {
                      width: o,
                      height: s,
                      bottom: s,
                      right: o,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let Ds = (() => {
        class e {
          constructor(t, o, s, r) {
            (this._scrollDispatcher = t),
              (this._viewportRuler = o),
              (this._ngZone = s),
              (this.noop = () => new un()),
              (this.close = (l) =>
                new As(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  l,
                )),
              (this.block = () => new ws(this._viewportRuler, this._document)),
              (this.reposition = (l) =>
                new Fs(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  l,
                )),
              (this._document = r);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.LFG(Se.mF),
              i.LFG(Se.rL),
              i.LFG(i.R0b),
              i.LFG(h.K0),
            );
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      class ci {
        constructor(n) {
          if (
            ((this.scrollStrategy = new un()),
            (this.panelClass = ""),
            (this.hasBackdrop = !1),
            (this.backdropClass = "cdk-overlay-dark-backdrop"),
            (this.disposeOnNavigation = !1),
            n)
          ) {
            const t = Object.keys(n);
            for (const o of t) void 0 !== n[o] && (this[o] = n[o]);
          }
        }
      }
      class Ss {
        constructor(n, t) {
          (this.connectionPair = n), (this.scrollableViewProperties = t);
        }
      }
      let hn = (() => {
          class e {
            constructor(t) {
              (this._attachedOverlays = []), (this._document = t);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(t) {
              this.remove(t), this._attachedOverlays.push(t);
            }
            remove(t) {
              const o = this._attachedOverlays.indexOf(t);
              o > -1 && this._attachedOverlays.splice(o, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(h.K0));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        Ms = (() => {
          class e extends hn {
            constructor(t, o) {
              super(t),
                (this._ngZone = o),
                (this._keydownListener = (s) => {
                  const r = this._attachedOverlays;
                  for (let l = r.length - 1; l > -1; l--)
                    if (r[l]._keydownEvents.observers.length > 0) {
                      const a = r[l]._keydownEvents;
                      this._ngZone
                        ? this._ngZone.run(() => a.next(s))
                        : a.next(s);
                      break;
                    }
                });
            }
            add(t) {
              super.add(t),
                this._isAttached ||
                  (this._ngZone
                    ? this._ngZone.runOutsideAngular(() =>
                        this._document.body.addEventListener(
                          "keydown",
                          this._keydownListener,
                        ),
                      )
                    : this._document.body.addEventListener(
                        "keydown",
                        this._keydownListener,
                      ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  "keydown",
                  this._keydownListener,
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(h.K0), i.LFG(i.R0b, 8));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        Es = (() => {
          class e extends hn {
            constructor(t, o, s) {
              super(t),
                (this._platform = o),
                (this._ngZone = s),
                (this._cursorStyleIsSet = !1),
                (this._pointerDownListener = (r) => {
                  this._pointerDownEventTarget = (0, K.sA)(r);
                }),
                (this._clickListener = (r) => {
                  const l = (0, K.sA)(r),
                    a =
                      "click" === r.type && this._pointerDownEventTarget
                        ? this._pointerDownEventTarget
                        : l;
                  this._pointerDownEventTarget = null;
                  const p = this._attachedOverlays.slice();
                  for (let C = p.length - 1; C > -1; C--) {
                    const w = p[C];
                    if (
                      w._outsidePointerEvents.observers.length < 1 ||
                      !w.hasAttached()
                    )
                      continue;
                    if (
                      w.overlayElement.contains(l) ||
                      w.overlayElement.contains(a)
                    )
                      break;
                    const D = w._outsidePointerEvents;
                    this._ngZone
                      ? this._ngZone.run(() => D.next(r))
                      : D.next(r);
                  }
                });
            }
            add(t) {
              if ((super.add(t), !this._isAttached)) {
                const o = this._document.body;
                this._ngZone
                  ? this._ngZone.runOutsideAngular(() =>
                      this._addEventListeners(o),
                    )
                  : this._addEventListeners(o),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = o.style.cursor),
                    (o.style.cursor = "pointer"),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0);
              }
            }
            detach() {
              if (this._isAttached) {
                const t = this._document.body;
                t.removeEventListener(
                  "pointerdown",
                  this._pointerDownListener,
                  !0,
                ),
                  t.removeEventListener("click", this._clickListener, !0),
                  t.removeEventListener("auxclick", this._clickListener, !0),
                  t.removeEventListener("contextmenu", this._clickListener, !0),
                  this._platform.IOS &&
                    this._cursorStyleIsSet &&
                    ((t.style.cursor = this._cursorOriginalValue),
                    (this._cursorStyleIsSet = !1)),
                  (this._isAttached = !1);
              }
            }
            _addEventListeners(t) {
              t.addEventListener("pointerdown", this._pointerDownListener, !0),
                t.addEventListener("click", this._clickListener, !0),
                t.addEventListener("auxclick", this._clickListener, !0),
                t.addEventListener("contextmenu", this._clickListener, !0);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(h.K0), i.LFG(K.t4), i.LFG(i.R0b, 8));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        Pe = (() => {
          class e {
            constructor(t, o) {
              (this._platform = o), (this._document = t);
            }
            ngOnDestroy() {
              this._containerElement?.remove();
            }
            getContainerElement() {
              return (
                this._containerElement || this._createContainer(),
                this._containerElement
              );
            }
            _createContainer() {
              const t = "cdk-overlay-container";
              if (this._platform.isBrowser || (0, K.Oy)()) {
                const s = this._document.querySelectorAll(
                  `.${t}[platform="server"], .${t}[platform="test"]`,
                );
                for (let r = 0; r < s.length; r++) s[r].remove();
              }
              const o = this._document.createElement("div");
              o.classList.add(t),
                (0, K.Oy)()
                  ? o.setAttribute("platform", "test")
                  : this._platform.isBrowser ||
                    o.setAttribute("platform", "server"),
                this._document.body.appendChild(o),
                (this._containerElement = o);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(h.K0), i.LFG(K.t4));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })();
      class Me {
        constructor(n, t, o, s, r, l, a, p, C, w = !1) {
          (this._portalOutlet = n),
            (this._host = t),
            (this._pane = o),
            (this._config = s),
            (this._ngZone = r),
            (this._keyboardDispatcher = l),
            (this._document = a),
            (this._location = p),
            (this._outsideClickDispatcher = C),
            (this._animationsDisabled = w),
            (this._backdropElement = null),
            (this._backdropClick = new N.x()),
            (this._attachments = new N.x()),
            (this._detachments = new N.x()),
            (this._locationChanges = ai.w0.EMPTY),
            (this._backdropClickHandler = (D) => this._backdropClick.next(D)),
            (this._backdropTransitionendHandler = (D) => {
              this._disposeBackdrop(D.target);
            }),
            (this._keydownEvents = new N.x()),
            (this._outsidePointerEvents = new N.x()),
            s.scrollStrategy &&
              ((this._scrollStrategy = s.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = s.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(n) {
          !this._host.parentElement &&
            this._previousHostParent &&
            this._previousHostParent.appendChild(this._host);
          const t = this._portalOutlet.attach(n);
          return (
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe((0, Be.q)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose(),
              )),
            this._outsideClickDispatcher.add(this),
            "function" == typeof t?.onDestroy &&
              t.onDestroy(() => {
                this.hasAttached() &&
                  this._ngZone.runOutsideAngular(() =>
                    Promise.resolve().then(() => this.detach()),
                  );
              }),
            t
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const n = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            n
          );
        }
        dispose() {
          const n = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this._disposeBackdrop(this._backdropElement),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            this._host?.remove(),
            (this._previousHostParent = this._pane = this._host = null),
            n && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(n) {
          n !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = n),
            this.hasAttached() && (n.attach(this), this.updatePosition()));
        }
        updateSize(n) {
          (this._config = { ...this._config, ...n }), this._updateElementSize();
        }
        setDirection(n) {
          (this._config = { ...this._config, direction: n }),
            this._updateElementDirection();
        }
        addPanelClass(n) {
          this._pane && this._toggleClasses(this._pane, n, !0);
        }
        removePanelClass(n) {
          this._pane && this._toggleClasses(this._pane, n, !1);
        }
        getDirection() {
          const n = this._config.direction;
          return n ? ("string" == typeof n ? n : n.value) : "ltr";
        }
        updateScrollStrategy(n) {
          n !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = n),
            this.hasAttached() && (n.attach(this), n.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute("dir", this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const n = this._pane.style;
          (n.width = (0, M.HM)(this._config.width)),
            (n.height = (0, M.HM)(this._config.height)),
            (n.minWidth = (0, M.HM)(this._config.minWidth)),
            (n.minHeight = (0, M.HM)(this._config.minHeight)),
            (n.maxWidth = (0, M.HM)(this._config.maxWidth)),
            (n.maxHeight = (0, M.HM)(this._config.maxHeight));
        }
        _togglePointerEvents(n) {
          this._pane.style.pointerEvents = n ? "" : "none";
        }
        _attachBackdrop() {
          const n = "cdk-overlay-backdrop-showing";
          (this._backdropElement = this._document.createElement("div")),
            this._backdropElement.classList.add("cdk-overlay-backdrop"),
            this._animationsDisabled &&
              this._backdropElement.classList.add(
                "cdk-overlay-backdrop-noop-animation",
              ),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0,
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host,
            ),
            this._backdropElement.addEventListener(
              "click",
              this._backdropClickHandler,
            ),
            !this._animationsDisabled && typeof requestAnimationFrame < "u"
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(n);
                  });
                })
              : this._backdropElement.classList.add(n);
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          const n = this._backdropElement;
          if (n) {
            if (this._animationsDisabled) return void this._disposeBackdrop(n);
            n.classList.remove("cdk-overlay-backdrop-showing"),
              this._ngZone.runOutsideAngular(() => {
                n.addEventListener(
                  "transitionend",
                  this._backdropTransitionendHandler,
                );
              }),
              (n.style.pointerEvents = "none"),
              (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
                setTimeout(() => {
                  this._disposeBackdrop(n);
                }, 500),
              ));
          }
        }
        _toggleClasses(n, t, o) {
          const s = (0, M.Eq)(t || []).filter((r) => !!r);
          s.length && (o ? n.classList.add(...s) : n.classList.remove(...s));
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const n = this._ngZone.onStable
              .pipe((0, ht.R)((0, ue.T)(this._attachments, this._detachments)))
              .subscribe(() => {
                (!this._pane ||
                  !this._host ||
                  0 === this._pane.children.length) &&
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1,
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._host.remove()),
                  n.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const n = this._scrollStrategy;
          n && (n.disable(), n.detach && n.detach());
        }
        _disposeBackdrop(n) {
          n &&
            (n.removeEventListener("click", this._backdropClickHandler),
            n.removeEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            ),
            n.remove(),
            this._backdropElement === n && (this._backdropElement = null)),
            this._backdropTimeout &&
              (clearTimeout(this._backdropTimeout),
              (this._backdropTimeout = void 0));
        }
      }
      const gn = "cdk-overlay-connected-position-bounding-box",
        Os = /([A-Za-z%]+)$/;
      class Rs {
        get positions() {
          return this._preferredPositions;
        }
        constructor(n, t, o, s, r) {
          (this._viewportRuler = t),
            (this._document = o),
            (this._platform = s),
            (this._overlayContainer = r),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new N.x()),
            (this._resizeSubscription = ai.w0.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(n);
        }
        attach(n) {
          this._validatePositions(),
            n.hostElement.classList.add(gn),
            (this._overlayRef = n),
            (this._boundingBox = n.hostElement),
            (this._pane = n.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect()),
            (this._containerRect = this._overlayContainer
              .getContainerElement()
              .getBoundingClientRect());
          const n = this._originRect,
            t = this._overlayRect,
            o = this._viewportRect,
            s = this._containerRect,
            r = [];
          let l;
          for (let a of this._preferredPositions) {
            let p = this._getOriginPoint(n, s, a),
              C = this._getOverlayPoint(p, t, a),
              w = this._getOverlayFit(C, t, o, a);
            if (w.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(a, p);
            this._canFitWithFlexibleDimensions(w, C, o)
              ? r.push({
                  position: a,
                  origin: p,
                  overlayRect: t,
                  boundingBoxRect: this._calculateBoundingBoxRect(p, a),
                })
              : (!l || l.overlayFit.visibleArea < w.visibleArea) &&
                (l = {
                  overlayFit: w,
                  overlayPoint: C,
                  originPoint: p,
                  position: a,
                  overlayRect: t,
                });
          }
          if (r.length) {
            let a = null,
              p = -1;
            for (const C of r) {
              const w =
                C.boundingBoxRect.width *
                C.boundingBoxRect.height *
                (C.position.weight || 1);
              w > p && ((p = w), (a = C));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(a.position, a.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(l.position, l.originPoint)
            );
          this._applyPosition(l.position, l.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              Kt(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: "",
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(gn),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          const n = this._lastPosition;
          if (n) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect()),
              (this._containerRect = this._overlayContainer
                .getContainerElement()
                .getBoundingClientRect());
            const t = this._getOriginPoint(
              this._originRect,
              this._containerRect,
              n,
            );
            this._applyPosition(n, t);
          } else this.apply();
        }
        withScrollableContainers(n) {
          return (this._scrollables = n), this;
        }
        withPositions(n) {
          return (
            (this._preferredPositions = n),
            -1 === n.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(n) {
          return (this._viewportMargin = n), this;
        }
        withFlexibleDimensions(n = !0) {
          return (this._hasFlexibleDimensions = n), this;
        }
        withGrowAfterOpen(n = !0) {
          return (this._growAfterOpen = n), this;
        }
        withPush(n = !0) {
          return (this._canPush = n), this;
        }
        withLockedPosition(n = !0) {
          return (this._positionLocked = n), this;
        }
        setOrigin(n) {
          return (this._origin = n), this;
        }
        withDefaultOffsetX(n) {
          return (this._offsetX = n), this;
        }
        withDefaultOffsetY(n) {
          return (this._offsetY = n), this;
        }
        withTransformOriginOn(n) {
          return (this._transformOriginSelector = n), this;
        }
        _getOriginPoint(n, t, o) {
          let s, r;
          if ("center" == o.originX) s = n.left + n.width / 2;
          else {
            const l = this._isRtl() ? n.right : n.left,
              a = this._isRtl() ? n.left : n.right;
            s = "start" == o.originX ? l : a;
          }
          return (
            t.left < 0 && (s -= t.left),
            (r =
              "center" == o.originY
                ? n.top + n.height / 2
                : "top" == o.originY
                  ? n.top
                  : n.bottom),
            t.top < 0 && (r -= t.top),
            { x: s, y: r }
          );
        }
        _getOverlayPoint(n, t, o) {
          let s, r;
          return (
            (s =
              "center" == o.overlayX
                ? -t.width / 2
                : "start" === o.overlayX
                  ? this._isRtl()
                    ? -t.width
                    : 0
                  : this._isRtl()
                    ? 0
                    : -t.width),
            (r =
              "center" == o.overlayY
                ? -t.height / 2
                : "top" == o.overlayY
                  ? 0
                  : -t.height),
            { x: n.x + s, y: n.y + r }
          );
        }
        _getOverlayFit(n, t, o, s) {
          const r = pn(t);
          let { x: l, y: a } = n,
            p = this._getOffset(s, "x"),
            C = this._getOffset(s, "y");
          p && (l += p), C && (a += C);
          let nt = 0 - a,
            Q = a + r.height - o.height,
            Z = this._subtractOverflows(r.width, 0 - l, l + r.width - o.width),
            q = this._subtractOverflows(r.height, nt, Q),
            ke = Z * q;
          return {
            visibleArea: ke,
            isCompletelyWithinViewport: r.width * r.height === ke,
            fitsInViewportVertically: q === r.height,
            fitsInViewportHorizontally: Z == r.width,
          };
        }
        _canFitWithFlexibleDimensions(n, t, o) {
          if (this._hasFlexibleDimensions) {
            const s = o.bottom - t.y,
              r = o.right - t.x,
              l = mn(this._overlayRef.getConfig().minHeight),
              a = mn(this._overlayRef.getConfig().minWidth);
            return (
              (n.fitsInViewportVertically || (null != l && l <= s)) &&
              (n.fitsInViewportHorizontally || (null != a && a <= r))
            );
          }
          return !1;
        }
        _pushOverlayOnScreen(n, t, o) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: n.x + this._previousPushAmount.x,
              y: n.y + this._previousPushAmount.y,
            };
          const s = pn(t),
            r = this._viewportRect,
            l = Math.max(n.x + s.width - r.width, 0),
            a = Math.max(n.y + s.height - r.height, 0),
            p = Math.max(r.top - o.top - n.y, 0),
            C = Math.max(r.left - o.left - n.x, 0);
          let w = 0,
            D = 0;
          return (
            (w =
              s.width <= r.width
                ? C || -l
                : n.x < this._viewportMargin
                  ? r.left - o.left - n.x
                  : 0),
            (D =
              s.height <= r.height
                ? p || -a
                : n.y < this._viewportMargin
                  ? r.top - o.top - n.y
                  : 0),
            (this._previousPushAmount = { x: w, y: D }),
            { x: n.x + w, y: n.y + D }
          );
        }
        _applyPosition(n, t) {
          if (
            (this._setTransformOrigin(n),
            this._setOverlayElementStyles(t, n),
            this._setBoundingBoxStyles(t, n),
            n.panelClass && this._addPanelClasses(n.panelClass),
            (this._lastPosition = n),
            this._positionChanges.observers.length)
          ) {
            const o = this._getScrollVisibility(),
              s = new Ss(n, o);
            this._positionChanges.next(s);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(n) {
          if (!this._transformOriginSelector) return;
          const t = this._boundingBox.querySelectorAll(
            this._transformOriginSelector,
          );
          let o,
            s = n.overlayY;
          o =
            "center" === n.overlayX
              ? "center"
              : this._isRtl()
                ? "start" === n.overlayX
                  ? "right"
                  : "left"
                : "start" === n.overlayX
                  ? "left"
                  : "right";
          for (let r = 0; r < t.length; r++)
            t[r].style.transformOrigin = `${o} ${s}`;
        }
        _calculateBoundingBoxRect(n, t) {
          const o = this._viewportRect,
            s = this._isRtl();
          let r, l, a, w, D, nt;
          if ("top" === t.overlayY)
            (l = n.y), (r = o.height - l + this._viewportMargin);
          else if ("bottom" === t.overlayY)
            (a = o.height - n.y + 2 * this._viewportMargin),
              (r = o.height - a + this._viewportMargin);
          else {
            const Q = Math.min(o.bottom - n.y + o.top, n.y),
              Z = this._lastBoundingBoxSize.height;
            (r = 2 * Q),
              (l = n.y - Q),
              r > Z &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (l = n.y - Z / 2);
          }
          if (("end" === t.overlayX && !s) || ("start" === t.overlayX && s))
            (nt = o.width - n.x + this._viewportMargin),
              (w = n.x - this._viewportMargin);
          else if (
            ("start" === t.overlayX && !s) ||
            ("end" === t.overlayX && s)
          )
            (D = n.x), (w = o.right - n.x);
          else {
            const Q = Math.min(o.right - n.x + o.left, n.x),
              Z = this._lastBoundingBoxSize.width;
            (w = 2 * Q),
              (D = n.x - Q),
              w > Z &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (D = n.x - Z / 2);
          }
          return { top: l, left: D, bottom: a, right: nt, width: w, height: r };
        }
        _setBoundingBoxStyles(n, t) {
          const o = this._calculateBoundingBoxRect(n, t);
          !this._isInitialRender &&
            !this._growAfterOpen &&
            ((o.height = Math.min(o.height, this._lastBoundingBoxSize.height)),
            (o.width = Math.min(o.width, this._lastBoundingBoxSize.width)));
          const s = {};
          if (this._hasExactPosition())
            (s.top = s.left = "0"),
              (s.bottom = s.right = s.maxHeight = s.maxWidth = ""),
              (s.width = s.height = "100%");
          else {
            const r = this._overlayRef.getConfig().maxHeight,
              l = this._overlayRef.getConfig().maxWidth;
            (s.height = (0, M.HM)(o.height)),
              (s.top = (0, M.HM)(o.top)),
              (s.bottom = (0, M.HM)(o.bottom)),
              (s.width = (0, M.HM)(o.width)),
              (s.left = (0, M.HM)(o.left)),
              (s.right = (0, M.HM)(o.right)),
              (s.alignItems =
                "center" === t.overlayX
                  ? "center"
                  : "end" === t.overlayX
                    ? "flex-end"
                    : "flex-start"),
              (s.justifyContent =
                "center" === t.overlayY
                  ? "center"
                  : "bottom" === t.overlayY
                    ? "flex-end"
                    : "flex-start"),
              r && (s.maxHeight = (0, M.HM)(r)),
              l && (s.maxWidth = (0, M.HM)(l));
          }
          (this._lastBoundingBoxSize = o), Kt(this._boundingBox.style, s);
        }
        _resetBoundingBoxStyles() {
          Kt(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          });
        }
        _resetOverlayElementStyles() {
          Kt(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: "",
          });
        }
        _setOverlayElementStyles(n, t) {
          const o = {},
            s = this._hasExactPosition(),
            r = this._hasFlexibleDimensions,
            l = this._overlayRef.getConfig();
          if (s) {
            const w = this._viewportRuler.getViewportScrollPosition();
            Kt(o, this._getExactOverlayY(t, n, w)),
              Kt(o, this._getExactOverlayX(t, n, w));
          } else o.position = "static";
          let a = "",
            p = this._getOffset(t, "x"),
            C = this._getOffset(t, "y");
          p && (a += `translateX(${p}px) `),
            C && (a += `translateY(${C}px)`),
            (o.transform = a.trim()),
            l.maxHeight &&
              (s
                ? (o.maxHeight = (0, M.HM)(l.maxHeight))
                : r && (o.maxHeight = "")),
            l.maxWidth &&
              (s
                ? (o.maxWidth = (0, M.HM)(l.maxWidth))
                : r && (o.maxWidth = "")),
            Kt(this._pane.style, o);
        }
        _getExactOverlayY(n, t, o) {
          let s = { top: "", bottom: "" },
            r = this._getOverlayPoint(t, this._overlayRect, n);
          return (
            this._isPushed &&
              (r = this._pushOverlayOnScreen(r, this._overlayRect, o)),
            "bottom" === n.overlayY
              ? (s.bottom =
                  this._document.documentElement.clientHeight -
                  (r.y + this._overlayRect.height) +
                  "px")
              : (s.top = (0, M.HM)(r.y)),
            s
          );
        }
        _getExactOverlayX(n, t, o) {
          let l,
            s = { left: "", right: "" },
            r = this._getOverlayPoint(t, this._overlayRect, n);
          return (
            this._isPushed &&
              (r = this._pushOverlayOnScreen(r, this._overlayRect, o)),
            (l = this._isRtl()
              ? "end" === n.overlayX
                ? "left"
                : "right"
              : "end" === n.overlayX
                ? "right"
                : "left"),
            "right" === l
              ? (s.right =
                  this._document.documentElement.clientWidth -
                  (r.x + this._overlayRect.width) +
                  "px")
              : (s.left = (0, M.HM)(r.x)),
            s
          );
        }
        _getScrollVisibility() {
          const n = this._getOriginRect(),
            t = this._pane.getBoundingClientRect(),
            o = this._scrollables.map((s) =>
              s.getElementRef().nativeElement.getBoundingClientRect(),
            );
          return {
            isOriginClipped: fn(n, o),
            isOriginOutsideView: di(n, o),
            isOverlayClipped: fn(t, o),
            isOverlayOutsideView: di(t, o),
          };
        }
        _subtractOverflows(n, ...t) {
          return t.reduce((o, s) => o - Math.max(s, 0), n);
        }
        _getNarrowedViewportRect() {
          const n = this._document.documentElement.clientWidth,
            t = this._document.documentElement.clientHeight,
            o = this._viewportRuler.getViewportScrollPosition();
          return {
            top: o.top + this._viewportMargin,
            left: o.left + this._viewportMargin,
            right: o.left + n - this._viewportMargin,
            bottom: o.top + t - this._viewportMargin,
            width: n - 2 * this._viewportMargin,
            height: t - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return "rtl" === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(n, t) {
          return "x" === t
            ? null == n.offsetX
              ? this._offsetX
              : n.offsetX
            : null == n.offsetY
              ? this._offsetY
              : n.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(n) {
          this._pane &&
            (0, M.Eq)(n).forEach((t) => {
              "" !== t &&
                -1 === this._appliedPanelClasses.indexOf(t) &&
                (this._appliedPanelClasses.push(t),
                this._pane.classList.add(t));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((n) => {
              this._pane.classList.remove(n);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const n = this._origin;
          if (n instanceof i.SBq)
            return n.nativeElement.getBoundingClientRect();
          if (n instanceof Element) return n.getBoundingClientRect();
          const t = n.width || 0,
            o = n.height || 0;
          return {
            top: n.y,
            bottom: n.y + o,
            left: n.x,
            right: n.x + t,
            height: o,
            width: t,
          };
        }
      }
      function Kt(e, n) {
        for (let t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        return e;
      }
      function mn(e) {
        if ("number" != typeof e && null != e) {
          const [n, t] = e.split(Os);
          return t && "px" !== t ? null : parseFloat(n);
        }
        return e || null;
      }
      function pn(e) {
        return {
          top: Math.floor(e.top),
          right: Math.floor(e.right),
          bottom: Math.floor(e.bottom),
          left: Math.floor(e.left),
          width: Math.floor(e.width),
          height: Math.floor(e.height),
        };
      }
      const _n = "cdk-global-overlay-wrapper";
      class Is {
        constructor() {
          (this._cssPosition = "static"),
            (this._topOffset = ""),
            (this._bottomOffset = ""),
            (this._alignItems = ""),
            (this._xPosition = ""),
            (this._xOffset = ""),
            (this._width = ""),
            (this._height = ""),
            (this._isDisposed = !1);
        }
        attach(n) {
          const t = n.getConfig();
          (this._overlayRef = n),
            this._width && !t.width && n.updateSize({ width: this._width }),
            this._height && !t.height && n.updateSize({ height: this._height }),
            n.hostElement.classList.add(_n),
            (this._isDisposed = !1);
        }
        top(n = "") {
          return (
            (this._bottomOffset = ""),
            (this._topOffset = n),
            (this._alignItems = "flex-start"),
            this
          );
        }
        left(n = "") {
          return (this._xOffset = n), (this._xPosition = "left"), this;
        }
        bottom(n = "") {
          return (
            (this._topOffset = ""),
            (this._bottomOffset = n),
            (this._alignItems = "flex-end"),
            this
          );
        }
        right(n = "") {
          return (this._xOffset = n), (this._xPosition = "right"), this;
        }
        start(n = "") {
          return (this._xOffset = n), (this._xPosition = "start"), this;
        }
        end(n = "") {
          return (this._xOffset = n), (this._xPosition = "end"), this;
        }
        width(n = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: n })
              : (this._width = n),
            this
          );
        }
        height(n = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: n })
              : (this._height = n),
            this
          );
        }
        centerHorizontally(n = "") {
          return this.left(n), (this._xPosition = "center"), this;
        }
        centerVertically(n = "") {
          return this.top(n), (this._alignItems = "center"), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const n = this._overlayRef.overlayElement.style,
            t = this._overlayRef.hostElement.style,
            o = this._overlayRef.getConfig(),
            { width: s, height: r, maxWidth: l, maxHeight: a } = o,
            p = !(
              ("100%" !== s && "100vw" !== s) ||
              (l && "100%" !== l && "100vw" !== l)
            ),
            C = !(
              ("100%" !== r && "100vh" !== r) ||
              (a && "100%" !== a && "100vh" !== a)
            ),
            w = this._xPosition,
            D = this._xOffset,
            nt = "rtl" === this._overlayRef.getConfig().direction;
          let Q = "",
            Z = "",
            q = "";
          p
            ? (q = "flex-start")
            : "center" === w
              ? ((q = "center"), nt ? (Z = D) : (Q = D))
              : nt
                ? "left" === w || "end" === w
                  ? ((q = "flex-end"), (Q = D))
                  : ("right" === w || "start" === w) &&
                    ((q = "flex-start"), (Z = D))
                : "left" === w || "start" === w
                  ? ((q = "flex-start"), (Q = D))
                  : ("right" === w || "end" === w) &&
                    ((q = "flex-end"), (Z = D)),
            (n.position = this._cssPosition),
            (n.marginLeft = p ? "0" : Q),
            (n.marginTop = C ? "0" : this._topOffset),
            (n.marginBottom = this._bottomOffset),
            (n.marginRight = p ? "0" : Z),
            (t.justifyContent = q),
            (t.alignItems = C ? "flex-start" : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const n = this._overlayRef.overlayElement.style,
            t = this._overlayRef.hostElement,
            o = t.style;
          t.classList.remove(_n),
            (o.justifyContent =
              o.alignItems =
              n.marginTop =
              n.marginBottom =
              n.marginLeft =
              n.marginRight =
              n.position =
                ""),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let ks = (() => {
          class e {
            constructor(t, o, s, r) {
              (this._viewportRuler = t),
                (this._document = o),
                (this._platform = s),
                (this._overlayContainer = r);
            }
            global() {
              return new Is();
            }
            flexibleConnectedTo(t) {
              return new Rs(
                t,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer,
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.LFG(Se.rL),
                i.LFG(h.K0),
                i.LFG(K.t4),
                i.LFG(Pe),
              );
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        Ts = 0,
        te = (() => {
          class e {
            constructor(t, o, s, r, l, a, p, C, w, D, nt, Q) {
              (this.scrollStrategies = t),
                (this._overlayContainer = o),
                (this._componentFactoryResolver = s),
                (this._positionBuilder = r),
                (this._keyboardDispatcher = l),
                (this._injector = a),
                (this._ngZone = p),
                (this._document = C),
                (this._directionality = w),
                (this._location = D),
                (this._outsideClickDispatcher = nt),
                (this._animationsModuleType = Q);
            }
            create(t) {
              const o = this._createHostElement(),
                s = this._createPaneElement(o),
                r = this._createPortalOutlet(s),
                l = new ci(t);
              return (
                (l.direction = l.direction || this._directionality.value),
                new Me(
                  r,
                  o,
                  s,
                  l,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher,
                  "NoopAnimations" === this._animationsModuleType,
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(t) {
              const o = this._document.createElement("div");
              return (
                (o.id = "cdk-overlay-" + Ts++),
                o.classList.add("cdk-overlay-pane"),
                t.appendChild(o),
                o
              );
            }
            _createHostElement() {
              const t = this._document.createElement("div");
              return (
                this._overlayContainer.getContainerElement().appendChild(t), t
              );
            }
            _createPortalOutlet(t) {
              return (
                this._appRef || (this._appRef = this._injector.get(i.z2F)),
                new dt.u0(
                  t,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document,
                )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.LFG(Ds),
                i.LFG(Pe),
                i.LFG(i._Vd),
                i.LFG(ks),
                i.LFG(Ms),
                i.LFG(i.zs3),
                i.LFG(i.R0b),
                i.LFG(h.K0),
                i.LFG(Ht.Is),
                i.LFG(h.Ye),
                i.LFG(Es),
                i.LFG(i.QbO, 8),
              );
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })();
      const Bs = {
        provide: new i.OlP("cdk-connected-overlay-scroll-strategy"),
        deps: [te],
        useFactory: function Vs(e) {
          return () => e.scrollStrategies.reposition();
        },
      };
      let ui = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({
            providers: [te, Bs],
            imports: [Ht.vT, dt.eL, Se.Cl, Se.Cl],
          })),
          e
        );
      })();
      var fe = y(1135),
        Ps = y(5684),
        Gs = y(8372),
        Ns = y(5577),
        fi = y(8505),
        St = y(2693),
        Ge = y(9521),
        xn = y(9770),
        Hs = y(9646),
        yn = y(8675);
      function Ys(e, n) {}
      class Ne {
        constructor() {
          (this.role = "dialog"),
            (this.panelClass = ""),
            (this.hasBackdrop = !0),
            (this.backdropClass = ""),
            (this.disableClose = !1),
            (this.width = ""),
            (this.height = ""),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = "first-tabbable"),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0),
            (this.closeOnDestroy = !0),
            (this.closeOnOverlayDetachments = !0);
        }
      }
      let vn = (() => {
        class e extends dt.en {
          constructor(t, o, s, r, l, a, p, C) {
            super(),
              (this._elementRef = t),
              (this._focusTrapFactory = o),
              (this._config = r),
              (this._interactivityChecker = l),
              (this._ngZone = a),
              (this._overlayRef = p),
              (this._focusMonitor = C),
              (this._elementFocusedBeforeDialogWasOpened = null),
              (this._closeInteractionType = null),
              (this.attachDomPortal = (w) => {
                this._portalOutlet.hasAttached();
                const D = this._portalOutlet.attachDomPortal(w);
                return this._contentAttached(), D;
              }),
              (this._ariaLabelledBy = this._config.ariaLabelledBy || null),
              (this._document = s);
          }
          _contentAttached() {
            this._initializeFocusTrap(),
              this._handleBackdropClicks(),
              this._captureInitialFocus();
          }
          _captureInitialFocus() {
            this._trapFocus();
          }
          ngOnDestroy() {
            this._restoreFocus();
          }
          attachComponentPortal(t) {
            this._portalOutlet.hasAttached();
            const o = this._portalOutlet.attachComponentPortal(t);
            return this._contentAttached(), o;
          }
          attachTemplatePortal(t) {
            this._portalOutlet.hasAttached();
            const o = this._portalOutlet.attachTemplatePortal(t);
            return this._contentAttached(), o;
          }
          _recaptureFocus() {
            this._containsFocus() || this._trapFocus();
          }
          _forceFocus(t, o) {
            this._interactivityChecker.isFocusable(t) ||
              ((t.tabIndex = -1),
              this._ngZone.runOutsideAngular(() => {
                const s = () => {
                  t.removeEventListener("blur", s),
                    t.removeEventListener("mousedown", s),
                    t.removeAttribute("tabindex");
                };
                t.addEventListener("blur", s),
                  t.addEventListener("mousedown", s);
              })),
              t.focus(o);
          }
          _focusByCssSelector(t, o) {
            let s = this._elementRef.nativeElement.querySelector(t);
            s && this._forceFocus(s, o);
          }
          _trapFocus() {
            const t = this._elementRef.nativeElement;
            switch (this._config.autoFocus) {
              case !1:
              case "dialog":
                this._containsFocus() || t.focus();
                break;
              case !0:
              case "first-tabbable":
                this._focusTrap.focusInitialElementWhenReady().then((o) => {
                  o || this._focusDialogContainer();
                });
                break;
              case "first-heading":
                this._focusByCssSelector(
                  'h1, h2, h3, h4, h5, h6, [role="heading"]',
                );
                break;
              default:
                this._focusByCssSelector(this._config.autoFocus);
            }
          }
          _restoreFocus() {
            const t = this._config.restoreFocus;
            let o = null;
            if (
              ("string" == typeof t
                ? (o = this._document.querySelector(t))
                : "boolean" == typeof t
                  ? (o = t ? this._elementFocusedBeforeDialogWasOpened : null)
                  : t && (o = t),
              this._config.restoreFocus && o && "function" == typeof o.focus)
            ) {
              const s = (0, K.ht)(),
                r = this._elementRef.nativeElement;
              (!s || s === this._document.body || s === r || r.contains(s)) &&
                (this._focusMonitor
                  ? (this._focusMonitor.focusVia(o, this._closeInteractionType),
                    (this._closeInteractionType = null))
                  : o.focus());
            }
            this._focusTrap && this._focusTrap.destroy();
          }
          _focusDialogContainer() {
            this._elementRef.nativeElement.focus &&
              this._elementRef.nativeElement.focus();
          }
          _containsFocus() {
            const t = this._elementRef.nativeElement,
              o = (0, K.ht)();
            return t === o || t.contains(o);
          }
          _initializeFocusTrap() {
            (this._focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement,
            )),
              this._document &&
                (this._elementFocusedBeforeDialogWasOpened = (0, K.ht)());
          }
          _handleBackdropClicks() {
            this._overlayRef.backdropClick().subscribe(() => {
              this._config.disableClose && this._recaptureFocus();
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Y36(i.SBq),
              i.Y36(St.qV),
              i.Y36(h.K0, 8),
              i.Y36(Ne),
              i.Y36(St.ic),
              i.Y36(i.R0b),
              i.Y36(Me),
              i.Y36(St.tE),
            );
          }),
          (e.ɵcmp = i.Xpm({
            type: e,
            selectors: [["cdk-dialog-container"]],
            viewQuery: function (t, o) {
              if ((1 & t && i.Gf(dt.Pl, 7), 2 & t)) {
                let s;
                i.iGM((s = i.CRH())) && (o._portalOutlet = s.first);
              }
            },
            hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
            hostVars: 6,
            hostBindings: function (t, o) {
              2 & t &&
                i.uIk("id", o._config.id || null)("role", o._config.role)(
                  "aria-modal",
                  o._config.ariaModal,
                )(
                  "aria-labelledby",
                  o._config.ariaLabel ? null : o._ariaLabelledBy,
                )("aria-label", o._config.ariaLabel)(
                  "aria-describedby",
                  o._config.ariaDescribedBy || null,
                );
            },
            features: [i.qOj],
            decls: 1,
            vars: 0,
            consts: [["cdkPortalOutlet", ""]],
            template: function (t, o) {
              1 & t && i.YNc(0, Ys, 0, 0, "ng-template", 0);
            },
            dependencies: [dt.Pl],
            styles: [
              ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
            ],
            encapsulation: 2,
          })),
          e
        );
      })();
      class hi {
        constructor(n, t) {
          (this.overlayRef = n),
            (this.config = t),
            (this.closed = new N.x()),
            (this.disableClose = t.disableClose),
            (this.backdropClick = n.backdropClick()),
            (this.keydownEvents = n.keydownEvents()),
            (this.outsidePointerEvents = n.outsidePointerEvents()),
            (this.id = t.id),
            this.keydownEvents.subscribe((o) => {
              o.keyCode === Ge.hY &&
                !this.disableClose &&
                !(0, Ge.Vb)(o) &&
                (o.preventDefault(),
                this.close(void 0, { focusOrigin: "keyboard" }));
            }),
            this.backdropClick.subscribe(() => {
              this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
            }),
            (this._detachSubscription = n.detachments().subscribe(() => {
              !1 !== t.closeOnOverlayDetachments && this.close();
            }));
        }
        close(n, t) {
          if (this.containerInstance) {
            const o = this.closed;
            (this.containerInstance._closeInteractionType =
              t?.focusOrigin || "program"),
              this._detachSubscription.unsubscribe(),
              this.overlayRef.dispose(),
              o.next(n),
              o.complete(),
              (this.componentInstance = this.containerInstance = null);
          }
        }
        updatePosition() {
          return this.overlayRef.updatePosition(), this;
        }
        updateSize(n = "", t = "") {
          return this.overlayRef.updateSize({ width: n, height: t }), this;
        }
        addPanelClass(n) {
          return this.overlayRef.addPanelClass(n), this;
        }
        removePanelClass(n) {
          return this.overlayRef.removePanelClass(n), this;
        }
      }
      const Cn = new i.OlP("DialogScrollStrategy"),
        zs = new i.OlP("DialogData"),
        js = new i.OlP("DefaultDialogConfig"),
        qs = {
          provide: Cn,
          deps: [te],
          useFactory: function Us(e) {
            return () => e.scrollStrategies.block();
          },
        };
      let $s = 0,
        bn = (() => {
          class e {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            constructor(t, o, s, r, l, a) {
              (this._overlay = t),
                (this._injector = o),
                (this._defaultOptions = s),
                (this._parentDialog = r),
                (this._overlayContainer = l),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new N.x()),
                (this._afterOpenedAtThisLevel = new N.x()),
                (this._ariaHiddenElements = new Map()),
                (this.afterAllClosed = (0, xn.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, yn.O)(void 0)),
                )),
                (this._scrollStrategy = a);
            }
            open(t, o) {
              ((o = { ...(this._defaultOptions || new Ne()), ...o }).id =
                o.id || "cdk-dialog-" + $s++),
                o.id && this.getDialogById(o.id);
              const r = this._getOverlayConfig(o),
                l = this._overlay.create(r),
                a = new hi(l, o),
                p = this._attachContainer(l, a, o);
              return (
                (a.containerInstance = p),
                this._attachDialogContent(t, a, p, o),
                this.openDialogs.length ||
                  this._hideNonDialogContentFromAssistiveTechnology(),
                this.openDialogs.push(a),
                a.closed.subscribe(() => this._removeOpenDialog(a, !0)),
                this.afterOpened.next(a),
                a
              );
            }
            closeAll() {
              gi(this.openDialogs, (t) => t.close());
            }
            getDialogById(t) {
              return this.openDialogs.find((o) => o.id === t);
            }
            ngOnDestroy() {
              gi(this._openDialogsAtThisLevel, (t) => {
                !1 === t.config.closeOnDestroy && this._removeOpenDialog(t, !1);
              }),
                gi(this._openDialogsAtThisLevel, (t) => t.close()),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete(),
                (this._openDialogsAtThisLevel = []);
            }
            _getOverlayConfig(t) {
              const o = new ci({
                positionStrategy:
                  t.positionStrategy ||
                  this._overlay
                    .position()
                    .global()
                    .centerHorizontally()
                    .centerVertically(),
                scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
                panelClass: t.panelClass,
                hasBackdrop: t.hasBackdrop,
                direction: t.direction,
                minWidth: t.minWidth,
                minHeight: t.minHeight,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                width: t.width,
                height: t.height,
                disposeOnNavigation: t.closeOnNavigation,
              });
              return t.backdropClass && (o.backdropClass = t.backdropClass), o;
            }
            _attachContainer(t, o, s) {
              const r = s.injector || s.viewContainerRef?.injector,
                l = [
                  { provide: Ne, useValue: s },
                  { provide: hi, useValue: o },
                  { provide: Me, useValue: t },
                ];
              let a;
              s.container
                ? "function" == typeof s.container
                  ? (a = s.container)
                  : ((a = s.container.type),
                    l.push(...s.container.providers(s)))
                : (a = vn);
              const p = new dt.C5(
                a,
                s.viewContainerRef,
                i.zs3.create({ parent: r || this._injector, providers: l }),
                s.componentFactoryResolver,
              );
              return t.attach(p).instance;
            }
            _attachDialogContent(t, o, s, r) {
              if (t instanceof i.Rgc) {
                const l = this._createInjector(r, o, s, void 0);
                let a = { $implicit: r.data, dialogRef: o };
                r.templateContext &&
                  (a = {
                    ...a,
                    ...("function" == typeof r.templateContext
                      ? r.templateContext()
                      : r.templateContext),
                  }),
                  s.attachTemplatePortal(new dt.UE(t, null, a, l));
              } else {
                const l = this._createInjector(r, o, s, this._injector),
                  a = s.attachComponentPortal(
                    new dt.C5(
                      t,
                      r.viewContainerRef,
                      l,
                      r.componentFactoryResolver,
                    ),
                  );
                o.componentInstance = a.instance;
              }
            }
            _createInjector(t, o, s, r) {
              const l = t.injector || t.viewContainerRef?.injector,
                a = [
                  { provide: zs, useValue: t.data },
                  { provide: hi, useValue: o },
                ];
              return (
                t.providers &&
                  ("function" == typeof t.providers
                    ? a.push(...t.providers(o, t, s))
                    : a.push(...t.providers)),
                t.direction &&
                  (!l || !l.get(Ht.Is, null, { optional: !0 })) &&
                  a.push({
                    provide: Ht.Is,
                    useValue: { value: t.direction, change: (0, Hs.of)() },
                  }),
                i.zs3.create({ parent: l || r, providers: a })
              );
            }
            _removeOpenDialog(t, o) {
              const s = this.openDialogs.indexOf(t);
              s > -1 &&
                (this.openDialogs.splice(s, 1),
                this.openDialogs.length ||
                  (this._ariaHiddenElements.forEach((r, l) => {
                    r
                      ? l.setAttribute("aria-hidden", r)
                      : l.removeAttribute("aria-hidden");
                  }),
                  this._ariaHiddenElements.clear(),
                  o && this._getAfterAllClosed().next()));
            }
            _hideNonDialogContentFromAssistiveTechnology() {
              const t = this._overlayContainer.getContainerElement();
              if (t.parentElement) {
                const o = t.parentElement.children;
                for (let s = o.length - 1; s > -1; s--) {
                  const r = o[s];
                  r !== t &&
                    "SCRIPT" !== r.nodeName &&
                    "STYLE" !== r.nodeName &&
                    !r.hasAttribute("aria-live") &&
                    (this._ariaHiddenElements.set(
                      r,
                      r.getAttribute("aria-hidden"),
                    ),
                    r.setAttribute("aria-hidden", "true"));
                }
              }
            }
            _getAfterAllClosed() {
              const t = this._parentDialog;
              return t
                ? t._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.LFG(te),
                i.LFG(i.zs3),
                i.LFG(js, 8),
                i.LFG(e, 12),
                i.LFG(Pe),
                i.LFG(Cn),
              );
            }),
            (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function gi(e, n) {
        let t = e.length;
        for (; t--; ) n(e[t]);
      }
      let Ws = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({
            providers: [bn, qs],
            imports: [ui, dt.eL, St.rt, dt.eL],
          })),
          e
        );
      })();
      var Yt = y(3238),
        H = y(7340);
      function Xs(e, n) {}
      class He {
        constructor() {
          (this.role = "dialog"),
            (this.panelClass = ""),
            (this.hasBackdrop = !0),
            (this.backdropClass = ""),
            (this.disableClose = !1),
            (this.width = ""),
            (this.height = ""),
            (this.maxWidth = "80vw"),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = "first-tabbable"),
            (this.restoreFocus = !0),
            (this.delayFocusTrap = !0),
            (this.closeOnNavigation = !0);
        }
      }
      const mi = "mdc-dialog--open",
        wn = "mdc-dialog--opening",
        An = "mdc-dialog--closing";
      let Js = (() => {
        class e extends vn {
          constructor(t, o, s, r, l, a, p, C) {
            super(t, o, s, r, l, a, p, C),
              (this._animationStateChanged = new i.vpe());
          }
          _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus();
          }
          _openAnimationDone(t) {
            this._config.delayFocusTrap && this._trapFocus(),
              this._animationStateChanged.next({
                state: "opened",
                totalTime: t,
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Y36(i.SBq),
              i.Y36(St.qV),
              i.Y36(h.K0, 8),
              i.Y36(He),
              i.Y36(St.ic),
              i.Y36(i.R0b),
              i.Y36(Me),
              i.Y36(St.tE),
            );
          }),
          (e.ɵcmp = i.Xpm({
            type: e,
            selectors: [["ng-component"]],
            features: [i.qOj],
            decls: 0,
            vars: 0,
            template: function (t, o) {},
            encapsulation: 2,
          })),
          e
        );
      })();
      const Fn = "--mat-dialog-transition-duration";
      function Dn(e) {
        return null == e
          ? null
          : "number" == typeof e
            ? e
            : e.endsWith("ms")
              ? (0, M.su)(e.substring(0, e.length - 2))
              : e.endsWith("s")
                ? 1e3 * (0, M.su)(e.substring(0, e.length - 1))
                : "0" === e
                  ? 0
                  : null;
      }
      let Ks = (() => {
        class e extends Js {
          constructor(t, o, s, r, l, a, p, C, w) {
            super(t, o, s, r, l, a, p, w),
              (this._animationMode = C),
              (this._animationsEnabled =
                "NoopAnimations" !== this._animationMode),
              (this._hostElement = this._elementRef.nativeElement),
              (this._openAnimationDuration = this._animationsEnabled
                ? Dn(this._config.enterAnimationDuration) ?? 150
                : 0),
              (this._closeAnimationDuration = this._animationsEnabled
                ? Dn(this._config.exitAnimationDuration) ?? 75
                : 0),
              (this._animationTimer = null),
              (this._finishDialogOpen = () => {
                this._clearAnimationClasses(),
                  this._openAnimationDone(this._openAnimationDuration);
              }),
              (this._finishDialogClose = () => {
                this._clearAnimationClasses(),
                  this._animationStateChanged.emit({
                    state: "closed",
                    totalTime: this._closeAnimationDuration,
                  });
              });
          }
          _contentAttached() {
            super._contentAttached(), this._startOpenAnimation();
          }
          ngOnDestroy() {
            super.ngOnDestroy(),
              null !== this._animationTimer &&
                clearTimeout(this._animationTimer);
          }
          _startOpenAnimation() {
            this._animationStateChanged.emit({
              state: "opening",
              totalTime: this._openAnimationDuration,
            }),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    Fn,
                    `${this._openAnimationDuration}ms`,
                  ),
                  this._hostElement.classList.add(wn),
                  this._hostElement.classList.add(mi),
                  this._waitForAnimationToComplete(
                    this._openAnimationDuration,
                    this._finishDialogOpen,
                  ))
                : (this._hostElement.classList.add(mi),
                  Promise.resolve().then(() => this._finishDialogOpen()));
          }
          _startExitAnimation() {
            this._animationStateChanged.emit({
              state: "closing",
              totalTime: this._closeAnimationDuration,
            }),
              this._hostElement.classList.remove(mi),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    Fn,
                    `${this._openAnimationDuration}ms`,
                  ),
                  this._hostElement.classList.add(An),
                  this._waitForAnimationToComplete(
                    this._closeAnimationDuration,
                    this._finishDialogClose,
                  ))
                : Promise.resolve().then(() => this._finishDialogClose());
          }
          _clearAnimationClasses() {
            this._hostElement.classList.remove(wn),
              this._hostElement.classList.remove(An);
          }
          _waitForAnimationToComplete(t, o) {
            null !== this._animationTimer && clearTimeout(this._animationTimer),
              (this._animationTimer = setTimeout(o, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Y36(i.SBq),
              i.Y36(St.qV),
              i.Y36(h.K0, 8),
              i.Y36(He),
              i.Y36(St.ic),
              i.Y36(i.R0b),
              i.Y36(Me),
              i.Y36(i.QbO, 8),
              i.Y36(St.tE),
            );
          }),
          (e.ɵcmp = i.Xpm({
            type: e,
            selectors: [["mat-dialog-container"]],
            hostAttrs: [
              "tabindex",
              "-1",
              1,
              "mat-mdc-dialog-container",
              "mdc-dialog",
            ],
            hostVars: 8,
            hostBindings: function (t, o) {
              2 & t &&
                (i.Ikx("id", o._config.id),
                i.uIk("aria-modal", o._config.ariaModal)(
                  "role",
                  o._config.role,
                )(
                  "aria-labelledby",
                  o._config.ariaLabel ? null : o._ariaLabelledBy,
                )("aria-label", o._config.ariaLabel)(
                  "aria-describedby",
                  o._config.ariaDescribedBy || null,
                ),
                i.ekj("_mat-animation-noopable", !o._animationsEnabled));
            },
            features: [i.qOj],
            decls: 3,
            vars: 0,
            consts: [
              [1, "mdc-dialog__container"],
              [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
              ["cdkPortalOutlet", ""],
            ],
            template: function (t, o) {
              1 & t &&
                (i.TgZ(0, "div", 0)(1, "div", 1),
                i.YNc(2, Xs, 0, 0, "ng-template", 2),
                i.qZA()());
            },
            dependencies: [dt.Pl],
            styles: [
              '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title,.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__actions,.mat-mdc-dialog-container.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title{border-bottom-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, "Arial");line-height:var(--mdc-dialog-subhead-line-height, 14px);font-size:var(--mdc-dialog-subhead-size, 14px);font-weight:var(--mdc-dialog-subhead-weight, 500);letter-spacing:var(--mdc-dialog-subhead-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, black)}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, "Arial");line-height:var(--mdc-dialog-supporting-text-line-height, 14px);font-size:var(--mdc-dialog-supporting-text-size, 14px);font-weight:var(--mdc-dialog-supporting-text-weight, 500);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, black)}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
            ],
            encapsulation: 2,
          })),
          e
        );
      })();
      class he {
        constructor(n, t, o) {
          (this._ref = n),
            (this._containerInstance = o),
            (this._afterOpened = new N.x()),
            (this._beforeClosed = new N.x()),
            (this._state = 0),
            (this.disableClose = t.disableClose),
            (this.id = n.id),
            o._animationStateChanged
              .pipe(
                (0, Dt.h)((s) => "opened" === s.state),
                (0, Be.q)(1),
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            o._animationStateChanged
              .pipe(
                (0, Dt.h)((s) => "closed" === s.state),
                (0, Be.q)(1),
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._finishDialogClose();
              }),
            n.overlayRef.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._finishDialogClose();
            }),
            (0, ue.T)(
              this.backdropClick(),
              this.keydownEvents().pipe(
                (0, Dt.h)(
                  (s) =>
                    s.keyCode === Ge.hY && !this.disableClose && !(0, Ge.Vb)(s),
                ),
              ),
            ).subscribe((s) => {
              this.disableClose ||
                (s.preventDefault(),
                Sn(this, "keydown" === s.type ? "keyboard" : "mouse"));
            });
        }
        close(n) {
          (this._result = n),
            this._containerInstance._animationStateChanged
              .pipe(
                (0, Dt.h)((t) => "closing" === t.state),
                (0, Be.q)(1),
              )
              .subscribe((t) => {
                this._beforeClosed.next(n),
                  this._beforeClosed.complete(),
                  this._ref.overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    t.totalTime + 100,
                  ));
              }),
            (this._state = 1),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._ref.closed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._ref.backdropClick;
        }
        keydownEvents() {
          return this._ref.keydownEvents;
        }
        updatePosition(n) {
          let t = this._ref.config.positionStrategy;
          return (
            n && (n.left || n.right)
              ? n.left
                ? t.left(n.left)
                : t.right(n.right)
              : t.centerHorizontally(),
            n && (n.top || n.bottom)
              ? n.top
                ? t.top(n.top)
                : t.bottom(n.bottom)
              : t.centerVertically(),
            this._ref.updatePosition(),
            this
          );
        }
        updateSize(n = "", t = "") {
          return this._ref.updateSize(n, t), this;
        }
        addPanelClass(n) {
          return this._ref.addPanelClass(n), this;
        }
        removePanelClass(n) {
          return this._ref.removePanelClass(n), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = 2),
            this._ref.close(this._result, {
              focusOrigin: this._closeInteractionType,
            }),
            (this.componentInstance = null);
        }
      }
      function Sn(e, n, t) {
        return (e._closeInteractionType = n), e.close(t);
      }
      const Ee = new i.OlP("MatMdcDialogData"),
        tr = new i.OlP("mat-mdc-dialog-default-options"),
        Mn = new i.OlP("mat-mdc-dialog-scroll-strategy"),
        ir = {
          provide: Mn,
          deps: [te],
          useFactory: function er(e) {
            return () => e.scrollStrategies.block();
          },
        };
      let nr = 0,
        or = (() => {
          class e {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            _getAfterAllClosed() {
              const t = this._parentDialog;
              return t
                ? t._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
            constructor(t, o, s, r, l, a, p, C, w, D) {
              (this._overlay = t),
                (this._defaultOptions = s),
                (this._parentDialog = r),
                (this._dialogRefConstructor = p),
                (this._dialogContainerType = C),
                (this._dialogDataToken = w),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new N.x()),
                (this._afterOpenedAtThisLevel = new N.x()),
                (this._idPrefix = "mat-dialog-"),
                (this.dialogConfigClass = He),
                (this.afterAllClosed = (0, xn.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, yn.O)(void 0)),
                )),
                (this._scrollStrategy = a),
                (this._dialog = o.get(bn));
            }
            open(t, o) {
              let s;
              ((o = { ...(this._defaultOptions || new He()), ...o }).id =
                o.id || `${this._idPrefix}${nr++}`),
                (o.scrollStrategy = o.scrollStrategy || this._scrollStrategy());
              const r = this._dialog.open(t, {
                ...o,
                positionStrategy: this._overlay
                  .position()
                  .global()
                  .centerHorizontally()
                  .centerVertically(),
                disableClose: !0,
                closeOnDestroy: !1,
                closeOnOverlayDetachments: !1,
                container: {
                  type: this._dialogContainerType,
                  providers: () => [
                    { provide: this.dialogConfigClass, useValue: o },
                    { provide: Ne, useValue: o },
                  ],
                },
                templateContext: () => ({ dialogRef: s }),
                providers: (l, a, p) => (
                  (s = new this._dialogRefConstructor(l, o, p)),
                  s.updatePosition(o?.position),
                  [
                    { provide: this._dialogContainerType, useValue: p },
                    { provide: this._dialogDataToken, useValue: a.data },
                    { provide: this._dialogRefConstructor, useValue: s },
                  ]
                ),
              });
              return (
                (s.componentInstance = r.componentInstance),
                this.openDialogs.push(s),
                this.afterOpened.next(s),
                s.afterClosed().subscribe(() => {
                  const l = this.openDialogs.indexOf(s);
                  l > -1 &&
                    (this.openDialogs.splice(l, 1),
                    this.openDialogs.length ||
                      this._getAfterAllClosed().next());
                }),
                s
              );
            }
            closeAll() {
              this._closeDialogs(this.openDialogs);
            }
            getDialogById(t) {
              return this.openDialogs.find((o) => o.id === t);
            }
            ngOnDestroy() {
              this._closeDialogs(this._openDialogsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete();
            }
            _closeDialogs(t) {
              let o = t.length;
              for (; o--; ) t[o].close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              i.$Z();
            }),
            (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Oe = (() => {
          class e extends or {
            constructor(t, o, s, r, l, a, p, C) {
              super(t, o, r, a, p, l, he, Ks, Ee, C),
                (this._idPrefix = "mat-mdc-dialog-");
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.LFG(te),
                i.LFG(i.zs3),
                i.LFG(h.Ye, 8),
                i.LFG(tr, 8),
                i.LFG(Mn),
                i.LFG(e, 12),
                i.LFG(Pe),
                i.LFG(i.QbO, 8),
              );
            }),
            (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        sr = 0,
        En = (() => {
          class e {
            constructor(t, o, s) {
              (this.dialogRef = t),
                (this._elementRef = o),
                (this._dialog = s),
                (this.type = "button");
            }
            ngOnInit() {
              this.dialogRef ||
                (this.dialogRef = Rn(
                  this._elementRef,
                  this._dialog.openDialogs,
                ));
            }
            ngOnChanges(t) {
              const o = t._matDialogClose || t._matDialogCloseResult;
              o && (this.dialogResult = o.currentValue);
            }
            _onButtonClick(t) {
              Sn(
                this.dialogRef,
                0 === t.screenX && 0 === t.screenY ? "keyboard" : "mouse",
                this.dialogResult,
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(he, 8), i.Y36(i.SBq), i.Y36(Oe));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "mat-dialog-close", ""],
                ["", "matDialogClose", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("click", function (r) {
                    return o._onButtonClick(r);
                  }),
                  2 & t &&
                    i.uIk("aria-label", o.ariaLabel || null)("type", o.type);
              },
              inputs: {
                ariaLabel: ["aria-label", "ariaLabel"],
                type: "type",
                dialogResult: ["mat-dialog-close", "dialogResult"],
                _matDialogClose: ["matDialogClose", "_matDialogClose"],
              },
              exportAs: ["matDialogClose"],
              features: [i.TTD],
            })),
            e
          );
        })(),
        rr = (() => {
          class e {
            constructor(t, o, s) {
              (this._dialogRef = t),
                (this._elementRef = o),
                (this._dialog = s),
                (this.id = "mat-mdc-dialog-title-" + sr++);
            }
            ngOnInit() {
              this._dialogRef ||
                (this._dialogRef = Rn(
                  this._elementRef,
                  this._dialog.openDialogs,
                )),
                this._dialogRef &&
                  Promise.resolve().then(() => {
                    const t = this._dialogRef._containerInstance;
                    t && !t._ariaLabelledBy && (t._ariaLabelledBy = this.id);
                  });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(he, 8), i.Y36(i.SBq), i.Y36(Oe));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "mat-dialog-title", ""],
                ["", "matDialogTitle", ""],
              ],
              hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
              hostVars: 1,
              hostBindings: function (t, o) {
                2 & t && i.Ikx("id", o.id);
              },
              inputs: { id: "id" },
              exportAs: ["matDialogTitle"],
            })),
            e
          );
        })(),
        pi = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "mat-dialog-content", ""],
                ["mat-dialog-content"],
                ["", "matDialogContent", ""],
              ],
              hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
            })),
            e
          );
        })(),
        On = (() => {
          class e {
            constructor() {
              this.align = "start";
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "mat-dialog-actions", ""],
                ["mat-dialog-actions"],
                ["", "matDialogActions", ""],
              ],
              hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
              hostVars: 4,
              hostBindings: function (t, o) {
                2 & t &&
                  i.ekj(
                    "mat-mdc-dialog-actions-align-center",
                    "center" === o.align,
                  )("mat-mdc-dialog-actions-align-end", "end" === o.align);
              },
              inputs: { align: "align" },
            })),
            e
          );
        })();
      function Rn(e, n) {
        let t = e.nativeElement.parentElement;
        for (; t && !t.classList.contains("mat-mdc-dialog-container"); )
          t = t.parentElement;
        return t ? n.find((o) => o.id === t.id) : null;
      }
      let In = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({
            providers: [Oe, ir],
            imports: [Ws, ui, dt.eL, Yt.BQ, Yt.BQ],
          })),
          e
        );
      })();
      var _i = y(4859),
        lr = y(9751);
      function Tn(e) {
        for (let n in e) {
          let t = e[n] ?? "";
          switch (n) {
            case "display":
              e.display =
                "flex" === t
                  ? ["-webkit-flex", "flex"]
                  : "inline-flex" === t
                    ? ["-webkit-inline-flex", "inline-flex"]
                    : t;
              break;
            case "align-items":
            case "align-self":
            case "align-content":
            case "flex":
            case "flex-basis":
            case "flex-flow":
            case "flex-grow":
            case "flex-shrink":
            case "flex-wrap":
            case "justify-content":
              e["-webkit-" + n] = t;
              break;
            case "flex-direction":
              (e["-webkit-flex-direction"] = t), (e["flex-direction"] = t);
              break;
            case "order":
              e.order = e["-webkit-" + n] = isNaN(+t) ? "0" : t;
          }
        }
        return e;
      }
      const xi = "inline",
        Ye = ["row", "column", "row-reverse", "column-reverse"];
      function Ln(e) {
        let [n, t, o] = Vn(e);
        return (function dr(e, n = null, t = !1) {
          return {
            display: t ? "inline-flex" : "flex",
            "box-sizing": "border-box",
            "flex-direction": e,
            "flex-wrap": n || null,
          };
        })(n, t, o);
      }
      function Vn(e) {
        e = e?.toLowerCase() ?? "";
        let [n, t, o] = e.split(" ");
        return (
          Ye.find((s) => s === n) || (n = Ye[0]),
          t === xi && ((t = o !== xi ? o : ""), (o = xi)),
          [n, ar(t), !!o]
        );
      }
      function Re(e) {
        let [n] = Vn(e);
        return n.indexOf("row") > -1;
      }
      function ar(e) {
        if (e)
          switch (e.toLowerCase()) {
            case "reverse":
            case "wrap-reverse":
            case "reverse-wrap":
              e = "wrap-reverse";
              break;
            case "no":
            case "none":
            case "nowrap":
              e = "nowrap";
              break;
            default:
              e = "wrap";
          }
        return e;
      }
      function It(e, ...n) {
        if (null == e)
          throw TypeError("Cannot convert undefined or null to object");
        for (let t of n)
          if (null != t) for (let o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        return e;
      }
      const ur = {
          provide: i.tb,
          useFactory: function cr(e, n) {
            return () => {
              if ((0, h.NF)(n)) {
                const t = Array.from(e.querySelectorAll(`[class*=${Bn}]`)),
                  o = /\bflex-layout-.+?\b/g;
                t.forEach((s) => {
                  s.classList.contains(`${Bn}ssr`) && s.parentNode
                    ? s.parentNode.removeChild(s)
                    : s.className.replace(o, "");
                });
              }
            };
          },
          deps: [h.K0, i.Lbi],
          multi: !0,
        },
        Bn = "flex-layout-";
      let yi = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({ providers: [ur] })),
          e
        );
      })();
      class ee {
        constructor(n = !1, t = "all", o = "", s = "", r = 0) {
          (this.matches = n),
            (this.mediaQuery = t),
            (this.mqAlias = o),
            (this.suffix = s),
            (this.priority = r),
            (this.property = "");
        }
        clone() {
          return new ee(
            this.matches,
            this.mediaQuery,
            this.mqAlias,
            this.suffix,
          );
        }
      }
      let fr = (() => {
        class e {
          constructor() {
            this.stylesheet = new Map();
          }
          addStyleToElement(t, o, s) {
            const r = this.stylesheet.get(t);
            r ? r.set(o, s) : this.stylesheet.set(t, new Map([[o, s]]));
          }
          clearStyles() {
            this.stylesheet.clear();
          }
          getStyleForElement(t, o) {
            const s = this.stylesheet.get(t);
            let r = "";
            if (s) {
              const l = s.get(o);
              ("number" == typeof l || "string" == typeof l) && (r = l + "");
            }
            return r;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const vi = {
          addFlexToParent: !0,
          addOrientationBps: !1,
          disableDefaultBps: !1,
          disableVendorPrefixes: !1,
          serverLoaded: !1,
          useColumnBasisZero: !0,
          printWithBreakpoints: [],
          mediaTriggerAutoRestore: !0,
          ssrObserveBreakpoints: [],
          multiplier: void 0,
          defaultUnit: "px",
          detectLayoutDisplay: !1,
        },
        Ct = new i.OlP("Flex Layout token, config options for the library", {
          providedIn: "root",
          factory: () => vi,
        }),
        ge = new i.OlP("FlexLayoutServerLoaded", {
          providedIn: "root",
          factory: () => !1,
        }),
        Ci = new i.OlP(
          "Flex Layout token, collect all breakpoints into one provider",
          { providedIn: "root", factory: () => null },
        );
      function Pn(e, n) {
        return (
          (e = e?.clone() ?? new ee()),
          n &&
            ((e.mqAlias = n.alias),
            (e.mediaQuery = n.mediaQuery),
            (e.suffix = n.suffix),
            (e.priority = n.priority)),
          e
        );
      }
      class U {
        constructor() {
          this.shouldCache = !0;
        }
        sideEffect(n, t, o) {}
      }
      let B = (() => {
        class e {
          constructor(t, o, s, r) {
            (this._serverStylesheet = t),
              (this._serverModuleLoaded = o),
              (this._platformId = s),
              (this.layoutConfig = r);
          }
          applyStyleToElement(t, o, s = null) {
            let r = {};
            "string" == typeof o && ((r[o] = s), (o = r)),
              (r = this.layoutConfig.disableVendorPrefixes ? o : Tn(o)),
              this._applyMultiValueStyleToElement(r, t);
          }
          applyStyleToElements(t, o = []) {
            const s = this.layoutConfig.disableVendorPrefixes ? t : Tn(t);
            o.forEach((r) => {
              this._applyMultiValueStyleToElement(s, r);
            });
          }
          getFlowDirection(t) {
            const o = "flex-direction";
            let s = this.lookupStyle(t, o);
            return [
              s || "row",
              this.lookupInlineStyle(t, o) ||
              ((0, h.PM)(this._platformId) && this._serverModuleLoaded)
                ? s
                : "",
            ];
          }
          hasWrap(t) {
            return "wrap" === this.lookupStyle(t, "flex-wrap");
          }
          lookupAttributeValue(t, o) {
            return t.getAttribute(o) ?? "";
          }
          lookupInlineStyle(t, o) {
            return (0, h.NF)(this._platformId)
              ? t.style.getPropertyValue(o)
              : (function hr(e, n) {
                  return Gn(e)[n] ?? "";
                })(t, o);
          }
          lookupStyle(t, o, s = !1) {
            let r = "";
            return (
              t &&
                ((r = this.lookupInlineStyle(t, o)) ||
                  ((0, h.NF)(this._platformId)
                    ? s || (r = getComputedStyle(t).getPropertyValue(o))
                    : this._serverModuleLoaded &&
                      (r = this._serverStylesheet.getStyleForElement(t, o)))),
              r ? r.trim() : ""
            );
          }
          _applyMultiValueStyleToElement(t, o) {
            Object.keys(t)
              .sort()
              .forEach((s) => {
                const r = t[s],
                  l = Array.isArray(r) ? r : [r];
                l.sort();
                for (let a of l)
                  (a = a ? a + "" : ""),
                    (0, h.NF)(this._platformId) || !this._serverModuleLoaded
                      ? (0, h.NF)(this._platformId)
                        ? o.style.setProperty(s, a)
                        : gr(o, s, a)
                      : this._serverStylesheet.addStyleToElement(o, s, a);
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.LFG(fr), i.LFG(ge), i.LFG(i.Lbi), i.LFG(Ct));
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function gr(e, n, t) {
        n = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        const o = Gn(e);
        (o[n] = t ?? ""),
          (function mr(e, n) {
            let t = "";
            for (const o in n) n[o] && (t += `${o}:${n[o]};`);
            e.setAttribute("style", t);
          })(e, o);
      }
      function Gn(e) {
        const n = {},
          t = e.getAttribute("style");
        if (t) {
          const o = t.split(/;+/g);
          for (let s = 0; s < o.length; s++) {
            const r = o[s].trim();
            if (r.length > 0) {
              const l = r.indexOf(":");
              if (-1 === l) throw new Error(`Invalid CSS style: ${r}`);
              n[r.substr(0, l).trim()] = r.substr(l + 1).trim();
            }
          }
        }
        return n;
      }
      function Ie(e, n) {
        return ((n && n.priority) || 0) - ((e && e.priority) || 0);
      }
      function pr(e, n) {
        return (e.priority || 0) - (n.priority || 0);
      }
      let bi = (() => {
        class e {
          constructor(t, o, s) {
            (this._zone = t),
              (this._platformId = o),
              (this._document = s),
              (this.source = new fe.X(new ee(!0))),
              (this.registry = new Map()),
              (this.pendingRemoveListenerFns = []),
              (this._observable$ = this.source.asObservable());
          }
          get activations() {
            const t = [];
            return (
              this.registry.forEach((o, s) => {
                o.matches && t.push(s);
              }),
              t
            );
          }
          isActive(t) {
            return (
              this.registry.get(t)?.matches ??
              this.registerQuery(t).some((s) => s.matches)
            );
          }
          observe(t, o = !1) {
            if (t && t.length) {
              const s = this._observable$.pipe(
                  (0, Dt.h)((l) => !o || t.indexOf(l.mediaQuery) > -1),
                ),
                r = new lr.y((l) => {
                  const a = this.registerQuery(t);
                  if (a.length) {
                    const p = a.pop();
                    a.forEach((C) => {
                      l.next(C);
                    }),
                      this.source.next(p);
                  }
                  l.complete();
                });
              return (0, ue.T)(r, s);
            }
            return this._observable$;
          }
          registerQuery(t) {
            const o = Array.isArray(t) ? t : [t],
              s = [];
            return (
              (function _r(e, n) {
                const t = e.filter((o) => !Nn[o]);
                if (t.length > 0) {
                  const o = t.join(", ");
                  try {
                    const s = n.createElement("style");
                    s.setAttribute("type", "text/css"),
                      s.styleSheet ||
                        s.appendChild(
                          n.createTextNode(
                            `\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${o} {.fx-query-test{ }}\n`,
                          ),
                        ),
                      n.head.appendChild(s),
                      t.forEach((r) => (Nn[r] = s));
                  } catch (s) {
                    console.error(s);
                  }
                }
              })(o, this._document),
              o.forEach((r) => {
                const l = (p) => {
                  this._zone.run(() => this.source.next(new ee(p.matches, r)));
                };
                let a = this.registry.get(r);
                a ||
                  ((a = this.buildMQL(r)),
                  a.addListener(l),
                  this.pendingRemoveListenerFns.push(() => a.removeListener(l)),
                  this.registry.set(r, a)),
                  a.matches && s.push(new ee(!0, r));
              }),
              s
            );
          }
          ngOnDestroy() {
            let t;
            for (; (t = this.pendingRemoveListenerFns.pop()); ) t();
          }
          buildMQL(t) {
            return (function yr(e, n) {
              return n && window.matchMedia("all").addListener
                ? window.matchMedia(e)
                : (function xr(e) {
                    const n = new EventTarget();
                    return (
                      (n.matches = "all" === e || "" === e),
                      (n.media = e),
                      (n.addListener = () => {}),
                      (n.removeListener = () => {}),
                      (n.addEventListener = () => {}),
                      (n.dispatchEvent = () => !1),
                      (n.onchange = null),
                      n
                    );
                  })(e);
            })(t, (0, h.NF)(this._platformId));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.LFG(i.R0b), i.LFG(i.Lbi), i.LFG(h.K0));
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Nn = {},
        vr = [
          {
            alias: "xs",
            mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)",
            priority: 1e3,
          },
          {
            alias: "sm",
            mediaQuery:
              "screen and (min-width: 600px) and (max-width: 959.98px)",
            priority: 900,
          },
          {
            alias: "md",
            mediaQuery:
              "screen and (min-width: 960px) and (max-width: 1279.98px)",
            priority: 800,
          },
          {
            alias: "lg",
            mediaQuery:
              "screen and (min-width: 1280px) and (max-width: 1919.98px)",
            priority: 700,
          },
          {
            alias: "xl",
            mediaQuery:
              "screen and (min-width: 1920px) and (max-width: 4999.98px)",
            priority: 600,
          },
          {
            alias: "lt-sm",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 599.98px)",
            priority: 950,
          },
          {
            alias: "lt-md",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 959.98px)",
            priority: 850,
          },
          {
            alias: "lt-lg",
            overlapping: !0,
            mediaQuery: "screen and (max-width: 1279.98px)",
            priority: 750,
          },
          {
            alias: "lt-xl",
            overlapping: !0,
            priority: 650,
            mediaQuery: "screen and (max-width: 1919.98px)",
          },
          {
            alias: "gt-xs",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 600px)",
            priority: -950,
          },
          {
            alias: "gt-sm",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 960px)",
            priority: -850,
          },
          {
            alias: "gt-md",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 1280px)",
            priority: -750,
          },
          {
            alias: "gt-lg",
            overlapping: !0,
            mediaQuery: "screen and (min-width: 1920px)",
            priority: -650,
          },
        ],
        Hn = "(orientation: portrait) and (max-width: 599.98px)",
        Yn = "(orientation: landscape) and (max-width: 959.98px)",
        zn =
          "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",
        jn =
          "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",
        Un = "(orientation: portrait) and (min-width: 840px)",
        qn = "(orientation: landscape) and (min-width: 1280px)",
        kt = {
          HANDSET: `${Hn}, ${Yn}`,
          TABLET: `${zn} , ${jn}`,
          WEB: `${Un}, ${qn} `,
          HANDSET_PORTRAIT: `${Hn}`,
          TABLET_PORTRAIT: `${zn} `,
          WEB_PORTRAIT: `${Un}`,
          HANDSET_LANDSCAPE: `${Yn}`,
          TABLET_LANDSCAPE: `${jn}`,
          WEB_LANDSCAPE: `${qn}`,
        },
        Cr = [
          { alias: "handset", priority: 2e3, mediaQuery: kt.HANDSET },
          {
            alias: "handset.landscape",
            priority: 2e3,
            mediaQuery: kt.HANDSET_LANDSCAPE,
          },
          {
            alias: "handset.portrait",
            priority: 2e3,
            mediaQuery: kt.HANDSET_PORTRAIT,
          },
          { alias: "tablet", priority: 2100, mediaQuery: kt.TABLET },
          {
            alias: "tablet.landscape",
            priority: 2100,
            mediaQuery: kt.TABLET_LANDSCAPE,
          },
          {
            alias: "tablet.portrait",
            priority: 2100,
            mediaQuery: kt.TABLET_PORTRAIT,
          },
          { alias: "web", priority: 2200, mediaQuery: kt.WEB, overlapping: !0 },
          {
            alias: "web.landscape",
            priority: 2200,
            mediaQuery: kt.WEB_LANDSCAPE,
            overlapping: !0,
          },
          {
            alias: "web.portrait",
            priority: 2200,
            mediaQuery: kt.WEB_PORTRAIT,
            overlapping: !0,
          },
        ],
        br = /(\.|-|_)/g;
      function wr(e) {
        let n = e.length > 0 ? e.charAt(0) : "",
          t = e.length > 1 ? e.slice(1) : "";
        return n.toUpperCase() + t;
      }
      const Sr = new i.OlP("Token (@angular/flex-layout) Breakpoints", {
        providedIn: "root",
        factory: () => {
          const e = (0, i.f3M)(Ci),
            n = (0, i.f3M)(Ct),
            t = [].concat.apply(
              [],
              (e || []).map((s) => (Array.isArray(s) ? s : [s])),
            );
          return (function Dr(e, n = []) {
            const t = {};
            return (
              e.forEach((o) => {
                t[o.alias] = o;
              }),
              n.forEach((o) => {
                t[o.alias] ? It(t[o.alias], o) : (t[o.alias] = o);
              }),
              (function Fr(e) {
                return (
                  e.forEach((n) => {
                    n.suffix ||
                      ((n.suffix = (function Ar(e) {
                        return e.replace(br, "|").split("|").map(wr).join("");
                      })(n.alias)),
                      (n.overlapping = !!n.overlapping));
                  }),
                  e
                );
              })(Object.keys(t).map((o) => t[o]))
            );
          })(
            (n.disableDefaultBps ? [] : vr).concat(
              n.addOrientationBps ? Cr : [],
            ),
            t,
          );
        },
      });
      let wi = (() => {
        class e {
          constructor(t) {
            (this.findByMap = new Map()), (this.items = [...t].sort(pr));
          }
          findByAlias(t) {
            return t ? this.findWithPredicate(t, (o) => o.alias === t) : null;
          }
          findByQuery(t) {
            return this.findWithPredicate(t, (o) => o.mediaQuery === t);
          }
          get overlappings() {
            return this.items.filter((t) => t.overlapping);
          }
          get aliases() {
            return this.items.map((t) => t.alias);
          }
          get suffixes() {
            return this.items.map((t) => t?.suffix ?? "");
          }
          findWithPredicate(t, o) {
            let s = this.findByMap.get(t);
            return (
              s || ((s = this.items.find(o) ?? null), this.findByMap.set(t, s)),
              s ?? null
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.LFG(Sr));
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const me = "print",
        Mr = { alias: me, mediaQuery: me, priority: 1e3 };
      let Er = (() => {
        class e {
          constructor(t, o, s) {
            (this.breakpoints = t),
              (this.layoutConfig = o),
              (this._document = s),
              (this.registeredBeforeAfterPrintHooks = !1),
              (this.isPrintingBeforeAfterEvent = !1),
              (this.beforePrintEventListeners = []),
              (this.afterPrintEventListeners = []),
              (this.formerActivations = null),
              (this.isPrinting = !1),
              (this.queue = new Or()),
              (this.deactivations = []);
          }
          withPrintQuery(t) {
            return [...t, me];
          }
          isPrintEvent(t) {
            return t.mediaQuery.startsWith(me);
          }
          get printAlias() {
            return [...(this.layoutConfig.printWithBreakpoints ?? [])];
          }
          get printBreakPoints() {
            return this.printAlias
              .map((t) => this.breakpoints.findByAlias(t))
              .filter((t) => null !== t);
          }
          getEventBreakpoints({ mediaQuery: t }) {
            const o = this.breakpoints.findByQuery(t);
            return (
              o ? [...this.printBreakPoints, o] : this.printBreakPoints
            ).sort(Ie);
          }
          updateEvent(t) {
            let o = this.breakpoints.findByQuery(t.mediaQuery);
            return (
              this.isPrintEvent(t) &&
                ((o = this.getEventBreakpoints(t)[0]),
                (t.mediaQuery = o?.mediaQuery ?? "")),
              Pn(t, o)
            );
          }
          registerBeforeAfterPrintHooks(t) {
            if (
              !this._document.defaultView ||
              this.registeredBeforeAfterPrintHooks
            )
              return;
            this.registeredBeforeAfterPrintHooks = !0;
            const o = () => {
                this.isPrinting ||
                  ((this.isPrintingBeforeAfterEvent = !0),
                  this.startPrinting(
                    t,
                    this.getEventBreakpoints(new ee(!0, me)),
                  ),
                  t.updateStyles());
              },
              s = () => {
                (this.isPrintingBeforeAfterEvent = !1),
                  this.isPrinting && (this.stopPrinting(t), t.updateStyles());
              };
            this._document.defaultView.addEventListener("beforeprint", o),
              this._document.defaultView.addEventListener("afterprint", s),
              this.beforePrintEventListeners.push(o),
              this.afterPrintEventListeners.push(s);
          }
          interceptEvents(t) {
            return (o) => {
              this.isPrintEvent(o)
                ? o.matches && !this.isPrinting
                  ? (this.startPrinting(t, this.getEventBreakpoints(o)),
                    t.updateStyles())
                  : !o.matches &&
                    this.isPrinting &&
                    !this.isPrintingBeforeAfterEvent &&
                    (this.stopPrinting(t), t.updateStyles())
                : this.collectActivations(t, o);
            };
          }
          blockPropagation() {
            return (t) => !(this.isPrinting || this.isPrintEvent(t));
          }
          startPrinting(t, o) {
            (this.isPrinting = !0),
              (this.formerActivations = t.activatedBreakpoints),
              (t.activatedBreakpoints = this.queue.addPrintBreakpoints(o));
          }
          stopPrinting(t) {
            (t.activatedBreakpoints = this.deactivations),
              (this.deactivations = []),
              (this.formerActivations = null),
              this.queue.clear(),
              (this.isPrinting = !1);
          }
          collectActivations(t, o) {
            if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
              if (!this.isPrintingBeforeAfterEvent)
                return void (this.deactivations = []);
              if (!o.matches) {
                const s = this.breakpoints.findByQuery(o.mediaQuery);
                if (s) {
                  const r =
                      this.formerActivations &&
                      this.formerActivations.includes(s),
                    l =
                      !this.formerActivations &&
                      t.activatedBreakpoints.includes(s);
                  (r || l) &&
                    (this.deactivations.push(s), this.deactivations.sort(Ie));
                }
              }
            }
          }
          ngOnDestroy() {
            this._document.defaultView &&
              (this.beforePrintEventListeners.forEach((t) =>
                this._document.defaultView.removeEventListener(
                  "beforeprint",
                  t,
                ),
              ),
              this.afterPrintEventListeners.forEach((t) =>
                this._document.defaultView.removeEventListener("afterprint", t),
              ));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.LFG(wi), i.LFG(Ct), i.LFG(h.K0));
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      class Or {
        constructor() {
          this.printBreakpoints = [];
        }
        addPrintBreakpoints(n) {
          return (
            n.push(Mr),
            n.sort(Ie),
            n.forEach((t) => this.addBreakpoint(t)),
            this.printBreakpoints
          );
        }
        addBreakpoint(n) {
          n &&
            void 0 ===
              this.printBreakpoints.find(
                (o) => o.mediaQuery === n.mediaQuery,
              ) &&
            (this.printBreakpoints = (function Rr(e) {
              return e?.mediaQuery.startsWith(me) ?? !1;
            })(n)
              ? [n, ...this.printBreakpoints]
              : [...this.printBreakpoints, n]);
        }
        clear() {
          this.printBreakpoints = [];
        }
      }
      let P = (() => {
        class e {
          constructor(t, o, s) {
            (this.matchMedia = t),
              (this.breakpoints = o),
              (this.hook = s),
              (this._useFallbacks = !0),
              (this._activatedBreakpoints = []),
              (this.elementMap = new Map()),
              (this.elementKeyMap = new WeakMap()),
              (this.watcherMap = new WeakMap()),
              (this.updateMap = new WeakMap()),
              (this.clearMap = new WeakMap()),
              (this.subject = new N.x()),
              this.observeActivations();
          }
          get activatedAlias() {
            return this.activatedBreakpoints[0]?.alias ?? "";
          }
          set activatedBreakpoints(t) {
            this._activatedBreakpoints = [...t];
          }
          get activatedBreakpoints() {
            return [...this._activatedBreakpoints];
          }
          set useFallbacks(t) {
            this._useFallbacks = t;
          }
          onMediaChange(t) {
            const o = this.findByQuery(t.mediaQuery);
            if (o) {
              t = Pn(t, o);
              const s = this.activatedBreakpoints.indexOf(o);
              t.matches && -1 === s
                ? (this._activatedBreakpoints.push(o),
                  this._activatedBreakpoints.sort(Ie),
                  this.updateStyles())
                : !t.matches &&
                  -1 !== s &&
                  (this._activatedBreakpoints.splice(s, 1),
                  this._activatedBreakpoints.sort(Ie),
                  this.updateStyles());
            }
          }
          init(t, o, s, r, l = []) {
            $n(this.updateMap, t, o, s),
              $n(this.clearMap, t, o, r),
              this.buildElementKeyMap(t, o),
              this.watchExtraTriggers(t, o, l);
          }
          getValue(t, o, s) {
            const r = this.elementMap.get(t);
            if (r) {
              const l = void 0 !== s ? r.get(s) : this.getActivatedValues(r, o);
              if (l) return l.get(o);
            }
          }
          hasValue(t, o) {
            const s = this.elementMap.get(t);
            if (s) {
              const r = this.getActivatedValues(s, o);
              if (r) return void 0 !== r.get(o) || !1;
            }
            return !1;
          }
          setValue(t, o, s, r) {
            let l = this.elementMap.get(t);
            if (l) {
              const p = (l.get(r) ?? new Map()).set(o, s);
              l.set(r, p), this.elementMap.set(t, l);
            } else
              (l = new Map().set(r, new Map().set(o, s))),
                this.elementMap.set(t, l);
            const a = this.getValue(t, o);
            void 0 !== a && this.updateElement(t, o, a);
          }
          trackValue(t, o) {
            return this.subject
              .asObservable()
              .pipe((0, Dt.h)((s) => s.element === t && s.key === o));
          }
          updateStyles() {
            this.elementMap.forEach((t, o) => {
              const s = new Set(this.elementKeyMap.get(o));
              let r = this.getActivatedValues(t);
              r &&
                r.forEach((l, a) => {
                  this.updateElement(o, a, l), s.delete(a);
                }),
                s.forEach((l) => {
                  if (((r = this.getActivatedValues(t, l)), r)) {
                    const a = r.get(l);
                    this.updateElement(o, l, a);
                  } else this.clearElement(o, l);
                });
            });
          }
          clearElement(t, o) {
            const s = this.clearMap.get(t);
            if (s) {
              const r = s.get(o);
              r && (r(), this.subject.next({ element: t, key: o, value: "" }));
            }
          }
          updateElement(t, o, s) {
            const r = this.updateMap.get(t);
            if (r) {
              const l = r.get(o);
              l && (l(s), this.subject.next({ element: t, key: o, value: s }));
            }
          }
          releaseElement(t) {
            const o = this.watcherMap.get(t);
            o && (o.forEach((r) => r.unsubscribe()), this.watcherMap.delete(t));
            const s = this.elementMap.get(t);
            s && (s.forEach((r, l) => s.delete(l)), this.elementMap.delete(t));
          }
          triggerUpdate(t, o) {
            const s = this.elementMap.get(t);
            if (s) {
              const r = this.getActivatedValues(s, o);
              r &&
                (o
                  ? this.updateElement(t, o, r.get(o))
                  : r.forEach((l, a) => this.updateElement(t, a, l)));
            }
          }
          buildElementKeyMap(t, o) {
            let s = this.elementKeyMap.get(t);
            s || ((s = new Set()), this.elementKeyMap.set(t, s)), s.add(o);
          }
          watchExtraTriggers(t, o, s) {
            if (s && s.length) {
              let r = this.watcherMap.get(t);
              if (
                (r || ((r = new Map()), this.watcherMap.set(t, r)), !r.get(o))
              ) {
                const a = (0, ue.T)(...s).subscribe(() => {
                  const p = this.getValue(t, o);
                  this.updateElement(t, o, p);
                });
                r.set(o, a);
              }
            }
          }
          findByQuery(t) {
            return this.breakpoints.findByQuery(t);
          }
          getActivatedValues(t, o) {
            for (let r = 0; r < this.activatedBreakpoints.length; r++) {
              const a = t.get(this.activatedBreakpoints[r].alias);
              if (a && (void 0 === o || (a.has(o) && null != a.get(o))))
                return a;
            }
            if (!this._useFallbacks) return;
            const s = t.get("");
            return void 0 === o || (s && s.has(o)) ? s : void 0;
          }
          observeActivations() {
            const t = this.breakpoints.items.map((o) => o.mediaQuery);
            this.hook.registerBeforeAfterPrintHooks(this),
              this.matchMedia
                .observe(this.hook.withPrintQuery(t))
                .pipe(
                  (0, fi.b)(this.hook.interceptEvents(this)),
                  (0, Dt.h)(this.hook.blockPropagation()),
                )
                .subscribe(this.onMediaChange.bind(this));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.LFG(bi), i.LFG(wi), i.LFG(Er));
          }),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function $n(e, n, t, o) {
        if (void 0 !== o) {
          const s = e.get(n) ?? new Map();
          s.set(t, o), e.set(n, s);
        }
      }
      let Y = (() => {
        class e {
          constructor(t, o, s, r) {
            (this.elementRef = t),
              (this.styleBuilder = o),
              (this.styler = s),
              (this.marshal = r),
              (this.DIRECTIVE_KEY = ""),
              (this.inputs = []),
              (this.mru = {}),
              (this.destroySubject = new N.x()),
              (this.styleCache = new Map());
          }
          get parentElement() {
            return this.elementRef.nativeElement.parentElement;
          }
          get nativeElement() {
            return this.elementRef.nativeElement;
          }
          get activatedValue() {
            return this.marshal.getValue(
              this.nativeElement,
              this.DIRECTIVE_KEY,
            );
          }
          set activatedValue(t) {
            this.marshal.setValue(
              this.nativeElement,
              this.DIRECTIVE_KEY,
              t,
              this.marshal.activatedAlias,
            );
          }
          ngOnChanges(t) {
            Object.keys(t).forEach((o) => {
              if (-1 !== this.inputs.indexOf(o)) {
                const s = o.split(".").slice(1).join(".");
                this.setValue(t[o].currentValue, s);
              }
            });
          }
          ngOnDestroy() {
            this.destroySubject.next(),
              this.destroySubject.complete(),
              this.marshal.releaseElement(this.nativeElement);
          }
          init(t = []) {
            this.marshal.init(
              this.elementRef.nativeElement,
              this.DIRECTIVE_KEY,
              this.updateWithValue.bind(this),
              this.clearStyles.bind(this),
              t,
            );
          }
          addStyles(t, o) {
            const s = this.styleBuilder,
              r = s.shouldCache;
            let l = this.styleCache.get(t);
            (!l || !r) &&
              ((l = s.buildStyles(t, o)), r && this.styleCache.set(t, l)),
              (this.mru = { ...l }),
              this.applyStyleToElement(l),
              s.sideEffect(t, l, o);
          }
          clearStyles() {
            Object.keys(this.mru).forEach((t) => {
              this.mru[t] = "";
            }),
              this.applyStyleToElement(this.mru),
              (this.mru = {}),
              (this.currentValue = void 0);
          }
          triggerUpdate() {
            this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
          }
          getFlexFlowDirection(t, o = !1) {
            if (t) {
              const [s, r] = this.styler.getFlowDirection(t);
              if (!r && o) {
                const l = Ln(s);
                this.styler.applyStyleToElements(l, [t]);
              }
              return s.trim();
            }
            return "row";
          }
          hasWrap(t) {
            return this.styler.hasWrap(t);
          }
          applyStyleToElement(t, o, s = this.nativeElement) {
            this.styler.applyStyleToElement(s, t, o);
          }
          setValue(t, o) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, t, o);
          }
          updateWithValue(t) {
            this.currentValue !== t &&
              (this.addStyles(t), (this.currentValue = t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(i.SBq), i.Y36(U), i.Y36(B), i.Y36(P));
          }),
          (e.ɵdir = i.lG2({ type: e, features: [i.TTD] })),
          e
        );
      })();
      class kr extends EventTarget {
        constructor(n) {
          super(),
            (this._mediaQuery = n),
            (this._isActive = !1),
            (this._listeners = []),
            (this.onchange = null);
        }
        get matches() {
          return this._isActive;
        }
        get media() {
          return this._mediaQuery;
        }
        destroy() {
          this.deactivate(), (this._listeners = []);
        }
        activate() {
          return (
            this._isActive ||
              ((this._isActive = !0),
              this._listeners.forEach((n) => {
                n.call(this, { matches: this.matches, media: this.media });
              })),
            this
          );
        }
        deactivate() {
          return (
            this._isActive &&
              ((this._isActive = !1),
              this._listeners.forEach((n) => {
                n.call(this, { matches: this.matches, media: this.media });
              })),
            this
          );
        }
        addListener(n) {
          -1 === this._listeners.indexOf(n) && this._listeners.push(n),
            this._isActive &&
              n.call(this, { matches: this.matches, media: this.media });
        }
        removeListener(n) {}
        dispatchEvent(n) {
          return !1;
        }
      }
      let Tr = (() => {
        class e extends U {
          buildStyles(t, { display: o }) {
            const s = Ln(t);
            return { ...s, display: "none" === o ? o : s.display };
          }
        }
        return (
          (e.ɵfac = (function () {
            let n;
            return function (o) {
              return (n || (n = i.n5z(e)))(o || e);
            };
          })()),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Lr = [
        "fxLayout",
        "fxLayout.xs",
        "fxLayout.sm",
        "fxLayout.md",
        "fxLayout.lg",
        "fxLayout.xl",
        "fxLayout.lt-sm",
        "fxLayout.lt-md",
        "fxLayout.lt-lg",
        "fxLayout.lt-xl",
        "fxLayout.gt-xs",
        "fxLayout.gt-sm",
        "fxLayout.gt-md",
        "fxLayout.gt-lg",
      ];
      let Vr = (() => {
          class e extends Y {
            constructor(t, o, s, r, l) {
              super(t, s, o, r),
                (this._config = l),
                (this.DIRECTIVE_KEY = "layout"),
                this.init();
            }
            updateWithValue(t) {
              const s = this._config.detectLayoutDisplay
                ? this.styler.lookupStyle(this.nativeElement, "display")
                : "";
              (this.styleCache = Jn.get(s) ?? new Map()),
                Jn.set(s, this.styleCache),
                this.currentValue !== t &&
                  (this.addStyles(t, { display: s }), (this.currentValue = t));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Y36(i.SBq),
                i.Y36(B),
                i.Y36(Tr),
                i.Y36(P),
                i.Y36(Ct),
              );
            }),
            (e.ɵdir = i.lG2({ type: e, features: [i.qOj] })),
            e
          );
        })(),
        Zn = (() => {
          class e extends Vr {
            constructor() {
              super(...arguments), (this.inputs = Lr);
            }
          }
          return (
            (e.ɵfac = (function () {
              let n;
              return function (o) {
                return (n || (n = i.n5z(e)))(o || e);
              };
            })()),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "fxLayout", ""],
                ["", "fxLayout.xs", ""],
                ["", "fxLayout.sm", ""],
                ["", "fxLayout.md", ""],
                ["", "fxLayout.lg", ""],
                ["", "fxLayout.xl", ""],
                ["", "fxLayout.lt-sm", ""],
                ["", "fxLayout.lt-md", ""],
                ["", "fxLayout.lt-lg", ""],
                ["", "fxLayout.lt-xl", ""],
                ["", "fxLayout.gt-xs", ""],
                ["", "fxLayout.gt-sm", ""],
                ["", "fxLayout.gt-md", ""],
                ["", "fxLayout.gt-lg", ""],
              ],
              inputs: {
                fxLayout: "fxLayout",
                "fxLayout.xs": "fxLayout.xs",
                "fxLayout.sm": "fxLayout.sm",
                "fxLayout.md": "fxLayout.md",
                "fxLayout.lg": "fxLayout.lg",
                "fxLayout.xl": "fxLayout.xl",
                "fxLayout.lt-sm": "fxLayout.lt-sm",
                "fxLayout.lt-md": "fxLayout.lt-md",
                "fxLayout.lt-lg": "fxLayout.lt-lg",
                "fxLayout.lt-xl": "fxLayout.lt-xl",
                "fxLayout.gt-xs": "fxLayout.gt-xs",
                "fxLayout.gt-sm": "fxLayout.gt-sm",
                "fxLayout.gt-md": "fxLayout.gt-md",
                "fxLayout.gt-lg": "fxLayout.gt-lg",
              },
              features: [i.qOj],
            })),
            e
          );
        })();
      const Jn = new Map();
      let Al = (() => {
        class e extends U {
          buildStyles(t, o) {
            const s = {},
              [r, l] = t.split(" ");
            switch (r) {
              case "center":
                s["justify-content"] = "center";
                break;
              case "space-around":
                s["justify-content"] = "space-around";
                break;
              case "space-between":
                s["justify-content"] = "space-between";
                break;
              case "space-evenly":
                s["justify-content"] = "space-evenly";
                break;
              case "end":
              case "flex-end":
                s["justify-content"] = "flex-end";
                break;
              default:
                s["justify-content"] = "flex-start";
            }
            switch (l) {
              case "start":
              case "flex-start":
                s["align-items"] = s["align-content"] = "flex-start";
                break;
              case "center":
                s["align-items"] = s["align-content"] = "center";
                break;
              case "end":
              case "flex-end":
                s["align-items"] = s["align-content"] = "flex-end";
                break;
              case "space-between":
                (s["align-content"] = "space-between"),
                  (s["align-items"] = "stretch");
                break;
              case "space-around":
                (s["align-content"] = "space-around"),
                  (s["align-items"] = "stretch");
                break;
              case "baseline":
                (s["align-content"] = "stretch"),
                  (s["align-items"] = "baseline");
                break;
              default:
                s["align-items"] = s["align-content"] = "stretch";
            }
            return It(s, {
              display: o.inline ? "inline-flex" : "flex",
              "flex-direction": o.layout,
              "box-sizing": "border-box",
              "max-width":
                "stretch" === l ? (Re(o.layout) ? null : "100%") : null,
              "max-height": "stretch" === l && Re(o.layout) ? "100%" : null,
            });
          }
        }
        return (
          (e.ɵfac = (function () {
            let n;
            return function (o) {
              return (n || (n = i.n5z(e)))(o || e);
            };
          })()),
          (e.ɵprov = i.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Fl = [
        "fxLayoutAlign",
        "fxLayoutAlign.xs",
        "fxLayoutAlign.sm",
        "fxLayoutAlign.md",
        "fxLayoutAlign.lg",
        "fxLayoutAlign.xl",
        "fxLayoutAlign.lt-sm",
        "fxLayoutAlign.lt-md",
        "fxLayoutAlign.lt-lg",
        "fxLayoutAlign.lt-xl",
        "fxLayoutAlign.gt-xs",
        "fxLayoutAlign.gt-sm",
        "fxLayoutAlign.gt-md",
        "fxLayoutAlign.gt-lg",
      ];
      let Dl = (() => {
          class e extends Y {
            constructor(t, o, s, r) {
              super(t, s, o, r),
                (this.DIRECTIVE_KEY = "layout-align"),
                (this.layout = "row"),
                (this.inline = !1),
                this.init(),
                this.marshal
                  .trackValue(this.nativeElement, "layout")
                  .pipe((0, ht.R)(this.destroySubject))
                  .subscribe(this.onLayoutChange.bind(this));
            }
            updateWithValue(t) {
              const o = this.layout || "row",
                s = this.inline;
              "row" === o && s
                ? (this.styleCache = Rl)
                : "row" !== o || s
                  ? "row-reverse" === o && s
                    ? (this.styleCache = kl)
                    : "row-reverse" !== o || s
                      ? "column" === o && s
                        ? (this.styleCache = Il)
                        : "column" !== o || s
                          ? "column-reverse" === o && s
                            ? (this.styleCache = Tl)
                            : "column-reverse" === o &&
                              !s &&
                              (this.styleCache = Ol)
                          : (this.styleCache = Ml)
                      : (this.styleCache = El)
                  : (this.styleCache = Sl),
                this.addStyles(t, { layout: o, inline: s });
            }
            onLayoutChange(t) {
              const o = t.value.split(" ");
              (this.layout = o[0]),
                (this.inline = t.value.includes("inline")),
                Ye.find((s) => s === this.layout) || (this.layout = "row"),
                this.triggerUpdate();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.SBq), i.Y36(B), i.Y36(Al), i.Y36(P));
            }),
            (e.ɵdir = i.lG2({ type: e, features: [i.qOj] })),
            e
          );
        })(),
        eo = (() => {
          class e extends Dl {
            constructor() {
              super(...arguments), (this.inputs = Fl);
            }
          }
          return (
            (e.ɵfac = (function () {
              let n;
              return function (o) {
                return (n || (n = i.n5z(e)))(o || e);
              };
            })()),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "fxLayoutAlign", ""],
                ["", "fxLayoutAlign.xs", ""],
                ["", "fxLayoutAlign.sm", ""],
                ["", "fxLayoutAlign.md", ""],
                ["", "fxLayoutAlign.lg", ""],
                ["", "fxLayoutAlign.xl", ""],
                ["", "fxLayoutAlign.lt-sm", ""],
                ["", "fxLayoutAlign.lt-md", ""],
                ["", "fxLayoutAlign.lt-lg", ""],
                ["", "fxLayoutAlign.lt-xl", ""],
                ["", "fxLayoutAlign.gt-xs", ""],
                ["", "fxLayoutAlign.gt-sm", ""],
                ["", "fxLayoutAlign.gt-md", ""],
                ["", "fxLayoutAlign.gt-lg", ""],
              ],
              inputs: {
                fxLayoutAlign: "fxLayoutAlign",
                "fxLayoutAlign.xs": "fxLayoutAlign.xs",
                "fxLayoutAlign.sm": "fxLayoutAlign.sm",
                "fxLayoutAlign.md": "fxLayoutAlign.md",
                "fxLayoutAlign.lg": "fxLayoutAlign.lg",
                "fxLayoutAlign.xl": "fxLayoutAlign.xl",
                "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
                "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
                "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
                "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
                "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
                "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
                "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
                "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg",
              },
              features: [i.qOj],
            })),
            e
          );
        })();
      const Sl = new Map(),
        Ml = new Map(),
        El = new Map(),
        Ol = new Map(),
        Rl = new Map(),
        Il = new Map(),
        kl = new Map(),
        Tl = new Map();
      let io = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({ imports: [yi, Ht.vT] })),
          e
        );
      })();
      var no = y(9643);
      const Ll = ["matFormFieldNotchedOutline", ""],
        Vl = ["*"],
        Bl = ["textField"],
        Pl = ["iconPrefixContainer"],
        Gl = ["textPrefixContainer"];
      function Nl(e, n) {
        1 & e && i._UZ(0, "span", 19);
      }
      function Hl(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "label", 17),
            i.NdJ("cdkObserveContent", function () {
              i.CHM(t);
              const s = i.oxw(2);
              return i.KtG(s._refreshOutlineNotchWidth());
            }),
            i.Hsn(1, 1),
            i.YNc(2, Nl, 1, 0, "span", 18),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(2);
          i.Q6J("floating", t._shouldLabelFloat())(
            "cdkObserveContentDisabled",
            !t._hasOutline(),
          )("id", t._labelId),
            i.uIk("for", t._control.id)("aria-owns", t._control.id),
            i.xp6(2),
            i.Q6J("ngIf", !t.hideRequiredMarker && t._control.required);
        }
      }
      function Yl(e, n) {
        if ((1 & e && i.YNc(0, Hl, 3, 6, "label", 16), 2 & e)) {
          const t = i.oxw();
          i.Q6J("ngIf", t._hasFloatingLabel());
        }
      }
      function zl(e, n) {
        1 & e && i._UZ(0, "div", 20);
      }
      function jl(e, n) {}
      function Ul(e, n) {
        if ((1 & e && i.YNc(0, jl, 0, 0, "ng-template", 22), 2 & e)) {
          i.oxw(2);
          const t = i.MAs(1);
          i.Q6J("ngTemplateOutlet", t);
        }
      }
      function ql(e, n) {
        if (
          (1 & e &&
            (i.TgZ(0, "div", 21),
            i.YNc(1, Ul, 1, 1, "ng-template", 9),
            i.qZA()),
          2 & e)
        ) {
          const t = i.oxw();
          i.Q6J("matFormFieldNotchedOutlineOpen", t._shouldLabelFloat())(
            "matFormFieldNotchedOutlineLabelWidth",
            t._labelWidth,
          ),
            i.xp6(1),
            i.Q6J("ngIf", !t._forceDisplayInfixLabel());
        }
      }
      function $l(e, n) {
        1 & e && (i.TgZ(0, "div", 23, 24), i.Hsn(2, 2), i.qZA());
      }
      function Wl(e, n) {
        1 & e && (i.TgZ(0, "div", 25, 26), i.Hsn(2, 3), i.qZA());
      }
      function Xl(e, n) {}
      function Ql(e, n) {
        if ((1 & e && i.YNc(0, Xl, 0, 0, "ng-template", 22), 2 & e)) {
          i.oxw();
          const t = i.MAs(1);
          i.Q6J("ngTemplateOutlet", t);
        }
      }
      function Zl(e, n) {
        1 & e && (i.TgZ(0, "div", 27), i.Hsn(1, 4), i.qZA());
      }
      function Jl(e, n) {
        1 & e && (i.TgZ(0, "div", 28), i.Hsn(1, 5), i.qZA());
      }
      function Kl(e, n) {
        1 & e && i._UZ(0, "div", 29);
      }
      function ta(e, n) {
        if ((1 & e && (i.TgZ(0, "div", 30), i.Hsn(1, 6), i.qZA()), 2 & e)) {
          const t = i.oxw();
          i.Q6J("@transitionMessages", t._subscriptAnimationState);
        }
      }
      function ea(e, n) {
        if ((1 & e && (i.TgZ(0, "mat-hint", 34), i._uU(1), i.qZA()), 2 & e)) {
          const t = i.oxw(2);
          i.Q6J("id", t._hintLabelId), i.xp6(1), i.Oqu(t.hintLabel);
        }
      }
      function ia(e, n) {
        if (
          (1 & e &&
            (i.TgZ(0, "div", 31),
            i.YNc(1, ea, 2, 2, "mat-hint", 32),
            i.Hsn(2, 7),
            i._UZ(3, "div", 33),
            i.Hsn(4, 8),
            i.qZA()),
          2 & e)
        ) {
          const t = i.oxw();
          i.Q6J("@transitionMessages", t._subscriptAnimationState),
            i.xp6(1),
            i.Q6J("ngIf", t.hintLabel);
        }
      }
      const na = [
          "*",
          [["mat-label"]],
          [
            ["", "matPrefix", ""],
            ["", "matIconPrefix", ""],
          ],
          [["", "matTextPrefix", ""]],
          [["", "matTextSuffix", ""]],
          [
            ["", "matSuffix", ""],
            ["", "matIconSuffix", ""],
          ],
          [["mat-error"], ["", "matError", ""]],
          [["mat-hint", 3, "align", "end"]],
          [["mat-hint", "align", "end"]],
        ],
        oa = [
          "*",
          "mat-label",
          "[matPrefix], [matIconPrefix]",
          "[matTextPrefix]",
          "[matTextSuffix]",
          "[matSuffix], [matIconSuffix]",
          "mat-error, [matError]",
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']",
        ];
      let Ai = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵdir = i.lG2({ type: e, selectors: [["mat-label"]] })),
          e
        );
      })();
      const sa = new i.OlP("MatError");
      let ra = 0,
        oo = (() => {
          class e {
            constructor() {
              (this.align = "start"), (this.id = "mat-mdc-hint-" + ra++);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [["mat-hint"]],
              hostAttrs: [
                1,
                "mat-mdc-form-field-hint",
                "mat-mdc-form-field-bottom-align",
              ],
              hostVars: 4,
              hostBindings: function (t, o) {
                2 & t &&
                  (i.Ikx("id", o.id),
                  i.uIk("align", null),
                  i.ekj("mat-mdc-form-field-hint-end", "end" === o.align));
              },
              inputs: { align: "align", id: "id" },
            })),
            e
          );
        })();
      const la = new i.OlP("MatPrefix"),
        aa = new i.OlP("MatSuffix");
      let so = (() => {
        class e {
          constructor(t) {
            (this._elementRef = t), (this.floating = !1);
          }
          getWidth() {
            return (function da(e) {
              if (null !== e.offsetParent) return e.scrollWidth;
              const t = e.cloneNode(!0);
              t.style.setProperty("position", "absolute"),
                t.style.setProperty("transform", "translate(-9999px, -9999px)"),
                document.documentElement.appendChild(t);
              const o = t.scrollWidth;
              return t.remove(), o;
            })(this._elementRef.nativeElement);
          }
          get element() {
            return this._elementRef.nativeElement;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(i.SBq));
          }),
          (e.ɵdir = i.lG2({
            type: e,
            selectors: [["label", "matFormFieldFloatingLabel", ""]],
            hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
            hostVars: 2,
            hostBindings: function (t, o) {
              2 & t && i.ekj("mdc-floating-label--float-above", o.floating);
            },
            inputs: { floating: "floating" },
          })),
          e
        );
      })();
      const ro = "mdc-line-ripple--active",
        Ue = "mdc-line-ripple--deactivating";
      let lo = (() => {
          class e {
            constructor(t, o) {
              (this._elementRef = t),
                (this._handleTransitionEnd = (s) => {
                  const r = this._elementRef.nativeElement.classList,
                    l = r.contains(Ue);
                  "opacity" === s.propertyName && l && r.remove(ro, Ue);
                }),
                o.runOutsideAngular(() => {
                  t.nativeElement.addEventListener(
                    "transitionend",
                    this._handleTransitionEnd,
                  );
                });
            }
            activate() {
              const t = this._elementRef.nativeElement.classList;
              t.remove(Ue), t.add(ro);
            }
            deactivate() {
              this._elementRef.nativeElement.classList.add(Ue);
            }
            ngOnDestroy() {
              this._elementRef.nativeElement.removeEventListener(
                "transitionend",
                this._handleTransitionEnd,
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.SBq), i.Y36(i.R0b));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [["div", "matFormFieldLineRipple", ""]],
              hostAttrs: [1, "mdc-line-ripple"],
            })),
            e
          );
        })(),
        ao = (() => {
          class e {
            constructor(t, o) {
              (this._elementRef = t),
                (this._ngZone = o),
                (this.labelWidth = 0),
                (this.open = !1);
            }
            ngAfterViewInit() {
              const t = this._elementRef.nativeElement.querySelector(
                ".mdc-floating-label",
              );
              t
                ? (this._elementRef.nativeElement.classList.add(
                    "mdc-notched-outline--upgraded",
                  ),
                  "function" == typeof requestAnimationFrame &&
                    ((t.style.transitionDuration = "0s"),
                    this._ngZone.runOutsideAngular(() => {
                      requestAnimationFrame(
                        () => (t.style.transitionDuration = ""),
                      );
                    })))
                : this._elementRef.nativeElement.classList.add(
                    "mdc-notched-outline--no-label",
                  );
            }
            _getNotchWidth() {
              return this.open
                ? this.labelWidth > 0
                  ? `calc(${this.labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`
                  : "0px"
                : null;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.SBq), i.Y36(i.R0b));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["div", "matFormFieldNotchedOutline", ""]],
              hostAttrs: [1, "mdc-notched-outline"],
              hostVars: 2,
              hostBindings: function (t, o) {
                2 & t && i.ekj("mdc-notched-outline--notched", o.open);
              },
              inputs: {
                labelWidth: [
                  "matFormFieldNotchedOutlineLabelWidth",
                  "labelWidth",
                ],
                open: ["matFormFieldNotchedOutlineOpen", "open"],
              },
              attrs: Ll,
              ngContentSelectors: Vl,
              decls: 4,
              vars: 2,
              consts: [
                [1, "mdc-notched-outline__leading"],
                [1, "mdc-notched-outline__notch"],
                [1, "mdc-notched-outline__trailing"],
              ],
              template: function (t, o) {
                1 & t &&
                  (i.F$t(),
                  i._UZ(0, "div", 0),
                  i.TgZ(1, "div", 1),
                  i.Hsn(2),
                  i.qZA(),
                  i._UZ(3, "div", 2)),
                  2 & t && (i.xp6(1), i.Udp("width", o._getNotchWidth()));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
      const ca = {
        transitionMessages: (0, H.X$)("transitionMessages", [
          (0, H.SB)(
            "enter",
            (0, H.oB)({ opacity: 1, transform: "translateY(0%)" }),
          ),
          (0, H.eR)("void => enter", [
            (0, H.oB)({ opacity: 0, transform: "translateY(-5px)" }),
            (0, H.jt)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
          ]),
        ]),
      };
      let co = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵdir = i.lG2({ type: e })),
          e
        );
      })();
      const uo = new i.OlP("MatFormField"),
        ua = new i.OlP("MAT_FORM_FIELD_DEFAULT_OPTIONS");
      let fo = 0,
        ga = (() => {
          class e {
            get hideRequiredMarker() {
              return this._hideRequiredMarker;
            }
            set hideRequiredMarker(t) {
              this._hideRequiredMarker = (0, M.Ig)(t);
            }
            get floatLabel() {
              return this._floatLabel || this._defaults?.floatLabel || "auto";
            }
            set floatLabel(t) {
              t !== this._floatLabel &&
                ((this._floatLabel = t),
                this._changeDetectorRef.markForCheck());
            }
            get appearance() {
              return this._appearance;
            }
            set appearance(t) {
              const o = this._appearance;
              (this._appearance = t || this._defaults?.appearance || "fill"),
                "outline" === this._appearance &&
                  this._appearance !== o &&
                  (this._refreshOutlineNotchWidth(),
                  (this._needsOutlineLabelOffsetUpdateOnStable = !0));
            }
            get subscriptSizing() {
              return (
                this._subscriptSizing ||
                this._defaults?.subscriptSizing ||
                "fixed"
              );
            }
            set subscriptSizing(t) {
              this._subscriptSizing =
                t || this._defaults?.subscriptSizing || "fixed";
            }
            get hintLabel() {
              return this._hintLabel;
            }
            set hintLabel(t) {
              (this._hintLabel = t), this._processHints();
            }
            get _control() {
              return this._explicitFormFieldControl || this._formFieldControl;
            }
            set _control(t) {
              this._explicitFormFieldControl = t;
            }
            constructor(t, o, s, r, l, a, p, C) {
              (this._elementRef = t),
                (this._changeDetectorRef = o),
                (this._ngZone = s),
                (this._dir = r),
                (this._platform = l),
                (this._defaults = a),
                (this._animationMode = p),
                (this._document = C),
                (this._hideRequiredMarker = !1),
                (this.color = "primary"),
                (this._appearance = "fill"),
                (this._subscriptSizing = null),
                (this._hintLabel = ""),
                (this._hasIconPrefix = !1),
                (this._hasTextPrefix = !1),
                (this._hasIconSuffix = !1),
                (this._hasTextSuffix = !1),
                (this._labelId = "mat-mdc-form-field-label-" + fo++),
                (this._hintLabelId = "mat-mdc-hint-" + fo++),
                (this._subscriptAnimationState = ""),
                (this._labelWidth = 0),
                (this._destroyed = new N.x()),
                (this._isFocused = null),
                (this._needsOutlineLabelOffsetUpdateOnStable = !1),
                a &&
                  (a.appearance && (this.appearance = a.appearance),
                  (this._hideRequiredMarker = Boolean(a?.hideRequiredMarker)),
                  a.color && (this.color = a.color));
            }
            ngAfterViewInit() {
              this._updateFocusState(),
                this._refreshOutlineNotchWidth(),
                this._document?.fonts?.ready
                  ? this._document.fonts.ready.then(() => {
                      this._refreshOutlineNotchWidth(),
                        this._changeDetectorRef.markForCheck();
                    })
                  : setTimeout(() => this._refreshOutlineNotchWidth(), 100),
                (this._subscriptAnimationState = "enter"),
                this._changeDetectorRef.detectChanges();
            }
            ngAfterContentInit() {
              this._assertFormFieldControl(),
                this._initializeControl(),
                this._initializeSubscript(),
                this._initializePrefixAndSuffix(),
                this._initializeOutlineLabelOffsetSubscriptions();
            }
            ngAfterContentChecked() {
              this._assertFormFieldControl();
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            getLabelId() {
              return this._hasFloatingLabel() ? this._labelId : null;
            }
            getConnectedOverlayOrigin() {
              return this._textField || this._elementRef;
            }
            _animateAndLockLabel() {
              this._hasFloatingLabel() && (this.floatLabel = "always");
            }
            _initializeControl() {
              const t = this._control;
              t.controlType &&
                this._elementRef.nativeElement.classList.add(
                  `mat-mdc-form-field-type-${t.controlType}`,
                ),
                t.stateChanges.subscribe(() => {
                  this._updateFocusState(),
                    this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                t.ngControl &&
                  t.ngControl.valueChanges &&
                  t.ngControl.valueChanges
                    .pipe((0, ht.R)(this._destroyed))
                    .subscribe(() => this._changeDetectorRef.markForCheck());
            }
            _checkPrefixAndSuffixTypes() {
              (this._hasIconPrefix = !!this._prefixChildren.find(
                (t) => !t._isText,
              )),
                (this._hasTextPrefix = !!this._prefixChildren.find(
                  (t) => t._isText,
                )),
                (this._hasIconSuffix = !!this._suffixChildren.find(
                  (t) => !t._isText,
                )),
                (this._hasTextSuffix = !!this._suffixChildren.find(
                  (t) => t._isText,
                ));
            }
            _initializePrefixAndSuffix() {
              this._checkPrefixAndSuffixTypes(),
                (0, ue.T)(
                  this._prefixChildren.changes,
                  this._suffixChildren.changes,
                ).subscribe(() => {
                  this._checkPrefixAndSuffixTypes(),
                    this._changeDetectorRef.markForCheck();
                });
            }
            _initializeSubscript() {
              this._hintChildren.changes.subscribe(() => {
                this._processHints(), this._changeDetectorRef.markForCheck();
              }),
                this._errorChildren.changes.subscribe(() => {
                  this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                this._validateHints(),
                this._syncDescribedByIds();
            }
            _assertFormFieldControl() {}
            _updateFocusState() {
              this._control.focused && !this._isFocused
                ? ((this._isFocused = !0), this._lineRipple?.activate())
                : !this._control.focused &&
                  (this._isFocused || null === this._isFocused) &&
                  ((this._isFocused = !1), this._lineRipple?.deactivate()),
                this._textField?.nativeElement.classList.toggle(
                  "mdc-text-field--focused",
                  this._control.focused,
                );
            }
            _initializeOutlineLabelOffsetSubscriptions() {
              this._prefixChildren.changes.subscribe(
                () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
              ),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable
                    .pipe((0, ht.R)(this._destroyed))
                    .subscribe(() => {
                      this._needsOutlineLabelOffsetUpdateOnStable &&
                        ((this._needsOutlineLabelOffsetUpdateOnStable = !1),
                        this._updateOutlineLabelOffset());
                    });
                }),
                this._dir.change
                  .pipe((0, ht.R)(this._destroyed))
                  .subscribe(
                    () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
                  );
            }
            _shouldAlwaysFloat() {
              return "always" === this.floatLabel;
            }
            _hasOutline() {
              return "outline" === this.appearance;
            }
            _forceDisplayInfixLabel() {
              return (
                !this._platform.isBrowser &&
                this._prefixChildren.length &&
                !this._shouldLabelFloat()
              );
            }
            _hasFloatingLabel() {
              return !!this._labelChildNonStatic || !!this._labelChildStatic;
            }
            _shouldLabelFloat() {
              return (
                this._control.shouldLabelFloat || this._shouldAlwaysFloat()
              );
            }
            _shouldForward(t) {
              const o = this._control ? this._control.ngControl : null;
              return o && o[t];
            }
            _getDisplayedMessages() {
              return this._errorChildren &&
                this._errorChildren.length > 0 &&
                this._control.errorState
                ? "error"
                : "hint";
            }
            _refreshOutlineNotchWidth() {
              !this._hasOutline() ||
                !this._floatingLabel ||
                (this._labelWidth = this._floatingLabel.getWidth());
            }
            _processHints() {
              this._validateHints(), this._syncDescribedByIds();
            }
            _validateHints() {}
            _syncDescribedByIds() {
              if (this._control) {
                let t = [];
                if (
                  (this._control.userAriaDescribedBy &&
                    "string" == typeof this._control.userAriaDescribedBy &&
                    t.push(...this._control.userAriaDescribedBy.split(" ")),
                  "hint" === this._getDisplayedMessages())
                ) {
                  const o = this._hintChildren
                      ? this._hintChildren.find((r) => "start" === r.align)
                      : null,
                    s = this._hintChildren
                      ? this._hintChildren.find((r) => "end" === r.align)
                      : null;
                  o
                    ? t.push(o.id)
                    : this._hintLabel && t.push(this._hintLabelId),
                    s && t.push(s.id);
                } else
                  this._errorChildren &&
                    t.push(...this._errorChildren.map((o) => o.id));
                this._control.setDescribedByIds(t);
              }
            }
            _updateOutlineLabelOffset() {
              if (
                !this._platform.isBrowser ||
                !this._hasOutline() ||
                !this._floatingLabel
              )
                return;
              const t = this._floatingLabel.element;
              if (!this._iconPrefixContainer && !this._textPrefixContainer)
                return void (t.style.transform = "");
              if (!this._isAttachedToDom())
                return void (this._needsOutlineLabelOffsetUpdateOnStable = !0);
              const o = this._iconPrefixContainer?.nativeElement,
                s = this._textPrefixContainer?.nativeElement,
                r = o?.getBoundingClientRect().width ?? 0,
                l = s?.getBoundingClientRect().width ?? 0;
              t.style.transform = `var(\n        --mat-mdc-form-field-label-transform,\n        translateY(-50%) translateX(calc(${
                "rtl" === this._dir.value ? "-1" : "1"
              } * (${
                r + l
              }px + var(--mat-mdc-form-field-label-offset-x, 0px))))\n    )`;
            }
            _isAttachedToDom() {
              const t = this._elementRef.nativeElement;
              if (t.getRootNode) {
                const o = t.getRootNode();
                return o && o !== t;
              }
              return document.documentElement.contains(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Y36(i.SBq),
                i.Y36(i.sBO),
                i.Y36(i.R0b),
                i.Y36(Ht.Is),
                i.Y36(K.t4),
                i.Y36(ua, 8),
                i.Y36(i.QbO, 8),
                i.Y36(h.K0),
              );
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["mat-form-field"]],
              contentQueries: function (t, o, s) {
                if (
                  (1 & t &&
                    (i.Suo(s, Ai, 5),
                    i.Suo(s, Ai, 7),
                    i.Suo(s, co, 5),
                    i.Suo(s, la, 5),
                    i.Suo(s, aa, 5),
                    i.Suo(s, sa, 5),
                    i.Suo(s, oo, 5)),
                  2 & t)
                ) {
                  let r;
                  i.iGM((r = i.CRH())) && (o._labelChildNonStatic = r.first),
                    i.iGM((r = i.CRH())) && (o._labelChildStatic = r.first),
                    i.iGM((r = i.CRH())) && (o._formFieldControl = r.first),
                    i.iGM((r = i.CRH())) && (o._prefixChildren = r),
                    i.iGM((r = i.CRH())) && (o._suffixChildren = r),
                    i.iGM((r = i.CRH())) && (o._errorChildren = r),
                    i.iGM((r = i.CRH())) && (o._hintChildren = r);
                }
              },
              viewQuery: function (t, o) {
                if (
                  (1 & t &&
                    (i.Gf(Bl, 5),
                    i.Gf(Pl, 5),
                    i.Gf(Gl, 5),
                    i.Gf(so, 5),
                    i.Gf(ao, 5),
                    i.Gf(lo, 5)),
                  2 & t)
                ) {
                  let s;
                  i.iGM((s = i.CRH())) && (o._textField = s.first),
                    i.iGM((s = i.CRH())) && (o._iconPrefixContainer = s.first),
                    i.iGM((s = i.CRH())) && (o._textPrefixContainer = s.first),
                    i.iGM((s = i.CRH())) && (o._floatingLabel = s.first),
                    i.iGM((s = i.CRH())) && (o._notchedOutline = s.first),
                    i.iGM((s = i.CRH())) && (o._lineRipple = s.first);
                }
              },
              hostAttrs: [1, "mat-mdc-form-field"],
              hostVars: 42,
              hostBindings: function (t, o) {
                2 & t &&
                  i.ekj(
                    "mat-mdc-form-field-label-always-float",
                    o._shouldAlwaysFloat(),
                  )("mat-mdc-form-field-has-icon-prefix", o._hasIconPrefix)(
                    "mat-mdc-form-field-has-icon-suffix",
                    o._hasIconSuffix,
                  )("mat-form-field-invalid", o._control.errorState)(
                    "mat-form-field-disabled",
                    o._control.disabled,
                  )("mat-form-field-autofilled", o._control.autofilled)(
                    "mat-form-field-no-animations",
                    "NoopAnimations" === o._animationMode,
                  )("mat-form-field-appearance-fill", "fill" == o.appearance)(
                    "mat-form-field-appearance-outline",
                    "outline" == o.appearance,
                  )(
                    "mat-form-field-hide-placeholder",
                    o._hasFloatingLabel() && !o._shouldLabelFloat(),
                  )("mat-focused", o._control.focused)(
                    "mat-primary",
                    "accent" !== o.color && "warn" !== o.color,
                  )("mat-accent", "accent" === o.color)(
                    "mat-warn",
                    "warn" === o.color,
                  )("ng-untouched", o._shouldForward("untouched"))(
                    "ng-touched",
                    o._shouldForward("touched"),
                  )("ng-pristine", o._shouldForward("pristine"))(
                    "ng-dirty",
                    o._shouldForward("dirty"),
                  )("ng-valid", o._shouldForward("valid"))(
                    "ng-invalid",
                    o._shouldForward("invalid"),
                  )("ng-pending", o._shouldForward("pending"));
              },
              inputs: {
                hideRequiredMarker: "hideRequiredMarker",
                color: "color",
                floatLabel: "floatLabel",
                appearance: "appearance",
                subscriptSizing: "subscriptSizing",
                hintLabel: "hintLabel",
              },
              exportAs: ["matFormField"],
              features: [i._Bn([{ provide: uo, useExisting: e }])],
              ngContentSelectors: oa,
              decls: 18,
              vars: 23,
              consts: [
                ["labelTemplate", ""],
                [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
                ["textField", ""],
                ["class", "mat-mdc-form-field-focus-overlay", 4, "ngIf"],
                [1, "mat-mdc-form-field-flex"],
                [
                  "matFormFieldNotchedOutline",
                  "",
                  3,
                  "matFormFieldNotchedOutlineOpen",
                  "matFormFieldNotchedOutlineLabelWidth",
                  4,
                  "ngIf",
                ],
                ["class", "mat-mdc-form-field-icon-prefix", 4, "ngIf"],
                ["class", "mat-mdc-form-field-text-prefix", 4, "ngIf"],
                [1, "mat-mdc-form-field-infix"],
                [3, "ngIf"],
                ["class", "mat-mdc-form-field-text-suffix", 4, "ngIf"],
                ["class", "mat-mdc-form-field-icon-suffix", 4, "ngIf"],
                ["matFormFieldLineRipple", "", 4, "ngIf"],
                [
                  1,
                  "mat-mdc-form-field-subscript-wrapper",
                  "mat-mdc-form-field-bottom-align",
                  3,
                  "ngSwitch",
                ],
                [
                  "class",
                  "mat-mdc-form-field-error-wrapper",
                  4,
                  "ngSwitchCase",
                ],
                ["class", "mat-mdc-form-field-hint-wrapper", 4, "ngSwitchCase"],
                [
                  "matFormFieldFloatingLabel",
                  "",
                  3,
                  "floating",
                  "cdkObserveContentDisabled",
                  "id",
                  "cdkObserveContent",
                  4,
                  "ngIf",
                ],
                [
                  "matFormFieldFloatingLabel",
                  "",
                  3,
                  "floating",
                  "cdkObserveContentDisabled",
                  "id",
                  "cdkObserveContent",
                ],
                [
                  "aria-hidden",
                  "true",
                  "class",
                  "mat-mdc-form-field-required-marker mdc-floating-label--required",
                  4,
                  "ngIf",
                ],
                [
                  "aria-hidden",
                  "true",
                  1,
                  "mat-mdc-form-field-required-marker",
                  "mdc-floating-label--required",
                ],
                [1, "mat-mdc-form-field-focus-overlay"],
                [
                  "matFormFieldNotchedOutline",
                  "",
                  3,
                  "matFormFieldNotchedOutlineOpen",
                  "matFormFieldNotchedOutlineLabelWidth",
                ],
                [3, "ngTemplateOutlet"],
                [1, "mat-mdc-form-field-icon-prefix"],
                ["iconPrefixContainer", ""],
                [1, "mat-mdc-form-field-text-prefix"],
                ["textPrefixContainer", ""],
                [1, "mat-mdc-form-field-text-suffix"],
                [1, "mat-mdc-form-field-icon-suffix"],
                ["matFormFieldLineRipple", ""],
                [1, "mat-mdc-form-field-error-wrapper"],
                [1, "mat-mdc-form-field-hint-wrapper"],
                [3, "id", 4, "ngIf"],
                [1, "mat-mdc-form-field-hint-spacer"],
                [3, "id"],
              ],
              template: function (t, o) {
                1 & t &&
                  (i.F$t(na),
                  i.YNc(0, Yl, 1, 1, "ng-template", null, 0, i.W1O),
                  i.TgZ(2, "div", 1, 2),
                  i.NdJ("click", function (r) {
                    return (
                      o._control.onContainerClick &&
                      o._control.onContainerClick(r)
                    );
                  }),
                  i.YNc(4, zl, 1, 0, "div", 3),
                  i.TgZ(5, "div", 4),
                  i.YNc(6, ql, 2, 3, "div", 5),
                  i.YNc(7, $l, 3, 0, "div", 6),
                  i.YNc(8, Wl, 3, 0, "div", 7),
                  i.TgZ(9, "div", 8),
                  i.YNc(10, Ql, 1, 1, "ng-template", 9),
                  i.Hsn(11),
                  i.qZA(),
                  i.YNc(12, Zl, 2, 0, "div", 10),
                  i.YNc(13, Jl, 2, 0, "div", 11),
                  i.qZA(),
                  i.YNc(14, Kl, 1, 0, "div", 12),
                  i.qZA(),
                  i.TgZ(15, "div", 13),
                  i.YNc(16, ta, 2, 1, "div", 14),
                  i.YNc(17, ia, 5, 2, "div", 15),
                  i.qZA()),
                  2 & t &&
                    (i.xp6(2),
                    i.ekj("mdc-text-field--filled", !o._hasOutline())(
                      "mdc-text-field--outlined",
                      o._hasOutline(),
                    )("mdc-text-field--no-label", !o._hasFloatingLabel())(
                      "mdc-text-field--disabled",
                      o._control.disabled,
                    )("mdc-text-field--invalid", o._control.errorState),
                    i.xp6(2),
                    i.Q6J("ngIf", !o._hasOutline() && !o._control.disabled),
                    i.xp6(2),
                    i.Q6J("ngIf", o._hasOutline()),
                    i.xp6(1),
                    i.Q6J("ngIf", o._hasIconPrefix),
                    i.xp6(1),
                    i.Q6J("ngIf", o._hasTextPrefix),
                    i.xp6(2),
                    i.Q6J(
                      "ngIf",
                      !o._hasOutline() || o._forceDisplayInfixLabel(),
                    ),
                    i.xp6(2),
                    i.Q6J("ngIf", o._hasTextSuffix),
                    i.xp6(1),
                    i.Q6J("ngIf", o._hasIconSuffix),
                    i.xp6(1),
                    i.Q6J("ngIf", !o._hasOutline()),
                    i.xp6(1),
                    i.ekj(
                      "mat-mdc-form-field-subscript-dynamic-size",
                      "dynamic" === o.subscriptSizing,
                    ),
                    i.Q6J("ngSwitch", o._getDisplayedMessages()),
                    i.xp6(1),
                    i.Q6J("ngSwitchCase", "error"),
                    i.xp6(1),
                    i.Q6J("ngSwitchCase", "hint"));
              },
              dependencies: [h.O5, h.tP, h.RF, h.n9, no.wD, oo, so, ao, lo],
              styles: [
                '.mdc-text-field{border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{line-height:normal;pointer-events:all}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:12px;box-sizing:content-box}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}',
              ],
              encapsulation: 2,
              data: { animation: [ca.transitionMessages] },
              changeDetection: 0,
            })),
            e
          );
        })(),
        Fi = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [Yt.BQ, h.ez, no.Q8, Yt.BQ] })),
            e
          );
        })();
      var ma = y(515),
        pa = y(4968),
        _a = y(3601);
      const mo = (0, K.i$)({ passive: !0 });
      let xa = (() => {
          class e {
            constructor(t, o) {
              (this._platform = t),
                (this._ngZone = o),
                (this._monitoredElements = new Map());
            }
            monitor(t) {
              if (!this._platform.isBrowser) return ma.E;
              const o = (0, M.fI)(t),
                s = this._monitoredElements.get(o);
              if (s) return s.subject;
              const r = new N.x(),
                l = "cdk-text-field-autofilled",
                a = (p) => {
                  "cdk-text-field-autofill-start" !== p.animationName ||
                  o.classList.contains(l)
                    ? "cdk-text-field-autofill-end" === p.animationName &&
                      o.classList.contains(l) &&
                      (o.classList.remove(l),
                      this._ngZone.run(() =>
                        r.next({ target: p.target, isAutofilled: !1 }),
                      ))
                    : (o.classList.add(l),
                      this._ngZone.run(() =>
                        r.next({ target: p.target, isAutofilled: !0 }),
                      ));
                };
              return (
                this._ngZone.runOutsideAngular(() => {
                  o.addEventListener("animationstart", a, mo),
                    o.classList.add("cdk-text-field-autofill-monitored");
                }),
                this._monitoredElements.set(o, {
                  subject: r,
                  unlisten: () => {
                    o.removeEventListener("animationstart", a, mo);
                  },
                }),
                r
              );
            }
            stopMonitoring(t) {
              const o = (0, M.fI)(t),
                s = this._monitoredElements.get(o);
              s &&
                (s.unlisten(),
                s.subject.complete(),
                o.classList.remove("cdk-text-field-autofill-monitored"),
                o.classList.remove("cdk-text-field-autofilled"),
                this._monitoredElements.delete(o));
            }
            ngOnDestroy() {
              this._monitoredElements.forEach((t, o) => this.stopMonitoring(o));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(K.t4), i.LFG(i.R0b));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        ya = (() => {
          class e {
            get minRows() {
              return this._minRows;
            }
            set minRows(t) {
              (this._minRows = (0, M.su)(t)), this._setMinHeight();
            }
            get maxRows() {
              return this._maxRows;
            }
            set maxRows(t) {
              (this._maxRows = (0, M.su)(t)), this._setMaxHeight();
            }
            get enabled() {
              return this._enabled;
            }
            set enabled(t) {
              (t = (0, M.Ig)(t)),
                this._enabled !== t &&
                  ((this._enabled = t)
                    ? this.resizeToFitContent(!0)
                    : this.reset());
            }
            get placeholder() {
              return this._textareaElement.placeholder;
            }
            set placeholder(t) {
              (this._cachedPlaceholderHeight = void 0),
                t
                  ? this._textareaElement.setAttribute("placeholder", t)
                  : this._textareaElement.removeAttribute("placeholder"),
                this._cacheTextareaPlaceholderHeight();
            }
            constructor(t, o, s, r) {
              (this._elementRef = t),
                (this._platform = o),
                (this._ngZone = s),
                (this._destroyed = new N.x()),
                (this._enabled = !0),
                (this._previousMinRows = -1),
                (this._isViewInited = !1),
                (this._handleFocusEvent = (l) => {
                  this._hasFocus = "focus" === l.type;
                }),
                (this._document = r),
                (this._textareaElement = this._elementRef.nativeElement);
            }
            _setMinHeight() {
              const t =
                this.minRows && this._cachedLineHeight
                  ? this.minRows * this._cachedLineHeight + "px"
                  : null;
              t && (this._textareaElement.style.minHeight = t);
            }
            _setMaxHeight() {
              const t =
                this.maxRows && this._cachedLineHeight
                  ? this.maxRows * this._cachedLineHeight + "px"
                  : null;
              t && (this._textareaElement.style.maxHeight = t);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                ((this._initialHeight = this._textareaElement.style.height),
                this.resizeToFitContent(),
                this._ngZone.runOutsideAngular(() => {
                  const t = this._getWindow();
                  (0, pa.R)(t, "resize")
                    .pipe((0, _a.e)(16), (0, ht.R)(this._destroyed))
                    .subscribe(() => this.resizeToFitContent(!0)),
                    this._textareaElement.addEventListener(
                      "focus",
                      this._handleFocusEvent,
                    ),
                    this._textareaElement.addEventListener(
                      "blur",
                      this._handleFocusEvent,
                    );
                }),
                (this._isViewInited = !0),
                this.resizeToFitContent(!0));
            }
            ngOnDestroy() {
              this._textareaElement.removeEventListener(
                "focus",
                this._handleFocusEvent,
              ),
                this._textareaElement.removeEventListener(
                  "blur",
                  this._handleFocusEvent,
                ),
                this._destroyed.next(),
                this._destroyed.complete();
            }
            _cacheTextareaLineHeight() {
              if (this._cachedLineHeight) return;
              let t = this._textareaElement.cloneNode(!1);
              (t.rows = 1),
                (t.style.position = "absolute"),
                (t.style.visibility = "hidden"),
                (t.style.border = "none"),
                (t.style.padding = "0"),
                (t.style.height = ""),
                (t.style.minHeight = ""),
                (t.style.maxHeight = ""),
                (t.style.overflow = "hidden"),
                this._textareaElement.parentNode.appendChild(t),
                (this._cachedLineHeight = t.clientHeight),
                t.remove(),
                this._setMinHeight(),
                this._setMaxHeight();
            }
            _measureScrollHeight() {
              const t = this._textareaElement,
                o = t.style.marginBottom || "",
                s = this._platform.FIREFOX,
                r = s && this._hasFocus,
                l = s
                  ? "cdk-textarea-autosize-measuring-firefox"
                  : "cdk-textarea-autosize-measuring";
              r && (t.style.marginBottom = `${t.clientHeight}px`),
                t.classList.add(l);
              const a = t.scrollHeight - 4;
              return t.classList.remove(l), r && (t.style.marginBottom = o), a;
            }
            _cacheTextareaPlaceholderHeight() {
              if (!this._isViewInited || null != this._cachedPlaceholderHeight)
                return;
              if (!this.placeholder)
                return void (this._cachedPlaceholderHeight = 0);
              const t = this._textareaElement.value;
              (this._textareaElement.value = this._textareaElement.placeholder),
                (this._cachedPlaceholderHeight = this._measureScrollHeight()),
                (this._textareaElement.value = t);
            }
            ngDoCheck() {
              this._platform.isBrowser && this.resizeToFitContent();
            }
            resizeToFitContent(t = !1) {
              if (
                !this._enabled ||
                (this._cacheTextareaLineHeight(),
                this._cacheTextareaPlaceholderHeight(),
                !this._cachedLineHeight)
              )
                return;
              const o = this._elementRef.nativeElement,
                s = o.value;
              if (
                !t &&
                this._minRows === this._previousMinRows &&
                s === this._previousValue
              )
                return;
              const r = this._measureScrollHeight(),
                l = Math.max(r, this._cachedPlaceholderHeight || 0);
              (o.style.height = `${l}px`),
                this._ngZone.runOutsideAngular(() => {
                  typeof requestAnimationFrame < "u"
                    ? requestAnimationFrame(() =>
                        this._scrollToCaretPosition(o),
                      )
                    : setTimeout(() => this._scrollToCaretPosition(o));
                }),
                (this._previousValue = s),
                (this._previousMinRows = this._minRows);
            }
            reset() {
              void 0 !== this._initialHeight &&
                (this._textareaElement.style.height = this._initialHeight);
            }
            _noopInputHandler() {}
            _getDocument() {
              return this._document || document;
            }
            _getWindow() {
              return this._getDocument().defaultView || window;
            }
            _scrollToCaretPosition(t) {
              const { selectionStart: o, selectionEnd: s } = t;
              !this._destroyed.isStopped &&
                this._hasFocus &&
                t.setSelectionRange(o, s);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Y36(i.SBq),
                i.Y36(K.t4),
                i.Y36(i.R0b),
                i.Y36(h.K0, 8),
              );
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [["textarea", "cdkTextareaAutosize", ""]],
              hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("input", function () {
                    return o._noopInputHandler();
                  });
              },
              inputs: {
                minRows: ["cdkAutosizeMinRows", "minRows"],
                maxRows: ["cdkAutosizeMaxRows", "maxRows"],
                enabled: ["cdkTextareaAutosize", "enabled"],
                placeholder: "placeholder",
              },
              exportAs: ["cdkTextareaAutosize"],
            })),
            e
          );
        })(),
        va = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({})),
            e
          );
        })();
      const Ca = new i.OlP("MAT_INPUT_VALUE_ACCESSOR"),
        ba = [
          "button",
          "checkbox",
          "file",
          "hidden",
          "image",
          "radio",
          "range",
          "reset",
          "submit",
        ];
      let wa = 0;
      const Aa = (0, Yt.FD)(
        class {
          constructor(e, n, t, o) {
            (this._defaultErrorStateMatcher = e),
              (this._parentForm = n),
              (this._parentFormGroup = t),
              (this.ngControl = o),
              (this.stateChanges = new N.x());
          }
        },
      );
      let Fa = (() => {
          class e extends Aa {
            get disabled() {
              return this._disabled;
            }
            set disabled(t) {
              (this._disabled = (0, M.Ig)(t)),
                this.focused && ((this.focused = !1), this.stateChanges.next());
            }
            get id() {
              return this._id;
            }
            set id(t) {
              this._id = t || this._uid;
            }
            get required() {
              return (
                this._required ??
                this.ngControl?.control?.hasValidator(Ut.required) ??
                !1
              );
            }
            set required(t) {
              this._required = (0, M.Ig)(t);
            }
            get type() {
              return this._type;
            }
            set type(t) {
              (this._type = t || "text"),
                this._validateType(),
                !this._isTextarea &&
                  (0, K.qK)().has(this._type) &&
                  (this._elementRef.nativeElement.type = this._type);
            }
            get value() {
              return this._inputValueAccessor.value;
            }
            set value(t) {
              t !== this.value &&
                ((this._inputValueAccessor.value = t),
                this.stateChanges.next());
            }
            get readonly() {
              return this._readonly;
            }
            set readonly(t) {
              this._readonly = (0, M.Ig)(t);
            }
            constructor(t, o, s, r, l, a, p, C, w, D) {
              super(a, r, l, s),
                (this._elementRef = t),
                (this._platform = o),
                (this._autofillMonitor = C),
                (this._formField = D),
                (this._uid = "mat-input-" + wa++),
                (this.focused = !1),
                (this.stateChanges = new N.x()),
                (this.controlType = "mat-input"),
                (this.autofilled = !1),
                (this._disabled = !1),
                (this._type = "text"),
                (this._readonly = !1),
                (this._neverEmptyInputTypes = [
                  "date",
                  "datetime",
                  "datetime-local",
                  "month",
                  "time",
                  "week",
                ].filter((Z) => (0, K.qK)().has(Z))),
                (this._iOSKeyupListener = (Z) => {
                  const q = Z.target;
                  !q.value &&
                    0 === q.selectionStart &&
                    0 === q.selectionEnd &&
                    (q.setSelectionRange(1, 1), q.setSelectionRange(0, 0));
                });
              const nt = this._elementRef.nativeElement,
                Q = nt.nodeName.toLowerCase();
              (this._inputValueAccessor = p || nt),
                (this._previousNativeValue = this.value),
                (this.id = this.id),
                o.IOS &&
                  w.runOutsideAngular(() => {
                    t.nativeElement.addEventListener(
                      "keyup",
                      this._iOSKeyupListener,
                    );
                  }),
                (this._isServer = !this._platform.isBrowser),
                (this._isNativeSelect = "select" === Q),
                (this._isTextarea = "textarea" === Q),
                (this._isInFormField = !!D),
                this._isNativeSelect &&
                  (this.controlType = nt.multiple
                    ? "mat-native-select-multiple"
                    : "mat-native-select");
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                this._autofillMonitor
                  .monitor(this._elementRef.nativeElement)
                  .subscribe((t) => {
                    (this.autofilled = t.isAutofilled),
                      this.stateChanges.next();
                  });
            }
            ngOnChanges() {
              this.stateChanges.next();
            }
            ngOnDestroy() {
              this.stateChanges.complete(),
                this._platform.isBrowser &&
                  this._autofillMonitor.stopMonitoring(
                    this._elementRef.nativeElement,
                  ),
                this._platform.IOS &&
                  this._elementRef.nativeElement.removeEventListener(
                    "keyup",
                    this._iOSKeyupListener,
                  );
            }
            ngDoCheck() {
              this.ngControl &&
                (this.updateErrorState(),
                null !== this.ngControl.disabled &&
                  this.ngControl.disabled !== this.disabled &&
                  ((this.disabled = this.ngControl.disabled),
                  this.stateChanges.next())),
                this._dirtyCheckNativeValue(),
                this._dirtyCheckPlaceholder();
            }
            focus(t) {
              this._elementRef.nativeElement.focus(t);
            }
            _focusChanged(t) {
              t !== this.focused &&
                ((this.focused = t), this.stateChanges.next());
            }
            _onInput() {}
            _dirtyCheckNativeValue() {
              const t = this._elementRef.nativeElement.value;
              this._previousNativeValue !== t &&
                ((this._previousNativeValue = t), this.stateChanges.next());
            }
            _dirtyCheckPlaceholder() {
              const t = this._getPlaceholder();
              if (t !== this._previousPlaceholder) {
                const o = this._elementRef.nativeElement;
                (this._previousPlaceholder = t),
                  t
                    ? o.setAttribute("placeholder", t)
                    : o.removeAttribute("placeholder");
              }
            }
            _getPlaceholder() {
              return this.placeholder || null;
            }
            _validateType() {
              ba.indexOf(this._type);
            }
            _isNeverEmpty() {
              return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            }
            _isBadInput() {
              let t = this._elementRef.nativeElement.validity;
              return t && t.badInput;
            }
            get empty() {
              return !(
                this._isNeverEmpty() ||
                this._elementRef.nativeElement.value ||
                this._isBadInput() ||
                this.autofilled
              );
            }
            get shouldLabelFloat() {
              if (this._isNativeSelect) {
                const t = this._elementRef.nativeElement,
                  o = t.options[0];
                return (
                  this.focused ||
                  t.multiple ||
                  !this.empty ||
                  !!(t.selectedIndex > -1 && o && o.label)
                );
              }
              return this.focused || !this.empty;
            }
            setDescribedByIds(t) {
              t.length
                ? this._elementRef.nativeElement.setAttribute(
                    "aria-describedby",
                    t.join(" "),
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    "aria-describedby",
                  );
            }
            onContainerClick() {
              this.focused || this.focus();
            }
            _isInlineSelect() {
              const t = this._elementRef.nativeElement;
              return this._isNativeSelect && (t.multiple || t.size > 1);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Y36(i.SBq),
                i.Y36(K.t4),
                i.Y36(u, 10),
                i.Y36(Le, 8),
                i.Y36(Ve, 8),
                i.Y36(Yt.rD),
                i.Y36(Ca, 10),
                i.Y36(xa),
                i.Y36(i.R0b),
                i.Y36(uo, 8),
              );
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["input", "matInput", ""],
                ["textarea", "matInput", ""],
                ["select", "matNativeControl", ""],
                ["input", "matNativeControl", ""],
                ["textarea", "matNativeControl", ""],
              ],
              hostAttrs: [1, "mat-mdc-input-element"],
              hostVars: 18,
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("focus", function () {
                    return o._focusChanged(!0);
                  })("blur", function () {
                    return o._focusChanged(!1);
                  })("input", function () {
                    return o._onInput();
                  }),
                  2 & t &&
                    (i.Ikx("id", o.id)("disabled", o.disabled)(
                      "required",
                      o.required,
                    ),
                    i.uIk("name", o.name || null)(
                      "readonly",
                      (o.readonly && !o._isNativeSelect) || null,
                    )(
                      "aria-invalid",
                      o.empty && o.required ? null : o.errorState,
                    )("aria-required", o.required)("id", o.id),
                    i.ekj("mat-input-server", o._isServer)(
                      "mat-mdc-form-field-textarea-control",
                      o._isInFormField && o._isTextarea,
                    )("mat-mdc-form-field-input-control", o._isInFormField)(
                      "mdc-text-field__input",
                      o._isInFormField,
                    )("mat-mdc-native-select-inline", o._isInlineSelect()));
              },
              inputs: {
                disabled: "disabled",
                id: "id",
                placeholder: "placeholder",
                name: "name",
                required: "required",
                type: "type",
                errorStateMatcher: "errorStateMatcher",
                userAriaDescribedBy: [
                  "aria-describedby",
                  "userAriaDescribedBy",
                ],
                value: "value",
                readonly: "readonly",
              },
              exportAs: ["matInput"],
              features: [
                i._Bn([{ provide: co, useExisting: e }]),
                i.qOj,
                i.TTD,
              ],
            })),
            e
          );
        })(),
        Da = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [Yt.BQ, Fi, Fi, va, Yt.BQ] })),
            e
          );
        })();
      var po = y(1481);
      let bo = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [yi] })),
            e
          );
        })(),
        Oo = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [yi] })),
            e
          );
        })(),
        fc = (() => {
          class e {
            constructor(t, o) {
              (0, h.PM)(o) &&
                !t &&
                console.warn(
                  "Warning: Flex Layout loaded on the server without FlexLayoutServerModule",
                );
            }
            static withConfig(t, o = []) {
              return {
                ngModule: e,
                providers: t.serverLoaded
                  ? [
                      { provide: Ct, useValue: { ...vi, ...t } },
                      { provide: Ci, useValue: o, multi: !0 },
                      { provide: ge, useValue: !0 },
                    ]
                  : [
                      { provide: Ct, useValue: { ...vi, ...t } },
                      { provide: Ci, useValue: o, multi: !0 },
                    ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(ge), i.LFG(i.Lbi));
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [io, bo, Oo, io, bo, Oo] })),
            e
          );
        })();
      var qe = y(529);
      function hc(e, n) {
        if ((1 & e && (i.TgZ(0, "div", 0), i.Hsn(1), i.qZA()), 2 & e)) {
          const t = i.oxw();
          i.Q6J("ngClass", t.dropdownClass);
        }
      }
      const Ro = ["*"];
      function gc(e, n) {
        if ((1 & e && (i.TgZ(0, "mat-label"), i._uU(1), i.qZA()), 2 & e)) {
          const t = i.oxw();
          i.xp6(1), i.Oqu(t.data.placeholder);
        }
      }
      function mc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "input", 7),
            i.NdJ("keydown.enter", function () {
              i.CHM(t);
              const s = i.oxw();
              return i.KtG(s.dialogRef.close(s.result.value));
            }),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Q6J("formControl", t.result);
        }
      }
      function pc(e, n) {
        if ((1 & e && i._UZ(0, "textarea", 8), 2 & e)) {
          const t = i.oxw();
          i.Q6J("formControl", t.result);
        }
      }
      const _c = ["target"];
      function xc(e, n) {}
      function yc(e, n) {
        if ((1 & e && i._UZ(0, "span"), 2 & e)) {
          const t = i.oxw(2);
          i.Tol(
            null == t.config.btnIcons || null == t.config.btnIcons.prev
              ? null
              : t.config.btnIcons.prev.classes,
          );
        }
      }
      function vc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 4),
            i.NdJ("click", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.previousImage(s));
            }),
            i.YNc(1, yc, 1, 2, "span", 5),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Tol(t.config.btnClass),
            i.Q6J("disabled", 0 === t.fileViewer.currentIndex),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.prev
                ? null
                : t.config.btnIcons.prev.classes,
            );
        }
      }
      function Cc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.previousImage(s));
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.prev
                ? null
                : t.config.btnIcons.prev.text,
            );
        }
      }
      function bc(e, n) {
        if ((1 & e && i._UZ(0, "span"), 2 & e)) {
          const t = i.oxw(2);
          i.Tol(
            null == t.config.btnIcons || null == t.config.btnIcons.next
              ? null
              : t.config.btnIcons.next.classes,
          );
        }
      }
      function wc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 4),
            i.NdJ("click", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.nextImage(s));
            }),
            i.YNc(1, bc, 1, 2, "span", 5),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Tol(t.config.btnClass),
            i.Q6J(
              "disabled",
              t.fileViewer.currentIndex === t.fileViewer.files.length - 1,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.next
                ? null
                : t.config.btnIcons.next.classes,
            );
        }
      }
      function Ac(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.nextImage(s));
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.next
                ? null
                : t.config.btnIcons.next.text,
            );
        }
      }
      function Fc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.rotateCounterClockwise());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateCounterClockwise
                ? null
                : t.config.btnIcons.rotateCounterClockwise.classes,
            );
        }
      }
      function Dc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.rotateCounterClockwise());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateCounterClockwise
                ? null
                : t.config.btnIcons.rotateCounterClockwise.text,
            );
        }
      }
      function Sc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Fc, 2, 4, "button", 10),
            i.YNc(2, Dc, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateCounterClockwise
                ? null
                : t.config.btnIcons.rotateCounterClockwise.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateCounterClockwise
                ? null
                : t.config.btnIcons.rotateCounterClockwise.text,
            );
        }
      }
      function Mc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.rotateClockwise());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateClockwise
                ? null
                : t.config.btnIcons.rotateClockwise.classes,
            );
        }
      }
      function Ec(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.rotateClockwise());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateClockwise
                ? null
                : t.config.btnIcons.rotateClockwise.text,
            );
        }
      }
      function Oc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Mc, 2, 4, "button", 10),
            i.YNc(2, Ec, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateClockwise
                ? null
                : t.config.btnIcons.rotateClockwise.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons ||
                null == t.config.btnIcons.rotateClockwise
                ? null
                : t.config.btnIcons.rotateClockwise.text,
            );
        }
      }
      function Rc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.zoomOut());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons || null == t.config.btnIcons.zoomOut
                ? null
                : t.config.btnIcons.zoomOut.classes,
            );
        }
      }
      function Ic(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.zoomOut());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.zoomOut
                ? null
                : t.config.btnIcons.zoomOut.text,
            );
        }
      }
      function kc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Rc, 2, 4, "button", 10),
            i.YNc(2, Ic, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.zoomOut
                ? null
                : t.config.btnIcons.zoomOut.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.zoomOut
                ? null
                : t.config.btnIcons.zoomOut.text,
            );
        }
      }
      function Tc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.zoomIn());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons || null == t.config.btnIcons.zoomIn
                ? null
                : t.config.btnIcons.zoomIn.classes,
            );
        }
      }
      function Lc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.zoomIn());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.zoomIn
                ? null
                : t.config.btnIcons.zoomIn.text,
            );
        }
      }
      function Vc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Tc, 2, 4, "button", 10),
            i.YNc(2, Lc, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.zoomIn
                ? null
                : t.config.btnIcons.zoomIn.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.zoomIn
                ? null
                : t.config.btnIcons.zoomIn.text,
            );
        }
      }
      function Bc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.toggleFullscreen());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons || null == t.config.btnIcons.fullscreen
                ? null
                : t.config.btnIcons.fullscreen.classes,
            );
        }
      }
      function Pc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.toggleFullscreen());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.fullscreen
                ? null
                : t.config.btnIcons.fullscreen.text,
            );
        }
      }
      function Gc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Bc, 2, 4, "button", 10),
            i.YNc(2, Pc, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.fullscreen
                ? null
                : t.config.btnIcons.fullscreen.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.fullscreen
                ? null
                : t.config.btnIcons.fullscreen.text,
            );
        }
      }
      function Nc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "button", 11),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.reset());
            }),
            i._UZ(1, "span"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(
              null == t.config.btnIcons || null == t.config.btnIcons.reset
                ? null
                : t.config.btnIcons.reset.classes,
            );
        }
      }
      function Hc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "a", 6),
            i.NdJ("click", function () {
              i.CHM(t);
              const s = i.oxw(3);
              return i.KtG(s.fileViewer.reset());
            }),
            i.TgZ(1, "span"),
            i._uU(2),
            i.qZA()();
        }
        if (2 & e) {
          const t = i.oxw(3);
          i.Tol(t.config.btnClass),
            i.xp6(1),
            i.Tol(t.config.btnSubClass),
            i.xp6(1),
            i.Oqu(
              null == t.config.btnIcons || null == t.config.btnIcons.reset
                ? null
                : t.config.btnIcons.reset.text,
            );
        }
      }
      function Yc(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, Nc, 2, 4, "button", 10),
            i.YNc(2, Hc, 3, 5, "a", 2),
            i.BQk()),
          2 & e)
        ) {
          const t = i.oxw(2);
          i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.reset
                ? null
                : t.config.btnIcons.reset.classes,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnIcons || null == t.config.btnIcons.reset
                ? null
                : t.config.btnIcons.reset.text,
            );
        }
      }
      function zc(e, n) {
        if ((1 & e && i._UZ(0, "span"), 2 & e)) {
          const t = i.oxw(2).$implicit;
          i.Tol(t.icon.classes);
        }
      }
      function jc(e, n) {
        if (
          (1 & e &&
            (i.TgZ(0, "button", 13), i.YNc(1, zc, 1, 2, "span", 5), i.qZA()),
          2 & e)
        ) {
          const t = i.oxw().$implicit,
            o = i.oxw(2);
          i.Tol(o.config.btnClass), i.xp6(1), i.Q6J("ngIf", t.icon.classes);
        }
      }
      function Uc(e, n) {
        if ((1 & e && (i.TgZ(0, "a")(1, "span"), i._uU(2), i.qZA()()), 2 & e)) {
          const t = i.oxw(2).$implicit,
            o = i.oxw(2);
          i.Tol(o.config.btnClass),
            i.xp6(1),
            i.Tol(o.config.btnSubClass),
            i.xp6(1),
            i.Oqu(t.icon.text);
        }
      }
      function qc(e, n) {
        if ((1 & e && (i.ynx(0), i.YNc(1, Uc, 3, 5, "a", 5), i.BQk()), 2 & e)) {
          const t = i.oxw().$implicit;
          i.xp6(1), i.Q6J("ngIf", t.icon.text);
        }
      }
      function $c(e, n) {
        if (
          (1 & e &&
            (i.ynx(0),
            i.YNc(1, jc, 2, 3, "button", 12),
            i.YNc(2, qc, 2, 1, "ng-container", 8),
            i.BQk()),
          2 & e)
        ) {
          const t = n.$implicit;
          i.xp6(1),
            i.Q6J("ngIf", t.icon.classes),
            i.xp6(1),
            i.Q6J("ngIf", t.icon.text);
        }
      }
      function Wc(e, n) {
        if (
          (1 & e &&
            (i.TgZ(0, "div", 7),
            i.YNc(1, Sc, 3, 2, "ng-container", 8),
            i.YNc(2, Oc, 3, 2, "ng-container", 8),
            i.YNc(3, kc, 3, 2, "ng-container", 8),
            i.YNc(4, Vc, 3, 2, "ng-container", 8),
            i.YNc(5, Gc, 3, 2, "ng-container", 8),
            i.YNc(6, Yc, 3, 2, "ng-container", 8),
            i.YNc(7, $c, 3, 2, "ng-container", 9),
            i.qZA()),
          2 & e)
        ) {
          const t = i.oxw();
          i.Tol(t.config.btnContainerClass),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnShow
                ? null
                : t.config.btnShow.rotateCounterClockwise,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnShow
                ? null
                : t.config.btnShow.rotateClockwise,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnShow ? null : t.config.btnShow.zoomOut,
            ),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnShow ? null : t.config.btnShow.zoomIn,
            ),
            i.xp6(1),
            i.Q6J("ngIf", t.config.allowFullscreen),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              null == t.config.btnShow ? null : t.config.btnShow.reset,
            ),
            i.xp6(1),
            i.Q6J("ngForOf", t.config.customBtns);
        }
      }
      function Xc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "img", 1),
            i.NdJ("dragstart", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.dragstart.emit(s));
            }),
            i.ALo(1, "c3SafeUrl"),
            i.ALo(2, "async"),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Q6J(
            "src",
            i.lcZ(1, 2, i.lcZ(2, 4, t.fileViewer.currentFile.objectUrl)),
            i.LSH,
          )("ngStyle", t.fileViewer.style);
        }
      }
      function Qc(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "c3-file-viewer-image", 7),
            i.NdJ("dragstart", function (s) {
              i.CHM(t);
              const r = i.oxw(2);
              return i.KtG(r.fileViewer.onDragStart(s));
            }),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw(2);
          i.Akn(t.fileViewer.style), i.Q6J("fileViewer", t.fileViewer);
        }
      }
      function Zc(e, n) {
        1 & e && i._UZ(0, "c3-file-viewer-video");
      }
      function Jc(e, n) {
        if ((1 & e && i._UZ(0, "c3-file-viewer-pdf", 6), 2 & e)) {
          const t = i.oxw(2);
          i.Q6J("fileViewer", t.fileViewer);
        }
      }
      function Kc(e, n) {
        1 & e && (i.TgZ(0, "div", 8), i._UZ(1, "div", 9), i.qZA());
      }
      function tu(e, n) {
        if (1 & e) {
          const t = i.EpF();
          i.TgZ(0, "div", 1),
            i.NdJ("wheel", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.scrollZoom(s));
            })("dragover", function (s) {
              i.CHM(t);
              const r = i.oxw();
              return i.KtG(r.fileViewer.onDragOver(s));
            }),
            i.ALo(1, "async"),
            i.YNc(2, Qc, 1, 3, "c3-file-viewer-image", 2),
            i.YNc(3, Zc, 1, 0, "c3-file-viewer-video", 3),
            i.YNc(4, Jc, 1, 1, "c3-file-viewer-pdf", 4),
            i._UZ(5, "div"),
            i.YNc(6, Kc, 2, 0, "div", 5),
            i._UZ(7, "c3-file-viewer-actions", 6),
            i.qZA();
        }
        if (2 & e) {
          const t = i.oxw();
          i.Udp("height", t.fileViewer.styleHeight)(
            "background-color",
            t.fileViewer.config.containerBackgroundColor,
          ),
            i.Q6J("c3-full-screen", i.lcZ(1, 10, t.fileViewer.fullscreen$)),
            i.xp6(2),
            i.Q6J("ngIf", t.fileViewer.currentFile.type.startsWith("image")),
            i.xp6(1),
            i.Q6J("ngIf", t.fileViewer.currentFile.type.startsWith("video")),
            i.xp6(1),
            i.Q6J(
              "ngIf",
              t.fileViewer.currentFile.type.startsWith("application/pdf"),
            ),
            i.xp6(2),
            i.Q6J("ngIf", t.fileViewer.loading),
            i.xp6(1),
            i.Q6J("fileViewer", t.fileViewer);
        }
      }
      let eu = (() => {
        class e {
          constructor(t) {
            (this._changeDetectorRef = t), (this.dropdownClass = "");
          }
          ngOnChanges(t) {
            t.dropdownClass && this._markForCheck();
          }
          _markForCheck() {
            this._changeDetectorRef.markForCheck();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Y36(i.sBO));
          }),
          (e.ɵcmp = i.Xpm({
            type: e,
            selectors: [["c3-dropdown"]],
            viewQuery: function (t, o) {
              if ((1 & t && i.Gf(i.Rgc, 5), 2 & t)) {
                let s;
                i.iGM((s = i.CRH())) && (o.template = s.first);
              }
            },
            inputs: { dropdownClass: "dropdownClass" },
            features: [i.TTD],
            ngContentSelectors: Ro,
            decls: 1,
            vars: 0,
            consts: [[1, "c3-dropdown-panel", 3, "ngClass"]],
            template: function (t, o) {
              1 & t && (i.F$t(), i.YNc(0, hc, 2, 1, "ng-template"));
            },
            dependencies: [h.mk],
            encapsulation: 2,
          })),
          e
        );
      })();
      const iu = { provide: L, useExisting: (0, i.Gpc)(() => Io), multi: !0 };
      let Io = (() => {
          class e {
            get dropdownDisabled() {
              return this._dropdownDisabled;
            }
            set dropdownDisabled(t) {
              this._dropdownDisabled = (0, M.Ig)(t);
            }
            constructor(t, o, s) {
              (this._element = t),
                (this._overlay = o),
                (this._viewContainerRef = s),
                (this._closingActionsSubscription = ai.w0.EMPTY),
                (this._destroyed = new N.x()),
                (this._dropdownClass = ""),
                (this._dropdownDisabled = !1),
                (this.dropdownClass = "");
            }
            onClick() {
              this.show();
            }
            ngOnChanges(t) {
              t.dropdownClass &&
                this.dropdown &&
                ((this.dropdown.dropdownClass = this._dropdownClass),
                this.dropdown._markForCheck());
            }
            ngOnDestroy() {
              this._destroyed.next(),
                this._destroyed.complete(),
                this._closingActionsSubscription.unsubscribe(),
                this.close();
            }
            show() {
              if (!this.dropdown) return;
              const t = this._overlay.create(this._getOverlayConfig()),
                o = new dt.UE(this.dropdown.template, this._viewContainerRef);
              t.attach(o),
                (this.overlayRef = t),
                (this._closingActionsSubscription =
                  this._menuClosingActions().subscribe(() => this.close()));
            }
            close() {
              this.overlayRef &&
                this.overlayRef.hasAttached() &&
                this.overlayRef.detach();
            }
            _getOverlayConfig() {
              const s = this._overlay
                .position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withPositions([
                  {
                    originX: "start",
                    originY: "bottom",
                    overlayX: "start",
                    overlayY: "top",
                  },
                  {
                    originX: "start",
                    originY: "top",
                    overlayX: "start",
                    overlayY: "bottom",
                    panelClass: "mat-autocomplete-panel-above",
                  },
                ]);
              return new ci({
                positionStrategy: s,
                backdropClass: "cdk-overlay-transparent-backdrop",
                hasBackdrop: !0,
              });
            }
            _menuClosingActions() {
              const t = this.overlayRef.backdropClick(),
                o = this.overlayRef.detachments();
              return (0, ue.T)(t, o).pipe((0, ht.R)(this._destroyed));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.SBq), i.Y36(te), i.Y36(i.s_b));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [["", "c3Dropdown", ""]],
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("click", function () {
                    return o.onClick();
                  });
              },
              inputs: {
                dropdown: ["c3Dropdown", "dropdown"],
                dropdownDisabled: ["c3DropdownDisabled", "dropdownDisabled"],
                dropdownClass: ["c3DropdownClass", "dropdownClass"],
              },
              exportAs: ["c3DropdownTrigger"],
              features: [i._Bn([iu]), i.TTD],
            })),
            e
          );
        })(),
        nu = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [h.ez, ui] })),
            e
          );
        })(),
        ou = (() => {
          class e {
            constructor(t, o) {
              (this.dialogRef = t), (this.data = o);
            }
            onNoClick() {
              this.dialogRef.close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(he), i.Y36(Ee));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["ConfirmDialogComponent"]],
              decls: 7,
              vars: 6,
              consts: [
                [3, "innerHtml"],
                ["fxLayout", "row", "fxLayoutAlign", "end center"],
                ["mat-button", "", "mat-dialog-close", "", 3, "color"],
                ["mat-button", "", 3, "color", "mat-dialog-close"],
              ],
              template: function (t, o) {
                1 & t &&
                  (i.TgZ(0, "mat-dialog-content"),
                  i._UZ(1, "div", 0),
                  i.qZA(),
                  i.TgZ(2, "mat-dialog-actions", 1)(3, "button", 2),
                  i._uU(4),
                  i.qZA(),
                  i.TgZ(5, "button", 3),
                  i._uU(6),
                  i.qZA()()),
                  2 & t &&
                    (i.xp6(1),
                    i.Q6J("innerHtml", o.data.text, i.oJD),
                    i.xp6(2),
                    i.Q6J(
                      "color",
                      null == o.data.reject ? null : o.data.reject.color,
                    ),
                    i.xp6(1),
                    i.hij(
                      " ",
                      null == o.data.reject ? null : o.data.reject.text,
                      " ",
                    ),
                    i.xp6(1),
                    i.Q6J(
                      "color",
                      null == o.data.accept ? null : o.data.accept.color,
                    )("mat-dialog-close", !0),
                    i.xp6(1),
                    i.hij(
                      " ",
                      null == o.data.accept ? null : o.data.accept.text,
                      " ",
                    ));
              },
              dependencies: [En, pi, On, _i.lW, Zn, eo],
              encapsulation: 2,
            })),
            e
          );
        })(),
        su = (() => {
          class e {
            constructor(t, o, s) {
              (this.dialogRef = t),
                (this.data = o),
                (this._fb = s),
                (this.result = this._fb.control(o.defaultValue, o.validators));
            }
            onNoClick() {
              this.dialogRef.close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(he), i.Y36(Ee), i.Y36(vs));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["PrompDialogComponent"]],
              decls: 12,
              vars: 12,
              consts: [
                ["mat-dialog-title", ""],
                [4, "ngIf"],
                ["matInput", "", 3, "formControl", "keydown.enter", 4, "ngIf"],
                [
                  "matInput",
                  "",
                  "cdkTextareaAutosize",
                  "",
                  3,
                  "formControl",
                  4,
                  "ngIf",
                ],
                ["align", "center"],
                ["mat-raised-button", "", "mat-dialog-close", ""],
                ["mat-raised-button", "", 3, "disabled", "mat-dialog-close"],
                ["matInput", "", 3, "formControl", "keydown.enter"],
                ["matInput", "", "cdkTextareaAutosize", "", 3, "formControl"],
              ],
              template: function (t, o) {
                1 & t &&
                  (i.TgZ(0, "div", 0),
                  i._uU(1),
                  i.qZA(),
                  i.TgZ(2, "mat-dialog-content")(3, "mat-form-field"),
                  i.YNc(4, gc, 2, 1, "mat-label", 1),
                  i.YNc(5, mc, 1, 1, "input", 2),
                  i.YNc(6, pc, 1, 1, "textarea", 3),
                  i.qZA()(),
                  i.TgZ(7, "mat-dialog-actions", 4)(8, "button", 5),
                  i._uU(9),
                  i.qZA(),
                  i.TgZ(10, "button", 6),
                  i._uU(11),
                  i.qZA()()),
                  2 & t &&
                    (i.xp6(1),
                    i.Oqu(o.data.text),
                    i.xp6(3),
                    i.Q6J("ngIf", o.data.placeholder),
                    i.xp6(1),
                    i.Q6J("ngIf", !o.data.multiline),
                    i.xp6(1),
                    i.Q6J("ngIf", o.data.multiline),
                    i.xp6(2),
                    i.Tol(null == o.data.reject ? null : o.data.reject.color),
                    i.xp6(1),
                    i.hij(
                      " ",
                      null == o.data.reject ? null : o.data.reject.text,
                      " ",
                    ),
                    i.xp6(1),
                    i.Tol(null == o.data.accept ? null : o.data.accept.color),
                    i.Q6J(
                      "disabled",
                      o.result.invalid || (o.data.required && !o.result.value),
                    )("mat-dialog-close", o.result.value),
                    i.xp6(1),
                    i.hij(
                      " ",
                      null == o.data.accept ? null : o.data.accept.text,
                      " ",
                    ));
              },
              dependencies: [
                h.O5,
                En,
                rr,
                pi,
                On,
                _i.lW,
                ga,
                Ai,
                Fa,
                ya,
                at,
                F,
                ii,
              ],
              styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"],
            })),
            e
          );
        })(),
        ru = (() => {
          class e {
            constructor(t, o, s) {
              (this.dialogRef = t), (this.data = o), (this._cdr = s);
            }
            ngAfterViewInit() {
              (this.createdComponent = this.target.createComponent(
                this.data.component,
              )),
                this._cdr.detectChanges();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(he), i.Y36(Ee), i.Y36(i.sBO));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3DialogEmbedChildComponent"]],
              viewQuery: function (t, o) {
                if ((1 & t && i.Gf(_c, 5, i.s_b), 2 & t)) {
                  let s;
                  i.iGM((s = i.CRH())) && (o.target = s.first);
                }
              },
              decls: 3,
              vars: 0,
              consts: [["target", ""]],
              template: function (t, o) {
                1 & t &&
                  (i.TgZ(0, "mat-dialog-content"),
                  i.YNc(1, xc, 0, 0, "ng-template", null, 0, i.W1O),
                  i.qZA());
              },
              dependencies: [pi],
              encapsulation: 2,
            })),
            e
          );
        })(),
        ko = (() => {
          class e {
            constructor(t) {
              this.dialog = t;
            }
            confirm(t) {
              return new Promise((o, s) => {
                this.dialog
                  .open(ou, {
                    width: t.width || "250px",
                    data: {
                      text: t.text,
                      reject: {
                        color:
                          t.reject && t.reject.color ? t.reject.color : void 0,
                        text: (t.reject && t.reject.text) || "Annuler",
                      },
                      accept: {
                        color: (t.accept && t.accept.color) || "primary",
                        text: (t.accept && t.accept.text) || "Accepter",
                      },
                    },
                  })
                  .afterClosed()
                  .subscribe(
                    (function () {
                      var l = O(function* (a) {
                        o(!!a);
                      });
                      return function (a) {
                        return l.apply(this, arguments);
                      };
                    })(),
                  );
              });
            }
            prompt(t) {
              return new Promise((o, s) => {
                this.dialog
                  .open(su, {
                    width: t.width || "250px",
                    maxWidth: t.maxWidth || "100vw",
                    data: {
                      text: t.text,
                      defaultValue: t.defaultValue,
                      placeholder: t.placeholder,
                      multiline: t.multiline,
                      validators: t.validators,
                      required: t.required,
                      reject: {
                        color:
                          t.reject && t.reject.color ? t.reject.color : void 0,
                        text: (t.reject && t.reject.text) || "Annuler",
                      },
                      accept: {
                        color: (t.accept && t.accept.color) || "primary",
                        text: (t.accept && t.accept.text) || "Accepter",
                      },
                    },
                  })
                  .afterClosed()
                  .subscribe(
                    (function () {
                      var l = O(function* (a) {
                        o(a || !1);
                      });
                      return function (a) {
                        return l.apply(this, arguments);
                      };
                    })(),
                  );
              });
            }
            createDialgFromComponent(t) {
              return this.dialog.open(ru, t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.LFG(Oe));
            }),
            (e.ɵprov = i.Yz7({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            })),
            e
          );
        })(),
        lu = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({
              providers: [ko],
              imports: [h.ez, In, _i.ot, Fi, Da, Cs, fc, bs],
            })),
            e
          );
        })(),
        au = (() => {
          class e {
            set fullscreenState(t) {
              this._fullscreenState.next(t?.valueOf() || !1);
            }
            set fullscreenStateSetter(t) {
              this.fullscreenState = t;
            }
            constructor(t) {
              (this.el = t),
                (this._fullscreenState = new fe.X(!1)),
                this._fullscreenState
                  .pipe(
                    (0, Dt.h)((o) => null !== o),
                    (0, Ps.T)(2),
                    (0, Gs.b)(100),
                  )
                  .subscribe(() => {
                    this.defineState();
                  });
            }
            defineState() {
              if (this._fullscreenState.getValue()) {
                const t = this.el.nativeElement,
                  o =
                    t.requestFullscreen ||
                    t.webkitRequestFullScreen ||
                    t.mozRequestFullScreen ||
                    t.msRequestFullScreen;
                o
                  ? o.call(t)
                  : console.log(
                      "FullScreen Request Method Not Supported on this browser.",
                    );
              } else {
                const t = document,
                  o =
                    t.cancelFullscreen ||
                    t.webkitExitFullscreen ||
                    t.webkitCancelFullScreen ||
                    t.mozCancelFullScreen ||
                    t.msExitFullScreen;
                o
                  ? o.call(t)
                  : console.log(
                      "FullScreen Cancel Request Method Not Supported on this browser.",
                    );
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(i.SBq));
            }),
            (e.ɵdir = i.lG2({
              type: e,
              selectors: [
                ["", "c3FullScreen", ""],
                ["", "c3-full-screen", ""],
              ],
              inputs: {
                fullscreenState: ["c3Screenfull", "fullscreenState"],
                fullscreenStateSetter: [
                  "c3-full-screen",
                  "fullscreenStateSetter",
                ],
              },
            })),
            e
          );
        })(),
        du = (() => {
          class e {
            get config() {
              return this.fileViewer.config;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3-file-viewer-actions"]],
              inputs: { fileViewer: "fileViewer" },
              decls: 6,
              vars: 5,
              consts: [
                [1, "nav-button-container"],
                ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"],
                [3, "class", "click", 4, "ngIf"],
                ["class", "btn-container", 3, "class", 4, "ngIf"],
                ["type", "button", 3, "disabled", "click"],
                [3, "class", 4, "ngIf"],
                [3, "click"],
                [1, "btn-container"],
                [4, "ngIf"],
                [4, "ngFor", "ngForOf"],
                ["type", "button", 3, "class", "click", 4, "ngIf"],
                ["type", "button", 3, "click"],
                ["type", "button", 3, "class", 4, "ngIf"],
                ["type", "button"],
              ],
              template: function (t, o) {
                1 & t &&
                  (i.TgZ(0, "div", 0),
                  i.YNc(1, vc, 2, 4, "button", 1),
                  i.YNc(2, Cc, 3, 5, "a", 2),
                  i.YNc(3, wc, 2, 4, "button", 1),
                  i.YNc(4, Ac, 3, 5, "a", 2),
                  i.qZA(),
                  i.YNc(5, Wc, 8, 9, "div", 3)),
                  2 & t &&
                    (i.xp6(1),
                    i.Q6J(
                      "ngIf",
                      null == o.config.btnShow ? null : o.config.btnShow.prev,
                    ),
                    i.xp6(1),
                    i.Q6J(
                      "ngIf",
                      null == o.config.btnIcons ||
                        null == o.config.btnIcons.prev
                        ? null
                        : o.config.btnIcons.prev.text,
                    ),
                    i.xp6(1),
                    i.Q6J(
                      "ngIf",
                      null == o.config.btnShow ? null : o.config.btnShow.next,
                    ),
                    i.xp6(1),
                    i.Q6J(
                      "ngIf",
                      null == o.config.btnIcons ||
                        null == o.config.btnIcons.next
                        ? null
                        : o.config.btnIcons.next.text,
                    ),
                    i.xp6(1),
                    i.Q6J(
                      "ngIf",
                      o.fileViewer.currentFile.type.startsWith("image"),
                    ));
              },
              dependencies: [h.sg, h.O5],
              encapsulation: 2,
            })),
            e
          );
        })(),
        To = (() => {
          class e {
            constructor(t) {
              this.sanitizer = t;
            }
            transform(t) {
              return t ? this.sanitizer.bypassSecurityTrustResourceUrl(t) : "";
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(po.H7, 16));
            }),
            (e.ɵpipe = i.Yjl({
              name: "c3SafeUrl",
              type: e,
              pure: !0,
              standalone: !0,
            })),
            e
          );
        })(),
        cu = (() => {
          class e {
            constructor() {
              this.dragstart = new i.vpe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [
                ["c3-file-viewer-image"],
                ["", "c3-file-viewer-image", ""],
              ],
              inputs: { fileViewer: "fileViewer" },
              outputs: { dragstart: "dragstart" },
              decls: 1,
              vars: 1,
              consts: [
                [
                  "alt",
                  "Image not found...",
                  3,
                  "src",
                  "ngStyle",
                  "dragstart",
                  4,
                  "ngIf",
                ],
                ["alt", "Image not found...", 3, "src", "ngStyle", "dragstart"],
              ],
              template: function (t, o) {
                1 & t && i.YNc(0, Xc, 3, 6, "img", 0),
                  2 & t && i.Q6J("ngIf", o.fileViewer.currentFile.objectUrl);
              },
              dependencies: [h.O5, h.PC, h.Ov, To],
              encapsulation: 2,
            })),
            e
          );
        })(),
        uu = (() => {
          class e {
            constructor() {
              this.dragstart = new i.vpe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3-file-viewer-pdf"]],
              hostAttrs: [1, "c3-file-viewer-pdf", 2, "display", "block"],
              inputs: { fileViewer: "fileViewer" },
              outputs: { dragstart: "dragstart" },
              decls: 3,
              vars: 9,
              consts: [["type", "application/pdf", 3, "src"]],
              template: function (t, o) {
                1 & t &&
                  (i._UZ(0, "embed", 0),
                  i.ALo(1, "c3SafeUrl"),
                  i.ALo(2, "async")),
                  2 & t &&
                    (i.Udp("height", "100%")("width", "100%"),
                    i.Q6J(
                      "src",
                      i.lcZ(
                        1,
                        5,
                        i.lcZ(2, 7, o.fileViewer.currentFile.objectUrl),
                      ),
                      i.uOi,
                    ));
              },
              dependencies: [h.Ov, To],
              encapsulation: 2,
            })),
            e
          );
        })(),
        fu = (() => {
          class e {
            set _srcUpdated({ location: t }) {
              this.src$.next(t);
            }
            constructor() {
              (this.src = ""),
                (this.src$ = new N.x()),
                this.src$
                  .pipe(
                    (0, Ns.z)((t) => this.fileViewer.getFile(t)),
                    (0, Dt.h)((t) => t.type.startsWith("application/pdf")),
                    (0, fi.b)((t) => (this.src = URL.createObjectURL(t))),
                  )
                  .subscribe({
                    next: () => null,
                    error: (t) => {
                      console.log(t);
                    },
                  });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3-file-viewer-video"]],
              inputs: {
                _srcUpdated: ["file", "_srcUpdated"],
                fileViewer: "fileViewer",
              },
              decls: 1,
              vars: 1,
              consts: [["controls", "", "crossorigin", "*", 3, "src"]],
              template: function (t, o) {
                1 & t && i._UZ(0, "video", 0),
                  2 & t && i.Q6J("src", o.src, i.LSH);
              },
              encapsulation: 2,
            })),
            e
          );
        })(),
        Lo = (() => {
          class e {
            constructor(t, o) {
              (this.moduleConfig = t),
                (this._http = o),
                (this.indexChange = new i.vpe()),
                (this.configChange = new i.vpe()),
                (this.customFileEvent = new i.vpe());
            }
            ngOnInit() {
              this.defineStyleHeight(),
                this.fileViewer.customFile$.subscribe((t) => {
                  this.customFileEvent.emit(t);
                }),
                this.fileViewer.index$.subscribe((t) => {
                  this.indexChange.emit(t);
                }),
                this.fileViewer.config$.subscribe((t) => {
                  this.configChange.emit(t);
                });
            }
            onMouseOver() {
              this.fileViewer.hovered = !0;
            }
            onMouseLeave() {
              this.fileViewer.hovered = !1;
            }
            ngOnChanges(t) {
              t.screenHeightOccupied &&
                this.fileViewer &&
                this.defineStyleHeight();
            }
            next(t) {
              this.fileViewer.nextImage(t);
            }
            previous(t) {
              this.fileViewer.previousImage(t);
            }
            defineStyleHeight() {
              this.fileViewer.styleHeight =
                "calc(100% - " + this.screenHeightOccupied + "px)";
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36("config", 8), i.Y36(qe.eN));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3-file-viewer"]],
              hostAttrs: [1, "c3-file-viewer"],
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("mouseover", function () {
                    return o.onMouseOver();
                  })("mouseleave", function () {
                    return o.onMouseLeave();
                  })(
                    "keyup.ArrowRight",
                    function (r) {
                      return o.next(r);
                    },
                    !1,
                    i.Jf7,
                  )(
                    "keyup.ArrowLeft",
                    function (r) {
                      return o.previous(r);
                    },
                    !1,
                    i.Jf7,
                  );
              },
              inputs: {
                screenHeightOccupied: "screenHeightOccupied",
                fileViewer: "fileViewer",
              },
              outputs: {
                indexChange: "indexChange",
                configChange: "configChange",
                customFileEvent: "customFileEvent",
              },
              features: [i.TTD],
              decls: 1,
              vars: 1,
              consts: [
                [
                  "class",
                  "container",
                  3,
                  "c3-full-screen",
                  "height",
                  "backgroundColor",
                  "wheel",
                  "dragover",
                  4,
                  "ngIf",
                ],
                [1, "container", 3, "c3-full-screen", "wheel", "dragover"],
                [3, "fileViewer", "style", "dragstart", 4, "ngIf"],
                [4, "ngIf"],
                [3, "fileViewer", 4, "ngIf"],
                ["class", "spinner-container", 4, "ngIf"],
                [3, "fileViewer"],
                [3, "fileViewer", "dragstart"],
                [1, "spinner-container"],
                [1, "spinner"],
              ],
              template: function (t, o) {
                1 & t && i.YNc(0, tu, 8, 12, "div", 0),
                  2 & t && i.Q6J("ngIf", o.fileViewer);
              },
              dependencies: [h.O5, au, du, cu, uu, fu, h.Ov],
              encapsulation: 2,
            })),
            e
          );
        })();
      const Si = {
        btnContainerClass: "btn-container",
        btnClass: "default",
        btnSubClass: "material-icons",
        zoomFactor: 0.1,
        containerBackgroundColor: "#00000000",
        wheelZoom: !1,
        allowFullscreen: !0,
        allowKeyboardNavigation: !0,
        btnShow: {
          zoomIn: !0,
          zoomOut: !0,
          rotateClockwise: !0,
          rotateCounterClockwise: !0,
          next: !0,
          prev: !0,
          reset: !0,
        },
        btnIcons: {
          zoomIn: { text: "zoom_in" },
          zoomOut: { text: "zoom_out" },
          rotateClockwise: { text: "rotate_right" },
          rotateCounterClockwise: { text: "rotate_left" },
          fullscreen: { text: "fullscreen" },
          reset: { text: "restore" },
        },
      };
      class hu {
        constructor(n, t) {
          (this.name = n), (this.fileUrl = t);
        }
      }
      class gu {
        get config() {
          return this._config;
        }
        set config(n) {
          (this._config = this.mergeConfig(Si, n)),
            this.config$.next(this._config);
        }
        get currentFile() {
          return this.filesObjectUrl[this.currentIndex];
        }
        set files(n) {
          (this._files = n),
            (this.currentIndex = 0),
            this.index$.next(this.currentIndex),
            (this.filesObjectUrl = n.map((t) => ({
              ...t,
              objectUrl: t.objectUrl || this.createObjectURL(t),
            })));
        }
        get files() {
          return this._files;
        }
        constructor({ config: n, files: t }) {
          (this._config = Si),
            (this.config$ = new fe.X(Si)),
            (this.fullscreen$ = new fe.X(!1)),
            (this.customFile$ = new fe.X(null)),
            (this.index$ = new fe.X(0)),
            (this.loading = !0),
            (this.currentIndex = 0),
            (this.style = {
              transform: "",
              msTransform: "",
              oTransform: "",
              webkitTransform: "",
              minHeight: "auto",
              maxHeight: "auto",
              height: "auto",
              minWidth: "auto",
              maxWidth: "auto",
              width: "auto",
            }),
            (this.styleHeight = "100%"),
            (this.hovered = !1),
            (this._files = []),
            (this.filesObjectUrl = []),
            (this.scale = 1),
            (this.rotation = 0),
            (this.translateX = 0),
            (this.translateY = 0),
            (this.prevX = 0),
            (this.prevY = 0),
            n && (this.config = n),
            t && (this.files = t),
            this.config$.subscribe((o) => {
              const {
                minHeight: s,
                maxHeight: r,
                minWidth: l,
                maxWidth: a,
                height: p,
                width: C,
              } = o;
              (this.style.minHeight = this.valueToCss(s)),
                (this.style.height = this.valueToCss(p)),
                (this.style.width = this.valueToCss(C)),
                (this.style.maxHeight = this.valueToCss(r)),
                (this.style.minWidth = this.valueToCss(l)),
                (this.style.maxWidth = this.valueToCss(a)),
                (this.styleHeight = this.valueToCss(p)),
                this.updateStyle();
            });
        }
        createObjectURL(n) {
          return (
            this.onLoadStart(n),
            this.getFile(n.location).pipe(
              (0, it.U)((t) => URL.createObjectURL(t)),
              (0, fi.b)(() => this.onLoad(n)),
            )
          );
        }
        getFile(n) {
          const t =
            this.config.customClient ||
            (0, i.f3M)(qe.eN).get.bind((0, i.f3M)(qe.eN));
          if (!t)
            throw new Error(
              "No http client provided. Please provide a custom client or import HttpClientModule",
            );
          return t(n, { responseType: "blob" });
        }
        previousImage(n) {
          this.canNavigate(n) &&
            ((this.loading = !0),
            this.currentIndex > 0
              ? this.currentIndex--
              : (this.currentIndex = this.files.length - 1),
            this.index$.next(this.currentIndex),
            this.reset());
        }
        nextImage(n) {
          this.canNavigate(n) &&
            ((this.loading = !0),
            this.currentIndex < this.files.length - 1
              ? this.currentIndex++
              : (this.currentIndex = 0),
            this.index$.next(this.currentIndex),
            this.reset());
        }
        zoomIn() {
          (this.scale *= 1 + (this.config.zoomFactor || 0)), this.updateStyle();
        }
        zoomOut() {
          this.scale > (this.config.zoomFactor || 0) &&
            (this.scale /= 1 + (this.config.zoomFactor || 0)),
            this.updateStyle();
        }
        scrollZoom(n) {
          return (
            !this.config.wheelZoom ||
            (n.deltaY > 0 ? this.zoomOut() : this.zoomIn(), !1)
          );
        }
        rotateClockwise() {
          (this.rotation += 90), this.updateStyle();
        }
        rotateCounterClockwise() {
          (this.rotation -= 90), this.updateStyle();
        }
        onLoad(n) {
          this.loading = !1;
        }
        onLoadStart(n) {
          this.loading = !0;
        }
        imageNotFound(n) {
          (this.loading = !1),
            this.customFile$.next(new hu("imageNotFound", n.location));
        }
        onDragOver(n) {
          (this.translateX += n.clientX - this.prevX),
            (this.translateY += n.clientY - this.prevY),
            (this.prevX = n.clientX),
            (this.prevY = n.clientY),
            this.updateStyle();
        }
        onDragStart(n) {
          if (n.target && n.dataTransfer && n.dataTransfer.setDragImage) {
            const o = n.target.nextElementSibling;
            o && n.dataTransfer.setDragImage(o, 0, 0);
          }
          (this.prevX = n.clientX), (this.prevY = n.clientY);
        }
        toggleFullscreen() {
          const n = this.fullscreen$.getValue();
          this.fullscreen$.next(!n), n && this.reset();
        }
        reset() {
          (this.scale = 1),
            (this.rotation = 0),
            (this.translateX = 0),
            (this.translateY = 0),
            this.updateStyle();
        }
        canNavigate(n) {
          return (
            null == n || (this.config.allowKeyboardNavigation && this.hovered)
          );
        }
        updateStyle() {
          (this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`),
            (this.style.msTransform = this.style.transform),
            (this.style.webkitTransform = this.style.transform),
            (this.style.oTransform = this.style.transform);
        }
        valueToCss(n) {
          return n ? ("string" == typeof n ? n : n + "px") : "auto";
        }
        mergeConfig(n, t) {
          let o = { ...n };
          return (
            t &&
              ((o = { ...n, ...t }),
              t.btnIcons && (o.btnIcons = { ...n.btnIcons, ...t.btnIcons })),
            o
          );
        }
      }
      let mu = (() => {
          class e {
            constructor(t) {
              this.fileViewer = t;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(Ee));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["ng-component"]],
              decls: 1,
              vars: 2,
              consts: [[3, "fileViewer", "screenHeightOccupied"]],
              template: function (t, o) {
                1 & t && i._UZ(0, "c3-file-viewer", 0),
                  2 & t &&
                    i.Q6J("fileViewer", o.fileViewer)(
                      "screenHeightOccupied",
                      0,
                    );
              },
              dependencies: [Lo],
              encapsulation: 2,
            })),
            e
          );
        })(),
        pu = (() => {
          class e {
            constructor(t) {
              (this._dialog = t),
                (this.dialogConfig = {
                  panelClass: "c3-file-viewer-dialog",
                  width: "80%",
                  height: "80%",
                });
            }
            openDialog() {
              this._dialog.open(mu, {
                data: this.fileViewer,
                ...this.dialogConfig,
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Y36(Oe));
            }),
            (e.ɵcmp = i.Xpm({
              type: e,
              selectors: [["c3-file-viewer-dialog"]],
              hostBindings: function (t, o) {
                1 & t &&
                  i.NdJ("click", function () {
                    return o.openDialog();
                  });
              },
              inputs: {
                fileViewer: "fileViewer",
                dialogConfig: "dialogConfig",
              },
              ngContentSelectors: Ro,
              decls: 1,
              vars: 0,
              template: function (t, o) {
                1 & t && (i.F$t(), i.Hsn(0));
              },
              encapsulation: 2,
            })),
            e
          );
        })(),
        _u = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = i.oAB({ type: e })),
            (e.ɵinj = i.cJS({ imports: [h.ez, qe.JF, In] })),
            e
          );
        })();
    },
    529: ($e, zt, y) => {
      y.d(zt, { JF: () => we, eN: () => Wt });
      var et = y(6895),
        O = y(4650),
        i = y(9646),
        h = y(9751),
        Mt = y(4351),
        jt = y(9300),
        it = y(4004);
      class gt {}
      class tt {}
      class L {
        constructor(d) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            d
              ? (this.lazyInit =
                  "string" == typeof d
                    ? () => {
                        (this.headers = new Map()),
                          d.split("\n").forEach((c) => {
                            const _ = c.indexOf(":");
                            if (_ > 0) {
                              const m = c.slice(0, _),
                                A = m.toLowerCase(),
                                I = c.slice(_ + 1).trim();
                              this.maybeSetNormalizedName(m, A),
                                this.headers.has(A)
                                  ? this.headers.get(A).push(I)
                                  : this.headers.set(A, [I]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.entries(d).forEach(([c, _]) => {
                            let m;
                            if (
                              ((m =
                                "string" == typeof _
                                  ? [_]
                                  : "number" == typeof _
                                    ? [_.toString()]
                                    : _.map((A) => A.toString())),
                              m.length > 0)
                            ) {
                              const A = c.toLowerCase();
                              this.headers.set(A, m),
                                this.maybeSetNormalizedName(c, A);
                            }
                          });
                      })
              : (this.headers = new Map());
        }
        has(d) {
          return this.init(), this.headers.has(d.toLowerCase());
        }
        get(d) {
          this.init();
          const c = this.headers.get(d.toLowerCase());
          return c && c.length > 0 ? c[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(d) {
          return this.init(), this.headers.get(d.toLowerCase()) || null;
        }
        append(d, c) {
          return this.clone({ name: d, value: c, op: "a" });
        }
        set(d, c) {
          return this.clone({ name: d, value: c, op: "s" });
        }
        delete(d, c) {
          return this.clone({ name: d, value: c, op: "d" });
        }
        maybeSetNormalizedName(d, c) {
          this.normalizedNames.has(c) || this.normalizedNames.set(c, d);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof L
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((d) => this.applyUpdate(d)),
              (this.lazyUpdate = null)));
        }
        copyFrom(d) {
          d.init(),
            Array.from(d.headers.keys()).forEach((c) => {
              this.headers.set(c, d.headers.get(c)),
                this.normalizedNames.set(c, d.normalizedNames.get(c));
            });
        }
        clone(d) {
          const c = new L();
          return (
            (c.lazyInit =
              this.lazyInit && this.lazyInit instanceof L
                ? this.lazyInit
                : this),
            (c.lazyUpdate = (this.lazyUpdate || []).concat([d])),
            c
          );
        }
        applyUpdate(d) {
          const c = d.name.toLowerCase();
          switch (d.op) {
            case "a":
            case "s":
              let _ = d.value;
              if (("string" == typeof _ && (_ = [_]), 0 === _.length)) return;
              this.maybeSetNormalizedName(d.name, c);
              const m = ("a" === d.op ? this.headers.get(c) : void 0) || [];
              m.push(..._), this.headers.set(c, m);
              break;
            case "d":
              const A = d.value;
              if (A) {
                let I = this.headers.get(c);
                if (!I) return;
                (I = I.filter((j) => -1 === A.indexOf(j))),
                  0 === I.length
                    ? (this.headers.delete(c), this.normalizedNames.delete(c))
                    : this.headers.set(c, I);
              } else this.headers.delete(c), this.normalizedNames.delete(c);
          }
        }
        forEach(d) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((c) =>
              d(this.normalizedNames.get(c), this.headers.get(c)),
            );
        }
      }
      class lt {
        encodeKey(d) {
          return at(d);
        }
        encodeValue(d) {
          return at(d);
        }
        decodeKey(d) {
          return decodeURIComponent(d);
        }
        decodeValue(d) {
          return decodeURIComponent(d);
        }
      }
      const bt = /%(\d[a-f0-9])/gi,
        mt = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function at(g) {
        return encodeURIComponent(g).replace(bt, (d, c) => mt[c] ?? d);
      }
      function ct(g) {
        return `${g}`;
      }
      class G {
        constructor(d = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = d.encoder || new lt()),
            d.fromString)
          ) {
            if (d.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function Tt(g, d) {
              const c = new Map();
              return (
                g.length > 0 &&
                  g
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((m) => {
                      const A = m.indexOf("="),
                        [I, j] =
                          -1 == A
                            ? [d.decodeKey(m), ""]
                            : [
                                d.decodeKey(m.slice(0, A)),
                                d.decodeValue(m.slice(A + 1)),
                              ],
                        E = c.get(I) || [];
                      E.push(j), c.set(I, E);
                    }),
                c
              );
            })(d.fromString, this.encoder);
          } else
            d.fromObject
              ? ((this.map = new Map()),
                Object.keys(d.fromObject).forEach((c) => {
                  const _ = d.fromObject[c],
                    m = Array.isArray(_) ? _.map(ct) : [ct(_)];
                  this.map.set(c, m);
                }))
              : (this.map = null);
        }
        has(d) {
          return this.init(), this.map.has(d);
        }
        get(d) {
          this.init();
          const c = this.map.get(d);
          return c ? c[0] : null;
        }
        getAll(d) {
          return this.init(), this.map.get(d) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(d, c) {
          return this.clone({ param: d, value: c, op: "a" });
        }
        appendAll(d) {
          const c = [];
          return (
            Object.keys(d).forEach((_) => {
              const m = d[_];
              Array.isArray(m)
                ? m.forEach((A) => {
                    c.push({ param: _, value: A, op: "a" });
                  })
                : c.push({ param: _, value: m, op: "a" });
            }),
            this.clone(c)
          );
        }
        set(d, c) {
          return this.clone({ param: d, value: c, op: "s" });
        }
        delete(d, c) {
          return this.clone({ param: d, value: c, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((d) => {
                const c = this.encoder.encodeKey(d);
                return this.map
                  .get(d)
                  .map((_) => c + "=" + this.encoder.encodeValue(_))
                  .join("&");
              })
              .filter((d) => "" !== d)
              .join("&")
          );
        }
        clone(d) {
          const c = new G({ encoder: this.encoder });
          return (
            (c.cloneFrom = this.cloneFrom || this),
            (c.updates = (this.updates || []).concat(d)),
            c
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((d) => this.map.set(d, this.cloneFrom.map.get(d))),
              this.updates.forEach((d) => {
                switch (d.op) {
                  case "a":
                  case "s":
                    const c =
                      ("a" === d.op ? this.map.get(d.param) : void 0) || [];
                    c.push(ct(d.value)), this.map.set(d.param, c);
                    break;
                  case "d":
                    if (void 0 === d.value) {
                      this.map.delete(d.param);
                      break;
                    }
                    {
                      let _ = this.map.get(d.param) || [];
                      const m = _.indexOf(ct(d.value));
                      -1 !== m && _.splice(m, 1),
                        _.length > 0
                          ? this.map.set(d.param, _)
                          : this.map.delete(d.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class T {
        constructor() {
          this.map = new Map();
        }
        set(d, c) {
          return this.map.set(d, c), this;
        }
        get(d) {
          return (
            this.map.has(d) || this.map.set(d, d.defaultValue()),
            this.map.get(d)
          );
        }
        delete(d) {
          return this.map.delete(d), this;
        }
        has(d) {
          return this.map.has(d);
        }
        keys() {
          return this.map.keys();
        }
      }
      function At(g) {
        return typeof ArrayBuffer < "u" && g instanceof ArrayBuffer;
      }
      function Ut(g) {
        return typeof Blob < "u" && g instanceof Blob;
      }
      function qt(g) {
        return typeof FormData < "u" && g instanceof FormData;
      }
      class pt {
        constructor(d, c, _, m) {
          let A;
          if (
            ((this.url = c),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = d.toUpperCase()),
            (function ot(g) {
              switch (g) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || m
              ? ((this.body = void 0 !== _ ? _ : null), (A = m))
              : (A = _),
            A &&
              ((this.reportProgress = !!A.reportProgress),
              (this.withCredentials = !!A.withCredentials),
              A.responseType && (this.responseType = A.responseType),
              A.headers && (this.headers = A.headers),
              A.context && (this.context = A.context),
              A.params && (this.params = A.params)),
            this.headers || (this.headers = new L()),
            this.context || (this.context = new T()),
            this.params)
          ) {
            const I = this.params.toString();
            if (0 === I.length) this.urlWithParams = c;
            else {
              const j = c.indexOf("?");
              this.urlWithParams =
                c + (-1 === j ? "?" : j < c.length - 1 ? "&" : "") + I;
            }
          } else (this.params = new G()), (this.urlWithParams = c);
        }
        serializeBody() {
          return null === this.body
            ? null
            : At(this.body) ||
                Ut(this.body) ||
                qt(this.body) ||
                (function $t(g) {
                  return (
                    typeof URLSearchParams < "u" && g instanceof URLSearchParams
                  );
                })(this.body) ||
                "string" == typeof this.body
              ? this.body
              : this.body instanceof G
                ? this.body.toString()
                : "object" == typeof this.body ||
                    "boolean" == typeof this.body ||
                    Array.isArray(this.body)
                  ? JSON.stringify(this.body)
                  : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || qt(this.body)
            ? null
            : Ut(this.body)
              ? this.body.type || null
              : At(this.body)
                ? null
                : "string" == typeof this.body
                  ? "text/plain"
                  : this.body instanceof G
                    ? "application/x-www-form-urlencoded;charset=UTF-8"
                    : "object" == typeof this.body ||
                        "number" == typeof this.body ||
                        "boolean" == typeof this.body
                      ? "application/json"
                      : null;
        }
        clone(d = {}) {
          const c = d.method || this.method,
            _ = d.url || this.url,
            m = d.responseType || this.responseType,
            A = void 0 !== d.body ? d.body : this.body,
            I =
              void 0 !== d.withCredentials
                ? d.withCredentials
                : this.withCredentials,
            j =
              void 0 !== d.reportProgress
                ? d.reportProgress
                : this.reportProgress;
          let E = d.headers || this.headers,
            W = d.params || this.params;
          const vt = d.context ?? this.context;
          return (
            void 0 !== d.setHeaders &&
              (E = Object.keys(d.setHeaders).reduce(
                (Gt, ft) => Gt.set(ft, d.setHeaders[ft]),
                E,
              )),
            d.setParams &&
              (W = Object.keys(d.setParams).reduce(
                (Gt, ft) => Gt.set(ft, d.setParams[ft]),
                W,
              )),
            new pt(c, _, A, {
              params: W,
              headers: E,
              context: vt,
              reportProgress: j,
              responseType: m,
              withCredentials: I,
            })
          );
        }
      }
      var R = (() => (
        ((R = R || {})[(R.Sent = 0)] = "Sent"),
        (R[(R.UploadProgress = 1)] = "UploadProgress"),
        (R[(R.ResponseHeader = 2)] = "ResponseHeader"),
        (R[(R.DownloadProgress = 3)] = "DownloadProgress"),
        (R[(R.Response = 4)] = "Response"),
        (R[(R.User = 5)] = "User"),
        R
      ))();
      class _t {
        constructor(d, c = 200, _ = "OK") {
          (this.headers = d.headers || new L()),
            (this.status = void 0 !== d.status ? d.status : c),
            (this.statusText = d.statusText || _),
            (this.url = d.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Lt extends _t {
        constructor(d = {}) {
          super(d), (this.type = R.ResponseHeader);
        }
        clone(d = {}) {
          return new Lt({
            headers: d.headers || this.headers,
            status: void 0 !== d.status ? d.status : this.status,
            statusText: d.statusText || this.statusText,
            url: d.url || this.url || void 0,
          });
        }
      }
      class Vt extends _t {
        constructor(d = {}) {
          super(d),
            (this.type = R.Response),
            (this.body = void 0 !== d.body ? d.body : null);
        }
        clone(d = {}) {
          return new Vt({
            body: void 0 !== d.body ? d.body : this.body,
            headers: d.headers || this.headers,
            status: void 0 !== d.status ? d.status : this.status,
            statusText: d.statusText || this.statusText,
            url: d.url || this.url || void 0,
          });
        }
      }
      class Ft extends _t {
        constructor(d) {
          super(d, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${d.url || "(unknown url)"}`
                : `Http failure response for ${d.url || "(unknown url)"}: ${
                    d.status
                  } ${d.statusText}`),
            (this.error = d.error || null);
        }
      }
      function xt(g, d) {
        return {
          body: d,
          headers: g.headers,
          context: g.context,
          observe: g.observe,
          params: g.params,
          reportProgress: g.reportProgress,
          responseType: g.responseType,
          withCredentials: g.withCredentials,
        };
      }
      let Wt = (() => {
        class g {
          constructor(c) {
            this.handler = c;
          }
          request(c, _, m = {}) {
            let A;
            if (c instanceof pt) A = c;
            else {
              let E, W;
              (E = m.headers instanceof L ? m.headers : new L(m.headers)),
                m.params &&
                  (W =
                    m.params instanceof G
                      ? m.params
                      : new G({ fromObject: m.params })),
                (A = new pt(c, _, void 0 !== m.body ? m.body : null, {
                  headers: E,
                  context: m.context,
                  params: W,
                  reportProgress: m.reportProgress,
                  responseType: m.responseType || "json",
                  withCredentials: m.withCredentials,
                }));
            }
            const I = (0, i.of)(A).pipe(
              (0, Mt.b)((E) => this.handler.handle(E)),
            );
            if (c instanceof pt || "events" === m.observe) return I;
            const j = I.pipe((0, jt.h)((E) => E instanceof Vt));
            switch (m.observe || "body") {
              case "body":
                switch (A.responseType) {
                  case "arraybuffer":
                    return j.pipe(
                      (0, it.U)((E) => {
                        if (null !== E.body && !(E.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return E.body;
                      }),
                    );
                  case "blob":
                    return j.pipe(
                      (0, it.U)((E) => {
                        if (null !== E.body && !(E.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return E.body;
                      }),
                    );
                  case "text":
                    return j.pipe(
                      (0, it.U)((E) => {
                        if (null !== E.body && "string" != typeof E.body)
                          throw new Error("Response is not a string.");
                        return E.body;
                      }),
                    );
                  default:
                    return j.pipe((0, it.U)((E) => E.body));
                }
              case "response":
                return j;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${m.observe}}`,
                );
            }
          }
          delete(c, _ = {}) {
            return this.request("DELETE", c, _);
          }
          get(c, _ = {}) {
            return this.request("GET", c, _);
          }
          head(c, _ = {}) {
            return this.request("HEAD", c, _);
          }
          jsonp(c, _) {
            return this.request("JSONP", c, {
              params: new G().append(_, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(c, _ = {}) {
            return this.request("OPTIONS", c, _);
          }
          patch(c, _, m = {}) {
            return this.request("PATCH", c, xt(m, _));
          }
          post(c, _, m = {}) {
            return this.request("POST", c, xt(m, _));
          }
          put(c, _, m = {}) {
            return this.request("PUT", c, xt(m, _));
          }
        }
        return (
          (g.ɵfac = function (c) {
            return new (c || g)(O.LFG(gt));
          }),
          (g.ɵprov = O.Yz7({ token: g, factory: g.ɵfac })),
          g
        );
      })();
      function Xt(g, d) {
        return d(g);
      }
      function ie(g, d) {
        return (c, _) => d.intercept(c, { handle: (m) => g(m, _) });
      }
      const _e = new O.OlP("HTTP_INTERCEPTORS"),
        yt = new O.OlP("HTTP_INTERCEPTOR_FNS");
      function oe() {
        let g = null;
        return (d, c) => (
          null === g &&
            (g = ((0, O.f3M)(_e, { optional: !0 }) ?? []).reduceRight(ie, Xt)),
          g(d, c)
        );
      }
      let Bt = (() => {
        class g extends gt {
          constructor(c, _) {
            super(),
              (this.backend = c),
              (this.injector = _),
              (this.chain = null);
          }
          handle(c) {
            if (null === this.chain) {
              const _ = Array.from(new Set(this.injector.get(yt)));
              this.chain = _.reduceRight(
                (m, A) =>
                  (function ne(g, d, c) {
                    return (_, m) => c.runInContext(() => d(_, (A) => g(A, m)));
                  })(m, A, this.injector),
                Xt,
              );
            }
            return this.chain(c, (_) => this.backend.handle(_));
          }
        }
        return (
          (g.ɵfac = function (c) {
            return new (c || g)(O.LFG(tt), O.LFG(O.lqb));
          }),
          (g.ɵprov = O.Yz7({ token: g, factory: g.ɵfac })),
          g
        );
      })();
      const u = /^\)\]\}',?\n/;
      let x = (() => {
        class g {
          constructor(c) {
            this.xhrFactory = c;
          }
          handle(c) {
            if ("JSONP" === c.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed.",
              );
            return new h.y((_) => {
              const m = this.xhrFactory.build();
              if (
                (m.open(c.method, c.urlWithParams),
                c.withCredentials && (m.withCredentials = !0),
                c.headers.forEach((V, $) => m.setRequestHeader(V, $.join(","))),
                c.headers.has("Accept") ||
                  m.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*",
                  ),
                !c.headers.has("Content-Type"))
              ) {
                const V = c.detectContentTypeHeader();
                null !== V && m.setRequestHeader("Content-Type", V);
              }
              if (c.responseType) {
                const V = c.responseType.toLowerCase();
                m.responseType = "json" !== V ? V : "text";
              }
              const A = c.serializeBody();
              let I = null;
              const j = () => {
                  if (null !== I) return I;
                  const V = m.statusText || "OK",
                    $ = new L(m.getAllResponseHeaders()),
                    rt =
                      (function f(g) {
                        return "responseURL" in g && g.responseURL
                          ? g.responseURL
                          : /^X-Request-URL:/m.test(g.getAllResponseHeaders())
                            ? g.getResponseHeader("X-Request-URL")
                            : null;
                      })(m) || c.url;
                  return (
                    (I = new Lt({
                      headers: $,
                      status: m.status,
                      statusText: V,
                      url: rt,
                    })),
                    I
                  );
                },
                E = () => {
                  let { headers: V, status: $, statusText: rt, url: Nt } = j(),
                    X = null;
                  204 !== $ &&
                    (X = typeof m.response > "u" ? m.responseText : m.response),
                    0 === $ && ($ = X ? 200 : 0);
                  let Rt = $ >= 200 && $ < 300;
                  if ("json" === c.responseType && "string" == typeof X) {
                    const de = X;
                    X = X.replace(u, "");
                    try {
                      X = "" !== X ? JSON.parse(X) : null;
                    } catch (ce) {
                      (X = de), Rt && ((Rt = !1), (X = { error: ce, text: X }));
                    }
                  }
                  Rt
                    ? (_.next(
                        new Vt({
                          body: X,
                          headers: V,
                          status: $,
                          statusText: rt,
                          url: Nt || void 0,
                        }),
                      ),
                      _.complete())
                    : _.error(
                        new Ft({
                          error: X,
                          headers: V,
                          status: $,
                          statusText: rt,
                          url: Nt || void 0,
                        }),
                      );
                },
                W = (V) => {
                  const { url: $ } = j(),
                    rt = new Ft({
                      error: V,
                      status: m.status || 0,
                      statusText: m.statusText || "Unknown Error",
                      url: $ || void 0,
                    });
                  _.error(rt);
                };
              let vt = !1;
              const Gt = (V) => {
                  vt || (_.next(j()), (vt = !0));
                  let $ = { type: R.DownloadProgress, loaded: V.loaded };
                  V.lengthComputable && ($.total = V.total),
                    "text" === c.responseType &&
                      m.responseText &&
                      ($.partialText = m.responseText),
                    _.next($);
                },
                ft = (V) => {
                  let $ = { type: R.UploadProgress, loaded: V.loaded };
                  V.lengthComputable && ($.total = V.total), _.next($);
                };
              return (
                m.addEventListener("load", E),
                m.addEventListener("error", W),
                m.addEventListener("timeout", W),
                m.addEventListener("abort", W),
                c.reportProgress &&
                  (m.addEventListener("progress", Gt),
                  null !== A &&
                    m.upload &&
                    m.upload.addEventListener("progress", ft)),
                m.send(A),
                _.next({ type: R.Sent }),
                () => {
                  m.removeEventListener("error", W),
                    m.removeEventListener("abort", W),
                    m.removeEventListener("load", E),
                    m.removeEventListener("timeout", W),
                    c.reportProgress &&
                      (m.removeEventListener("progress", Gt),
                      null !== A &&
                        m.upload &&
                        m.upload.removeEventListener("progress", ft)),
                    m.readyState !== m.DONE && m.abort();
                }
              );
            });
          }
        }
        return (
          (g.ɵfac = function (c) {
            return new (c || g)(O.LFG(et.JF));
          }),
          (g.ɵprov = O.Yz7({ token: g, factory: g.ɵfac })),
          g
        );
      })();
      const b = new O.OlP("XSRF_ENABLED"),
        k = new O.OlP("XSRF_COOKIE_NAME", {
          providedIn: "root",
          factory: () => "XSRF-TOKEN",
        }),
        st = new O.OlP("XSRF_HEADER_NAME", {
          providedIn: "root",
          factory: () => "X-XSRF-TOKEN",
        });
      class Ot {}
      let be = (() => {
        class g {
          constructor(c, _, m) {
            (this.doc = c),
              (this.platform = _),
              (this.cookieName = m),
              (this.lastCookieString = ""),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ("server" === this.platform) return null;
            const c = this.doc.cookie || "";
            return (
              c !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = (0, et.Mx)(c, this.cookieName)),
                (this.lastCookieString = c)),
              this.lastToken
            );
          }
        }
        return (
          (g.ɵfac = function (c) {
            return new (c || g)(O.LFG(et.K0), O.LFG(O.Lbi), O.LFG(k));
          }),
          (g.ɵprov = O.Yz7({ token: g, factory: g.ɵfac })),
          g
        );
      })();
      function We(g, d) {
        const c = g.url.toLowerCase();
        if (
          !(0, O.f3M)(b) ||
          "GET" === g.method ||
          "HEAD" === g.method ||
          c.startsWith("http://") ||
          c.startsWith("https://")
        )
          return d(g);
        const _ = (0, O.f3M)(Ot).getToken(),
          m = (0, O.f3M)(st);
        return (
          null != _ &&
            !g.headers.has(m) &&
            (g = g.clone({ headers: g.headers.set(m, _) })),
          d(g)
        );
      }
      var z = (() => (
        ((z = z || {})[(z.Interceptors = 0)] = "Interceptors"),
        (z[(z.LegacyInterceptors = 1)] = "LegacyInterceptors"),
        (z[(z.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
        (z[(z.NoXsrfProtection = 3)] = "NoXsrfProtection"),
        (z[(z.JsonpSupport = 4)] = "JsonpSupport"),
        (z[(z.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
        z
      ))();
      function Zt(g, d) {
        return { ɵkind: g, ɵproviders: d };
      }
      function Mi(...g) {
        const d = [
          Wt,
          x,
          Bt,
          { provide: gt, useExisting: Bt },
          { provide: tt, useExisting: x },
          { provide: yt, useValue: We, multi: !0 },
          { provide: b, useValue: !0 },
          { provide: Ot, useClass: be },
        ];
        for (const c of g) d.push(...c.ɵproviders);
        return (0, O.MR2)(d);
      }
      const Xe = new O.OlP("LEGACY_INTERCEPTOR_FN");
      let we = (() => {
        class g {}
        return (
          (g.ɵfac = function (c) {
            return new (c || g)();
          }),
          (g.ɵmod = O.oAB({ type: g })),
          (g.ɵinj = O.cJS({
            providers: [
              Mi(
                Zt(z.LegacyInterceptors, [
                  { provide: Xe, useFactory: oe },
                  { provide: yt, useExisting: Xe, multi: !0 },
                ]),
              ),
            ],
          })),
          g
        );
      })();
    },
  },
]);
