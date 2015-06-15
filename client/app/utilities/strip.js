'use strict';

module.exports = function (html) {
  var tmp = document.createElement('DIV');
  tmp.innerHTML = html;

  return tmp.textContent || tmp.innerText || '';
};
