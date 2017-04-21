/** @module polyfill
Misc polyfills
*/
/*jshint -W121 */
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/object/assign';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};
