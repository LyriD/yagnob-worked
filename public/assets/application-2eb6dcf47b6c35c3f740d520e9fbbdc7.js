/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;
// Generated by CoffeeScript 1.7.1

/*
jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
jQuery plugin for drop-in fix binded events problem caused by Turbolinks

The MIT License
Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */


(function() {
  var $, $document;

  $ = window.jQuery || (typeof require === "function" ? require('jquery') : void 0);

  $document = $(document);

  $.turbo = {
    version: '2.1.0',
    isReady: false,
    use: function(load, fetch) {
      return $document.off('.turbo').on("" + load + ".turbo", this.onLoad).on("" + fetch + ".turbo", this.onFetch);
    },
    addCallback: function(callback) {
      if ($.turbo.isReady) {
        callback($);
      }
      return $document.on('turbo:ready', function() {
        return callback($);
      });
    },
    onLoad: function() {
      $.turbo.isReady = true;
      return $document.trigger('turbo:ready');
    },
    onFetch: function() {
      return $.turbo.isReady = false;
    },
    register: function() {
      $(this.onLoad);
      return $.fn.ready = this.addCallback;
    }
  };

  $.turbo.register();

  $.turbo.use('page:load', 'page:fetch');

}).call(this);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
(function() {
  var CSRFToken, Click, ComponentUrl, Link, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, currentState, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  fetchReplacement = function(url, onLoadFunction) {
    if (onLoadFunction == null) {
      onLoadFunction = (function(_this) {
        return function() {};
      })(this);
    }
    triggerEvent('page:fetch', {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive', {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        reflectRedirectedUrl();
        onLoadFunction();
        return triggerEvent('page:load');
      } else {
        return document.location.href = url.absolute;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent('page:expire', pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    triggerEvent('page:change');
    return triggerEvent('page:update');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.body), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref = testDoc.body) != null ? _ref.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    Link.prototype._anchored = function() {
      var current;
      return ((this.hash && this.withoutHash()) === (current = new ComponentUrl).withoutHash()) || (this.href === current.href + '#');
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.link;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented()) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent('page:change');
      return triggerEvent('page:update');
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent('page:update');
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks
  };

}).call(this);
/*!
 * Fotorama 4.6.2 | http://fotorama.io/license/
 */

fotoramaVersion="4.6.2",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:Math.ceil(g),height:Math.ceil(i),left:Math.floor(p(o.x,b.w-g)),top:Math.floor(p(o.y,b.h-i))}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f)}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pc)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rc)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function gb(a){d.Fotorama.instances.push(a),fb()}function hb(a){d.Fotorama.instances.splice(a.index,1),fb()}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++)if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie)}}})}function g(a){return Zd[a]||ie.fullScreen}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0})}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation()}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b)}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0)}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e)}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a}function y(a){return h(a,0,zd-1)}function z(a){return Md?x(a):y(a)}function E(a){return a>0||Md?a-1:!1}function U(a){return zd-1>a||Md?a+1:!1}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max))}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"))}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd())},0)}function q(){var a=10;G(function(){return!fe||!a--&&!Mc},function(){p()})}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qb(a){Ie.append(Bd.spin().el).appendTo(a)}function Rb(){Ie.detach(),Bd&&Bd.stop()}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb()}))}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye)},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe})})}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re)},0),pd({index:h.eq,user:!0})}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()))}})}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k)}})}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Ud,w:g.w}},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m)})}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++)if(c.data===yd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wc[c]=!0}}function xc(a){return a-Se>Le.w/3}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd)}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b))}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)})}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin}}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb))}function _c(a){for(var b=Qe[a];b.length;)b.shift().removeClass(Wb)}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb())}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fd(b,c){a.trigger(ib+":"+b,[ie,c])}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0}function hd(){e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0},Qc+Pc)}function id(){ce=!(!Cd&&!de)}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd)})}},e.autoplay)})}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"))}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd())}function nd(a){qe.toggleClass(qb,a)}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b)}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a)},10)},0):ie.show(a)}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0})}function rd(a,b){Me[a]=Oe[a]=b}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left})}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0})}function ud(a){X(a,function(){setTimeout(function(){Q(re)},0),nd(!1)})}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize()}else ie.destroy()}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0}function xd(){xd.ok||(xd.ok=!0,fd("ready"))}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];
qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this)},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this},ie.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd)}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd()}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te)}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d)}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vc.event,function(){!yd||vc.is()||Cd||kd()}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub)}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this},ie.setOptions=function(a){return d.extend(e,a),vd(),this},ie.shuffle=function(){return yd&&O(yd)&&vd(),this},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==typeof b&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"))})),this},ie.stopVideo=function(){return md(Cd,!0,!0),this},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function(a,b){ld(re,b.edge)},onTouchEnd:hd,onEnd:function(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function(a,b){ld(ye,b.edge)},onTouchEnd:hd,onEnd:function(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey})}}),Pe=eb(ye,{onEnd:function(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0)},Pc),uc(c)}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0))},0)},function(){ge&&nd(!(ge=!1))}),M(we,function(a){Y(a),td.call(this,a)},{onStart:function(){gd(),Me.control=!0},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a)}),ud(this)}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie}}),vd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ib+':not([data-auto="false"])').fotorama(),"http://"===y()&&c.host.match(/\./)&&!a.blockFotoramaData&&d("body").append('<iframe src="http://data.fotorama.io/?version='+fotoramaVersion+'" style="display: none;"></iframe>')})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
/*! jsTree - v3.0.4 - 2014-09-10 - (MIT) */

