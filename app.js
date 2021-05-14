const navButtons = document.querySelector('.navButton')
const content = document.querySelector('.content')

navButtons.addEventListener('click', (e) => {
  loadIframe(e.target.innerHTML)
})

function loadIframe(name) {
  content.insertAdjacentHTML("afterbegin",`
  <iframe src="${name}/index.html" height='100%' width="100%"   frameborder="0"></iframe>
  `
  )
}