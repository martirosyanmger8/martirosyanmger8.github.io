// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/header-bg.png":[["header-bg.61f38efd.png","img/header-bg.png"],"img/header-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/add_description.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/table_budget.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./header.css":"css/header.css","./add_description.css":"css/add_description.css","./table_budget.css":"css/table_budget.css","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/models/Income.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Income =
/*#__PURE__*/
function () {
  function Income(id, description, value) {
    _classCallCheck(this, Income);

    this.id = id;
    this.description = description;
    this.value = Number(value);
  }

  _createClass(Income, [{
    key: "render",
    value: function render() {
      return "\n      <li class=\"income-item\" data-type='inc' data-id='".concat(this.id, "'>\n        <span class=\"span-description\">").concat(this.description, "</span>\n        <div>\n          <span class=\"span-value\">").concat(this.value, "</span>\n          <button class=\"btn btn-delete\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n          </button>\n        </div>\n      </li>\n    ");
    }
  }]);

  return Income;
}();

var _default = Income;
exports.default = _default;
},{}],"js/models/Expense.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Expense =
/*#__PURE__*/
function () {
  function Expense(id, description, value) {
    _classCallCheck(this, Expense);

    this.id = id;
    this.description = description;
    this.value = Number(value);
  }

  _createClass(Expense, [{
    key: "render",
    value: function render() {
      return "\n      <li class=\"expense-item\" data-type='exp' data-id='".concat(this.id, "'>\n        <span class=\"span-description\">").concat(this.description, "</span>\n        <div>\n          <span class=\"span-value\">").concat(this.value, "</span>\n          <button class=\"btn btn-delete\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n          </button>\n        </div>\n      </li>\n    ");
    }
  }]);

  return Expense;
}();

var _default = Expense;
exports.default = _default;
},{}],"js/helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonth = exports.calculateMoney = exports.calculateId = void 0;

var calculateId = function calculateId(array) {
  return array.length + 1;
};

exports.calculateId = calculateId;

var calculateMoney = function calculateMoney(array) {
  return array.reduce(function (sum, item) {
    return sum + item.value;
  }, 0);
};

exports.calculateMoney = calculateMoney;

var getMonth = function getMonth() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  return monthNames[date.getMonth()];
};

exports.getMonth = getMonth;
},{}],"js/models/Budget.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Income = _interopRequireDefault(require("./Income"));

var _Expense = _interopRequireDefault(require("./Expense"));

var _helper = require("../helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Budget =
/*#__PURE__*/
function () {
  function Budget() {
    _classCallCheck(this, Budget);

    this.expenses = [];
    this.incomes = [];
    this.totalExpenses = 0;
    this.totalIncomes = 0;
    this.total = 0;
  }

  _createClass(Budget, [{
    key: "addItem",
    value: function addItem(type, description, value) {
      var item;

      if (type === "inc") {
        item = new _Income.default((0, _helper.calculateId)(this.incomes), description, value);
        this.incomes.push(item);
      } else if (type === "exp") {
        item = new _Expense.default((0, _helper.calculateId)(this.expenses), description, value);
        this.expenses.push(item);
      } else {
        console.log("Wrong type!!!");
      }

      this.calculateBudget();
      return item;
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(id, type) {
      if (type === "inc") {
        this.incomes = this.incomes.filter(function (item) {
          return item.id !== id;
        });
      } else if (type === "exp") {
        this.expenses = this.expenses.filter(function (item) {
          return item.id !== id;
        });
      } else {
        console.log("Wrong type!!!");
      }

      this.calculateBudget();
    }
  }, {
    key: "calculateBudget",
    value: function calculateBudget() {
      this.totalIncomes = (0, _helper.calculateMoney)(this.incomes);
      this.totalExpenses = (0, _helper.calculateMoney)(this.expenses);
      this.total = this.totalIncomes - this.totalExpenses;
    }
  }, {
    key: "getBudget",
    value: function getBudget() {
      return {
        total: this.total,
        totalExpenses: this.totalExpenses,
        totalIncomes: this.totalIncomes
      };
    }
  }]);

  return Budget;
}();

var _default = Budget;
exports.default = _default;
},{"./Income":"js/models/Income.js","./Expense":"js/models/Expense.js","../helper":"js/helper.js"}],"js/View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DOM_ELEMENTS = void 0;

var _helper = require("./helper");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOM_ELEMENTS = {
  inputType: "#selector",
  inputDescription: "#input-description",
  inputValue: "#input-value",
  submitBtn: "#btn-submit",
  statContent: "#stat-content",
  incomesContainer: "#incomes-list",
  expensesContainer: "#expenses-list",
  budgetLabel: ".header-budget",
  incomeLabel: ".income .income-value",
  expensesLabel: ".expense .expenses-value"
};
exports.DOM_ELEMENTS = DOM_ELEMENTS;

