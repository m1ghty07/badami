$(document).ready(function () {
  $('.gallery__items').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})

// Burger
const btn = document.querySelector('.menu__burger'),
  menuList = document.querySelector('.menu__list')

btn.addEventListener('click', () => {
  menuList.classList.toggle('active')
  document.body.classList.toggle('lock')
})

// Tabs
document.querySelectorAll('.tabs__wrapper').forEach((e) => {
  const tabs = e.querySelectorAll('.tabs__item'),
    tabsContent = e.querySelectorAll('.tabs__block'),
    tabsParent = e.querySelector('.tabs__items')

  function hideContent() {
    tabsContent.forEach((item) => {
      item.style.display = 'none'
    })
    tabs.forEach((item) => {
      item.classList.remove('tabs__item--active')
    })
  }

  function tabDisplay(i) {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabs__item--active')
  }
  hideContent()
  tabDisplay(0)

  tabsParent.addEventListener('click', (e) => {
    const target = e.target

    if (target && target.classList.contains('tabs__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent()
          tabDisplay(i)
          $('.gallery__items').slick('setPosition')
        }
      })
    }
  })
})

// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal')

function openModal() {
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden'
  clearInterval(modalTimerId)
}

modalTrigger.forEach((btn) => {
  btn.addEventListener('click', openModal)
})

function closeModal() {
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
  window.removeEventListener('scroll', showModalByScroll)
}

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
    closeModal()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal()
  }
})

// Modal by timer & scroll
// const modalTimerId = setInterval(openModal, 50000);

// function showModalByScroll() {
//   if (
//     window.pageYOffset + document.documentElement.clientHeight ===
//     document.documentElement.scrollHeight
//   ) {
//     openModal();
//   }
// }
// window.addEventListener('scroll', showModalByScroll);
