const t=document.querySelectorAll("button[data-start]");console.log(t);const e=document.querySelectorAll("button[data-stop]");console.log(e);const o=document.querySelector("body");let l;t.forEach((t=>{t.addEventListener("click",(()=>{t.disabled=!0,l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}))})),e.forEach((e=>{e.addEventListener("click",(()=>{t.forEach((t=>{t.disabled=!1})),clearInterval(l)}))}));
//# sourceMappingURL=01-color-switcher.c1e60c7d.js.map