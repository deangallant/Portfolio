const navButtons = document.querySelectorAll('.navButton')
const content = document.querySelector('.content')

navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    
    loadIframe(e.target.innerHTML)
  })
})



function loadIframe(name) {
  content.innerHTML = ''
  content.insertAdjacentHTML("afterbegin",`
  <iframe src="Portfolio Examples/${name}/index.html" height='100%' width="100%"   frameborder="0"></iframe>
  `
  )
}