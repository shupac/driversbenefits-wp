/*!
 * 
 *         This file is part of the Buttonizer plugin that is downloadable through Wordpress.org,
 *         please do not redistribute this plugin or the files without any written permission of the author.
 *         
 *         If you need support, contact us at support@buttonizer.pro or visit our community website
 *         https://community.buttonizer.pro/
 *         
 *         Buttonizer is Freemium software. The free version (build) does not contain premium functionality.
 *         
 *         (C) 2017-2020 Buttonizer dev-version
 *         
 */
/*!
 * 
 *         This file is part of the Buttonizer plugin that is downloadable through Wordpress.org,
 *         please do not redistribute this plugin or the files without any written permission of the author.
 *         
 *         If you need support, contact us at support@buttonizer.pro or visit our community website
 *         https://community.buttonizer.pro/
 *         
 *         Buttonizer is Freemium software. The free version (build) does not contain premium functionality.
 *         
 *         (C) 2017-2020 Buttonizer dev-version
 *         
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 908);
/******/ })
/************************************************************************/
/******/ ({

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(294),
    listCacheDelete = __webpack_require__(295),
    listCacheGet = __webpack_require__(296),
    listCacheHas = __webpack_require__(297),
    listCacheSet = __webpack_require__(298);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(83);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(84);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(318);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(54);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(238),
    baseKeysIn = __webpack_require__(331),
    isArrayLike = __webpack_require__(99);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}:undefined}(this);
//# sourceMappingURL=dlv.umd.js.map


/***/ }),

/***/ 1320:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72),
    isObject = __webpack_require__(50);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(203);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(54),
    stubFalse = __webpack_require__(327);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(138)(module)))

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(237),
    baseAssignValue = __webpack_require__(137);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateToFormat; });
/* unused harmony export formatToDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return importIcons; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* global Map */

function dateToFormat(date) {
  if (!date) return null;

  var pad = function pad(num, size) {
    var s = String(num);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }

    return s;
  };

  return "".concat(date.getDate(), "-").concat(pad(date.getMonth() + 1, 2), "-").concat(date.getFullYear());
}
function formatToDate(format) {
  if (!format) return null;
  var dateParts = format.split("-");
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
var importIcons = function () {
  var cache = new Map();
  return function () {
    var icon_library = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "fontawesome";
    var icon_library_version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "5.free";
    var url = buttonizer_admin.assets + "/icon_definitions/" + icon_library + "." + icon_library_version + ".json?buttonizer-icon-cache=" + buttonizer_admin.version;
    if (cache.has(url)) return cache.get(url);
    var value = axios__WEBPACK_IMPORTED_MODULE_0___default()({
      url: url,
      dataType: "json",
      method: "get"
    });
    cache.set(url, value);
    return value;
  };
}();

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49), __webpack_require__(208)(module)))

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["a"] = (hyphenateStyleName);


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(109),
    stackClear = __webpack_require__(299),
    stackDelete = __webpack_require__(300),
    stackGet = __webpack_require__(301),
    stackHas = __webpack_require__(302),
    stackSet = __webpack_require__(303);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(84),
    root = __webpack_require__(54);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(235);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(325),
    isObjectLike = __webpack_require__(58);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(328),
    baseUnary = __webpack_require__(205),
    nodeUtil = __webpack_require__(206);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(35);
var normalizeHeaderName = __webpack_require__(279);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(196);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(196);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(168)))

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var settle = __webpack_require__(280);
var buildURL = __webpack_require__(193);
var buildFullPath = __webpack_require__(282);
var parseHeaders = __webpack_require__(285);
var isURLSameOrigin = __webpack_require__(286);
var createError = __webpack_require__(197);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(287);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(281);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(293),
    createAssigner = __webpack_require__(333);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)))

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(310),
    mapCacheDelete = __webpack_require__(317),
    mapCacheGet = __webpack_require__(319),
    mapCacheHas = __webpack_require__(320),
    mapCacheSet = __webpack_require__(321);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(137),
    eq = __webpack_require__(83);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(84);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(232);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(200);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(138)(module)))

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(290);
var bytesToUuid = __webpack_require__(291);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       false ? undefined : void 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["a"] = (jssNested);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(322);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(54);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(138)(module)))

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(204);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(54);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(324),
    getPrototype = __webpack_require__(171),
    isPrototype = __webpack_require__(172);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72),
    getPrototype = __webpack_require__(171),
    isObjectLike = __webpack_require__(58);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(137),
    eq = __webpack_require__(83);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(330),
    isArguments = __webpack_require__(173),
    isArray = __webpack_require__(59),
    isBuffer = __webpack_require__(139),
    isIndex = __webpack_require__(176),
    isTypedArray = __webpack_require__(175);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(141),
    overRest = __webpack_require__(334),
    setToString = __webpack_require__(336);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(83),
    isArrayLike = __webpack_require__(99),
    isIndex = __webpack_require__(176),
    isObject = __webpack_require__(50);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ openDrawer; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ closeDrawer; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ data_utils["a" /* dateToFormat */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ GenerateUniqueId; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ shuffleTips; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ uniqueCharset; });

// UNUSED EXPORTS: formatToDate, importIcons

// CONCATENATED MODULE: ./utils/utils/drawer-utils.js
function openDrawer(drawer, page) {
  closeDrawer();
  document.location.hash += "".concat(document.location.hash.match(/\/$/) ? "" : "/").concat(drawer).concat(page ? "/" + page : "");
}
function closeDrawer() {
  document.location.hash = document.location.hash.replace(/\/?(settings|menu|timeschedules|pagerules).*$/i, "");
}
// EXTERNAL MODULE: ./utils/utils/data-utils.js
var data_utils = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(216);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// CONCATENATED MODULE: ./utils/utils/random.js

function GenerateUniqueId() {
  return v4_default()();
}
function shuffleTips(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function uniqueCharset() {
  return Array.apply(0, Array(15)).map(function () {
    return function (charset) {
      return charset.charAt(Math.floor(Math.random() * charset.length));
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
  }).join("");
}
// CONCATENATED MODULE: ./utils/utils/index.js




/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var bind = __webpack_require__(192);
var Axios = __webpack_require__(275);
var mergeConfig = __webpack_require__(198);
var defaults = __webpack_require__(195);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(199);
axios.CancelToken = __webpack_require__(288);
axios.isCancel = __webpack_require__(194);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(289);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var buildURL = __webpack_require__(193);
var InterceptorManager = __webpack_require__(276);
var dispatchRequest = __webpack_require__(277);
var mergeConfig = __webpack_require__(198);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);
var transformData = __webpack_require__(278);
var isCancel = __webpack_require__(194);
var defaults = __webpack_require__(195);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(197);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(283);
var combineURLs = __webpack_require__(284);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(35);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(199);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 290:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 291:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 292:
/***/ (function(module) {

module.exports = JSON.parse("{\"frontend\":{\"background_color\":\"#48A4DC;#F08419\",\"horizontal\":\"right: 5%\",\"vertical\":\"bottom: 5%\",\"width\":\"56px\",\"height\":\"56px\",\"show_mobile\":true,\"show_desktop\":true,\"transform\":\"unset\"},\"data\":{\"icon\":{\"icon\":\"fas fa-user\"},\"group\":{\"icon\":[\"fas fa-plus\",\"\"],\"horizontal\":\"right: 5%\",\"vertical\":\"bottom: 5%\",\"show_mobile\":true,\"show_desktop\":true,\"menu_style\":\"default\",\"menu_opening_animation\":\"default\",\"menu_animation\":\"none\",\"menu_animation_delay\":10,\"menu_animation_repeat_count\":0,\"start_opened\":false,\"close_on_click_outside\":true,\"open_on_mouseover\":false,\"close_on_mouseleave\":true,\"show_label_mobile\":\"always\",\"show_label_desktop\":\"always\",\"show_on_schedule_trigger\":true,\"show_on_rule_trigger\":true,\"icon_image\":[\"\"],\"label\":\"\",\"is_menu\":true,\"icon_size\":[25],\"label_same_width\":false},\"button\":{\"icon\":[\"fas fa-user\",\"\"],\"show_mobile\":true,\"show_desktop\":true,\"width\":\"42px\",\"height\":\"42px\",\"space\":\"10px\",\"type\":\"url\",\"label\":\"\",\"action\":\"#\",\"action_new_tab\":false,\"icon_is_image\":false,\"icon_image\":[\"\"],\"icon_size\":[16],\"background_image\":[],\"messenger_lang\":\"en_US\"},\"edit_button\":{\"position\":\"absolute\",\"width\":\"27px\",\"height\":\"27px\",\"lineHeight\":\"27px\",\"color\":\"#FFFFFF\",\"opacity\":0,\"transition\":\"all 0.2s ease-out\",\"border-radius\":\"100%\",\"background\":\"#2a6b7e\",\"padding\":\"unset\",\"z-index\":\"999999\",\"& i\":{\"font-size\":\"13px !important\",\"transform\":\"translate(-50%, -50%) !important\",\"display\":\"inline\"},\"&:hover\":{\"transform\":\"scale(1.2) rotate(14deg)\",\"background\":\"#38a7bb\",\"box-shadow\":\"0 0 20px 0px rgba(0, 0, 0, 0.35)\",\"&.small-edit-button\":{\"transform\":\"scale(1) rotate(14deg)\",\"&.mobile-single\":{\"@media screen and (max-width: 769px)\":{\"transform\":\"scale(1.2) rotate(14deg)\"}},\"&.desktop-single\":{\"@media screen and (min-width: 769px)\":{\"transform\":\"scale(1.2) rotate(14deg)\"}}}},\"&.small-edit-button\":{\"transform\":\"scale(0.8)\",\"&.mobile-single\":{\"@media screen and (max-width: 769px)\":{\"lineHeight\":\"26px\",\"transform\":\"unset\"}},\"&.desktop-single\":{\"@media screen and (min-width: 769px)\":{\"transform\":\"unset\"}}},\"&.top\":{\"top\":\"-6px\"},\"&.bottom\":{\"bottom\":\"-6px\"},\"&.right\":{\"right\":\"-10px\"},\"&.left\":{\"left\":\"-10px\"}}},\"styling\":{\"group\":{\"icon_size\":[25]},\"button\":{\"icon_size\":[16],\"icon_image_size\":[16],\"background_color\":[\"#48A4DC\",\"#F08419\"],\"background_image\":[\"\"],\"border_radius\":[\"50%\"],\"icon_color\":[\"#fff\"],\"icon_image_border_radius\":[50],\"label_background_color\":[\"#4e4c4c\"],\"label_color\":[\"#fff\"],\"label_border_radius\":[\"3px\"],\"label_font_size\":[12],\"label_margin\":[\"0px 0px 0px 0px\"],\"label_padding\":[\"5px 15px 5px 15px\"],\"label_font_family\":\"\"}}}");

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(169),
    assignMergeValue = __webpack_require__(202),
    baseFor = __webpack_require__(229),
    baseMergeDeep = __webpack_require__(323),
    isObject = __webpack_require__(50),
    keysIn = __webpack_require__(122),
    safeGet = __webpack_require__(207);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(110);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(110);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(110);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(110);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(109);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x
		}
	}
	return str;
});


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 302:
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(109),
    Map = __webpack_require__(170),
    MapCache = __webpack_require__(201);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(136),
    isMasked = __webpack_require__(307),
    isObject = __webpack_require__(50),
    toSource = __webpack_require__(228);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(121);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 306:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(308);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(54);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(311),
    ListCache = __webpack_require__(109),
    Map = __webpack_require__(170);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(312),
    hashDelete = __webpack_require__(313),
    hashGet = __webpack_require__(314),
    hashHas = __webpack_require__(315),
    hashSet = __webpack_require__(316);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(111);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 313:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(111);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(111);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(111);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(112);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(112);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(112);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(112);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 322:
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(202),
    cloneBuffer = __webpack_require__(230),
    cloneTypedArray = __webpack_require__(231),
    copyArray = __webpack_require__(233),
    initCloneObject = __webpack_require__(234),
    isArguments = __webpack_require__(173),
    isArray = __webpack_require__(59),
    isArrayLikeObject = __webpack_require__(326),
    isBuffer = __webpack_require__(139),
    isFunction = __webpack_require__(136),
    isObject = __webpack_require__(50),
    isPlainObject = __webpack_require__(236),
    isTypedArray = __webpack_require__(175),
    safeGet = __webpack_require__(207),
    toPlainObject = __webpack_require__(329);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72),
    isObjectLike = __webpack_require__(58);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(99),
    isObjectLike = __webpack_require__(58);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72),
    isLength = __webpack_require__(174),
    isObjectLike = __webpack_require__(58);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(140),
    keysIn = __webpack_require__(122);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (warning);


/***/ }),

/***/ 330:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50),
    isPrototype = __webpack_require__(172),
    nativeKeysIn = __webpack_require__(332);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 332:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(239),
    isIterateeCall = __webpack_require__(240);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(335);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(337),
    shortOut = __webpack_require__(339);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(338),
    defineProperty = __webpack_require__(203),
    identity = __webpack_require__(141);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 338:
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 339:
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(192);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export wpActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return weekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return models; });
/* unused harmony export initialStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return drawers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formats; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Constants
 */
var actionTypes = {
  INIT: "INIT",
  // Adding and removing buttons/groups
  ADD_MODEL: "ADD_MODEL",
  //Relation actionTypes
  ADD_RELATION: "ADD_RELATION",
  CHANGE_RELATION: "CHANGE_RELATION",
  REMOVE_RELATION: "REMOVE_RELATION",
  //Data actionTypes
  GET_DATA_BEGIN: "GET_DATA_BEGIN",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  GET_DATA_FAILURE: "GET_DATA_FAILURE",
  GET_DATA_END: "GET_DATA_END",
  HAS_CHANGES: "HAS_CHANGES",
  IS_UPDATING: "IS_UPDATING",
  STOP_LOADING: "STOP_LOADING",
  //Setting values
  SET_SETTING_VALUE: "SET_SETTING_VALUE",
  //Drawer
  OPEN_DRAWER: "OPENING DRAWER",
  CLOSE_DRAWER: "CLOSING DRAWER",
  groups: {
    ADD_RECORD: "ADDING GROUP RECORD",
    REMOVE_RECORD: "REMOVING GROUP RECORD",
    SET_KEY_VALUE: "SET KEY VALUE GROUPS",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS GROUPS"
  },
  buttons: {
    ADD_RECORD: "ADDING BUTTON RECORD",
    REMOVE_RECORD: "REMOVING BUTTON RECORD",
    SET_KEY_VALUE: "SET KEY VALUE BUTTONS",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS BUTTONS"
  },
  timeSchedules: {
    // Time Schedule actionTypes
    ADD_RECORD: "ADDING TIME SCHEDULE",
    REMOVE_RECORD: "REMOVING TIME SCHEDULE",
    SET_KEY_VALUE: "SET KEY VALUE TIMESCHEDULES",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS TIMESCHEDULES",
    ADD_TIMESCHEDULE: "ADD_TIMESCHEDULE",
    SET_WEEKDAY: "SET_WEEKDAY",
    ADD_EXCLUDED_DATE: "ADD_EXCLUDED_DATE",
    SET_EXCLUDED_DATE: "SET_EXCLUDED_DATE",
    REMOVE_EXCLUDED_DATE: "REMOVE_EXCLUDED_DATE"
  },
  pageRules: {
    ADD_RECORD: "ADDING PAGE RULE",
    REMOVE_RECORD: "REMOVING PAGE RULE",
    SET_KEY_VALUE: "SET KEY VALUE PAGERULES",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS PAGERULES",
    ADD_PAGE_RULE_ROW: "ADD_PAGE_RULE_ROW",
    SET_PAGE_RULE_ROW: "SET_PAGE_RULE_ROW",
    REMOVE_PAGE_RULE_ROW: "REMOVE_PAGE_RULE_ROW"
  },
  wp: {
    //Data actionTypes
    GET_DATA_BEGIN: "GET_DATA_BEGIN_WP",
    GET_DATA_SUCCESS: "GET_DATA_SUCCESS_WP",
    GET_DATA_FAILURE: "GET_DATA_FAILURE_WP",
    GET_DATA_END: "GET_DATA_END_WP"
  }
};
var wpActionTypes = {};
var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
var models = {
  BUTTON: "buttons",
  GROUP: "groups",
  TIME_SCHEDULE: "timeSchedules",
  PAGE_RULE: "pageRules"
};
var initialStore = {
  name: "peter",
  loading: {
    showLoading: false,
    loadingString: "",
    loadingSlowWebsite: false,
    loaded: false,
    error: null
  },
  frameUrl: "about:blank",
  loadingIframe: false,
  settings: null,
  _premium: false,
  buttons: {},
  groups: {},
  timeSchedules: {}
};
var drawers = {
  MENU: "menu",
  SETTINGS: "settings",
  SETTINGS_PAGES: {
    analytics: "analytics",
    iconLibrary: "iconlibrary",
    preferences: "preferences",
    reset: "reset"
  },
  TIME_SCHEDULES: "timeschedules",
  PAGE_RULES: "pagerules"
};
var formats = {
  /**
   * Combine values with normal;hover.
   */
  normal_hover: {
    format: function format(normal, hover) {
      return [normal, hover].map(function (val) {
        return val === "unset" ? "" : val == null ? "" : val;
      }).filter(function (val, key) {
        return key === 0 || val !== "";
      }).join(";") || "unset";
    },
    parse: function parse(val) {
      var value = val;
      if (typeof val === "boolean") value = String(val);
      if (typeof val === "number") value = String(val);
      if (typeof val === "undefined") return [];

      if (typeof value !== "string") {
        console.trace();
        console.log(_typeof(value), value);
        throw TypeError("'record[key]' val is not of type String, boolean or number");
      }

      var match = value.split(";");
      return match.map(function (val) {
        if (!val) return undefined;
        if (val === "true") return true;
        if (val === "false") return false;
        if (!isNaN(Number(val))) return Number(val);
        return val;
      });
    }
  },

  /**
   * Px for four sides, for example for margin or padding.
   */
  fourSidesPx: {
    format: function format(val1, val2, val3, val4) {
      return "".concat(val1, "px ").concat(val2, "px ").concat(val3, "px ").concat(val4, "px");
    },
    parse: function parse(val) {
      var reg = /\d+/g;
      var match = val.match(reg);
      return match;
    }
  },

  /**
   * Position format, example: 'bottom: 5px', or 'left: 10%'
   */
  position: {
    format: function format(type, mode, value) {
      return "".concat(type, ": ").concat(value).concat(mode);
    }
  }
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuleList; });
/* unused harmony export SheetsManager */
/* unused harmony export SheetsRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create; });
/* unused harmony export createGenerateId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hasCSSTOMSupport; });
/* unused harmony export sheets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return toCssValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     false ? undefined : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       false ? undefined : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       false ? undefined : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       false ? undefined : void 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           false ? undefined : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       false ? undefined : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     false ? undefined : void 0;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     false ? undefined : void 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  false ? undefined : void 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     false ? undefined : void 0;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.3.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

/* harmony default export */ __webpack_exports__["d"] = (index);



/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isBrowser */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(218);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(384);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global module, require */
var defaults = __webpack_require__(292);

var merge = __webpack_require__(20);

module.exports = {
  frontend: {
    styling: {
      button: merge({}, defaults.styling.button),
      group: merge({}, defaults.styling.button, defaults.styling.group)
    },
    data: {
      button: merge({}, defaults.data.button),
      icon: merge({}, defaults.data.icon),
      group: merge({}, defaults.data.button, defaults.data.group),
      menu_button: merge({}, defaults.data.group),
      edit_button: merge({}, defaults.data.edit_button)
    }
  },
  dashboard: {
    button: merge({}, defaults.data.button, defaults.styling.button),
    group: merge({}, defaults.data.group, defaults.styling.button, defaults.styling.group),
    formatted: Object.entries(merge({}, defaults.data.group, defaults.styling.button, defaults.styling.group)).filter(function (entry) {
      return Array.isArray(entry[1]);
    }).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];

      return key;
    })
  }
};

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(906);
var parse = __webpack_require__(907);
var formats = __webpack_require__(490);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 516:
/***/ (function(module, exports) {

/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

var selector = ':not(#\\20)';
var defaultOptions = { repeat: 3 };

module.exports = function increaseSpecificity(userOptions) {
  var options = Object.assign({}, defaultOptions, userOptions);
  var prefix = Array(options.repeat + 1).join(selector);

  function onProcessRule(rule, sheet) {
    var parent = rule.options.parent;

    if (
      sheet.options.increaseSpecificity === false ||
      rule.type !== 'style' ||
      (parent && parent.type === 'keyframes')
    ) return;

    rule.selectorText = prefix + rule.selectorText;
  }

  return { onProcessRule: onProcessRule };
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(200);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCookie; });
/**
 * Get cookie util
 *
 * @param {string} cname
 */
// Get cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return false;
} // Set cookie

function setCookie(cname, value) {
  document.cookie = cname + "=" + value;
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(121),
    getRawTag = __webpack_require__(305),
    objectToString = __webpack_require__(306);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(304),
    getValue = __webpack_require__(309);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(384);
var formats = __webpack_require__(490);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        }).join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(384);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(92);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(515);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(20);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js
var jss_esm = __webpack_require__(41);

// CONCATENATED MODULE: ./src/js/frontend/Utils/Style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Style_Style = function Style(styles, options) {
  var _this = this;

  _classCallCheck(this, Style);

  this.cachedData = styles;
  var sheet = jss_esm["d" /* default */].createStyleSheet(Object.keys(styles) // [button, icon]
  .reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, key, function (data) {
      return data[key];
    }));
  }, {}), _objectSpread({
    link: true,
    element: document.getElementById("buttonizer-styling"),
    classNamePrefix: "buttonizer-"
  }, options));
  sheet.oldUpdate = sheet.update;

  sheet.update = function (data) {
    merge_default()(_this.cachedData, data);
  };

  sheet.oldAttach = sheet.attach;

  sheet.attach = function () {
    sheet.oldUpdate(_this.cachedData);
    sheet.oldAttach();
  };

  sheet.getCachedData = function () {
    return _this.cachedData;
  };

  return sheet;
};


