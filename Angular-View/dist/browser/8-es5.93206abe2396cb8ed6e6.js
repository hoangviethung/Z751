function _defineProperties(l,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8Ro9":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=function l(){_classCallCheck(this,l)},r=t("pMnS"),o=t("iInd"),i=t("SVse"),a=t("j+mp"),c=t("TSSN"),s=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),p=e.mb({encapsulation:0,styles:[["[_nghost-%COMP%]     .item-product{background-color:rgba(243,243,243,.5);height:100%;width:100%}[_nghost-%COMP%]     .item-product figure .img{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16)}[_nghost-%COMP%]     .item-product figure .img img{-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:all .2s ease-in-out}[_nghost-%COMP%]     .item-product .description{padding:10px}[_nghost-%COMP%]     .item-product .description h3{color:#2b2b2b;font-size:16px;width:60%}[_nghost-%COMP%]     .item-product .description p{font-size:12px;color:#fe0000}[_nghost-%COMP%]     .item-product .item-button{-ms-flex-item-align:end;align-self:flex-end}[_nghost-%COMP%]     .item-product .item-button span{font-size:13px;text-decoration:underline;color:#0028c3}@media (max-width:767.98px){[_nghost-%COMP%]     .item-product .description{padding:10px}[_nghost-%COMP%]     .item-product .description h3{-webkit-line-clamp:unset;width:100%}[_nghost-%COMP%]     .item-product .item-button span{display:block;margin-top:7px}}"]],data:{}});function d(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,16,"div",[["class","item-product"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,15,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ab(l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.nb(2,671744,null,0,o.q,[o.n,o.a,i.g],{routerLink:[0,"routerLink"]},null),e.Cb(131072,a.j,[a.k,e.h]),e.Bb(4,3),(l()(),e.ob(5,0,null,null,11,"figure",[],null,null,null,null,null)),(l()(),e.ob(6,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,0,"img",[["class","ofcv"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.ob(8,0,null,null,8,"figcaption",[["class","description row no-gutters"]],null,null,null,null,null)),(l()(),e.ob(9,0,null,null,3,"div",[["class","item-info col-md"]],null,null,null,null,null)),(l()(),e.ob(10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(11,null,["",""])),(l()(),e.ob(12,0,null,null,0,"div",[["class","item-title"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.ob(13,0,null,null,3,"div",[["class","item-button col-md-auto"]],null,null,null,null,null)),(l()(),e.ob(14,0,null,null,2,"span",[["class","text-right"]],null,null,null,null,null)),(l()(),e.Hb(15,null,[""," "])),e.Cb(131072,c.j,[c.k,e.h])],(function(l,n){var t=n.component,u=l(n,4,0,e.Ib(n,2,0,e.Ab(n,3).transform("/capacities")),t.capacity.CategoryUrl,t.capacity.Url);l(n,2,0,u)}),(function(l,n){var t=n.component;l(n,1,0,e.Ab(n,2).target,e.Ab(n,2).href),l(n,7,0,e.sb(1,"",t.capacity.Image,""),e.sb(1,"",t.capacity.Title,"")),l(n,11,0,t.capacity.Title),l(n,12,0,t.capacity.Description),l(n,15,0,e.Ib(n,15,0,e.Ab(n,16).transform("ResourceKeys.ViewDetail")))}))}var b=t("G5Ry"),g=t("Dah5"),m=function(){function l(n,t,e,u){_classCallCheck(this,l),this.activatedRoute=n,this.httpSvc=t,this.pageInfoSvc=e,this.languageSvc=u,this.capacities=[],this.Breadcrumb={en:["Home","Capacities"],vi:["Trang ch\u1ee7","N\u0103ng l\u1ef1c"]}}return _createClass(l,[{key:"ngOnInit",value:function(){this.currentLanguage=this.languageSvc.getCurrentLanguage(),this.getCapacities()}},{key:"getCapacities",value:function(){var l=this;this.activatedRoute.params.subscribe((function(n){var t={en:["Home","Capacities"],vi:["Trang ch\u1ee7","N\u0103ng l\u1ef1c"]};l.httpSvc.get("assets/api/".concat(l.currentLanguage,"/capacity/").concat(n.capacityCategory,".json")).subscribe((function(n){l.pageInfoSvc.setTitle(n.data.Title),l.title=n.data.Title,l.capacities=n.data.Products,t[l.currentLanguage].push(n.data.Title),l.breadcrumbs=t[l.currentLanguage]}))}))}}]),l}(),h=t("N+K7"),f=t("6hQ8"),C=t("kyOO"),P=e.mb({encapsulation:0,styles:[['.product-list[_ngcontent-%COMP%]{padding:30px 0}.product-list[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{margin-bottom:50px}.product-list[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{margin-bottom:15px}@media (max-width:1199.98px){.product-list[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{margin-bottom:35px}}@media (max-width:767.98px){.product-list[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{margin-bottom:20px}}.product-list[_ngcontent-%COMP%]   .product-col[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:25px}.breadcrumb-wrapper[_ngcontent-%COMP%]{margin-top:20px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style-type:none}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:#888}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{font-size:10px;content:">";color:#888;margin:0 10px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{color:#2b2b2b;text-decoration:underline}@media (max-width:1199.98px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:8px 0}}@media (max-width:1024.98px){.breadcrumb-wrapper[_ngcontent-%COMP%]{display:none}}@media (max-width:768px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:5px 0}}']],data:{}});function x(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e.Hb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function O(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[["class","col-lg-4 col-sm-6 d-f product-col"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"app-capacity-simple",[],null,null,null,d,p)),e.nb(2,114688,null,0,s,[],{capacity:[0,"capacity"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function w(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,10,"section",[["class","product-list"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,3,"div",[["class","block-title"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,2,"div",[["class","d-f jc-c"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,1,"h2",[["class","tt-u main-title tag-line"]],null,null,null,null,null)),(l()(),e.Hb(5,null,["",""])),(l()(),e.ob(6,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,O)),e.nb(8,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(9,0,null,null,1,"app-pagination",[],null,null,null,b.b,b.a)),e.nb(10,114688,null,0,g.a,[],null,null)],(function(l,n){l(n,8,0,n.component.capacities),l(n,10,0)}),(function(l,n){l(n,5,0,n.component.title)}))}function _(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,4,"div",[["class","breadcrumb-wrapper"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,2,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,x)),e.nb(4,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,null,1,null,w)),e.nb(6,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,t.breadcrumbs),l(n,6,0,t.capacities)}),null)}var v=e.kb("app-capacity",m,(function(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"app-capacity",[],null,null,null,_,P)),e.nb(1,114688,null,0,m,[o.a,h.a,f.a,C.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=t("S8NE"),M=function(){function l(n){_classCallCheck(this,l),this.httpSvc=n,this.productOthers=[],this.sliderProductOthers={slidesPerView:3,loop:!0,speed:1200,spaceBetween:38,observer:!0,observeParents:!0,autoplay:{delay:2e3},navigation:{nextEl:".slider-product-others .swiper-button-next",prevEl:".slider-product-others .swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:15},575:{slidesPerView:1}}}}return _createClass(l,[{key:"ngOnInit",value:function(){this.getProductOthers()}},{key:"getProductOthers",value:function(){var l=this;this.httpSvc.get("assets/api/".concat(this.currentLanguage,"/capacity/").concat(this.routeParamUrl,".json")).subscribe((function(n){l.productOthers=n.data.Products}))}}]),l}(),k=e.mb({encapsulation:0,styles:[['.product-others[_ngcontent-%COMP%]{position:relative;background:rgba(243,243,243,.5);padding:40px 0;margin-top:30px}.product-others[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{margin-bottom:30px}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]{position:relative;padding:0 60px}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{padding:8px;background:#fff;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16)}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{margin-top:15px}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#707070}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{width:38px;height:38px;background-size:cover}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after, .product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after{content:"";background-size:cover;width:100%;height:100%}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{left:0;background-image:url(/assets/images/icons/prev-slider-reward.svg)}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{right:0;background-image:url(/assets/images/icons/next-slider-reward.svg)}@media (max-width:1024.98px){.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]{padding:0 55px}.product-others[_ngcontent-%COMP%]{padding:20px 0;margin-top:15px}}@media (max-width:767.98px){.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]{padding:0}.product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .product-others[_ngcontent-%COMP%]   .slider-product-others[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{display:none}}']],data:{}});function S(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[["class","swiper-slide"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"app-capacity-simple",[],null,null,null,d,p)),e.nb(2,114688,null,0,s,[],{capacity:[0,"capacity"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function j(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,13,"section",[["class","product-others pd-70"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,12,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,3,"div",[["class","block-title center"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,2,"div",[["class","main-title fw-700 tt-u txt-d-under"]],null,null,null,null,null)),(l()(),e.Hb(4,null,[" "," "])),e.Cb(131072,c.j,[c.k,e.h]),(l()(),e.ob(6,0,null,null,7,"div",[["class","slider-product-others"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,4,"div",[["class","swiper-container pb-10"]],null,null,null,null,null)),e.nb(8,5128192,null,0,y.b,[e.z,e.x,e.k,e.r,[2,y.a]],{config:[0,"config"]},null),(l()(),e.ob(9,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,S)),e.nb(11,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(12,0,null,null,0,"div",[["class","swiper-button-next"]],null,null,null,null,null)),(l()(),e.ob(13,0,null,null,0,"div",[["class","swiper-button-prev"]],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,8,0,t.sliderProductOthers),l(n,11,0,t.productOthers)}),(function(l,n){l(n,4,0,e.Ib(n,4,0,e.Ab(n,5).transform("ResourceKeys.ProductLine")))}))}var L=t("mrSG"),I=function(){function l(n,t,e,u){_classCallCheck(this,l),this.activatedRoute=n,this.languageSvc=t,this.httpSvc=e,this.pageSvc=u,this.Breadcrumb={en:["Home","Capacities"],vi:["Trang ch\u1ee7","N\u0103ng l\u1ef1c"]},this.thumbsSliderConfig={direction:"vertical",spaceBetween:20,slidesPerView:3,loop:!0,observer:!0,observeParents:!0,slideToClickedSlide:!0,navigation:{nextEl:".preview-img-wrapper .swiper-button-next",prevEl:".preview-img-wrapper .swiper-button-prev"},breakpoints:{575:{spaceBetween:10,direction:"horizontal"}}},this.previewSliderConfig={simulateTouch:!1,speed:500,effect:"fade",fadeEffect:{crossFade:!0},loopedSlides:5,navigation:{nextEl:".preview-img-wrapper .swiper-button-next",prevEl:".preview-img-wrapper .swiper-button-prev"}},this.currentLanguage=this.languageSvc.getCurrentLanguage()}return _createClass(l,[{key:"ngOnInit",value:function(){this.fetchProductCategory(),this.getProductDetail()}},{key:"getProductDetail",value:function(){var l=this;this.activatedRoute.params.subscribe((function(n){return L.a(l,void 0,void 0,regeneratorRuntime.mark((function l(){var t,e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return this.productCategoryUrl=n.capacityCategory,t={en:["Home","Capacities"],vi:["Trang ch\u1ee7","N\u0103ng l\u1ef1c"]},l.next=4,this.httpSvc.get("assets/api/".concat(this.currentLanguage,"/capacity/").concat(this.productCategoryUrl,".json")).subscribe((function(l){t[e.currentLanguage].push(l.data.Title),e.breadcrumbs=t[e.currentLanguage]}));case 4:return l.next=6,this.httpSvc.get("assets/api/".concat(this.currentLanguage,"/capacity/capacity-detail.json")).subscribe((function(l){e.product=l.data,e.pageSvc.setTitle(e.product.Title),t[e.currentLanguage].push(l.data.Title),e.breadcrumbs=t[e.currentLanguage]}));case 6:case"end":return l.stop()}}),l,this)})))}))}},{key:"fetchProductCategory",value:function(){var l=this;this.httpSvc.get("assets/api/".concat(this.currentLanguage,"/capacity/categories-capacity.json")).subscribe((function(n){l.productCategory=n.data}))}},{key:"changeBigSlider",value:function(l){var n=Number(function l(n){return Array.from(n.classList).includes("swiper-slide")?n:l(n.parentElement)}(l.target).getAttribute("data-swiper-slide-index"));this.previewSlider.setIndex(n)}}]),l}(),K=e.mb({encapsulation:0,styles:[['[_nghost-%COMP%]     .product-detail{margin-top:25px}[_nghost-%COMP%]     .product-detail .product-summary{margin-bottom:80px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct{padding-right:55px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-slide .img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:all .2s ease-in-out}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-next, [_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-prev{position:absolute;top:unset;bottom:-30px;width:20px;height:20px;background-size:cover}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-prev{left:90%;background-image:url(/assets/images/icons/prev-slider-reward.svg)}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-next{right:0;background-image:url(/assets/images/icons/next-slider-reward.svg)}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-container{max-height:345px;height:100%}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-slide .img{cursor:pointer;position:relative;opacity:.5;-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s all ease-in-out}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-slide .img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-slide .img:after{content:"";position:absolute;bottom:-5px;left:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:50%;height:1px;background:#0028c3}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-slide.swiper-slide-active .img{opacity:1;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.5);box-shadow:0 3px 6px rgba(0,0,0,.5)}[_nghost-%COMP%]     .product-detail .product-summary .social-media{margin-top:10px}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul{position:relative;padding-right:80px;-ms-flex-item-align:center;align-self:center}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul li{margin-right:15px}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul li>a svg path{fill:#707070}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul li:last-child{margin-right:0}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul:before{content:"";position:absolute;top:54%;right:35px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:32px;height:1px;background:rgba(112,112,112,.5)}[_nghost-%COMP%]     .product-detail .product-summary .social-media ul:after{content:"Share";position:absolute;top:50%;right:0;font-size:10px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}[_nghost-%COMP%]     .product-detail .product-summary .product-info .block-title .main-title{padding:0!important}[_nghost-%COMP%]     .product-detail .product-summary .product-info .block-title .tag-line{display:block;width:65px;height:2px;background-color:#fe0000;margin-left:0}[_nghost-%COMP%]     .product-detail .product-summary .product-info .desc{margin-top:30px}[_nghost-%COMP%]     .product-detail .product-summary .button-contact{margin-top:30px}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .list-tab .item{padding:10px 50px;cursor:pointer;background:#fff;border:1px solid #f3f3f3;color:#fe0000;text-transform:uppercase}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .list-tab .item.active{background:rgba(243,243,243,.5)}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .tab-content{padding:25px 50px;background:rgba(243,243,243,.5)}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .desc p+p{margin-top:15px}[_nghost-%COMP%]     .product-detail .aside-category .title-aside{position:relative;background:#0028c3;line-height:50px;padding:0 50px}[_nghost-%COMP%]     .product-detail .aside-category .title-aside:after{content:"";position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:20px;width:16px;height:12px;background-image:url(/assets/images/icons/list.svg)}[_nghost-%COMP%]     .product-detail .aside-category .list-item{background:rgba(243,243,243,.5)}[_nghost-%COMP%]     .product-detail .aside-category .list-item .item{padding:15px 0;margin:0 20px;border-bottom:1px solid #dfdfdf}[_nghost-%COMP%]     .product-detail .aside-category .list-item .item:last-child{border-bottom:0}@media (max-width:1024.98px){[_nghost-%COMP%]     .product-detail .product-summary{margin-bottom:30px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct{padding-right:0}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-next, [_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper .swiper-button-prev{display:none}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-container{max-height:414px}[_nghost-%COMP%]     .product-detail .product-summary .social-media{display:none}[_nghost-%COMP%]     .product-detail .product-summary .product-info .desc{height:unset;margin-top:15px}[_nghost-%COMP%]     .product-detail .product-summary .button-contact{margin-top:15px}[_nghost-%COMP%]     .product-detail .product-summary .button-contact .jc-fe{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}[_nghost-%COMP%]     .product-detail .infoDetail-comments{margin-bottom:30px}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .tab-content{padding:25px}.breadcrumb-wrapper[_ngcontent-%COMP%]{display:none}}@media (max-width:767.98px){[_nghost-%COMP%]     .product-detail .product-summary{margin-bottom:15px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct{margin-bottom:15px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .preview-img-wrapper{margin-bottom:10px}[_nghost-%COMP%]     .product-detail .product-summary .slider-imgProduct .gallery-thumbs-wrapper .swiper-container{max-height:unset}[_nghost-%COMP%]     .product-detail .product-summary .product-info .desc{margin-top:15px}[_nghost-%COMP%]     .product-detail .product-summary .button-contact{margin-top:15px}[_nghost-%COMP%]     .product-detail .product-summary .button-contact .jc-fe{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .list-tab .item{font-size:14px;line-height:35px}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .list-tab .item.active{background:rgba(243,243,243,.5)}[_nghost-%COMP%]     .product-detail .infoDetail-comments .tab-container .tab-content{padding:15px;background:rgba(243,243,243,.5)}[_nghost-%COMP%]     .product-detail .aside-category .list-item .item{font-size:13px}}.breadcrumb-wrapper[_ngcontent-%COMP%]{margin-top:20px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style-type:none}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:#888}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{font-size:10px;content:">";color:#888;margin:0 10px}.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{color:#2b2b2b;text-decoration:underline}@media (max-width:1199.98px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:8px 0}}@media (max-width:768px){.breadcrumb-wrapper[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:5px 0}}']],data:{}});function T(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e.Hb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function N(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[["class","swiper-slide"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,e.sb(1,"",n.context.$implicit.Image,""))}))}function F(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,2,"div",[["class","swiper-slide"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,1,"div",[["class","img ov-h"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,e.sb(1,"",n.context.$implicit.Image,""))}))}function H(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,5,"li",[["class","item"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ab(l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.nb(2,671744,null,0,o.q,[o.n,o.a,i.g],{routerLink:[0,"routerLink"]},null),e.Cb(131072,a.j,[a.k,e.h]),e.Bb(4,2),(l()(),e.Hb(5,null,["",""]))],(function(l,n){var t=l(n,4,0,e.Ib(n,2,0,e.Ab(n,3).transform("/products")),n.context.$implicit.Url);l(n,2,0,t)}),(function(l,n){l(n,1,0,e.Ab(n,2).target,e.Ab(n,2).href),l(n,5,0,n.context.$implicit.Title)}))}function A(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,60,"section",[["class","product-detail"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,59,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,41,"div",[["class","row product-summary"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,23,"div",[["class","col-lg-7"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,14,"div",[["appSetHeightSlider",""],["class","row slider-imgProduct"]],null,null,null,null,null)),(l()(),e.ob(5,0,null,null,7,"div",[["class","preview-img-wrapper col-md-9"]],null,null,null,null,null)),(l()(),e.ob(6,0,[["previewSlider",1]],null,4,"div",[["class","swiper-container"]],null,null,null,null,null)),e.nb(7,5128192,[[1,4],[2,4]],0,y.b,[e.z,e.x,e.k,e.r,[2,y.a]],{config:[0,"config"]},null),(l()(),e.ob(8,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,N)),e.nb(10,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(11,0,null,null,0,"div",[["class","swiper-button-next"]],null,null,null,null,null)),(l()(),e.ob(12,0,null,null,0,"div",[["class","swiper-button-prev"]],null,null,null,null,null)),(l()(),e.ob(13,0,null,null,5,"div",[["class","gallery-thumbs-wrapper col-md-3"]],null,null,null,null,null)),(l()(),e.ob(14,0,[["thumbsSlider",1]],null,4,"div",[["class","swiper-container"]],null,[[null,"swiperClick"]],(function(l,n,t){var e=!0;return"swiperClick"===n&&(e=!1!==l.component.changeBigSlider(t)&&e),e}),null,null)),e.nb(15,5128192,[[1,4],[2,4]],0,y.b,[e.z,e.x,e.k,e.r,[2,y.a]],{config:[0,"config"]},{S_CLICK:"swiperClick"}),(l()(),e.ob(16,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,F)),e.nb(18,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(19,0,null,null,7,"div",[["class","social-media"]],null,null,null,null,null)),(l()(),e.ob(20,0,null,null,6,"ul",[["class","d-if lst-n pl-0"]],null,null,null,null,null)),(l()(),e.ob(21,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ob(22,0,null,null,1,"a",[["class","ico-facebook"],["href","https://facebook.com"],["rel","noreferrer"],["target","_blank"]],null,null,null,null,null)),(l()(),e.ob(23,0,null,null,0,"img",[["alt",""],["src","assets/images/icons/facebook-2.svg"]],null,null,null,null,null)),(l()(),e.ob(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ob(25,0,null,null,1,"a",[["class","ico-twitter"],["href","https://twitter.com"],["rel","noreferrer"],["target","_blank"]],null,null,null,null,null)),(l()(),e.ob(26,0,null,null,0,"img",[["alt",""],["src","assets/images/icons/twitter-2.svg"]],null,null,null,null,null)),(l()(),e.ob(27,0,null,null,16,"div",[["class","col-lg-5"]],null,null,null,null,null)),(l()(),e.ob(28,0,null,null,7,"div",[["class","product-info"]],null,null,null,null,null)),(l()(),e.ob(29,0,null,null,5,"div",[["class","block-title"]],null,null,null,null,null)),(l()(),e.ob(30,0,null,null,1,"h1",[["class","tt-u main-title mb-0"]],null,null,null,null,null)),(l()(),e.Hb(31,null,[" "," "])),(l()(),e.ob(32,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),e.Hb(33,null,[" "," "])),(l()(),e.ob(34,0,null,null,0,"hr",[["class","tag-line"]],null,null,null,null,null)),(l()(),e.ob(35,0,null,null,0,"div",[["class","desc"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.ob(36,0,null,null,7,"div",[["class","button-contact"]],null,null,null,null,null)),(l()(),e.ob(37,0,null,null,6,"div",[["class","btn-wrapper d-f jc-fe"]],null,null,null,null,null)),(l()(),e.ob(38,0,null,null,5,"a",[["class","btn-red btn-viewmore tt-u h-47"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ab(l,39).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e.nb(39,671744,null,0,o.q,[o.n,o.a,i.g],{routerLink:[0,"routerLink"]},null),e.Cb(131072,a.j,[a.k,e.h]),e.Bb(41,1),(l()(),e.Hb(42,null,[" ",""])),e.Cb(131072,c.j,[c.k,e.h]),(l()(),e.ob(44,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.ob(45,0,null,null,8,"div",[["class","col-lg-9 infoDetail-comments"]],null,null,null,null,null)),(l()(),e.ob(46,0,null,null,7,"div",[["class","tab-container"]],null,null,null,null,null)),(l()(),e.ob(47,0,null,null,3,"ul",[["class","list-tab d-f lst-n pl-0"]],null,null,null,null,null)),(l()(),e.ob(48,0,null,null,2,"li",[["class","item w-100"]],null,null,null,null,null)),(l()(),e.Hb(49,null,[" "," "])),e.Cb(131072,c.j,[c.k,e.h]),(l()(),e.ob(51,0,null,null,2,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),e.ob(52,0,null,null,1,"div",[["class","content"],["tab-id","item-1"]],null,null,null,null,null)),(l()(),e.ob(53,0,null,null,0,"div",[["class","desc"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.ob(54,0,null,null,6,"div",[["class","col-lg-3 aside-category"]],null,null,null,null,null)),(l()(),e.ob(55,0,null,null,2,"div",[["class","title-aside tt-u cl-white"]],null,null,null,null,null)),(l()(),e.Hb(56,null,[" "," "])),e.Cb(131072,c.j,[c.k,e.h]),(l()(),e.ob(58,0,null,null,2,"ul",[["class","list-item lst-n pl-0"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,H)),e.nb(60,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,7,0,t.previewSliderConfig),l(n,10,0,t.product.Images),l(n,15,0,t.thumbsSliderConfig),l(n,18,0,t.product.Images);var u=l(n,41,0,e.Ib(n,39,0,e.Ab(n,40).transform("/news")));l(n,39,0,u),l(n,60,0,t.productCategory)}),(function(l,n){var t=n.component;l(n,31,0,t.product.Title),l(n,33,0,t.product.SubTitle),l(n,35,0,t.product.Description),l(n,38,0,e.Ab(n,39).target,e.Ab(n,39).href),l(n,42,0,e.Ib(n,42,0,e.Ab(n,43).transform("ResourceKeys.ContactNow"))),l(n,49,0,e.Ib(n,49,0,e.Ab(n,50).transform("ResourceKeys.ProductInformation"))),l(n,53,0,t.product.Content),l(n,56,0,e.Ib(n,56,0,e.Ab(n,57).transform("ResourceKeys.ProductCategory")))}))}function z(l){return e.Jb(0,[e.Fb(671088640,1,{thumbsSlider:0}),e.Fb(671088640,2,{previewSlider:0}),(l()(),e.ob(2,0,null,null,4,"div",[["class","breadcrumb-wrapper"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ob(4,0,null,null,2,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,T)),e.nb(6,278528,null,0,i.i,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,null,1,null,A)),e.nb(8,16384,null,0,i.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.ob(9,0,null,null,1,"app-capacity-others",[],null,null,null,j,k)),e.nb(10,114688,null,0,M,[h.a],{currentLanguage:[0,"currentLanguage"],routeParamUrl:[1,"routeParamUrl"]},null)],(function(l,n){var t=n.component;l(n,6,0,t.breadcrumbs),l(n,8,0,t.product),l(n,10,0,t.currentLanguage,t.productCategoryUrl)}),null)}var J=e.kb("app-capacity-detail",I,(function(l){return e.Jb(0,[(l()(),e.ob(0,0,null,null,1,"app-capacity-detail",[],null,null,null,z,K)),e.nb(1,114688,null,0,I,[o.a,C.a,h.a,f.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),D=t("IheW"),R=t("tLN8"),q=function l(){_classCallCheck(this,l)},Y=t("PCNd");t.d(n,"CapacityModuleNgFactory",(function(){return E}));var E=e.lb(u,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[r.a,v,J]],[3,e.j],e.v]),e.yb(4608,i.l,i.k,[e.s,[2,i.u]]),e.yb(4608,D.j,D.p,[i.c,e.z,D.n]),e.yb(4608,D.q,D.q,[D.j,D.o]),e.yb(5120,D.a,(function(l){return[l]}),[D.q]),e.yb(4608,D.m,D.m,[]),e.yb(6144,D.k,null,[D.m]),e.yb(4608,D.i,D.i,[D.k]),e.yb(6144,D.b,null,[D.i]),e.yb(4608,D.f,D.l,[D.b,e.p]),e.yb(4608,D.c,D.c,[D.f]),e.yb(4608,R.a,R.a,[C.a]),e.yb(1073742336,i.b,i.b,[]),e.yb(1073742336,o.r,o.r,[[2,o.w],[2,o.n]]),e.yb(1073742336,q,q,[]),e.yb(1073742336,D.e,D.e,[]),e.yb(1073742336,D.d,D.d,[]),e.yb(1073742336,c.h,c.h,[]),e.yb(1073742336,a.i,a.i,[]),e.yb(1073742336,y.c,y.c,[]),e.yb(1073742336,Y.a,Y.a,[]),e.yb(1073742336,u,u,[]),e.yb(1024,o.l,(function(){return[[{path:":capacityCategory",component:m},{path:":capacityCategory/:capacityTitle",component:I}]]}),[]),e.yb(256,D.n,"XSRF-TOKEN",[]),e.yb(256,D.o,"X-XSRF-TOKEN",[])])}))}}]);