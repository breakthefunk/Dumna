(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,n){"use strict";n.r(t);var a=n(162),i=n(8),o=(n(0),n(60)),r=n(1),d=n.n(r),l=n(168),c=n(164),s=n(174),g=n(176),p=Object(a.a)(o.Link,{target:"e11irzd30"})("color:",function(e){return e.theme.colors.white.light},";padding:5px 10px;border:solid 1px #fff;border-radius:20px;&:hover{color:",function(e){return e.theme.colors.black.blue},";background:",function(e){return e.theme.colors.white.light},";}"),b=Object(a.a)("div",{target:"e11irzd31"})({name:"1wq8tqp",styles:"text-align:center;h1{font-size:2rem;margin-bottom:1.25rem;}"}),u=function(e){var t=e.pageContext,n=t.posts,a=t.tagName;a.charAt(0).toUpperCase(),a.slice(1);return Object(i.d)(c.a,null,Object(i.d)(s.a,null),Object(i.d)(g.a,null),Object(i.d)(p,{to:"/tags"},"All Tags"),Object(i.d)(l.a,null,Object(i.d)(b,null,n.map(function(e,t){return Object(i.d)(o.Link,{key:t,to:e.frontmatter.path},Object(i.d)("h3",null,e.frontmatter.title))}))))};t.default=u,u.propTypes={pageContext:d.a.shape({posts:d.a.array,tagname:d.a.string})}},163:function(e,t,n){"use strict";var a={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},i="cubic-bezier(0.645, 0.045, 0.355, 1)",o="cubic-bezier(0.175, 0.885, 0.32, 1.275)",r="0.4s",d={colors:a,gradient:{leftToRight:"linear-gradient(-45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:r,timing:i,transition:"all "+r+" "+i},boom:{duration:r,timing:o,transition:"all "+r+" "+o},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=d},164:function(e,t,n){"use strict";n(166);var a=n(8),i=n(0),o=n(167),r=n(1),d=n.n(r),l=n(163),c=Object(a.c)(".headroom-wrapper{position:fixed;width:100%;z-index:2000;}.headroom{height:120px;width:100%;padding-right:40px;padding-left:4rem;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2 );box-shadow:0 -3px 26px rgba(0,0,0,0.5);}}.headroom--unfixed{transition:all 0.35s ease-out;@media (max-width:",l.a.breakpoints.m,"){}@media (min-width:",l.a.breakpoints.m,"){}}.headroom--scrolled{transition:all 0.35s ease-out;}.headroom--unpinned{transform:translateY(-105%);transition:all 0.35s ease-out;}}.headroom--pinned{transform:translateY(0%);transition:all 0.35s ease-out;}"),s=n(162),g=Object(s.a)("footer",{target:"e8ayeqy0"})("position:relative;padding-top:2rem;bottom:0;box-shadow:",function(e){return e.theme.shadow.footer},";background:",function(e){return e.theme.gradient.leftToRight},";font-family:",function(e){return e.theme.fontFamily.body},";font-weight:500;"),p=Object(s.a)("div",{target:"e8ayeqy1"})("margin:0;padding-bottom:2rem;text-align:center;color:",function(e){return e.theme.colors.white.light},";"),b=Object(s.a)("div",{target:"e8ayeqy2"})({name:"1pzlgnn",styles:'font-family:"Domine";display:inline-block;margin:20px'}),u=Object(s.a)("p",{target:"e8ayeqy3"})({name:"1ghl3c5",styles:"margin:0px;color:black;"}),m=Object(s.a)("a",{target:"e8ayeqy4"})({name:"k7g3ga",styles:"color:black;display:block;"}),h=function(){return Object(a.d)(g,null,Object(a.d)(p,null,Object(a.d)(b,null,Object(a.d)(u,null,"Mieczysław Kopacz"),Object(a.d)(m,null,"tel. 502 261 218"),Object(a.d)(m,null,"mieczysław@dumnaniepodlegla.pl")),Object(a.d)(b,null,Object(a.d)(u,null,"Wojciech Samczuk"),Object(a.d)(m,null,"tel. 507 131 016"),Object(a.d)(m,null,"wojciech@dumnaniepodlegla.pl")),Object(a.d)(b,null,Object(a.d)(u,null,"Robert Wróbel"),Object(a.d)(m,null,"tel. 602 283 476"),Object(a.d)(m,null,"robert@dumnaniepodlegla.pl"))))},f=function(e){var t=e.children;return Object(a.d)(o.a,{theme:l.a},Object(a.d)(i.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:rgb(240,240,240);background:linear-gradient(0deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);min-height:100vh;}a{color:",l.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",l.a.colors.linkHover,";}h1{}",c)}),t,Object(a.d)(h,null)))};t.a=f;f.propTypes={children:d.a.oneOfType([d.a.array,d.a.node]).isRequired}},165:function(e,t,n){e.exports=n.p+"static/logo_default-c727627c0495e3e39f9ab6ae5e10d6ae.svg"},168:function(e,t,n){"use strict";var a=n(162),i=n(8),o=(n(0),n(1)),r=n.n(o),d=Object(a.a)("section",{target:"e1kppra30"})("text-align:",function(e){return e.center?"center":""},";margin:auto;padding:3rem 1.5rem;width:60%;max-width:",function(e){return e.theme.layout[e.type]},";height:100%;flex:1;@media (max-width:",function(e){return e.theme.breakpoints.m},"){width:90%;}@media (max-width:",function(e){return e.theme.breakpoints.s},"){width:95%;}"),l=function(e){var t=e.children,n=e.type,a=e.className,o=e.center;return Object(i.d)(d,{className:a,type:n,center:o},t)};t.a=l,l.propTypes={children:r.a.oneOfType([r.a.array,r.a.node]).isRequired,type:r.a.string,className:r.a.string,center:r.a.object}},174:function(e,t,n){"use strict";var a=n(162),i=n(8),o=(n(0),n(60)),r=n(170),d=n.n(r),l=n(165),c=n.n(l),s=Object(a.a)(o.Link,{target:"e1qta7450"})({name:"o3deii",styles:"position:fixed;display:inline-block;top:-15px;width:355px;transition:all 0.25s ease-out"}),g=Object(a.a)("nav",{target:"e1qta7451"})({name:"w03n9u",styles:'position:relative;transform:translateY(45%);display:flex;justify-content:center;font-weight:500;font-size:1rem;@media (max-width:400px){font-size:0.8rem;}align-items:center;height:50px;top:268px;background:#a92228;width:100%;padding-left:20px;padding-right:20px;a{position:relative;top:3px;font-family:"Domine";color:#f0f0f0;@media (max-width:500px){padding-left:0.7rem;padding-right:0.7rem;}@media (max-width:400px){padding-left:0.6rem;padding-right:0.6rem;}padding-left:1rem;padding-right:1rem;overflow:hidden;&:hover>div{width:100%;left:0%;background-color:#f0f0f0;transition:all 0.45s ease-out;}div{position:relative;height:1px;width:0%;top:0px;left:50%;background-color:#f0f0f0;transition:all 0.45s ease-out;}}'}),p=function(){document.getElementById("content-header-logo").style.opacity="0"},b=function(){document.getElementById("content-header-logo").style.opacity="1"},u=function(){document.getElementById("content-header-logo").style.opacity="1"};t.a=function(){return Object(i.d)(d.a,{className:"content_headroom",disableInlineStyles:!0,pin:!0,hide:!0,content:!0,instantSnap:!0,onPin:p,onUnpin:b,onUnfix:u,fixAnchor:270,pinAnchor:0,hideAnchor:1e3},Object(i.d)(s,{id:"content-header-logo",to:"/"},Object(i.d)("img",{src:c.a,alt:"Dumna Niepodległa Logo"})),Object(i.d)(g,{id:"nav"},Object(i.d)(o.Link,{to:"/"},"Wydarzenia",Object(i.d)("div",null)),Object(i.d)(o.Link,{to:"/"},"O nas",Object(i.d)("div",null)),Object(i.d)(o.Link,{to:"/"},"Kontakt",Object(i.d)("div",null)),Object(i.d)(o.Link,{to:"/"},"Sklep",Object(i.d)("div",null))))}},176:function(e,t,n){"use strict";var a=n(162),i=n(8),o=(n(0),Object(a.a)("div",{target:"et5kbtu0"})({name:"1magkk1",styles:"height:25px;"}));t.a=function(){return Object(i.d)(o,{id:"content_spacer"})}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-13d68b7480a05804f674.js.map