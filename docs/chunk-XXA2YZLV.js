import{b as w,c as ce,d as pe,e as de,f as ue}from"./chunk-ARLEAA7V.js";import"./chunk-YTUOL35R.js";import{d as Te,e as st}from"./chunk-DHCCODH3.js";import{d as rt,m as lt,n as mt,o as ct}from"./chunk-2TCS5I26.js";import{a as j,b as A,n as at,r as Re,s as le,u as V,v as je,w as me}from"./chunk-HKIQNM75.js";import{B as it,E as nt,F as ot,H as re,J as se,j as Je,r as et,u as tt,z as Se}from"./chunk-FEMR6DLU.js";import{a as ae,m as Ee}from"./chunk-RKYAZ433.js";import{$a as Be,$c as Ze,Ab as p,Ba as xe,Bc as oe,Cb as X,Da as Le,Ea as ze,Eb as He,F as Ce,Fb as O,Fc as H,Ga as S,Gb as q,Ha as _,Hc as ke,Ia as we,Ib as K,Ja as Ne,Jb as Z,Jc as R,Kb as r,Lb as a,Mb as y,Nb as Pe,Ob as Fe,Oc as Xe,Qb as D,Sb as x,Tb as f,Ub as Oe,Vb as J,Vc as qe,X as G,Xb as ee,Y as Me,Yb as Ye,Zb as N,_b as B,_c as Ke,a as Y,ac as te,ad as d,b as Ae,bc as ie,da as I,dc as l,eb as c,ec as U,fa as z,fb as M,fc as Qe,gc as Ge,hb as De,hc as h,ia as k,ic as E,lc as ne,ma as u,mb as Ue,mc as We,na as P,nc as $e,o as Q,pb as T,qb as W,vb as Ie,wa as b,xa as v,ya as Ve,yb as F,zb as $}from"./chunk-SKJHGEYD.js";var pt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-api"]],standalone:!0,features:[h],decls:3,vars:0,template:function(t,n){t&1&&(r(0,"p"),l(1,"api works!"),a(),l(2,`,
`))},dependencies:[d],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();function xt(o,i){if(o&1){let s=D();r(0,"div",1)(1,"button",3),x("click",function(){b(s);let t=f();return v(t.onDelete.emit())}),r(2,"mat-icon"),l(3,"delete"),a()()()}}function wt(o,i){if(o&1&&(y(0,"img",4),ne(1,"async")),o&2){let s=f(2);p("src",We(1,2,s.getFileObjectUrl())||"/default-image.svg",Be)("alt",s.getFileName())}}function Dt(o,i){o&1&&(r(0,"mat-icon"),l(1," file-pdf-box "),a())}function It(o,i){o&1&&(r(0,"mat-icon"),l(1," video "),a())}function Pt(o,i){if(o&1&&(F(0,wt,2,4,"img",4)(1,Dt,2,0,"mat-icon")(2,It,2,0,"mat-icon"),r(3,"div",2)(4,"span",5),l(5),a()()),o&2){let s,e=f();O((s=e.getFileType())==="image"?0:s==="application"?1:s==="video"?2:-1),c(5),Qe(" ",e.getDisplayName()," ")}}var fe=(()=>{let i=class i{constructor(){this.fileObjectUrl=_.required(),this.displayFn=_(e=>e.name),this.deletable=_(!1),this.size=_("32"),this.onDelete=S()}getFileType(){let e=this.fileObjectUrl();if(e&&e.type){if(e.type.startsWith("image"))return"image";if(e.type.startsWith("application"))return"application";if(e.type.startsWith("video"))return"video"}return"unknown"}getFileObjectUrl(){let e=this.fileObjectUrl();return e&&e.objectUrl?e.objectUrl:null}getFileName(){let e=this.fileObjectUrl();return e?this.displayFn()(e):""}getDisplayName(){let e=this.fileObjectUrl();return e?this.displayFn()(e):""}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-file-display-card"]],inputs:{fileObjectUrl:[1,"fileObjectUrl"],displayFn:[1,"displayFn"],deletable:[1,"deletable"],size:[1,"size"]},outputs:{onDelete:"onDelete"},standalone:!0,features:[h],decls:3,vars:12,consts:[[1,"file-card","border"],[1,"actions"],[1,"informations","flex","justify-between","items-center"],["mat-icon-button","","color","red",3,"click"],[1,"h-full","w-full","object-cover",3,"src","alt"],[1,"text-xs","text-white"]],template:function(t,n){t&1&&(r(0,"button",0),F(1,xt,4,0,"div",1)(2,Pt,6,2,"div",2),a()),t&2&&(X("size-16",n.size()==="16")("size-32",n.size()==="32")("size-64",n.size()==="64")("size-128",n.size()==="128")("size-256",n.size()==="256"),c(),O(n.deletable()?1:-1),c(),O(n.fileObjectUrl()?2:-1))},dependencies:[d,Ke,se,re,A,j],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .file-card[_ngcontent-%COMP%]{position:relative;border-radius:4px;border:1px solid #e0e0e0;overflow:auto}[_nghost-%COMP%]   .file-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{position:absolute;top:-21px;right:-21px;z-index:1;display:none}[_nghost-%COMP%]   .file-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px}[_nghost-%COMP%]   .file-card[_ngcontent-%COMP%]:hover   .actions[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .file-card[_ngcontent-%COMP%]   .informations[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;z-index:1;width:100%;background:#00000080;padding:0 4px}"]});let o=i;return o})();function Ot(o,i){if(o&1){let s=D();r(0,"c3-file-display-card",3),x("click",function(t){let n=b(s).$index,m=f();return v(m.openDialog(t,n))})("onDelete",function(){let t=b(s).$implicit,n=f();return v(n.onDelete.emit(t))}),a()}if(o&2){let s=i.$index,e=f();p("fileObjectUrl",e.fileViewer.filesObjectUrl[s])}}var he=(()=>{let i=class i{constructor(){this.files=_.required(),this.config=_(),this.displayFn=_(e=>e.name),this.deletable=_(!1),this.onDelete=S(),this.dialog=W(w),this.fileViewer=new ce({client:k(ae)}),R(()=>{this.fileViewer.files=this.files()},{allowSignalWrites:!0}),R(()=>{this.config()&&(this.fileViewer.config=this.config())},{allowSignalWrites:!0})}openDialog(e,t){e.stopPropagation(),this.fileViewer.currentIndex=t,this.dialog()?.openDialog()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-file-display-grid"]],viewQuery:function(t,n){t&1&&te(n.dialog,w,5),t&2&&ie()},inputs:{files:[1,"files"],config:[1,"config"],displayFn:[1,"displayFn"],deletable:[1,"deletable"]},outputs:{onDelete:"onDelete"},standalone:!0,features:[h],decls:4,vars:1,consts:[[3,"fileViewer"],[1,"c3-file-display-grid"],[3,"fileObjectUrl"],[3,"click","onDelete","fileObjectUrl"]],template:function(t,n){t&1&&(r(0,"c3-file-viewer-dialog",0)(1,"div",1),K(2,Ot,1,1,"c3-file-display-card",2,q),a()()),t&2&&(p("fileViewer",n.fileViewer),c(2),Z(n.files()))},dependencies:[d,fe,pe,w],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .c3-file-display-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:10px}"]});let o=i;return o})();var ge=(()=>{let i=class i{constructor(){this.fileType=_.required(),this.displayedIcon=ke(()=>{switch(this.fileType()){case"image/webp":case"image/png":case"image/jpeg":case"image/jpg":return"image";case"video/mp4":case"video/webm":return"play_circle";case"application/pdf":return"picture_as_pdf";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"description";default:return"content_copy"}}),this.color=ke(()=>{switch(this.fileType()){case"image/webp":case"image/png":case"image/jpeg":case"image/jpg":return"text-primary";case"video/mp4":case"video/webm":return"text-secondary";case"application/pdf":return"text-error";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"text-success";default:return"text-gray"}})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-file-display-icon"]],inputs:{fileType:[1,"fileType"]},standalone:!0,features:[h],decls:2,vars:2,consts:[[3,"ngClass"]],template:function(t,n){t&1&&(r(0,"mat-icon",0),l(1),a()),t&2&&(p("ngClass",n.color()),c(),U(n.displayedIcon()))},dependencies:[d,qe,A,j],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .text-primary[_ngcontent-%COMP%]{color:var(--primary-color)}[_nghost-%COMP%]   .text-secondary[_ngcontent-%COMP%]{color:var(--secondary-color)}[_nghost-%COMP%]   .text-success[_ngcontent-%COMP%]{color:var(--success-color)}[_nghost-%COMP%]   .text-gray[_ngcontent-%COMP%]{color:var(--gray-color)}"]});let o=i;return o})();var At=["mat-menu-item",""],Vt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Lt=["mat-icon, [matMenuItemIcon]","*"];function zt(o,i){o&1&&(Ve(),r(0,"svg",2),y(1,"polygon",3),a())}var Nt=["*"];function Bt(o,i){if(o&1){let s=D();r(0,"div",0),x("keydown",function(t){b(s);let n=f();return v(n._handleKeydown(t))})("click",function(){b(s);let t=f();return v(t.closed.emit("click"))})("@transformMenu.start",function(t){b(s);let n=f();return v(n._onAnimationStart(t))})("@transformMenu.done",function(t){b(s);let n=f();return v(n._onAnimationDone(t))}),r(1,"div",1),J(2),a()()}if(o&2){let s=f();He(s._classList),p("id",s.panelId)("@transformMenu",s._panelAnimationState),$("aria-label",s.ariaLabel||null)("aria-labelledby",s.ariaLabelledby||null)("aria-describedby",s.ariaDescribedby||null)}}var ft=new z("MAT_MENU_PANEL"),_e=(()=>{let i=class i{constructor(e,t,n,m,g){this._elementRef=e,this._document=t,this._focusMonitor=n,this._parentMenu=m,this._changeDetectorRef=g,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new Q,this._focused=new Q,this._highlighted=!1,this._triggersSubmenu=!1,m?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};i.\u0275fac=function(t){return new(t||i)(M(we),M(Xe),M(tt),M(ft,8),M(oe))},i.\u0275cmp=u({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&x("click",function(g){return n._checkDisabled(g)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&($("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),X("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H]},exportAs:["matMenuItem"],standalone:!0,features:[Ie,h],attrs:At,ngContentSelectors:Lt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Oe(Vt),J(0),r(1,"span",0),J(2,1),a(),y(3,"div",1),F(4,zt,2,0,":svg:svg",2)),t&2&&(c(3),p("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),c(),O(n._triggersSubmenu?4:-1))},dependencies:[nt],encapsulation:2,changeDetection:0});let o=i;return o})();var Ut=new z("MatMenuContent");var ye={transformMenu:Re("transformMenu",[je("void",V({opacity:0,transform:"scale(0.8)"})),me("void => enter",le("120ms cubic-bezier(0, 0, 0.2, 1)",V({opacity:1,transform:"scale(1)"}))),me("* => void",le("100ms 25ms linear",V({opacity:0})))]),fadeInItems:Re("fadeInItems",[je("showing",V({opacity:1})),me("void => *",[V({opacity:0}),le("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},ln=ye.fadeInItems,mn=ye.transformMenu,Ht=0,Yt=new z("mat-menu-default-options",{providedIn:"root",factory:Qt});function Qt(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var ht=(()=>{let i=class i{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass,n=Y({},this._classList);t&&t.length&&t.split(" ").forEach(m=>{n[m]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(m=>{n[m]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,n,m){this._elementRef=e,this._changeDetectorRef=m,this._elevationPrefix="mat-elevation-z",this._baseElevation=null,this._directDescendantItems=new Ne,this._classList={},this._panelAnimationState="void",this._animationDone=new Q,this.closed=new Le,this.close=this.closed,this.panelId=`mat-menu-panel-${Ht++}`,this._injector=k(xe),this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new et(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(G(this._directDescendantItems),Me(e=>Ce(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),m=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[m]&&!n[m].disabled?t.setActiveItem(m):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(G(this._directDescendantItems),Me(t=>Ce(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Je(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ue(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){if(this._baseElevation===null){let Ct=(typeof getComputedStyle=="function"?getComputedStyle(this._elementRef.nativeElement):null)?.getPropertyValue("--mat-menu-base-elevation-level")||"8";this._baseElevation=parseInt(Ct)}let t=Math.min(this._baseElevation+e,24),n=`${this._elevationPrefix}${t}`,m=Object.keys(this._classList).find(g=>g.startsWith(this._elevationPrefix));if(!m||m===this._previousElevation){let g=Y({},this._classList);this._previousElevation&&(g[this._previousElevation]=!1),g[n]=!0,this._previousElevation=n,this._classList=g}}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ae(Y({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(G(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};i.\u0275fac=function(t){return new(t||i)(M(we),M(ze),M(Yt),M(oe))},i.\u0275cmp=u({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,m){if(t&1&&(ee(m,Ut,5),ee(m,_e,5),ee(m,_e,4)),t&2){let g;N(g=B())&&(n.lazyContent=g.first),N(g=B())&&(n._allItems=g),N(g=B())&&(n.items=g)}},viewQuery:function(t,n){if(t&1&&Ye(De,5),t&2){let m;N(m=B())&&(n.templateRef=m.first)}},hostVars:3,hostBindings:function(t,n){t&2&&$("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",H],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:H(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[Ge([{provide:ft,useExisting:i}]),Ie,h],ngContentSelectors:Nt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Oe(),F(0,Bt,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[ye.transformMenu,ye.fadeInItems]},changeDetection:0});let o=i;return o})(),Gt=new z("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=k(Te);return()=>o.scrollStrategies.reposition()}});function Wt(o){return()=>o.scrollStrategies.reposition()}var $t={provide:Gt,deps:[Te],useFactory:Wt};var gt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=P({type:i}),i.\u0275inj=I({providers:[$t],imports:[d,ot,Se,st,rt,Se]});let o=i;return o})();function qt(o,i){if(o&1){let s=D();r(0,"button",11),x("click",function(){b(s);let t=f().$implicit,n=f();return v(n.onDelete.emit(t))}),l(1,"Supprimer"),a()}}function Kt(o,i){if(o&1){let s=D();r(0,"button")(1,"div",4),y(2,"c3-file-display-icon",7),a(),r(3,"div",8)(4,"span"),l(5),a()(),r(6,"div",9)(7,"span"),l(8),ne(9,"date"),a()(),r(10,"button",10)(11,"mat-icon"),l(12,"more_vert"),a()(),r(13,"mat-menu",null,0)(15,"button",11),x("click",function(t){let n=b(s).$index,m=f();return v(m.openDialog(t,n))}),l(16," Ouvrir "),a(),F(17,qt,2,0,"button",12),a()()}if(o&2){let s=i.$implicit,e=f();c(2),p("fileType",s.type),c(3),U(e.displayFn()(s)),c(3),U(s.lastModified?$e(9,4,s.lastModified,"medium"):"-"),c(9),O(e.deletable()?17:-1)}}var be=(()=>{let i=class i{constructor(){this.files=_.required(),this.config=_(),this.displayFn=_(e=>e.name),this.deletable=_(!1),this.onDelete=S(),this.dialog=W(w),this.fileViewer=new ce({client:k(ae)}),R(()=>{this.fileViewer.files=this.files()},{allowSignalWrites:!0}),R(()=>{this.config()&&(this.fileViewer.config=this.config())},{allowSignalWrites:!0})}openDialog(e,t){e.stopPropagation(),this.fileViewer.currentIndex=t,this.dialog()?.openDialog()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-file-display-list"]],viewQuery:function(t,n){t&1&&te(n.dialog,w,5),t&2&&ie()},inputs:{files:[1,"files"],config:[1,"config"],displayFn:[1,"displayFn"],deletable:[1,"deletable"]},outputs:{onDelete:"onDelete"},standalone:!0,features:[h],decls:14,vars:1,consts:[["menu","matMenu"],[1,"header"],[1,"title","full"],[1,"title"],[1,"icon"],[3,"fileViewer"],[1,"file-display-list"],[3,"fileType"],[1,"name"],[1,"date-label"],["mat-icon-button",""],["mat-menu-item","",3,"click"],["mat-menu-item",""]],template:function(t,n){t&1&&(r(0,"div",1)(1,"div",2)(2,"span"),l(3,"Nom"),a()(),r(4,"div",3)(5,"span"),l(6,"Date d'ajout"),a()(),r(7,"div",4)(8,"mat-icon"),l(9,"more_vert"),a()()(),r(10,"c3-file-viewer-dialog",5)(11,"div",6),K(12,Kt,18,7,"button",null,q),a()()),t&2&&(c(10),p("fileViewer",n.fileViewer),c(2),Z(n.files()))},dependencies:[pe,w,ge,d,Ze,se,re,A,j,it,gt,ht,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin:.5rem}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 .5rem;border-bottom:1px solid var(--mat-divider-color)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-basis:304px;width:304px;font-size:1.5rem;font-weight:700}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title.full[_ngcontent-%COMP%]{flex:auto}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{flex-basis:40px;width:40px}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:3rem;align-items:center;border-bottom:1px solid var(--mat-divider-color);background-color:var(--mdc-protected-button-container-color);text-align:start;padding:0 .5rem}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{background-color:var(--background-hover)}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{flex-basis:56px;width:56px}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex:auto;flex-basis:304px;width:304px}[_nghost-%COMP%]   .file-display-list[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%]{flex-basis:304px;width:304px}"]});let o=i;return o})();var ve=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=P({type:i}),i.\u0275inj=I({imports:[d,he,be,fe,ge]});let o=i;return o})();var _t=(()=>{let i=class i{constructor(){this.files=T(de),this.config=T(ue)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-example-display-grid"]],standalone:!0,features:[h],decls:1,vars:2,consts:[[3,"files","config"]],template:function(t,n){t&1&&y(0,"c3-file-display-grid",0),t&2&&p("files",n.files())("config",n.config())},dependencies:[d,ve,he],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();var yt=(()=>{let i=class i{constructor(){this.files=T(de),this.config=T(ue)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-example-display-list"]],standalone:!0,features:[h],decls:1,vars:2,consts:[[3,"files","config"]],template:function(t,n){t&1&&y(0,"c3-file-display-list",0),t&2&&p("files",n.files())("config",n.config())},dependencies:[d,ve,be],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();var L=()=>({}),bt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["c3-examples"]],standalone:!0,features:[h],decls:36,vars:12,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","CrabbyImg.ts"],["example",""]],template:function(t,n){t&1&&(r(0,"p",0),l(1,"Prebuild component for display files in list or grid"),a(),r(2,"example-viewer",1)(3,"h4",2),l(4,"Example display list component"),a(),r(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),l(8,`import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  crabbyImgs,
  configDemo,
} from 'projects/c3-components-docs/src/app/files-demo';
import { C3FileDisplayerModule } from 'c3-components';

