//@jsx: react
//@module: amd
//@filename: react.d.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export var MyClass = function MyClass() {
    "use strict";
    _class_call_check(this, MyClass);
};
//@filename: file2.tsx
// Should not elide React import
import * as React from "react";
/*#__PURE__*/ React.createElement(MyClass, null);
