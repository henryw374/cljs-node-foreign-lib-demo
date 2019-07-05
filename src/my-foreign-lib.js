

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory('node??') :
	typeof define === 'function' && define.amd ? define([], factory) :
	(global.myforeign = factory('not node??'));
}
(this, (function (arg) { 

console.log('hello everyone from  ...' +arg)
})));