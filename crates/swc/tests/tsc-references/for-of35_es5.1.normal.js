import * as swcHelpers from "@swc/helpers";
var _iterator = Symbol.iterator;
var StringIterator = //@target: ES6
//@noImplicitAny: true
/*#__PURE__*/ function() {
    "use strict";
    function StringIterator() {
        swcHelpers.classCallCheck(this, StringIterator);
    }
    var _proto = StringIterator.prototype;
    _proto.next = function next() {
        return {
            done: true,
            value: v
        };
    };
    _proto[_iterator] = function() {
        return this;
    };
    return StringIterator;
}();
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator1 = (new StringIterator)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator1.next()).done); _iteratorNormalCompletion = true){
        var v = _step.value;
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator1.return != null) {
            _iterator1.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
