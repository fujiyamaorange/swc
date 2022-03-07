import * as swcHelpers from "@swc/helpers";
var A = // @noImplicitOverride: true
// @allowJs: true
// @checkJs: true
// @noEmit: true
// @Filename: a.js
/*#__PURE__*/ function() {
    "use strict";
    function A() {
        swcHelpers.classCallCheck(this, A);
    }
    var _proto = A.prototype;
    _proto.doSomething = function doSomething() {};
    return A;
}();
var B = /*#__PURE__*/ function(A) {
    "use strict";
    swcHelpers.inherits(B, A);
    var _super = swcHelpers.createSuper(B);
    function B() {
        swcHelpers.classCallCheck(this, B);
        return _super.apply(this, arguments);
    }
    var _proto = B.prototype;
    /** @override  */ _proto.doSomethang = function doSomethang() {};
    return B;
}(A);
