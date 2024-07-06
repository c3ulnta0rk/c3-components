import{a as Ft,b as Q,c as D,d as f,e as W}from"./chunk-UN7XA67E.js";import{a as nt,b as kt,c as Rt,e as I,f as x}from"./chunk-BLDIPPYU.js";import{b as Et}from"./chunk-BB3BL7FE.js";import{A as ot,a as xt,g as G,j as H,l as et,t as $,u as q,v as Y,x as wt,y as it}from"./chunk-6DAOYRYX.js";import{$ as pt,A as O,Aa as B,Ab as Tt,Da as _t,E as F,Gb as z,Hb as It,Ia as C,Ja as vt,L,La as N,Ma as T,Pa as J,R as S,S as j,T as p,U as d,V as _,W as P,Wa as yt,X as M,Xa as bt,Y as y,a as m,ab as tt,b as ht,ca as K,cb as Ct,ea as g,ha as b,ia as gt,jb as Dt,kb as At,l as u,lb as Ot,ma as X,p as mt,rb as V,ua as c,v as R,wa as ft,z as ut}from"./chunk-7Z6HGTAJ.js";function qt(n,i){}var v=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var rt=(()=>{let i=class i extends Rt{constructor(t,e,o,a,l,r,h,A){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=a,this._interactivityChecker=l,this._ngZone=r,this._overlayRef=h,this._focusMonitor=A,this._platform=_(xt),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=_(Tt),this._injector=_(g),this._isDestroyed=!1,this.attachDomPortal=Z=>{this._portalOutlet.hasAttached();let zt=this._portalOutlet.attachDomPortal(Z);return this._contentAttached(),zt},this._document=o,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{t.removeEventListener("blur",o),t.removeEventListener("mousedown",o),t.removeAttribute("tabindex")};t.addEventListener("blur",o),t.addEventListener("mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(){this._isDestroyed||_t(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=G(),a=this._elementRef.nativeElement;(!o||o===this._document.body||o===a||a.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=G();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=G()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};i.\u0275fac=function(e){return new(e||i)(c(b),c(q),c(z,8),c(v),c($),c(B),c(D),c(Y))},i.\u0275cmp=P({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&Dt(I,7),e&2){let a;At(a=Ot())&&(o._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&T("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},standalone:!0,features:[C,V],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&N(0,qt,0,0,"ng-template",0)},dependencies:[I],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let n=i;return n})(),w=class{constructor(i,s){this.overlayRef=i,this.config=s,this.closed=new u,this.disableClose=s.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=s.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!H(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=i.detachments().subscribe(()=>{s.closeOnOverlayDetachments!==!1&&this.close()})}close(i,s){if(this.containerInstance){let t=this.closed;this.containerInstance._closeInteractionType=s?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",s=""){return this.overlayRef.updateSize({width:i,height:s}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}},Yt=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=_(f);return()=>n.scrollStrategies.block()}}),Qt=new p("DialogData"),Wt=new p("DefaultDialogConfig");var Ut=0,lt=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,o,a,l,r){this._overlay=t,this._injector=e,this._defaultOptions=o,this._parentDialog=a,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this._ariaHiddenElements=new Map,this.afterAllClosed=R(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(L(void 0))),this._scrollStrategy=r}open(t,e){let o=this._defaultOptions||new v;e=m(m({},o),e),e.id=e.id||`cdk-dialog-${Ut++}`,e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),l=this._overlay.create(a),r=new w(l,e),h=this._attachContainer(l,r,e);return r.containerInstance=h,this._attachDialogContent(t,r,h,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){at(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){at(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),at(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Ft({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let a=o.injector||o.viewContainerRef?.injector,l=[{provide:v,useValue:o},{provide:w,useValue:e},{provide:D,useValue:t}],r;o.container?typeof o.container=="function"?r=o.container:(r=o.container.type,l.push(...o.container.providers(o))):r=rt;let h=new nt(r,o.viewContainerRef,g.create({parent:a||this._injector,providers:l}),o.componentFactoryResolver);return t.attach(h).instance}_attachDialogContent(t,e,o,a){if(t instanceof ft){let l=this._createInjector(a,e,o,void 0),r={$implicit:a.data,dialogRef:e};a.templateContext&&(r=m(m({},r),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),o.attachTemplatePortal(new kt(t,null,r,l))}else{let l=this._createInjector(a,e,o,this._injector),r=o.attachComponentPortal(new nt(t,a.viewContainerRef,l,a.componentFactoryResolver));e.componentRef=r,e.componentInstance=r.instance}}_createInjector(t,e,o,a){let l=t.injector||t.viewContainerRef?.injector,r=[{provide:Qt,useValue:t.data},{provide:w,useValue:e}];return t.providers&&(typeof t.providers=="function"?r.push(...t.providers(e,t,o)):r.push(...t.providers)),t.direction&&(!l||!l.get(it,null,{optional:!0}))&&r.push({provide:it,useValue:{value:t.direction,change:mt()}}),g.create({parent:l||a,providers:r})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let a=e[o];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}};i.\u0275fac=function(e){return new(e||i)(d(f),d(g),d(Wt,8),d(i,12),d(Q),d(Yt))},i.\u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function at(n,i){let s=n.length;for(;s--;)i(n[s])}var Lt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=M({type:i}),i.\u0275inj=j({providers:[lt],imports:[W,x,wt,x]});let n=i;return n})();function Zt(n,i){}var E=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},ct="mdc-dialog--open",St="mdc-dialog--opening",jt="mdc-dialog--closing",Kt=150,Xt=75,Jt=(()=>{let i=class i extends rt{constructor(t,e,o,a,l,r,h,A,Z){super(t,e,o,a,l,r,h,Z),this._animationMode=A,this._animationStateChanged=new gt,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Mt(this._config.enterAnimationDuration)??Kt:0,this._exitAnimationDuration=this._animationsEnabled?Mt(this._config.exitAnimationDuration)??Xt:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(St,ct)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ct),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ct),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(jt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(St,jt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}};i.\u0275fac=function(e){return new(e||i)(c(b),c(q),c(z,8),c(E),c($),c(B),c(D),c(X,8),c(Y))},i.\u0275cmp=P({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(tt("id",o._config.id),T("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),J("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},standalone:!0,features:[C,V],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(yt(0,"div",0)(1,"div",1),N(2,Zt,0,0,"ng-template",2),bt()())},dependencies:[I],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, 4px);background-color:var(--mdc-dialog-container-color, white)}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87));font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6));font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2});let n=i;return n})(),Pt="--mat-dialog-transition-duration";function Mt(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?et(n.substring(0,n.length-2)):n.endsWith("s")?et(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var U=function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n}(U||{}),k=class{constructor(i,s,t){this._ref=i,this._containerInstance=t,this._afterOpened=new u,this._beforeClosed=new u,this._state=U.OPEN,this.disableClose=s.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(O(e=>e.state==="opened"),F(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(O(e=>e.state==="closed"),F(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ut(this.backdropClick(),this.keydownEvents().pipe(O(e=>e.keyCode===27&&!this.disableClose&&!H(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),Bt(this,e.type==="keydown"?"keyboard":"mouse"))})}close(i){this._result=i,this._containerInstance._animationStateChanged.pipe(O(s=>s.state==="closing"),F(1)).subscribe(s=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),s.totalTime+100)}),this._state=U.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let s=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?s.left(i.left):s.right(i.right):s.centerHorizontally(),i&&(i.top||i.bottom)?i.top?s.top(i.top):s.bottom(i.bottom):s.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",s=""){return this._ref.updateSize(i,s),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=U.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Bt(n,i,s){return n._closeInteractionType=i,n.close(s)}var te=new p("MatMdcDialogData"),ee=new p("mat-mdc-dialog-default-options"),ie=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=_(f);return()=>n.scrollStrategies.block()}});var oe=0,dt=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,o,a,l,r,h,A){this._overlay=t,this._defaultOptions=a,this._scrollStrategy=l,this._parentDialog=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this.dialogConfigClass=E,this.afterAllClosed=R(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(L(void 0))),this._dialog=e.get(lt),this._dialogRefConstructor=k,this._dialogContainerType=Jt,this._dialogDataToken=te}open(t,e){let o;e=m(m({},this._defaultOptions||new E),e),e.id=e.id||`mat-mdc-dialog-${oe++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,ht(m({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:v,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(l,r,h)=>(o=new this._dialogRefConstructor(l,e,h),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=a.componentRef,o.componentInstance=a.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(o);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}};i.\u0275fac=function(e){return new(e||i)(d(f),d(g),d(It,8),d(ee,8),d(ie),d(i,12),d(Q),d(X,8))},i.\u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})(),ne=0,We=(()=>{let i=class i{constructor(t,e,o){this.dialogRef=t,this._elementRef=e,this._dialog=o,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=Vt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Bt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}};i.\u0275fac=function(e){return new(e||i)(c(k,8),c(b),c(dt))},i.\u0275dir=y({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,o){e&1&&Ct("click",function(l){return o._onButtonClick(l)}),e&2&&T("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[pt]});let n=i;return n})(),Nt=(()=>{let i=class i{constructor(t,e,o){this._dialogRef=t,this._elementRef=e,this._dialog=o}ngOnInit(){this._dialogRef||(this._dialogRef=Vt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}};i.\u0275fac=function(e){return new(e||i)(c(k,8),c(b),c(dt))},i.\u0275dir=y({type:i,standalone:!0});let n=i;return n})(),Ue=(()=>{let i=class i extends Nt{constructor(){super(...arguments),this.id=`mat-mdc-dialog-title-${ne++}`}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}};i.\u0275fac=(()=>{let t;return function(o){return(t||(t=K(i)))(o||i)}})(),i.\u0275dir=y({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,o){e&2&&tt("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[C]});let n=i;return n})(),Ze=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=y({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[vt([Et])]});let n=i;return n})(),Ke=(()=>{let i=class i extends Nt{_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}};i.\u0275fac=(()=>{let t;return function(o){return(t||(t=K(i)))(o||i)}})(),i.\u0275dir=y({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,o){e&2&&J("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},standalone:!0,features:[C]});let n=i;return n})();function Vt(n,i){let s=n.nativeElement.parentElement;for(;s&&!s.classList.contains("mat-mdc-dialog-container");)s=s.parentElement;return s?i.find(t=>t.id===s.id):null}var Xe=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=M({type:i}),i.\u0275inj=j({providers:[dt],imports:[Lt,W,x,ot,ot]});let n=i;return n})();export{k as a,te as b,dt as c,We as d,Ue as e,Ze as f,Ke as g,Xe as h};
