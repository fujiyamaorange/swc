//// [exportSpecifiers.ts]
//// [/imports.ts]
import { type, as, something, foo, bar } from "./exports.js";
type;
as; // Error (used in emitting position)
something; // Error (used in emitting position)
foo; // Error (used in emitting position)
bar; // Error (used in emitting position)
//// [/exports.ts]
//! 
//!   x The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.
//!    ,----
//!  9 | export type { type something as whatever }; // Error
//!    :               ^^^^
//!    `----