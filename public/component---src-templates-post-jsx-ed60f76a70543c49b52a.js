(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,n){"use strict";n.r(t);var o=n(162),a=n(8),r=(n(0),n(60)),i=n(1),l=n.n(i),c=n(165),d=n(169),s=n(163),u=Object(a.c)("p > code,li > code{color:#f8f8f2;background:#131316;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;padding:0.4em 0.5em;margin:0.5em 0;overflow:auto;border-radius:0.3em;tab-size:4;hyphens:none;}code[class*='language-'],pre[class*='language-']{color:#f8f8f2;background:none;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;tab-size:4;hyphens:none;}pre[class*='language-']{padding:1em;margin:1.5rem 0;overflow:auto;border-radius:0.3em;&::-webkit-scrollbar-thumb{background:",s.a.colors.primary.base,";}&::-webkit-scrollbar-track{background:",s.a.colors.black.light,";}&::-webkit-scrollbar{width:12px;height:12px;}}pre[class*='language-']{background:#131316;}p > code[class*='language-'],li > code[class*='language-']{border-radius:0.3em;background:rgba(52,152,219,0.2);color:#2e3246;bottom:2px;position:relative;}.token.operator{color:#bc78d7;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#7ad7e2;}.namespace{opacity:0.7;}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#ef514f;}.token.boolean,.token.number{color:#ae81ff;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#e5db89;}.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#f8f8f2;}.token.atrule,.token.attr-value,.token.class-name{color:#e6db74;}.token.function{color:#84c16a;}.token.keyword{color:#6095ea;}.token.regex,.token.important{color:#fd971f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}"),p=Object(o.a)("div",{target:"eqsbe7h0"})(u,";p,li{letter-spacing:-0.003em;--baseline-multiplier:0.179;--x-height-multiplier:0.35;font-size:1.15rem;line-height:2;code{padding:0.2rem 0.5rem;margin:0.5rem 0;}}a:not(.gatsby-resp-image-link):not(.anchor){color:black;box-shadow:inset 0 -2px 0 ",function(e){return e.theme.colors.primary.base},";border-bottom:1px solid ",function(e){return e.theme.colors.primary.base},";transition:",function(e){return e.theme.transitions.default.transition},";text-decoration:none;&:hover,&:focus{background:",function(e){return e.theme.colors.primary.base},";color:black;}}h1{margin-top:3rem;}h2{margin-top:1rem;}h1,h2,h3,h4,h5,h6{display:inline-block;position:relative;a{box-shadow:none;border-bottom:none;&:hover,&:focus{background:none;}}&:hover{.anchor svg{opacity:0.8;}}}"),b=function(e){var t=e.input;return Object(a.d)(p,{dangerouslySetInnerHTML:{__html:t}})},g=b;b.propTypes={input:l.a.any.isRequired};var m=n(177),h=n(170),f=n(171);n.d(t,"query",function(){return w});var x=Object(o.a)("div",{target:"e1vxx2rf0"})("display:flex;flex-wrap:nowrap;justify-content:space-between;background:",function(e){return e.theme.colors.white.light},";box-shadow:",function(e){return e.theme.shadow.suggestion},";"),k=Object(o.a)("div",{target:"e1vxx2rf1"})({name:"p7xae0",styles:"display:flex;width:50%;align-items:center;margin:1rem 3rem 0 3rem;"}),y=function(e){var t=e.data,n=e.pageContext;"undefined"!=typeof document&&document.body.classList.add("body-background--white");var o=n.next,i=n.prev,l=t.markdownRemark,s=(l.frontmatter.cover.childImageSharp.fluid,l.frontmatter.title,l.frontmatter.date,l.html);return Object(a.d)(c.a,null,Object(a.d)(h.a,null),Object(a.d)(f.a,null),Object(a.d)(d.a,null,Object(a.d)(g,{input:s}),Object(a.d)(m.a,{list:l.frontmatter.tags||[]})),Object(a.d)(x,null,Object(a.d)(k,null,i&&Object(a.d)(r.Link,{to:i.frontmatter.path},"Previous",Object(a.d)("h3",null,i.frontmatter.title))),Object(a.d)(k,null,o&&Object(a.d)(r.Link,{to:o.frontmatter.path},"Next",Object(a.d)("h3",null,o.frontmatter.title)))))};t.default=y;y.propTypes={pageContext:l.a.shape({prev:l.a.object,next:l.a.object}).isRequired,data:l.a.object.isRequired};var w="2466977610"},163:function(e,t,n){"use strict";var o={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},a="cubic-bezier(0.645, 0.045, 0.355, 1)",r="cubic-bezier(0.175, 0.885, 0.32, 1.275)",i="0.4s",l={colors:o,gradient:{leftToRight:"linear-gradient(-45deg, "+o.background.white+" 0%, "+o.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+o.background.white+" 0%, "+o.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:i,timing:a,transition:"all "+i+" "+a},boom:{duration:i,timing:r,transition:"all "+i+" "+r},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=l},164:function(e,t,n){e.exports=n.p+"static/forest-7724b0a823e6ab702e1c5e17322f4c1a.png"},165:function(e,t,n){"use strict";n(167);var o=n(8),a=n(0),r=n(168),i=n(1),l=n.n(i),c=n(163),d=(n(164),Object(o.c)(".headroom-wrapper{height:120px;position:fixed;width:100%;z-index:2000;box-shadow:0 4px 4px -3px;height:inherit !important;transition:all .25s ease-out;}.headroom{height:120px;width:100%;padding-right:40px;background:rgb(195,195,195);background:#fff;background-repeat:no-repeat;background-size:cover;clip-path:inset(0px 0px 0px 0px);transition:all .25s ease-out;}}.headroom--unfixed{transition:all 0.25s ease-out;@media (max-width:",c.a.breakpoints.m,"){}@media (min-width:",c.a.breakpoints.m,"){}}.headroom--scrolled{transition:all 0.25s ease-out;}.headroom--unpinned{transition:all 0.25s ease-out;}}.headroom--pinned{transition:all 0.25s ease-out;}")),s=n(162),u=Object(s.a)("footer",{target:"e8ayeqy0"})("position:relative;padding-top:2rem;bottom:0;box-shadow:",function(e){return e.theme.shadow.footer},";background:",function(e){return e.theme.gradient.leftToRight},";font-family:",function(e){return e.theme.fontFamily.body},";font-weight:500;"),p=Object(s.a)("div",{target:"e8ayeqy1"})("margin:0;padding-bottom:2rem;text-align:center;color:",function(e){return e.theme.colors.white.light},";"),b=Object(s.a)("div",{target:"e8ayeqy2"})({name:"1pzlgnn",styles:'font-family:"Domine";display:inline-block;margin:20px'}),g=Object(s.a)("p",{target:"e8ayeqy3"})({name:"1ghl3c5",styles:"margin:0px;color:black;"}),m=Object(s.a)("a",{target:"e8ayeqy4"})({name:"k7g3ga",styles:"color:black;display:block;"}),h=function(){return Object(o.d)(u,null,Object(o.d)(p,null,Object(o.d)(b,null,Object(o.d)(g,null,"Mieczysław Kopacz"),Object(o.d)(m,null,"tel. 502 261 218"),Object(o.d)(m,null,"mieczysław@dumnaniepodlegla.pl")),Object(o.d)(b,null,Object(o.d)(g,null,"Wojciech Samczuk"),Object(o.d)(m,null,"tel. 507 131 016"),Object(o.d)(m,null,"wojciech@dumnaniepodlegla.pl")),Object(o.d)(b,null,Object(o.d)(g,null,"Robert Wróbel"),Object(o.d)(m,null,"tel. 602 283 476"),Object(o.d)(m,null,"robert@dumnaniepodlegla.pl"))))},f=function(e){var t=e.children;return Object(o.d)(r.a,{theme:c.a},Object(o.d)(a.Fragment,null,Object(o.d)(o.a,{styles:Object(o.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:rgb(240,240,240);background:linear-gradient(0deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);min-height:100vh;}a{color:",c.a.colors.link,";transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",c.a.colors.linkHover,";}h1{}",d)}),t,Object(o.d)(h,null)))};t.a=f;f.propTypes={children:l.a.oneOfType([l.a.array,l.a.node]).isRequired}},166:function(e,t,n){e.exports=n.p+"static/logo_default-f10515b2e2e299393d184af946b3be2a.svg"},169:function(e,t,n){"use strict";var o=n(162),a=n(8),r=(n(0),n(1)),i=n.n(r),l=Object(o.a)("section",{target:"e1kppra30"})("text-align:",function(e){return e.center?"center":""},";margin:auto;padding:3rem 1.5rem;width:60%;max-width:",function(e){return e.theme.layout[e.type]},";height:100%;flex:1;@media (max-width:",function(e){return e.theme.breakpoints.m},"){width:90%;}@media (max-width:",function(e){return e.theme.breakpoints.s},"){width:95%;}"),c=function(e){var t=e.children,n=e.type,o=e.className,r=e.center;return Object(a.d)(l,{className:o,type:n,center:r},t)};t.a=c,c.propTypes={children:i.a.oneOfType([i.a.array,i.a.node]).isRequired,type:i.a.string,className:i.a.string,center:i.a.object}},170:function(e,t,n){"use strict";var o=n(162),a=n(8),r=(n(0),n(60)),i=n(173),l=n.n(i),c=n(166),d=n.n(c),s=Object(o.a)(r.Link,{target:"e1qta7450"})({name:"o3deii",styles:"position:fixed;display:inline-block;top:-15px;width:355px;transition:all 0.25s ease-out"}),u=Object(o.a)("nav",{target:"e1qta7451"})({name:"w03n9u",styles:'position:relative;transform:translateY(45%);display:flex;justify-content:center;font-weight:500;font-size:1rem;@media (max-width:400px){font-size:0.8rem;}align-items:center;height:50px;top:268px;background:#a92228;width:100%;padding-left:20px;padding-right:20px;a{position:relative;top:3px;font-family:"Domine";color:#f0f0f0;@media (max-width:500px){padding-left:0.7rem;padding-right:0.7rem;}@media (max-width:400px){padding-left:0.6rem;padding-right:0.6rem;}padding-left:1rem;padding-right:1rem;overflow:hidden;&:hover>div{width:100%;left:0%;background-color:#f0f0f0;transition:all 0.45s ease-out;}div{position:relative;height:1px;width:0%;top:0px;left:50%;background-color:#f0f0f0;transition:all 0.45s ease-out;}}'}),p=function(){document.getElementById("content-header-logo").style.opacity="0"},b=function(){document.getElementById("content-header-logo").style.opacity="1"},g=function(){document.getElementById("content-header-logo").style.opacity="1"};t.a=function(){return Object(a.d)(l.a,{className:"content_headroom",disableInlineStyles:!0,pin:!0,hide:!0,content:!0,instantSnap:!0,onPin:p,onUnpin:b,onUnfix:g,fixAnchor:270,pinAnchor:0,hideAnchor:1e3},Object(a.d)(s,{id:"content-header-logo",to:"/"},Object(a.d)("img",{src:d.a,alt:"Dumna Niepodległa Logo"})),Object(a.d)(u,{id:"nav"},Object(a.d)(r.Link,{to:"/"},"Wydarzenia",Object(a.d)("div",null)),Object(a.d)(r.Link,{to:"/"},"O nas",Object(a.d)("div",null)),Object(a.d)(r.Link,{to:"/"},"Kontakt",Object(a.d)("div",null)),Object(a.d)(r.Link,{to:"/"},"Sklep",Object(a.d)("div",null))))}},171:function(e,t,n){"use strict";var o=n(162),a=n(8),r=(n(0),Object(o.a)("div",{target:"et5kbtu0"})({name:"1magkk1",styles:"height:25px;"}));t.a=function(){return Object(a.d)(r,{id:"content_spacer"})}},177:function(e,t,n){"use strict";var o=n(162),a=n(8),r=(n(0),n(60)),i=n(1),l=n.n(i),c=Object(o.a)("div",{target:"e1yptj3d0"})("margin:1rem 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;a{margin:0 1rem 1rem 0;color:",function(e){return e.theme.colors.black.blue},";padding:0.3rem 0.6rem;background:",function(e){return e.theme.colors.white.grey},";border-radius:10px;&:hover{color:",function(e){return e.theme.colors.white.light},";background:",function(e){return e.theme.colors.primary.light},";border:",function(e){return e.theme.colors.primary.light},";}}"),d=function(e){var t=e.list;return Object(a.d)(c,null,t&&t.map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return Object(a.d)(r.Link,{key:e,to:"/tags/"+e},Object(a.d)("span",null,t))}))};t.a=d,d.propTypes={list:l.a.array}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-ed60f76a70543c49b52a.js.map