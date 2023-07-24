(function (root, factory) {
if (typeof define === 'function' && define.amd) { // require.js
  define(factory)
} else if (typeof define === 'function' && define.cmd) { // sea.js
  define(factory)
} else if (typeof module === 'object' && typeof  module.exports === 'object') { // commonjs
  module.exports = factory()
} else {
  // 全局挂载
  window.umdModule = factory()
}
})(
  this, function () {
    return {
      name: '我是一个 umd 模块'
    }
  }
)