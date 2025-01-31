import{a as z,d as K,e as Z}from"./chunk-TIPMTQYD.js";import{b as $,c as ee}from"./chunk-GGJRU6BV.js";import{g as W,p as ie}from"./chunk-TUREW2WE.js";import"./chunk-N47YJUST.js";import"./chunk-ZSSD5RUB.js";import{a as Y,d as X}from"./chunk-CG7WHYDA.js";import{l as H}from"./chunk-L5NJVBGW.js";import{n as P}from"./chunk-YIUEZFDD.js";import{a as G,l as J}from"./chunk-ZNIQB2HC.js";import{$ as A,Bb as j,C as w,Dc as O,Fa as E,Mb as n,Wb as a,X as S,Xb as u,Xc as B,Zb as h,_b as C,ba as c,cc as V,cd as o,dc as Q,eb as l,ec as _,fb as d,fc as U,g as M,hb as I,ic as T,jc as k,kb as F,kc as R,l as N,oc as D,pa as f,pc as s,sc as L,tc as m,ub as p,vb as v,wb as y}from"./chunk-ZUPD5GRW.js";var te=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["c3-api"]],decls:3,vars:0,template:function(i,r){i&1&&(a(0,"p"),s(1,"api works!"),u(),s(2,`,
`))},dependencies:[o],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var oe=["*"];function me(e,ge){if(e&1&&(a(0,"div",0),U(1),u()),e&2){let t=Q();n("ngClass",t.dropdownClass)}}var ue=(()=>{class e{constructor(t){this._changeDetectorRef=t,this.dropdownClass=""}ngOnChanges(t){t.dropdownClass&&this._markForCheck()}_markForCheck(){this._changeDetectorRef.markForCheck()}static{this.\u0275fac=function(i){return new(i||e)(d(O))}}static{this.\u0275cmp=p({type:e,selectors:[["c3-dropdown"]],viewQuery:function(i,r){if(i&1&&T(I,5),i&2){let b;k(b=R())&&(r.template=b.first)}},inputs:{dropdownClass:"dropdownClass"},standalone:!1,features:[f],ngContentSelectors:oe,decls:1,vars:0,consts:[[1,"c3-dropdown-panel",3,"ngClass"]],template:function(i,r){i&1&&(_(),j(0,me,2,1,"ng-template"))},dependencies:[B],encapsulation:2})}}return e})();var de={provide:G,useExisting:A(()=>x),multi:!0},x=(()=>{class e{get dropdownDisabled(){return this._dropdownDisabled}set dropdownDisabled(t){this._dropdownDisabled=H(t)}constructor(t,i,r){this._element=t,this._overlay=i,this._viewContainerRef=r,this._closingActionsSubscription=M.EMPTY,this._destroyed=new N,this._dropdownClass="",this._dropdownDisabled=!1,this.dropdownClass=""}onClick(){this.show()}ngOnChanges(t){t.dropdownClass&&this.dropdown&&(this.dropdown.dropdownClass=this._dropdownClass,this.dropdown._markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._closingActionsSubscription.unsubscribe(),this.close()}show(){if(!this.dropdown)return;let t=this._overlay.create(this._getOverlayConfig()),i=new W(this.dropdown.template,this._viewContainerRef);t.attach(i),this.overlayRef=t,this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.close())}close(){this.overlayRef&&this.overlayRef.hasAttached()&&this.overlayRef.detach()}_getOverlayConfig(){let t={originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},i={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"},r=this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withPositions([t,i]);return new z({positionStrategy:r,backdropClass:"cdk-overlay-transparent-backdrop",hasBackdrop:!0})}_menuClosingActions(){let t=this.overlayRef.backdropClick(),i=this.overlayRef.detachments();return w(t,i).pipe(S(this._destroyed))}static{this.\u0275fac=function(i){return new(i||e)(d(E),d(K),d(F))}}static{this.\u0275dir=y({type:e,selectors:[["","c3Dropdown",""]],hostBindings:function(i,r){i&1&&V("click",function(){return r.onClick()})},inputs:{dropdown:[0,"c3Dropdown","dropdown"],dropdownDisabled:[0,"c3DropdownDisabled","dropdownDisabled"],dropdownClass:[0,"c3DropdownClass","dropdownClass"]},exportAs:["c3DropdownTrigger"],standalone:!1,features:[L([de]),f]})}}return e})();var ae=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=c({imports:[o,Z]})}}return e})();var q=()=>({}),se=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["c3-examples"]],decls:61,vars:15,consts:[["dropdown",""],["dropdownTemplate",""],["dropdownVeryLongTemplate",""],[1,"my-4"],[1,"mb-2","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["example",""],["mat-raised-button","",3,"c3Dropdown"],[1,"pa-1"]],template:function(i,r){if(i&1&&(a(0,"p",3),s(1,"This is just a simple dropdown component with a template"),u(),a(2,"example-viewer",4)(3,"h4",5),s(4,"Basic dropdown"),u(),a(5,"c3-example-viewer-tab",6)(6,"div")(7,"textarea",7),s(8,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      `),u()()(),a(9,"c3-example-viewer-tab",8)(10,"div")(11,"textarea",9),s(12,`<button mat-raised-button [c3Dropdown]="dropdown">Dropdown trigger</button>

<c3-dropdown #dropdown>
  Dropdown content
</c3-dropdown>
      `),u()()(),h(13,10),a(14,"button",11),s(15,"Dropdown trigger"),u(),a(16,"c3-dropdown",null,0),s(18," Dropdown content "),u(),C(),u(),a(19,"example-viewer",4)(20,"h4",5),s(21,"Dropdown with template"),u(),a(22,"c3-example-viewer-tab",6)(23,"div")(24,"textarea",7),s(25,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
`),u()()(),a(26,"c3-example-viewer-tab",8)(27,"div")(28,"textarea",9),s(29,`<button mat-raised-button [c3Dropdown]="dropdownTemplate">Dropdown trigger</button>

<c3-dropdown #dropdownTemplate>
  <div class="pa-1">
    <h4>Dropdown template</h4>
    <p>
      This is a dropdown template
    </p>
  </div>
</c3-dropdown>
      `),u()()(),h(30,10),a(31,"button",11),s(32," Dropdown trigger "),u(),a(33,"c3-dropdown",null,1)(35,"div",12)(36,"h4"),s(37,"Dropdown template"),u(),a(38,"p"),s(39,"This is a dropdown template"),u()()(),C(),u(),a(40,"example-viewer",4)(41,"h4",5),s(42,"Dropdown with dropdownVeryLongTemplate"),u(),a(43,"c3-example-viewer-tab",6)(44,"div")(45,"textarea",7),s(46,`import { Component } from '@angular/core';
import { C3DropdownModule } from 'c3-components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown-example',
  standalone: true,
  import: [C3DropdownModule, MatButtonModule],
  templateUrl: './dropdown-example.component.html',
})
export class DropdownExampleComponent {}
      `),u()()(),a(47,"c3-example-viewer-tab",8)(48,"div")(49,"textarea",9),s(50,`<button mat-raised-button [c3Dropdown]="dropdownVeryLongTemplate">Dropdown trigger</button>

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
      `),u()()(),h(51,10),a(52,"button",11),s(53," Dropdown trigger "),u(),a(54,"c3-dropdown",null,2)(56,"div",12)(57,"h4"),s(58,"Dropdown template"),u(),a(59,"p"),s(60," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut pretium odio. Nullam laoreet imperdiet sagittis. Aliquam ac sodales augue, id imperdiet eros. Phasellus nec lectus nec quam faucibus vehicula id at mi. Nulla aliquam ante sit amet mauris semper posuere. Sed vulputate libero quam, id mollis urna vestibulum vel. Vivamus eros magna, auctor at purus eget, mattis pellentesque tellus. Cras nec mi justo. Donec luctus massa vel ullamcorper vehicula. Praesent fringilla tortor velit, nec pharetra leo hendrerit vitae. Fusce at laoreet magna. Nam quam ante, suscipit sed fermentum vitae, mattis ut sem. Praesent in sapien eu lectus pharetra hendrerit eu eget ligula. Fusce bibendum dui non risus aliquam, ac lacinia velit gravida. Proin semper tortor massa, eget lacinia turpis fermentum sed. Sed malesuada fermentum bibendum. Aenean non turpis a eros aliquam eleifend non in erat. Donec interdum porta quam et porttitor. Nam rutrum est sed bibendum porttitor. Praesent id erat sed ex tristique ornare. Integer nulla purus, lacinia tempus porta ut, posuere eget augue. Vivamus molestie posuere urna sit amet tempor. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id eros purus. Integer vitae urna ut nibh pretium facilisis. Morbi at scelerisque arcu, eget efficitur ex. Fusce tempor libero vitae est pellentesque, eu ultrices nisl facilisis. Sed eu nisi ut turpis lobortis ornare. Donec est nibh, tristique tristique sollicitudin eu, suscipit quis ipsum. Praesent sed est et libero gravida mollis. Aliquam sit amet dui consectetur lectus imperdiet interdum ac a est. Donec eget vulputate nisi, in fermentum odio. Sed posuere accumsan erat, vitae tempus lacus aliquet ut. Duis a nibh ac quam pellentesque maximus quis id mauris. Donec nec turpis sed augue posuere accumsan in sed erat. Maecenas tempus, sem in posuere tempus, odio leo pellentesque lorem, et commodo risus risus vitae elit. Aliquam nisl enim, iaculis eget sapien semper, iaculis euismod massa. Phasellus auctor lorem diam, nec finibus nisl bibendum a. Maecenas ante dui, venenatis eu convallis nec, fermentum eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sem ligula, dictum non aliquet eget, vestibulum sit amet odio. In quam metus, malesuada et accumsan eget, lobortis sit amet diam. Phasellus dolor arcu, congue sagittis leo vitae, finibus varius tellus. Donec sed risus mi. Quisque sagittis augue vitae justo cursus efficitur. Etiam sit amet neque sed lacus pretium feugiat eget eget lorem. Nunc laoreet, sem ut laoreet porttitor, arcu sem sollicitudin turpis, id tincidunt neque mi ut eros. Curabitur tellus nibh, hendrerit id orci vitae, dictum aliquam ipsum. Praesent rhoncus ligula et enim volutpat, sed placerat nisi mattis. Pellentesque condimentum placerat turpis vitae dictum. Nullam efficitur id magna non dapibus. Mauris maximus lobortis feugiat. Maecenas pulvinar, mauris sit amet tempor interdum, neque lorem gravida tortor, eget vulputate leo diam in arcu. In vitae magna vel quam suscipit iaculis. Donec congue consectetur finibus. Etiam porta, arcu sed tincidunt dictum, risus neque sodales diam, id ultricies mauris turpis pulvinar nulla. Aenean a diam sit amet nisl imperdiet viverra sit amet vitae metus. Mauris gravida ante lacus, a auctor velit varius vitae. Suspendisse in mauris eu mauris fermentum sodales in ac purus. Mauris suscipit consectetur lectus, eu mollis tellus sodales in. Nullam tempor sem vitae aliquam dapibus. Donec vel egestas elit. Proin sit amet ex dictum tortor viverra pharetra at ut mi. Etiam sed ipsum nisl. Sed sed nunc massa. Sed nec rhoncus magna, quis dapibus orci. Ut feugiat nibh sit amet pulvinar dignissim. Fusce non justo libero. Nullam vitae purus efficitur, finibus tortor vitae, aliquet purus. Fusce pulvinar erat neque, sed ornare risus finibus a. Phasellus eu bibendum augue, et eleifend lorem. Aliquam porttitor arcu a felis sagittis imperdiet. Integer sem lorem, sagittis et velit vitae, bibendum egestas odio. Nam interdum felis elementum lectus congue luctus. Nunc id accumsan erat. Maecenas eu metus eu lectus feugiat semper vel sed diam. Sed rhoncus est neque. Sed non euismod augue. Fusce ornare vel est ut iaculis. Fusce neque nisl, sodales non pretium at, elementum quis orci. Nam tempor maximus massa eu dictum. Quisque sed turpis tristique, condimentum est quis, lacinia lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non erat ultrices, facilisis lacus id, varius velit. Aliquam felis metus, blandit eget lobortis eu, congue quis mauris. Quisque varius nibh a condimentum consectetur. Suspendisse potenti. Phasellus condimentum quam ac diam vulputate rutrum a rutrum odio. Sed in elit bibendum, aliquam leo fermentum, vulputate nisl. Vivamus vel accumsan est, vel auctor elit. Fusce in blandit ipsum. Nulla viverra gravida venenatis. Aliquam blandit, felis efficitur tempus tristique, diam tellus eleifend lacus, sed commodo erat arcu ut neque. Duis laoreet urna sodales dictum dapibus. Nam diam est, dignissim a odio eu, mattis pellentesque turpis. Curabitur convallis convallis dolor, porttitor rutrum mi malesuada eu. Ut viverra, elit quis euismod consequat, orci velit ultricies massa, sed vulputate arcu nulla eget sapien. Phasellus gravida blandit eros nec sodales. Aenean mollis nisl ut orci iaculis dictum. Suspendisse eget orci nec libero convallis semper et a lectus. Curabitur ac ante quam. Sed sodales velit non odio vestibulum, sed vestibulum leo suscipit. Ut ornare lectus quis vestibulum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, tellus a vulputate tempus, neque orci porta enim, at semper dolor velit et libero. Nulla id laoreet dui. Pellentesque eros velit, congue et nulla sit amet, elementum aliquam sem. Maecenas interdum dapibus cursus. Pellentesque volutpat sit amet arcu sit amet condimentum. Pellentesque gravida, libero nec fermentum feugiat, eros mauris posuere turpis, in maximus dolor dui sit amet nunc. Etiam et nibh fermentum, rutrum diam id, semper nulla. Donec a laoreet nunc, lacinia fermentum arcu. Donec ex metus, rhoncus sit amet velit vitae, scelerisque tempor dolor. In volutpat ullamcorper fringilla. Vestibulum venenatis nisl vel porta laoreet. Maecenas dapibus sapien a sollicitudin molestie. Nulla non iaculis neque. Cras malesuada, quam ut varius maximus, mi eros cursus dolor, in pretium nulla sapien vel felis. Ut porta condimentum magna sed interdum. Cras eu felis risus. Proin vel dui quis nibh vulputate pulvinar. Pellentesque id rutrum massa. Suspendisse ac neque laoreet, mollis purus id, sodales purus. Donec egestas diam quis quam eleifend ullamcorper. Aliquam scelerisque commodo eleifend. Vestibulum bibendum bibendum lectus a dictum. Maecenas pulvinar id eros interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec erat lorem. In mollis tempus massa, non luctus nulla vestibulum eu. Vivamus ac nisi diam. Suspendisse rhoncus felis non tellus pellentesque elementum. Phasellus in urna eu nibh vulputate hendrerit volutpat pulvinar purus. Praesent vel auctor risus, hendrerit ornare magna. Duis sit amet justo nec nisl consequat tempus. Fusce nec ipsum fringilla nibh molestie semper id a tellus. Vivamus nulla diam, vulputate eu velit ultricies, ultrices imperdiet odio. Duis et rutrum elit. Duis dictum finibus nisi ac malesuada. Sed a justo mi. Pellentesque fermentum porttitor posuere. Maecenas vehicula dictum blandit. Donec auctor metus a interdum congue. Nullam ipsum erat, pulvinar id nisl sit amet, feugiat efficitur odio. Praesent et nulla magna. Fusce suscipit cursus orci ut pulvinar. Phasellus quis massa ut lacus imperdiet imperdiet. Proin iaculis orci nulla, sit amet imperdiet nulla gravida nec. Praesent auctor mollis congue. Curabitur pharetra, sapien in accumsan porta, risus neque feugiat elit, non sollicitudin sapien diam facilisis ligula. Morbi tincidunt efficitur fringilla. Aenean vitae semper urna, nec aliquet diam. Mauris vel turpis vitae orci tincidunt aliquam et ac turpis. Sed eros orci, maximus a ullamcorper luctus, pellentesque quis urna. Etiam nec purus ut augue rhoncus tempor. Fusce efficitur eleifend imperdiet. Pellentesque vel mi sed leo elementum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque rhoncus convallis venenatis. Ut rutrum ipsum malesuada turpis ultrices sodales. Quisque egestas nibh at placerat pharetra. Cras neque sapien, venenatis non orci vel, convallis lobortis lorem. Quisque id scelerisque dolor, sit amet venenatis nunc. Nam lobortis dapibus velit, ac porta diam sollicitudin sit amet. Maecenas condimentum nibh quis purus dapibus fringilla. Curabitur a consequat urna. Nunc in massa elementum, malesuada purus et, placerat nisl. Curabitur sollicitudin purus odio, in bibendum purus lobortis non. Morbi sed dignissim velit. Nam ac tellus eget est iaculis ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec suscipit sit amet enim quis posuere. Ut convallis libero vel arcu malesuada vehicula. Proin scelerisque imperdiet eros. Duis et quam nunc. Donec pretium, enim quis commodo placerat, turpis dolor condimentum sapien, at porttitor eros urna sit amet eros. Nulla facilisis eleifend placerat. Cras nec est nisi. Mauris vitae purus eu tortor rhoncus tincidunt. Etiam vitae libero vitae sapien sodales scelerisque. Mauris nec orci id nibh porta commodo. Sed fringilla gravida ante sit amet venenatis. Etiam interdum sodales efficitur. Mauris ullamcorper risus nec accumsan pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a eros posuere, tincidunt orci quis, finibus velit. Mauris porta, urna a finibus tempus, tortor mi pulvinar augue, eget finibus leo sem ac turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lobortis ante eu magna gravida, non gravida libero tempus. Nam pellentesque varius velit, a efficitur nisi egestas sit amet. Sed volutpat mauris vel faucibus bibendum. Aenean viverra porttitor lacus. Donec mi nunc, eleifend blandit dictum eget, maximus quis felis. Proin gravida, quam in dignissim iaculis, quam odio auctor risus, in mattis lorem orci vel ante. In erat ligula, ultricies at sem id, ultricies mattis orci. Nullam dictum lorem non maximus fermentum. Curabitur consectetur nisl at est ornare, viverra viverra purus laoreet. Proin nunc mauris, interdum eget erat eget, interdum malesuada dui. Sed a varius orci, sed venenatis est. Maecenas dignissim turpis id leo mattis tristique. Vestibulum pulvinar tempus ipsum, vel molestie nisl efficitur eget. Vivamus non tortor mi. In hac habitasse platea dictumst. Fusce ac efficitur arcu. Fusce id orci at ante lobortis lobortis id rutrum ex. Vivamus consequat fermentum nisl, quis porta diam tincidunt sed. Duis condimentum dui dui, quis tristique tellus accumsan sit amet. Nunc semper ex feugiat lacinia aliquam. Morbi urna tellus, congue eu leo vestibulum, imperdiet mattis velit. Nulla ut ligula et quam hendrerit feugiat. Aenean ultricies maximus ante et vehicula. Proin blandit tincidunt hendrerit. Proin mattis, tellus dapibus dapibus lacinia, dolor dolor rhoncus magna, nec semper eros nibh sit amet justo. Nullam vulputate tortor dui, id luctus tellus aliquam sit amet. Vestibulum cursus massa luctus velit hendrerit hendrerit. Curabitur at faucibus sapien, at bibendum erat. Integer vitae dolor nisi. Maecenas sed velit tellus. Integer eros quam, elementum sit amet erat a, placerat ornare libero. Phasellus auctor congue arcu, sit amet luctus arcu consequat ut. Ut viverra vestibulum tortor, non congue nulla mollis in. Fusce at metus tristique, pretium metus ac, rhoncus tortor. Praesent non ante ac ipsum fermentum tempus. Fusce velit felis, dictum vitae interdum vitae, mattis in augue. Vestibulum enim dolor, elementum non tincidunt ac, ultricies gravida leo. Phasellus tincidunt arcu ac augue suscipit laoreet. Phasellus ornare, nisl sed lobortis condimentum, ante dui viverra neque, sed fringilla turpis metus eu quam. Nulla eu lectus leo. Aliquam porta mi eget ante egestas volutpat. Sed diam quam, lacinia sed scelerisque eu, ultricies in sem. Aliquam in porta magna, nec euismod ante. Nullam justo dolor, facilisis at vehicula vel, lacinia vitae mi. Nullam congue imperdiet nibh ac porta. Quisque vitae libero dignissim, luctus ligula ac, mattis lectus. Maecenas in tortor tempor, iaculis mauris a, tincidunt ante. Nunc vestibulum dolor diam, a ultrices dui sollicitudin ut. Praesent porttitor quam turpis, vitae venenatis sem sagittis at. Nunc et sollicitudin mi. Aenean nulla augue, venenatis vitae neque ac, ultricies pulvinar mi. Nullam neque arcu, ullamcorper vel justo ac, porttitor consequat leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut imperdiet aliquet dui eget convallis. Nunc lobortis eget diam commodo ultrices. Aenean aliquet bibendum nisl sit amet pellentesque. Nam nibh elit, porta id enim sit amet, porta tempor felis. Sed eu aliquam tortor. Phasellus scelerisque vehicula sapien, ac finibus nisl. Mauris eu pulvinar est. Pellentesque iaculis massa velit, vitae venenatis lacus ullamcorper id. In finibus elit quis ex consequat, scelerisque finibus ante blandit. Quisque et dolor turpis. Integer ipsum turpis, varius quis ante sit amet, viverra viverra mauris. Sed venenatis lacinia purus. Phasellus laoreet pharetra nisi vel convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus in lorem non tempus. Nam auctor accumsan varius. Aenean in magna viverra, tempor felis quis, fringilla arcu. Etiam vel neque ipsum. In congue gravida est eu mollis. Donec vitae aliquam tortor. Mauris vel lorem non est interdum viverra ac et nisi. Morbi egestas porttitor nulla in rutrum. Nam enim enim, fringilla nec magna a, rutrum dapibus urna. Donec dictum libero eros, in auctor orci cursus sed. Sed viverra, nunc in sollicitudin accumsan, odio massa ultrices mi, nec suscipit erat lectus pulvinar erat. Proin eu eros magna. Praesent feugiat ligula at diam consectetur, id tincidunt nunc congue. Mauris ullamcorper consectetur convallis. In vitae enim dapibus, egestas tortor sed, malesuada sem. Aliquam vel metus at libero varius bibendum sagittis blandit lectus. Nullam luctus dui non lacus scelerisque, quis tincidunt nisi egestas. Fusce tempus fringilla velit quis placerat. Sed et vulputate erat. In commodo ante efficitur, porta ante eu, egestas velit. Nullam quam neque, dapibus eu interdum egestas, mollis sit amet orci. Suspendisse scelerisque diam vehicula ligula convallis, sed hendrerit ex semper. Sed consequat ullamcorper sem, at fringilla diam. Fusce ac lacus sit amet quam tincidunt suscipit a ultricies nibh. Etiam ligula purus, semper at eros et, laoreet blandit turpis. Aenean efficitur arcu in ex faucibus convallis. Phasellus lorem nisi, ullamcorper ut mattis vitae, volutpat et erat. Quisque posuere elit arcu, ut varius leo rutrum sed. Etiam id facilisis felis. Maecenas ex mauris, volutpat ut tempus eget, accumsan eu lectus. Vivamus faucibus blandit nunc tempor faucibus. Etiam at sem ut nisl blandit venenatis. Maecenas auctor, dui non rhoncus rutrum, mauris leo efficitur nunc, ornare bibendum tellus nisi et ante. Praesent a posuere velit. Sed sed blandit velit, sit amet posuere augue. Nam laoreet tempus nunc at aliquet. Phasellus gravida volutpat nisi. Praesent sodales id orci eget posuere. Nulla quis mattis sem, eget maximus est. Quisque mattis, mi ac accumsan convallis, ante risus posuere neque, nec ornare risus purus quis nulla. Sed id sem id tellus pretium gravida sit amet eget eros. Sed quis lacinia eros. Morbi blandit nisl nec dui sollicitudin rhoncus. Proin egestas libero ut felis semper malesuada. Curabitur pulvinar orci vitae tristique convallis. Morbi quis elit ac ex maximus maximus ut et lectus. Praesent iaculis justo nec arcu convallis fringilla et sed massa. Aliquam id dictum odio. Donec purus velit, imperdiet vel consequat quis, viverra sit amet leo. Ut malesuada ex ut arcu posuere, et ullamcorper mi tempus. Integer ut lorem id ipsum vulputate viverra et non urna. Nullam commodo aliquam mi in condimentum. Nullam suscipit in neque a faucibus. Cras vitae eros nisi. Duis nec tempus velit. Sed gravida convallis ligula. Phasellus ac aliquet ligula. In ultrices velit vel consectetur blandit. Sed lorem dui, pretium sit amet laoreet sed, blandit at lectus. Sed congue, justo in ultrices vehicula, quam risus consequat eros, nec fringilla orci mi ac elit. Aliquam feugiat, lorem vitae feugiat iaculis, massa sapien tincidunt magna, imperdiet facilisis erat odio quis libero. Curabitur in eleifend est, nec ornare nibh. In vehicula molestie iaculis. Aliquam erat volutpat. Nunc pellentesque lacus sit amet ipsum consectetur, quis imperdiet dolor pharetra. Quisque non dolor sit amet sapien mattis eleifend sit amet vel massa. Fusce ante ligula, dignissim sit amet vulputate venenatis, porta sit amet nunc. Nulla et eleifend libero, sit amet consectetur nisi. Duis congue vehicula nisi eget molestie. Donec sed leo aliquet, fringilla lectus at, commodo augue. Donec ut neque mattis, sagittis ligula quis, ultricies magna. In hac habitasse platea dictumst. Phasellus dignissim arcu eu pulvinar accumsan. Aenean dignissim massa sit amet facilisis volutpat. Curabitur magna urna, euismod vel nibh non, interdum congue tortor. Suspendisse vel aliquam elit, interdum tristique lectus. Maecenas porta quam vel odio elementum, vel iaculis turpis faucibus. Quisque in lectus pellentesque, pretium nisl et, tincidunt enim. Nullam maximus ligula placerat eros dignissim maximus. Maecenas malesuada est nec ultrices ultrices. Quisque ut elit vel ante pellentesque consequat. Morbi laoreet felis mi. Integer ex libero, sollicitudin vel vehicula placerat, euismod id ex. Etiam hendrerit eleifend nisi vel consectetur. Sed et convallis nisl, quis hendrerit purus. Nunc a ante eget tortor tempor dapibus eu a mi. Aliquam gravida lacinia est, non tempus turpis mattis quis. Curabitur ultrices arcu nec finibus sagittis. Donec fringilla tincidunt lacus ac pulvinar. Nunc ultricies nunc at ex lobortis ornare. Fusce placerat dictum lacus non luctus. Proin placerat maximus feugiat. Pellentesque posuere commodo dui eget rutrum. Pellentesque sed nisi sapien. Sed sem magna, dictum et augue non, dignissim porttitor mi. Etiam ornare nisl odio, a efficitur neque mattis eu. Suspendisse imperdiet erat at rutrum aliquam. Vestibulum vulputate elit nisl, eget posuere augue dictum eu. Nullam sodales viverra laoreet. Pellentesque sed sollicitudin neque. Etiam a consequat quam. Duis non rutrum lacus, non hendrerit sapien. Aliquam leo urna, placerat quis pellentesque eget, semper malesuada quam. Curabitur quis arcu sodales, tempor dolor at, faucibus enim. Fusce nec mollis quam. Morbi sit amet nibh interdum, dapibus nisl at, venenatis tellus. Maecenas finibus tellus et risus scelerisque venenatis. Integer malesuada justo id quam pharetra, at feugiat dui ultricies. Nunc interdum erat orci, ut imperdiet ligula dictum vitae. Proin pretium et justo et iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula sed nisi sed venenatis. Donec lacinia sit amet enim nec porttitor. Cras mollis dictum condimentum. Nulla a quam eu lacus placerat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ipsum erat, bibendum fringilla lobortis sed, vehicula a leo. Phasellus sodales commodo eleifend. Sed auctor, dolor quis aliquet convallis, nisl magna interdum massa, non malesuada ex leo nec augue. Curabitur efficitur turpis sit amet lorem condimentum pulvinar. Fusce dapibus feugiat pellentesque. Nulla at feugiat risus. Integer rhoncus nisl id dolor iaculis, id mollis leo pharetra. Etiam convallis semper libero nec pulvinar. Duis tristique fringilla turpis, non auctor nibh blandit a. Aliquam mauris nisl, convallis at pellentesque eu, tempus nec nulla. Praesent sodales cursus erat, ac dignissim leo convallis scelerisque. Mauris semper mi non neque vehicula convallis. Suspendisse dictum justo eget tortor placerat malesuada. Duis a gravida orci, nec maximus neque. Maecenas imperdiet leo quam, id molestie felis tincidunt id. Sed ac mauris metus. Aenean eu rhoncus dolor. Aenean eu lorem a odio pellentesque consequat nec sed libero. Ut dignissim libero quis lobortis tincidunt. In nisi ligula, feugiat nec augue nec, consectetur ullamcorper turpis. Donec viverra purus et purus vehicula rutrum. Nam iaculis non nulla eu egestas. Donec ac quam purus. Aliquam quis erat eget erat ultricies fermentum. Donec quis leo mollis, pulvinar nulla id, venenatis nisi. Suspendisse vehicula placerat augue in vestibulum. Nulla elit neque, facilisis quis urna et, auctor tincidunt erat. Suspendisse ut aliquet lectus. Cras in rhoncus lacus. Fusce nisi neque, viverra non pulvinar sed, semper ac velit. Ut sit amet lobortis nisl, eget gravida magna. Vivamus tempus pharetra elit sed accumsan. Cras sed gravida mi. Fusce rhoncus ac erat a placerat. Nam congue, leo vitae maximus feugiat, tellus ipsum aliquet tellus, blandit cursus lorem nunc at dolor. Duis cursus lacinia ex, at finibus diam ullamcorper at. Nulla eget leo nec sapien rutrum blandit quis ut libero. Morbi venenatis at ipsum ut dignissim. In in lacus eget tortor porttitor auctor eu sit amet lectus. Phasellus pharetra posuere risus, id tincidunt libero scelerisque ac. Praesent eleifend ante nec augue eleifend iaculis a nec urna. Proin tincidunt scelerisque nulla, pharetra dictum eros tempor non. Duis eros tellus, condimentum at sapien ac, aliquet ullamcorper est. Fusce nec risus consectetur nisi pellentesque rutrum. Morbi pulvinar dignissim lorem sit amet dapibus. Morbi porta ligula id risus scelerisque sagittis. Cras quis arcu porta, ullamcorper dolor vel, tincidunt metus. Ut finibus sem in nibh dignissim, et posuere urna fermentum. Nam arcu felis, vestibulum vitae turpis nec, consectetur varius nisl. Quisque ut risus varius, fermentum ligula sollicitudin, euismod mi. Duis commodo velit eu dolor commodo pulvinar. Aenean porttitor aliquet mauris in convallis. Morbi blandit dui non libero volutpat, id lacinia est tincidunt. Aliquam erat volutpat. Ut ante magna, pellentesque in orci sollicitudin, vestibulum tristique leo. Quisque sed tincidunt est. Nam in ornare ex. Donec faucibus, lorem at facilisis finibus, purus felis commodo sapien, et commodo risus magna a sem. Cras ornare sapien vulputate consequat condimentum. Proin ultricies et urna non congue. Fusce sed feugiat sem. Nunc ut purus ac nulla tincidunt eleifend porttitor eu eros. Mauris imperdiet eu augue vel malesuada. Cras blandit, augue ut pretium facilisis, nulla mauris semper risus, quis mollis felis est at arcu. Nullam hendrerit feugiat tellus, at luctus odio porta vel. Nam bibendum, ipsum a dapibus commodo, dolor libero posuere massa, cursus euismod nulla metus ut nibh. Mauris eleifend, elit ut vulputate semper, sem ante varius enim, ut volutpat purus nibh eget odio. Etiam elementum tortor sed sodales sodales. Mauris posuere metus quis mi sagittis, ut varius metus euismod. Integer feugiat, orci vitae volutpat blandit, libero augue semper lacus, sit amet tristique lacus dolor ac purus. Vestibulum tincidunt eros et cursus pellentesque. Donec convallis placerat dapibus. Nullam tortor diam, cursus vitae est quis, varius suscipit lorem. Maecenas sit amet nibh eget ex egestas egestas. Mauris euismod lorem non risus ornare, vel consectetur felis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus justo lacus, aliquet quis lectus at, condimentum egestas ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae neque vulputate, facilisis urna sed, imperdiet lorem. Vivamus cursus nulla consequat mi consequat pretium eget vitae eros. Nunc enim leo, faucibus sit amet urna elementum, laoreet pellentesque ex. Fusce ac nisl id justo vehicula elementum rutrum at est. Aenean scelerisque dignissim lacus ac euismod. Etiam eget est convallis, elementum nibh a, rutrum est. Suspendisse potenti. Suspendisse potenti. Quisque porttitor tincidunt libero. Sed vulputate nunc sed tortor fringilla maximus. Duis venenatis diam in nunc posuere, eget dictum quam lacinia. Cras ipsum dolor, mattis nec massa ac, aliquet fermentum elit. Integer a convallis arcu. Sed placerat euismod arcu, quis hendrerit diam ultrices ut. Nulla tristique tincidunt nunc, at malesuada ligula. Aliquam erat volutpat. Nam semper pellentesque magna, non ornare ante sollicitudin vitae. In sed arcu iaculis, varius massa ut, lacinia lacus. Praesent id suscipit neque, non congue ipsum. Sed rutrum lorem a elit vestibulum, et sagittis nibh sollicitudin. Quisque vulputate dignissim tellus. Aliquam eu tortor quis felis suscipit luctus. Quisque eu mattis elit, venenatis sollicitudin massa. Fusce convallis, mauris eu tristique consectetur, lacus risus congue urna, eu dignissim est sapien sed lectus. Phasellus dui magna, maximus eget augue in, ornare scelerisque sem. Curabitur porttitor tortor id felis vestibulum, nec accumsan est mollis. Quisque quis dapibus purus. Nam egestas nibh diam, vitae sollicitudin leo tempor vitae. Suspendisse interdum tristique bibendum. Mauris pellentesque eros sit amet hendrerit dignissim. Sed auctor urna vel sapien accumsan pulvinar. Aliquam a dui et metus laoreet egestas. In hac habitasse platea dictumst. Vivamus ut ligula consequat, sagittis eros id, euismod tellus. Phasellus fringilla quam vitae felis ultrices, vulputate pellentesque massa commodo. Etiam rutrum non lorem at vehicula. Pellentesque non pretium massa, id rutrum nunc. Aliquam nisi lectus, mollis sed rhoncus et, mollis quis sapien. Integer sit amet dolor in sapien consequat vehicula at id dolor. Nulla sodales eget enim eu lacinia. Maecenas accumsan libero nisl, vel egestas ante gravida at. Nullam viverra ex vitae est finibus, nec interdum est vehicula. Nullam sagittis non justo eu sollicitudin. Cras libero justo, molestie id maximus in, accumsan et augue. Quisque rhoncus tortor at dolor ullamcorper laoreet. Mauris sed pharetra felis, a varius lorem. Sed dictum ultricies magna non condimentum. Etiam blandit iaculis libero. Quisque et ipsum tempor, aliquet ligula at, aliquam tellus. Aliquam neque sem, convallis id porta eu, congue quis ipsum. Etiam ut massa ac libero pretium consequat. Maecenas euismod consequat imperdiet. Praesent a diam purus. Integer sit amet placerat tellus. Mauris nec ipsum lobortis, finibus magna eget, semper neque. Nulla vehicula, sapien semper maximus ultricies, nibh ligula varius nisl, at laoreet lectus eros venenatis ligula. Cras tempor convallis nisl porta fringilla. Morbi eget elementum dolor. Curabitur nulla quam, sodales id commodo nec, pulvinar sed justo. Quisque aliquam ante quis finibus pharetra. Ut scelerisque purus lectus, vitae pretium odio bibendum vitae. Quisque nec viverra velit, sit amet consequat ligula. Etiam in bibendum massa. Fusce ornare tristique nisl, a venenatis felis facilisis in. In eget leo ac neque suscipit aliquam. Quisque enim orci, interdum sit amet libero a, aliquam vulputate tellus. Fusce nisi justo, tristique ac nisl id, pretium porta libero. Pellentesque ultrices, nulla a aliquet elementum, magna risus molestie ex, eu fringilla libero velit vitae diam. Maecenas ante lorem, aliquam a porta at, pharetra sit amet augue. Nulla sit amet risus lectus. Proin in rhoncus ligula. Donec eget nunc magna. Maecenas nec ex dolor. Etiam sed molestie nulla. Pellentesque nec risus et ex dapibus malesuada. Nam dui velit, porta a nibh nec, consequat dapibus neque. Phasellus egestas ex eu tellus euismod, a malesuada elit hendrerit. Nulla nec augue ut dolor aliquet placerat. Vivamus nec auctor dui. Praesent euismod elit mi, quis iaculis sapien imperdiet vitae. Sed vitae nisl in dolor hendrerit sodales rutrum at nibh. Etiam eget sodales purus. Nunc imperdiet scelerisque libero, ac ultrices urna sagittis ut. Quisque vestibulum, lacus ac laoreet sagittis, sapien libero vestibulum mi, et efficitur elit tortor eu libero. Cras eleifend elit vitae erat tincidunt, eu posuere eros ultrices. Integer non arcu eget felis efficitur ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed egestas leo ligula, eget placerat libero pretium quis. Nam quis euismod mi. Aenean maximus bibendum justo id facilisis. Cras nibh nunc, interdum vel velit nec, posuere pharetra dolor. Nam vestibulum eu ante at ornare. Donec efficitur blandit nisi, eu ultrices ante euismod at. Pellentesque ornare sit amet ligula id sodales. Vestibulum suscipit diam sed lectus luctus molestie. Vivamus commodo est et congue fringilla. Cras eget lacus odio. Etiam eget egestas nulla. Integer a luctus nisi, id faucibus diam. Donec ornare neque tellus, et semper orci fermentum in. Mauris ut placerat ligula, ac euismod erat. Donec lacus metus, varius ut bibendum a, iaculis et dui. Morbi congue ultricies sem, et tristique odio imperdiet nec. Proin rutrum hendrerit nisl at consectetur. Aliquam elit felis, posuere eu gravida nec, viverra a nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis, orci sed iaculis commodo, augue ligula eleifend ante, in pulvinar diam arcu eget nunc. Donec lobortis nibh faucibus, placerat nibh non, semper est. Donec vehicula diam quis commodo elementum. Maecenas euismod ultrices mauris a consequat. Duis varius justo sit amet auctor luctus. "),u()()(),C(),u()),i&2){let b=D(17),re=D(34),le=D(55);l(7),n("options",m(9,q)),l(4),n("options",m(10,q)),l(3),n("c3Dropdown",b),l(10),n("options",m(11,q)),l(4),n("options",m(12,q)),l(3),n("c3Dropdown",re),l(14),n("options",m(13,q)),l(4),n("options",m(14,q)),l(3),n("c3Dropdown",le)}},dependencies:[ae,ue,x,o,ee,$,X,Y,J],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();var ve=[{path:"",component:ie,children:[{path:"api",component:te},{path:"examples",component:se},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],ne=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=c({imports:[P.forChild(ve),P]})}}return e})();var Ke=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=v({type:e})}static{this.\u0275inj=c({imports:[o,ne]})}}return e})();export{Ke as DropdownModule};