(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e,t){"use strict";if(!e.jstree){var i=0,s=!1,r=!1,n=!1,a=[],d=e("script:last").attr("src"),o=document,c=o.createElement("LI"),l,h;c.setAttribute("role","treeitem"),l=o.createElement("I"),l.className="jstree-icon jstree-ocl",c.appendChild(l),l=o.createElement("A"),l.className="jstree-anchor",l.setAttribute("href","#"),h=o.createElement("I"),h.className="jstree-icon jstree-themeicon",l.appendChild(h),c.appendChild(l),l=h=null,e.jstree={version:"3.0.4",defaults:{plugins:[]},plugins:{},path:d&&-1!==d.indexOf("/")?d.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%]/g},e.jstree.create=function(t,s){var r=new e.jstree.core(++i),n=s;return s=e.extend(!0,{},e.jstree.defaults,s),n&&n.plugins&&(s.plugins=n.plugins),e.each(s.plugins,function(e,t){"core"!==e&&(r=r.plugin(t,s[t]))}),r.init(t,s),r},e.jstree.destroy=function(){e(".jstree:jstree").jstree("destroy"),e(document).off(".jstree")},e.jstree.core=function(e){this._id=e,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},e.jstree.reference=function(i){var s=null,r=null;if(i&&i.id&&(i=i.id),!r||!r.length)try{r=e(i)}catch(n){}if(!r||!r.length)try{r=e("#"+i.replace(e.jstree.idregex,"\\$&"))}catch(n){}return r&&r.length&&(r=r.closest(".jstree")).length&&(r=r.data("jstree"))?s=r:e(".jstree").each(function(){var r=e(this).data("jstree");return r&&r._model.data[i]?(s=r,!1):t}),s},e.fn.jstree=function(i){var s="string"==typeof i,r=Array.prototype.slice.call(arguments,1),n=null;return this.each(function(){var a=e.jstree.reference(this),d=s&&a?a[i]:null;return n=s&&d?d.apply(a,r):null,a||s||i!==t&&!e.isPlainObject(i)||e(this).data("jstree",new e.jstree.create(this,i)),(a&&!s||i===!0)&&(n=a||!1),null!==n&&n!==t?!1:t}),null!==n&&n!==t?n:this},e.expr[":"].jstree=e.expr.createPseudo(function(i){return function(i){return e(i).hasClass("jstree")&&e(i).data("jstree")!==t}}),e.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:e.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1},e.jstree.core.prototype={plugin:function(t,i){var s=e.jstree.plugins[t];return s?(this._data[t]={},s.prototype=this,new s(i,this)):this},init:function(t,i){this._model={data:{"#":{id:"#",parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}}},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this.element=e(t).addClass("jstree jstree-"+this._id),this.settings=i,this.element.bind("destroyed",e.proxy(this.teardown,this)),this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl="rtl"===this.element.css("direction"),this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return 3===this.nodeType&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this._data.core.li_height=this.get_container_ul().children("li:eq(0)").height()||24,this.trigger("loading"),this.load_node("#")},destroy:function(e){e||this.element.empty(),this.element.unbind("destroyed",this.teardown),this.teardown()},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){this.element.on("dblclick.jstree",function(){if(document.selection&&document.selection.empty)document.selection.empty();else if(window.getSelection){var e=window.getSelection();try{e.removeAllRanges(),e.collapse()}catch(t){}}}).on("click.jstree",".jstree-ocl",e.proxy(function(e){this.toggle_node(e.target)},this)).on("click.jstree",".jstree-anchor",e.proxy(function(t){t.preventDefault(),t.currentTarget!==document.activeElement&&e(t.currentTarget).focus(),this.activate_node(t.currentTarget,t)},this)).on("keydown.jstree",".jstree-anchor",e.proxy(function(t){if("INPUT"===t.target.tagName)return!0;var i=null;switch(t.which){case 13:case 32:t.type="click",e(t.currentTarget).trigger(t);break;case 37:t.preventDefault(),this.is_open(t.currentTarget)?this.close_node(t.currentTarget):(i=this.get_prev_dom(t.currentTarget),i&&i.length&&i.children(".jstree-anchor").focus());break;case 38:t.preventDefault(),i=this.get_prev_dom(t.currentTarget),i&&i.length&&i.children(".jstree-anchor").focus();break;case 39:t.preventDefault(),this.is_closed(t.currentTarget)?this.open_node(t.currentTarget,function(e){this.get_node(e,!0).children(".jstree-anchor").focus()}):(i=this.get_next_dom(t.currentTarget),i&&i.length&&i.children(".jstree-anchor").focus());break;case 40:t.preventDefault(),i=this.get_next_dom(t.currentTarget),i&&i.length&&i.children(".jstree-anchor").focus();break;case 46:t.preventDefault(),i=this.get_node(t.currentTarget),i&&i.id&&"#"!==i.id&&(i=this.is_selected(i)?this.get_selected():i);break;case 113:t.preventDefault(),i=this.get_node(t.currentTarget);break;default:}},this)).on("load_node.jstree",e.proxy(function(t,i){if(i.status&&("#"!==i.node.id||this._data.core.loaded||(this._data.core.loaded=!0,this.trigger("loaded")),!this._data.core.ready&&!this.get_container_ul().find(".jstree-loading:eq(0)").length)){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var s=[],r,n;for(r=0,n=this._data.core.selected.length;n>r;r++)s=s.concat(this._model.data[this._data.core.selected[r]].parents);for(s=e.vakata.array_unique(s),r=0,n=s.length;n>r;r++)this.open_node(s[r],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}setTimeout(e.proxy(function(){this.trigger("ready")},this),0)}},this)).on("init.jstree",e.proxy(function(){var e=this.settings.core.themes;this._data.core.themes.dots=e.dots,this._data.core.themes.stripes=e.stripes,this._data.core.themes.icons=e.icons,this.set_theme(e.name||"default",e.url),this.set_theme_variant(e.variant)},this)).on("loading.jstree",e.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"]()},this)).on("blur.jstree",".jstree-anchor",e.proxy(function(t){this._data.core.focused=null,e(t.currentTarget).filter(".jstree-hovered").mouseleave()},this)).on("focus.jstree",".jstree-anchor",e.proxy(function(t){var i=this.get_node(t.currentTarget);i&&i.id&&(this._data.core.focused=i.id),this.element.find(".jstree-hovered").not(t.currentTarget).mouseleave(),e(t.currentTarget).mouseenter()},this)).on("mouseenter.jstree",".jstree-anchor",e.proxy(function(e){this.hover_node(e.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",e.proxy(function(e){this.dehover_node(e.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),e(document).off(".jstree-"+this._id)},trigger:function(e,t){t||(t={}),t.instance=this,this.element.triggerHandler(e.replace(".jstree","")+".jstree",t)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children:eq(0)")},get_string:function(t){var i=this.settings.core.strings;return e.isFunction(i)?i.call(this,t):i&&i[t]?i[t]:t},_firstChild:function(e){e=e?e.firstChild:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_nextSibling:function(e){e=e?e.nextSibling:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_previousSibling:function(e){e=e?e.previousSibling:null;while(null!==e&&1!==e.nodeType)e=e.previousSibling;return e},get_node:function(t,i){t&&t.id&&(t=t.id);var s;try{if(this._model.data[t])t=this._model.data[t];else if(((s=e(t,this.element)).length||(s=e("#"+t.replace(e.jstree.idregex,"\\$&"),this.element)).length)&&this._model.data[s.closest(".jstree-node").attr("id")])t=this._model.data[s.closest(".jstree-node").attr("id")];else{if(!(s=e(t,this.element)).length||!s.hasClass("jstree"))return!1;t=this._model.data["#"]}return i&&(t="#"===t.id?this.element:e("#"+t.id.replace(e.jstree.idregex,"\\$&"),this.element)),t}catch(r){return!1}},get_path:function(e,t,i){if(e=e.parents?e:this.get_node(e),!e||"#"===e.id||!e.parents)return!1;var s,r,n=[];for(n.push(i?e.id:e.text),s=0,r=e.parents.length;r>s;s++)n.push(i?e.parents[s]:this.get_text(e.parents[s]));return n=n.reverse().slice(1),t?n.join(t):n},get_next_dom:function(t,i){var s;if(t=this.get_node(t,!0),t[0]===this.element[0]){s=this._firstChild(this.get_container_ul()[0]);while(s&&0===s.offsetHeight)s=this._nextSibling(s);return s?e(s):!1}if(!t||!t.length)return!1;if(i){s=t[0];do s=this._nextSibling(s);while(s&&0===s.offsetHeight);return s?e(s):!1}if(t.hasClass("jstree-open")){s=this._firstChild(t.children(".jstree-children")[0]);while(s&&0===s.offsetHeight)s=this._nextSibling(s);if(null!==s)return e(s)}s=t[0];do s=this._nextSibling(s);while(s&&0===s.offsetHeight);return null!==s?e(s):t.parentsUntil(".jstree",".jstree-node").next(".jstree-node:visible").eq(0)},get_prev_dom:function(t,i){var s;if(t=this.get_node(t,!0),t[0]===this.element[0]){s=this.get_container_ul()[0].lastChild;while(s&&0===s.offsetHeight)s=this._previousSibling(s);return s?e(s):!1}if(!t||!t.length)return!1;if(i){s=t[0];do s=this._previousSibling(s);while(s&&0===s.offsetHeight);return s?e(s):!1}s=t[0];do s=this._previousSibling(s);while(s&&0===s.offsetHeight);if(null!==s){t=e(s);while(t.hasClass("jstree-open"))t=t.children(".jstree-children:eq(0)").children(".jstree-node:visible:last");return t}return s=t[0].parentNode.parentNode,s&&s.className&&-1!==s.className.indexOf("jstree-node")?e(s):!1},get_parent:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.parent:!1},get_children_dom:function(e){return e=this.get_node(e,!0),e[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):e&&e.length?e.children(".jstree-children").children(".jstree-node"):!1},is_parent:function(e){return e=this.get_node(e),e&&(e.state.loaded===!1||e.children.length>0)},is_loaded:function(e){return e=this.get_node(e),e&&e.state.loaded},is_loading:function(e){return e=this.get_node(e),e&&e.state&&e.state.loading},is_open:function(e){return e=this.get_node(e),e&&e.state.opened},is_closed:function(e){return e=this.get_node(e),e&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(t,i){var s,r,n,a,d;if(e.isArray(t))return this._load_nodes(t.slice(),i),!0;if(t=this.get_node(t),!t)return i&&i.call(this,t,!1),!1;if(t.state.loaded){for(t.state.loaded=!1,s=0,r=t.children_d.length;r>s;s++){for(n=0,a=t.parents.length;a>n;n++)this._model.data[t.parents[n]].children_d=e.vakata.array_remove_item(this._model.data[t.parents[n]].children_d,t.children_d[s]);this._model.data[t.children_d[s]].state.selected&&(d=!0,this._data.core.selected=e.vakata.array_remove_item(this._data.core.selected,t.children_d[s])),delete this._model.data[t.children_d[s]]}t.children=[],t.children_d=[],d&&this.trigger("changed",{action:"load_node",node:t,selected:this._data.core.selected})}return t.state.loading=!0,this.get_node(t,!0).addClass("jstree-loading"),this._load_node(t,e.proxy(function(e){t=this._model.data[t.id],t.state.loading=!1,t.state.loaded=e;var s=this.get_node(t,!0);t.state.loaded&&!t.children.length&&s&&s.length&&!s.hasClass("jstree-leaf")&&s.removeClass("jstree-closed jstree-open").addClass("jstree-leaf"),s.removeClass("jstree-loading"),this.trigger("load_node",{node:t,status:e}),i&&i.call(this,t,e)},this)),!0},_load_nodes:function(e,t,i){var s=!0,r=function(){this._load_nodes(e,t,!0)},n=this._model.data,a,d;for(a=0,d=e.length;d>a;a++)!n[e[a]]||n[e[a]].state.loaded&&i||(this.is_loading(e[a])||this.load_node(e[a],r),s=!1);s&&t&&!t.done&&(t.call(this,e),t.done=!0)},_load_node:function(t,i){var s=this.settings.core.data,r;return s?e.isFunction(s)?s.call(this,t,e.proxy(function(s){s===!1&&i.call(this,!1),this["string"==typeof s?"_append_html_data":"_append_json_data"](t,"string"==typeof s?e(s):s,function(e){i.call(this,e)})},this)):"object"==typeof s?s.url?(s=e.extend(!0,{},s),e.isFunction(s.url)&&(s.url=s.url.call(this,t)),e.isFunction(s.data)&&(s.data=s.data.call(this,t)),e.ajax(s).done(e.proxy(function(s,r,n){var a=n.getResponseHeader("Content-Type");return-1!==a.indexOf("json")||"object"==typeof s?this._append_json_data(t,s,function(e){i.call(this,e)}):-1!==a.indexOf("html")||"string"==typeof s?this._append_html_data(t,e(s),function(e){i.call(this,e)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:t.id,xhr:n})},this.settings.core.error.call(this,this._data.core.last_error),i.call(this,!1))},this)).fail(e.proxy(function(e){i.call(this,!1),this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:t.id,xhr:e})},this.settings.core.error.call(this,this._data.core.last_error)},this))):(r=e.isArray(s)||e.isPlainObject(s)?JSON.parse(JSON.stringify(s)):s,"#"===t.id?this._append_json_data(t,r,function(e){i.call(this,e)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:t.id})},this.settings.core.error.call(this,this._data.core.last_error),i.call(this,!1))):"string"==typeof s?"#"===t.id?this._append_html_data(t,e(s),function(e){i.call(this,e)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:t.id})},this.settings.core.error.call(this,this._data.core.last_error),i.call(this,!1)):i.call(this,!1):"#"===t.id?this._append_html_data(t,this._data.core.original_container_html.clone(!0),function(e){i.call(this,e)}):i.call(this,!1)},_node_changed:function(e){e=this.get_node(e),e&&this._model.changed.push(e.id)},_append_html_data:function(t,i,s){t=this.get_node(t),t.children=[],t.children_d=[];var r=i.is("ul")?i.children():i,n=t.id,a=[],d=[],o=this._model.data,c=o[n],l=this._data.core.selected.length,h,_,u;for(r.each(e.proxy(function(t,i){h=this._parse_model_from_html(e(i),n,c.parents.concat()),h&&(a.push(h),d.push(h),o[h].children_d.length&&(d=d.concat(o[h].children_d)))},this)),c.children=a,c.children_d=d,_=0,u=c.parents.length;u>_;_++)o[c.parents[_]].children_d=o[c.parents[_]].children_d.concat(d);this.trigger("model",{nodes:d,parent:n}),"#"!==n?(this._node_changed(n),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==l&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),s.call(this,!0)},_append_json_data:function(t,i,s,r){t=this.get_node(t),t.children=[],t.children_d=[],i.d&&(i=i.d,"string"==typeof i&&(i=JSON.parse(i))),e.isArray(i)||(i=[i]);var n=null,a={df:this._model.default_state,dat:i,par:t.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},d=function(e,t){e.data&&(e=e.data);var i=e.dat,s=e.par,r=[],n=[],a=[],d=e.df,o=e.t_id,c=e.t_cnt,l=e.m,h=l[s],_=e.sel,u,g,f,p,m=function(e,i,s){s=s?s.concat():[],i&&s.unshift(i);var r=""+e.id,n,o,c,h,_={id:r,text:e.text||"",icon:e.icon!==t?e.icon:!0,parent:i,parents:s,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(n in d)d.hasOwnProperty(n)&&(_.state[n]=d[n]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(_.icon=e.data.jstree.icon),e&&e.data&&(_.data=e.data,e.data.jstree))for(n in e.data.jstree)e.data.jstree.hasOwnProperty(n)&&(_.state[n]=e.data.jstree[n]);if(e&&"object"==typeof e.state)for(n in e.state)e.state.hasOwnProperty(n)&&(_.state[n]=e.state[n]);if(e&&"object"==typeof e.li_attr)for(n in e.li_attr)e.li_attr.hasOwnProperty(n)&&(_.li_attr[n]=e.li_attr[n]);if(_.li_attr.id||(_.li_attr.id=r),e&&"object"==typeof e.a_attr)for(n in e.a_attr)e.a_attr.hasOwnProperty(n)&&(_.a_attr[n]=e.a_attr[n]);for(e&&e.children&&e.children===!0&&(_.state.loaded=!1,_.children=[],_.children_d=[]),l[_.id]=_,n=0,o=_.children.length;o>n;n++)c=m(l[_.children[n]],_.id,s),h=l[c],_.children_d.push(c),h.children_d.length&&(_.children_d=_.children_d.concat(h.children_d));return delete e.data,delete e.children,l[_.id].original=e,_.state.selected&&a.push(_.id),_.id},v=function(e,i,s){s=s?s.concat():[],i&&s.unshift(i);var r=!1,n,h,_,u,g;do r="j"+o+"_"+ ++c;while(l[r]);g={id:!1,text:"string"==typeof e?e:"",icon:"object"==typeof e&&e.icon!==t?e.icon:!0,parent:i,parents:s,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(n in d)d.hasOwnProperty(n)&&(g.state[n]=d[n]);if(e&&e.id&&(g.id=""+e.id),e&&e.text&&(g.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(g.icon=e.data.jstree.icon),e&&e.data&&(g.data=e.data,e.data.jstree))for(n in e.data.jstree)e.data.jstree.hasOwnProperty(n)&&(g.state[n]=e.data.jstree[n]);if(e&&"object"==typeof e.state)for(n in e.state)e.state.hasOwnProperty(n)&&(g.state[n]=e.state[n]);if(e&&"object"==typeof e.li_attr)for(n in e.li_attr)e.li_attr.hasOwnProperty(n)&&(g.li_attr[n]=e.li_attr[n]);if(g.li_attr.id&&!g.id&&(g.id=""+g.li_attr.id),g.id||(g.id=r),g.li_attr.id||(g.li_attr.id=g.id),e&&"object"==typeof e.a_attr)for(n in e.a_attr)e.a_attr.hasOwnProperty(n)&&(g.a_attr[n]=e.a_attr[n]);if(e&&e.children&&e.children.length){for(n=0,h=e.children.length;h>n;n++)_=v(e.children[n],g.id,s),u=l[_],g.children.push(_),u.children_d.length&&(g.children_d=g.children_d.concat(u.children_d));g.children_d=g.children_d.concat(g.children)}return e&&e.children&&e.children===!0&&(g.state.loaded=!1,g.children=[],g.children_d=[]),delete e.data,delete e.children,g.original=e,l[g.id]=g,g.state.selected&&a.push(g.id),g.id};if(i.length&&i[0].id!==t&&i[0].parent!==t){for(g=0,f=i.length;f>g;g++)i[g].children||(i[g].children=[]),l[""+i[g].id]=i[g];for(g=0,f=i.length;f>g;g++)l[""+i[g].parent].children.push(""+i[g].id),h.children_d.push(""+i[g].id);for(g=0,f=h.children.length;f>g;g++)u=m(l[h.children[g]],s,h.parents.concat()),n.push(u),l[u].children_d.length&&(n=n.concat(l[u].children_d));for(g=0,f=h.parents.length;f>g;g++)l[h.parents[g]].children_d=l[h.parents[g]].children_d.concat(n);p={cnt:c,mod:l,sel:_,par:s,dpc:n,add:a}}else{for(g=0,f=i.length;f>g;g++)u=v(i[g],s,h.parents.concat()),u&&(r.push(u),n.push(u),l[u].children_d.length&&(n=n.concat(l[u].children_d)));for(h.children=r,h.children_d=n,g=0,f=h.parents.length;f>g;g++)l[h.parents[g]].children_d=l[h.parents[g]].children_d.concat(n);p={cnt:c,mod:l,sel:_,par:s,dpc:n,add:a}}return p},o=function(t,i){if(this._cnt=t.cnt,this._model.data=t.mod,i){var r,n,a=t.add,d=t.sel,o=this._data.core.selected.slice(),c=this._model.data;if(d.length!==o.length||e.vakata.array_unique(d.concat(o)).length!==d.length){for(r=0,n=d.length;n>r;r++)-1===e.inArray(d[r],a)&&-1===e.inArray(d[r],o)&&(c[d[r]].state.selected=!1);for(r=0,n=o.length;n>r;r++)-1===e.inArray(o[r],d)&&(c[o[r]].state.selected=!0)}}t.add.length&&(this._data.core.selected=this._data.core.selected.concat(t.add)),this.trigger("model",{nodes:t.dpc,parent:t.par}),"#"!==t.par?(this._node_changed(t.par),this.redraw()):this.redraw(!0),t.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),s.call(this,!0)};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{null===this._wrk&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+(""+d).replace(/return ([^;}]+)[\s;}]+$/,"postMessage($1);}")],{type:"text/javascript"}))),!this._data.core.working||r?(this._data.core.working=!0,n=new window.Worker(this._wrk),n.onmessage=e.proxy(function(e){o.call(this,e.data,!0),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),a.par?n.postMessage(a):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([t,i,s,!0])}catch(c){o.call(this,d(a),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else o.call(this,d(a),!1)},_parse_model_from_html:function(i,s,r){r=r?[].concat(r):[],s&&r.unshift(s);var n,a,d=this._model.data,o={id:!1,text:!1,icon:!0,parent:s,parents:r,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},c,l,h;for(c in this._model.default_state)this._model.default_state.hasOwnProperty(c)&&(o.state[c]=this._model.default_state[c]);if(l=e.vakata.attributes(i,!0),e.each(l,function(i,s){return s=e.trim(s),s.length?(o.li_attr[i]=s,"id"===i&&(o.id=""+s),t):!0}),l=i.children("a").eq(0),l.length&&(l=e.vakata.attributes(l,!0),e.each(l,function(t,i){i=e.trim(i),i.length&&(o.a_attr[t]=i)})),l=i.children("a:eq(0)").length?i.children("a:eq(0)").clone():i.clone(),l.children("ins, i, ul").remove(),l=l.html(),l=e("<div />").html(l),o.text=this.settings.core.force_text?l.text():l.html(),l=i.data(),o.data=l?e.extend(!0,{},l):null,o.state.opened=i.hasClass("jstree-open"),o.state.selected=i.children("a").hasClass("jstree-clicked"),o.state.disabled=i.children("a").hasClass("jstree-disabled"),o.data&&o.data.jstree)for(c in o.data.jstree)o.data.jstree.hasOwnProperty(c)&&(o.state[c]=o.data.jstree[c]);l=i.children("a").children(".jstree-themeicon"),l.length&&(o.icon=l.hasClass("jstree-themeicon-hidden")?!1:l.attr("rel")),o.state.icon&&(o.icon=o.state.icon),l=i.children("ul").children("li");do h="j"+this._id+"_"+ ++this._cnt;while(d[h]);return o.id=o.li_attr.id?""+o.li_attr.id:h,l.length?(l.each(e.proxy(function(t,i){n=this._parse_model_from_html(e(i),o.id,r),a=this._model.data[n],o.children.push(n),a.children_d.length&&(o.children_d=o.children_d.concat(a.children_d))},this)),o.children_d=o.children_d.concat(o.children)):i.hasClass("jstree-closed")&&(o.state.loaded=!1),o.li_attr["class"]&&(o.li_attr["class"]=o.li_attr["class"].replace("jstree-closed","").replace("jstree-open","")),o.a_attr["class"]&&(o.a_attr["class"]=o.a_attr["class"].replace("jstree-clicked","").replace("jstree-disabled","")),d[o.id]=o,o.state.selected&&this._data.core.selected.push(o.id),o.id},_parse_model_from_flat_json:function(e,i,s){s=s?s.concat():[],i&&s.unshift(i);var r=""+e.id,n=this._model.data,a=this._model.default_state,d,o,c,l,h={id:r,text:e.text||"",icon:e.icon!==t?e.icon:!0,parent:i,parents:s,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(d in a)a.hasOwnProperty(d)&&(h.state[d]=a[d]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(h.icon=e.data.jstree.icon),e&&e.data&&(h.data=e.data,e.data.jstree))for(d in e.data.jstree)e.data.jstree.hasOwnProperty(d)&&(h.state[d]=e.data.jstree[d]);if(e&&"object"==typeof e.state)for(d in e.state)e.state.hasOwnProperty(d)&&(h.state[d]=e.state[d]);if(e&&"object"==typeof e.li_attr)for(d in e.li_attr)e.li_attr.hasOwnProperty(d)&&(h.li_attr[d]=e.li_attr[d]);if(h.li_attr.id||(h.li_attr.id=r),e&&"object"==typeof e.a_attr)for(d in e.a_attr)e.a_attr.hasOwnProperty(d)&&(h.a_attr[d]=e.a_attr[d]);for(e&&e.children&&e.children===!0&&(h.state.loaded=!1,h.children=[],h.children_d=[]),n[h.id]=h,d=0,o=h.children.length;o>d;d++)c=this._parse_model_from_flat_json(n[h.children[d]],h.id,s),l=n[c],h.children_d.push(c),l.children_d.length&&(h.children_d=h.children_d.concat(l.children_d));return delete e.data,delete e.children,n[h.id].original=e,h.state.selected&&this._data.core.selected.push(h.id),h.id},_parse_model_from_json:function(e,i,s){s=s?s.concat():[],i&&s.unshift(i);var r=!1,n,a,d,o,c=this._model.data,l=this._model.default_state,h;do r="j"+this._id+"_"+ ++this._cnt;while(c[r]);h={id:!1,text:"string"==typeof e?e:"",icon:"object"==typeof e&&e.icon!==t?e.icon:!0,parent:i,parents:s,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(n in l)l.hasOwnProperty(n)&&(h.state[n]=l[n]);if(e&&e.id&&(h.id=""+e.id),e&&e.text&&(h.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(h.icon=e.data.jstree.icon),e&&e.data&&(h.data=e.data,e.data.jstree))for(n in e.data.jstree)e.data.jstree.hasOwnProperty(n)&&(h.state[n]=e.data.jstree[n]);if(e&&"object"==typeof e.state)for(n in e.state)e.state.hasOwnProperty(n)&&(h.state[n]=e.state[n]);if(e&&"object"==typeof e.li_attr)for(n in e.li_attr)e.li_attr.hasOwnProperty(n)&&(h.li_attr[n]=e.li_attr[n]);if(h.li_attr.id&&!h.id&&(h.id=""+h.li_attr.id),h.id||(h.id=r),h.li_attr.id||(h.li_attr.id=h.id),e&&"object"==typeof e.a_attr)for(n in e.a_attr)e.a_attr.hasOwnProperty(n)&&(h.a_attr[n]=e.a_attr[n]);if(e&&e.children&&e.children.length){for(n=0,a=e.children.length;a>n;n++)d=this._parse_model_from_json(e.children[n],h.id,s),o=c[d],h.children.push(d),o.children_d.length&&(h.children_d=h.children_d.concat(o.children_d));h.children_d=h.children_d.concat(h.children)}return e&&e.children&&e.children===!0&&(h.state.loaded=!1,h.children=[],h.children_d=[]),delete e.data,delete e.children,h.original=e,c[h.id]=h,h.state.selected&&this._data.core.selected.push(h.id),h.id},_redraw:function(){var e=this._model.force_full_redraw?this._model.data["#"].children.concat([]):this._model.changed.concat([]),t=document.createElement("UL"),i,s,r,n=this._data.core.focused;for(s=0,r=e.length;r>s;s++)i=this.redraw_node(e[s],!0,this._model.force_full_redraw),i&&this._model.force_full_redraw&&t.appendChild(i);this._model.force_full_redraw&&(t.className=this.get_container_ul()[0].className,this.element.empty().append(t)),null!==n&&(i=this.get_node(n,!0),i&&i.length&&i.children(".jstree-anchor")[0]!==document.activeElement?i.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},redraw_node:function(t,i,s){var r=this.get_node(t),n=!1,a=!1,d=!1,o=!1,l=!1,h=!1,_="",u=document,g=this._model.data,f=!1,p=!1,m=null;if(!r)return!1;if("#"===r.id)return this.redraw(!0);if(i=i||0===r.children.length,t=document.querySelector?this.element[0].querySelector("#"+(-1!=="0123456789".indexOf(r.id[0])?"\\3"+r.id[0]+" "+r.id.substr(1).replace(e.jstree.idregex,"\\$&"):r.id.replace(e.jstree.idregex,"\\$&"))):document.getElementById(r.id))t=e(t),s||(n=t.parent().parent()[0],n===this.element[0]&&(n=null),a=t.index()),i||!r.children.length||t.children(".jstree-children").length||(i=!0),i||(d=t.children(".jstree-children")[0]),p=t.attr("aria-selected"),f=t.children(".jstree-anchor")[0]===document.activeElement,t.remove();else if(i=!0,!s){if(n="#"!==r.parent?e("#"+r.parent.replace(e.jstree.idregex,"\\$&"),this.element)[0]:null,!(null===n||n&&g[r.parent].state.opened))return!1;a=e.inArray(r.id,null===n?g["#"].children:g[r.parent].children)}t=c.cloneNode(!0),_="jstree-node ";for(o in r.li_attr)if(r.li_attr.hasOwnProperty(o)){if("id"===o)continue;"class"!==o?t.setAttribute(o,r.li_attr[o]):_+=r.li_attr[o]}p&&"false"!==p&&t.setAttribute("aria-selected",!0),r.state.loaded&&!r.children.length?_+=" jstree-leaf":(_+=r.state.opened&&r.state.loaded?" jstree-open":" jstree-closed",t.setAttribute("aria-expanded",r.state.opened&&r.state.loaded)),null!==r.parent&&g[r.parent].children[g[r.parent].children.length-1]===r.id&&(_+=" jstree-last"),t.id=r.id,t.className=_,_=(r.state.selected?" jstree-clicked":"")+(r.state.disabled?" jstree-disabled":"");for(l in r.a_attr)if(r.a_attr.hasOwnProperty(l)){if("href"===l&&"#"===r.a_attr[l])continue;"class"!==l?t.childNodes[1].setAttribute(l,r.a_attr[l]):_+=" "+r.a_attr[l]}if(_.length&&(t.childNodes[1].className="jstree-anchor "+_),(r.icon&&r.icon!==!0||r.icon===!1)&&(r.icon===!1?t.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":-1===r.icon.indexOf("/")&&-1===r.icon.indexOf(".")?t.childNodes[1].childNodes[0].className+=" "+r.icon+" jstree-themeicon-custom":(t.childNodes[1].childNodes[0].style.backgroundImage="url("+r.icon+")",t.childNodes[1].childNodes[0].style.backgroundPosition="center center",t.childNodes[1].childNodes[0].style.backgroundSize="auto",t.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?t.childNodes[1].appendChild(u.createTextNode(r.text)):t.childNodes[1].innerHTML+=r.text,i&&r.children.length&&r.state.opened&&r.state.loaded){for(h=u.createElement("UL"),h.setAttribute("role","group"),h.className="jstree-children",o=0,l=r.children.length;l>o;o++)h.appendChild(this.redraw_node(r.children[o],i,!0));t.appendChild(h)}if(d&&t.appendChild(d),!s){for(n||(n=this.element[0]),o=0,l=n.childNodes.length;l>o;o++)if(n.childNodes[o]&&n.childNodes[o].className&&-1!==n.childNodes[o].className.indexOf("jstree-children")){m=n.childNodes[o];break}m||(m=u.createElement("UL"),m.setAttribute("role","group"),m.className="jstree-children",n.appendChild(m)),n=m,n.childNodes.length>a?n.insertBefore(t,n.childNodes[a]):n.appendChild(t),f&&t.childNodes[1].focus()}return r.state.opened&&!r.state.loaded&&(r.state.opened=!1,setTimeout(e.proxy(function(){this.open_node(r.id,!1,0)},this),0)),t},open_node:function(i,s,r){var n,a,d,o;if(e.isArray(i)){for(i=i.slice(),n=0,a=i.length;a>n;n++)this.open_node(i[n],s,r);return!0}if(i=this.get_node(i),!i||"#"===i.id)return!1;if(r=r===t?this.settings.core.animation:r,!this.is_closed(i))return s&&s.call(this,i,!1),!1;if(this.is_loaded(i))d=this.get_node(i,!0),o=this,d.length&&(i.children.length&&!this._firstChild(d.children(".jstree-children")[0])&&(i.state.opened=!0,this.redraw_node(i,!0),d=this.get_node(i,!0)),r?(this.trigger("before_open",{node:i}),d.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded",!0).children(".jstree-children").stop(!0,!0).slideDown(r,function(){this.style.display="",o.trigger("after_open",{node:i})})):(this.trigger("before_open",{node:i}),d[0].className=d[0].className.replace("jstree-closed","jstree-open"),d[0].setAttribute("aria-expanded",!0))),i.state.opened=!0,s&&s.call(this,i,!0),d.length||this.trigger("before_open",{node:i}),this.trigger("open_node",{node:i}),r&&d.length||this.trigger("after_open",{node:i});else{if(this.is_loading(i))return setTimeout(e.proxy(function(){this.open_node(i,s,r)},this),500);this.load_node(i,function(e,t){return t?this.open_node(e,s,r):s?s.call(this,e,!1):!1})}},_open_to:function(t){if(t=this.get_node(t),!t||"#"===t.id)return!1;var i,s,r=t.parents;for(i=0,s=r.length;s>i;i+=1)"#"!==i&&this.open_node(r[i],!1,0);return e("#"+t.id.replace(e.jstree.idregex,"\\$&"),this.element)},close_node:function(i,s){var r,n,a,d;if(e.isArray(i)){for(i=i.slice(),r=0,n=i.length;n>r;r++)this.close_node(i[r],s);return!0}return i=this.get_node(i),i&&"#"!==i.id?this.is_closed(i)?!1:(s=s===t?this.settings.core.animation:s,a=this,d=this.get_node(i,!0),d.length&&(s?d.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded",!1).children(".jstree-children").stop(!0,!0).slideUp(s,function(){this.style.display="",d.children(".jstree-children").remove(),a.trigger("after_close",{node:i})}):(d[0].className=d[0].className.replace("jstree-open","jstree-closed"),d.attr("aria-expanded",!1).children(".jstree-children").remove())),i.state.opened=!1,this.trigger("close_node",{node:i}),s&&d.length||this.trigger("after_close",{node:i}),t):!1
},toggle_node:function(i){var s,r;if(e.isArray(i)){for(i=i.slice(),s=0,r=i.length;r>s;s++)this.toggle_node(i[s]);return!0}return this.is_closed(i)?this.open_node(i):this.is_open(i)?this.close_node(i):t},open_all:function(e,t,i){if(e||(e="#"),e=this.get_node(e),!e)return!1;var s="#"===e.id?this.get_container_ul():this.get_node(e,!0),r,n,a;if(!s.length){for(r=0,n=e.children_d.length;n>r;r++)this.is_closed(this._model.data[e.children_d[r]])&&(this._model.data[e.children_d[r]].state.opened=!0);return this.trigger("open_all",{node:e})}i=i||s,a=this,s=this.is_closed(e)?s.find(".jstree-closed").addBack():s.find(".jstree-closed"),s.each(function(){a.open_node(this,function(e,s){s&&this.is_parent(e)&&this.open_all(e,t,i)},t||0)}),0===i.find(".jstree-closed").length&&this.trigger("open_all",{node:this.get_node(i)})},close_all:function(t,i){if(t||(t="#"),t=this.get_node(t),!t)return!1;var s="#"===t.id?this.get_container_ul():this.get_node(t,!0),r=this,n,a;if(!s.length){for(n=0,a=t.children_d.length;a>n;n++)this._model.data[t.children_d[n]].state.opened=!1;return this.trigger("close_all",{node:t})}s=this.is_open(t)?s.find(".jstree-open").addBack():s.find(".jstree-open"),e(s.get().reverse()).each(function(){r.close_node(this,i||0)}),this.trigger("close_all",{node:t})},is_disabled:function(e){return e=this.get_node(e),e&&e.state&&e.state.disabled},enable_node:function(i){var s,r;if(e.isArray(i)){for(i=i.slice(),s=0,r=i.length;r>s;s++)this.enable_node(i[s]);return!0}return i=this.get_node(i),i&&"#"!==i.id?(i.state.disabled=!1,this.get_node(i,!0).children(".jstree-anchor").removeClass("jstree-disabled"),this.trigger("enable_node",{node:i}),t):!1},disable_node:function(i){var s,r;if(e.isArray(i)){for(i=i.slice(),s=0,r=i.length;r>s;s++)this.disable_node(i[s]);return!0}return i=this.get_node(i),i&&"#"!==i.id?(i.state.disabled=!0,this.get_node(i,!0).children(".jstree-anchor").addClass("jstree-disabled"),this.trigger("disable_node",{node:i}),t):!1},activate_node:function(e,i){if(this.is_disabled(e))return!1;if(this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==t?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(i.metaKey||i.ctrlKey||i.shiftKey)&&(!i.shiftKey||this._data.core.last_clicked&&this.get_parent(e)&&this.get_parent(e)===this._data.core.last_clicked.parent))if(i.shiftKey){var s=this.get_node(e).id,r=this._data.core.last_clicked.id,n=this.get_node(this._data.core.last_clicked.parent).children,a=!1,d,o;for(d=0,o=n.length;o>d;d+=1)n[d]===s&&(a=!a),n[d]===r&&(a=!a),a||n[d]===s||n[d]===r?this.select_node(n[d],!1,!1,i):this.deselect_node(n[d],!1,i)}else this.is_selected(e)?this.deselect_node(e,!1,i):this.select_node(e,!1,!1,i);else!this.settings.core.multiple&&(i.metaKey||i.ctrlKey||i.shiftKey)&&this.is_selected(e)?this.deselect_node(e,!1,i):(this.deselect_all(!0),this.select_node(e,!1,!1,i),this._data.core.last_clicked=this.get_node(e));this.trigger("activate_node",{node:this.get_node(e)})},hover_node:function(e){if(e=this.get_node(e,!0),!e||!e.length||e.children(".jstree-hovered").length)return!1;var t=this.element.find(".jstree-hovered"),i=this.element;t&&t.length&&this.dehover_node(t),e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),setTimeout(function(){i.attr("aria-activedescendant",e[0].id),e.attr("aria-selected",!0)},0)},dehover_node:function(e){return e=this.get_node(e,!0),e&&e.length&&e.children(".jstree-hovered").length?(e.attr("aria-selected",!1).children(".jstree-anchor").removeClass("jstree-hovered"),this.trigger("dehover_node",{node:this.get_node(e)}),t):!1},select_node:function(i,s,r,n){var a,d,o,c;if(e.isArray(i)){for(i=i.slice(),d=0,o=i.length;o>d;d++)this.select_node(i[d],s,r,n);return!0}return i=this.get_node(i),i&&"#"!==i.id?(a=this.get_node(i,!0),i.state.selected||(i.state.selected=!0,this._data.core.selected.push(i.id),r||(a=this._open_to(i)),a&&a.length&&a.children(".jstree-anchor").addClass("jstree-clicked"),this.trigger("select_node",{node:i,selected:this._data.core.selected,event:n}),s||this.trigger("changed",{action:"select_node",node:i,selected:this._data.core.selected,event:n})),t):!1},deselect_node:function(i,s,r){var n,a,d;if(e.isArray(i)){for(i=i.slice(),n=0,a=i.length;a>n;n++)this.deselect_node(i[n],s,r);return!0}return i=this.get_node(i),i&&"#"!==i.id?(d=this.get_node(i,!0),i.state.selected&&(i.state.selected=!1,this._data.core.selected=e.vakata.array_remove_item(this._data.core.selected,i.id),d.length&&d.children(".jstree-anchor").removeClass("jstree-clicked"),this.trigger("deselect_node",{node:i,selected:this._data.core.selected,event:r}),s||this.trigger("changed",{action:"deselect_node",node:i,selected:this._data.core.selected,event:r})),t):!1},select_all:function(e){var t=this._data.core.selected.concat([]),i,s;for(this._data.core.selected=this._model.data["#"].children_d.concat(),i=0,s=this._data.core.selected.length;s>i;i++)this._model.data[this._data.core.selected[i]]&&(this._model.data[this._data.core.selected[i]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:t})},deselect_all:function(e){var t=this._data.core.selected.concat([]),i,s;for(i=0,s=this._data.core.selected.length;s>i;i++)this._model.data[this._data.core.selected[i]]&&(this._model.data[this._data.core.selected[i]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked"),this.trigger("deselect_all",{selected:this._data.core.selected,node:t}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:t})},is_selected:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.state.selected:!1},get_selected:function(t){return t?e.map(this._data.core.selected,e.proxy(function(e){return this.get_node(e)},this)):this._data.core.selected.slice()},get_top_selected:function(t){var i=this.get_selected(!0),s={},r,n,a,d;for(r=0,n=i.length;n>r;r++)s[i[r].id]=i[r];for(r=0,n=i.length;n>r;r++)for(a=0,d=i[r].children_d.length;d>a;a++)s[i[r].children_d[a]]&&delete s[i[r].children_d[a]];i=[];for(r in s)s.hasOwnProperty(r)&&i.push(r);return t?e.map(i,e.proxy(function(e){return this.get_node(e)},this)):i},get_bottom_selected:function(t){var i=this.get_selected(!0),s=[],r,n;for(r=0,n=i.length;n>r;r++)i[r].children.length||s.push(i[r].id);return t?e.map(s,e.proxy(function(e){return this.get_node(e)},this)):s},get_state:function(){var e={core:{open:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},t;for(t in this._model.data)this._model.data.hasOwnProperty(t)&&"#"!==t&&(this._model.data[t].state.opened&&e.core.open.push(t),this._model.data[t].state.selected&&e.core.selected.push(t));return e},set_state:function(i,s){if(i){if(i.core){var r,n,a,d;if(i.core.open)return e.isArray(i.core.open)?(r=!0,n=!1,a=this,e.each(i.core.open.concat([]),function(t,d){n=a.get_node(d),n&&(a.is_loaded(d)?(a.is_closed(d)&&a.open_node(d,!1,0),i&&i.core&&i.core.open&&e.vakata.array_remove_item(i.core.open,d)):(a.is_loading(d)||a.open_node(d,e.proxy(function(t,r){!r&&i&&i.core&&i.core.open&&e.vakata.array_remove_item(i.core.open,t.id),this.set_state(i,s)},a),0),r=!1))}),r&&(delete i.core.open,this.set_state(i,s)),!1):(delete i.core.open,this.set_state(i,s),!1);if(i.core.scroll)return i.core.scroll&&i.core.scroll.left!==t&&this.element.scrollLeft(i.core.scroll.left),i.core.scroll&&i.core.scroll.top!==t&&this.element.scrollTop(i.core.scroll.top),delete i.core.scroll,this.set_state(i,s),!1;if(i.core.selected)return d=this,this.deselect_all(),e.each(i.core.selected,function(e,t){d.select_node(t)}),delete i.core.selected,this.set_state(i,s),!1;if(e.isEmptyObject(i.core))return delete i.core,this.set_state(i,s),!1}return e.isEmptyObject(i)?(i=null,s&&s.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(t,i){this._data.core.state=i===!0?{}:this.get_state(),i&&e.isFunction(i)&&(this._data.core.state=i.call(this,this._data.core.state)),this._cnt=0,this._model.data={"#":{id:"#",parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}}};var s=this.get_container_ul()[0].className;t||this.element.html("<ul class='"+s+"'><"+"li class='jstree-initial-node jstree-loading jstree-leaf jstree-last'><i class='jstree-icon jstree-ocl'></i><"+"a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.load_node("#",function(t,i){i&&(this.get_container_ul()[0].className=s,this.set_state(e.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(t){if(t=this.get_node(t),!t||"#"===t.id)return!1;var i=[],s=[],r=this._data.core.selected.concat([]);s.push(t.id),t.state.opened===!0&&i.push(t.id),this.get_node(t,!0).find(".jstree-open").each(function(){i.push(this.id)}),this._load_nodes(s,e.proxy(function(e){this.open_node(i,!1,0),this.select_node(this._data.core.selected),this.trigger("refresh_node",{node:t,nodes:e})},this))},set_id:function(t,i){if(t=this.get_node(t),!t||"#"===t.id)return!1;var s,r,n=this._model.data;for(i=""+i,n[t.parent].children[e.inArray(t.id,n[t.parent].children)]=i,s=0,r=t.parents.length;r>s;s++)n[t.parents[s]].children_d[e.inArray(t.id,n[t.parents[s]].children_d)]=i;for(s=0,r=t.children.length;r>s;s++)n[t.children[s]].parent=i;for(s=0,r=t.children_d.length;r>s;s++)n[t.children_d[s]].parents[e.inArray(t.id,n[t.children_d[s]].parents)]=i;return s=e.inArray(t.id,this._data.core.selected),-1!==s&&(this._data.core.selected[s]=i),s=this.get_node(t.id,!0),s&&s.attr("id",i),delete n[t.id],t.id=i,n[i]=t,!0},get_text:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.text:!1},set_text:function(t,i){var s,r;if(e.isArray(t)){for(t=t.slice(),s=0,r=t.length;r>s;s++)this.set_text(t[s],i);return!0}return t=this.get_node(t),t&&"#"!==t.id?(t.text=i,this.get_node(t,!0).length&&this.redraw_node(t.id),this.trigger("set_text",{obj:t,text:i}),!0):!1},get_json:function(e,t,i){if(e=this.get_node(e||"#"),!e)return!1;t&&t.flat&&!i&&(i=[]);var s={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:e.li_attr,a_attr:e.a_attr,state:{},data:t&&t.no_data?!1:e.data},r,n;if(t&&t.flat?s.parent=e.parent:s.children=[],!t||!t.no_state)for(r in e.state)e.state.hasOwnProperty(r)&&(s.state[r]=e.state[r]);if(t&&t.no_id&&(delete s.id,s.li_attr&&s.li_attr.id&&delete s.li_attr.id),t&&t.flat&&"#"!==e.id&&i.push(s),!t||!t.no_children)for(r=0,n=e.children.length;n>r;r++)t&&t.flat?this.get_json(e.children[r],t,i):s.children.push(this.get_json(e.children[r],t));return t&&t.flat?i:"#"===e.id?s.children:s},create_node:function(i,s,r,n,a){if(null===i&&(i="#"),i=this.get_node(i),!i)return!1;if(r=r===t?"last":r,!(""+r).match(/^(before|after)$/)&&!a&&!this.is_loaded(i))return this.load_node(i,function(){this.create_node(i,s,r,n,!0)});s||(s={text:this.get_string("New node")}),s.text===t&&(s.text=this.get_string("New node"));var d,o,c,l;switch("#"===i.id&&("before"===r&&(r="first"),"after"===r&&(r="last")),r){case"before":d=this.get_node(i.parent),r=e.inArray(i.id,d.children),i=d;break;case"after":d=this.get_node(i.parent),r=e.inArray(i.id,d.children)+1,i=d;break;case"inside":case"first":r=0;break;case"last":r=i.children.length;break;default:r||(r=0)}if(r>i.children.length&&(r=i.children.length),s.id||(s.id=!0),!this.check("create_node",s,i,r))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(s.id===!0&&delete s.id,s=this._parse_model_from_json(s,i.id,i.parents.concat()),!s)return!1;for(d=this.get_node(s),o=[],o.push(s),o=o.concat(d.children_d),this.trigger("model",{nodes:o,parent:i.id}),i.children_d=i.children_d.concat(o),c=0,l=i.parents.length;l>c;c++)this._model.data[i.parents[c]].children_d=this._model.data[i.parents[c]].children_d.concat(o);for(s=d,d=[],c=0,l=i.children.length;l>c;c++)d[c>=r?c+1:c]=i.children[c];return d[r]=s.id,i.children=d,this.redraw_node(i,!0),n&&n.call(this,this.get_node(s)),this.trigger("create_node",{node:this.get_node(s),parent:i.id,position:r}),s.id},rename_node:function(t,i){var s,r,n;if(e.isArray(t)){for(t=t.slice(),s=0,r=t.length;r>s;s++)this.rename_node(t[s],i);return!0}return t=this.get_node(t),t&&"#"!==t.id?(n=t.text,this.check("rename_node",t,this.get_parent(t),i)?(this.set_text(t,i),this.trigger("rename_node",{node:t,text:i,old:n}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1)):!1},delete_node:function(t){var i,s,r,n,a,d,o,c,l,h;if(e.isArray(t)){for(t=t.slice(),i=0,s=t.length;s>i;i++)this.delete_node(t[i]);return!0}if(t=this.get_node(t),!t||"#"===t.id)return!1;if(r=this.get_node(t.parent),n=e.inArray(t.id,r.children),h=!1,!this.check("delete_node",t,r,n))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(-1!==n&&(r.children=e.vakata.array_remove(r.children,n)),a=t.children_d.concat([]),a.push(t.id),c=0,l=a.length;l>c;c++){for(d=0,o=t.parents.length;o>d;d++)n=e.inArray(a[c],this._model.data[t.parents[d]].children_d),-1!==n&&(this._model.data[t.parents[d]].children_d=e.vakata.array_remove(this._model.data[t.parents[d]].children_d,n));this._model.data[a[c]].state.selected&&(h=!0,n=e.inArray(a[c],this._data.core.selected),-1!==n&&(this._data.core.selected=e.vakata.array_remove(this._data.core.selected,n)))}for(this.trigger("delete_node",{node:t,parent:r.id}),h&&this.trigger("changed",{action:"delete_node",node:t,selected:this._data.core.selected,parent:r.id}),c=0,l=a.length;l>c;c++)delete this._model.data[a[c]];return this.redraw_node(r,!0),!0},check:function(t,i,s,r,n){i=i&&i.id?i:this.get_node(i),s=s&&s.id?s:this.get_node(s);var a=t.match(/^move_node|copy_node|create_node$/i)?s:i,d=this.settings.core.check_callback;return"move_node"!==t&&"copy_node"!==t||n&&n.is_multi||i.id!==s.id&&e.inArray(i.id,s.children)!==r&&-1===e.inArray(s.id,i.children_d)?(a&&a.data&&(a=a.data),a&&a.functions&&(a.functions[t]===!1||a.functions[t]===!0)?(a.functions[t]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+t,data:JSON.stringify({chk:t,pos:r,obj:i&&i.id?i.id:!1,par:s&&s.id?s.id:!1})}),a.functions[t]):d===!1||e.isFunction(d)&&d.call(this,t,i,s,r,n)===!1||d&&d[t]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+t,data:JSON.stringify({chk:t,pos:r,obj:i&&i.id?i.id:!1,par:s&&s.id?s.id:!1})},!1):!0):(this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:t,pos:r,obj:i&&i.id?i.id:!1,par:s&&s.id?s.id:!1})},!1)},last_error:function(){return this._data.core.last_error},move_node:function(i,s,r,n,a){var d,o,c,l,h,_,u,g,f,p,m,v,j,k;if(s=this.get_node(s),r=r===t?0:r,!s)return!1;if(!(""+r).match(/^(before|after)$/)&&!a&&!this.is_loaded(s))return this.load_node(s,function(){this.move_node(i,s,r,n,!0)});if(e.isArray(i)){for(i=i.reverse().slice(),d=0,o=i.length;o>d;d++)this.move_node(i[d],s,r,n,a);return!0}if(i=i&&i.id?i:this.get_node(i),!i||"#"===i.id)return!1;if(c=""+(i.parent||"#"),h=(""+r).match(/^(before|after)$/)&&"#"!==s.id?this.get_node(s.parent):s,_=i.instance?i.instance:this._model.data[i.id]?this:e.jstree.reference(i.id),u=!_||!_._id||this._id!==_._id,l=_&&_._id&&c&&_._model.data[c]&&_._model.data[c].children?e.inArray(i.id,_._model.data[c].children):-1,u)return this.copy_node(i,s,r,n,a)?(_&&_.delete_node(i),!0):!1;switch("#"===h.id&&("before"===r&&(r="first"),"after"===r&&(r="last")),r){case"before":r=e.inArray(s.id,h.children);break;case"after":r=e.inArray(s.id,h.children)+1;break;case"inside":case"first":r=0;break;case"last":r=h.children.length;break;default:r||(r=0)}if(r>h.children.length&&(r=h.children.length),!this.check("move_node",i,h,r,{core:!0,is_multi:_&&_._id&&_._id!==this._id,is_foreign:!_||!_._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(i.parent===h.id){for(g=h.children.concat(),f=e.inArray(i.id,g),-1!==f&&(g=e.vakata.array_remove(g,f),r>f&&r--),f=[],p=0,m=g.length;m>p;p++)f[p>=r?p+1:p]=g[p];f[r]=i.id,h.children=f,this._node_changed(h.id),this.redraw("#"===h.id)}else{for(f=i.children_d.concat(),f.push(i.id),p=0,m=i.parents.length;m>p;p++){for(g=[],k=_._model.data[i.parents[p]].children_d,v=0,j=k.length;j>v;v++)-1===e.inArray(k[v],f)&&g.push(k[v]);_._model.data[i.parents[p]].children_d=g}for(_._model.data[c].children=e.vakata.array_remove_item(_._model.data[c].children,i.id),p=0,m=h.parents.length;m>p;p++)this._model.data[h.parents[p]].children_d=this._model.data[h.parents[p]].children_d.concat(f);for(g=[],p=0,m=h.children.length;m>p;p++)g[p>=r?p+1:p]=h.children[p];for(g[r]=i.id,h.children=g,h.children_d.push(i.id),h.children_d=h.children_d.concat(i.children_d),i.parent=h.id,f=h.parents.concat(),f.unshift(h.id),k=i.parents.length,i.parents=f,f=f.concat(),p=0,m=i.children_d.length;m>p;p++)this._model.data[i.children_d[p]].parents=this._model.data[i.children_d[p]].parents.slice(0,-1*k),Array.prototype.push.apply(this._model.data[i.children_d[p]].parents,f);this._node_changed(c),this._node_changed(h.id),this.redraw("#"===c||"#"===h.id)}return n&&n.call(this,i,h,r),this.trigger("move_node",{node:i,parent:h.id,position:r,old_parent:c,old_position:l,is_multi:_&&_._id&&_._id!==this._id,is_foreign:!_||!_._id,old_instance:_,new_instance:this}),!0},copy_node:function(i,s,r,n,a){var d,o,c,l,h,_,u,g,f,p,m;if(s=this.get_node(s),r=r===t?0:r,!s)return!1;if(!(""+r).match(/^(before|after)$/)&&!a&&!this.is_loaded(s))return this.load_node(s,function(){this.copy_node(i,s,r,n,!0)});if(e.isArray(i)){for(i=i.reverse().slice(),d=0,o=i.length;o>d;d++)this.copy_node(i[d],s,r,n,a);return!0}if(i=i&&i.id?i:this.get_node(i),!i||"#"===i.id)return!1;switch(g=""+(i.parent||"#"),f=(""+r).match(/^(before|after)$/)&&"#"!==s.id?this.get_node(s.parent):s,p=i.instance?i.instance:this._model.data[i.id]?this:e.jstree.reference(i.id),m=!p||!p._id||this._id!==p._id,"#"===f.id&&("before"===r&&(r="first"),"after"===r&&(r="last")),r){case"before":r=e.inArray(s.id,f.children);break;case"after":r=e.inArray(s.id,f.children)+1;break;case"inside":case"first":r=0;break;case"last":r=f.children.length;break;default:r||(r=0)}if(r>f.children.length&&(r=f.children.length),!this.check("copy_node",i,f,r,{core:!0,is_multi:p&&p._id&&p._id!==this._id,is_foreign:!p||!p._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(u=p?p.get_json(i,{no_id:!0,no_data:!0,no_state:!0}):i,!u)return!1;if(u.id===!0&&delete u.id,u=this._parse_model_from_json(u,f.id,f.parents.concat()),!u)return!1;for(l=this.get_node(u),i&&i.state&&i.state.loaded===!1&&(l.state.loaded=!1),c=[],c.push(u),c=c.concat(l.children_d),this.trigger("model",{nodes:c,parent:f.id}),h=0,_=f.parents.length;_>h;h++)this._model.data[f.parents[h]].children_d=this._model.data[f.parents[h]].children_d.concat(c);for(c=[],h=0,_=f.children.length;_>h;h++)c[h>=r?h+1:h]=f.children[h];return c[r]=l.id,f.children=c,f.children_d.push(l.id),f.children_d=f.children_d.concat(l.children_d),this._node_changed(f.id),this.redraw("#"===f.id),n&&n.call(this,l,f,r),this.trigger("copy_node",{node:l,original:i,parent:f.id,position:r,old_parent:g,old_position:p&&p._id&&g&&p._model.data[g]&&p._model.data[g].children?e.inArray(i.id,p._model.data[g].children):-1,is_multi:p&&p._id&&p._id!==this._id,is_foreign:!p||!p._id,old_instance:p,new_instance:this}),l.id},cut:function(i){if(i||(i=this._data.core.selected.concat()),e.isArray(i)||(i=[i]),!i.length)return!1;var a=[],d,o,c;for(o=0,c=i.length;c>o;o++)d=this.get_node(i[o]),d&&d.id&&"#"!==d.id&&a.push(d);return a.length?(s=a,n=this,r="move_node",this.trigger("cut",{node:i}),t):!1},copy:function(i){if(i||(i=this._data.core.selected.concat()),e.isArray(i)||(i=[i]),!i.length)return!1;var a=[],d,o,c;for(o=0,c=i.length;c>o;o++)d=this.get_node(i[o]),d&&d.id&&"#"!==d.id&&a.push(d);return a.length?(s=a,n=this,r="copy_node",this.trigger("copy",{node:i}),t):!1},get_buffer:function(){return{mode:r,node:s,inst:n}},can_paste:function(){return r!==!1&&s!==!1},paste:function(e,i){return e=this.get_node(e),e&&r&&r.match(/^(copy_node|move_node)$/)&&s?(this[r](s,e,i)&&this.trigger("paste",{parent:e.id,node:s,mode:r}),s=!1,r=!1,n=!1,t):!1},edit:function(i,s){if(i=this.get_node(i),!i)return!1;if(this.settings.core.check_callback===!1)return this._data.core.last_error={error:"check",plugin:"core",id:"core_07",reason:"Could not edit node because of check_callback"},this.settings.core.error.call(this,this._data.core.last_error),!1;s="string"==typeof s?s:i.text,this.set_text(i,""),i=this._open_to(i);var r=this._data.core.rtl,n=this.element.width(),a=i.children(".jstree-anchor"),d=e("<span>"),o=s,c=e("<div />",{css:{position:"absolute",top:"-200px",left:r?"0px":"-1000px",visibility:"hidden"}}).appendTo("body"),l=e("<input />",{value:o,"class":"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:e.proxy(function(){var t=d.children(".jstree-rename-input"),s=t.val();""===s&&(s=o),c.remove(),d.replaceWith(a),d.remove(),this.set_text(i,o),this.rename_node(i,e("<div></div>").text(s)[this.settings.core.force_text?"text":"html"]())===!1&&this.set_text(i,o)},this),keydown:function(e){var t=e.which;27===t&&(this.value=o),(27===t||13===t||37===t||38===t||39===t||40===t||32===t)&&e.stopImmediatePropagation(),(27===t||13===t)&&(e.preventDefault(),this.blur())},click:function(e){e.stopImmediatePropagation()},mousedown:function(e){e.stopImmediatePropagation()},keyup:function(e){l.width(Math.min(c.text("pW"+this.value).width(),n))},keypress:function(e){return 13===e.which?!1:t}}),h={fontFamily:a.css("fontFamily")||"",fontSize:a.css("fontSize")||"",fontWeight:a.css("fontWeight")||"",fontStyle:a.css("fontStyle")||"",fontStretch:a.css("fontStretch")||"",fontVariant:a.css("fontVariant")||"",letterSpacing:a.css("letterSpacing")||"",wordSpacing:a.css("wordSpacing")||""};d.attr("class",a.attr("class")).append(a.contents().clone()).append(l),a.replaceWith(d),c.css(h),l.css(h).width(Math.min(c.text("pW"+l[0].value).width(),n))[0].select()},set_theme:function(t,i){if(!t)return!1;if(i===!0){var s=this.settings.core.themes.dir;s||(s=e.jstree.path+"/themes"),i=s+"/"+t+"/style.css"}i&&-1===e.inArray(i,a)&&(e("head").append('<link rel="stylesheet" href="'+i+'" type="text/css" />'),a.push(i)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=t,this.element.addClass("jstree-"+t),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+t+"-responsive"),this.trigger("set_theme",{theme:t})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=e,e&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},set_icon:function(t,i){var s,r,n,a;if(e.isArray(t)){for(t=t.slice(),s=0,r=t.length;r>s;s++)this.set_icon(t[s],i);return!0}return t=this.get_node(t),t&&"#"!==t.id?(a=t.icon,t.icon=i,n=this.get_node(t,!0).children(".jstree-anchor").children(".jstree-themeicon"),i===!1?this.hide_icon(t):i===!0?n.removeClass("jstree-themeicon-custom "+a).css("background","").removeAttr("rel"):-1===i.indexOf("/")&&-1===i.indexOf(".")?(n.removeClass(a).css("background",""),n.addClass(i+" jstree-themeicon-custom").attr("rel",i)):(n.removeClass(a).css("background",""),n.addClass("jstree-themeicon-custom").css("background","url('"+i+"') center center no-repeat").attr("rel",i)),!0):!1},get_icon:function(e){return e=this.get_node(e),e&&"#"!==e.id?e.icon:!1},hide_icon:function(t){var i,s;if(e.isArray(t)){for(t=t.slice(),i=0,s=t.length;s>i;i++)this.hide_icon(t[i]);return!0}return t=this.get_node(t),t&&"#"!==t?(t.icon=!1,this.get_node(t,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(t){var i,s,r;if(e.isArray(t)){for(t=t.slice(),i=0,s=t.length;s>i;i++)this.show_icon(t[i]);return!0}return t=this.get_node(t),t&&"#"!==t?(r=this.get_node(t,!0),t.icon=r.length?r.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,t.icon||(t.icon=!0),r.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},e.vakata={},e.vakata.attributes=function(t,i){t=e(t)[0];var s=i?{}:[];return t&&t.attributes&&e.each(t.attributes,function(t,r){-1===e.inArray(r.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])&&null!==r.value&&""!==e.trim(r.value)&&(i?s[r.name]=r.value:s.push(r.name))}),s},e.vakata.array_unique=function(e){var t=[],i,s,r;for(i=0,r=e.length;r>i;i++){for(s=0;i>=s;s++)if(e[i]===e[s])break;s===i&&t.push(e[i])}return t},e.vakata.array_remove=function(e,t,i){var s=e.slice((i||t)+1||e.length);return e.length=0>t?e.length+t:t,e.push.apply(e,s),e},e.vakata.array_remove_item=function(t,i){var s=e.inArray(i,t);return-1!==s?e.vakata.array_remove(t,s):t};var _=document.createElement("I");_.className="jstree-icon jstree-checkbox",e.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0},e.jstree.plugins.checkbox=function(i,s){this.bind=function(){s.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",e.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",e.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),-1!==this.settings.checkbox.cascade.indexOf("undetermined")&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",e.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(e.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",e.proxy(function(e,t){var i=this._model.data,s=i[t.parent],r=t.nodes,n,a;for(n=0,a=r.length;a>n;n++)i[r[n]].state.checked=i[r[n]].original&&i[r[n]].original.state&&i[r[n]].original.state.checked,i[r[n]].state.checked&&this._data.checkbox.selected.push(r[n])},this)),(-1!==this.settings.checkbox.cascade.indexOf("up")||-1!==this.settings.checkbox.cascade.indexOf("down"))&&this.element.on("model.jstree",e.proxy(function(t,i){var s=this._model.data,r=s[i.parent],n=i.nodes,a=[],d,o,c,l,h,_,u=this.settings.checkbox.cascade,g=this.settings.checkbox.tie_selection;if(-1!==u.indexOf("down"))if(r.state[g?"selected":"checked"]){for(o=0,c=n.length;c>o;o++)s[n[o]].state[g?"selected":"checked"]=!0;this._data[g?"core":"checkbox"].selected=this._data[g?"core":"checkbox"].selected.concat(n)}else for(o=0,c=n.length;c>o;o++)if(s[n[o]].state[g?"selected":"checked"]){for(l=0,h=s[n[o]].children_d.length;h>l;l++)s[s[n[o]].children_d[l]].state[g?"selected":"checked"]=!0;this._data[g?"core":"checkbox"].selected=this._data[g?"core":"checkbox"].selected.concat(s[n[o]].children_d)}if(-1!==u.indexOf("up")){for(o=0,c=r.children_d.length;c>o;o++)s[r.children_d[o]].children.length||a.push(s[r.children_d[o]].parent);for(a=e.vakata.array_unique(a),l=0,h=a.length;h>l;l++){r=s[a[l]];while(r&&"#"!==r.id){for(d=0,o=0,c=r.children.length;c>o;o++)d+=s[r.children[o]].state[g?"selected":"checked"];if(d!==c)break;r.state[g?"selected":"checked"]=!0,this._data[g?"core":"checkbox"].selected.push(r.id),_=this.get_node(r,!0),_&&_.length&&_.children(".jstree-anchor").addClass(g?"jstree-clicked":"jstree-checked"),r=this.get_node(r.parent)}}}this._data[g?"core":"checkbox"].selected=e.vakata.array_unique(this._data[g?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",e.proxy(function(t,i){var s=i.node,r=this._model.data,n=this.get_node(s.parent),a=this.get_node(s,!0),d,o,c,l,h=this.settings.checkbox.cascade,_=this.settings.checkbox.tie_selection;if(-1!==h.indexOf("down"))for(this._data[_?"core":"checkbox"].selected=e.vakata.array_unique(this._data[_?"core":"checkbox"].selected.concat(s.children_d)),d=0,o=s.children_d.length;o>d;d++)l=r[s.children_d[d]],l.state[_?"selected":"checked"]=!0,l&&l.original&&l.original.state&&l.original.state.undetermined&&(l.original.state.undetermined=!1);if(-1!==h.indexOf("up"))while(n&&"#"!==n.id){for(c=0,d=0,o=n.children.length;o>d;d++)c+=r[n.children[d]].state[_?"selected":"checked"];if(c!==o)break;n.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(n.id),l=this.get_node(n,!0),l&&l.length&&l.children(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked"),n=this.get_node(n.parent)}-1!==h.indexOf("down")&&a.length&&a.find(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked")},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",e.proxy(function(e,t){var i=this.get_node("#"),s=this._model.data,r,n,a;for(r=0,n=i.children_d.length;n>r;r++)a=s[i.children_d[r]],a&&a.original&&a.original.state&&a.original.state.undetermined&&(a.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",e.proxy(function(t,i){var s=i.node,r=this.get_node(s,!0),n,a,d,o=this.settings.checkbox.cascade,c=this.settings.checkbox.tie_selection;if(s&&s.original&&s.original.state&&s.original.state.undetermined&&(s.original.state.undetermined=!1),-1!==o.indexOf("down"))for(n=0,a=s.children_d.length;a>n;n++)d=this._model.data[s.children_d[n]],d.state[c?"selected":"checked"]=!1,d&&d.original&&d.original.state&&d.original.state.undetermined&&(d.original.state.undetermined=!1);if(-1!==o.indexOf("up"))for(n=0,a=s.parents.length;a>n;n++)d=this._model.data[s.parents[n]],d.state[c?"selected":"checked"]=!1,d&&d.original&&d.original.state&&d.original.state.undetermined&&(d.original.state.undetermined=!1),d=this.get_node(s.parents[n],!0),d&&d.length&&d.children(".jstree-anchor").removeClass(c?"jstree-clicked":"jstree-checked");for(d=[],n=0,a=this._data[c?"core":"checkbox"].selected.length;a>n;n++)-1!==o.indexOf("down")&&-1!==e.inArray(this._data[c?"core":"checkbox"].selected[n],s.children_d)||-1!==o.indexOf("up")&&-1!==e.inArray(this._data[c?"core":"checkbox"].selected[n],s.parents)||d.push(this._data[c?"core":"checkbox"].selected[n]);
this._data[c?"core":"checkbox"].selected=e.vakata.array_unique(d),-1!==o.indexOf("down")&&r.length&&r.find(".jstree-anchor").removeClass(c?"jstree-clicked":"jstree-checked")},this)),-1!==this.settings.checkbox.cascade.indexOf("up")&&this.element.on("delete_node.jstree",e.proxy(function(e,t){var i=this.get_node(t.parent),s=this._model.data,r,n,a,d,o=this.settings.checkbox.tie_selection;while(i&&"#"!==i.id){for(a=0,r=0,n=i.children.length;n>r;r++)a+=s[i.children[r]].state[o?"selected":"checked"];if(a!==n)break;i.state[o?"selected":"checked"]=!0,this._data[o?"core":"checkbox"].selected.push(i.id),d=this.get_node(i,!0),d&&d.length&&d.children(".jstree-anchor").addClass(o?"jstree-clicked":"jstree-checked"),i=this.get_node(i.parent)}},this)).on("move_node.jstree",e.proxy(function(t,i){var s=i.is_multi,r=i.old_parent,n=this.get_node(i.parent),a=this._model.data,d,o,c,l,h,_=this.settings.checkbox.tie_selection;if(!s){d=this.get_node(r);while(d&&"#"!==d.id){for(o=0,c=0,l=d.children.length;l>c;c++)o+=a[d.children[c]].state[_?"selected":"checked"];if(o!==l)break;d.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(d.id),h=this.get_node(d,!0),h&&h.length&&h.children(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked"),d=this.get_node(d.parent)}}d=n;while(d&&"#"!==d.id){for(o=0,c=0,l=d.children.length;l>c;c++)o+=a[d.children[c]].state[_?"selected":"checked"];if(o===l)d.state[_?"selected":"checked"]||(d.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(d.id),h=this.get_node(d,!0),h&&h.length&&h.children(".jstree-anchor").addClass(_?"jstree-clicked":"jstree-checked"));else{if(!d.state[_?"selected":"checked"])break;d.state[_?"selected":"checked"]=!1,this._data[_?"core":"checkbox"].selected=e.vakata.array_remove_item(this._data[_?"core":"checkbox"].selected,d.id),h=this.get_node(d,!0),h&&h.length&&h.children(".jstree-anchor").removeClass(_?"jstree-clicked":"jstree-checked")}d=this.get_node(d.parent)}},this))},this._undetermined=function(){var t,i,s=this._model.data,r=this.settings.checkbox.tie_selection,n=this._data[r?"core":"checkbox"].selected,a=[],d=this;for(t=0,i=n.length;i>t;t++)s[n[t]]&&s[n[t]].parents&&(a=a.concat(s[n[t]].parents));for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var e=d.get_node(this),r;if(e.state.loaded)for(t=0,i=e.children_d.length;i>t;t++)r=s[e.children_d[t]],!r.state.loaded&&r.original&&r.original.state&&r.original.state.undetermined&&r.original.state.undetermined===!0&&(a.push(r.id),a=a.concat(r.parents));else e.original&&e.original.state&&e.original.state.undetermined&&e.original.state.undetermined===!0&&(a.push(e.id),a=a.concat(e.parents))}),a=e.vakata.array_unique(a),a=e.vakata.array_remove_item(a,"#"),this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),t=0,i=a.length;i>t;t++)s[a[t]].state[r?"selected":"checked"]||(n=this.get_node(a[t],!0),n&&n.length&&n.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined"))},this.redraw_node=function(t,i,r){if(t=s.redraw_node.call(this,t,i,r)){var n,a,d=null;for(n=0,a=t.childNodes.length;a>n;n++)if(t.childNodes[n]&&t.childNodes[n].className&&-1!==t.childNodes[n].className.indexOf("jstree-anchor")){d=t.childNodes[n];break}d&&(!this.settings.checkbox.tie_selection&&this._model.data[t.id].state.checked&&(d.className+=" jstree-checked"),d.insertBefore(_.cloneNode(!1),d.childNodes[0]))}return r||-1===this.settings.checkbox.cascade.indexOf("undetermined")||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(e.proxy(this._undetermined,this),50)),t},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(t){t=this.get_node(t);var i=this.settings.checkbox.cascade,s,r,n=this.settings.checkbox.tie_selection,a=this._data[n?"core":"checkbox"].selected,d=this._model.data;if(!t||t.state[n?"selected":"checked"]===!0||-1===i.indexOf("undetermined")||-1===i.indexOf("down")&&-1===i.indexOf("up"))return!1;if(!t.state.loaded&&t.original.state.undetermined===!0)return!0;for(s=0,r=t.children_d.length;r>s;s++)if(-1!==e.inArray(t.children_d[s],a)||!d[t.children_d[s]].state.loaded&&d[t.children_d[s]].original.state.undetermined)return!0;return!1},this.activate_node=function(i,r){return this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||e(r.target).hasClass("jstree-checkbox"))&&(r.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!e(r.target).hasClass("jstree-checkbox")?s.activate_node.call(this,i,r):(this.is_checked(i)?this.uncheck_node(i,r):this.check_node(i,r),this.trigger("activate_node",{node:this.get_node(i)}),t)},this.check_node=function(i,s){if(this.settings.checkbox.tie_selection)return this.select_node(i,!1,!0,s);var r,n,a,d;if(e.isArray(i)){for(i=i.slice(),n=0,a=i.length;a>n;n++)this.check_node(i[n],s);return!0}return i=this.get_node(i),i&&"#"!==i.id?(r=this.get_node(i,!0),i.state.checked||(i.state.checked=!0,this._data.checkbox.selected.push(i.id),r&&r.length&&r.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:i,selected:this._data.checkbox.selected,event:s})),t):!1},this.uncheck_node=function(i,s){if(this.settings.checkbox.tie_selection)return this.deselect_node(i,!1,s);var r,n,a;if(e.isArray(i)){for(i=i.slice(),r=0,n=i.length;n>r;r++)this.uncheck_node(i[r],s);return!0}return i=this.get_node(i),i&&"#"!==i.id?(a=this.get_node(i,!0),i.state.checked&&(i.state.checked=!1,this._data.checkbox.selected=e.vakata.array_remove_item(this._data.checkbox.selected,i.id),a.length&&a.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:i,selected:this._data.checkbox.selected,event:s})),t):!1},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var e=this._data.checkbox.selected.concat([]),t,i;for(this._data.checkbox.selected=this._model.data["#"].children_d.concat(),t=0,i=this._data.checkbox.selected.length;i>t;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var e=this._data.checkbox.selected.concat([]),t,i;for(t=0,i=this._data.checkbox.selected.length;i>t;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:e})},this.is_checked=function(e){return this.settings.checkbox.tie_selection?this.is_selected(e):(e=this.get_node(e),e&&"#"!==e.id?e.state.checked:!1)},this.get_checked=function(t){return this.settings.checkbox.tie_selection?this.get_selected(t):t?e.map(this._data.checkbox.selected,e.proxy(function(e){return this.get_node(e)},this)):this._data.checkbox.selected},this.get_top_checked=function(t){if(this.settings.checkbox.tie_selection)return this.get_top_selected(t);var i=this.get_checked(!0),s={},r,n,a,d;for(r=0,n=i.length;n>r;r++)s[i[r].id]=i[r];for(r=0,n=i.length;n>r;r++)for(a=0,d=i[r].children_d.length;d>a;a++)s[i[r].children_d[a]]&&delete s[i[r].children_d[a]];i=[];for(r in s)s.hasOwnProperty(r)&&i.push(r);return t?e.map(i,e.proxy(function(e){return this.get_node(e)},this)):i},this.get_bottom_checked=function(t){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(t);var i=this.get_checked(!0),s=[],r,n;for(r=0,n=i.length;n>r;r++)i[r].children.length||s.push(i[r].id);return t?e.map(s,e.proxy(function(e){return this.get_node(e)},this)):s}},e.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(t,i){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.create_node(s,{},"last",function(e){setTimeout(function(){i.edit(e)},0)})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.edit(s)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.is_selected(s)?i.delete_node(i.get_selected()):i.delete_node(s)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.is_selected(s)?i.cut(i.get_selected()):i.cut(s)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.is_selected(s)?i.copy(i.get_selected()):i.copy(s)}},paste:{separator_before:!1,icon:!1,_disabled:function(t){return!e.jstree.reference(t.reference).can_paste()},separator_after:!1,label:"Paste",action:function(t){var i=e.jstree.reference(t.reference),s=i.get_node(t.reference);i.paste(s)}}}}}}},e.jstree.plugins.contextmenu=function(i,s){this.bind=function(){s.bind.call(this);var t=0;this.element.on("contextmenu.jstree",".jstree-anchor",e.proxy(function(e){e.preventDefault(),t=e.ctrlKey?e.timeStamp:0,this.is_loading(e.currentTarget)||this.show_contextmenu(e.currentTarget,e.pageX,e.pageY,e)},this)).on("click.jstree",".jstree-anchor",e.proxy(function(i){this._data.contextmenu.visible&&(!t||i.timeStamp-t>250)&&e.vakata.context.hide()},this)),e(document).on("context_hide.vakata.jstree",e.proxy(function(){this._data.contextmenu.visible=!1},this))},this.teardown=function(){this._data.contextmenu.visible&&e.vakata.context.hide(),s.teardown.call(this)},this.show_contextmenu=function(i,s,r,n){if(i=this.get_node(i),!i||"#"===i.id)return!1;var a=this.settings.contextmenu,d=this.get_node(i,!0),o=d.children(".jstree-anchor"),c=!1,l=!1;(a.show_at_node||s===t||r===t)&&(c=o.offset(),s=c.left,r=c.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(i)&&this.activate_node(i,n),l=a.items,e.isFunction(l)&&(l=l.call(this,i,e.proxy(function(e){this._show_contextmenu(i,s,r,e)},this))),e.isPlainObject(l)&&this._show_contextmenu(i,s,r,l)},this._show_contextmenu=function(t,i,s,r){var n=this.get_node(t,!0),a=n.children(".jstree-anchor");e(document).one("context_show.vakata.jstree",e.proxy(function(t,i){var s="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";e(i.element).addClass(s)},this)),this._data.contextmenu.visible=!0,e.vakata.context.show(a,{x:i,y:s},r),this.trigger("show_contextmenu",{node:t,x:i,y:s})}},function(e){var i=!1,s={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};e.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(t){e(document).triggerHandler("context_"+t+".vakata",{reference:s.reference,element:s.element,position:{x:s.position_x,y:s.position_y}})},_execute:function(t){return t=s.items[t],t&&(!t._disabled||e.isFunction(t._disabled)&&!t._disabled({item:t,reference:s.reference,element:s.element}))&&t.action?t.action.call(null,{item:t,reference:s.reference,element:s.element,position:{x:s.position_x,y:s.position_y}}):!1},_parse:function(i,r){if(!i)return!1;r||(s.html="",s.items=[]);var n="",a=!1,d;return r&&(n+="<ul>"),e.each(i,function(i,r){return r?(s.items.push(r),!a&&r.separator_before&&(n+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;<"+"/a><"+"/li>"),a=!1,n+="<li class='"+(r._class||"")+(r._disabled===!0||e.isFunction(r._disabled)&&r._disabled({item:r,reference:s.reference,element:s.element})?" vakata-contextmenu-disabled ":"")+"' "+(r.shortcut?" data-shortcut='"+r.shortcut+"' ":"")+">",n+="<a href='#' rel='"+(s.items.length-1)+"'>",e.vakata.context.settings.icons&&(n+="<i ",r.icon&&(n+=-1!==r.icon.indexOf("/")||-1!==r.icon.indexOf(".")?" style='background:url(\""+r.icon+"\") center center no-repeat' ":" class='"+r.icon+"' "),n+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),n+=(e.isFunction(r.label)?r.label({item:i,reference:s.reference,element:s.element}):r.label)+(r.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+r.shortcut+'">'+(r.shortcut_label||"")+"</span>":"")+"<"+"/a>",r.submenu&&(d=e.vakata.context._parse(r.submenu,!0),d&&(n+=d)),n+="</li>",r.separator_after&&(n+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;<"+"/a><"+"/li>",a=!0),t):!0}),n=n.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),r&&(n+="</ul>"),r||(s.html=n,e.vakata.context._trigger("parse")),n.length>10?n:!1},_show_submenu:function(t){if(t=e(t),t.length&&t.children("ul").length){var s=t.children("ul"),r=t.offset().left+t.outerWidth(),n=t.offset().top,a=s.width(),d=s.height(),o=e(window).width()+e(window).scrollLeft(),c=e(window).height()+e(window).scrollTop();i?t[0>r-(a+10+t.outerWidth())?"addClass":"removeClass"]("vakata-context-left"):t[r+a+10>o?"addClass":"removeClass"]("vakata-context-right"),n+d+10>c&&s.css("bottom","-1px"),s.show()}},show:function(t,r,n){var a,d,o,c,l,h,_,u,g=!0;switch(s.element&&s.element.length&&s.element.width(""),g){case!r&&!t:return!1;case!!r&&!!t:s.reference=t,s.position_x=r.x,s.position_y=r.y;break;case!r&&!!t:s.reference=t,a=t.offset(),s.position_x=a.left+t.outerHeight(),s.position_y=a.top;break;case!!r&&!t:s.position_x=r.x,s.position_y=r.y}t&&!n&&e(t).data("vakata_contextmenu")&&(n=e(t).data("vakata_contextmenu")),e.vakata.context._parse(n)&&s.element.html(s.html),s.items.length&&(s.element.appendTo("body"),d=s.element,o=s.position_x,c=s.position_y,l=d.width(),h=d.height(),_=e(window).width()+e(window).scrollLeft(),u=e(window).height()+e(window).scrollTop(),i&&(o-=d.outerWidth(),e(window).scrollLeft()+20>o&&(o=e(window).scrollLeft()+20)),o+l+20>_&&(o=_-(l+20)),c+h+20>u&&(c=u-(h+20)),s.element.css({left:o,top:c}).show().find("a:eq(0)").focus().parent().addClass("vakata-context-hover"),s.is_visible=!0,e.vakata.context._trigger("show"))},hide:function(){s.is_visible&&(s.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),s.is_visible=!1,e.vakata.context._trigger("hide"))}},e(function(){i="rtl"===e("body").css("direction");var t=!1;s.element=e("<ul class='vakata-context'></ul>"),s.element.on("mouseenter","li",function(i){i.stopImmediatePropagation(),e.contains(this,i.relatedTarget)||(t&&clearTimeout(t),s.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),e.vakata.context._show_submenu(this))}).on("mouseleave","li",function(t){e.contains(this,t.relatedTarget)||e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(i){e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),e.vakata.context.settings.hide_onmouseleave&&(t=setTimeout(function(t){return function(){e.vakata.context.hide()}}(this),e.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(t){t.preventDefault(),e(this).blur().parent().hasClass("vakata-context-disabled")||e.vakata.context._execute(e(this).attr("rel"))===!1||e.vakata.context.hide()}).on("keydown","a",function(t){var i=null;switch(t.which){case 13:case 32:t.type="mouseup",t.preventDefault(),e(t.currentTarget).trigger(t);break;case 37:s.is_visible&&(s.element.find(".vakata-context-hover").last().parents("li:eq(0)").find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 38:s.is_visible&&(i=s.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),i.length||(i=s.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),i.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 39:s.is_visible&&(s.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 40:s.is_visible&&(i=s.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),i.length||(i=s.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),i.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 27:e.vakata.context.hide(),t.preventDefault();break;default:}}).on("keydown",function(e){e.preventDefault();var t=s.element.find(".vakata-contextmenu-shortcut-"+e.which).parent();t.parent().not(".vakata-context-disabled")&&t.click()}),e(document).on("mousedown.vakata.jstree",function(t){s.is_visible&&!e.contains(s.element[0],t.target)&&e.vakata.context.hide()}).on("context_show.vakata.jstree",function(e,t){s.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),i&&s.element.addClass("vakata-context-rtl").css("direction","rtl"),s.element.find("ul").hide().end()})})}(e),e.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0},e.jstree.plugins.dnd=function(i,s){this.bind=function(){s.bind.call(this),this.element.on("mousedown.jstree touchstart.jstree",".jstree-anchor",e.proxy(function(i){var s=this.get_node(i.target),r=this.is_selected(s)?this.get_selected().length:1;return s&&s.id&&"#"!==s.id&&(1===i.which||"touchstart"===i.type)&&(this.settings.dnd.is_draggable===!0||e.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,r>1?this.get_selected(!0):[s]))?(this.element.trigger("mousedown.jstree"),e.vakata.dnd.start(i,{jstree:!0,origin:this,obj:this.get_node(s,!0),nodes:r>1?this.get_selected():[s.id]},'<div id="jstree-dnd" class="jstree-'+this.get_theme()+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+(r>1?r+" "+this.get_string("nodes"):this.get_text(i.currentTarget,!0))+'<ins class="jstree-copy" style="display:none;">+</ins></div>')):t},this))}},e(function(){var i=!1,s=!1,r=!1,n=e('<div id="jstree-marker">&#160;</div>').hide();e(document).on("dnd_start.vakata.jstree",function(e,t){i=!1,t&&t.data&&t.data.jstree&&n.appendTo("body")}).on("dnd_move.vakata.jstree",function(a,d){if(r&&clearTimeout(r),d&&d.data&&d.data.jstree&&(!d.event.target.id||"jstree-marker"!==d.event.target.id)){var o=e.jstree.reference(d.event.target),c=!1,l=!1,h=!1,_,u,g,f,p,m,v,j,k,y,x,b,w,C;if(o&&o._data&&o._data.dnd)if(n.attr("class","jstree-"+o.get_theme()+(o.settings.core.themes.responsive?" jstree-dnd-responsive":"")),d.helper.children().attr("class","jstree-"+o.get_theme()+(o.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy:eq(0)")[d.data.origin&&(d.data.origin.settings.dnd.always_copy||d.data.origin.settings.dnd.copy&&(d.event.metaKey||d.event.ctrlKey))?"show":"hide"](),d.event.target!==o.element[0]&&d.event.target!==o.get_container_ul()[0]||0!==o.get_container_ul().children().length){if(c=e(d.event.target).closest(".jstree-anchor"),c&&c.length&&c.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(l=c.offset(),h=d.event.pageY-l.top,g=c.height(),m=g/3>h?["b","i","a"]:h>g-g/3?["a","i","b"]:h>g/2?["i","a","b"]:["i","b","a"],e.each(m,function(a,h){switch(h){case"b":_=l.left-6,u=l.top,f=o.get_parent(c),p=c.parent().index();break;case"i":w=o.settings.dnd.inside_pos,C=o.get_node(c.parent()),_=l.left-2,u=l.top+g/2+1,f=C.id,p="first"===w?0:"last"===w?C.children.length:Math.min(w,C.children.length);break;case"a":_=l.left-6,u=l.top+g,f=o.get_parent(c),p=c.parent().index()+1}for(v=!0,j=0,k=d.data.nodes.length;k>j;j++)if(y=d.data.origin&&(d.data.origin.settings.dnd.always_copy||d.data.origin.settings.dnd.copy&&(d.event.metaKey||d.event.ctrlKey))?"copy_node":"move_node",x=p,"move_node"===y&&"a"===h&&d.data.origin&&d.data.origin===o&&f===o.get_parent(d.data.nodes[j])&&(b=o.get_node(f),x>e.inArray(d.data.nodes[j],b.children)&&(x-=1)),v=v&&(o&&o.settings&&o.settings.dnd&&o.settings.dnd.check_while_dragging===!1||o.check(y,d.data.origin&&d.data.origin!==o?d.data.origin.get_node(d.data.nodes[j]):d.data.nodes[j],f,x,{dnd:!0,ref:o.get_node(c.parent()),pos:h,is_multi:d.data.origin&&d.data.origin!==o,is_foreign:!d.data.origin})),!v){o&&o.last_error&&(s=o.last_error());break}return v?("i"===h&&c.parent().is(".jstree-closed")&&o.settings.dnd.open_timeout&&(r=setTimeout(function(e,t){return function(){e.open_node(t)}}(o,c),o.settings.dnd.open_timeout)),i={ins:o,par:f,pos:"i"!==h||"last"!==w||0!==p||o.is_loaded(C)?p:"last"},n.css({left:_+"px",top:u+"px"}).show(),d.helper.find(".jstree-icon:eq(0)").removeClass("jstree-er").addClass("jstree-ok"),s={},m=!0,!1):t}),m===!0))return}else{for(v=!0,j=0,k=d.data.nodes.length;k>j;j++)if(v=v&&o.check(d.data.origin&&(d.data.origin.settings.dnd.always_copy||d.data.origin.settings.dnd.copy&&(d.event.metaKey||d.event.ctrlKey))?"copy_node":"move_node",d.data.origin&&d.data.origin!==o?d.data.origin.get_node(d.data.nodes[j]):d.data.nodes[j],"#","last",{dnd:!0,ref:o.get_node("#"),pos:"i",is_multi:d.data.origin&&d.data.origin!==o,is_foreign:!d.data.origin}),!v)break;if(v)return i={ins:o,par:"#",pos:"last"},n.hide(),d.helper.find(".jstree-icon:eq(0)").removeClass("jstree-er").addClass("jstree-ok"),t}i=!1,d.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),n.hide()}}).on("dnd_scroll.vakata.jstree",function(e,t){t&&t.data&&t.data.jstree&&(n.hide(),i=!1,t.helper.find(".jstree-icon:eq(0)").removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(t,a){if(r&&clearTimeout(r),a&&a.data&&a.data.jstree){n.hide().detach();var d,o,c=[];if(i){for(d=0,o=a.data.nodes.length;o>d;d++)c[d]=a.data.origin?a.data.origin.get_node(a.data.nodes[d]):a.data.nodes[d],a.data.origin&&(c[d].instance=a.data.origin);for(i.ins[a.data.origin&&(a.data.origin.settings.dnd.always_copy||a.data.origin.settings.dnd.copy&&(a.event.metaKey||a.event.ctrlKey))?"copy_node":"move_node"](c,i.par,i.pos),d=0,o=c.length;o>d;d++)c[d].instance&&(c[d].instance=null)}else d=e(a.event.target).closest(".jstree"),d.length&&s&&s.error&&"check"===s.error&&(d=d.jstree(!0),d&&d.settings.core.error.call(this,s))}}).on("keyup.jstree keydown.jstree",function(t,i){i=e.vakata.dnd._get(),i&&i.data&&i.data.jstree&&i.helper.find(".jstree-copy:eq(0)")[i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(t.metaKey||t.ctrlKey))?"show":"hide"]()})}),function(e){var i={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:50},_trigger:function(t,i){var s=e.vakata.dnd._get();s.event=i,e(document).triggerHandler("dnd_"+t+".vakata",s)},_get:function(){return{data:i.data,element:i.element,helper:i.helper}},_clean:function(){i.helper&&i.helper.remove(),i.scroll_i&&(clearInterval(i.scroll_i),i.scroll_i=!1),i={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},e(document).off("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(document).off("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop)},_scroll:function(t){if(!i.scroll_e||!i.scroll_l&&!i.scroll_t)return i.scroll_i&&(clearInterval(i.scroll_i),i.scroll_i=!1),!1;if(!i.scroll_i)return i.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(t===!0)return!1;var s=i.scroll_e.scrollTop(),r=i.scroll_e.scrollLeft();i.scroll_e.scrollTop(s+i.scroll_t*e.vakata.dnd.settings.scroll_speed),i.scroll_e.scrollLeft(r+i.scroll_l*e.vakata.dnd.settings.scroll_speed),(s!==i.scroll_e.scrollTop()||r!==i.scroll_e.scrollLeft())&&e.vakata.dnd._trigger("scroll",i.scroll_e)},start:function(t,s,r){"touchstart"===t.type&&t.originalEvent&&t.originalEvent.changedTouches&&t.originalEvent.changedTouches[0]&&(t.pageX=t.originalEvent.changedTouches[0].pageX,t.pageY=t.originalEvent.changedTouches[0].pageY,t.target=document.elementFromPoint(t.originalEvent.changedTouches[0].pageX-window.pageXOffset,t.originalEvent.changedTouches[0].pageY-window.pageYOffset)),i.is_drag&&e.vakata.dnd.stop({});try{t.currentTarget.unselectable="on",t.currentTarget.onselectstart=function(){return!1},t.currentTarget.style&&(t.currentTarget.style.MozUserSelect="none")}catch(n){}return i.init_x=t.pageX,i.init_y=t.pageY,i.data=s,i.is_down=!0,i.element=t.currentTarget,i.target=t.target,i.is_touch="touchstart"===t.type,r!==!1&&(i.helper=e("<div id='vakata-dnd'></div>").html(r).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(document).on("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(document).on("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop),!1},drag:function(s){if("touchmove"===s.type&&s.originalEvent&&s.originalEvent.changedTouches&&s.originalEvent.changedTouches[0]&&(s.pageX=s.originalEvent.changedTouches[0].pageX,s.pageY=s.originalEvent.changedTouches[0].pageY,s.target=document.elementFromPoint(s.originalEvent.changedTouches[0].pageX-window.pageXOffset,s.originalEvent.changedTouches[0].pageY-window.pageYOffset)),i.is_down){if(!i.is_drag){if(!(Math.abs(s.pageX-i.init_x)>(i.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)||Math.abs(s.pageY-i.init_y)>(i.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)))return;i.helper&&(i.helper.appendTo("body"),i.helper_w=i.helper.outerWidth()),i.is_drag=!0,e.vakata.dnd._trigger("start",s)}var r=!1,n=!1,a=!1,d=!1,o=!1,c=!1,l=!1,h=!1,_=!1,u=!1;return i.scroll_t=0,i.scroll_l=0,i.scroll_e=!1,e(e(s.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var r=e(this),n=r.offset();return this.scrollHeight>this.offsetHeight&&(n.top+r.height()-s.pageY<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_t=1),s.pageY-n.top<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(n.left+r.width()-s.pageX<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_l=1),s.pageX-n.left<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_l=-1)),i.scroll_t||i.scroll_l?(i.scroll_e=e(this),!1):t}),i.scroll_e||(r=e(document),n=e(window),a=r.height(),d=n.height(),o=r.width(),c=n.width(),l=r.scrollTop(),h=r.scrollLeft(),a>d&&s.pageY-l<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_t=-1),a>d&&d-(s.pageY-l)<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_t=1),o>c&&s.pageX-h<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_l=-1),o>c&&c-(s.pageX-h)<e.vakata.dnd.settings.scroll_proximity&&(i.scroll_l=1),(i.scroll_t||i.scroll_l)&&(i.scroll_e=r)),i.scroll_e&&e.vakata.dnd._scroll(!0),i.helper&&(_=parseInt(s.pageY+e.vakata.dnd.settings.helper_top,10),u=parseInt(s.pageX+e.vakata.dnd.settings.helper_left,10),a&&_+25>a&&(_=a-50),o&&u+i.helper_w>o&&(u=o-(i.helper_w+2)),i.helper.css({left:u+"px",top:_+"px"})),e.vakata.dnd._trigger("move",s),!1}},stop:function(t){if("touchend"===t.type&&t.originalEvent&&t.originalEvent.changedTouches&&t.originalEvent.changedTouches[0]&&(t.pageX=t.originalEvent.changedTouches[0].pageX,t.pageY=t.originalEvent.changedTouches[0].pageY,t.target=document.elementFromPoint(t.originalEvent.changedTouches[0].pageX-window.pageXOffset,t.originalEvent.changedTouches[0].pageY-window.pageYOffset)),i.is_drag)e.vakata.dnd._trigger("stop",t);else if("touchend"===t.type&&t.target===i.target){var s=setTimeout(function(){e(t.target).click()},100);e(t.target).one("click",function(){s&&clearTimeout(s)})}return e.vakata.dnd._clean(),!1}}}(e),e.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},e.jstree.plugins.search=function(i,s){this.bind=function(){s.bind.call(this),this._data.search.str="",this._data.search.dom=e(),this._data.search.res=[],this._data.search.opn=[],this.element.on("before_open.jstree",e.proxy(function(t,i){var s,r,n,a=this._data.search.res,d=[],o=e();if(a&&a.length&&(this._data.search.dom=e(this.element[0].querySelectorAll("#"+e.map(a,function(t){return-1!=="0123456789".indexOf(t[0])?"\\3"+t[0]+" "+t.substr(1).replace(e.jstree.idregex,"\\$&"):t.replace(e.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search"),this.settings.search.show_only_matches&&this._data.search.res.length)){for(s=0,r=a.length;r>s;s++)d=d.concat(this.get_node(a[s]).parents);d=e.vakata.array_remove_item(e.vakata.array_unique(d),"#"),o=d.length?e(this.element[0].querySelectorAll("#"+e.map(d,function(t){return-1!=="0123456789".indexOf(t[0])?"\\3"+t[0]+" "+t.substr(1).replace(e.jstree.idregex,"\\$&"):t.replace(e.jstree.idregex,"\\$&")}).join(", #"))):e(),this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function(){return this.nextSibling}).removeClass("jstree-last"),o=o.add(this._data.search.dom),o.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function(){e(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")})}},this)),this.settings.search.show_only_matches&&this.element.on("search.jstree",function(t,i){i.nodes.length&&(e(this).find(".jstree-node").hide().filter(".jstree-last").filter(function(){return this.nextSibling}).removeClass("jstree-last"),i.nodes.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function(){e(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")}))}).on("clear_search.jstree",function(t,i){i.nodes.length&&e(this).find(".jstree-node").css("display","").filter(".jstree-last").filter(function(){return this.nextSibling}).removeClass("jstree-last")})},this.search=function(i,s){if(i===!1||""===e.trim(""+i))return this.clear_search();i=""+i;var r=this.settings.search,n=r.ajax?r.ajax:!1,a=null,d=[],o=[],c,l;return this._data.search.res.length&&this.clear_search(),s||n===!1?(this._data.search.str=i,this._data.search.dom=e(),this._data.search.res=[],this._data.search.opn=[],a=new e.vakata.search(i,!0,{caseSensitive:r.case_sensitive,fuzzy:r.fuzzy}),e.each(this._model.data,function(e,t){t.text&&(r.search_callback&&r.search_callback.call(this,i,t)||!r.search_callback&&a.search(t.text).isMatch)&&(!r.search_leaves_only||t.state.loaded&&0===t.children.length)&&(d.push(e),o=o.concat(t.parents))}),d.length&&(o=e.vakata.array_unique(o),this._search_open(o),this._data.search.dom=e(this.element[0].querySelectorAll("#"+e.map(d,function(t){return-1!=="0123456789".indexOf(t[0])?"\\3"+t[0]+" "+t.substr(1).replace(e.jstree.idregex,"\\$&"):t.replace(e.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=d,this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")),this.trigger("search",{nodes:this._data.search.dom,str:i,res:this._data.search.res}),t):e.isFunction(n)?n.call(this,i,e.proxy(function(t){t&&t.d&&(t=t.d),this._load_nodes(e.isArray(t)?e.vakata.array_unique(t):[],function(){this.search(i,!0)
},!0)},this)):(n=e.extend({},n),n.data||(n.data={}),n.data.str=i,e.ajax(n).fail(e.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(n)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(e.proxy(function(t){t&&t.d&&(t=t.d),this._load_nodes(e.isArray(t)?e.vakata.array_unique(t):[],function(){this.search(i,!0)},!0)},this)))},this.clear_search=function(){this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search"),this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=e()},this._search_open=function(t){var i=this;e.each(t.concat([]),function(s,r){if("#"===r)return!0;try{r=e("#"+r.replace(e.jstree.idregex,"\\$&"),i.element)}catch(n){}r&&r.length&&i.is_closed(r)&&(i._data.search.opn.push(r[0].id),i.open_node(r,function(){i._search_open(t)},0))})}},function(e){e.vakata.search=function(e,t,i){i=i||{},i.fuzzy!==!1&&(i.fuzzy=!0),e=i.caseSensitive?e:e.toLowerCase();var s=i.location||0,r=i.distance||100,n=i.threshold||.6,a=e.length,d,o,c,l;return a>32&&(i.fuzzy=!1),i.fuzzy&&(d=1<<a-1,o=function(){var t={},i=0;for(i=0;a>i;i++)t[e.charAt(i)]=0;for(i=0;a>i;i++)t[e.charAt(i)]|=1<<a-i-1;return t}(),c=function(e,t){var i=e/a,n=Math.abs(s-t);return r?i+n/r:n?1:i}),l=function(t){if(t=i.caseSensitive?t:t.toLowerCase(),e===t||-1!==t.indexOf(e))return{isMatch:!0,score:0};if(!i.fuzzy)return{isMatch:!1,score:1};var r,l,h=t.length,_=n,u=t.indexOf(e,s),g,f,p=a+h,m,v,j,k,y,x=1,b=[];for(-1!==u&&(_=Math.min(c(0,u),_),u=t.lastIndexOf(e,s+a),-1!==u&&(_=Math.min(c(0,u),_))),u=-1,r=0;a>r;r++){g=0,f=p;while(f>g)_>=c(r,s+f)?g=f:p=f,f=Math.floor((p-g)/2+g);for(p=f,v=Math.max(1,s-f+1),j=Math.min(s+f,h)+a,k=Array(j+2),k[j+1]=(1<<r)-1,l=j;l>=v;l--)if(y=o[t.charAt(l-1)],k[l]=0===r?(1|k[l+1]<<1)&y:(1|k[l+1]<<1)&y|(1|(m[l+1]|m[l])<<1)|m[l+1],k[l]&d&&(x=c(r,l-1),_>=x)){if(_=x,u=l-1,b.push(u),!(u>s))break;v=Math.max(1,2*s-u)}if(c(r+1,s)>_)break;m=k}return{isMatch:u>=0,score:x}},t===!0?{search:l}:l(t)}}(e),e.jstree.defaults.sort=function(e,t){return this.get_text(e)>this.get_text(t)?1:-1},e.jstree.plugins.sort=function(t,i){this.bind=function(){i.bind.call(this),this.element.on("model.jstree",e.proxy(function(e,t){this.sort(t.parent,!0)},this)).on("rename_node.jstree create_node.jstree",e.proxy(function(e,t){this.sort(t.parent||t.node.parent,!1),this.redraw_node(t.parent||t.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",e.proxy(function(e,t){this.sort(t.parent,!1),this.redraw_node(t.parent,!0)},this))},this.sort=function(t,i){var s,r;if(t=this.get_node(t),t&&t.children&&t.children.length&&(t.children.sort(e.proxy(this.settings.sort,this)),i))for(s=0,r=t.children_d.length;r>s;s++)this.sort(t.children_d[s],!1)}};var u=!1;e.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree",ttl:!1,filter:!1},e.jstree.plugins.state=function(t,i){this.bind=function(){i.bind.call(this);var t=e.proxy(function(){this.element.on(this.settings.state.events,e.proxy(function(){u&&clearTimeout(u),u=setTimeout(e.proxy(function(){this.save_state()},this),100)},this))},this);this.element.on("ready.jstree",e.proxy(function(e,i){this.element.one("restore_state.jstree",t),this.restore_state()||t()},this))},this.save_state=function(){var t={state:this.get_state(),ttl:this.settings.state.ttl,sec:+new Date};e.vakata.storage.set(this.settings.state.key,JSON.stringify(t))},this.restore_state=function(){var t=e.vakata.storage.get(this.settings.state.key);if(t)try{t=JSON.parse(t)}catch(i){return!1}return t&&t.ttl&&t.sec&&+new Date-t.sec>t.ttl?!1:(t&&t.state&&(t=t.state),t&&e.isFunction(this.settings.state.filter)&&(t=this.settings.state.filter.call(this,t)),t?(this.element.one("set_state.jstree",function(i,s){s.instance.trigger("restore_state",{state:e.extend(!0,{},t)})}),this.set_state(t),!0):!1)},this.clear_state=function(){return e.vakata.storage.del(this.settings.state.key)}},function(e,t){e.vakata.storage={set:function(e,t){return window.localStorage.setItem(e,t)},get:function(e){return window.localStorage.getItem(e)},del:function(e){return window.localStorage.removeItem(e)}}}(e),e.jstree.defaults.types={"#":{},"default":{}},e.jstree.plugins.types=function(i,s){this.init=function(e,i){var r,n;if(i&&i.types&&i.types["default"])for(r in i.types)if("default"!==r&&"#"!==r&&i.types.hasOwnProperty(r))for(n in i.types["default"])i.types["default"].hasOwnProperty(n)&&i.types[r][n]===t&&(i.types[r][n]=i.types["default"][n]);s.init.call(this,e,i),this._model.data["#"].type="#"},this.refresh=function(e,t){s.refresh.call(this,e,t),this._model.data["#"].type="#"},this.bind=function(){this.element.on("model.jstree",e.proxy(function(e,i){var s=this._model.data,r=i.nodes,n=this.settings.types,a,d,o="default";for(a=0,d=r.length;d>a;a++)o="default",s[r[a]].original&&s[r[a]].original.type&&n[s[r[a]].original.type]&&(o=s[r[a]].original.type),s[r[a]].data&&s[r[a]].data.jstree&&s[r[a]].data.jstree.type&&n[s[r[a]].data.jstree.type]&&(o=s[r[a]].data.jstree.type),s[r[a]].type=o,s[r[a]].icon===!0&&n[o].icon!==t&&(s[r[a]].icon=n[o].icon);s["#"].type="#"},this)),s.bind.call(this)},this.get_json=function(t,i,r){var n,a,d=this._model.data,o=i?e.extend(!0,{},i,{no_id:!1}):{},c=s.get_json.call(this,t,o,r);if(c===!1)return!1;if(e.isArray(c))for(n=0,a=c.length;a>n;n++)c[n].type=c[n].id&&d[c[n].id]&&d[c[n].id].type?d[c[n].id].type:"default",i&&i.no_id&&(delete c[n].id,c[n].li_attr&&c[n].li_attr.id&&delete c[n].li_attr.id);else c.type=c.id&&d[c.id]&&d[c.id].type?d[c.id].type:"default",i&&i.no_id&&(c=this._delete_ids(c));return c},this._delete_ids=function(t){if(e.isArray(t)){for(var i=0,s=t.length;s>i;i++)t[i]=this._delete_ids(t[i]);return t}return delete t.id,t.li_attr&&t.li_attr.id&&delete t.li_attr.id,t.children&&e.isArray(t.children)&&(t.children=this._delete_ids(t.children)),t},this.check=function(i,r,n,a,d){if(s.check.call(this,i,r,n,a,d)===!1)return!1;r=r&&r.id?r:this.get_node(r),n=n&&n.id?n:this.get_node(n);var o=r&&r.id?e.jstree.reference(r.id):null,c,l,h,_;switch(o=o&&o._model&&o._model.data?o._model.data:null,i){case"create_node":case"move_node":case"copy_node":if("move_node"!==i||-1===e.inArray(r.id,n.children)){if(c=this.get_rules(n),c.max_children!==t&&-1!==c.max_children&&c.max_children===n.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+i,data:JSON.stringify({chk:i,pos:a,obj:r&&r.id?r.id:!1,par:n&&n.id?n.id:!1})},!1;if(c.valid_children!==t&&-1!==c.valid_children&&-1===e.inArray(r.type,c.valid_children))return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+i,data:JSON.stringify({chk:i,pos:a,obj:r&&r.id?r.id:!1,par:n&&n.id?n.id:!1})},!1;if(o&&r.children_d&&r.parents){for(l=0,h=0,_=r.children_d.length;_>h;h++)l=Math.max(l,o[r.children_d[h]].parents.length);l=l-r.parents.length+1}(0>=l||l===t)&&(l=1);do{if(c.max_depth!==t&&-1!==c.max_depth&&l>c.max_depth)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+i,data:JSON.stringify({chk:i,pos:a,obj:r&&r.id?r.id:!1,par:n&&n.id?n.id:!1})},!1;n=this.get_node(n.parent),c=this.get_rules(n),l++}while(n)}}return!0},this.get_rules=function(e){if(e=this.get_node(e),!e)return!1;var i=this.get_type(e,!0);return i.max_depth===t&&(i.max_depth=-1),i.max_children===t&&(i.max_children=-1),i.valid_children===t&&(i.valid_children=-1),i},this.get_type=function(t,i){return t=this.get_node(t),t?i?e.extend({type:t.type},this.settings.types[t.type]):t.type:!1},this.set_type=function(i,s){var r,n,a,d,o;if(e.isArray(i)){for(i=i.slice(),n=0,a=i.length;a>n;n++)this.set_type(i[n],s);return!0}return r=this.settings.types,i=this.get_node(i),r[s]&&i?(d=i.type,o=this.get_icon(i),i.type=s,(o===!0||r[d]&&r[d].icon&&o===r[d].icon)&&this.set_icon(i,r[s].icon!==t?r[s].icon:!0),!0):!1}},e.jstree.defaults.unique={case_sensitive:!1,duplicate:function(e,t){return e+" ("+t+")"}},e.jstree.plugins.unique=function(i,s){this.check=function(t,i,r,n,a){if(s.check.call(this,t,i,r,n,a)===!1)return!1;if(i=i&&i.id?i:this.get_node(i),r=r&&r.id?r:this.get_node(r),!r||!r.children)return!0;var d="rename_node"===t?n:i.text,o=[],c=this.settings.unique.case_sensitive,l=this._model.data,h,_;for(h=0,_=r.children.length;_>h;h++)o.push(c?l[r.children[h]].text:l[r.children[h]].text.toLowerCase());switch(c||(d=d.toLowerCase()),t){case"delete_node":return!0;case"rename_node":return h=-1===e.inArray(d,o)||i.text&&i.text[c?"toString":"toLowerCase"]()===d,h||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+d+" already exists. Preventing: "+t,data:JSON.stringify({chk:t,pos:n,obj:i&&i.id?i.id:!1,par:r&&r.id?r.id:!1})}),h;case"create_node":return h=-1===e.inArray(d,o),h||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+d+" already exists. Preventing: "+t,data:JSON.stringify({chk:t,pos:n,obj:i&&i.id?i.id:!1,par:r&&r.id?r.id:!1})}),h;case"copy_node":return h=-1===e.inArray(d,o),h||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+d+" already exists. Preventing: "+t,data:JSON.stringify({chk:t,pos:n,obj:i&&i.id?i.id:!1,par:r&&r.id?r.id:!1})}),h;case"move_node":return h=i.parent===r.id||-1===e.inArray(d,o),h||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+d+" already exists. Preventing: "+t,data:JSON.stringify({chk:t,pos:n,obj:i&&i.id?i.id:!1,par:r&&r.id?r.id:!1})}),h}return!0},this.create_node=function(i,r,n,a,d){if(!r||r.text===t){if(null===i&&(i="#"),i=this.get_node(i),!i)return s.create_node.call(this,i,r,n,a,d);if(n=n===t?"last":n,!(""+n).match(/^(before|after)$/)&&!d&&!this.is_loaded(i))return s.create_node.call(this,i,r,n,a,d);r||(r={});var o,c,l,h,_,u=this._model.data,g=this.settings.unique.case_sensitive,f=this.settings.unique.duplicate;for(c=o=this.get_string("New node"),l=[],h=0,_=i.children.length;_>h;h++)l.push(g?u[i.children[h]].text:u[i.children[h]].text.toLowerCase());h=1;while(-1!==e.inArray(g?c:c.toLowerCase(),l))c=""+f.call(this,o,++h);r.text=c}return s.create_node.call(this,i,r,n,a,d)}};var g=document.createElement("DIV");g.setAttribute("unselectable","on"),g.className="jstree-wholerow",g.innerHTML="&#160;",e.jstree.plugins.wholerow=function(t,i){this.bind=function(){i.bind.call(this),this.element.on("ready.jstree set_state.jstree",e.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",e.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",e.proxy(function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var i=!1,s,r;for(s=0,r=t.selected.length;r>s;s++)i=this.get_node(t.selected[s],!0),i&&i.length&&i.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",e.proxy(function(e,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",e.proxy(function(e,t){this.get_node(t.node,!0).children(".jstree-wholerow")["hover_node"===e.type?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",e.proxy(function(t){t.preventDefault();var i=e.Event("contextmenu",{metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,pageX:t.pageX,pageY:t.pageY});e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor:eq(0)").trigger(i)},this)).on("click.jstree",".jstree-wholerow",function(t){t.stopImmediatePropagation();var i=e.Event("click",{metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey});e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor:eq(0)").trigger(i).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",e.proxy(function(t){t.stopImmediatePropagation();var i=e.Event("click",{metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey});e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor:eq(0)").trigger(i).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",e.proxy(function(e){return e.stopImmediatePropagation(),this.hover_node(e.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",e.proxy(function(e){this.dehover_node(e.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),i.teardown.call(this)},this.redraw_node=function(t,s,r){if(t=i.redraw_node.call(this,t,s,r)){var n=g.cloneNode(!0);-1!==e.inArray(t.id,this._data.core.selected)&&(n.className+=" jstree-wholerow-clicked"),t.insertBefore(n,t.childNodes[0])}return t}},function(e){if(document.registerElement){var t=Object.create(HTMLElement.prototype);t.createdCallback=function(){var t={core:{},plugins:[]},i;for(i in e.jstree.plugins)e.jstree.plugins.hasOwnProperty(i)&&this.attributes[i]&&(t.plugins.push(i),this.getAttribute(i)&&JSON.parse(this.getAttribute(i))&&(t[i]=JSON.parse(this.getAttribute(i))));for(i in e.jstree.defaults.core)e.jstree.defaults.core.hasOwnProperty(i)&&this.attributes[i]&&(t.core[i]=JSON.parse(this.getAttribute(i))||this.getAttribute(i));jQuery(this).jstree(t)},document.registerElement("vakata-jstree",{prototype:t})}}(jQuery)}});
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */


!function($){$.extend($.fn,{validate:function(options){if(!this.length){if(options&&options.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")}return}var validator=$.data(this[0],"validator");if(validator){return validator}this.attr("novalidate","novalidate");validator=new $.validator(options,this[0]);$.data(this[0],"validator",validator);if(validator.settings.onsubmit){this.validateDelegate(":submit","click",function(event){if(validator.settings.submitHandler){validator.submitButton=event.target}if($(event.target).hasClass("cancel")){validator.cancelSubmit=true}if($(event.target).attr("formnovalidate")!==undefined){validator.cancelSubmit=true}});this.submit(function(event){if(validator.settings.debug){event.preventDefault()}function handle(){var hidden;if(validator.settings.submitHandler){if(validator.submitButton){hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)}validator.settings.submitHandler.call(validator,validator.currentForm,event);if(validator.submitButton){hidden.remove()}return false}return true}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle()}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false}return handle()}else{validator.focusInvalid();return false}})}return validator},valid:function(){if($(this[0]).is("form")){return this.validate().form()}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid=valid&&validator.element(this)});return valid}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value)});return result},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,"validator").settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));delete existingRules.messages;staticRules[element.name]=existingRules;if(argument.messages){settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages)}break;case"remove":if(!argument){delete staticRules[element.name];return existingRules}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method]});return filtered}}var data=$.validator.normalizeRules($.extend({},$.validator.classRules(element),$.validator.attributeRules(element),$.validator.dataRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data)}return data}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+$(a).val())},filled:function(a){return!!$.trim(""+$(a).val())},unchecked:function(a){return!$(a).prop("checked")}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init()};$.validator.format=function(source,params){if(arguments.length===1){return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args)}}if(arguments.length>2&&params.constructor!==Array){params=$.makeArray(arguments).slice(1)}if(params.constructor!==Array){params=[params]}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),function(){return n})});return source};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(element,event){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass)}this.addWrapper(this.errorsFor(element)).hide()}},onfocusout:function(element,event){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element)}},onkeyup:function(element,event){if(event.which===9&&this.elementValue(element)===""){return}else if(element.name in this.submitted||element===this.lastElement){this.element(element)}},onclick:function(element,event){if(element.name in this.submitted){this.element(element)}else if(element.parentNode.name in this.submitted){this.element(element.parentNode)}},highlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).addClass(errorClass).removeClass(validClass)}else{$(element).addClass(errorClass).removeClass(validClass)}},unhighlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).removeClass(errorClass).addClass(validClass)}else{$(element).removeClass(errorClass).addClass(validClass)}}},setDefaults:function(settings){$.extend($.validator.defaults,settings)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=this.groups={};$.each(this.settings.groups,function(key,value){if(typeof value==="string"){value=value.split(/\s/)}$.each(value,function(index,name){groups[name]=key})});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value)});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");if(validator.settings[eventType]){validator.settings[eventType].call(validator,this[0],event)}}$(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, "+"[type='number'], [type='search'] ,[type='tel'], [type='url'], "+"[type='email'], [type='datetime'], [type='date'], [type='month'], "+"[type='week'], [type='time'], [type='datetime-local'], "+"[type='range'], [type='color'] ","focusin focusout keyup",delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",delegate);if(this.settings.invalidHandler){$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)}},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid()){$(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var i=0,elements=this.currentElements=this.elements();elements[i];i++){this.check(elements[i])}return this.valid()},element:function(element){element=this.validationTargetFor(this.clean(element));this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element)!==false;if(result){delete this.invalid[element.name]}else{this.invalid[element.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)}this.showErrors();return result},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]})}this.successList=$.grep(this.successList,function(element){return!(element.name in errors)})}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)}else{this.defaultShowErrors()}},resetForm:function(){if($.fn.resetForm){$(this.currentForm).resetForm()}this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(obj){var count=0;for(var i in obj){count++}return count},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name===lastActive.name}).length===1&&lastActive},elements:function(){var validator=this,rulesCache={};return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&validator.settings.debug&&window.console){console.error("%o has no name assigned",this)}if(this.name in rulesCache||!validator.objectLength($(this).rules())){return false}rulesCache[this.name]=true;return true})},clean:function(selector){return $(selector)[0]},errors:function(){var errorClass=this.settings.errorClass.replace(" ",".");return $(this.settings.errorElement+"."+errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element)},elementValue:function(element){var type=$(element).attr("type"),val=$(element).val();if(type==="radio"||type==="checkbox"){return $("input[name='"+$(element).attr("name")+"']:checked").val()}if(typeof val==="string"){return val.replace(/\r/g,"")}return val},check:function(element){element=this.validationTargetFor(this.clean(element));var rules=$(element).rules();var dependencyMismatch=false;var val=this.elementValue(element);var result;for(var method in rules){var rule={method:method,parameters:rules[method]};try{result=$.validator.methods[method].call(this,val,element,rule.parameters);if(result==="dependency-mismatch"){dependencyMismatch=true;continue}dependencyMismatch=false;if(result==="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return}if(!result){this.formatAndAdd(element,rule);return false}}catch(e){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+element.id+", check the '"+rule.method+"' method.",e)}throw e}}if(dependencyMismatch){return}if(this.objectLength(rules)){this.successList.push(element)}return true},customDataMessage:function(element,method){return $(element).data("msg-"+method.toLowerCase())||element.attributes&&$(element).attr("data-msg-"+method.toLowerCase())},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor===String?m:m[method])},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined){return arguments[i]}}return undefined},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customDataMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>")},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message==="function"){message=message.call(this,rule.parameters,element)}else if(theregex.test(message)){message=$.validator.format(message.replace(theregex,"{$1}"),rule.parameters)}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message},addWrapper:function(toToggle){if(this.settings.wrapper){toToggle=toToggle.add(toToggle.parent(this.settings.wrapper))}return toToggle},defaultShowErrors:function(){var i,elements;for(i=0;this.errorList[i];i++){var error=this.errorList[i];if(this.settings.highlight){this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass)}this.showLabel(error.element,error.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)}if(this.settings.success){for(i=0;this.successList[i];i++){this.showLabel(this.successList[i])}}if(this.settings.unhighlight){for(i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass)}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return $(this.errorList).map(function(){return this.element})},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);label.html(message)}else{label=$("<"+this.settings.errorElement+">").attr("for",this.idOrName(element)).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(label).length){if(this.settings.errorPlacement){this.settings.errorPlacement(label,$(element))}else{label.insertAfter(element)}}}if(!message&&this.settings.success){label.text("");if(typeof this.settings.success==="string"){label.addClass(this.settings.success)}else{this.settings.success(label,element)}}this.toShow=this.toShow.add(label)},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr("for")===name})},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name)},validationTargetFor:function(element){if(this.checkable(element)){element=this.findByName(element.name).not(this.settings.ignore)[0]}return element},checkable:function(element){return/radio|checkbox/i.test(element.type)},findByName:function(name){return $(this.currentForm).find("[name='"+name+"']")},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case"select":return $("option:selected",element).length;case"input":if(this.checkable(element)){return this.findByName(element.name).filter(":checked").length}}return value.length},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true},dependTypes:{"boolean":function(param,element){return param},string:function(param,element){return!!$(param,element.form).length},"function":function(param,element){return param(element)}},optional:function(element){var val=this.elementValue(element);return!$.validator.methods.required.call(this,val,element)&&"dependency-mismatch"},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[element.name];if(valid&&this.pendingRequest===0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false}else if(!valid&&this.pendingRequest===0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){if(className.constructor===String){this.classRuleSettings[className]=rules}else{$.extend(this.classRuleSettings,className)}},classRules:function(element){var rules={};var classes=$(element).attr("class");if(classes){$.each(classes.split(" "),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this])}})}return rules},attributeRules:function(element){var rules={};var $element=$(element);var type=$element[0].getAttribute("type");for(var method in $.validator.methods){var value;if(method==="required"){value=$element.get(0).getAttribute(method);if(value===""){value=true}value=!!value}else{value=$element.attr(method)}if(/min|max/.test(method)&&(type===null||/number|range|text/.test(type))){value=Number(value)}if(value){rules[method]=value}else if(type===method&&type!=="range"){rules[method]=true}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength}return rules},dataRules:function(element){var method,value,rules={},$element=$(element);for(method in $.validator.methods){value=$element.data("rule-"+method.toLowerCase());if(value!==undefined){rules[method]=value}}return rules},staticRules:function(element){var rules={};var validator=$.data(element.form,"validator");if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{}}return rules},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break}if(keepRule){rules[prop]=val.param!==undefined?val.param:true}else{delete rules[prop]}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter});$.each(["minlength","maxlength"],function(){if(rules[this]){rules[this]=Number(rules[this])}});$.each(["rangelength","range"],function(){var parts;if(rules[this]){if($.isArray(rules[this])){rules[this]=[Number(rules[this][0]),Number(rules[this][1])]}else if(typeof rules[this]==="string"){parts=rules[this].split(/[\s,]+/);rules[this]=[Number(parts[0]),Number(parts[1])]}}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength}}return rules},normalizeRule:function(data){if(typeof data==="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true});data=transformed}return data},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!==undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name))}},methods:{required:function(value,element,param){if(!this.depend(param,element)){return"dependency-mismatch"}if(element.nodeName.toLowerCase()==="select"){var val=$(element).val();return val&&val.length>0}if(this.checkable(element)){return this.getLength(value,element)>0}return $.trim(value).length>0},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value)},url:function(value,element){return this.optional(element)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value).toString())},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value)},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value)},creditcard:function(value,element){if(this.optional(element)){return"dependency-mismatch"}if(/[^0-9 \-]+/.test(value)){return false}var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9){nDigit-=9}}nCheck+=nDigit;bEven=!bEven}return nCheck%10===0},minlength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length>=param},maxlength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length<=param},rangelength:function(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length>=param[0]&&length<=param[1]},min:function(value,element,param){return this.optional(element)||value>=param},max:function(value,element,param){return this.optional(element)||value<=param},range:function(value,element,param){return this.optional(element)||value>=param[0]&&value<=param[1]},equalTo:function(value,element,param){var target=$(param);if(this.settings.onfocusout){target.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid()})}return value===target.val()},remote:function(value,element,param){if(this.optional(element)){return"dependency-mismatch"}var previous=this.previousValue(element);if(!this.settings.messages[element.name]){this.settings.messages[element.name]={}}previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param==="string"&&{url:param}||param;if(previous.old===value){return previous.valid}previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true||response==="true";if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors()}else{var errors={};var message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.invalid[element.name]=true;validator.showErrors(errors)}previous.valid=valid;validator.stopRequest(element,valid)}},param));return"pending"}}});$.format=$.validator.format}(jQuery);!function($){var pendingRequests={};if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort()}pendingRequests[port]=xhr}})}else{var ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort()}pendingRequests[port]=ajax.apply(this,arguments);return pendingRequests[port]}return ajax.apply(this,arguments)}}}(jQuery);!function($){$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments)}})}})}(jQuery);
/*! jsUri v1.1.1 | https://github.com/derek-watson/jsUri */

var Query=function(a){"use strict";var b=function(a){var b=[],c,d,e,f;if(typeof a=="undefined"||a===null||a==="")return b;a.indexOf("?")===0&&(a=a.substring(1)),d=a.toString().split(/[&;]/);for(c=0;c<d.length;c++)e=d[c],f=e.split("="),b.push([f[0],f[1]]);return b},c=b(a),d=function(){var a="",b,d;for(b=0;b<c.length;b++)d=c[b],a.length>0&&(a+="&"),a+=d.join("=");return a.length>0?"?"+a:a},e=function(a){a=decodeURIComponent(a),a=a.replace("+"," ");return a},f=function(a){var b,d;for(d=0;d<c.length;d++){b=c[d];if(e(a)===e(b[0]))return b[1]}},g=function(a){var b=[],d,f;for(d=0;d<c.length;d++)f=c[d],e(a)===e(f[0])&&b.push(f[1]);return b},h=function(a,b){var d=[],f,g,h,i;for(f=0;f<c.length;f++)g=c[f],h=e(g[0])===e(a),i=e(g[1])===e(b),(arguments.length===1&&!h||arguments.length===2&&!h&&!i)&&d.push(g);c=d;return this},i=function(a,b,d){arguments.length===3&&d!==-1?(d=Math.min(d,c.length),c.splice(d,0,[a,b])):arguments.length>0&&c.push([a,b]);return this},j=function(a,b,d){var f=-1,g,j;if(arguments.length===3){for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)&&decodeURIComponent(j[1])===e(d)){f=g;break}}h(a,d).addParam(a,b,f)}else{for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)){f=g;break}}h(a),i(a,b,f)}return this};return{getParamValue:f,getParamValues:g,deleteParam:h,addParam:i,replaceParam:j,toString:d}},Uri=function(a){"use strict";var b=!1,c=function(a){var c={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],e={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},f=c[b?"strict":"loose"].exec(a),g={},h=14;while(h--)g[d[h]]=f[h]||"";g[e.name]={},g[d[12]].replace(e.parser,function(a,b,c){b&&(g[e.name][b]=c)});return g},d=c(a||""),e=new Query(d.query),f=function(a){typeof a!="undefined"&&(d.protocol=a);return d.protocol},g=null,h=function(a){typeof a!="undefined"&&(g=a);return g===null?d.source.indexOf("//")!==-1:g},i=function(a){typeof a!="undefined"&&(d.userInfo=a);return d.userInfo},j=function(a){typeof a!="undefined"&&(d.host=a);return d.host},k=function(a){typeof a!="undefined"&&(d.port=a);return d.port},l=function(a){typeof a!="undefined"&&(d.path=a);return d.path},m=function(a){typeof a!="undefined"&&(e=new Query(a));return e},n=function(a){typeof a!="undefined"&&(d.anchor=a);return d.anchor},o=function(a){f(a);return this},p=function(a){h(a);return this},q=function(a){i(a);return this},r=function(a){j(a);return this},s=function(a){k(a);return this},t=function(a){l(a);return this},u=function(a){m(a);return this},v=function(a){n(a);return this},w=function(a){return m().getParamValue(a)},x=function(a){return m().getParamValues(a)},y=function(a,b){arguments.length===2?m().deleteParam(a,b):m().deleteParam(a);return this},z=function(a,b,c){arguments.length===3?m().addParam(a,b,c):m().addParam(a,b);return this},A=function(a,b,c){arguments.length===3?m().replaceParam(a,b,c):m().replaceParam(a,b);return this},B=function(){var a="",b=function(a){return a!==null&&a!==""};b(f())?(a+=f(),f().indexOf(":")!==f().length-1&&(a+=":"),a+="//"):h()&&b(j())&&(a+="//"),b(i())&&b(j())&&(a+=i(),i().indexOf("@")!==i().length-1&&(a+="@")),b(j())&&(a+=j(),b(k())&&(a+=":"+k())),b(l())?a+=l():b(j())&&(b(m().toString())||b(n()))&&(a+="/"),b(m().toString())&&(m().toString().indexOf("?")!==0&&(a+="?"),a+=m().toString()),b(n())&&(n().indexOf("#")!==0&&(a+="#"),a+=n());return a},C=function(){return new Uri(B())};return{protocol:f,hasAuthorityPrefix:h,userInfo:i,host:j,port:k,path:l,query:m,anchor:n,setProtocol:o,setHasAuthorityPrefix:p,setUserInfo:q,setHost:r,setPort:s,setPath:t,setQuery:u,setAnchor:v,getQueryParamValue:w,getQueryParamValues:x,deleteQueryParam:y,addQueryParam:z,replaceQueryParam:A,toString:B,clone:C}},jsUri=Uri;
(function() {
  window.Spree = (function() {
    function Spree() {}

    Spree.ready = function(callback) {
      return jQuery(document).ready(callback);
    };

    Spree.mountedAt = function() {
      return "/";
    };

    Spree.pathFor = function(path) {
      return "" + window.location.origin + (this.mountedAt()) + path;
    };

    Spree.url = function(uri, query) {
      if (uri.path === void 0) {
        uri = new Uri(uri);
      }
      if (query) {
        $.each(query, function(key, value) {
          return uri.addQueryParam(key, value);
        });
      }
      return uri;
    };

    Spree.uri = function(uri, query) {
      return url(uri, query);
    };

    Spree.ajax = function(url_or_settings, settings) {
      var url;
      if (typeof url_or_settings === "string") {
        return $.ajax(Spree.url(url_or_settings).toString(), settings);
      } else {
        url = url_or_settings['url'];
        delete url_or_settings['url'];
        return $.ajax(Spree.url(url).toString(), url_or_settings);
      }
    };

    Spree.routes = {
      states_search: Spree.pathFor('api/states'),
      apply_coupon_code: function(order_id) {
        return Spree.pathFor("api/orders/" + order_id + "/apply_coupon_code");
      }
    };

    return Spree;

  })();

}).call(this);
// Generated by CoffeeScript 1.4.0
(function() {
  var $, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictExpiry, restrictNumeric, setCardType,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    _this = this;

  $ = jQuery;

  $.payment = {};

  $.payment.fn = {};

  $.fn.payment = function() {
    var args, method;
    method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return $.payment.fn[method].apply(this, args);
  };

  defaultFormat = /(\d{1,4})/g;

  cards = [
    {
      type: 'maestro',
      pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
      format: defaultFormat,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'dinersclub',
      pattern: /^(36|38|30[0-5])/,
      format: defaultFormat,
      length: [14],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'laser',
      pattern: /^(6706|6771|6709)/,
      format: defaultFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'jcb',
      pattern: /^35/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'unionpay',
      pattern: /^62/,
      format: defaultFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: false
    }, {
      type: 'discover',
      pattern: /^(6011|65|64[4-9]|622)/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'mastercard',
      pattern: /^5[1-5]/,
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'amex',
      pattern: /^3[47]/,
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      length: [15],
      cvcLength: [3, 4],
      luhn: true
    }, {
      type: 'visa',
      pattern: /^4/,
      format: defaultFormat,
      length: [13, 14, 15, 16],
      cvcLength: [3],
      luhn: true
    }
  ];

  cardFromNumber = function(num) {
    var card, _i, _len;
    num = (num + '').replace(/\D/g, '');
    for (_i = 0, _len = cards.length; _i < _len; _i++) {
      card = cards[_i];
      if (card.pattern.test(num)) {
        return card;
      }
    }
  };

  cardFromType = function(type) {
    var card, _i, _len;
    for (_i = 0, _len = cards.length; _i < _len; _i++) {
      card = cards[_i];
      if (card.type === type) {
        return card;
      }
    }
  };

  luhnCheck = function(num) {
    var digit, digits, odd, sum, _i, _len;
    odd = true;
    sum = 0;
    digits = (num + '').split('').reverse();
    for (_i = 0, _len = digits.length; _i < _len; _i++) {
      digit = digits[_i];
      digit = parseInt(digit, 10);
      if ((odd = !odd)) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  hasTextSelected = function($target) {
    var _ref;
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== $target.prop('selectionEnd')) {
      return true;
    }
    if (typeof document !== "undefined" && document !== null ? (_ref = document.selection) != null ? typeof _ref.createRange === "function" ? _ref.createRange().text : void 0 : void 0 : void 0) {
      return true;
    }
    return false;
  };

  reFormatCardNumber = function(e) {
    var _this = this;
    return setTimeout(function() {
      var $target, value;
      $target = $(e.currentTarget);
      value = $target.val();
      value = $.payment.formatCardNumber(value);
      return $target.val(value);
    });
  };

  formatCardNumber = function(e) {
    var $target, card, digit, length, re, upperLength, value;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    value = $target.val();
    card = cardFromNumber(value + digit);
    length = (value.replace(/\D/g, '') + digit).length;
    upperLength = 16;
    if (card) {
      upperLength = card.length[card.length.length - 1];
    }
    if (length >= upperLength) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (card && card.type === 'amex') {
      re = /^(\d{4}|\d{4}\s\d{6})$/;
    } else {
      re = /(?:^|\s)(\d{4})$/;
    }
    if (re.test(value)) {
      e.preventDefault();
      return $target.val(value + ' ' + digit);
    } else if (re.test(value + digit)) {
      e.preventDefault();
      return $target.val(value + digit + ' ');
    }
  };

  formatBackCardNumber = function(e) {
    var $target, value;
    $target = $(e.currentTarget);
    value = $target.val();
    if (e.meta) {
      return;
    }
    if (e.which !== 8) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (/\d\s$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\d\s$/, ''));
    } else if (/\s\d?$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\s\d?$/, ''));
    }
  };

  formatExpiry = function(e) {
    var $target, digit, val;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val() + digit;
    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
      e.preventDefault();
      return $target.val("0" + val + " / ");
    } else if (/^\d\d$/.test(val)) {
      e.preventDefault();
      return $target.val("" + val + " / ");
    }
  };

  formatForwardExpiry = function(e) {
    var $target, digit, val;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val();
    if (/^\d\d$/.test(val)) {
      return $target.val("" + val + " / ");
    }
  };

  formatForwardSlash = function(e) {
    var $target, slash, val;
    slash = String.fromCharCode(e.which);
    if (slash !== '/') {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val();
    if (/^\d$/.test(val) && val !== '0') {
      return $target.val("0" + val + " / ");
    }
  };

  formatBackExpiry = function(e) {
    var $target, value;
    if (e.meta) {
      return;
    }
    $target = $(e.currentTarget);
    value = $target.val();
    if (e.which !== 8) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (/\d(\s|\/)+$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\d(\s|\/)*$/, ''));
    } else if (/\s\/\s?\d?$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\s\/\s?\d?$/, ''));
    }
  };

  restrictNumeric = function(e) {
    var input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  };

  restrictCardNumber = function(e) {
    var $target, card, digit, value;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    if (hasTextSelected($target)) {
      return;
    }
    value = ($target.val() + digit).replace(/\D/g, '');
    card = cardFromNumber(value);
    if (card) {
      return value.length <= card.length[card.length.length - 1];
    } else {
      return value.length <= 16;
    }
  };

  restrictExpiry = function(e) {
    var $target, digit, value;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    if (hasTextSelected($target)) {
      return;
    }
    value = $target.val() + digit;
    value = value.replace(/\D/g, '');
    if (value.length > 6) {
      return false;
    }
  };

  restrictCVC = function(e) {
    var $target, digit, val;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    val = $target.val() + digit;
    return val.length <= 4;
  };

  setCardType = function(e) {
    var $target, allTypes, card, cardType, val;
    $target = $(e.currentTarget);
    val = $target.val();
    cardType = $.payment.cardType(val) || 'unknown';
    if (!$target.hasClass(cardType)) {
      allTypes = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = cards.length; _i < _len; _i++) {
          card = cards[_i];
          _results.push(card.type);
        }
        return _results;
      })();
      $target.removeClass('unknown');
      $target.removeClass(allTypes.join(' '));
      $target.addClass(cardType);
      $target.toggleClass('identified', cardType !== 'unknown');
      return $target.trigger('payment.cardType', cardType);
    }
  };

  $.payment.fn.formatCardCVC = function() {
    this.payment('restrictNumeric');
    this.on('keypress', restrictCVC);
    return this;
  };

  $.payment.fn.formatCardExpiry = function() {
    this.payment('restrictNumeric');
    this.on('keypress', restrictExpiry);
    this.on('keypress', formatExpiry);
    this.on('keypress', formatForwardSlash);
    this.on('keypress', formatForwardExpiry);
    this.on('keydown', formatBackExpiry);
    return this;
  };

  $.payment.fn.formatCardNumber = function() {
    this.payment('restrictNumeric');
    this.on('keypress', restrictCardNumber);
    this.on('keypress', formatCardNumber);
    this.on('keydown', formatBackCardNumber);
    this.on('keyup', setCardType);
    this.on('paste', reFormatCardNumber);
    return this;
  };

  $.payment.fn.restrictNumeric = function() {
    this.on('keypress', restrictNumeric);
    return this;
  };

  $.payment.fn.cardExpiryVal = function() {
    return $.payment.cardExpiryVal($(this).val());
  };

  $.payment.cardExpiryVal = function(value) {
    var month, prefix, year, _ref;
    value = value.replace(/\s/g, '');
    _ref = value.split('/', 2), month = _ref[0], year = _ref[1];
    if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
      prefix = (new Date).getFullYear();
      prefix = prefix.toString().slice(0, 2);
      year = prefix + year;
    }
    month = parseInt(month, 10);
    year = parseInt(year, 10);
    return {
      month: month,
      year: year
    };
  };

  $.payment.validateCardNumber = function(num) {
    var card, _ref;
    num = (num + '').replace(/\s+|-/g, '');
    if (!/^\d+$/.test(num)) {
      return false;
    }
    card = cardFromNumber(num);
    if (!card) {
      return false;
    }
    return (_ref = num.length, __indexOf.call(card.length, _ref) >= 0) && (card.luhn === false || luhnCheck(num));
  };

  $.payment.validateCardExpiry = function(month, year) {
    var currentTime, expiry, prefix, _ref;
    if (typeof month === 'object' && 'month' in month) {
      _ref = month, month = _ref.month, year = _ref.year;
    }
    if (!(month && year)) {
      return false;
    }
    month = $.trim(month);
    year = $.trim(year);
    if (!/^\d+$/.test(month)) {
      return false;
    }
    if (!/^\d+$/.test(year)) {
      return false;
    }
    if (!(parseInt(month, 10) <= 12)) {
      return false;
    }
    if (year.length === 2) {
      prefix = (new Date).getFullYear();
      prefix = prefix.toString().slice(0, 2);
      year = prefix + year;
    }
    expiry = new Date(year, month);
    currentTime = new Date;
    expiry.setMonth(expiry.getMonth() - 1);
    expiry.setMonth(expiry.getMonth() + 1, 1);
    return expiry > currentTime;
  };

  $.payment.validateCardCVC = function(cvc, type) {
    var _ref, _ref1;
    cvc = $.trim(cvc);
    if (!/^\d+$/.test(cvc)) {
      return false;
    }
    if (type) {
      return _ref = cvc.length, __indexOf.call((_ref1 = cardFromType(type)) != null ? _ref1.cvcLength : void 0, _ref) >= 0;
    } else {
      return cvc.length >= 3 && cvc.length <= 4;
    }
  };

  $.payment.cardType = function(num) {
    var _ref;
    if (!num) {
      return null;
    }
    return ((_ref = cardFromNumber(num)) != null ? _ref.type : void 0) || null;
  };

  $.payment.formatCardNumber = function(num) {
    var card, groups, upperLength, _ref;
    card = cardFromNumber(num);
    if (!card) {
      return num;
    }
    upperLength = card.length[card.length.length - 1];
    num = num.replace(/\D/g, '');
    num = num.slice(0, +upperLength + 1 || 9e9);
    if (card.format.global) {
      return (_ref = num.match(card.format)) != null ? _ref.join(' ') : void 0;
    } else {
      groups = card.format.exec(num);
      if (groups != null) {
        groups.shift();
      }
      return groups != null ? groups.join(' ') : void 0;
    }
  };

}).call(this);
(function() {
  Spree.disableSaveOnClick = function() {
    return ($('form.edit_order')).submit(function() {
      return ($(this)).find(':submit, :image').attr('disabled', true).removeClass('primary').addClass('disabled');
    });
  };

  Spree.ready(function($) {
    return Spree.Checkout = {};
  });

}).call(this);
(function() {
  Spree.ready(function($) {
    Spree.onAddress = function() {
      var getCountryId, order_use_billing, update_shipping_form_state;
      if (($('#checkout_form_address')).is('*')) {
        ($('#checkout_form_address')).validate();
        getCountryId = function(region) {
          return $('#' + region + 'country select').val();
        };
        Spree.updateState = function(region) {
          var countryId;
          countryId = getCountryId(region);
          if (countryId != null) {
            if (Spree.Checkout[countryId] == null) {
              return $.get(Spree.routes.states_search, {
                country_id: countryId
              }, function(data) {
                Spree.Checkout[countryId] = {
                  states: data.states,
                  states_required: data.states_required
                };
                return Spree.fillStates(Spree.Checkout[countryId], region);
              });
            } else {
              return Spree.fillStates(Spree.Checkout[countryId], region);
            }
          }
        };
        Spree.fillStates = function(data, region) {
          var selected, stateInput, statePara, stateSelect, stateSpanRequired, states, statesRequired, statesWithBlank;
          statesRequired = data.states_required;
          states = data.states;
          statePara = $('#' + region + 'state');
          stateSelect = statePara.find('select');
          stateInput = statePara.find('input');
          stateSpanRequired = statePara.find('state-required');
          if (states.length > 0) {
            selected = parseInt(stateSelect.val());
            stateSelect.html('');
            statesWithBlank = [
              {
                name: '',
                id: ''
              }
            ].concat(states);
            $.each(statesWithBlank, function(idx, state) {
              var opt;
              opt = ($(document.createElement('option'))).attr('value', state.id).html(state.name);
              if (selected === state.id) {
                opt.prop('selected', true);
              }
              return stateSelect.append(opt);
            });
            stateSelect.prop('disabled', false).show();
            stateInput.hide().prop('disabled', true);
            statePara.show();
            stateSpanRequired.show();
            if (statesRequired) {
              stateSelect.addClass('required');
            }
            stateSelect.removeClass('hidden');
            return stateInput.removeClass('required');
          } else {
            stateSelect.hide().prop('disabled', true);
            stateInput.show();
            if (statesRequired) {
              stateSpanRequired.show();
              stateInput.addClass('required');
            } else {
              stateInput.val('');
              stateSpanRequired.hide();
              stateInput.removeClass('required');
            }
            statePara.toggle(!!statesRequired);
            stateInput.prop('disabled', !statesRequired);
            stateInput.removeClass('hidden');
            return stateSelect.removeClass('required');
          }
        };
        ($('#bcountry select')).change(function() {
          return Spree.updateState('b');
        });
        ($('#scountry select')).change(function() {
          return Spree.updateState('s');
        });
        Spree.updateState('b');
        order_use_billing = $('input#order_use_billing');
        order_use_billing.change(function() {
          return update_shipping_form_state(order_use_billing);
        });
        update_shipping_form_state = function(order_use_billing) {
          if (order_use_billing.is(':checked')) {
            ($('#shipping .inner')).hide();
            return ($('#shipping .inner input, #shipping .inner select')).prop('disabled', true);
          } else {
            ($('#shipping .inner')).show();
            ($('#shipping .inner input, #shipping .inner select')).prop('disabled', false);
            return Spree.updateState('s');
          }
        };
        return update_shipping_form_state(order_use_billing);
      }
    };
    return Spree.onAddress();
  });

}).call(this);
(function() {
  Spree.ready(function($) {
    Spree.onPayment = function() {
      if (($('#checkout_form_payment')).is('*')) {
        if (($('#existing_cards')).is('*')) {
          ($('#payment-method-fields')).hide();
          ($('#payment-methods')).hide();
          ($('#use_existing_card_yes')).click(function() {
            ($('#payment-method-fields')).hide();
            ($('#payment-methods')).hide();
            return ($('.existing-cc-radio')).prop("disabled", false);
          });
          ($('#use_existing_card_no')).click(function() {
            ($('#payment-method-fields')).show();
            ($('#payment-methods')).show();
            return ($('.existing-cc-radio')).prop("disabled", true);
          });
        }
        $(".cardNumber").payment('formatCardNumber');
        $(".cardExpiry").payment('formatCardExpiry');
        $(".cardCode").payment('formatCardCVC');
        $(".cardNumber").change(function() {
          return $(this).parent().siblings(".ccType").val($.payment.cardType(this.value));
        });
        ($('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]')).click(function() {
          ($('#payment-methods li')).hide();
          if (this.checked) {
            return ($('#payment_method_' + this.value)).show();
          }
        });
        ($(document)).on('click', '#cvv_link', function(event) {
          var windowName, windowOptions;
          windowName = 'cvv_info';
          windowOptions = 'left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1';
          window.open(($(this)).attr('href'), windowName, windowOptions);
          return event.preventDefault();
        });
        ($('input[type="radio"]:checked')).click();
        return $('#checkout_form_payment').submit(function() {
          var coupon_code, coupon_code_field, coupon_status, url;
          coupon_code_field = $('#order_coupon_code');
          coupon_code = $.trim(coupon_code_field.val());
          if (coupon_code !== '') {
            if ($('#coupon_status').length === 0) {
              coupon_status = $("<div id='coupon_status'></div>");
              coupon_code_field.parent().append(coupon_status);
            } else {
              coupon_status = $("#coupon_status");
            }
            url = Spree.url(Spree.routes.apply_coupon_code(Spree.current_order_id), {
              order_token: Spree.current_order_token,
              coupon_code: coupon_code
            });
            coupon_status.removeClass();
            return $.ajax({
              async: false,
              method: "PUT",
              url: url,
              success: function(data) {
                coupon_code_field.val('');
                coupon_status.addClass("success").html("Coupon code applied successfully.");
                return true;
              },
              error: function(xhr) {
                var handler;
                handler = JSON.parse(xhr.responseText);
                coupon_status.addClass("error").html(handler["error"]);
                $('.continue').attr('disabled', false);
                return false;
              }
            });
          }
        });
      }
    };
    return Spree.onPayment();
  });

}).call(this);
(function() {
  $(function() {
    var radios, selectedRadio;
    Spree.addImageHandlers = function() {
      var thumbnails;
      thumbnails = $('#product-images ul.thumbnails');
      ($('#main-image')).data('selectedThumb', ($('#main-image img')).attr('src'));
      thumbnails.find('li').eq(0).addClass('selected');
      thumbnails.find('a').on('click', function(event) {
        ($('#main-image')).data('selectedThumb', ($(event.currentTarget)).attr('href'));
        ($('#main-image')).data('selectedThumbId', ($(event.currentTarget)).parent().attr('id'));
        ($(this)).mouseout(function() {
          thumbnails.find('li').removeClass('selected');
          return ($(event.currentTarget)).parent('li').addClass('selected');
        });
        return false;
      });
      thumbnails.find('li').on('mouseenter', function(event) {
        return ($('#main-image img')).attr('src', ($(event.currentTarget)).find('a').attr('href'));
      });
      return thumbnails.find('li').on('mouseleave', function(event) {
        return ($('#main-image img')).attr('src', ($('#main-image')).data('selectedThumb'));
      });
    };
    Spree.showVariantImages = function(variantId) {
      var currentThumb, newImg, thumb;
      ($('li.vtmb')).hide();
      ($('li.tmb-' + variantId)).show();
      currentThumb = $('#' + ($('#main-image')).data('selectedThumbId'));
      if (!currentThumb.hasClass('vtmb-' + variantId)) {
        thumb = $(($('#product-images ul.thumbnails li:visible.vtmb')).eq(0));
        if (!(thumb.length > 0)) {
          thumb = $(($('#product-images ul.thumbnails li:visible')).eq(0));
        }
        newImg = thumb.find('a').attr('href');
        ($('#product-images ul.thumbnails li')).removeClass('selected');
        thumb.addClass('selected');
        ($('#main-image img')).attr('src', newImg);
        ($('#main-image')).data('selectedThumb', newImg);
        return ($('#main-image')).data('selectedThumbId', thumb.attr('id'));
      }
    };
    Spree.updateVariantPrice = function(variant) {
      var variantPrice;
      variantPrice = variant.data('price');
      if (variantPrice) {
        return ($('.price.selling')).text(variantPrice);
      }
    };
    radios = $('#product-variants input[type="radio"]');
    if (radios.length > 0) {
      selectedRadio = $('#product-variants input[type="radio"][checked="checked"]');
      Spree.showVariantImages(selectedRadio.attr('value'));
      Spree.updateVariantPrice(selectedRadio);
    }
    Spree.addImageHandlers();
    return radios.click(function(event) {
      Spree.showVariantImages(this.value);
      return Spree.updateVariantPrice($(this));
    });
  });

}).call(this);
(function() {
  Spree.ready(function($) {
    if (($('form#update-cart')).is('*')) {
      ($('form#update-cart a.delete')).show().one('click', function() {
        ($(this)).parents('.line-item').first().find('input.line_item_quantity').val(0);
        ($(this)).parents('form').first().submit();
        return false;
      });
    }
    return ($('form#update-cart')).submit(function() {
      return ($('form#update-cart #update-button')).attr('disabled', true);
    });
  });

  Spree.fetch_cart = function() {
    return $.ajax({
      url: Spree.pathFor("/cart_link"),
      success: function(data) {
        return $('#link-to-cart').html(data);
      }
    });
  };

}).call(this);






