"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;

(function () {
  var Modal = document.createElement('div');
  Modal.classList.add('modal');
  Modal.innerHTML = "<div class='modal__body'>\n   <div class='modal__container'>\n   <nav class=\"modal__nav\">\n   <ul class=\"modal__row\">\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430\u043C</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438</a></li>\n<li class=\"modal__item\"><a href=\"#\" class=\"modal__link\">\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></li>\n   </ul>\n      </nav>\n<hr/>\n         <div class='modal__icons'>\n         <a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n         <a href=\"#\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\n         </div>\n<hr/>\n         <div class='modal__social'>\n         <a href=\"#\"><span class='modal__icon _icon-tube'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-vk'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-face'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-tg'></span></a>\n         <a href=\"#\"><span class='modal__icon _icon-etsy'></span></a>\n         </div>\n   </div>\n   </div>";
  document.querySelector('.header').appendChild(Modal);
})();

var toggle = document.querySelector('.nav__item_toggle');
var modal = document.querySelector('.modal');
toggle.addEventListener('click', function () {
  toggle.classList.toggle('hoverspans');

  if (modal.style.top === '88px') {
    modal.style.top = '-1500px';
  } else {
    modal.style.top = '88px';
  }
});
var arrow = document.querySelectorAll('#title');
var ul = [];
var ul2 = [[], [], [], []];

for (var y = 0; y < arrow.length; y++) {
  ul.push(arrow[y].parentNode.children);

  for (var i = 0; i < ul[y].length; i++) {
    ul2[y].push(ul[y][i]);
  }
}

for (var _i = 0; _i < ul2.length; _i++) {
  ul2[_i].shift();
}

if (window.innerWidth <= 950) {
  var _loop = function _loop(_i2) {
    arrow[_i2].addEventListener('click', function () {
      ul2[_i2].forEach(function (i) {
        if (i.style.display === 'flex') {
          i.style.display = 'none';
        } else {
          i.style.display = 'flex';
        }
      });
    });
  };

  for (var _i2 = 0; _i2 < arrow.length; _i2++) {
    _loop(_i2);
  }
}

console.log('asd');