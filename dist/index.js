(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.index = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  function dig(template) {
    var ADDRESS_EX = /(..(?:縣|市).{1,3}(?:鄉|區|鎮|市|街|路|道).*?(?:號|樓))/img;

    if (template == null && typeof template !== 'string') {
      return Promise.reject('需要一份<樣版: string> 來提供解析');
    }

    template = template.replace(/[\r\n\t]/g, '').replace(/[ ]{2,}/g, ' ');

    var data = template.match(ADDRESS_EX);

    return Promise.resolve(data);
  }

  module.exports = { dig: dig };
});