import{a as re}from"./chunk-IP5QXJH5.js";import{b as se,c as ne}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import{c as ee,i as ie,j as te}from"./chunk-KINULSZZ.js";import{i as $}from"./chunk-53K6XMQ3.js";import{a as ue}from"./chunk-RA7FHYGQ.js";import{c as z,e as Z}from"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import{a as ae}from"./chunk-TZ7DCQMJ.js";import{i as y}from"./chunk-SU6PRRH7.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import"./chunk-NK5SK6UO.js";import{i as K,n as P}from"./chunk-7WGNA6AJ.js";import{$b as S,C as V,Ea as U,Ec as W,Fc as v,Qc as w,Rc as C,Tb as c,Ub as l,Uc as p,Vb as r,Vc as G,X as T,Xb as i,Yb as t,Zc as J,_b as x,aa as Q,bb as d,ca as g,fc as R,ga as b,h as F,hc as L,ic as B,jb as A,jc as H,m as j,ob as k,pc as Y,qc as X,rc as D,sb as q,tb as f,ub as _,wc as e,ya as M,yb as O}from"./chunk-AGADXNXO.js";var le=(()=>{let a=class a{};a.\u0275fac=function(u){return new(u||a)},a.\u0275cmp=q({type:a,selectors:[["c3-api"]],decls:230,vars:0,consts:[[1,"api-section"],[1,"api-table"],[1,"notes-list"]],template:function(u,o){u&1&&(i(0,"h1"),e(1,"Dropdown API"),t(),i(2,"section",0)(3,"h2"),e(4,"Import"),t(),i(5,"pre")(6,"code"),e(7,`import {
  C3DropdownModule,
  C3DropdownComponent,
  C3DropdownTrigger
} from 'c3-components';`),t()()(),i(8,"section",0)(9,"h2"),e(10,"C3DropdownComponent"),t(),i(11,"p"),e(12,"Selector: "),i(13,"code"),e(14,"c3-dropdown"),t()(),i(15,"p"),e(16,"Container for dropdown menu content. Must be used with "),i(17,"code"),e(18,"C3DropdownTrigger"),t(),e(19,"."),t(),i(20,"h3"),e(21,"Inputs"),t(),i(22,"table",1)(23,"thead")(24,"tr")(25,"th"),e(26,"Name"),t(),i(27,"th"),e(28,"Type"),t(),i(29,"th"),e(30,"Default"),t(),i(31,"th"),e(32,"Description"),t()()(),i(33,"tbody")(34,"tr")(35,"td")(36,"code"),e(37,"panelClass"),t()(),i(38,"td")(39,"code"),e(40,"string | string[] | Set<string> | { [key: string]: any }"),t()(),i(41,"td")(42,"code"),e(43,"undefined"),t()(),i(44,"td"),e(45,"CSS classes to apply to the dropdown panel. Supports ngClass syntax."),t()()()(),i(46,"h3"),e(47,"Signals"),t(),i(48,"table",1)(49,"thead")(50,"tr")(51,"th"),e(52,"Name"),t(),i(53,"th"),e(54,"Type"),t(),i(55,"th"),e(56,"Description"),t()()(),i(57,"tbody")(58,"tr")(59,"td")(60,"code"),e(61,"isOpen"),t()(),i(62,"td")(63,"code"),e(64,"Signal<boolean>"),t()(),i(65,"td"),e(66,"Whether the dropdown is currently open."),t()(),i(67,"tr")(68,"td")(69,"code"),e(70,"template"),t()(),i(71,"td")(72,"code"),e(73,"Signal<TemplateRef<unknown>>"),t()(),i(74,"td"),e(75,"Reference to the dropdown content template."),t()()()()(),i(76,"section",0)(77,"h2"),e(78,"C3DropdownTrigger"),t(),i(79,"p"),e(80,"Selector: "),i(81,"code"),e(82,"[c3DropdownTrigger]"),t()(),i(83,"p"),e(84,"Export As: "),i(85,"code"),e(86,"c3DropdownTrigger"),t()(),i(87,"p"),e(88,"Directive that triggers the display of a dropdown menu on click."),t(),i(89,"h3"),e(90,"Inputs"),t(),i(91,"table",1)(92,"thead")(93,"tr")(94,"th"),e(95,"Name"),t(),i(96,"th"),e(97,"Alias"),t(),i(98,"th"),e(99,"Type"),t(),i(100,"th"),e(101,"Default"),t(),i(102,"th"),e(103,"Description"),t()()(),i(104,"tbody")(105,"tr")(106,"td")(107,"code"),e(108,"dropdown"),t()(),i(109,"td")(110,"code"),e(111,"c3DropdownTrigger"),t()(),i(112,"td")(113,"code"),e(114,"C3DropdownComponent"),t()(),i(115,"td")(116,"em"),e(117,"required"),t()(),i(118,"td"),e(119,"Reference to the dropdown component. Uses "),i(120,"code"),e(121,"model.required()"),t(),e(122,"."),t()(),i(123,"tr")(124,"td")(125,"code"),e(126,"dropdownDisabled"),t()(),i(127,"td"),e(128,"-"),t(),i(129,"td")(130,"code"),e(131,"boolean"),t()(),i(132,"td")(133,"code"),e(134,"false"),t()(),i(135,"td"),e(136,"Whether the trigger is disabled."),t()(),i(137,"tr")(138,"td")(139,"code"),e(140,"dropdownClass"),t()(),i(141,"td"),e(142,"-"),t(),i(143,"td")(144,"code"),e(145,"string | string[] | Set<string> | { [key: string]: any }"),t()(),i(146,"td")(147,"code"),e(148,"''"),t()(),i(149,"td"),e(150,"CSS classes for the dropdown menu."),t()()()(),i(151,"h3"),e(152,"Methods"),t(),i(153,"table",1)(154,"thead")(155,"tr")(156,"th"),e(157,"Method"),t(),i(158,"th"),e(159,"Description"),t()()(),i(160,"tbody")(161,"tr")(162,"td")(163,"code"),e(164,"show()"),t()(),i(165,"td"),e(166,"Programmatically open the dropdown."),t()(),i(167,"tr")(168,"td")(169,"code"),e(170,"close()"),t()(),i(171,"td"),e(172,"Programmatically close the dropdown."),t()()()()(),i(173,"section",0)(174,"h2"),e(175,"Overlay Positioning"),t(),i(176,"p"),e(177,"The dropdown uses Angular CDK Overlay with the following positions:"),t(),i(178,"table",1)(179,"thead")(180,"tr")(181,"th"),e(182,"Position"),t(),i(183,"th"),e(184,"Behavior"),t()()(),i(185,"tbody")(186,"tr")(187,"td"),e(188,"Primary"),t(),i(189,"td"),e(190,"Below the trigger, aligned to start"),t()(),i(191,"tr")(192,"td"),e(193,"Fallback"),t(),i(194,"td"),e(195,"Above the trigger if no space below"),t()()()()(),i(196,"section",0)(197,"h2"),e(198,"Usage Example"),t(),i(199,"pre")(200,"code"),e(201,`<button [c3DropdownTrigger]="myDropdown">
  Open Menu
</button>

<c3-dropdown #myDropdown [panelClass]="'my-custom-panel'">
  <div class="dropdown-item">Option 1</div>
  <div class="dropdown-item">Option 2</div>
  <div class="dropdown-item">Option 3</div>
</c3-dropdown>`),t()()(),i(202,"section",0)(203,"h2"),e(204,"Styling"),t(),i(205,"p"),e(206,"The dropdown panel has the class "),i(207,"code"),e(208,"c3-dropdown-panel"),t(),e(209," by default."),t(),i(210,"p"),e(211,"Import styles from:"),t(),i(212,"pre")(213,"code"),e(214,"@use 'c3-components/lib/c3-dropdown/styles/c3-dropdown';"),t()()(),i(215,"section",0)(216,"h2"),e(217,"Usage Notes"),t(),i(218,"ul",2)(219,"li"),e(220,"The dropdown automatically closes when clicking outside or on the backdrop."),t(),i(221,"li"),e(222,"Uses a transparent backdrop that captures clicks."),t(),i(223,"li"),e(224,"Implements "),i(225,"code"),e(226,"NG_VALUE_ACCESSOR"),t(),e(227," for form integration."),t(),i(228,"li"),e(229,"The trigger listens to click events by default."),t()()())},encapsulation:2});let s=a;return s})();var ge=["*"];function be(s,a){if(s&1&&(l(0,"div",0),H(1),r()),s&2){let pe=L();c("ngClass",pe.mergedClass())}}var oe=(()=>{let a=class a{constructor(){this.panelClass=p(),this.dropdownClass=M(void 0),this.isOpen=M(!1),this.template=G.required(A),this.mergedClass=w(()=>{let n=this.panelClass(),u=this.dropdownClass();if(!n&&!u)return"";if(!n)return u;if(!u)return n;let o=m=>typeof m=="string"?m?[m]:[]:Array.isArray(m)?m:m instanceof Set?[...m]:Object.keys(m).filter(N=>m[N]);return[...o(n),...o(u)]}),this._changeDetectorRef=b(J),C(()=>{this.mergedClass(),this._changeDetectorRef.markForCheck()})}};a.\u0275fac=function(u){return new(u||a)},a.\u0275cmp=q({type:a,selectors:[["c3-dropdown"]],viewQuery:function(u,o){u&1&&Y(o.template,A,5),u&2&&X()},inputs:{panelClass:[1,"panelClass"]},exportAs:["c3Dropdown"],standalone:!1,ngContentSelectors:ge,decls:1,vars:0,consts:[[1,"c3-dropdown-panel",3,"ngClass"]],template:function(u,o){u&1&&(B(),O(0,be,2,1,"ng-template"))},dependencies:[K],encapsulation:2});let s=a;return s})();var fe={provide:ae,useExisting:Q(()=>I),multi:!0},I=(()=>{let a=class a{constructor(){this._closingActionsSubscription=F.EMPTY,this._destroyed=new j,this._element=b(U),this._overlay=b(ie),this._viewContainerRef=b(k),this.c3Dropdown=p(null),this.c3DropdownTrigger=p(null),this._dropdown=w(()=>this.c3Dropdown()??this.c3DropdownTrigger()),this.dropdownDisabled=p(!1,{alias:"c3DropdownDisabled"}),this.c3DropdownClass=p(void 0),this.dropdownClass=p(void 0),C(()=>{let n=this._dropdown(),u=this.c3DropdownClass()??this.dropdownClass();n&&n.dropdownClass.set(u)})}onClick(){this.show()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._closingActionsSubscription.unsubscribe(),this.close()}show(){let n=this._dropdown();if(!n?.template())return;n.isOpen.set(!0);let u=this._overlay.create(this._getOverlayConfig()),o=new $(n.template(),this._viewContainerRef);u.attach(o),this.overlayRef=u,this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.close())}close(){this.overlayRef?.hasAttached()&&this.overlayRef.detach(),this._dropdown()?.isOpen.set(!1)}_getOverlayConfig(){let n={originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},u={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"},o=this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withPositions([n,u]);return new ee({positionStrategy:o,backdropClass:"cdk-overlay-transparent-backdrop",hasBackdrop:!0})}_menuClosingActions(){let n=this.overlayRef.backdropClick(),u=this.overlayRef.detachments();return V(n,u).pipe(T(this._destroyed))}};a.\u0275fac=function(u){return new(u||a)},a.\u0275dir=_({type:a,selectors:[["","c3Dropdown",""],["","c3DropdownTrigger",""]],hostBindings:function(u,o){u&1&&R("click",function(){return o.onClick()})},inputs:{c3Dropdown:[1,"c3Dropdown"],c3DropdownTrigger:[1,"c3DropdownTrigger"],dropdownDisabled:[1,"c3DropdownDisabled","dropdownDisabled"],c3DropdownClass:[1,"c3DropdownClass"],dropdownClass:[1,"dropdownClass"]},exportAs:["c3DropdownTrigger"],standalone:!1,features:[W([fe])]});let s=a;return s})();var me=(()=>{let a=class a{};a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=f({type:a}),a.\u0275inj=g({imports:[P,te]});let s=a;return s})();var E=()=>({}),ce=(()=>{let a=class a{};a.\u0275fac=function(u){return new(u||a)},a.\u0275cmp=q({type:a,selectors:[["c3-examples"]],decls:61,vars:15,consts:[["dropdown",""],["dropdownTemplate",""],["dropdownVeryLongTemplate",""],[1,"my-4"],[1,"mb-2","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["mat-raised-button","",3,"c3DropdownTrigger"],[1,"pa-1"]],template:function(u,o){if(u&1&&(l(0,"p",3),e(1,"This is just a simple dropdown component with a template"),r(),l(2,"example-viewer",4)(3,"h4",5),e(4,"Basic dropdown"),r(),l(5,"c3-example-viewer-tab",6)(6,"div")(7,"textarea",7),e(8,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      `),r()()(),l(9,"c3-example-viewer-tab",8)(10,"div")(11,"textarea",9),e(12,`<button mat-raised-button [c3DropdownTrigger]="dropdown">Dropdown trigger</button>

<c3-dropdown #dropdown>
  Dropdown content
</c3-dropdown>
      `),r()()(),x(13,10),l(14,"button",11),e(15,"Dropdown trigger"),r(),l(16,"c3-dropdown",null,0),e(18," Dropdown content "),r(),S(),r(),l(19,"example-viewer",4)(20,"h4",5),e(21,"Dropdown with template"),r(),l(22,"c3-example-viewer-tab",6)(23,"div")(24,"textarea",7),e(25,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
`),r()()(),l(26,"c3-example-viewer-tab",8)(27,"div")(28,"textarea",9),e(29,`<button mat-raised-button [c3DropdownTrigger]="dropdownTemplate">Dropdown trigger</button>

<c3-dropdown #dropdownTemplate>
  <div class="pa-1">
    <h4>Dropdown template</h4>
    <p>
      This is a dropdown template
    </p>
  </div>
</c3-dropdown>
      `),r()()(),x(30,10),l(31,"button",11),e(32," Dropdown trigger "),r(),l(33,"c3-dropdown",null,1)(35,"div",12)(36,"h4"),e(37,"Dropdown template"),r(),l(38,"p"),e(39,"This is a dropdown template"),r()()(),S(),r(),l(40,"example-viewer",4)(41,"h4",5),e(42,"Dropdown with dropdownVeryLongTemplate"),r(),l(43,"c3-example-viewer-tab",6)(44,"div")(45,"textarea",7),e(46,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      `),r()()(),l(47,"c3-example-viewer-tab",8)(48,"div")(49,"textarea",9),e(50,`<button mat-raised-button [c3Dropdown]="dropdownVeryLongTemplate">Dropdown trigger</button>

<c3-dropdown #dropdownVeryLongTemplate>
  <div class="pa-1">
    <h4>Dropdown template</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet
      sagittis.
      Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla
      aliquam
      ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros
      magna,
      auctor at purus eget, mattis pellentesque tellus.

      Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra
      leo
      hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent
      in sapien
      eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida.
      Proin
      semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a
      eros
      aliquam eleifend non in erat. Donec interdum porta quam et porttitor.

      Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia
      tempus
      porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent
      taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae
      urna ut
      nibh pretium facilisis.

      Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl
      facilisis.
      Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis
      ipsum.
      Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a
      est. Donec
      eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh
      ac quam
      pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus,
      sem in
      posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis
      eget sapien
      semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui,
      venenatis eu
      convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.

      Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan
      eget,
      lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed
      risus mi.
      Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget
      lorem.
      Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur
      tellus
      nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat
      nisi mattis.
      Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus
      lobortis
      feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo
      diam in
      arcu.

      In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt
      dictum,
      risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet
      viverra sit
      amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris
      fermentum
      sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae
      aliquam
      dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum
      nisl.

      Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim.
      Fusce non
      justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque,
      sed ornare
      risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis
      imperdiet.
      Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue
      luctus.
      Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam.

      Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non
      pretium at,
      elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis,
      lacinia
      lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat
      ultrices,
      facilisis lacus id, varius velit.

      Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum
      consectetur.
      Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum,
      aliquam
      leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla
      viverra gravida
      venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat
      arcu ut
      neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque
      turpis.
      Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod
      consequat, orci
      velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales.
      Aenean mollis
      nisl ut orci iaculis dictum.

      Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non
      odio
      vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi
      tristique
      senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus,
      neque orci
      porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla
      sit amet,
      elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet
      condimentum.
      Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet
      nunc.
      Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex
      metus,
      rhoncus sit amet velit vitae, scelerisque tempor dolor.

      In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a
      sollicitudin
      molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium
      nulla sapien
      vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate
      pulvinar.
      Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam
      quis quam
      eleifend ullamcorper.

      Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros
      interdum
      eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Curabitur nec
      erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus
      felis non
      tellus pellentesque elementum.

      Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit
      ornare
      magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a
      tellus.
      Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum
      finibus nisi
      ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere.

      Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl
      sit amet,
      feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa
      ut lacus
      imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis
      congue.
      Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis
      ligula.
      Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci
      tincidunt
      aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna.

      Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo
      elementum
      sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut
      rutrum
      ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien,
      venenatis non
      orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis
      dapibus velit,
      ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a
      consequat urna.

      Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum
      purus
      lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada
      fames ac ante
      ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada
      vehicula.
      Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor
      condimentum
      sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat.

      Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales
      scelerisque.
      Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales
      efficitur.
      Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et
      malesuada
      fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a
      finibus
      tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique
      senectus et
      netus et malesuada fames ac turpis egestas.

      Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi
      egestas
      sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend
      blandit
      dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis
      lorem orci
      vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus
      fermentum.
      Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat
      eget,
      interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis
      tristique.
      Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse
      platea
      dictumst.

      Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum
      nisl, quis
      porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex
      feugiat
      lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam
      hendrerit
      feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus
      dapibus
      dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui,
      id luctus
      tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus
      sapien, at
      bibendum erat.

      Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat
      ornare
      libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non
      congue nulla
      mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum
      tempus.
      Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non
      tincidunt ac,
      ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis
      condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo.

      Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem.
      Aliquam in
      porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue
      imperdiet
      nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor,
      iaculis
      mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut.

      Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue,
      venenatis
      vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo.
      Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget
      convallis.
      Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit,
      porta id
      enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus
      nisl.

      Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus
      elit quis ex
      consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante
      sit amet,
      viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis.
      Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non
      tempus. Nam
      auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu.

      Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est
      interdum
      viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum
      dapibus urna.
      Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa
      ultrices mi,
      nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id
      tincidunt
      nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada
      sem. Aliquam
      vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis
      tincidunt
      nisi egestas.

      Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu,
      egestas
      velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam
      vehicula
      ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus
      sit amet
      quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis.
      Aenean
      efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat.
      Quisque
      posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus
      eget,
      accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus.

      Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc,
      ornare
      bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam
      laoreet
      tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis
      mattis sem,
      eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus
      quis nulla.
      Sed id sem id tellus pretium gravida sit amet eget eros.

      Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper
      malesuada.
      Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus.
      Praesent iaculis
      justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel
      consequat
      quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus.

      Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam
      suscipit in
      neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac
      aliquet
      ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at
      lectus.

      Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam
      feugiat, lorem
      vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in
      eleifend
      est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet
      ipsum
      consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel
      massa. Fusce
      ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet
      consectetur
      nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue.
      Donec ut neque
      mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst.

      Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur
      magna urna,
      euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus.
      Maecenas porta
      quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et,
      tincidunt enim.
      Nullam maximus ligula placerat eros dignissim maximus.

      Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet
      felis mi.
      Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel
      consectetur. Sed
      et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida
      lacinia est,
      non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus
      ac
      pulvinar. Nunc ultricies nunc at ex lobortis ornare.

      Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget
      rutrum.
      Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl
      odio, a
      efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget
      posuere
      augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam.
      Duis non
      rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam.
      Curabitur
      quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam.

      Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque
      venenatis.
      Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet
      ligula dictum
      vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      vehicula sed
      nisi sed venenatis. Donec lacinia sit amet enim nec porttitor.

      Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante
      ipsum primis
      in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo
      eleifend. Sed
      auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur
      efficitur
      turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus.
      Integer rhoncus
      nisl id dolor iaculis, id mollis leo pharetra.

      Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a.
      Aliquam mauris
      nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis
      scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat
      malesuada.
      Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac
      mauris
      metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero.

      Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper
      turpis.
      Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam
      quis erat
      eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula
      placerat
      augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet
      lectus.
      Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl,
      eget
      gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a
      placerat.

      Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis
      cursus
      lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi
      venenatis at
      ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere
      risus, id
      tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt
      scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet
      ullamcorper est.
      Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi
      porta
      ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus.

      Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec,
      consectetur
      varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor
      commodo
      pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est
      tincidunt.
      Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed
      tincidunt
      est.

      Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus
      magna a sem.
      Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem.
      Nunc ut
      purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit,
      augue ut
      pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus,
      at luctus
      odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus
      ut nibh.
      Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam
      elementum
      tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat,
      orci vitae
      volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt
      eros et
      cursus pellentesque. Donec convallis placerat dapibus.

      Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas
      egestas. Mauris
      euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus
      et netus
      et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas
      ipsum. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet
      lorem.
      Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna
      elementum,
      laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim
      lacus ac
      euismod.

      Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque
      porttitor
      tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget
      dictum quam
      lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat
      euismod
      arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat
      volutpat. Nam
      semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia
      lacus.
      Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh
      sollicitudin.

      Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit,
      venenatis
      sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim
      est sapien
      sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id
      felis
      vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo
      tempor
      vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed
      auctor urna
      vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas.

      In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus
      fringilla
      quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula.
      Pellentesque non
      pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit
      amet dolor in
      sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel
      egestas
      ante gravida at.

      Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin.
      Cras libero
      justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris
      sed
      pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero.
      Quisque et
      ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum.
      Etiam ut
      massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit
      amet
      placerat tellus.

      Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies,
      nibh
      ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi
      eget
      elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis
      finibus
      pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet
      consequat
      ligula. Etiam in bibendum massa.

      Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque
      enim orci,
      interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta
      libero.
      Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae
      diam.
      Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in
      rhoncus ligula.
      Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus
      malesuada.
      Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada
      elit
      hendrerit. Nulla nec augue ut dolor aliquet placerat.

      Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor
      hendrerit
      sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis
      ut.
      Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu
      libero. Cras
      eleifend elit vitae erat tincidunt, eu posuere eros ultrices.

      Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et
      malesuada
      fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi.
      Aenean maximus
      bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu
      ante at
      ornare.

      Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales.
      Vestibulum
      suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam
      eget
      egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum
      in. Mauris
      ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue
      ultricies
      sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur.

      Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et
      netus et
      malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in
      pulvinar diam
      arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo
      elementum.
      Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus.

    </p>
  </div>
</c3-dropdown>
      `),r()()(),x(51,10),l(52,"button",11),e(53," Dropdown trigger "),r(),l(54,"c3-dropdown",null,2)(56,"div",12)(57,"h4"),e(58,"Dropdown template"),r(),l(59,"p"),e(60," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet sagittis. Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla aliquam ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros magna, auctor at purus eget, mattis pellentesque tellus. Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra leo hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent in sapien eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida. Proin semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a eros aliquam eleifend non in erat. Donec interdum porta quam et porttitor. Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia tempus porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae urna ut nibh pretium facilisis. Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl facilisis. Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis ipsum. Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a est. Donec eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh ac quam pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus, sem in posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis eget sapien semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui, venenatis eu convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan eget, lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed risus mi. Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget lorem. Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur tellus nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat nisi mattis. Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus lobortis feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo diam in arcu. In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt dictum, risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet viverra sit amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris fermentum sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae aliquam dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum nisl. Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim. Fusce non justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque, sed ornare risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis imperdiet. Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue luctus. Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam. Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non pretium at, elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis, lacinia lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat ultrices, facilisis lacus id, varius velit. Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum consectetur. Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum, aliquam leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla viverra gravida venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat arcu ut neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque turpis. Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod consequat, orci velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales. Aenean mollis nisl ut orci iaculis dictum. Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non odio vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus, neque orci porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla sit amet, elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet condimentum. Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet nunc. Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex metus, rhoncus sit amet velit vitae, scelerisque tempor dolor. In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a sollicitudin molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium nulla sapien vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate pulvinar. Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam quis quam eleifend ullamcorper. Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus felis non tellus pellentesque elementum. Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit ornare magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a tellus. Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum finibus nisi ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere. Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl sit amet, feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa ut lacus imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis congue. Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis ligula. Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci tincidunt aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna. Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo elementum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut rutrum ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien, venenatis non orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis dapibus velit, ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a consequat urna. Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum purus lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada vehicula. Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor condimentum sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat. Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales scelerisque. Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales efficitur. Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a finibus tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi egestas sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend blandit dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis lorem orci vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus fermentum. Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat eget, interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis tristique. Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse platea dictumst. Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum nisl, quis porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex feugiat lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam hendrerit feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus dapibus dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui, id luctus tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus sapien, at bibendum erat. Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat ornare libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non congue nulla mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum tempus. Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non tincidunt ac, ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo. Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem. Aliquam in porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue imperdiet nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor, iaculis mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut. Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue, venenatis vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget convallis. Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit, porta id enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus nisl. Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus elit quis ex consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante sit amet, viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non tempus. Nam auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu. Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est interdum viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum dapibus urna. Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa ultrices mi, nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id tincidunt nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada sem. Aliquam vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis tincidunt nisi egestas. Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu, egestas velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam vehicula ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus sit amet quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis. Aenean efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat. Quisque posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus eget, accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus. Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc, ornare bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam laoreet tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis mattis sem, eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus quis nulla. Sed id sem id tellus pretium gravida sit amet eget eros. Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper malesuada. Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus. Praesent iaculis justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel consequat quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus. Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam suscipit in neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac aliquet ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at lectus. Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam feugiat, lorem vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in eleifend est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet ipsum consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel massa. Fusce ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet consectetur nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue. Donec ut neque mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst. Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur magna urna, euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus. Maecenas porta quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et, tincidunt enim. Nullam maximus ligula placerat eros dignissim maximus. Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet felis mi. Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel consectetur. Sed et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida lacinia est, non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus ac pulvinar. Nunc ultricies nunc at ex lobortis ornare. Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget rutrum. Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl odio, a efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget posuere augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam. Duis non rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam. Curabitur quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam. Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque venenatis. Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet ligula dictum vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula sed nisi sed venenatis. Donec lacinia sit amet enim nec porttitor. Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo eleifend. Sed auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur efficitur turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus. Integer rhoncus nisl id dolor iaculis, id mollis leo pharetra. Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a. Aliquam mauris nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat malesuada. Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac mauris metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero. Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper turpis. Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam quis erat eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula placerat augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet lectus. Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl, eget gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a placerat. Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis cursus lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi venenatis at ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere risus, id tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet ullamcorper est. Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi porta ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus. Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec, consectetur varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor commodo pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est tincidunt. Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed tincidunt est. Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus magna a sem. Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem. Nunc ut purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit, augue ut pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus, at luctus odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus ut nibh. Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam elementum tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat, orci vitae volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt eros et cursus pellentesque. Donec convallis placerat dapibus. Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas egestas. Mauris euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet lorem. Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna elementum, laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim lacus ac euismod. Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque porttitor tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget dictum quam lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat euismod arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat volutpat. Nam semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia lacus. Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh sollicitudin. Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit, venenatis sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim est sapien sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id felis vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo tempor vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed auctor urna vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas. In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus fringilla quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula. Pellentesque non pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit amet dolor in sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel egestas ante gravida at. Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin. Cras libero justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris sed pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero. Quisque et ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum. Etiam ut massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit amet placerat tellus. Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies, nibh ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi eget elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis finibus pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet consequat ligula. Etiam in bibendum massa. Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque enim orci, interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta libero. Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae diam. Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in rhoncus ligula. Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus malesuada. Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada elit hendrerit. Nulla nec augue ut dolor aliquet placerat. Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor hendrerit sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis ut. Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu libero. Cras eleifend elit vitae erat tincidunt, eu posuere eros ultrices. Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi. Aenean maximus bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu ante at ornare. Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales. Vestibulum suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam eget egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum in. Mauris ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue ultricies sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur. Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in pulvinar diam arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo elementum. Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus. "),r()()(),S(),r()),u&2){let m=D(17),N=D(34),ve=D(55);d(7),c("options",v(9,E)),d(4),c("options",v(10,E)),d(3),c("c3DropdownTrigger",m),d(10),c("options",v(11,E)),d(4),c("options",v(12,E)),d(3),c("c3DropdownTrigger",N),d(14),c("options",v(13,E)),d(4),c("options",v(14,E)),d(3),c("c3DropdownTrigger",ve)}},dependencies:[me,oe,I,ne,se,Z,z,ue],styles:["[_nghost-%COMP%]{display:block}"]});let s=a;return s})();var Ee=[{path:"",component:re,children:[{path:"api",component:le},{path:"examples",component:ce},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],de=(()=>{let a=class a{};a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=f({type:a}),a.\u0275inj=g({imports:[y.forChild(Ee),y]});let s=a;return s})();var Je=(()=>{let a=class a{};a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=f({type:a}),a.\u0275inj=g({imports:[P,de]});let s=a;return s})();export{Je as DropdownModule};
