import * as swcHelpers from "@swc/helpers";
var Base = // @target: es6
/*#__PURE__*/ function() {
    "use strict";
    function Base() {
        swcHelpers.classCallCheck(this, Base);
    }
    var _proto = Base.prototype;
    _proto.bar = function bar() {
        return 0;
    };
    return Base;
}();
var tmp = super.bar();
var C = /*#__PURE__*/ function(Base) {
    "use strict";
    swcHelpers.inherits(C, Base);
    var _super = swcHelpers.createSuper(C);
    function C() {
        swcHelpers.classCallCheck(this, C);
        return _super.apply(this, arguments);
    }
    var _proto = C.prototype;
    // Gets emitted as super, not _super, which is consistent with
    // use of super in static properties initializers.
    _proto[tmp] = function() {};
    return C;
}(Base);
