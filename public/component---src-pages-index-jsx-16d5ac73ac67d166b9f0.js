(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(e,t,a){"use strict";a.r(t);var i=a(162),r=a(8),n=(a(0),a(1)),o=a.n(n),s=(a(182),a(60)),l=a(184),d=a.n(l),c=a(163),u=Object(i.a)("article",{target:"ehbww6g0"})("border:rgba(0,0,0,1);margin-bottom:2rem;margin-left:0rem;padding-right:0rem;position:relative;z-index:100;border-radius:",function(e){return e.theme.borderRadius.default},";box-shadow:",function(e){return e.theme.shadow.feature.small.default},";transition:",function(e){return e.theme.transitions.boom.transition},";height:17rem;flex-basis:calc(99.9% * 1 / 3 - 2.5rem);max-width:calc(99.9% * 1 / 3 - 2.5rem);width:calc(99.9% * 1 / 3 - 2.5rem);margint-left:10%;&:hover{box-shadow:",function(e){return e.theme.shadow.feature.small.hover},";transform:scale(1.04);}@media (max-width:1000px){flex-basis:calc(99.9% * 1 / 2 - 1rem);max-width:calc(99.9% * 1 / 2 - 1rem);width:calc(99.9% * 1 / 2 - 1rem);height:18rem;}@media (max-width:700px){flex-basis:100%;max-width:100%;width:100%;height:15rem;}"),f=Object(i.a)(s.Link,{target:"ehbww6g1"})("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:row;justify-content:space-between;padding:1rem;z-index:3;border-radius:",function(e){return e.theme.borderRadius.default},";&:after{content:'';position:absolute;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 100% );z-index:-10;border-radius:",c.a.borderRadius.default,";transition:opacity ",c.a.transitions.default.duration,";}"),p=Object(i.a)("div",{target:"ehbww6g2"})("position:absolute;top:0;overflow:hidden;right:0;left:0;bottom:0;z-index:1;object-fit:cover;border-radius:",function(e){return e.theme.borderRadius.default},";img{border-radius:",function(e){return e.theme.borderRadius.default},";}> div{position:static !important;}> div > div{position:static !important;}"),h=Object(i.a)("div",{target:"ehbww6g3"})("color:",function(e){return e.theme.colors.white.light},";margin:0 1rem 1.25rem 1.25rem;position:absolute;bottom:0;left:0;"),b=Object(i.a)("h2",{target:"ehbww6g4"})({name:"1rq8xzm",styles:"margin-bottom:0.6rem;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:32px;max-height:64px;"}),g=function(e){var t=e.cover,a=e.path,i=e.date,n=e.title,o=e.excerpt;return Object(r.d)(u,{className:"post_wrapper"},Object(r.d)(p,null,Object(r.d)(d.a,{fluid:t})),Object(r.d)(f,{to:a},Object(r.d)(h,null,Object(r.d)("span",null,i),Object(r.d)(b,null,n),Object(r.d)("span",null,o))))},m=g;g.propTypes={cover:o.a.object.isRequired,path:o.a.string.isRequired,excerpt:o.a.string,date:o.a.string.isRequired,title:o.a.string.isRequired};var w=a(175),y=a(164),v=a(174);a.d(t,"query",function(){return j});var x=Object(i.a)("div",{target:"ezc1p6a0"})({name:"1gv0x0u",styles:"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:1rem 4rem 1rem 22%;"}),O=function(e){var t=e.data.allMarkdownRemark.edges;return Object(r.d)(y.a,null,Object(r.d)(v.a,null),Object(r.d)(w.a,null),Object(r.d)(x,null,t.map(function(e){var t=e.node;return Object(r.d)(m,{key:t.id,cover:t.frontmatter.cover.childImageSharp.fluid,path:t.frontmatter.path,title:t.frontmatter.title})})))};t.default=O;O.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.arrayOf(o.a.shape({node:o.a.shape({excerpt:o.a.string,frontmatter:o.a.shape({cover:o.a.object.isRequired,path:o.a.string.isRequired,title:o.a.string.isRequired,date:o.a.string.isRequired,tags:o.a.array})})}).isRequired)})})};var j="243145399"},163:function(e,t,a){"use strict";var i={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},r="cubic-bezier(0.645, 0.045, 0.355, 1)",n="cubic-bezier(0.175, 0.885, 0.32, 1.275)",o="0.4s",s={colors:i,gradient:{leftToRight:"linear-gradient(-45deg, "+i.background.white+" 0%, "+i.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+i.background.white+" 0%, "+i.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:o,timing:r,transition:"all "+o+" "+r},boom:{duration:o,timing:n,transition:"all "+o+" "+n},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=s},164:function(e,t,a){"use strict";var i=a(8),r=a(0),n=a(166),o=a(1),s=a.n(o),l=a(163),d=Object(i.c)(".headroom-wrapper{position:fixed;width:20%;height:100%;z-index:2000;}.headroom{height:100%;}}.headroom--unfixed{transition:all 0.35s ease-out;@media (max-width:",l.a.breakpoints.m,"){}@media (min-width:",l.a.breakpoints.m,"){}}.headroom--scrolled{transition:all 0.35s ease-out;}.headroom--unpinned{transform:translateY(-105%);transition:all 0.35s ease-out;}}.headroom--pinned{transform:translateY(0%);transition:all 0.35s ease-out;}"),c=a(162),u=Object(c.a)("footer",{target:"e8ayeqy0"})("position:relative;padding-top:2rem;bottom:0;box-shadow:",function(e){return e.theme.shadow.footer},";background:",function(e){return e.theme.gradient.leftToRight},";font-family:",function(e){return e.theme.fontFamily.body},";font-weight:500;"),f=Object(c.a)("div",{target:"e8ayeqy1"})("margin:0;padding-bottom:2rem;text-align:center;color:",function(e){return e.theme.colors.white.light},";"),p=Object(c.a)("div",{target:"e8ayeqy2"})({name:"1pzlgnn",styles:'font-family:"Domine";display:inline-block;margin:20px'}),h=Object(c.a)("p",{target:"e8ayeqy3"})({name:"1ghl3c5",styles:"margin:0px;color:black;"}),b=Object(c.a)("a",{target:"e8ayeqy4"})({name:"k7g3ga",styles:"color:black;display:block;"}),g=function(){return Object(i.d)(u,null,Object(i.d)(f,null,Object(i.d)(p,null,Object(i.d)(h,null,"Wojciech Samczuk"),Object(i.d)(b,null,"tel. 507 131 016"),Object(i.d)(b,null,"wojciech@dumnaniepodlegla.pl")),Object(i.d)(p,null,Object(i.d)(h,null,"Robert Wróbel"),Object(i.d)(b,null,"tel. 602 283 476"),Object(i.d)(b,null,"robert@dumnaniepodlegla.pl")),Object(i.d)(p,null,Object(i.d)(h,null,"Mieczysław Kopacz"),Object(i.d)(b,null,"tel. 502 261 218"),Object(i.d)(b,null,"mieczyslaw@dumnaniepodlegla.pl"))))},m=function(e){var t=e.children;return Object(i.d)(n.a,{theme:l.a},Object(i.d)(r.Fragment,null,Object(i.d)(i.a,{styles:Object(i.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2 );min-height:100vh;}a{color:black;transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",l.a.colors.linkHover,";}h1{}",d)}),t,Object(i.d)(g,null)))};t.a=m;m.propTypes={children:s.a.oneOfType([s.a.array,s.a.node]).isRequired}},165:function(e,t,a){e.exports=a.p+"static/logo_default-f10515b2e2e299393d184af946b3be2a.svg"},174:function(e,t,a){"use strict";var i=a(162),r=a(8),n=(a(0),a(60)),o=a(168),s=a.n(o),l=a(165),d=a.n(l),c=Object(i.a)("nav",{target:"e1yn80fr0"})({name:"16momv4",styles:'position:relative;font-weight:400;font-size:1.2rem;height:50px;background:transparent;float:right;direction:rtl;margin-right:25%;a{position:relative;font-family:"Domine";color:#ac8d64;transition:all 0.25s ease-out width:100%;display:table;overflow:hidden;div{position:relative;height:1px;width:0%;top:0px;left:50%;background-color:#dc2830;transition:all 0.45s ease-out;}&:hover>div{width:100%;left:0%;background-color:#dc2830;transition:all 0.45s ease-out;}}'}),u=Object(i.a)("img",{target:"e1yn80fr1"})({name:"1fsm09u",styles:"position:relative;width:100%;top:0px;"}),f=function(){},p=function(){},h=function(){};t.a=function(){return Object(r.d)(s.a,{id:"main_headroom",disableInlineStyles:!0,onPin:f,onUnpin:p,onUnfix:h,fixAnchor:0,pinAnchor:0,hideAnchor:150},Object(r.d)(u,{id:"logo_default",src:d.a,alt:"Dumna Niepodległa Logo"}),Object(r.d)(c,{id:"nav"},Object(r.d)(n.Link,{to:"/"},"Wydarzenia",Object(r.d)("div",null)),Object(r.d)(n.Link,{to:"/"},"O nas",Object(r.d)("div",null)),Object(r.d)(n.Link,{to:"/"},"Kontakt",Object(r.d)("div",null)),Object(r.d)(n.Link,{to:"/"},"Sklep",Object(r.d)("div",null))))}},175:function(e,t,a){"use strict";var i=a(162),r=a(8),n=(a(0),a(163),a(176),Object(i.a)("div",{target:"eowz16k0"})({name:"1ksh3d3",styles:"height:1rem;position:relative;"}));t.a=function(){return Object(r.d)(n,{id:"main_spacer"})}},176:function(e,t,a){e.exports=a.p+"static/forest-7724b0a823e6ab702e1c5e17322f4c1a.png"},182:function(e,t,a){"use strict";a(183)("small",function(e){return function(){return e(this,"small","","")}})},183:function(e,t,a){var i=a(13),r=a(22),n=a(23),o=/"/g,s=function(e,t,a,i){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},184:function(e,t,a){"use strict";var i=a(9);t.__esModule=!0,t.default=void 0;var r,n=i(a(10)),o=i(a(38)),s=i(a(82)),l=i(a(45)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+o+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,b=e.fixed,w=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,x=e.itemProp,O=this.state.imgLoaded||!1===this.state.fadeIn,j=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:O?1:0,transition:j?"opacity "+y+"ms":"none"},s),S="boolean"==typeof w?"lightgray":w,R={transitionDelay:y+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&R,s,f),z={title:t,alt:this.state.isVisible?"":a,style:L,className:p};if(h){var E=h;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),S&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),E.base64&&d.default.createElement(m,(0,l.default)({src:E.base64},z)),E.tracedSVG&&d.default.createElement(m,(0,l.default)({src:E.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,E.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:E.sizes,src:E.src,crossOrigin:this.props.crossOrigin,srcSet:E.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},E))}}))}if(b){var I=b,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},j&&R)}),I.base64&&d.default.createElement(m,(0,l.default)({src:I.base64},z)),I.tracedSVG&&d.default.createElement(m,(0,l.default)({src:I.tracedSVG},z)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(m,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},I))}}))}return null},t}(d.default.Component);w.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var x=w;t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-jsx-16d5ac73ac67d166b9f0.js.map