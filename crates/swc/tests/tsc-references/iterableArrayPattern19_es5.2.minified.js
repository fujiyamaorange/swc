import * as swcHelpers from "@swc/helpers";
var Bar = function() {
    "use strict";
    swcHelpers.classCallCheck(this, Bar);
}, Foo = function(Bar1) {
    "use strict";
    swcHelpers.inherits(Foo, Bar1);
    var _super = swcHelpers.createSuper(Foo);
    function Foo() {
        return swcHelpers.classCallCheck(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(Bar), _iterator = Symbol.iterator, FooArrayIterator = function() {
    "use strict";
    function FooArrayIterator() {
        swcHelpers.classCallCheck(this, FooArrayIterator);
    }
    var _proto = FooArrayIterator.prototype;
    return _proto.next = function() {
        return {
            value: [
                new Foo
            ],
            done: !1
        };
    }, _proto[_iterator] = function() {
        return this;
    }, FooArrayIterator;
}();
!function(param) {
    var _param = swcHelpers.slicedToArray(param, 2);
    swcHelpers.slicedToArray(_param[0], 1)[0], _param[1];
}(new FooArrayIterator);
