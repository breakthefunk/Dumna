(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(t,e,n){"use strict";n.r(e);var a=n(162),o=n(8),r=(n(0),n(60)),i=n(1),d=n.n(i),c=n(168),l=n(164),s=n(169),p=n(170),u=Object(a.a)(r.Link,{target:"e11irzd30"})("color:",function(t){return t.theme.colors.white.light},";padding:5px 10px;border:solid 1px #fff;border-radius:20px;&:hover{color:",function(t){return t.theme.colors.black.blue},";background:",function(t){return t.theme.colors.white.light},";}"),g=Object(a.a)("div",{target:"e11irzd31"})({name:"1wq8tqp",styles:"text-align:center;h1{font-size:2rem;margin-bottom:1.25rem;}"}),b=function(t){var e=t.pageContext,n=e.posts,a=e.tagName;a.charAt(0).toUpperCase(),a.slice(1);return Object(o.d)(l.a,null,Object(o.d)(s.a,null),Object(o.d)(p.a,null),Object(o.d)(u,{to:"/tags"},"All Tags"),Object(o.d)(c.a,null,Object(o.d)(g,null,n.map(function(t,e){return Object(o.d)(r.Link,{key:e,to:t.frontmatter.path},Object(o.d)("h3",null,t.frontmatter.title))}))))};e.default=b,b.propTypes={pageContext:d.a.shape({posts:d.a.array,tagname:d.a.string})}},163:function(t,e,n){"use strict";var a={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},o="cubic-bezier(0.645, 0.045, 0.355, 1)",r="cubic-bezier(0.175, 0.885, 0.32, 1.275)",i="0.4s",d={colors:a,gradient:{leftToRight:"linear-gradient(-45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:i,timing:o,transition:"all "+i+" "+o},boom:{duration:i,timing:r,transition:"all "+i+" "+r},headroom:{transition:"all 0.25s ease-in-out"}}};e.a=d},164:function(t,e,n){"use strict";n(166);var a=n(8),o=n(0),r=n(167),i=n(1),d=n.n(i),c=n(163),l=Object(a.c)(".headroom-wrapper{position:fixed;max-height:0px;width:100%;z-index:2000;}.headroom{top:0;left:0;right:0;zIndex:1;transform:translate3D(0,0,0);height:340px;display:flex;justify-content:center;flex-direction:row;width:100%;background:transparent;}}.headroom--unfixed{transform:translateY(0%);transition:all 0.35s ease-out;opacity:1;@media (max-width:",c.a.breakpoints.m,"){transform:translateY(-86%);}@media (min-width:",c.a.breakpoints.m,"){transform:translateY(0%);}}.headroom--scrolled{}.headroom--unpinned{transform:translateY(-100%);transition:all 0.35s ease-out;opacity:0;}}.headroom--pinned{transform:translateY(-86%);transition:all 0.35s ease-out;opacity:1;}"),s=n(162),p=Object(s.a)("footer",{target:"e8ayeqy0"})("position:relative;padding-top:2rem;bottom:0;box-shadow:",function(t){return t.theme.shadow.footer},";background:",function(t){return t.theme.gradient.leftToRight},";font-family:",function(t){return t.theme.fontFamily.body},";font-weight:500;@media (max-width:",function(t){return t.theme.breakpoints.s},"){padding-top:7rem;}"),u=Object(s.a)("div",{target:"e8ayeqy1"})("margin:0;padding-bottom:2rem;text-align:center;color:",function(t){return t.theme.colors.white.light},";"),g=function(){return Object(a.d)(p,null,Object(a.d)(u,null,Object(a.d)("span",null,"Dumna Niepodległa "," ",Object(a.d)("a",{href:""}))))},b=function(t){var e=t.children;return Object(a.d)(r.a,{theme:c.a},Object(a.d)(o.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:rgb(255,255,255);background:linear-gradient(0deg,rgba(255,255,255,1) 25%,rgba(240,240,240,1) 100%);min-height:100vh;}a{color:",c.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",c.a.colors.linkHover,";}h1{}",l)}),e,Object(a.d)(g,null)))};e.a=b;b.propTypes={children:d.a.oneOfType([d.a.array,d.a.node]).isRequired}},165:function(t,e,n){t.exports=n.p+"static/dumna-234225323d47e309ca8537c748e24ac6.svg"},168:function(t,e,n){"use strict";var a=n(162),o=n(8),r=(n(0),n(1)),i=n.n(r),d=Object(a.a)("section",{target:"e1kppra30"})("text-align:",function(t){return t.center?"center":""},";margin:auto;padding:3rem 1.5rem;width:60%;max-width:",function(t){return t.theme.layout[t.type]},";height:100%;flex:1;@media (max-width:",function(t){return t.theme.breakpoints.m},"){width:90%;}@media (max-width:",function(t){return t.theme.breakpoints.s},"){width:95%;}"),c=function(t){var e=t.children,n=t.type,a=t.className,r=t.center;return Object(o.d)(d,{className:a,type:n,center:r},e)};e.a=c,c.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired,type:i.a.string,className:i.a.string,center:i.a.object}},169:function(t,e,n){"use strict";var a=n(162),o=n(8),r=(n(0),n(60)),i=n(172),d=n.n(i),c=n(165),l=n.n(c),s=Object(a.a)(r.Link,{target:"e1qta7450"})({name:"o3deii",styles:"position:fixed;display:inline-block;top:-15px;width:355px;transition:all 0.25s ease-out"}),p=Object(a.a)("nav",{target:"e1qta7451"})("position:relative;transform:translateY(45%);display:flex;justify-content:center;font-weight:500;font-size:1.25rem;align-items:center;height:50px;top:268px;box-shadow:0px 2px 12px 0px;align-items:center;background:#A92228;width:100%;a{color:#ded3d3;padding-left:2rem;opacity:0.95;transition:all ",function(t){return t.theme.transitions},";overflow:hidden;&:hover>div{width:100%;left:0%;opacity:0.9;box-shadow:0px 0px 0px 0px;background-color:#f0f0f0;transition:all 0.35s ease-out;}div{position:relative;height:2px;width:0%;top:1px;left:50%;opacity:0.5;background-color:#ded3d3;transition:all 0.35s ease-out;}}"),u=function(){document.getElementById("content-header-logo").style.opacity="0",document.getElementById("nav").style.transform="translateY(45%)"},g=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(0%)"},b=function(){document.getElementById("content-header-logo").style.opacity="1",document.getElementById("nav").style.transform="translateY(45%)"};e.a=function(){return Object(o.d)(d.a,{className:"content_headroom",disableInlineStyles:!0,pin:!0,hide:!0,content:!0,instantSnap:!0,onPin:u,onUnpin:g,onUnfix:b,fixAnchor:270,pinAnchor:0,hideAnchor:1e3},Object(o.d)(s,{id:"content-header-logo",to:"/"},Object(o.d)("img",{src:l.a,alt:"Dumna Niepodległa Logo"})),Object(o.d)(p,{id:"nav"},Object(o.d)(r.Link,{to:"/"},"Wydarzenia",Object(o.d)("div",null)),Object(o.d)(r.Link,{to:"/"},"O nas",Object(o.d)("div",null)),Object(o.d)(r.Link,{to:"/"},"Kontakt",Object(o.d)("div",null)),Object(o.d)(r.Link,{to:"/"},"Sklep",Object(o.d)("div",null))))}},170:function(t,e,n){"use strict";var a=n(162),o=n(8),r=(n(0),Object(a.a)("div",{target:"et5kbtu0"})({name:"1magkk1",styles:"height:25px;"}));e.a=function(){return Object(o.d)(r,{id:"content_spacer"})}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-69de31f74da8f509143f.js.map