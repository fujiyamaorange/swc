import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var foo = function() {
    "use strict";
    _class_call_check(this, foo);
};
export default function bar() {};
export default 10;
import Entity from "./m1";
Entity();
export { foo as default };
