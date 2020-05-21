!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!P[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(f[n]=t[n]);0==--w&&0===y&&_()}(e,n),t&&t(e,n)};var n,r=!0,a="03256972edbadaffbf38",i=1e4,o={},s=[],c=[];function l(e){var t=T[e];if(!t)return E;var r=function(r){return t.hot.active?(T[r]?-1===T[r].parents.indexOf(e)&&T[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):s=[],E(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(t){E[e]=t}}};for(var i in E)Object.prototype.hasOwnProperty.call(E,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,a(i));return r.e=function(e){return"ready"===u&&p("prepare"),y++,E.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(v[e]||x(e),0===y&&0===w&&_())}},r.t=function(e,t){return 1&t&&(e=r(e)),E.t(e,-2&t)},r}var d=[],u="idle";function p(e){u=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,f,g,m,w=0,y=0,v={},b={},P={};function A(e){return+e+""===e?+e:e}function D(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=E.p+""+a+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p(j()?"ready":"idle"),null;b={},v={},P=e.c,g=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});f={};return x(2),"prepare"===u&&0===y&&0===w&&_(),t});var t}function x(e){P[e]?(b[e]=!0,w++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=E.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function _(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return M(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in f)Object.prototype.hasOwnProperty.call(f,n)&&t.push(A(n));e.resolve(t)}}function M(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(r){j();var i;var c;var l;var d;var u;function h(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,o=a.chain;if((d=T[i])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var s=0;s<d.parents.length;s++){var c=d.parents[s],l=T[c];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(l.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),w(n[c],[i])):(delete n[c],t.push(c),r.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}var y={};var v=[];var b={};var D=function(){};for(var x in f)if(Object.prototype.hasOwnProperty.call(f,x)){var _;u=A(x);var M=!1,O=!1,I=!1,H="";switch((_=f[x]?h(u):{type:"disposed",moduleId:x}).chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(M=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(M=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(_),r.ignoreUnaccepted||(M=new Error("Aborted because "+u+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(_),O=!0;break;case"disposed":r.onDisposed&&r.onDisposed(_),I=!0;break;default:throw new Error("Unexception type "+_.type)}if(M)return p("abort"),Promise.reject(M);if(O)for(u in b[u]=f[u],w(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(y[u]||(y[u]=[]),w(y[u],_.outdatedDependencies[u]));I&&(w(v,[_.moduleId]),b[u]=D)}var S=[];for(c=0;c<v.length;c++)u=v[c],T[u]&&T[u].hot._selfAccepted&&b[u]!==D&&!T[u].hot._selfInvalidated&&S.push({module:u,parents:T[u].parents.slice(),errorHandler:T[u].hot._selfAccepted});p("dispose");Object.keys(P).forEach(function(e){!1===P[e]&&function(e){delete installedChunks[e]}(e)});var L;var q=v.slice();for(;q.length>0;)if(u=q.pop(),d=T[u]){var $={},k=d.hot._disposeHandlers;for(l=0;l<k.length;l++)(i=k[l])($);for(o[u]=$,d.hot.active=!1,delete T[u],delete y[u],l=0;l<d.children.length;l++){var R=T[d.children[l]];R&&((L=R.parents.indexOf(u))>=0&&R.parents.splice(L,1))}}var C;var U;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(d=T[u]))for(U=y[u],l=0;l<U.length;l++)C=U[l],(L=d.children.indexOf(C))>=0&&d.children.splice(L,1);p("apply");void 0!==g&&(a=g,g=void 0);f=void 0;for(u in b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var G=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(d=T[u])){U=y[u];var N=[];for(c=0;c<U.length;c++)if(C=U[c],i=d.hot._acceptedDependencies[C]){if(-1!==N.indexOf(i))continue;N.push(i)}for(c=0;c<N.length;c++){i=N[c];try{i(U)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:U[c],error:e}),r.ignoreErrored||G||(G=e)}}}for(c=0;c<S.length;c++){var F=S[c];u=F.module,s=F.parents,n=u;try{E(u)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),r.ignoreErrored||G||(G=t),G||(G=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||G||(G=e)}}if(G)return p("fail"),Promise.reject(G);if(m)return t(r).then(function(e){return v.forEach(function(t){e.indexOf(t)<0&&e.push(t)}),e});p("idle");return new Promise(function(e){e(v)})}(t=t||{})}function j(){if(m)return f||(f={}),m.forEach(O),m=void 0,!0}function O(t){Object.prototype.hasOwnProperty.call(f,t)||(f[t]=e[t])}var T={};function E(t){if(T[t])return T[t].exports;var r=T[t]={i:t,l:!1,exports:{},hot:function(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:n!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(f={})[t]=e[t],p("ready");break;case"ready":O(t);break;case"prepare":case"check":case"dispose":case"apply":(m=m||[]).push(t)}},check:D,apply:M,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:o[t]};return n=void 0,r}(t),parents:(c=s,s=[],c),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}E.m=e,E.c=T,E.d=function(e,t,n){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(E.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)E.d(n,r,function(t){return e[t]}.bind(null,r));return n},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E.h=function(){return a},l(2)(E.s=2)}([function(e,t){window.globalMessage={success:e=>new Promise(function(t){var n=document.querySelector(".message-success");n.style="opacity: 1",n.children[1].innerHTML=e,setTimeout(()=>{n.style="opacity: 0",t(200)},1500)}),error:e=>new Promise(function(t){var n=document.querySelector(".message-fail");n.style="opacity: 1",n.children[1].innerHTML=e,setTimeout(()=>{n.style="opacity: 0",t(200)},1500)}),warning:e=>new Promise(function(t){var n=document.querySelector(".message-warning");n.style="opacity: 1",n.children[1].innerHTML=e,setTimeout(()=>{n.style="opacity: 0",t(200)},1500)})},function(){var e=document.querySelector("body"),t=document.querySelector("head"),n=document.createElement("style"),r=document.createElement("div");r.id="msg-box",r.innerHTML="<div class='message-global message-success'><i class='iconfont'>&#xe835;&nbsp;&nbsp;</i><span></span></div><div class='message-global message-warning'><i class='iconfont'>&#xe835;&nbsp;&nbsp;</i><span></span></div><div class='message-global message-fail'><i class='iconfont'>&#xe835;&nbsp;&nbsp;</i><span></span></div>",e.appendChild(r),n.type="text/css";const a="\n    .message-success,.message-warning,.message-fail {\n      opacity: 0;\n    }\n    /* 提示框 */\n    .message-success span,.message-success .iconfont {\n      color: green;\n    }\n    .message-fail span,.message-fail .iconfont{\n      color: red;\n    }\n    .message-warning span,.message-warning .iconfont {\n      color: orange;\n    }\n    .message-global {\n      background-color: rgba(255,255,255,.4);\n      height: 30px;\n      padding: 0px 20px;\n      font-size: 12px;\n      position: fixed;\n      left: 50%;\n      top: 100px;\n      transform: translate(-50%,-50%);\n      display: flex;\n      align-items: center;\n    }";try{n.appendChild(document.createTextNode(a))}catch(e){n.styleSheet.cssText=a}t.appendChild(n)}()},function(e,t){window.addEventListener("offline",()=>{window.globalMessage.error("网络断开连接")}),window.addEventListener("online",()=>{window.globalMessage.success("网络重新连接").then(e=>{location.reload()})});window.axios.interceptors.request.use(e=>e,e=>Promise.resolve(e)),window.axios.interceptors.response.use(e=>{switch(e.data.code){case 200:return e.data.result;case 400:return window.globalMessage.error(e.data.message),Promise.reject(e.data.message);case 401:return window.globalMessage.error(e.data.message),Router.push({path:"/login"}),Promise.reject(e.data.message);case 201:return window.globalMessage.error(e.data.message),e.data.result;case 403:return window.globalMessage.error(e.data.message),Router.push({pathname:"/login"}),Promise.reject(e.data);case 500:return window.globalMessage.error("请求出错⊙﹏⊙∥"),Promise.reject(e.data.message);default:return Promise.reject(e)}},e=>{switch(e.response.status){case 500:return window.globalMessage.error("500，服务器出小差了⊙﹏⊙∥"),Promise.reject(e);case 504:return window.globalMessage.error("500，服务器被吃了⊙﹏⊙∥"),Promise.reject(e);case 404:return window.globalMessage.error("404,请求资源未发现⊙﹏⊙∥"),Promise.reject(e);case 403:return window.globalMessage.error("403，权限不足,请联系狗尾草!"),Promise.reject(e);default:window.globalMessage.error("网络超时")}}),window.axios.defaults.timeout=3e5,window.postJsonRequest=function(e,t){return window.axios({method:"post",url:e,data:t,headers:{"Content-Type":"application/json"}})},window.postRequest=function(e,t){return window.axios({method:"post",url:e,data:t,transformRequest:[function(e){let t="";for(const n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},window.postHTMLRequest=function(e,t){return window.axios({method:"post",dataType:"html",url:e,data:t,transformRequest:[function(e){let t="";for(const n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},window.getRequest=function(e,t={}){return window.axios({method:"get",params:t,url:e})}},function(e,t,n){n(0),n(1),n(3),n(4),e.exports=n(5)},function(e,t,n){const r="http://www.bgwhite.cn/api";window.API={getArticleList:(e={})=>getRequest(`${r}/article/api/v1/article_list`,e),getArticleGood:(e={})=>getRequest(`${r}/article/api/v1/article_good`,e),getArticleTagList:(e={})=>getRequest(`${r}/tag/api/v1/tag_list`,e)}},function(e,t,n){const r={oArticleDom:null,oArticleGoodDom:null,oMsgDom:null,getArticleParams:{status:1,page:1,size:5,tagId:"",searchParams:""},totalPage:0,cachData:null,renderArticleList(e){if(e.length)for(var t=0;t<e.length;t++)this.oArticleDom.innerHTML+=`\n        <li class="bot">${e[t].isNew?"<i class='iconfont recent'>&#xe673;</i>":""}\n          <a href="detail.html?id=${e[t].id}"  class="img-hd">\n            <img\n              alt="狗尾草的前端博客"\n              title="${e[t].title}"\n              src="${e[t].title_image||"http://static.bgwhite.cn/react-website/title-img-default.jpg"}"\n            />\n          </a> \n          <div class="cont">\n            <header>\n              <a href="detail.html?id=${e[t].id}" class="tag" >${e[t].tagName}</a>\n              <a href="detail.html?id=${e[t].id}" class="tit" >${e[t].title}</a>\n            </header>\n            <p class="meta">\n              <span>${e[t].update_time}</span>\n              <span>阅读(${e[t].reader_number})</span>\n              <span>评论(${e[t].comment_number||0})</span> \n              <span>赞(${e[t].good_number})</span> \n            </p>\n            <p class="desc">${e[t].describe}</p>\n          </div>\n        </li>`;else this.oArticleDom.innerHTML+="<li class='bot'>WTF！没有文章？请将狗尾草痛打一顿，不要留情。您也可以与狗尾草进行QQ交谈，让他帮忙了解您所需要的文章~</li>"},renderArticleGood(e){for(var t=0;t<e.length;t++){const n=document.createElement("li");n.innerHTML=`<a href='detail.html?id=${e[t].id}'>${e[t].title}（${e[t].reader_number}）</a>`,this.oArticleGoodDom.appendChild(n)}},renderArticleTag(e){for(var t=0;t<e.length;t++){const n=document.createElement("li");n.innerHTML=`<a onclick='HomePage.handleTag(${e[t].id})'>${e[t].name}（${e[t].count}）</a>`,this.oArticleTagDom.appendChild(n)}},handleTag(e){this.cachData!==e&&(this.cachData=e,this.getArticleParams.tagId=e,this.getArticleParams.page=1,this.getArticleData(!1,"tag"))},handleSearch(){const e=document.getElementById("article_search").value;this.cachData!==e&&(this.getArticleParams.searchParams=e,this.getArticleParams.page=1,this.getArticleData())},closeLoading(){document.querySelector(".loading-template").style="display:none"},showLoadingFail(){document.querySelector(".loading-fail").style="display:block"},getArticleData(e=!1,t){return new Promise((n,r)=>{this.oArticleDom=document.querySelector(".article-wrap ul"),window.API.getArticleList(this.getArticleParams).then(r=>{this.oArticleDom.innerHTML="";const a="tag"===t?r.articleData.length:Number(r.total),i=Number(r.size);this.totalPage=a%i==0?a/i:Math.floor(a/i)+1,this.renderArticleList(r.articleData),e&&scrollTo(0,0),n(r)},e=>{window.globalMessage.error("查询文章失败"),this.closeLoading(),this.showLoadingFail(),r(e)})})},getGoodArticleData(){return new Promise((e,t)=>{this.oArticleGoodDom=document.querySelector("#article_good"),window.API.getArticleGood().then(t=>{this.renderArticleGood(t),e(t)},e=>{t(e)})})},getArticleTagData(){return new Promise((e,t)=>{this.oArticleTagDom=document.querySelector("#article_tag"),window.API.getArticleTagList().then(t=>{this.renderArticleTag(t),e(t)},e=>{t(e)})})},async init(){await Promise.race([this.getArticleData(!0),this.getArticleTagData(),this.getGoodArticleData()]),this.appendScript("http://static.bgwhite.cn/react-website/handleLove.js"),this.appendScript("http://static.bshare.cn/b/buttonLite.js#uuid=<您的uuid>&style=-1"),this.appendScript("http://static.bshare.cn/b/addons/bsharePop.js")},handleNextPage(){this.getArticleParams.page>=this.totalPage?window.globalMessage.warning("暂无更多文章"):(this.getArticleParams.page+=1,this.getArticleData(!0))},handleIndexPage(){this.getArticleParams.page=1,this.getArticleData(!0)},handlePreviousPage(){this.getArticleParams.page<=1||(this.getArticleParams.page-=1,this.getArticleData(!0))},appendScript(e){const t=document.createElement("script");t.type="text/javascript",t.src=e,t.charset="utf-8",t.async=!0,document.body.appendChild(t)}};window.HomePage=r,r.init(),n(12),n(16),n(18),n(20)},function(e,t){window.onload=function(){var e=this.document.getElementById("canvas"),t=e.getContext("2d"),n=e.width=window.innerWidth,r=e.height=window.innerHeight,a=30,i=[];function o(){}function s(e,t){return Math.random()*(t-e)+e}o.prototype={init:function(){this.x=s(0,n),this.y=0,this.r=1,this.vy=s(4,5),this.vr=1,this.a=1,this.va=.96,this.l=s(.8*r,.9*r)},draw:function(){var e,n,r,a;this.y>this.l?(t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI,!1),t.strokeStyle="rgba(0,255,255,"+this.a+")",t.stroke()):(t.fillStyle=(e=this.a,n=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),a=Math.floor(255*Math.random()),"rgba("+n+","+r+","+a+","+e+")"),t.fillRect(this.x,this.y,2,10)),this.update()},update:function(){this.y<this.l?this.y+=this.vy:this.a>.03?(this.r+=this.vr,this.r>50&&(this.a*=this.va)):this.init()}},function(){for(var e=0;e<a;e++)setTimeout(function(){var e=new o;e.init(),i.push(e)},200*e)}(),function e(){t.fillStyle="rgba(0,0,0,.1)",t.fillRect(0,0,n,r);for(var a=0;a<i.length;a++)i[a].draw();requestAnimationFrame(e)}()}},,,,,,,function(e,t){},,,,function(e,t){},,function(e,t){},,function(e,t){}]);