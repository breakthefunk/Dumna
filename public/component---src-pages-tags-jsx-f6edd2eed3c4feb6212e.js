(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,n){"use strict";n.r(t);var a=n(8),r=(n(0),n(1)),o=n.n(r),i=n(164),l=n(168),c=n(169),d=n(176),s=n(170),u=function(e){var t=e.pageContext.tags;return Object(a.d)(i.a,null,Object(a.d)(c.a,null),Object(a.d)(s.a,null),Object(a.d)(l.a,null,Object(a.d)(d.a,{list:t})))};t.default=u,u.propTypes={pageContext:o.a.shape({tags:o.a.array})}},163:function(e,t,n){"use strict";var a={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},r="cubic-bezier(0.645, 0.045, 0.355, 1)",o="cubic-bezier(0.175, 0.885, 0.32, 1.275)",i="0.4s",l={colors:a,gradient:{leftToRight:"linear-gradient(-45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:i,timing:r,transition:"all "+i+" "+r},boom:{duration:i,timing:o,transition:"all "+i+" "+o},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=l},164:function(e,t,n){"use strict";n(166);var a=n(8),r=n(0),o=n(167),i=n(1),l=n.n(i),c=n(163),d=Object(a.c)(".headroom-wrapper{position:fixed;max-height:0px;width:100%;z-index:2000;}.headroom{top:0;left:0;right:0;zIndex:1;transform:translate3D(0,0,0);height:340px;display:flex;justify-content:center;flex-direction:row;width:100%;}}.headroom--unfixed{transform:translateY(0%);transition:all 0.25s ease-out;background:transparent;@media (max-width:",c.a.breakpoints.m,"){transform:translateY(-86%);}@media (min-width:",c.a.breakpoints.m,"){transform:translateY(0%);}}.headroom--scrolled{}.headroom--unpinned{transform:translateY(-100%);transition:all 0.25s ease-out;background:white;}}.headroom--pinned{transform:translateY(-86%);transition:all 0.25s ease-out;background:white;}"),s=n(162),u=Object(s.a)("footer",{target:"e8ayeqy0"})("position:relative;padding-top:2rem;bottom:0;box-shadow:",function(e){return e.theme.shadow.footer},";background:",function(e){return e.theme.gradient.leftToRight},";font-family:",function(e){return e.theme.fontFamily.body},";font-weight:500;"),g=Object(s.a)("div",{target:"e8ayeqy1"})("margin:0;padding-bottom:2rem;text-align:center;color:",function(e){return e.theme.colors.white.light},";"),p=Object(s.a)("div",{target:"e8ayeqy2"})({name:"1pzlgnn",styles:'font-family:"Domine";display:inline-block;margin:20px'}),b=Object(s.a)("p",{target:"e8ayeqy3"})({name:"1ghl3c5",styles:"margin:0px;color:black;"}),m=Object(s.a)("a",{target:"e8ayeqy4"})({name:"k7g3ga",styles:"color:black;display:block;"}),f=function(){return Object(a.d)(u,null,Object(a.d)(g,null,Object(a.d)(p,null,Object(a.d)(b,null,"Mieczysław Kopacz"),Object(a.d)(m,null,"tel. 502 261 218"),Object(a.d)(m,null,"mieczysław@dumnaniepodlegla.pl")),Object(a.d)(p,null,Object(a.d)(b,null,"Wojciech Samczuk"),Object(a.d)(m,null,"tel. 507 131 016"),Object(a.d)(m,null,"wojciech@dumnaniepodlegla.pl")),Object(a.d)(p,null,Object(a.d)(b,null,"Robert Wróbel"),Object(a.d)(m,null,"tel. 602 283 476"),Object(a.d)(m,null,"robert@dumnaniepodlegla.pl"))))},h=function(e){var t=e.children;return Object(a.d)(o.a,{theme:c.a},Object(a.d)(r.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:rgb(240,240,240);background:linear-gradient(0deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);min-height:100vh;}a{color:",c.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",c.a.colors.linkHover,";}h1{}",d)}),t,Object(a.d)(f,null)))};t.a=h;h.propTypes={children:l.a.oneOfType([l.a.array,l.a.node]).isRequired}},165:function(e,t,n){e.exports=n.p+"static/logo_default-234225323d47e309ca8537c748e24ac6.svg"},168:function(e,t,n){"use strict";var a=n(162),r=n(8),o=(n(0),n(1)),i=n.n(o),l=Object(a.a)("section",{target:"e1kppra30"})("text-align:",function(e){return e.center?"center":""},";margin:auto;padding:3rem 1.5rem;width:60%;max-width:",function(e){return e.theme.layout[e.type]},";height:100%;flex:1;@media (max-width:",function(e){return e.theme.breakpoints.m},"){width:90%;}@media (max-width:",function(e){return e.theme.breakpoints.s},"){width:95%;}"),c=function(e){var t=e.children,n=e.type,a=e.className,o=e.center;return Object(r.d)(l,{className:a,type:n,center:o},t)};t.a=c,c.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired,type:i.a.string,className:i.a.string,center:i.a.object}},169:function(e,t,n){"use strict";var a=n(162),r=n(8),o=(n(0),n(60)),i=n(172),l=n.n(i),c=n(165),d=n.n(c),s=Object(a.a)(o.Link,{target:"e1qta7450"})({name:"o3deii",styles:"position:fixed;display:inline-block;top:-15px;width:355px;transition:all 0.25s ease-out"}),u=Object(a.a)("nav",{target:"e1qta7451"})('position:relative;transform:translateY(45%);display:flex;justify-content:center;font-weight:500;font-size:1rem;align-items:center;height:50px;top:268px;align-items:center;background:#A92228;width:100%;padding-left:20px;padding-right:20px;a{position:relative;top:3px;font-family:"Domine";color:#f0f0f0;padding-left:2rem;transition:all ',function(e){return e.theme.transitions},";overflow:hidden;&:hover>div{width:100%;left:0%;background-color:#f0f0f0;transition:all 0.35s ease-out;}div{position:relative;height:2px;width:0%;top:1px;left:50%;background-color:#ded3d3;transition:all 0.35s ease-out;}}"),g=function(){document.getElementById("content-header-logo").style.opacity="0",document.getElementById("nav").style.transform="translateY(45%)"},p=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(0%)"},b=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(45%)"};t.a=function(){return Object(r.d)(l.a,{className:"content_headroom",disableInlineStyles:!0,pin:!0,hide:!0,content:!0,instantSnap:!0,onPin:g,onUnpin:p,onUnfix:b,fixAnchor:270,pinAnchor:0,hideAnchor:1e3},Object(r.d)(s,{id:"content-header-logo",to:"/"},Object(r.d)("img",{src:d.a,alt:"Dumna Niepodległa Logo"})),Object(r.d)(u,{id:"nav"},Object(r.d)(o.Link,{to:"/"},"Wydarzenia",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"O nas",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"Kontakt",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"Sklep",Object(r.d)("div",null))))}},170:function(e,t,n){"use strict";var a=n(162),r=n(8),o=(n(0),Object(a.a)("div",{target:"et5kbtu0"})({name:"1magkk1",styles:"height:25px;"}));t.a=function(){return Object(r.d)(o,{id:"content_spacer"})}},176:function(e,t,n){"use strict";var a=n(162),r=n(8),o=(n(0),n(60)),i=n(1),l=n.n(i),c=Object(a.a)("div",{target:"e1yptj3d0"})("margin:1rem 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;a{margin:0 1rem 1rem 0;color:",function(e){return e.theme.colors.black.blue},";padding:0.3rem 0.6rem;background:",function(e){return e.theme.colors.white.grey},";border-radius:10px;&:hover{color:",function(e){return e.theme.colors.white.light},";background:",function(e){return e.theme.colors.primary.light},";border:",function(e){return e.theme.colors.primary.light},";}}"),d=function(e){var t=e.list;return Object(r.d)(c,null,t&&t.map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return Object(r.d)(o.Link,{key:e,to:"/tags/"+e},Object(r.d)("span",null,t))}))};t.a=d,d.propTypes={list:l.a.array}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-f6edd2eed3c4feb6212e.js.map