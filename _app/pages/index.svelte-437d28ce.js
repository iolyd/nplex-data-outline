import{S as G,i as K,s as Z,F as be,e as D,c as B,a as R,d as v,b as q,g as z,J as w,G as xe,H as $e,I as Ce,q as x,o as k,t as I,h as F,k as S,m as T,K as O,L as ee,j as te,w as H,x as y,y as M,B as Q,n as U,p as J,M as X,N as Be,O as le,P as W,C as Y,Q as ne,z as Re,R as ie,T as Ae,U as ze,E as we}from"../chunks/index-58c0740c.js";import{w as ke}from"../chunks/index-1823a6bc.js";function Pe(n){const e=n-1;return e*e*e+1}function se(n){return n===1?n:1-Math.pow(2,-10*n)}function re(n,{delay:e=0,duration:t=400,easing:l=Pe}={}){const i=getComputedStyle(n),o=+i.opacity,r=parseFloat(i.height),u=parseFloat(i.paddingTop),s=parseFloat(i.paddingBottom),f=parseFloat(i.marginTop),a=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),_=parseFloat(i.borderBottomWidth);return{delay:e,duration:t,easing:l,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*o};height: ${$*r}px;padding-top: ${$*u}px;padding-bottom: ${$*s}px;margin-top: ${$*f}px;margin-bottom: ${$*a}px;border-top-width: ${$*d}px;border-bottom-width: ${$*_}px;`}}function Se(n){let e,t,l;const i=n[1].default,o=be(i,n,n[0],null);return{c(){e=D("div"),t=D("span"),o&&o.c(),this.h()},l(r){e=B(r,"DIV",{class:!0});var u=R(e);t=B(u,"SPAN",{class:!0});var s=R(t);o&&o.l(s),s.forEach(v),u.forEach(v),this.h()},h(){q(t,"class","svelte-1n4vziw"),q(e,"class","svelte-1n4vziw")},m(r,u){z(r,e,u),w(e,t),o&&o.m(t,null),l=!0},p(r,[u]){o&&o.p&&(!l||u&1)&&xe(o,i,r,r[0],l?Ce(i,r[0],u,null):$e(r[0]),null)},i(r){l||(x(o,r),l=!0)},o(r){k(o,r),l=!1},d(r){r&&v(e),o&&o.d(r)}}}function Te(n,e,t){let{$$slots:l={},$$scope:i}=e;return n.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,l]}class Ie extends G{constructor(e){super(),K(this,e,Te,Se,Z,{})}}const V=ke(!1),j=ke(!1);function ae(n,e,t){const l=n.slice();return l[5]=e[t],l}function oe(n){let e,t;return{c(){e=D("span"),t=I("*"),this.h()},l(l){e=B(l,"SPAN",{id:!0,class:!0});var i=R(e);t=F(i,"*"),i.forEach(v),this.h()},h(){q(e,"id","asterisk"),q(e,"class","svelte-9bgzww")},m(l,i){z(l,e,i),w(e,t)},d(l){l&&v(e)}}}function ue(n){let e,t,l,i,o,r,u=n[1].description&&ce(n),s=n[1].enum&&de(n);return{c(){e=D("div"),u&&u.c(),t=S(),s&&s.c(),this.h()},l(f){e=B(f,"DIV",{id:!0,class:!0});var a=R(e);u&&u.l(a),t=T(a),s&&s.l(a),a.forEach(v),this.h()},h(){q(e,"id","details"),q(e,"class","svelte-9bgzww"),O(e,"multiple",n[1].multiple)},m(f,a){z(f,e,a),u&&u.m(e,null),w(e,t),s&&s.m(e,null),i=!0,o||(r=ee(e,"click",Ne),o=!0)},p(f,a){n=f,n[1].description?u?u.p(n,a):(u=ce(n),u.c(),u.m(e,t)):u&&(u.d(1),u=null),n[1].enum?s?(s.p(n,a),a&2&&x(s,1)):(s=de(n),s.c(),x(s,1),s.m(e,null)):s&&(U(),k(s,1,1,()=>{s=null}),J()),a&2&&O(e,"multiple",n[1].multiple)},i(f){i||(x(s),Be(()=>{l||(l=le(e,re,{duration:350,easing:se},!0)),l.run(1)}),i=!0)},o(f){k(s),l||(l=le(e,re,{duration:350,easing:se},!1)),l.run(0),i=!1},d(f){f&&v(e),u&&u.d(),s&&s.d(),f&&l&&l.end(),o=!1,r()}}}function ce(n){let e,t=n[1].description+"",l;return{c(){e=D("div"),l=I(t),this.h()},l(i){e=B(i,"DIV",{id:!0,class:!0});var o=R(e);l=F(o,t),o.forEach(v),this.h()},h(){q(e,"id","description"),q(e,"class","svelte-9bgzww")},m(i,o){z(i,e,o),w(e,l)},p(i,o){o&2&&t!==(t=i[1].description+"")&&te(l,t)},d(i){i&&v(e)}}}function de(n){let e,t,l,i,o,r,u=n[1].enum,s=[];for(let a=0;a<u.length;a+=1)s[a]=fe(ae(n,u,a));const f=a=>k(s[a],1,1,()=>{s[a]=null});return{c(){e=D("div"),t=D("p"),l=I("Options\xA0:"),i=S(),o=D("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=B(a,"DIV",{id:!0,class:!0});var d=R(e);t=B(d,"P",{class:!0});var _=R(t);l=F(_,"Options\xA0:"),_.forEach(v),i=T(d),o=B(d,"DIV",{});var $=R(o);for(let g=0;g<s.length;g+=1)s[g].l($);$.forEach(v),d.forEach(v),this.h()},h(){q(t,"class","svelte-9bgzww"),q(e,"id","values"),q(e,"class","svelte-9bgzww")},m(a,d){z(a,e,d),w(e,t),w(t,l),w(e,i),w(e,o);for(let _=0;_<s.length;_+=1)s[_].m(o,null);r=!0},p(a,d){if(d&2){u=a[1].enum;let _;for(_=0;_<u.length;_+=1){const $=ae(a,u,_);s[_]?(s[_].p($,d),x(s[_],1)):(s[_]=fe($),s[_].c(),x(s[_],1),s[_].m(o,null))}for(U(),_=u.length;_<s.length;_+=1)f(_);J()}},i(a){if(!r){for(let d=0;d<u.length;d+=1)x(s[d]);r=!0}},o(a){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)k(s[d]);r=!1},d(a){a&&v(e),X(s,a)}}}function Fe(n){let e=n[5]+"",t;return{c(){t=I(e)},l(l){t=F(l,e)},m(l,i){z(l,t,i)},p(l,i){i&2&&e!==(e=l[5]+"")&&te(t,e)},d(l){l&&v(t)}}}function fe(n){let e,t;return e=new Ie({props:{$$slots:{default:[Fe]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p(l,i){const o={};i&258&&(o.$$scope={dirty:i,ctx:l}),e.$set(o)},i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function Oe(n){var _,$;let e,t,l=n[1].title+"",i,o,r,u,s,f,a=n[1].required&&oe(),d=n[0]&&(((_=n[1].description)==null?void 0:_.length)||(($=n[1].enum)==null?void 0:$.length))&&ue(n);return{c(){e=D("section"),t=D("div"),i=I(l),o=S(),a&&a.c(),r=S(),d&&d.c(),this.h()},l(g){e=B(g,"SECTION",{class:!0});var b=R(e);t=B(b,"DIV",{id:!0,class:!0});var h=R(t);i=F(h,l),o=T(h),a&&a.l(h),h.forEach(v),r=T(b),d&&d.l(b),b.forEach(v),this.h()},h(){var g,b;q(t,"id","title"),q(t,"class","svelte-9bgzww"),q(e,"class","svelte-9bgzww"),O(e,"expandable",((g=n[1].description)==null?void 0:g.length)||((b=n[1].enum)==null?void 0:b.length)),O(e,"required",n[1].required)},m(g,b){z(g,e,b),w(e,t),w(t,i),w(t,o),a&&a.m(t,null),w(e,r),d&&d.m(e,null),u=!0,s||(f=ee(e,"click",n[2]),s=!0)},p(g,[b]){var h,L,P,E;(!u||b&2)&&l!==(l=g[1].title+"")&&te(i,l),g[1].required?a||(a=oe(),a.c(),a.m(t,null)):a&&(a.d(1),a=null),g[0]&&(((h=g[1].description)==null?void 0:h.length)||((L=g[1].enum)==null?void 0:L.length))?d?(d.p(g,b),b&3&&x(d,1)):(d=ue(g),d.c(),x(d,1),d.m(e,null)):d&&(U(),k(d,1,1,()=>{d=null}),J()),b&2&&O(e,"expandable",((P=g[1].description)==null?void 0:P.length)||((E=g[1].enum)==null?void 0:E.length)),b&2&&O(e,"required",g[1].required)},i(g){u||(x(d),u=!0)},o(g){k(d),u=!1},d(g){g&&v(e),a&&a.d(),d&&d.d(),s=!1,f()}}}const Ne=n=>n.stopPropagation();function Ve(n,e,t){let l,i;W(n,j,s=>t(3,l=s)),W(n,V,s=>t(4,i=s));let{datum:o}=e,{expanded:r=!1}=e;function u(){t(0,r=!r),r?j.set(!1):V.set(!1)}return n.$$set=s=>{"datum"in s&&t(1,o=s.datum),"expanded"in s&&t(0,r=s.expanded)},n.$$.update=()=>{n.$$.dirty&16&&i&&t(0,r=!0),n.$$.dirty&8&&l&&t(0,r=!1)},[r,o,u,l,i]}class qe extends G{constructor(e){super(),K(this,e,Ve,Oe,Z,{datum:1,expanded:0})}}const pe=[{title:"Type de propri\xE9taire",required:!0,description:"Quel entit\xE9 est propri\xE9taire du lieu.",enum:["Particulier","Entreprise","Municipal"]},{title:"Cat\xE9gorie d'usage principal",required:!0,enum:["R\xE9sidentiel","Communautaire","Commercial","Industriel"]},{title:"Usage principal",required:!0,enum:["Unifamiliale","Duplex","Triplex","Quadruplex","Quintuplex","Sixplex","Bloc d'appartements","Co-propri\xE9t\xE9 divise (condos)","Habitations communautaires","Habitations personnes \xE2g\xE9es","Parc","Friche / terrain vacant","Place publique","Stationnement","Rue ou trottoir","Ruelle","Restaurant / caf\xE9 / bar","Commerce de d\xE9tail","Commerce de gros","Bureau","Biblioth\xE8que","\xC9cole","\xC9tablissement \xE9v\xE9nementiel"]},{title:"Cat\xE9gorie(s) d'usage(s) compl\xE9mentaire(s)",multiple:!0,enum:["R\xE9sidentiel","Communautaire","Commercial","Industriel"]},{title:"Usage(s) compl\xE9mentaire(s)",multiple:!0,description:"",enum:["Unifamiliale","Duplex","Triplex","Quadruplex","Quintuplex","Sixplex","Bloc d'appartements","Co-propri\xE9t\xE9 divise (condos)","Habitations communautaires","Habitations personnes \xE2g\xE9es","Parc","Friche / terrain vacant","Place publique","Stationnement","Rue ou trottoir","Ruelle","Restaurant / caf\xE9 / bar","Commerce de d\xE9tail","Commerce de gros","Bureau","Biblioth\xE8que","\xC9cole","\xC9tablissement \xE9v\xE9nementiel"]},{title:"Rues adjacentes",description:"Nombre de rues qui bordent le terrain"},{title:"Arrondissement",required:!0,enum:["..."]},{title:"Zone",description:"Code de la zone sp\xE9cifique tel qu'inscrit au zonage."},{title:"Emplacement",description:"Localisation g\xE9ographique (ambigu\xEB?) du site du projet. Pour assurer l'anonymat des lieux, la localisation pourra \xEAtre d\xE9finie \xE0 l'aide d'un cercle de pr\xE9cision laiss\xE9e \xE0 la discr\xE9tion de l'\xE9diteur de la fiche."},{title:"Aire du terrain",description:"Surface du lot ou du site en m2."},{title:"Secteurs & r\xE8glements particuliers",multiple:!0,enum:["Plan d'implantation et d'int\xE9gration architecturale","Secteur d'int\xE9r\xEAt patrimonial","..."]}],me=[{title:"Type de travaux",enum:["Nouvelle construction","Transformation"]},{title:"Type de projet",enum:["Construction neuve","Agrandissement en hauteur de b\xE2timent","Agrandissement en aire de b\xE2timent","Changement d'usage","Fusion de logements","R\xE9novation de planchers","R\xE9novation de rev\xEAtement ext\xE9rieur","Am\xE9nagement de cours arri\xE8re","R\xE9novation de terrain arri\xE8re","Changement de portes et/ou fen\xEAtres","Cr\xE9ation de mazzanine","Excavation de sous-sol","..."]},{title:"\xC9tages touch\xE9s par les travaux",description:"Choix multiple.",enum:["R-d-c","2","3","4","5","..."]},{title:"Mat\xE9riaux",multiple:!0,description:""},{title:"\xC9v\xE9nements / Phases / Jalons",multiple:!0,description:""}];function je(n){let e,t,l,i;const o=n[2].default,r=be(o,n,n[1],null);let u=[n[0]],s={};for(let f=0;f<u.length;f+=1)s=Y(s,u[f]);return{c(){e=D("button"),r&&r.c(),this.h()},l(f){e=B(f,"BUTTON",{});var a=R(e);r&&r.l(a),a.forEach(v),this.h()},h(){ne(e,s),O(e,"svelte-17bi0kg",!0)},m(f,a){z(f,e,a),r&&r.m(e,null),e.autofocus&&e.focus(),t=!0,l||(i=ee(e,"click",n[3]),l=!0)},p(f,[a]){r&&r.p&&(!t||a&2)&&xe(r,o,f,f[1],t?Ce(o,f[1],a,null):$e(f[1]),null),ne(e,s=Re(u,[a&1&&f[0]])),O(e,"svelte-17bi0kg",!0)},i(f){t||(x(r,f),t=!0)},o(f){k(r,f),t=!1},d(f){f&&v(e),r&&r.d(f),l=!1,i()}}}function He(n,e,t){const l=[];let i=ie(e,l),{$$slots:o={},$$scope:r}=e;function u(s){ze.call(this,n,s)}return n.$$set=s=>{e=Y(Y({},e),Ae(s)),t(0,i=ie(e,l)),"$$scope"in s&&t(1,r=s.$$scope)},[i,r,o,u]}class _e extends G{constructor(e){super(),K(this,e,He,je,Z,{})}}function he(n,e,t){const l=n.slice();return l[4]=e[t],l}function ge(n,e,t){const l=n.slice();return l[4]=e[t],l}function ye(n){let e;return{c(){e=I("- R\xE9duire tous")},l(t){e=F(t,"- R\xE9duire tous")},m(t,l){z(t,e,l)},d(t){t&&v(e)}}}function Me(n){let e;return{c(){e=I("+ Ouvrir tous")},l(t){e=F(t,"+ Ouvrir tous")},m(t,l){z(t,e,l)},d(t){t&&v(e)}}}function ve(n){let e,t;return e=new qe({props:{datum:n[4]}}),{c(){H(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p:we,i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function Ee(n){let e,t;return e=new qe({props:{datum:n[4]}}),{c(){H(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,i){M(e,l,i),t=!0},p:we,i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function Qe(n){let e,t,l,i,o,r,u,s,f,a,d,_,$,g;t=new _e({props:{disabled:n[0],$$slots:{default:[ye]},$$scope:{ctx:n}}}),t.$on("click",n[2]),i=new _e({props:{disabled:n[1],$$slots:{default:[Me]},$$scope:{ctx:n}}}),i.$on("click",n[3]);let b=pe,h=[];for(let c=0;c<b.length;c+=1)h[c]=ve(ge(n,b,c));const L=c=>k(h[c],1,1,()=>{h[c]=null});let P=me,E=[];for(let c=0;c<P.length;c+=1)E[c]=Ee(he(n,P,c));const De=c=>k(E[c],1,1,()=>{E[c]=null});return{c(){e=D("aside"),H(t.$$.fragment),l=S(),H(i.$$.fragment),o=S(),r=D("main"),u=D("h2"),s=I("Descripteurs du lieu"),f=S();for(let c=0;c<h.length;c+=1)h[c].c();a=S(),d=D("h2"),_=I("Descripteurs du projet"),$=S();for(let c=0;c<E.length;c+=1)E[c].c();this.h()},l(c){e=B(c,"ASIDE",{class:!0});var p=R(e);y(t.$$.fragment,p),l=T(p),y(i.$$.fragment,p),p.forEach(v),o=T(c),r=B(c,"MAIN",{class:!0});var C=R(r);u=B(C,"H2",{});var N=R(u);s=F(N,"Descripteurs du lieu"),N.forEach(v),f=T(C);for(let A=0;A<h.length;A+=1)h[A].l(C);a=T(C),d=B(C,"H2",{});var m=R(d);_=F(m,"Descripteurs du projet"),m.forEach(v),$=T(C);for(let A=0;A<E.length;A+=1)E[A].l(C);C.forEach(v),this.h()},h(){q(e,"class","svelte-1d71tyc"),q(r,"class","svelte-1d71tyc")},m(c,p){z(c,e,p),M(t,e,null),w(e,l),M(i,e,null),z(c,o,p),z(c,r,p),w(r,u),w(u,s),w(r,f);for(let C=0;C<h.length;C+=1)h[C].m(r,null);w(r,a),w(r,d),w(d,_),w(r,$);for(let C=0;C<E.length;C+=1)E[C].m(r,null);g=!0},p(c,[p]){const C={};p&1&&(C.disabled=c[0]),p&512&&(C.$$scope={dirty:p,ctx:c}),t.$set(C);const N={};if(p&2&&(N.disabled=c[1]),p&512&&(N.$$scope={dirty:p,ctx:c}),i.$set(N),p&0){b=pe;let m;for(m=0;m<b.length;m+=1){const A=ge(c,b,m);h[m]?(h[m].p(A,p),x(h[m],1)):(h[m]=ve(A),h[m].c(),x(h[m],1),h[m].m(r,a))}for(U(),m=b.length;m<h.length;m+=1)L(m);J()}if(p&0){P=me;let m;for(m=0;m<P.length;m+=1){const A=he(c,P,m);E[m]?(E[m].p(A,p),x(E[m],1)):(E[m]=Ee(A),E[m].c(),x(E[m],1),E[m].m(r,null))}for(U(),m=P.length;m<E.length;m+=1)De(m);J()}},i(c){if(!g){x(t.$$.fragment,c),x(i.$$.fragment,c);for(let p=0;p<b.length;p+=1)x(h[p]);for(let p=0;p<P.length;p+=1)x(E[p]);g=!0}},o(c){k(t.$$.fragment,c),k(i.$$.fragment,c),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)k(h[p]);E=E.filter(Boolean);for(let p=0;p<E.length;p+=1)k(E[p]);g=!1},d(c){c&&v(e),Q(t),Q(i),c&&v(o),c&&v(r),X(h,c),X(E,c)}}}function Ue(n,e,t){let l,i;W(n,j,u=>t(0,l=u)),W(n,V,u=>t(1,i=u));function o(){V.set(!1),j.set(!0)}function r(){j.set(!1),V.set(!0)}return[l,i,o,r]}class We extends G{constructor(e){super(),K(this,e,Ue,Qe,Z,{})}}export{We as default};
