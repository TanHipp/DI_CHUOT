const body = document.querySelector('body')
body.addEventListener('mousemove', (e) => {
  let x = e.offsetX
  let y = e.offsetY
  let color = 'red'
  let span = document.createElement('span')
  span.style.left = x + 'px'
  span.style.top = y + 'px'
  span.style.background = color
  var shadow = ''
  for (let i = 5; i < 100; i += 5) {
    if (i <= 90) {
      shadow += `0px 0px ${i}px ${color},`
    } else {
      shadow += `0px 0px ${i}px ${color}`
    }
  }
  span.style.boxShadow = shadow
  body.appendChild(span)
  setTimeout(() => {
    span.remove()
  }, 100)
})