// CONCATENATED MODULE: ./src/js/frontend/Utils/Stylesheets.js
function Stylesheets_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Stylesheets_button() {
  var _button, _label;

  return new Style_Style({
    button: (_button = {
      display: "block",
      cursor: "pointer",
      outline: "none",
      position: "relative",
      width: "42px",
      height: "42px",
      maxWidth: "none !important",
      color: "#fff",
      background: "#48A4DC",
      "box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
      textAlign: "center",
      textDecoration: "none",
      margin: "0 auto 0 auto",
      "border-radius": "50%",
      transition: "ease-in-out 250ms",
      visibility: "visible"
    }, Stylesheets_defineProperty(_button, "outline", "none !important"), Stylesheets_defineProperty(_button, "userSelect", "none"), Stylesheets_defineProperty(_button, "&:hover", {
      "background-color": "#F08419",
      "box-shadow": "0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)"
    }), _button),
    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      "font-size": "16px",
      color: "#fff",
      "text-align": "center",
      transition: "all 0.2s ease-out"
    },
    image: {
      width: 16,
      transition: "all 0.2s ease-out",
      position: "absolute",
      transform: "translate(-50%,-50%)",
      top: "50%",
      left: "50%"
    },
    label: (_label = {
      color: "#FFFFFFFF",
      "background-color": "#4E4C4CFF",
      "font-size": 12,
      "font-family": "unset",
      "border-radius": "3px 3px 3px 3px",
      margin: "0px 0px 0px 0px",
      padding: "5px 15px 5px 15px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      transition: "all 0.1s ease-out",
      "line-height": "initial",
      "white-space": "nowrap"
    }, Stylesheets_defineProperty(_label, "transition", "all 0.2s ease-out"), Stylesheets_defineProperty(_label, "& img", {
      "max-width": "initial"
    }), _label),
    opened: {},
    closed: {},
    exit_intent_animate: {}
  }, {
    link: true
  });
}
function Stylesheets_group() {
  return new Style_Style({
    group: {
      position: "fixed",
      display: "flex",
      visibility: "hidden",
      // bottom: typeof data.vertical === "undefined" ? "5%" : undefined,
      // right: typeof data.horizontal === "undefined" ? "5%" : undefined,
      "z-index": 99999,
      transition: "ease-in-out 250ms"
    },
    hidden: {
      opacity: 0,
      visibility: "hidden",
      transform: "translate(0, 50px)",
      pointerEvents: "none"
    }
  }, {
    link: true
  });
}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/buttonizer-defaults/index.js
var buttonizer_defaults = __webpack_require__(51);

// CONCATENATED MODULE: ./src/js/frontend/Group.js
function Group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Group_ownKeys(Object(source), true).forEach(function (key) { Group_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Group_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Group_Group = /*#__PURE__*/function () {
  function Group(_ref) {
    var _this = this;

    var data = _ref.data,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        _ref$extensions = _ref.extensions,
        extensions = _ref$extensions === void 0 ? [] : _ref$extensions,
        buttons = _ref.buttons,
        buttonCountMobile = _ref.buttonCountMobile,
        buttonCountDesktop = _ref.buttonCountDesktop;

    Group_classCallCheck(this, Group);

    this.data = data;
    this.element = document.createElement("div");
    this.generators = generators;
    this.extensions = extensions;
    this.menuButton = null;
    this.stylesheet = Stylesheets_group();

    if (typeof buttons === "undefined" || buttons.length === 0) {
      console.error("Oh no, I have no buttons!", this.data.id);
      return;
    }

    this.buttons = buttons.reduce(function (acc, buttonData) {
      return Group_objectSpread({}, acc, {}, createButton({
        groupName: data.name,
        data: Group_objectSpread({}, buttonData),
        pos: {
          horizontal: _this.data.horizontal,
          vertical: _this.data.vertical
        }
      }));
    }, {});
    var button = createButton({
      data: Group_objectSpread({}, data, {
        label: !data.label ? true : data.label,
        show_desktop: data.show_desktop && buttonCountDesktop > 1,
        show_mobile: data.show_mobile && buttonCountMobile > 1
      }),
      pos: {
        horizontal: this.data.horizontal,
        vertical: this.data.vertical
      },
      def: buttonizer_defaults["frontend"].data.menuButton
    });
    this.menuButton = Object.keys(button)[0];
    merge_default()(this.buttons, button); // Initialize generators

    this.generators.forEach(function (gen) {
      return gen.generate(_this);
    }); // Initialize extensions

    this.extensions.forEach(function (ext) {
      return ext.subscribe(_this);
    });
  }

  _createClass(Group, [{
    key: "render",
    value: function render() {
      var _group,
          _this2 = this;

      this.stylesheet.update({
        group: (_group = {}, Group_defineProperty(_group, this.data.horizontal[0], this.data.horizontal[1]), Group_defineProperty(_group, this.data.vertical[0], this.data.vertical[1]), Group_defineProperty(_group, "flexDirection", this.data.vertical[0] === "bottom" ? "column-reverse" : "column"), _group)
      });

      var _this$buttons$this$me = this.buttons[this.menuButton].render(),
          element = _this$buttons$this$me.element,
          JSS = _this$buttons$this$me.JSS,
          JSSImage = _this$buttons$this$me.JSSImage,
          JSSImageHover = _this$buttons$this$me.JSSImageHover; // Add group label styling regardless if it does not have a label


      var labelJSS = this.buttons[this.menuButton].label.setJSS();
      merge_default()(JSS, labelJSS);
      element.classList.add("buttonizer-head");

      if (this.data.is_menu != false) {
        this.element.appendChild(element);
      }

      Object.values(this.buttons).forEach(function (button) {
        if (button.data.id === _this2.menuButton) return;
        var buttonStyle = JSS;
        button.stylesheet.update(buttonStyle);

        _this2.element.appendChild(button.render().element);
      });
      this.element.className = Object(clsx_m["a" /* default */])(this.element.className, "buttonizer", "buttonizer-group", this.stylesheet.classes.group); // Device visibility

      if (!this.data.show_desktop) {
        this.setHide("desktop");
      }

      if (!this.data.show_mobile) {
        this.setHide("mobile");
      }

      this.stylesheet.attach();
      return this.element;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      // Unsubscribe
      this.extensions.forEach(function (ext) {
        return ext.unsubscribe(_this3);
      });
      if (this.element) this.element.remove();
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        group: Group_defineProperty({}, "@media screen and (".concat(size, ")"), {
          display: "none"
        })
      });
    }
  }]);

  return Group;
}();


// CONCATENATED MODULE: ./src/js/frontend/Extensions/template.js
function template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function template_createClass(Constructor, protoProps, staticProps) { if (protoProps) template_defineProperties(Constructor.prototype, protoProps); if (staticProps) template_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @Buttonizer Extension container
 *
 * This class is required for all extensions
 */
var Extension = /*#__PURE__*/function () {
  function Extension() {
    template_classCallCheck(this, Extension);

    this.subscriptions = []; // Define default extension name

    this.name = "unknown";
  }
  /**
   * Subscribe object to this extension
   *
   * @param {Group} obj
   */


  template_createClass(Extension, [{
    key: "subscribe",
    value: function subscribe(obj) {
      // Make sure object is not subscribed already
      if (this.subscriptions.indexOf(obj) > 0) {
        console.error("This object is already subscribed to the ".concat(this.name, " extension."));
        return false;
      } // Subscribe


      this.subscriptions.push(obj); // Trigger event

      this.onSubscribe(obj);
    }
    /**
     * Unsubscribe object from this extension
     *
     * @param {Group} obj
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(obj) {
      // Find object subscription
      var objIndex = this.subscriptions.indexOf(obj); // Object not subscribed

      if (objIndex === -1) {
        console.error("This object is not subscribed to the ".concat(this.name, " extension."));
        return false;
      } // Trigger event


      this.onUnsubscribe(obj); // Unsubscribe

      this.subscriptions.splice(objIndex, 1);
    } // Placeholder

  }, {
    key: "onSubscribe",
    value: function onSubscribe(obj) {
      obj;
    } // Placeholder

  }, {
    key: "onUnsubscribe",
    value: function onUnsubscribe(obj) {
      obj;
    }
  }]);

  return Extension;
}();


// EXTERNAL MODULE: ./node_modules/dlv/dist/dlv.umd.js
var dlv_umd = __webpack_require__(13);
var dlv_umd_default = /*#__PURE__*/__webpack_require__.n(dlv_umd);

// CONCATENATED MODULE: ./src/js/frontend/Extensions/CloseOnClickOutside.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function CloseOnClickOutside_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CloseOnClickOutside_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CloseOnClickOutside_createClass(Constructor, protoProps, staticProps) { if (protoProps) CloseOnClickOutside_defineProperties(Constructor.prototype, protoProps); if (staticProps) CloseOnClickOutside_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { CloseOnClickOutside_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function CloseOnClickOutside_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CloseOnClickOutside_CloseOnClickOutside = /*#__PURE__*/function (_Extension) {
  _inherits(CloseOnClickOutside, _Extension);

  var _super = _createSuper(CloseOnClickOutside);

  function CloseOnClickOutside() {
    var _this;

    CloseOnClickOutside_classCallCheck(this, CloseOnClickOutside);

    _this = _super.call(this); // Set extension name

    _set(_getPrototypeOf(CloseOnClickOutside.prototype), "name", "close on click outside", _assertThisInitialized(_this), true);

    _this.watchClick();

    return _this;
  } // Add click event listener


  CloseOnClickOutside_createClass(CloseOnClickOutside, [{
    key: "watchClick",
    value: function watchClick() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        return _this2.notify(e.target);
      });
    } // Hide or show button on subscribe

  }, {
    key: "notify",
    value: function notify(target) {
      this.subscriptions.forEach(function (group) {
        var mainButton = group.buttons[dlv_umd_default()(group, "menuButton", null)];

        if (mainButton && mainButton.action && mainButton.action.isOpened() && !group.element.contains(target)) {
          mainButton.action.close();
        }
      });
    }
  }]);

  return CloseOnClickOutside;
}(Extension); // Export close on click outside extension


/* harmony default export */ var Extensions_CloseOnClickOutside = (new CloseOnClickOutside_CloseOnClickOutside());
// CONCATENATED MODULE: ./src/js/frontend/Generators/template.js
function Generators_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Generators_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Generators_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) Generators_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) Generators_template_defineProperties(Constructor, staticProps); return Constructor; }



var template_Generator = /*#__PURE__*/function () {
  function Generator() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Generators_template_classCallCheck(this, Generator);

    this.mobileSingleButton = dlv_umd_default()(obj, "mobileSingleButton", false);
    this.desktopSingleButton = dlv_umd_default()(obj, "desktopSingleButton", false);
  }

  Generators_template_createClass(Generator, [{
    key: "generate",
    value: function generate(group) {
      this.createJss(group, "mobile");
      this.createJss(group, "desktop");
    } // Placeholder

  }, {
    key: "createJss",
    value: function createJss() {}
  }]);

  return Generator;
}();


// CONCATENATED MODULE: ./src/js/frontend/Generators/Hoverer.js
function Hoverer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hoverer_typeof = function _typeof(obj) { return typeof obj; }; } else { Hoverer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hoverer_typeof(obj); }

function Hoverer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hoverer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hoverer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Hoverer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Hoverer_defineProperties(Constructor, staticProps); return Constructor; }

function Hoverer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Hoverer_setPrototypeOf(subClass, superClass); }

function Hoverer_setPrototypeOf(o, p) { Hoverer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Hoverer_setPrototypeOf(o, p); }

function Hoverer_createSuper(Derived) { return function () { var Super = Hoverer_getPrototypeOf(Derived), result; if (Hoverer_isNativeReflectConstruct()) { var NewTarget = Hoverer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Hoverer_possibleConstructorReturn(this, result); }; }

function Hoverer_possibleConstructorReturn(self, call) { if (call && (Hoverer_typeof(call) === "object" || typeof call === "function")) { return call; } return Hoverer_assertThisInitialized(self); }

function Hoverer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Hoverer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Hoverer_getPrototypeOf(o) { Hoverer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Hoverer_getPrototypeOf(o); }



var Hoverer = /*#__PURE__*/function (_Generator) {
  Hoverer_inherits(Hoverer, _Generator);

  var _super = Hoverer_createSuper(Hoverer);

  function Hoverer(func) {
    var _this;

    Hoverer_classCallCheck(this, Hoverer);

    _this = _super.call(this);
    _this.callback = func;
    return _this;
  }

  Hoverer_createClass(Hoverer, [{
    key: "generate",
    value: function generate(button) {
      var _this2 = this;

      button.element.addEventListener("mouseover", function () {
        return _this2.callback(true);
      });
      button.element.addEventListener("mouseout", function () {
        return _this2.callback(false);
      });
    }
  }]);

  return Hoverer;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Icon.js
function Icon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Icon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Icon_createClass(Constructor, protoProps, staticProps) { if (protoProps) Icon_defineProperties(Constructor.prototype, protoProps); if (staticProps) Icon_defineProperties(Constructor, staticProps); return Constructor; }





var Icon_Icon = /*#__PURE__*/function () {
  function Icon(_ref) {
    var data = _ref.data,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        stylesheet = _ref.stylesheet;

    Icon_classCallCheck(this, Icon);

    this.data = data;
    this.generators = generators;
    this.stylesheet = stylesheet;
  }

  Icon_createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.element = document.createElement("i");
      this.JSS = {
        icon: {
          color: this.data.icon_color[0],
          "font-size": this.data.icon_size[0]
        },
        button: {
          "&:hover": {
            "& $icon": {
              color: this.data.icon_color[1],
              "font-size": this.data.icon_size[1] == null ? this.data.icon_size[0] : this.data.icon_size[1]
            }
          }
        }
      };
      this.element.className = Object(clsx_m["a" /* default */])(this.data.icon[0] || buttonizer_defaults["frontend"].data.icon.icon, this.stylesheet.classes.icon);
      if (this.data.icon[1]) this.generators.push(new Hoverer(function (b) {
        return _this.setHoverIcon(b);
      }));
      return this;
    }
  }, {
    key: "setHoverIcon",
    value: function setHoverIcon(hover) {
      if (hover) {
        this.element.className = Object(clsx_m["a" /* default */])(this.data.icon[1], this.stylesheet.classes.icon);
      } else {
        this.element.className = Object(clsx_m["a" /* default */])(this.data.icon[0] || buttonizer_defaults["frontend"].data.icon.icon, this.stylesheet.classes.icon);
      }
    }
  }]);

  return Icon;
}();


// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Image.js
function Image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Image_createClass(Constructor, protoProps, staticProps) { if (protoProps) Image_defineProperties(Constructor.prototype, protoProps); if (staticProps) Image_defineProperties(Constructor, staticProps); return Constructor; }




var Image_Image = /*#__PURE__*/function () {
  function Image(_ref) {
    var data = _ref.data,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        stylesheet = _ref.stylesheet;

    Image_classCallCheck(this, Image);

    this.data = data;
    this.generators = generators;
    this.stylesheet = stylesheet;
  }

  Image_createClass(Image, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.element = document.createElement("img");
      this.stylesheet.update({
        image: {
          width: this.data.icon_image_size[0],
          "border-radius": this.data.icon_image_border_radius[0]
        },
        button: {
          "&:hover": {
            "& $image": {
              width: this.data.icon_image_size[1],
              "border-radius": this.data.icon_image_border_radius[1]
            }
          }
        }
      });
      this.element.src = this.data.icon_image[0];
      this.element.className = Object(clsx_m["a" /* default */])(this.stylesheet.classes.image);
      if (this.data.icon_image[1]) this.generators.push(new Hoverer(function (b) {
        return _this.setHoverImage(b);
      }));
      return this;
    }
  }, {
    key: "setHoverImage",
    value: function setHoverImage(hover) {
      if (hover) {
        this.element.src = this.data.icon_image[1];
      } else {
        this.element.src = this.data.icon_image[0];
      }
    }
  }]);

  return Image;
}();


// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Label.js
function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Label_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Label_createClass(Constructor, protoProps, staticProps) { if (protoProps) Label_defineProperties(Constructor.prototype, protoProps); if (staticProps) Label_defineProperties(Constructor, staticProps); return Constructor; }





var Label_Label = /*#__PURE__*/function () {
  function Label(_ref) {
    var data = _ref.data,
        stylesheet = _ref.stylesheet;

    Label_classCallCheck(this, Label);

    this.data = parseData(data);
    this.stylesheet = stylesheet;
    this.element = document.createElement("div");
    this.generators = [];
    this.JSS = {};
  }

  Label_createClass(Label, [{
    key: "render",
    value: function render() {
      // Add label text in element
      this.element.innerHTML = this.data.label;
      this.setJSS(); // Add className

      this.element.className = Object(clsx_m["a" /* default */])(this.element.className, "buttonizer-label", this.stylesheet.classes.label);
      return this;
    }
  }, {
    key: "setJSS",
    value: function setJSS() {
      var _label;

      // Get horizontal position data
      var horizontalProperty = this.data.horizontal[0];
      this.JSS = {
        label: (_label = {
          color: this.data.label_color[0],
          "background-color": this.data.label_background_color[0],
          "font-size": this.data.label_font_size[0]
        }, Label_defineProperty(_label, horizontalProperty, this.data.label_position || "65px"), Label_defineProperty(_label, "border-radius", this.data.label_border_radius[0]), Label_defineProperty(_label, "text-align", this.data.horizontal[0] === "right" ? "end" : "start"), _label),
        button: {
          "&:hover": {
            "& $label": {
              color: this.data.label_color[1],
              "background-color": this.data.label_background_color[1]
            }
          }
        }
      }; // If visibility is set to hide, display block. If set on hover, display block on hover.

      this.data.show_label_desktop === "always" && this.setShow("desktop");
      this.data.show_label_desktop === "hide" && this.setHide("desktop");
      this.data.show_label_desktop === "hover" && this.setHover();
      this.data.show_label_mobile === "always" && this.setShow("mobile");
      this.data.show_label_mobile === "hide" && this.setHide("mobile");
      return this.JSS;
    }
  }, {
    key: "setShow",
    value: function setShow(device) {
      // Does it need to use on desktop only or mobile?
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.JSS = merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (".concat(size, ")"), {
          opacity: 1,
          visibility: "visible"
        })
      });
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      // Does it need to use on desktop only or mobile?
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (".concat(size, ")"), {
          opacity: 0,
          visibility: "hidden"
        })
      });
    }
  }, {
    key: "setHover",
    value: function setHover() {
      merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (min-width: 770px)", {
          opacity: 0,
          visibility: "hidden"
        }),
        button: Label_defineProperty({}, "@media screen and (min-width: 770px)", Label_defineProperty({}, "&:hover $label", {
          opacity: 1,
          visibility: "visible"
        }))
      });
    }
  }]);

  return Label;
}();


// CONCATENATED MODULE: ./src/js/frontend/Actions/template.js
function Actions_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Actions_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Actions_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) Actions_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) Actions_template_defineProperties(Constructor, staticProps); return Constructor; }

var Action = /*#__PURE__*/function () {
  function Action(data, button, stylesheet) {
    Actions_template_classCallCheck(this, Action);

    this.data = data;
    this.button = button;
    this.stylesheet = stylesheet;
  }

  Actions_template_createClass(Action, [{
    key: "execute",
    value: function execute() {// Do nothing
    }
  }, {
    key: "href",
    value: function href() {
      return "javascript:void(0)";
    }
  }]);

  return Action;
}();


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/WebsiteUrl.js
function WebsiteUrl_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WebsiteUrl_typeof = function _typeof(obj) { return typeof obj; }; } else { WebsiteUrl_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WebsiteUrl_typeof(obj); }

function WebsiteUrl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WebsiteUrl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WebsiteUrl_createClass(Constructor, protoProps, staticProps) { if (protoProps) WebsiteUrl_defineProperties(Constructor.prototype, protoProps); if (staticProps) WebsiteUrl_defineProperties(Constructor, staticProps); return Constructor; }

function WebsiteUrl_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WebsiteUrl_setPrototypeOf(subClass, superClass); }

function WebsiteUrl_setPrototypeOf(o, p) { WebsiteUrl_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WebsiteUrl_setPrototypeOf(o, p); }

function WebsiteUrl_createSuper(Derived) { return function () { var Super = WebsiteUrl_getPrototypeOf(Derived), result; if (WebsiteUrl_isNativeReflectConstruct()) { var NewTarget = WebsiteUrl_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WebsiteUrl_possibleConstructorReturn(this, result); }; }

function WebsiteUrl_possibleConstructorReturn(self, call) { if (call && (WebsiteUrl_typeof(call) === "object" || typeof call === "function")) { return call; } return WebsiteUrl_assertThisInitialized(self); }

function WebsiteUrl_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WebsiteUrl_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WebsiteUrl_getPrototypeOf(o) { WebsiteUrl_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WebsiteUrl_getPrototypeOf(o); }




var WebsiteUrl_WebsiteUrl = /*#__PURE__*/function (_Action) {
  WebsiteUrl_inherits(WebsiteUrl, _Action);

  var _super = WebsiteUrl_createSuper(WebsiteUrl);

  function WebsiteUrl() {
    WebsiteUrl_classCallCheck(this, WebsiteUrl);

    return _super.apply(this, arguments);
  }

  WebsiteUrl_createClass(WebsiteUrl, [{
    key: "href",
    value: function href() {
      // Add target blank to the button
      if (dlv_umd_default()(this.data, "action_new_tab", false)) {
        this.button.setAttribute("target", "_blank");
      } // Add target blank to the button


      if (dlv_umd_default()(this.data, "action_rel_attributes", false)) {
        this.button.setAttribute("rel", this.data.action_rel_attributes);
      }

      return dlv_umd_default()(this.data, "action", "#");
    }
  }]);

  return WebsiteUrl;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Phone.js
function Phone_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Phone_typeof = function _typeof(obj) { return typeof obj; }; } else { Phone_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Phone_typeof(obj); }

function Phone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Phone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Phone_createClass(Constructor, protoProps, staticProps) { if (protoProps) Phone_defineProperties(Constructor.prototype, protoProps); if (staticProps) Phone_defineProperties(Constructor, staticProps); return Constructor; }

function Phone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Phone_setPrototypeOf(subClass, superClass); }

function Phone_setPrototypeOf(o, p) { Phone_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Phone_setPrototypeOf(o, p); }

function Phone_createSuper(Derived) { return function () { var Super = Phone_getPrototypeOf(Derived), result; if (Phone_isNativeReflectConstruct()) { var NewTarget = Phone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Phone_possibleConstructorReturn(this, result); }; }

function Phone_possibleConstructorReturn(self, call) { if (call && (Phone_typeof(call) === "object" || typeof call === "function")) { return call; } return Phone_assertThisInitialized(self); }

function Phone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Phone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Phone_getPrototypeOf(o) { Phone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Phone_getPrototypeOf(o); }



var Phone = /*#__PURE__*/function (_Action) {
  Phone_inherits(Phone, _Action);

  var _super = Phone_createSuper(Phone);

  function Phone() {
    Phone_classCallCheck(this, Phone);

    return _super.apply(this, arguments);
  }

  Phone_createClass(Phone, [{
    key: "execute",
    value: function execute() {
      window.location.href = "tel:".concat(this.data.action || "000000000000");
    }
  }]);

  return Phone;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Mail.js
function Mail_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Mail_typeof = function _typeof(obj) { return typeof obj; }; } else { Mail_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Mail_typeof(obj); }

function Mail_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Mail_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Mail_createClass(Constructor, protoProps, staticProps) { if (protoProps) Mail_defineProperties(Constructor.prototype, protoProps); if (staticProps) Mail_defineProperties(Constructor, staticProps); return Constructor; }

function Mail_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Mail_setPrototypeOf(subClass, superClass); }

function Mail_setPrototypeOf(o, p) { Mail_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Mail_setPrototypeOf(o, p); }

