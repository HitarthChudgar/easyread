(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(172),i=n(180),l=(n(181),n(178)),s=n(62),c=n(173),u=(n(192),n(216),n(44),n(40)),p=n.n(u),f=n(8),d=n.n(f),g=n(218),m=n.n(g),h=n(191),E=n(201),b=n.n(E),y=(n(202),n(203)),x=n.n(y),v=n(219),C=n.n(v),N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={tipState:"null",textAnalysis:null,speech:null},n.getText=n.getText.bind(p()(n)),n.getSpeech=n.getSpeech.bind(p()(n)),n}d()(t,e);var n=t.prototype;return n.getText=function(){var e=x()(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wordsapiv1.p.rapidapi.com/words/"+this.props.text,{method:"GET",headers:{"X-Mashape-Key":"5080d3efbamshec12540514e6f7fp1c9e13jsn231e10a8d2bb"}}).then(function(){var e=x()(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:t=e.sent,console.log(t),0!=t.success?(t.syllables&&(n=t.syllables.list.reduce(function(e,t){return e+" "+t}),console.log(n)),this.setState({textAnalysis:r.a.createElement("div",{className:C.a.textAnalysis},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Syllables: ",t.syllables.count),r.a.createElement("p",null,n)):null,t.pronunciation&&t.pronunciation.all?r.a.createElement("p",null,"Pronunciation: ",t.pronunciation.all):null,t.results&&t.results.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Definition:"),r.a.createElement("p",null,t.results[0].definition)):null)})):this.setState({textAnalysis:r.a.createElement("div",{className:C.a.textAnalysis},r.a.createElement("p",null,"Word not found!"))});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.getSpeech=function(){var e=x()(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.toolTip,style:{position:"fixed",top:this.props.top,left:this.props.left}},this.state.textAnalysis,r.a.createElement("div",{className:C.a.controls},r.a.createElement("button",null,r.a.createElement("i",{className:"fas fa-file-audio"})),r.a.createElement("button",{onClick:this.getText},r.a.createElement("i",{className:"fas fa-align-left"})))))},t}(r.a.Component),S=n(14),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={textBoxes:[],cachedText:"",toolTip:null,imgLoaded:!1,textView:!1,captures:S.get("captures")},n.state.captures&&n.state.captures.length&&(n.state.captures=n.state.captures.reverse()),n.original=r.a.createRef(),n.imgLoad=n.imgLoad.bind(p()(n)),n.selectText=n.selectText.bind(p()(n)),n}d()(t,e);var n=t.prototype;return n.selectText=function(e){this.setState({toolTip:null});var t=window.getSelection();if(t.toString().length>0){var n=t.getRangeAt(0).getBoundingClientRect();this.setState({toolTip:r.a.createElement(N,{text:t.toString(),top:n.top-35,left:n.left})})}},n.imgLoad=function(){var e=this;this.setState({textBoxes:[]});var t=[],n=[];this.state.captures[this.props.id].recognitionResult.lines.forEach(function(a){n.push(r.a.createElement("p",{key:a.text,onTouchStart:function(t){e.selectText(t)},onMouseUp:function(t){e.selectText(t)},style:{fontSize:e.props.size,color:e.props.readerColor,fontFamily:e.props.readerFont,lineHeight:e.props.readerLineHeight,letterSpacing:e.props.readerLetterSpacing+"px"}},a.text));var o=Math.atan2(a.boundingBox[3]-a.boundingBox[1],a.boundingBox[2]-a.boundingBox[0]);console.log(180*o/Math.PI),a.words.forEach(function(n){var a=n.boundingBox,i=e.original.current.getBoundingClientRect();t.push({str:n.text,el:r.a.createElement(h.a,{key:n.text+Math.random(),x:a[6]+i.x,y:a[7]+i.y-Math.abs(a[1]-a[7]),text:n.text,size:Math.abs(a[1]-a[7]),angle:o})})})}),this.setState({textBoxes:t,cachedText:n,imgLoaded:!0}),console.log(n)},n.render=function(){var e=this;return this.props.id?r.a.createElement(r.a.Fragment,null,this.state.textView?r.a.createElement("div",{className:m.a.textView},r.a.createElement("h1",{style:{textAlign:"center",margin:"50px 10px 25px"}},"TextView"),r.a.createElement("div",{style:{padding:"20px",backgroundColor:this.props.readerBgColor}},this.state.toolTip,this.state.cachedText)):null,this.state.textBoxes.map(function(e){return e.el}),r.a.createElement("div",{className:m.a.single},r.a.createElement("img",{ref:this.original,src:this.state.captures[this.props.id].originalImage,onLoad:this.imgLoad})),r.a.createElement("div",{className:m.a.controls},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setState({textView:!1}),e.props.id>0&&Object(o.c)("/gallery/"+(Number(e.props.id)-1))}},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setState({textView:!1}),Object(o.c)("/gallery")}},r.a.createElement("i",{className:"fas fa-images"}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){1==e.state.imgLoaded&&e.setState({textView:!e.state.textView})}},r.a.createElement("i",{className:"fas fa-file-alt"}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setState({textView:!1}),e.props.id<e.state.captures.length-1&&Object(o.c)("/gallery/"+(Number(e.props.id)+1))}},r.a.createElement("i",{className:"fas fa-arrow-right"}))))):r.a.createElement("div",{className:m.a.gallery},this.state.captures?r.a.createElement(r.a.Fragment,null,this.state.captures.map(function(e,t){return r.a.createElement(o.a,{to:"/gallery/"+t,key:"capture-"+t},r.a.createElement("img",{src:e.renderImage}))}),r.a.createElement("div",{className:m.a.controls},r.a.createElement("button",{onClick:function(){S.clearAll(),window.location.reload()}},r.a.createElement("h3",null,"Clear Gallery")))):r.a.createElement("h3",null,"No Captures here..."))},t}(r.a.Component),T=Object(s.b)(function(e){return{readerBgColor:e.readerBgColor,readerColor:e.readerColor,readerFont:e.readerFont,readerLineHeight:e.readerLineHeight,readerLetterSpacing:e.readerLetterSpacing}},null)(w);t.default=Object(s.b)(function(e){return{bgColor:e.bgColor}},function(e){return{changeBG:function(t){return e(Object(c.a)(t))}}})(function(e){e.changeBG("white");var t=e.location.pathname,n=t.substring(t.lastIndexOf("/")+1);return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement("h1",{style:{textAlign:"center",margin:"50px 10px 25px"}},"Gallery"),r.a.createElement(T,{id:isNaN(n)?null:n}))})},172:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(39),s=n.n(l);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return l.navigate});n(174);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return u});var a=n(15),r=n(14);function o(e){return r.set("bgColor",e),{type:a.a,bgColor:e}}function i(e){return r.set("readerBgColor",e),{type:a.d,readerBgColor:e}}function l(e){return r.set("readerColor",e),{type:a.e,readerColor:e}}function s(e){return r.set("readerFont",e),{type:a.f,readerFont:e}}function c(e){return r.set("lineHeight",e),{type:a.c,lineHeight:e}}function u(e){return r.set("letterSpacing",e),{type:a.b,letterSpacing:e}}},174:function(e,t,n){var a;e.exports=(a=n(176))&&a.default||a},175:function(e){e.exports={data:{site:{siteMetadata:{title:"EasyRead"}}}}},176:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(63),s=n(3),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},177:function(e,t,n){e.exports=n.p+"static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png"},178:function(e,t,n){"use strict";var a=n(179),r=n(0),o=n.n(r),i=n(1),l=n.n(i),s=n(188),c=n.n(s);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)},o.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"}))}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},179:function(e){e.exports={data:{site:{siteMetadata:{title:"EasyRead",description:"Make reading easier",author:"@squishy123"}}}}},180:function(e,t,n){"use strict";var a=n(175),r=n(0),o=n.n(r),i=n(1),l=n.n(i),s=n(172),c=(n(184),n(40)),u=n.n(c),p=n(8),f=n.n(p),d=n(62),g=n(173),m=n(185),h=n.n(m),E=(n(186),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isCollapse:!1},n.toggleNav=n.toggleNav.bind(u()(n)),n}f()(t,e);var a=t.prototype;return a.toggleNav=function(){this.setState({isCollapse:!this.state.isCollapse})},a.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:h.a.menuToggle+" hamburger hamburger--spin "+(this.state.isCollapse?"is-active":""),onClick:this.toggleNav,type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner "+("black"==this.props.bgColor?h.a.dark:h.a.light)}))),o.a.createElement("div",{className:h.a.navContainer+" "+(this.state.isCollapse?h.a.isActive:"")},o.a.createElement("div",{className:h.a.nav},o.a.createElement("div",{className:h.a.profile},o.a.createElement("img",{src:n(177)}),o.a.createElement("h1",null,"Easyread"),o.a.createElement("p",null,"Welcome back!")),o.a.createElement("hr",null),o.a.createElement("ul",{className:h.a.pages},[{name:"Clipboard",url:"/clipboard"},{name:"Gallery",url:"/gallery"},{name:"Settings",url:"/settings"},{name:"Progress Tracker",url:"/tracker"}].map(function(t){return o.a.createElement("li",{key:t.url,onClick:e.toggleNav},o.a.createElement(s.a,{className:h.a.page,activeClassName:h.a.pageActive,to:t.url},o.a.createElement("i",{className:"fas fa-heart fa-2x"}),o.a.createElement("p",null,t.name)))})))))},t}(o.a.Component)),b=Object(d.b)(function(e){return{bgColor:e.bgColor}},function(e){return{changeBG:function(t){return e(Object(g.a)(t))}}})(E),y=(n(187),function(e){var t=e.bgColor,n=(e.changeBG,e.children);return o.a.createElement(s.b,{query:"2924840780",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement("div",{className:"main",style:{backgroundColor:t}},o.a.createElement("main",null,n),o.a.createElement("footer",null)))},data:a})});y.propTypes={children:l.a.node.isRequired};t.a=Object(d.b)(function(e){return{bgColor:e.bgColor}},function(e){return{changeBG:function(t){return e(Object(g.a)(t))}}})(y)},181:function(e,t,n){"use strict";n(182),n(0),n(172),n(183)},182:function(e){e.exports={data:{placeholderImage:null}}},191:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(62),s=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{backgroundColor:this.props.readerBgColor,zIndex:"1",position:"fixed",top:this.props.y,left:this.props.x,transform:"rotate("+(this.props.angle?this.props.angle:0)+"rad)"}},i.a.createElement("h1",{style:{margin:0,fontSize:this.props.size,color:this.props.readerColor,fontFamily:this.props.readerFont,lineHeight:this.props.readerLineHeight,letterSpacing:this.props.readerLetterSpacing+"px"}},this.props.text))},t}(i.a.Component);t.a=Object(l.b)(function(e){return{readerBgColor:e.readerBgColor,readerColor:e.readerColor,readerFont:e.readerFont,readerLineHeight:e.readerLineHeight,readerLetterSpacing:e.readerLetterSpacing}},null)(s)},192:function(e,t,n){"use strict";var a=n(6),r=n(31),o=n(18),i=n(193),l=n(84),s=n(22),c=n(190).f,u=n(189).f,p=n(29).f,f=n(195).trim,d=a.Number,g=d,m=d.prototype,h="Number"==o(n(88)(m)),E="trim"in String.prototype,b=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,o=(t=E?t.trim():f(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,s=t.slice(2),c=0,u=s.length;c<u;c++)if((i=s.charCodeAt(c))<48||i>r)return NaN;return parseInt(s,a)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(h?s(function(){m.valueOf.call(n)}):"Number"!=o(n))?i(new g(b(t)),n,d):b(t)};for(var y,x=n(21)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;x.length>v;v++)r(g,y=x[v])&&!r(d,y)&&p(d,y,u(g,y));d.prototype=m,m.constructor=d,n(17)(a,"Number",d)}},193:function(e,t,n){var a=n(11),r=n(194).set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(e,o),e}},194:function(e,t,n){var a=n(11),r=n(7),o=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(23)(Function.call,n(189).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:o}},195:function(e,t,n){var a=n(12),r=n(24),o=n(22),i=n(196),l="["+i+"]",s=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(e,t,n){var r={},l=o(function(){return!!i[e]()||"​"!="​"[e]()}),s=r[e]=l?t(p):i[e];n&&(r[n]=s),a(a.P+a.F*l,"String",r)},p=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},196:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},216:function(e,t,n){"use strict";n(217);var a=n(7),r=n(89),o=n(21),i=/./.toString,l=function(e){n(17)(RegExp.prototype,"toString",e,!0)};n(22)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},217:function(e,t,n){n(21)&&"g"!=/./g.flags&&n(29).f(RegExp.prototype,"flags",{configurable:!0,get:n(89)})}}]);
//# sourceMappingURL=component---src-pages-gallery-js-e87c9d4139d60df77f8a.js.map