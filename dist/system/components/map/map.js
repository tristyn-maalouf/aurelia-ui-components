'use strict';

System.register(['aurelia-framework', '../../config'], function (_export, _context) {
    "use strict";

    var inject, bindable, inlineView, containerless, Config, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, GMAPS_EMBED_URL_PREFIX, Map;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            inlineView = _aureliaFramework.inlineView;
            containerless = _aureliaFramework.containerless;
        }, function (_config) {
            Config = _config.Config;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            GMAPS_EMBED_URL_PREFIX = 'https://www.google.com/maps/embed/v1/search';

            _export('Map', Map = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <iframe width="500" height="275" frameborder="0" style="border:0" src.bind="source" allowfullscreen responsive-iframe></iframe>\n</template>\n'), _dec3 = inject(Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
                function Map(config) {
                    _classCallCheck(this, Map);

                    _initDefineProp(this, 'location', _descriptor, this);

                    this.apiKey = config.googleMapsApiKey;
                }

                _createClass(Map, [{
                    key: 'source',
                    get: function get() {
                        return GMAPS_EMBED_URL_PREFIX + '?key=' + this.apiKey + '&q=' + this.location;
                    }
                }]);

                return Map;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'location', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            })), _class2)) || _class) || _class) || _class));

            _export('Map', Map);
        }
    };
});