function Mail_createSuper(Derived) { return function () { var Super = Mail_getPrototypeOf(Derived), result; if (Mail_isNativeReflectConstruct()) { var NewTarget = Mail_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Mail_possibleConstructorReturn(this, result); }; }

function Mail_possibleConstructorReturn(self, call) { if (call && (Mail_typeof(call) === "object" || typeof call === "function")) { return call; } return Mail_assertThisInitialized(self); }

function Mail_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Mail_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Mail_getPrototypeOf(o) { Mail_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Mail_getPrototypeOf(o); }




var Mail_Mail = /*#__PURE__*/function (_Action) {
  Mail_inherits(Mail, _Action);

  var _super = Mail_createSuper(Mail);

  function Mail() {
    Mail_classCallCheck(this, Mail);

    return _super.apply(this, arguments);
  }

  Mail_createClass(Mail, [{
    key: "execute",
    value: function execute() {
      var parameters = ""; // Add subject if the subject parameter exists

      if (dlv_umd_default()(this.data, "text_subject", false)) {
        parameters += "?subject=".concat(encodeURIComponent(this.data.text_subject || "Subject"));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_body", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "body=").concat(encodeURIComponent(this.data.text_body));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_cc", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "cc=").concat(encodeURIComponent(this.data.text_cc));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_bcc", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "bcc=").concat(encodeURIComponent(this.data.text_bcc));
      }

      window.location.href = "mailto:".concat(this.data.action).concat(parameters);
    }
  }]);

  return Mail;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/WhatsAppChat.js
function WhatsAppChat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WhatsAppChat_typeof = function _typeof(obj) { return typeof obj; }; } else { WhatsAppChat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WhatsAppChat_typeof(obj); }

function WhatsAppChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WhatsAppChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WhatsAppChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) WhatsAppChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) WhatsAppChat_defineProperties(Constructor, staticProps); return Constructor; }

function WhatsAppChat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WhatsAppChat_setPrototypeOf(subClass, superClass); }

function WhatsAppChat_setPrototypeOf(o, p) { WhatsAppChat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WhatsAppChat_setPrototypeOf(o, p); }

function WhatsAppChat_createSuper(Derived) { return function () { var Super = WhatsAppChat_getPrototypeOf(Derived), result; if (WhatsAppChat_isNativeReflectConstruct()) { var NewTarget = WhatsAppChat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WhatsAppChat_possibleConstructorReturn(this, result); }; }

function WhatsAppChat_possibleConstructorReturn(self, call) { if (call && (WhatsAppChat_typeof(call) === "object" || typeof call === "function")) { return call; } return WhatsAppChat_assertThisInitialized(self); }

function WhatsAppChat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WhatsAppChat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WhatsAppChat_getPrototypeOf(o) { WhatsAppChat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WhatsAppChat_getPrototypeOf(o); }




var WhatsAppChat_WhatsAppChat = /*#__PURE__*/function (_Action) {
  WhatsAppChat_inherits(WhatsAppChat, _Action);

  var _super = WhatsAppChat_createSuper(WhatsAppChat);

  function WhatsAppChat() {
    WhatsAppChat_classCallCheck(this, WhatsAppChat);

    return _super.apply(this, arguments);
  }

  WhatsAppChat_createClass(WhatsAppChat, [{
    key: "execute",
    value: function execute() {
      var whatsapp = "https://wa.me/".concat(this.data.action); // Add whatsapp body

      if (dlv_umd_default()(this.data, "text_body", false)) {
        whatsapp += "?text=".concat(encodeURIComponent(this.data.text_body));
      }

      window.open(whatsapp);
    }
  }]);

  return WhatsAppChat;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Utils/sliding-scroll.js
/*
 * Source: https://github.com/Robbendebiene/Sliding-Scroll/
 * y: the y coordinate to scroll, 0 = top
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * element: the html element that should be scrolled ; default is the main scrolling element
 */
function scrollToY(y) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.scrollingElement;
  // cancel if already on target position
  if (element.scrollTop === y) return;
  var cosParameter = (element.scrollTop - y) / 2;
  var scrollCount = 0,
      oldTimestamp = null;

  function step(newTimestamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollCount will be Infinity
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = y;
      element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
    }

    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
/*
 * id: the id of the element as a string that should be scrolled to
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * this function is using the scrollToY function on the main scrolling element
 */

function scrollToId(id) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
  scrollToY(document.scrollingElement.scrollTop + offset, duration);
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/BackToTop.js
function BackToTop_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BackToTop_typeof = function _typeof(obj) { return typeof obj; }; } else { BackToTop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BackToTop_typeof(obj); }

function BackToTop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BackToTop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BackToTop_createClass(Constructor, protoProps, staticProps) { if (protoProps) BackToTop_defineProperties(Constructor.prototype, protoProps); if (staticProps) BackToTop_defineProperties(Constructor, staticProps); return Constructor; }

function BackToTop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BackToTop_setPrototypeOf(subClass, superClass); }

function BackToTop_setPrototypeOf(o, p) { BackToTop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BackToTop_setPrototypeOf(o, p); }

function BackToTop_createSuper(Derived) { return function () { var Super = BackToTop_getPrototypeOf(Derived), result; if (BackToTop_isNativeReflectConstruct()) { var NewTarget = BackToTop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BackToTop_possibleConstructorReturn(this, result); }; }

function BackToTop_possibleConstructorReturn(self, call) { if (call && (BackToTop_typeof(call) === "object" || typeof call === "function")) { return call; } return BackToTop_assertThisInitialized(self); }

function BackToTop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BackToTop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BackToTop_getPrototypeOf(o) { BackToTop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BackToTop_getPrototypeOf(o); }




var BackToTop_BackToTop = /*#__PURE__*/function (_Action) {
  BackToTop_inherits(BackToTop, _Action);

  var _super = BackToTop_createSuper(BackToTop);

  function BackToTop() {
    BackToTop_classCallCheck(this, BackToTop);

    return _super.apply(this, arguments);
  }

  BackToTop_createClass(BackToTop, [{
    key: "execute",
    value: function execute() {
      scrollToY(0, 1000);
    }
  }]);

  return BackToTop;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/GoToBottom.js
function GoToBottom_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoToBottom_typeof = function _typeof(obj) { return typeof obj; }; } else { GoToBottom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoToBottom_typeof(obj); }

function GoToBottom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoToBottom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoToBottom_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoToBottom_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoToBottom_defineProperties(Constructor, staticProps); return Constructor; }

function GoToBottom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoToBottom_setPrototypeOf(subClass, superClass); }

function GoToBottom_setPrototypeOf(o, p) { GoToBottom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoToBottom_setPrototypeOf(o, p); }

function GoToBottom_createSuper(Derived) { return function () { var Super = GoToBottom_getPrototypeOf(Derived), result; if (GoToBottom_isNativeReflectConstruct()) { var NewTarget = GoToBottom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GoToBottom_possibleConstructorReturn(this, result); }; }

function GoToBottom_possibleConstructorReturn(self, call) { if (call && (GoToBottom_typeof(call) === "object" || typeof call === "function")) { return call; } return GoToBottom_assertThisInitialized(self); }

function GoToBottom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoToBottom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function GoToBottom_getPrototypeOf(o) { GoToBottom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoToBottom_getPrototypeOf(o); }




var GoToBottom_GoToBottom = /*#__PURE__*/function (_Action) {
  GoToBottom_inherits(GoToBottom, _Action);

  var _super = GoToBottom_createSuper(GoToBottom);

  function GoToBottom() {
    GoToBottom_classCallCheck(this, GoToBottom);

    return _super.apply(this, arguments);
  }

  GoToBottom_createClass(GoToBottom, [{
    key: "execute",
    value: function execute() {
      scrollToY(Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight), 1000);
    }
  }]);

  return GoToBottom;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/GoBackPage.js
function GoBackPage_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoBackPage_typeof = function _typeof(obj) { return typeof obj; }; } else { GoBackPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoBackPage_typeof(obj); }

function GoBackPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoBackPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoBackPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoBackPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoBackPage_defineProperties(Constructor, staticProps); return Constructor; }

function GoBackPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoBackPage_setPrototypeOf(subClass, superClass); }

function GoBackPage_setPrototypeOf(o, p) { GoBackPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoBackPage_setPrototypeOf(o, p); }

function GoBackPage_createSuper(Derived) { return function () { var Super = GoBackPage_getPrototypeOf(Derived), result; if (GoBackPage_isNativeReflectConstruct()) { var NewTarget = GoBackPage_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GoBackPage_possibleConstructorReturn(this, result); }; }

function GoBackPage_possibleConstructorReturn(self, call) { if (call && (GoBackPage_typeof(call) === "object" || typeof call === "function")) { return call; } return GoBackPage_assertThisInitialized(self); }

function GoBackPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoBackPage_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function GoBackPage_getPrototypeOf(o) { GoBackPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoBackPage_getPrototypeOf(o); }



var GoBackPage = /*#__PURE__*/function (_Action) {
  GoBackPage_inherits(GoBackPage, _Action);

  var _super = GoBackPage_createSuper(GoBackPage);

  function GoBackPage() {
    GoBackPage_classCallCheck(this, GoBackPage);

    return _super.apply(this, arguments);
  }

  GoBackPage_createClass(GoBackPage, [{
    key: "execute",
    value: function execute() {
      window.history.back();
    }
  }]);

  return GoBackPage;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/JavaScriptPro.js
function JavaScriptPro_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { JavaScriptPro_typeof = function _typeof(obj) { return typeof obj; }; } else { JavaScriptPro_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return JavaScriptPro_typeof(obj); }

function JavaScriptPro_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function JavaScriptPro_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function JavaScriptPro_createClass(Constructor, protoProps, staticProps) { if (protoProps) JavaScriptPro_defineProperties(Constructor.prototype, protoProps); if (staticProps) JavaScriptPro_defineProperties(Constructor, staticProps); return Constructor; }

function JavaScriptPro_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) JavaScriptPro_setPrototypeOf(subClass, superClass); }

function JavaScriptPro_setPrototypeOf(o, p) { JavaScriptPro_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return JavaScriptPro_setPrototypeOf(o, p); }

function JavaScriptPro_createSuper(Derived) { return function () { var Super = JavaScriptPro_getPrototypeOf(Derived), result; if (JavaScriptPro_isNativeReflectConstruct()) { var NewTarget = JavaScriptPro_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return JavaScriptPro_possibleConstructorReturn(this, result); }; }

function JavaScriptPro_possibleConstructorReturn(self, call) { if (call && (JavaScriptPro_typeof(call) === "object" || typeof call === "function")) { return call; } return JavaScriptPro_assertThisInitialized(self); }

function JavaScriptPro_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function JavaScriptPro_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function JavaScriptPro_getPrototypeOf(o) { JavaScriptPro_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return JavaScriptPro_getPrototypeOf(o); }



var JavaScriptPro = /*#__PURE__*/function (_Action) {
  JavaScriptPro_inherits(JavaScriptPro, _Action);

  var _super = JavaScriptPro_createSuper(JavaScriptPro);

  function JavaScriptPro() {
    JavaScriptPro_classCallCheck(this, JavaScriptPro);

    return _super.apply(this, arguments);
  }

  JavaScriptPro_createClass(JavaScriptPro, [{
    key: "execute",
    value: function execute() {
      try {
        Function('"use strict";console.log("BZ - Run");' + decodeURIComponent(this.data.action) + ';console.log("BZ - Finish");')();
      } catch (e) {
        console.error("Buttonizer error: " + e.message);
        window.Buttonizer.messageButtonizerAdminEditor("javascript_error", e.message);
      }
    }
  }]);

  return JavaScriptPro;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Sms.js
function Sms_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sms_typeof = function _typeof(obj) { return typeof obj; }; } else { Sms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sms_typeof(obj); }

function Sms_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sms_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sms_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sms_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sms_defineProperties(Constructor, staticProps); return Constructor; }

function Sms_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sms_setPrototypeOf(subClass, superClass); }

function Sms_setPrototypeOf(o, p) { Sms_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sms_setPrototypeOf(o, p); }

function Sms_createSuper(Derived) { return function () { var Super = Sms_getPrototypeOf(Derived), result; if (Sms_isNativeReflectConstruct()) { var NewTarget = Sms_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Sms_possibleConstructorReturn(this, result); }; }

function Sms_possibleConstructorReturn(self, call) { if (call && (Sms_typeof(call) === "object" || typeof call === "function")) { return call; } return Sms_assertThisInitialized(self); }

function Sms_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sms_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Sms_getPrototypeOf(o) { Sms_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sms_getPrototypeOf(o); }




var Sms_Sms = /*#__PURE__*/function (_Action) {
  Sms_inherits(Sms, _Action);

  var _super = Sms_createSuper(Sms);

  function Sms() {
    Sms_classCallCheck(this, Sms);

    return _super.apply(this, arguments);
  }

  Sms_createClass(Sms, [{
    key: "execute",
    value: function execute() {
      var sms = "sms:".concat(this.data.action); // Add SMS body

      if (dlv_umd_default()(this.data, "text_body", false)) {
        sms += ";?&body=".concat(encodeURIComponent(this.data.text_body));
      }

      window.location.href = sms;
    }
  }]);

  return Sms;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/MessengerChat.js
function MessengerChat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerChat_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerChat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerChat_typeof(obj); }

function MessengerChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerChat_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerChat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerChat_setPrototypeOf(subClass, superClass); }

function MessengerChat_setPrototypeOf(o, p) { MessengerChat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerChat_setPrototypeOf(o, p); }

function MessengerChat_createSuper(Derived) { return function () { var Super = MessengerChat_getPrototypeOf(Derived), result; if (MessengerChat_isNativeReflectConstruct()) { var NewTarget = MessengerChat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerChat_possibleConstructorReturn(this, result); }; }

function MessengerChat_possibleConstructorReturn(self, call) { if (call && (MessengerChat_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerChat_assertThisInitialized(self); }

function MessengerChat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerChat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MessengerChat_getPrototypeOf(o) { MessengerChat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerChat_getPrototypeOf(o); }



var MessengerChat = /*#__PURE__*/function (_Action) {
  MessengerChat_inherits(MessengerChat, _Action);

  var _super = MessengerChat_createSuper(MessengerChat);

  function MessengerChat() {
    MessengerChat_classCallCheck(this, MessengerChat);

    return _super.apply(this, arguments);
  }

  MessengerChat_createClass(MessengerChat, [{
    key: "execute",
    value: function execute() {
      if (typeof window.Buttonizer.initializedFacebookChat !== "undefined" && document.querySelectorAll(".fb-customerchat").length > 0 && document.querySelector(".fb-customerchat").querySelector("iframe")) {
        if (document.querySelector(".fb-customerchat").querySelector("iframe").style.maxHeight === "0px" || document.querySelector(".fb-customerchat").style.display === "none") {
          FB.CustomerChat.showDialog();
        } else if (document.querySelector(".fb-customerchat").querySelector("iframe").style.maxHeight === "100%") {
          FB.CustomerChat.hideDialog();
        }
      } else {
        if (window.Buttonizer.previewInitialized) {
          window.Buttonizer.messageButtonizerAdminEditor("warning", "Facebook Messenger button is not found, it may be blocked or this domain is not allowed to load the Facebook widget.");
        } else {
          alert("Sorry, we were unable to open Facebook Messenger! Check the console for more information.");
        }
      }
    }
  }]);

  return MessengerChat;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/MessengerLink.js
function MessengerLink_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerLink_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerLink_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerLink_typeof(obj); }

function MessengerLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerLink_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerLink_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerLink_setPrototypeOf(subClass, superClass); }

function MessengerLink_setPrototypeOf(o, p) { MessengerLink_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerLink_setPrototypeOf(o, p); }

function MessengerLink_createSuper(Derived) { return function () { var Super = MessengerLink_getPrototypeOf(Derived), result; if (MessengerLink_isNativeReflectConstruct()) { var NewTarget = MessengerLink_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerLink_possibleConstructorReturn(this, result); }; }

function MessengerLink_possibleConstructorReturn(self, call) { if (call && (MessengerLink_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerLink_assertThisInitialized(self); }

function MessengerLink_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerLink_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MessengerLink_getPrototypeOf(o) { MessengerLink_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerLink_getPrototypeOf(o); }



var MessengerLink = /*#__PURE__*/function (_Action) {
  MessengerLink_inherits(MessengerLink, _Action);

  var _super = MessengerLink_createSuper(MessengerLink);

  function MessengerLink() {
    MessengerLink_classCallCheck(this, MessengerLink);

    return _super.apply(this, arguments);
  }

  MessengerLink_createClass(MessengerLink, [{
    key: "execute",
    value: function execute() {
      window.open(this.data.action);
    }
  }]);

  return MessengerLink;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/TwitterDm.js
function TwitterDm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TwitterDm_typeof = function _typeof(obj) { return typeof obj; }; } else { TwitterDm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TwitterDm_typeof(obj); }

function TwitterDm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TwitterDm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TwitterDm_createClass(Constructor, protoProps, staticProps) { if (protoProps) TwitterDm_defineProperties(Constructor.prototype, protoProps); if (staticProps) TwitterDm_defineProperties(Constructor, staticProps); return Constructor; }

function TwitterDm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TwitterDm_setPrototypeOf(subClass, superClass); }

function TwitterDm_setPrototypeOf(o, p) { TwitterDm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TwitterDm_setPrototypeOf(o, p); }

function TwitterDm_createSuper(Derived) { return function () { var Super = TwitterDm_getPrototypeOf(Derived), result; if (TwitterDm_isNativeReflectConstruct()) { var NewTarget = TwitterDm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TwitterDm_possibleConstructorReturn(this, result); }; }

function TwitterDm_possibleConstructorReturn(self, call) { if (call && (TwitterDm_typeof(call) === "object" || typeof call === "function")) { return call; } return TwitterDm_assertThisInitialized(self); }

function TwitterDm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TwitterDm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TwitterDm_getPrototypeOf(o) { TwitterDm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TwitterDm_getPrototypeOf(o); }




var TwitterDm_TwitterDm = /*#__PURE__*/function (_Action) {
  TwitterDm_inherits(TwitterDm, _Action);

  var _super = TwitterDm_createSuper(TwitterDm);

  function TwitterDm() {
    TwitterDm_classCallCheck(this, TwitterDm);

    return _super.apply(this, arguments);
  }

  TwitterDm_createClass(TwitterDm, [{
    key: "execute",
    value: function execute() {
      var body = dlv_umd_default()(this.data, "body", null);
      var dms = "https://twitter.com/messages/compose?recipient_id=".concat(this.data.action).concat(body ? "&text=" + encodeURIComponent(body) : "");
      window.open(dms);
    }
  }]);

  return TwitterDm;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Skype.js
function Skype_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Skype_typeof = function _typeof(obj) { return typeof obj; }; } else { Skype_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Skype_typeof(obj); }

function Skype_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Skype_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Skype_createClass(Constructor, protoProps, staticProps) { if (protoProps) Skype_defineProperties(Constructor.prototype, protoProps); if (staticProps) Skype_defineProperties(Constructor, staticProps); return Constructor; }

function Skype_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Skype_setPrototypeOf(subClass, superClass); }

function Skype_setPrototypeOf(o, p) { Skype_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Skype_setPrototypeOf(o, p); }

function Skype_createSuper(Derived) { return function () { var Super = Skype_getPrototypeOf(Derived), result; if (Skype_isNativeReflectConstruct()) { var NewTarget = Skype_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Skype_possibleConstructorReturn(this, result); }; }

function Skype_possibleConstructorReturn(self, call) { if (call && (Skype_typeof(call) === "object" || typeof call === "function")) { return call; } return Skype_assertThisInitialized(self); }

function Skype_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Skype_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Skype_getPrototypeOf(o) { Skype_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Skype_getPrototypeOf(o); }



var Skype = /*#__PURE__*/function (_Action) {
  Skype_inherits(Skype, _Action);

  var _super = Skype_createSuper(Skype);

  function Skype() {
    Skype_classCallCheck(this, Skype);

    return _super.apply(this, arguments);
  }

  Skype_createClass(Skype, [{
    key: "execute",
    value: function execute() {
      window.location.href = "skype:".concat(this.data.action, "?chat");
    }
  }]);

  return Skype;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Line.js
function Line_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Line_typeof = function _typeof(obj) { return typeof obj; }; } else { Line_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Line_typeof(obj); }

function Line_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Line_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Line_createClass(Constructor, protoProps, staticProps) { if (protoProps) Line_defineProperties(Constructor.prototype, protoProps); if (staticProps) Line_defineProperties(Constructor, staticProps); return Constructor; }

function Line_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Line_setPrototypeOf(subClass, superClass); }

function Line_setPrototypeOf(o, p) { Line_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Line_setPrototypeOf(o, p); }

function Line_createSuper(Derived) { return function () { var Super = Line_getPrototypeOf(Derived), result; if (Line_isNativeReflectConstruct()) { var NewTarget = Line_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Line_possibleConstructorReturn(this, result); }; }

function Line_possibleConstructorReturn(self, call) { if (call && (Line_typeof(call) === "object" || typeof call === "function")) { return call; } return Line_assertThisInitialized(self); }

function Line_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Line_getPrototypeOf(o) { Line_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Line_getPrototypeOf(o); }



var Line = /*#__PURE__*/function (_Action) {
  Line_inherits(Line, _Action);

  var _super = Line_createSuper(Line);

  function Line() {
    Line_classCallCheck(this, Line);

    return _super.apply(this, arguments);
  }

  Line_createClass(Line, [{
    key: "execute",
    value: function execute() {
      window.open("https://line.me/ti/p/~".concat(this.data.action));
    }
  }]);

  return Line;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Telegram.js
function Telegram_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Telegram_typeof = function _typeof(obj) { return typeof obj; }; } else { Telegram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Telegram_typeof(obj); }

function Telegram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Telegram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Telegram_createClass(Constructor, protoProps, staticProps) { if (protoProps) Telegram_defineProperties(Constructor.prototype, protoProps); if (staticProps) Telegram_defineProperties(Constructor, staticProps); return Constructor; }

function Telegram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Telegram_setPrototypeOf(subClass, superClass); }

function Telegram_setPrototypeOf(o, p) { Telegram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Telegram_setPrototypeOf(o, p); }

function Telegram_createSuper(Derived) { return function () { var Super = Telegram_getPrototypeOf(Derived), result; if (Telegram_isNativeReflectConstruct()) { var NewTarget = Telegram_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Telegram_possibleConstructorReturn(this, result); }; }

function Telegram_possibleConstructorReturn(self, call) { if (call && (Telegram_typeof(call) === "object" || typeof call === "function")) { return call; } return Telegram_assertThisInitialized(self); }

function Telegram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Telegram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Telegram_getPrototypeOf(o) { Telegram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Telegram_getPrototypeOf(o); }



var Telegram = /*#__PURE__*/function (_Action) {
  Telegram_inherits(Telegram, _Action);

  var _super = Telegram_createSuper(Telegram);

  function Telegram() {
    Telegram_classCallCheck(this, Telegram);

    return _super.apply(this, arguments);
  }

  Telegram_createClass(Telegram, [{
    key: "execute",
    value: function execute() {
      window.open("https://telegram.me/".concat(this.data.action));
    }
  }]);

  return Telegram;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Viber.js
function Viber_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Viber_typeof = function _typeof(obj) { return typeof obj; }; } else { Viber_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Viber_typeof(obj); }

function Viber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Viber_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Viber_createClass(Constructor, protoProps, staticProps) { if (protoProps) Viber_defineProperties(Constructor.prototype, protoProps); if (staticProps) Viber_defineProperties(Constructor, staticProps); return Constructor; }

function Viber_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Viber_setPrototypeOf(subClass, superClass); }

function Viber_setPrototypeOf(o, p) { Viber_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Viber_setPrototypeOf(o, p); }

function Viber_createSuper(Derived) { return function () { var Super = Viber_getPrototypeOf(Derived), result; if (Viber_isNativeReflectConstruct()) { var NewTarget = Viber_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Viber_possibleConstructorReturn(this, result); }; }

function Viber_possibleConstructorReturn(self, call) { if (call && (Viber_typeof(call) === "object" || typeof call === "function")) { return call; } return Viber_assertThisInitialized(self); }

function Viber_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Viber_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Viber_getPrototypeOf(o) { Viber_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Viber_getPrototypeOf(o); }



var Viber = /*#__PURE__*/function (_Action) {
  Viber_inherits(Viber, _Action);

  var _super = Viber_createSuper(Viber);

  function Viber() {
    Viber_classCallCheck(this, Viber);

    return _super.apply(this, arguments);
  }

  Viber_createClass(Viber, [{
    key: "execute",
    value: function execute() {
      window.location.href = "viber://chat?number=".concat(this.data.action);
    }
  }]);

  return Viber;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Facebook.js
function Facebook_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Facebook_typeof = function _typeof(obj) { return typeof obj; }; } else { Facebook_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Facebook_typeof(obj); }

function Facebook_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Facebook_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Facebook_createClass(Constructor, protoProps, staticProps) { if (protoProps) Facebook_defineProperties(Constructor.prototype, protoProps); if (staticProps) Facebook_defineProperties(Constructor, staticProps); return Constructor; }

function Facebook_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Facebook_setPrototypeOf(subClass, superClass); }

function Facebook_setPrototypeOf(o, p) { Facebook_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Facebook_setPrototypeOf(o, p); }

function Facebook_createSuper(Derived) { return function () { var Super = Facebook_getPrototypeOf(Derived), result; if (Facebook_isNativeReflectConstruct()) { var NewTarget = Facebook_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Facebook_possibleConstructorReturn(this, result); }; }

function Facebook_possibleConstructorReturn(self, call) { if (call && (Facebook_typeof(call) === "object" || typeof call === "function")) { return call; } return Facebook_assertThisInitialized(self); }

function Facebook_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Facebook_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Facebook_getPrototypeOf(o) { Facebook_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Facebook_getPrototypeOf(o); }



var Facebook = /*#__PURE__*/function (_Action) {
  Facebook_inherits(Facebook, _Action);

  var _super = Facebook_createSuper(Facebook);

  function Facebook() {
    Facebook_classCallCheck(this, Facebook);

    return _super.apply(this, arguments);
  }

  Facebook_createClass(Facebook, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.facebook.com/".concat(this.data.action));
    }
  }]);

  return Facebook;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Twitter.js
function Twitter_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Twitter_typeof = function _typeof(obj) { return typeof obj; }; } else { Twitter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Twitter_typeof(obj); }

function Twitter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Twitter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Twitter_createClass(Constructor, protoProps, staticProps) { if (protoProps) Twitter_defineProperties(Constructor.prototype, protoProps); if (staticProps) Twitter_defineProperties(Constructor, staticProps); return Constructor; }

function Twitter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Twitter_setPrototypeOf(subClass, superClass); }

function Twitter_setPrototypeOf(o, p) { Twitter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Twitter_setPrototypeOf(o, p); }

function Twitter_createSuper(Derived) { return function () { var Super = Twitter_getPrototypeOf(Derived), result; if (Twitter_isNativeReflectConstruct()) { var NewTarget = Twitter_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Twitter_possibleConstructorReturn(this, result); }; }

function Twitter_possibleConstructorReturn(self, call) { if (call && (Twitter_typeof(call) === "object" || typeof call === "function")) { return call; } return Twitter_assertThisInitialized(self); }

function Twitter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Twitter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Twitter_getPrototypeOf(o) { Twitter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Twitter_getPrototypeOf(o); }



var Twitter = /*#__PURE__*/function (_Action) {
  Twitter_inherits(Twitter, _Action);

  var _super = Twitter_createSuper(Twitter);

  function Twitter() {
    Twitter_classCallCheck(this, Twitter);

    return _super.apply(this, arguments);
  }

  Twitter_createClass(Twitter, [{
    key: "execute",
    value: function execute() {
      window.open("https://twitter.com/".concat(this.data.action));
    }
  }]);

  return Twitter;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Instagram.js
function Instagram_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Instagram_typeof = function _typeof(obj) { return typeof obj; }; } else { Instagram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Instagram_typeof(obj); }

function Instagram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Instagram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Instagram_createClass(Constructor, protoProps, staticProps) { if (protoProps) Instagram_defineProperties(Constructor.prototype, protoProps); if (staticProps) Instagram_defineProperties(Constructor, staticProps); return Constructor; }

function Instagram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Instagram_setPrototypeOf(subClass, superClass); }

function Instagram_setPrototypeOf(o, p) { Instagram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Instagram_setPrototypeOf(o, p); }

function Instagram_createSuper(Derived) { return function () { var Super = Instagram_getPrototypeOf(Derived), result; if (Instagram_isNativeReflectConstruct()) { var NewTarget = Instagram_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Instagram_possibleConstructorReturn(this, result); }; }

function Instagram_possibleConstructorReturn(self, call) { if (call && (Instagram_typeof(call) === "object" || typeof call === "function")) { return call; } return Instagram_assertThisInitialized(self); }

function Instagram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Instagram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Instagram_getPrototypeOf(o) { Instagram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Instagram_getPrototypeOf(o); }



var Instagram = /*#__PURE__*/function (_Action) {
  Instagram_inherits(Instagram, _Action);

  var _super = Instagram_createSuper(Instagram);

  function Instagram() {
    Instagram_classCallCheck(this, Instagram);

    return _super.apply(this, arguments);
  }

  Instagram_createClass(Instagram, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.instagram.com/".concat(this.data.action));
    }
  }]);

  return Instagram;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Snapchat.js
