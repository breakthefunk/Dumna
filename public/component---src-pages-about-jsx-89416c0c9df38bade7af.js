(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return a});var o=r(8),n=(r(0),r(166));t.default=function(e){var t=e.data;return Object(o.d)(n.a,null,Object(o.d)("h1",null,t.site.siteMetadata.title," O nas"),Object(o.d)("p",null,"Dowiedz się więcej o Fundacji!"))};var a="2430037369"},163:function(e,t,r){"use strict";var o={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},n="cubic-bezier(0.645, 0.045, 0.355, 1)",a="cubic-bezier(0.175, 0.885, 0.32, 1.275)",i="0.4s",c={colors:o,gradient:{leftToRight:"linear-gradient(-45deg, "+o.background.light+" 0%, "+o.background.dark+" 100%)",rightToLeft:"linear-gradient(45deg, "+o.background.light+" 0%, "+o.background.dark+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:i,timing:n,transition:"all "+i+" "+n},boom:{duration:i,timing:a,transition:"all "+i+" "+a},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=c},165:function(e,t,r){e.exports=r.p+"static/forest-13342c116eedae2b54104d78c42e689d.png"},166:function(e,t,r){"use strict";r(167);var o=r(8),n=r(0),a=r(168),i=r(1),c=r.n(i),s=r(163),u=r(165),l=r.n(u),f=Object(o.c)(".headroom-wrapper{position:fixed;max-height:0px;width:100%;z-index:2000;filter:drop-shadow(-1px 6px 3px rgba(50,50,0,0.5));}.headroom{top:0;left:0;right:0;zIndex:1;transform:translate3D(0,0,0);height:340px;display:flex;justify-content:center;flex-direction:row;width:100%;padding:1rem 1.5rem;background:url(",l.a,");background-position:center center;background-repeat:no-repeat;background-size:cover;svg{height:2.5rem;g{fill:",s.a.colors.white.base,";}}}.headroom--unfixed{transform:translateY(0%);transition:all 0.35s ease-out;opacity:1;@media (max-width:",s.a.breakpoints.m,"){transform:translateY(-81%);}}.headroom--scrolled{}.headroom--unpinned{transform:translateY(-100%);transition:all 0.35s ease-out;opacity:0;}}.headroom--pinned{transform:translateY(-81%);transition:all 0.35s ease-out;opacity:1;}.hover-on{background-color:red;transition:all 0.5s ease-out;width:100%;}.hover-off{background-color:red;transition:all 0.5s ease-out;width:0%;}"),d=function(e){var t=e.children;return Object(o.d)(a.a,{theme:s.a},Object(o.d)(n.Fragment,null,Object(o.d)(o.a,{styles:Object(o.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}.body-background--red{background:linear-gradient(180deg,rgba(69,54,54,1) 0%,rgba(213,51,62,1) 50%,rgba(240,240,240,1) 100%);}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:",s.a.colors.background.red,";background:linear-gradient(180deg,rgba(69,54,54,1) 0%,rgba(213,51,62,1) 50%,rgba(240,240,240,1) 100%);min-height:100vh;}a{color:",s.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",s.a.colors.linkHover,";}h1{}",f)}),t))};t.a=d;d.propTypes={children:c.a.oneOfType([c.a.array,c.a.node]).isRequired}},167:function(e,t,r){"use strict";r(172)("link",function(e){return function(t){return e(this,"a","href",t)}})},168:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var o=r(61),n=r.n(o),a=r(0),i=r(8),c=r(81),s=(r(174),Object(c.a)(function(e){return Object(c.a)(function(t){return function(e,t){return"function"==typeof t?t(e):n()({},e,t)}(e,t)})})),u=function(e){return Object(a.createElement)(i.b.Consumer,null,function(t){return e.theme!==t&&(t=s(t)(e.theme)),Object(a.createElement)(i.b.Provider,{value:t},e.children)})}},172:function(e,t,r){var o=r(13),n=r(22),a=r(23),i=/"/g,c=function(e,t,r,o){var n=String(a(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),o(o.P+o.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},174:function(e,t,r){"use strict";var o=r(175),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return o.isMemo(e)?i:c[e.$$typeof]||n}c[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(b){var n=p(r);n&&n!==b&&e(t,n,o)}var i=l(r);f&&(i=i.concat(f(r)));for(var c=s(t),g=s(r),m=0;m<i.length;++m){var y=i[m];if(!(a[y]||o&&o[y]||g&&g[y]||c&&c[y])){var h=d(r,y);try{u(t,y,h)}catch(x){}}}return t}return t}},175:function(e,t,r){"use strict";e.exports=r(176)},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case d:case i:case s:case c:case b:return e;default:switch(e=e&&e.$$typeof){case l:case p:case u:return e;default:return t}}case m:case g:case a:return t}}}function h(e){return y(e)===d}t.typeOf=y,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=m,t.Memo=g,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=b,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===s||e===c||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p)},t.isAsyncMode=function(e){return h(e)||y(e)===f},t.isConcurrentMode=h,t.isContextConsumer=function(e){return y(e)===l},t.isContextProvider=function(e){return y(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return y(e)===p},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===m},t.isMemo=function(e){return y(e)===g},t.isPortal=function(e){return y(e)===a},t.isProfiler=function(e){return y(e)===s},t.isStrictMode=function(e){return y(e)===c},t.isSuspense=function(e){return y(e)===b}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-89416c0c9df38bade7af.js.map