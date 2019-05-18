(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=d(a),s=d(n(1)),l=d(n(169)),c=d(n(170)),u=d(n(173));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var p=function(){},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,i=n.getScrollerPhysicalHeight(),r=n.getScrollerHeight();return t||e+i>r},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom-disable-animation headroom headroom--unpinned",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed",animation:!1,state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,u.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e&&0!==n.currentScrollY?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,"content_headroom"==e.className?n.state={state:"pinned",translateY:0,className:"headroom headroom--pinned"}:n.state={state:"unfix",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=f(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.fixAnchor,delete n.pinAnchor,delete n.hideAnchor,delete n.pin,delete n.hide,delete n.instantSnap,delete n.content,delete n.calcHeightOnResize;var r=n.style,a=n.wrapperStyle,s=f(n,["style","wrapperStyle"]),l={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},c=this.state.className;this.state.animation&&(l=i({},l,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),l=this.props.disableInlineStyles?r:i({},l,r);var u=i({},a,{height:this.state.height?this.state.height:null}),d=t?t+" headroom-wrapper":"headroom-wrapper";return o.default.createElement("div",{style:u,className:d},o.default.createElement("div",i({ref:this.setRef},s,{style:l,className:c}),this.props.children))}}]),t}();h.propTypes={className:s.default.string,parent:s.default.func,children:s.default.any.isRequired,disableInlineStyles:s.default.bool,disable:s.default.bool,onPin:s.default.func,onUnpin:s.default.func,onUnfix:s.default.func,wrapperStyle:s.default.object,fixAnchor:s.default.number,pinAnchor:s.default.number,hideAnchor:s.default.number,pin:s.default.bool,hide:s.default.bool,instantSnap:s.default.bool,content:s.default.bool,style:s.default.object,calcHeightOnResize:s.default.bool},h.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,onPin:p,onUnpin:p,onUnfix:p,wrapperStyle:{},fixAnchor:0,pinAnchor:200,hideAnchor:1500,pin:!1,hide:!1,instantSnap:!1,content:!1,calcHeightOnResize:!0},t.default=h},169:function(e,t){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(r=n?n.call(i,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},170:function(e,t,n){(function(t){for(var i=n(171),r="undefined"==typeof window?t:window,a=["moz","webkit"],o="AnimationFrame",s=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],c=0;!s&&c<a.length;c++)s=r[a[c]+"Request"+o],l=r[a[c]+"Cancel"+o]||r[a[c]+"CancelRequest"+o];if(!s||!l){var u=0,d=0,f=[];s=function(e){if(0===f.length){var t=i(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}).call(this,n(81))},171:function(e,t,n){(function(t){(function(){var n,i,r,a,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},i=t.hrtime,a=(n=function(){var e;return 1e9*(e=i())[0]+e[1]})(),s=1e9*t.uptime(),o=a-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,n(172))},172:function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Math.abs(i.fixAnchor),a=Math.abs(i.pinAnchor),o=Math.abs(i.hideAnchor),s=t>=e?"down":"up",l="down"===s,c="up"===s;if(i.disable)return{action:"none"};if(i.pin&&!1===i.hide)return r>a&&(r=a),t>=a&&l?{action:"pin"}:t<=r&&c&&"unfixed"!==n.state?{action:"unfix"}:i.instantSnap&&c?{action:"unfix"}:{actuion:"none"};if(i.hide&&!1===i.pin)return r>o&&(r=o),t>=o&&l?{action:"unpin"}:t<=r&&c&&"unfixed"!==n.state?{action:"unfix"}:i.instantSnap&&c?{action:"unfix"}:{actuion:"none"};if(i.pin&&i.hide){if(a>o&&(a=o),t>=a&&l)return t>=o&&l?{action:"unpin"}:{action:"pin"};if(t<=a&&c&&"unfixed"!==n.state)return t<=r&&c?i.content?{action:"pin"}:{action:"unfix"}:{action:"pin"};if(t<=r&&c&&"pinned"==n.state)return i.content?{action:"pin"}:{action:"unfix"};if(i.instantSnap&&c){if("unpinned"==n.state)return{action:"pin"};if("pinned"==n.state&&t<=a)return{action:"unfix"}}return{actuion:"none"}}return{action:"none"}}},195:function(e,t,n){"use strict";n(196)("small",function(e){return function(){return e(this,"small","","")}})},196:function(e,t,n){var i=n(13),r=n(22),a=n(23),o=/"/g,s=function(e,t,n,i){var r=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},197:function(e,t,n){"use strict";var i=n(9);t.__esModule=!0,t.default=void 0;var r,a=i(n(10)),o=i(n(38)),s=i(n(83)),l=i(n(45)),c=i(n(0)),u=i(n(1)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h=new WeakMap;var m=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),h.set(e,t)),function(){n.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+n+r+t+o+a+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var n=e.sizes,i=e.srcSet,r=e.src,a=e.style,o=e.onLoad,u=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:i,src:r},d,{onLoad:o,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var i=!0,r=!1,a=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:a,hasNoScript:l,seenBefore:s},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,i=e.className,r=e.style,a=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,w=e.Tag,S=e.itemProp,O=this.state.imgLoaded||!1===this.state.fadeIn,x=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,l.default)({opacity:O?1:0,transition:x?"opacity "+v+"ms":"none"},s),T="boolean"==typeof y?"lightgray":y,L={transitionDelay:v+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&L,s,f),z={title:t,alt:this.state.isVisible?"":n,style:R,className:p};if(h){var H=h;return c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&L)}),H.base64&&c.default.createElement(b,(0,l.default)({src:H.base64},z)),H.tracedSVG&&c.default.createElement(b,(0,l.default)({src:H.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,H.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:H.srcSetWebp,sizes:H.sizes}),c.default.createElement(b,{alt:n,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},H))}}))}if(m){var k=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},a);return"inherit"===a.display&&delete I.display,c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},T&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:T,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},x&&L)}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},z)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:n,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=8-c70edbfd2b069133124c.js.map