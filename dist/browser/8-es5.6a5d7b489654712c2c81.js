function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ihqm:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("8Y7J"),u=t("cUpR"),o=function(){var n=function(){function n(l){_classCallCheck(this,n),this.titleService=l}return _createClass(n,[{key:"setTitle",value:function(n){this.titleService.setTitle(n)}},{key:"getTitle",value:function(){return this.titleService.getTitle()}}]),n}();return n.ngInjectableDef=e.Nb({factory:function(){return new n(e.Ob(u.h))},token:n,providedIn:"root"}),n}()},nVKq:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),u=function n(){_classCallCheck(this,n)},o=t("pMnS"),i=t("iInd"),c=t("SVse"),s=t("j+mp"),a=function(){function n(l){_classCallCheck(this,n),this.utilSvc=l}return _createClass(n,[{key:"ngOnInit",value:function(){this.url=this.utilSvc.alias(this.news.title)}}]),n}(),r=t("kh7C"),b=e.mb({encapsulation:0,styles:[[".news-item[_ngcontent-%COMP%]{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #f3f3f3}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{-ms-flex:0 0 380px;-webkit-box-flex:0;flex:0 0 380px;max-width:380px;height:auto}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-transition:.3s ease-in-out;-o-transition:.3s ease-in-out;transition:all .3s ease-in-out}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:35px 30px;background:rgba(243,243,243,.5)}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#2b2b2b;margin-bottom:10px;-webkit-transition:.3s ease-in-out;-o-transition:.3s ease-in-out;transition:.3s all ease-in-out}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{display:inline-block;font-size:14px;color:#b9b9b9;margin-bottom:30px}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#2b2b2b;margin-bottom:10px;-webkit-line-clamp:3}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:13px;text-align:right;text-decoration:underline;color:#0028c3}@media (min-width:1025px){.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#d22121}}@media (max-width:1024.98px){.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{-ms-flex:0 0 250px;-webkit-box-flex:0;flex:0 0 250px;max-width:250px}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:15px}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;margin-bottom:5px}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:13px;margin-bottom:15px}.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}}@media (max-width:767.98px){.news-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%}}"]],data:{}});function g(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,17,"div",[["class","news-item"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,16,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Ab(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.nb(2,671744,null,0,i.p,[i.m,i.a,c.g],{routerLink:[0,"routerLink"]},null),e.Cb(131072,s.j,[s.k,e.h]),e.Bb(4,3),(n()(),e.ob(5,0,null,null,12,"figure",[["class","d-f fw-w"]],null,null,null,null,null)),(n()(),e.ob(6,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(n()(),e.ob(7,0,null,null,0,"img",[["alt",""],["class","ofcv"],["srcset",""]],[[8,"src",4]],null,null,null,null)),(n()(),e.ob(8,0,null,null,9,"figcaption",[["class","col"]],null,null,null,null,null)),(n()(),e.ob(9,0,null,null,8,"div",[["class","box-content"]],null,null,null,null,null)),(n()(),e.ob(10,0,null,null,1,"h3",[["class","lcl lcl-2 fw-700"]],null,null,null,null,null)),(n()(),e.Hb(11,null,["",""])),(n()(),e.ob(12,0,null,null,1,"time",[],null,null,null,null,null)),(n()(),e.Hb(13,null,["",""])),(n()(),e.ob(14,0,null,null,1,"p",[["class","lcl lcl-3"]],null,null,null,null,null)),(n()(),e.Hb(15,null,["",""])),(n()(),e.ob(16,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["\u0110\u1ecdc tin"]))],(function(n,l){var t=l.component,u=n(l,4,0,e.Ib(l,2,0,e.Ab(l,3).transform("/news")),t.news.id,t.url);n(l,2,0,u)}),(function(n,l){var t=l.component;n(l,1,0,e.Ab(l,2).target,e.Ab(l,2).href),n(l,7,0,e.sb(1,"",t.news.img,"")),n(l,11,0,t.news.title),n(l,13,0,t.news.time),n(l,15,0,t.news.desc)}))}var f=t("u1LW"),p=t("vCCM"),m=t("TSSN"),C=t("G5Ry"),h=t("Dah5"),_=function(){function n(l,t,e){_classCallCheck(this,n),this.httpSvc=l,this.pageInfoSvc=t,this.translateSvc=e,this.NewsUrl="assets/db/vi/news.json",this.newsLists=[],this.pageInfoSvc.setTitle(this.translateSvc.instant("menu.news"))}return _createClass(n,[{key:"ngOnInit",value:function(){this.getNewsList()}},{key:"getNewsList",value:function(){var n=this;this.httpSvc.get(this.NewsUrl).subscribe((function(l){n.newsLists=l.data}))}}]),n}(),w=t("Tdnt"),O=t("ihqm"),d=e.mb({encapsulation:0,styles:[[".news-list[_ngcontent-%COMP%]{margin-top:25px}"]],data:{}});function M(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,2,"div",[["class","col-lg-12 col-news"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"app-news-simple",[],null,null,null,g,b)),e.nb(2,114688,null,0,a,[r.a],{news:[0,"news"]},null)],(function(n,l){n(l,2,0,l.context.$implicit)}),null)}function P(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-breadcrumb",[],null,null,null,f.b,f.a)),e.nb(1,114688,null,0,p.a,[],null,null),(n()(),e.ob(2,0,null,null,10,"section",[["class","news-list"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,3,"div",[["class","block-title center"]],null,null,null,null,null)),(n()(),e.ob(5,0,null,null,2,"h2",[["class","tt-u main-title tag-line"]],null,null,null,null,null)),(n()(),e.Hb(6,null,["",""])),e.Cb(131072,m.j,[m.k,e.h]),(n()(),e.ob(8,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,M)),e.nb(10,278528,null,0,c.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.ob(11,0,null,null,1,"app-pagination",[],null,null,null,C.b,C.a)),e.nb(12,114688,null,0,h.a,[],null,null)],(function(n,l){var t=l.component;n(l,1,0),n(l,10,0,t.newsLists),n(l,12,0)}),(function(n,l){n(l,6,0,e.Ib(l,6,0,e.Ab(l,7).transform("menu.news")))}))}var x=e.kb("app-news",_,(function(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-news",[],null,null,null,P,d)),e.nb(1,114688,null,0,_,[w.a,O.a,m.k],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),v=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),k=e.mb({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{color:#2b2b2b;font-size:24px;font-weight:700;margin-bottom:10px}@media (max-width:1199.98px){h1[_ngcontent-%COMP%]{font-size:21px}}@media (max-width:767.98px){h1[_ngcontent-%COMP%]{font-size:18px}}time[_ngcontent-%COMP%]{font-size:18px;color:#707070}.content[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px;font-size:16px}@media (max-width:1199.98px){time[_ngcontent-%COMP%]{font-size:16px}.content[_ngcontent-%COMP%]{font-size:15px}}@media (max-width:767.98px){.content[_ngcontent-%COMP%], time[_ngcontent-%COMP%]{font-size:14px}}"]],data:{}});function y(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Hb(1,null,["",""])),(n()(),e.ob(2,0,null,null,1,"time",[],null,null,null,null,null)),(n()(),e.Hb(3,null,["",""])),(n()(),e.ob(4,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){var t=l.component;n(l,1,0,t.content.title),n(l,3,0,t.content.time),n(l,4,0,t.content.content)}))}var z=t("57m3"),S=function(){function n(l){_classCallCheck(this,n),this.httpSvc=l,this.listNewsOthers=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.getNewsList()}},{key:"getNewsList",value:function(){var n=this;this.httpSvc.get("assets/db/vi/news.json").subscribe((function(l){n.listNewsOthers=l.data}))}}]),n}(),N=e.mb({encapsulation:0,styles:[[".title-news-others[_ngcontent-%COMP%]{background:#0028c3;line-height:40px;color:#fff;font-size:14px;text-align:center;text-transform:uppercase}@media (max-width:1024.98px){.title-news-others[_ngcontent-%COMP%]{margin-bottom:20px}}.list-news-others[_ngcontent-%COMP%]   .item-news-others[_ngcontent-%COMP%]{margin-bottom:15px;display:block}.list-news-others[_ngcontent-%COMP%]   .item-news-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{color:#2b2b2b;background:rgba(243,243,243,.5);padding:10px 20px}.list-news-others[_ngcontent-%COMP%]   .item-news-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.list-news-others[_ngcontent-%COMP%]   .item-news-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-size:14px}"]],data:{}});function I(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,11,"div",[["class","col-sm-6 col-lg-12"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,10,"a",[["appIndexNewsItem",""],["class","item-news-others"]],[[1,"target",0],[8,"href",4]],[["window","resize"],[null,"click"]],(function(n,l,t){var u=!0;return"window:resize"===l&&(u=!1!==e.Ab(n,2).onResize()&&u),"click"===l&&(u=!1!==e.Ab(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.nb(2,4210688,null,0,z.a,[e.k],null,null),e.nb(3,671744,null,0,i.p,[i.m,i.a,c.g],{routerLink:[0,"routerLink"]},null),(n()(),e.ob(4,0,null,null,7,"figure",[],null,null,null,null,null)),(n()(),e.ob(5,0,null,null,1,"div",[["class","img"]],null,null,null,null,null)),(n()(),e.ob(6,0,null,null,0,"img",[["alt",""],["class","ofcv"],["srcset",""]],[[8,"src",4]],null,null,null,null)),(n()(),e.ob(7,0,null,null,4,"figcaption",[],null,null,null,null,null)),(n()(),e.ob(8,0,null,null,1,"h3",[["class","lcl lcl-2"]],null,null,null,null,null)),(n()(),e.Hb(9,null,["",""])),(n()(),e.ob(10,0,null,null,1,"time",[],null,null,null,null,null)),(n()(),e.Hb(11,null,["",""]))],(function(n,l){n(l,3,0,l.context.$implicit.url)}),(function(n,l){n(l,1,0,e.Ab(l,3).target,e.Ab(l,3).href),n(l,6,0,e.sb(1,"",l.context.$implicit.img,"")),n(l,9,0,l.context.$implicit.title),n(l,11,0,l.context.$implicit.time)}))}function J(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"div",[["class","title-news-others"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["tin li\xean quan"])),(n()(),e.ob(2,0,null,null,3,"div",[["class","list-news-others"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,I)),e.nb(5,278528,null,0,c.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.listNewsOthers)}),null)}var L=function(){function n(l,t){_classCallCheck(this,n),this.activatedRoute=l,this.httpSvc=t,this.content={}}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.activatedRoute.params.subscribe((function(l){n.httpSvc.get("assets/db/vi/".concat(l.id,".json")).subscribe((function(l){n.content=l.data}))}))}}]),n}(),H=e.mb({encapsulation:0,styles:[[""]],data:{}});function j(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-breadcrumb",[],null,null,null,f.b,f.a)),e.nb(1,114688,null,0,p.a,[],null,null),(n()(),e.ob(2,0,null,null,8,"section",[["class","news-detail pd-70"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.ob(5,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(n()(),e.ob(6,0,null,null,1,"app-news-detail-content",[],null,null,null,y,k)),e.nb(7,114688,null,0,v,[],{content:[0,"content"]},null),(n()(),e.ob(8,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(n()(),e.ob(9,0,null,null,1,"app-news-detail-others",[],null,null,null,J,N)),e.nb(10,114688,null,0,S,[w.a],null,null)],(function(n,l){var t=l.component;n(l,1,0),n(l,7,0,t.content),n(l,10,0)}),null)}var A=e.kb("app-news-detail",L,(function(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-news-detail",[],null,null,null,j,H)),e.nb(1,114688,null,0,L,[i.a,w.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),K=t("PCNd"),T=function n(){_classCallCheck(this,n)};t.d(l,"NewsModuleNgFactory",(function(){return q}));var q=e.lb(u,[],(function(n){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,x,A]],[3,e.j],e.v]),e.yb(4608,c.l,c.k,[e.s,[2,c.u]]),e.yb(4608,m.g,m.f,[]),e.yb(4608,m.c,m.e,[]),e.yb(4608,m.i,m.d,[]),e.yb(4608,m.b,m.a,[]),e.yb(4608,m.k,m.k,[m.l,m.g,m.c,m.i,m.b,m.m,m.n]),e.yb(1073742336,c.b,c.b,[]),e.yb(1073742336,K.a,K.a,[]),e.yb(1073742336,i.q,i.q,[[2,i.v],[2,i.m]]),e.yb(1073742336,m.h,m.h,[]),e.yb(1073742336,s.i,s.i,[]),e.yb(1073742336,T,T,[]),e.yb(1073742336,u,u,[]),e.yb(1024,i.k,(function(){return[[{path:"",pathMatch:"full",component:_},{path:":id/:title",component:L}]]}),[]),e.yb(1024,s.o,(function(){return[[{path:"",pathMatch:"full",component:_},{path:":id/:title",component:L}]]}),[]),e.yb(256,m.n,void 0,[]),e.yb(256,m.m,void 0,[])])}))}}]);