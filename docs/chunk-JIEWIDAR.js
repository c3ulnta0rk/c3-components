import{a as B,b as O,c as h,d as w,e as C,f as v}from"./chunk-ROB7ILJ5.js";import"./chunk-R5KEELFI.js";import{a as H}from"./chunk-IP5QXJH5.js";import{b as k,c as z}from"./chunk-ZQXNJLPW.js";import"./chunk-VQXK7JSU.js";import"./chunk-KINULSZZ.js";import"./chunk-53K6XMQ3.js";import{a as T}from"./chunk-RA7FHYGQ.js";import{c as j,e as N}from"./chunk-5RYWBS5O.js";import"./chunk-4ELSH6VA.js";import"./chunk-TZ7DCQMJ.js";import{i as M}from"./chunk-SU6PRRH7.js";import"./chunk-G3XMIJSC.js";import"./chunk-WISR4DVK.js";import{d as b}from"./chunk-NK5SK6UO.js";import{n as I}from"./chunk-7WGNA6AJ.js";import{$b as V,Fc as s,Tb as a,Ub as l,Vb as d,Wb as y,Xb as t,Yb as n,_b as F,bb as c,ca as f,fc as D,ga as g,sb as E,tb as u,wc as e}from"./chunk-AGADXNXO.js";var A=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=E({type:i,selectors:[["c3-api"]],decls:685,vars:0,consts:[[1,"api-section"],[1,"api-table"]],template:function(m,p){m&1&&(t(0,"h1"),e(1,"File Viewer API"),n(),t(2,"section",0)(3,"h2"),e(4,"Import"),n(),t(5,"pre")(6,"code"),e(7,`import {
  C3FileViewerModule,
  C3FileViewerComponent,
  C3FileViewerDialogComponent,
  C3FileViewer,
  C3FileViewerConfig,
  FileMetadata,
  FullScreenDirective
} from 'c3-components';`),n()()(),t(8,"section",0)(9,"h2"),e(10,"C3FileViewerComponent"),n(),t(11,"p"),e(12,"Selector: "),t(13,"code"),e(14,"c3-file-viewer"),n()(),t(15,"p"),e(16,"Main component for displaying and navigating through files (images, videos, PDFs)."),n(),t(17,"h3"),e(18,"Inputs"),n(),t(19,"table",1)(20,"thead")(21,"tr")(22,"th"),e(23,"Name"),n(),t(24,"th"),e(25,"Type"),n(),t(26,"th"),e(27,"Default"),n(),t(28,"th"),e(29,"Description"),n()()(),t(30,"tbody")(31,"tr")(32,"td")(33,"code"),e(34,"fileViewer"),n()(),t(35,"td")(36,"code"),e(37,"C3FileViewer"),n()(),t(38,"td")(39,"em"),e(40,"required"),n()(),t(41,"td"),e(42,"The file viewer instance that manages files and state."),n()(),t(43,"tr")(44,"td")(45,"code"),e(46,"screenHeightOccupied"),n()(),t(47,"td")(48,"code"),e(49,"number"),n()(),t(50,"td")(51,"code"),e(52,"0"),n()(),t(53,"td"),e(54,"Height in pixels to subtract from the viewer height."),n()()()(),t(55,"h3"),e(56,"Outputs"),n(),t(57,"table",1)(58,"thead")(59,"tr")(60,"th"),e(61,"Name"),n(),t(62,"th"),e(63,"Type"),n(),t(64,"th"),e(65,"Description"),n()()(),t(66,"tbody")(67,"tr")(68,"td")(69,"code"),e(70,"indexChange"),n()(),t(71,"td")(72,"code"),e(73,"number"),n()(),t(74,"td"),e(75,"Emits when the current file index changes."),n()(),t(76,"tr")(77,"td")(78,"code"),e(79,"configChange"),n()(),t(80,"td")(81,"code"),e(82,"C3FileViewerConfig"),n()(),t(83,"td"),e(84,"Emits when the configuration changes."),n()(),t(85,"tr")(86,"td")(87,"code"),e(88,"customFileEvent"),n()(),t(89,"td")(90,"code"),e(91,"CustomFileEvent"),n()(),t(92,"td"),e(93,"Emits custom file events (e.g., imageNotFound)."),n()()()()(),t(94,"section",0)(95,"h2"),e(96,"C3FileViewerDialogComponent"),n(),t(97,"p"),e(98,"Selector: "),t(99,"code"),e(100,"c3-file-viewer-dialog"),n()(),t(101,"p"),e(102,"Wrapper component that opens the file viewer in a Material dialog."),n(),t(103,"h3"),e(104,"Inputs"),n(),t(105,"table",1)(106,"thead")(107,"tr")(108,"th"),e(109,"Name"),n(),t(110,"th"),e(111,"Type"),n(),t(112,"th"),e(113,"Default"),n(),t(114,"th"),e(115,"Description"),n()()(),t(116,"tbody")(117,"tr")(118,"td")(119,"code"),e(120,"fileViewer"),n()(),t(121,"td")(122,"code"),e(123,"C3FileViewer"),n()(),t(124,"td")(125,"em"),e(126,"required"),n()(),t(127,"td"),e(128,"The file viewer instance."),n()(),t(129,"tr")(130,"td")(131,"code"),e(132,"dialogConfig"),n()(),t(133,"td")(134,"code"),e(135,"Partial<MatDialogConfig>"),n()(),t(136,"td")(137,"code"),e(138,"{ panelClass: 'c3-file-viewer-dialog', width: '80%', height: '80%' }"),n()(),t(139,"td"),e(140,"Configuration for the Material dialog."),n()()()(),t(141,"h3"),e(142,"Methods"),n(),t(143,"table",1)(144,"thead")(145,"tr")(146,"th"),e(147,"Method"),n(),t(148,"th"),e(149,"Description"),n()()(),t(150,"tbody")(151,"tr")(152,"td")(153,"code"),e(154,"openDialog()"),n()(),t(155,"td"),e(156,"Opens the file viewer dialog. Also triggered on click."),n()()()()(),t(157,"section",0)(158,"h2"),e(159,"C3FileViewer Class"),n(),t(160,"p"),e(161,"Core class that manages file viewing state, navigation, and transformations."),n(),t(162,"h3"),e(163,"Constructor"),n(),t(164,"pre")(165,"code"),e(166,`new C3FileViewer({
  client: HttpClient,
  config?: C3FileViewerConfig,
  files?: FileMetadata[]
})`),n()(),t(167,"h3"),e(168,"Properties"),n(),t(169,"table",1)(170,"thead")(171,"tr")(172,"th"),e(173,"Property"),n(),t(174,"th"),e(175,"Type"),n(),t(176,"th"),e(177,"Description"),n()()(),t(178,"tbody")(179,"tr")(180,"td")(181,"code"),e(182,"config"),n()(),t(183,"td")(184,"code"),e(185,"C3FileViewerConfig"),n()(),t(186,"td"),e(187,"Current configuration (getter/setter)."),n()(),t(188,"tr")(189,"td")(190,"code"),e(191,"config$"),n()(),t(192,"td")(193,"code"),e(194,"BehaviorSubject<C3FileViewerConfig>"),n()(),t(195,"td"),e(196,"Observable for config changes."),n()(),t(197,"tr")(198,"td")(199,"code"),e(200,"files"),n()(),t(201,"td")(202,"code"),e(203,"FileMetadata[]"),n()(),t(204,"td"),e(205,"Array of files to display (getter/setter)."),n()(),t(206,"tr")(207,"td")(208,"code"),e(209,"filesObjectUrl"),n()(),t(210,"td")(211,"code"),e(212,"Array<FileMetadata & { objectUrl?: Observable<string> }>"),n()(),t(213,"td"),e(214,"Files with generated object URLs."),n()(),t(215,"tr")(216,"td")(217,"code"),e(218,"currentFile"),n()(),t(219,"td")(220,"code"),e(221,"FileMetadata"),n()(),t(222,"td"),e(223,"Currently displayed file (getter)."),n()(),t(224,"tr")(225,"td")(226,"code"),e(227,"currentIndex"),n()(),t(228,"td")(229,"code"),e(230,"number"),n()(),t(231,"td"),e(232,"Index of the current file."),n()(),t(233,"tr")(234,"td")(235,"code"),e(236,"index$"),n()(),t(237,"td")(238,"code"),e(239,"BehaviorSubject<number>"),n()(),t(240,"td"),e(241,"Observable for index changes."),n()(),t(242,"tr")(243,"td")(244,"code"),e(245,"fullscreen$"),n()(),t(246,"td")(247,"code"),e(248,"BehaviorSubject<Boolean>"),n()(),t(249,"td"),e(250,"Observable for fullscreen state."),n()(),t(251,"tr")(252,"td")(253,"code"),e(254,"customFile$"),n()(),t(255,"td")(256,"code"),e(257,"BehaviorSubject<any>"),n()(),t(258,"td"),e(259,"Observable for custom file events."),n()(),t(260,"tr")(261,"td")(262,"code"),e(263,"loading"),n()(),t(264,"td")(265,"code"),e(266,"boolean"),n()(),t(267,"td"),e(268,"Whether a file is currently loading."),n()(),t(269,"tr")(270,"td")(271,"code"),e(272,"hovered"),n()(),t(273,"td")(274,"code"),e(275,"boolean"),n()(),t(276,"td"),e(277,"Whether the viewer is hovered (for keyboard nav)."),n()()()(),t(278,"h3"),e(279,"Methods"),n(),t(280,"table",1)(281,"thead")(282,"tr")(283,"th"),e(284,"Method"),n(),t(285,"th"),e(286,"Parameters"),n(),t(287,"th"),e(288,"Description"),n()()(),t(289,"tbody")(290,"tr")(291,"td")(292,"code"),e(293,"nextImage(event)"),n()(),t(294,"td")(295,"code"),e(296,"KeyboardEvent | MouseEvent"),n()(),t(297,"td"),e(298,"Navigate to the next file."),n()(),t(299,"tr")(300,"td")(301,"code"),e(302,"previousImage(event)"),n()(),t(303,"td")(304,"code"),e(305,"KeyboardEvent | MouseEvent"),n()(),t(306,"td"),e(307,"Navigate to the previous file."),n()(),t(308,"tr")(309,"td")(310,"code"),e(311,"zoomIn()"),n()(),t(312,"td"),e(313,"-"),n(),t(314,"td"),e(315,"Zoom in by the configured zoom factor."),n()(),t(316,"tr")(317,"td")(318,"code"),e(319,"zoomOut()"),n()(),t(320,"td"),e(321,"-"),n(),t(322,"td"),e(323,"Zoom out by the configured zoom factor."),n()(),t(324,"tr")(325,"td")(326,"code"),e(327,"rotateClockwise()"),n()(),t(328,"td"),e(329,"-"),n(),t(330,"td"),e(331,"Rotate the image 90\xB0 clockwise."),n()(),t(332,"tr")(333,"td")(334,"code"),e(335,"rotateCounterClockwise()"),n()(),t(336,"td"),e(337,"-"),n(),t(338,"td"),e(339,"Rotate the image 90\xB0 counter-clockwise."),n()(),t(340,"tr")(341,"td")(342,"code"),e(343,"toggleFullscreen()"),n()(),t(344,"td"),e(345,"-"),n(),t(346,"td"),e(347,"Toggle fullscreen mode."),n()(),t(348,"tr")(349,"td")(350,"code"),e(351,"reset()"),n()(),t(352,"td"),e(353,"-"),n(),t(354,"td"),e(355,"Reset zoom, rotation, and position."),n()(),t(356,"tr")(357,"td")(358,"code"),e(359,"download(file?)"),n()(),t(360,"td")(361,"code"),e(362,"FileMetadata"),n()(),t(363,"td"),e(364,"Download the current or specified file."),n()(),t(365,"tr")(366,"td")(367,"code"),e(368,"getOriginalName(file?)"),n()(),t(369,"td")(370,"code"),e(371,"FileMetadata"),n()(),t(372,"td"),e(373,"Get the original filename from metadata."),n()()()()(),t(374,"section",0)(375,"h2"),e(376,"FileMetadata"),n(),t(377,"table",1)(378,"thead")(379,"tr")(380,"th"),e(381,"Property"),n(),t(382,"th"),e(383,"Type"),n(),t(384,"th"),e(385,"Required"),n(),t(386,"th"),e(387,"Description"),n()()(),t(388,"tbody")(389,"tr")(390,"td")(391,"code"),e(392,"name"),n()(),t(393,"td")(394,"code"),e(395,"string"),n()(),t(396,"td"),e(397,"Yes"),n(),t(398,"td"),e(399,"Display name of the file."),n()(),t(400,"tr")(401,"td")(402,"code"),e(403,"type"),n()(),t(404,"td")(405,"code"),e(406,"string"),n()(),t(407,"td"),e(408,"Yes"),n(),t(409,"td"),e(410,"MIME type of the file."),n()(),t(411,"tr")(412,"td")(413,"code"),e(414,"location"),n()(),t(415,"td")(416,"code"),e(417,"string"),n()(),t(418,"td"),e(419,"Yes"),n(),t(420,"td"),e(421,"URL or path to fetch the file."),n()(),t(422,"tr")(423,"td")(424,"code"),e(425,"size"),n()(),t(426,"td")(427,"code"),e(428,"number"),n()(),t(429,"td"),e(430,"No"),n(),t(431,"td"),e(432,"File size in bytes."),n()(),t(433,"tr")(434,"td")(435,"code"),e(436,"lastModified"),n()(),t(437,"td")(438,"code"),e(439,"Date"),n()(),t(440,"td"),e(441,"No"),n(),t(442,"td"),e(443,"Last modification date."),n()(),t(444,"tr")(445,"td")(446,"code"),e(447,"created"),n()(),t(448,"td")(449,"code"),e(450,"Date"),n()(),t(451,"td"),e(452,"No"),n(),t(453,"td"),e(454,"Creation date."),n()(),t(455,"tr")(456,"td")(457,"code"),e(458,"extension"),n()(),t(459,"td")(460,"code"),e(461,"string"),n()(),t(462,"td"),e(463,"No"),n(),t(464,"td"),e(465,"File extension."),n()(),t(466,"tr")(467,"td")(468,"code"),e(469,"objectUrl"),n()(),t(470,"td")(471,"code"),e(472,"Observable<string>"),n()(),t(473,"td"),e(474,"No"),n(),t(475,"td"),e(476,"Pre-loaded object URL."),n()(),t(477,"tr")(478,"td")(479,"code"),e(480,"metadata"),n()(),t(481,"td")(482,"code"),e(483,"Record<string, any>"),n()(),t(484,"td"),e(485,"No"),n(),t(486,"td"),e(487,"Custom metadata (e.g., originalName)."),n()(),t(488,"tr")(489,"td")(490,"code"),e(491,"alternativeVersions"),n()(),t(492,"td")(493,"code"),e(494,"VariantFile[]"),n()(),t(495,"td"),e(496,"No"),n(),t(497,"td"),e(498,"Alternative versions of the file."),n()()()()(),t(499,"section",0)(500,"h2"),e(501,"C3FileViewerConfig"),n(),t(502,"table",1)(503,"thead")(504,"tr")(505,"th"),e(506,"Property"),n(),t(507,"th"),e(508,"Type"),n(),t(509,"th"),e(510,"Description"),n()()(),t(511,"tbody")(512,"tr")(513,"td")(514,"code"),e(515,"zoomFactor"),n()(),t(516,"td")(517,"code"),e(518,"number"),n()(),t(519,"td"),e(520,"Zoom increment factor."),n()(),t(521,"tr")(522,"td")(523,"code"),e(524,"wheelZoom"),n()(),t(525,"td")(526,"code"),e(527,"boolean"),n()(),t(528,"td"),e(529,"Enable zoom with mouse wheel."),n()(),t(530,"tr")(531,"td")(532,"code"),e(533,"allowFullscreen"),n()(),t(534,"td")(535,"code"),e(536,"boolean"),n()(),t(537,"td"),e(538,"Enable fullscreen mode."),n()(),t(539,"tr")(540,"td")(541,"code"),e(542,"allowKeyboardNavigation"),n()(),t(543,"td")(544,"code"),e(545,"boolean"),n()(),t(546,"td"),e(547,"Enable arrow key navigation."),n()(),t(548,"tr")(549,"td")(550,"code"),e(551,"customClient"),n()(),t(552,"td")(553,"code"),e(554,"HttpClient['get']"),n()(),t(555,"td"),e(556,"Custom HTTP client for fetching files."),n()(),t(557,"tr")(558,"td")(559,"code"),e(560,"width / height"),n()(),t(561,"td")(562,"code"),e(563,"number | string"),n()(),t(564,"td"),e(565,"Viewer dimensions."),n()(),t(566,"tr")(567,"td")(568,"code"),e(569,"minWidth / maxWidth"),n()(),t(570,"td")(571,"code"),e(572,"number | string"),n()(),t(573,"td"),e(574,"Width constraints."),n()(),t(575,"tr")(576,"td")(577,"code"),e(578,"minHeight / maxHeight"),n()(),t(579,"td")(580,"code"),e(581,"number | string"),n()(),t(582,"td"),e(583,"Height constraints."),n()(),t(584,"tr")(585,"td")(586,"code"),e(587,"btnShow"),n()(),t(588,"td")(589,"code"),e(590,"object"),n()(),t(591,"td"),e(592,"Toggle visibility of control buttons."),n()(),t(593,"tr")(594,"td")(595,"code"),e(596,"btnIcons"),n()(),t(597,"td")(598,"code"),e(599,"object"),n()(),t(600,"td"),e(601,"Customize button icons."),n()(),t(602,"tr")(603,"td")(604,"code"),e(605,"customBtns"),n()(),t(606,"td")(607,"code"),e(608,"Array"),n()(),t(609,"td"),e(610,"Add custom action buttons."),n()(),t(611,"tr")(612,"td")(613,"code"),e(614,"btnContainerClass"),n()(),t(615,"td")(616,"code"),e(617,"string"),n()(),t(618,"td"),e(619,"CSS class for button container."),n()(),t(620,"tr")(621,"td")(622,"code"),e(623,"containerBackgroundColor"),n()(),t(624,"td")(625,"code"),e(626,"string"),n()(),t(627,"td"),e(628,"Background color of the viewer."),n()()()()(),t(629,"section",0)(630,"h2"),e(631,"FullScreenDirective"),n(),t(632,"p"),e(633,"Selectors: "),t(634,"code"),e(635,"[C3FullScreen]"),n(),e(636,", "),t(637,"code"),e(638,"[c3-full-screen]"),n()(),t(639,"p"),e(640,"Directive to enable fullscreen mode on an element."),n(),t(641,"h3"),e(642,"Inputs"),n(),t(643,"table",1)(644,"thead")(645,"tr")(646,"th"),e(647,"Name"),n(),t(648,"th"),e(649,"Alias"),n(),t(650,"th"),e(651,"Type"),n(),t(652,"th"),e(653,"Description"),n()()(),t(654,"tbody")(655,"tr")(656,"td")(657,"code"),e(658,"fullscreenState"),n()(),t(659,"td")(660,"code"),e(661,"c3Screenfull"),n()(),t(662,"td")(663,"code"),e(664,"Boolean | null"),n()(),t(665,"td"),e(666,"Controls fullscreen state."),n()(),t(667,"tr")(668,"td")(669,"code"),e(670,"fullscreenStateSetter"),n()(),t(671,"td")(672,"code"),e(673,"c3-full-screen"),n()(),t(674,"td")(675,"code"),e(676,"Boolean | null"),n()(),t(677,"td"),e(678,"Alternative input for fullscreen state."),n()()()()(),t(679,"section",0)(680,"h2"),e(681,"Usage Example"),n(),t(682,"pre")(683,"code"),e(684,`// Component
fileViewer = new C3FileViewer({
  client: inject(HttpClient),
  config: {
    wheelZoom: true,
    allowKeyboardNavigation: true
  },
  files: [
    { name: 'photo.jpg', type: 'image/jpeg', location: '/api/files/1' }
  ]
});

// Template
<c3-file-viewer [fileViewer]="fileViewer"></c3-file-viewer>

// Or with dialog
<c3-file-viewer-dialog [fileViewer]="fileViewer">
  Click to open viewer
</c3-file-viewer-dialog>`),n()()())},encapsulation:2});let o=i;return o})();var U=(()=>{let i=class i{constructor(){this.fileViewer=new h({files:C,config:v,client:g(b)})}handleEvent(r){switch(console.log(`${r?.name} has been clicked on img ${r?.fileUrl}`),r?.name){case"print":console.log("run print logic");break}}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=E({type:i,selectors:[["basic-viewer"]],decls:1,vars:2,consts:[[3,"customFileEvent","fileViewer","screenHeightOccupied"]],template:function(m,p){m&1&&(l(0,"c3-file-viewer",0),D("customFileEvent",function(Z){return p.handleEvent(Z)}),d()),m&2&&a("fileViewer",p.fileViewer)("screenHeightOccupied",0)},dependencies:[w,B],encapsulation:2});let o=i;return o})();var P=(()=>{let i=class i{constructor(){this.fileViewer=new h({files:C,config:v,client:g(b)})}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=E({type:i,selectors:[["dialog-viewer"]],decls:3,vars:1,consts:[[3,"fileViewer"],["mat-raised-button","","color","primary"]],template:function(m,p){m&1&&(l(0,"c3-file-viewer-dialog",0)(1,"button",1),e(2,"Open Dialog"),d()()),m&2&&a("fileViewer",p.fileViewer)},dependencies:[w,O,N,j],encapsulation:2});let o=i;return o})();var x=()=>({}),$=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=E({type:i,selectors:[["c3-examples"]],decls:36,vars:12,consts:[[1,"my-4"],[1,"mb-1","px-4","pb-2"],["title",""],["label","TypeScript"],["highlight-js","","lang","typescript",3,"options"],["label","HTML"],["highlight-js","","lang","html",3,"options"],["label","CrabbyImg.ts"],["example",""]],template:function(m,p){m&1&&(l(0,"p",0),e(1,"Component Viewer for file, video and pdf"),d(),l(2,"example-viewer",1)(3,"h4",2),e(4,"Basic viewer for images"),d(),l(5,"c3-example-viewer-tab",3)(6,"div")(7,"textarea",4),e(8,`import { Component } from '@angular/core';
import {
  C3FileViewerConfig,
  C3FileViewer,
  CustomFileEvent,
  C3FileViewerModule,
} from 'c3-components';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'basic-viewer',
  standalone: true,
  imports: [C3FileViewerModule],
  templateUrl: './basic-viewer.component.html',
  styleUrls: ['./basic-viewer.component.scss'],
})
export class BasicViewerComponent {
  public config: C3FileViewerConfig = {
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

  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: this.config,
  });

  handleEvent(event: CustomFileEvent) {
    console.log(\`\${event?.name} has been clicked on img \${event?.fileUrl}\`);

    switch (event?.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
      `),d()()(),l(9,"c3-example-viewer-tab",5)(10,"div")(11,"textarea",6),e(12,`<c3-file-viewer
  [fileViewer]="fileViewer"
  [screenHeightOccupied]="0"
  (customFileEvent)="handleEvent($event)"
>
</c3-file-viewer>
      `),d()()(),l(13,"c3-example-viewer-tab",7)(14,"div")(15,"textarea",4),e(16,`import { FileMetadata } from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
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
      `),d()()(),F(17,8),y(18,"basic-viewer"),V(),d(),l(19,"example-viewer",1)(20,"h4",2),e(21,"Dialog Viewer"),d(),l(22,"c3-example-viewer-tab",3)(23,"div")(24,"textarea",4),e(25,`import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3FileViewerConfig,
  C3FileViewer,
  C3FileViewerModule,
} from 'c3-components';
import { crabbyImgs } from '../../files';

@Component({
  selector: 'dialog-viewer',
  standalone: true,
  imports: [C3FileViewerModule, MatButtonModule],
  templateUrl: './dialog-viewer.component.html',
  styleUrls: ['./dialog-viewer.component.scss'],
})
export class DialogViewerComponent {
  public config: C3FileViewerConfig = {
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

  public fileViewer = new C3FileViewer({
    files: crabbyImgs,
    config: this.config,
  });
}
      `),d()()(),l(26,"c3-example-viewer-tab",5)(27,"div")(28,"textarea",6),e(29,`<c3-file-viewer-dialog [fileViewer]="fileViewer">
  <button mat-raised-button color="primary">Open Dialog</button>
</c3-file-viewer-dialog>
      `),d()()(),l(30,"c3-example-viewer-tab",7)(31,"div")(32,"textarea",4),e(33,`import { FileMetadata } from 'c3-components';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
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
      `),d()()(),F(34,8),y(35,"dialog-viewer"),V(),d()),m&2&&(c(7),a("options",s(6,x)),c(4),a("options",s(7,x)),c(4),a("options",s(8,x)),c(9),a("options",s(9,x)),c(4),a("options",s(10,x)),c(4),a("options",s(11,x)))},dependencies:[U,P,z,k,T],styles:["[_nghost-%COMP%]{display:block}"]});let o=i;return o})();var K=[{path:"",component:H,children:[{path:"api",component:A},{path:"examples",component:$},{path:"**",redirectTo:"examples"}],data:{links:[{url:"api",label:"Api"},{url:"examples",label:"Examples"}]}}],R=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=u({type:i}),i.\u0275inj=f({imports:[M.forChild(K),M]});let o=i;return o})();var Ce=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=u({type:i}),i.\u0275inj=f({imports:[I,R]});let o=i;return o})();export{Ce as FileViewerModule};