function Snapchat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Snapchat_typeof = function _typeof(obj) { return typeof obj; }; } else { Snapchat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Snapchat_typeof(obj); }

function Snapchat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Snapchat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Snapchat_createClass(Constructor, protoProps, staticProps) { if (protoProps) Snapchat_defineProperties(Constructor.prototype, protoProps); if (staticProps) Snapchat_defineProperties(Constructor, staticProps); return Constructor; }

function Snapchat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Snapchat_setPrototypeOf(subClass, superClass); }

function Snapchat_setPrototypeOf(o, p) { Snapchat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Snapchat_setPrototypeOf(o, p); }

function Snapchat_createSuper(Derived) { return function () { var Super = Snapchat_getPrototypeOf(Derived), result; if (Snapchat_isNativeReflectConstruct()) { var NewTarget = Snapchat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Snapchat_possibleConstructorReturn(this, result); }; }

function Snapchat_possibleConstructorReturn(self, call) { if (call && (Snapchat_typeof(call) === "object" || typeof call === "function")) { return call; } return Snapchat_assertThisInitialized(self); }

function Snapchat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Snapchat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Snapchat_getPrototypeOf(o) { Snapchat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Snapchat_getPrototypeOf(o); }



var Snapchat = /*#__PURE__*/function (_Action) {
  Snapchat_inherits(Snapchat, _Action);

  var _super = Snapchat_createSuper(Snapchat);

  function Snapchat() {
    Snapchat_classCallCheck(this, Snapchat);

    return _super.apply(this, arguments);
  }

  Snapchat_createClass(Snapchat, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.snapchat.com/add/".concat(this.data.action));
    }
  }]);

  return Snapchat;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Linkedin.js
function Linkedin_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Linkedin_typeof = function _typeof(obj) { return typeof obj; }; } else { Linkedin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Linkedin_typeof(obj); }

function Linkedin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Linkedin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Linkedin_createClass(Constructor, protoProps, staticProps) { if (protoProps) Linkedin_defineProperties(Constructor.prototype, protoProps); if (staticProps) Linkedin_defineProperties(Constructor, staticProps); return Constructor; }

function Linkedin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Linkedin_setPrototypeOf(subClass, superClass); }

function Linkedin_setPrototypeOf(o, p) { Linkedin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Linkedin_setPrototypeOf(o, p); }

function Linkedin_createSuper(Derived) { return function () { var Super = Linkedin_getPrototypeOf(Derived), result; if (Linkedin_isNativeReflectConstruct()) { var NewTarget = Linkedin_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Linkedin_possibleConstructorReturn(this, result); }; }

function Linkedin_possibleConstructorReturn(self, call) { if (call && (Linkedin_typeof(call) === "object" || typeof call === "function")) { return call; } return Linkedin_assertThisInitialized(self); }

function Linkedin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Linkedin_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Linkedin_getPrototypeOf(o) { Linkedin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Linkedin_getPrototypeOf(o); }



var Linkedin_Snapchat = /*#__PURE__*/function (_Action) {
  Linkedin_inherits(Snapchat, _Action);

  var _super = Linkedin_createSuper(Snapchat);

  function Snapchat() {
    Linkedin_classCallCheck(this, Snapchat);

    return _super.apply(this, arguments);
  }

  Linkedin_createClass(Snapchat, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.linkedin.com/".concat(this.data.action));
    }
  }]);

  return Snapchat;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Vk.js
function Vk_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Vk_typeof = function _typeof(obj) { return typeof obj; }; } else { Vk_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Vk_typeof(obj); }

function Vk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vk_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vk_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vk_defineProperties(Constructor, staticProps); return Constructor; }

function Vk_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Vk_setPrototypeOf(subClass, superClass); }

function Vk_setPrototypeOf(o, p) { Vk_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Vk_setPrototypeOf(o, p); }

function Vk_createSuper(Derived) { return function () { var Super = Vk_getPrototypeOf(Derived), result; if (Vk_isNativeReflectConstruct()) { var NewTarget = Vk_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Vk_possibleConstructorReturn(this, result); }; }

function Vk_possibleConstructorReturn(self, call) { if (call && (Vk_typeof(call) === "object" || typeof call === "function")) { return call; } return Vk_assertThisInitialized(self); }

function Vk_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Vk_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Vk_getPrototypeOf(o) { Vk_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Vk_getPrototypeOf(o); }



var Vk = /*#__PURE__*/function (_Action) {
  Vk_inherits(Vk, _Action);

  var _super = Vk_createSuper(Vk);

  function Vk() {
    Vk_classCallCheck(this, Vk);

    return _super.apply(this, arguments);
  }

  Vk_createClass(Vk, [{
    key: "execute",
    value: function execute() {
      window.open("https://vk.me/".concat(this.data.action));
    }
  }]);

  return Vk;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Waze.js
function Waze_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Waze_typeof = function _typeof(obj) { return typeof obj; }; } else { Waze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Waze_typeof(obj); }

function Waze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Waze_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Waze_createClass(Constructor, protoProps, staticProps) { if (protoProps) Waze_defineProperties(Constructor.prototype, protoProps); if (staticProps) Waze_defineProperties(Constructor, staticProps); return Constructor; }

function Waze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Waze_setPrototypeOf(subClass, superClass); }

function Waze_setPrototypeOf(o, p) { Waze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Waze_setPrototypeOf(o, p); }

function Waze_createSuper(Derived) { return function () { var Super = Waze_getPrototypeOf(Derived), result; if (Waze_isNativeReflectConstruct()) { var NewTarget = Waze_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Waze_possibleConstructorReturn(this, result); }; }

function Waze_possibleConstructorReturn(self, call) { if (call && (Waze_typeof(call) === "object" || typeof call === "function")) { return call; } return Waze_assertThisInitialized(self); }

function Waze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Waze_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Waze_getPrototypeOf(o) { Waze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Waze_getPrototypeOf(o); }



var Waze = /*#__PURE__*/function (_Action) {
  Waze_inherits(Waze, _Action);

  var _super = Waze_createSuper(Waze);

  function Waze() {
    Waze_classCallCheck(this, Waze);

    return _super.apply(this, arguments);
  }

  Waze_createClass(Waze, [{
    key: "execute",
    value: function execute() {
      window.location.href = this.data.action;
    }
  }]);

  return Waze;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/ElementorPopup.js
function ElementorPopup_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ElementorPopup_typeof = function _typeof(obj) { return typeof obj; }; } else { ElementorPopup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ElementorPopup_typeof(obj); }

function ElementorPopup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ElementorPopup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ElementorPopup_createClass(Constructor, protoProps, staticProps) { if (protoProps) ElementorPopup_defineProperties(Constructor.prototype, protoProps); if (staticProps) ElementorPopup_defineProperties(Constructor, staticProps); return Constructor; }

function ElementorPopup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ElementorPopup_setPrototypeOf(subClass, superClass); }

function ElementorPopup_setPrototypeOf(o, p) { ElementorPopup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ElementorPopup_setPrototypeOf(o, p); }

function ElementorPopup_createSuper(Derived) { return function () { var Super = ElementorPopup_getPrototypeOf(Derived), result; if (ElementorPopup_isNativeReflectConstruct()) { var NewTarget = ElementorPopup_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ElementorPopup_possibleConstructorReturn(this, result); }; }

function ElementorPopup_possibleConstructorReturn(self, call) { if (call && (ElementorPopup_typeof(call) === "object" || typeof call === "function")) { return call; } return ElementorPopup_assertThisInitialized(self); }

function ElementorPopup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ElementorPopup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ElementorPopup_getPrototypeOf(o) { ElementorPopup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ElementorPopup_getPrototypeOf(o); }



var ElementorPopup = /*#__PURE__*/function (_Action) {
  ElementorPopup_inherits(ElementorPopup, _Action);

  var _super = ElementorPopup_createSuper(ElementorPopup);

  function ElementorPopup() {
    ElementorPopup_classCallCheck(this, ElementorPopup);

    return _super.apply(this, arguments);
  }

  ElementorPopup_createClass(ElementorPopup, [{
    key: "href",
    value: function href() {
      return "#" + this.data.action;
    }
  }]);

  return ElementorPopup;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/PopupMaker.js
function PopupMaker_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PopupMaker_typeof = function _typeof(obj) { return typeof obj; }; } else { PopupMaker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PopupMaker_typeof(obj); }

function PopupMaker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupMaker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupMaker_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupMaker_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupMaker_defineProperties(Constructor, staticProps); return Constructor; }

function PopupMaker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PopupMaker_setPrototypeOf(subClass, superClass); }

function PopupMaker_setPrototypeOf(o, p) { PopupMaker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupMaker_setPrototypeOf(o, p); }

function PopupMaker_createSuper(Derived) { return function () { var Super = PopupMaker_getPrototypeOf(Derived), result; if (PopupMaker_isNativeReflectConstruct()) { var NewTarget = PopupMaker_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupMaker_possibleConstructorReturn(this, result); }; }

function PopupMaker_possibleConstructorReturn(self, call) { if (call && (PopupMaker_typeof(call) === "object" || typeof call === "function")) { return call; } return PopupMaker_assertThisInitialized(self); }

function PopupMaker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PopupMaker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function PopupMaker_getPrototypeOf(o) { PopupMaker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupMaker_getPrototypeOf(o); }



var PopupMaker = /*#__PURE__*/function (_Action) {
  PopupMaker_inherits(PopupMaker, _Action);

  var _super = PopupMaker_createSuper(PopupMaker);

  function PopupMaker() {
    PopupMaker_classCallCheck(this, PopupMaker);

    return _super.apply(this, arguments);
  }

  PopupMaker_createClass(PopupMaker, [{
    key: "href",
    value: function href() {
      return "#" + this.data.action;
    }
  }]);

  return PopupMaker;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Popups.js
function Popups_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Popups_typeof = function _typeof(obj) { return typeof obj; }; } else { Popups_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Popups_typeof(obj); }

function Popups_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Popups_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Popups_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popups_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popups_defineProperties(Constructor, staticProps); return Constructor; }

function Popups_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Popups_setPrototypeOf(subClass, superClass); }

function Popups_setPrototypeOf(o, p) { Popups_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Popups_setPrototypeOf(o, p); }

function Popups_createSuper(Derived) { return function () { var Super = Popups_getPrototypeOf(Derived), result; if (Popups_isNativeReflectConstruct()) { var NewTarget = Popups_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Popups_possibleConstructorReturn(this, result); }; }

function Popups_possibleConstructorReturn(self, call) { if (call && (Popups_typeof(call) === "object" || typeof call === "function")) { return call; } return Popups_assertThisInitialized(self); }

function Popups_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Popups_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Popups_getPrototypeOf(o) { Popups_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Popups_getPrototypeOf(o); }



var Popups = /*#__PURE__*/function (_Action) {
  Popups_inherits(Popups, _Action);

  var _super = Popups_createSuper(Popups);

  function Popups() {
    Popups_classCallCheck(this, Popups);

    return _super.apply(this, arguments);
  }

  Popups_createClass(Popups, [{
    key: "execute",
    value: function execute() {
      if (!window.SPU) return;
      var remove = this.data.action; // is NaN

      if (isNaN(remove)) {
        remove = remove.replace(/\D/g, "");
      } // Show popup


      window.SPU.show(remove);
    }
  }]);

  return Popups;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Print.js
function Print_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Print_typeof = function _typeof(obj) { return typeof obj; }; } else { Print_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Print_typeof(obj); }

function Print_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Print_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Print_createClass(Constructor, protoProps, staticProps) { if (protoProps) Print_defineProperties(Constructor.prototype, protoProps); if (staticProps) Print_defineProperties(Constructor, staticProps); return Constructor; }

function Print_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Print_setPrototypeOf(subClass, superClass); }

function Print_setPrototypeOf(o, p) { Print_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Print_setPrototypeOf(o, p); }

