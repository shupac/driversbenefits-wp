;(function($) {
    (function () {
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

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }

            return obj;
        }

        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                var ownKeys = Object.keys(source);

                if (typeof Object.getOwnPropertySymbols === 'function') {
                    ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    }));
                }

                ownKeys.forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            }

            return target;
        }
        var TRANSITION_END = 'transitionend';
        var MILLISECONDS_MULTIPLIER = 1000;

        function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-sptarget');

            if (!selector || selector === '#') {
                var hrefAttr = element.getAttribute('href');
                selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
            }
            try {
                return document.querySelector(selector) ? selector : null;
            } catch (err) {
                return null;
            }
        };

        function reflow(element) {
            return element.offsetHeight;
        };

        function getTransitionDurationFromElement(element) {
            if (!element) {
                return 0
            }
            var transitionDuration = $(element).css('transition-duration')
            var floatTransitionDuration = parseFloat(transitionDuration)
            if (!floatTransitionDuration) {
                return 0
            }
            transitionDuration = transitionDuration.split(',')[0]
            return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER
        }; // Get transition-duration of the element
        function isElement(obj) {
            return (obj[0] || obj).nodeType;
        };

        function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };

        function typeCheckConfig(componentName, config, configTypes) {
            Object.keys(configTypes).forEach(function (property) {
                var expectedTypes = configTypes[property];
                var value = config[property];
                var valueType = value && isElement(value) ? 'element' : toType(value);

                if (!new RegExp(expectedTypes).test(valueType)) {
                    throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
                }
            });
        };

        function triggerTransitionEnd(element) {
            $(element).trigger(TRANSITION_END)
        }

        function transitionEndEmulator(duration) {
            var called = false
            $(this).one(SPCollapse.TRANSITION_END, function (event) {
                called = true
            });
            setTimeout(function () {
                if (!called) {
                    triggerTransitionEnd(this);
                }
            }, duration)
            return this
        }

        function setTransitionEndSupport() {
            $.fn.emulateTransitionEnd = transitionEndEmulator
        };
        setTransitionEndSupport();
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'spcollapse';
        var VERSION = '2.0.2';
        var DATA_KEY = 'bs.spcollapse';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var Default = {
            toggle: true,
            parent: ''
        };
        var DefaultType = {
            toggle: 'boolean',
            parent: '(string|element)'
        };
        var Event = {
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SHOW: 'show',
            COLLAPSE: 'spcollapse',
            COLLAPSING: 'spcollapsing',
            COLLAPSED: 'collapsed'
        };
        var Dimension = {
            WIDTH: 'width',
            HEIGHT: 'height'
        };
        var Selector = {
            ACTIVES: '.show, .spcollapsing',
            DATA_TOGGLE: '[data-sptoggle="spcollapse"]'
            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };

        var SPCollapse =
            /*#__PURE__*/
            function () {
                function SPCollapse(element, config) {
                    this._isTransitioning = false;
                    this._element = element;
                    this._config = this._getConfig(config);
                    this._triggerArray = [].slice.call(document.querySelectorAll("[data-sptoggle=\"spcollapse\"][href=\"#" + element.id + "\"]," + ("[data-sptoggle=\"spcollapse\"][data-sptarget=\"#" + element.id + "\"]")));
                    var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

                    for (var i = 0, len = toggleList.length; i < len; i++) {
                        var elem = toggleList[i];
                        var selector = getSelectorFromElement(elem);
                        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
                            return foundElem === element;
                        });

                        if (selector !== null && filterElement.length > 0) {
                            this._selector = selector;

                            this._triggerArray.push(elem);
                        }
                    }

                    this._parent = this._config.parent ? this._getParent() : null;

                    if (!this._config.parent) {
                        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                    }

                    if (this._config.toggle) {
                        this.toggle();
                    }
                } // Getters


                var _proto = SPCollapse.prototype;

                // Public
                _proto.toggle = function toggle() {
                    if ($(this._element).hasClass(ClassName.SHOW)) {
                        this.hide();
                    } else {
                        this.show();
                    }
                };

                _proto.show = function show() {
                    var _this = this;

                    if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
                        return;
                    }

                    var actives;
                    var activesData;

                    if (this._parent) {
                        actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
                            if (typeof _this._config.parent === 'string') {
                                return elem.getAttribute('data-parent') === _this._config.parent;
                            }

                            return elem.classList.contains(ClassName.COLLAPSE);
                        });

                        if (actives.length === 0) {
                            actives = null;
                        }
                    }

                    if (actives) {
                        activesData = $(actives).not(this._selector).data(DATA_KEY);

                        if (activesData && activesData._isTransitioning) {
                            return;
                        }
                    }

                    var startEvent = $.Event(Event.SHOW);
                    $(this._element).trigger(startEvent);

                    if (startEvent.isDefaultPrevented()) {
                        return;
                    }

                    if (actives) {
                        SPCollapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

                        if (!activesData) {
                            $(actives).data(DATA_KEY, null);
                        }
                    }

                    var dimension = this._getDimension();

                    $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
                    this._element.style[dimension] = 0;

                    if (this._triggerArray.length) {
                        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
                    }

                    this.setTransitioning(true);

                    var complete = function complete() {
                        $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                        _this._element.style[dimension] = '';

                        _this.setTransitioning(false);

                        $(_this._element).trigger(Event.SHOWN);
                    };

                    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                    var scrollSize = "scroll" + capitalizedDimension;
                    var transitionDuration = getTransitionDurationFromElement(this._element);
                    $(this._element).one(TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
                    this._element.style[dimension] = this._element[scrollSize] + "px";
                };

                _proto.hide = function hide() {
                    var _this2 = this;

                    if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
                        return;
                    }

                    var startEvent = $.Event(Event.HIDE);
                    $(this._element).trigger(startEvent);

                    if (startEvent.isDefaultPrevented()) {
                        return;
                    }

                    var dimension = this._getDimension();

                    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
                    reflow(this._element);
                    $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
                    var triggerArrayLength = this._triggerArray.length;

                    if (triggerArrayLength > 0) {
                        for (var i = 0; i < triggerArrayLength; i++) {
                            var trigger = this._triggerArray[i];
                            var selector = getSelectorFromElement(trigger);

                            if (selector !== null) {
                                var $elem = $([].slice.call(document.querySelectorAll(selector)));

                                if (!$elem.hasClass(ClassName.SHOW)) {
                                    $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                                }
                            }
                        }
                    }

                    this.setTransitioning(true);

                    var complete = function complete() {
                        _this2.setTransitioning(false);

                        $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
                    };

                    this._element.style[dimension] = '';
                    var transitionDuration = getTransitionDurationFromElement(this._element);
                    $(this._element).one(TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
                };

                _proto.setTransitioning = function setTransitioning(isTransitioning) {
                    this._isTransitioning = isTransitioning;
                };

                _proto.dispose = function dispose() {
                    $.removeData(this._element, DATA_KEY);
                    this._config = null;
                    this._parent = null;
                    this._element = null;
                    this._triggerArray = null;
                    this._isTransitioning = null;
                } // Private
                ;

                _proto._getConfig = function _getConfig(config) {
                    config = _objectSpread({}, Default, config);
                    config.toggle = Boolean(config.toggle); // Coerce string values

                    typeCheckConfig(NAME, config, DefaultType);
                    return config;
                };

                _proto._getDimension = function _getDimension() {
                    var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
                    return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
                };

                _proto._getParent = function _getParent() {
                    var _this3 = this;

                    var parent;

                    if (isElement(this._config.parent)) {
                        parent = this._config.parent; // It's a jQuery object

                        if (typeof this._config.parent.jquery !== 'undefined') {
                            parent = this._config.parent[0];
                        }
                    } else {
                        parent = document.querySelector(this._config.parent);
                    }

                    var selector = "[data-sptoggle=\"spcollapse\"][data-parent=\"" + this._config.parent + "\"]";
                    var children = [].slice.call(parent.querySelectorAll(selector));
                    $(children).each(function (i, element) {
                        _this3._addAriaAndCollapsedClass(SPCollapse._getTargetFromElement(element), [element]);
                    });
                    return parent;
                };

                _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                    var isOpen = $(element).hasClass(ClassName.SHOW);

                    if (triggerArray.length) {
                        $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
                    }
                } // Static
                ;

                SPCollapse._getTargetFromElement = function _getTargetFromElement(element) {
                    var selector = getSelectorFromElement(element);
                    return selector ? document.querySelector(selector) : null;
                };

                SPCollapse._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function () {
                        var $this = $(this);
                        var data = $this.data(DATA_KEY);

                        var _config = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config ? config : {});

                        if (!data && _config.toggle && /show|hide/.test(config)) {
                            _config.toggle = false;
                        }

                        if (!data) {
                            data = new SPCollapse(this, _config);
                            $this.data(DATA_KEY, data);
                        }

                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"" + config + "\"");
                            }

                            data[config]();
                        }
                    });
                };

                _createClass(SPCollapse, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);

                return SPCollapse;
            }();
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.currentTarget.tagName === 'A') {
                event.preventDefault();
            }
            var $trigger = $(this);
            var selector = getSelectorFromElement(this);
            var selectors = [].slice.call(document.querySelectorAll(selector));
            $(selectors).each(function () {
                var $target = $(this);
                var data = $target.data(DATA_KEY);
                var config = data ? 'toggle' : $trigger.data();

                SPCollapse._jQueryInterface.call($target, config);
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = SPCollapse._jQueryInterface;
        $.fn[NAME].Constructor = SPCollapse;

        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return SPCollapse._jQueryInterface;
        };

        return SPCollapse;
    }());
})(jQuery);