const navButtons=document.querySelectorAll(".navButton"),content=document.querySelector(".content");function loadIframe(e){console.log(e),content.innerHTML="",content.insertAdjacentHTML("afterbegin",`
  <iframe src="Portfolio Examples/${e}/index.html" height='100%' width="100%"   frameborder="0"></iframe>
  `)}navButtons.forEach(e=>{e.addEventListener("click",e=>{loadIframe(e.target.innerHTML)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCdXR0b24nKVxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIFxyXG4gICAgbG9hZElmcmFtZShlLnRhcmdldC5pbm5lckhUTUwpXHJcbiAgfSlcclxufSlcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZElmcmFtZShuYW1lKSB7XHJcbiAgY29uc29sZS5sb2cobmFtZSlcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsYFxyXG4gIDxpZnJhbWUgc3JjPVwiUG9ydGZvbGlvIEV4YW1wbGVzLyR7bmFtZX0vaW5kZXguaHRtbFwiIGhlaWdodD0nMTAwJScgd2lkdGg9XCIxMDAlXCIgICBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cclxuICBgXHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIm5hdkJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImxvYWRJZnJhbWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBYUMsU0FBU0MsaUJBQWlCLGNBQ3ZDQyxRQUFVRixTQUFTRyxjQUFjLFlBV3ZDLFNBQVNDLFdBQVdDLEdBQ2xCQyxRQUFRQyxJQUFJRixHQUNaSCxRQUFRTSxVQUFZLEdBQ3BCTixRQUFRTyxtQkFBbUI7b0NBQ09KO0tBYnBDTixXQUFXVyxRQUFRQyxJQUNqQkEsRUFBT0MsaUJBQWlCLFFBQVMsSUFFL0JSLFdBQVdTLEVBQUVDLE9BQU9OIn0=
