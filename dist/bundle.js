(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&!t;)t=c[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"cac69802a72699e67a55.png";console.log("yax"),function(){let e=document.querySelector("#content"),n=document.createElement("header"),c=document.createElement("nav"),o=document.createElement("h3"),r=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),l=document.createElement("button");o.innerText="Lechon sa Lacion",a.innerText="Home",i.innerText="Menu",l.innerText="About",c.classList.add("flex"),r.classList.add("flex","nav__buttons"),e.appendChild(n),n.appendChild(c),c.appendChild(o),c.appendChild(r),r.append(a,i,l),a.onclick=()=>{document.querySelector(".temporary-content").remove(),function(){let e=document.querySelector("#content"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("h3"),a=new Image;a.src=t,o.innerText="Lechon sa Lacion",r.innerHTML='<span class="black_bg">No. 1 Best (Dili mani lechon ang pic)</span>',n.classList.add("content__intro","flex","temporary-content"),c.classList.add("flex-column"),o.classList.add("intro--logo"),r.classList.add("numberOneBest"),n.append(a,c),c.append(o,r),e.appendChild(n)}()},i.onclick=()=>{document.querySelector(".temporary-content").remove()},l.onclick=()=>{document.querySelector(".temporary-content").remove()}}()})();
//# sourceMappingURL=bundle.js.map