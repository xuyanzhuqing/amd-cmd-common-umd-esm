var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var name$1 = {exports: {}};

(function (module) {
	(function (root, factory) {
	{ // commonjs
	  module.exports = factory();
	}
	})(
	  commonjsGlobal, function () {
	    return {
	      name: '我是一个 umd 模块'
	    }
	  }
	);
} (name$1));

var nameExports = name$1.exports;
var name = /*@__PURE__*/getDefaultExportFromCjs(nameExports);

export { name as default };
