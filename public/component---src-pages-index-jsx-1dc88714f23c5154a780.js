(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,a){"use strict";a.r(t);var i=a(160),r=a(8),o=(a(0),a(1)),n=a.n(o),d=(a(195),a(60)),l=a(197),s=a.n(l),c=a(161),b=Object(i.a)("article",{target:"ehbww6g0"})("border:rgba(0,0,0,1);margin-bottom:2rem;margin-left:0rem;padding-right:0rem;position:relative;z-index:100;border-radius:",function(e){return e.theme.borderRadius.default},";box-shadow:",function(e){return e.theme.shadow.feature.small.default},";transition:",function(e){return e.theme.transitions.boom.transition},";height:17rem;flex-basis:calc(103% * 1 / 2 - 2.5rem);max-width:calc(103% * 1 / 2 - 2.5rem);width:calc(103% * 1 / 2 - 2.5rem);margint-left:10%;&:hover{box-shadow:",function(e){return e.theme.shadow.feature.small.hover},";transform:scale(1.04);}@media (max-width:1000px){flex-basis:calc(99.9% * 1 / 2 - 1rem);max-width:calc(99.9% * 1 / 2 - 1rem);width:calc(99.9% * 1 / 2 - 1rem);height:18rem;}@media (max-width:700px){flex-basis:100%;max-width:100%;width:100%;height:15rem;}"),p=Object(i.a)(d.Link,{target:"ehbww6g1"})("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:row;justify-content:space-between;padding:1rem;z-index:3;border-radius:",function(e){return e.theme.borderRadius.default},";&:after{content:'';position:absolute;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 100% );z-index:-10;border-radius:",c.a.borderRadius.default,";transition:opacity ",c.a.transitions.default.duration,";}"),m=Object(i.a)("div",{target:"ehbww6g2"})("position:absolute;top:0;overflow:hidden;right:0;left:0;bottom:0;z-index:1;object-fit:cover;border-radius:",function(e){return e.theme.borderRadius.default},";img{border-radius:",function(e){return e.theme.borderRadius.default},";}> div{position:static !important;}> div > div{position:static !important;}"),g=Object(i.a)("div",{target:"ehbww6g3"})("color:",function(e){return e.theme.colors.white.light},";margin:0 1rem 1.25rem 1.25rem;position:absolute;bottom:0;left:0;"),h=Object(i.a)("h2",{target:"ehbww6g4"})({name:"1rq8xzm",styles:"margin-bottom:0.6rem;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:32px;max-height:64px;"}),u=function(e){var t=e.cover,a=e.path,i=(e.date,e.title),o=e.excerpt;return Object(r.d)(b,{className:"post_wrapper"},Object(r.d)(m,null,Object(r.d)(s.a,{fluid:t})),Object(r.d)(p,{to:a},Object(r.d)(g,null,Object(r.d)(h,null,i),Object(r.d)("span",null,o))))},f=u;u.propTypes={cover:n.a.object.isRequired,path:n.a.string.isRequired,excerpt:n.a.string,title:n.a.string.isRequired};var x=a(175),w=a(164),v=a(167);a.d(t,"query",function(){return O});var k=Object(i.a)("div",{target:"ezc1p6a0"})({name:"kyvl6w",styles:"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:1rem 2rem 1rem 2rem;@media screen and (min-width:1000px){margin:1rem 4rem 1rem 16%;}"}),j=function(e){var t=e.data.allMarkdownRemark.edges;return Object(r.d)(w.a,null,Object(r.d)(v.a,null),Object(r.d)(x.a,null),Object(r.d)(k,null,t.map(function(e){var t=e.node;return Object(r.d)(f,{key:t.id,cover:t.frontmatter.cover.childImageSharp.fluid,path:t.frontmatter.path,title:t.frontmatter.title})})))};t.default=j;j.propTypes={data:n.a.shape({allMarkdownRemark:n.a.shape({edges:n.a.arrayOf(n.a.shape({node:n.a.shape({excerpt:n.a.string,frontmatter:n.a.shape({cover:n.a.object.isRequired,path:n.a.string.isRequired,title:n.a.string.isRequired,date:n.a.string.isRequired})})}).isRequired)})})};var O="243145399"},161:function(e,t,a){"use strict";var i={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},r="cubic-bezier(0.645, 0.045, 0.355, 1)",o="cubic-bezier(0.175, 0.885, 0.32, 1.275)",n="0.4s",d={colors:i,gradient:{leftToRight:"linear-gradient(-45deg, "+i.background.white+" 0%, "+i.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+i.background.white+" 0%, "+i.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:n,timing:r,transition:"all "+n+" "+r},boom:{duration:n,timing:o,transition:"all "+n+" "+o},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=d},163:function(e,t,a){e.exports=a.p+"static/logo_mobile-775abad7377a9d99f873ce8f401bddc0.svg"},164:function(e,t,a){"use strict";var i=a(8),r=a(0),o=a(165),n=a(1),d=a.n(n),l=a(161),s=Object(i.c)(".headroom-wrapper{position:fixed;width:0%;min-height:200px;height:100%;z-index:2000;@media screen and (min-width:1000px){width:15%;}}.headroom{height:100%;}}.headroom--unfixed{transition:all 0.35s ease-out;@media (max-width:",l.a.breakpoints.m,"){}@media (min-width:",l.a.breakpoints.m,"){}}.headroom--scrolled{transition:all 0.35s ease-out;}.headroom--unpinned{transform:translateY(-105%);transition:all 0.35s ease-out;}}.headroom--pinned{transform:translateY(0%);transition:all 0.35s ease-out;}"),c=a(160),b=a(60),p=a(163),m=a.n(p),g=a(166),h=Object(c.a)("div",{target:"e7t56vn0"})({name:"1giud9p",styles:"position:fixed;top:0px;left:0px;width:100%;height:60px;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2);box-shadow:0px 3px 10px 0px rgba(0,0,0,0.6);z-index:2000;display:none;@media screen and (max-width:1000px){display:block;"}),u=Object(c.a)("img",{target:"e7t56vn1"})({name:"1p8wy2k",styles:"position:relative;top:10px;margin-left:1%;width:120px;"}),f={bmBurgerButton:{float:"right",position:"relative",width:"36px",height:"36px",right:"20px",top:"12px",zIndex:"2000"},bmBurgerBars:{background:"#373a47"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%",zIndex:"3000"},bmMenu:{background:"linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2)",boxShadow:"0px 3px 10px 0px rgba(0,0,0,0.6)",padding:"2.5em 1.5em 0",fontSize:"1.15em",zIndex:"3000"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em",display:"table-caption",outline:"0"},bmItem:{display:"inline-block",paddingTop:"20px"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},x=function(){return Object(i.d)(h,null,Object(i.d)(g.slide,{styles:f,right:!0},Object(i.d)(b.Link,{to:"/"},"Wydarzenia"),Object(i.d)(b.Link,{to:"/"},"O nas"),Object(i.d)(b.Link,{to:"/"},"Kontakt"),Object(i.d)(b.Link,{to:"/"},"Sklep")),Object(i.d)(u,{src:m.a,alt:"Dumna Niepodległa Logo"}))},w=function(e){var t=e.children;return Object(i.d)(o.a,{theme:l.a},Object(i.d)(r.Fragment,null,Object(i.d)(i.a,{styles:Object(i.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2 );min-height:100vh;}a{color:black;transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",l.a.colors.linkHover,";}h1{}",s)}),t,Object(i.d)(x,null)))};t.a=w;w.propTypes={children:d.a.oneOfType([d.a.array,d.a.node]).isRequired}},167:function(e,t,a){"use strict";var i=a(160),r=a(8),o=(a(0),a(60)),n=a(168),d=a.n(n),l=a(174),s=a.n(l),c=Object(i.a)("nav",{target:"e1yn80fr0"})({name:"16momv4",styles:'position:relative;font-weight:400;font-size:1.2rem;height:50px;background:transparent;float:right;direction:rtl;margin-right:25%;a{position:relative;font-family:"Domine";color:#ac8d64;transition:all 0.25s ease-out width:100%;display:table;overflow:hidden;div{position:relative;height:1px;width:0%;top:0px;left:50%;background-color:#dc2830;transition:all 0.45s ease-out;}&:hover>div{width:100%;left:0%;background-color:#dc2830;transition:all 0.45s ease-out;}}'}),b=Object(i.a)("img",{target:"e1yn80fr1"})({name:"1veikc4",styles:"position:relative;width:70%;margin-top:2rem;left:50%;transform:translateX(-50%);top:0px;"}),p=function(){},m=function(){},g=function(){};t.a=function(){return Object(r.d)(d.a,{id:"main_headroom",disableInlineStyles:!0,onPin:p,onUnpin:m,onUnfix:g,fixAnchor:0,pinAnchor:0,hideAnchor:150},Object(r.d)(o.Link,{id:"main-header-logo",to:"/"},Object(r.d)(b,{id:"logo_default",src:s.a,alt:"Dumna Niepodległa Logo"})),Object(r.d)(c,{id:"nav"},Object(r.d)(o.Link,{to:"/"},"Wydarzenia",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"O nas",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"Kontakt",Object(r.d)("div",null)),Object(r.d)(o.Link,{to:"/"},"Sklep",Object(r.d)("div",null))))}},174:function(e,t,a){e.exports=a.p+"static/logo_default-5614b848badac3be1fa3934d522a569b.svg"},175:function(e,t,a){"use strict";var i=a(160),r=a(8),o=(a(0),Object(i.a)("div",{target:"eowz16k0"})({name:"1ksh3d3",styles:"height:1rem;position:relative;"}));t.a=function(){return Object(r.d)(o,{id:"main_spacer"})}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-1dc88714f23c5154a780.js.map