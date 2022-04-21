"use strict";
/** @type {!Element} */
var input = document.getElementsByTagName("input")[0];
/** @type {!NodeList<Element>} */
var button = document.getElementsByClassName("button");
/** @type {boolean} */
var equals = false;
/** @type {boolean} */
var _iteratorNormalCompletion = true;
/** @type {boolean} */
var _didIteratorError = false;
var _iteratorError = undefined;
try {
  /**
   * @return {undefined}
   */
  var _loop = function _loop$jscomp$1$jscomp$0() {
    var i$jscomp$3$jscomp$0 = _step.value;
    i$jscomp$3$jscomp$0.addEventListener("click", function () {
      if (equals) {
        /** @type {string} */
        input.value = "";
        /** @type {boolean} */
        equals = false;
      }
      if (i$jscomp$3$jscomp$0.value === "=") {
        if (input.value) {
          /** @type {string} */
          input.value = input.value + " = " + eval(input.value);
          /** @type {boolean} */
          equals = true;
        }
      } else {
        input.value += i$jscomp$3$jscomp$0.value;
      }
      switch (i$jscomp$3$jscomp$0.value) {
        case "c":
          /** @type {string} */
          input.value = "";
          break;
        case "sqrt":
          /** @type {number} */
          input.value = Math.sqrt(parseInt(input.value));
      }
    });
  };
  var _iterator = button[Symbol.iterator]();
  var _step;
  for (
    ;
    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
    _iteratorNormalCompletion = true
  ) {
    _loop();
  }
} catch (err) {
  /** @type {boolean} */
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
