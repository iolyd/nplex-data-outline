import{S as G,i as K,s as Z,F as xe,e as D,c as B,a as R,d as E,b as q,g as S,J as w,G as be,H as $e,I as Ce,q as b,o as k,t as I,h as T,k as F,m as P,K as j,L as ee,j as te,w as H,x as M,y as Q,B as U,n as y,p as L,M as X,N as Be,O as le,P as W,C as Y,Q as ie,z as Re,R as ne,T as Ae,U as Se,E as we}from"../chunks/index-58c0740c.js";import{w as ke}from"../chunks/index-1823a6bc.js";function ze(i){const e=i-1;return e*e*e+1}function re(i){return i===1?i:1-Math.pow(2,-10*i)}function se(i,{delay:e=0,duration:t=400,easing:l=ze}={}){const n=getComputedStyle(i),o=+n.opacity,s=parseFloat(n.height),u=parseFloat(n.paddingTop),r=parseFloat(n.paddingBottom),f=parseFloat(n.marginTop),a=parseFloat(n.marginBottom),d=parseFloat(n.borderTopWidth),h=parseFloat(n.borderBottomWidth);return{delay:e,duration:t,easing:l,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*o};height: ${$*s}px;padding-top: ${$*u}px;padding-bottom: ${$*r}px;margin-top: ${$*f}px;margin-bottom: ${$*a}px;border-top-width: ${$*d}px;border-bottom-width: ${$*h}px;`}}function Fe(i){let e,t,l;const n=i[1].default,o=xe(n,i,i[0],null);return{c(){e=D("div"),t=D("span"),o&&o.c(),this.h()},l(s){e=B(s,"DIV",{class:!0});var u=R(e);t=B(u,"SPAN",{class:!0});var r=R(t);o&&o.l(r),r.forEach(E),u.forEach(E),this.h()},h(){q(t,"class","svelte-1n4vziw"),q(e,"class","svelte-1n4vziw")},m(s,u){S(s,e,u),w(e,t),o&&o.m(t,null),l=!0},p(s,[u]){o&&o.p&&(!l||u&1)&&be(o,n,s,s[0],l?Ce(n,s[0],u,null):$e(s[0]),null)},i(s){l||(b(o,s),l=!0)},o(s){k(o,s),l=!1},d(s){s&&E(e),o&&o.d(s)}}}function Pe(i,e,t){let{$$slots:l={},$$scope:n}=e;return i.$$set=o=>{"$$scope"in o&&t(0,n=o.$$scope)},[n,l]}class Ie extends G{constructor(e){super(),K(this,e,Pe,Fe,Z,{})}}const N=ke(!1),V=ke(!1);function ae(i,e,t){const l=i.slice();return l[5]=e[t],l}function oe(i){let e,t;return{c(){e=D("span"),t=I("*"),this.h()},l(l){e=B(l,"SPAN",{id:!0,class:!0});var n=R(e);t=T(n,"*"),n.forEach(E),this.h()},h(){q(e,"id","asterisk"),q(e,"class","svelte-9bgzww")},m(l,n){S(l,e,n),w(e,t)},d(l){l&&E(e)}}}function ue(i){let e,t,l,n,o,s,u=i[1].description&&ce(i),r=i[1].enum&&de(i);return{c(){e=D("div"),u&&u.c(),t=F(),r&&r.c(),this.h()},l(f){e=B(f,"DIV",{id:!0,class:!0});var a=R(e);u&&u.l(a),t=P(a),r&&r.l(a),a.forEach(E),this.h()},h(){q(e,"id","details"),q(e,"class","svelte-9bgzww"),j(e,"multiple",i[1].multiple)},m(f,a){S(f,e,a),u&&u.m(e,null),w(e,t),r&&r.m(e,null),n=!0,o||(s=ee(e,"click",Oe),o=!0)},p(f,a){i=f,i[1].description?u?u.p(i,a):(u=ce(i),u.c(),u.m(e,t)):u&&(u.d(1),u=null),i[1].enum?r?(r.p(i,a),a&2&&b(r,1)):(r=de(i),r.c(),b(r,1),r.m(e,null)):r&&(y(),k(r,1,1,()=>{r=null}),L()),a&2&&j(e,"multiple",i[1].multiple)},i(f){n||(b(r),Be(()=>{l||(l=le(e,se,{duration:350,easing:re},!0)),l.run(1)}),n=!0)},o(f){k(r),l||(l=le(e,se,{duration:350,easing:re},!1)),l.run(0),n=!1},d(f){f&&E(e),u&&u.d(),r&&r.d(),f&&l&&l.end(),o=!1,s()}}}function ce(i){let e,t=i[1].description+"",l;return{c(){e=D("div"),l=I(t),this.h()},l(n){e=B(n,"DIV",{id:!0,class:!0});var o=R(e);l=T(o,t),o.forEach(E),this.h()},h(){q(e,"id","description"),q(e,"class","svelte-9bgzww")},m(n,o){S(n,e,o),w(e,l)},p(n,o){o&2&&t!==(t=n[1].description+"")&&te(l,t)},d(n){n&&E(e)}}}function de(i){let e,t,l,n,o,s,u=i[1].enum,r=[];for(let a=0;a<u.length;a+=1)r[a]=fe(ae(i,u,a));const f=a=>k(r[a],1,1,()=>{r[a]=null});return{c(){e=D("div"),t=D("p"),l=I("Options\xA0:"),n=F(),o=D("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=B(a,"DIV",{id:!0,class:!0});var d=R(e);t=B(d,"P",{class:!0});var h=R(t);l=T(h,"Options\xA0:"),h.forEach(E),n=P(d),o=B(d,"DIV",{});var $=R(o);for(let g=0;g<r.length;g+=1)r[g].l($);$.forEach(E),d.forEach(E),this.h()},h(){q(t,"class","svelte-9bgzww"),q(e,"id","values"),q(e,"class","svelte-9bgzww")},m(a,d){S(a,e,d),w(e,t),w(t,l),w(e,n),w(e,o);for(let h=0;h<r.length;h+=1)r[h].m(o,null);s=!0},p(a,d){if(d&2){u=a[1].enum;let h;for(h=0;h<u.length;h+=1){const $=ae(a,u,h);r[h]?(r[h].p($,d),b(r[h],1)):(r[h]=fe($),r[h].c(),b(r[h],1),r[h].m(o,null))}for(y(),h=u.length;h<r.length;h+=1)f(h);L()}},i(a){if(!s){for(let d=0;d<u.length;d+=1)b(r[d]);s=!0}},o(a){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)k(r[d]);s=!1},d(a){a&&E(e),X(r,a)}}}function Te(i){let e=i[5]+"",t;return{c(){t=I(e)},l(l){t=T(l,e)},m(l,n){S(l,t,n)},p(l,n){n&2&&e!==(e=l[5]+"")&&te(t,e)},d(l){l&&E(t)}}}function fe(i){let e,t;return e=new Ie({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p(l,n){const o={};n&258&&(o.$$scope={dirty:n,ctx:l}),e.$set(o)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function je(i){var h,$;let e,t,l=i[1].title+"",n,o,s,u,r,f,a=i[1].required&&oe(),d=i[0]&&(((h=i[1].description)==null?void 0:h.length)||(($=i[1].enum)==null?void 0:$.length))&&ue(i);return{c(){e=D("section"),t=D("div"),n=I(l),o=F(),a&&a.c(),s=F(),d&&d.c(),this.h()},l(g){e=B(g,"SECTION",{class:!0});var x=R(e);t=B(x,"DIV",{id:!0,class:!0});var _=R(t);n=T(_,l),o=P(_),a&&a.l(_),_.forEach(E),s=P(x),d&&d.l(x),x.forEach(E),this.h()},h(){var g,x;q(t,"id","title"),q(t,"class","svelte-9bgzww"),q(e,"class","svelte-9bgzww"),j(e,"expandable",((g=i[1].description)==null?void 0:g.length)||((x=i[1].enum)==null?void 0:x.length)),j(e,"required",i[1].required)},m(g,x){S(g,e,x),w(e,t),w(t,n),w(t,o),a&&a.m(t,null),w(e,s),d&&d.m(e,null),u=!0,r||(f=ee(e,"click",i[2]),r=!0)},p(g,[x]){var _,J,z,v;(!u||x&2)&&l!==(l=g[1].title+"")&&te(n,l),g[1].required?a||(a=oe(),a.c(),a.m(t,null)):a&&(a.d(1),a=null),g[0]&&(((_=g[1].description)==null?void 0:_.length)||((J=g[1].enum)==null?void 0:J.length))?d?(d.p(g,x),x&3&&b(d,1)):(d=ue(g),d.c(),b(d,1),d.m(e,null)):d&&(y(),k(d,1,1,()=>{d=null}),L()),x&2&&j(e,"expandable",((z=g[1].description)==null?void 0:z.length)||((v=g[1].enum)==null?void 0:v.length)),x&2&&j(e,"required",g[1].required)},i(g){u||(b(d),u=!0)},o(g){k(d),u=!1},d(g){g&&E(e),a&&a.d(),d&&d.d(),r=!1,f()}}}const Oe=i=>i.stopPropagation();function Ne(i,e,t){let l,n;W(i,V,r=>t(3,l=r)),W(i,N,r=>t(4,n=r));let{datum:o}=e,{expanded:s=!1}=e;function u(){t(0,s=!s),s?V.set(!1):N.set(!1)}return i.$$set=r=>{"datum"in r&&t(1,o=r.datum),"expanded"in r&&t(0,s=r.expanded)},i.$$.update=()=>{i.$$.dirty&16&&n&&t(0,s=!0),i.$$.dirty&8&&l&&t(0,s=!1)},[s,o,u,l,n]}class qe extends G{constructor(e){super(),K(this,e,Ne,je,Z,{datum:1,expanded:0})}}const pe=[{title:"Type de propri\xE9taire",required:!0,description:"Quel entit\xE9 est propri\xE9taire du lieu.",enum:["Particulier","Entreprise","Municipal"]},{title:"Cat\xE9gorie d'usage principal",required:!0,enum:["R\xE9sidentiel","Communautaire","Commercial","Industriel"]},{title:"Usage principal",required:!0,enum:["Unifamiliale","Duplex","Triplex","Quadruplex","Quintuplex","Sixplex","Bloc d'appartements","Co-propri\xE9t\xE9 divise (condos)","Habitations communautaires","Habitations personnes \xE2g\xE9es","Parc","Friche / terrain vacant","Place publique","Stationnement","Rue ou trottoir","Ruelle","Restaurant / caf\xE9 / bar","Commerce de d\xE9tail","Commerce de gros","Bureau","Biblioth\xE8que","\xC9cole","\xC9tablissement \xE9v\xE9nementiel"]},{title:"Cat\xE9gorie(s) d'usage(s) compl\xE9mentaire(s)",multiple:!0,enum:["R\xE9sidentiel","Communautaire","Commercial","Industriel"]},{title:"Usage(s) compl\xE9mentaire(s)",multiple:!0,description:"",enum:["Unifamiliale","Duplex","Triplex","Quadruplex","Quintuplex","Sixplex","Bloc d'appartements","Co-propri\xE9t\xE9 divise (condos)","Habitations communautaires","Habitations personnes \xE2g\xE9es","Parc","Friche / terrain vacant","Place publique","Stationnement","Rue ou trottoir","Ruelle","Restaurant / caf\xE9 / bar","Commerce de d\xE9tail","Commerce de gros","Bureau","Biblioth\xE8que","\xC9cole","\xC9tablissement \xE9v\xE9nementiel"]},{title:"Rues adjacentes",description:"Nombre de rues qui bordent le terrain"},{title:"Arrondissement",required:!0,enum:["..."]},{title:"Zone",description:"Code de la zone sp\xE9cifique tel qu'inscrit au zonage."},{title:"Emplacement",description:"Localisation g\xE9ographique (ambigu\xEB?) du site du projet. Pour assurer l'anonymat des lieux, la localisation pourra \xEAtre d\xE9finie \xE0 l'aide d'un cercle de pr\xE9cision laiss\xE9e \xE0 la discr\xE9tion de l'\xE9diteur de la fiche."},{title:"Aire du terrain",description:"Surface du lot ou du site en m2."},{title:"Secteurs & r\xE8glements particuliers",multiple:!0,enum:["Plan d'implantation et d'int\xE9gration architecturale","Secteur d'int\xE9r\xEAt patrimonial","..."]}],me=[{title:"Type de projet",enum:["Nouvelle construction","Transformation"]},{title:"Travaux",enum:["Construction neuve","Agrandissement en hauteur de b\xE2timent","Agrandissement en aire de b\xE2timent","Changement d'usage","Fusion de logements","R\xE9novation de planchers","R\xE9novation de rev\xEAtement ext\xE9rieur","Am\xE9nagement de cours arri\xE8re","R\xE9novation de terrain arri\xE8re","Changement de portes et/ou fen\xEAtres","Cr\xE9ation de mazzanine","Excavation de sous-sol","..."],multiple:!0},{title:"Co\xFBts approximatifs",description:"Fourchette de prix personalisable o\xF9 l'\xE9diteur peut d\xE9finir un prix sp\xE9cifique, ou un minimum et un maximum (contraint par un \xE9cart max.).",required:!0},{title:"\xC9tages touch\xE9s par les travaux",description:"Choix multiple.",enum:["R-d-c","2","3","4","5","..."]},{title:"Mat\xE9riaux",multiple:!0,description:""},{title:"\xC9v\xE9nements / Phases / Jalons",multiple:!0,description:"S\xE9rie d'\xE9l\xE9ments qui constituent le r\xE9cit du projet. Les \xE9l\xE9ments peuvent \xEAtre imbriqu\xE9s: des phases peuvent contenir  des sous-\xE9v\xE9nements ou des jalons."},{title:"Indicateurs d'exemplarit\xE9",description:"",multiple:!0,enum:["Conservation du patrimoine b\xE2ti","Conservation du patrimoine naturel",""]}];function Ve(i){let e,t,l,n;const o=i[2].default,s=xe(o,i,i[1],null);let u=[i[0]],r={};for(let f=0;f<u.length;f+=1)r=Y(r,u[f]);return{c(){e=D("button"),s&&s.c(),this.h()},l(f){e=B(f,"BUTTON",{});var a=R(e);s&&s.l(a),a.forEach(E),this.h()},h(){ie(e,r),j(e,"svelte-17bi0kg",!0)},m(f,a){S(f,e,a),s&&s.m(e,null),e.autofocus&&e.focus(),t=!0,l||(n=ee(e,"click",i[3]),l=!0)},p(f,[a]){s&&s.p&&(!t||a&2)&&be(s,o,f,f[1],t?Ce(o,f[1],a,null):$e(f[1]),null),ie(e,r=Re(u,[a&1&&f[0]])),j(e,"svelte-17bi0kg",!0)},i(f){t||(b(s,f),t=!0)},o(f){k(s,f),t=!1},d(f){f&&E(e),s&&s.d(f),l=!1,n()}}}function He(i,e,t){const l=[];let n=ne(e,l),{$$slots:o={},$$scope:s}=e;function u(r){Se.call(this,i,r)}return i.$$set=r=>{e=Y(Y({},e),Ae(r)),t(0,n=ne(e,l)),"$$scope"in r&&t(1,s=r.$$scope)},[n,s,o,u]}class he extends G{constructor(e){super(),K(this,e,He,Ve,Z,{})}}function _e(i,e,t){const l=i.slice();return l[4]=e[t],l}function ge(i,e,t){const l=i.slice();return l[4]=e[t],l}function Me(i){let e;return{c(){e=I("- R\xE9duire tous")},l(t){e=T(t,"- R\xE9duire tous")},m(t,l){S(t,e,l)},d(t){t&&E(e)}}}function Qe(i){let e;return{c(){e=I("+ Ouvrir tous")},l(t){e=T(t,"+ Ouvrir tous")},m(t,l){S(t,e,l)},d(t){t&&E(e)}}}function Ee(i){let e,t;return e=new qe({props:{datum:i[4]}}),{c(){H(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p:we,i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function ve(i){let e,t;return e=new qe({props:{datum:i[4]}}),{c(){H(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p:we,i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function Ue(i){let e,t,l,n,o,s,u,r,f,a,d,h,$,g;t=new he({props:{disabled:i[0],$$slots:{default:[Me]},$$scope:{ctx:i}}}),t.$on("click",i[2]),n=new he({props:{disabled:i[1],$$slots:{default:[Qe]},$$scope:{ctx:i}}}),n.$on("click",i[3]);let x=pe,_=[];for(let c=0;c<x.length;c+=1)_[c]=Ee(ge(i,x,c));const J=c=>k(_[c],1,1,()=>{_[c]=null});let z=me,v=[];for(let c=0;c<z.length;c+=1)v[c]=ve(_e(i,z,c));const De=c=>k(v[c],1,1,()=>{v[c]=null});return{c(){e=D("aside"),H(t.$$.fragment),l=F(),H(n.$$.fragment),o=F(),s=D("main"),u=D("h2"),r=I("Descripteurs du lieu"),f=F();for(let c=0;c<_.length;c+=1)_[c].c();a=F(),d=D("h2"),h=I("Descripteurs du projet"),$=F();for(let c=0;c<v.length;c+=1)v[c].c();this.h()},l(c){e=B(c,"ASIDE",{class:!0});var p=R(e);M(t.$$.fragment,p),l=P(p),M(n.$$.fragment,p),p.forEach(E),o=P(c),s=B(c,"MAIN",{class:!0});var C=R(s);u=B(C,"H2",{});var O=R(u);r=T(O,"Descripteurs du lieu"),O.forEach(E),f=P(C);for(let A=0;A<_.length;A+=1)_[A].l(C);a=P(C),d=B(C,"H2",{});var m=R(d);h=T(m,"Descripteurs du projet"),m.forEach(E),$=P(C);for(let A=0;A<v.length;A+=1)v[A].l(C);C.forEach(E),this.h()},h(){q(e,"class","svelte-1d71tyc"),q(s,"class","svelte-1d71tyc")},m(c,p){S(c,e,p),Q(t,e,null),w(e,l),Q(n,e,null),S(c,o,p),S(c,s,p),w(s,u),w(u,r),w(s,f);for(let C=0;C<_.length;C+=1)_[C].m(s,null);w(s,a),w(s,d),w(d,h),w(s,$);for(let C=0;C<v.length;C+=1)v[C].m(s,null);g=!0},p(c,[p]){const C={};p&1&&(C.disabled=c[0]),p&512&&(C.$$scope={dirty:p,ctx:c}),t.$set(C);const O={};if(p&2&&(O.disabled=c[1]),p&512&&(O.$$scope={dirty:p,ctx:c}),n.$set(O),p&0){x=pe;let m;for(m=0;m<x.length;m+=1){const A=ge(c,x,m);_[m]?(_[m].p(A,p),b(_[m],1)):(_[m]=Ee(A),_[m].c(),b(_[m],1),_[m].m(s,a))}for(y(),m=x.length;m<_.length;m+=1)J(m);L()}if(p&0){z=me;let m;for(m=0;m<z.length;m+=1){const A=_e(c,z,m);v[m]?(v[m].p(A,p),b(v[m],1)):(v[m]=ve(A),v[m].c(),b(v[m],1),v[m].m(s,null))}for(y(),m=z.length;m<v.length;m+=1)De(m);L()}},i(c){if(!g){b(t.$$.fragment,c),b(n.$$.fragment,c);for(let p=0;p<x.length;p+=1)b(_[p]);for(let p=0;p<z.length;p+=1)b(v[p]);g=!0}},o(c){k(t.$$.fragment,c),k(n.$$.fragment,c),_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)k(_[p]);v=v.filter(Boolean);for(let p=0;p<v.length;p+=1)k(v[p]);g=!1},d(c){c&&E(e),U(t),U(n),c&&E(o),c&&E(s),X(_,c),X(v,c)}}}function ye(i,e,t){let l,n;W(i,V,u=>t(0,l=u)),W(i,N,u=>t(1,n=u));function o(){N.set(!1),V.set(!0)}function s(){V.set(!1),N.set(!0)}return[l,n,o,s]}class We extends G{constructor(e){super(),K(this,e,ye,Ue,Z,{})}}export{We as default};