function Print_createSuper(Derived) { return function () { var Super = Print_getPrototypeOf(Derived), result; if (Print_isNativeReflectConstruct()) { var NewTarget = Print_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Print_possibleConstructorReturn(this, result); }; }

function Print_possibleConstructorReturn(self, call) { if (call && (Print_typeof(call) === "object" || typeof call === "function")) { return call; } return Print_assertThisInitialized(self); }

function Print_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Print_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Print_getPrototypeOf(o) { Print_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Print_getPrototypeOf(o); }



var Print_PopupMaker = /*#__PURE__*/function (_Action) {
  Print_inherits(PopupMaker, _Action);

  var _super = Print_createSuper(PopupMaker);

  function PopupMaker() {
    Print_classCallCheck(this, PopupMaker);

    return _super.apply(this, arguments);
  }

  Print_createClass(PopupMaker, [{
    key: "execute",
    value: function execute() {
      window.print();
    }
  }]);

  return PopupMaker;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Clipboard.js
function Clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { Clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Clipboard_typeof(obj); }

function Clipboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function Clipboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Clipboard_setPrototypeOf(subClass, superClass); }

function Clipboard_setPrototypeOf(o, p) { Clipboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clipboard_setPrototypeOf(o, p); }

function Clipboard_createSuper(Derived) { return function () { var Super = Clipboard_getPrototypeOf(Derived), result; if (Clipboard_isNativeReflectConstruct()) { var NewTarget = Clipboard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Clipboard_possibleConstructorReturn(this, result); }; }

function Clipboard_possibleConstructorReturn(self, call) { if (call && (Clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return Clipboard_assertThisInitialized(self); }

function Clipboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Clipboard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Clipboard_getPrototypeOf(o) { Clipboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Clipboard_getPrototypeOf(o); }



var Clipboard_PopupMaker = /*#__PURE__*/function (_Action) {
  Clipboard_inherits(PopupMaker, _Action);

  var _super = Clipboard_createSuper(PopupMaker);

  function PopupMaker() {
    Clipboard_classCallCheck(this, PopupMaker);

    return _super.apply(this, arguments);
  }

  Clipboard_createClass(PopupMaker, [{
    key: "execute",
    value: function execute() {
      this.copyClipboard();
    }
  }, {
    key: "copyClipboard",
    value: function copyClipboard() {
      var _buttonizerLabelP;

      var dummy = document.createElement("input"),
          text = window.location.href; // Create input and copy value.

      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      var label = document.createElement("div");
      label.className = "buttonizer-label-popup";
      label.innerText = "Copied!"; // Position label left or right and add animation

      var horizontalProperty = this.data.horizontal[0];
      this.stylesheet.update({
        label: {
          "&.buttonizer-label-popup": (_buttonizerLabelP = {}, Clipboard_defineProperty(_buttonizerLabelP, horizontalProperty, "65px"), Clipboard_defineProperty(_buttonizerLabelP, "animation", "fadeOut 1.5s linear 1 normal forwards"), _buttonizerLabelP)
        }
      });
      this.stylesheet.addRule({
        "@keyframes fadeOut": {
          "0%": {
            opacity: 0
          },
          "5%": {
            opacity: 1
          },
          "50%": {
            opacity: 1
          },
          "80%": {
            opacity: 0.6
          },
          "100%": {
            opacity: 0
          }
        }
      });
      label.classList.add(this.stylesheet.classes.label);
      this.button.appendChild(label); // remove label

      setTimeout(function () {
        label.remove();
      }, 2000);
    }
  }]);

  return PopupMaker;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Poptin.js
function Poptin_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Poptin_typeof = function _typeof(obj) { return typeof obj; }; } else { Poptin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Poptin_typeof(obj); }

function Poptin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Poptin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Poptin_createClass(Constructor, protoProps, staticProps) { if (protoProps) Poptin_defineProperties(Constructor.prototype, protoProps); if (staticProps) Poptin_defineProperties(Constructor, staticProps); return Constructor; }

function Poptin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Poptin_setPrototypeOf(subClass, superClass); }

function Poptin_setPrototypeOf(o, p) { Poptin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Poptin_setPrototypeOf(o, p); }

function Poptin_createSuper(Derived) { return function () { var Super = Poptin_getPrototypeOf(Derived), result; if (Poptin_isNativeReflectConstruct()) { var NewTarget = Poptin_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Poptin_possibleConstructorReturn(this, result); }; }

function Poptin_possibleConstructorReturn(self, call) { if (call && (Poptin_typeof(call) === "object" || typeof call === "function")) { return call; } return Poptin_assertThisInitialized(self); }

function Poptin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Poptin_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Poptin_getPrototypeOf(o) { Poptin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Poptin_getPrototypeOf(o); }



var Poptin = /*#__PURE__*/function (_Action) {
  Poptin_inherits(Poptin, _Action);

  var _super = Poptin_createSuper(Poptin);

  function Poptin() {
    Poptin_classCallCheck(this, Poptin);

    return _super.apply(this, arguments);
  }

  Poptin_createClass(Poptin, [{
    key: "href",
    value: function href() {
      return this.data.action;
    }
  }]);

  return Poptin;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Utils/buttonizerInPreview.js
function buttonizerInPreview_inPreview() {
  if (typeof buttonizer_ajax === "undefined" || !buttonizer_ajax) return false;
  return buttonizer_ajax.in_preview === "1";
}
// EXTERNAL MODULE: ./utils/cookies.js
var cookies = __webpack_require__(71);

// CONCATENATED MODULE: ./src/js/frontend/Utils/groupOpened.js



function getOpenedGroups() {
  var openedGroups = Object(cookies["a" /* getCookie */])("buttonizer_".concat(buttonizerInPreview_inPreview() ? "dashboard" : "live", "_groups_opened")); // Parse opened groups

  if (openedGroups) {
    return JSON.parse(openedGroups);
  } // No remembered group status


  return {};
} // Check if group is opened


function getGroupOpened(groupId) {
  var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var openedGroups = getOpenedGroups();
  return typeof openedGroups[groupId] !== "undefined" ? openedGroups[groupId] : defaultStatus;
} // Update cookie

function setGroupOpened(id) {
  var opened = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var openedGroups = getOpenedGroups();
  openedGroups[id] = opened; // Update cookie

  Object(cookies["b" /* setCookie */])("buttonizer_".concat(buttonizerInPreview_inPreview() ? "dashboard" : "live", "_groups_opened"), JSON.stringify(openedGroups));
  return null;
}
// CONCATENATED MODULE: ./src/js/frontend/Utils/GoogleAnalyticsEvent.js
function GoogleAnalyticsEvent_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoogleAnalyticsEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { GoogleAnalyticsEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoogleAnalyticsEvent_typeof(obj); }

/**
 * Google analytics event
 *
 * @param object
 */
function googleAnalyticsEvent(object) {
  if (!window.Buttonizer.allowGoogleAnalyticsTracking) return;

  if (typeof ga === "function" || typeof gtag === "function" || GoogleAnalyticsEvent_typeof(window.dataLayer) === "object" && typeof window.dataLayer.push === "function") {
    var actionData = {}; // Opening or closing a group

    if (object.type === "group-open-close") {
      actionData.groupName = object.name;
      actionData.action = object.interaction;
    } else if (object.type === "button-click") {
      actionData.groupName = object.groupName;
      actionData.action = "Clicked button: " + object.buttonName;
    } // Gtag support


    if ("gtag" in window && typeof gtag === "function") {
      // Work with Google Tag Manager
      gtag("event", "Buttonizer", {
        event_category: "Buttonizer group: " + actionData.groupName,
        event_action: actionData.action,
        event_label: document.title,
        page_url: document.location.href
      });
    } else if ("ga" in window) {
      try {
        // Fallback to tracker
        var tracker = ga.getAll()[0];

        if (tracker) {
          tracker.send("event", "Buttonizer group: " + actionData.groupName, actionData.action, document.title);
        } else {
          throw "No tracker found";
        }
      } catch (e) {
        console.error("Buttonizer Google Analytics: Last try to push to Google Analytics.");
        console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17"); // Fallback to old Google Analytics

        ga("send", "event", {
          eventCategory: "Buttonizer group: " + actionData.groupName,
          eventAction: actionData.action,
          eventLabel: document.title
        });
      }
    } else {
      console.error("Buttonizer Google Analytics: Unable to push data to Google Analytics");
      console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17");
    }
  }
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/OpenGroup.js
function OpenGroup_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OpenGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { OpenGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OpenGroup_typeof(obj); }

function OpenGroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OpenGroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OpenGroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) OpenGroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) OpenGroup_defineProperties(Constructor, staticProps); return Constructor; }

function OpenGroup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OpenGroup_setPrototypeOf(subClass, superClass); }

function OpenGroup_setPrototypeOf(o, p) { OpenGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OpenGroup_setPrototypeOf(o, p); }

function OpenGroup_createSuper(Derived) { return function () { var Super = OpenGroup_getPrototypeOf(Derived), result; if (OpenGroup_isNativeReflectConstruct()) { var NewTarget = OpenGroup_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return OpenGroup_possibleConstructorReturn(this, result); }; }

function OpenGroup_possibleConstructorReturn(self, call) { if (call && (OpenGroup_typeof(call) === "object" || typeof call === "function")) { return call; } return OpenGroup_assertThisInitialized(self); }

function OpenGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OpenGroup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function OpenGroup_getPrototypeOf(o) { OpenGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OpenGroup_getPrototypeOf(o); }






var OpenGroup_OpenGroup = /*#__PURE__*/function (_Action) {
  OpenGroup_inherits(OpenGroup, _Action);

  var _super = OpenGroup_createSuper(OpenGroup);

  function OpenGroup(_ref) {
    var _this;

    var buttons = _ref.buttons,
        _ref$groupName = _ref.groupName,
        groupName = _ref$groupName === void 0 ? "" : _ref$groupName,
        _ref$startOpened = _ref.startOpened,
        startOpened = _ref$startOpened === void 0 ? false : _ref$startOpened,
        groupId = _ref.groupId;

    OpenGroup_classCallCheck(this, OpenGroup);

    _this = _super.call(this);
    _this.buttons = buttons;
    _this.groupId = groupId;
    _this.startOpened = startOpened;
    _this.groupName = groupName;
    _this.opened; // Only open group

    if (startOpened === true && getGroupOpened(groupId, true) === true || buttonizerInPreview_inPreview() && getGroupOpened(groupId) === true) {
      _this.open(false);
    } else _this.close(false);

    return _this;
  } // On button click


  OpenGroup_createClass(OpenGroup, [{
    key: "execute",
    value: function execute() {
      this.toggle();
    } // Open group

  }, {
    key: "open",
    value: function open() {
      var updateCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.Buttonizer.activateHook("buttonizer_group_opened", {
        open: true,
        group_id: this.groupId
      }); // Send Google Analytics event

      googleAnalyticsEvent({
        type: "group-open-close",
        name: this.groupName,
        interaction: "open"
      });
      this.buttons.forEach(function (button) {
        var openedClass = button.stylesheet.classes.opened;
        var closedClass = button.stylesheet.classes.closed;

        if (openedClass && !button.element.classList.contains(openedClass)) {
          button.element.classList.add(openedClass);
        }

        if (closedClass && button.element.classList.contains(closedClass)) {
          button.element.classList.remove(closedClass);
        }
      }); // Update group cookie

      if (updateCookie) {
        setGroupOpened(this.groupId, true);
      }

      this.opened = true;
    } // Close group

  }, {
    key: "close",
    value: function close() {
      var updateCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.Buttonizer.activateHook("buttonizer_group_opened", {
        open: false,
        group_id: this.groupId
      }); // Send Google Analytics event

      googleAnalyticsEvent({
        type: "group-open-close",
        name: this.groupName,
        interaction: "close"
      });
      this.buttons.forEach(function (button) {
        var openedClass = button.stylesheet.classes.opened;
        var closedClass = button.stylesheet.classes.closed;

        if (openedClass && button.element.classList.contains(openedClass)) {
          button.element.classList.remove(openedClass);
        }

        if (closedClass && !button.element.classList.contains(closedClass)) {
          button.element.classList.add(closedClass);
        }
      }); // Update group cookie

      if (updateCookie) {
        setGroupOpened(this.groupId, false);
      }

      this.opened = false;
    } // Toggle group

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    } // Return status

  }, {
    key: "isOpened",
    value: function isOpened() {
      return this.opened;
    }
  }]);

  return OpenGroup;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Facebook.js
function Facebook_Facebook() {
  window.open("http://www.facebook.com/sharer.php?u=" + document.location.href + "&t=" + document.title + "", "popupFacebook", "width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0");
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Twitter.js
function Twitter_Twitter() {
  window.open("https://twitter.com/intent/tweet?text=" + encodeURI(document.title) + " Hey! Check out this link:" + "&url=" + document.location.href + "", "popupTwitter", "width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0");
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Whatsapp.js
function Whatsapp() {
  window.open("https://api.whatsapp.com/send?text=" + encodeURI(document.title + " Hey! Check out this link:" + document.location.href));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Linkedin.js
function Linkedin() {
  window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + document.location.href + "&title=" + encodeURI(document.title) + "&summary=" + encodeURI(document.title) + "", "popupLinkedIn", "width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0");
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Pinterest.js
function Pinterest() {
  window.open("http://pinterest.com/pin/create/button/?url=".concat(document.location.href));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Mail.js
function Socials_Mail_Mail() {
  window.location.href = "mailto:?subject=".concat(encodeURI(document.title.replace(/&/g, "").trim()), "&body=").concat(encodeURIComponent("Hey! Check out this link: "), " ").concat(encodeURI(document.location.href.replace(/&/g, "").trim()));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Reddit.js
function Reddit_Twitter() {
  var reddit = "https://www.reddit.com/submit?url=".concat(encodeURI("Hey! Check out this link: " + document.location.href), "&title=").concat(encodeURI(document.title));
  window.open(reddit);
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Tumblr.js
function Tumblr() {
  window.open("https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=".concat(encodeURI(document.location.href), "&posttype=link"));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Weibo.js
function Weibo() {
  window.open("http://service.weibo.com/share/share.php?url=".concat(encodeURI(document.location.href), "&title=").concat(encodeURI(document.title), "&pic=https://plus.google.com/_/favicon?domain=").concat(document.location.origin));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Vk.js
function Vk_Twitter() {
  window.open("https://vk.com/share.php?url=".concat(encodeURI(document.location.href), "&title=").concat(encodeURI(document.title), "&comment=Hey%20Check%20this%20out!"));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Ok.js
function Ok() {
  window.open("https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=".concat(encodeURI(document.location.href)));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Xing.js
function Xing() {
  window.open("https://www.xing.com/spi/shares/new?url=".concat(encodeURI(document.location.href)));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Blogger.js
function Blogger() {
  window.open("https://www.blogger.com/blog-this.g?u=".concat(encodeURI(document.location.href), "&n=").concat(encodeURI(document.title), "&t=Check%20this%20out!"));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/Flipboard.js
function Flipboard() {
  window.open("https://share.flipboard.com/bookmarklet/popout?v=2&title=".concat(encodeURI(document.title), "&url=").concat(encodeURI(document.location.href)));
}
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Socials/index.js














/* harmony default export */ var Socials = ({
  facebook: Facebook_Facebook,
  twitter: Twitter_Twitter,
  whatsapp: Whatsapp,
  linkedin: Linkedin,
  pinterest: Pinterest,
  mail: Socials_Mail_Mail,
  reddit: Reddit_Twitter,
  tumblr: Tumblr,
  weibo: Weibo,
  vk: Vk_Twitter,
  ok: Ok,
  xing: Xing,
  blogger: Blogger,
  flipboard: Flipboard
});
// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/SocialSharing.js
function SocialSharing_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SocialSharing_typeof = function _typeof(obj) { return typeof obj; }; } else { SocialSharing_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SocialSharing_typeof(obj); }

function SocialSharing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SocialSharing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SocialSharing_createClass(Constructor, protoProps, staticProps) { if (protoProps) SocialSharing_defineProperties(Constructor.prototype, protoProps); if (staticProps) SocialSharing_defineProperties(Constructor, staticProps); return Constructor; }

function SocialSharing_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SocialSharing_setPrototypeOf(subClass, superClass); }

function SocialSharing_setPrototypeOf(o, p) { SocialSharing_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SocialSharing_setPrototypeOf(o, p); }

function SocialSharing_createSuper(Derived) { return function () { var Super = SocialSharing_getPrototypeOf(Derived), result; if (SocialSharing_isNativeReflectConstruct()) { var NewTarget = SocialSharing_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SocialSharing_possibleConstructorReturn(this, result); }; }

function SocialSharing_possibleConstructorReturn(self, call) { if (call && (SocialSharing_typeof(call) === "object" || typeof call === "function")) { return call; } return SocialSharing_assertThisInitialized(self); }

function SocialSharing_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SocialSharing_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SocialSharing_getPrototypeOf(o) { SocialSharing_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SocialSharing_getPrototypeOf(o); }




var SocialSharing_SocialSharing = /*#__PURE__*/function (_Action) {
  SocialSharing_inherits(SocialSharing, _Action);

  var _super = SocialSharing_createSuper(SocialSharing);

  function SocialSharing() {
    SocialSharing_classCallCheck(this, SocialSharing);

    return _super.apply(this, arguments);
  }

  SocialSharing_createClass(SocialSharing, [{
    key: "execute",
    value: function execute() {
      if (Socials[this.data.action]) this.action = Socials[this.data.action]();
    }
  }]);

  return SocialSharing;
}(Action);


// CONCATENATED MODULE: ./src/js/frontend/Actions/index.js































/* harmony default export */ var Actions = ({
  url: WebsiteUrl_WebsiteUrl,
  page: WebsiteUrl_WebsiteUrl,
  phone: Phone,
  mail: Mail_Mail,
  whatsapp: WhatsAppChat_WhatsAppChat,
  backtotop: BackToTop_BackToTop,
  gotobottom: GoToBottom_GoToBottom,
  gobackpage: GoBackPage,
  javascript_pro: JavaScriptPro,
  sms: Sms_Sms,
  messenger_chat: MessengerChat,
  messenger: MessengerLink,
  twitter_dm: TwitterDm_TwitterDm,
  skype: Skype,
  line: Line,
  telegram: Telegram,
  viber: Viber,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  snapchat: Snapchat,
  linkedin: Linkedin_Snapchat,
  vk: Vk,
  waze: Waze,
  poptin: Poptin,
  elementor_popup: ElementorPopup,
  popup_maker: PopupMaker,
  popups: Popups,
  print: Print_PopupMaker,
  clipboard: Clipboard_PopupMaker,
  opengroup: OpenGroup_OpenGroup,
  socialsharing: SocialSharing_SocialSharing
});
// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Button.js
function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Button_createClass(Constructor, protoProps, staticProps) { if (protoProps) Button_defineProperties(Constructor.prototype, protoProps); if (staticProps) Button_defineProperties(Constructor, staticProps); return Constructor; }








var Button_Button = /*#__PURE__*/function () {
  function Button(_ref) {
    var data = _ref.data,
        _ref$label = _ref.label,
        label = _ref$label === void 0 ? false : _ref$label,
        groupName = _ref.groupName,
        _ref$icon = _ref.icon,
        icon = _ref$icon === void 0 ? false : _ref$icon,
        generators = _ref.generators,
        stylesheet = _ref.stylesheet;

    Button_classCallCheck(this, Button);

    this.data = data;
    this.label = label;
    this.icon = icon;
    this.stylesheet = stylesheet;
    this.groupName = groupName ? groupName : false;
    this.action = null;
    this.JSS = {};
    this.JSSImage = {};
    this.JSSImageHover = {};
    this.generators = generators || [];
    this.element = document.createElement("a");
    this.visibility = {
      desktop: function desktop() {
        return dlv_umd_default()(data, "show_desktop", true);
      },
      mobile: function mobile() {
        return dlv_umd_default()(data, "show_mobile", true);
      }
    }; // Add all actions

    this.action = new Actions[dlv_umd_default()(data, "type", "url")](data, this.element, this.stylesheet);
  }

  Button_createClass(Button, [{
    key: "render",
    value: function render() {
      var _this = this,
          _button;

      if (this.icon) {
        var _this$generators;

        this.element.appendChild(this.icon.render().element);

        (_this$generators = this.generators).push.apply(_this$generators, _toConsumableArray(this.icon.generators));
      } // Don't add element if label is not a string


      if (this.label && typeof this.data.label === "string") {
        var _this$generators2;

        this.element.appendChild(this.label.render().element);

        (_this$generators2 = this.generators).push.apply(_this$generators2, _toConsumableArray(this.label.generators));
      }

      this.generators.forEach(function (generator) {
        return generator.generate(_this);
      });
      this.JSS = merge_default()({
        button: (_button = {
          width: this.data.width,
          height: this.data.height,
          "background-color": this.data.background_color[0],
          "border-radius": this.data.border_radius[0]
        }, Button_defineProperty(_button, "margin-".concat(this.data.vertical[0]), this.data.space), Button_defineProperty(_button, "box-shadow", this.data.box_shadow_disabled ? "none" : undefined), Button_defineProperty(_button, "&:hover", {
          "background-color": this.data.background_color[1]
        }), _button)
      }, this.icon.JSS, this.label.JSS);
      var allJSS = merge_default()({}, this.JSSImage, this.JSS, this.JSSImageHover);
      this.stylesheet.update(allJSS); // Device visibility

      if (!this.data.show_desktop) {
        this.setHide("desktop");
      }

      if (!this.data.show_mobile) {
        this.setHide("mobile");
      } // Add action


      if (this.action) this.setAction(this.action);
      this.element.className = Object(clsx_m["a" /* default */])(this.element.className, "buttonizer-button", this.stylesheet.classes.button);
      this.element.classList.add(this.stylesheet.classes.button);
      this.stylesheet.attach();
      return this;
    }
  }, {
    key: "setAction",
    value: function setAction(action) {
      var _this2 = this;

      this.element.href = action.href();
      this.element.removeEventListener("click", function () {
        return _this2.action.execute();
      });
      this.action = action;
      this.element.addEventListener("click", function (e) {
        if (buttonizerInPreview_inPreview()) {
          if (e.target.hasAttribute("data-no-action")) {
            e.preventDefault();
            return;
          }
        } // Only activate button-click on groups


        if (_this2.groupName) {
          googleAnalyticsEvent({
            type: "button-click",
            groupName: _this2.groupName,
            buttonName: _this2.data.name
          });
        }

        _this2.action.execute();
      });
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        button: Button_defineProperty({}, "@media screen and (".concat(size, ")"), {
          display: "none"
        })
      });
    }
  }]);

  return Button;
}();


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Default.js
function Default_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Default_typeof = function _typeof(obj) { return typeof obj; }; } else { Default_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Default_typeof(obj); }

function Default_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Default_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Default_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Default_createClass(Constructor, protoProps, staticProps) { if (protoProps) Default_defineProperties(Constructor.prototype, protoProps); if (staticProps) Default_defineProperties(Constructor, staticProps); return Constructor; }

function Default_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Default_setPrototypeOf(subClass, superClass); }

function Default_setPrototypeOf(o, p) { Default_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Default_setPrototypeOf(o, p); }

function Default_createSuper(Derived) { return function () { var Super = Default_getPrototypeOf(Derived), result; if (Default_isNativeReflectConstruct()) { var NewTarget = Default_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Default_possibleConstructorReturn(this, result); }; }

function Default_possibleConstructorReturn(self, call) { if (call && (Default_typeof(call) === "object" || typeof call === "function")) { return call; } return Default_assertThisInitialized(self); }

function Default_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Default_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Default_getPrototypeOf(o) { Default_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Default_getPrototypeOf(o); }




var Default_Default = /*#__PURE__*/function (_Generator) {
  Default_inherits(Default, _Generator);

  var _super = Default_createSuper(Default);

  function Default() {
    Default_classCallCheck(this, Default);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Default_createClass(Default, [{
    key: "generate",
    value: function generate(group) {
      var previousHeight = "0px";
      var buttonsToOpen = Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];

        if (key === group.menuButton) {
          previousHeight = button.data.height;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else {
          var _closed;

          var diff = parseInt(button.data.height) / 2 + parseInt(previousHeight) / 2;
          previousHeight = button.data.height;
          button.stylesheet.update({
            button: {
              opacity: 1,
              visibility: "visible"
            }
          });
          button.stylesheet.update({
            closed: (_closed = {}, Default_defineProperty(_closed, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")), Default_defineProperty(_closed, "opacity", 0), Default_defineProperty(_closed, "visibility", "hidden"), _closed)
          });
        }

        return button;
      });
      group.buttons[group.menuButton].action = new OpenGroup_OpenGroup({
        buttons: buttonsToOpen,
        startOpened: group.data.start_opened,
        groupName: group.data.name,
        groupId: group.data.id
      });
    }
  }]);

  return Default;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Pop.js
function Pop_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Pop_typeof = function _typeof(obj) { return typeof obj; }; } else { Pop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Pop_typeof(obj); }

function Pop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Pop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Pop_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pop_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pop_defineProperties(Constructor, staticProps); return Constructor; }

function Pop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Pop_setPrototypeOf(subClass, superClass); }

function Pop_setPrototypeOf(o, p) { Pop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pop_setPrototypeOf(o, p); }

function Pop_createSuper(Derived) { return function () { var Super = Pop_getPrototypeOf(Derived), result; if (Pop_isNativeReflectConstruct()) { var NewTarget = Pop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Pop_possibleConstructorReturn(this, result); }; }

function Pop_possibleConstructorReturn(self, call) { if (call && (Pop_typeof(call) === "object" || typeof call === "function")) { return call; } return Pop_assertThisInitialized(self); }

function Pop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Pop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Pop_getPrototypeOf(o) { Pop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pop_getPrototypeOf(o); }




var Pop_Pop = /*#__PURE__*/function (_Generator) {
  Pop_inherits(Pop, _Generator);

  var _super = Pop_createSuper(Pop);

  function Pop() {
    Pop_classCallCheck(this, Pop);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Pop_createClass(Pop, [{
    key: "createJss",
    value: function createJss(group, device) {
      // Count button index
      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var buttonsToOpen = Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          button.stylesheet.update({
            button: {
              width: "56px",
              height: "56px",
              "z-index": 9999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else if (visibility) {
          button.stylesheet.update({
            button: {
              // Close the menu
              transform: "scale(0)",
              opacity: 0,
              visibility: "hidden"
            }
          });
          button.stylesheet.update({
            opened: Pop_defineProperty({}, deviceKey, {
              opacity: 1,
              visibility: "visible",
              transform: "scale(1)",
              transition: "all 300ms ease-in, transform 200ms ".concat(buttonCount * 35, "ms,\n            opacity 200ms ").concat(buttonCount * 35, "ms")
            })
          }); // Update button count

          if (visibility) {
            buttonCount++;
          }
        }

        return button;
      });
      group.buttons[group.menuButton].action = new OpenGroup_OpenGroup({
        buttons: buttonsToOpen,
        startOpened: group.data.start_opened,
        groupName: group.data.name,
        groupId: group.data.id
      });
    }
  }]);

  return Pop;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Faded.js
function Faded_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Faded_typeof = function _typeof(obj) { return typeof obj; }; } else { Faded_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Faded_typeof(obj); }

function Faded_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Faded_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Faded_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Faded_createClass(Constructor, protoProps, staticProps) { if (protoProps) Faded_defineProperties(Constructor.prototype, protoProps); if (staticProps) Faded_defineProperties(Constructor, staticProps); return Constructor; }

function Faded_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Faded_setPrototypeOf(subClass, superClass); }

function Faded_setPrototypeOf(o, p) { Faded_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Faded_setPrototypeOf(o, p); }

function Faded_createSuper(Derived) { return function () { var Super = Faded_getPrototypeOf(Derived), result; if (Faded_isNativeReflectConstruct()) { var NewTarget = Faded_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Faded_possibleConstructorReturn(this, result); }; }

function Faded_possibleConstructorReturn(self, call) { if (call && (Faded_typeof(call) === "object" || typeof call === "function")) { return call; } return Faded_assertThisInitialized(self); }

function Faded_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Faded_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Faded_getPrototypeOf(o) { Faded_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Faded_getPrototypeOf(o); }




var Faded_Faded = /*#__PURE__*/function (_Generator) {
  Faded_inherits(Faded, _Generator);

  var _super = Faded_createSuper(Faded);

  function Faded() {
    Faded_classCallCheck(this, Faded);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Faded_createClass(Faded, [{
    key: "createJss",
    value: function createJss(group, device) {
      // Count button index
      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var buttonsToOpen = Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          button.stylesheet.update({
            button: {
              "z-index": 9999999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else if (visibility) {
          var _button, _deviceKey;

          button.stylesheet.update({
            button: (_button = {}, Faded_defineProperty(_button, group.data.horizontal[0], "-50px"), Faded_defineProperty(_button, "opacity", 0), Faded_defineProperty(_button, "transition", "all 300ms ease-in"), _button)
          });
          button.stylesheet.update({
            opened: Faded_defineProperty({}, deviceKey, (_deviceKey = {}, Faded_defineProperty(_deviceKey, group.data.horizontal[0], "0px"), Faded_defineProperty(_deviceKey, "opacity", 1), Faded_defineProperty(_deviceKey, "visibility", "visible"), Faded_defineProperty(_deviceKey, "transition", "all 300ms ease-in, ".concat(group.data.horizontal[0], " 300ms ").concat(buttonCount * 150, "ms,\n            opacity 300ms ").concat(buttonCount * 150, "ms")), _deviceKey))
          }); // Update button count

          if (visibility) {
            buttonCount++;
          }
        }

        return button;
      });
      group.buttons[group.menuButton].action = new OpenGroup_OpenGroup({
        buttons: buttonsToOpen,
        startOpened: group.data.start_opened,
        groupName: group.data.name,
        groupId: group.data.id
      });
    }
  }]);

  return Faded;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/BuildUp.js
function BuildUp_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BuildUp_typeof = function _typeof(obj) { return typeof obj; }; } else { BuildUp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BuildUp_typeof(obj); }

function BuildUp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BuildUp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BuildUp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BuildUp_createClass(Constructor, protoProps, staticProps) { if (protoProps) BuildUp_defineProperties(Constructor.prototype, protoProps); if (staticProps) BuildUp_defineProperties(Constructor, staticProps); return Constructor; }

function BuildUp_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BuildUp_setPrototypeOf(subClass, superClass); }

function BuildUp_setPrototypeOf(o, p) { BuildUp_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BuildUp_setPrototypeOf(o, p); }

function BuildUp_createSuper(Derived) { return function () { var Super = BuildUp_getPrototypeOf(Derived), result; if (BuildUp_isNativeReflectConstruct()) { var NewTarget = BuildUp_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BuildUp_possibleConstructorReturn(this, result); }; }

function BuildUp_possibleConstructorReturn(self, call) { if (call && (BuildUp_typeof(call) === "object" || typeof call === "function")) { return call; } return BuildUp_assertThisInitialized(self); }

function BuildUp_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BuildUp_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BuildUp_getPrototypeOf(o) { BuildUp_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BuildUp_getPrototypeOf(o); }




var BuildUp_BuildUp = /*#__PURE__*/function (_Generator) {
  BuildUp_inherits(BuildUp, _Generator);

  var _super = BuildUp_createSuper(BuildUp);

  function BuildUp() {
    BuildUp_classCallCheck(this, BuildUp);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  BuildUp_createClass(BuildUp, [{
    key: "createJss",
    value: function createJss(group, device) {
      var previousHeight = "56px"; // Count button index

      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var buttonsToOpen = Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          previousHeight = button.data.height;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else if (visibility) {
          var _closed;

          var diff = parseInt(button.data.height) / 2 + parseInt(previousHeight) / 2;
          previousHeight = button.data.height;
          button.stylesheet.update({
            closed: (_closed = {}, BuildUp_defineProperty(_closed, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")), BuildUp_defineProperty(_closed, "opacity", 0), BuildUp_defineProperty(_closed, "visibility", "hidden"), _closed)
          });
          button.stylesheet.update({
            opened: BuildUp_defineProperty({}, deviceKey, {
              transition: "all ease-in-out 250ms, margin-".concat(group.data.vertical[0], " 200ms ").concat(buttonCount * 150, "ms,\n            opacity 200ms ").concat(buttonCount * 150, "ms"),
              opacity: 1,
              visibility: "visible"
            })
          }); // Update button count

          if (visibility) {
            buttonCount++;
          }
        }

        return button;
      });
      group.buttons[group.menuButton].action = new OpenGroup_OpenGroup({
        buttons: buttonsToOpen,
        startOpened: group.data.start_opened,
        groupName: group.data.name,
        groupId: group.data.id
      });
    }
  }]);

  return BuildUp;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/CornerCircle.js
function CornerCircle_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CornerCircle_typeof = function _typeof(obj) { return typeof obj; }; } else { CornerCircle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CornerCircle_typeof(obj); }

function CornerCircle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CornerCircle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CornerCircle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CornerCircle_createClass(Constructor, protoProps, staticProps) { if (protoProps) CornerCircle_defineProperties(Constructor.prototype, protoProps); if (staticProps) CornerCircle_defineProperties(Constructor, staticProps); return Constructor; }

function CornerCircle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CornerCircle_setPrototypeOf(subClass, superClass); }

function CornerCircle_setPrototypeOf(o, p) { CornerCircle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CornerCircle_setPrototypeOf(o, p); }

function CornerCircle_createSuper(Derived) { return function () { var Super = CornerCircle_getPrototypeOf(Derived), result; if (CornerCircle_isNativeReflectConstruct()) { var NewTarget = CornerCircle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CornerCircle_possibleConstructorReturn(this, result); }; }

function CornerCircle_possibleConstructorReturn(self, call) { if (call && (CornerCircle_typeof(call) === "object" || typeof call === "function")) { return call; } return CornerCircle_assertThisInitialized(self); }

function CornerCircle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CornerCircle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CornerCircle_getPrototypeOf(o) { CornerCircle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CornerCircle_getPrototypeOf(o); }


 // Might move this function to a different file.

var getCoordinates = function getCoordinates() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var hor = arguments.length > 1 ? arguments[1] : undefined;
  var ver = arguments.length > 2 ? arguments[2] : undefined;
  // Used for starting every row at index 0
  var indexCorrection = 0; // Used for a small correction in radius, which puts the buttons closer together

  var radiusCorrection = 1.2; // X and Y, x starts at -1 so the initial condition is incorrect.

  var y;
  var x = -1; // Start at first row

  var r = 1; // Start at index 0

  var i = 0;

  do {
    x = Math.round(70 * Math.cos(0.5 * (i - indexCorrection) * Math.PI / (r + 1))); // px

    y = Math.round(70 * Math.sin(0.5 * (i - indexCorrection) * Math.PI / (r + 1)));
    i++;

    if (x < 0) {
      // If x is smaller dan 0, it it out of bounds and we should try again on the next row
      i--;
      indexCorrection = i;
      radiusCorrection += 0.9;
      r += 1;
    } // Generate every step until we reach *index*

  } while (i <= index);

  x = radiusCorrection * x;
  y = radiusCorrection * y; // Flip menu when on other side

  if (hor === "right") x = -x;
  if (ver === "bottom") y = -y;
  return [x, y];
};

var CornerCircle_CornerCircle = /*#__PURE__*/function (_Generator) {
  CornerCircle_inherits(CornerCircle, _Generator);

  var _super = CornerCircle_createSuper(CornerCircle);

  function CornerCircle() {
    CornerCircle_classCallCheck(this, CornerCircle);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  CornerCircle_createClass(CornerCircle, [{
    key: "createJss",
    value: function createJss(group, device) {
      var _this = this;

      var previousHeight = "56px"; // Count button index

      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var buttonsToOpen = Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton || device === "mobile" && _this.mobileSingleButton || device === "desktop" && _this.desktopSingleButton) {
          var _opened;

          previousHeight = button.data.height;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: (_opened = {}, CornerCircle_defineProperty(_opened, deviceKey, {
              "@global i, svg, img": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: 0
              }
            }), CornerCircle_defineProperty(_opened, "& $label", {
              visibility: "hidden",
              opacity: "0"
            }), _opened)
          });
        } else if (visibility) {
          var diff = parseInt(button.data.height) / 2 + parseInt(previousHeight) / 2;
          previousHeight = button.data.height;
          button.data.space = "-".concat(diff, "px");
          var coorDesktop = getCoordinates(buttonCount, group.data.horizontal[0], group.data.vertical[0]);
          button.stylesheet.update({
            closed: {
              opacity: 0,
              visibility: "hidden"
            }
          });
          button.stylesheet.update({
            opened: CornerCircle_defineProperty({}, deviceKey, {
              opacity: 1,
              visibility: "visible",
              // [`margin-${group.data.vertical[0]}`]: `-${diff}px`,
              transform: "translate(".concat(coorDesktop[0], "px, ").concat(coorDesktop[1], "px)"),
              transition: "all ease-in-out 250ms, transform 200ms ".concat(buttonCount * 150, "ms, opacity 200ms ").concat(buttonCount * 150, "ms"),
              // Hide label
              "& $label": {
                visibility: "hidden",
                opacity: 0
              },
              "&:hover": {
                "z-index": 1
              },
              "&:hover $label": {
                visibility: "visible",
                opacity: 1
              }
            })
          }); // Update button count

          if (visibility) {
            buttonCount++;
          }
        }

        return button;
      });
      group.buttons[group.menuButton].action = new OpenGroup_OpenGroup({
        buttons: buttonsToOpen,
        startOpened: group.data.start_opened,
        groupName: group.data.name,
        groupId: group.data.id
      });
    }
  }]);

  return CornerCircle;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/index.js





/* harmony default export */ var OpeningAnimations = ({
  "default": Default_Default,
  pop: Pop_Pop,
  faded: Faded_Faded,
  "building-up": BuildUp_BuildUp,
  "corner-circle": CornerCircle_CornerCircle
});
// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/template.js
function template_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { template_typeof = function _typeof(obj) { return typeof obj; }; } else { template_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return template_typeof(obj); }

function template_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function template_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { template_ownKeys(Object(source), true).forEach(function (key) { template_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { template_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function template_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MenuStyles_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuStyles_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuStyles_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuStyles_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuStyles_template_defineProperties(Constructor, staticProps); return Constructor; }

function template_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) template_setPrototypeOf(subClass, superClass); }

function template_setPrototypeOf(o, p) { template_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return template_setPrototypeOf(o, p); }

function template_createSuper(Derived) { return function () { var Super = template_getPrototypeOf(Derived), result; if (template_isNativeReflectConstruct()) { var NewTarget = template_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return template_possibleConstructorReturn(this, result); }; }

function template_possibleConstructorReturn(self, call) { if (call && (template_typeof(call) === "object" || typeof call === "function")) { return call; } return template_assertThisInitialized(self); }

function template_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function template_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function template_getPrototypeOf(o) { template_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return template_getPrototypeOf(o); }



var MenuStyle = /*#__PURE__*/function (_Generator) {
  template_inherits(MenuStyle, _Generator);

  var _super = template_createSuper(MenuStyle);

  function MenuStyle() {
    var _this;

    MenuStyles_template_classCallCheck(this, MenuStyle);

    _this = _super.call(this);
    _this.extraData = {
      group: {},
      button: {},
      label: {}
    };
    _this.extraJSS = {
      button: {},
      group: {},
      label: {}
    };
    _this.id;
    return _this;
  }

  MenuStyles_template_createClass(MenuStyle, [{
    key: "generate",
    value: function generate(group) {
      var _this2 = this;

      this.id = group.data.id;
      group.data = template_objectSpread({}, group.data, {}, this.extraData.group);
      group.stylesheet.update({
        group: template_objectSpread({}, this.extraJSS.group)
      });
      Object.keys(group.buttons).forEach(function (key) {
        var button = group.buttons[key];
        button.data = template_objectSpread({}, button.data, {}, _this2.extraData.button);
        if (button.label) button.label.data = template_objectSpread({}, button.label.data, {}, _this2.extraData.label);
        button.stylesheet.update(_this2.extraJSS);
      });
    }
  }]);

  return MenuStyle;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/Square.js
function Square_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Square_typeof = function _typeof(obj) { return typeof obj; }; } else { Square_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Square_typeof(obj); }

function Square_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Square_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Square_setPrototypeOf(subClass, superClass); }

function Square_setPrototypeOf(o, p) { Square_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Square_setPrototypeOf(o, p); }

function Square_createSuper(Derived) { return function () { var Super = Square_getPrototypeOf(Derived), result; if (Square_isNativeReflectConstruct()) { var NewTarget = Square_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Square_possibleConstructorReturn(this, result); }; }

function Square_possibleConstructorReturn(self, call) { if (call && (Square_typeof(call) === "object" || typeof call === "function")) { return call; } return Square_assertThisInitialized(self); }

function Square_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Square_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Square_getPrototypeOf(o) { Square_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Square_getPrototypeOf(o); }



var Square = /*#__PURE__*/function (_MenuStyle) {
  Square_inherits(Square, _MenuStyle);

  var _super = Square_createSuper(Square);

  function Square() {
    var _this;

    Square_classCallCheck(this, Square);

    _this = _super.call(this);
    _this.extraData = {
      group: {},
      button: {
        width: "56px",
        height: "56px",
        box_shadow_disabled: true,
        space: "0px",
        border_radius: ["0px", "0px"]
      },
      label: {
        label_position: "56px",
        label_border_radius: ["0px", "0px"],
        label_margin: ["0px", "0px"],
        label_padding: ["0 20px", "0 20px"]
      }
    };
    _this.extraJSS = {
      label: {
        height: "56px !important",
        "line-height": "56px !important"
      }
    };
    return _this;
  }

  return Square;
}(MenuStyle);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/Text.js
function Text_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Text_typeof = function _typeof(obj) { return typeof obj; }; } else { Text_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Text_typeof(obj); }

function Text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Text_setPrototypeOf(subClass, superClass); }

function Text_setPrototypeOf(o, p) { Text_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Text_setPrototypeOf(o, p); }

function Text_createSuper(Derived) { return function () { var Super = Text_getPrototypeOf(Derived), result; if (Text_isNativeReflectConstruct()) { var NewTarget = Text_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Text_possibleConstructorReturn(this, result); }; }

function Text_possibleConstructorReturn(self, call) { if (call && (Text_typeof(call) === "object" || typeof call === "function")) { return call; } return Text_assertThisInitialized(self); }

function Text_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Text_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Text_getPrototypeOf(o) { Text_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Text_getPrototypeOf(o); }



var Text = /*#__PURE__*/function (_MenuStyle) {
  Text_inherits(Text, _MenuStyle);

  var _super = Text_createSuper(Text);

  function Text(_ref) {
    var data = _ref.data,
        buttons = _ref.buttons;

    Text_classCallCheck(this, Text);

    return _super.call(this);
  }

  return Text;
}(MenuStyle);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/TextIcon.js
function TextIcon_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TextIcon_typeof = function _typeof(obj) { return typeof obj; }; } else { TextIcon_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TextIcon_typeof(obj); }

function TextIcon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TextIcon_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TextIcon_setPrototypeOf(subClass, superClass); }

function TextIcon_setPrototypeOf(o, p) { TextIcon_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TextIcon_setPrototypeOf(o, p); }

function TextIcon_createSuper(Derived) { return function () { var Super = TextIcon_getPrototypeOf(Derived), result; if (TextIcon_isNativeReflectConstruct()) { var NewTarget = TextIcon_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TextIcon_possibleConstructorReturn(this, result); }; }

function TextIcon_possibleConstructorReturn(self, call) { if (call && (TextIcon_typeof(call) === "object" || typeof call === "function")) { return call; } return TextIcon_assertThisInitialized(self); }

function TextIcon_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TextIcon_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TextIcon_getPrototypeOf(o) { TextIcon_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TextIcon_getPrototypeOf(o); }



var TextIcon = /*#__PURE__*/function (_MenuStyle) {
  TextIcon_inherits(TextIcon, _MenuStyle);

  var _super = TextIcon_createSuper(TextIcon);

  function TextIcon(_ref) {
    var data = _ref.data,
        buttons = _ref.buttons;

    TextIcon_classCallCheck(this, TextIcon);

    return _super.call(this);
  }

  return TextIcon;
}(MenuStyle);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/Default.js
function MenuStyles_Default_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MenuStyles_Default_typeof = function _typeof(obj) { return typeof obj; }; } else { MenuStyles_Default_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MenuStyles_Default_typeof(obj); }

function MenuStyles_Default_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuStyles_Default_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MenuStyles_Default_setPrototypeOf(subClass, superClass); }

function MenuStyles_Default_setPrototypeOf(o, p) { MenuStyles_Default_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MenuStyles_Default_setPrototypeOf(o, p); }

function MenuStyles_Default_createSuper(Derived) { return function () { var Super = MenuStyles_Default_getPrototypeOf(Derived), result; if (MenuStyles_Default_isNativeReflectConstruct()) { var NewTarget = MenuStyles_Default_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MenuStyles_Default_possibleConstructorReturn(this, result); }; }

function MenuStyles_Default_possibleConstructorReturn(self, call) { if (call && (MenuStyles_Default_typeof(call) === "object" || typeof call === "function")) { return call; } return MenuStyles_Default_assertThisInitialized(self); }

function MenuStyles_Default_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MenuStyles_Default_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MenuStyles_Default_getPrototypeOf(o) { MenuStyles_Default_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MenuStyles_Default_getPrototypeOf(o); }




var MenuStyles_Default_Default = /*#__PURE__*/function (_MenuStyle) {
  MenuStyles_Default_inherits(Default, _MenuStyle);

  var _super = MenuStyles_Default_createSuper(Default);

  function Default(_ref) {
    var _this;

    var data = _ref.data,
        buttons = _ref.buttons;

    MenuStyles_Default_classCallCheck(this, Default);

    _this = _super.call(this);

    if (data.is_menu) {
      merge_default()(data, {
        height: "56px",
        width: "56px",
        space: "0px"
      });
    } else {
      buttons.forEach(function (_, key) {
        if (key === 0) merge_default()(buttons[key], {
          space: "0px"
        });
        merge_default()(buttons[key], {
          height: "56px",
          width: "56px"
        });
      });
    }

    return _this;
  }

  return Default;
}(MenuStyle);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/Rectangle.js
function Rectangle_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Rectangle_typeof = function _typeof(obj) { return typeof obj; }; } else { Rectangle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Rectangle_typeof(obj); }

function Rectangle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Rectangle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Rectangle_createClass(Constructor, protoProps, staticProps) { if (protoProps) Rectangle_defineProperties(Constructor.prototype, protoProps); if (staticProps) Rectangle_defineProperties(Constructor, staticProps); return Constructor; }

function Rectangle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Rectangle_setPrototypeOf(subClass, superClass); }

function Rectangle_setPrototypeOf(o, p) { Rectangle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Rectangle_setPrototypeOf(o, p); }

function Rectangle_createSuper(Derived) { return function () { var Super = Rectangle_getPrototypeOf(Derived), result; if (Rectangle_isNativeReflectConstruct()) { var NewTarget = Rectangle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Rectangle_possibleConstructorReturn(this, result); }; }

function Rectangle_possibleConstructorReturn(self, call) { if (call && (Rectangle_typeof(call) === "object" || typeof call === "function")) { return call; } return Rectangle_assertThisInitialized(self); }

function Rectangle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Rectangle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Rectangle_getPrototypeOf(o) { Rectangle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Rectangle_getPrototypeOf(o); }



var Rectangle = /*#__PURE__*/function (_MenuStyle) {
  Rectangle_inherits(Rectangle, _MenuStyle);

  var _super = Rectangle_createSuper(Rectangle);

  function Rectangle() {
    var _this;

    Rectangle_classCallCheck(this, Rectangle);

    _this = _super.call(this);
    _this.extraData = {
      group: {
        label_same_width: true
      },
      button: {
        width: "56px",
        height: "56px",
        box_shadow_disabled: true,
        space: "0px",
        border_radius: ["0px", "0px"]
      },
      label: {
        label_position: "56px",
        label_border_radius: ["0px", "0px"],
        label_margin: ["0px", "0px"],
        label_padding: ["0 20px", "0 20px"]
      }
    };
    _this.extraJSS = {
      label: {
        height: "56px !important",
        "line-height": "56px !important"
      }
    };
    window.Buttonizer.addHook("buttonizer_loaded", function (_ref) {
      var groups = _ref.groups;
      return _this.setSameWidthLabels(groups[_this.id].buttons);
    });
    return _this;
  }

  Rectangle_createClass(Rectangle, [{
    key: "setSameWidthLabels",
    value: function setSameWidthLabels(buttons) {
      var maxWidth = Object.keys(buttons).reduce(function (acc, key) {
        var button = buttons[key];
        if (!button.label) return acc;
        return Math.max(button.label.element.clientWidth, acc);
      }, 0);
      Object.values(buttons).forEach(function (button) {
        button.stylesheet.update({
          label: {
            "min-width": maxWidth
          }
        });
        button.stylesheet.attach();
      });
    }
  }]);

  return Rectangle;
}(MenuStyle);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MenuStyles/index.js





/* harmony default export */ var MenuStyles = ({
  square: Square,
  rectangle: Rectangle,
  text: Text,
  "text-icon": TextIcon,
  "default": MenuStyles_Default_Default
});
// EXTERNAL MODULE: ./src/js/frontend/Generators/animations.scss
var animations = __webpack_require__(1320);

// CONCATENATED MODULE: ./src/js/frontend/Generators/SingleButton.js
function SingleButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SingleButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleButton_typeof(obj); }

function SingleButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SingleButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleButton_defineProperties(Constructor, staticProps); return Constructor; }

function SingleButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SingleButton_setPrototypeOf(subClass, superClass); }

function SingleButton_setPrototypeOf(o, p) { SingleButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SingleButton_setPrototypeOf(o, p); }

function SingleButton_createSuper(Derived) { return function () { var Super = SingleButton_getPrototypeOf(Derived), result; if (SingleButton_isNativeReflectConstruct()) { var NewTarget = SingleButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SingleButton_possibleConstructorReturn(this, result); }; }

function SingleButton_possibleConstructorReturn(self, call) { if (call && (SingleButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SingleButton_assertThisInitialized(self); }

function SingleButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SingleButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SingleButton_getPrototypeOf(o) { SingleButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SingleButton_getPrototypeOf(o); }



var SingleButton = /*#__PURE__*/function (_Generator) {
  SingleButton_inherits(SingleButton, _Generator);

  var _super = SingleButton_createSuper(SingleButton);

  function SingleButton(_ref) {
    var _this;

    var button = _ref.button,
        visibility = _ref.visibility;

    SingleButton_classCallCheck(this, SingleButton);

    _this = _super.call(this);
    _this.visibility = visibility;
    _this.button = button; // button id

    return _this;
  }

  SingleButton_createClass(SingleButton, [{
    key: "generate",
    value: function generate(group) {
      var _jssSingleButton;

      // Update single button size & visibilty
      var jssSingleButton = (_jssSingleButton = {
        width: group.data.width,
        height: group.data.height
      }, SingleButton_defineProperty(_jssSingleButton, "margin-".concat(group.data.vertical[0]), "0 !important"), SingleButton_defineProperty(_jssSingleButton, "visibility", "visible !important"), SingleButton_defineProperty(_jssSingleButton, "opacity", "1 !important"), SingleButton_defineProperty(_jssSingleButton, "transform", "scale(1) !important"), _jssSingleButton); // Update the group icon size

      var jssSingleButtonIcon = {// fontSize: `${group.buttons[this.button].data.icon_size[0]} !important`,
      }; // Hide menu button

      var jssHideMenuButton = {
        display: "none !important"
      };

      switch (this.visibility) {
        // Update the styling for desktop if it's a single button on desktop
        case "desktop":
          group.buttons[this.button].stylesheet.update({
            button: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssSingleButton),
            icon: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssSingleButtonIcon)
          });

          if (group.menuButton) {
            // Hide main button
            group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssHideMenuButton)
            });
          }

          break;
        // Update the styling for mobile if it's a single button on mobile

        case "mobile":
          group.buttons[this.button].stylesheet.update({
            button: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssSingleButton),
            icon: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssSingleButtonIcon)
          });

          if (group.menuButton) {
            // Hide main button
            group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssHideMenuButton)
            });
          }

          break;
      }
    }
  }]);

  return SingleButton;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/AttentionAnimation.js
