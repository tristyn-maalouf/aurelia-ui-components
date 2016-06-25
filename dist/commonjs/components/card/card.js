'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Card = undefined;

var _dec, _dec2, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = exports.Card = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="card">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function Card() {
    _classCallCheck(this, Card);
}) || _class) || _class);