$(document).ready(function(){
  $('#new_contact_us_contact').validate();
});
/*! sly 1.2.5 - 28th Aug 2014 | https://github.com/darsain/sly */

(function(l,A,Fa){function ma(g,k,cb){var ra,E,sa,r,ta,A,ua,na;function da(){var a=0,f=v.length;e.old=l.extend({},e);y=I?0:F[b.horizontal?"width":"height"]();S=K[b.horizontal?"width":"height"]();s=I?g:t[b.horizontal?"outerWidth":"outerHeight"]();v.length=0;e.start=0;e.end=Ga(s-y,0);if(B){a=p.length;G=t.children(b.itemSelector);p.length=0;var c=oa(t,b.horizontal?"paddingLeft":"paddingTop"),va=oa(t,b.horizontal?"paddingRight":"paddingBottom"),k="border-box"===l(G).css("boxSizing"),db="none"!==G.css("float"),
r=0,m=G.length-1,q;s=0;G.each(function(a,f){var d=l(f),e=d[b.horizontal?"outerWidth":"outerHeight"](),g=oa(d,b.horizontal?"marginLeft":"marginTop"),d=oa(d,b.horizontal?"marginRight":"marginBottom"),h=e+g+d,n=!g||!d,k={};k.el=f;k.size=n?e:h;k.half=k.size/2;k.start=s+(n?g:0);k.center=k.start-u(y/2-k.size/2);k.end=k.start-y+k.size;a||(s+=c);s+=h;b.horizontal||db||d&&(g&&0<a)&&(s-=Ha(g,d));a===m&&(k.end+=va,s+=va,r=n?d:0);p.push(k);q=k});t[0].style[b.horizontal?"width":"height"]=(k?s:s-c-va)+"px";s-=
r;p.length?(e.start=p[0][T?"center":"start"],e.end=T?q.center:y<s?q.end:e.start):e.start=e.end=0}e.center=u(e.end/2+e.start/2);l.extend(h,wa(void 0));C.length&&0<S&&(b.dynamicHandle?(N=e.start===e.end?S:u(S*y/s),N=L(N,b.minHandleSize,S),C[0].style[b.horizontal?"width":"height"]=N+"px"):N=C[b.horizontal?"outerWidth":"outerHeight"](),w.end=S-N,U||Ia());if(!I&&0<y){var n=e.start,k="";if(B)l.each(p,function(a,f){T?v.push(f.center):f.start+f.size>n&&n<=e.end&&(n=f.start,v.push(n),n+=y,n>e.end&&n<e.end+
y&&v.push(e.end))});else for(;n-y<e.end;)v.push(n),n+=y;if(V[0]&&f!==v.length){for(f=0;f<v.length;f++)k+=b.pageBuilder.call(d,f);ha=V.html(k).children();ha.eq(h.activePage).addClass(b.activeClass)}}h.slideeSize=s;h.frameSize=y;h.sbSize=S;h.handleSize=N;B?(d.initialized?(h.activeItem>=p.length||0===a&&0<p.length)&&pa(h.activeItem>=p.length?p.length-1:0,!a):(pa(b.startAt),d[M?"toCenter":"toStart"](b.startAt)),a=p[h.activeItem],J(M&&a?a.center:L(e.dest,e.start,e.end))):d.initialized?J(L(e.dest,e.start,
e.end)):J(b.startAt,1);z("load")}function J(a,f,ga){if(B&&c.released&&!ga){ga=wa(a);var g=a>e.start&&a<e.end;M?(g&&(a=p[ga.centerItem].center),T&&b.activateMiddle&&pa(ga.centerItem)):g&&(a=p[ga.firstItem].start)}c.init&&c.slidee&&b.elasticBounds?a>e.end?a=e.end+(a-e.end)/6:a<e.start&&(a=e.start+(a-e.start)/6):a=L(a,e.start,e.end);ra=+new Date;E=0;sa=e.cur;r=a;ta=a-e.cur;A=c.tweese||c.init&&!c.slidee;ua=!A&&(f||c.init&&c.slidee||!b.speed);c.tweese=0;a!==e.dest&&(e.dest=a,z("change"),U||xa());c.released&&
!d.isPaused&&d.resume();l.extend(h,wa(void 0));Ja();ha[0]&&q.page!==h.activePage&&(q.page=h.activePage,ha.removeClass(b.activeClass).eq(h.activePage).addClass(b.activeClass),z("activePage",q.page))}function xa(){U?(ua?e.cur=r:A?(na=r-e.cur,0.1>W(na)?e.cur=r:e.cur+=na*(c.released?b.swingSpeed:b.syncSpeed)):(E=Ha(+new Date-ra,b.speed),e.cur=sa+ta*jQuery.easing[b.easing](E/b.speed,E,0,1,b.speed)),r===e.cur?(e.cur=r,c.tweese=U=0):U=ia(xa),z("move"),I||(D?t[0].style[D]=ja+(b.horizontal?"translateX":"translateY")+
"("+-e.cur+"px)":t[0].style[b.horizontal?"left":"top"]=-u(e.cur)+"px"),!U&&c.released&&z("moveEnd"),Ia()):(U=ia(xa),c.released&&z("moveStart"))}function Ia(){C.length&&(w.cur=e.start===e.end?0:((c.init&&!c.slidee?e.dest:e.cur)-e.start)/(e.end-e.start)*w.end,w.cur=L(u(w.cur),w.start,w.end),q.hPos!==w.cur&&(q.hPos=w.cur,D?C[0].style[D]=ja+(b.horizontal?"translateX":"translateY")+"("+w.cur+"px)":C[0].style[b.horizontal?"left":"top"]=w.cur+"px"))}function Ka(){x.speed&&e.cur!==(0<x.speed?e.end:e.start)||
d.stop();La=c.init?ia(Ka):0;x.now=+new Date;x.pos=e.cur+(x.now-x.lastTime)/1E3*x.speed;J(c.init?x.pos:u(x.pos));c.init||e.cur!==e.dest||z("moveEnd");x.lastTime=x.now}function ya(a,f,b){"boolean"===ka(f)&&(b=f,f=Fa);f===Fa?J(e[a],b):M&&"center"!==a||(f=d.getPos(f))&&J(f[a],b,!M)}function qa(a){return null!=a?O(a)?0<=a&&a<p.length?a:-1:G.index(a):-1}function za(a){return qa(O(a)&&0>a?a+p.length:a)}function pa(a,f){var c=qa(a);if(!B||0>c)return!1;if(q.active!==c||f)G.eq(h.activeItem).removeClass(b.activeClass),
G.eq(c).addClass(b.activeClass),q.active=h.activeItem=c,Ja(),z("active",c);return c}function wa(a){a=L(O(a)?a:e.dest,e.start,e.end);var f={},c=T?0:y/2;if(!I)for(var b=0,d=v.length;b<d;b++){if(a>=e.end||b===v.length-1){f.activePage=v.length-1;break}if(a<=v[b]+c){f.activePage=b;break}}if(B){for(var d=b=c=!1,g=0,h=p.length;g<h;g++)if(!1===c&&a<=p[g].start+p[g].half&&(c=g),!1===d&&a<=p[g].center+p[g].half&&(d=g),g===h-1||a<=p[g].end+p[g].half){b=g;break}f.firstItem=O(c)?c:0;f.centerItem=O(d)?d:f.firstItem;
f.lastItem=O(b)?b:f.centerItem}return f}function Ja(){var a=e.dest<=e.start,f=e.dest>=e.end,d=a?1:f?2:3;q.slideePosState!==d&&(q.slideePosState=d,X.is("button,input")&&X.prop("disabled",a),Y.is("button,input")&&Y.prop("disabled",f),X.add(ea)[a?"addClass":"removeClass"](b.disabledClass),Y.add(Z)[f?"addClass":"removeClass"](b.disabledClass));q.fwdbwdState!==d&&c.released&&(q.fwdbwdState=d,ea.is("button,input")&&ea.prop("disabled",a),Z.is("button,input")&&Z.prop("disabled",f));B&&(a=0===h.activeItem,
f=h.activeItem>=p.length-1,d=a?1:f?2:3,q.itemsButtonState!==d&&(q.itemsButtonState=d,$.is("button,input")&&$.prop("disabled",a),aa.is("button,input")&&aa.prop("disabled",f),$[a?"addClass":"removeClass"](b.disabledClass),aa[f?"addClass":"removeClass"](b.disabledClass)))}function Ma(a,f,b){a=za(a);f=za(f);if(-1<a&&-1<f&&a!==f&&!(b&&f===a-1||!b&&f===a+1)){G.eq(a)[b?"insertAfter":"insertBefore"](p[f].el);var c=a<f?a:b?f:f-1,d=a>f?a:b?f+1:f,e=a>f;a===h.activeItem?q.active=h.activeItem=b?e?f+1:f:e?f:f-
1:h.activeItem>c&&h.activeItem<d&&(q.active=h.activeItem+=e?1:-1);da()}}function Na(a,f){for(var b=0,c=H[a].length;b<c;b++)if(H[a][b]===f)return b;return-1}function Oa(a){return u(L(a,w.start,w.end)/w.end*(e.end-e.start))+e.start}function eb(){c.history[0]=c.history[1];c.history[1]=c.history[2];c.history[2]=c.history[3];c.history[3]=c.delta}function Pa(a){c.released=0;c.source=a;c.slidee="slidee"===a}function Qa(a){var f="touchstart"===a.type,g=a.data.source,h="slidee"===g;!c.init&&(f||!~l.inArray(a.target.nodeName,
Ra)&&!l(a.target).is(b.interactive))&&("handle"!==g||b.dragHandle&&w.start!==w.end)&&(!h||(f?b.touchDragging:b.mouseDragging&&2>a.which))&&(f||P(a,1),Pa(g),c.init=0,c.$source=l(a.target),c.touch=f,c.pointer=f?a.originalEvent.touches[0]:a,c.initX=c.pointer.pageX,c.initY=c.pointer.pageY,c.initPos=h?e.cur:w.cur,c.start=+new Date,c.time=0,c.path=0,c.delta=0,c.locked=0,c.history=[0,0,0,0],c.pathToLock=h?f?30:10:0,ba.on(f?Sa:Ta,Ua),d.pause(1),(h?t:C).addClass(b.draggedClass),z("moveStart"),h&&(Va=setInterval(eb,
10)))}function Ua(a){c.released="mouseup"===a.type||"touchend"===a.type;c.pointer=c.touch?a.originalEvent[c.released?"changedTouches":"touches"][0]:a;c.pathX=c.pointer.pageX-c.initX;c.pathY=c.pointer.pageY-c.initY;c.path=fb(Wa(c.pathX,2)+Wa(c.pathY,2));c.delta=b.horizontal?c.pathX:c.pathY;if(!c.init)if(b.horizontal?W(c.pathX)>W(c.pathY):W(c.pathX)<W(c.pathY))c.init=1;else return Xa();P(a);!c.locked&&(c.path>c.pathToLock&&c.slidee)&&(c.locked=1,c.$source.on(ca,Aa));c.released&&(Xa(),b.releaseSwing&&
c.slidee&&(c.swing=300*((c.delta-c.history[0])/40),c.delta+=c.swing,c.tweese=10<W(c.swing)));J(c.slidee?u(c.initPos-c.delta):Oa(c.initPos+c.delta))}function Xa(){clearInterval(Va);ba.off(c.touch?Sa:Ta,Ua);(c.slidee?t:C).removeClass(b.draggedClass);setTimeout(function(){c.$source.off(ca,Aa)});d.resume(1);e.cur===e.dest&&c.init&&z("moveEnd");c.init=0}function Ya(){d.stop();ba.off("mouseup",Ya)}function fa(a){P(a);switch(this){case Z[0]:case ea[0]:d.moveBy(Z.is(this)?b.moveBy:-b.moveBy);ba.on("mouseup",
Ya);break;case $[0]:d.prev();break;case aa[0]:d.next();break;case X[0]:d.prevPage();break;case Y[0]:d.nextPage()}}function gb(a){n.curDelta=(b.horizontal?a.deltaY||a.deltaX:a.deltaY)||-a.wheelDelta;n.curDelta/=1===a.deltaMode?3:100;if(!B)return n.curDelta;Ba=+new Date;n.last<Ba-n.resetTime&&(n.delta=0);n.last=Ba;n.delta+=n.curDelta;1>W(n.delta)?n.finalDelta=0:(n.finalDelta=u(n.delta/1),n.delta%=1);return n.finalDelta}function hb(a){var f=+new Date;Ca+300>f?Ca=f:b.scrollBy&&e.start!==e.end&&(P(a,1),
d.slideBy(b.scrollBy*gb(a.originalEvent)))}function ib(a){b.clickBar&&a.target===K[0]&&(P(a),J(Oa((b.horizontal?a.pageX-K.offset().left:a.pageY-K.offset().top)-N/2)))}function jb(a){if(b.keyboardNavBy)switch(a.which){case b.horizontal?37:38:P(a);d["pages"===b.keyboardNavBy?"prevPage":"prev"]();break;case b.horizontal?39:40:P(a),d["pages"===b.keyboardNavBy?"nextPage":"next"]()}}function kb(a){~l.inArray(this.nodeName,Ra)||l(this).is(b.interactive)?a.stopPropagation():this.parentNode===t[0]&&d.activate(this)}
function lb(){this.parentNode===V[0]&&d.activatePage(ha.index(this))}function mb(a){if(b.pauseOnHover)d["mouseenter"===a.type?"pause":"resume"](2)}function z(a,b){if(H[a]){Da=H[a].length;for(Q=Ea.length=0;Q<Da;Q++)Ea.push(H[a][Q]);for(Q=0;Q<Da;Q++)Ea[Q].call(d,a,b)}}var b=l.extend({},ma.defaults,k),d=this,I=O(g),F=l(g),t=F.children().eq(0),y=0,s=0,e={start:0,center:0,end:0,cur:0,dest:0},K=l(b.scrollBar).eq(0),C=K.children().eq(0),S=0,N=0,w={start:0,end:0,cur:0},V=l(b.pagesBar),ha=0,v=[],G=0,p=[],
h={firstItem:0,lastItem:0,centerItem:0,activeItem:-1,activePage:0};k="basic"===b.itemNav;var T="forceCentered"===b.itemNav,M="centered"===b.itemNav||T,B=!I&&(k||M||T),Za=b.scrollSource?l(b.scrollSource):F,nb=b.dragSource?l(b.dragSource):F,Z=l(b.forward),ea=l(b.backward),$=l(b.prev),aa=l(b.next),X=l(b.prevPage),Y=l(b.nextPage),H={},q={};na=ua=A=ta=r=sa=E=ra=void 0;var x={},c={released:1},n={last:0,delta:0,resetTime:200},U=0,Va=0,R=0,La=0,Q,Da;I||(g=F[0]);d.initialized=0;d.frame=g;d.slidee=t[0];d.pos=
e;d.rel=h;d.items=p;d.pages=v;d.isPaused=0;d.options=b;d.dragging=c;d.reload=da;d.getPos=function(a){if(B)return a=qa(a),-1!==a?p[a]:!1;var f=t.find(a).eq(0);return f[0]?(a=b.horizontal?f.offset().left-t.offset().left:f.offset().top-t.offset().top,f=f[b.horizontal?"outerWidth":"outerHeight"](),{start:a,center:a-y/2+f/2,end:a-y+f,size:f}):!1};d.moveBy=function(a){x.speed=a;!c.init&&(x.speed&&e.cur!==(0<x.speed?e.end:e.start))&&(x.lastTime=+new Date,x.startPos=e.cur,Pa("button"),c.init=1,z("moveStart"),
la(La),Ka())};d.stop=function(){"button"===c.source&&(c.init=0,c.released=1)};d.prev=function(){d.activate(h.activeItem-1)};d.next=function(){d.activate(h.activeItem+1)};d.prevPage=function(){d.activatePage(h.activePage-1)};d.nextPage=function(){d.activatePage(h.activePage+1)};d.slideBy=function(a,f){if(a)if(B)d[M?"toCenter":"toStart"](L((M?h.centerItem:h.firstItem)+b.scrollBy*a,0,p.length));else J(e.dest+a,f)};d.slideTo=function(a,b){J(a,b)};d.toStart=function(a,b){ya("start",a,b)};d.toEnd=function(a,
b){ya("end",a,b)};d.toCenter=function(a,b){ya("center",a,b)};d.getIndex=qa;d.activate=function(a,f){var e=pa(a);b.smart&&!1!==e&&(M?d.toCenter(e,f):e>=h.lastItem?d.toStart(e,f):e<=h.firstItem?d.toEnd(e,f):c.released&&!d.isPaused&&d.resume())};d.activatePage=function(a,b){O(a)&&J(v[L(a,0,v.length-1)],b)};d.resume=function(a){!b.cycleBy||(!b.cycleInterval||"items"===b.cycleBy&&!p[0]||a<d.isPaused)||(d.isPaused=0,R?R=clearTimeout(R):z("resume"),R=setTimeout(function(){z("cycle");switch(b.cycleBy){case "items":d.activate(h.activeItem>=
p.length-1?0:h.activeItem+1);break;case "pages":d.activatePage(h.activePage>=v.length-1?0:h.activePage+1)}},b.cycleInterval))};d.pause=function(a){a<d.isPaused||(d.isPaused=a||100,R&&(R=clearTimeout(R),z("pause")))};d.toggle=function(){d[R?"pause":"resume"]()};d.set=function(a,c){l.isPlainObject(a)?l.extend(b,a):b.hasOwnProperty(a)&&(b[a]=c)};d.add=function(a,b){var c=l(a);B?(null==b||!p[0]||b>=p.length?c.appendTo(t):p.length&&c.insertBefore(p[b].el),b<=h.activeItem&&(q.active=h.activeItem+=c.length)):
t.append(c);da()};d.remove=function(a){if(B){if(a=za(a),-1<a){G.eq(a).remove();var b=a===h.activeItem;a<h.activeItem&&(q.active=--h.activeItem);da();b&&(q.active=null,d.activate(h.activeItem))}}else l(a).remove(),da()};d.moveAfter=function(a,b){Ma(a,b,1)};d.moveBefore=function(a,b){Ma(a,b)};d.on=function(a,b){if("object"===ka(a))for(var c in a){if(a.hasOwnProperty(c))d.on(c,a[c])}else if("function"===ka(b)){c=a.split(" ");for(var e=0,g=c.length;e<g;e++)H[c[e]]=H[c[e]]||[],-1===Na(c[e],b)&&H[c[e]].push(b)}else if("array"===
ka(b))for(c=0,e=b.length;c<e;c++)d.on(a,b[c])};d.one=function(a,b){function c(){b.apply(d,arguments);d.off(a,c)}d.on(a,c)};d.off=function(a,b){if(b instanceof Array)for(var c=0,e=b.length;c<e;c++)d.off(a,b[c]);else for(var c=a.split(" "),e=0,g=c.length;e<g;e++)if(H[c[e]]=H[c[e]]||[],null==b)H[c[e]].length=0;else{var h=Na(c[e],b);-1!==h&&H[c[e]].splice(h,1)}};d.destroy=function(){ba.add(Za).add(C).add(K).add(V).add(Z).add(ea).add($).add(aa).add(X).add(Y).unbind("."+m);$.add(aa).add(X).add(Y).removeClass(b.disabledClass);
G&&G.eq(h.activeItem).removeClass(b.activeClass);V.empty();I||(F.unbind("."+m),t.add(C).css(D||(b.horizontal?"left":"top"),D?"none":0),l.removeData(g,m));p.length=v.length=0;q={};d.initialized=0;return d};d.init=function(){if(!d.initialized){d.on(cb);var a=C;I||(a=a.add(t),F.css("overflow","hidden"),D||"static"!==F.css("position")||F.css("position","relative"));D?ja&&a.css(D,ja):("static"===K.css("position")&&K.css("position","relative"),a.css({position:"absolute"}));if(b.forward)Z.on($a,fa);if(b.backward)ea.on($a,
fa);if(b.prev)$.on(ca,fa);if(b.next)aa.on(ca,fa);if(b.prevPage)X.on(ca,fa);if(b.nextPage)Y.on(ca,fa);Za.on(ab,hb);if(K[0])K.on(ca,ib);if(B&&b.activateOn)F.on(b.activateOn+"."+m,"*",kb);if(V[0]&&b.activatePageOn)V.on(b.activatePageOn+"."+m,"*",lb);nb.on(bb,{source:"slidee"},Qa);if(C)C.on(bb,{source:"handle"},Qa);ba.bind("keydown."+m,jb);I||(F.on("mouseenter."+m+" mouseleave."+m,mb),F.on("scroll."+m,ob));da();if(b.cycleBy&&!I)d[b.startPaused?"pause":"resume"]();d.initialized=1;return d}}}function ka(g){return null==
g?String(g):"object"===typeof g||"function"===typeof g?Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof g}function P(g,k){g.preventDefault();k&&g.stopPropagation()}function Aa(g){P(g,1);l(this).off(g.type,Aa)}function ob(){this.scrollTop=this.scrollLeft=0}function O(g){return!isNaN(parseFloat(g))&&isFinite(g)}function oa(g,k){return 0|u(String(g.css(k)).replace(/[^\-0-9.]/g,""))}function L(g,k,l){return g<k?k:g>l?l:g}var m="sly",la=A.cancelAnimationFrame||A.cancelRequestAnimationFrame,
ia=A.requestAnimationFrame,D,ja,ba=l(document),bb="touchstart."+m+" mousedown."+m,Ta="mousemove."+m+" mouseup."+m,Sa="touchmove."+m+" touchend."+m,ab=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+m,ca="click."+m,$a="mousedown."+m,Ra=["INPUT","SELECT","BUTTON","TEXTAREA"],Ea=[],Ba,W=Math.abs,fb=Math.sqrt,Wa=Math.pow,u=Math.round,Ga=Math.max,Ha=Math.min,Ca=0;ba.on(ab,function(){Ca=+new Date});(function(g){for(var k=["moz","webkit","o"],l=0,m=0,E=k.length;m<E&&!la;++m)ia=
(la=g[k[m]+"CancelAnimationFrame"]||g[k[m]+"CancelRequestAnimationFrame"])&&g[k[m]+"RequestAnimationFrame"];la||(ia=function(k){var m=+new Date,E=Ga(0,16-(m-l));l=m+E;return g.setTimeout(function(){k(m+E)},E)},la=function(g){clearTimeout(g)})})(window);(function(){function g(g){for(var m=0,u=k.length;m<u;m++){var r=k[m]?k[m]+g.charAt(0).toUpperCase()+g.slice(1):g;if(null!=l.style[r])return r}}var k=["","webkit","moz","ms","o"],l=document.createElement("div");D=g("transform");ja=g("perspective")?"translateZ(0) ":
""})();A.Sly=ma;l.fn.sly=function(g,k){var u,D;if(!l.isPlainObject(g)){if("string"===ka(g)||!1===g)u=!1===g?"destroy":g,D=Array.prototype.slice.call(arguments,1);g={}}return this.each(function(E,A){var r=l.data(A,m);r||u?r&&u&&r[u]&&r[u].apply(r,D):l.data(A,m,(new ma(A,g,k)).init())})};ma.defaults={horizontal:0,itemNav:null,itemSelector:null,smart:0,activateOn:null,activateMiddle:0,scrollSource:null,scrollBy:0,scrollHijack:300,dragSource:null,mouseDragging:0,touchDragging:0,releaseSwing:0,swingSpeed:0.2,
elasticBounds:0,interactive:null,scrollBar:null,dragHandle:0,dynamicHandle:0,minHandleSize:50,clickBar:0,syncSpeed:0.5,pagesBar:null,activatePageOn:null,pageBuilder:function(g){return"<li>"+(g+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5E3,pauseOnHover:0,startPaused:0,moveBy:300,speed:0,easing:"swing",startAt:0,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}})(jQuery,window);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//










$(function(){
    $frame = $('.frame');
    $wrap = $('.products');
    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 0,
//        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Cycling
        cycleBy: 'pages',
        cycleInterval: 1000,
        pauseOnHover: 1,
        startPaused: 1,

        // Buttons
        prevPage: $('i.prevPage'),
        nextPage: $('i.nextPage')
    });


    $('#leftMenu > .categories, #leftMenu > .brands').jstree({
        core : {
            themes : {
                variant: "small",
                dots : false,
                icons : false,
                responsive: false
            }
        }
    }).on("activate_node.jstree", function(e,data){
        window.location.href = data.node.a_attr.href;
    });


    $scrollToTop = $('#scrollToTop');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
    });

    $scrollToTop.click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });



});
