(this["webpackJsonpreact-star-wars"]=this["webpackJsonpreact-star-wars"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return _})),n.d(t,"j",(function(){return p}));var a="https://",r="http://",c="swapi.dev/api/",s="people",i="/?page=",o=a+c+s+i,l=a+c+s,u=a+c+s+"/?search=",_=".jpg",p="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(8),r=n.n(a),c=n(15),s=n(7),i=function(e){return e?e.replace(s.e,s.f):e},o=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch:",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch:",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},,function(e,t,n){e.exports={container:"ChooseSide_container__sOHLC",item:"ChooseSide_item__2zQXL",item__img:"ChooseSide_item__img__hPIZU",item__header:"ChooseSide_item__header__2LF37",item__ligth:"ChooseSide_item__ligth__gZqky",item__dark:"ChooseSide_item__dark__3bDxw",item__neitral:"ChooseSide_item__neitral__2Rpie"}},function(e,t,n){e.exports={wrapper:"PersonFilms_wrapper__3WweJ",list__container:"PersonFilms_list__container__gVDkM",list__item:"PersonFilms_list__item__32PKW",item__episode:"PersonFilms_item__episode__2JT4U",item__colon:"PersonFilms_item__colon__2UXUS",item__title:"PersonFilms_item__title__1ghhd"}},,function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__yBCWM",list__item:"SearchPageInfo_list__item__2AxDC",persone__photo:"SearchPageInfo_persone__photo__3E1BN",persone__name:"SearchPageInfo_persone__name__1LQ4B",persone__comment:"SearchPageInfo_persone__comment__3-wpO"}},,function(e,t,n){e.exports={wrapper__input:"UiInput_wrapper__input__3JKWF",input:"UiInput_input__1OBe0",clear:"UiInput_clear__3JPNL",clear__disabled:"UiInput_clear__disabled__22dKf"}},function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__SJvDG",list__container:"PersonInfo_list__container__3CjRD",list__item:"PersonInfo_list__item__e_zy7",item__title:"PersonInfo_item__title__1uksE"}},,,,,function(e,t,n){e.exports={container:"Header_container__1VC87",logo:"Header_logo__3_SJs",list__container:"Header_list__container__1tB8Y"}},function(e,t,n){e.exports={list__container:"PeopleList_list__container__t5Dnk",list__item:"PeopleList_list__item__22adg",person__photo:"PeopleList_person__photo__3bWw0"}},function(e,t,n){e.exports={buttons:"PeopleNav_buttons__2QeH9",container:"PeopleNav_container__3zcPW"}},function(e,t,n){e.exports={container:"PersonPhoto_container__27VVH",photo:"PersonPhoto_photo__1k63_",favorite:"PersonPhoto_favorite__1uXQI"}},function(e,t,n){e.exports={container:"Favorite_container__2TbhK",counter:"Favorite_counter__3cMnn",icon:"Favorite_icon__A5LBt"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__3AvqW",person__name:"PersonPage_person__name__kqQxa",container:"PersonPage_container__3Z0uL"}},,,function(e,t,n){e.exports={button:"UiButton_button__3KKZp",dark:"UiButton_dark__3_lS_",light:"UiButton_light__2x6dP"}},function(e,t,n){e.exports={loader:"UiLoading_loader__REBY-",shadow:"UiLoading_shadow__2hSM_"}},function(e,t,n){e.exports={text:"ErrorMessage_text__aP9ZG",video:"ErrorMessage_video__3gdyz"}},,,function(e,t,n){e.exports={link:"PersonLinkBack_link__H8VmH",link__img:"PersonLinkBack_link__img__3TebI"}},function(e,t,n){e.exports={img:"NotFoundPage_img__3nMPX",text:"NotFoundPage_text__QglWK"}},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(15),s=n(3),i=n(1),o=n(2),l=n.n(o),u=n(16),_=n(19),p=n.n(_),j=n(0),d=function(e){var t=e.personFilms,n=Object(i.useState)([]),a=Object(s.a)(n,2),o=a[0],l=a[1];return Object(i.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return Object(u.a)(e)})),e.next=3,Object(u.c)(n);case 3:a=e.sent,l(a);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)("div",{className:p.a.wrapper,children:Object(j.jsx)("ul",{className:p.a.list__container,children:o.sort((function(e,t){return e.episode_id-t.episode_id})).map((function(e){var t=e.title,n=e.episode_id;return Object(j.jsxs)("li",{className:p.a.list__item,children:[Object(j.jsxs)("span",{className:p.a.item__episode,children:["Episode ",n]}),Object(j.jsx)("span",{className:p.a.item__colon,children:" : "}),Object(j.jsx)("span",{className:p.a.item__title,children:t})]},n)}))})})};t.default=d,d.PropsType={personFilms:l.a.array}},,,function(e,t,n){},function(e,t,n){e.exports={comment:"FavoritePage_comment__3C81A"}},function(e,t,n){e.exports={input__search:"SearchPage_input__search__1Sp-L"}},function(e,t,n){e.exports={wrapper:"App_wrapper__3m5cv"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),i=n(17),o=n(6),l=n(12),u=n(3),_=n(53),p=n(0),j="ligth",d="dark",b="neitral",m=r.a.createContext(),h=function(e){var t=e.children,n=Object(_.a)(e,["children"]),r=Object(a.useState)(null),c=Object(u.a)(r,2),s=c[0],i=c[1];return Object(p.jsx)(m.Provider,Object(l.a)(Object(l.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var( --theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},f=function(){return Object(a.useContext)(m)},O=n(20),x=n(47),g=n(48),v=n(28),P="ADD_PERSON_TO_FAVORITE",N="REMOVE_PERSON_FROM_FAVORITE",k=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),S=Object(O.combineReducers)({favoriteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(l.a)(Object(l.a)({},e),t.payload);case N:return Object(v.omit)(e,[t.payload]);default:return e}}}),w=Object(O.createStore)(S,Object(x.composeWithDevTools)(Object(O.applyMiddleware)(g.a)));w.subscribe((function(){var e,t;e="store",t=w.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var y=w,F=n(5),I=n(2),C=n.n(I),E=n(14),R=n.n(E),L=(n(45),n(37)),T=n.n(L),B=function(e){var t=e.theme,n=void 0===t?"dark":t,a=e.text,r=e.onClick,c=e.disabled,s=e.classes;return Object(p.jsx)("button",{className:R()(T.a.button,T.a[n],s),onClick:r,disabled:c,children:a})},A=B;B.propsType={text:C.a.string,onClick:C.a.func,disabled:C.a.bool,theme:C.a.string,classes:C.a.string};var U=n.p+"static/media/loader-red.6824350d.svg",H=n.p+"static/media/loader-blue.28a1cee3.svg",M=n.p+"static/media/loader-black.3577e508.svg",D=n(38),J=n.n(D),W=function(e){var t=e.theme,n=void 0===t?"red":t,r=e.isShadow,c=void 0===r||r,s=e.classes,i=Object(a.useState)(null),o=Object(u.a)(i,2),l=o[0],_=o[1];return Object(a.useEffect)((function(){switch(n){case"red":_(U);break;case"blue":_(H);break;case"black":_(M);break;default:_(U)}}),[n]),Object(p.jsx)("img",{className:R()(J.a.loader,c&&J.a.shadow,s),src:l,alt:"loader"})},V=n.p+"static/media/cancel.1d37b349.svg",K=n(23),Q=n.n(K),z=function(e){var t=e.value,n=e.handleInputChange,a=e.placeholder,r=e.classes;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:R()(Q.a.wrapper__input,r),children:[Object(p.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:a,className:Q.a.input}),Object(p.jsx)("img",{className:R()(Q.a.clear,!t&&Q.a.clear__disabled),onClick:function(){return t&&n("")},src:V,alt:"clear"})]})})},Z=n(49),q=n.n(Z),G=function(e){var t=e.src,n=e.classes,r=e.playbackRate,c=void 0===r?1:r,s=Object(a.useRef)();return Object(a.useEffect)((function(){s.current.playbackRate=c}),[]),Object(p.jsx)("video",{className:R()(q.a.video,n),ref:s,loop:!0,autoPlay:!0,muted:!0,children:Object(p.jsx)("source",{src:t})})},X=G;G.propType={src:C.a.string,playbackRate:C.a.number,classes:C.a.string};var Y=n.p+"static/media/han-solo.db435084.mp4",$=n(39),ee=n.n($),te=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:ee.a.text,children:"The dark side of the force has won. We cannot display data. Come back when we fix everything."}),Object(p.jsx)(X,{src:Y,className:ee.a.video,playbackRate:1})]})},ne=n.p+"static/media/droid.de165dd8.svg",ae=n.p+"static/media/space-station.7a027c6e.svg",re=n.p+"static/media/lightsaber.eb7d4cd6.svg",ce=n(29),se=n.n(ce),ie=function(){var e=Object(a.useState)(re),t=Object(u.a)(e,2),n=t[0],r=t[1],c=f();return Object(a.useEffect)((function(){switch(c.theme){case j:r(ae);break;case d:r(ne);break;case b:r(re);break;default:r(re)}}),[c]),Object(p.jsxs)("div",{className:se.a.container,children:[Object(p.jsx)(o.b,{to:"/",exact:!0,children:Object(p.jsx)("img",{className:se.a.logo,src:n,alt:"logo"})}),Object(p.jsxs)("ul",{className:se.a.list__container,children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/",exact:!0,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/people/?page=1",children:"People"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/search",exact:!0,children:"Search"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/not-found",exact:!0,children:"Not found"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/fail",exact:!0,children:"Fail"})})]}),Object(p.jsx)(Re,{})]})},oe=n(30),le=n.n(oe),ue=function(e){var t=e.people;return Object(p.jsx)("ul",{className:le.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(p.jsx)("li",{className:le.a.list__item,children:Object(p.jsxs)(o.b,{to:"/people/".concat(t),children:[Object(p.jsx)("img",{className:le.a.person__photo,src:a,alt:n}),Object(p.jsx)("p",{children:n})]})},t)}))})},_e=n(31),pe=n.n(_e),je=function(e){var t=e.getResource,n=e.prevPage,a=e.nextPage,r=e.currentPage;return Object(p.jsxs)("div",{className:pe.a.container,children:[Object(p.jsx)(o.b,{to:"/people/?page=".concat(r-1),className:pe.a.buttons,children:Object(p.jsx)(A,{text:"Prev",onClick:function(){return t(n)},disabled:!n})}),Object(p.jsx)(o.b,{to:"/people/?page=".concat(r+1),className:pe.a.buttons,children:Object(p.jsx)(A,{text:"Next",onClick:function(){return t(a)},disabled:!a})})]})},de=je;je.propsType={getResource:C.a.func,prevPage:C.a.string,nextPage:C.a.string,currentPage:C.a.number};var be=n(24),me=n.n(be),he=function(e){var t=e.personInfo;return Object(p.jsx)("div",{className:me.a.wrapper,children:Object(p.jsx)("ul",{className:me.a.list__container,children:t.map((function(e,t){var n=e.title,a=e.data;return a&&Object(p.jsxs)("li",{className:me.a.list__item,children:[Object(p.jsxs)("span",{className:me.a.item__title,children:[n,":"]})," ",a]},t)}))})})},fe=he;he.PropsType={personInfo:C.a.array};var Oe=n(27),xe=n.p+"static/media/favorite.a98d8635.svg",ge=n.p+"static/media/favorite-fill.7a9599c5.svg",ve=n(32),Pe=n.n(ve),Ne=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,r=e.personFavorite,c=e.setPersonFavorite,s=Object(i.b)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:Pe.a.container,children:[Object(p.jsx)("img",{className:Pe.a.photo,src:n,alt:a}),Object(p.jsx)("img",{src:r?ge:xe,alt:"add to favorite",className:Pe.a.favorite,onClick:function(){var e;r?(s(function(e){return{type:N,payload:e}}(t)),c(!1)):(s((e=Object(Oe.a)({},t,{name:a,img:n}),{type:P,payload:e})),c(!0))}})]})})},ke=Ne;Ne.PropsType={personId:C.a.string,personPhoto:C.a.string,personName:C.a.string,personFavorite:C.a.bool,setPersonFavorite:C.a.func};var Se=n.p+"static/media/left-arrow.26726137.svg",we=n(42),ye=n.n(we),Fe=function(){var e=Object(F.f)();return Object(p.jsxs)("a",{className:ye.a.link,href:"#",onClick:function(t){t.preventDefault(),e.goBack()},children:[Object(p.jsx)("img",{className:ye.a.link__img,src:Se,alt:"icon go back"}),Object(p.jsx)("span",{children:"Go back"})]})},Ie=(n(46),n.p+"static/media/bookmark.dda96317.svg"),Ce=n(33),Ee=n.n(Ce),Re=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(i.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.keys(c).length;e.toString().length>2?r("..."):r(e),r(e)}),[c]),Object(p.jsx)("div",{className:Ee.a.container,children:Object(p.jsxs)(o.b,{to:"/favorites",children:[Object(p.jsx)("span",{className:Ee.a.counter,children:n}),Object(p.jsx)("img",{src:Ie,alt:"bookmark",className:Ee.a.icon})]})})},Le=n.p+"static/media/light-side.eebc5217.jpg",Te=n.p+"static/media/dark-side.e0f8cab7.jpg",Be=n.p+"static/media/neitral-side.c1d0a8d1.jpg",Ae=n(18),Ue=n.n(Ae),He=function(e){var t=e.theme,n=e.text,a=e.img,r=e.classes,c=f();return Object(p.jsxs)("div",{className:R()(Ue.a.item,r),onClick:function(){return c.change(t)},children:[Object(p.jsx)("div",{className:Ue.a.item__header,children:n}),Object(p.jsx)("img",{className:Ue.a.item__img,src:a,alt:n})]})},Me=function(){var e=[{theme:j,text:"Ligth Side",img:Le,classes:Ue.a.item__ligth},{theme:d,text:"Dark Side",img:Te,classes:Ue.a.item__dark},{theme:b,text:"Neitral Side",img:Be,classes:Ue.a.item__neitral}];return Object(p.jsx)("div",{className:Ue.a.container,children:e.map((function(e,t){return Object(p.jsx)(He,Object(l.a)({},e),t)}))})},De=n(21),Je=n.n(De),We=function(e){var t=e.people;return Object(p.jsx)(p.Fragment,{children:t.length?Object(p.jsx)("ul",{className:Je.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(p.jsx)("li",{className:Je.a.list__item,children:Object(p.jsxs)(o.b,{to:"/people/".concat(t),children:[Object(p.jsx)("img",{className:Je.a.persone__photo,src:a,alt:n}),Object(p.jsx)("p",{className:Je.a.persone__name,children:n})]})},t)}))}):Object(p.jsx)("h2",{className:Je.a.persone__comment,children:"No results"})})},Ve=(n(65),function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"header__text",children:"Home page"}),Object(p.jsx)(Me,{})]})}),Ke=n.p+"static/media/not-found.1062f5e4.png",Qe=n(43),ze=n.n(Qe),Ze=function(){var e=Object(F.g)().pathname;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:ze.a.img,src:Ke,alt:"not founded"}),Object(p.jsxs)("p",{className:ze.a.text,children:["No match for: ",Object(p.jsx)("u",{children:e})]})]})},qe=n(8),Ge=n.n(qe),Xe=n(15),Ye=function(e){return function(t){var n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],s=r[1];return Object(p.jsx)(p.Fragment,{children:c?Object(p.jsx)(te,{}):Object(p.jsx)(e,Object(l.a)({setErrorAPI:s},t))})}},$e=n(16),et=n(7),tt=function(e){var t=e.lastIndexOf(et.g),n=e.slice(t+et.g.length,e.length);return Number(n)},nt=function(e,t){var n=function(e){return-1!==e.indexOf(et.f)?et.f:et.e}(e);return e.replace(n+et.i+t,"").replace(/\//g,"")},at=function(e){return nt(e,et.h)},rt=function(e){return"".concat(et.j,"/").concat(e).concat(et.d)},ct=(n(66),function(e){var t=e.setErrorAPI,n=Object(a.useState)(null),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),o=Object(u.a)(i,2),l=o[0],_=o[1],j=Object(a.useState)(null),d=Object(u.a)(j,2),b=d[0],m=d[1],h=Object(a.useState)(1),f=Object(u.a)(h,2),O=f[0],x=f[1],g=new URLSearchParams(Object(F.g)().search).get("page"),v=function(){var e=Object(Xe.a)(Ge.a.mark((function e(n){var a;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.b)(n);case 2:(a=e.sent)?(s(a.results.map((function(e){var t=e.name,n=e.url,a=at(n);return{id:a,name:t,img:rt(a)}}))),m(Object($e.a)(a.next)),_(Object($e.a)(a.previous)),x(tt(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(et.a+g)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(de,{getResource:v,prevPage:l,nextPage:b,currentPage:O}),c&&Object(p.jsx)(ue,{people:c})]})}),st=Ye(ct);ct.propsType={setErrorAPI:C.a.func};var it=n(34),ot=n.n(it),lt=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,46))})),ut=function(e){var t=e.setErrorAPI,n=e.match,r=Object(a.useState)(null),c=Object(u.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(null),_=Object(u.a)(l,2),j=_[0],d=_[1],b=Object(a.useState)(null),m=Object(u.a)(b,2),h=m[0],f=m[1],O=Object(a.useState)(null),x=Object(u.a)(O,2),g=x[0],v=x[1],P=Object(a.useState)(null),N=Object(u.a)(P,2),k=N[0],S=N[1],w=Object(a.useState)(!1),y=Object(u.a)(w,2),F=y[0],I=y[1],C=Object(i.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){Object(Xe.a)(Ge.a.mark((function e(){var a,r;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.params.id,e.next=3,Object($e.b)("".concat(et.b,"/").concat(a));case 3:r=e.sent,I(!!C[a]),r?(o(a),d([{title:"Height",data:r.height},{title:"Mass",data:r.mass},{title:"Heir color",data:r.hair_color},{title:"Skin color",data:r.skin_color},{title:"Birth year",data:r.birth_year},{title:"Gender",data:r.gender}]),f(r.name),v(rt(a)),r.films&&S(r.films),t(!1)):t(!0);case 6:case"end":return e.stop()}}),e)})))()}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Fe,{}),Object(p.jsxs)("div",{className:ot.a.wrapper,children:[Object(p.jsx)("span",{className:ot.a.person__name,children:h}),Object(p.jsxs)("div",{className:ot.a.container,children:[Object(p.jsx)(ke,{personPhoto:g,personName:h,personId:s,personFavorite:F,setPersonFavorite:I}),j&&Object(p.jsx)(fe,{personInfo:j}),k&&Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(W,{theme:"red",isShadow:!0}),children:Object(p.jsx)(lt,{personFilms:k})})]})]})]})},_t=Ye(ut);ut.PropsType={setErrorAPI:C.a.func,match:C.a.object};var pt=n(50),jt=n.n(pt),dt=function(){var e=Object(i.c)((function(e){return e.favoriteReducer})),t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=Object.entries(e);if(t.length){var n=t.map((function(e){return Object(l.a)({id:e[0]},e[1])}));c(n)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"header__text",children:"Favorites"}),r.length?Object(p.jsx)(ue,{people:r}):Object(p.jsx)("h2",{className:jt.a.comment,children:"No data"})]})},bt=n(51),mt=n.n(bt),ht=[{path:"/",exact:!0,component:Ve},{path:"/people",exact:!0,component:st},{path:"/people/:id",exact:!0,component:_t},{path:"/favorites",exact:!0,component:dt},{path:"/search",exact:!0,component:Ye((function(e){var t=e.setErrorAPI,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),l=o[0],_=o[1],j=function(){var e=Object(Xe.a)(Ge.a.mark((function e(n){var a,r;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.b)(et.c+n);case 2:(a=e.sent)?(r=a.results.map((function(e){var t=e.name,n=e.url,a=at(n);return{id:a,name:t,img:rt(a)}})),_(r),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j("")}),[]);var d=Object(a.useCallback)(Object(v.debounce)((function(e){return j(e)}),300),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"header__text",children:"Search"}),Object(p.jsx)(z,{value:c,handleInputChange:function(e){s(e),d(e)},placeholder:"Input character's name",classes:mt.a.input__search}),Object(p.jsx)(We,{people:l})]})}))},{path:"/fail",exact:!0,component:te},{path:"/not-found",exact:!0,component:Ze},{path:"*",exact:!1,component:Ze}],ft=n(52),Ot=n.n(ft),xt=function(){return Object(p.jsxs)("div",{className:Ot.a.wrapper,children:[Object(p.jsx)(ie,{}),Object(p.jsx)(F.c,{children:ht.map((function(e,t){var n=e.path,a=e.exact,r=e.component;return Object(p.jsx)(F.a,{path:n,exact:a,component:r},t)}))})]})};n(67);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(i.a,{store:y,children:Object(p.jsx)(h,{children:Object(p.jsx)(xt,{})})})})}),document.getElementById("root"))}],[[68,1,2]]]);
//# sourceMappingURL=main.d43c4d7b.chunk.js.map