function AttentionAnimation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AttentionAnimation_typeof = function _typeof(obj) { return typeof obj; }; } else { AttentionAnimation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AttentionAnimation_typeof(obj); }

function AttentionAnimation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AttentionAnimation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AttentionAnimation_createClass(Constructor, protoProps, staticProps) { if (protoProps) AttentionAnimation_defineProperties(Constructor.prototype, protoProps); if (staticProps) AttentionAnimation_defineProperties(Constructor, staticProps); return Constructor; }

function AttentionAnimation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AttentionAnimation_setPrototypeOf(subClass, superClass); }

function AttentionAnimation_setPrototypeOf(o, p) { AttentionAnimation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AttentionAnimation_setPrototypeOf(o, p); }

function AttentionAnimation_createSuper(Derived) { return function () { var Super = AttentionAnimation_getPrototypeOf(Derived), result; if (AttentionAnimation_isNativeReflectConstruct()) { var NewTarget = AttentionAnimation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AttentionAnimation_possibleConstructorReturn(this, result); }; }

function AttentionAnimation_possibleConstructorReturn(self, call) { if (call && (AttentionAnimation_typeof(call) === "object" || typeof call === "function")) { return call; } return AttentionAnimation_assertThisInitialized(self); }

function AttentionAnimation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AttentionAnimation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function AttentionAnimation_getPrototypeOf(o) { AttentionAnimation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AttentionAnimation_getPrototypeOf(o); }







var AttentionAnimation_AttentionAnimation = /*#__PURE__*/function (_Generator) {
  AttentionAnimation_inherits(AttentionAnimation, _Generator);

  var _super = AttentionAnimation_createSuper(AttentionAnimation);

  function AttentionAnimation(_ref) {
    var _this;

    var data = _ref.data;

    AttentionAnimation_classCallCheck(this, AttentionAnimation);

    _this = _super.call(this);
    _this.groupAnimationDelay = data.menu_animation_delay;
    _this.animationRepeatCount = data.menu_animation_repeat_count;
    _this.animationCount = 0;
    _this.animation = data.menu_animation;
    _this.menuButtonId = "";
    _this.animationClasses = {};
    _this.animatedButtons = [];
    return _this;
  }

  AttentionAnimation_createClass(AttentionAnimation, [{
    key: "generate",
    value: function generate(group) {
      var _this2 = this;

      // Loop through the generators
      group.generators.forEach(function (generator) {
        if (generator instanceof SingleButton) {
          _this2.animatedButtons.push(group.buttons[generator.button]);
        }
      }); // Add menu button

      this.animatedButtons.push(group.buttons[group.menuButton]); // Set menu button (to stop all sub animations, but continue the group button)

      this.menuButtonId = group.menuButton; // Generate animated style for each button

      this.animatedButtons.forEach(function (button) {
        // If pulse, generate background color and border radius
        if (_this2.animation === "pulse") {
          var borderRadius = button.data.border_radius.length >= 1 && button.data.border_radius[0] != "" ? button.data.border_radius[0] : button.stylesheet.getCachedData().button["border-radius"]; //  Create pulse CSS class

          _this2.animationClasses[button.data.id] = button.stylesheet.addRule("animate", {
            "&:before, &:after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              "z-index": -3,
              display: "block",
              background: dlv_umd_default()(button.data, "background_color.0", button.stylesheet.getCachedData().button.background),
              "border-radius": borderRadius
            },
            "&:before": {
              animation: "buttonizer-pulse 1.8s 0s ease-out"
            },
            "&:after": {
              animation: "buttonizer-pulse 1.8s 0.333s ease-out"
            }
          }).id;
        } else {
          // Default animations
          _this2.animationClasses[button.data.id] = button.stylesheet.addRule("animate", {
            animation: "buttonizer-".concat(_this2.animation, " ").concat(_this2.animation === "hello" ? "2s" : "1s", " linear")
          }).id;
        }
      }); // Start animating

      this.animate(); // Auto stop animation when opening

      if (!buttonizerInPreview_inPreview()) {
        window.addEventListener("buttonizer_group_opened", function (data) {
          if (data.detail.group_id === group.data.id) {
            _this2.stopAnimation(true);
          }
        });
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      // Start animating all buttons
      this.animatedButtons.forEach(function (button) {
        if (!button.element.classList.contains(button.stylesheet.classes.opened)) {
          button.element.classList.add(_this3.animationClasses[button.data.id]);
        }
      }); // Stop animation

      setTimeout(function () {
        _this3.stopAnimation();
      }, 2000);
      setTimeout(function () {
        return _this3.animate();
      }, 10000);
    } // Stop animation if not finished

  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var _this4 = this;

      var slowCooldown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.animatedButtons.forEach(function (button) {
        // Do not stop the menu button
        if (slowCooldown && button.data.id === _this4.menuButtonId) return;
        button.element.classList.remove(_this4.animationClasses[button.data.id]);
      });
    }
  }]);

  return AttentionAnimation;
}(template_Generator);


