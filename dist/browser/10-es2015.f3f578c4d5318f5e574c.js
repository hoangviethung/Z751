(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{wbMK:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("S8NE");const i={direction:"horizontal",slidesPerView:"auto"};class o{}var a=u("pMnS"),r=u("iInd"),c=u("SVse"),s=u("j+mp");class b{constructor(){this.sliderProductsConfig={slidesPerView:3,slidesPerColumn:2,loop:!1,speed:1200,spaceBetween:20,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1025:{slidesPerView:2},768:{spaceBetween:15,slidesPerView:2,slidesPerColumn:1}}}}setSizeSlideitem(l){const n=l.$wrapperEl[0].querySelectorAll(".swiper-slide");for(let u=0;u<n.length;u++){const l=n[u],t=l.clientWidth,e=l.querySelector(".description");l.querySelector(".img").style.height=`${t/(374/278)}px`,e.setAttribute("data-default-height",e.clientHeight.toString()),e.setAttribute("data-hovered-height",(t/(374/278)).toString());const i=Number(e.getAttribute("data-default-height"));e.style.height=`${i}px`,l.addEventListener("mouseenter",()=>{e.style.height=`${Number(e.getAttribute("data-hovered-height"))}px`}),l.addEventListener("mouseleave",()=>{e.style.height=`${Number(e.getAttribute("data-default-height"))}px`})}}ngOnInit(){}}var p=t.mb({encapsulation:0,styles:[[".slider-products[_ngcontent-%COMP%]{padding:30px 0}.swiper-pagination[_ngcontent-%COMP%]{position:static;padding-top:20px}[_nghost-%COMP%]     .swiper-pagination-bullet{width:12px;height:12px;background-color:rgba(43,43,43,.35);opacity:1}[_nghost-%COMP%]     .swiper-pagination-bullet-active{background-color:#fe0000}"]],data:{}});function d(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,9,"div",[["class","swiper-slide"]],null,null,null,null,null)),(l()(),t.ob(1,0,[["departmentSlide",1]],null,8,"div",[["class","product-item"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.nb(3,671744,null,0,r.q,[r.n,r.a,c.g],{routerLink:[0,"routerLink"]},null),t.Cb(131072,s.j,[s.k,t.h]),t.Bb(5,2),(l()(),t.ob(6,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t.ob(8,0,null,null,1,"div",[["class","description fcc"]],null,null,null,null,null)),(l()(),t.ob(9,0,null,null,0,"h3",[["class","tt-u ta-c"]],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){var u=l(n,5,0,t.Ib(n,3,0,t.Ab(n,4).transform("/products")),n.context.$implicit.Url);l(n,3,0,u)}),(function(l,n){l(n,2,0,t.Ab(n,3).target,t.Ab(n,3).href),l(n,7,0,t.sb(1,"",n.context.$implicit.Image,""),t.sb(1,"",n.context.$implicit.Title,"")),l(n,9,0,n.context.$implicit.Title)}))}function m(l){return t.Jb(0,[t.Fb(671088640,1,{swiperView:0}),(l()(),t.ob(1,0,null,null,6,"div",[["class","slider-products"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,5,"div",[["class","swiper-container"]],null,[[null,"init"],[null,"swiperResize"]],(function(l,n,u){var t=!0,e=l.component;return"init"===n&&(t=!1!==e.setSizeSlideitem(u)&&t),"swiperResize"===n&&(t=!1!==e.setSizeSlideitem(u)&&t),t}),null,null)),t.nb(3,5128192,[[1,4]],0,e.b,[t.z,t.x,t.k,t.r,[2,e.a]],{config:[0,"config"]},{S_INIT:"init"}),(l()(),t.ob(4,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,d)),t.nb(6,278528,null,0,c.i,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(7,0,null,null,0,"div",[["class","swiper-pagination"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,3,0,u.sliderProductsConfig),l(n,6,0,u.products)}),null)}var g=u("TSSN");class h{constructor(l){this.httpSvc=l,this.capacities=[]}ngOnInit(){this.getCapacities()}getCapacities(){this.httpSvc.get("en"==this.currentLanguage?`assets/api/${this.currentLanguage}/capacity/equipment-and-software-supporting-research-and-design.json`:`assets/api/${this.currentLanguage}/capacity/nhom-thiet-bi-gia-cong-ap-luc-va-ket-cau-thep.json`).subscribe(l=>{this.capacities=l.Data.Products})}}var f=u("N+K7"),x=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]     .capacities-list{background-color:#f3f3f3}[_nghost-%COMP%]     .product-col{margin-top:20px}[_nghost-%COMP%]     .item-product{width:100%;background-color:#fff;height:100%}[_nghost-%COMP%]     .item-product figure .img{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16)}[_nghost-%COMP%]     .item-product figure .img img{-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:all .2s ease-in-out}[_nghost-%COMP%]     .item-product .description{padding:10px}[_nghost-%COMP%]     .item-product .description h3{color:#2b2b2b;font-size:16px;width:60%}[_nghost-%COMP%]     .item-product .description p{font-size:12px;color:#fe0000}[_nghost-%COMP%]     .item-product .item-button{-ms-flex-item-align:end;align-self:flex-end}[_nghost-%COMP%]     .item-product .item-button span{font-size:13px;text-decoration:underline;color:#0028c3}@media (max-width:767.98px){[_nghost-%COMP%]     .item-product .description{padding:10px}[_nghost-%COMP%]     .item-product .description h3{-webkit-line-clamp:unset;width:100%}[_nghost-%COMP%]     .item-product .item-button span{display:block;margin-top:7px}}"]],data:{}});function v(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,17,"div",[["class","col-lg-4 col-sm-6 d-f product-col"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,16,"div",[["class","item-product"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,15,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.nb(3,671744,null,0,r.q,[r.n,r.a,c.g],{routerLink:[0,"routerLink"]},null),t.Cb(131072,s.j,[s.k,t.h]),t.Bb(5,3),(l()(),t.ob(6,0,null,null,11,"figure",[],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(l()(),t.ob(8,0,null,null,0,"img",[["class","ofcv"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t.ob(9,0,null,null,8,"figcaption",[["class","description row no-gutters"]],null,null,null,null,null)),(l()(),t.ob(10,0,null,null,3,"div",[["class","item-info col-md"]],null,null,null,null,null)),(l()(),t.ob(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Hb(12,null,["",""])),(l()(),t.ob(13,0,null,null,0,"div",[["class","item-title"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.ob(14,0,null,null,3,"div",[["class","item-button col-md-auto"]],null,null,null,null,null)),(l()(),t.ob(15,0,null,null,2,"span",[["class","text-right"]],null,null,null,null,null)),(l()(),t.Hb(16,null,[""," "])),t.Cb(131072,g.j,[g.k,t.h])],(function(l,n){var u=l(n,5,0,t.Ib(n,3,0,t.Ab(n,4).transform("/capacities")),n.context.$implicit.CategoryUrl,n.context.$implicit.Url);l(n,3,0,u)}),(function(l,n){l(n,2,0,t.Ab(n,3).target,t.Ab(n,3).href),l(n,8,0,t.sb(1,"",n.context.$implicit.Image,""),t.sb(1,"",n.context.$implicit.Title,"")),l(n,12,0,n.context.$implicit.Title),l(n,13,0,n.context.$implicit.Description),l(n,16,0,t.Ib(n,16,0,t.Ab(n,17).transform("ResourceKeys.ViewDetail")))}))}function P(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,9,"section",[["class","capacities-list pd-70"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,4,"div",[["class","block-title"]],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,3,"div",[["class","d-f jc-c"]],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,2,"h2",[["class","tt-u main-title tag-line"]],null,null,null,null,null)),(l()(),t.Hb(5,null,[" "," "])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.ob(7,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.nb(9,278528,null,0,c.i,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,9,0,n.component.capacities)}),(function(l,n){l(n,5,0,t.Ib(n,5,0,t.Ab(n,6).transform("menu.capacities")))}))}function C(l){return t.Jb(0,[(l()(),t.eb(16777216,null,null,1,null,P)),t.nb(1,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.capacities)}),null)}var O=u("lFv8"),w=u("U+pJ"),y=u("cMOJ"),M=u("ydn/");class _{constructor(l,n,u,t,e){this.languageSvc=l,this.pageSvc=n,this.activatedRoute=u,this.httpSvc=t,this.breadcrumbSvc=e,this.Breadcrumb={en:["Home","Departments"],vi:["Trang ch\u1ee7","\u0110\u01a1n v\u1ecb th\xe0nh vi\xean"]},this.currentLanguage=this.languageSvc.getCurrentLanguage()}ngOnInit(){this.getProducts()}getProducts(){this.activatedRoute.params.subscribe(l=>{let n={en:["Home","Departments"],vi:["Trang ch\u1ee7","\u0110\u01a1n v\u1ecb th\xe0nh vi\xean"]};this.breadcrumbSvc.setBreadcrumb(this.Breadcrumb),this.httpSvc.get(`assets/api/${this.currentLanguage}/department/${l.departmentCategory}.json`).subscribe(l=>{this.pageSvc.setTitle(l.Data.Title),this.title=l.Data.Title,this.image=l.Data.Image,this.description=l.Data.Description,this.address=l.Data.Information.Address,this.workTime=l.Data.Information.WorkTime,this.designProducts=l.Data.Products.DesignProducts,this.prepairProducts=l.Data.Products.PrepairProducts,n[this.currentLanguage].push(l.Data.Title),this.breadcrumbs=n[this.currentLanguage]})})}}var k=u("kyOO"),S=u("6hQ8"),I=u("tLN8"),L=t.mb({encapsulation:0,styles:[['[_nghost-%COMP%]     .department{padding:30px 0}[_nghost-%COMP%]     .dpm-content .main-title{margin-bottom:20px}[_nghost-%COMP%]     .dpm-content .text p{font-size:18px}[_nghost-%COMP%]     .dpm-content .text p+p{margin-top:15px}@media (max-width:1199.98px){[_nghost-%COMP%]     .dpm-content .text p{font-size:16px}}@media (max-width:767.98px){[_nghost-%COMP%]     .dpm-content .text p{font-size:14px}}[_nghost-%COMP%]     .dpm-content .img{text-align:center}[_nghost-%COMP%]     .dpm-products{padding:30px 0}[_nghost-%COMP%]     .dpm-products .content .main-title{margin-bottom:0}@media (max-width:1024.98px){[_nghost-%COMP%]     .dpm-content .img{margin-top:15px}[_nghost-%COMP%]     .dpm-products{padding-top:0}}[_nghost-%COMP%]     .form-contact .information{max-width:415px;width:100%;margin:0 auto;color:#2b2b2b}[_nghost-%COMP%]     .form-contact .information h3{text-transform:uppercase;font-size:18px;margin-bottom:18px}[_nghost-%COMP%]     .form-contact .information p{font-size:18px}[_nghost-%COMP%]     .form-contact .information p+p{margin-top:10px}[_nghost-%COMP%]     .form-contact .information hr{display:block;margin:25px 0}@media (max-width:1199.98px){[_nghost-%COMP%]     .form-contact .information h3, [_nghost-%COMP%]     .form-contact .information p{font-size:16px}}@media (max-width:767.98px){[_nghost-%COMP%]     .form-contact .information h3, [_nghost-%COMP%]     .form-contact .information p{font-size:14px}}.breadcrumb-wrapper[_ngcontent-%COMP%]{margin-top:20px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style-type:none}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:#888}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{font-size:10px;content:">";color:#888;margin:0 10px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{color:#2b2b2b;text-decoration:underline}@media (max-width:1199.98px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:8px 0}}@media (max-width:1024.98px){[_nghost-%COMP%]     .form-contact .information{margin-top:30px}.breadcrumb-wrapper[_ngcontent-%COMP%]{display:none}}@media (max-width:768px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:5px 0}}']],data:{}});function T(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.Hb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function j(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"app-department-products",[],null,null,null,m,p)),t.nb(3,114688,null,0,b,[],{products:[0,"products"]},null)],(function(l,n){l(n,3,0,n.component.designProducts)}),null)}function A(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"app-department-products",[],null,null,null,m,p)),t.nb(3,114688,null,0,b,[],{products:[0,"products"]},null)],(function(l,n){l(n,3,0,n.component.prepairProducts)}),null)}function z(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,4,"div",[["class","breadcrumb-wrapper"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,2,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,T)),t.nb(4,278528,null,0,c.i,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ob(5,0,null,null,16,"section",[["class","department"]],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,3,"div",[["class","block-title text-center"]],null,null,null,null,null)),(l()(),t.ob(8,0,null,null,2,"div",[["class","d-f jc-c"]],null,null,null,null,null)),(l()(),t.ob(9,0,null,null,1,"h1",[["class","tt-u main-title mb-0"]],null,null,null,null,null)),(l()(),t.Hb(10,null,["",""])),(l()(),t.ob(11,0,null,null,10,"div",[["class","dpm-content"]],null,null,null,null,null)),(l()(),t.ob(12,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(13,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.ob(14,0,null,null,2,"h2",[["class","main-title tag-line tt-u"]],null,null,null,null,null)),(l()(),t.Hb(15,null,[" "," "])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.ob(17,0,null,null,1,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.ob(18,0,null,null,0,"div",[["class","text"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.ob(19,0,null,null,2,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.ob(20,0,null,null,1,"div",[["class","img"]],null,null,null,null,null)),(l()(),t.ob(21,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.ob(22,0,null,null,17,"section",[["class","dpm-products"]],null,null,null,null,null)),(l()(),t.ob(23,0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(24,0,null,null,3,"div",[["class","block-title center"]],null,null,null,null,null)),(l()(),t.ob(25,0,null,null,2,"h2",[["class","main-title tt-u mb-0"]],null,null,null,null,null)),(l()(),t.Hb(26,null,[" "," "])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.ob(28,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.ob(29,0,null,null,2,"h2",[["class","main-title tt-u tag-line"]],null,null,null,null,null)),(l()(),t.Hb(30,null,[" "," "])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.eb(16777216,null,null,1,null,j)),t.nb(33,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(34,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.ob(35,0,null,null,2,"h2",[["class","main-title tt-u tag-line"]],null,null,null,null,null)),(l()(),t.Hb(36,null,[" "," "])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.eb(16777216,null,null,1,null,A)),t.nb(39,16384,null,0,c.j,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(40,0,null,null,1,"app-department-capacity",[],null,null,null,C,x)),t.nb(41,114688,null,0,h,[f.a],{currentLanguage:[0,"currentLanguage"]},null),(l()(),t.ob(42,0,null,null,1,"app-index-news",[],null,null,null,O.b,O.a)),t.nb(43,114688,null,0,w.a,[f.a],{currentLanguage:[0,"currentLanguage"]},null),(l()(),t.ob(44,0,null,null,18,"section",[["class","form-contact pd-70"]],null,null,null,null,null)),(l()(),t.ob(45,0,null,null,17,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(46,0,null,null,2,"div",[["class","block-title text-center"]],null,null,null,null,null)),(l()(),t.ob(47,0,null,null,1,"h2",[["class","main-title tt-u"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Li\xean h\u1ec7"])),(l()(),t.ob(49,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(50,0,null,null,2,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.ob(51,0,null,null,1,"app-form-contact",[],null,null,null,y.b,y.a)),t.nb(52,114688,null,0,M.a,[],null,null),(l()(),t.ob(53,0,null,null,9,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.ob(54,0,null,null,8,"div",[["class","information"]],null,null,null,null,null)),(l()(),t.ob(55,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Hb(56,null,["",""])),(l()(),t.ob(57,0,null,null,0,"div",[["class","text"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.ob(58,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.ob(59,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),t.Hb(60,null,["",""])),t.Cb(131072,g.j,[g.k,t.h]),(l()(),t.ob(62,0,null,null,0,"div",[["class","text"]],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){var u=n.component;l(n,4,0,u.breadcrumbs),l(n,33,0,u.designProducts),l(n,39,0,u.prepairProducts),l(n,41,0,u.currentLanguage),l(n,43,0,u.currentLanguage),l(n,52,0)}),(function(l,n){var u=n.component;l(n,10,0,u.title),l(n,15,0,t.Ib(n,15,0,t.Ab(n,16).transform("menu.about"))),l(n,18,0,u.description),l(n,21,0,t.sb(1,"",u.image,"")),l(n,26,0,t.Ib(n,26,0,t.Ab(n,27).transform("ResourceKeys.Products"))),l(n,30,0,t.Ib(n,30,0,t.Ab(n,31).transform("ResourceKeys.DesignDevelope"))),l(n,36,0,t.Ib(n,36,0,t.Ab(n,37).transform("ResourceKeys.MaintenanceRepair"))),l(n,56,0,u.title),l(n,57,0,u.address),l(n,60,0,t.Ib(n,60,0,t.Ab(n,61).transform("ResourceKeys.WorkTime"))),l(n,62,0,u.workTime)}))}function K(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"app-department",[],null,null,null,z,L)),t.nb(1,114688,null,0,_,[k.a,S.a,r.a,f.a,I.a],null,null)],(function(l,n){l(n,1,0)}),null)}var H=t.kb("app-department",_,K,{},{},[]),$=u("IheW"),D=u("PCNd");class N{}u.d(n,"DepartmentModuleNgFactory",(function(){return J}));var J=t.lb(o,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[a.a,H]],[3,t.j],t.v]),t.yb(4608,c.l,c.k,[t.s,[2,c.u]]),t.yb(4608,$.j,$.p,[c.c,t.z,$.n]),t.yb(4608,$.q,$.q,[$.j,$.o]),t.yb(5120,$.a,(function(l){return[l]}),[$.q]),t.yb(4608,$.m,$.m,[]),t.yb(6144,$.k,null,[$.m]),t.yb(4608,$.i,$.i,[$.k]),t.yb(6144,$.b,null,[$.i]),t.yb(4608,$.f,$.l,[$.b,t.p]),t.yb(4608,$.c,$.c,[$.f]),t.yb(4608,I.a,I.a,[k.a]),t.yb(135680,e.b,e.b,[t.z,t.x,t.k,t.r,[2,e.a]]),t.yb(1073742336,c.b,c.b,[]),t.yb(1073742336,r.r,r.r,[[2,r.w],[2,r.n]]),t.yb(1073742336,$.e,$.e,[]),t.yb(1073742336,$.d,$.d,[]),t.yb(1073742336,g.h,g.h,[]),t.yb(1073742336,s.i,s.i,[]),t.yb(1073742336,e.c,e.c,[]),t.yb(1073742336,D.a,D.a,[]),t.yb(1073742336,N,N,[]),t.yb(1073742336,o,o,[]),t.yb(256,$.n,"XSRF-TOKEN",[]),t.yb(256,$.o,"X-XSRF-TOKEN",[]),t.yb(1024,r.l,(function(){return[[{path:":departmentCategory",component:_}]]}),[]),t.yb(1024,s.o,(function(){return[[{path:":departmentCategory",component:_}]]}),[]),t.yb(256,e.a,i,[])])}))}}]);