var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, null, [{
    key: "getInputData",
    value: function getInputData() {
      return {
        type: document.querySelector(DOM_ELEMENTS.inputType).value,
        description: document.querySelector(DOM_ELEMENTS.inputDescription).value,
        value: document.querySelector(DOM_ELEMENTS.inputValue).value
      };
    }
  }, {
    key: "addListItem",
    value: function addListItem(item, type) {
      var html = item.render();

      if (type === "inc") {
        document.querySelector(DOM_ELEMENTS.incomesContainer).insertAdjacentHTML("beforeend", html);
      } else if (type === "exp") {
        document.querySelector(DOM_ELEMENTS.expensesContainer).insertAdjacentHTML("beforeend", html);
      } else {
        console.log("Wrong type!!!");
      }
    }
  }, {
    key: "displayBudget",
    value: function displayBudget() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _data$totalExpenses = data.totalExpenses,
          totalExpenses = _data$totalExpenses === void 0 ? 0 : _data$totalExpenses,
          _data$totalIncomes = data.totalIncomes,
          totalIncomes = _data$totalIncomes === void 0 ? 0 : _data$totalIncomes,
          _data$total = data.total,
          total = _data$total === void 0 ? 0 : _data$total;
      document.querySelector(DOM_ELEMENTS.budgetLabel).innerHTML = total;
      document.querySelector(DOM_ELEMENTS.incomeLabel).innerHTML = totalIncomes;
      document.querySelector(DOM_ELEMENTS.expensesLabel).innerHTML = totalExpenses;
    }
  }, {
    key: "clearInputs",
    value: function clearInputs() {
      document.querySelector(DOM_ELEMENTS.inputDescription).value = "";
      document.querySelector(DOM_ELEMENTS.inputValue).value = "";
    }
  }, {
    key: "removeListItem",
    value: function removeListItem(id, type) {
      var item = document.querySelector("[data-id='".concat(id, "'][data-type='").concat(type, "']"));
      item.remove();
    }
  }, {
    key: "displayMonth",
    value: function displayMonth() {
      var month = (0, _helper.getMonth)();
      document.querySelector(".header-text span").textContent = month;
    }
  }]);

  return View;
}();

var _default = View;
exports.default = _default;
},{"./helper":"js/helper.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Budget = _interopRequireDefault(require("./models/Budget"));

var _View = _interopRequireWildcard(require("./View"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Application =
/*#__PURE__*/
function () {
  function Application() {
    _classCallCheck(this, Application);

    this.budget = new _Budget.default();
  }

  _createClass(Application, [{
    key: "init",
    value: function init() {
      // setup month
      _View.default.displayMonth(); // setup initial budget


      _View.default.displayBudget(); // add listeners


      this.setupEventListeners();
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;

      document.querySelector(_View.DOM_ELEMENTS.submitBtn).addEventListener("click", function () {
        _this.addItem();
      });
      document.querySelector(_View.DOM_ELEMENTS.statContent).addEventListener("click", function (event) {
        _this.removeItem(event);
      });
    }
  }, {
    key: "addItem",
    value: function addItem() {
      // get data from inputs
      var inputData = _View.default.getInputData();

      var isValid = this.validateUserData(inputData);

      if (isValid) {
        // add item
        var type = inputData.type,
            description = inputData.description,
            value = inputData.value;
        var item = this.budget.addItem(type, description, value); // display item

        _View.default.addListItem(item, type); // clear inputs


        _View.default.clearInputs(); // get and display budget


        _View.default.displayBudget({
          totalExpenses: this.budget.totalExpenses,
          totalIncomes: this.budget.totalIncomes,
          total: this.budget.total
        });
      } else {//HW
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(event) {
      var buttonParent = event.target.parentNode.parentNode;
      var iconParent = buttonParent.parentNode;
      var id = buttonParent.dataset.id || iconParent.dataset.id;

      if (id) {
        var type = buttonParent.dataset.type || iconParent.dataset.type;

        _View.default.removeListItem(id, type);

        this.budget.deleteItem(Number(id), type);

        _View.default.displayBudget({
          totalExpenses: this.budget.totalExpenses,
          totalIncomes: this.budget.totalIncomes,
          total: this.budget.total
        });
      }
    }
  }, {
    key: "validateUserData",
    value: function validateUserData(data) {
      return true; // remove this line after you version is ready
      //HW
    }
  }]);

  return Application;
}();

var app = new Application();
var _default = app;
exports.default = _default;
},{"./models/Budget":"js/models/Budget.js","./View":"js/View.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../css/main.css");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.init();
},{"../css/main.css":"css/main.css","./app":"js/app.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55451" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map