(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.r(t);var n=a(8),r=(a(0),a(1)),o=a.n(r),i=a(166),c=a(169),d=a(170),l=a(177),s=a(171),g=function(e){var t=e.pageContext.tags;return Object(n.d)(i.a,null,Object(n.d)(d.a,null),Object(n.d)(s.a,null),Object(n.d)(c.a,null,Object(n.d)(l.a,{list:t})))};t.default=g,g.propTypes={pageContext:o.a.shape({tags:o.a.array})}},163:function(e,t,a){"use strict";var n={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},r="cubic-bezier(0.645, 0.045, 0.355, 1)",o="cubic-bezier(0.175, 0.885, 0.32, 1.275)",i="0.4s",c={colors:n,gradient:{leftToRight:"linear-gradient(-45deg, "+n.background.light+" 0%, "+n.background.dark+" 100%)",rightToLeft:"linear-gradient(45deg, "+n.background.light+" 0%, "+n.background.dark+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:i,timing:r,transition:"all "+i+" "+r},boom:{duration:i,timing:o,transition:"all "+i+" "+o},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=c},164:function(e,t,a){e.exports=a.p+"static/dumna-188662120a65775034cbbce9b06ce573.svg"},165:function(e,t,a){e.exports=a.p+"static/forest-13342c116eedae2b54104d78c42e689d.png"},166:function(e,t,a){"use strict";a(167);var n=a(8),r=a(0),o=a(168),i=a(1),c=a.n(i),d=a(163),l=a(165),s=a.n(l),g=Object(n.c)(".headroom-wrapper{position:fixed;max-height:0px;width:100%;z-index:2000;filter:drop-shadow(-1px 6px 3px rgba(50,50,0,0.5));}.headroom{top:0;left:0;right:0;zIndex:1;transform:translate3D(0,0,0);height:340px;display:flex;justify-content:center;flex-direction:row;width:100%;padding:1rem 1.5rem;background:url(",s.a,");background-position:center center;background-repeat:no-repeat;background-size:cover;svg{height:2.5rem;g{fill:",d.a.colors.white.base,";}}}.headroom--unfixed{transform:translateY(0%);transition:all 0.35s ease-out;opacity:1;@media (max-width:",d.a.breakpoints.m,"){transform:translateY(-81%);}}.headroom--scrolled{}.headroom--unpinned{transform:translateY(-100%);transition:all 0.35s ease-out;opacity:0;}}.headroom--pinned{transform:translateY(-81%);transition:all 0.35s ease-out;opacity:1;}"),p=function(e){var t=e.children;return Object(n.d)(o.a,{theme:d.a},Object(n.d)(r.Fragment,null,Object(n.d)(n.a,{styles:Object(n.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}.body-background--red{background:linear-gradient(180deg,rgba(69,54,54,1) 0%,rgba(213,51,62,1) 50%,rgba(240,240,240,1) 100%);}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:",d.a.colors.background.red,";background:linear-gradient(180deg,rgba(69,54,54,1) 0%,rgba(213,51,62,1) 50%,rgba(240,240,240,1) 100%);min-height:100vh;}a{color:",d.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",d.a.colors.linkHover,";}h1{}",g)}),t))};t.a=p;p.propTypes={children:c.a.oneOfType([c.a.array,c.a.node]).isRequired}},169:function(e,t,a){"use strict";var n=a(162),r=a(8),o=(a(0),a(1)),i=a.n(o),c=Object(n.a)("section",{target:"e1kppra30"})("text-align:",function(e){return e.center?"center":""},";margin:auto;padding:3rem 1.5rem;width:60%;max-width:",function(e){return e.theme.layout[e.type]},";height:100%;flex:1;@media (max-width:",function(e){return e.theme.breakpoints.m},"){width:90%;}@media (max-width:",function(e){return e.theme.breakpoints.s},"){width:95%;}"),d=function(e){var t=e.children,a=e.type,n=e.className,o=e.center;return Object(r.d)(c,{className:n,type:a,center:o},t)};t.a=d,d.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired,type:i.a.string,className:i.a.string,center:i.a.object}},170:function(e,t,a){"use strict";var n=a(162),r=a(8),o=(a(0),a(60)),i=a(173),c=a.n(i),d=a(164),l=a.n(d),s=Object(n.a)(o.Link,{target:"e1qta7450"})({name:"52rcvl",styles:"position:fixed;display:inline-block;height:200px;width:200px;transition:all 0.25s ease-out"}),g=Object(n.a)("nav",{target:"e1qta7451"})("position:relative;transform:translateY(45%);display:flex;justify-content:center;font-weight:500;font-size:1.25rem;align-items:center;a{color:",function(e){return e.theme.colors.black.base},";margin-left:2rem;transition:all ",function(e){return e.theme.transitions},";&:hover{color ",function(e){return e.theme.colors.black.light},";}}"),p=Object(n.a)("img",{target:"e1qta7452"})(),u=function(){document.getElementById("content-header-logo").style.opacity="0",document.getElementById("nav").style.transform="translateY(45%)"},b=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(0%)"},m=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(45%)"};t.a=function(){return Object(r.d)(c.a,{className:"content_headroom",disableInlineStyles:!0,pin:!0,hide:!0,content:!0,instantSnap:!0,onPin:u,onUnpin:b,onUnfix:m,fixAnchor:270,pinAnchor:0,hideAnchor:1e3},Object(r.d)(s,{id:"content-header-logo",to:"/"},Object(r.d)(p,{src:l.a,alt:"Dumna Niepodległa Logo"})),Object(r.d)(g,{id:"nav"},Object(r.d)(o.Link,{to:"/"},"Wydarzenia"),Object(r.d)(o.Link,{to:"about"},"O nas"),Object(r.d)(o.Link,{to:"contact"},"Kontakt"),Object(r.d)(o.Link,{to:"shop"},"Sklep")))}},171:function(e,t,a){"use strict";var n=a(162),r=a(8),o=(a(0),a(164)),i=a.n(o),c=Object(n.a)("div",{target:"et5kbtu0"})({name:"tz52z9",styles:"top:80px;left:50%;opacity:1;transform:translateX(-50%);height:300px;width:200px;position:relative"});t.a=function(){return Object(r.d)(c,{id:"content_spacer"},Object(r.d)("img",{src:i.a,alt:"Dumna Niepodległa Logo"}))}},177:function(e,t,a){"use strict";var n=a(162),r=a(8),o=(a(0),a(60)),i=a(1),c=a.n(i),d=Object(n.a)("div",{target:"e1yptj3d0"})("margin:1rem 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;a{margin:0 1rem 1rem 0;color:",function(e){return e.theme.colors.black.blue},";padding:0.3rem 0.6rem;background:",function(e){return e.theme.colors.white.grey},";border-radius:10px;&:hover{color:",function(e){return e.theme.colors.white.light},";background:",function(e){return e.theme.colors.primary.light},";border:",function(e){return e.theme.colors.primary.light},";}}"),l=function(e){var t=e.list;return Object(r.d)(d,null,t&&t.map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return Object(r.d)(o.Link,{key:e,to:"/tags/"+e},Object(r.d)("span",null,t))}))};t.a=l,l.propTypes={list:c.a.array}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-fa669aff64e2f514473a.js.map