@Component({
  selector: 'c3-example-display-list',
  standalone: true,
  imports: [CommonModule, C3FileDisplayerModule],
  templateUrl: './example-display-list.component.html',
  styleUrl: './example-display-list.component.scss',
})
export class ExampleDisplayListComponent {
  public readonly files = signal(crabbyImgs);
  public readonly config = signal(configDemo);
}
      `),a()()(),r(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),l(12,`<c3-file-display-list [files]="files()" [config]="config()" />
      `),a()()(),r(13,"c3-example-viewer-tab",7)(14,"div")(15,"textarea",4),l(16,`import {
  C3FileViewerConfig,
  FileMetadata
} from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 5',
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: 'Crabby - 6',
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
];

export const configDemo: C3FileViewerConfig = {
  btnContainerClass: 'other',
  btnClass: 'btn btn-hover-primary px-1',
  btnSubClass: 'material-icons font-size-xl',
  zoomFactor: 0.1,
  wheelZoom: true,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  height: '640px',
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: false,
    prev: false,
    reset: true,
  },
  btnIcons: {
    next: {
      text: 'navigate_next',
    },
    prev: {
      text: 'navigate_before',
    },
  },
  customBtns: [],
};
      `),a()()(),Pe(17,8),y(18,"c3-example-display-grid"),Fe(),a(),r(19,"example-viewer",1)(20,"h4",2),l(21,"Example display list component"),a(),r(22,"c3-example-viewer-tab",3)(23,"div")(24,"textarea",4),l(25,`import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  configDemo,
  crabbyImgs,
} from 'projects/c3-components-docs/src/app/files-demo';
import { C3FileDisplayerModule } from 'c3-components';

