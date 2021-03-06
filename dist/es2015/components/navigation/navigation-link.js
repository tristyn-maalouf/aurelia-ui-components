var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { inlineView, bindable, containerless, inject } from "aurelia-framework";
import { Router } from "aurelia-router";

export let NavigationLink = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <li class="item-content" class.bind="isActive ? 'active' : ''" click.trigger="followLink()">
        <div class="item-media">
            <i class="fa" class.bind="icon ? 'fa-' + icon : ''"></i>
        </div>

        <div class="item-inner">
            <div class="item-title" innerHtml.bind="title"></div>
        </div>
    </li>
</template>
`), _dec3 = inject(Router), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class NavigationLink {

    constructor(router) {
        _initDefineProp(this, "title", _descriptor, this);

        _initDefineProp(this, "href", _descriptor2, this);

        _initDefineProp(this, "isActive", _descriptor3, this);

        _initDefineProp(this, "icon", _descriptor4, this);

        this.router = router;
    }

    followLink() {
        if (this.href.substring(0, 4).toLowerCase() === 'http') {
            window.open(this.href, '_system');
        } else {
            this.router.navigate(this.href);
        }
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "href", [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isActive", [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
})), _class2)) || _class) || _class) || _class);