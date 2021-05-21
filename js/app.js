const navButtons=document.querySelectorAll(".navButton"),content=document.querySelector(".content");function loadIframe(e){content.innerHTML="",content.insertAdjacentHTML("afterbegin",`
  <iframe src="Portfolio Examples/${e}/index.html" height='100%' width="100%"   frameborder="0"></iframe>
  `)}navButtons.forEach(e=>{e.addEventListener("click",e=>{loadIframe(e.target.innerHTML)})});