@Component({
  selector: 'c3-example-display-grid',
  standalone: true,
  imports: [CommonModule, C3FileDisplayerModule],
  templateUrl: './example-display-grid.component.html',
  styleUrl: './example-display-grid.component.scss',
})
export class ExampleDisplayGridComponent {
  public readonly files = signal(crabbyImgs);
  public readonly config = signal(configDemo);
}
      `),a()()(),r(26,"c3-example-viewer-tab",5)(27,"div")(28,"textarea",6),l(29,`<c3-file-display-grid [files]="files()" [config]="config()" />
      `),a()()(),r(30,"c3-example-viewer-tab",7)(31,"div")(32,"textarea",4),l(33,`import {
  C3FileViewerConfig,
  FileMetadata
} from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 5',
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: 'Crabby - 6',
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
];

export const configDemo: C3FileViewerConfig = {
  btnContainerClass: 'other',
  btnClass: 'btn btn-hover-primary px-1',
  btnSubClass: 'material-icons font-size-xl',
  zoomFactor: 0.1,
  wheelZoom: true,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  height: '640px',
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: false,
    prev: false,
    reset: true,
  },
  btnIcons: {
    next: {
      text: 'navigate_next',
    },
    prev: {
      text: 'navigate_before',
    },
  },
  customBtns: [],
};
      `),a()()(),Pe(34,8),y(35,"c3-example-display-list"),Fe(),a()),t&2&&(c(7),p("options",E(6,L)),c(4),p("options",E(7,L)),c(4),p("options",E(8,L)),c(9),p("options",E(9,L)),c(4),p("options",E(10,L)),c(4),p("options",E(11,L)))},dependencies:[d,_t,yt,mt,lt,at],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();var Jt=[{path:"",component:ct,children:[{path:"api",component:pt},{path:"examples",component:bt},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],vt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=P({type:i}),i.\u0275inj=I({imports:[Ee.forChild(Jt),Ee]});let o=i;return o})();var eo=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=P({type:i}),i.\u0275inj=I({imports:[vt]});let o=i;return o})();export{eo as FileDisplayerModule};