// CONCATENATED MODULE: ./src/js/frontend/Generators/MessengerChatWidget.js
function MessengerChatWidget_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerChatWidget_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerChatWidget_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerChatWidget_typeof(obj); }

function MessengerChatWidget_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerChatWidget_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerChatWidget_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerChatWidget_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerChatWidget_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerChatWidget_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerChatWidget_setPrototypeOf(subClass, superClass); }

function MessengerChatWidget_setPrototypeOf(o, p) { MessengerChatWidget_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerChatWidget_setPrototypeOf(o, p); }

function MessengerChatWidget_createSuper(Derived) { return function () { var Super = MessengerChatWidget_getPrototypeOf(Derived), result; if (MessengerChatWidget_isNativeReflectConstruct()) { var NewTarget = MessengerChatWidget_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerChatWidget_possibleConstructorReturn(this, result); }; }

function MessengerChatWidget_possibleConstructorReturn(self, call) { if (call && (MessengerChatWidget_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerChatWidget_assertThisInitialized(self); }

function MessengerChatWidget_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerChatWidget_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MessengerChatWidget_getPrototypeOf(o) { MessengerChatWidget_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerChatWidget_getPrototypeOf(o); }



var MessengerChatWidget = /*#__PURE__*/function (_Generator) {
  MessengerChatWidget_inherits(MessengerChatWidget, _Generator);

  var _super = MessengerChatWidget_createSuper(MessengerChatWidget);

  function MessengerChatWidget() {
    var _this;

    MessengerChatWidget_classCallCheck(this, MessengerChatWidget);

    _this = _super.call(this);
    _this.initializedFacebookChat = false;
    _this.button;
    return _this;
  }

  MessengerChatWidget_createClass(MessengerChatWidget, [{
    key: "generate",
    value: function generate(button) {
      this.button = button;
      var messengerDiv = document.createElement("div");
      messengerDiv.className = "fb-customerchat buttonizer-facebook-messenger-overwrite-".concat(button.data.id);
      messengerDiv.setAttribute("page-id", "".concat(button.data.action));
      messengerDiv.setAttribute("greeting_dialog_display", "hide");
      button.element.appendChild(messengerDiv);
      this.addMessengerWindow(button);
    }
  }, {
    key: "addMessengerWindow",
    value: function addMessengerWindow() {
      if (typeof window.Buttonizer.initializedFacebookChat !== "undefined") {
        // Already done
        return;
      }

      window.Buttonizer.initializedFacebookChat = this.button.data.action === "#" ? undefined : this.button.data.action; // Add script

      var fbMessengerScript = document.createElement("script");
      fbMessengerScript.innerHTML = "\n            /* =========== MOBILE WORKAROUND =========== */\n              if (\n                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(\n                  navigator.userAgent\n                ) &&\n                ".concat(this.button.data.messenger_mobile || false, "\n              ) {\n                localStorage.setItem(\n                  \"__fb_chat_plugin\",\n                  '{\"v\":0,\"path\":2,\"chatState\":1,\"visibility\":\"not-hidden\"}'\n                );\n              }\n            /* ======================================== */\n\n            // Initialize first\n            window.fbAsyncInit = function() {\n              FB.init({\n                xfbml: true,\n                version: \"v9.0\",\n              });\n              if (\n                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(\n                  navigator.userAgent\n                ) &&\n                ").concat(this.button.data.messenger_mobile || false, "\n              ) {\n                FB.Event.subscribe(\"customerchat.load\", () => document.querySelector(\".fb-customerchat\").style.display = \"none\");\n                FB.Event.subscribe(\"customerchat.dialogShow\", () => document.querySelector(\".fb-customerchat\").style.display = \"inline\");\n              }\n            };\n\n             (function(d, s, id) {\n              var js, fjs = d.getElementsByTagName(s)[0];\n              if (d.getElementById(id)) return;\n              js = d.createElement(s); js.id = id;\n              js.src = 'https://connect.facebook.net/").concat(this.button.data.messenger_lang, "/sdk/xfbml.customerchat.js';\n              fjs.parentNode.insertBefore(js, fjs);\n            }(document, 'script', 'facebook-jssdk'));");
      document.head.appendChild(fbMessengerScript);
      document.head.appendChild(this.css());
    }
  }, {
    key: "css",
    value: function css() {
      var messengerChatStyling = document.createElement("style");
      var regex = /^([0-9]+)(px|%)/;
      var horizontalType = this.button.data.horizontal[1].match(regex)[2];
      var horizontalValue = horizontalType === "%" ? Math.max(0, Number(this.button.data.horizontal[1].match(regex)[1]) - 4) : Math.max(0, Number(this.button.data.horizontal[1].match(regex)[1]) - 30);
      var verticalType = this.button.data.vertical[1].match(regex)[2];
      var verticalValue = verticalType === "%" ? Math.max(0, Number(this.button.data.vertical[1].match(regex)[1]) + 4) : Math.max(0, Number(this.button.data.vertical[1].match(regex)[1]) + 40);
      messengerChatStyling.innerHTML = "\n                .fb_dialog {\n                    display: none !important;\n                }\n                .buttonizer-facebook-messenger-overwrite-".concat(this.button.data.id, " span iframe {\n                    ").concat(this.button.data.horizontal[0], ": ").concat(horizontalValue).concat(horizontalType, " !important;\n                    ").concat(this.button.data.vertical[0], ": ").concat(verticalValue).concat(verticalType, " !important;\n                }\n                @media screen and (max-width: 769px){\n                    .buttonizer-facebook-messenger-overwrite-").concat(this.button.data.id, " span iframe {\n                      ").concat(this.button.data.horizontal[0], ": ").concat(horizontalValue).concat(horizontalType, " !important;\n                      ").concat(this.button.data.vertical[0], ": ").concat(verticalValue).concat(verticalType, " !important;\n                    }\n                }\n                .buttonizer-facebook-messenger-overwrite-").concat(this.button.data.id, " span .fb_customer_chat_bounce_in_v2 {\n                    animation-duration: 300ms;\n                    animation-name: fb_bounce_in_v3 !important;\n                    transition-timing-function: ease-in-out;   \n                }\n                .buttonizer-facebook-messenger-overwrite-").concat(this.button.data.id, " span .fb_customer_chat_bounce_out_v2 {\n                    max-height: 0px !important;\n                }\n                @keyframes fb_bounce_in_v3 {\n                    0% {\n                        opacity: 0;\n                        transform: scale(0, 0);\n                        transform-origin: bottom;\n                    }\n                    50% {\n                        transform: scale(1.03, 1.03);\n                        transform-origin: bottom;\n                    }\n                    100% {\n                        opacity: 1;\n                        transform: scale(1, 1);\n                        transform-origin: bottom;\n                    }\n                }\n            ");
      return messengerChatStyling;
    }
  }]);

  return MessengerChatWidget;
}(template_Generator);


// EXTERNAL MODULE: ./utils/utils/index.js + 2 modules
var utils = __webpack_require__(26);

// CONCATENATED MODULE: ./src/js/frontend/Utils/messageAdminEditor.js
/**
 * Feature to message the admin buttonizer editor
 *
 * @param message
 */
function messageButtonizerAdminEditor(type, message) {
  try {
    window.parent.postMessage({
      eventType: "buttonizer",
      messageType: type,
      message: message
    }, document.location.origin);
  } catch (e) {
    console.error("Buttonizer tried to warn you in the front-end editor. But the message didn't came through. Well. Doesn't matter, it's just an extra function. It's nice to have.");
    console.error(e);
  }
}
// CONCATENATED MODULE: ./src/js/frontend/Generators/EditButton.js
function EditButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditButton_typeof = function _typeof(obj) { return typeof obj; }; } else { EditButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditButton_typeof(obj); }

function EditButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditButton_defineProperties(Constructor, staticProps); return Constructor; }

function EditButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditButton_setPrototypeOf(subClass, superClass); }

function EditButton_setPrototypeOf(o, p) { EditButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditButton_setPrototypeOf(o, p); }

function EditButton_createSuper(Derived) { return function () { var Super = EditButton_getPrototypeOf(Derived), result; if (EditButton_isNativeReflectConstruct()) { var NewTarget = EditButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EditButton_possibleConstructorReturn(this, result); }; }

function EditButton_possibleConstructorReturn(self, call) { if (call && (EditButton_typeof(call) === "object" || typeof call === "function")) { return call; } return EditButton_assertThisInitialized(self); }

function EditButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EditButton_getPrototypeOf(o) { EditButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditButton_getPrototypeOf(o); }






var EditButton_EditButton = /*#__PURE__*/function (_Generator) {
  EditButton_inherits(EditButton, _Generator);

  var _super = EditButton_createSuper(EditButton);

  function EditButton(_ref) {
    var _this;

    var horizontal = _ref.horizontal,
        vertical = _ref.vertical,
        mobileSingleButton = _ref.mobileSingleButton,
        desktopSingleButton = _ref.desktopSingleButton;

    EditButton_classCallCheck(this, EditButton);

    _this = _super.call(this);
    _this.mobileSingleButton = mobileSingleButton;
    _this.desktopSingleButton = desktopSingleButton;
    _this.horizontal = horizontal[0] === "left" && Number(horizontal[1].match(/^[0-9]+/g)[0]) <= "50" || horizontal[0] === "right" && Number(horizontal[1].match(/^[0-9]+/g)[0]) >= "50" ? "right" : "left";
    _this.vertical = vertical[0] === "bottom" && Number(vertical[1].match(/^[0-9]+/g)[0]) <= "50" || vertical[0] === "top" && Number(vertical[1].match(/^[0-9]+/g)[0]) >= "50" ? "top" : "bottom";
    _this.stylesheet = buttonizer_defaults["frontend"].data.edit_button;
    return _this;
  }

  EditButton_createClass(EditButton, [{
    key: "generate",
    value: function generate(group) {
      var _this2 = this;

      Object.values(group.buttons).map(function (button) {
        _this2.editButton(button, group.menuButton, button.data.id === group.menuButton);
      });
    }
  }, {
    key: "editButton",
    value: function editButton(button, group_id, is_group) {
      // Create edit button element
      var editButtonAction = document.createElement("div");
      editButtonAction.className = Object(clsx_m["a" /* default */])("buttonizer-button-admin-action buttonizer-edit-action", this.horizontal, this.vertical);
      editButtonAction.innerHTML = '<i class="fa fa-pencil-alt fa fa-pencil" data-no-action="true"></i>';
      editButtonAction.setAttribute("data-no-action", true);
      editButtonAction.setAttribute("data-testid", "edit-button");
      var listenerData = {}; // If it's a menu button, add group event listener

      if (is_group) {
        editButtonAction.title = "Edit group";
        listenerData = {
          type: "to-group",
          data: {
            group: group_id
          }
        };
      } // if it's a button, add button event listener and styling
      else {
          editButtonAction.title = "Edit button";
          editButtonAction.classList.add("small-edit-button");

          if (this.mobileSingleButton && this.mobileSingleButton === button.data.id) {
            editButtonAction.classList.add("mobile-single");
          }

          if (this.desktopSingleButton && this.desktopSingleButton === button.data.id) {
            editButtonAction.classList.add("desktop-single");
          }

          listenerData = {
            type: "to-button",
            data: {
              group: group_id,
              button: button.data.id
            }
          };
        }

      editButtonAction.addEventListener("click", function () {
        messageButtonizerAdminEditor("admin-link-redirect", listenerData);
      }); // Add styling to button stylesheet

      button.stylesheet.update({
        button: {
          "&:hover": {
            "& .buttonizer-edit-action": {
              opacity: 1
            }
          },
          "& .buttonizer-edit-action": this.stylesheet
        }
      });
      button.element.appendChild(editButtonAction);
    }
  }]);

  return EditButton;
}(template_Generator);


// EXTERNAL MODULE: ./utils/buttonizer-constants.js
var buttonizer_constants = __webpack_require__(4);

// CONCATENATED MODULE: ./src/js/frontend/Utils/ButtonizerUtils.js
function ButtonizerUtils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ButtonizerUtils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ButtonizerUtils_ownKeys(Object(source), true).forEach(function (key) { ButtonizerUtils_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ButtonizerUtils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ButtonizerUtils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function createGroup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref.data,
      buttons = _ref.buttons;

  var extensions = [];
  var generators = [];
  var actions = [];
  var parsedData = parseData(data, buttonizer_defaults["frontend"].data.menu_button); // Add all extensions

  if (parsedData.close_on_click_outside && parsedData.open_on_mouseover === false && buttons.length > 1 || parsedData.close_on_click_outside && parsedData.open_on_mouseover === true && parsedData.close_on_mouseleave === false && buttons.length > 1) extensions.push(Extensions_CloseOnClickOutside); // Add all generators

  if (typeof parsedData.menu_opening_animation === "undefined") parsedData.is_menu = false;
  if (Object.values(buttons).length >= 1 && Object.keys(MenuStyles).includes(parsedData.menu_style)) generators.push(new MenuStyles[parsedData.menu_style]({
    data: parsedData,
    buttons: buttons
  }));
  if (parsedData.is_menu && Object.values(buttons).length > 1 && Object.keys(OpeningAnimations).includes(parsedData.menu_opening_animation)) generators.push(new OpeningAnimations[parsedData.menu_opening_animation]({
    data: parsedData,
    buttons: buttons
  }));
  if (parsedData.menu_animation !== "none") generators.push(new AttentionAnimation_AttentionAnimation({
    data: parsedData,
    mobileSingleButton: mobileSingleButton,
    desktopSingleButton: desktopSingleButton
  }));
  /**
   * ====================
   *  Single button mode
   */

  var mobileSingleButton, desktopSingleButton; // Count mobile buttons

  mobileSingleButton = Object.values(buttons).filter(function (obj) {
    return obj.show_mobile === true;
  }); // Count desktop buttons

  desktopSingleButton = Object.values(buttons).filter(function (obj) {
    return obj.show_desktop === true;
  }); // There is only one button for mobile

  if (mobileSingleButton.length === 1) {
    // If it doesn't have an id. Make one
    if (typeof mobileSingleButton[0].id !== "string") mobileSingleButton[0].id = Object(utils["a" /* GenerateUniqueId */])();
    generators.push(new SingleButton({
      button: mobileSingleButton[0].id,
      visibility: "mobile"
    }));
  } // There is only one button for desktop


  if (desktopSingleButton.length === 1) {
    // If it doesn't have an id. Make one
    if (typeof desktopSingleButton[0].id !== "string") desktopSingleButton[0].id = Object(utils["a" /* GenerateUniqueId */])();
    generators.push(new SingleButton({
      button: desktopSingleButton[0].id,
      visibility: "desktop"
    }));
  }
  /**
   * ====================
   */
  // Add edit button if in preview


  if (buttonizerInPreview_inPreview()) {
    generators.push(new EditButton_EditButton({
      horizontal: parsedData.horizontal,
      vertical: parsedData.vertical,
      mobileSingleButton: mobileSingleButton.length === 1 ? mobileSingleButton[0].id : false,
      desktopSingleButton: desktopSingleButton.length === 1 ? desktopSingleButton[0].id : false
    }));
  }

  var args = {
    data: parsedData,
    extensions: extensions,
    generators: generators,
    actions: actions,
    buttons: buttons,
    buttonCountMobile: mobileSingleButton.length,
    buttonCountDesktop: desktopSingleButton.length
  };
  var group = new Group_Group(args);
  return ButtonizerUtils_defineProperty({}, parsedData.id, group);
}
function createButton() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref3.data,
      groupName = _ref3.groupName,
      _ref3$generators = _ref3.generators,
      generators = _ref3$generators === void 0 ? [] : _ref3$generators,
      pos = _ref3.pos;

  var parsedData = parseData(data);
  var extensions = [];
  var stylesheet = Stylesheets_button();
  var result = {
    groupName: groupName,
    data: ButtonizerUtils_objectSpread({}, parsedData, {}, pos),
    stylesheet: stylesheet,
    extensions: extensions,
    generators: generators
  }; // Add messenger

  if (parsedData.type === "messenger_chat") result.generators.push(new MessengerChatWidget());
  if (parsedData.icon !== "unset" && !parsedData.icon_is_image) result.icon = new Icon_Icon({
    stylesheet: stylesheet,
    data: {
      icon: parsedData.icon,
      icon_color: parsedData.icon_color,
      icon_size: parsedData.icon_size
    }
  });else if (parsedData.icon_image !== "unset" && parsedData.icon_is_image) {}
  if (parsedData.label) result.label = new Label_Label({
    stylesheet: stylesheet,
    data: ButtonizerUtils_objectSpread({}, parsedData, {}, pos)
  });
  var button = new Button_Button(result);
  return ButtonizerUtils_defineProperty({}, parsedData.id, button);
}
function parseData(data) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : buttonizer_defaults["frontend"].data.button;
  var returnData = merge_default()({}, def, data);
  /** normal;hover settings */

  ["background_color", "background_image", "label_color", "label_background_color", "icon_color", "icon_image_size", "icon_image_border_radius", "icon_image", "icon_size", "icon", "border_radius", "label_font_size", "label_border_radius", "label_margin", "label_padding"].forEach(function (key) {
    if (Array.isArray(returnData[key])) return;
    var result = buttonizer_constants["c" /* formats */].normal_hover.parse(returnData[key]);

    if (!result) {
      returnData[key] = [undefined, undefined];
      return;
    }

    returnData[key] = result;
  });
  /* Parse Horizontal & vertical settings */

  if (typeof returnData.horizontal === "string") {
    returnData.horizontal = returnData.horizontal.match(/(.+): ?(.+)/).splice(1, 2);
    returnData.horizontal[1] = returnData.horizontal[1].replace("undefined", "%"); // Migration fix

    if (isNaN(parseFloat(returnData.horizontal[1]))) {
      returnData.horizontal[1] = "5%";
    }
  }

  if (typeof returnData.vertical === "string") returnData.vertical = returnData.vertical.match(/(.+): ?(.+)/).splice(1, 2);
  if (typeof returnData.id !== "string") returnData.id = Object(utils["a" /* GenerateUniqueId */])();
  return returnData;
}
// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss_esm["c" /* createRule */])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (false) { var prop; }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ var jss_plugin_rule_value_function_esm = (functionPlugin);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(154);

