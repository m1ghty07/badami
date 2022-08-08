// Burger
const btn = document.querySelector('.menu__burger'),
  menuList = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
  menuList.classList.toggle('active');
  document.body.classList.toggle('lock');
});

// Tabs
document.querySelectorAll('.tabs__wrapper').forEach((e) => {
  const tabs = e.querySelectorAll('.tabs__item'),
    tabsContent = e.querySelectorAll('.tabs__block'),
    tabsParent = e.querySelector('.tabs__items');

  function hideContent() {
    tabsContent.forEach((item) => {
      item.style.display = 'none';
    });
    tabs.forEach((item) => {
      item.classList.remove('tabs__item--active');
    });
  }

  function tabDisplay(i) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabs__item--active');
  }
  hideContent();
  tabDisplay(0);

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabs__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          tabDisplay(i);
          $('.gallery__items').slick('setPosition');
        }
      });
    }
  });
});

// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

modalTrigger.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  window.removeEventListener('scroll', showModalByScroll);
}

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

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
