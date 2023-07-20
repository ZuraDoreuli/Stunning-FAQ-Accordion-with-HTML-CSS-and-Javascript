const titles = document.querySelectorAll('.accordion-item__title')
const contents = document.querySelectorAll('.accordion-item__content')

titles.forEach(item => {
  item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.faq)

    if(activeContent.classList.contains('active')) {
      activeContent.classList.remove('active')
      item.classList.remove('active')
      activeContent.style.maxHeight = 0
    } else {
      contents.forEach(content => {
        content.classList.remove('active')
        content.style.maxHeight = 0
      })
      titles.forEach(title => {
        title.classList.remove('active')
      })
      item.classList.add('active')
      activeContent.classList.add('active')
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px'
    }
  })
})

document.querySelector('[data-faq="faq-1"]').classList.add('active')
document.querySelector('#faq-1').classList.add('active')
document.querySelector('#faq-1').style.maxHeight = document.querySelector('#faq-1').scrollHeight + 'px'