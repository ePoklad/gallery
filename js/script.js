document.addEventListener('DOMContentLoaded', () => {
  //menu
  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');
  const body = document.body;
  const header = document.querySelector('.lower__container')
  const headerHeight = header.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}%`);
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('menu__btn--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('menu__btn--active');

    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('menu__btn--active');
      });

      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });

  //Swiper
  const slider = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 8000,
    },
    effect: 'fade',
    slideToClickedSlide: true,
    loop: true,
  });

  //select
  const gallerySelect = () => {
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      position: 'bottom',


    });

    let ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);
  };

  gallerySelect();

  //swiper2
  const slider2 = new Swiper('.gallery__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 38,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    pagination: {
      el: '.slider__pagination',
      type: 'fraction',
    },
    a11y: {
      prevSlideMessage: 'Предыдущие картины',
      nextSlideMessage: 'Следующие картины',
      slideLabelMessage: '{{index}} из {{slidesLength}}',
    },
    slideToClickedSlide: true,
    mousewhell: true,
    keyborard: true,

  });

  //tab
  let tabsBtn = document.querySelectorAll('.tabs__link');
  let tabsItem = document.querySelectorAll('.tabs__text');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('tabs__link--active') });
      e.currentTarget.classList.add('tabs__link--active');

      tabsItem.forEach(function (element) { element.classList.remove('tabs__text--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__text--active');
    });
  });

  //Accordion
  new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion-active',
  });

  //swiper2
  const slider3 = new Swiper('.events__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
      el: '.events__pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      prevEl: '.events__prev',
      nextEl: '.events__next',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
    a11y: {
      prevSlideMessage: 'Предыдущие события',
      nextSlideMessage: 'Следующие события',
      slideLabelMessage: '{{index}} из {{slidesLength}}',
      paginationBulletMessage: 'Перейти к событиям {{index}}',
    },
    slideToClickedSlide: true,
    mousewhell: true,
    keyborard: true,
    watchSlidesProgress: true,

  });

  const slider4 = new Swiper('.projects__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 60,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
    a11y: {
      prevSlideMessage: 'Предыдущие партнеры',
      nextSlideMessage: 'Следующие партнеры',
      slideLabelMessage: '{{index}} из {{slidesLength}}',
    },
    navigation: {
      nextEl: '.projects__next',
      prevEl: '.projects__prev',
    },

    slideToClickedSlide: true,
    mousewhell: true,
    keyborard: true,

  });

  //tooltip

  tippy('.js-tooltip-btn', {
    theme: 'violet',
    maxWidth: 264,
  });

  //Form
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  new window.JustValidate('.contacts__form', {
    colorWrong: ' #D11616',

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10;
        }
      },
    },


    messages: {
      name: {
        required: "Вы не ввели имя",
        minLength: "Имя не может быть короче 2 символов",
        maxLength: "Имя не может быть длиннее 30 символов"
      },
      tel: {
        required: "Вы не ввели телефон",
        function: "Телефон должен содержать 10 цифр"
      },

    },
  });


  //Map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: [],
    });

    geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        size: 'small',
        float: 'none',
        position: {
          bottom: 310,
          right: 30
        }
      }
    });

    zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: 'small',
        float: 'none',
        position: {
          bottom: 370,
          right: 30
        }
      }
    });
    myMap.controls.add(geolocationControl).add(zoomControl);

    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-7, -17]
    });
    myMap.geoObjects.add(myPlacemark);

  }

  //modal1
  document.getElementById("open-slide1").addEventListener("click", function () {
    body.classList.add('stop-scroll');
    document.getElementById("slide1").classList.add("open");

  }
  );

  document.getElementById("close-slide1").addEventListener("click", function () {
    body.classList.remove('stop-scroll');
    document.getElementById("slide1").classList.remove("open");

  }
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      body.classList.remove('stop-scroll');
      document.getElementById("slide1").classList.remove("open");

    }
  });
  document.querySelector("#slide1 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    body.classList.remove('stop-scroll');
    event.currentTarget.classList.remove('open');

  });

  //modal2
  document.getElementById("open-slide2").addEventListener("click", function () {
    document.getElementById("slide2").classList.add("open");
    body.classList.add('stop-scroll');
  }
  );

  document.getElementById("close-slide2").addEventListener("click", function () {
    document.getElementById("slide2").classList.remove("open");
    body.classList.remove('stop-scroll');
  }
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("slide2").classList.remove("open");
      body.classList.remove('stop-scroll');
    }
  });
  document.querySelector("#slide2 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('stop-scroll');
  });

  //modal3
  document.getElementById("open-slide3").addEventListener("click", function () {
    document.getElementById("slide3").classList.add("open");
    body.classList.add('stop-scroll');
  }
  );

  document.getElementById("close-slide3").addEventListener("click", function () {
    document.getElementById("slide3").classList.remove("open");
    body.classList.remove('stop-scroll');
  }
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("slide3").classList.remove("open");
      body.classList.remove('stop-scroll');
    }
  });
  document.querySelector("#slide3 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide3").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('stop-scroll');
  });

  //modal4
  document.getElementById("open-slide4").addEventListener("click", function () {
    document.getElementById("slide4").classList.add("open");
    body.classList.add('stop-scroll');
  }
  );

  document.getElementById("close-slide4").addEventListener("click", function () {
    document.getElementById("slide4").classList.remove("open");
    body.classList.remove('stop-scroll');
  }
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("slide4").classList.remove("open");
      body.classList.remove('stop-scroll');
    }
  });
  document.querySelector("#slide4 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide4").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('stop-scroll');
  });

  //modal5
  document.getElementById("open-slide5").addEventListener("click", function () {
    document.getElementById("slide5").classList.add("open");
    body.classList.add('stop-scroll');
  }
  );

  document.getElementById("close-slide5").addEventListener("click", function () {
    document.getElementById("slide5").classList.remove("open");
    body.classList.remove('stop-scroll');
  }
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("slide5").classList.remove("open");
      body.classList.remove('stop-scroll');
    }
  });
  document.querySelector("#slide5 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide5").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('stop-scroll');
  });


  //modal6
  document.getElementById("open-slide6").addEventListener("click", function () {
    document.getElementById("slide6").classList.add("open");
    body.classList.add('stop-scroll');
  },
  );

  document.getElementById("close-slide6").addEventListener("click", function () {
    document.getElementById("slide6").classList.remove("open");
    body.classList.remove('stop-scroll');
  },
  );

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("slide6").classList.remove("open");
      body.classList.remove('stop-scroll');
    }
  });
  document.querySelector("#slide6 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("slide6").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('stop-scroll');
  });

  //search

  const searchOpen = document.querySelector('.search__lower');
  const search = document.querySelector('.lower__form');
  const searchClose = document.querySelector('.search__close');

  searchOpen.onclick = function () {
    search.classList.add("open");
    searchOpen.classList.add("hidden");
  };

  searchClose.onclick = function () {
    search.classList.remove("open");
    searchOpen.classList.remove("hidden");
  };

  const headerOpen = document.querySelector('.header__search');
  const search2 = document.querySelector('.upper__form');
  const searchClose2 = document.querySelector('.form__close');

  headerOpen.onclick = function () {
    search2.classList.add("open");
  };

  searchClose2.onclick = function () {
    search2.classList.remove("open");
  };


  //Burger
  const burger = document?.querySelector('[data-burger]');
  const header__nav = document?.querySelector('[data-header__nav]');
  const navItems = header__nav?.querySelectorAll('a');


  burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    header__nav?.classList.toggle('header__nav--visible');
    search.classList.remove('search__show');
  });

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      header__nav?.classList.remove('header__nav--visible');
    });
  });

  //scroll
  document.querySelectorAll('.js-scroll').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });



  const MOBILE_WIDTH = 1024;

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      scrollToContent(this, true);
    });
  });


});




