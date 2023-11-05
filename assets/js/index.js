// icon.src = icon.src.replace('close', 'open');
// icon.src = icon.src.includes('close') ? icon.src.replace('close', 'open') : icon.src.replace('open', 'close');

// Vanilla js

var URL = './assets/js/accordion.json';
function CustomAccordion(accordion) {
  this.accordion = accordion;
  this.titles = this.accordion.querySelectorAll('.accordion__title');
  this.contents = this.accordion.querySelectorAll('.accordion__content');
  this.state = {
    currentIndex: 0,
    // data: []
  };
  this.setState = function (newState) {
    Object.assign(this.state, newState);
  }
}
// CustomAccordion.prototype.getAccordionContent = function () {
//   var xhr = new XMLHttpRequest();
//   xhr.open('get', URL);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     console.log(xhr.response);
//     this.setState({
//       data: xhr.response
//     });
//     this.renderAccordion();
//     this.titles = this.accordion.querySelectorAll('.accordion__title');
//     this.contents = this.accordion.querySelectorAll('.accordion__content');
//     this.showHide();
//     this.events();
//   }.bind(this)
//   xhr.send();
// }
// CustomAccordion.prototype.renderAccordion = function () {
//   if (!this.state.data) {
//     this.accordion.innerHTML = 'No Data Found!';
//     this.accordion.classList.add('no-data');
//   } else {
//     var html = '';
//     var length = this.state.data.length
//     for (var i = 0; i < length; i++) {
//       var object = this.state.data[i];
//       html += '<div class="accordion__item">' +
//         '<div class="accordion__title">' +
//         '<h3>' + object.title + '</h3>' +
//         '</div>' +
//         '<div class="accordion__content">' +
//         '<div>' +
//         '<h4> This is our country </h4>' +
//         '<p>' + object.content + '</p>' +
//         '</div>' +
//         '</div>' +
//         '</div>'
//     }
//     this.accordion.innerHTML = html;
//   }
// }
CustomAccordion.prototype.showHide = function () {
  var length = this.titles.length;

  for (var i = 0; i < length; i++) {
    var icon = this.titles[i].querySelector('img');
    if (this.state.currentIndex === i) {
      this.titles[i].parentElement.classList.toggle('active');
      var height = this.contents[i].children[0].offsetHeight;
      this.contents[i].style.height =
        this.contents[i].offsetHeight > 0 ? 0 : height + 'px';
    } else {
      this.titles[i].parentElement.classList.remove('active');
      this.contents[i].style.height = 0;
    }
  }
}

CustomAccordion.prototype.reset = function () {
  // this.getAccordionContent();
  this.showHide();
  this.events();
}

CustomAccordion.prototype.events = function () {
  var length = this.titles.length
  for (var i = 0; i < length; i++) {
    this.titles[i].addEventListener('click', function (i) {
      this.setState({
        currentIndex: i
      });
      this.showHide();
    }.bind(this, i));
  }
}
CustomAccordion.prototype.init = function () {
  this.reset();
  // this.events();
}

// icon.src = icon.src.replace('close', 'open');
// icon.src = icon.src.includes('close') ? icon.src.replace('close', 'open') : icon.src.replace('open', 'close');



var accordions = document.querySelectorAll('.custom-accordion');
var length = accordions.length;
if (accordions.length) {
  for (var i = 0; i < length; i++) {
    var customAccordion = new CustomAccordion(accordions[i]);
    customAccordion.init();
  }
};



// History Page Accordion Icon Change 
!function () {
  var titles = document.querySelectorAll('.apf-accordion .accordion__title');
  var length = titles.length
  for (var i = 0; i < length; i++) {
    titles[i].addEventListener('click', function () {
      var iconDiff = this.querySelector('img');
      for (var i = 0; i < length; i++) {
        var icon = titles[i].querySelector('img');
        if (icon !== iconDiff) {
          icon.src = icon.src.replace('close', 'open');
          console.log(icon.src);
        }
      }
      iconDiff.src = iconDiff.src.includes('open') ? icon.src.replace('open', 'close') : icon.src.replace('close', 'open');
    })
  }
  i = 0;
}();

!function () {
  var titles = document.querySelectorAll('.ea-inner .accordion__title');
  var image = document.querySelector('.ea-inner>div:last-child img');

  if (!titles.length) return;

  var length = titles.length;
  for (var i = 0; i < length; i++) {
    titles[i].addEventListener('click', function () {
      var img = this.parentElement.querySelector('.mobile-img');
      image.src = img.src;

      if (this.parentElement.classList.contains('active')) {
        image.style.opacity = 0;
        setTimeout(function () {
          image.style.opacity = 1;
        }, 380)
      } else {
        image.style.opacity = 0;
      }

    });
  }

}()

$(document).ready(function () {
  // WOW 
  new WOW().init();

  // Owl Carousel
  $(".slider-1").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
  });

  $(".slider-2").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: ['<img src="./assets/images/room-suites/angle-left.svg" />', '<img src="./assets/images/room-suites/angle-right.svg" />'],
    loop: true,
  });

  $(".slider-3").owlCarousel({
    items: 1,
    // dots: false,
    nav: true,
    navText: ['<img src="./assets/images/icons/angle-left.svg" />', '<img src="./assets/images/icons/angle-right.svg" />'],
    loop: true,
  });

  $(".menu-item-has-children > a").on("click", function (e) {
    if ($(window).width() <= 1199) {
      e.preventDefault();
      console.log($(this).parent().find(".sub-menu"));
      $(".sub-menu").not($(this).parent().find(".sub-menu")).slideUp();
      $(this).parent().find(".sub-menu").slideToggle();
    }
  });

  var svg = $('<svg xmlns="http://www.w3.org/2000/svg" width="8.686" height="7.549" viewBox="0 0 8.686 7.549"><path id="Path_515" data-name="Path 515" d="M-14450.879-12573.819l-3.871-6.333-3.964,6.333" transform="translate(-14450.452 -12573.554) rotate(180)" fill="none" stroke="#f7f7f4" stroke-width="1"></path></svg>');


  $('.menu-item-has-children').append(svg);

  $('select').niceSelect();




});