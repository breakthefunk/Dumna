(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,i){"use strict";i.r(t);var a=i(160),r=i(8),n=(i(0),i(1)),o=i.n(n),s=(i(257),i(60)),d=i(259),l=i.n(d),c=i(161),u=Object(a.a)("article",{target:"ehbww6g0"})("border:rgba(0,0,0,1);margin-bottom:2rem;margin-left:0rem;padding-right:0rem;position:relative;z-index:100;border-radius:",function(e){return e.theme.borderRadius.default},";box-shadow:",function(e){return e.theme.shadow.feature.small.default},";transition:",function(e){return e.theme.transitions.boom.transition},";height:17rem;flex-basis:calc(103% * 1 / 2 - 2.5rem);max-width:calc(103% * 1 / 2 - 2.5rem);width:calc(103% * 1 / 2 - 2.5rem);margint-left:10%;&:hover{box-shadow:",function(e){return e.theme.shadow.feature.small.hover},";transform:scale(1.04);}@media (max-width:1000px){flex-basis:calc(99.9% * 1 / 2 - 1rem);max-width:calc(99.9% * 1 / 2 - 1rem);width:calc(99.9% * 1 / 2 - 1rem);height:18rem;}@media (max-width:700px){flex-basis:100%;max-width:100%;width:100%;height:15rem;}"),f=Object(a.a)(s.Link,{target:"ehbww6g1"})("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:row;justify-content:space-between;padding:1rem;z-index:3;border-radius:",function(e){return e.theme.borderRadius.default},";&:after{content:'';position:absolute;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 100% );z-index:-10;border-radius:",c.a.borderRadius.default,";transition:opacity ",c.a.transitions.default.duration,";}"),p=Object(a.a)("div",{target:"ehbww6g2"})("position:absolute;top:0;overflow:hidden;right:0;left:0;bottom:0;z-index:1;object-fit:cover;border-radius:",function(e){return e.theme.borderRadius.default},";img{border-radius:",function(e){return e.theme.borderRadius.default},";}> div{position:static !important;}> div > div{position:static !important;}"),h=Object(a.a)("div",{target:"ehbww6g3"})("color:",function(e){return e.theme.colors.white.light},";margin:0 1rem 1.25rem 1.25rem;position:absolute;bottom:0;left:0;"),b=Object(a.a)("h2",{target:"ehbww6g4"})({name:"1rq8xzm",styles:"margin-bottom:0.6rem;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:32px;max-height:64px;"}),g=function(e){var t=e.cover,i=e.path,a=e.title,n=e.excerpt;return Object(r.d)(u,{className:"post_wrapper"},Object(r.d)(p,null,Object(r.d)(l.a,{fluid:t})),Object(r.d)(f,{to:i},Object(r.d)(h,null,Object(r.d)(b,null,a),Object(r.d)("span",null,n))))},m=g;g.propTypes={cover:o.a.object.isRequired,path:o.a.string.isRequired,excerpt:o.a.string,title:o.a.string.isRequired};var x=i(167);i.d(t,"query",function(){return y});var w=Object(a.a)("div",{target:"ezc1p6a0"})({name:"kyvl6w",styles:"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:1rem 2rem 1rem 2rem;@media screen and (min-width:1000px){margin:1rem 4rem 1rem 16%;}"}),v=function(e){var t=e.data.allMarkdownRemark.edges;return Object(r.d)(x.a,null,Object(r.d)(w,null,t.map(function(e){var t=e.node;return Object(r.d)(m,{key:t.id,cover:t.frontmatter.cover.childImageSharp.fluid,path:t.frontmatter.path,title:t.frontmatter.title})})))};t.default=v;v.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.arrayOf(o.a.shape({node:o.a.shape({excerpt:o.a.string,frontmatter:o.a.shape({cover:o.a.object.isRequired,path:o.a.string.isRequired,title:o.a.string.isRequired,date:o.a.string.isRequired})})}).isRequired)})})};var y="1706906673"},161:function(e,t,i){"use strict";var a={white:{base:"#fff",light:"#f0f0f0",grey:"#cecece",dark:"#a0afd7"},black:{base:"#333438",light:"#4b4e57",blue:"#2e3246"},primary:{base:"#3498db",light:"#3e5fbc",dark:"#284187"},background:{light:"#3e5fbc",dark:"#284187",red:"#d5333e",white:"#f0f0f0"}},r="cubic-bezier(0.645, 0.045, 0.355, 1)",n="cubic-bezier(0.175, 0.885, 0.32, 1.275)",o="0.4s",s={colors:a,gradient:{leftToRight:"linear-gradient(-45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)",rightToLeft:"linear-gradient(45deg, "+a.background.white+" 0%, "+a.background.white+" 100%)"},shadow:{card:"0 20px 30px rgba(0, 0, 0, 0.1)",image:"0 15px 25px rgba(0, 0, 0, 0.1)",suggestion:"0 -5px 30px rgba(0,0,0,0.2)",footer:"0 -3px 26px rgba(0,0,0,0.5)",feature:{big:{default:"0 40px 40px rgba(0, 0, 0, 0.2)",hover:"0 50px 50px rgba(0, 0, 0, 0.1)"},small:{default:"0px 3px 10px 0px rgba(0,0,0,0.6)",hover:"0px 4px 10px 0px rgba(0,0,0,0.6)"}},text:{small:"0 5px 10px rgba(0, 0, 0, 0.25)",big:"0 15px 20px rgba(0, 0, 0, 0.13)"}},breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},fontFamily:{},layout:{article:"46rem",base:"70rem",big:"83.33333rem"},borderRadius:{default:"1px",round:"1px"},transitions:{default:{duration:o,timing:r,transition:"all "+o+" "+r},boom:{duration:o,timing:n,transition:"all "+o+" "+n},headroom:{transition:"all 0.25s ease-in-out"}}};t.a=s},162:function(e,t,i){e.exports=i.p+"static/logo_default-5614b848badac3be1fa3934d522a569b.svg"},164:function(e,t,i){e.exports=i.p+"static/logo_mobile-775abad7377a9d99f873ce8f401bddc0.svg"},167:function(e,t,i){"use strict";var a=i(8),r=i(0),n=i(169),o=i(1),s=i.n(o),d=i(161),l=Object(a.c)(".headroom-wrapper{position:fixed;width:15%;display:none;min-height:200px;height:100%;z-index:2000;@media screen and (min-width:1000px){display:initial;}}.headroom{height:100%;}}.headroom--unfixed{transition:all 0.35s ease-out;@media (max-width:",d.a.breakpoints.m,"){}@media (min-width:",d.a.breakpoints.m,"){}}.headroom--scrolled{transition:all 0.35s ease-out;}.headroom--unpinned{transform:translateY(-105%);transition:all 0.35s ease-out;}}.headroom--pinned{transform:translateY(0%);transition:all 0.35s ease-out;}"),c=Object(a.c)(),u=i(160),f=i(60),p=i(170),h=i(164),b=i.n(h),g=i(162),m=i.n(g),x=Object(u.a)("div",{target:"e1lqiz990"})({name:"1giud9p",styles:"position:fixed;top:0px;left:0px;width:100%;height:60px;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2);box-shadow:0px 3px 10px 0px rgba(0,0,0,0.6);z-index:2000;display:none;@media screen and (max-width:1000px){display:block;"}),w=Object(u.a)("img",{target:"e1lqiz991"})({name:"1veikc4",styles:"position:relative;width:70%;margin-top:2rem;left:50%;transform:translateX(-50%);top:0px;"}),v=Object(u.a)("img",{target:"e1lqiz992"})({name:"1wg4nqt",styles:"position:relative;top:10px;margin-left:2rem;width:120px;"}),y={bmBurgerButton:{float:"right",position:"relative",width:"36px",height:"36px",right:"2rem",top:"12px",zIndex:"2000"},bmBurgerBars:{background:"#ac8d64"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%",width:"220px",zIndex:"3000"},bmMenu:{background:"linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2)",boxShadow:"0px 3px 10px 0px rgba(0,0,0,0.6)",padding:"2.5em 1.5em 0",fontSize:"1.15em",zIndex:"3000"},bmMorphShape:{fill:"#373a47"},bmItemList:{padding:"0.8em",display:"table-caption"},bmItem:{display:"inline-block",paddingTop:"20px",outline:"0",fontFamily:"Domine",color:"#ac8d64"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},O=function(){return Object(a.d)(x,null,Object(a.d)(p.slide,{styles:y},Object(a.d)(f.Link,{to:"/"},Object(a.d)(w,{id:"logo_default",src:m.a,alt:"Dumna Niepodległa Logo"})),Object(a.d)(f.Link,{to:"/"},"Wydarzenia"),Object(a.d)(f.Link,{to:"/"},"O nas"),Object(a.d)(f.Link,{to:"/"},"Kontakt"),Object(a.d)(f.Link,{to:"/"},"Sklep")),Object(a.d)(f.Link,{to:"/"},Object(a.d)(v,{src:b.a,alt:"Dumna Niepodległa Logo"})))},j=i(171),k=i.n(j),S=Object(u.a)("nav",{target:"e745dwd0"})({name:"1kvkohl",styles:'@media screen and (min-width:1400px){font-size:1.2rem;}position:relative;font-weight:400;font-size:1rem;height:50px;background:transparent;text-align:center;left:50%;transform:translateX(-50%);padding-top:10px;a{position:relative;font-family:"Domine";color:#ac8d64;transition:all 0.25s ease-out width:100%;display:inline-block;overflow:hidden;&:hover{}div{position:relative;height:1px;width:0%;top:0px;left:50%;background-color:#dc2830;transition:all 0.45s ease-out;}&:hover>div{width:100%;left:0%;background-color:#dc2830;transition:all 0.45s ease-out;}}'}),L=Object(u.a)("img",{target:"e745dwd1"})({name:"g9ddic",styles:"position:relative;width:70%;margin-top:1rem;left:50%;transform:translateX(-50%);top:0px;"}),z=function(){},R=function(){},F=function(){},I=function(){return Object(a.d)(k.a,{id:"main_headroom",disableInlineStyles:!0,onPin:z,onUnpin:R,onUnfix:F,fixAnchor:0,pinAnchor:0,hideAnchor:150},Object(a.d)(f.Link,{id:"main-header-logo",to:"/"},Object(a.d)(L,{id:"logo_default",src:m.a,alt:"Dumna Niepodległa Logo"})),Object(a.d)(S,{id:"nav"},Object(a.d)(f.Link,{to:"/"},"Wydarzenia",Object(a.d)("div",null)),Object(a.d)("br",null),Object(a.d)(f.Link,{to:"/about"},"O nas",Object(a.d)("div",null)),Object(a.d)("br",null),Object(a.d)("a",{href:"http://sklep.dumnaniepodlegla.pl/"},"Sklep",Object(a.d)("div",null)),Object(a.d)("br",null),Object(a.d)(f.Link,{to:"/contact"},"Kontakt",Object(a.d)("div",null)),Object(a.d)("br",null)))},E=Object(u.a)("div",{target:"epsfe350"})({name:"xifi3o",styles:"height:4rem;position:relative;@media screen and (min-width:1000px){height:1rem;}"}),q=function(){return Object(a.d)(E,{id:"main_spacer"})},T=function(e){var t=e.children;return Object(a.d)(n.a,{theme:d.a},Object(a.d)(r.Fragment,null,Object(a.d)(q,null),Object(a.d)(O,null),Object(a.d)(I,null),Object(a.d)(a.a,{styles:Object(a.c)("*,*:before,*:after{box-sizing:inherit;}html{text-rendering:optimizeLegibility;overflow-x:hidden;box-sizing:border-box;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width:100%;margin:0;padding:0;}.body-background--white{background:#f0f0f0;}body{display:flex;height:100%;margin:0;flex-direction:column;background-repeat:no-repeat;background-attachment:fixed;background:linear-gradient(to bottom,#FFFFFF 30%,#F2F2F2 );min-height:100vh;}a{color:black;transition:color 0.5s;text-decoration:none;}a:hover{text-decoration:none;color:",d.a.colors.linkHover,";}h1{}img{margin-bottom:0;}",c,";",l)}),t))};t.a=T;T.propTypes={children:s.a.oneOfType([s.a.array,s.a.node]).isRequired}},257:function(e,t,i){"use strict";i(258)("small",function(e){return function(){return e(this,"small","","")}})},258:function(e,t,i){var a=i(13),r=i(22),n=i(23),o=/"/g,s=function(e,t,i,a){var r=String(n(e)),s="<"+t;return""!==i&&(s+=" "+i+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",i)}},259:function(e,t,i){"use strict";var a=i(9);t.__esModule=!0,t.default=void 0;var r,n=a(i(10)),o=a(i(39)),s=a(i(83)),d=a(i(46)),l=a(i(0)),c=a(i(1)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),i=t.fluid?t.fluid.src:t.fixed.src;return f[i]||!1},h=new WeakMap;var b=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return i&&(i.observe(e),h.set(e,t)),function(){i.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+i+r+t+o+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({sizes:i,srcSet:a,src:r},u,{onLoad:o,onError:c,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,r=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var d=!(t.critical&&!t.fadeIn);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:d,seenBefore:s},i.imageRef=l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,o.default)((0,o.default)(i))),i.handleRef=i.handleRef.bind((0,o.default)((0,o.default)(i))),i}(0,n.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=t.fluid?t.fluid.src:t.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,b=e.fixed,x=e.backgroundColor,w=e.durationFadeIn,v=e.Tag,y=e.itemProp,O=this.state.imgLoaded||!1===this.state.fadeIn,j=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:O?1:0,transition:j?"opacity "+w+"ms":"none"},s),S="boolean"==typeof x?"lightgray":x,L={transitionDelay:w+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&L,s,f),R={title:t,alt:this.state.isVisible?"":i,style:z,className:p};if(h){var F=h;return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),S&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&L)}),F.base64&&l.default.createElement(m,(0,d.default)({src:F.base64},R)),F.tracedSVG&&l.default.createElement(m,(0,d.default)({src:F.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,F.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:F.srcSetWebp,sizes:F.sizes}),l.default.createElement(m,{alt:i,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:i,title:t},F))}}))}if(b){var I=b,E=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete E.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:E,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},j&&L)}),I.base64&&l.default.createElement(m,(0,d.default)({src:I.base64},R)),I.tracedSVG&&l.default.createElement(m,(0,d.default)({src:I.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement(m,{alt:i,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:i,title:t},I))}}))}return null},t}(l.default.Component);x.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});x.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var y=x;t.default=y}}]);
//# sourceMappingURL=component---src-pages-index-jsx-85c46786a8dd5b2b5f60.js.map