(function ($) {
  $(function () {
    $(".book__select, .book__input").styler();
  });
})(jQuery);

document.querySelectorAll(".tabs__wrapper").forEach((e) => {
  const tabs = e.querySelectorAll(".tabs__item"),
    tabsContent = e.querySelectorAll(".tabs__block"),
    tabsParent = e.querySelector(".tabs__items");

  function hideContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabs__item--active");
    });
  }

  function tabDisplay(i) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabs__item--active");
  }
  hideContent();
  tabDisplay(0);

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabs__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          tabDisplay(i);
          $(".gallery__items").slick("setPosition");
        }
      });
    }
  });
});

$(document).ready(function () {
  $(".gallery__items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
