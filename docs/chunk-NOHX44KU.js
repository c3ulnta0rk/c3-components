import{a as j}from"./chunk-IP5QXJH5.js";import{b as B,c as V}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as N}from"./chunk-RA7FHYGQ.js";import{c as O,d as D,e as A}from"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import{i as w}from"./chunk-SU6PRRH7.js";import{a as F,b as P}from"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{n as R}from"./chunk-7WGNA6AJ.js";import{$b as v,Fc as h,Nb as k,Ob as I,Tb as E,Ub as i,Vb as m,Xb as n,Yb as e,_b as g,bb as l,bc as T,ca as c,fc as u,hc as b,oa as S,pa as f,sb as p,tb as s,wc as t,ya as y}from"./chunk-AGADXNXO.js";var z=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["c3-api"]],decls:156,vars:0,consts:[[1,"api-section"],[1,"api-table"],[1,"notes-list"]],template:function(r,x){r&1&&(n(0,"h1"),t(1,"Modal API"),e(),n(2,"section",0)(3,"h2"),t(4,"Import"),e(),n(5,"pre")(6,"code"),t(7,`import { C3ModalComponent } from 'c3-components';
// or
import { C3ModalModule } from 'c3-components';`),e()()(),n(8,"section",0)(9,"h2"),t(10,"C3ModalComponent"),e(),n(11,"p"),t(12,"Selector: "),n(13,"code"),t(14,"c3-modal"),e()(),n(15,"p"),t(16,"A side-panel modal that slides in from the right. Uses a "),n(17,"code"),t(18,"router-outlet"),e(),t(19," for its content and provides a close button that navigates back to a computed return route."),e(),n(20,"h3"),t(21,"Inputs"),e(),n(22,"table",1)(23,"thead")(24,"tr")(25,"th"),t(26,"Name"),e(),n(27,"th"),t(28,"Type"),e(),n(29,"th"),t(30,"Default"),e(),n(31,"th"),t(32,"Description"),e()()(),n(33,"tbody")(34,"tr")(35,"td")(36,"code"),t(37,"returnRoute"),e()(),n(38,"td")(39,"code"),t(40,"string | null"),e()(),n(41,"td")(42,"code"),t(43,"null"),e()(),n(44,"td"),t(45,"Overrides the auto-computed return route used by the close button and backdrop."),e()()()(),n(46,"h3"),t(47,"Internal Signals"),e(),n(48,"table",1)(49,"thead")(50,"tr")(51,"th"),t(52,"Name"),e(),n(53,"th"),t(54,"Type"),e(),n(55,"th"),t(56,"Description"),e()()(),n(57,"tbody")(58,"tr")(59,"td")(60,"code"),t(61,"_returnRoute"),e()(),n(62,"td")(63,"code"),t(64,"Signal<string>"),e()(),n(65,"td"),t(66,"The resolved return route (auto-computed or overridden by the input)."),e()(),n(67,"tr")(68,"td")(69,"code"),t(70,"height"),e()(),n(71,"td")(72,"code"),t(73,"Signal<string>"),e()(),n(74,"td"),t(75,"The modal container height, updated on window resize."),e()(),n(76,"tr")(77,"td")(78,"code"),t(79,"posButton"),e()(),n(80,"td")(81,"code"),t(82,"Signal<number>"),e()(),n(83,"td"),t(84,"The close button horizontal position, computed from the container width."),e()()()()(),n(85,"section",0)(86,"h2"),t(87,"How It Works"),e(),n(88,"ul",2)(89,"li"),t(90,"The return route is "),n(91,"strong"),t(92,"auto-computed"),e(),t(93," by walking the "),n(94,"code"),t(95,"ActivatedRoute.pathFromRoot"),e(),t(96,". It builds the parent path by skipping the current route segment."),e(),n(97,"li"),t(98,"Clicking the backdrop ("),n(99,"code"),t(100,".outer"),e(),t(101,") or the close button navigates to the return route via "),n(102,"code"),t(103,"[routerLink]"),e(),t(104,"."),e(),n(105,"li"),t(106,"The modal height matches "),n(107,"code"),t(108,"window.innerHeight"),e(),t(109," and updates on resize."),e(),n(110,"li"),t(111,"The close button position is watched with a "),n(112,"code"),t(113,"setInterval"),e(),t(114," and updated when the container width changes."),e(),n(115,"li"),t(116,"The component is SSR-safe \u2014 browser-only APIs are guarded with "),n(117,"code"),t(118,"isPlatformBrowser"),e(),t(119,"."),e()()(),n(120,"section",0)(121,"h2"),t(122,"Usage Example"),e(),n(123,"pre")(124,"code"),t(125,`<!-- In a route configuration -->
{
  path: 'detail',
  component: DetailPageComponent,
  children: [
    {
      path: 'edit',
      component: C3ModalComponent,
      children: [
        { path: '', component: EditFormComponent }
      ]
    }
  ]
}

<!-- In the parent template -->
<router-outlet></router-outlet>

<!-- Or with a custom return route -->
<c3-modal returnRoute="/dashboard"></c3-modal>`),e()()(),n(126,"section",0)(127,"h2"),t(128,"Styling"),e(),n(129,"p"),t(130,"The component uses "),n(131,"code"),t(132,"ViewEncapsulation.None"),e(),t(133," with host class "),n(134,"code"),t(135,"c3-modal"),e(),t(136,". Apply the theme mixin:"),e(),n(137,"pre")(138,"code"),t(139,`@use 'c3-components' as c3;

@include c3.c3-modal-theme($your-theme);`),e()()(),n(140,"section",0)(141,"h2"),t(142,"Dependencies"),e(),n(143,"ul",2)(144,"li")(145,"code"),t(146,"@angular/router"),e(),t(147," - RouterModule (router-outlet, routerLink)"),e(),n(148,"li")(149,"code"),t(150,"@angular/material/button"),e(),t(151," - MatButtonModule (close button FAB)"),e(),n(152,"li")(153,"code"),t(154,"@angular/material/icon"),e(),t(155," - MatIconModule (close icon)"),e()()())},encapsulation:2});let d=o;return d})();var M=()=>({});function U(d,o){if(d&1){let _=T();i(0,"div",5)(1,"div",12),u("click",function(){S(_);let r=b();return f(r.closeModal())}),m(),i(2,"div",13)(3,"button",14),u("click",function(){S(_);let r=b();return f(r.closeModal())}),i(4,"mat-icon"),t(5,"close"),m()(),i(6,"div",15)(7,"h3",16),t(8,"Modal Content"),m(),i(9,"p"),t(10,"This is where the "),i(11,"code"),t(12,"router-outlet"),m(),t(13," renders the child route content."),m(),i(14,"p"),t(15,"The close button and backdrop navigate back to the parent route automatically."),m()()()()}}var H=(()=>{let o=class o{constructor(){this.showModal=y(!1)}openModal(){this.showModal.set(!0)}closeModal(){this.showModal.set(!1)}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["c3-examples"]],decls:41,vars:7,consts:[[1,"my-4"],["title",""],["example",""],[2,"margin-bottom","16px","color","var(--text-secondary, #666)"],["mat-raised-button","","color","primary",3,"click"],[1,"modal-preview"],["label","Routes"],["highlight-js","","lang","typescript",3,"options"],["label","TypeScript"],[2,"padding","1rem","background","var(--surface-elevated, #f5f5f5)","border-left","3px solid var(--c3-accent, #6c63ff)","border-radius","8px","color","var(--text-secondary, #666)","margin","0"],["label","HTML"],["highlight-js","","lang","html",3,"options"],[1,"modal-preview__backdrop",3,"click"],[1,"modal-preview__panel","mat-elevation-z8"],["mat-fab","",1,"modal-preview__close",3,"click"],[1,"modal-preview__content"],[2,"margin-bottom","16px"]],template:function(r,x){r&1&&(i(0,"p",0),t(1," The "),i(2,"code"),t(3,"c3-modal"),m(),t(4," component is a side-panel modal designed to work with Angular Router. It slides in from the right and displays routed content via a "),i(5,"code"),t(6,"router-outlet"),m(),t(7,`.
`),m(),i(8,"example-viewer")(9,"h4",1),t(10,"Modal Preview"),m(),g(11,2),i(12,"p",3),t(13," Click the button to see a visual simulation of the modal panel. In a real app, this is triggered by navigating to a child route. "),m(),i(14,"button",4),u("click",function(){return x.openModal()}),t(15,"Open Modal"),m(),k(16,U,16,0,"div",5),v(),i(17,"c3-example-viewer-tab",6)(18,"div")(19,"textarea",7),t(20,`const routes: Routes = [
  {
    path: 'items',
    component: ItemListComponent,
    children: [
      {
        path: ':id',
        component: C3ModalComponent,
        children: [
          { path: '', component: ItemDetailComponent }
        ]
      }
    ]
  }
];
      `),m()()(),i(21,"c3-example-viewer-tab",8)(22,"div")(23,"textarea",7),t(24,`import { C3ModalModule } from 'c3-components';

@NgModule({
  imports: [C3ModalModule]
})
export class ItemsModule {}
      `),m()()()(),i(25,"example-viewer")(26,"h4",1),t(27,"Custom Return Route"),m(),g(28,2),i(29,"p",9),t(30," Use the "),i(31,"code"),t(32,"returnRoute"),m(),t(33," input to override the auto-computed return route. By default the modal computes the parent route from "),i(34,"code"),t(35,"ActivatedRoute.pathFromRoot"),m(),t(36,". "),m(),v(),i(37,"c3-example-viewer-tab",10)(38,"div")(39,"textarea",11),t(40,`<!-- Auto-computed return route (default) -->
<c3-modal></c3-modal>

<!-- Override return route -->
<c3-modal returnRoute="/dashboard"></c3-modal>
      `),m()()()()),r&2&&(l(16),I(x.showModal()?16:-1),l(3),E("options",h(4,M)),l(4),E("options",h(5,M)),l(16),E("options",h(6,M)))},dependencies:[V,B,N,A,O,D,P,F],styles:[".modal-preview[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:500;animation:_ngcontent-%COMP%_modalFadeIn .2s ease-out}.modal-preview__backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#0006;cursor:pointer}.modal-preview__panel[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:min(720px,80vw);height:100%;background:var(--surface-card, #fff);overflow:auto;animation:_ngcontent-%COMP%_modalSlideIn .3s ease-out}.modal-preview__close[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;z-index:1}.modal-preview__content[_ngcontent-%COMP%]{padding:2rem;margin-top:4rem}@keyframes _ngcontent-%COMP%_modalFadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_modalSlideIn{0%{transform:translate(100%)}to{transform:translate(0)}}"]});let d=o;return d})();var J=[{path:"",component:j,children:[{path:"api",component:z},{path:"examples",component:H},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],L=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=s({type:o}),o.\u0275inj=c({imports:[w.forChild(J),w]});let d=o;return d})();var ct=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=s({type:o}),o.\u0275inj=c({imports:[R,L]});let d=o;return d})();export{ct as ModalModule};