// CONCATENATED MODULE: ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js



var jss_plugin_rule_value_observable_esm_isObservable = function isObservable(value) {
  return value && value[es["a" /* default */]] && value === value[es["a" /* default */]]();
};

function observablePlugin(updateOptions) {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!jss_plugin_rule_value_observable_esm_isObservable(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

      var style$ = decl;
      var rule = Object(jss_esm["c" /* createRule */])(name, {}, options); // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.

      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (rule && rule.type !== 'style') return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!jss_plugin_rule_value_observable_esm_isObservable(value)) return "continue";
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue, updateOptions);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === "continue") continue;
      }
    }
  };
}

/* harmony default export */ var jss_plugin_rule_value_observable_esm = (observablePlugin);

// CONCATENATED MODULE: ./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js


var semiWithNl = /;\n/;
/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */

var parse = (function (cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);

  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || '').trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
       false ? undefined : void 0;
      continue;
    }

    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }

  return style;
});

var jss_plugin_template_esm_onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    // $FlowFixMe: We can safely assume that rule has the style property
    rule.style = parse(rule.style);
  }
};

function templatePlugin() {
  return {
    onProcessRule: jss_plugin_template_esm_onProcessRule
  };
}

/* harmony default export */ var jss_plugin_template_esm = (templatePlugin);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js



var at = '@global';
var atPrefix = '@global ';

var jss_plugin_global_esm_GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss_esm["a" /* RuleList */](Object(esm_extends["a" /* default */])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var jss_plugin_global_esm_GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(esm_extends["a" /* default */])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], Object(esm_extends["a" /* default */])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], Object(esm_extends["a" /* default */])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new jss_plugin_global_esm_GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new jss_plugin_global_esm_GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ var jss_plugin_global_esm = (jssGlobal);

// CONCATENATED MODULE: ./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js


/* eslint-disable no-use-before-define */

var isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

var valueNs = "extendCurrValue" + Date.now();

function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend; // Extend using a rule name.

  if (extendType === 'string') {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;

    if (refRule === rule) {
       false ? undefined : void 0;
      return;
    }

    var parent = refRule.options.parent;

    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      extend(originalStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend using an array of objects.


  if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }

    return;
  } // Extend is a style object.


  for (var prop in style.extend) {
    if (prop === 'extend') {
      extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }

    if (isObject(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    newStyle[prop] = style.extend[prop];
  }
}

function mergeRest(style, rule, sheet, newStyle) {
  // Copy base style.
  for (var prop in style) {
    if (prop === 'extend') continue;

    if (isObject(newStyle[prop]) && isObject(style[prop])) {
      extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    if (isObject(style[prop])) {
      newStyle[prop] = extend(style[prop], rule, sheet);
      continue;
    }

    newStyle[prop] = style[prop];
  }
}
/**
 * Recursively extend styles.
 */


function extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }

  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */


function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    if ('extend' in style) return extend(style, rule, sheet);
    return style;
  }

  function onChangeValue(value, prop, rule) {
    if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

    if (value == null || value === false) {
      // $FlowFixMe: Flow complains because there is no indexer property in StyleRule
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = null;
      return null;
    }

    if (typeof value === 'object') {
      // $FlowFixMe: This will be an object
      for (var _key in value) {
        rule.prop(_key, value[_key]);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = value;
    } // Make sure we don't set the value in the core.


    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_extend_esm = (jssExtend);

// EXTERNAL MODULE: ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
var jss_plugin_nested_esm = __webpack_require__(219);

// CONCATENATED MODULE: ./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js


/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  } // Support space separated class names `{composes: 'foo bar'}`


  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var _ref = rule.options,
      parent = _ref.parent; // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
       false ? undefined : void 0;
      return false;
    }

    if (refRule === rule) {
       false ? undefined : void 0;
      return false;
    }

    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }

  parent.classes[rule.key] += " " + className;
  return true;
}
/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!('composes' in style)) return style;
    registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

    delete style.composes;
    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_compose_esm = (jssCompose);

// EXTERNAL MODULE: ./node_modules/hyphenate-style-name/index.js
var hyphenate_style_name = __webpack_require__(156);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name["a" /* default */])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name["a" /* default */])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_camel_case_esm = (camelCase);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js


var px = jss_esm["f" /* hasCSSTOMSupport */] && CSS ? CSS.px : 'px';
var ms = jss_esm["f" /* hasCSSTOMSupport */] && CSS ? CSS.ms : 'ms';
var percent = jss_esm["f" /* hasCSSTOMSupport */] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    var unit = options[prop] || units[prop];

    if (unit) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_default_unit_esm = (defaultUnit);

// CONCATENATED MODULE: ./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'border-width': true,
  'border-style': true,
  'border-color': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */

};
var propArrayInObj = {
  position: true,
  // background-position
  size: true // background-size

  /**
   * A scheme for parsing and building correct styles from passed objects.
   */

};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */

};
var customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image',
    width: 'border-width',
    style: 'border-style',
    color: 'border-color'
  },
  'border-bottom': {
    width: 'border-bottom-width',
    style: 'border-bottom-style',
    color: 'border-bottom-color'
  },
  'border-top': {
    width: 'border-top-width',
    style: 'border-top-style',
    color: 'border-top-color'
  },
  'border-left': {
    width: 'border-left-width',
    style: 'border-left-style',
    color: 'border-left-color'
  },
  'border-right': {
    width: 'border-right-width',
    style: 'border-right-style',
    color: 'border-right-color'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height',
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  },
  grid: {
    'template-columns': 'grid-template-columns',
    templateColumns: 'grid-template-columns',
    'template-rows': 'grid-template-rows',
    templateRows: 'grid-template-rows',
    'template-areas': 'grid-template-areas',
    templateAreas: 'grid-template-areas',
    template: 'grid-template',
    'auto-columns': 'grid-auto-columns',
    autoColumns: 'grid-auto-columns',
    'auto-rows': 'grid-auto-rows',
    autoRows: 'grid-auto-rows',
    'auto-flow': 'grid-auto-flow',
    autoFlow: 'grid-auto-flow',
    row: 'grid-row',
    column: 'grid-column',
    'row-start': 'grid-row-start',
    rowStart: 'grid-row-start',
    'row-end': 'grid-row-end',
    rowEnd: 'grid-row-end',
    'column-start': 'grid-column-start',
    columnStart: 'grid-column-start',
    'column-end': 'grid-column-end',
    columnEnd: 'grid-column-end',
    area: 'grid-area',
    gap: 'grid-gap',
    'row-gap': 'grid-row-gap',
    rowGap: 'grid-row-gap',
    'column-gap': 'grid-column-gap',
    columnGap: 'grid-column-gap'
  }
};

/* eslint-disable no-use-before-define */

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
/**
 * Convert array to nested array, if needed
 */


function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

  if (typeof value[0] === 'object') {
    return mapValuesByProp(value, prop, rule);
  }

  return [value];
}
/**
 * Convert object to array.
 */


function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result = []; // Check if exists any non-standard property

  if (customPropObj[prop]) {
    // eslint-disable-next-line no-param-reassign
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  } // Pass throught all standart props


  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
        } else result.push(value[baseProp]);

        continue;
      } // Add default value from props config.


      if (propObj[prop][baseProp] != null) {
        result.push(propObj[prop][baseProp]);
      }
    }
  }

  if (!result.length || isInArray) return result;
  return [result];
}
/**
 * Convert custom properties values to styles adding them to rule directly
 */


function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var _styleDetector;

      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    } // Delete converted property to avoid double converting


    delete value[prop];
  }

  return value;
}
/**
 * Detect if a style needs to be converted.
 */


function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }

          continue;
        }

        style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

      if (!style[prop].length) delete style[prop];
    } // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}
/**
 * Adds possibility to write expanded styles.
 */


function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }

      return style;
    }

    return styleDetector(style, rule);
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_expand_esm = (jssExpand);

// EXTERNAL MODULE: ./node_modules/css-vendor/dist/css-vendor.esm.js
var css_vendor_esm = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor_esm["a" /* supportedKeyframes */])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor_esm["b" /* supportedProperty */])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = Object(css_vendor_esm["c" /* supportedValue */])(supportedProp, Object(jss_esm["g" /* toCssValue */])(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor_esm["c" /* supportedValue */])(prop, Object(jss_esm["g" /* toCssValue */])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_vendor_prefixer_esm = (jssVendorPrefixer);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ var jss_plugin_props_sort_esm = (jssPropsSort);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js













var index = (function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    plugins: [jss_plugin_rule_value_function_esm(), jss_plugin_rule_value_observable_esm(options.observable), jss_plugin_template_esm(), jss_plugin_global_esm(), jss_plugin_extend_esm(), Object(jss_plugin_nested_esm["a" /* default */])(), jss_plugin_compose_esm(), jss_plugin_camel_case_esm(), jss_plugin_default_unit_esm(options.defaultUnit), jss_plugin_expand_esm(), jss_plugin_vendor_prefixer_esm(), jss_plugin_props_sort_esm()]
  };
});

/* harmony default export */ var jss_preset_default_esm = (index);

// EXTERNAL MODULE: ./node_modules/jss-increase-specificity/index.js
var jss_increase_specificity = __webpack_require__(516);
var jss_increase_specificity_default = /*#__PURE__*/__webpack_require__.n(jss_increase_specificity);

// CONCATENATED MODULE: ./src/js/frontend/Utils/Api.js
function Api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Api_ownKeys(Object(source), true).forEach(function (key) { Api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Api_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Api_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Api_typeof = function _typeof(obj) { return typeof obj; }; } else { Api_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Api_typeof(obj); }

function Api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Api_createClass(Constructor, protoProps, staticProps) { if (protoProps) Api_defineProperties(Constructor.prototype, protoProps); if (staticProps) Api_defineProperties(Constructor, staticProps); return Constructor; }

/* global WeakSet */


/**
 * Buttonizer API
 */

var Api_ButtonizerApi = /*#__PURE__*/function () {
  function ButtonizerApi(buttonizer) {
    Api_classCallCheck(this, ButtonizerApi);

    this.container = buttonizer;
    this.allowGoogleAnalyticsTracking = false;
    this.debug = [];
  } // Debug data


  Api_createClass(ButtonizerApi, [{
    key: "log",
    value: function log() {
      this.debug.forEach(function (err) {
        console.warn(err);
      });
    } // Is ready

  }, {
    key: "isReady",
    value: function isReady() {} // In dashboard?

  }, {
    key: "inPreview",
    value: function inPreview() {
      return buttonizerInPreview_inPreview();
    } // Has premium?

  }, {
    key: "hasPremium",
    value: function hasPremium() {
      return this.container.hasPremium();
    } // Get group opverview

  }, {
    key: "groups",
    value: function groups() {
      var _this = this;

      return Object.keys(this.container.groups).map(function (groupId) {
        return _this.options(groupId);
      });
    }
  }, {
    key: "dump",
    value: function dump() {
      var getCircularReplacer = function getCircularReplacer() {
        var seen = new WeakSet();
        return function (_, value) {
          if (Api_typeof(value) === "object" && value !== null) {
            if (seen.has(value)) {
              return "[cyclic ".concat(value.constructor.name, "]").concat(dlv_umd_default()(value, "data.id", false) != null ? ", id: " : "").concat(dlv_umd_default()(value, "data.id", ""));
            }

            seen.add(value);
          }

          return value;
        };
      };

      return JSON.stringify(Object.assign({}, this.container.groups), getCircularReplacer(), 2);
    } // Open group

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Close all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this2.options(groupId);

          if (group.open) {
            group.open();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.open) {
          group.open();
        }
      }

      return true;
    } // Close group

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Close all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this3.options(groupId);

          if (group.close) {
            group.close();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.close) {
          group.close();
        }
      }

      return true;
    } // Toggle group

  }, {
    key: "toggle",
    value: function toggle() {
      var _this4 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // toggle all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this4.options(groupId);

          if (group.toggle) {
            group.toggle();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.toggle) {
          group.toggle();
        }
      }

      return true;
    } // Group options

  }, {
    key: "options",
    value: function options(groupId) {
      var group = dlv_umd_default()(this.container.groups, groupId, null);
      var options = {}; // Group not found

      if (!group || group === null) {
        this.debug.push("Buttonizer: Group ".concat(groupId, " does not exists."));
        console.error("Buttonizer: Group ".concat(groupId, " does not exists."));
        return null;
      }

      var menuButton = dlv_umd_default()(group.buttons, group.menuButton, null); // Not a menu

      if (menuButton && menuButton.action) {
        options = {
          isOpened: function isOpened() {
            return menuButton.action.isOpened();
          },
          toggle: function toggle() {
            return menuButton.action.toggle();
          },
          open: function open() {
            return menuButton.action.open();
          },
          close: function close() {
            return menuButton.action.close();
          }
        };
      }

      return Api_objectSpread({
        id: groupId,
        element: group.element
      }, options);
    }
    /**
     * activate hook
     * @param {string} name of hook to activate.
     * different hooks:
     * buttonizer_loaded
     * buttonizer_initialized
     * buttonizer_group_opened
     * buttonizer_button_clicked
     * @param {*} options
     * for group/button hooks, add id
     */

  }, {
    key: "activateHook",
    value: function activateHook(name, options) {
      window.dispatchEvent(new CustomEvent(name, {
        detail: options
      }));
    }
    /**
     * subscribe to hook
     * @param {string} name
     * @param {function} callback
     * @param {boolean} once run only once and then remove itself.
     * called with event library
     */

  }, {
    key: "addHook",
    value: function addHook(name, callback) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      window.addEventListener(name, function (e) {
        return callback(e.detail);
      }, {
        once: once
      });
    }
  }, {
    key: "removeHook",
    value: function removeHook(name, hook) {
      window.removeEventListener(name, hook);
    }
  }]);

  return ButtonizerApi;
}();


// CONCATENATED MODULE: ./src/js/frontend/Buttonizer.js
function Buttonizer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Buttonizer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Buttonizer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Buttonizer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Buttonizer_defineProperties(Constructor, staticProps); return Constructor; }











var Buttonizer_Buttonizer = /*#__PURE__*/function () {
  function Buttonizer() {
    Buttonizer_classCallCheck(this, Buttonizer);

    // JSX
    jss_esm["d" /* default */].setup(jss_preset_default_esm()).use(jss_increase_specificity_default()());
    var el = document.createElement("style");
    el.id = "buttonizer-styling";
    document.head.appendChild(el); // Data

    this.firstTimeInitialize = true;
    this.previewInitialized = false;
    this.settingsLoading = false;
    this.isInPreviewContainer = false;
    this.premium = false;
    this.groups = []; // In preview

    if (buttonizerInPreview_inPreview()) {
      var stylesheet = document.createElement("style");
      stylesheet.innerHTML = "html { margin-top: 0 !important; }";
      window.document.head.appendChild(stylesheet);
    } // Initialize API


    this.api = new Api_ButtonizerApi(this); // Make the API public

    window.Buttonizer = this.api; // Start loading buttons

    this.getSettings();
  }
  /**
   * Get Buttonizer
   */


  Buttonizer_createClass(Buttonizer, [{
    key: "getSettings",
    value: function getSettings() {
      var _this = this;

      window.Buttonizer.activateHook("buttonizer_loading"); // Cool, we already have the data!

      if (typeof buttonizer_data !== "undefined") {
        this.init(buttonizer_data);
        return;
      } // Add current url


      if (buttonizer_ajax) {
        buttonizer_ajax.current.url = document.location.href;
      }

      this.settingsLoading = true;
      window.Buttonizer.activateHook("buttonizer_get_data_start");
      axios_default()({
        url: buttonizer_ajax && buttonizer_ajax.ajaxurl + "?action=buttonizer",
        params: {
          qpu: buttonizer_ajax && buttonizer_ajax.is_admin ? Date.now() : buttonizer_ajax && buttonizer_ajax.cache,
          preview: buttonizerInPreview_inPreview() ? 1 : 0,
          data: buttonizer_ajax && buttonizer_ajax.current
        },
        paramsSerializer: function paramsSerializer(params) {
          return lib_default.a.stringify(params, {
            arrayFormat: "brackets"
          });
        }
      }).then(function (_ref) {
        var data = _ref.data;
        window.Buttonizer.activateHook("buttonizer_get_data_end", {
          data: data
        });

        if (data.status === "success") {
          _this.init(data);
        } else {
          console.error("Buttonizer: Something went wrong! Buttonizer not loaded", data);
        }
      })["catch"](function (e) {
        _this.settingsLoading = false;
        console.error(e);
        console.error("Buttonizer: OH NO! ERROR: '" + e.statusText + "'. That's all we know... Please check your PHP logs or contact Buttonizer support if you need help.");
        console.error("Buttonizer: Visit our community on https://community.buttonizer.pro/");
      });
    }
  }, {
    key: "init",
    value: function init(data) {
      var _this2 = this;

      // Listen to admin
      if (buttonizerInPreview_inPreview() && !this.previewInitialized) {
        this.isInPreviewContainer = true;
        this.listenToPreview();

        window.onerror = function () {
          var err = arguments.length <= 4 ? undefined : arguments[4];
          messageButtonizerAdminEditor("error", {
            name: err.name,
            message: err.message,
            column: err.column,
            line: err.line,
            sourceURL: err.sourceURL,
            stack: err.stack,
            extra: _this2.api.dump()
          });
        };
      } // No buttons


      if (data.result.length > 0) {
        // Loop through the group(s)
        (function () {
          _this2.groups = createGroup(data.result[0]);
          document.body.appendChild(Object.values(_this2.groups)[0].render());
        })(); // Send activate hook


        window.Buttonizer.activateHook("buttonizer_loaded", {
          groups: this.groups
        }); // Set Google Analytics tracking on true

        this.api.allowGoogleAnalyticsTracking = true;

        if (this.firstTimeInitialize) {
          this.buttonizerInitialized();
        }
      } // Send message to admin panel


      if (buttonizerInPreview_inPreview() && this.previewInitialized) {
        messageButtonizerAdminEditor("(re)loaded", true);
        messageButtonizerAdminEditor("warning", data.warning);
      }

      this.settingsLoading = false;
    }
    /**
     * Feature to receive messages from the admin buttonizer editor
     */

  }, {
    key: "listenToPreview",
    value: function listenToPreview() {
      var _this3 = this;

      this.previewInitialized = true;
      window.addEventListener("message", function (event) {
        if (!event.isTrusted || typeof event.data.eventType === "undefined" || event.data.eventType !== "buttonizer") return;
        console.log("[Buttonizer] Buttonizer preview - Data received:", event.data.messageType);

        if (buttonizerInPreview_inPreview() && event.data.messageType === "preview-reload") {
          console.log("received message: reloading!", event);

          _this3.reload();
        }
      }, false);
    }
    /**
     * Reload Buttonizer
     */

  }, {
    key: "reload",
    value: function reload() {
      var _this4 = this;

      window.Buttonizer.activateHook("buttonizer_reload");

      if (this.settingsLoading) {
        console.log("[Buttonizer] Request too quick, first finish the previous one");
        setTimeout(function () {
          return _this4.reload();
        }, 100);
        return;
      }

      this.settingsLoading = true;
      Object.values(this.groups).forEach(function (group) {
        return group.destroy();
      }); // Todo: Try to find a better fix for this, why doesn't the group remove itself sometimes?

      var findButtonizer = document.querySelectorAll(".buttonizer-group");

      for (var b = 0; b < findButtonizer.length; b++) {
        findButtonizer[b].remove();
      }

      setTimeout(function () {
        _this4.groups = [];

        _this4.getSettings();
      }, 50);
    }
  }, {
    key: "hasPremium",
    value: function hasPremium() {
      return this.premium;
    }
    /**
     * Buttonizer is initialized, call function
     */

  }, {
    key: "buttonizerInitialized",
    value: function buttonizerInitialized() {
      // Execute only once
      if (!this.firstTimeInitialize) {
        return;
      }

      window.Buttonizer.activateHook("buttonizer_initialized", {
        groups: this.groups
      }); //If user is using Messenger and FB is not defined, call parse

      if (typeof FB === "undefined" && typeof this.initializedFacebookChat !== "undefined" && !this.isInPreviewContainer) {
        console.log("Facebook Messenger is still not initilized: RUN FB.XFBLM.PARSE");

        try {
          FB.XFBML.parse();
        } catch (err) {
          console.log("FB is not defined. \n        Is your site whitelisted correctly?\n        Is your Facebook Messenger ID correct?");
        }
      } // FB is defined, check if widget is rendered.
      else if (typeof this.initializedFacebookChat !== "undefined" && !this.isInPreviewContainer && document.querySelector(".fb-customerchat")) {
          if (document.querySelector(".fb-customerchat").querySelector("iframe") === null) {
            try {
              FB.XFBML.parse();
            } catch (err) {
              console.log("FB is defined but not rendering Messenger chat. \n              Is tracking blocked in your browser?\n              Do you have another Facebook SDK on your site?\n              \n              Error message: ".concat(err));
            }
          }
        }

      this.firstTimeInitialize = false;
    }
    /**
     * Is in preview?
     *
     * @returns {boolean}
     */

  }, {
    key: "inPreview",
    value: function inPreview() {
      return this.isInPreviewContainer;
    }
  }]);

  return Buttonizer;
}();

new Buttonizer_Buttonizer();

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prefix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(136),
    isLength = __webpack_require__(174);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ })

/******/ });