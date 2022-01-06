// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kS06O":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _shapeViewJs = require("./view/shapeView.js");
var _shapeViewJsDefault = parcelHelpers.interopDefault(_shapeViewJs);
const styleSheetEl = document.getElementById("style-sheet");
const btnDarkMode = document.getElementById("dark-theme");
btnDarkMode.addEventListener("click", ()=>{
    styleSheetEl.setAttribute("href", "src/sass/mainDark.scss");
});
const canvasEl = document.getElementById("canvas1");
// function shapeController() {
//     console.log("shapeController call");
// }
// //adjasting to window resize
// window.addEventListener("resize", () => {
//     shapeController();
// });
function init() {
    _shapeViewJsDefault.default.addInputListeners();
    _shapeViewJsDefault.default.updateMyElement();
}
init();

},{"./model":"1pVJj","./view/shapeView.js":"39mKi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data
);
var _canvasJs = require("./view/canvas.js");
let data = {
    clickCounter: 0,
    clickedPoint: '',
    continuosPoint: '',
    getShapeDimentions: function() {
        return [
            this.continuosPoint[0] - this.clickedPoint[0],
            this.continuosPoint[1] - this.clickedPoint[1]
        ];
    },
    getMousePosition: function(event) {
        return [
            event.clientX - _canvasJs.getCanvasOffset().offSetLeft,
            event.clientY - _canvasJs.getCanvasOffset().offSetTop, 
        ];
    },
    setClickPoint: function(event) {
        this.clickedPoint = this.getMousePosition(event);
    },
    setContinuosPoint: function(event) {
        this.continuosPoint = this.getMousePosition(event);
    }
};

},{"./view/canvas.js":"lNWpQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lNWpQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drewBoundingBox", ()=>drewBoundingBox
);
parcelHelpers.export(exports, "updateSize", ()=>updateSize
);
parcelHelpers.export(exports, "getCanvasOffset", ()=>getCanvasOffset
);
/** @type {CanvasRenderingContext2D} */ var _configurationJs = require("../configuration.js");
var _configurationJsDefault = parcelHelpers.interopDefault(_configurationJs);
const elDesk = document.querySelector('.desk__container');
const wrapperEl = document.querySelector('.wrapper__all');
//canvas init
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
function drewBoundingBox(point1, point2) {
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    boundingBox(point1, point2);
}
function updateSize() {
    // canvas.width = elDesk.offsetWidth;
    // canvas.height = elDesk.offsetHeight;
    canvas.width = elDesk.clientWidth;
    canvas.height = elDesk.clientHeight;
}
function getCanvasOffset() {
    const paddingLeft = window.getComputedStyle(wrapperEl, null).getPropertyValue('padding-left').replace('px', '');
    const paddingRight = window.getComputedStyle(wrapperEl, null).getPropertyValue('padding-right').replace('px', '');
    const paddingTop = window.getComputedStyle(wrapperEl, null).getPropertyValue('padding-top').replace('px', '');
    const topBarHeiget = document.querySelector('.top-bar__container').offsetHeight;
    return {
        offSetLeft: Number(paddingLeft),
        offSetRight: Number(paddingRight),
        offSetTop: Number(topBarHeiget) + Number(paddingTop)
    };
}
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     boundingBox();
//     requestAnimationFrame(animate);
// }
function boundingBox(startPoint, dimentions) {
    // [375, 140],[450, 450]
    // let startPoint = [375, 140];
    // let dimentions = [450, 450];
    //ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
    ctx.fillStyle = _configurationJsDefault.default.wireColor;
    ctx.strokeStyle = _configurationJsDefault.default.cornerCircules;
    ctx.beginPath();
    ctx.arc(startPoint[0], startPoint[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0] + dimentions[0], startPoint[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0] + dimentions[0], startPoint[1] + dimentions[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(startPoint[0], startPoint[1] + dimentions[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.strokeRect(x, y, width, height);
    ctx.lineWidth = 1;
    ctx.strokeRect(startPoint[0], startPoint[1], dimentions[0], dimentions[1]);
}
function lineCircle() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}
function house() {
    ctx.lineWidth = 10;
    // Wall
    ctx.strokeRect(75, 140, 150, 110);
    // Door
    ctx.fillRect(130, 190, 40, 60);
    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}

},{"../configuration.js":"3vWfX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3vWfX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const config = {
    //bounding box colors
    wireColor: 'grey',
    cornerCircules: 'grey'
};
exports.default = config;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"39mKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helper = require("../helper");
const inputArr = Array.from(document.querySelectorAll(".input"));
class ShapeCL {
    #parentElement = document.querySelector(".desk__main");
    #myElement = document.getElementById("my-element");
    #myElementText = document.querySelector(".my-element__text");
    #inputText = document.getElementById("input-text");
    //self explanatory
    #inputData = {
        inputText: "My element",
        fontSize: 2,
        padding: 2,
        color: "#000",
        // textalign: true,
        // textTransform: false,
        backgroundColorCheck: false,
        backgroundColor: "#fcba03",
        borderRadiusCheck: false,
        borderRadius: 0,
        borderCheck: false,
        borderAll: true,
        borderSeparate: false,
        borderWidth: 0.5,
        borderType: "solid",
        borderColor: "#000",
        boxShadowCheck: false,
        boxShadowOffsetXSlider: 0,
        boxShadowOffsetX: 0,
        boxShadowOffsetYSlider: 0.5,
        boxShadowOffsetY: 0.5,
        boxShadowBlurSlider: 1,
        boxShadowBlur: 1,
        boxShadowSpreadSlider: 0,
        boxShadowSpread: 1,
        boxShadowColor: "#000",
        boxShadowAlphaSlider: 0.5,
        boxShadowAlpha: 0.5
    };
    //an array of the data properties
     #inputDataPropArr() {
        let propArr = [];
        for(let prop in this.#inputData)propArr.push(prop);
        return propArr;
    }
    //element width and height
    getElementDimentions() {
        return [
            this.#myElement.offsetWidth,
            this.#myElement.offsetHeight
        ];
    }
    //center the element to the canvas
    // not in use at the moment
    centerShape() {
        this.#myElement.style.marginLeft = this.#parentElement.offsetWidth / 2 + "px";
        this.#myElement.style.marginTop = this.#parentElement.offsetHeight / 2 + "px";
    }
    //adding the input listeners
    addInputListeners() {
        inputArr.forEach((el, i)=>{
            if (el.type === "radio" || el.type === "checkbox") el.addEventListener("input", (e)=>{
                this.#setDataProperty(el.checked, i);
                // console.log(el.type, el.checked, i, "checked");
                this.updateMyElement();
                this.#hideElement(el);
            });
            else el.addEventListener("input", (e)=>{
                this.#setDataProperty(el.value, i);
                // console.log(el.type, el.value, i, "value");
                this.updateMyElement();
            });
        });
        this.#inputText.addEventListener("focus", ()=>{
            this.updateMyElement();
        // this.blinkingCursor();
        });
    }
     #addElementTextListener() {
        this.#parentElement.lastChild.addEventListener("dblclick", (e)=>{
            this.#inputText.focus();
            //puts the cursor at the end of the line
            let val = this.#inputText.value;
            this.#inputText.value = "";
            this.#inputText.value = val;
        });
    }
    getInputText() {
        return this.#inputText.value;
    }
    //setting the input values to the data obj
     #setDataProperty(value, index) {
        this.#inputData[this.#inputDataPropArr()[index]] = value;
    }
    //generating new updated markup and inserting to the UI
    updateMyElement() {
        this.#clear();
        this.#parentElement.insertAdjacentHTML("afterbegin", this.#generateElementStyle());
        this.#addElementTextListener();
    }
    //clearing "my element"
     #clear() {
        this.#parentElement.innerHTML = "";
    }
     #hideElement(el1) {
        if (el1.id) {
            const elArr = Array.from(document.querySelectorAll(`.${el1.id}`));
            elArr.forEach((el, i)=>{
                el.classList.toggle("hidden");
            });
        }
    }
    //generating new markup with the updated data obj
     #generateElementStyle() {
        return `
        <style>
            .my-element {
                font-size: ${this.#inputData.fontSize}rem;
                padding: ${this.#inputData.padding}rem;
                color: ${this.#inputData.color};

                background-color: ${this.#inputData.backgroundColor};

                border-radius: ${this.#inputData.borderRadius}rem;

                border: ${this.#inputData.borderWidth}rem 
                ${this.#inputData.borderType} 
                ${this.#inputData.borderColor};

                box-shadow: ${this.#inputData.boxShadowOffsetXSlider}rem 
                ${this.#inputData.boxShadowOffsetYSlider}rem 
                ${this.#inputData.boxShadowBlurSlider}rem 
                ${this.#inputData.boxShadowSpreadSlider}rem 
                rgba(${_helper.hexToRGB(this.#inputData.boxShadowColor)},${this.#inputData.boxShadowAlphaSlider});
            }
            .my-element__text::selection{
                color: gold;
                background-color: red;
            }
        </style>
        <div class="my-element" id="my-element">
            <div class="my-element__text">${this.#inputData.inputText}</div>
        </div>`;
    }
}
exports.default = new ShapeCL();

},{"../helper":"gDUlg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gDUlg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexToRGB", ()=>hexToRGB
);
function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
    // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }
    return `${+r},${+g},${+b}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kS06O","lA0Es"], "lA0Es", "parcelRequire8288")

//# sourceMappingURL=index.05cf099e.js.map
