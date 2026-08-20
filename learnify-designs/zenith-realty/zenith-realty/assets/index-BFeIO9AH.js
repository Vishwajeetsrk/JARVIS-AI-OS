var dI = Object.defineProperty;
var hI = (e, t, n) =>
  t in e ? dI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Pu = (e, t, n) => hI(e, typeof t != "symbol" ? t + "" : t, n);
function pI(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qh = { exports: {} },
  cs = {},
  Yh = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xx;
function mI() {
  if (xx) return be;
  xx = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    s = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    m = Symbol.iterator;
  function g(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (m && j[m]) || j["@@iterator"]), typeof j == "function" ? j : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    w = {};
  function S(j, K, me) {
    ((this.props = j), (this.context = K), (this.refs = w), (this.updater = me || x));
  }
  ((S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (j, K) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, j, K, "setState");
    }),
    (S.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    }));
  function C() {}
  C.prototype = S.prototype;
  function A(j, K, me) {
    ((this.props = j), (this.context = K), (this.refs = w), (this.updater = me || x));
  }
  var k = (A.prototype = new C());
  ((k.constructor = A), b(k, S.prototype), (k.isPureReactComponent = !0));
  var O = Array.isArray,
    _ = Object.prototype.hasOwnProperty,
    I = { current: null },
    R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(j, K, me) {
    var xe,
      we = {},
      Pe = null,
      Me = null;
    if (K != null)
      for (xe in (K.ref !== void 0 && (Me = K.ref), K.key !== void 0 && (Pe = "" + K.key), K))
        _.call(K, xe) && !R.hasOwnProperty(xe) && (we[xe] = K[xe]);
    var Ae = arguments.length - 2;
    if (Ae === 1) we.children = me;
    else if (1 < Ae) {
      for (var J = Array(Ae), te = 0; te < Ae; te++) J[te] = arguments[te + 2];
      we.children = J;
    }
    if (j && j.defaultProps)
      for (xe in ((Ae = j.defaultProps), Ae)) we[xe] === void 0 && (we[xe] = Ae[xe]);
    return { $$typeof: e, type: j, key: Pe, ref: Me, props: we, _owner: I.current };
  }
  function W(j, K) {
    return { $$typeof: e, type: j.type, key: K, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function B(j) {
    return typeof j == "object" && j !== null && j.$$typeof === e;
  }
  function q(j) {
    var K = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (me) {
        return K[me];
      })
    );
  }
  var U = /\/+/g;
  function fe(j, K) {
    return typeof j == "object" && j !== null && j.key != null ? q("" + j.key) : K.toString(36);
  }
  function ie(j, K, me, xe, we) {
    var Pe = typeof j;
    (Pe === "undefined" || Pe === "boolean") && (j = null);
    var Me = !1;
    if (j === null) Me = !0;
    else
      switch (Pe) {
        case "string":
        case "number":
          Me = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case e:
            case t:
              Me = !0;
          }
      }
    if (Me)
      return (
        (Me = j),
        (we = we(Me)),
        (j = xe === "" ? "." + fe(Me, 0) : xe),
        O(we)
          ? ((me = ""),
            j != null && (me = j.replace(U, "$&/") + "/"),
            ie(we, K, me, "", function (te) {
              return te;
            }))
          : we != null &&
            (B(we) &&
              (we = W(
                we,
                me +
                  (!we.key || (Me && Me.key === we.key)
                    ? ""
                    : ("" + we.key).replace(U, "$&/") + "/") +
                  j,
              )),
            K.push(we)),
        1
      );
    if (((Me = 0), (xe = xe === "" ? "." : xe + ":"), O(j)))
      for (var Ae = 0; Ae < j.length; Ae++) {
        Pe = j[Ae];
        var J = xe + fe(Pe, Ae);
        Me += ie(Pe, K, me, J, we);
      }
    else if (((J = g(j)), typeof J == "function"))
      for (j = J.call(j), Ae = 0; !(Pe = j.next()).done;)
        ((Pe = Pe.value), (J = xe + fe(Pe, Ae++)), (Me += ie(Pe, K, me, J, we)));
    else if (Pe === "object")
      throw (
        (K = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (K === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : K) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Me;
  }
  function ve(j, K, me) {
    if (j == null) return j;
    var xe = [],
      we = 0;
    return (
      ie(j, xe, "", "", function (Pe) {
        return K.call(me, Pe, we++);
      }),
      xe
    );
  }
  function ye(j) {
    if (j._status === -1) {
      var K = j._result;
      ((K = K()),
        K.then(
          function (me) {
            (j._status === 0 || j._status === -1) && ((j._status = 1), (j._result = me));
          },
          function (me) {
            (j._status === 0 || j._status === -1) && ((j._status = 2), (j._result = me));
          },
        ),
        j._status === -1 && ((j._status = 0), (j._result = K)));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var pe = { current: null },
    H = { transition: null },
    ne = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: H, ReactCurrentOwner: I };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (be.Children = {
      map: ve,
      forEach: function (j, K, me) {
        ve(
          j,
          function () {
            K.apply(this, arguments);
          },
          me,
        );
      },
      count: function (j) {
        var K = 0;
        return (
          ve(j, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (j) {
        return (
          ve(j, function (K) {
            return K;
          }) || []
        );
      },
      only: function (j) {
        if (!B(j))
          throw Error("React.Children.only expected to receive a single React element child.");
        return j;
      },
    }),
    (be.Component = S),
    (be.Fragment = n),
    (be.Profiler = o),
    (be.PureComponent = A),
    (be.StrictMode = r),
    (be.Suspense = f),
    (be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (be.act = X),
    (be.cloneElement = function (j, K, me) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            ".",
        );
      var xe = b({}, j.props),
        we = j.key,
        Pe = j.ref,
        Me = j._owner;
      if (K != null) {
        if (
          (K.ref !== void 0 && ((Pe = K.ref), (Me = I.current)),
          K.key !== void 0 && (we = "" + K.key),
          j.type && j.type.defaultProps)
        )
          var Ae = j.type.defaultProps;
        for (J in K)
          _.call(K, J) &&
            !R.hasOwnProperty(J) &&
            (xe[J] = K[J] === void 0 && Ae !== void 0 ? Ae[J] : K[J]);
      }
      var J = arguments.length - 2;
      if (J === 1) xe.children = me;
      else if (1 < J) {
        Ae = Array(J);
        for (var te = 0; te < J; te++) Ae[te] = arguments[te + 2];
        xe.children = Ae;
      }
      return { $$typeof: e, type: j.type, key: we, ref: Pe, props: xe, _owner: Me };
    }),
    (be.createContext = function (j) {
      return (
        (j = {
          $$typeof: l,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (j.Provider = { $$typeof: s, _context: j }),
        (j.Consumer = j)
      );
    }),
    (be.createElement = F),
    (be.createFactory = function (j) {
      var K = F.bind(null, j);
      return ((K.type = j), K);
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (j) {
      return { $$typeof: c, render: j };
    }),
    (be.isValidElement = B),
    (be.lazy = function (j) {
      return { $$typeof: p, _payload: { _status: -1, _result: j }, _init: ye };
    }),
    (be.memo = function (j, K) {
      return { $$typeof: d, type: j, compare: K === void 0 ? null : K };
    }),
    (be.startTransition = function (j) {
      var K = H.transition;
      H.transition = {};
      try {
        j();
      } finally {
        H.transition = K;
      }
    }),
    (be.unstable_act = X),
    (be.useCallback = function (j, K) {
      return pe.current.useCallback(j, K);
    }),
    (be.useContext = function (j) {
      return pe.current.useContext(j);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (j) {
      return pe.current.useDeferredValue(j);
    }),
    (be.useEffect = function (j, K) {
      return pe.current.useEffect(j, K);
    }),
    (be.useId = function () {
      return pe.current.useId();
    }),
    (be.useImperativeHandle = function (j, K, me) {
      return pe.current.useImperativeHandle(j, K, me);
    }),
    (be.useInsertionEffect = function (j, K) {
      return pe.current.useInsertionEffect(j, K);
    }),
    (be.useLayoutEffect = function (j, K) {
      return pe.current.useLayoutEffect(j, K);
    }),
    (be.useMemo = function (j, K) {
      return pe.current.useMemo(j, K);
    }),
    (be.useReducer = function (j, K, me) {
      return pe.current.useReducer(j, K, me);
    }),
    (be.useRef = function (j) {
      return pe.current.useRef(j);
    }),
    (be.useState = function (j) {
      return pe.current.useState(j);
    }),
    (be.useSyncExternalStore = function (j, K, me) {
      return pe.current.useSyncExternalStore(j, K, me);
    }),
    (be.useTransition = function () {
      return pe.current.useTransition();
    }),
    (be.version = "18.3.1"),
    be
  );
}
var wx;
function da() {
  return (wx || ((wx = 1), (Yh.exports = mI())), Yh.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bx;
function vI() {
  if (bx) return cs;
  bx = 1;
  var e = da(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, f, d) {
    var p,
      m = {},
      g = null,
      x = null;
    (d !== void 0 && (g = "" + d),
      f.key !== void 0 && (g = "" + f.key),
      f.ref !== void 0 && (x = f.ref));
    for (p in f) r.call(f, p) && !s.hasOwnProperty(p) && (m[p] = f[p]);
    if (c && c.defaultProps) for (p in ((f = c.defaultProps), f)) m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: t, type: c, key: g, ref: x, props: m, _owner: o.current };
  }
  return ((cs.Fragment = n), (cs.jsx = l), (cs.jsxs = l), cs);
}
var Sx;
function gI() {
  return (Sx || ((Sx = 1), (qh.exports = vI())), qh.exports);
}
var N = gI(),
  E = da();
const yI = ao(E),
  xI = pI({ __proto__: null, default: yI }, [E]);
var Eu = {},
  Gh = { exports: {} },
  Gt = {},
  Xh = { exports: {} },
  Zh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Px;
function wI() {
  return (
    Px ||
      ((Px = 1),
      (function (e) {
        function t(H, ne) {
          var X = H.length;
          H.push(ne);
          e: for (; 0 < X;) {
            var j = (X - 1) >>> 1,
              K = H[j];
            if (0 < o(K, ne)) ((H[j] = ne), (H[X] = K), (X = j));
            else break e;
          }
        }
        function n(H) {
          return H.length === 0 ? null : H[0];
        }
        function r(H) {
          if (H.length === 0) return null;
          var ne = H[0],
            X = H.pop();
          if (X !== ne) {
            H[0] = X;
            e: for (var j = 0, K = H.length, me = K >>> 1; j < me;) {
              var xe = 2 * (j + 1) - 1,
                we = H[xe],
                Pe = xe + 1,
                Me = H[Pe];
              if (0 > o(we, X))
                Pe < K && 0 > o(Me, we)
                  ? ((H[j] = Me), (H[Pe] = X), (j = Pe))
                  : ((H[j] = we), (H[xe] = X), (j = xe));
              else if (Pe < K && 0 > o(Me, X)) ((H[j] = Me), (H[Pe] = X), (j = Pe));
              else break e;
            }
          }
          return ne;
        }
        function o(H, ne) {
          var X = H.sortIndex - ne.sortIndex;
          return X !== 0 ? X : H.id - ne.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var s = performance;
          e.unstable_now = function () {
            return s.now();
          };
        } else {
          var l = Date,
            c = l.now();
          e.unstable_now = function () {
            return l.now() - c;
          };
        }
        var f = [],
          d = [],
          p = 1,
          m = null,
          g = 3,
          x = !1,
          b = !1,
          w = !1,
          S = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function k(H) {
          for (var ne = n(d); ne !== null;) {
            if (ne.callback === null) r(d);
            else if (ne.startTime <= H) (r(d), (ne.sortIndex = ne.expirationTime), t(f, ne));
            else break;
            ne = n(d);
          }
        }
        function O(H) {
          if (((w = !1), k(H), !b))
            if (n(f) !== null) ((b = !0), ye(_));
            else {
              var ne = n(d);
              ne !== null && pe(O, ne.startTime - H);
            }
        }
        function _(H, ne) {
          ((b = !1), w && ((w = !1), C(F), (F = -1)), (x = !0));
          var X = g;
          try {
            for (k(ne), m = n(f); m !== null && (!(m.expirationTime > ne) || (H && !q()));) {
              var j = m.callback;
              if (typeof j == "function") {
                ((m.callback = null), (g = m.priorityLevel));
                var K = j(m.expirationTime <= ne);
                ((ne = e.unstable_now()),
                  typeof K == "function" ? (m.callback = K) : m === n(f) && r(f),
                  k(ne));
              } else r(f);
              m = n(f);
            }
            if (m !== null) var me = !0;
            else {
              var xe = n(d);
              (xe !== null && pe(O, xe.startTime - ne), (me = !1));
            }
            return me;
          } finally {
            ((m = null), (g = X), (x = !1));
          }
        }
        var I = !1,
          R = null,
          F = -1,
          W = 5,
          B = -1;
        function q() {
          return !(e.unstable_now() - B < W);
        }
        function U() {
          if (R !== null) {
            var H = e.unstable_now();
            B = H;
            var ne = !0;
            try {
              ne = R(!0, H);
            } finally {
              ne ? fe() : ((I = !1), (R = null));
            }
          } else I = !1;
        }
        var fe;
        if (typeof A == "function")
          fe = function () {
            A(U);
          };
        else if (typeof MessageChannel < "u") {
          var ie = new MessageChannel(),
            ve = ie.port2;
          ((ie.port1.onmessage = U),
            (fe = function () {
              ve.postMessage(null);
            }));
        } else
          fe = function () {
            S(U, 0);
          };
        function ye(H) {
          ((R = H), I || ((I = !0), fe()));
        }
        function pe(H, ne) {
          F = S(function () {
            H(e.unstable_now());
          }, ne);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            b || x || ((b = !0), ye(_));
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(f);
          }),
          (e.unstable_next = function (H) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = g;
            }
            var X = g;
            g = ne;
            try {
              return H();
            } finally {
              g = X;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (H, ne) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var X = g;
            g = H;
            try {
              return ne();
            } finally {
              g = X;
            }
          }),
          (e.unstable_scheduleCallback = function (H, ne, X) {
            var j = e.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? j + X : j))
                : (X = j),
              H)
            ) {
              case 1:
                var K = -1;
                break;
              case 2:
                K = 250;
                break;
              case 5:
                K = 1073741823;
                break;
              case 4:
                K = 1e4;
                break;
              default:
                K = 5e3;
            }
            return (
              (K = X + K),
              (H = {
                id: p++,
                callback: ne,
                priorityLevel: H,
                startTime: X,
                expirationTime: K,
                sortIndex: -1,
              }),
              X > j
                ? ((H.sortIndex = X),
                  t(d, H),
                  n(f) === null && H === n(d) && (w ? (C(F), (F = -1)) : (w = !0), pe(O, X - j)))
                : ((H.sortIndex = K), t(f, H), b || x || ((b = !0), ye(_))),
              H
            );
          }),
          (e.unstable_shouldYield = q),
          (e.unstable_wrapCallback = function (H) {
            var ne = g;
            return function () {
              var X = g;
              g = ne;
              try {
                return H.apply(this, arguments);
              } finally {
                g = X;
              }
            };
          }));
      })(Zh)),
    Zh
  );
}
var Ex;
function bI() {
  return (Ex || ((Ex = 1), (Xh.exports = wI())), Xh.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cx;
function SI() {
  if (Cx) return Gt;
  Cx = 1;
  var e = da(),
    t = bI();
  function n(i) {
    for (
      var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, u = 1;
      u < arguments.length;
      u++
    )
      a += "&args[]=" + encodeURIComponent(arguments[u]);
    return (
      "Minified React error #" +
      i +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var r = new Set(),
    o = {};
  function s(i, a) {
    (l(i, a), l(i + "Capture", a));
  }
  function l(i, a) {
    for (o[i] = a, i = 0; i < a.length; i++) r.add(a[i]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    d =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    p = {},
    m = {};
  function g(i) {
    return f.call(m, i) ? !0 : f.call(p, i) ? !1 : d.test(i) ? (m[i] = !0) : ((p[i] = !0), !1);
  }
  function x(i, a, u, h) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return h
          ? !1
          : u !== null
            ? !u.acceptsBooleans
            : ((i = i.toLowerCase().slice(0, 5)), i !== "data-" && i !== "aria-");
      default:
        return !1;
    }
  }
  function b(i, a, u, h) {
    if (a === null || typeof a > "u" || x(i, a, u, h)) return !0;
    if (h) return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function w(i, a, u, h, v, y, P) {
    ((this.acceptsBooleans = a === 2 || a === 3 || a === 4),
      (this.attributeName = h),
      (this.attributeNamespace = v),
      (this.mustUseProperty = u),
      (this.propertyName = i),
      (this.type = a),
      (this.sanitizeURL = y),
      (this.removeEmptyString = P));
  }
  var S = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (i) {
      S[i] = new w(i, 0, !1, i, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (i) {
      var a = i[0];
      S[a] = new w(a, 1, !1, i[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (i) {
      S[i] = new w(i, 2, !1, i.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (i) {
        S[i] = new w(i, 2, !1, i, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (i) {
        S[i] = new w(i, 3, !1, i.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (i) {
      S[i] = new w(i, 3, !0, i, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (i) {
      S[i] = new w(i, 4, !1, i, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (i) {
      S[i] = new w(i, 6, !1, i, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (i) {
      S[i] = new w(i, 5, !1, i.toLowerCase(), null, !1, !1);
    }));
  var C = /[\-:]([a-z])/g;
  function A(i) {
    return i[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (i) {
      var a = i.replace(C, A);
      S[a] = new w(a, 1, !1, i, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (i) {
        var a = i.replace(C, A);
        S[a] = new w(a, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (i) {
      var a = i.replace(C, A);
      S[a] = new w(a, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (i) {
      S[i] = new w(i, 1, !1, i.toLowerCase(), null, !1, !1);
    }),
    (S.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (i) {
      S[i] = new w(i, 1, !1, i.toLowerCase(), null, !0, !0);
    }));
  function k(i, a, u, h) {
    var v = S.hasOwnProperty(a) ? S[a] : null;
    (v !== null
      ? v.type !== 0
      : h || !(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
      (b(a, u, v, h) && (u = null),
      h || v === null
        ? g(a) && (u === null ? i.removeAttribute(a) : i.setAttribute(a, "" + u))
        : v.mustUseProperty
          ? (i[v.propertyName] = u === null ? (v.type === 3 ? !1 : "") : u)
          : ((a = v.attributeName),
            (h = v.attributeNamespace),
            u === null
              ? i.removeAttribute(a)
              : ((v = v.type),
                (u = v === 3 || (v === 4 && u === !0) ? "" : "" + u),
                h ? i.setAttributeNS(h, a, u) : i.setAttribute(a, u))));
  }
  var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _ = Symbol.for("react.element"),
    I = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    W = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    q = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    fe = Symbol.for("react.suspense"),
    ie = Symbol.for("react.suspense_list"),
    ve = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    pe = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function ne(i) {
    return i === null || typeof i != "object"
      ? null
      : ((i = (H && i[H]) || i["@@iterator"]), typeof i == "function" ? i : null);
  }
  var X = Object.assign,
    j;
  function K(i) {
    if (j === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        j = (a && a[1]) || "";
      }
    return (
      `
` +
      j +
      i
    );
  }
  var me = !1;
  function xe(i, a) {
    if (!i || me) return "";
    me = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (
          ((a = function () {
            throw Error();
          }),
          Object.defineProperty(a.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(a, []);
          } catch (V) {
            var h = V;
          }
          Reflect.construct(i, [], a);
        } else {
          try {
            a.call();
          } catch (V) {
            h = V;
          }
          i.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          h = V;
        }
        i();
      }
    } catch (V) {
      if (V && h && typeof V.stack == "string") {
        for (
          var v = V.stack.split(`
`),
            y = h.stack.split(`
`),
            P = v.length - 1,
            T = y.length - 1;
          1 <= P && 0 <= T && v[P] !== y[T];
        )
          T--;
        for (; 1 <= P && 0 <= T; P--, T--)
          if (v[P] !== y[T]) {
            if (P !== 1 || T !== 1)
              do
                if ((P--, T--, 0 > T || v[P] !== y[T])) {
                  var M =
                    `
` + v[P].replace(" at new ", " at ");
                  return (
                    i.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", i.displayName)),
                    M
                  );
                }
              while (1 <= P && 0 <= T);
            break;
          }
      }
    } finally {
      ((me = !1), (Error.prepareStackTrace = u));
    }
    return (i = i ? i.displayName || i.name : "") ? K(i) : "";
  }
  function we(i) {
    switch (i.tag) {
      case 5:
        return K(i.type);
      case 16:
        return K("Lazy");
      case 13:
        return K("Suspense");
      case 19:
        return K("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((i = xe(i.type, !1)), i);
      case 11:
        return ((i = xe(i.type.render, !1)), i);
      case 1:
        return ((i = xe(i.type, !0)), i);
      default:
        return "";
    }
  }
  function Pe(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case R:
        return "Fragment";
      case I:
        return "Portal";
      case W:
        return "Profiler";
      case F:
        return "StrictMode";
      case fe:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case q:
          return (i.displayName || "Context") + ".Consumer";
        case B:
          return (i._context.displayName || "Context") + ".Provider";
        case U:
          var a = i.render;
          return (
            (i = i.displayName),
            i ||
              ((i = a.displayName || a.name || ""),
              (i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")),
            i
          );
        case ve:
          return ((a = i.displayName || null), a !== null ? a : Pe(i.type) || "Memo");
        case ye:
          ((a = i._payload), (i = i._init));
          try {
            return Pe(i(a));
          } catch {}
      }
    return null;
  }
  function Me(i) {
    var a = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (i = a.render),
          (i = i.displayName || i.name || ""),
          a.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Pe(a);
      case 8:
        return a === F ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof a == "function") return a.displayName || a.name || null;
        if (typeof a == "string") return a;
    }
    return null;
  }
  function Ae(i) {
    switch (typeof i) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return i;
      case "object":
        return i;
      default:
        return "";
    }
  }
  function J(i) {
    var a = i.type;
    return (i = i.nodeName) && i.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function te(i) {
    var a = J(i) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(i.constructor.prototype, a),
      h = "" + i[a];
    if (
      !i.hasOwnProperty(a) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var v = u.get,
        y = u.set;
      return (
        Object.defineProperty(i, a, {
          configurable: !0,
          get: function () {
            return v.call(this);
          },
          set: function (P) {
            ((h = "" + P), y.call(this, P));
          },
        }),
        Object.defineProperty(i, a, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return h;
          },
          setValue: function (P) {
            h = "" + P;
          },
          stopTracking: function () {
            ((i._valueTracker = null), delete i[a]);
          },
        }
      );
    }
  }
  function Se(i) {
    i._valueTracker || (i._valueTracker = te(i));
  }
  function Q(i) {
    if (!i) return !1;
    var a = i._valueTracker;
    if (!a) return !0;
    var u = a.getValue(),
      h = "";
    return (
      i && (h = J(i) ? (i.checked ? "true" : "false") : i.value),
      (i = h),
      i !== u ? (a.setValue(i), !0) : !1
    );
  }
  function it(i) {
    if (((i = i || (typeof document < "u" ? document : void 0)), typeof i > "u")) return null;
    try {
      return i.activeElement || i.body;
    } catch {
      return i.body;
    }
  }
  function Ie(i, a) {
    var u = a.checked;
    return X({}, a, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: u ?? i._wrapperState.initialChecked,
    });
  }
  function Ot(i, a) {
    var u = a.defaultValue == null ? "" : a.defaultValue,
      h = a.checked != null ? a.checked : a.defaultChecked;
    ((u = Ae(a.value != null ? a.value : u)),
      (i._wrapperState = {
        initialChecked: h,
        initialValue: u,
        controlled:
          a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null,
      }));
  }
  function _t(i, a) {
    ((a = a.checked), a != null && k(i, "checked", a, !1));
  }
  function An(i, a) {
    _t(i, a);
    var u = Ae(a.value),
      h = a.type;
    if (u != null)
      h === "number"
        ? ((u === 0 && i.value === "") || i.value != u) && (i.value = "" + u)
        : i.value !== "" + u && (i.value = "" + u);
    else if (h === "submit" || h === "reset") {
      i.removeAttribute("value");
      return;
    }
    (a.hasOwnProperty("value")
      ? nd(i, a.type, u)
      : a.hasOwnProperty("defaultValue") && nd(i, a.type, Ae(a.defaultValue)),
      a.checked == null && a.defaultChecked != null && (i.defaultChecked = !!a.defaultChecked));
  }
  function Ea(i, a, u) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var h = a.type;
      if (!((h !== "submit" && h !== "reset") || (a.value !== void 0 && a.value !== null))) return;
      ((a = "" + i._wrapperState.initialValue),
        u || a === i.value || (i.value = a),
        (i.defaultValue = a));
    }
    ((u = i.name),
      u !== "" && (i.name = ""),
      (i.defaultChecked = !!i._wrapperState.initialChecked),
      u !== "" && (i.name = u));
  }
  function nd(i, a, u) {
    (a !== "number" || it(i.ownerDocument) !== i) &&
      (u == null
        ? (i.defaultValue = "" + i._wrapperState.initialValue)
        : i.defaultValue !== "" + u && (i.defaultValue = "" + u));
  }
  var Ca = Array.isArray;
  function ho(i, a, u, h) {
    if (((i = i.options), a)) {
      a = {};
      for (var v = 0; v < u.length; v++) a["$" + u[v]] = !0;
      for (u = 0; u < i.length; u++)
        ((v = a.hasOwnProperty("$" + i[u].value)),
          i[u].selected !== v && (i[u].selected = v),
          v && h && (i[u].defaultSelected = !0));
    } else {
      for (u = "" + Ae(u), a = null, v = 0; v < i.length; v++) {
        if (i[v].value === u) {
          ((i[v].selected = !0), h && (i[v].defaultSelected = !0));
          return;
        }
        a !== null || i[v].disabled || (a = i[v]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function rd(i, a) {
    if (a.dangerouslySetInnerHTML != null) throw Error(n(91));
    return X({}, a, {
      value: void 0,
      defaultValue: void 0,
      children: "" + i._wrapperState.initialValue,
    });
  }
  function Oy(i, a) {
    var u = a.value;
    if (u == null) {
      if (((u = a.children), (a = a.defaultValue), u != null)) {
        if (a != null) throw Error(n(92));
        if (Ca(u)) {
          if (1 < u.length) throw Error(n(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (u = a));
    }
    i._wrapperState = { initialValue: Ae(u) };
  }
  function _y(i, a) {
    var u = Ae(a.value),
      h = Ae(a.defaultValue);
    (u != null &&
      ((u = "" + u),
      u !== i.value && (i.value = u),
      a.defaultValue == null && i.defaultValue !== u && (i.defaultValue = u)),
      h != null && (i.defaultValue = "" + h));
  }
  function My(i) {
    var a = i.textContent;
    a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
  }
  function Iy(i) {
    switch (i) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function id(i, a) {
    return i == null || i === "http://www.w3.org/1999/xhtml"
      ? Iy(a)
      : i === "http://www.w3.org/2000/svg" && a === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : i;
  }
  var ml,
    Dy = (function (i) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (a, u, h, v) {
            MSApp.execUnsafeLocalFunction(function () {
              return i(a, u, h, v);
            });
          }
        : i;
    })(function (i, a) {
      if (i.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in i) i.innerHTML = a;
      else {
        for (
          ml = ml || document.createElement("div"),
            ml.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>",
            a = ml.firstChild;
          i.firstChild;
        )
          i.removeChild(i.firstChild);
        for (; a.firstChild;) i.appendChild(a.firstChild);
      }
    });
  function Aa(i, a) {
    if (a) {
      var u = i.firstChild;
      if (u && u === i.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    i.textContent = a;
  }
  var Ta = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    vM = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ta).forEach(function (i) {
    vM.forEach(function (a) {
      ((a = a + i.charAt(0).toUpperCase() + i.substring(1)), (Ta[a] = Ta[i]));
    });
  });
  function jy(i, a, u) {
    return a == null || typeof a == "boolean" || a === ""
      ? ""
      : u || typeof a != "number" || a === 0 || (Ta.hasOwnProperty(i) && Ta[i])
        ? ("" + a).trim()
        : a + "px";
  }
  function Ny(i, a) {
    i = i.style;
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var h = u.indexOf("--") === 0,
          v = jy(u, a[u], h);
        (u === "float" && (u = "cssFloat"), h ? i.setProperty(u, v) : (i[u] = v));
      }
  }
  var gM = X(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function od(i, a) {
    if (a) {
      if (gM[i] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(n(137, i));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null) throw Error(n(60));
        if (
          typeof a.dangerouslySetInnerHTML != "object" ||
          !("__html" in a.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (a.style != null && typeof a.style != "object") throw Error(n(62));
    }
  }
  function ad(i, a) {
    if (i.indexOf("-") === -1) return typeof a.is == "string";
    switch (i) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var sd = null;
  function ld(i) {
    return (
      (i = i.target || i.srcElement || window),
      i.correspondingUseElement && (i = i.correspondingUseElement),
      i.nodeType === 3 ? i.parentNode : i
    );
  }
  var ud = null,
    po = null,
    mo = null;
  function Ry(i) {
    if ((i = Ga(i))) {
      if (typeof ud != "function") throw Error(n(280));
      var a = i.stateNode;
      a && ((a = $l(a)), ud(i.stateNode, i.type, a));
    }
  }
  function Ly(i) {
    po ? (mo ? mo.push(i) : (mo = [i])) : (po = i);
  }
  function $y() {
    if (po) {
      var i = po,
        a = mo;
      if (((mo = po = null), Ry(i), a)) for (i = 0; i < a.length; i++) Ry(a[i]);
    }
  }
  function zy(i, a) {
    return i(a);
  }
  function Fy() {}
  var cd = !1;
  function Vy(i, a, u) {
    if (cd) return i(a, u);
    cd = !0;
    try {
      return zy(i, a, u);
    } finally {
      ((cd = !1), (po !== null || mo !== null) && (Fy(), $y()));
    }
  }
  function ka(i, a) {
    var u = i.stateNode;
    if (u === null) return null;
    var h = $l(u);
    if (h === null) return null;
    u = h[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((h = !h.disabled) ||
          ((i = i.type),
          (h = !(i === "button" || i === "input" || i === "select" || i === "textarea"))),
          (i = !h));
        break e;
      default:
        i = !1;
    }
    if (i) return null;
    if (u && typeof u != "function") throw Error(n(231, a, typeof u));
    return u;
  }
  var fd = !1;
  if (c)
    try {
      var Oa = {};
      (Object.defineProperty(Oa, "passive", {
        get: function () {
          fd = !0;
        },
      }),
        window.addEventListener("test", Oa, Oa),
        window.removeEventListener("test", Oa, Oa));
    } catch {
      fd = !1;
    }
  function yM(i, a, u, h, v, y, P, T, M) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(u, V);
    } catch (G) {
      this.onError(G);
    }
  }
  var _a = !1,
    vl = null,
    gl = !1,
    dd = null,
    xM = {
      onError: function (i) {
        ((_a = !0), (vl = i));
      },
    };
  function wM(i, a, u, h, v, y, P, T, M) {
    ((_a = !1), (vl = null), yM.apply(xM, arguments));
  }
  function bM(i, a, u, h, v, y, P, T, M) {
    if ((wM.apply(this, arguments), _a)) {
      if (_a) {
        var V = vl;
        ((_a = !1), (vl = null));
      } else throw Error(n(198));
      gl || ((gl = !0), (dd = V));
    }
  }
  function wi(i) {
    var a = i,
      u = i;
    if (i.alternate) for (; a.return;) a = a.return;
    else {
      i = a;
      do ((a = i), (a.flags & 4098) !== 0 && (u = a.return), (i = a.return));
      while (i);
    }
    return a.tag === 3 ? u : null;
  }
  function By(i) {
    if (i.tag === 13) {
      var a = i.memoizedState;
      if ((a === null && ((i = i.alternate), i !== null && (a = i.memoizedState)), a !== null))
        return a.dehydrated;
    }
    return null;
  }
  function Uy(i) {
    if (wi(i) !== i) throw Error(n(188));
  }
  function SM(i) {
    var a = i.alternate;
    if (!a) {
      if (((a = wi(i)), a === null)) throw Error(n(188));
      return a !== i ? null : i;
    }
    for (var u = i, h = a; ;) {
      var v = u.return;
      if (v === null) break;
      var y = v.alternate;
      if (y === null) {
        if (((h = v.return), h !== null)) {
          u = h;
          continue;
        }
        break;
      }
      if (v.child === y.child) {
        for (y = v.child; y;) {
          if (y === u) return (Uy(v), i);
          if (y === h) return (Uy(v), a);
          y = y.sibling;
        }
        throw Error(n(188));
      }
      if (u.return !== h.return) ((u = v), (h = y));
      else {
        for (var P = !1, T = v.child; T;) {
          if (T === u) {
            ((P = !0), (u = v), (h = y));
            break;
          }
          if (T === h) {
            ((P = !0), (h = v), (u = y));
            break;
          }
          T = T.sibling;
        }
        if (!P) {
          for (T = y.child; T;) {
            if (T === u) {
              ((P = !0), (u = y), (h = v));
              break;
            }
            if (T === h) {
              ((P = !0), (h = y), (u = v));
              break;
            }
            T = T.sibling;
          }
          if (!P) throw Error(n(189));
        }
      }
      if (u.alternate !== h) throw Error(n(190));
    }
    if (u.tag !== 3) throw Error(n(188));
    return u.stateNode.current === u ? i : a;
  }
  function Wy(i) {
    return ((i = SM(i)), i !== null ? Ky(i) : null);
  }
  function Ky(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null;) {
      var a = Ky(i);
      if (a !== null) return a;
      i = i.sibling;
    }
    return null;
  }
  var Hy = t.unstable_scheduleCallback,
    qy = t.unstable_cancelCallback,
    PM = t.unstable_shouldYield,
    EM = t.unstable_requestPaint,
    Je = t.unstable_now,
    CM = t.unstable_getCurrentPriorityLevel,
    hd = t.unstable_ImmediatePriority,
    Yy = t.unstable_UserBlockingPriority,
    yl = t.unstable_NormalPriority,
    AM = t.unstable_LowPriority,
    Gy = t.unstable_IdlePriority,
    xl = null,
    Hn = null;
  function TM(i) {
    if (Hn && typeof Hn.onCommitFiberRoot == "function")
      try {
        Hn.onCommitFiberRoot(xl, i, void 0, (i.current.flags & 128) === 128);
      } catch {}
  }
  var Tn = Math.clz32 ? Math.clz32 : _M,
    kM = Math.log,
    OM = Math.LN2;
  function _M(i) {
    return ((i >>>= 0), i === 0 ? 32 : (31 - ((kM(i) / OM) | 0)) | 0);
  }
  var wl = 64,
    bl = 4194304;
  function Ma(i) {
    switch (i & -i) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function Sl(i, a) {
    var u = i.pendingLanes;
    if (u === 0) return 0;
    var h = 0,
      v = i.suspendedLanes,
      y = i.pingedLanes,
      P = u & 268435455;
    if (P !== 0) {
      var T = P & ~v;
      T !== 0 ? (h = Ma(T)) : ((y &= P), y !== 0 && (h = Ma(y)));
    } else ((P = u & ~v), P !== 0 ? (h = Ma(P)) : y !== 0 && (h = Ma(y)));
    if (h === 0) return 0;
    if (
      a !== 0 &&
      a !== h &&
      (a & v) === 0 &&
      ((v = h & -h), (y = a & -a), v >= y || (v === 16 && (y & 4194240) !== 0))
    )
      return a;
    if (((h & 4) !== 0 && (h |= u & 16), (a = i.entangledLanes), a !== 0))
      for (i = i.entanglements, a &= h; 0 < a;)
        ((u = 31 - Tn(a)), (v = 1 << u), (h |= i[u]), (a &= ~v));
    return h;
  }
  function MM(i, a) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return a + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function IM(i, a) {
    for (
      var u = i.suspendedLanes, h = i.pingedLanes, v = i.expirationTimes, y = i.pendingLanes;
      0 < y;
    ) {
      var P = 31 - Tn(y),
        T = 1 << P,
        M = v[P];
      (M === -1
        ? ((T & u) === 0 || (T & h) !== 0) && (v[P] = MM(T, a))
        : M <= a && (i.expiredLanes |= T),
        (y &= ~T));
    }
  }
  function pd(i) {
    return ((i = i.pendingLanes & -1073741825), i !== 0 ? i : i & 1073741824 ? 1073741824 : 0);
  }
  function Xy() {
    var i = wl;
    return ((wl <<= 1), (wl & 4194240) === 0 && (wl = 64), i);
  }
  function md(i) {
    for (var a = [], u = 0; 31 > u; u++) a.push(i);
    return a;
  }
  function Ia(i, a, u) {
    ((i.pendingLanes |= a),
      a !== 536870912 && ((i.suspendedLanes = 0), (i.pingedLanes = 0)),
      (i = i.eventTimes),
      (a = 31 - Tn(a)),
      (i[a] = u));
  }
  function DM(i, a) {
    var u = i.pendingLanes & ~a;
    ((i.pendingLanes = a),
      (i.suspendedLanes = 0),
      (i.pingedLanes = 0),
      (i.expiredLanes &= a),
      (i.mutableReadLanes &= a),
      (i.entangledLanes &= a),
      (a = i.entanglements));
    var h = i.eventTimes;
    for (i = i.expirationTimes; 0 < u;) {
      var v = 31 - Tn(u),
        y = 1 << v;
      ((a[v] = 0), (h[v] = -1), (i[v] = -1), (u &= ~y));
    }
  }
  function vd(i, a) {
    var u = (i.entangledLanes |= a);
    for (i = i.entanglements; u;) {
      var h = 31 - Tn(u),
        v = 1 << h;
      ((v & a) | (i[h] & a) && (i[h] |= a), (u &= ~v));
    }
  }
  var De = 0;
  function Zy(i) {
    return ((i &= -i), 1 < i ? (4 < i ? ((i & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var Qy,
    gd,
    Jy,
    e0,
    t0,
    yd = !1,
    Pl = [],
    jr = null,
    Nr = null,
    Rr = null,
    Da = new Map(),
    ja = new Map(),
    Lr = [],
    jM =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function n0(i, a) {
    switch (i) {
      case "focusin":
      case "focusout":
        jr = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        Rr = null;
        break;
      case "pointerover":
      case "pointerout":
        Da.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ja.delete(a.pointerId);
    }
  }
  function Na(i, a, u, h, v, y) {
    return i === null || i.nativeEvent !== y
      ? ((i = {
          blockedOn: a,
          domEventName: u,
          eventSystemFlags: h,
          nativeEvent: y,
          targetContainers: [v],
        }),
        a !== null && ((a = Ga(a)), a !== null && gd(a)),
        i)
      : ((i.eventSystemFlags |= h),
        (a = i.targetContainers),
        v !== null && a.indexOf(v) === -1 && a.push(v),
        i);
  }
  function NM(i, a, u, h, v) {
    switch (a) {
      case "focusin":
        return ((jr = Na(jr, i, a, u, h, v)), !0);
      case "dragenter":
        return ((Nr = Na(Nr, i, a, u, h, v)), !0);
      case "mouseover":
        return ((Rr = Na(Rr, i, a, u, h, v)), !0);
      case "pointerover":
        var y = v.pointerId;
        return (Da.set(y, Na(Da.get(y) || null, i, a, u, h, v)), !0);
      case "gotpointercapture":
        return ((y = v.pointerId), ja.set(y, Na(ja.get(y) || null, i, a, u, h, v)), !0);
    }
    return !1;
  }
  function r0(i) {
    var a = bi(i.target);
    if (a !== null) {
      var u = wi(a);
      if (u !== null) {
        if (((a = u.tag), a === 13)) {
          if (((a = By(u)), a !== null)) {
            ((i.blockedOn = a),
              t0(i.priority, function () {
                Jy(u);
              }));
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          i.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    i.blockedOn = null;
  }
  function El(i) {
    if (i.blockedOn !== null) return !1;
    for (var a = i.targetContainers; 0 < a.length;) {
      var u = wd(i.domEventName, i.eventSystemFlags, a[0], i.nativeEvent);
      if (u === null) {
        u = i.nativeEvent;
        var h = new u.constructor(u.type, u);
        ((sd = h), u.target.dispatchEvent(h), (sd = null));
      } else return ((a = Ga(u)), a !== null && gd(a), (i.blockedOn = u), !1);
      a.shift();
    }
    return !0;
  }
  function i0(i, a, u) {
    El(i) && u.delete(a);
  }
  function RM() {
    ((yd = !1),
      jr !== null && El(jr) && (jr = null),
      Nr !== null && El(Nr) && (Nr = null),
      Rr !== null && El(Rr) && (Rr = null),
      Da.forEach(i0),
      ja.forEach(i0));
  }
  function Ra(i, a) {
    i.blockedOn === a &&
      ((i.blockedOn = null),
      yd || ((yd = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, RM)));
  }
  function La(i) {
    function a(v) {
      return Ra(v, i);
    }
    if (0 < Pl.length) {
      Ra(Pl[0], i);
      for (var u = 1; u < Pl.length; u++) {
        var h = Pl[u];
        h.blockedOn === i && (h.blockedOn = null);
      }
    }
    for (
      jr !== null && Ra(jr, i),
        Nr !== null && Ra(Nr, i),
        Rr !== null && Ra(Rr, i),
        Da.forEach(a),
        ja.forEach(a),
        u = 0;
      u < Lr.length;
      u++
    )
      ((h = Lr[u]), h.blockedOn === i && (h.blockedOn = null));
    for (; 0 < Lr.length && ((u = Lr[0]), u.blockedOn === null);)
      (r0(u), u.blockedOn === null && Lr.shift());
  }
  var vo = O.ReactCurrentBatchConfig,
    Cl = !0;
  function LM(i, a, u, h) {
    var v = De,
      y = vo.transition;
    vo.transition = null;
    try {
      ((De = 1), xd(i, a, u, h));
    } finally {
      ((De = v), (vo.transition = y));
    }
  }
  function $M(i, a, u, h) {
    var v = De,
      y = vo.transition;
    vo.transition = null;
    try {
      ((De = 4), xd(i, a, u, h));
    } finally {
      ((De = v), (vo.transition = y));
    }
  }
  function xd(i, a, u, h) {
    if (Cl) {
      var v = wd(i, a, u, h);
      if (v === null) (Ld(i, a, h, Al, u), n0(i, h));
      else if (NM(v, i, a, u, h)) h.stopPropagation();
      else if ((n0(i, h), a & 4 && -1 < jM.indexOf(i))) {
        for (; v !== null;) {
          var y = Ga(v);
          if (
            (y !== null && Qy(y), (y = wd(i, a, u, h)), y === null && Ld(i, a, h, Al, u), y === v)
          )
            break;
          v = y;
        }
        v !== null && h.stopPropagation();
      } else Ld(i, a, h, null, u);
    }
  }
  var Al = null;
  function wd(i, a, u, h) {
    if (((Al = null), (i = ld(h)), (i = bi(i)), i !== null))
      if (((a = wi(i)), a === null)) i = null;
      else if (((u = a.tag), u === 13)) {
        if (((i = By(a)), i !== null)) return i;
        i = null;
      } else if (u === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
          return a.tag === 3 ? a.stateNode.containerInfo : null;
        i = null;
      } else a !== i && (i = null);
    return ((Al = i), null);
  }
  function o0(i) {
    switch (i) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (CM()) {
          case hd:
            return 1;
          case Yy:
            return 4;
          case yl:
          case AM:
            return 16;
          case Gy:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var $r = null,
    bd = null,
    Tl = null;
  function a0() {
    if (Tl) return Tl;
    var i,
      a = bd,
      u = a.length,
      h,
      v = "value" in $r ? $r.value : $r.textContent,
      y = v.length;
    for (i = 0; i < u && a[i] === v[i]; i++);
    var P = u - i;
    for (h = 1; h <= P && a[u - h] === v[y - h]; h++);
    return (Tl = v.slice(i, 1 < h ? 1 - h : void 0));
  }
  function kl(i) {
    var a = i.keyCode;
    return (
      "charCode" in i ? ((i = i.charCode), i === 0 && a === 13 && (i = 13)) : (i = a),
      i === 10 && (i = 13),
      32 <= i || i === 13 ? i : 0
    );
  }
  function Ol() {
    return !0;
  }
  function s0() {
    return !1;
  }
  function Zt(i) {
    function a(u, h, v, y, P) {
      ((this._reactName = u),
        (this._targetInst = v),
        (this.type = h),
        (this.nativeEvent = y),
        (this.target = P),
        (this.currentTarget = null));
      for (var T in i) i.hasOwnProperty(T) && ((u = i[T]), (this[T] = u ? u(y) : y[T]));
      return (
        (this.isDefaultPrevented = (
          y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1
        )
          ? Ol
          : s0),
        (this.isPropagationStopped = s0),
        this
      );
    }
    return (
      X(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = Ol));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = Ol));
        },
        persist: function () {},
        isPersistent: Ol,
      }),
      a
    );
  }
  var go = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (i) {
        return i.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Sd = Zt(go),
    $a = X({}, go, { view: 0, detail: 0 }),
    zM = Zt($a),
    Pd,
    Ed,
    za,
    _l = X({}, $a, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ad,
      button: 0,
      buttons: 0,
      relatedTarget: function (i) {
        return i.relatedTarget === void 0
          ? i.fromElement === i.srcElement
            ? i.toElement
            : i.fromElement
          : i.relatedTarget;
      },
      movementX: function (i) {
        return "movementX" in i
          ? i.movementX
          : (i !== za &&
              (za && i.type === "mousemove"
                ? ((Pd = i.screenX - za.screenX), (Ed = i.screenY - za.screenY))
                : (Ed = Pd = 0),
              (za = i)),
            Pd);
      },
      movementY: function (i) {
        return "movementY" in i ? i.movementY : Ed;
      },
    }),
    l0 = Zt(_l),
    FM = X({}, _l, { dataTransfer: 0 }),
    VM = Zt(FM),
    BM = X({}, $a, { relatedTarget: 0 }),
    Cd = Zt(BM),
    UM = X({}, go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    WM = Zt(UM),
    KM = X({}, go, {
      clipboardData: function (i) {
        return "clipboardData" in i ? i.clipboardData : window.clipboardData;
      },
    }),
    HM = Zt(KM),
    qM = X({}, go, { data: 0 }),
    u0 = Zt(qM),
    YM = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    GM = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    XM = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ZM(i) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(i) : (i = XM[i]) ? !!a[i] : !1;
  }
  function Ad() {
    return ZM;
  }
  var QM = X({}, $a, {
      key: function (i) {
        if (i.key) {
          var a = YM[i.key] || i.key;
          if (a !== "Unidentified") return a;
        }
        return i.type === "keypress"
          ? ((i = kl(i)), i === 13 ? "Enter" : String.fromCharCode(i))
          : i.type === "keydown" || i.type === "keyup"
            ? GM[i.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ad,
      charCode: function (i) {
        return i.type === "keypress" ? kl(i) : 0;
      },
      keyCode: function (i) {
        return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      },
      which: function (i) {
        return i.type === "keypress"
          ? kl(i)
          : i.type === "keydown" || i.type === "keyup"
            ? i.keyCode
            : 0;
      },
    }),
    JM = Zt(QM),
    e2 = X({}, _l, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    c0 = Zt(e2),
    t2 = X({}, $a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ad,
    }),
    n2 = Zt(t2),
    r2 = X({}, go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i2 = Zt(r2),
    o2 = X({}, _l, {
      deltaX: function (i) {
        return "deltaX" in i ? i.deltaX : "wheelDeltaX" in i ? -i.wheelDeltaX : 0;
      },
      deltaY: function (i) {
        return "deltaY" in i
          ? i.deltaY
          : "wheelDeltaY" in i
            ? -i.wheelDeltaY
            : "wheelDelta" in i
              ? -i.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    a2 = Zt(o2),
    s2 = [9, 13, 27, 32],
    Td = c && "CompositionEvent" in window,
    Fa = null;
  c && "documentMode" in document && (Fa = document.documentMode);
  var l2 = c && "TextEvent" in window && !Fa,
    f0 = c && (!Td || (Fa && 8 < Fa && 11 >= Fa)),
    d0 = " ",
    h0 = !1;
  function p0(i, a) {
    switch (i) {
      case "keyup":
        return s2.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function m0(i) {
    return ((i = i.detail), typeof i == "object" && "data" in i ? i.data : null);
  }
  var yo = !1;
  function u2(i, a) {
    switch (i) {
      case "compositionend":
        return m0(a);
      case "keypress":
        return a.which !== 32 ? null : ((h0 = !0), d0);
      case "textInput":
        return ((i = a.data), i === d0 && h0 ? null : i);
      default:
        return null;
    }
  }
  function c2(i, a) {
    if (yo)
      return i === "compositionend" || (!Td && p0(i, a))
        ? ((i = a0()), (Tl = bd = $r = null), (yo = !1), i)
        : null;
    switch (i) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return f0 && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var f2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function v0(i) {
    var a = i && i.nodeName && i.nodeName.toLowerCase();
    return a === "input" ? !!f2[i.type] : a === "textarea";
  }
  function g0(i, a, u, h) {
    (Ly(h),
      (a = Nl(a, "onChange")),
      0 < a.length &&
        ((u = new Sd("onChange", "change", null, u, h)), i.push({ event: u, listeners: a })));
  }
  var Va = null,
    Ba = null;
  function d2(i) {
    N0(i, 0);
  }
  function Ml(i) {
    var a = Po(i);
    if (Q(a)) return i;
  }
  function h2(i, a) {
    if (i === "change") return a;
  }
  var y0 = !1;
  if (c) {
    var kd;
    if (c) {
      var Od = "oninput" in document;
      if (!Od) {
        var x0 = document.createElement("div");
        (x0.setAttribute("oninput", "return;"), (Od = typeof x0.oninput == "function"));
      }
      kd = Od;
    } else kd = !1;
    y0 = kd && (!document.documentMode || 9 < document.documentMode);
  }
  function w0() {
    Va && (Va.detachEvent("onpropertychange", b0), (Ba = Va = null));
  }
  function b0(i) {
    if (i.propertyName === "value" && Ml(Ba)) {
      var a = [];
      (g0(a, Ba, i, ld(i)), Vy(d2, a));
    }
  }
  function p2(i, a, u) {
    i === "focusin"
      ? (w0(), (Va = a), (Ba = u), Va.attachEvent("onpropertychange", b0))
      : i === "focusout" && w0();
  }
  function m2(i) {
    if (i === "selectionchange" || i === "keyup" || i === "keydown") return Ml(Ba);
  }
  function v2(i, a) {
    if (i === "click") return Ml(a);
  }
  function g2(i, a) {
    if (i === "input" || i === "change") return Ml(a);
  }
  function y2(i, a) {
    return (i === a && (i !== 0 || 1 / i === 1 / a)) || (i !== i && a !== a);
  }
  var kn = typeof Object.is == "function" ? Object.is : y2;
  function Ua(i, a) {
    if (kn(i, a)) return !0;
    if (typeof i != "object" || i === null || typeof a != "object" || a === null) return !1;
    var u = Object.keys(i),
      h = Object.keys(a);
    if (u.length !== h.length) return !1;
    for (h = 0; h < u.length; h++) {
      var v = u[h];
      if (!f.call(a, v) || !kn(i[v], a[v])) return !1;
    }
    return !0;
  }
  function S0(i) {
    for (; i && i.firstChild;) i = i.firstChild;
    return i;
  }
  function P0(i, a) {
    var u = S0(i);
    i = 0;
    for (var h; u;) {
      if (u.nodeType === 3) {
        if (((h = i + u.textContent.length), i <= a && h >= a)) return { node: u, offset: a - i };
        i = h;
      }
      e: {
        for (; u;) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = S0(u);
    }
  }
  function E0(i, a) {
    return i && a
      ? i === a
        ? !0
        : i && i.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? E0(i, a.parentNode)
            : "contains" in i
              ? i.contains(a)
              : i.compareDocumentPosition
                ? !!(i.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function C0() {
    for (var i = window, a = it(); a instanceof i.HTMLIFrameElement;) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) i = a.contentWindow;
      else break;
      a = it(i.document);
    }
    return a;
  }
  function _d(i) {
    var a = i && i.nodeName && i.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (i.type === "text" ||
          i.type === "search" ||
          i.type === "tel" ||
          i.type === "url" ||
          i.type === "password")) ||
        a === "textarea" ||
        i.contentEditable === "true")
    );
  }
  function x2(i) {
    var a = C0(),
      u = i.focusedElem,
      h = i.selectionRange;
    if (a !== u && u && u.ownerDocument && E0(u.ownerDocument.documentElement, u)) {
      if (h !== null && _d(u)) {
        if (((a = h.start), (i = h.end), i === void 0 && (i = a), "selectionStart" in u))
          ((u.selectionStart = a), (u.selectionEnd = Math.min(i, u.value.length)));
        else if (
          ((i = ((a = u.ownerDocument || document) && a.defaultView) || window), i.getSelection)
        ) {
          i = i.getSelection();
          var v = u.textContent.length,
            y = Math.min(h.start, v);
          ((h = h.end === void 0 ? y : Math.min(h.end, v)),
            !i.extend && y > h && ((v = h), (h = y), (y = v)),
            (v = P0(u, y)));
          var P = P0(u, h);
          v &&
            P &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== v.node ||
              i.anchorOffset !== v.offset ||
              i.focusNode !== P.node ||
              i.focusOffset !== P.offset) &&
            ((a = a.createRange()),
            a.setStart(v.node, v.offset),
            i.removeAllRanges(),
            y > h
              ? (i.addRange(a), i.extend(P.node, P.offset))
              : (a.setEnd(P.node, P.offset), i.addRange(a)));
        }
      }
      for (a = [], i = u; (i = i.parentNode);)
        i.nodeType === 1 && a.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < a.length; u++)
        ((i = a[u]), (i.element.scrollLeft = i.left), (i.element.scrollTop = i.top));
    }
  }
  var w2 = c && "documentMode" in document && 11 >= document.documentMode,
    xo = null,
    Md = null,
    Wa = null,
    Id = !1;
  function A0(i, a, u) {
    var h = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Id ||
      xo == null ||
      xo !== it(h) ||
      ((h = xo),
      "selectionStart" in h && _d(h)
        ? (h = { start: h.selectionStart, end: h.selectionEnd })
        : ((h = ((h.ownerDocument && h.ownerDocument.defaultView) || window).getSelection()),
          (h = {
            anchorNode: h.anchorNode,
            anchorOffset: h.anchorOffset,
            focusNode: h.focusNode,
            focusOffset: h.focusOffset,
          })),
      (Wa && Ua(Wa, h)) ||
        ((Wa = h),
        (h = Nl(Md, "onSelect")),
        0 < h.length &&
          ((a = new Sd("onSelect", "select", null, a, u)),
          i.push({ event: a, listeners: h }),
          (a.target = xo))));
  }
  function Il(i, a) {
    var u = {};
    return (
      (u[i.toLowerCase()] = a.toLowerCase()),
      (u["Webkit" + i] = "webkit" + a),
      (u["Moz" + i] = "moz" + a),
      u
    );
  }
  var wo = {
      animationend: Il("Animation", "AnimationEnd"),
      animationiteration: Il("Animation", "AnimationIteration"),
      animationstart: Il("Animation", "AnimationStart"),
      transitionend: Il("Transition", "TransitionEnd"),
    },
    Dd = {},
    T0 = {};
  c &&
    ((T0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wo.animationend.animation,
      delete wo.animationiteration.animation,
      delete wo.animationstart.animation),
    "TransitionEvent" in window || delete wo.transitionend.transition);
  function Dl(i) {
    if (Dd[i]) return Dd[i];
    if (!wo[i]) return i;
    var a = wo[i],
      u;
    for (u in a) if (a.hasOwnProperty(u) && u in T0) return (Dd[i] = a[u]);
    return i;
  }
  var k0 = Dl("animationend"),
    O0 = Dl("animationiteration"),
    _0 = Dl("animationstart"),
    M0 = Dl("transitionend"),
    I0 = new Map(),
    D0 =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function zr(i, a) {
    (I0.set(i, a), s(a, [i]));
  }
  for (var jd = 0; jd < D0.length; jd++) {
    var Nd = D0[jd],
      b2 = Nd.toLowerCase(),
      S2 = Nd[0].toUpperCase() + Nd.slice(1);
    zr(b2, "on" + S2);
  }
  (zr(k0, "onAnimationEnd"),
    zr(O0, "onAnimationIteration"),
    zr(_0, "onAnimationStart"),
    zr("dblclick", "onDoubleClick"),
    zr("focusin", "onFocus"),
    zr("focusout", "onBlur"),
    zr(M0, "onTransitionEnd"),
    l("onMouseEnter", ["mouseout", "mouseover"]),
    l("onMouseLeave", ["mouseout", "mouseover"]),
    l("onPointerEnter", ["pointerout", "pointerover"]),
    l("onPointerLeave", ["pointerout", "pointerover"]),
    s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    s(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    s(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    s(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ka =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    P2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));
  function j0(i, a, u) {
    var h = i.type || "unknown-event";
    ((i.currentTarget = u), bM(h, a, void 0, i), (i.currentTarget = null));
  }
  function N0(i, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < i.length; u++) {
      var h = i[u],
        v = h.event;
      h = h.listeners;
      e: {
        var y = void 0;
        if (a)
          for (var P = h.length - 1; 0 <= P; P--) {
            var T = h[P],
              M = T.instance,
              V = T.currentTarget;
            if (((T = T.listener), M !== y && v.isPropagationStopped())) break e;
            (j0(v, T, V), (y = M));
          }
        else
          for (P = 0; P < h.length; P++) {
            if (
              ((T = h[P]),
              (M = T.instance),
              (V = T.currentTarget),
              (T = T.listener),
              M !== y && v.isPropagationStopped())
            )
              break e;
            (j0(v, T, V), (y = M));
          }
      }
    }
    if (gl) throw ((i = dd), (gl = !1), (dd = null), i);
  }
  function Be(i, a) {
    var u = a[Ud];
    u === void 0 && (u = a[Ud] = new Set());
    var h = i + "__bubble";
    u.has(h) || (R0(a, i, 2, !1), u.add(h));
  }
  function Rd(i, a, u) {
    var h = 0;
    (a && (h |= 4), R0(u, i, h, a));
  }
  var jl = "_reactListening" + Math.random().toString(36).slice(2);
  function Ha(i) {
    if (!i[jl]) {
      ((i[jl] = !0),
        r.forEach(function (u) {
          u !== "selectionchange" && (P2.has(u) || Rd(u, !1, i), Rd(u, !0, i));
        }));
      var a = i.nodeType === 9 ? i : i.ownerDocument;
      a === null || a[jl] || ((a[jl] = !0), Rd("selectionchange", !1, a));
    }
  }
  function R0(i, a, u, h) {
    switch (o0(a)) {
      case 1:
        var v = LM;
        break;
      case 4:
        v = $M;
        break;
      default:
        v = xd;
    }
    ((u = v.bind(null, a, u, i)),
      (v = void 0),
      !fd || (a !== "touchstart" && a !== "touchmove" && a !== "wheel") || (v = !0),
      h
        ? v !== void 0
          ? i.addEventListener(a, u, { capture: !0, passive: v })
          : i.addEventListener(a, u, !0)
        : v !== void 0
          ? i.addEventListener(a, u, { passive: v })
          : i.addEventListener(a, u, !1));
  }
  function Ld(i, a, u, h, v) {
    var y = h;
    if ((a & 1) === 0 && (a & 2) === 0 && h !== null)
      e: for (;;) {
        if (h === null) return;
        var P = h.tag;
        if (P === 3 || P === 4) {
          var T = h.stateNode.containerInfo;
          if (T === v || (T.nodeType === 8 && T.parentNode === v)) break;
          if (P === 4)
            for (P = h.return; P !== null;) {
              var M = P.tag;
              if (
                (M === 3 || M === 4) &&
                ((M = P.stateNode.containerInfo),
                M === v || (M.nodeType === 8 && M.parentNode === v))
              )
                return;
              P = P.return;
            }
          for (; T !== null;) {
            if (((P = bi(T)), P === null)) return;
            if (((M = P.tag), M === 5 || M === 6)) {
              h = y = P;
              continue e;
            }
            T = T.parentNode;
          }
        }
        h = h.return;
      }
    Vy(function () {
      var V = y,
        G = ld(u),
        Z = [];
      e: {
        var Y = I0.get(i);
        if (Y !== void 0) {
          var re = Sd,
            se = i;
          switch (i) {
            case "keypress":
              if (kl(u) === 0) break e;
            case "keydown":
            case "keyup":
              re = JM;
              break;
            case "focusin":
              ((se = "focus"), (re = Cd));
              break;
            case "focusout":
              ((se = "blur"), (re = Cd));
              break;
            case "beforeblur":
            case "afterblur":
              re = Cd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              re = l0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = VM;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = n2;
              break;
            case k0:
            case O0:
            case _0:
              re = WM;
              break;
            case M0:
              re = i2;
              break;
            case "scroll":
              re = zM;
              break;
            case "wheel":
              re = a2;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = HM;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = c0;
          }
          var ue = (a & 4) !== 0,
            et = !ue && i === "scroll",
            L = ue ? (Y !== null ? Y + "Capture" : null) : Y;
          ue = [];
          for (var D = V, $; D !== null;) {
            $ = D;
            var ee = $.stateNode;
            if (
              ($.tag === 5 &&
                ee !== null &&
                (($ = ee), L !== null && ((ee = ka(D, L)), ee != null && ue.push(qa(D, ee, $)))),
              et)
            )
              break;
            D = D.return;
          }
          0 < ue.length && ((Y = new re(Y, se, null, u, G)), Z.push({ event: Y, listeners: ue }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((Y = i === "mouseover" || i === "pointerover"),
            (re = i === "mouseout" || i === "pointerout"),
            Y && u !== sd && (se = u.relatedTarget || u.fromElement) && (bi(se) || se[dr]))
          )
            break e;
          if (
            (re || Y) &&
            ((Y =
              G.window === G
                ? G
                : (Y = G.ownerDocument)
                  ? Y.defaultView || Y.parentWindow
                  : window),
            re
              ? ((se = u.relatedTarget || u.toElement),
                (re = V),
                (se = se ? bi(se) : null),
                se !== null &&
                  ((et = wi(se)), se !== et || (se.tag !== 5 && se.tag !== 6)) &&
                  (se = null))
              : ((re = null), (se = V)),
            re !== se)
          ) {
            if (
              ((ue = l0),
              (ee = "onMouseLeave"),
              (L = "onMouseEnter"),
              (D = "mouse"),
              (i === "pointerout" || i === "pointerover") &&
                ((ue = c0), (ee = "onPointerLeave"), (L = "onPointerEnter"), (D = "pointer")),
              (et = re == null ? Y : Po(re)),
              ($ = se == null ? Y : Po(se)),
              (Y = new ue(ee, D + "leave", re, u, G)),
              (Y.target = et),
              (Y.relatedTarget = $),
              (ee = null),
              bi(G) === V &&
                ((ue = new ue(L, D + "enter", se, u, G)),
                (ue.target = $),
                (ue.relatedTarget = et),
                (ee = ue)),
              (et = ee),
              re && se)
            )
              t: {
                for (ue = re, L = se, D = 0, $ = ue; $; $ = bo($)) D++;
                for ($ = 0, ee = L; ee; ee = bo(ee)) $++;
                for (; 0 < D - $;) ((ue = bo(ue)), D--);
                for (; 0 < $ - D;) ((L = bo(L)), $--);
                for (; D--;) {
                  if (ue === L || (L !== null && ue === L.alternate)) break t;
                  ((ue = bo(ue)), (L = bo(L)));
                }
                ue = null;
              }
            else ue = null;
            (re !== null && L0(Z, Y, re, ue, !1),
              se !== null && et !== null && L0(Z, et, se, ue, !0));
          }
        }
        e: {
          if (
            ((Y = V ? Po(V) : window),
            (re = Y.nodeName && Y.nodeName.toLowerCase()),
            re === "select" || (re === "input" && Y.type === "file"))
          )
            var ce = h2;
          else if (v0(Y))
            if (y0) ce = g2;
            else {
              ce = m2;
              var de = p2;
            }
          else
            (re = Y.nodeName) &&
              re.toLowerCase() === "input" &&
              (Y.type === "checkbox" || Y.type === "radio") &&
              (ce = v2);
          if (ce && (ce = ce(i, V))) {
            g0(Z, ce, u, G);
            break e;
          }
          (de && de(i, Y, V),
            i === "focusout" &&
              (de = Y._wrapperState) &&
              de.controlled &&
              Y.type === "number" &&
              nd(Y, "number", Y.value));
        }
        switch (((de = V ? Po(V) : window), i)) {
          case "focusin":
            (v0(de) || de.contentEditable === "true") && ((xo = de), (Md = V), (Wa = null));
            break;
          case "focusout":
            Wa = Md = xo = null;
            break;
          case "mousedown":
            Id = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Id = !1), A0(Z, u, G));
            break;
          case "selectionchange":
            if (w2) break;
          case "keydown":
          case "keyup":
            A0(Z, u, G);
        }
        var he;
        if (Td)
          e: {
            switch (i) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          yo
            ? p0(i, u) && (ge = "onCompositionEnd")
            : i === "keydown" && u.keyCode === 229 && (ge = "onCompositionStart");
        (ge &&
          (f0 &&
            u.locale !== "ko" &&
            (yo || ge !== "onCompositionStart"
              ? ge === "onCompositionEnd" && yo && (he = a0())
              : (($r = G), (bd = "value" in $r ? $r.value : $r.textContent), (yo = !0))),
          (de = Nl(V, ge)),
          0 < de.length &&
            ((ge = new u0(ge, i, null, u, G)),
            Z.push({ event: ge, listeners: de }),
            he ? (ge.data = he) : ((he = m0(u)), he !== null && (ge.data = he)))),
          (he = l2 ? u2(i, u) : c2(i, u)) &&
            ((V = Nl(V, "onBeforeInput")),
            0 < V.length &&
              ((G = new u0("onBeforeInput", "beforeinput", null, u, G)),
              Z.push({ event: G, listeners: V }),
              (G.data = he))));
      }
      N0(Z, a);
    });
  }
  function qa(i, a, u) {
    return { instance: i, listener: a, currentTarget: u };
  }
  function Nl(i, a) {
    for (var u = a + "Capture", h = []; i !== null;) {
      var v = i,
        y = v.stateNode;
      (v.tag === 5 &&
        y !== null &&
        ((v = y),
        (y = ka(i, u)),
        y != null && h.unshift(qa(i, y, v)),
        (y = ka(i, a)),
        y != null && h.push(qa(i, y, v))),
        (i = i.return));
    }
    return h;
  }
  function bo(i) {
    if (i === null) return null;
    do i = i.return;
    while (i && i.tag !== 5);
    return i || null;
  }
  function L0(i, a, u, h, v) {
    for (var y = a._reactName, P = []; u !== null && u !== h;) {
      var T = u,
        M = T.alternate,
        V = T.stateNode;
      if (M !== null && M === h) break;
      (T.tag === 5 &&
        V !== null &&
        ((T = V),
        v
          ? ((M = ka(u, y)), M != null && P.unshift(qa(u, M, T)))
          : v || ((M = ka(u, y)), M != null && P.push(qa(u, M, T)))),
        (u = u.return));
    }
    P.length !== 0 && i.push({ event: a, listeners: P });
  }
  var E2 = /\r\n?/g,
    C2 = /\u0000|\uFFFD/g;
  function $0(i) {
    return (typeof i == "string" ? i : "" + i)
      .replace(
        E2,
        `
`,
      )
      .replace(C2, "");
  }
  function Rl(i, a, u) {
    if (((a = $0(a)), $0(i) !== a && u)) throw Error(n(425));
  }
  function Ll() {}
  var $d = null,
    zd = null;
  function Fd(i, a) {
    return (
      i === "textarea" ||
      i === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vd = typeof setTimeout == "function" ? setTimeout : void 0,
    A2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    z0 = typeof Promise == "function" ? Promise : void 0,
    T2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof z0 < "u"
          ? function (i) {
              return z0.resolve(null).then(i).catch(k2);
            }
          : Vd;
  function k2(i) {
    setTimeout(function () {
      throw i;
    });
  }
  function Bd(i, a) {
    var u = a,
      h = 0;
    do {
      var v = u.nextSibling;
      if ((i.removeChild(u), v && v.nodeType === 8))
        if (((u = v.data), u === "/$")) {
          if (h === 0) {
            (i.removeChild(v), La(a));
            return;
          }
          h--;
        } else (u !== "$" && u !== "$?" && u !== "$!") || h++;
      u = v;
    } while (u);
    La(a);
  }
  function Fr(i) {
    for (; i != null; i = i.nextSibling) {
      var a = i.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (((a = i.data), a === "$" || a === "$!" || a === "$?")) break;
        if (a === "/$") return null;
      }
    }
    return i;
  }
  function F0(i) {
    i = i.previousSibling;
    for (var a = 0; i;) {
      if (i.nodeType === 8) {
        var u = i.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0) return i;
          a--;
        } else u === "/$" && a++;
      }
      i = i.previousSibling;
    }
    return null;
  }
  var So = Math.random().toString(36).slice(2),
    qn = "__reactFiber$" + So,
    Ya = "__reactProps$" + So,
    dr = "__reactContainer$" + So,
    Ud = "__reactEvents$" + So,
    O2 = "__reactListeners$" + So,
    _2 = "__reactHandles$" + So;
  function bi(i) {
    var a = i[qn];
    if (a) return a;
    for (var u = i.parentNode; u;) {
      if ((a = u[dr] || u[qn])) {
        if (((u = a.alternate), a.child !== null || (u !== null && u.child !== null)))
          for (i = F0(i); i !== null;) {
            if ((u = i[qn])) return u;
            i = F0(i);
          }
        return a;
      }
      ((i = u), (u = i.parentNode));
    }
    return null;
  }
  function Ga(i) {
    return (
      (i = i[qn] || i[dr]),
      !i || (i.tag !== 5 && i.tag !== 6 && i.tag !== 13 && i.tag !== 3) ? null : i
    );
  }
  function Po(i) {
    if (i.tag === 5 || i.tag === 6) return i.stateNode;
    throw Error(n(33));
  }
  function $l(i) {
    return i[Ya] || null;
  }
  var Wd = [],
    Eo = -1;
  function Vr(i) {
    return { current: i };
  }
  function Ue(i) {
    0 > Eo || ((i.current = Wd[Eo]), (Wd[Eo] = null), Eo--);
  }
  function ze(i, a) {
    (Eo++, (Wd[Eo] = i.current), (i.current = a));
  }
  var Br = {},
    Mt = Vr(Br),
    Wt = Vr(!1),
    Si = Br;
  function Co(i, a) {
    var u = i.type.contextTypes;
    if (!u) return Br;
    var h = i.stateNode;
    if (h && h.__reactInternalMemoizedUnmaskedChildContext === a)
      return h.__reactInternalMemoizedMaskedChildContext;
    var v = {},
      y;
    for (y in u) v[y] = a[y];
    return (
      h &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = a),
        (i.__reactInternalMemoizedMaskedChildContext = v)),
      v
    );
  }
  function Kt(i) {
    return ((i = i.childContextTypes), i != null);
  }
  function zl() {
    (Ue(Wt), Ue(Mt));
  }
  function V0(i, a, u) {
    if (Mt.current !== Br) throw Error(n(168));
    (ze(Mt, a), ze(Wt, u));
  }
  function B0(i, a, u) {
    var h = i.stateNode;
    if (((a = a.childContextTypes), typeof h.getChildContext != "function")) return u;
    h = h.getChildContext();
    for (var v in h) if (!(v in a)) throw Error(n(108, Me(i) || "Unknown", v));
    return X({}, u, h);
  }
  function Fl(i) {
    return (
      (i = ((i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext) || Br),
      (Si = Mt.current),
      ze(Mt, i),
      ze(Wt, Wt.current),
      !0
    );
  }
  function U0(i, a, u) {
    var h = i.stateNode;
    if (!h) throw Error(n(169));
    (u
      ? ((i = B0(i, a, Si)),
        (h.__reactInternalMemoizedMergedChildContext = i),
        Ue(Wt),
        Ue(Mt),
        ze(Mt, i))
      : Ue(Wt),
      ze(Wt, u));
  }
  var hr = null,
    Vl = !1,
    Kd = !1;
  function W0(i) {
    hr === null ? (hr = [i]) : hr.push(i);
  }
  function M2(i) {
    ((Vl = !0), W0(i));
  }
  function Ur() {
    if (!Kd && hr !== null) {
      Kd = !0;
      var i = 0,
        a = De;
      try {
        var u = hr;
        for (De = 1; i < u.length; i++) {
          var h = u[i];
          do h = h(!0);
          while (h !== null);
        }
        ((hr = null), (Vl = !1));
      } catch (v) {
        throw (hr !== null && (hr = hr.slice(i + 1)), Hy(hd, Ur), v);
      } finally {
        ((De = a), (Kd = !1));
      }
    }
    return null;
  }
  var Ao = [],
    To = 0,
    Bl = null,
    Ul = 0,
    cn = [],
    fn = 0,
    Pi = null,
    pr = 1,
    mr = "";
  function Ei(i, a) {
    ((Ao[To++] = Ul), (Ao[To++] = Bl), (Bl = i), (Ul = a));
  }
  function K0(i, a, u) {
    ((cn[fn++] = pr), (cn[fn++] = mr), (cn[fn++] = Pi), (Pi = i));
    var h = pr;
    i = mr;
    var v = 32 - Tn(h) - 1;
    ((h &= ~(1 << v)), (u += 1));
    var y = 32 - Tn(a) + v;
    if (30 < y) {
      var P = v - (v % 5);
      ((y = (h & ((1 << P) - 1)).toString(32)),
        (h >>= P),
        (v -= P),
        (pr = (1 << (32 - Tn(a) + v)) | (u << v) | h),
        (mr = y + i));
    } else ((pr = (1 << y) | (u << v) | h), (mr = i));
  }
  function Hd(i) {
    i.return !== null && (Ei(i, 1), K0(i, 1, 0));
  }
  function qd(i) {
    for (; i === Bl;) ((Bl = Ao[--To]), (Ao[To] = null), (Ul = Ao[--To]), (Ao[To] = null));
    for (; i === Pi;)
      ((Pi = cn[--fn]),
        (cn[fn] = null),
        (mr = cn[--fn]),
        (cn[fn] = null),
        (pr = cn[--fn]),
        (cn[fn] = null));
  }
  var Qt = null,
    Jt = null,
    He = !1,
    On = null;
  function H0(i, a) {
    var u = mn(5, null, null, 0);
    ((u.elementType = "DELETED"),
      (u.stateNode = a),
      (u.return = i),
      (a = i.deletions),
      a === null ? ((i.deletions = [u]), (i.flags |= 16)) : a.push(u));
  }
  function q0(i, a) {
    switch (i.tag) {
      case 5:
        var u = i.type;
        return (
          (a = a.nodeType !== 1 || u.toLowerCase() !== a.nodeName.toLowerCase() ? null : a),
          a !== null ? ((i.stateNode = a), (Qt = i), (Jt = Fr(a.firstChild)), !0) : !1
        );
      case 6:
        return (
          (a = i.pendingProps === "" || a.nodeType !== 3 ? null : a),
          a !== null ? ((i.stateNode = a), (Qt = i), (Jt = null), !0) : !1
        );
      case 13:
        return (
          (a = a.nodeType !== 8 ? null : a),
          a !== null
            ? ((u = Pi !== null ? { id: pr, overflow: mr } : null),
              (i.memoizedState = { dehydrated: a, treeContext: u, retryLane: 1073741824 }),
              (u = mn(18, null, null, 0)),
              (u.stateNode = a),
              (u.return = i),
              (i.child = u),
              (Qt = i),
              (Jt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Yd(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function Gd(i) {
    if (He) {
      var a = Jt;
      if (a) {
        var u = a;
        if (!q0(i, a)) {
          if (Yd(i)) throw Error(n(418));
          a = Fr(u.nextSibling);
          var h = Qt;
          a && q0(i, a) ? H0(h, u) : ((i.flags = (i.flags & -4097) | 2), (He = !1), (Qt = i));
        }
      } else {
        if (Yd(i)) throw Error(n(418));
        ((i.flags = (i.flags & -4097) | 2), (He = !1), (Qt = i));
      }
    }
  }
  function Y0(i) {
    for (i = i.return; i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13;) i = i.return;
    Qt = i;
  }
  function Wl(i) {
    if (i !== Qt) return !1;
    if (!He) return (Y0(i), (He = !0), !1);
    var a;
    if (
      ((a = i.tag !== 3) &&
        !(a = i.tag !== 5) &&
        ((a = i.type), (a = a !== "head" && a !== "body" && !Fd(i.type, i.memoizedProps))),
      a && (a = Jt))
    ) {
      if (Yd(i)) throw (G0(), Error(n(418)));
      for (; a;) (H0(i, a), (a = Fr(a.nextSibling)));
    }
    if ((Y0(i), i.tag === 13)) {
      if (((i = i.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(n(317));
      e: {
        for (i = i.nextSibling, a = 0; i;) {
          if (i.nodeType === 8) {
            var u = i.data;
            if (u === "/$") {
              if (a === 0) {
                Jt = Fr(i.nextSibling);
                break e;
              }
              a--;
            } else (u !== "$" && u !== "$!" && u !== "$?") || a++;
          }
          i = i.nextSibling;
        }
        Jt = null;
      }
    } else Jt = Qt ? Fr(i.stateNode.nextSibling) : null;
    return !0;
  }
  function G0() {
    for (var i = Jt; i;) i = Fr(i.nextSibling);
  }
  function ko() {
    ((Jt = Qt = null), (He = !1));
  }
  function Xd(i) {
    On === null ? (On = [i]) : On.push(i);
  }
  var I2 = O.ReactCurrentBatchConfig;
  function Xa(i, a, u) {
    if (((i = u.ref), i !== null && typeof i != "function" && typeof i != "object")) {
      if (u._owner) {
        if (((u = u._owner), u)) {
          if (u.tag !== 1) throw Error(n(309));
          var h = u.stateNode;
        }
        if (!h) throw Error(n(147, i));
        var v = h,
          y = "" + i;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === y
          ? a.ref
          : ((a = function (P) {
              var T = v.refs;
              P === null ? delete T[y] : (T[y] = P);
            }),
            (a._stringRef = y),
            a);
      }
      if (typeof i != "string") throw Error(n(284));
      if (!u._owner) throw Error(n(290, i));
    }
    return i;
  }
  function Kl(i, a) {
    throw (
      (i = Object.prototype.toString.call(a)),
      Error(
        n(31, i === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : i),
      )
    );
  }
  function X0(i) {
    var a = i._init;
    return a(i._payload);
  }
  function Z0(i) {
    function a(L, D) {
      if (i) {
        var $ = L.deletions;
        $ === null ? ((L.deletions = [D]), (L.flags |= 16)) : $.push(D);
      }
    }
    function u(L, D) {
      if (!i) return null;
      for (; D !== null;) (a(L, D), (D = D.sibling));
      return null;
    }
    function h(L, D) {
      for (L = new Map(); D !== null;)
        (D.key !== null ? L.set(D.key, D) : L.set(D.index, D), (D = D.sibling));
      return L;
    }
    function v(L, D) {
      return ((L = Zr(L, D)), (L.index = 0), (L.sibling = null), L);
    }
    function y(L, D, $) {
      return (
        (L.index = $),
        i
          ? (($ = L.alternate),
            $ !== null ? (($ = $.index), $ < D ? ((L.flags |= 2), D) : $) : ((L.flags |= 2), D))
          : ((L.flags |= 1048576), D)
      );
    }
    function P(L) {
      return (i && L.alternate === null && (L.flags |= 2), L);
    }
    function T(L, D, $, ee) {
      return D === null || D.tag !== 6
        ? ((D = Vh($, L.mode, ee)), (D.return = L), D)
        : ((D = v(D, $)), (D.return = L), D);
    }
    function M(L, D, $, ee) {
      var ce = $.type;
      return ce === R
        ? G(L, D, $.props.children, ee, $.key)
        : D !== null &&
            (D.elementType === ce ||
              (typeof ce == "object" && ce !== null && ce.$$typeof === ye && X0(ce) === D.type))
          ? ((ee = v(D, $.props)), (ee.ref = Xa(L, D, $)), (ee.return = L), ee)
          : ((ee = mu($.type, $.key, $.props, null, L.mode, ee)),
            (ee.ref = Xa(L, D, $)),
            (ee.return = L),
            ee);
    }
    function V(L, D, $, ee) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== $.containerInfo ||
        D.stateNode.implementation !== $.implementation
        ? ((D = Bh($, L.mode, ee)), (D.return = L), D)
        : ((D = v(D, $.children || [])), (D.return = L), D);
    }
    function G(L, D, $, ee, ce) {
      return D === null || D.tag !== 7
        ? ((D = Ii($, L.mode, ee, ce)), (D.return = L), D)
        : ((D = v(D, $)), (D.return = L), D);
    }
    function Z(L, D, $) {
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return ((D = Vh("" + D, L.mode, $)), (D.return = L), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case _:
            return (
              ($ = mu(D.type, D.key, D.props, null, L.mode, $)),
              ($.ref = Xa(L, null, D)),
              ($.return = L),
              $
            );
          case I:
            return ((D = Bh(D, L.mode, $)), (D.return = L), D);
          case ye:
            var ee = D._init;
            return Z(L, ee(D._payload), $);
        }
        if (Ca(D) || ne(D)) return ((D = Ii(D, L.mode, $, null)), (D.return = L), D);
        Kl(L, D);
      }
      return null;
    }
    function Y(L, D, $, ee) {
      var ce = D !== null ? D.key : null;
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return ce !== null ? null : T(L, D, "" + $, ee);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case _:
            return $.key === ce ? M(L, D, $, ee) : null;
          case I:
            return $.key === ce ? V(L, D, $, ee) : null;
          case ye:
            return ((ce = $._init), Y(L, D, ce($._payload), ee));
        }
        if (Ca($) || ne($)) return ce !== null ? null : G(L, D, $, ee, null);
        Kl(L, $);
      }
      return null;
    }
    function re(L, D, $, ee, ce) {
      if ((typeof ee == "string" && ee !== "") || typeof ee == "number")
        return ((L = L.get($) || null), T(D, L, "" + ee, ce));
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case _:
            return ((L = L.get(ee.key === null ? $ : ee.key) || null), M(D, L, ee, ce));
          case I:
            return ((L = L.get(ee.key === null ? $ : ee.key) || null), V(D, L, ee, ce));
          case ye:
            var de = ee._init;
            return re(L, D, $, de(ee._payload), ce);
        }
        if (Ca(ee) || ne(ee)) return ((L = L.get($) || null), G(D, L, ee, ce, null));
        Kl(D, ee);
      }
      return null;
    }
    function se(L, D, $, ee) {
      for (
        var ce = null, de = null, he = D, ge = (D = 0), dt = null;
        he !== null && ge < $.length;
        ge++
      ) {
        he.index > ge ? ((dt = he), (he = null)) : (dt = he.sibling);
        var ke = Y(L, he, $[ge], ee);
        if (ke === null) {
          he === null && (he = dt);
          break;
        }
        (i && he && ke.alternate === null && a(L, he),
          (D = y(ke, D, ge)),
          de === null ? (ce = ke) : (de.sibling = ke),
          (de = ke),
          (he = dt));
      }
      if (ge === $.length) return (u(L, he), He && Ei(L, ge), ce);
      if (he === null) {
        for (; ge < $.length; ge++)
          ((he = Z(L, $[ge], ee)),
            he !== null &&
              ((D = y(he, D, ge)), de === null ? (ce = he) : (de.sibling = he), (de = he)));
        return (He && Ei(L, ge), ce);
      }
      for (he = h(L, he); ge < $.length; ge++)
        ((dt = re(he, L, ge, $[ge], ee)),
          dt !== null &&
            (i && dt.alternate !== null && he.delete(dt.key === null ? ge : dt.key),
            (D = y(dt, D, ge)),
            de === null ? (ce = dt) : (de.sibling = dt),
            (de = dt)));
      return (
        i &&
          he.forEach(function (Qr) {
            return a(L, Qr);
          }),
        He && Ei(L, ge),
        ce
      );
    }
    function ue(L, D, $, ee) {
      var ce = ne($);
      if (typeof ce != "function") throw Error(n(150));
      if ((($ = ce.call($)), $ == null)) throw Error(n(151));
      for (
        var de = (ce = null), he = D, ge = (D = 0), dt = null, ke = $.next();
        he !== null && !ke.done;
        ge++, ke = $.next()
      ) {
        he.index > ge ? ((dt = he), (he = null)) : (dt = he.sibling);
        var Qr = Y(L, he, ke.value, ee);
        if (Qr === null) {
          he === null && (he = dt);
          break;
        }
        (i && he && Qr.alternate === null && a(L, he),
          (D = y(Qr, D, ge)),
          de === null ? (ce = Qr) : (de.sibling = Qr),
          (de = Qr),
          (he = dt));
      }
      if (ke.done) return (u(L, he), He && Ei(L, ge), ce);
      if (he === null) {
        for (; !ke.done; ge++, ke = $.next())
          ((ke = Z(L, ke.value, ee)),
            ke !== null &&
              ((D = y(ke, D, ge)), de === null ? (ce = ke) : (de.sibling = ke), (de = ke)));
        return (He && Ei(L, ge), ce);
      }
      for (he = h(L, he); !ke.done; ge++, ke = $.next())
        ((ke = re(he, L, ge, ke.value, ee)),
          ke !== null &&
            (i && ke.alternate !== null && he.delete(ke.key === null ? ge : ke.key),
            (D = y(ke, D, ge)),
            de === null ? (ce = ke) : (de.sibling = ke),
            (de = ke)));
      return (
        i &&
          he.forEach(function (fI) {
            return a(L, fI);
          }),
        He && Ei(L, ge),
        ce
      );
    }
    function et(L, D, $, ee) {
      if (
        (typeof $ == "object" &&
          $ !== null &&
          $.type === R &&
          $.key === null &&
          ($ = $.props.children),
        typeof $ == "object" && $ !== null)
      ) {
        switch ($.$$typeof) {
          case _:
            e: {
              for (var ce = $.key, de = D; de !== null;) {
                if (de.key === ce) {
                  if (((ce = $.type), ce === R)) {
                    if (de.tag === 7) {
                      (u(L, de.sibling), (D = v(de, $.props.children)), (D.return = L), (L = D));
                      break e;
                    }
                  } else if (
                    de.elementType === ce ||
                    (typeof ce == "object" &&
                      ce !== null &&
                      ce.$$typeof === ye &&
                      X0(ce) === de.type)
                  ) {
                    (u(L, de.sibling),
                      (D = v(de, $.props)),
                      (D.ref = Xa(L, de, $)),
                      (D.return = L),
                      (L = D));
                    break e;
                  }
                  u(L, de);
                  break;
                } else a(L, de);
                de = de.sibling;
              }
              $.type === R
                ? ((D = Ii($.props.children, L.mode, ee, $.key)), (D.return = L), (L = D))
                : ((ee = mu($.type, $.key, $.props, null, L.mode, ee)),
                  (ee.ref = Xa(L, D, $)),
                  (ee.return = L),
                  (L = ee));
            }
            return P(L);
          case I:
            e: {
              for (de = $.key; D !== null;) {
                if (D.key === de)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === $.containerInfo &&
                    D.stateNode.implementation === $.implementation
                  ) {
                    (u(L, D.sibling), (D = v(D, $.children || [])), (D.return = L), (L = D));
                    break e;
                  } else {
                    u(L, D);
                    break;
                  }
                else a(L, D);
                D = D.sibling;
              }
              ((D = Bh($, L.mode, ee)), (D.return = L), (L = D));
            }
            return P(L);
          case ye:
            return ((de = $._init), et(L, D, de($._payload), ee));
        }
        if (Ca($)) return se(L, D, $, ee);
        if (ne($)) return ue(L, D, $, ee);
        Kl(L, $);
      }
      return (typeof $ == "string" && $ !== "") || typeof $ == "number"
        ? (($ = "" + $),
          D !== null && D.tag === 6
            ? (u(L, D.sibling), (D = v(D, $)), (D.return = L), (L = D))
            : (u(L, D), (D = Vh($, L.mode, ee)), (D.return = L), (L = D)),
          P(L))
        : u(L, D);
    }
    return et;
  }
  var Oo = Z0(!0),
    Q0 = Z0(!1),
    Hl = Vr(null),
    ql = null,
    _o = null,
    Zd = null;
  function Qd() {
    Zd = _o = ql = null;
  }
  function Jd(i) {
    var a = Hl.current;
    (Ue(Hl), (i._currentValue = a));
  }
  function eh(i, a, u) {
    for (; i !== null;) {
      var h = i.alternate;
      if (
        ((i.childLanes & a) !== a
          ? ((i.childLanes |= a), h !== null && (h.childLanes |= a))
          : h !== null && (h.childLanes & a) !== a && (h.childLanes |= a),
        i === u)
      )
        break;
      i = i.return;
    }
  }
  function Mo(i, a) {
    ((ql = i),
      (Zd = _o = null),
      (i = i.dependencies),
      i !== null &&
        i.firstContext !== null &&
        ((i.lanes & a) !== 0 && (Ht = !0), (i.firstContext = null)));
  }
  function dn(i) {
    var a = i._currentValue;
    if (Zd !== i)
      if (((i = { context: i, memoizedValue: a, next: null }), _o === null)) {
        if (ql === null) throw Error(n(308));
        ((_o = i), (ql.dependencies = { lanes: 0, firstContext: i }));
      } else _o = _o.next = i;
    return a;
  }
  var Ci = null;
  function th(i) {
    Ci === null ? (Ci = [i]) : Ci.push(i);
  }
  function J0(i, a, u, h) {
    var v = a.interleaved;
    return (
      v === null ? ((u.next = u), th(a)) : ((u.next = v.next), (v.next = u)),
      (a.interleaved = u),
      vr(i, h)
    );
  }
  function vr(i, a) {
    i.lanes |= a;
    var u = i.alternate;
    for (u !== null && (u.lanes |= a), u = i, i = i.return; i !== null;)
      ((i.childLanes |= a),
        (u = i.alternate),
        u !== null && (u.childLanes |= a),
        (u = i),
        (i = i.return));
    return u.tag === 3 ? u.stateNode : null;
  }
  var Wr = !1;
  function nh(i) {
    i.updateQueue = {
      baseState: i.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function e1(i, a) {
    ((i = i.updateQueue),
      a.updateQueue === i &&
        (a.updateQueue = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects,
        }));
  }
  function gr(i, a) {
    return { eventTime: i, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Kr(i, a, u) {
    var h = i.updateQueue;
    if (h === null) return null;
    if (((h = h.shared), (Te & 2) !== 0)) {
      var v = h.pending;
      return (
        v === null ? (a.next = a) : ((a.next = v.next), (v.next = a)),
        (h.pending = a),
        vr(i, u)
      );
    }
    return (
      (v = h.interleaved),
      v === null ? ((a.next = a), th(h)) : ((a.next = v.next), (v.next = a)),
      (h.interleaved = a),
      vr(i, u)
    );
  }
  function Yl(i, a, u) {
    if (((a = a.updateQueue), a !== null && ((a = a.shared), (u & 4194240) !== 0))) {
      var h = a.lanes;
      ((h &= i.pendingLanes), (u |= h), (a.lanes = u), vd(i, u));
    }
  }
  function t1(i, a) {
    var u = i.updateQueue,
      h = i.alternate;
    if (h !== null && ((h = h.updateQueue), u === h)) {
      var v = null,
        y = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var P = {
            eventTime: u.eventTime,
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          };
          (y === null ? (v = y = P) : (y = y.next = P), (u = u.next));
        } while (u !== null);
        y === null ? (v = y = a) : (y = y.next = a);
      } else v = y = a;
      ((u = {
        baseState: h.baseState,
        firstBaseUpdate: v,
        lastBaseUpdate: y,
        shared: h.shared,
        effects: h.effects,
      }),
        (i.updateQueue = u));
      return;
    }
    ((i = u.lastBaseUpdate),
      i === null ? (u.firstBaseUpdate = a) : (i.next = a),
      (u.lastBaseUpdate = a));
  }
  function Gl(i, a, u, h) {
    var v = i.updateQueue;
    Wr = !1;
    var y = v.firstBaseUpdate,
      P = v.lastBaseUpdate,
      T = v.shared.pending;
    if (T !== null) {
      v.shared.pending = null;
      var M = T,
        V = M.next;
      ((M.next = null), P === null ? (y = V) : (P.next = V), (P = M));
      var G = i.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (T = G.lastBaseUpdate),
        T !== P && (T === null ? (G.firstBaseUpdate = V) : (T.next = V), (G.lastBaseUpdate = M)));
    }
    if (y !== null) {
      var Z = v.baseState;
      ((P = 0), (G = V = M = null), (T = y));
      do {
        var Y = T.lane,
          re = T.eventTime;
        if ((h & Y) === Y) {
          G !== null &&
            (G = G.next =
              {
                eventTime: re,
                lane: 0,
                tag: T.tag,
                payload: T.payload,
                callback: T.callback,
                next: null,
              });
          e: {
            var se = i,
              ue = T;
            switch (((Y = a), (re = u), ue.tag)) {
              case 1:
                if (((se = ue.payload), typeof se == "function")) {
                  Z = se.call(re, Z, Y);
                  break e;
                }
                Z = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = ue.payload),
                  (Y = typeof se == "function" ? se.call(re, Z, Y) : se),
                  Y == null)
                )
                  break e;
                Z = X({}, Z, Y);
                break e;
              case 2:
                Wr = !0;
            }
          }
          T.callback !== null &&
            T.lane !== 0 &&
            ((i.flags |= 64), (Y = v.effects), Y === null ? (v.effects = [T]) : Y.push(T));
        } else
          ((re = {
            eventTime: re,
            lane: Y,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            G === null ? ((V = G = re), (M = Z)) : (G = G.next = re),
            (P |= Y));
        if (((T = T.next), T === null)) {
          if (((T = v.shared.pending), T === null)) break;
          ((Y = T),
            (T = Y.next),
            (Y.next = null),
            (v.lastBaseUpdate = Y),
            (v.shared.pending = null));
        }
      } while (!0);
      if (
        (G === null && (M = Z),
        (v.baseState = M),
        (v.firstBaseUpdate = V),
        (v.lastBaseUpdate = G),
        (a = v.shared.interleaved),
        a !== null)
      ) {
        v = a;
        do ((P |= v.lane), (v = v.next));
        while (v !== a);
      } else y === null && (v.shared.lanes = 0);
      ((ki |= P), (i.lanes = P), (i.memoizedState = Z));
    }
  }
  function n1(i, a, u) {
    if (((i = a.effects), (a.effects = null), i !== null))
      for (a = 0; a < i.length; a++) {
        var h = i[a],
          v = h.callback;
        if (v !== null) {
          if (((h.callback = null), (h = u), typeof v != "function")) throw Error(n(191, v));
          v.call(h);
        }
      }
  }
  var Za = {},
    Yn = Vr(Za),
    Qa = Vr(Za),
    Ja = Vr(Za);
  function Ai(i) {
    if (i === Za) throw Error(n(174));
    return i;
  }
  function rh(i, a) {
    switch ((ze(Ja, a), ze(Qa, i), ze(Yn, Za), (i = a.nodeType), i)) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : id(null, "");
        break;
      default:
        ((i = i === 8 ? a.parentNode : a),
          (a = i.namespaceURI || null),
          (i = i.tagName),
          (a = id(a, i)));
    }
    (Ue(Yn), ze(Yn, a));
  }
  function Io() {
    (Ue(Yn), Ue(Qa), Ue(Ja));
  }
  function r1(i) {
    Ai(Ja.current);
    var a = Ai(Yn.current),
      u = id(a, i.type);
    a !== u && (ze(Qa, i), ze(Yn, u));
  }
  function ih(i) {
    Qa.current === i && (Ue(Yn), Ue(Qa));
  }
  var Ye = Vr(0);
  function Xl(i) {
    for (var a = i; a !== null;) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && ((u = u.dehydrated), u === null || u.data === "$?" || u.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === i) break;
      for (; a.sibling === null;) {
        if (a.return === null || a.return === i) return null;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
    return null;
  }
  var oh = [];
  function ah() {
    for (var i = 0; i < oh.length; i++) oh[i]._workInProgressVersionPrimary = null;
    oh.length = 0;
  }
  var Zl = O.ReactCurrentDispatcher,
    sh = O.ReactCurrentBatchConfig,
    Ti = 0,
    Ge = null,
    ot = null,
    ct = null,
    Ql = !1,
    es = !1,
    ts = 0,
    D2 = 0;
  function It() {
    throw Error(n(321));
  }
  function lh(i, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < i.length; u++) if (!kn(i[u], a[u])) return !1;
    return !0;
  }
  function uh(i, a, u, h, v, y) {
    if (
      ((Ti = y),
      (Ge = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (Zl.current = i === null || i.memoizedState === null ? L2 : $2),
      (i = u(h, v)),
      es)
    ) {
      y = 0;
      do {
        if (((es = !1), (ts = 0), 25 <= y)) throw Error(n(301));
        ((y += 1), (ct = ot = null), (a.updateQueue = null), (Zl.current = z2), (i = u(h, v)));
      } while (es);
    }
    if (
      ((Zl.current = tu),
      (a = ot !== null && ot.next !== null),
      (Ti = 0),
      (ct = ot = Ge = null),
      (Ql = !1),
      a)
    )
      throw Error(n(300));
    return i;
  }
  function ch() {
    var i = ts !== 0;
    return ((ts = 0), i);
  }
  function Gn() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ct === null ? (Ge.memoizedState = ct = i) : (ct = ct.next = i), ct);
  }
  function hn() {
    if (ot === null) {
      var i = Ge.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = ot.next;
    var a = ct === null ? Ge.memoizedState : ct.next;
    if (a !== null) ((ct = a), (ot = i));
    else {
      if (i === null) throw Error(n(310));
      ((ot = i),
        (i = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null,
        }),
        ct === null ? (Ge.memoizedState = ct = i) : (ct = ct.next = i));
    }
    return ct;
  }
  function ns(i, a) {
    return typeof a == "function" ? a(i) : a;
  }
  function fh(i) {
    var a = hn(),
      u = a.queue;
    if (u === null) throw Error(n(311));
    u.lastRenderedReducer = i;
    var h = ot,
      v = h.baseQueue,
      y = u.pending;
    if (y !== null) {
      if (v !== null) {
        var P = v.next;
        ((v.next = y.next), (y.next = P));
      }
      ((h.baseQueue = v = y), (u.pending = null));
    }
    if (v !== null) {
      ((y = v.next), (h = h.baseState));
      var T = (P = null),
        M = null,
        V = y;
      do {
        var G = V.lane;
        if ((Ti & G) === G)
          (M !== null &&
            (M = M.next =
              {
                lane: 0,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null,
              }),
            (h = V.hasEagerState ? V.eagerState : i(h, V.action)));
        else {
          var Z = {
            lane: G,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          };
          (M === null ? ((T = M = Z), (P = h)) : (M = M.next = Z), (Ge.lanes |= G), (ki |= G));
        }
        V = V.next;
      } while (V !== null && V !== y);
      (M === null ? (P = h) : (M.next = T),
        kn(h, a.memoizedState) || (Ht = !0),
        (a.memoizedState = h),
        (a.baseState = P),
        (a.baseQueue = M),
        (u.lastRenderedState = h));
    }
    if (((i = u.interleaved), i !== null)) {
      v = i;
      do ((y = v.lane), (Ge.lanes |= y), (ki |= y), (v = v.next));
      while (v !== i);
    } else v === null && (u.lanes = 0);
    return [a.memoizedState, u.dispatch];
  }
  function dh(i) {
    var a = hn(),
      u = a.queue;
    if (u === null) throw Error(n(311));
    u.lastRenderedReducer = i;
    var h = u.dispatch,
      v = u.pending,
      y = a.memoizedState;
    if (v !== null) {
      u.pending = null;
      var P = (v = v.next);
      do ((y = i(y, P.action)), (P = P.next));
      while (P !== v);
      (kn(y, a.memoizedState) || (Ht = !0),
        (a.memoizedState = y),
        a.baseQueue === null && (a.baseState = y),
        (u.lastRenderedState = y));
    }
    return [y, h];
  }
  function i1() {}
  function o1(i, a) {
    var u = Ge,
      h = hn(),
      v = a(),
      y = !kn(h.memoizedState, v);
    if (
      (y && ((h.memoizedState = v), (Ht = !0)),
      (h = h.queue),
      hh(l1.bind(null, u, h, i), [i]),
      h.getSnapshot !== a || y || (ct !== null && ct.memoizedState.tag & 1))
    ) {
      if (((u.flags |= 2048), rs(9, s1.bind(null, u, h, v, a), void 0, null), ft === null))
        throw Error(n(349));
      (Ti & 30) !== 0 || a1(u, a, v);
    }
    return v;
  }
  function a1(i, a, u) {
    ((i.flags |= 16384),
      (i = { getSnapshot: a, value: u }),
      (a = Ge.updateQueue),
      a === null
        ? ((a = { lastEffect: null, stores: null }), (Ge.updateQueue = a), (a.stores = [i]))
        : ((u = a.stores), u === null ? (a.stores = [i]) : u.push(i)));
  }
  function s1(i, a, u, h) {
    ((a.value = u), (a.getSnapshot = h), u1(a) && c1(i));
  }
  function l1(i, a, u) {
    return u(function () {
      u1(a) && c1(i);
    });
  }
  function u1(i) {
    var a = i.getSnapshot;
    i = i.value;
    try {
      var u = a();
      return !kn(i, u);
    } catch {
      return !0;
    }
  }
  function c1(i) {
    var a = vr(i, 1);
    a !== null && Dn(a, i, 1, -1);
  }
  function f1(i) {
    var a = Gn();
    return (
      typeof i == "function" && (i = i()),
      (a.memoizedState = a.baseState = i),
      (i = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ns,
        lastRenderedState: i,
      }),
      (a.queue = i),
      (i = i.dispatch = R2.bind(null, Ge, i)),
      [a.memoizedState, i]
    );
  }
  function rs(i, a, u, h) {
    return (
      (i = { tag: i, create: a, destroy: u, deps: h, next: null }),
      (a = Ge.updateQueue),
      a === null
        ? ((a = { lastEffect: null, stores: null }),
          (Ge.updateQueue = a),
          (a.lastEffect = i.next = i))
        : ((u = a.lastEffect),
          u === null
            ? (a.lastEffect = i.next = i)
            : ((h = u.next), (u.next = i), (i.next = h), (a.lastEffect = i))),
      i
    );
  }
  function d1() {
    return hn().memoizedState;
  }
  function Jl(i, a, u, h) {
    var v = Gn();
    ((Ge.flags |= i), (v.memoizedState = rs(1 | a, u, void 0, h === void 0 ? null : h)));
  }
  function eu(i, a, u, h) {
    var v = hn();
    h = h === void 0 ? null : h;
    var y = void 0;
    if (ot !== null) {
      var P = ot.memoizedState;
      if (((y = P.destroy), h !== null && lh(h, P.deps))) {
        v.memoizedState = rs(a, u, y, h);
        return;
      }
    }
    ((Ge.flags |= i), (v.memoizedState = rs(1 | a, u, y, h)));
  }
  function h1(i, a) {
    return Jl(8390656, 8, i, a);
  }
  function hh(i, a) {
    return eu(2048, 8, i, a);
  }
  function p1(i, a) {
    return eu(4, 2, i, a);
  }
  function m1(i, a) {
    return eu(4, 4, i, a);
  }
  function v1(i, a) {
    if (typeof a == "function")
      return (
        (i = i()),
        a(i),
        function () {
          a(null);
        }
      );
    if (a != null)
      return (
        (i = i()),
        (a.current = i),
        function () {
          a.current = null;
        }
      );
  }
  function g1(i, a, u) {
    return ((u = u != null ? u.concat([i]) : null), eu(4, 4, v1.bind(null, a, i), u));
  }
  function ph() {}
  function y1(i, a) {
    var u = hn();
    a = a === void 0 ? null : a;
    var h = u.memoizedState;
    return h !== null && a !== null && lh(a, h[1]) ? h[0] : ((u.memoizedState = [i, a]), i);
  }
  function x1(i, a) {
    var u = hn();
    a = a === void 0 ? null : a;
    var h = u.memoizedState;
    return h !== null && a !== null && lh(a, h[1])
      ? h[0]
      : ((i = i()), (u.memoizedState = [i, a]), i);
  }
  function w1(i, a, u) {
    return (Ti & 21) === 0
      ? (i.baseState && ((i.baseState = !1), (Ht = !0)), (i.memoizedState = u))
      : (kn(u, a) || ((u = Xy()), (Ge.lanes |= u), (ki |= u), (i.baseState = !0)), a);
  }
  function j2(i, a) {
    var u = De;
    ((De = u !== 0 && 4 > u ? u : 4), i(!0));
    var h = sh.transition;
    sh.transition = {};
    try {
      (i(!1), a());
    } finally {
      ((De = u), (sh.transition = h));
    }
  }
  function b1() {
    return hn().memoizedState;
  }
  function N2(i, a, u) {
    var h = Gr(i);
    if (((u = { lane: h, action: u, hasEagerState: !1, eagerState: null, next: null }), S1(i)))
      P1(a, u);
    else if (((u = J0(i, a, u, h)), u !== null)) {
      var v = Lt();
      (Dn(u, i, h, v), E1(u, a, h));
    }
  }
  function R2(i, a, u) {
    var h = Gr(i),
      v = { lane: h, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (S1(i)) P1(a, v);
    else {
      var y = i.alternate;
      if (
        i.lanes === 0 &&
        (y === null || y.lanes === 0) &&
        ((y = a.lastRenderedReducer), y !== null)
      )
        try {
          var P = a.lastRenderedState,
            T = y(P, u);
          if (((v.hasEagerState = !0), (v.eagerState = T), kn(T, P))) {
            var M = a.interleaved;
            (M === null ? ((v.next = v), th(a)) : ((v.next = M.next), (M.next = v)),
              (a.interleaved = v));
            return;
          }
        } catch {
        } finally {
        }
      ((u = J0(i, a, v, h)), u !== null && ((v = Lt()), Dn(u, i, h, v), E1(u, a, h)));
    }
  }
  function S1(i) {
    var a = i.alternate;
    return i === Ge || (a !== null && a === Ge);
  }
  function P1(i, a) {
    es = Ql = !0;
    var u = i.pending;
    (u === null ? (a.next = a) : ((a.next = u.next), (u.next = a)), (i.pending = a));
  }
  function E1(i, a, u) {
    if ((u & 4194240) !== 0) {
      var h = a.lanes;
      ((h &= i.pendingLanes), (u |= h), (a.lanes = u), vd(i, u));
    }
  }
  var tu = {
      readContext: dn,
      useCallback: It,
      useContext: It,
      useEffect: It,
      useImperativeHandle: It,
      useInsertionEffect: It,
      useLayoutEffect: It,
      useMemo: It,
      useReducer: It,
      useRef: It,
      useState: It,
      useDebugValue: It,
      useDeferredValue: It,
      useTransition: It,
      useMutableSource: It,
      useSyncExternalStore: It,
      useId: It,
      unstable_isNewReconciler: !1,
    },
    L2 = {
      readContext: dn,
      useCallback: function (i, a) {
        return ((Gn().memoizedState = [i, a === void 0 ? null : a]), i);
      },
      useContext: dn,
      useEffect: h1,
      useImperativeHandle: function (i, a, u) {
        return ((u = u != null ? u.concat([i]) : null), Jl(4194308, 4, v1.bind(null, a, i), u));
      },
      useLayoutEffect: function (i, a) {
        return Jl(4194308, 4, i, a);
      },
      useInsertionEffect: function (i, a) {
        return Jl(4, 2, i, a);
      },
      useMemo: function (i, a) {
        var u = Gn();
        return ((a = a === void 0 ? null : a), (i = i()), (u.memoizedState = [i, a]), i);
      },
      useReducer: function (i, a, u) {
        var h = Gn();
        return (
          (a = u !== void 0 ? u(a) : a),
          (h.memoizedState = h.baseState = a),
          (i = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: i,
            lastRenderedState: a,
          }),
          (h.queue = i),
          (i = i.dispatch = N2.bind(null, Ge, i)),
          [h.memoizedState, i]
        );
      },
      useRef: function (i) {
        var a = Gn();
        return ((i = { current: i }), (a.memoizedState = i));
      },
      useState: f1,
      useDebugValue: ph,
      useDeferredValue: function (i) {
        return (Gn().memoizedState = i);
      },
      useTransition: function () {
        var i = f1(!1),
          a = i[0];
        return ((i = j2.bind(null, i[1])), (Gn().memoizedState = i), [a, i]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (i, a, u) {
        var h = Ge,
          v = Gn();
        if (He) {
          if (u === void 0) throw Error(n(407));
          u = u();
        } else {
          if (((u = a()), ft === null)) throw Error(n(349));
          (Ti & 30) !== 0 || a1(h, a, u);
        }
        v.memoizedState = u;
        var y = { value: u, getSnapshot: a };
        return (
          (v.queue = y),
          h1(l1.bind(null, h, y, i), [i]),
          (h.flags |= 2048),
          rs(9, s1.bind(null, h, y, u, a), void 0, null),
          u
        );
      },
      useId: function () {
        var i = Gn(),
          a = ft.identifierPrefix;
        if (He) {
          var u = mr,
            h = pr;
          ((u = (h & ~(1 << (32 - Tn(h) - 1))).toString(32) + u),
            (a = ":" + a + "R" + u),
            (u = ts++),
            0 < u && (a += "H" + u.toString(32)),
            (a += ":"));
        } else ((u = D2++), (a = ":" + a + "r" + u.toString(32) + ":"));
        return (i.memoizedState = a);
      },
      unstable_isNewReconciler: !1,
    },
    $2 = {
      readContext: dn,
      useCallback: y1,
      useContext: dn,
      useEffect: hh,
      useImperativeHandle: g1,
      useInsertionEffect: p1,
      useLayoutEffect: m1,
      useMemo: x1,
      useReducer: fh,
      useRef: d1,
      useState: function () {
        return fh(ns);
      },
      useDebugValue: ph,
      useDeferredValue: function (i) {
        var a = hn();
        return w1(a, ot.memoizedState, i);
      },
      useTransition: function () {
        var i = fh(ns)[0],
          a = hn().memoizedState;
        return [i, a];
      },
      useMutableSource: i1,
      useSyncExternalStore: o1,
      useId: b1,
      unstable_isNewReconciler: !1,
    },
    z2 = {
      readContext: dn,
      useCallback: y1,
      useContext: dn,
      useEffect: hh,
      useImperativeHandle: g1,
      useInsertionEffect: p1,
      useLayoutEffect: m1,
      useMemo: x1,
      useReducer: dh,
      useRef: d1,
      useState: function () {
        return dh(ns);
      },
      useDebugValue: ph,
      useDeferredValue: function (i) {
        var a = hn();
        return ot === null ? (a.memoizedState = i) : w1(a, ot.memoizedState, i);
      },
      useTransition: function () {
        var i = dh(ns)[0],
          a = hn().memoizedState;
        return [i, a];
      },
      useMutableSource: i1,
      useSyncExternalStore: o1,
      useId: b1,
      unstable_isNewReconciler: !1,
    };
  function _n(i, a) {
    if (i && i.defaultProps) {
      ((a = X({}, a)), (i = i.defaultProps));
      for (var u in i) a[u] === void 0 && (a[u] = i[u]);
      return a;
    }
    return a;
  }
  function mh(i, a, u, h) {
    ((a = i.memoizedState),
      (u = u(h, a)),
      (u = u == null ? a : X({}, a, u)),
      (i.memoizedState = u),
      i.lanes === 0 && (i.updateQueue.baseState = u));
  }
  var nu = {
    isMounted: function (i) {
      return (i = i._reactInternals) ? wi(i) === i : !1;
    },
    enqueueSetState: function (i, a, u) {
      i = i._reactInternals;
      var h = Lt(),
        v = Gr(i),
        y = gr(h, v);
      ((y.payload = a),
        u != null && (y.callback = u),
        (a = Kr(i, y, v)),
        a !== null && (Dn(a, i, v, h), Yl(a, i, v)));
    },
    enqueueReplaceState: function (i, a, u) {
      i = i._reactInternals;
      var h = Lt(),
        v = Gr(i),
        y = gr(h, v);
      ((y.tag = 1),
        (y.payload = a),
        u != null && (y.callback = u),
        (a = Kr(i, y, v)),
        a !== null && (Dn(a, i, v, h), Yl(a, i, v)));
    },
    enqueueForceUpdate: function (i, a) {
      i = i._reactInternals;
      var u = Lt(),
        h = Gr(i),
        v = gr(u, h);
      ((v.tag = 2),
        a != null && (v.callback = a),
        (a = Kr(i, v, h)),
        a !== null && (Dn(a, i, h, u), Yl(a, i, h)));
    },
  };
  function C1(i, a, u, h, v, y, P) {
    return (
      (i = i.stateNode),
      typeof i.shouldComponentUpdate == "function"
        ? i.shouldComponentUpdate(h, y, P)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Ua(u, h) || !Ua(v, y)
          : !0
    );
  }
  function A1(i, a, u) {
    var h = !1,
      v = Br,
      y = a.contextType;
    return (
      typeof y == "object" && y !== null
        ? (y = dn(y))
        : ((v = Kt(a) ? Si : Mt.current),
          (h = a.contextTypes),
          (y = (h = h != null) ? Co(i, v) : Br)),
      (a = new a(u, y)),
      (i.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
      (a.updater = nu),
      (i.stateNode = a),
      (a._reactInternals = i),
      h &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = v),
        (i.__reactInternalMemoizedMaskedChildContext = y)),
      a
    );
  }
  function T1(i, a, u, h) {
    ((i = a.state),
      typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, h),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(u, h),
      a.state !== i && nu.enqueueReplaceState(a, a.state, null));
  }
  function vh(i, a, u, h) {
    var v = i.stateNode;
    ((v.props = u), (v.state = i.memoizedState), (v.refs = {}), nh(i));
    var y = a.contextType;
    (typeof y == "object" && y !== null
      ? (v.context = dn(y))
      : ((y = Kt(a) ? Si : Mt.current), (v.context = Co(i, y))),
      (v.state = i.memoizedState),
      (y = a.getDerivedStateFromProps),
      typeof y == "function" && (mh(i, a, y, u), (v.state = i.memoizedState)),
      typeof a.getDerivedStateFromProps == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function" ||
        (typeof v.UNSAFE_componentWillMount != "function" &&
          typeof v.componentWillMount != "function") ||
        ((a = v.state),
        typeof v.componentWillMount == "function" && v.componentWillMount(),
        typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(),
        a !== v.state && nu.enqueueReplaceState(v, v.state, null),
        Gl(i, u, v, h),
        (v.state = i.memoizedState)),
      typeof v.componentDidMount == "function" && (i.flags |= 4194308));
  }
  function Do(i, a) {
    try {
      var u = "",
        h = a;
      do ((u += we(h)), (h = h.return));
      while (h);
      var v = u;
    } catch (y) {
      v =
        `
Error generating stack: ` +
        y.message +
        `
` +
        y.stack;
    }
    return { value: i, source: a, stack: v, digest: null };
  }
  function gh(i, a, u) {
    return { value: i, source: null, stack: u ?? null, digest: a ?? null };
  }
  function yh(i, a) {
    try {
      console.error(a.value);
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  var F2 = typeof WeakMap == "function" ? WeakMap : Map;
  function k1(i, a, u) {
    ((u = gr(-1, u)), (u.tag = 3), (u.payload = { element: null }));
    var h = a.value;
    return (
      (u.callback = function () {
        (uu || ((uu = !0), (Dh = h)), yh(i, a));
      }),
      u
    );
  }
  function O1(i, a, u) {
    ((u = gr(-1, u)), (u.tag = 3));
    var h = i.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var v = a.value;
      ((u.payload = function () {
        return h(v);
      }),
        (u.callback = function () {
          yh(i, a);
        }));
    }
    var y = i.stateNode;
    return (
      y !== null &&
        typeof y.componentDidCatch == "function" &&
        (u.callback = function () {
          (yh(i, a),
            typeof h != "function" && (qr === null ? (qr = new Set([this])) : qr.add(this)));
          var P = a.stack;
          this.componentDidCatch(a.value, { componentStack: P !== null ? P : "" });
        }),
      u
    );
  }
  function _1(i, a, u) {
    var h = i.pingCache;
    if (h === null) {
      h = i.pingCache = new F2();
      var v = new Set();
      h.set(a, v);
    } else ((v = h.get(a)), v === void 0 && ((v = new Set()), h.set(a, v)));
    v.has(u) || (v.add(u), (i = eI.bind(null, i, a, u)), a.then(i, i));
  }
  function M1(i) {
    do {
      var a;
      if (
        ((a = i.tag === 13) &&
          ((a = i.memoizedState), (a = a !== null ? a.dehydrated !== null : !0)),
        a)
      )
        return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function I1(i, a, u, h, v) {
    return (i.mode & 1) === 0
      ? (i === a
          ? (i.flags |= 65536)
          : ((i.flags |= 128),
            (u.flags |= 131072),
            (u.flags &= -52805),
            u.tag === 1 &&
              (u.alternate === null ? (u.tag = 17) : ((a = gr(-1, 1)), (a.tag = 2), Kr(u, a, 1))),
            (u.lanes |= 1)),
        i)
      : ((i.flags |= 65536), (i.lanes = v), i);
  }
  var V2 = O.ReactCurrentOwner,
    Ht = !1;
  function Rt(i, a, u, h) {
    a.child = i === null ? Q0(a, null, u, h) : Oo(a, i.child, u, h);
  }
  function D1(i, a, u, h, v) {
    u = u.render;
    var y = a.ref;
    return (
      Mo(a, v),
      (h = uh(i, a, u, h, y, v)),
      (u = ch()),
      i !== null && !Ht
        ? ((a.updateQueue = i.updateQueue), (a.flags &= -2053), (i.lanes &= ~v), yr(i, a, v))
        : (He && u && Hd(a), (a.flags |= 1), Rt(i, a, h, v), a.child)
    );
  }
  function j1(i, a, u, h, v) {
    if (i === null) {
      var y = u.type;
      return typeof y == "function" &&
        !Fh(y) &&
        y.defaultProps === void 0 &&
        u.compare === null &&
        u.defaultProps === void 0
        ? ((a.tag = 15), (a.type = y), N1(i, a, y, h, v))
        : ((i = mu(u.type, null, h, a, a.mode, v)), (i.ref = a.ref), (i.return = a), (a.child = i));
    }
    if (((y = i.child), (i.lanes & v) === 0)) {
      var P = y.memoizedProps;
      if (((u = u.compare), (u = u !== null ? u : Ua), u(P, h) && i.ref === a.ref))
        return yr(i, a, v);
    }
    return ((a.flags |= 1), (i = Zr(y, h)), (i.ref = a.ref), (i.return = a), (a.child = i));
  }
  function N1(i, a, u, h, v) {
    if (i !== null) {
      var y = i.memoizedProps;
      if (Ua(y, h) && i.ref === a.ref)
        if (((Ht = !1), (a.pendingProps = h = y), (i.lanes & v) !== 0))
          (i.flags & 131072) !== 0 && (Ht = !0);
        else return ((a.lanes = i.lanes), yr(i, a, v));
    }
    return xh(i, a, u, h, v);
  }
  function R1(i, a, u) {
    var h = a.pendingProps,
      v = h.children,
      y = i !== null ? i.memoizedState : null;
    if (h.mode === "hidden")
      if ((a.mode & 1) === 0)
        ((a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ze(No, en),
          (en |= u));
      else {
        if ((u & 1073741824) === 0)
          return (
            (i = y !== null ? y.baseLanes | u : u),
            (a.lanes = a.childLanes = 1073741824),
            (a.memoizedState = { baseLanes: i, cachePool: null, transitions: null }),
            (a.updateQueue = null),
            ze(No, en),
            (en |= i),
            null
          );
        ((a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (h = y !== null ? y.baseLanes : u),
          ze(No, en),
          (en |= h));
      }
    else
      (y !== null ? ((h = y.baseLanes | u), (a.memoizedState = null)) : (h = u),
        ze(No, en),
        (en |= h));
    return (Rt(i, a, v, u), a.child);
  }
  function L1(i, a) {
    var u = a.ref;
    ((i === null && u !== null) || (i !== null && i.ref !== u)) &&
      ((a.flags |= 512), (a.flags |= 2097152));
  }
  function xh(i, a, u, h, v) {
    var y = Kt(u) ? Si : Mt.current;
    return (
      (y = Co(a, y)),
      Mo(a, v),
      (u = uh(i, a, u, h, y, v)),
      (h = ch()),
      i !== null && !Ht
        ? ((a.updateQueue = i.updateQueue), (a.flags &= -2053), (i.lanes &= ~v), yr(i, a, v))
        : (He && h && Hd(a), (a.flags |= 1), Rt(i, a, u, v), a.child)
    );
  }
  function $1(i, a, u, h, v) {
    if (Kt(u)) {
      var y = !0;
      Fl(a);
    } else y = !1;
    if ((Mo(a, v), a.stateNode === null)) (iu(i, a), A1(a, u, h), vh(a, u, h, v), (h = !0));
    else if (i === null) {
      var P = a.stateNode,
        T = a.memoizedProps;
      P.props = T;
      var M = P.context,
        V = u.contextType;
      typeof V == "object" && V !== null
        ? (V = dn(V))
        : ((V = Kt(u) ? Si : Mt.current), (V = Co(a, V)));
      var G = u.getDerivedStateFromProps,
        Z = typeof G == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      (Z ||
        (typeof P.UNSAFE_componentWillReceiveProps != "function" &&
          typeof P.componentWillReceiveProps != "function") ||
        ((T !== h || M !== V) && T1(a, P, h, V)),
        (Wr = !1));
      var Y = a.memoizedState;
      ((P.state = Y),
        Gl(a, h, P, v),
        (M = a.memoizedState),
        T !== h || Y !== M || Wt.current || Wr
          ? (typeof G == "function" && (mh(a, u, G, h), (M = a.memoizedState)),
            (T = Wr || C1(a, u, T, h, Y, M, V))
              ? (Z ||
                  (typeof P.UNSAFE_componentWillMount != "function" &&
                    typeof P.componentWillMount != "function") ||
                  (typeof P.componentWillMount == "function" && P.componentWillMount(),
                  typeof P.UNSAFE_componentWillMount == "function" &&
                    P.UNSAFE_componentWillMount()),
                typeof P.componentDidMount == "function" && (a.flags |= 4194308))
              : (typeof P.componentDidMount == "function" && (a.flags |= 4194308),
                (a.memoizedProps = h),
                (a.memoizedState = M)),
            (P.props = h),
            (P.state = M),
            (P.context = V),
            (h = T))
          : (typeof P.componentDidMount == "function" && (a.flags |= 4194308), (h = !1)));
    } else {
      ((P = a.stateNode),
        e1(i, a),
        (T = a.memoizedProps),
        (V = a.type === a.elementType ? T : _n(a.type, T)),
        (P.props = V),
        (Z = a.pendingProps),
        (Y = P.context),
        (M = u.contextType),
        typeof M == "object" && M !== null
          ? (M = dn(M))
          : ((M = Kt(u) ? Si : Mt.current), (M = Co(a, M))));
      var re = u.getDerivedStateFromProps;
      ((G = typeof re == "function" || typeof P.getSnapshotBeforeUpdate == "function") ||
        (typeof P.UNSAFE_componentWillReceiveProps != "function" &&
          typeof P.componentWillReceiveProps != "function") ||
        ((T !== Z || Y !== M) && T1(a, P, h, M)),
        (Wr = !1),
        (Y = a.memoizedState),
        (P.state = Y),
        Gl(a, h, P, v));
      var se = a.memoizedState;
      T !== Z || Y !== se || Wt.current || Wr
        ? (typeof re == "function" && (mh(a, u, re, h), (se = a.memoizedState)),
          (V = Wr || C1(a, u, V, h, Y, se, M) || !1)
            ? (G ||
                (typeof P.UNSAFE_componentWillUpdate != "function" &&
                  typeof P.componentWillUpdate != "function") ||
                (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(h, se, M),
                typeof P.UNSAFE_componentWillUpdate == "function" &&
                  P.UNSAFE_componentWillUpdate(h, se, M)),
              typeof P.componentDidUpdate == "function" && (a.flags |= 4),
              typeof P.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024))
            : (typeof P.componentDidUpdate != "function" ||
                (T === i.memoizedProps && Y === i.memoizedState) ||
                (a.flags |= 4),
              typeof P.getSnapshotBeforeUpdate != "function" ||
                (T === i.memoizedProps && Y === i.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = h),
              (a.memoizedState = se)),
          (P.props = h),
          (P.state = se),
          (P.context = M),
          (h = V))
        : (typeof P.componentDidUpdate != "function" ||
            (T === i.memoizedProps && Y === i.memoizedState) ||
            (a.flags |= 4),
          typeof P.getSnapshotBeforeUpdate != "function" ||
            (T === i.memoizedProps && Y === i.memoizedState) ||
            (a.flags |= 1024),
          (h = !1));
    }
    return wh(i, a, u, h, y, v);
  }
  function wh(i, a, u, h, v, y) {
    L1(i, a);
    var P = (a.flags & 128) !== 0;
    if (!h && !P) return (v && U0(a, u, !1), yr(i, a, y));
    ((h = a.stateNode), (V2.current = a));
    var T = P && typeof u.getDerivedStateFromError != "function" ? null : h.render();
    return (
      (a.flags |= 1),
      i !== null && P
        ? ((a.child = Oo(a, i.child, null, y)), (a.child = Oo(a, null, T, y)))
        : Rt(i, a, T, y),
      (a.memoizedState = h.state),
      v && U0(a, u, !0),
      a.child
    );
  }
  function z1(i) {
    var a = i.stateNode;
    (a.pendingContext
      ? V0(i, a.pendingContext, a.pendingContext !== a.context)
      : a.context && V0(i, a.context, !1),
      rh(i, a.containerInfo));
  }
  function F1(i, a, u, h, v) {
    return (ko(), Xd(v), (a.flags |= 256), Rt(i, a, u, h), a.child);
  }
  var bh = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Sh(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function V1(i, a, u) {
    var h = a.pendingProps,
      v = Ye.current,
      y = !1,
      P = (a.flags & 128) !== 0,
      T;
    if (
      ((T = P) || (T = i !== null && i.memoizedState === null ? !1 : (v & 2) !== 0),
      T ? ((y = !0), (a.flags &= -129)) : (i === null || i.memoizedState !== null) && (v |= 1),
      ze(Ye, v & 1),
      i === null)
    )
      return (
        Gd(a),
        (i = a.memoizedState),
        i !== null && ((i = i.dehydrated), i !== null)
          ? ((a.mode & 1) === 0
              ? (a.lanes = 1)
              : i.data === "$!"
                ? (a.lanes = 8)
                : (a.lanes = 1073741824),
            null)
          : ((P = h.children),
            (i = h.fallback),
            y
              ? ((h = a.mode),
                (y = a.child),
                (P = { mode: "hidden", children: P }),
                (h & 1) === 0 && y !== null
                  ? ((y.childLanes = 0), (y.pendingProps = P))
                  : (y = vu(P, h, 0, null)),
                (i = Ii(i, h, u, null)),
                (y.return = a),
                (i.return = a),
                (y.sibling = i),
                (a.child = y),
                (a.child.memoizedState = Sh(u)),
                (a.memoizedState = bh),
                i)
              : Ph(a, P))
      );
    if (((v = i.memoizedState), v !== null && ((T = v.dehydrated), T !== null)))
      return B2(i, a, P, h, T, v, u);
    if (y) {
      ((y = h.fallback), (P = a.mode), (v = i.child), (T = v.sibling));
      var M = { mode: "hidden", children: h.children };
      return (
        (P & 1) === 0 && a.child !== v
          ? ((h = a.child), (h.childLanes = 0), (h.pendingProps = M), (a.deletions = null))
          : ((h = Zr(v, M)), (h.subtreeFlags = v.subtreeFlags & 14680064)),
        T !== null ? (y = Zr(T, y)) : ((y = Ii(y, P, u, null)), (y.flags |= 2)),
        (y.return = a),
        (h.return = a),
        (h.sibling = y),
        (a.child = h),
        (h = y),
        (y = a.child),
        (P = i.child.memoizedState),
        (P =
          P === null
            ? Sh(u)
            : { baseLanes: P.baseLanes | u, cachePool: null, transitions: P.transitions }),
        (y.memoizedState = P),
        (y.childLanes = i.childLanes & ~u),
        (a.memoizedState = bh),
        h
      );
    }
    return (
      (y = i.child),
      (i = y.sibling),
      (h = Zr(y, { mode: "visible", children: h.children })),
      (a.mode & 1) === 0 && (h.lanes = u),
      (h.return = a),
      (h.sibling = null),
      i !== null &&
        ((u = a.deletions), u === null ? ((a.deletions = [i]), (a.flags |= 16)) : u.push(i)),
      (a.child = h),
      (a.memoizedState = null),
      h
    );
  }
  function Ph(i, a) {
    return (
      (a = vu({ mode: "visible", children: a }, i.mode, 0, null)),
      (a.return = i),
      (i.child = a)
    );
  }
  function ru(i, a, u, h) {
    return (
      h !== null && Xd(h),
      Oo(a, i.child, null, u),
      (i = Ph(a, a.pendingProps.children)),
      (i.flags |= 2),
      (a.memoizedState = null),
      i
    );
  }
  function B2(i, a, u, h, v, y, P) {
    if (u)
      return a.flags & 256
        ? ((a.flags &= -257), (h = gh(Error(n(422)))), ru(i, a, P, h))
        : a.memoizedState !== null
          ? ((a.child = i.child), (a.flags |= 128), null)
          : ((y = h.fallback),
            (v = a.mode),
            (h = vu({ mode: "visible", children: h.children }, v, 0, null)),
            (y = Ii(y, v, P, null)),
            (y.flags |= 2),
            (h.return = a),
            (y.return = a),
            (h.sibling = y),
            (a.child = h),
            (a.mode & 1) !== 0 && Oo(a, i.child, null, P),
            (a.child.memoizedState = Sh(P)),
            (a.memoizedState = bh),
            y);
    if ((a.mode & 1) === 0) return ru(i, a, P, null);
    if (v.data === "$!") {
      if (((h = v.nextSibling && v.nextSibling.dataset), h)) var T = h.dgst;
      return ((h = T), (y = Error(n(419))), (h = gh(y, h, void 0)), ru(i, a, P, h));
    }
    if (((T = (P & i.childLanes) !== 0), Ht || T)) {
      if (((h = ft), h !== null)) {
        switch (P & -P) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        ((v = (v & (h.suspendedLanes | P)) !== 0 ? 0 : v),
          v !== 0 && v !== y.retryLane && ((y.retryLane = v), vr(i, v), Dn(h, i, v, -1)));
      }
      return (zh(), (h = gh(Error(n(421)))), ru(i, a, P, h));
    }
    return v.data === "$?"
      ? ((a.flags |= 128), (a.child = i.child), (a = tI.bind(null, i)), (v._reactRetry = a), null)
      : ((i = y.treeContext),
        (Jt = Fr(v.nextSibling)),
        (Qt = a),
        (He = !0),
        (On = null),
        i !== null &&
          ((cn[fn++] = pr),
          (cn[fn++] = mr),
          (cn[fn++] = Pi),
          (pr = i.id),
          (mr = i.overflow),
          (Pi = a)),
        (a = Ph(a, h.children)),
        (a.flags |= 4096),
        a);
  }
  function B1(i, a, u) {
    i.lanes |= a;
    var h = i.alternate;
    (h !== null && (h.lanes |= a), eh(i.return, a, u));
  }
  function Eh(i, a, u, h, v) {
    var y = i.memoizedState;
    y === null
      ? (i.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: h,
          tail: u,
          tailMode: v,
        })
      : ((y.isBackwards = a),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = h),
        (y.tail = u),
        (y.tailMode = v));
  }
  function U1(i, a, u) {
    var h = a.pendingProps,
      v = h.revealOrder,
      y = h.tail;
    if ((Rt(i, a, h.children, u), (h = Ye.current), (h & 2) !== 0))
      ((h = (h & 1) | 2), (a.flags |= 128));
    else {
      if (i !== null && (i.flags & 128) !== 0)
        e: for (i = a.child; i !== null;) {
          if (i.tag === 13) i.memoizedState !== null && B1(i, u, a);
          else if (i.tag === 19) B1(i, u, a);
          else if (i.child !== null) {
            ((i.child.return = i), (i = i.child));
            continue;
          }
          if (i === a) break e;
          for (; i.sibling === null;) {
            if (i.return === null || i.return === a) break e;
            i = i.return;
          }
          ((i.sibling.return = i.return), (i = i.sibling));
        }
      h &= 1;
    }
    if ((ze(Ye, h), (a.mode & 1) === 0)) a.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (u = a.child, v = null; u !== null;)
            ((i = u.alternate), i !== null && Xl(i) === null && (v = u), (u = u.sibling));
          ((u = v),
            u === null ? ((v = a.child), (a.child = null)) : ((v = u.sibling), (u.sibling = null)),
            Eh(a, !1, v, u, y));
          break;
        case "backwards":
          for (u = null, v = a.child, a.child = null; v !== null;) {
            if (((i = v.alternate), i !== null && Xl(i) === null)) {
              a.child = v;
              break;
            }
            ((i = v.sibling), (v.sibling = u), (u = v), (v = i));
          }
          Eh(a, !0, u, null, y);
          break;
        case "together":
          Eh(a, !1, null, null, void 0);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function iu(i, a) {
    (a.mode & 1) === 0 &&
      i !== null &&
      ((i.alternate = null), (a.alternate = null), (a.flags |= 2));
  }
  function yr(i, a, u) {
    if (
      (i !== null && (a.dependencies = i.dependencies), (ki |= a.lanes), (u & a.childLanes) === 0)
    )
      return null;
    if (i !== null && a.child !== i.child) throw Error(n(153));
    if (a.child !== null) {
      for (i = a.child, u = Zr(i, i.pendingProps), a.child = u, u.return = a; i.sibling !== null;)
        ((i = i.sibling), (u = u.sibling = Zr(i, i.pendingProps)), (u.return = a));
      u.sibling = null;
    }
    return a.child;
  }
  function U2(i, a, u) {
    switch (a.tag) {
      case 3:
        (z1(a), ko());
        break;
      case 5:
        r1(a);
        break;
      case 1:
        Kt(a.type) && Fl(a);
        break;
      case 4:
        rh(a, a.stateNode.containerInfo);
        break;
      case 10:
        var h = a.type._context,
          v = a.memoizedProps.value;
        (ze(Hl, h._currentValue), (h._currentValue = v));
        break;
      case 13:
        if (((h = a.memoizedState), h !== null))
          return h.dehydrated !== null
            ? (ze(Ye, Ye.current & 1), (a.flags |= 128), null)
            : (u & a.child.childLanes) !== 0
              ? V1(i, a, u)
              : (ze(Ye, Ye.current & 1), (i = yr(i, a, u)), i !== null ? i.sibling : null);
        ze(Ye, Ye.current & 1);
        break;
      case 19:
        if (((h = (u & a.childLanes) !== 0), (i.flags & 128) !== 0)) {
          if (h) return U1(i, a, u);
          a.flags |= 128;
        }
        if (
          ((v = a.memoizedState),
          v !== null && ((v.rendering = null), (v.tail = null), (v.lastEffect = null)),
          ze(Ye, Ye.current),
          h)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((a.lanes = 0), R1(i, a, u));
    }
    return yr(i, a, u);
  }
  var W1, Ch, K1, H1;
  ((W1 = function (i, a) {
    for (var u = a.child; u !== null;) {
      if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        ((u.child.return = u), (u = u.child));
        continue;
      }
      if (u === a) break;
      for (; u.sibling === null;) {
        if (u.return === null || u.return === a) return;
        u = u.return;
      }
      ((u.sibling.return = u.return), (u = u.sibling));
    }
  }),
    (Ch = function () {}),
    (K1 = function (i, a, u, h) {
      var v = i.memoizedProps;
      if (v !== h) {
        ((i = a.stateNode), Ai(Yn.current));
        var y = null;
        switch (u) {
          case "input":
            ((v = Ie(i, v)), (h = Ie(i, h)), (y = []));
            break;
          case "select":
            ((v = X({}, v, { value: void 0 })), (h = X({}, h, { value: void 0 })), (y = []));
            break;
          case "textarea":
            ((v = rd(i, v)), (h = rd(i, h)), (y = []));
            break;
          default:
            typeof v.onClick != "function" && typeof h.onClick == "function" && (i.onclick = Ll);
        }
        od(u, h);
        var P;
        u = null;
        for (V in v)
          if (!h.hasOwnProperty(V) && v.hasOwnProperty(V) && v[V] != null)
            if (V === "style") {
              var T = v[V];
              for (P in T) T.hasOwnProperty(P) && (u || (u = {}), (u[P] = ""));
            } else
              V !== "dangerouslySetInnerHTML" &&
                V !== "children" &&
                V !== "suppressContentEditableWarning" &&
                V !== "suppressHydrationWarning" &&
                V !== "autoFocus" &&
                (o.hasOwnProperty(V) ? y || (y = []) : (y = y || []).push(V, null));
        for (V in h) {
          var M = h[V];
          if (
            ((T = v != null ? v[V] : void 0),
            h.hasOwnProperty(V) && M !== T && (M != null || T != null))
          )
            if (V === "style")
              if (T) {
                for (P in T)
                  !T.hasOwnProperty(P) ||
                    (M && M.hasOwnProperty(P)) ||
                    (u || (u = {}), (u[P] = ""));
                for (P in M) M.hasOwnProperty(P) && T[P] !== M[P] && (u || (u = {}), (u[P] = M[P]));
              } else (u || (y || (y = []), y.push(V, u)), (u = M));
            else
              V === "dangerouslySetInnerHTML"
                ? ((M = M ? M.__html : void 0),
                  (T = T ? T.__html : void 0),
                  M != null && T !== M && (y = y || []).push(V, M))
                : V === "children"
                  ? (typeof M != "string" && typeof M != "number") || (y = y || []).push(V, "" + M)
                  : V !== "suppressContentEditableWarning" &&
                    V !== "suppressHydrationWarning" &&
                    (o.hasOwnProperty(V)
                      ? (M != null && V === "onScroll" && Be("scroll", i), y || T === M || (y = []))
                      : (y = y || []).push(V, M));
        }
        u && (y = y || []).push("style", u);
        var V = y;
        (a.updateQueue = V) && (a.flags |= 4);
      }
    }),
    (H1 = function (i, a, u, h) {
      u !== h && (a.flags |= 4);
    }));
  function is(i, a) {
    if (!He)
      switch (i.tailMode) {
        case "hidden":
          a = i.tail;
          for (var u = null; a !== null;) (a.alternate !== null && (u = a), (a = a.sibling));
          u === null ? (i.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = i.tail;
          for (var h = null; u !== null;) (u.alternate !== null && (h = u), (u = u.sibling));
          h === null
            ? a || i.tail === null
              ? (i.tail = null)
              : (i.tail.sibling = null)
            : (h.sibling = null);
      }
  }
  function Dt(i) {
    var a = i.alternate !== null && i.alternate.child === i.child,
      u = 0,
      h = 0;
    if (a)
      for (var v = i.child; v !== null;)
        ((u |= v.lanes | v.childLanes),
          (h |= v.subtreeFlags & 14680064),
          (h |= v.flags & 14680064),
          (v.return = i),
          (v = v.sibling));
    else
      for (v = i.child; v !== null;)
        ((u |= v.lanes | v.childLanes),
          (h |= v.subtreeFlags),
          (h |= v.flags),
          (v.return = i),
          (v = v.sibling));
    return ((i.subtreeFlags |= h), (i.childLanes = u), a);
  }
  function W2(i, a, u) {
    var h = a.pendingProps;
    switch ((qd(a), a.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Dt(a), null);
      case 1:
        return (Kt(a.type) && zl(), Dt(a), null);
      case 3:
        return (
          (h = a.stateNode),
          Io(),
          Ue(Wt),
          Ue(Mt),
          ah(),
          h.pendingContext && ((h.context = h.pendingContext), (h.pendingContext = null)),
          (i === null || i.child === null) &&
            (Wl(a)
              ? (a.flags |= 4)
              : i === null ||
                (i.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), On !== null && (Rh(On), (On = null)))),
          Ch(i, a),
          Dt(a),
          null
        );
      case 5:
        ih(a);
        var v = Ai(Ja.current);
        if (((u = a.type), i !== null && a.stateNode != null))
          (K1(i, a, u, h, v), i.ref !== a.ref && ((a.flags |= 512), (a.flags |= 2097152)));
        else {
          if (!h) {
            if (a.stateNode === null) throw Error(n(166));
            return (Dt(a), null);
          }
          if (((i = Ai(Yn.current)), Wl(a))) {
            ((h = a.stateNode), (u = a.type));
            var y = a.memoizedProps;
            switch (((h[qn] = a), (h[Ya] = y), (i = (a.mode & 1) !== 0), u)) {
              case "dialog":
                (Be("cancel", h), Be("close", h));
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", h);
                break;
              case "video":
              case "audio":
                for (v = 0; v < Ka.length; v++) Be(Ka[v], h);
                break;
              case "source":
                Be("error", h);
                break;
              case "img":
              case "image":
              case "link":
                (Be("error", h), Be("load", h));
                break;
              case "details":
                Be("toggle", h);
                break;
              case "input":
                (Ot(h, y), Be("invalid", h));
                break;
              case "select":
                ((h._wrapperState = { wasMultiple: !!y.multiple }), Be("invalid", h));
                break;
              case "textarea":
                (Oy(h, y), Be("invalid", h));
            }
            (od(u, y), (v = null));
            for (var P in y)
              if (y.hasOwnProperty(P)) {
                var T = y[P];
                P === "children"
                  ? typeof T == "string"
                    ? h.textContent !== T &&
                      (y.suppressHydrationWarning !== !0 && Rl(h.textContent, T, i),
                      (v = ["children", T]))
                    : typeof T == "number" &&
                      h.textContent !== "" + T &&
                      (y.suppressHydrationWarning !== !0 && Rl(h.textContent, T, i),
                      (v = ["children", "" + T]))
                  : o.hasOwnProperty(P) && T != null && P === "onScroll" && Be("scroll", h);
              }
            switch (u) {
              case "input":
                (Se(h), Ea(h, y, !0));
                break;
              case "textarea":
                (Se(h), My(h));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (h.onclick = Ll);
            }
            ((h = v), (a.updateQueue = h), h !== null && (a.flags |= 4));
          } else {
            ((P = v.nodeType === 9 ? v : v.ownerDocument),
              i === "http://www.w3.org/1999/xhtml" && (i = Iy(u)),
              i === "http://www.w3.org/1999/xhtml"
                ? u === "script"
                  ? ((i = P.createElement("div")),
                    (i.innerHTML = "<script><\/script>"),
                    (i = i.removeChild(i.firstChild)))
                  : typeof h.is == "string"
                    ? (i = P.createElement(u, { is: h.is }))
                    : ((i = P.createElement(u)),
                      u === "select" &&
                        ((P = i), h.multiple ? (P.multiple = !0) : h.size && (P.size = h.size)))
                : (i = P.createElementNS(i, u)),
              (i[qn] = a),
              (i[Ya] = h),
              W1(i, a, !1, !1),
              (a.stateNode = i));
            e: {
              switch (((P = ad(u, h)), u)) {
                case "dialog":
                  (Be("cancel", i), Be("close", i), (v = h));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Be("load", i), (v = h));
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < Ka.length; v++) Be(Ka[v], i);
                  v = h;
                  break;
                case "source":
                  (Be("error", i), (v = h));
                  break;
                case "img":
                case "image":
                case "link":
                  (Be("error", i), Be("load", i), (v = h));
                  break;
                case "details":
                  (Be("toggle", i), (v = h));
                  break;
                case "input":
                  (Ot(i, h), (v = Ie(i, h)), Be("invalid", i));
                  break;
                case "option":
                  v = h;
                  break;
                case "select":
                  ((i._wrapperState = { wasMultiple: !!h.multiple }),
                    (v = X({}, h, { value: void 0 })),
                    Be("invalid", i));
                  break;
                case "textarea":
                  (Oy(i, h), (v = rd(i, h)), Be("invalid", i));
                  break;
                default:
                  v = h;
              }
              (od(u, v), (T = v));
              for (y in T)
                if (T.hasOwnProperty(y)) {
                  var M = T[y];
                  y === "style"
                    ? Ny(i, M)
                    : y === "dangerouslySetInnerHTML"
                      ? ((M = M ? M.__html : void 0), M != null && Dy(i, M))
                      : y === "children"
                        ? typeof M == "string"
                          ? (u !== "textarea" || M !== "") && Aa(i, M)
                          : typeof M == "number" && Aa(i, "" + M)
                        : y !== "suppressContentEditableWarning" &&
                          y !== "suppressHydrationWarning" &&
                          y !== "autoFocus" &&
                          (o.hasOwnProperty(y)
                            ? M != null && y === "onScroll" && Be("scroll", i)
                            : M != null && k(i, y, M, P));
                }
              switch (u) {
                case "input":
                  (Se(i), Ea(i, h, !1));
                  break;
                case "textarea":
                  (Se(i), My(i));
                  break;
                case "option":
                  h.value != null && i.setAttribute("value", "" + Ae(h.value));
                  break;
                case "select":
                  ((i.multiple = !!h.multiple),
                    (y = h.value),
                    y != null
                      ? ho(i, !!h.multiple, y, !1)
                      : h.defaultValue != null && ho(i, !!h.multiple, h.defaultValue, !0));
                  break;
                default:
                  typeof v.onClick == "function" && (i.onclick = Ll);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  h = !!h.autoFocus;
                  break e;
                case "img":
                  h = !0;
                  break e;
                default:
                  h = !1;
              }
            }
            h && (a.flags |= 4);
          }
          a.ref !== null && ((a.flags |= 512), (a.flags |= 2097152));
        }
        return (Dt(a), null);
      case 6:
        if (i && a.stateNode != null) H1(i, a, i.memoizedProps, h);
        else {
          if (typeof h != "string" && a.stateNode === null) throw Error(n(166));
          if (((u = Ai(Ja.current)), Ai(Yn.current), Wl(a))) {
            if (
              ((h = a.stateNode),
              (u = a.memoizedProps),
              (h[qn] = a),
              (y = h.nodeValue !== u) && ((i = Qt), i !== null))
            )
              switch (i.tag) {
                case 3:
                  Rl(h.nodeValue, u, (i.mode & 1) !== 0);
                  break;
                case 5:
                  i.memoizedProps.suppressHydrationWarning !== !0 &&
                    Rl(h.nodeValue, u, (i.mode & 1) !== 0);
              }
            y && (a.flags |= 4);
          } else
            ((h = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(h)),
              (h[qn] = a),
              (a.stateNode = h));
        }
        return (Dt(a), null);
      case 13:
        if (
          (Ue(Ye),
          (h = a.memoizedState),
          i === null || (i.memoizedState !== null && i.memoizedState.dehydrated !== null))
        ) {
          if (He && Jt !== null && (a.mode & 1) !== 0 && (a.flags & 128) === 0)
            (G0(), ko(), (a.flags |= 98560), (y = !1));
          else if (((y = Wl(a)), h !== null && h.dehydrated !== null)) {
            if (i === null) {
              if (!y) throw Error(n(318));
              if (((y = a.memoizedState), (y = y !== null ? y.dehydrated : null), !y))
                throw Error(n(317));
              y[qn] = a;
            } else (ko(), (a.flags & 128) === 0 && (a.memoizedState = null), (a.flags |= 4));
            (Dt(a), (y = !1));
          } else (On !== null && (Rh(On), (On = null)), (y = !0));
          if (!y) return a.flags & 65536 ? a : null;
        }
        return (a.flags & 128) !== 0
          ? ((a.lanes = u), a)
          : ((h = h !== null),
            h !== (i !== null && i.memoizedState !== null) &&
              h &&
              ((a.child.flags |= 8192),
              (a.mode & 1) !== 0 &&
                (i === null || (Ye.current & 1) !== 0 ? at === 0 && (at = 3) : zh())),
            a.updateQueue !== null && (a.flags |= 4),
            Dt(a),
            null);
      case 4:
        return (Io(), Ch(i, a), i === null && Ha(a.stateNode.containerInfo), Dt(a), null);
      case 10:
        return (Jd(a.type._context), Dt(a), null);
      case 17:
        return (Kt(a.type) && zl(), Dt(a), null);
      case 19:
        if ((Ue(Ye), (y = a.memoizedState), y === null)) return (Dt(a), null);
        if (((h = (a.flags & 128) !== 0), (P = y.rendering), P === null))
          if (h) is(y, !1);
          else {
            if (at !== 0 || (i !== null && (i.flags & 128) !== 0))
              for (i = a.child; i !== null;) {
                if (((P = Xl(i)), P !== null)) {
                  for (
                    a.flags |= 128,
                      is(y, !1),
                      h = P.updateQueue,
                      h !== null && ((a.updateQueue = h), (a.flags |= 4)),
                      a.subtreeFlags = 0,
                      h = u,
                      u = a.child;
                    u !== null;
                  )
                    ((y = u),
                      (i = h),
                      (y.flags &= 14680066),
                      (P = y.alternate),
                      P === null
                        ? ((y.childLanes = 0),
                          (y.lanes = i),
                          (y.child = null),
                          (y.subtreeFlags = 0),
                          (y.memoizedProps = null),
                          (y.memoizedState = null),
                          (y.updateQueue = null),
                          (y.dependencies = null),
                          (y.stateNode = null))
                        : ((y.childLanes = P.childLanes),
                          (y.lanes = P.lanes),
                          (y.child = P.child),
                          (y.subtreeFlags = 0),
                          (y.deletions = null),
                          (y.memoizedProps = P.memoizedProps),
                          (y.memoizedState = P.memoizedState),
                          (y.updateQueue = P.updateQueue),
                          (y.type = P.type),
                          (i = P.dependencies),
                          (y.dependencies =
                            i === null ? null : { lanes: i.lanes, firstContext: i.firstContext })),
                      (u = u.sibling));
                  return (ze(Ye, (Ye.current & 1) | 2), a.child);
                }
                i = i.sibling;
              }
            y.tail !== null &&
              Je() > Ro &&
              ((a.flags |= 128), (h = !0), is(y, !1), (a.lanes = 4194304));
          }
        else {
          if (!h)
            if (((i = Xl(P)), i !== null)) {
              if (
                ((a.flags |= 128),
                (h = !0),
                (u = i.updateQueue),
                u !== null && ((a.updateQueue = u), (a.flags |= 4)),
                is(y, !0),
                y.tail === null && y.tailMode === "hidden" && !P.alternate && !He)
              )
                return (Dt(a), null);
            } else
              2 * Je() - y.renderingStartTime > Ro &&
                u !== 1073741824 &&
                ((a.flags |= 128), (h = !0), is(y, !1), (a.lanes = 4194304));
          y.isBackwards
            ? ((P.sibling = a.child), (a.child = P))
            : ((u = y.last), u !== null ? (u.sibling = P) : (a.child = P), (y.last = P));
        }
        return y.tail !== null
          ? ((a = y.tail),
            (y.rendering = a),
            (y.tail = a.sibling),
            (y.renderingStartTime = Je()),
            (a.sibling = null),
            (u = Ye.current),
            ze(Ye, h ? (u & 1) | 2 : u & 1),
            a)
          : (Dt(a), null);
      case 22:
      case 23:
        return (
          $h(),
          (h = a.memoizedState !== null),
          i !== null && (i.memoizedState !== null) !== h && (a.flags |= 8192),
          h && (a.mode & 1) !== 0
            ? (en & 1073741824) !== 0 && (Dt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : Dt(a),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, a.tag));
  }
  function K2(i, a) {
    switch ((qd(a), a.tag)) {
      case 1:
        return (
          Kt(a.type) && zl(),
          (i = a.flags),
          i & 65536 ? ((a.flags = (i & -65537) | 128), a) : null
        );
      case 3:
        return (
          Io(),
          Ue(Wt),
          Ue(Mt),
          ah(),
          (i = a.flags),
          (i & 65536) !== 0 && (i & 128) === 0 ? ((a.flags = (i & -65537) | 128), a) : null
        );
      case 5:
        return (ih(a), null);
      case 13:
        if ((Ue(Ye), (i = a.memoizedState), i !== null && i.dehydrated !== null)) {
          if (a.alternate === null) throw Error(n(340));
          ko();
        }
        return ((i = a.flags), i & 65536 ? ((a.flags = (i & -65537) | 128), a) : null);
      case 19:
        return (Ue(Ye), null);
      case 4:
        return (Io(), null);
      case 10:
        return (Jd(a.type._context), null);
      case 22:
      case 23:
        return ($h(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ou = !1,
    jt = !1,
    H2 = typeof WeakSet == "function" ? WeakSet : Set,
    oe = null;
  function jo(i, a) {
    var u = i.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (h) {
          Xe(i, a, h);
        }
      else u.current = null;
  }
  function Ah(i, a, u) {
    try {
      u();
    } catch (h) {
      Xe(i, a, h);
    }
  }
  var q1 = !1;
  function q2(i, a) {
    if ((($d = Cl), (i = C0()), _d(i))) {
      if ("selectionStart" in i) var u = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: {
          u = ((u = i.ownerDocument) && u.defaultView) || window;
          var h = u.getSelection && u.getSelection();
          if (h && h.rangeCount !== 0) {
            u = h.anchorNode;
            var v = h.anchorOffset,
              y = h.focusNode;
            h = h.focusOffset;
            try {
              (u.nodeType, y.nodeType);
            } catch {
              u = null;
              break e;
            }
            var P = 0,
              T = -1,
              M = -1,
              V = 0,
              G = 0,
              Z = i,
              Y = null;
            t: for (;;) {
              for (
                var re;
                Z !== u || (v !== 0 && Z.nodeType !== 3) || (T = P + v),
                  Z !== y || (h !== 0 && Z.nodeType !== 3) || (M = P + h),
                  Z.nodeType === 3 && (P += Z.nodeValue.length),
                  (re = Z.firstChild) !== null;
              )
                ((Y = Z), (Z = re));
              for (;;) {
                if (Z === i) break t;
                if (
                  (Y === u && ++V === v && (T = P),
                  Y === y && ++G === h && (M = P),
                  (re = Z.nextSibling) !== null)
                )
                  break;
                ((Z = Y), (Y = Z.parentNode));
              }
              Z = re;
            }
            u = T === -1 || M === -1 ? null : { start: T, end: M };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (zd = { focusedElem: i, selectionRange: u }, Cl = !1, oe = a; oe !== null;)
      if (((a = oe), (i = a.child), (a.subtreeFlags & 1028) !== 0 && i !== null))
        ((i.return = a), (oe = i));
      else
        for (; oe !== null;) {
          a = oe;
          try {
            var se = a.alternate;
            if ((a.flags & 1024) !== 0)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (se !== null) {
                    var ue = se.memoizedProps,
                      et = se.memoizedState,
                      L = a.stateNode,
                      D = L.getSnapshotBeforeUpdate(
                        a.elementType === a.type ? ue : _n(a.type, ue),
                        et,
                      );
                    L.__reactInternalSnapshotBeforeUpdate = D;
                  }
                  break;
                case 3:
                  var $ = a.stateNode.containerInfo;
                  $.nodeType === 1
                    ? ($.textContent = "")
                    : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
          } catch (ee) {
            Xe(a, a.return, ee);
          }
          if (((i = a.sibling), i !== null)) {
            ((i.return = a.return), (oe = i));
            break;
          }
          oe = a.return;
        }
    return ((se = q1), (q1 = !1), se);
  }
  function os(i, a, u) {
    var h = a.updateQueue;
    if (((h = h !== null ? h.lastEffect : null), h !== null)) {
      var v = (h = h.next);
      do {
        if ((v.tag & i) === i) {
          var y = v.destroy;
          ((v.destroy = void 0), y !== void 0 && Ah(a, u, y));
        }
        v = v.next;
      } while (v !== h);
    }
  }
  function au(i, a) {
    if (((a = a.updateQueue), (a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & i) === i) {
          var h = u.create;
          u.destroy = h();
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Th(i) {
    var a = i.ref;
    if (a !== null) {
      var u = i.stateNode;
      switch (i.tag) {
        case 5:
          i = u;
          break;
        default:
          i = u;
      }
      typeof a == "function" ? a(i) : (a.current = i);
    }
  }
  function Y1(i) {
    var a = i.alternate;
    (a !== null && ((i.alternate = null), Y1(a)),
      (i.child = null),
      (i.deletions = null),
      (i.sibling = null),
      i.tag === 5 &&
        ((a = i.stateNode),
        a !== null && (delete a[qn], delete a[Ya], delete a[Ud], delete a[O2], delete a[_2])),
      (i.stateNode = null),
      (i.return = null),
      (i.dependencies = null),
      (i.memoizedProps = null),
      (i.memoizedState = null),
      (i.pendingProps = null),
      (i.stateNode = null),
      (i.updateQueue = null));
  }
  function G1(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function X1(i) {
    e: for (;;) {
      for (; i.sibling === null;) {
        if (i.return === null || G1(i.return)) return null;
        i = i.return;
      }
      for (
        i.sibling.return = i.return, i = i.sibling;
        i.tag !== 5 && i.tag !== 6 && i.tag !== 18;
      ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        ((i.child.return = i), (i = i.child));
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function kh(i, a, u) {
    var h = i.tag;
    if (h === 5 || h === 6)
      ((i = i.stateNode),
        a
          ? u.nodeType === 8
            ? u.parentNode.insertBefore(i, a)
            : u.insertBefore(i, a)
          : (u.nodeType === 8
              ? ((a = u.parentNode), a.insertBefore(i, u))
              : ((a = u), a.appendChild(i)),
            (u = u._reactRootContainer),
            u != null || a.onclick !== null || (a.onclick = Ll)));
    else if (h !== 4 && ((i = i.child), i !== null))
      for (kh(i, a, u), i = i.sibling; i !== null;) (kh(i, a, u), (i = i.sibling));
  }
  function Oh(i, a, u) {
    var h = i.tag;
    if (h === 5 || h === 6) ((i = i.stateNode), a ? u.insertBefore(i, a) : u.appendChild(i));
    else if (h !== 4 && ((i = i.child), i !== null))
      for (Oh(i, a, u), i = i.sibling; i !== null;) (Oh(i, a, u), (i = i.sibling));
  }
  var bt = null,
    Mn = !1;
  function Hr(i, a, u) {
    for (u = u.child; u !== null;) (Z1(i, a, u), (u = u.sibling));
  }
  function Z1(i, a, u) {
    if (Hn && typeof Hn.onCommitFiberUnmount == "function")
      try {
        Hn.onCommitFiberUnmount(xl, u);
      } catch {}
    switch (u.tag) {
      case 5:
        jt || jo(u, a);
      case 6:
        var h = bt,
          v = Mn;
        ((bt = null),
          Hr(i, a, u),
          (bt = h),
          (Mn = v),
          bt !== null &&
            (Mn
              ? ((i = bt),
                (u = u.stateNode),
                i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u))
              : bt.removeChild(u.stateNode)));
        break;
      case 18:
        bt !== null &&
          (Mn
            ? ((i = bt),
              (u = u.stateNode),
              i.nodeType === 8 ? Bd(i.parentNode, u) : i.nodeType === 1 && Bd(i, u),
              La(i))
            : Bd(bt, u.stateNode));
        break;
      case 4:
        ((h = bt),
          (v = Mn),
          (bt = u.stateNode.containerInfo),
          (Mn = !0),
          Hr(i, a, u),
          (bt = h),
          (Mn = v));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!jt && ((h = u.updateQueue), h !== null && ((h = h.lastEffect), h !== null))) {
          v = h = h.next;
          do {
            var y = v,
              P = y.destroy;
            ((y = y.tag),
              P !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && Ah(u, a, P),
              (v = v.next));
          } while (v !== h);
        }
        Hr(i, a, u);
        break;
      case 1:
        if (!jt && (jo(u, a), (h = u.stateNode), typeof h.componentWillUnmount == "function"))
          try {
            ((h.props = u.memoizedProps), (h.state = u.memoizedState), h.componentWillUnmount());
          } catch (T) {
            Xe(u, a, T);
          }
        Hr(i, a, u);
        break;
      case 21:
        Hr(i, a, u);
        break;
      case 22:
        u.mode & 1
          ? ((jt = (h = jt) || u.memoizedState !== null), Hr(i, a, u), (jt = h))
          : Hr(i, a, u);
        break;
      default:
        Hr(i, a, u);
    }
  }
  function Q1(i) {
    var a = i.updateQueue;
    if (a !== null) {
      i.updateQueue = null;
      var u = i.stateNode;
      (u === null && (u = i.stateNode = new H2()),
        a.forEach(function (h) {
          var v = nI.bind(null, i, h);
          u.has(h) || (u.add(h), h.then(v, v));
        }));
    }
  }
  function In(i, a) {
    var u = a.deletions;
    if (u !== null)
      for (var h = 0; h < u.length; h++) {
        var v = u[h];
        try {
          var y = i,
            P = a,
            T = P;
          e: for (; T !== null;) {
            switch (T.tag) {
              case 5:
                ((bt = T.stateNode), (Mn = !1));
                break e;
              case 3:
                ((bt = T.stateNode.containerInfo), (Mn = !0));
                break e;
              case 4:
                ((bt = T.stateNode.containerInfo), (Mn = !0));
                break e;
            }
            T = T.return;
          }
          if (bt === null) throw Error(n(160));
          (Z1(y, P, v), (bt = null), (Mn = !1));
          var M = v.alternate;
          (M !== null && (M.return = null), (v.return = null));
        } catch (V) {
          Xe(v, a, V);
        }
      }
    if (a.subtreeFlags & 12854) for (a = a.child; a !== null;) (J1(a, i), (a = a.sibling));
  }
  function J1(i, a) {
    var u = i.alternate,
      h = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((In(a, i), Xn(i), h & 4)) {
          try {
            (os(3, i, i.return), au(3, i));
          } catch (ue) {
            Xe(i, i.return, ue);
          }
          try {
            os(5, i, i.return);
          } catch (ue) {
            Xe(i, i.return, ue);
          }
        }
        break;
      case 1:
        (In(a, i), Xn(i), h & 512 && u !== null && jo(u, u.return));
        break;
      case 5:
        if ((In(a, i), Xn(i), h & 512 && u !== null && jo(u, u.return), i.flags & 32)) {
          var v = i.stateNode;
          try {
            Aa(v, "");
          } catch (ue) {
            Xe(i, i.return, ue);
          }
        }
        if (h & 4 && ((v = i.stateNode), v != null)) {
          var y = i.memoizedProps,
            P = u !== null ? u.memoizedProps : y,
            T = i.type,
            M = i.updateQueue;
          if (((i.updateQueue = null), M !== null))
            try {
              (T === "input" && y.type === "radio" && y.name != null && _t(v, y), ad(T, P));
              var V = ad(T, y);
              for (P = 0; P < M.length; P += 2) {
                var G = M[P],
                  Z = M[P + 1];
                G === "style"
                  ? Ny(v, Z)
                  : G === "dangerouslySetInnerHTML"
                    ? Dy(v, Z)
                    : G === "children"
                      ? Aa(v, Z)
                      : k(v, G, Z, V);
              }
              switch (T) {
                case "input":
                  An(v, y);
                  break;
                case "textarea":
                  _y(v, y);
                  break;
                case "select":
                  var Y = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!y.multiple;
                  var re = y.value;
                  re != null
                    ? ho(v, !!y.multiple, re, !1)
                    : Y !== !!y.multiple &&
                      (y.defaultValue != null
                        ? ho(v, !!y.multiple, y.defaultValue, !0)
                        : ho(v, !!y.multiple, y.multiple ? [] : "", !1));
              }
              v[Ya] = y;
            } catch (ue) {
              Xe(i, i.return, ue);
            }
        }
        break;
      case 6:
        if ((In(a, i), Xn(i), h & 4)) {
          if (i.stateNode === null) throw Error(n(162));
          ((v = i.stateNode), (y = i.memoizedProps));
          try {
            v.nodeValue = y;
          } catch (ue) {
            Xe(i, i.return, ue);
          }
        }
        break;
      case 3:
        if ((In(a, i), Xn(i), h & 4 && u !== null && u.memoizedState.isDehydrated))
          try {
            La(a.containerInfo);
          } catch (ue) {
            Xe(i, i.return, ue);
          }
        break;
      case 4:
        (In(a, i), Xn(i));
        break;
      case 13:
        (In(a, i),
          Xn(i),
          (v = i.child),
          v.flags & 8192 &&
            ((y = v.memoizedState !== null),
            (v.stateNode.isHidden = y),
            !y || (v.alternate !== null && v.alternate.memoizedState !== null) || (Ih = Je())),
          h & 4 && Q1(i));
        break;
      case 22:
        if (
          ((G = u !== null && u.memoizedState !== null),
          i.mode & 1 ? ((jt = (V = jt) || G), In(a, i), (jt = V)) : In(a, i),
          Xn(i),
          h & 8192)
        ) {
          if (
            ((V = i.memoizedState !== null), (i.stateNode.isHidden = V) && !G && (i.mode & 1) !== 0)
          )
            for (oe = i, G = i.child; G !== null;) {
              for (Z = oe = G; oe !== null;) {
                switch (((Y = oe), (re = Y.child), Y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    os(4, Y, Y.return);
                    break;
                  case 1:
                    jo(Y, Y.return);
                    var se = Y.stateNode;
                    if (typeof se.componentWillUnmount == "function") {
                      ((h = Y), (u = Y.return));
                      try {
                        ((a = h),
                          (se.props = a.memoizedProps),
                          (se.state = a.memoizedState),
                          se.componentWillUnmount());
                      } catch (ue) {
                        Xe(h, u, ue);
                      }
                    }
                    break;
                  case 5:
                    jo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      nx(Z);
                      continue;
                    }
                }
                re !== null ? ((re.return = Y), (oe = re)) : nx(Z);
              }
              G = G.sibling;
            }
          e: for (G = null, Z = i; ;) {
            if (Z.tag === 5) {
              if (G === null) {
                G = Z;
                try {
                  ((v = Z.stateNode),
                    V
                      ? ((y = v.style),
                        typeof y.setProperty == "function"
                          ? y.setProperty("display", "none", "important")
                          : (y.display = "none"))
                      : ((T = Z.stateNode),
                        (M = Z.memoizedProps.style),
                        (P = M != null && M.hasOwnProperty("display") ? M.display : null),
                        (T.style.display = jy("display", P))));
                } catch (ue) {
                  Xe(i, i.return, ue);
                }
              }
            } else if (Z.tag === 6) {
              if (G === null)
                try {
                  Z.stateNode.nodeValue = V ? "" : Z.memoizedProps;
                } catch (ue) {
                  Xe(i, i.return, ue);
                }
            } else if (
              ((Z.tag !== 22 && Z.tag !== 23) || Z.memoizedState === null || Z === i) &&
              Z.child !== null
            ) {
              ((Z.child.return = Z), (Z = Z.child));
              continue;
            }
            if (Z === i) break e;
            for (; Z.sibling === null;) {
              if (Z.return === null || Z.return === i) break e;
              (G === Z && (G = null), (Z = Z.return));
            }
            (G === Z && (G = null), (Z.sibling.return = Z.return), (Z = Z.sibling));
          }
        }
        break;
      case 19:
        (In(a, i), Xn(i), h & 4 && Q1(i));
        break;
      case 21:
        break;
      default:
        (In(a, i), Xn(i));
    }
  }
  function Xn(i) {
    var a = i.flags;
    if (a & 2) {
      try {
        e: {
          for (var u = i.return; u !== null;) {
            if (G1(u)) {
              var h = u;
              break e;
            }
            u = u.return;
          }
          throw Error(n(160));
        }
        switch (h.tag) {
          case 5:
            var v = h.stateNode;
            h.flags & 32 && (Aa(v, ""), (h.flags &= -33));
            var y = X1(i);
            Oh(i, y, v);
            break;
          case 3:
          case 4:
            var P = h.stateNode.containerInfo,
              T = X1(i);
            kh(i, T, P);
            break;
          default:
            throw Error(n(161));
        }
      } catch (M) {
        Xe(i, i.return, M);
      }
      i.flags &= -3;
    }
    a & 4096 && (i.flags &= -4097);
  }
  function Y2(i, a, u) {
    ((oe = i), ex(i));
  }
  function ex(i, a, u) {
    for (var h = (i.mode & 1) !== 0; oe !== null;) {
      var v = oe,
        y = v.child;
      if (v.tag === 22 && h) {
        var P = v.memoizedState !== null || ou;
        if (!P) {
          var T = v.alternate,
            M = (T !== null && T.memoizedState !== null) || jt;
          T = ou;
          var V = jt;
          if (((ou = P), (jt = M) && !V))
            for (oe = v; oe !== null;)
              ((P = oe),
                (M = P.child),
                P.tag === 22 && P.memoizedState !== null
                  ? rx(v)
                  : M !== null
                    ? ((M.return = P), (oe = M))
                    : rx(v));
          for (; y !== null;) ((oe = y), ex(y), (y = y.sibling));
          ((oe = v), (ou = T), (jt = V));
        }
        tx(i);
      } else (v.subtreeFlags & 8772) !== 0 && y !== null ? ((y.return = v), (oe = y)) : tx(i);
    }
  }
  function tx(i) {
    for (; oe !== null;) {
      var a = oe;
      if ((a.flags & 8772) !== 0) {
        var u = a.alternate;
        try {
          if ((a.flags & 8772) !== 0)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                jt || au(5, a);
                break;
              case 1:
                var h = a.stateNode;
                if (a.flags & 4 && !jt)
                  if (u === null) h.componentDidMount();
                  else {
                    var v =
                      a.elementType === a.type ? u.memoizedProps : _n(a.type, u.memoizedProps);
                    h.componentDidUpdate(v, u.memoizedState, h.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = a.updateQueue;
                y !== null && n1(a, y, h);
                break;
              case 3:
                var P = a.updateQueue;
                if (P !== null) {
                  if (((u = null), a.child !== null))
                    switch (a.child.tag) {
                      case 5:
                        u = a.child.stateNode;
                        break;
                      case 1:
                        u = a.child.stateNode;
                    }
                  n1(a, P, u);
                }
                break;
              case 5:
                var T = a.stateNode;
                if (u === null && a.flags & 4) {
                  u = T;
                  var M = a.memoizedProps;
                  switch (a.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && u.focus();
                      break;
                    case "img":
                      M.src && (u.src = M.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (a.memoizedState === null) {
                  var V = a.alternate;
                  if (V !== null) {
                    var G = V.memoizedState;
                    if (G !== null) {
                      var Z = G.dehydrated;
                      Z !== null && La(Z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          jt || (a.flags & 512 && Th(a));
        } catch (Y) {
          Xe(a, a.return, Y);
        }
      }
      if (a === i) {
        oe = null;
        break;
      }
      if (((u = a.sibling), u !== null)) {
        ((u.return = a.return), (oe = u));
        break;
      }
      oe = a.return;
    }
  }
  function nx(i) {
    for (; oe !== null;) {
      var a = oe;
      if (a === i) {
        oe = null;
        break;
      }
      var u = a.sibling;
      if (u !== null) {
        ((u.return = a.return), (oe = u));
        break;
      }
      oe = a.return;
    }
  }
  function rx(i) {
    for (; oe !== null;) {
      var a = oe;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var u = a.return;
            try {
              au(4, a);
            } catch (M) {
              Xe(a, u, M);
            }
            break;
          case 1:
            var h = a.stateNode;
            if (typeof h.componentDidMount == "function") {
              var v = a.return;
              try {
                h.componentDidMount();
              } catch (M) {
                Xe(a, v, M);
              }
            }
            var y = a.return;
            try {
              Th(a);
            } catch (M) {
              Xe(a, y, M);
            }
            break;
          case 5:
            var P = a.return;
            try {
              Th(a);
            } catch (M) {
              Xe(a, P, M);
            }
        }
      } catch (M) {
        Xe(a, a.return, M);
      }
      if (a === i) {
        oe = null;
        break;
      }
      var T = a.sibling;
      if (T !== null) {
        ((T.return = a.return), (oe = T));
        break;
      }
      oe = a.return;
    }
  }
  var G2 = Math.ceil,
    su = O.ReactCurrentDispatcher,
    _h = O.ReactCurrentOwner,
    pn = O.ReactCurrentBatchConfig,
    Te = 0,
    ft = null,
    tt = null,
    St = 0,
    en = 0,
    No = Vr(0),
    at = 0,
    as = null,
    ki = 0,
    lu = 0,
    Mh = 0,
    ss = null,
    qt = null,
    Ih = 0,
    Ro = 1 / 0,
    xr = null,
    uu = !1,
    Dh = null,
    qr = null,
    cu = !1,
    Yr = null,
    fu = 0,
    ls = 0,
    jh = null,
    du = -1,
    hu = 0;
  function Lt() {
    return (Te & 6) !== 0 ? Je() : du !== -1 ? du : (du = Je());
  }
  function Gr(i) {
    return (i.mode & 1) === 0
      ? 1
      : (Te & 2) !== 0 && St !== 0
        ? St & -St
        : I2.transition !== null
          ? (hu === 0 && (hu = Xy()), hu)
          : ((i = De), i !== 0 || ((i = window.event), (i = i === void 0 ? 16 : o0(i.type))), i);
  }
  function Dn(i, a, u, h) {
    if (50 < ls) throw ((ls = 0), (jh = null), Error(n(185)));
    (Ia(i, u, h),
      ((Te & 2) === 0 || i !== ft) &&
        (i === ft && ((Te & 2) === 0 && (lu |= u), at === 4 && Xr(i, St)),
        Yt(i, h),
        u === 1 && Te === 0 && (a.mode & 1) === 0 && ((Ro = Je() + 500), Vl && Ur())));
  }
  function Yt(i, a) {
    var u = i.callbackNode;
    IM(i, a);
    var h = Sl(i, i === ft ? St : 0);
    if (h === 0) (u !== null && qy(u), (i.callbackNode = null), (i.callbackPriority = 0));
    else if (((a = h & -h), i.callbackPriority !== a)) {
      if ((u != null && qy(u), a === 1))
        (i.tag === 0 ? M2(ox.bind(null, i)) : W0(ox.bind(null, i)),
          T2(function () {
            (Te & 6) === 0 && Ur();
          }),
          (u = null));
      else {
        switch (Zy(h)) {
          case 1:
            u = hd;
            break;
          case 4:
            u = Yy;
            break;
          case 16:
            u = yl;
            break;
          case 536870912:
            u = Gy;
            break;
          default:
            u = yl;
        }
        u = hx(u, ix.bind(null, i));
      }
      ((i.callbackPriority = a), (i.callbackNode = u));
    }
  }
  function ix(i, a) {
    if (((du = -1), (hu = 0), (Te & 6) !== 0)) throw Error(n(327));
    var u = i.callbackNode;
    if (Lo() && i.callbackNode !== u) return null;
    var h = Sl(i, i === ft ? St : 0);
    if (h === 0) return null;
    if ((h & 30) !== 0 || (h & i.expiredLanes) !== 0 || a) a = pu(i, h);
    else {
      a = h;
      var v = Te;
      Te |= 2;
      var y = sx();
      (ft !== i || St !== a) && ((xr = null), (Ro = Je() + 500), _i(i, a));
      do
        try {
          Q2();
          break;
        } catch (T) {
          ax(i, T);
        }
      while (!0);
      (Qd(), (su.current = y), (Te = v), tt !== null ? (a = 0) : ((ft = null), (St = 0), (a = at)));
    }
    if (a !== 0) {
      if ((a === 2 && ((v = pd(i)), v !== 0 && ((h = v), (a = Nh(i, v)))), a === 1))
        throw ((u = as), _i(i, 0), Xr(i, h), Yt(i, Je()), u);
      if (a === 6) Xr(i, h);
      else {
        if (
          ((v = i.current.alternate),
          (h & 30) === 0 &&
            !X2(v) &&
            ((a = pu(i, h)),
            a === 2 && ((y = pd(i)), y !== 0 && ((h = y), (a = Nh(i, y)))),
            a === 1))
        )
          throw ((u = as), _i(i, 0), Xr(i, h), Yt(i, Je()), u);
        switch (((i.finishedWork = v), (i.finishedLanes = h), a)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Mi(i, qt, xr);
            break;
          case 3:
            if ((Xr(i, h), (h & 130023424) === h && ((a = Ih + 500 - Je()), 10 < a))) {
              if (Sl(i, 0) !== 0) break;
              if (((v = i.suspendedLanes), (v & h) !== h)) {
                (Lt(), (i.pingedLanes |= i.suspendedLanes & v));
                break;
              }
              i.timeoutHandle = Vd(Mi.bind(null, i, qt, xr), a);
              break;
            }
            Mi(i, qt, xr);
            break;
          case 4:
            if ((Xr(i, h), (h & 4194240) === h)) break;
            for (a = i.eventTimes, v = -1; 0 < h;) {
              var P = 31 - Tn(h);
              ((y = 1 << P), (P = a[P]), P > v && (v = P), (h &= ~y));
            }
            if (
              ((h = v),
              (h = Je() - h),
              (h =
                (120 > h
                  ? 120
                  : 480 > h
                    ? 480
                    : 1080 > h
                      ? 1080
                      : 1920 > h
                        ? 1920
                        : 3e3 > h
                          ? 3e3
                          : 4320 > h
                            ? 4320
                            : 1960 * G2(h / 1960)) - h),
              10 < h)
            ) {
              i.timeoutHandle = Vd(Mi.bind(null, i, qt, xr), h);
              break;
            }
            Mi(i, qt, xr);
            break;
          case 5:
            Mi(i, qt, xr);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return (Yt(i, Je()), i.callbackNode === u ? ix.bind(null, i) : null);
  }
  function Nh(i, a) {
    var u = ss;
    return (
      i.current.memoizedState.isDehydrated && (_i(i, a).flags |= 256),
      (i = pu(i, a)),
      i !== 2 && ((a = qt), (qt = u), a !== null && Rh(a)),
      i
    );
  }
  function Rh(i) {
    qt === null ? (qt = i) : qt.push.apply(qt, i);
  }
  function X2(i) {
    for (var a = i; ;) {
      if (a.flags & 16384) {
        var u = a.updateQueue;
        if (u !== null && ((u = u.stores), u !== null))
          for (var h = 0; h < u.length; h++) {
            var v = u[h],
              y = v.getSnapshot;
            v = v.value;
            try {
              if (!kn(y(), v)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((u = a.child), a.subtreeFlags & 16384 && u !== null)) ((u.return = a), (a = u));
      else {
        if (a === i) break;
        for (; a.sibling === null;) {
          if (a.return === null || a.return === i) return !0;
          a = a.return;
        }
        ((a.sibling.return = a.return), (a = a.sibling));
      }
    }
    return !0;
  }
  function Xr(i, a) {
    for (
      a &= ~Mh, a &= ~lu, i.suspendedLanes |= a, i.pingedLanes &= ~a, i = i.expirationTimes;
      0 < a;
    ) {
      var u = 31 - Tn(a),
        h = 1 << u;
      ((i[u] = -1), (a &= ~h));
    }
  }
  function ox(i) {
    if ((Te & 6) !== 0) throw Error(n(327));
    Lo();
    var a = Sl(i, 0);
    if ((a & 1) === 0) return (Yt(i, Je()), null);
    var u = pu(i, a);
    if (i.tag !== 0 && u === 2) {
      var h = pd(i);
      h !== 0 && ((a = h), (u = Nh(i, h)));
    }
    if (u === 1) throw ((u = as), _i(i, 0), Xr(i, a), Yt(i, Je()), u);
    if (u === 6) throw Error(n(345));
    return (
      (i.finishedWork = i.current.alternate),
      (i.finishedLanes = a),
      Mi(i, qt, xr),
      Yt(i, Je()),
      null
    );
  }
  function Lh(i, a) {
    var u = Te;
    Te |= 1;
    try {
      return i(a);
    } finally {
      ((Te = u), Te === 0 && ((Ro = Je() + 500), Vl && Ur()));
    }
  }
  function Oi(i) {
    Yr !== null && Yr.tag === 0 && (Te & 6) === 0 && Lo();
    var a = Te;
    Te |= 1;
    var u = pn.transition,
      h = De;
    try {
      if (((pn.transition = null), (De = 1), i)) return i();
    } finally {
      ((De = h), (pn.transition = u), (Te = a), (Te & 6) === 0 && Ur());
    }
  }
  function $h() {
    ((en = No.current), Ue(No));
  }
  function _i(i, a) {
    ((i.finishedWork = null), (i.finishedLanes = 0));
    var u = i.timeoutHandle;
    if ((u !== -1 && ((i.timeoutHandle = -1), A2(u)), tt !== null))
      for (u = tt.return; u !== null;) {
        var h = u;
        switch ((qd(h), h.tag)) {
          case 1:
            ((h = h.type.childContextTypes), h != null && zl());
            break;
          case 3:
            (Io(), Ue(Wt), Ue(Mt), ah());
            break;
          case 5:
            ih(h);
            break;
          case 4:
            Io();
            break;
          case 13:
            Ue(Ye);
            break;
          case 19:
            Ue(Ye);
            break;
          case 10:
            Jd(h.type._context);
            break;
          case 22:
          case 23:
            $h();
        }
        u = u.return;
      }
    if (
      ((ft = i),
      (tt = i = Zr(i.current, null)),
      (St = en = a),
      (at = 0),
      (as = null),
      (Mh = lu = ki = 0),
      (qt = ss = null),
      Ci !== null)
    ) {
      for (a = 0; a < Ci.length; a++)
        if (((u = Ci[a]), (h = u.interleaved), h !== null)) {
          u.interleaved = null;
          var v = h.next,
            y = u.pending;
          if (y !== null) {
            var P = y.next;
            ((y.next = v), (h.next = P));
          }
          u.pending = h;
        }
      Ci = null;
    }
    return i;
  }
  function ax(i, a) {
    do {
      var u = tt;
      try {
        if ((Qd(), (Zl.current = tu), Ql)) {
          for (var h = Ge.memoizedState; h !== null;) {
            var v = h.queue;
            (v !== null && (v.pending = null), (h = h.next));
          }
          Ql = !1;
        }
        if (
          ((Ti = 0),
          (ct = ot = Ge = null),
          (es = !1),
          (ts = 0),
          (_h.current = null),
          u === null || u.return === null)
        ) {
          ((at = 1), (as = a), (tt = null));
          break;
        }
        e: {
          var y = i,
            P = u.return,
            T = u,
            M = a;
          if (
            ((a = St),
            (T.flags |= 32768),
            M !== null && typeof M == "object" && typeof M.then == "function")
          ) {
            var V = M,
              G = T,
              Z = G.tag;
            if ((G.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Y = G.alternate;
              Y
                ? ((G.updateQueue = Y.updateQueue),
                  (G.memoizedState = Y.memoizedState),
                  (G.lanes = Y.lanes))
                : ((G.updateQueue = null), (G.memoizedState = null));
            }
            var re = M1(P);
            if (re !== null) {
              ((re.flags &= -257),
                I1(re, P, T, y, a),
                re.mode & 1 && _1(y, V, a),
                (a = re),
                (M = V));
              var se = a.updateQueue;
              if (se === null) {
                var ue = new Set();
                (ue.add(M), (a.updateQueue = ue));
              } else se.add(M);
              break e;
            } else {
              if ((a & 1) === 0) {
                (_1(y, V, a), zh());
                break e;
              }
              M = Error(n(426));
            }
          } else if (He && T.mode & 1) {
            var et = M1(P);
            if (et !== null) {
              ((et.flags & 65536) === 0 && (et.flags |= 256), I1(et, P, T, y, a), Xd(Do(M, T)));
              break e;
            }
          }
          ((y = M = Do(M, T)),
            at !== 4 && (at = 2),
            ss === null ? (ss = [y]) : ss.push(y),
            (y = P));
          do {
            switch (y.tag) {
              case 3:
                ((y.flags |= 65536), (a &= -a), (y.lanes |= a));
                var L = k1(y, M, a);
                t1(y, L);
                break e;
              case 1:
                T = M;
                var D = y.type,
                  $ = y.stateNode;
                if (
                  (y.flags & 128) === 0 &&
                  (typeof D.getDerivedStateFromError == "function" ||
                    ($ !== null &&
                      typeof $.componentDidCatch == "function" &&
                      (qr === null || !qr.has($))))
                ) {
                  ((y.flags |= 65536), (a &= -a), (y.lanes |= a));
                  var ee = O1(y, T, a);
                  t1(y, ee);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        ux(u);
      } catch (ce) {
        ((a = ce), tt === u && u !== null && (tt = u = u.return));
        continue;
      }
      break;
    } while (!0);
  }
  function sx() {
    var i = su.current;
    return ((su.current = tu), i === null ? tu : i);
  }
  function zh() {
    ((at === 0 || at === 3 || at === 2) && (at = 4),
      ft === null || ((ki & 268435455) === 0 && (lu & 268435455) === 0) || Xr(ft, St));
  }
  function pu(i, a) {
    var u = Te;
    Te |= 2;
    var h = sx();
    (ft !== i || St !== a) && ((xr = null), _i(i, a));
    do
      try {
        Z2();
        break;
      } catch (v) {
        ax(i, v);
      }
    while (!0);
    if ((Qd(), (Te = u), (su.current = h), tt !== null)) throw Error(n(261));
    return ((ft = null), (St = 0), at);
  }
  function Z2() {
    for (; tt !== null;) lx(tt);
  }
  function Q2() {
    for (; tt !== null && !PM();) lx(tt);
  }
  function lx(i) {
    var a = dx(i.alternate, i, en);
    ((i.memoizedProps = i.pendingProps), a === null ? ux(i) : (tt = a), (_h.current = null));
  }
  function ux(i) {
    var a = i;
    do {
      var u = a.alternate;
      if (((i = a.return), (a.flags & 32768) === 0)) {
        if (((u = W2(u, a, en)), u !== null)) {
          tt = u;
          return;
        }
      } else {
        if (((u = K2(u, a)), u !== null)) {
          ((u.flags &= 32767), (tt = u));
          return;
        }
        if (i !== null) ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null));
        else {
          ((at = 6), (tt = null));
          return;
        }
      }
      if (((a = a.sibling), a !== null)) {
        tt = a;
        return;
      }
      tt = a = i;
    } while (a !== null);
    at === 0 && (at = 5);
  }
  function Mi(i, a, u) {
    var h = De,
      v = pn.transition;
    try {
      ((pn.transition = null), (De = 1), J2(i, a, u, h));
    } finally {
      ((pn.transition = v), (De = h));
    }
    return null;
  }
  function J2(i, a, u, h) {
    do Lo();
    while (Yr !== null);
    if ((Te & 6) !== 0) throw Error(n(327));
    u = i.finishedWork;
    var v = i.finishedLanes;
    if (u === null) return null;
    if (((i.finishedWork = null), (i.finishedLanes = 0), u === i.current)) throw Error(n(177));
    ((i.callbackNode = null), (i.callbackPriority = 0));
    var y = u.lanes | u.childLanes;
    if (
      (DM(i, y),
      i === ft && ((tt = ft = null), (St = 0)),
      ((u.subtreeFlags & 2064) === 0 && (u.flags & 2064) === 0) ||
        cu ||
        ((cu = !0),
        hx(yl, function () {
          return (Lo(), null);
        })),
      (y = (u.flags & 15990) !== 0),
      (u.subtreeFlags & 15990) !== 0 || y)
    ) {
      ((y = pn.transition), (pn.transition = null));
      var P = De;
      De = 1;
      var T = Te;
      ((Te |= 4),
        (_h.current = null),
        q2(i, u),
        J1(u, i),
        x2(zd),
        (Cl = !!$d),
        (zd = $d = null),
        (i.current = u),
        Y2(u),
        EM(),
        (Te = T),
        (De = P),
        (pn.transition = y));
    } else i.current = u;
    if (
      (cu && ((cu = !1), (Yr = i), (fu = v)),
      (y = i.pendingLanes),
      y === 0 && (qr = null),
      TM(u.stateNode),
      Yt(i, Je()),
      a !== null)
    )
      for (h = i.onRecoverableError, u = 0; u < a.length; u++)
        ((v = a[u]), h(v.value, { componentStack: v.stack, digest: v.digest }));
    if (uu) throw ((uu = !1), (i = Dh), (Dh = null), i);
    return (
      (fu & 1) !== 0 && i.tag !== 0 && Lo(),
      (y = i.pendingLanes),
      (y & 1) !== 0 ? (i === jh ? ls++ : ((ls = 0), (jh = i))) : (ls = 0),
      Ur(),
      null
    );
  }
  function Lo() {
    if (Yr !== null) {
      var i = Zy(fu),
        a = pn.transition,
        u = De;
      try {
        if (((pn.transition = null), (De = 16 > i ? 16 : i), Yr === null)) var h = !1;
        else {
          if (((i = Yr), (Yr = null), (fu = 0), (Te & 6) !== 0)) throw Error(n(331));
          var v = Te;
          for (Te |= 4, oe = i.current; oe !== null;) {
            var y = oe,
              P = y.child;
            if ((oe.flags & 16) !== 0) {
              var T = y.deletions;
              if (T !== null) {
                for (var M = 0; M < T.length; M++) {
                  var V = T[M];
                  for (oe = V; oe !== null;) {
                    var G = oe;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(8, G, y);
                    }
                    var Z = G.child;
                    if (Z !== null) ((Z.return = G), (oe = Z));
                    else
                      for (; oe !== null;) {
                        G = oe;
                        var Y = G.sibling,
                          re = G.return;
                        if ((Y1(G), G === V)) {
                          oe = null;
                          break;
                        }
                        if (Y !== null) {
                          ((Y.return = re), (oe = Y));
                          break;
                        }
                        oe = re;
                      }
                  }
                }
                var se = y.alternate;
                if (se !== null) {
                  var ue = se.child;
                  if (ue !== null) {
                    se.child = null;
                    do {
                      var et = ue.sibling;
                      ((ue.sibling = null), (ue = et));
                    } while (ue !== null);
                  }
                }
                oe = y;
              }
            }
            if ((y.subtreeFlags & 2064) !== 0 && P !== null) ((P.return = y), (oe = P));
            else
              e: for (; oe !== null;) {
                if (((y = oe), (y.flags & 2048) !== 0))
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      os(9, y, y.return);
                  }
                var L = y.sibling;
                if (L !== null) {
                  ((L.return = y.return), (oe = L));
                  break e;
                }
                oe = y.return;
              }
          }
          var D = i.current;
          for (oe = D; oe !== null;) {
            P = oe;
            var $ = P.child;
            if ((P.subtreeFlags & 2064) !== 0 && $ !== null) (($.return = P), (oe = $));
            else
              e: for (P = D; oe !== null;) {
                if (((T = oe), (T.flags & 2048) !== 0))
                  try {
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        au(9, T);
                    }
                  } catch (ce) {
                    Xe(T, T.return, ce);
                  }
                if (T === P) {
                  oe = null;
                  break e;
                }
                var ee = T.sibling;
                if (ee !== null) {
                  ((ee.return = T.return), (oe = ee));
                  break e;
                }
                oe = T.return;
              }
          }
          if (((Te = v), Ur(), Hn && typeof Hn.onPostCommitFiberRoot == "function"))
            try {
              Hn.onPostCommitFiberRoot(xl, i);
            } catch {}
          h = !0;
        }
        return h;
      } finally {
        ((De = u), (pn.transition = a));
      }
    }
    return !1;
  }
  function cx(i, a, u) {
    ((a = Do(u, a)),
      (a = k1(i, a, 1)),
      (i = Kr(i, a, 1)),
      (a = Lt()),
      i !== null && (Ia(i, 1, a), Yt(i, a)));
  }
  function Xe(i, a, u) {
    if (i.tag === 3) cx(i, i, u);
    else
      for (; a !== null;) {
        if (a.tag === 3) {
          cx(a, i, u);
          break;
        } else if (a.tag === 1) {
          var h = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof h.componentDidCatch == "function" && (qr === null || !qr.has(h)))
          ) {
            ((i = Do(u, i)),
              (i = O1(a, i, 1)),
              (a = Kr(a, i, 1)),
              (i = Lt()),
              a !== null && (Ia(a, 1, i), Yt(a, i)));
            break;
          }
        }
        a = a.return;
      }
  }
  function eI(i, a, u) {
    var h = i.pingCache;
    (h !== null && h.delete(a),
      (a = Lt()),
      (i.pingedLanes |= i.suspendedLanes & u),
      ft === i &&
        (St & u) === u &&
        (at === 4 || (at === 3 && (St & 130023424) === St && 500 > Je() - Ih)
          ? _i(i, 0)
          : (Mh |= u)),
      Yt(i, a));
  }
  function fx(i, a) {
    a === 0 &&
      ((i.mode & 1) === 0
        ? (a = 1)
        : ((a = bl), (bl <<= 1), (bl & 130023424) === 0 && (bl = 4194304)));
    var u = Lt();
    ((i = vr(i, a)), i !== null && (Ia(i, a, u), Yt(i, u)));
  }
  function tI(i) {
    var a = i.memoizedState,
      u = 0;
    (a !== null && (u = a.retryLane), fx(i, u));
  }
  function nI(i, a) {
    var u = 0;
    switch (i.tag) {
      case 13:
        var h = i.stateNode,
          v = i.memoizedState;
        v !== null && (u = v.retryLane);
        break;
      case 19:
        h = i.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    (h !== null && h.delete(a), fx(i, u));
  }
  var dx;
  dx = function (i, a, u) {
    if (i !== null)
      if (i.memoizedProps !== a.pendingProps || Wt.current) Ht = !0;
      else {
        if ((i.lanes & u) === 0 && (a.flags & 128) === 0) return ((Ht = !1), U2(i, a, u));
        Ht = (i.flags & 131072) !== 0;
      }
    else ((Ht = !1), He && (a.flags & 1048576) !== 0 && K0(a, Ul, a.index));
    switch (((a.lanes = 0), a.tag)) {
      case 2:
        var h = a.type;
        (iu(i, a), (i = a.pendingProps));
        var v = Co(a, Mt.current);
        (Mo(a, u), (v = uh(null, a, h, i, v, u)));
        var y = ch();
        return (
          (a.flags |= 1),
          typeof v == "object" &&
          v !== null &&
          typeof v.render == "function" &&
          v.$$typeof === void 0
            ? ((a.tag = 1),
              (a.memoizedState = null),
              (a.updateQueue = null),
              Kt(h) ? ((y = !0), Fl(a)) : (y = !1),
              (a.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null),
              nh(a),
              (v.updater = nu),
              (a.stateNode = v),
              (v._reactInternals = a),
              vh(a, h, i, u),
              (a = wh(null, a, h, !0, y, u)))
            : ((a.tag = 0), He && y && Hd(a), Rt(null, a, v, u), (a = a.child)),
          a
        );
      case 16:
        h = a.elementType;
        e: {
          switch (
            (iu(i, a),
            (i = a.pendingProps),
            (v = h._init),
            (h = v(h._payload)),
            (a.type = h),
            (v = a.tag = iI(h)),
            (i = _n(h, i)),
            v)
          ) {
            case 0:
              a = xh(null, a, h, i, u);
              break e;
            case 1:
              a = $1(null, a, h, i, u);
              break e;
            case 11:
              a = D1(null, a, h, i, u);
              break e;
            case 14:
              a = j1(null, a, h, _n(h.type, i), u);
              break e;
          }
          throw Error(n(306, h, ""));
        }
        return a;
      case 0:
        return (
          (h = a.type),
          (v = a.pendingProps),
          (v = a.elementType === h ? v : _n(h, v)),
          xh(i, a, h, v, u)
        );
      case 1:
        return (
          (h = a.type),
          (v = a.pendingProps),
          (v = a.elementType === h ? v : _n(h, v)),
          $1(i, a, h, v, u)
        );
      case 3:
        e: {
          if ((z1(a), i === null)) throw Error(n(387));
          ((h = a.pendingProps),
            (y = a.memoizedState),
            (v = y.element),
            e1(i, a),
            Gl(a, h, null, u));
          var P = a.memoizedState;
          if (((h = P.element), y.isDehydrated))
            if (
              ((y = {
                element: h,
                isDehydrated: !1,
                cache: P.cache,
                pendingSuspenseBoundaries: P.pendingSuspenseBoundaries,
                transitions: P.transitions,
              }),
              (a.updateQueue.baseState = y),
              (a.memoizedState = y),
              a.flags & 256)
            ) {
              ((v = Do(Error(n(423)), a)), (a = F1(i, a, h, u, v)));
              break e;
            } else if (h !== v) {
              ((v = Do(Error(n(424)), a)), (a = F1(i, a, h, u, v)));
              break e;
            } else
              for (
                Jt = Fr(a.stateNode.containerInfo.firstChild),
                  Qt = a,
                  He = !0,
                  On = null,
                  u = Q0(a, null, h, u),
                  a.child = u;
                u;
              )
                ((u.flags = (u.flags & -3) | 4096), (u = u.sibling));
          else {
            if ((ko(), h === v)) {
              a = yr(i, a, u);
              break e;
            }
            Rt(i, a, h, u);
          }
          a = a.child;
        }
        return a;
      case 5:
        return (
          r1(a),
          i === null && Gd(a),
          (h = a.type),
          (v = a.pendingProps),
          (y = i !== null ? i.memoizedProps : null),
          (P = v.children),
          Fd(h, v) ? (P = null) : y !== null && Fd(h, y) && (a.flags |= 32),
          L1(i, a),
          Rt(i, a, P, u),
          a.child
        );
      case 6:
        return (i === null && Gd(a), null);
      case 13:
        return V1(i, a, u);
      case 4:
        return (
          rh(a, a.stateNode.containerInfo),
          (h = a.pendingProps),
          i === null ? (a.child = Oo(a, null, h, u)) : Rt(i, a, h, u),
          a.child
        );
      case 11:
        return (
          (h = a.type),
          (v = a.pendingProps),
          (v = a.elementType === h ? v : _n(h, v)),
          D1(i, a, h, v, u)
        );
      case 7:
        return (Rt(i, a, a.pendingProps, u), a.child);
      case 8:
        return (Rt(i, a, a.pendingProps.children, u), a.child);
      case 12:
        return (Rt(i, a, a.pendingProps.children, u), a.child);
      case 10:
        e: {
          if (
            ((h = a.type._context),
            (v = a.pendingProps),
            (y = a.memoizedProps),
            (P = v.value),
            ze(Hl, h._currentValue),
            (h._currentValue = P),
            y !== null)
          )
            if (kn(y.value, P)) {
              if (y.children === v.children && !Wt.current) {
                a = yr(i, a, u);
                break e;
              }
            } else
              for (y = a.child, y !== null && (y.return = a); y !== null;) {
                var T = y.dependencies;
                if (T !== null) {
                  P = y.child;
                  for (var M = T.firstContext; M !== null;) {
                    if (M.context === h) {
                      if (y.tag === 1) {
                        ((M = gr(-1, u & -u)), (M.tag = 2));
                        var V = y.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var G = V.pending;
                          (G === null ? (M.next = M) : ((M.next = G.next), (G.next = M)),
                            (V.pending = M));
                        }
                      }
                      ((y.lanes |= u),
                        (M = y.alternate),
                        M !== null && (M.lanes |= u),
                        eh(y.return, u, a),
                        (T.lanes |= u));
                      break;
                    }
                    M = M.next;
                  }
                } else if (y.tag === 10) P = y.type === a.type ? null : y.child;
                else if (y.tag === 18) {
                  if (((P = y.return), P === null)) throw Error(n(341));
                  ((P.lanes |= u),
                    (T = P.alternate),
                    T !== null && (T.lanes |= u),
                    eh(P, u, a),
                    (P = y.sibling));
                } else P = y.child;
                if (P !== null) P.return = y;
                else
                  for (P = y; P !== null;) {
                    if (P === a) {
                      P = null;
                      break;
                    }
                    if (((y = P.sibling), y !== null)) {
                      ((y.return = P.return), (P = y));
                      break;
                    }
                    P = P.return;
                  }
                y = P;
              }
          (Rt(i, a, v.children, u), (a = a.child));
        }
        return a;
      case 9:
        return (
          (v = a.type),
          (h = a.pendingProps.children),
          Mo(a, u),
          (v = dn(v)),
          (h = h(v)),
          (a.flags |= 1),
          Rt(i, a, h, u),
          a.child
        );
      case 14:
        return ((h = a.type), (v = _n(h, a.pendingProps)), (v = _n(h.type, v)), j1(i, a, h, v, u));
      case 15:
        return N1(i, a, a.type, a.pendingProps, u);
      case 17:
        return (
          (h = a.type),
          (v = a.pendingProps),
          (v = a.elementType === h ? v : _n(h, v)),
          iu(i, a),
          (a.tag = 1),
          Kt(h) ? ((i = !0), Fl(a)) : (i = !1),
          Mo(a, u),
          A1(a, h, v),
          vh(a, h, v, u),
          wh(null, a, h, !0, i, u)
        );
      case 19:
        return U1(i, a, u);
      case 22:
        return R1(i, a, u);
    }
    throw Error(n(156, a.tag));
  };
  function hx(i, a) {
    return Hy(i, a);
  }
  function rI(i, a, u, h) {
    ((this.tag = i),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = a),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = h),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function mn(i, a, u, h) {
    return new rI(i, a, u, h);
  }
  function Fh(i) {
    return ((i = i.prototype), !(!i || !i.isReactComponent));
  }
  function iI(i) {
    if (typeof i == "function") return Fh(i) ? 1 : 0;
    if (i != null) {
      if (((i = i.$$typeof), i === U)) return 11;
      if (i === ve) return 14;
    }
    return 2;
  }
  function Zr(i, a) {
    var u = i.alternate;
    return (
      u === null
        ? ((u = mn(i.tag, a, i.key, i.mode)),
          (u.elementType = i.elementType),
          (u.type = i.type),
          (u.stateNode = i.stateNode),
          (u.alternate = i),
          (i.alternate = u))
        : ((u.pendingProps = a),
          (u.type = i.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = i.flags & 14680064),
      (u.childLanes = i.childLanes),
      (u.lanes = i.lanes),
      (u.child = i.child),
      (u.memoizedProps = i.memoizedProps),
      (u.memoizedState = i.memoizedState),
      (u.updateQueue = i.updateQueue),
      (a = i.dependencies),
      (u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (u.sibling = i.sibling),
      (u.index = i.index),
      (u.ref = i.ref),
      u
    );
  }
  function mu(i, a, u, h, v, y) {
    var P = 2;
    if (((h = i), typeof i == "function")) Fh(i) && (P = 1);
    else if (typeof i == "string") P = 5;
    else
      e: switch (i) {
        case R:
          return Ii(u.children, v, y, a);
        case F:
          ((P = 8), (v |= 8));
          break;
        case W:
          return ((i = mn(12, u, a, v | 2)), (i.elementType = W), (i.lanes = y), i);
        case fe:
          return ((i = mn(13, u, a, v)), (i.elementType = fe), (i.lanes = y), i);
        case ie:
          return ((i = mn(19, u, a, v)), (i.elementType = ie), (i.lanes = y), i);
        case pe:
          return vu(u, v, y, a);
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case B:
                P = 10;
                break e;
              case q:
                P = 9;
                break e;
              case U:
                P = 11;
                break e;
              case ve:
                P = 14;
                break e;
              case ye:
                ((P = 16), (h = null));
                break e;
            }
          throw Error(n(130, i == null ? i : typeof i, ""));
      }
    return ((a = mn(P, u, a, v)), (a.elementType = i), (a.type = h), (a.lanes = y), a);
  }
  function Ii(i, a, u, h) {
    return ((i = mn(7, i, h, a)), (i.lanes = u), i);
  }
  function vu(i, a, u, h) {
    return (
      (i = mn(22, i, h, a)),
      (i.elementType = pe),
      (i.lanes = u),
      (i.stateNode = { isHidden: !1 }),
      i
    );
  }
  function Vh(i, a, u) {
    return ((i = mn(6, i, null, a)), (i.lanes = u), i);
  }
  function Bh(i, a, u) {
    return (
      (a = mn(4, i.children !== null ? i.children : [], i.key, a)),
      (a.lanes = u),
      (a.stateNode = {
        containerInfo: i.containerInfo,
        pendingChildren: null,
        implementation: i.implementation,
      }),
      a
    );
  }
  function oI(i, a, u, h, v) {
    ((this.tag = a),
      (this.containerInfo = i),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = md(0)),
      (this.expirationTimes = md(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = md(0)),
      (this.identifierPrefix = h),
      (this.onRecoverableError = v),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Uh(i, a, u, h, v, y, P, T, M) {
    return (
      (i = new oI(i, a, u, T, M)),
      a === 1 ? ((a = 1), y === !0 && (a |= 8)) : (a = 0),
      (y = mn(3, null, null, a)),
      (i.current = y),
      (y.stateNode = i),
      (y.memoizedState = {
        element: h,
        isDehydrated: u,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      nh(y),
      i
    );
  }
  function aI(i, a, u) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: I,
      key: h == null ? null : "" + h,
      children: i,
      containerInfo: a,
      implementation: u,
    };
  }
  function px(i) {
    if (!i) return Br;
    i = i._reactInternals;
    e: {
      if (wi(i) !== i || i.tag !== 1) throw Error(n(170));
      var a = i;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break e;
          case 1:
            if (Kt(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(n(171));
    }
    if (i.tag === 1) {
      var u = i.type;
      if (Kt(u)) return B0(i, u, a);
    }
    return a;
  }
  function mx(i, a, u, h, v, y, P, T, M) {
    return (
      (i = Uh(u, h, !0, i, v, y, P, T, M)),
      (i.context = px(null)),
      (u = i.current),
      (h = Lt()),
      (v = Gr(u)),
      (y = gr(h, v)),
      (y.callback = a ?? null),
      Kr(u, y, v),
      (i.current.lanes = v),
      Ia(i, v, h),
      Yt(i, h),
      i
    );
  }
  function gu(i, a, u, h) {
    var v = a.current,
      y = Lt(),
      P = Gr(v);
    return (
      (u = px(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = gr(y, P)),
      (a.payload = { element: i }),
      (h = h === void 0 ? null : h),
      h !== null && (a.callback = h),
      (i = Kr(v, a, P)),
      i !== null && (Dn(i, v, P, y), Yl(i, v, P)),
      P
    );
  }
  function yu(i) {
    if (((i = i.current), !i.child)) return null;
    switch (i.child.tag) {
      case 5:
        return i.child.stateNode;
      default:
        return i.child.stateNode;
    }
  }
  function vx(i, a) {
    if (((i = i.memoizedState), i !== null && i.dehydrated !== null)) {
      var u = i.retryLane;
      i.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function Wh(i, a) {
    (vx(i, a), (i = i.alternate) && vx(i, a));
  }
  function sI() {
    return null;
  }
  var gx =
    typeof reportError == "function"
      ? reportError
      : function (i) {
          console.error(i);
        };
  function Kh(i) {
    this._internalRoot = i;
  }
  ((xu.prototype.render = Kh.prototype.render =
    function (i) {
      var a = this._internalRoot;
      if (a === null) throw Error(n(409));
      gu(i, a, null, null);
    }),
    (xu.prototype.unmount = Kh.prototype.unmount =
      function () {
        var i = this._internalRoot;
        if (i !== null) {
          this._internalRoot = null;
          var a = i.containerInfo;
          (Oi(function () {
            gu(null, i, null, null);
          }),
            (a[dr] = null));
        }
      }));
  function xu(i) {
    this._internalRoot = i;
  }
  xu.prototype.unstable_scheduleHydration = function (i) {
    if (i) {
      var a = e0();
      i = { blockedOn: null, target: i, priority: a };
      for (var u = 0; u < Lr.length && a !== 0 && a < Lr[u].priority; u++);
      (Lr.splice(u, 0, i), u === 0 && r0(i));
    }
  };
  function Hh(i) {
    return !(!i || (i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11));
  }
  function wu(i) {
    return !(
      !i ||
      (i.nodeType !== 1 &&
        i.nodeType !== 9 &&
        i.nodeType !== 11 &&
        (i.nodeType !== 8 || i.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function yx() {}
  function lI(i, a, u, h, v) {
    if (v) {
      if (typeof h == "function") {
        var y = h;
        h = function () {
          var V = yu(P);
          y.call(V);
        };
      }
      var P = mx(a, h, i, 0, null, !1, !1, "", yx);
      return (
        (i._reactRootContainer = P),
        (i[dr] = P.current),
        Ha(i.nodeType === 8 ? i.parentNode : i),
        Oi(),
        P
      );
    }
    for (; (v = i.lastChild);) i.removeChild(v);
    if (typeof h == "function") {
      var T = h;
      h = function () {
        var V = yu(M);
        T.call(V);
      };
    }
    var M = Uh(i, 0, !1, null, null, !1, !1, "", yx);
    return (
      (i._reactRootContainer = M),
      (i[dr] = M.current),
      Ha(i.nodeType === 8 ? i.parentNode : i),
      Oi(function () {
        gu(a, M, u, h);
      }),
      M
    );
  }
  function bu(i, a, u, h, v) {
    var y = u._reactRootContainer;
    if (y) {
      var P = y;
      if (typeof v == "function") {
        var T = v;
        v = function () {
          var M = yu(P);
          T.call(M);
        };
      }
      gu(a, P, i, v);
    } else P = lI(u, a, i, v, h);
    return yu(P);
  }
  ((Qy = function (i) {
    switch (i.tag) {
      case 3:
        var a = i.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var u = Ma(a.pendingLanes);
          u !== 0 && (vd(a, u | 1), Yt(a, Je()), (Te & 6) === 0 && ((Ro = Je() + 500), Ur()));
        }
        break;
      case 13:
        (Oi(function () {
          var h = vr(i, 1);
          if (h !== null) {
            var v = Lt();
            Dn(h, i, 1, v);
          }
        }),
          Wh(i, 1));
    }
  }),
    (gd = function (i) {
      if (i.tag === 13) {
        var a = vr(i, 134217728);
        if (a !== null) {
          var u = Lt();
          Dn(a, i, 134217728, u);
        }
        Wh(i, 134217728);
      }
    }),
    (Jy = function (i) {
      if (i.tag === 13) {
        var a = Gr(i),
          u = vr(i, a);
        if (u !== null) {
          var h = Lt();
          Dn(u, i, a, h);
        }
        Wh(i, a);
      }
    }),
    (e0 = function () {
      return De;
    }),
    (t0 = function (i, a) {
      var u = De;
      try {
        return ((De = i), a());
      } finally {
        De = u;
      }
    }),
    (ud = function (i, a, u) {
      switch (a) {
        case "input":
          if ((An(i, u), (a = u.name), u.type === "radio" && a != null)) {
            for (u = i; u.parentNode;) u = u.parentNode;
            for (
              u = u.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'),
                a = 0;
              a < u.length;
              a++
            ) {
              var h = u[a];
              if (h !== i && h.form === i.form) {
                var v = $l(h);
                if (!v) throw Error(n(90));
                (Q(h), An(h, v));
              }
            }
          }
          break;
        case "textarea":
          _y(i, u);
          break;
        case "select":
          ((a = u.value), a != null && ho(i, !!u.multiple, a, !1));
      }
    }),
    (zy = Lh),
    (Fy = Oi));
  var uI = { usingClientEntryPoint: !1, Events: [Ga, Po, $l, Ly, $y, Lh] },
    us = {
      findFiberByHostInstance: bi,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    cI = {
      bundleType: us.bundleType,
      version: us.version,
      rendererPackageName: us.rendererPackageName,
      rendererConfig: us.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: O.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (i) {
        return ((i = Wy(i)), i === null ? null : i.stateNode);
      },
      findFiberByHostInstance: us.findFiberByHostInstance || sI,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Su.isDisabled && Su.supportsFiber)
      try {
        ((xl = Su.inject(cI)), (Hn = Su));
      } catch {}
  }
  return (
    (Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uI),
    (Gt.createPortal = function (i, a) {
      var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hh(a)) throw Error(n(200));
      return aI(i, a, null, u);
    }),
    (Gt.createRoot = function (i, a) {
      if (!Hh(i)) throw Error(n(299));
      var u = !1,
        h = "",
        v = gx;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (h = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError)),
        (a = Uh(i, 1, !1, null, null, u, !1, h, v)),
        (i[dr] = a.current),
        Ha(i.nodeType === 8 ? i.parentNode : i),
        new Kh(a)
      );
    }),
    (Gt.findDOMNode = function (i) {
      if (i == null) return null;
      if (i.nodeType === 1) return i;
      var a = i._reactInternals;
      if (a === void 0)
        throw typeof i.render == "function"
          ? Error(n(188))
          : ((i = Object.keys(i).join(",")), Error(n(268, i)));
      return ((i = Wy(a)), (i = i === null ? null : i.stateNode), i);
    }),
    (Gt.flushSync = function (i) {
      return Oi(i);
    }),
    (Gt.hydrate = function (i, a, u) {
      if (!wu(a)) throw Error(n(200));
      return bu(null, i, a, !0, u);
    }),
    (Gt.hydrateRoot = function (i, a, u) {
      if (!Hh(i)) throw Error(n(405));
      var h = (u != null && u.hydratedSources) || null,
        v = !1,
        y = "",
        P = gx;
      if (
        (u != null &&
          (u.unstable_strictMode === !0 && (v = !0),
          u.identifierPrefix !== void 0 && (y = u.identifierPrefix),
          u.onRecoverableError !== void 0 && (P = u.onRecoverableError)),
        (a = mx(a, null, i, 1, u ?? null, v, !1, y, P)),
        (i[dr] = a.current),
        Ha(i),
        h)
      )
        for (i = 0; i < h.length; i++)
          ((u = h[i]),
            (v = u._getVersion),
            (v = v(u._source)),
            a.mutableSourceEagerHydrationData == null
              ? (a.mutableSourceEagerHydrationData = [u, v])
              : a.mutableSourceEagerHydrationData.push(u, v));
      return new xu(a);
    }),
    (Gt.render = function (i, a, u) {
      if (!wu(a)) throw Error(n(200));
      return bu(null, i, a, !1, u);
    }),
    (Gt.unmountComponentAtNode = function (i) {
      if (!wu(i)) throw Error(n(40));
      return i._reactRootContainer
        ? (Oi(function () {
            bu(null, null, i, !1, function () {
              ((i._reactRootContainer = null), (i[dr] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Gt.unstable_batchedUpdates = Lh),
    (Gt.unstable_renderSubtreeIntoContainer = function (i, a, u, h) {
      if (!wu(u)) throw Error(n(200));
      if (i == null || i._reactInternals === void 0) throw Error(n(38));
      return bu(i, a, u, !1, h);
    }),
    (Gt.version = "18.3.1-next-f1338f8080-20240426"),
    Gt
  );
}
var Ax;
function qE() {
  if (Ax) return Gh.exports;
  Ax = 1;
  function e() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Gh.exports = SI()), Gh.exports);
}
var Tx;
function PI() {
  if (Tx) return Eu;
  Tx = 1;
  var e = qE();
  return ((Eu.createRoot = e.createRoot), (Eu.hydrateRoot = e.hydrateRoot), Eu);
}
var EI = PI();
function Uo(e) {
  const t = e.replace(/^\//, "").replace(/\/$/, "");
  return t ? `#/${t}` : "#/";
}
function Nv(e) {
  const t = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return t
    ? t.startsWith("/")
      ? { kind: "route", path: t.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: t }
    : null;
}
function YE(e, t = "smooth") {
  if (typeof document > "u") return !1;
  const n = document.getElementById(e);
  return n ? (n.scrollIntoView({ behavior: t, block: "start" }), !0) : !1;
}
function GE(e) {
  typeof window > "u" || (window.location.hash = Uo(e));
}
function CI() {
  const e = Nv();
  return (e == null ? void 0 : e.kind) === "route" ? e.path : "";
}
function XE() {
  if (typeof window > "u") return;
  const e = Nv();
  (e == null ? void 0 : e.kind) === "section" && requestAnimationFrame(() => YE(e.id, "auto"));
}
function AI(e, t) {
  if (typeof window > "u") return () => {};
  const n = () => {
    const r = Nv();
    if (!r) {
      e("");
      return;
    }
    if (r.kind === "route") {
      e(r.path);
      return;
    }
    (YE(r.id, "smooth"), e(""));
  };
  return (
    n(),
    window.addEventListener("hashchange", n),
    () => window.removeEventListener("hashchange", n)
  );
}
function TI(e = "") {
  const [t, n] = E.useState(() => (typeof window < "u" ? CI() : e));
  return (E.useEffect(() => AI(n), []), t || e);
}
function kI({ routes: e, defaultRoute: t = "", className: n }) {
  const r = TI(t);
  E.useEffect(() => {
    XE();
  }, []);
  const o = r in e ? r : t,
    s = e[o] ?? e[t];
  return N.jsx("div", { className: n, children: s });
}
const Rv = E.createContext({});
function Lv(e) {
  const t = E.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const OI = typeof window < "u",
  ZE = OI ? E.useLayoutEffect : E.useEffect,
  ff = E.createContext(null);
function $v(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ac(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const lr = (e, t, n) => (n > t ? t : n < e ? e : n);
let zv = () => {};
const li = {},
  QE = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  JE = (e) => typeof e == "object" && e !== null,
  eC = (e) => /^0[^.\s]+$/u.test(e);
function tC(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Pn = (e) => e,
  qs = (...e) => e.reduce((t, n) => (r) => n(t(r))),
  ks = (e, t, n) => {
    const r = t - e;
    return r ? (n - e) / r : 1;
  };
class Fv {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ($v(this.subscriptions, t), () => ac(this.subscriptions, t));
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const l = this.subscriptions[s];
          l && l(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const on = (e) => e * 1e3,
  xn = (e) => e / 1e3,
  nC = (e, t) => (t ? e * (1e3 / t) : 0),
  rC = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  _I = 1e-7,
  MI = 12;
function II(e, t, n, r, o) {
  let s,
    l,
    c = 0;
  do ((l = t + (n - t) / 2), (s = rC(l, r, o) - e), s > 0 ? (n = l) : (t = l));
  while (Math.abs(s) > _I && ++c < MI);
  return l;
}
function Ys(e, t, n, r) {
  if (e === t && n === r) return Pn;
  const o = (s) => II(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : rC(o(s), t, r));
}
const iC = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  oC = (e) => (t) => 1 - e(1 - t),
  aC = Ys(0.33, 1.53, 0.69, 0.99),
  Vv = oC(aC),
  sC = iC(Vv),
  lC = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Vv(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Bv = (e) => 1 - Math.sin(Math.acos(e)),
  uC = oC(Bv),
  cC = iC(Bv),
  DI = Ys(0.42, 0, 1, 1),
  jI = Ys(0, 0, 0.58, 1),
  fC = Ys(0.42, 0, 0.58, 1),
  NI = (e) => Array.isArray(e) && typeof e[0] != "number",
  dC = (e) => Array.isArray(e) && typeof e[0] == "number",
  RI = {
    linear: Pn,
    easeIn: DI,
    easeInOut: fC,
    easeOut: jI,
    circIn: Bv,
    circInOut: cC,
    circOut: uC,
    backIn: Vv,
    backInOut: sC,
    backOut: aC,
    anticipate: lC,
  },
  LI = (e) => typeof e == "string",
  kx = (e) => {
    if (dC(e)) {
      zv(e.length === 4);
      const [t, n, r, o] = e;
      return Ys(t, n, r, o);
    } else if (LI(e)) return RI[e];
    return e;
  },
  Cu = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function $I(e, t) {
  let n = new Set(),
    r = new Set(),
    o = !1,
    s = !1;
  const l = new WeakSet();
  let c = { delta: 0, timestamp: 0, isProcessing: !1 };
  function f(p) {
    (l.has(p) && (d.schedule(p), e()), p(c));
  }
  const d = {
    schedule: (p, m = !1, g = !1) => {
      const b = g && o ? n : r;
      return (m && l.add(p), b.add(p), p);
    },
    cancel: (p) => {
      (r.delete(p), l.delete(p));
    },
    process: (p) => {
      if (((c = p), o)) {
        s = !0;
        return;
      }
      o = !0;
      const m = n;
      ((n = r), (r = m), n.forEach(f), n.clear(), (o = !1), s && ((s = !1), d.process(p)));
    },
  };
  return d;
}
const zI = 40;
function hC(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    l = Cu.reduce((k, O) => ((k[O] = $I(s)), k), {}),
    {
      setup: c,
      read: f,
      resolveKeyframes: d,
      preUpdate: p,
      update: m,
      preRender: g,
      render: x,
      postRender: b,
    } = l,
    w = () => {
      const k = li.useManualTiming,
        O = k ? o.timestamp : performance.now();
      ((n = !1),
        k || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(O - o.timestamp, zI), 1)),
        (o.timestamp = O),
        (o.isProcessing = !0),
        c.process(o),
        f.process(o),
        d.process(o),
        p.process(o),
        m.process(o),
        g.process(o),
        x.process(o),
        b.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(w)));
    },
    S = () => {
      ((n = !0), (r = !0), o.isProcessing || e(w));
    };
  return {
    schedule: Cu.reduce((k, O) => {
      const _ = l[O];
      return ((k[O] = (I, R = !1, F = !1) => (n || S(), _.schedule(I, R, F))), k);
    }, {}),
    cancel: (k) => {
      for (let O = 0; O < Cu.length; O++) l[Cu[O]].cancel(k);
    },
    state: o,
    steps: l,
  };
}
const {
  schedule: Re,
  cancel: ui,
  state: Et,
  steps: Qh,
} = hC(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pn, !0);
let qu;
function FI() {
  qu = void 0;
}
const zt = {
    now: () => (
      qu === void 0 &&
        zt.set(Et.isProcessing || li.useManualTiming ? Et.timestamp : performance.now()),
      qu
    ),
    set: (e) => {
      ((qu = e), queueMicrotask(FI));
    },
  },
  pC = (e) => (t) => typeof t == "string" && t.startsWith(e),
  mC = pC("--"),
  VI = pC("var(--"),
  Uv = (e) => (VI(e) ? BI.test(e.split("/*")[0].trim()) : !1),
  BI = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ox(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const ha = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  Os = { ...ha, transform: (e) => lr(0, 1, e) },
  Au = { ...ha, default: 1 },
  Ps = (e) => Math.round(e * 1e5) / 1e5,
  Wv = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function UI(e) {
  return e == null;
}
const WI =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Kv = (e, t) => (n) =>
    !!(
      (typeof n == "string" && WI.test(n) && n.startsWith(e)) ||
      (t && !UI(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  vC = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, s, l, c] = r.match(Wv);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(s),
      [n]: parseFloat(l),
      alpha: c !== void 0 ? parseFloat(c) : 1,
    };
  },
  KI = (e) => lr(0, 255, e),
  Jh = { ...ha, transform: (e) => Math.round(KI(e)) },
  Bi = {
    test: Kv("rgb", "red"),
    parse: vC("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Jh.transform(e) +
      ", " +
      Jh.transform(t) +
      ", " +
      Jh.transform(n) +
      ", " +
      Ps(Os.transform(r)) +
      ")",
  };
function HI(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Sm = { test: Kv("#"), parse: HI, transform: Bi.transform },
  Gs = (e) => ({
    test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wr = Gs("deg"),
  or = Gs("%"),
  le = Gs("px"),
  qI = Gs("vh"),
  YI = Gs("vw"),
  _x = { ...or, parse: (e) => or.parse(e) / 100, transform: (e) => or.transform(e * 100) },
  Ho = {
    test: Kv("hsl", "hue"),
    parse: vC("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      or.transform(Ps(t)) +
      ", " +
      or.transform(Ps(n)) +
      ", " +
      Ps(Os.transform(r)) +
      ")",
  },
  nt = {
    test: (e) => Bi.test(e) || Sm.test(e) || Ho.test(e),
    parse: (e) => (Bi.test(e) ? Bi.parse(e) : Ho.test(e) ? Ho.parse(e) : Sm.parse(e)),
    transform: (e) =>
      typeof e == "string" ? e : e.hasOwnProperty("red") ? Bi.transform(e) : Ho.transform(e),
    getAnimatableNone: (e) => {
      const t = nt.parse(e);
      return ((t.alpha = 0), nt.transform(t));
    },
  },
  GI =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function XI(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Wv)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(GI)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const gC = "number",
  yC = "color",
  ZI = "var",
  QI = "var(",
  Mx = "${}",
  JI =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ea(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let s = 0;
  const c = t
    .replace(
      JI,
      (f) => (
        nt.test(f)
          ? (r.color.push(s), o.push(yC), n.push(nt.parse(f)))
          : f.startsWith(QI)
            ? (r.var.push(s), o.push(ZI), n.push(f))
            : (r.number.push(s), o.push(gC), n.push(parseFloat(f))),
        ++s,
        Mx
      ),
    )
    .split(Mx);
  return { values: n, split: c, indexes: r, types: o };
}
function eD(e) {
  return ea(e).values;
}
function xC({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let o = "";
    for (let s = 0; s < n; s++)
      if (((o += e[s]), r[s] !== void 0)) {
        const l = t[s];
        l === gC ? (o += Ps(r[s])) : l === yC ? (o += nt.transform(r[s])) : (o += r[s]);
      }
    return o;
  };
}
function tD(e) {
  return xC(ea(e));
}
const nD = (e) => (typeof e == "number" ? 0 : nt.test(e) ? nt.getAnimatableNone(e) : e),
  rD = (e, t) => (typeof e == "number" ? (t != null && t.trim().endsWith("/") ? e : 0) : nD(e));
function iD(e) {
  const t = ea(e);
  return xC(t)(t.values.map((r, o) => rD(r, t.split[o])));
}
const zn = { test: XI, parse: eD, createTransformer: tD, getAnimatableNone: iD };
function ep(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function oD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let o = 0,
    s = 0,
    l = 0;
  if (!t) o = s = l = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t,
      f = 2 * n - c;
    ((o = ep(f, c, e + 1 / 3)), (s = ep(f, c, e)), (l = ep(f, c, e - 1 / 3)));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(l * 255),
    alpha: r,
  };
}
function sc(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ne = (e, t, n) => e + (t - e) * n,
  tp = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  aD = [Sm, Bi, Ho],
  sD = (e) => aD.find((t) => t.test(e));
function Ix(e) {
  const t = sD(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Ho && (n = oD(n)), n);
}
const Dx = (e, t) => {
    const n = Ix(e),
      r = Ix(t);
    if (!n || !r) return sc(e, t);
    const o = { ...n };
    return (s) => (
      (o.red = tp(n.red, r.red, s)),
      (o.green = tp(n.green, r.green, s)),
      (o.blue = tp(n.blue, r.blue, s)),
      (o.alpha = Ne(n.alpha, r.alpha, s)),
      Bi.transform(o)
    );
  },
  Pm = new Set(["none", "hidden"]);
function lD(e, t) {
  return Pm.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function uD(e, t) {
  return (n) => Ne(e, t, n);
}
function Hv(e) {
  return typeof e == "number"
    ? uD
    : typeof e == "string"
      ? Uv(e)
        ? sc
        : nt.test(e)
          ? Dx
          : dD
      : Array.isArray(e)
        ? wC
        : typeof e == "object"
          ? nt.test(e)
            ? Dx
            : cD
          : sc;
}
function wC(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((s, l) => Hv(s)(s, t[l]));
  return (s) => {
    for (let l = 0; l < r; l++) n[l] = o[l](s);
    return n;
  };
}
function cD(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = Hv(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r) n[s] = r[s](o);
    return n;
  };
}
function fD(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][r[s]],
      c = e.values[l] ?? 0;
    ((n[o] = c), r[s]++);
  }
  return n;
}
const dD = (e, t) => {
  const n = zn.createTransformer(t),
    r = ea(e),
    o = ea(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Pm.has(e) && !o.values.length) || (Pm.has(t) && !r.values.length)
      ? lD(e, t)
      : qs(wC(fD(r, o), o.values), n)
    : sc(e, t);
};
function bC(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Ne(e, t, n)
    : Hv(e)(e, t);
}
const hD = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => Re.update(t, n),
      stop: () => ui(t),
      now: () => (Et.isProcessing ? Et.timestamp : zt.now()),
    };
  },
  SC = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < o; s++) r += Math.round(e(s / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  lc = 2e4;
function qv(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < lc;) ((t += n), (r = e.next(t)));
  return t >= lc ? 1 / 0 : t;
}
function pD(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    o = Math.min(qv(r), lc);
  return { type: "keyframes", ease: (s) => r.next(o * s).value / t, duration: xn(o) };
}
const Ze = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Em(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mD = 12;
function vD(e, t, n) {
  let r = n;
  for (let o = 1; o < mD; o++) r = r - e(r) / t(r);
  return r;
}
const np = 0.001;
function gD({
  duration: e = Ze.duration,
  bounce: t = Ze.bounce,
  velocity: n = Ze.velocity,
  mass: r = Ze.mass,
}) {
  let o,
    s,
    l = 1 - t;
  ((l = lr(Ze.minDamping, Ze.maxDamping, l)),
    (e = lr(Ze.minDuration, Ze.maxDuration, xn(e))),
    l < 1
      ? ((o = (d) => {
          const p = d * l,
            m = p * e,
            g = p - n,
            x = Em(d, l),
            b = Math.exp(-m);
          return np - (g / x) * b;
        }),
        (s = (d) => {
          const m = d * l * e,
            g = m * n + n,
            x = Math.pow(l, 2) * Math.pow(d, 2) * e,
            b = Math.exp(-m),
            w = Em(Math.pow(d, 2), l);
          return ((-o(d) + np > 0 ? -1 : 1) * ((g - x) * b)) / w;
        }))
      : ((o = (d) => {
          const p = Math.exp(-d * e),
            m = (d - n) * e + 1;
          return -np + p * m;
        }),
        (s = (d) => {
          const p = Math.exp(-d * e),
            m = (n - d) * (e * e);
          return p * m;
        })));
  const c = 5 / e,
    f = vD(o, s, c);
  if (((e = on(e)), isNaN(f))) return { stiffness: Ze.stiffness, damping: Ze.damping, duration: e };
  {
    const d = Math.pow(f, 2) * r;
    return { stiffness: d, damping: l * 2 * Math.sqrt(r * d), duration: e };
  }
}
const yD = ["duration", "bounce"],
  xD = ["stiffness", "damping", "mass"];
function jx(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function wD(e) {
  let t = {
    velocity: Ze.velocity,
    stiffness: Ze.stiffness,
    damping: Ze.damping,
    mass: Ze.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jx(e, xD) && jx(e, yD))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        s = 2 * lr(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: Ze.mass, stiffness: o, damping: s };
    } else {
      const n = gD({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: Ze.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function uc(e = Ze.visualDuration, t = Ze.bounce) {
  const n = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0],
    l = n.keyframes[n.keyframes.length - 1],
    c = { done: !1, value: s },
    {
      stiffness: f,
      damping: d,
      mass: p,
      duration: m,
      velocity: g,
      isResolvedFromDuration: x,
    } = wD({ ...n, velocity: -xn(n.velocity || 0) }),
    b = g || 0,
    w = d / (2 * Math.sqrt(f * p)),
    S = l - s,
    C = xn(Math.sqrt(f / p)),
    A = Math.abs(S) < 5;
  (r || (r = A ? Ze.restSpeed.granular : Ze.restSpeed.default),
    o || (o = A ? Ze.restDelta.granular : Ze.restDelta.default));
  let k, O, _, I, R, F;
  if (w < 1)
    ((_ = Em(C, w)),
      (I = (b + w * C * S) / _),
      (k = (B) => {
        const q = Math.exp(-w * C * B);
        return l - q * (I * Math.sin(_ * B) + S * Math.cos(_ * B));
      }),
      (R = w * C * I + S * _),
      (F = w * C * S - I * _),
      (O = (B) => Math.exp(-w * C * B) * (R * Math.sin(_ * B) + F * Math.cos(_ * B))));
  else if (w === 1) {
    k = (q) => l - Math.exp(-C * q) * (S + (b + C * S) * q);
    const B = b + C * S;
    O = (q) => Math.exp(-C * q) * (C * B * q - b);
  } else {
    const B = C * Math.sqrt(w * w - 1);
    k = (ie) => {
      const ve = Math.exp(-w * C * ie),
        ye = Math.min(B * ie, 300);
      return l - (ve * ((b + w * C * S) * Math.sinh(ye) + B * S * Math.cosh(ye))) / B;
    };
    const q = (b + w * C * S) / B,
      U = w * C * q - S * B,
      fe = w * C * S - q * B;
    O = (ie) => {
      const ve = Math.exp(-w * C * ie),
        ye = Math.min(B * ie, 300);
      return ve * (U * Math.sinh(ye) + fe * Math.cosh(ye));
    };
  }
  const W = {
    calculatedDuration: (x && m) || null,
    velocity: (B) => on(O(B)),
    next: (B) => {
      if (!x && w < 1) {
        const U = Math.exp(-w * C * B),
          fe = Math.sin(_ * B),
          ie = Math.cos(_ * B),
          ve = l - U * (I * fe + S * ie),
          ye = on(U * (R * fe + F * ie));
        return (
          (c.done = Math.abs(ye) <= r && Math.abs(l - ve) <= o),
          (c.value = c.done ? l : ve),
          c
        );
      }
      const q = k(B);
      if (x) c.done = B >= m;
      else {
        const U = on(O(B));
        c.done = Math.abs(U) <= r && Math.abs(l - q) <= o;
      }
      return ((c.value = c.done ? l : q), c);
    },
    toString: () => {
      const B = Math.min(qv(W), lc),
        q = SC((U) => W.next(B * U).value, B, 30);
      return B + "ms " + q;
    },
    toTransition: () => {},
  };
  return W;
}
uc.applyToOptions = (e) => {
  const t = pD(e, 100, uc);
  return ((e.ease = t.ease), (e.duration = on(t.duration)), (e.type = "keyframes"), e);
};
const bD = 5;
function PC(e, t, n) {
  const r = Math.max(t - bD, 0);
  return nC(n - e(r), t - r);
}
function Cm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: s = 500,
  modifyTarget: l,
  min: c,
  max: f,
  restDelta: d = 0.5,
  restSpeed: p,
}) {
  const m = e[0],
    g = { done: !1, value: m },
    x = (F) => (c !== void 0 && F < c) || (f !== void 0 && F > f),
    b = (F) => (c === void 0 ? f : f === void 0 || Math.abs(c - F) < Math.abs(f - F) ? c : f);
  let w = n * t;
  const S = m + w,
    C = l === void 0 ? S : l(S);
  C !== S && (w = C - m);
  const A = (F) => -w * Math.exp(-F / r),
    k = (F) => C + A(F),
    O = (F) => {
      const W = A(F),
        B = k(F);
      ((g.done = Math.abs(W) <= d), (g.value = g.done ? C : B));
    };
  let _, I;
  const R = (F) => {
    x(g.value) &&
      ((_ = F),
      (I = uc({
        keyframes: [g.value, b(g.value)],
        velocity: PC(k, F, g.value),
        damping: o,
        stiffness: s,
        restDelta: d,
        restSpeed: p,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (F) => {
        let W = !1;
        return (
          !I && _ === void 0 && ((W = !0), O(F), R(F)),
          _ !== void 0 && F >= _ ? I.next(F - _) : (!W && O(F), g)
        );
      },
    }
  );
}
function SD(e, t, n) {
  const r = [],
    o = n || li.mix || bC,
    s = e.length - 1;
  for (let l = 0; l < s; l++) {
    let c = o(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || Pn : t;
      c = qs(f, c);
    }
    r.push(c);
  }
  return r;
}
function PD(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if ((zv(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const l = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const c = SD(t, r, o),
    f = c.length,
    d = (p) => {
      if (l && p < e[0]) return t[0];
      let m = 0;
      if (f > 1) for (; m < e.length - 2 && !(p < e[m + 1]); m++);
      const g = ks(e[m], e[m + 1], p);
      return c[m](g);
    };
  return n ? (p) => d(lr(e[0], e[s - 1], p)) : d;
}
function ED(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = ks(0, t, r);
    e.push(Ne(n, 1, o));
  }
}
function CD(e) {
  const t = [0];
  return (ED(t, e.length - 1), t);
}
function AD(e, t) {
  return e.map((n) => n * t);
}
function TD(e, t) {
  return e.map(() => t || fC).splice(0, e.length - 1);
}
function Es({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = NI(r) ? r.map(kx) : kx(r),
    s = { done: !1, value: t[0] },
    l = AD(n && n.length === t.length ? n : CD(t), e),
    c = PD(l, t, { ease: Array.isArray(o) ? o : TD(t, o) });
  return { calculatedDuration: e, next: (f) => ((s.value = c(f)), (s.done = f >= e), s) };
}
const kD = (e) => e !== null;
function df(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const s = e.filter(kD),
    c = o < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !c || r === void 0 ? s[c] : r;
}
const OD = { decay: Cm, inertia: Cm, tween: Es, keyframes: Es, spring: uc };
function EC(e) {
  typeof e.type == "string" && (e.type = OD[e.type]);
}
class Yv {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const _D = (e) => e / 100;
class cc extends Yv {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, o;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== zt.now() && this.tick(zt.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    EC(t);
    const { type: n = Es, repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: l = 0 } = t;
    let { keyframes: c } = t;
    const f = n || Es;
    f !== Es &&
      typeof c[0] != "number" &&
      ((this.mixKeyframes = qs(_D, bC(c[0], c[1]))), (c = [0, 100]));
    const d = f({ ...t, keyframes: c });
    (s === "mirror" &&
      (this.mirroredGenerator = f({ ...t, keyframes: [...c].reverse(), velocity: -l })),
      d.calculatedDuration === null && (d.calculatedDuration = qv(d)));
    const { calculatedDuration: p } = d;
    ((this.calculatedDuration = p),
      (this.resolvedDuration = p + o),
      (this.totalDuration = this.resolvedDuration * (r + 1) - o),
      (this.generator = d));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: o,
      mixKeyframes: s,
      mirroredGenerator: l,
      resolvedDuration: c,
      calculatedDuration: f,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: d = 0,
      keyframes: p,
      repeat: m,
      repeatType: g,
      repeatDelay: x,
      type: b,
      onUpdate: w,
      finalKeyframe: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const C = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1),
      A = this.playbackSpeed >= 0 ? C < 0 : C > o;
    ((this.currentTime = Math.max(C, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = o));
    let k = this.currentTime,
      O = r;
    if (m) {
      const F = Math.min(this.currentTime, o) / c;
      let W = Math.floor(F),
        B = F % 1;
      (!B && F >= 1 && (B = 1),
        B === 1 && W--,
        (W = Math.min(W, m + 1)),
        !!(W % 2) &&
          (g === "reverse" ? ((B = 1 - B), x && (B -= x / c)) : g === "mirror" && (O = l)),
        (k = lr(0, 1, B) * c));
    }
    let _;
    (A ? ((this.delayState.value = p[0]), (_ = this.delayState)) : (_ = O.next(k)),
      s && !A && (_.value = s(_.value)));
    let { done: I } = _;
    !A &&
      f !== null &&
      (I = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const R =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && I));
    return (
      R && b !== Cm && (_.value = df(p, this.options, S, this.speed)),
      w && w(_.value),
      R && this.finish(),
      _
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return xn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + xn(t);
  }
  get time() {
    return xn(this.currentTime);
  }
  set time(t) {
    ((t = on(t)),
      (this.currentTime = t),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = t), this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return PC((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime(zt.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = xn(this.currentTime)));
  }
  play() {
    var o, s;
    if (this.isStopped) return;
    const { driver: t = hD, startTime: n } = this.options;
    (this.driver || (this.driver = t((l) => this.tick(l))),
      (s = (o = this.options).onPlay) == null || s.call(o));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(zt.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function MD(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Ui = (e) => (e * 180) / Math.PI,
  Am = (e) => {
    const t = Ui(Math.atan2(e[1], e[0]));
    return Tm(t);
  },
  ID = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Am,
    rotateZ: Am,
    skewX: (e) => Ui(Math.atan(e[1])),
    skewY: (e) => Ui(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Tm = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Nx = Am,
  Rx = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Lx = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  DD = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Rx,
    scaleY: Lx,
    scale: (e) => (Rx(e) + Lx(e)) / 2,
    rotateX: (e) => Tm(Ui(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Tm(Ui(Math.atan2(-e[2], e[0]))),
    rotateZ: Nx,
    rotate: Nx,
    skewX: (e) => Ui(Math.atan(e[4])),
    skewY: (e) => Ui(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function km(e) {
  return e.includes("scale") ? 1 : 0;
}
function Om(e, t) {
  if (!e || e === "none") return km(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n) ((r = DD), (o = n));
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = ID), (o = c));
  }
  if (!o) return km(t);
  const s = r[t],
    l = o[1].split(",").map(ND);
  return typeof s == "function" ? s(l) : l[s];
}
const jD = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Om(n, t);
};
function ND(e) {
  return parseFloat(e.trim());
}
const pa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ma = new Set([...pa, "pathRotation"]),
  $x = (e) => e === ha || e === le,
  RD = new Set(["x", "y", "z"]),
  LD = pa.filter((e) => !RD.has(e));
function $D(e) {
  const t = [];
  return (
    LD.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ri = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Om(t, "x"),
  y: (e, { transform: t }) => Om(t, "y"),
};
ri.translateX = ri.x;
ri.translateY = ri.y;
const qi = new Set();
let _m = !1,
  Mm = !1,
  Im = !1;
function CC() {
  if (Mm) {
    const e = Array.from(qi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const o = $D(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([s, l]) => {
            var c;
            (c = r.getValue(s)) == null || c.set(l);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Mm = !1), (_m = !1), qi.forEach((e) => e.complete(Im)), qi.clear());
}
function AC() {
  qi.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Mm = !0));
  });
}
function zD() {
  ((Im = !0), AC(), CC(), (Im = !1));
}
class Gv {
  constructor(t, n, r, o, s, l = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = s),
      (this.isAsync = l));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (qi.add(this), _m || ((_m = !0), Re.read(AC), Re.resolveKeyframes(CC)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const s = o == null ? void 0 : o.get(),
        l = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const c = r.readValue(n, l);
        c != null && (t[0] = c);
      }
      (t[0] === void 0 && (t[0] = l), o && s === void 0 && o.set(t[0]));
    }
    MD(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      qi.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (qi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const FD = (e) => e.startsWith("--");
function TC(e, t, n) {
  FD(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const VD = {};
function kC(e, t) {
  const n = tC(e);
  return () => VD[t] ?? n();
}
const BD = kC(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  OC = kC(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  bs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  zx = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: bs([0, 0.65, 0.55, 1]),
    circOut: bs([0.55, 0, 1, 0.45]),
    backIn: bs([0.31, 0.01, 0.66, -0.59]),
    backOut: bs([0.33, 1.53, 0.69, 0.99]),
  };
function _C(e, t) {
  if (e)
    return typeof e == "function"
      ? OC()
        ? SC(e, t)
        : "ease-out"
      : dC(e)
        ? bs(e)
        : Array.isArray(e)
          ? e.map((n) => _C(n, t) || zx.easeOut)
          : zx[e];
}
function UD(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: s = 0,
    repeatType: l = "loop",
    ease: c = "easeOut",
    times: f,
  } = {},
  d = void 0,
) {
  const p = { [t]: n };
  f && (p.offset = f);
  const m = _C(c, o);
  Array.isArray(m) && (p.easing = m);
  const g = {
    delay: r,
    duration: o,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: s + 1,
    direction: l === "reverse" ? "alternate" : "normal",
  };
  return (d && (g.pseudoElement = d), e.animate(p, g));
}
function MC(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function WD({ type: e, ...t }) {
  return MC(e) && OC()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class IC extends Yv {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: o,
      pseudoElement: s,
      allowFlatten: l = !1,
      finalKeyframe: c,
      onComplete: f,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = l),
      (this.options = t),
      zv(typeof t.type != "string"));
    const d = WD(t);
    ((this.animation = UD(n, r, o, d, s)),
      d.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const p = df(o, this.options, c, this.speed);
          (this.updateMotionValue && this.updateMotionValue(p),
            TC(n, r, p),
            this.animation.cancel());
        }
        (f == null || f(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, o;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((o = (r = this.animation).commitStyles) == null || o.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null
        ? void 0
        : r.call(n).duration) || 0;
    return xn(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + xn(t);
  }
  get time() {
    return xn(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = on(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: o }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null || s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && BD()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          Pn)
        : o(this)
    );
  }
}
const DC = { anticipate: lC, backInOut: sC, circInOut: cC };
function KD(e) {
  return e in DC;
}
function HD(e) {
  typeof e.ease == "string" && KD(e.ease) && (e.ease = DC[e.ease]);
}
const rp = 10;
class qD extends IC {
  constructor(t) {
    (HD(t),
      EC(t),
      super(t),
      t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: o, element: s, ...l } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const c = new cc({ ...l, autoplay: !1 }),
      f = Math.max(rp, zt.now() - this.startTime),
      d = lr(0, rp, f - rp),
      p = c.sample(f).value,
      { name: m } = this.options;
    (s && m && TC(s, m, p), n.setWithVelocity(c.sample(Math.max(0, f - d)).value, p, d), c.stop());
  }
}
const Fx = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" && (zn.test(e) || e === "0") && !e.startsWith("url("))
      );
function YD(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function GD(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    l = Fx(o, t),
    c = Fx(s, t);
  return !l || !c ? !1 : YD(e) || ((n === "spring" || MC(n)) && r);
}
function Dm(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const jC = new Set(["opacity", "clipPath", "filter", "transform"]),
  XD = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ZD(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && XD.test(e[t])) return !0;
  return !1;
}
const QD = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  JD = tC(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ej(e) {
  var m;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: o,
    damping: s,
    type: l,
    keyframes: c,
  } = e;
  if (!(((m = t == null ? void 0 : t.owner) == null ? void 0 : m.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: d, transformTemplate: p } = t.owner.getProps();
  return (
    JD() &&
    n &&
    (jC.has(n) || (QD.has(n) && ZD(c))) &&
    (n !== "transform" || !p) &&
    !d &&
    !r &&
    o !== "mirror" &&
    s !== 0 &&
    l !== "inertia"
  );
}
const tj = 40;
class nj extends Yv {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: s = 0,
    repeatType: l = "loop",
    keyframes: c,
    name: f,
    motionValue: d,
    element: p,
    ...m
  }) {
    var b;
    (super(),
      (this.stop = () => {
        var w, S;
        (this._animation &&
          (this._animation.stop(), (w = this.stopTimeline) == null || w.call(this)),
          (S = this.keyframeResolver) == null || S.cancel());
      }),
      (this.createdAt = zt.now()));
    const g = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: s,
        repeatType: l,
        name: f,
        motionValue: d,
        element: p,
        ...m,
      },
      x = (p == null ? void 0 : p.KeyframeResolver) || Gv;
    ((this.keyframeResolver = new x(
      c,
      (w, S, C) => this.onKeyframesResolved(w, S, g, !C),
      f,
      d,
      p,
    )),
      (b = this.keyframeResolver) == null || b.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, o) {
    var C, A;
    this.keyframeResolver = void 0;
    const { name: s, type: l, velocity: c, delay: f, isHandoff: d, onUpdate: p } = r;
    this.resolvedAt = zt.now();
    let m = !0;
    GD(t, s, l, c) ||
      ((m = !1),
      (li.instantAnimations || !f) && (p == null || p(df(t, r, n))),
      (t[0] = t[t.length - 1]),
      Dm(r),
      (r.repeat = 0));
    const x = {
        startTime: o
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > tj
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      b = m && !d && ej(x),
      w = (A = (C = x.motionValue) == null ? void 0 : C.owner) == null ? void 0 : A.current;
    let S;
    if (b)
      try {
        S = new qD({ ...x, element: w });
      } catch {
        S = new cc(x);
      }
    else S = new cc(x);
    (S.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Pn),
      this.pendingTimeline &&
        ((this.stopTimeline = S.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = S));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation || ((t = this.keyframeResolver) == null || t.resume(), zD()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel());
  }
}
function NC(e, t, n, r = 0, o = 1) {
  const s = Array.from(e)
      .sort((d, p) => d.sortNodePosition(p))
      .indexOf(t),
    l = e.size,
    c = (l - 1) * r;
  return typeof n == "function" ? n(s, l) : o === 1 ? s * r : c - s * r;
}
const Vx = 30,
  rj = (e) => !isNaN(parseFloat(e));
class ij {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const o = zt.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current), this.dependents))
        )
          for (const l of this.dependents) l.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = zt.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = rj(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Fv());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            Re.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = zt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Vx)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Vx);
    return nC(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ta(e, t) {
  return new ij(e, t);
}
function RC(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Xv(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? RC(n, e) : n;
}
const oj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  aj = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  sj = { type: "keyframes", duration: 0.8 },
  lj = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  uj = (e, { keyframes: t }) =>
    t.length > 2 ? sj : ma.has(e) ? (e.startsWith("scale") ? aj(t[1]) : oj) : lj,
  cj = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function fj(e) {
  for (const t in e) if (!cj.has(t)) return !0;
  return !1;
}
const Zv =
    (e, t, n, r = {}, o, s) =>
    (l) => {
      const c = Xv(r, e) || {},
        f = c.delay || r.delay || 0;
      let { elapsed: d = 0 } = r;
      d = d - on(f);
      const p = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...c,
        delay: -d,
        onUpdate: (g) => {
          (t.set(g), c.onUpdate && c.onUpdate(g));
        },
        onComplete: () => {
          (l(), c.onComplete && c.onComplete());
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : o,
      };
      (fj(c) || Object.assign(p, uj(e, p)),
        p.duration && (p.duration = on(p.duration)),
        p.repeatDelay && (p.repeatDelay = on(p.repeatDelay)),
        p.from !== void 0 && (p.keyframes[0] = p.from));
      let m = !1;
      if (
        ((p.type === !1 || (p.duration === 0 && !p.repeatDelay)) &&
          (Dm(p), p.delay === 0 && (m = !0)),
        (li.instantAnimations ||
          li.skipAnimations ||
          (o != null && o.shouldSkipAnimations) ||
          c.skipAnimations) &&
          ((m = !0), Dm(p), (p.delay = 0)),
        (p.allowFlatten = !c.type && !c.ease),
        m && !s && t.get() !== void 0)
      ) {
        const g = df(p.keyframes, c);
        if (g !== void 0) {
          Re.update(() => {
            (p.onUpdate(g), p.onComplete());
          });
          return;
        }
      }
      return c.isSync ? new cc(p) : new nj(p);
    },
  dj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hj(e) {
  const t = dj.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function LC(e, t, n = 1) {
  const [r, o] = hj(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const l = s.trim();
    return QE(l) ? parseFloat(l) : l;
  }
  return Uv(o) ? LC(o, t, n + 1) : o;
}
function Bx(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Qv(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Bx(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if ((typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function")) {
    const [o, s] = Bx(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
function Yi(e, t, n) {
  const r = e.getProps();
  return Qv(r, t, n !== void 0 ? n : r.custom, e);
}
const $C = new Set(["width", "height", "top", "left", "right", "bottom", ...pa]),
  jm = (e) => Array.isArray(e);
function pj(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ta(n));
}
function mj(e) {
  return jm(e) ? e[e.length - 1] || 0 : e;
}
function vj(e, t) {
  const n = Yi(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const l in s) {
    const c = mj(s[l]);
    pj(e, l, c);
  }
}
const Tt = (e) => !!(e && e.getVelocity);
function gj(e) {
  return !!(Tt(e) && e.add);
}
function Nm(e, t) {
  const n = e.getValue("willChange");
  if (gj(n)) return n.add(t);
  if (!n && li.WillChange) {
    const r = new li.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function Jv(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const yj = "framerAppearId",
  zC = "data-" + Jv(yj);
function FC(e) {
  return e.props[zC];
}
function xj({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function VC(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: s, transitionEnd: l, ...c } = t;
  const f = e.getDefaultTransition();
  s = s ? RC(s, f) : f;
  const d = s == null ? void 0 : s.reduceMotion,
    p = s == null ? void 0 : s.skipAnimations;
  r && (s = r);
  const m = [],
    g = o && e.animationState && e.animationState.getState()[o],
    x = s == null ? void 0 : s.path;
  x && x.animateVisualElement(e, c, s, n, m);
  for (const b in c) {
    const w = e.getValue(b, e.latestValues[b] ?? null),
      S = c[b];
    if (S === void 0 || (g && xj(g, b))) continue;
    const C = { delay: n, ...Xv(s || {}, b) };
    p && (C.skipAnimations = !0);
    const A = w.get();
    if (A !== void 0 && !w.isAnimating() && !Array.isArray(S) && S === A && !C.velocity) {
      Re.update(() => w.set(S));
      continue;
    }
    let k = !1;
    if (window.MotionHandoffAnimation) {
      const I = FC(e);
      if (I) {
        const R = window.MotionHandoffAnimation(I, b, Re);
        R !== null && ((C.startTime = R), (k = !0));
      }
    }
    Nm(e, b);
    const O = d ?? e.shouldReduceMotion;
    w.start(Zv(b, w, S, O && $C.has(b) ? { type: !1 } : C, e, k));
    const _ = w.animation;
    _ && m.push(_);
  }
  if (l) {
    const b = () =>
      Re.update(() => {
        l && vj(e, l);
      });
    m.length ? Promise.all(m).then(b) : b();
  }
  return m;
}
function Rm(e, t, n = {}) {
  var f;
  const r = Yi(
    e,
    t,
    n.type === "exit" ? ((f = e.presenceContext) == null ? void 0 : f.custom) : void 0,
  );
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Promise.all(VC(e, r, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (d = 0) => {
            const { delayChildren: p = 0, staggerChildren: m, staggerDirection: g } = o;
            return wj(e, t, d, p, m, g, n);
          }
        : () => Promise.resolve(),
    { when: c } = o;
  if (c) {
    const [d, p] = c === "beforeChildren" ? [s, l] : [l, s];
    return d().then(() => p());
  } else return Promise.all([s(), l(n.delay)]);
}
function wj(e, t, n = 0, r = 0, o = 0, s = 1, l) {
  const c = [];
  for (const f of e.variantChildren)
    (f.notify("AnimationStart", t),
      c.push(
        Rm(f, t, {
          ...l,
          delay: n + (typeof r == "function" ? 0 : r) + NC(e.variantChildren, f, r, o, s),
        }).then(() => f.notify("AnimationComplete", t)),
      ));
  return Promise.all(c);
}
function bj(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => Rm(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Rm(e, t, n);
  else {
    const o = typeof t == "function" ? Yi(e, t, n.custom) : t;
    r = Promise.all(VC(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Sj = { test: (e) => e === "auto", parse: (e) => e },
  BC = (e) => (t) => t.test(e),
  UC = [ha, le, or, wr, YI, qI, Sj],
  Ux = (e) => UC.find(BC(e));
function Pj(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || eC(e) : !0;
}
const Ej = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Cj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Wv) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let s = Ej.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + o + ")");
}
const Aj = /\b([a-z-]*)\(.*?\)/gu,
  Lm = {
    ...zn,
    getAnimatableNone: (e) => {
      const t = e.match(Aj);
      return t ? t.map(Cj).join(" ") : e;
    },
  },
  $m = {
    ...zn,
    getAnimatableNone: (e) => {
      const t = zn.parse(e);
      return zn.createTransformer(e)(
        t.map((r) => (typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r)),
      );
    },
  },
  Wx = { ...ha, transform: Math.round },
  Tj = {
    rotate: wr,
    pathRotation: wr,
    rotateX: wr,
    rotateY: wr,
    rotateZ: wr,
    scale: Au,
    scaleX: Au,
    scaleY: Au,
    scaleZ: Au,
    skew: wr,
    skewX: wr,
    skewY: wr,
    distance: le,
    translateX: le,
    translateY: le,
    translateZ: le,
    x: le,
    y: le,
    z: le,
    perspective: le,
    transformPerspective: le,
    opacity: Os,
    originX: _x,
    originY: _x,
    originZ: le,
  },
  fc = {
    borderWidth: le,
    borderTopWidth: le,
    borderRightWidth: le,
    borderBottomWidth: le,
    borderLeftWidth: le,
    borderRadius: le,
    borderTopLeftRadius: le,
    borderTopRightRadius: le,
    borderBottomRightRadius: le,
    borderBottomLeftRadius: le,
    width: le,
    maxWidth: le,
    height: le,
    maxHeight: le,
    top: le,
    right: le,
    bottom: le,
    left: le,
    inset: le,
    insetBlock: le,
    insetBlockStart: le,
    insetBlockEnd: le,
    insetInline: le,
    insetInlineStart: le,
    insetInlineEnd: le,
    padding: le,
    paddingTop: le,
    paddingRight: le,
    paddingBottom: le,
    paddingLeft: le,
    paddingBlock: le,
    paddingBlockStart: le,
    paddingBlockEnd: le,
    paddingInline: le,
    paddingInlineStart: le,
    paddingInlineEnd: le,
    margin: le,
    marginTop: le,
    marginRight: le,
    marginBottom: le,
    marginLeft: le,
    marginBlock: le,
    marginBlockStart: le,
    marginBlockEnd: le,
    marginInline: le,
    marginInlineStart: le,
    marginInlineEnd: le,
    fontSize: le,
    backgroundPositionX: le,
    backgroundPositionY: le,
    ...Tj,
    zIndex: Wx,
    fillOpacity: Os,
    strokeOpacity: Os,
    numOctaves: Wx,
  },
  kj = {
    ...fc,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: Lm,
    WebkitFilter: Lm,
    mask: $m,
    WebkitMask: $m,
  },
  WC = (e) => kj[e],
  Oj = new Set([Lm, $m]);
function KC(e, t) {
  let n = WC(e);
  return (Oj.has(n) || (n = zn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
const _j = new Set(["auto", "none", "0"]);
function Mj(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o;) {
    const s = e[r];
    (typeof s == "string" && !_j.has(s) && ea(s).values.length && (o = e[r]), r++);
  }
  if (o && n) for (const s of t) e[s] = KC(n, o);
}
class Ij extends Gv {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let p = 0; p < t.length; p++) {
      let m = t[p];
      if (typeof m == "string" && ((m = m.trim()), Uv(m))) {
        const g = LC(m, n.current);
        (g !== void 0 && (t[p] = g), p === t.length - 1 && (this.finalKeyframe = m));
      }
    }
    if ((this.resolveNoneKeyframes(), !$C.has(r) || t.length !== 2)) return;
    const [o, s] = t,
      l = Ux(o),
      c = Ux(s),
      f = Ox(o),
      d = Ox(s);
    if (f !== d && ri[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (l !== c)
      if ($x(l) && $x(c))
        for (let p = 0; p < t.length; p++) {
          const m = t[p];
          typeof m == "string" && (t[p] = parseFloat(m));
        }
      else ri[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) (t[o] === null || Pj(t[o])) && r.push(o);
    r.length && Mj(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ri[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin));
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var c;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      l = r[s];
    ((r[s] = ri[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      (c = this.removedTransforms) != null &&
        c.length &&
        this.removedTransforms.forEach(([f, d]) => {
          t.getValue(f).set(d);
        }),
      this.resolveNoneKeyframes());
  }
}
function HC(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const zm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Yu(e) {
  return JE(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: eg } = hC(queueMicrotask, !1),
  Nn = { x: !1, y: !1 };
function qC() {
  return Nn.x || Nn.y;
}
function Dj(e) {
  return e === "x" || e === "y"
    ? Nn[e]
      ? null
      : ((Nn[e] = !0),
        () => {
          Nn[e] = !1;
        })
    : Nn.x || Nn.y
      ? null
      : ((Nn.x = Nn.y = !0),
        () => {
          Nn.x = Nn.y = !1;
        });
}
function YC(e, t) {
  const n = HC(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function jj(e) {
  return !(e.pointerType === "touch" || qC());
}
function Nj(e, t, n = {}) {
  const [r, o, s] = YC(e, n);
  return (
    r.forEach((l) => {
      let c = !1,
        f = !1,
        d;
      const p = () => {
          l.removeEventListener("pointerleave", b);
        },
        m = (S) => {
          (d && (d(S), (d = void 0)), p());
        },
        g = (S) => {
          ((c = !1),
            window.removeEventListener("pointerup", g),
            window.removeEventListener("pointercancel", g),
            f && ((f = !1), m(S)));
        },
        x = () => {
          ((c = !0),
            window.addEventListener("pointerup", g, o),
            window.addEventListener("pointercancel", g, o));
        },
        b = (S) => {
          if (S.pointerType !== "touch") {
            if (c) {
              f = !0;
              return;
            }
            m(S);
          }
        },
        w = (S) => {
          if (!jj(S)) return;
          f = !1;
          const C = t(l, S);
          typeof C == "function" && ((d = C), l.addEventListener("pointerleave", b, o));
        };
      (l.addEventListener("pointerenter", w, o), l.addEventListener("pointerdown", x, o));
    }),
    s
  );
}
const GC = (e, t) => (t ? (e === t ? !0 : GC(e, t.parentElement)) : !1),
  tg = (e) =>
    e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
  Rj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Lj(e) {
  return Rj.has(e.tagName) || e.isContentEditable === !0;
}
const $j = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function zj(e) {
  return $j.has(e.tagName) || e.isContentEditable === !0;
}
const Gu = new WeakSet();
function Kx(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ip(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Fj = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Kx(() => {
    if (Gu.has(n)) return;
    ip(n, "down");
    const o = Kx(() => {
        ip(n, "up");
      }),
      s = () => ip(n, "cancel");
    (n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Hx(e) {
  return tg(e) && !qC();
}
const qx = new WeakSet();
function Vj(e, t, n = {}) {
  const [r, o, s] = YC(e, n),
    l = (c) => {
      const f = c.currentTarget;
      if (!Hx(c) || qx.has(c)) return;
      (Gu.add(f), n.stopPropagation && qx.add(c));
      const d = t(f, c),
        p = (x, b) => {
          (window.removeEventListener("pointerup", m),
            window.removeEventListener("pointercancel", g),
            Gu.has(f) && Gu.delete(f),
            Hx(x) && typeof d == "function" && d(x, { success: b }));
        },
        m = (x) => {
          p(x, f === window || f === document || n.useGlobalTarget || GC(f, x.target));
        },
        g = (x) => {
          p(x, !1);
        };
      (window.addEventListener("pointerup", m, o), window.addEventListener("pointercancel", g, o));
    };
  return (
    r.forEach((c) => {
      ((n.useGlobalTarget ? window : c).addEventListener("pointerdown", l, o),
        Yu(c) &&
          (c.addEventListener("focus", (d) => Fj(d, o)),
          !Lj(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0)));
    }),
    s
  );
}
function ng(e) {
  return JE(e) && "ownerSVGElement" in e;
}
const Xu = new WeakMap();
let ei;
const XC = (e, t, n) => (r, o) =>
    o && o[0] ? o[0][e + "Size"] : ng(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
  Bj = XC("inline", "width", "offsetWidth"),
  Uj = XC("block", "height", "offsetHeight");
function Wj({ target: e, borderBoxSize: t }) {
  var n;
  (n = Xu.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return Bj(e, t);
        },
        get height() {
          return Uj(e, t);
        },
      });
    });
}
function Kj(e) {
  e.forEach(Wj);
}
function Hj() {
  typeof ResizeObserver > "u" || (ei = new ResizeObserver(Kj));
}
function qj(e, t) {
  ei || Hj();
  const n = HC(e);
  return (
    n.forEach((r) => {
      let o = Xu.get(r);
      (o || ((o = new Set()), Xu.set(r, o)), o.add(t), ei == null || ei.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const o = Xu.get(r);
        (o == null || o.delete(t), (o != null && o.size) || ei == null || ei.unobserve(r));
      });
    }
  );
}
const Zu = new Set();
let qo;
function Yj() {
  ((qo = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Zu.forEach((t) => t(e));
  }),
    window.addEventListener("resize", qo));
}
function Gj(e) {
  return (
    Zu.add(e),
    qo || Yj(),
    () => {
      (Zu.delete(e),
        !Zu.size &&
          typeof qo == "function" &&
          (window.removeEventListener("resize", qo), (qo = void 0)));
    }
  );
}
function Yx(e, t) {
  return typeof e == "function" ? Gj(e) : qj(e, t);
}
function Xj(e) {
  return ng(e) && e.tagName === "svg";
}
const Zj = [...UC, nt, zn],
  Qj = (e) => Zj.find(BC(e)),
  Gx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Yo = () => ({ x: Gx(), y: Gx() }),
  Xx = () => ({ min: 0, max: 0 }),
  st = () => ({ x: Xx(), y: Xx() }),
  Jj = new WeakMap();
function hf(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function _s(e) {
  return typeof e == "string" || Array.isArray(e);
}
const rg = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  ig = ["initial", ...rg];
function pf(e) {
  return hf(e.animate) || ig.some((t) => _s(e[t]));
}
function ZC(e) {
  return !!(pf(e) || e.variants);
}
function eN(e, t, n) {
  for (const r in t) {
    const o = t[r],
      s = n[r];
    if (Tt(o)) e.addValue(r, o);
    else if (Tt(s)) e.addValue(r, ta(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const l = e.getValue(r);
        l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o);
      } else {
        const l = e.getStaticValue(r);
        e.addValue(r, ta(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Fm = { current: null },
  QC = { current: !1 },
  tN = typeof window < "u";
function nN() {
  if (((QC.current = !0), !!tN))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Fm.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Fm.current = !1;
}
const Zx = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let dc = {};
function JC(e) {
  dc = e;
}
function rN() {
  return dc;
}
class iN {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      skipAnimations: s,
      blockInitialAnimation: l,
      visualState: c,
    },
    f = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Gv),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = zt.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), Re.render(this.render, !1, !0));
      }));
    const { latestValues: d, renderState: p } = c;
    ((this.latestValues = d),
      (this.baseTarget = { ...d }),
      (this.initialValues = n.initial ? { ...d } : {}),
      (this.renderState = p),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.skipAnimationsConfig = s),
      (this.options = f),
      (this.blockInitialAnimation = !!l),
      (this.isControllingVariants = pf(n)),
      (this.isVariantNode = ZC(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: m, ...g } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const x in g) {
      const b = g[x];
      d[x] !== void 0 && Tt(b) && b.set(d[x]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        ((n = this.values.get(o)) == null || n.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = t),
      Jj.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, s) => this.bindToMotionValue(s, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (QC.current || nN(), (this.shouldReduceMotion = Fm.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      ui(this.notifyUpdate),
      ui(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && jC.has(t) && this.current instanceof HTMLElement)
    ) {
      const { factory: l, keyframes: c, times: f, ease: d, duration: p } = n.accelerate,
        m = new IC({
          element: this.current,
          name: t,
          keyframes: c,
          times: f,
          ease: d,
          duration: on(p),
        }),
        g = l(m);
      this.valueSubscriptions.set(t, () => {
        (g(), m.cancel());
      });
      return;
    }
    const r = ma.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (l) => {
      ((this.latestValues[t] = l),
        this.props.onUpdate && Re.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (o(), s && s());
      }));
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in dc) {
      const n = dc[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : st();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Zx.length; r++) {
      const o = Zx[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o,
        l = t[s];
      l && (this.propEventSubscriptions[o] = this.on(o, l));
    }
    ((this.prevMotionValues = eN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t));
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ta(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (QE(r) || eC(r))
          ? (r = parseFloat(r))
          : !Qj(r) && zn.test(n) && (r = KC(t, n)),
        this.setBaseTarget(t, Tt(r) ? r.get() : r)),
      Tt(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const l = Qv(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      l && (r = l[t]);
    }
    if (n && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Tt(o)
      ? o
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (this.events[t] || (this.events[t] = new Fv()), this.events[t].add(n));
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    eg.render(this.render);
  }
}
class eA extends iN {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Ij));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Tt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class di {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function tA({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function oN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function aN(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function op(e) {
  return e === void 0 || e === 1;
}
function Vm({ scale: e, scaleX: t, scaleY: n }) {
  return !op(e) || !op(t) || !op(n);
}
function $i(e) {
  return Vm(e) || nA(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function nA(e) {
  return Qx(e.x) || Qx(e.y);
}
function Qx(e) {
  return e && e !== "0%";
}
function hc(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Jx(e, t, n, r, o) {
  return (o !== void 0 && (e = hc(e, o, r)), hc(e, n, r) + t);
}
function Bm(e, t = 0, n = 1, r, o) {
  ((e.min = Jx(e.min, t, n, r, o)), (e.max = Jx(e.max, t, n, r, o)));
}
function rA(e, { x: t, y: n }) {
  (Bm(e.x, t.translate, t.scale, t.originPoint), Bm(e.y, n.translate, n.scale, n.originPoint));
}
const ew = 0.999999999999,
  tw = 1.0000000000001;
function sN(e, t, n, r = !1) {
  var c;
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let s, l;
  for (let f = 0; f < o; f++) {
    ((s = n[f]), (l = s.projectionDelta));
    const { visualElement: d } = s.options;
    (d && d.props.style && d.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (tr(e.x, -s.scroll.offset.x), tr(e.y, -s.scroll.offset.y)),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), rA(e, l)),
      r &&
        $i(s.latestValues) &&
        Qu(e, s.latestValues, (c = s.layout) == null ? void 0 : c.layoutBox));
  }
  (t.x < tw && t.x > ew && (t.x = 1), t.y < tw && t.y > ew && (t.y = 1));
}
function tr(e, t) {
  ((e.min += t), (e.max += t));
}
function nw(e, t, n, r, o = 0.5) {
  const s = Ne(e.min, e.max, o);
  Bm(e, t, n, s, r);
}
function rw(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Qu(e, t, n) {
  const r = n ?? e;
  (nw(e.x, rw(t.x, r.x), t.scaleX, t.scale, t.originX),
    nw(e.y, rw(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function iA(e, t) {
  return tA(aN(e.getBoundingClientRect(), t));
}
function lN(e, t, n) {
  const r = iA(e, n),
    { scroll: o } = t;
  return (o && (tr(r.x, o.offset.x), tr(r.y, o.offset.y)), r);
}
const uN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  cN = pa.length;
function fN(e, t, n) {
  let r = "",
    o = !0;
  for (let l = 0; l < cN; l++) {
    const c = pa[l],
      f = e[c];
    if (f === void 0) continue;
    let d = !0;
    if (typeof f == "number") d = f === (c.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(f);
      d = c.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!d || n) {
      const p = zm(f, fc[c]);
      if (!d) {
        o = !1;
        const m = uN[c] || c;
        r += `${m}(${p}) `;
      }
      n && (t[c] = p);
    }
  }
  const s = e.pathRotation;
  return (
    s && ((o = !1), (r += `rotate(${zm(s, fc.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, o ? "" : r)) : o && (r = "none"),
    r
  );
}
function og(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let l = !1,
    c = !1;
  for (const f in t) {
    const d = t[f];
    if (ma.has(f)) {
      l = !0;
      continue;
    } else if (mC(f)) {
      o[f] = d;
      continue;
    } else {
      const p = zm(d, fc[f]);
      f.startsWith("origin") ? ((c = !0), (s[f] = p)) : (r[f] = p);
    }
  }
  if (
    (t.transform ||
      (l || n ? (r.transform = fN(t, e.transform, n)) : r.transform && (r.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = s;
    r.transformOrigin = `${f} ${d} ${p}`;
  }
}
function oA(e, { style: t, vars: n }, r, o) {
  const s = e.style;
  let l;
  for (l in t) s[l] = t[l];
  o == null || o.applyProjectionStyles(s, r);
  for (l in n) s.setProperty(l, n[l]);
}
function iw(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (le.test(e)) e = parseFloat(e);
        else return e;
      const n = iw(e, t.target.x),
        r = iw(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  dN = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = zn.parse(e);
      if (o.length > 5) return r;
      const s = zn.createTransformer(e),
        l = typeof o[0] != "number" ? 1 : 0,
        c = n.x.scale * t.x,
        f = n.y.scale * t.y;
      ((o[0 + l] /= c), (o[1 + l] /= f));
      const d = Ne(c, f, 0.5);
      return (
        typeof o[2 + l] == "number" && (o[2 + l] /= d),
        typeof o[3 + l] == "number" && (o[3 + l] /= d),
        s(o)
      );
    },
  },
  Um = {
    borderRadius: {
      ...fs,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fs,
    borderTopRightRadius: fs,
    borderBottomLeftRadius: fs,
    borderBottomRightRadius: fs,
    boxShadow: dN,
  };
function aA(e, { layout: t, layoutId: n }) {
  return (
    ma.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!Um[e] || e === "opacity"))
  );
}
function ag(e, t, n) {
  var l;
  const r = e.style,
    o = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const c in r)
    (Tt(r[c]) ||
      (o && Tt(o[c])) ||
      aA(c, e) ||
      ((l = n == null ? void 0 : n.getValue(c)) == null ? void 0 : l.liveStyle) !== void 0) &&
      (s[c] = r[c]);
  return s;
}
function hN(e) {
  return window.getComputedStyle(e);
}
class pN extends eA {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = oA));
  }
  readValueFromInstance(t, n) {
    var r;
    if (ma.has(n)) return (r = this.projection) != null && r.isProjecting ? km(n) : jD(t, n);
    {
      const o = hN(t),
        s = (mC(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return iA(t, n);
  }
  build(t, n, r) {
    og(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ag(t, n, r);
  }
}
const mN = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  vN = { offset: "strokeDashoffset", array: "strokeDasharray" };
function gN(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? mN : vN;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const yN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function sA(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: o, pathSpacing: s = 1, pathOffset: l = 0, ...c },
  f,
  d,
  p,
) {
  if ((og(e, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: m, style: g } = e;
  (m.transform && ((g.transform = m.transform), delete m.transform),
    (g.transform || m.transformOrigin) &&
      ((g.transformOrigin = m.transformOrigin ?? "50% 50%"), delete m.transformOrigin),
    g.transform &&
      ((g.transformBox = (p == null ? void 0 : p.transformBox) ?? "fill-box"),
      delete m.transformBox));
  for (const x of yN) m[x] !== void 0 && ((g[x] = m[x]), delete m[x]);
  (t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    o !== void 0 && gN(m, o, s, l, !1));
}
const lA = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  uA = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xN(e, t, n, r) {
  oA(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(lA.has(o) ? o : Jv(o), t.attrs[o]);
}
function cA(e, t, n) {
  const r = ag(e, t, n);
  for (const o in e)
    if (Tt(e[o]) || Tt(t[o])) {
      const s = pa.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
class wN extends eA {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = st));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ma.has(n)) {
      const r = WC(n);
      return (r && r.default) || 0;
    }
    return ((n = lA.has(n) ? n : Jv(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return cA(t, n, r);
  }
  build(t, n, r) {
    sA(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    xN(t, n, r, o);
  }
  mount(t) {
    ((this.isSVGTag = uA(t.tagName)), super.mount(t));
  }
}
const bN = ig.length;
function fA(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? fA(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < bN; n++) {
    const r = ig[n],
      o = e.props[r];
    (_s(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function dA(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const SN = [...rg].reverse(),
  PN = rg.length;
function EN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => bj(e, n, r)));
}
function CN(e) {
  let t = EN(e),
    n = ow(),
    r = !0,
    o = !1;
  const s = (d) => (p, m) => {
    var x;
    const g = Yi(
      e,
      m,
      d === "exit" ? ((x = e.presenceContext) == null ? void 0 : x.custom) : void 0,
    );
    if (g) {
      const { transition: b, transitionEnd: w, ...S } = g;
      p = { ...p, ...S, ...w };
    }
    return p;
  };
  function l(d) {
    t = d(e);
  }
  function c(d) {
    const { props: p } = e,
      m = fA(e.parent) || {},
      g = [],
      x = new Set();
    let b = {},
      w = 1 / 0;
    for (let C = 0; C < PN; C++) {
      const A = SN[C],
        k = n[A],
        O = p[A] !== void 0 ? p[A] : m[A],
        _ = _s(O),
        I = A === d ? k.isActive : null;
      I === !1 && (w = C);
      let R = O === m[A] && O !== p[A] && _;
      if (
        (R && (r || o) && e.manuallyAnimateOnMount && (R = !1),
        (k.protectedKeys = { ...b }),
        (!k.isActive && I === null) || (!O && !k.prevProp) || hf(O) || typeof O == "boolean")
      )
        continue;
      if (A === "exit" && k.isActive && I !== !0) {
        k.prevResolvedValues && (b = { ...b, ...k.prevResolvedValues });
        continue;
      }
      const F = AN(k.prevProp, O);
      let W = F || (A === d && k.isActive && !R && _) || (C > w && _),
        B = !1;
      const q = Array.isArray(O) ? O : [O];
      let U = q.reduce(s(A), {});
      I === !1 && (U = {});
      const { prevResolvedValues: fe = {} } = k,
        ie = { ...fe, ...U },
        ve = (H) => {
          ((W = !0), x.has(H) && ((B = !0), x.delete(H)), (k.needsAnimating[H] = !0));
          const ne = e.getValue(H);
          ne && (ne.liveStyle = !1);
        };
      for (const H in ie) {
        const ne = U[H],
          X = fe[H];
        if (b.hasOwnProperty(H)) continue;
        let j = !1;
        (jm(ne) && jm(X) ? (j = !dA(ne, X) || F) : (j = ne !== X),
          j
            ? ne != null
              ? ve(H)
              : x.add(H)
            : ne !== void 0 && x.has(H)
              ? ve(H)
              : (k.protectedKeys[H] = !0));
      }
      ((k.prevProp = O),
        (k.prevResolvedValues = U),
        k.isActive && (b = { ...b, ...U }),
        (r || o) && e.blockInitialAnimation && (W = !1));
      const ye = R && F;
      W &&
        (!ye || B) &&
        g.push(
          ...q.map((H) => {
            const ne = { type: A };
            if (typeof H == "string" && (r || o) && !ye && e.manuallyAnimateOnMount && e.parent) {
              const { parent: X } = e,
                j = Yi(X, H);
              if (X.enteringChildren && j) {
                const { delayChildren: K } = j.transition || {};
                ne.delay = NC(X.enteringChildren, e, K);
              }
            }
            return { animation: H, options: ne };
          }),
        );
    }
    if (x.size) {
      const C = {};
      if (typeof p.initial != "boolean") {
        const A = Yi(e, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        A && A.transition && (C.transition = A.transition);
      }
      (x.forEach((A) => {
        const k = e.getBaseTarget(A),
          O = e.getValue(A);
        (O && (O.liveStyle = !0), (C[A] = k ?? null));
      }),
        g.push({ animation: C }));
    }
    let S = !!g.length;
    return (
      r && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (S = !1),
      (r = !1),
      (o = !1),
      S ? t(g) : Promise.resolve()
    );
  }
  function f(d, p) {
    var g;
    if (n[d].isActive === p) return Promise.resolve();
    ((g = e.variantChildren) == null ||
      g.forEach((x) => {
        var b;
        return (b = x.animationState) == null ? void 0 : b.setActive(d, p);
      }),
      (n[d].isActive = p));
    const m = c(d);
    for (const x in n) n[x].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: c,
    setActive: f,
    setAnimateFunction: l,
    getState: () => n,
    reset: () => {
      ((n = ow()), (o = !0));
    },
  };
}
function AN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dA(t, e) : !1;
}
function Di(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ow() {
  return {
    animate: Di(!0),
    whileInView: Di(),
    whileHover: Di(),
    whileTap: Di(),
    whileDrag: Di(),
    whileFocus: Di(),
    exit: Di(),
  };
}
function Wm(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function jn(e, t) {
  (Wm(e.x, t.x), Wm(e.y, t.y));
}
function aw(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const hA = 1e-4,
  TN = 1 - hA,
  kN = 1 + hA,
  pA = 0.01,
  ON = 0 - pA,
  _N = 0 + pA;
function Ft(e) {
  return e.max - e.min;
}
function MN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function sw(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Ne(t.min, t.max, e.origin)),
    (e.scale = Ft(n) / Ft(t)),
    (e.translate = Ne(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= TN && e.scale <= kN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= ON && e.translate <= _N) || isNaN(e.translate)) && (e.translate = 0));
}
function Cs(e, t, n, r) {
  (sw(e.x, t.x, n.x, r ? r.originX : void 0), sw(e.y, t.y, n.y, r ? r.originY : void 0));
}
function lw(e, t, n, r = 0) {
  const o = r ? Ne(n.min, n.max, r) : n.min;
  ((e.min = o + t.min), (e.max = e.min + Ft(t)));
}
function IN(e, t, n, r) {
  (lw(e.x, t.x, n.x, r == null ? void 0 : r.x), lw(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function uw(e, t, n, r = 0) {
  const o = r ? Ne(n.min, n.max, r) : n.min;
  ((e.min = t.min - o), (e.max = e.min + Ft(t)));
}
function pc(e, t, n, r) {
  (uw(e.x, t.x, n.x, r == null ? void 0 : r.x), uw(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function cw(e, t, n, r, o) {
  return ((e -= t), (e = hc(e, 1 / n, r)), o !== void 0 && (e = hc(e, 1 / o, r)), e);
}
function DN(e, t = 0, n = 1, r = 0.5, o, s = e, l = e) {
  if (
    (or.test(t) && ((t = parseFloat(t)), (t = Ne(l.min, l.max, t / 100) - l.min)),
    typeof t != "number")
  )
    return;
  let c = Ne(s.min, s.max, r);
  (e === s && (c -= t), (e.min = cw(e.min, t, n, c, o)), (e.max = cw(e.max, t, n, c, o)));
}
function fw(e, t, [n, r, o], s, l) {
  DN(e, t[n], t[r], t[o], t.scale, s, l);
}
const jN = ["x", "scaleX", "originX"],
  NN = ["y", "scaleY", "originY"];
function dw(e, t, n, r) {
  (fw(e.x, t, jN, n ? n.x : void 0, r ? r.x : void 0),
    fw(e.y, t, NN, n ? n.y : void 0, r ? r.y : void 0));
}
function hw(e) {
  return e.translate === 0 && e.scale === 1;
}
function mA(e) {
  return hw(e.x) && hw(e.y);
}
function pw(e, t) {
  return e.min === t.min && e.max === t.max;
}
function RN(e, t) {
  return pw(e.x, t.x) && pw(e.y, t.y);
}
function mw(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function vA(e, t) {
  return mw(e.x, t.x) && mw(e.y, t.y);
}
function vw(e) {
  return Ft(e.x) / Ft(e.y);
}
function gw(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function er(e) {
  return [e("x"), e("y")];
}
function LN(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    s = e.y.translate / t.y,
    l = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || s || l) && (r = `translate3d(${o}px, ${s}px, ${l}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: d,
      rotate: p,
      pathRotation: m,
      rotateX: g,
      rotateY: x,
      skewX: b,
      skewY: w,
    } = n;
    (d && (r = `perspective(${d}px) ${r}`),
      p && (r += `rotate(${p}deg) `),
      m && (r += `rotate(${m}deg) `),
      g && (r += `rotateX(${g}deg) `),
      x && (r += `rotateY(${x}deg) `),
      b && (r += `skewX(${b}deg) `),
      w && (r += `skewY(${w}deg) `));
  }
  const c = e.x.scale * t.x,
    f = e.y.scale * t.y;
  return ((c !== 1 || f !== 1) && (r += `scale(${c}, ${f})`), r || "none");
}
const gA = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  $N = gA.length,
  yw = (e) => (typeof e == "string" ? parseFloat(e) : e),
  xw = (e) => typeof e == "number" || le.test(e);
function zN(e, t, n, r, o, s) {
  o
    ? ((e.opacity = Ne(0, n.opacity ?? 1, FN(r))), (e.opacityExit = Ne(t.opacity ?? 1, 0, VN(r))))
    : s && (e.opacity = Ne(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let l = 0; l < $N; l++) {
    const c = gA[l];
    let f = ww(t, c),
      d = ww(n, c);
    if (f === void 0 && d === void 0) continue;
    (f || (f = 0),
      d || (d = 0),
      f === 0 || d === 0 || xw(f) === xw(d)
        ? ((e[c] = Math.max(Ne(yw(f), yw(d), r), 0)), (or.test(d) || or.test(f)) && (e[c] += "%"))
        : (e[c] = d));
  }
  (t.rotate || n.rotate) && (e.rotate = Ne(t.rotate || 0, n.rotate || 0, r));
}
function ww(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const FN = yA(0, 0.5, uC),
  VN = yA(0.5, 0.95, Pn);
function yA(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ks(e, t, r)));
}
function BN(e, t, n) {
  const r = Tt(e) ? e : ta(e);
  return (r.start(Zv("", r, t, n)), r.animation);
}
function Ms(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const UN = (e, t) => e.depth - t.depth;
class WN {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    ($v(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (ac(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(UN), (this.isDirty = !1), this.children.forEach(t));
  }
}
function KN(e, t) {
  const n = zt.now(),
    r = ({ timestamp: o }) => {
      const s = o - n;
      s >= t && (ui(r), e(s - t));
    };
  return (Re.setup(r, !0), () => ui(r));
}
function Ju(e) {
  return Tt(e) ? e.get() : e;
}
class HN {
  constructor() {
    this.members = [];
  }
  add(t) {
    $v(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const o = r.instance;
      (!o || o.isConnected === !1) && !r.snapshot && (ac(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if ((ac(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1 && ((n = o.instance) == null ? void 0 : n.isConnected) !== !1)
        return (this.promote(o), !0);
    }
    return !1;
  }
  promote(t, n) {
    var o;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: l } = t.options;
      ((s === void 0 || s !== l) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (o = t.root) != null && o.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, s, l;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (l = (o = t.resumingFrom) == null ? void 0 : (s = o.options).onExitComplete) == null ||
          l.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ec = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  ap = ["", "X", "Y", "Z"],
  qN = 1e3;
let YN = 0;
function sp(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xA(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = FC(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Re, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xA(r);
}
function wA({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(l = {}, c = t == null ? void 0 : t()) {
      ((this.id = YN++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(ZN),
            this.nodes.forEach(rR),
            this.nodes.forEach(iR),
            this.nodes.forEach(QN));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = c ? c.root || c : this),
        (this.path = c ? [...c.path, c] : []),
        (this.parent = c),
        (this.depth = c ? c.depth + 1 : 0));
      for (let f = 0; f < this.path.length; f++) this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new WN());
    }
    addEventListener(l, c) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new Fv()),
        this.eventHandlers.get(l).add(c)
      );
    }
    notifyListeners(l, ...c) {
      const f = this.eventHandlers.get(l);
      f && f.notify(...c);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    mount(l) {
      if (this.instance) return;
      ((this.isSVG = ng(l) && !Xj(l)), (this.instance = l));
      const { layoutId: c, layout: f, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (f || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let p,
          m = 0;
        const g = () => (this.root.updateBlockedByResize = !1);
        (Re.read(() => {
          m = window.innerWidth;
        }),
          e(l, () => {
            const x = window.innerWidth;
            x !== m &&
              ((m = x),
              (this.root.updateBlockedByResize = !0),
              p && p(),
              (p = KN(g, 250)),
              ec.hasAnimatedSinceResize &&
                ((ec.hasAnimatedSinceResize = !1), this.nodes.forEach(Pw)));
          }));
      }
      (c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          d &&
          (c || f) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: p, hasLayoutChanged: m, hasRelativeLayoutChanged: g, layout: x }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const b = this.options.transition || d.getDefaultTransition() || uR,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: S } = d.getProps(),
                C = !this.targetLayout || !vA(this.targetLayout, x),
                A = !m && g;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                A ||
                (m && (C || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const k = { ...Xv(b, "layout"), onPlay: w, onComplete: S };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k),
                  this.setAnimationOrigin(p, A, k.path));
              } else
                (m || Pw(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = x;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const l = this.getStack();
      (l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ui(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(oR), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xA(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        ((m.shouldResetTransform = !0),
          (typeof m.latestValues.x == "string" || typeof m.latestValues.y == "string") &&
            (m.isLayoutDirty = !0),
          m.updateScroll("snapshot"),
          m.options.layoutRoot && m.willUpdate(!1));
      }
      const { layoutId: c, layout: f } = this.options;
      if (c === void 0 && !f) return;
      const d = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const f = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          f && this.nodes.forEach(eR),
          this.nodes.forEach(bw));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Sw);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(tR),
            this.nodes.forEach(nR),
            this.nodes.forEach(GN),
            this.nodes.forEach(XN))
          : this.nodes.forEach(Sw),
        this.clearAllSnapshots());
      const c = zt.now();
      ((Et.delta = lr(0, 1e3 / 60, c - Et.timestamp)),
        (Et.timestamp = c),
        (Et.isProcessing = !0),
        Qh.update.process(Et),
        Qh.preRender.process(Et),
        Qh.render.process(Et),
        (Et.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), eg.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(JN), this.sharedNodes.forEach(aR));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Re.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Re.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ft(this.snapshot.measuredBox.x) &&
          !Ft(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let f = 0; f < this.path.length; f++) this.path[f].updateScroll();
      const l = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = st()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: c } = this.options;
      c && c.notify("LayoutMeasure", this.layout.layoutBox, l ? l.layoutBox : void 0);
    }
    updateScroll(l = "measure") {
      let c = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === l &&
          (c = !1),
        c && this.instance)
      ) {
        const f = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: f,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : f,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        c = this.projectionDelta && !mA(this.projectionDelta),
        f = this.getTransformTemplate(),
        d = f ? f(this.latestValues, "") : void 0,
        p = d !== this.prevTransformTemplateValue;
      l &&
        this.instance &&
        (c || $i(this.latestValues) || p) &&
        (o(this.instance, d), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(l = !0) {
      const c = this.measurePageBox();
      let f = this.removeElementScroll(c);
      return (
        l && (f = this.removeTransform(f)),
        cR(f),
        {
          animationId: this.root.animationId,
          measuredBox: c,
          layoutBox: f,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var d;
      const { visualElement: l } = this.options;
      if (!l) return st();
      const c = l.measureViewportBox();
      if (!(((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(fR))) {
        const { scroll: p } = this.root;
        p && (tr(c.x, p.offset.x), tr(c.y, p.offset.y));
      }
      return c;
    }
    removeElementScroll(l) {
      var f;
      const c = st();
      if ((jn(c, l), (f = this.scroll) != null && f.wasRoot)) return c;
      for (let d = 0; d < this.path.length; d++) {
        const p = this.path[d],
          { scroll: m, options: g } = p;
        p !== this.root &&
          m &&
          g.layoutScroll &&
          (m.wasRoot && jn(c, l), tr(c.x, m.offset.x), tr(c.y, m.offset.y));
      }
      return c;
    }
    applyTransform(l, c = !1, f) {
      var p, m;
      const d = f || st();
      jn(d, l);
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        (!c &&
          x.options.layoutScroll &&
          x.scroll &&
          x !== x.root &&
          (tr(d.x, -x.scroll.offset.x), tr(d.y, -x.scroll.offset.y)),
          $i(x.latestValues) &&
            Qu(d, x.latestValues, (p = x.layout) == null ? void 0 : p.layoutBox));
      }
      return (
        $i(this.latestValues) &&
          Qu(d, this.latestValues, (m = this.layout) == null ? void 0 : m.layoutBox),
        d
      );
    }
    removeTransform(l) {
      var f;
      const c = st();
      jn(c, l);
      for (let d = 0; d < this.path.length; d++) {
        const p = this.path[d];
        if (!$i(p.latestValues)) continue;
        let m;
        (p.instance &&
          (Vm(p.latestValues) && p.updateSnapshot(), (m = st()), jn(m, p.measurePageBox())),
          dw(c, p.latestValues, (f = p.snapshot) == null ? void 0 : f.layoutBox, m));
      }
      return ($i(this.latestValues) && dw(c, this.latestValues), c);
    }
    setTargetDelta(l) {
      ((this.targetDelta = l), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Et.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var x;
      const c = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty));
      const f = !!this.resumingFrom || this !== c;
      if (!(
        l ||
        (f && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((x = this.parent) != null && x.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: p, layoutId: m } = this.options;
      if (!this.layout || !(p || m)) return;
      this.resolvedRelativeTargetAt = Et.timestamp;
      const g = this.getClosestProjectingParent();
      (g &&
        this.linkedParentVersion !== g.layoutVersion &&
        !g.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && g && g.layout
            ? this.createRelativeTarget(g, this.layout.layoutBox, g.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = st()), (this.targetWithTransforms = st())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              IN(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : jn(this.target, this.layout.layoutBox),
                rA(this.target, this.targetDelta))
              : jn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(g, this.target, g.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Vm(this.parent.latestValues) || nA(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(l, c, f) {
      ((this.relativeParent = l),
        (this.linkedParentVersion = l.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = st()),
        (this.relativeTargetOrigin = st()),
        pc(this.relativeTargetOrigin, c, f, this.options.layoutAnchor || void 0),
        jn(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var b;
      const l = this.getLead(),
        c = !!this.resumingFrom || this !== l;
      let f = !0;
      if (
        ((this.isProjectionDirty || ((b = this.parent) != null && b.isProjectionDirty)) && (f = !1),
        c && (this.isSharedProjectionDirty || this.isTransformDirty) && (f = !1),
        this.resolvedRelativeTargetAt === Et.timestamp && (f = !1),
        f)
      )
        return;
      const { layout: d, layoutId: p } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || p))
      )
        return;
      jn(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x,
        g = this.treeScale.y;
      (sN(this.layoutCorrected, this.treeScale, this.path, c),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = st())));
      const { target: x } = l;
      if (!x) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (aw(this.prevProjectionDelta.x, this.projectionDelta.x),
          aw(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Cs(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== m ||
          this.treeScale.y !== g ||
          !gw(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !gw(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      var c;
      if (((c = this.options.visualElement) == null || c.scheduleRender(), l)) {
        const f = this.getStack();
        f && f.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Yo()),
        (this.projectionDelta = Yo()),
        (this.projectionDeltaWithTransform = Yo()));
    }
    setAnimationOrigin(l, c = !1, f) {
      const d = this.snapshot,
        p = d ? d.latestValues : {},
        m = { ...this.latestValues },
        g = Yo();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !c));
      const x = st(),
        b = d ? d.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        S = b !== w,
        C = this.getStack(),
        A = !C || C.members.length <= 1,
        k = !!(S && !A && this.options.crossfade === !0 && !this.path.some(lR));
      this.animationProgress = 0;
      let O;
      const _ = f == null ? void 0 : f.interpolateProjection(l);
      ((this.mixTargetDelta = (I) => {
        const R = I / 1e3,
          F = _ == null ? void 0 : _(R);
        (F
          ? ((g.x.translate = F.x),
            (g.x.scale = Ne(l.x.scale, 1, R)),
            (g.x.origin = l.x.origin),
            (g.x.originPoint = l.x.originPoint),
            (g.y.translate = F.y),
            (g.y.scale = Ne(l.y.scale, 1, R)),
            (g.y.origin = l.y.origin),
            (g.y.originPoint = l.y.originPoint))
          : (Ew(g.x, l.x, R), Ew(g.y, l.y, R)),
          this.setTargetDelta(g),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pc(
              x,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            sR(this.relativeTarget, this.relativeTargetOrigin, x, R),
            O && RN(this.relativeTarget, O) && (this.isProjectionDirty = !1),
            O || (O = st()),
            jn(O, this.relativeTarget)),
          S && ((this.animationValues = m), zN(m, p, this.latestValues, R, k, A)),
          F &&
            F.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = m),
            (this.animationValues.pathRotation = F.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = R));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(l) {
      var c, f, d;
      (this.notifyListeners("animationStart"),
        (c = this.currentAnimation) == null || c.stop(),
        (d = (f = this.resumingFrom) == null ? void 0 : f.currentAnimation) == null || d.stop(),
        this.pendingAnimation && (ui(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Re.update(() => {
          ((ec.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ta(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = BN(this.motionValue, [0, 1e3], {
              ...l,
              velocity: 0,
              isSync: !0,
              onUpdate: (p) => {
                (this.mixTargetDelta(p), l.onUpdate && l.onUpdate(p));
              },
              onStop: () => {},
              onComplete: () => {
                (l.onComplete && l.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const l = this.getStack();
      (l && l.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qN), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: c, target: f, layout: d, latestValues: p } = l;
      if (!(!c || !f || !d)) {
        if (
          this !== l &&
          this.layout &&
          d &&
          bA(this.options.animationType, this.layout.layoutBox, d.layoutBox)
        ) {
          f = this.target || st();
          const m = Ft(this.layout.layoutBox.x);
          ((f.x.min = l.target.x.min), (f.x.max = f.x.min + m));
          const g = Ft(this.layout.layoutBox.y);
          ((f.y.min = l.target.y.min), (f.y.max = f.y.min + g));
        }
        (jn(c, f), Qu(c, p), Cs(this.projectionDeltaWithTransform, this.layoutCorrected, c, p));
      }
    }
    registerSharedNode(l, c) {
      (this.sharedNodes.has(l) || this.sharedNodes.set(l, new HN()),
        this.sharedNodes.get(l).add(c));
      const d = c.options.initialPromotionConfig;
      c.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity:
          d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(c) : void 0,
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: l } = this.options;
      return l ? ((c = this.getStack()) == null ? void 0 : c.lead) || this : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: l } = this.options;
      return l ? ((c = this.getStack()) == null ? void 0 : c.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l) return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: c, preserveFollowOpacity: f } = {}) {
      const d = this.getStack();
      (d && d.promote(this, f),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        c && this.setOptions({ transition: c }));
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: l } = this.options;
      if (!l) return;
      let c = !1;
      const { latestValues: f } = l;
      if (
        ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (c = !0),
        !c)
      )
        return;
      const d = {};
      f.z && sp("z", l, d, this.animationValues);
      for (let p = 0; p < ap.length; p++)
        (sp(`rotate${ap[p]}`, l, d, this.animationValues),
          sp(`skew${ap[p]}`, l, d, this.animationValues));
      l.render();
      for (const p in d)
        (l.setStaticValue(p, d[p]), this.animationValues && (this.animationValues[p] = d[p]));
      l.scheduleRender();
    }
    applyProjectionStyles(l, c) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        l.visibility = "hidden";
        return;
      }
      const f = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (l.visibility = ""),
          (l.opacity = ""),
          (l.pointerEvents = Ju(c == null ? void 0 : c.pointerEvents) || ""),
          (l.transform = f ? f(this.latestValues, "") : "none"));
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        (this.options.layoutId &&
          ((l.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (l.pointerEvents = Ju(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !$i(this.latestValues) &&
            ((l.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      l.visibility = "";
      const p = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let m = LN(this.projectionDeltaWithTransform, this.treeScale, p);
      (f && (m = f(p, m)), (l.transform = m));
      const { x: g, y: x } = this.projectionDelta;
      ((l.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (l.opacity =
              d === this
                ? (p.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : p.opacityExit)
          : (l.opacity =
              d === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                  ? p.opacityExit
                  : 0));
      for (const b in Um) {
        if (p[b] === void 0) continue;
        const { correct: w, applyTo: S, isCSSVariable: C } = Um[b],
          A = m === "none" ? p[b] : w(p[b], d);
        if (S) {
          const k = S.length;
          for (let O = 0; O < k; O++) l[S[O]] = A;
        } else C ? (this.options.visualElement.renderState.vars[b] = A) : (l[b] = A);
      }
      this.options.layoutId &&
        (l.pointerEvents = d === this ? Ju(c == null ? void 0 : c.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((l) => {
        var c;
        return (c = l.currentAnimation) == null ? void 0 : c.stop();
      }),
        this.root.nodes.forEach(bw),
        this.root.sharedNodes.clear());
    }
  };
}
function GN(e) {
  e.updateLayout();
}
function XN(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: s } = e.options,
      l = t.source !== e.layout.source;
    if (s === "size")
      er((m) => {
        const g = l ? t.measuredBox[m] : t.layoutBox[m],
          x = Ft(g);
        ((g.min = r[m].min), (g.max = g.min + x));
      });
    else if (s === "x" || s === "y") {
      const m = s === "x" ? "y" : "x";
      Wm(l ? t.measuredBox[m] : t.layoutBox[m], r[m]);
    } else
      bA(s, t.layoutBox, r) &&
        er((m) => {
          const g = l ? t.measuredBox[m] : t.layoutBox[m],
            x = Ft(r[m]);
          ((g.max = g.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[m].max = e.relativeTarget[m].min + x)));
        });
    const c = Yo();
    Cs(c, r, t.layoutBox);
    const f = Yo();
    l ? Cs(f, e.applyTransform(o, !0), t.measuredBox) : Cs(f, r, t.layoutBox);
    const d = !mA(c);
    let p = !1;
    if (!e.resumeFrom) {
      const m = e.getClosestProjectingParent();
      if (m && !m.resumeFrom) {
        const { snapshot: g, layout: x } = m;
        if (g && x) {
          const b = e.options.layoutAnchor || void 0,
            w = st();
          pc(w, t.layoutBox, g.layoutBox, b);
          const S = st();
          (pc(S, r, x.layoutBox, b),
            vA(w, S) || (p = !0),
            m.options.layoutRoot &&
              ((e.relativeTarget = S), (e.relativeTargetOrigin = w), (e.relativeParent = m)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: f,
      layoutDelta: c,
      hasLayoutChanged: d,
      hasRelativeLayoutChanged: p,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ZN(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function QN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function JN(e) {
  e.clearSnapshot();
}
function bw(e) {
  e.clearMeasurements();
}
function eR(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Sw(e) {
  e.isLayoutDirty = !1;
}
function tR(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function nR(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform());
}
function Pw(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function rR(e) {
  e.resolveTargetDelta();
}
function iR(e) {
  e.calcProjection();
}
function oR(e) {
  e.resetSkewAndRotation();
}
function aR(e) {
  e.removeLeadSnapshot();
}
function Ew(e, t, n) {
  ((e.translate = Ne(t.translate, 0, n)),
    (e.scale = Ne(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Cw(e, t, n, r) {
  ((e.min = Ne(t.min, n.min, r)), (e.max = Ne(t.max, n.max, r)));
}
function sR(e, t, n, r) {
  (Cw(e.x, t.x, n.x, r), Cw(e.y, t.y, n.y, r));
}
function lR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const uR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Aw = (e) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Tw = Aw("applewebkit/") && !Aw("chrome/") ? Math.round : Pn;
function kw(e) {
  ((e.min = Tw(e.min)), (e.max = Tw(e.max)));
}
function cR(e) {
  (kw(e.x), kw(e.y));
}
function bA(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !MN(vw(t), vw(n), 0.2));
}
function fR(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const dR = wA({
    attachResizeListener: (e, t) => Ms(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  lp = { current: void 0 },
  SA = wA({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!lp.current) {
        const e = new dR({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (lp.current = e));
      }
      return lp.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  sg = E.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
function Ow(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function hR(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ow(o, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ow(e[o], null);
        }
      };
  };
}
function pR(...e) {
  return E.useCallback(hR(...e), e);
}
class mR extends E.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (Yu(n) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = n.offsetParent,
        o = (Yu(r) && r.offsetWidth) || 0,
        s = (Yu(r) && r.offsetHeight) || 0,
        l = getComputedStyle(n),
        c = this.props.sizeRef.current;
      ((c.height = parseFloat(l.height)),
        (c.width = parseFloat(l.width)),
        (c.top = n.offsetTop),
        (c.left = n.offsetLeft),
        (c.right = o - c.width - c.left),
        (c.bottom = s - c.height - c.top),
        (c.direction = l.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vR({ children: e, isPresent: t, anchorX: n, anchorY: r, root: o, pop: s }) {
  var g;
  const l = E.useId(),
    c = E.useRef(null),
    f = E.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
    { nonce: d } = E.useContext(sg),
    p = ((g = e.props) == null ? void 0 : g.ref) ?? (e == null ? void 0 : e.ref),
    m = pR(c, p);
  return (
    E.useInsertionEffect(() => {
      const { width: x, height: b, top: w, left: S, right: C, bottom: A, direction: k } = f.current;
      if (t || s === !1 || !c.current || !x || !b) return;
      const O = k === "rtl",
        _ = n === "left" ? (O ? `right: ${C}` : `left: ${S}`) : O ? `left: ${S}` : `right: ${C}`,
        I = r === "bottom" ? `bottom: ${A}` : `top: ${w}`;
      c.current.dataset.motionPopId = l;
      const R = document.createElement("style");
      d && (R.nonce = d);
      const F = o ?? document.head;
      return (
        F.appendChild(R),
        R.sheet &&
          R.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${b}px !important;
            ${_}px !important;
            ${I}px !important;
          }
        `),
        () => {
          var W;
          ((W = c.current) == null || W.removeAttribute("data-motion-pop-id"),
            F.contains(R) && F.removeChild(R));
        }
      );
    }, [t]),
    N.jsx(mR, {
      isPresent: t,
      childRef: c,
      sizeRef: f,
      pop: s,
      children: s === !1 ? e : E.cloneElement(e, { ref: m }),
    })
  );
}
const gR = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: s,
  mode: l,
  anchorX: c,
  anchorY: f,
  root: d,
}) => {
  const p = Lv(yR),
    m = E.useId();
  let g = !0,
    x = E.useMemo(
      () => (
        (g = !1),
        {
          id: m,
          initial: t,
          isPresent: n,
          custom: o,
          onExitComplete: (b) => {
            p.set(b, !0);
            for (const w of p.values()) if (!w) return;
            r && r();
          },
          register: (b) => (p.set(b, !1), () => p.delete(b)),
        }
      ),
      [n, p, r],
    );
  return (
    s && g && (x = { ...x }),
    E.useMemo(() => {
      p.forEach((b, w) => p.set(w, !1));
    }, [n]),
    E.useEffect(() => {
      !n && !p.size && r && r();
    }, [n]),
    (e = N.jsx(vR, {
      pop: l === "popLayout",
      isPresent: n,
      anchorX: c,
      anchorY: f,
      root: d,
      children: e,
    })),
    N.jsx(ff.Provider, { value: x, children: e })
  );
};
function yR() {
  return new Map();
}
function PA(e = !0) {
  const t = E.useContext(ff);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t,
    s = E.useId();
  E.useEffect(() => {
    if (e) return o(s);
  }, [e]);
  const l = E.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, l] : [!0];
}
const Tu = (e) => e.key || "";
function _w(e) {
  const t = [];
  return (
    E.Children.forEach(e, (n) => {
      E.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const xR = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
    propagate: l = !1,
    anchorX: c = "left",
    anchorY: f = "top",
    root: d,
  }) => {
    const [p, m] = PA(l),
      g = E.useMemo(() => _w(e), [e]),
      x = l && !p ? [] : g.map(Tu),
      b = E.useRef(!0),
      w = E.useRef(g),
      S = Lv(() => new Map()),
      C = E.useRef(new Set()),
      [A, k] = E.useState(g),
      [O, _] = E.useState(g);
    ZE(() => {
      ((b.current = !1), (w.current = g));
      for (let F = 0; F < O.length; F++) {
        const W = Tu(O[F]);
        x.includes(W) ? (S.delete(W), C.current.delete(W)) : S.get(W) !== !0 && S.set(W, !1);
      }
    }, [O, x.length, x.join("-")]);
    const I = [];
    if (g !== A) {
      let F = [...g];
      for (let W = 0; W < O.length; W++) {
        const B = O[W],
          q = Tu(B);
        x.includes(q) || (F.splice(W, 0, B), I.push(B));
      }
      return (s === "wait" && I.length && (F = I), _(_w(F)), k(g), null);
    }
    const { forceRender: R } = E.useContext(Rv);
    return N.jsx(N.Fragment, {
      children: O.map((F) => {
        const W = Tu(F),
          B = l && !p ? !1 : g === O || x.includes(W),
          q = () => {
            if (C.current.has(W)) return;
            if (S.has(W)) (C.current.add(W), S.set(W, !0));
            else return;
            let U = !0;
            (S.forEach((fe) => {
              fe || (U = !1);
            }),
              U && (R == null || R(), _(w.current), l && (m == null || m()), r && r()));
          };
        return N.jsx(
          gR,
          {
            isPresent: B,
            initial: !b.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            root: d,
            onExitComplete: B ? void 0 : q,
            anchorX: c,
            anchorY: f,
            children: F,
          },
          W,
        );
      }),
    });
  },
  EA = E.createContext({ strict: !1 }),
  Mw = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Iw = !1;
function wR() {
  if (Iw) return;
  const e = {};
  for (const t in Mw) e[t] = { isEnabled: (n) => Mw[t].some((r) => !!n[r]) };
  (JC(e), (Iw = !0));
}
function CA() {
  return (wR(), rN());
}
function bR(e) {
  const t = CA();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  JC(t);
}
const SR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function mc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    SR.has(e)
  );
}
let AA = (e) => !mc(e);
function PR(e) {
  typeof e == "function" && (AA = (t) => (t.startsWith("on") ? !mc(t) : e(t)));
}
try {
  PR(require("@emotion/is-prop-valid").default);
} catch {}
function ER(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      Tt(e[o]) ||
      ((AA(o) ||
        (n === !0 && mc(o)) ||
        (!t && !mc(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
const mf = E.createContext({});
function CR(e, t) {
  if (pf(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || _s(n) ? n : void 0, animate: _s(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function AR(e) {
  const { initial: t, animate: n } = CR(e, E.useContext(mf));
  return E.useMemo(() => ({ initial: t, animate: n }), [Dw(t), Dw(n)]);
}
function Dw(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const lg = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function TA(e, t, n) {
  for (const r in t) !Tt(t[r]) && !aA(r, n) && (e[r] = t[r]);
}
function TR({ transformTemplate: e }, t) {
  return E.useMemo(() => {
    const n = lg();
    return (og(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function kR(e, t) {
  const n = e.style || {},
    r = {};
  return (TA(r, n, e), Object.assign(r, TR(e, t)), r);
}
function OR(e, t) {
  const n = {},
    r = kR(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const kA = () => ({ ...lg(), attrs: {} });
function _R(e, t, n, r) {
  const o = E.useMemo(() => {
    const s = kA();
    return (sA(s, t, uA(r), e.transformTemplate, e.style), { ...s.attrs, style: { ...s.style } });
  }, [t]);
  if (e.style) {
    const s = {};
    (TA(s, e.style, e), (o.style = { ...s, ...o.style }));
  }
  return o;
}
const MR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ug(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(MR.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function IR(e, t, n, { latestValues: r }, o, s = !1, l) {
  const f = ((l ?? ug(e)) ? _R : OR)(t, r, o, e),
    d = ER(t, typeof e == "string", s),
    p = e !== E.Fragment ? { ...d, ...f, ref: n } : {},
    { children: m } = t,
    g = E.useMemo(() => (Tt(m) ? m.get() : m), [m]);
  return E.createElement(e, { ...p, children: g });
}
function DR({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return { latestValues: jR(n, r, o, e), renderState: t() };
}
function jR(e, t, n, r) {
  const o = {},
    s = r(e, {});
  for (const g in s) o[g] = Ju(s[g]);
  let { initial: l, animate: c } = e;
  const f = pf(e),
    d = ZC(e);
  t &&
    d &&
    !f &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), c === void 0 && (c = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || l === !1;
  const m = p ? c : l;
  if (m && typeof m != "boolean" && !hf(m)) {
    const g = Array.isArray(m) ? m : [m];
    for (let x = 0; x < g.length; x++) {
      const b = Qv(e, g[x]);
      if (b) {
        const { transitionEnd: w, transition: S, ...C } = b;
        for (const A in C) {
          let k = C[A];
          if (Array.isArray(k)) {
            const O = p ? k.length - 1 : 0;
            k = k[O];
          }
          k !== null && (o[A] = k);
        }
        for (const A in w) o[A] = w[A];
      }
    }
  }
  return o;
}
const OA = (e) => (t, n) => {
    const r = E.useContext(mf),
      o = E.useContext(ff),
      s = () => DR(e, t, r, o);
    return n ? s() : Lv(s);
  },
  NR = OA({ scrapeMotionValuesFromProps: ag, createRenderState: lg }),
  RR = OA({ scrapeMotionValuesFromProps: cA, createRenderState: kA }),
  LR = Symbol.for("motionComponentSymbol");
function $R(e, t, n) {
  const r = E.useRef(n);
  E.useInsertionEffect(() => {
    r.current = n;
  });
  const o = E.useRef(null);
  return E.useCallback(
    (s) => {
      var c;
      (s && ((c = e.onMount) == null || c.call(e, s)), t && (s ? t.mount(s) : t.unmount()));
      const l = r.current;
      if (typeof l == "function")
        if (s) {
          const f = l(s);
          typeof f == "function" && (o.current = f);
        } else o.current ? (o.current(), (o.current = null)) : l(s);
      else l && (l.current = s);
    },
    [t],
  );
}
const _A = E.createContext({});
function Wo(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function zR(e, t, n, r, o, s) {
  var k, O;
  const { visualElement: l } = E.useContext(mf),
    c = E.useContext(EA),
    f = E.useContext(ff),
    d = E.useContext(sg),
    p = d.reducedMotion,
    m = d.skipAnimations,
    g = E.useRef(null),
    x = E.useRef(!1);
  ((r = r || c.renderer),
    !g.current &&
      r &&
      ((g.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: f,
        blockInitialAnimation: f ? f.initial === !1 : !1,
        reducedMotionConfig: p,
        skipAnimations: m,
        isSVG: s,
      })),
      x.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
  const b = g.current,
    w = E.useContext(_A);
  b && !b.projection && o && (b.type === "html" || b.type === "svg") && FR(g.current, n, o, w);
  const S = E.useRef(!1);
  E.useInsertionEffect(() => {
    b && S.current && b.update(n, f);
  });
  const C = n[zC],
    A = E.useRef(
      !!C &&
        typeof window < "u" &&
        !((k = window.MotionHandoffIsComplete) != null && k.call(window, C)) &&
        ((O = window.MotionHasOptimisedAnimation) == null ? void 0 : O.call(window, C)),
    );
  return (
    ZE(() => {
      ((x.current = !0),
        b &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          b.updateFeatures(),
          b.scheduleRenderMicrotask(),
          A.current && b.animationState && b.animationState.animateChanges()));
    }),
    E.useEffect(() => {
      b &&
        (!A.current && b.animationState && b.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            var _;
            (_ = window.MotionHandoffMarkAsComplete) == null || _.call(window, C);
          }),
          (A.current = !1)),
        (b.enteringChildren = void 0));
    }),
    b
  );
}
function FR(e, t, n, r) {
  const {
    layoutId: o,
    layout: s,
    drag: l,
    dragConstraints: c,
    layoutScroll: f,
    layoutRoot: d,
    layoutAnchor: p,
    layoutCrossfade: m,
  } = t;
  ((e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : MA(e.parent))),
    e.projection.setOptions({
      layoutId: o,
      layout: s,
      alwaysMeasureLayout: !!l || (c && Wo(c)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: m,
      layoutScroll: f,
      layoutRoot: d,
      layoutAnchor: p,
    }));
}
function MA(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : MA(e.parent);
}
function up(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && bR(r);
  const s = n ? n === "svg" : ug(e),
    l = s ? RR : NR;
  function c(d, p) {
    let m;
    const g = { ...E.useContext(sg), ...d, layoutId: VR(d) },
      { isStatic: x } = g,
      b = AR(d),
      w = l(d, x);
    if (!x && typeof window < "u") {
      BR();
      const S = UR(g);
      ((m = S.MeasureLayout), (b.visualElement = zR(e, w, g, o, S.ProjectionNode, s)));
    }
    return N.jsxs(mf.Provider, {
      value: b,
      children: [
        m && b.visualElement ? N.jsx(m, { visualElement: b.visualElement, ...g }) : null,
        IR(e, d, $R(w, b.visualElement, p), w, x, t, s),
      ],
    });
  }
  c.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const f = E.forwardRef(c);
  return ((f[LR] = e), f);
}
function VR({ layoutId: e }) {
  const t = E.useContext(Rv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function BR(e, t) {
  E.useContext(EA).strict;
}
function UR(e) {
  const t = CA(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e)) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function WR(e, t) {
  if (typeof Proxy > "u") return up;
  const n = new Map(),
    r = (s, l) => up(s, l, e, t),
    o = (s, l) => r(s, l);
  return new Proxy(o, {
    get: (s, l) => (l === "create" ? r : (n.has(l) || n.set(l, up(l, void 0, e, t)), n.get(l))),
  });
}
const KR = (e, t) =>
  (t.isSVG ?? ug(e)) ? new wN(t) : new pN(t, { allowProjection: e !== E.Fragment });
class HR extends di {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = CN(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    hf(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this));
  }
}
let qR = 0;
class YR extends di {
  constructor() {
    (super(...arguments), (this.id = qR++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: l, custom: c } = this.node.getProps();
        if (typeof l == "string" || (typeof l == "object" && l !== null && !Array.isArray(l))) {
          const f = Yi(this.node, l, c);
          if (f) {
            const { transition: d, transitionEnd: p, ...m } = f;
            for (const g in m) (s = this.node.getValue(g)) == null || s.jump(m[g]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const o = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      o.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const GR = { animation: { Feature: HR }, exit: { Feature: YR } };
function Xs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const XR = (e) => (t) => tg(t) && e(t, Xs(t));
function As(e, t, n, r) {
  return Ms(e, t, XR(n), r);
}
const IA = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  jw = (e, t) => Math.abs(e - t);
function ZR(e, t) {
  const n = jw(e.x, t.x),
    r = jw(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Nw = new Set(["auto", "scroll"]);
class DA {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: o = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: l = 3,
      element: c,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (x) => {
        this.handleScroll(x.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = ku(this.lastRawMoveEventInfo, this.transformPagePoint));
        const x = cp(this.lastMoveEventInfo, this.history),
          b = this.startEvent !== null,
          w = ZR(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!b && !w) return;
        const { point: S } = x,
          { timestamp: C } = Et;
        this.history.push({ ...S, timestamp: C });
        const { onStart: A, onMove: k } = this.handlers;
        (b || (A && A(this.lastMoveEvent, x), (this.startEvent = this.lastMoveEvent)),
          k && k(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, b) => {
        ((this.lastMoveEvent = x),
          (this.lastRawMoveEventInfo = b),
          (this.lastMoveEventInfo = ku(b, this.transformPagePoint)),
          Re.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, b) => {
        this.end();
        const { onEnd: w, onSessionEnd: S, resumeAnimation: C } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const A = cp(
          x.type === "pointercancel" ? this.lastMoveEventInfo : ku(b, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(x, A), S && S(x, A));
      }),
      !tg(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = l),
      (this.contextWindow = o || window));
    const f = Xs(t),
      d = ku(f, this.transformPagePoint),
      { point: p } = d,
      { timestamp: m } = Et;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: g } = n;
    (g && g(t, cp(d, this.history)),
      (this.removeListeners = qs(
        As(this.contextWindow, "pointermove", this.handlePointerMove),
        As(this.contextWindow, "pointerup", this.handlePointerUp),
        As(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      c && this.startScrollTracking(c));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n;) {
      const r = getComputedStyle(n);
      ((Nw.has(r.overflowX) || Nw.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      o = r ? { x: window.scrollX, y: window.scrollY } : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: o.x - n.x, y: o.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x), (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 && ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, o),
      Re.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      ui(this.updatePoint));
  }
}
function ku(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rw(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function cp({ point: e }, t) {
  return { point: e, delta: Rw(e, jA(t)), offset: Rw(e, QR(t)), velocity: JR(t, 0.1) };
}
function QR(e) {
  return e[0];
}
function jA(e) {
  return e[e.length - 1];
}
function JR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = jA(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > on(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && o.timestamp - r.timestamp > on(t) * 2 && (r = e[1]);
  const s = xn(o.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const l = { x: (o.x - r.x) / s, y: (o.y - r.y) / s };
  return (l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l);
}
function eL(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Ne(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Ne(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Lw(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function tL(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Lw(e.x, n, o), y: Lw(e.y, t, r) };
}
function $w(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function nL(e, t) {
  return { x: $w(e.x, t.x), y: $w(e.y, t.y) };
}
function rL(e, t) {
  let n = 0.5;
  const r = Ft(e),
    o = Ft(t);
  return (
    o > r ? (n = ks(t.min, t.max - r, e.min)) : r > o && (n = ks(e.min, e.max - o, t.min)),
    lr(0, 1, n)
  );
}
function iL(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Km = 0.35;
function oL(e = Km) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Km),
    { x: zw(e, "left", "right"), y: zw(e, "top", "bottom") }
  );
}
function zw(e, t, n) {
  return { min: Fw(e, t), max: Fw(e, n) };
}
function Fw(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const aL = new WeakMap();
class sL {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = st()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const s = (m) => {
        (n && this.snapToCursor(Xs(m).point), this.stopAnimation());
      },
      l = (m, g) => {
        const { drag: x, dragPropagation: b, onDragStart: w } = this.getProps();
        if (
          x &&
          !b &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Dj(x)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = m),
          (this.latestPanInfo = g),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          er((C) => {
            let A = this.getAxisMotionValue(C).get() || 0;
            if (or.test(A)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const O = k.layout.layoutBox[C];
                O && (A = Ft(O) * (parseFloat(A) / 100));
              }
            }
            this.originPoint[C] = A;
          }),
          w && Re.update(() => w(m, g), !1, !0),
          Nm(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      c = (m, g) => {
        ((this.latestPointerEvent = m), (this.latestPanInfo = g));
        const {
          dragPropagation: x,
          dragDirectionLock: b,
          onDirectionLock: w,
          onDrag: S,
        } = this.getProps();
        if (!x && !this.openDragLock) return;
        const { offset: C } = g;
        if (b && this.currentDirection === null) {
          ((this.currentDirection = uL(C)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", g.point, C),
          this.updateAxis("y", g.point, C),
          this.visualElement.render(),
          S && Re.update(() => S(m, g), !1, !0));
      },
      f = (m, g) => {
        ((this.latestPointerEvent = m),
          (this.latestPanInfo = g),
          this.stop(m, g),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      d = () => {
        const { dragSnapToOrigin: m } = this.getProps();
        (m || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new DA(
      t,
      { onSessionStart: s, onStart: l, onMove: c, onSessionEnd: f, resumeAnimation: d },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        distanceThreshold: r,
        contextWindow: IA(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      o = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !o || !r)) return;
    const { velocity: l } = o;
    this.startAnimation(l);
    const { onDragEnd: c } = this.getProps();
    c && Re.postRender(() => c(r, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ou(t, o, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + r[t];
    (this.constraints && this.constraints[t] && (l = eL(l, this.constraints[t], this.elastic[t])),
      s.set(l));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      o = this.constraints;
    (t && Wo(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = tL(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = oL(n)),
      o !== this.constraints &&
        !Wo(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        er((l) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(l) &&
            (this.constraints[l] = iL(r.layoutBox[l], this.constraints[l]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Wo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    o.root && ((o.root.scroll = void 0), o.root.updateScroll());
    const s = lN(r, o.root, this.visualElement.getTransformPagePoint());
    let l = nL(o.layout.layoutBox, s);
    if (n) {
      const c = n(oN(l));
      ((this.hasMutatedConstraints = !!c), c && (l = tA(c)));
    }
    return l;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: s,
        dragSnapToOrigin: l,
        onDragTransitionEnd: c,
      } = this.getProps(),
      f = this.constraints || {},
      d = er((p) => {
        if (!Ou(p, n, this.currentDirection)) return;
        let m = (f && f[p]) || {};
        (l === !0 || l === p) && (m = { min: 0, max: 0 });
        const g = o ? 200 : 1e6,
          x = o ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: r ? t[p] : 0,
            bounceStiffness: g,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...m,
          };
        return this.startAxisValueAnimation(p, b);
      });
    return Promise.all(d).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (Nm(this.visualElement, t), r.start(Zv(t, r, 0, n, this.visualElement, !1)));
  }
  stopAnimation() {
    er((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      o = this.visualElement.getProps()[n];
    return o || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
  }
  snapToCursor(t) {
    er((n) => {
      const { drag: r } = this.getProps();
      if (!Ou(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: l, max: c } = o.layout.layoutBox[n],
          f = s.get() || 0;
        s.set(t[n] - Ne(l, c, 0.5) + f);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Wo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    er((l) => {
      const c = this.getAxisMotionValue(l);
      if (c && this.constraints !== !1) {
        const f = c.get();
        o[l] = rL({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      er((l) => {
        if (!Ou(l, t, null)) return;
        const c = this.getAxisMotionValue(l),
          { min: f, max: d } = this.constraints[l];
        c.set(Ne(f, d, o[l]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    aL.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = As(t, "pointerdown", (d) => {
        const { drag: p, dragListener: m = !0 } = this.getProps(),
          g = d.target,
          x = g !== t && zj(g);
        p && m && !x && this.start(d);
      });
    let r;
    const o = () => {
        const { dragConstraints: d } = this.getProps();
        Wo(d) &&
          d.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r || (r = lL(t, d.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: s } = this.visualElement,
      l = s.addEventListener("measure", o);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), Re.read(o));
    const c = Ms(window, "resize", () => this.scalePositionWithinConstraints()),
      f = s.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: p }) => {
        this.isDragging &&
          p &&
          (er((m) => {
            const g = this.getAxisMotionValue(m);
            g && ((this.originPoint[m] += d[m].translate), g.set(g.get() + d[m].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (c(), n(), l(), f && f(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: s = !1,
        dragElastic: l = Km,
        dragMomentum: c = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: l,
      dragMomentum: c,
    };
  }
}
function Vw(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function lL(e, t, n) {
  const r = Yx(e, Vw(n)),
    o = Yx(t, Vw(n));
  return () => {
    (r(), o());
  };
}
function Ou(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function uL(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class cL extends di {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Pn),
      (this.removeListeners = Pn),
      (this.controls = new sL(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Pn));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const fp = (e) => (t, n) => {
  e && Re.update(() => e(t, n), !1, !0);
};
class fL extends di {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Pn));
  }
  onPointerDown(t) {
    this.session = new DA(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: IA(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: fp(t),
      onStart: fp(n),
      onMove: fp(r),
      onEnd: (s, l) => {
        (delete this.session, o && Re.postRender(() => o(s, l)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = As(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let dp = !1;
class dL extends E.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && o && r.register(s),
      dp && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ec.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props,
      { projection: l } = r;
    return (
      l &&
        ((l.isPresent = s),
        t.layoutDependency !== n && l.setOptions({ ...l.options, layoutDependency: n }),
        (dp = !0),
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? l.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? l.promote()
            : l.relegate() ||
              Re.postRender(() => {
                const c = l.getStack();
                (!c || !c.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      eg.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: o } = t;
    ((dp = !0),
      o &&
        (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function NA(e) {
  const [t, n] = PA(),
    r = E.useContext(Rv);
  return N.jsx(dL, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(_A),
    isPresent: t,
    safeToRemove: n,
  });
}
const hL = { pan: { Feature: fL }, drag: { Feature: cL, ProjectionNode: SA, MeasureLayout: NA } };
function Bw(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    s = r[o];
  s && Re.postRender(() => s(t, Xs(t)));
}
class pL extends di {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Nj(t, (n, r) => (Bw(this.node, r, "Start"), (o) => Bw(this.node, o, "End"))));
  }
  unmount() {}
}
class mL extends di {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = qs(
      Ms(this.node.current, "focus", () => this.onFocus()),
      Ms(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Uw(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    s = r[o];
  s && Re.postRender(() => s(t, Xs(t)));
}
class vL extends di {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = Vj(
      t,
      (o, s) => (
        Uw(this.node, s, "Start"),
        (l, { success: c }) => Uw(this.node, l, c ? "End" : "Cancel")
      ),
      { useGlobalTarget: n, stopPropagation: (r == null ? void 0 : r.tap) === !1 },
    );
  }
  unmount() {}
}
const Hm = new WeakMap(),
  hp = new WeakMap(),
  gL = (e) => {
    const t = Hm.get(e.target);
    t && t(e);
  },
  yL = (e) => {
    e.forEach(gL);
  };
function xL({ root: e, ...t }) {
  const n = e || document;
  hp.has(n) || hp.set(n, {});
  const r = hp.get(n),
    o = JSON.stringify(t);
  return (r[o] || (r[o] = new IntersectionObserver(yL, { root: e, ...t })), r[o]);
}
function wL(e, t, n) {
  const r = xL(t);
  return (
    Hm.set(e, n),
    r.observe(e),
    () => {
      (Hm.delete(e), r.unobserve(e));
    }
  );
}
const bL = { some: 0, all: 1 };
class SL extends di {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var f;
    (f = this.stopObserver) == null || f.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: s } = t,
      l = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : bL[o],
      },
      c = (d) => {
        const { isIntersecting: p } = d;
        if (this.isInView === p || ((this.isInView = p), s && !p && this.hasEnteredView)) return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: m, onViewportLeave: g } = this.node.getProps(),
          x = p ? m : g;
        x && x(d);
      };
    this.stopObserver = wL(this.node.current, l, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(PL(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    ((t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function PL({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const EL = {
    inView: { Feature: SL },
    tap: { Feature: vL },
    focus: { Feature: mL },
    hover: { Feature: pL },
  },
  CL = { layout: { ProjectionNode: SA, MeasureLayout: NA } },
  AL = { ...GR, ...EL, ...hL, ...CL },
  oi = WR(AL, KR);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TL = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  RA = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var kL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OL = E.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: l,
      ...c
    },
    f,
  ) =>
    E.createElement(
      "svg",
      {
        ref: f,
        ...kL,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: RA("lucide", o),
        ...c,
      },
      [...l.map(([d, p]) => E.createElement(d, p)), ...(Array.isArray(s) ? s : [s])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hi = (e, t) => {
  const n = E.forwardRef(({ className: r, ...o }, s) =>
    E.createElement(OL, { ref: s, iconNode: t, className: RA(`lucide-${TL(e)}`, r), ...o }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _L = hi("Bath", [
  ["path", { d: "M10 4 8 6", key: "1rru8s" }],
  ["path", { d: "M17 19v2", key: "ts1sot" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M7 19v2", key: "12npes" }],
  [
    "path",
    {
      d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "14ym8i",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ML = hi("Bed", [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IL = hi("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ww = hi("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DL = hi("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jL = hi("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NL = hi("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RL = hi("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Kw = [
    { label: "Properties", route: "properties", chevron: !0 },
    { label: "Mortgage", route: "mortgage", badge: "New" },
    { label: "Company", route: "company" },
    { label: "Careers", route: "careers", chevron: !0 },
    { label: "Blog", route: "blog" },
  ];
function Hw({ className: e = "" }) {
  return N.jsxs("div", {
    className: `text-xl font-black leading-[0.85] tracking-tighter text-[#141414] ${e}`,
    "data-editable": !0,
    "data-preset-text": "logo",
    children: [N.jsx("div", { children: "ZENITH" }), N.jsx("div", { children: "REALTY" })],
  });
}
function LL() {
  const [e, t] = E.useState(!1),
    n = (r) => (o) => {
      (o.preventDefault(), GE(r), t(!1));
    };
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("header", {
        className: "fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10",
        children: N.jsxs("div", {
          className: "mx-auto flex max-w-7xl items-center justify-between gap-6",
          children: [
            N.jsx("a", {
              href: Uo(""),
              onClick: n(""),
              "aria-label": "ZENITH REALTY home",
              children: N.jsx(Hw, {}),
            }),
            N.jsx("nav", {
              className: "hidden items-center gap-7 lg:flex",
              "aria-label": "Primary",
              children: Kw.map((r) =>
                N.jsxs(
                  "a",
                  {
                    href: Uo(r.route),
                    onClick: n(r.route),
                    className:
                      "flex items-center gap-1 text-[13px] font-medium tracking-tight text-[#141414] transition-opacity hover:opacity-60",
                    children: [
                      r.label,
                      "chevron" in r && r.chevron ? N.jsx(IL, { className: "size-3.5" }) : null,
                      "badge" in r && r.badge
                        ? N.jsx("span", {
                            className:
                              "ml-1 rounded-xs bg-black px-1.5 py-0.5 text-[9px] leading-none text-white",
                            children: r.badge,
                          })
                        : null,
                    ],
                  },
                  r.route,
                ),
              ),
            }),
            N.jsxs("a", {
              href: Uo("contact"),
              onClick: n("contact"),
              className:
                "hidden items-center gap-2 border border-black/10 bg-white/80 px-6 py-2.5 text-[13px] font-medium backdrop-blur-md transition-colors hover:bg-white lg:inline-flex",
              children: [N.jsx(Ww, { className: "size-4" }), "Post a property"],
            }),
            N.jsx("button", {
              type: "button",
              className:
                "flex h-10 w-10 items-center justify-center border border-black/10 bg-white/80 lg:hidden",
              onClick: () => t(!0),
              "aria-label": "Open menu",
              children: N.jsx(jL, { className: "size-5" }),
            }),
          ],
        }),
      }),
      N.jsx(xR, {
        children: e
          ? N.jsxs(N.Fragment, {
              children: [
                N.jsx(oi.button, {
                  type: "button",
                  className: "fixed inset-0 z-[60] bg-black/20 lg:hidden",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => t(!1),
                  "aria-label": "Close menu",
                }),
                N.jsxs(oi.div, {
                  className:
                    "fixed inset-y-0 right-0 z-[70] flex w-[min(100%,320px)] flex-col bg-[#F8F8F8] p-8 shadow-2xl lg:hidden",
                  initial: { x: "100%" },
                  animate: { x: 0 },
                  exit: { x: "100%" },
                  transition: { type: "tween", duration: 0.35 },
                  children: [
                    N.jsxs("div", {
                      className: "mb-8 flex items-center justify-between",
                      children: [
                        N.jsx(Hw, {}),
                        N.jsx("button", {
                          type: "button",
                          onClick: () => t(!1),
                          "aria-label": "Close menu",
                          children: N.jsx(RL, { className: "size-5" }),
                        }),
                      ],
                    }),
                    N.jsx("nav", {
                      className: "flex flex-1 flex-col gap-5",
                      children: Kw.map((r) =>
                        N.jsx(
                          "a",
                          {
                            href: Uo(r.route),
                            onClick: n(r.route),
                            className: "text-[15px] font-medium text-[#141414]",
                            children: r.label,
                          },
                          r.route,
                        ),
                      ),
                    }),
                    N.jsxs("a", {
                      href: Uo("contact"),
                      onClick: n("contact"),
                      className:
                        "mt-auto flex items-center justify-center gap-2 bg-[#141414] px-6 py-4 text-[13px] font-medium text-white",
                      children: [N.jsx(Ww, { className: "size-4" }), "Post a property"],
                    }),
                  ],
                }),
              ],
            })
          : null,
      }),
    ],
  });
}
function va({ title: e, subtitle: t, children: n }) {
  return N.jsx("main", {
    className: "px-5 pb-24 pt-28 md:px-10 md:pt-32",
    children: N.jsxs("div", {
      className: "mx-auto max-w-7xl",
      children: [
        N.jsxs(oi.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-14 max-w-3xl",
          children: [
            N.jsx("h1", {
              className:
                "text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:text-5xl",
              "data-editable": !0,
              children: e,
            }),
            t
              ? N.jsx("p", {
                  className: "mt-6 text-[15px] leading-relaxed text-[#A5A5A5] md:text-[18px]",
                  "data-editable": !0,
                  children: t,
                })
              : null,
          ],
        }),
        n,
      ],
    }),
  });
}
const $L = [
  { title: "Designing sanctuaries in Malibu", date: "May 2026" },
  { title: "VR walk-throughs that close faster", date: "April 2026" },
  { title: "Island portfolios worth watching", date: "March 2026" },
];
function zL() {
  return N.jsx(va, {
    title: "Blog",
    subtitle: "Market notes, design stories, and tools for modern property search.",
    children: N.jsx("div", {
      className: "space-y-4",
      children: $L.map((e) =>
        N.jsxs(
          "article",
          {
            className:
              "flex flex-wrap items-center justify-between gap-4 border border-black/10 bg-white px-8 py-6",
            children: [
              N.jsx("h2", { className: "text-lg font-medium text-[#141414]", children: e.title }),
              N.jsx("span", { className: "text-[13px] text-[#A5A5A5]", children: e.date }),
            ],
          },
          e.title,
        ),
      ),
    }),
  });
}
const FL = [
  { title: "Senior Property Advisor", location: "Los Angeles, CA" },
  { title: "VR Experience Producer", location: "Remote" },
  { title: "Investment Analyst", location: "New York, NY" },
];
function VL() {
  return N.jsx(va, {
    title: "Careers",
    subtitle:
      "Join a team building the next standard for luxury real estate discovery and client care.",
    children: N.jsx("ul", {
      className: "divide-y divide-black/10 bg-white",
      children: FL.map((e) =>
        N.jsxs(
          "li",
          {
            className: "flex flex-wrap items-center justify-between gap-4 px-8 py-6",
            children: [
              N.jsxs("div", {
                children: [
                  N.jsx("p", { className: "font-medium text-[#141414]", children: e.title }),
                  N.jsx("p", {
                    className: "mt-1 text-[13px] text-[#A5A5A5]",
                    children: e.location,
                  }),
                ],
              }),
              N.jsx("button", {
                type: "button",
                className:
                  "border border-black/15 px-5 py-2.5 text-[13px] font-medium hover:bg-gray-50",
                children: "Apply",
              }),
            ],
          },
          e.title,
        ),
      ),
    }),
  });
}
function BL() {
  return N.jsx(va, {
    title: "Company",
    subtitle:
      "Zenith Realty connects discerning buyers with residences that balance craft, comfort, and investment discipline.",
    children: N.jsxs("div", {
      className: "grid gap-10 md:grid-cols-2",
      children: [
        N.jsxs("div", {
          className: "bg-white p-8 md:p-12",
          children: [
            N.jsx("h2", {
              className: "text-xl font-medium text-[#141414]",
              children: "Our approach",
            }),
            N.jsx("p", {
              className: "mt-4 text-[14px] leading-relaxed text-[#A5A5A5]",
              children:
                "We pair local market intelligence with digital walk-throughs so every client can evaluate homes with clarity before stepping inside.",
            }),
          ],
        }),
        N.jsxs("div", {
          className: "bg-white p-8 md:p-12",
          children: [
            N.jsx("h2", {
              className: "text-xl font-medium text-[#141414]",
              children: "Global reach",
            }),
            N.jsx("p", {
              className: "mt-4 text-[14px] leading-relaxed text-[#A5A5A5]",
              children:
                "From coastal California to mountain retreats and island sanctuaries, our advisors maintain vetted portfolios across premier destinations.",
            }),
          ],
        }),
      ],
    }),
  });
}
function UL() {
  return N.jsx(va, {
    title: "Book a call",
    subtitle: "Share your goals and we will match you with an advisor and curated listings.",
    children: N.jsxs("form", {
      className: "max-w-xl space-y-6 bg-white p-8 md:p-12",
      children: [
        N.jsxs("label", {
          className: "block",
          children: [
            N.jsx("span", {
              className: "text-[13px] font-medium text-[#141414]",
              children: "Full name",
            }),
            N.jsx("input", {
              type: "text",
              className:
                "mt-2 w-full border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30",
              placeholder: "Your name",
            }),
          ],
        }),
        N.jsxs("label", {
          className: "block",
          children: [
            N.jsx("span", {
              className: "text-[13px] font-medium text-[#141414]",
              children: "Email",
            }),
            N.jsx("input", {
              type: "email",
              className:
                "mt-2 w-full border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30",
              placeholder: "you@email.com",
            }),
          ],
        }),
        N.jsxs("label", {
          className: "block",
          children: [
            N.jsx("span", {
              className: "text-[13px] font-medium text-[#141414]",
              children: "Message",
            }),
            N.jsx("textarea", {
              rows: 4,
              className:
                "mt-2 w-full resize-none border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30",
              placeholder: "Tell us about the property you are seeking",
            }),
          ],
        }),
        N.jsx("button", {
          type: "button",
          className:
            "bg-[#141414] px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-white shadow-2xl",
          children: "Book a call",
        }),
      ],
    }),
  });
}
function WL() {
  if (typeof window > "u") return !1;
  try {
    return window.__DRAFTLY_EDITOR_MODE__
      ? !0
      : new URLSearchParams(window.location.search).get("draftlyEditor") === "1";
  } catch {
    return !1;
  }
}
function KL() {
  if (typeof window > "u") return !1;
  try {
    return new URLSearchParams(window.location.search).get("draftlyGallery") === "1";
  } catch {
    return !1;
  }
}
function HL(e = !1) {
  const [t, n] = E.useState(e);
  return (
    E.useEffect(() => {
      (WL() || KL()) && n(!0);
      const r = () => n(!0);
      return (
        window.addEventListener("draftly-gallery-autoplay", r),
        () => window.removeEventListener("draftly-gallery-autoplay", r)
      );
    }, []),
    t
  );
}
const qL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_144509_89e2d612-8af2-45c3-90f4-4831bc60715d.mp4",
  YL =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_150112_2b0e700f-7af4-4459-b326-7d9e2f468daa.png&w=1280&q=85",
  qm = [
    {
      title: "Aether Heights",
      price: "$345,000",
      location: "USA/California/Malibu",
      area: 300,
      floors: 1,
      beds: 6,
      baths: 2,
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_145701_de344c15-5eac-4c64-8bd6-19a2811bba4a.png&w=1280&q=85",
    },
    {
      title: "Azure Sanctuary",
      price: "$225,000",
      location: "Caribbean/Bahamas/Bimini",
      area: 250,
      floors: 1,
      beds: 4,
      baths: 1,
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_145923_c1a9880c-0fab-4a76-8289-bd650d5e5dce.png&w=1280&q=85",
    },
    {
      title: "Summit Pavilion",
      price: "$510,000",
      location: "USA/Colorado/Vail",
      area: 400,
      floors: 3,
      beds: 6,
      baths: 3,
      image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_150022_cdda0eaa-1c17-4f59-8188-4f98b328619f.png&w=1280&q=85",
    },
  ],
  GL = [
    { title: "Annual growth", value: "19%", data: [35, 60, 45, 40, 55, 75, 60, 80, 55, 30] },
    {
      title: "Aggregate yield profit",
      value: "$820,000",
      data: [8, 12, 18, 28, 32, 38, 55, 70, 85],
    },
    { title: "Median returns", value: "14%", data: [10, 75, 20, 35, 30, 65, 55, 25, 40] },
  ];
function XL() {
  const e = E.useRef(null),
    t = HL(!1);
  return (
    E.useEffect(() => {
      const n = e.current;
      !n || !t || n.play().catch(() => {});
    }, [t]),
    N.jsxs("section", {
      id: "hero",
      className: "relative h-screen overflow-hidden",
      children: [
        N.jsx("video", {
          ref: e,
          src: qL,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
          className: "absolute left-0 top-0 z-0 h-full w-full object-cover",
        }),
        N.jsx("div", {
          className: "relative z-10 flex h-full flex-col bg-white/10",
          children: N.jsx("div", {
            className: "flex flex-1 items-end px-5 pb-16 pt-28 md:px-10 md:pb-24",
            children: N.jsxs("div", {
              className: "mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12",
              children: [
                N.jsxs("div", {
                  className: "md:col-span-8",
                  children: [
                    N.jsx(oi.h1, {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.9 },
                      className:
                        "text-4xl font-medium leading-[1.05] tracking-tight text-[#141414] md:text-5xl lg:text-7xl",
                      "data-editable": !0,
                      "data-preset-text": "hero-headline",
                      children: "Discover space you truly belong in",
                    }),
                    N.jsx(oi.button, {
                      type: "button",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.6, duration: 0.8 },
                      onClick: () => GE("contact"),
                      className:
                        "mt-8 bg-[#141414] px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-white shadow-2xl",
                      "data-editable": !0,
                      "data-preset-text": "hero-cta",
                      children: "Book a call",
                    }),
                  ],
                }),
                N.jsx(oi.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className:
                    "text-[15px] leading-[1.4] text-[#A5A5A5] md:col-span-4 md:col-start-9 md:text-[18px]",
                  "data-editable": !0,
                  "data-preset-text": "hero-subcopy",
                  children:
                    "Experience more than a house; find a sanctuary where your journey unfolds, rich with comfort and endless opportunities.",
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
const ZL = [
  { id: "market", label: "Market Analysis" },
  { id: "collection", label: "Exclusive collection" },
  { id: "policy", label: "Policy Support" },
  { id: "closing", label: "Closing Deal" },
];
function QL() {
  const [e, t] = E.useState("collection");
  return N.jsx("section", {
    id: "how-it-works",
    className: "px-5 py-20 md:px-10 md:py-28",
    children: N.jsxs("div", {
      className: "mx-auto max-w-7xl",
      children: [
        N.jsxs("div", {
          className: "mb-14 grid grid-cols-1 gap-8 md:grid-cols-12",
          children: [
            N.jsx("h2", {
              className:
                "text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-8 md:text-5xl",
              "data-editable": !0,
              "data-preset-text": "how-headline",
              children: "Explore our service and the process",
            }),
            N.jsx("p", {
              className: "text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-4 md:col-start-9",
              "data-editable": !0,
              "data-preset-text": "how-subcopy",
              children:
                "Digital walk-throughs, select portfolios, and professional insight — all the tools to search and secure with ease.",
            }),
          ],
        }),
        N.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-12",
          children: [
            N.jsxs("div", {
              className: "flex flex-col justify-between bg-white p-8 md:col-span-4 md:p-16",
              children: [
                N.jsxs("div", {
                  children: [
                    N.jsx("h3", {
                      className: "text-xl font-medium tracking-tight text-[#141414]",
                      "data-editable": !0,
                      children: "Exclusive collection",
                    }),
                    N.jsx("p", {
                      className: "mt-4 text-[14px] leading-relaxed text-[#A5A5A5]",
                      "data-editable": !0,
                      children:
                        "Consultants curate custom lists of vetted homes. Featuring media, VR walk-ins, and private physical tours.",
                    }),
                    N.jsx("button", {
                      type: "button",
                      className:
                        "mt-8 border border-black/15 px-6 py-3 text-[13px] font-medium transition-colors hover:bg-gray-50",
                      children: "Free consult",
                    }),
                  ],
                }),
                N.jsx("nav", {
                  className: "mt-12 flex flex-col gap-3",
                  children: ZL.map((n) =>
                    N.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => t(n.id),
                        className: `text-left text-[13px] font-medium transition-colors ${e === n.id ? "text-[#141414]" : "text-[#A5A5A5] hover:text-[#141414]"}`,
                        children: n.label,
                      },
                      n.id,
                    ),
                  ),
                }),
              ],
            }),
            N.jsx("div", {
              className: "aspect-video overflow-hidden md:col-span-8 md:aspect-square",
              children: N.jsx("img", {
                src: YL,
                alt: "Zenith Realty service",
                className: "h-full w-full object-cover",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function LA(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = LA(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function un() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = LA(e)) && (r && (r += " "), (r += t));
  return r;
}
var JL = [
  "dangerouslySetInnerHTML",
  "onCopy",
  "onCopyCapture",
  "onCut",
  "onCutCapture",
  "onPaste",
  "onPasteCapture",
  "onCompositionEnd",
  "onCompositionEndCapture",
  "onCompositionStart",
  "onCompositionStartCapture",
  "onCompositionUpdate",
  "onCompositionUpdateCapture",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onChangeCapture",
  "onBeforeInput",
  "onBeforeInputCapture",
  "onInput",
  "onInputCapture",
  "onReset",
  "onResetCapture",
  "onSubmit",
  "onSubmitCapture",
  "onInvalid",
  "onInvalidCapture",
  "onLoad",
  "onLoadCapture",
  "onError",
  "onErrorCapture",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyPressCapture",
  "onKeyUp",
  "onKeyUpCapture",
  "onAbort",
  "onAbortCapture",
  "onCanPlay",
  "onCanPlayCapture",
  "onCanPlayThrough",
  "onCanPlayThroughCapture",
  "onDurationChange",
  "onDurationChangeCapture",
  "onEmptied",
  "onEmptiedCapture",
  "onEncrypted",
  "onEncryptedCapture",
  "onEnded",
  "onEndedCapture",
  "onLoadedData",
  "onLoadedDataCapture",
  "onLoadedMetadata",
  "onLoadedMetadataCapture",
  "onLoadStart",
  "onLoadStartCapture",
  "onPause",
  "onPauseCapture",
  "onPlay",
  "onPlayCapture",
  "onPlaying",
  "onPlayingCapture",
  "onProgress",
  "onProgressCapture",
  "onRateChange",
  "onRateChangeCapture",
  "onSeeked",
  "onSeekedCapture",
  "onSeeking",
  "onSeekingCapture",
  "onStalled",
  "onStalledCapture",
  "onSuspend",
  "onSuspendCapture",
  "onTimeUpdate",
  "onTimeUpdateCapture",
  "onVolumeChange",
  "onVolumeChangeCapture",
  "onWaiting",
  "onWaitingCapture",
  "onAuxClick",
  "onAuxClickCapture",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onContextMenuCapture",
  "onDoubleClick",
  "onDoubleClickCapture",
  "onDrag",
  "onDragCapture",
  "onDragEnd",
  "onDragEndCapture",
  "onDragEnter",
  "onDragEnterCapture",
  "onDragExit",
  "onDragExitCapture",
  "onDragLeave",
  "onDragLeaveCapture",
  "onDragOver",
  "onDragOverCapture",
  "onDragStart",
  "onDragStartCapture",
  "onDrop",
  "onDropCapture",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseMoveCapture",
  "onMouseOut",
  "onMouseOutCapture",
  "onMouseOver",
  "onMouseOverCapture",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onSelectCapture",
  "onTouchCancel",
  "onTouchCancelCapture",
  "onTouchEnd",
  "onTouchEndCapture",
  "onTouchMove",
  "onTouchMoveCapture",
  "onTouchStart",
  "onTouchStartCapture",
  "onPointerDown",
  "onPointerDownCapture",
  "onPointerMove",
  "onPointerMoveCapture",
  "onPointerUp",
  "onPointerUpCapture",
  "onPointerCancel",
  "onPointerCancelCapture",
  "onPointerEnter",
  "onPointerEnterCapture",
  "onPointerLeave",
  "onPointerLeaveCapture",
  "onPointerOver",
  "onPointerOverCapture",
  "onPointerOut",
  "onPointerOutCapture",
  "onGotPointerCapture",
  "onGotPointerCaptureCapture",
  "onLostPointerCapture",
  "onLostPointerCaptureCapture",
  "onScroll",
  "onScrollCapture",
  "onWheel",
  "onWheelCapture",
  "onAnimationStart",
  "onAnimationStartCapture",
  "onAnimationEnd",
  "onAnimationEndCapture",
  "onAnimationIteration",
  "onAnimationIterationCapture",
  "onTransitionEnd",
  "onTransitionEndCapture",
];
function cg(e) {
  if (typeof e != "string") return !1;
  var t = JL;
  return t.includes(e);
}
var e$ = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  t$ = new Set(e$);
function $A(e) {
  return typeof e != "string" ? !1 : t$.has(e);
}
function zA(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function Is(e) {
  if (typeof e != "object" || e === null) return {};
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && ($A(n) || zA(n)) && (t[n] = e[n]);
  return t;
}
function n$(e) {
  if (e == null) return null;
  if (E.isValidElement(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return Is(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? Is(e) : null;
}
function Fn(e) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ($A(n) || zA(n) || cg(n)) && (t[n] = e[n]);
  return t;
}
var r$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ym() {
  return (
    (Ym = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ym.apply(null, arguments)
  );
}
function i$(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = o$(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function o$(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var FA = E.forwardRef((e, t) => {
    var {
        children: n,
        width: r,
        height: o,
        viewBox: s,
        className: l,
        style: c,
        title: f,
        desc: d,
      } = e,
      p = i$(e, r$),
      m = s || { width: r, height: o, x: 0, y: 0 },
      g = un("recharts-surface", l);
    return E.createElement(
      "svg",
      Ym({}, Fn(p), {
        className: g,
        width: r,
        height: o,
        style: c,
        viewBox: "".concat(m.x, " ").concat(m.y, " ").concat(m.width, " ").concat(m.height),
        ref: t,
      }),
      E.createElement("title", null, f),
      E.createElement("desc", null, d),
      n,
    );
  }),
  a$ = ["children", "className"];
function Gm() {
  return (
    (Gm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gm.apply(null, arguments)
  );
}
function s$(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = l$(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function l$(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Qi = E.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      o = s$(e, a$),
      s = un("recharts-layer", r);
    return E.createElement("g", Gm({ className: s }, Fn(o), { ref: t }), n);
  }),
  u$ = qE(),
  c$ = E.createContext(null);
function Fe(e) {
  return function () {
    return e;
  };
}
const VA = Math.cos,
  vc = Math.sin,
  Un = Math.sqrt,
  gc = Math.PI,
  vf = 2 * gc,
  Xm = Math.PI,
  Zm = 2 * Xm,
  zi = 1e-6,
  f$ = Zm - zi;
function BA(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function d$(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return BA;
  const n = 10 ** t;
  return function (r) {
    this._ += r[0];
    for (let o = 1, s = r.length; o < s; ++o) this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class h$ {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? BA : d$(t)));
  }
  moveTo(t, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
  }
  closePath() {
    this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${(this._x1 = +r)},${(this._y1 = +o)}`;
  }
  bezierCurveTo(t, n, r, o, s, l) {
    this._append`C${+t},${+n},${+r},${+o},${(this._x1 = +s)},${(this._y1 = +l)}`;
  }
  arcTo(t, n, r, o, s) {
    if (((t = +t), (n = +n), (r = +r), (o = +o), (s = +s), s < 0))
      throw new Error(`negative radius: ${s}`);
    let l = this._x1,
      c = this._y1,
      f = r - t,
      d = o - n,
      p = l - t,
      m = c - n,
      g = p * p + m * m;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
    else if (g > zi)
      if (!(Math.abs(m * f - d * p) > zi) || !s) this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else {
        let x = r - l,
          b = o - c,
          w = f * f + d * d,
          S = x * x + b * b,
          C = Math.sqrt(w),
          A = Math.sqrt(g),
          k = s * Math.tan((Xm - Math.acos((w + g - S) / (2 * C * A))) / 2),
          O = k / A,
          _ = k / C;
        (Math.abs(O - 1) > zi && this._append`L${t + O * p},${n + O * m}`,
          this
            ._append`A${s},${s},0,0,${+(m * x > p * b)},${(this._x1 = t + _ * f)},${(this._y1 = n + _ * d)}`);
      }
  }
  arc(t, n, r, o, s, l) {
    if (((t = +t), (n = +n), (r = +r), (l = !!l), r < 0)) throw new Error(`negative radius: ${r}`);
    let c = r * Math.cos(o),
      f = r * Math.sin(o),
      d = t + c,
      p = n + f,
      m = 1 ^ l,
      g = l ? o - s : s - o;
    (this._x1 === null
      ? this._append`M${d},${p}`
      : (Math.abs(this._x1 - d) > zi || Math.abs(this._y1 - p) > zi) && this._append`L${d},${p}`,
      r &&
        (g < 0 && (g = (g % Zm) + Zm),
        g > f$
          ? this
              ._append`A${r},${r},0,1,${m},${t - c},${n - f}A${r},${r},0,1,${m},${(this._x1 = d)},${(this._y1 = p)}`
          : g > zi &&
            this
              ._append`A${r},${r},0,${+(g >= Xm)},${m},${(this._x1 = t + r * Math.cos(s))},${(this._y1 = n + r * Math.sin(s))}`));
  }
  rect(t, n, r, o) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(r = +r)}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function fg(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        const r = Math.floor(n);
        if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
        t = r;
      }
      return e;
    }),
    () => new h$(t)
  );
}
function dg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function UA(e) {
  this._context = e;
}
UA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function gf(e) {
  return new UA(e);
}
function WA(e) {
  return e[0];
}
function KA(e) {
  return e[1];
}
function HA(e, t) {
  var n = Fe(!0),
    r = null,
    o = gf,
    s = null,
    l = fg(c);
  ((e = typeof e == "function" ? e : e === void 0 ? WA : Fe(e)),
    (t = typeof t == "function" ? t : t === void 0 ? KA : Fe(t)));
  function c(f) {
    var d,
      p = (f = dg(f)).length,
      m,
      g = !1,
      x;
    for (r == null && (s = o((x = l()))), d = 0; d <= p; ++d)
      (!(d < p && n((m = f[d]), d, f)) === g && ((g = !g) ? s.lineStart() : s.lineEnd()),
        g && s.point(+e(m, d, f), +t(m, d, f)));
    if (x) return ((s = null), x + "" || null);
  }
  return (
    (c.x = function (f) {
      return arguments.length ? ((e = typeof f == "function" ? f : Fe(+f)), c) : e;
    }),
    (c.y = function (f) {
      return arguments.length ? ((t = typeof f == "function" ? f : Fe(+f)), c) : t;
    }),
    (c.defined = function (f) {
      return arguments.length ? ((n = typeof f == "function" ? f : Fe(!!f)), c) : n;
    }),
    (c.curve = function (f) {
      return arguments.length ? ((o = f), r != null && (s = o(r)), c) : o;
    }),
    (c.context = function (f) {
      return arguments.length ? (f == null ? (r = s = null) : (s = o((r = f))), c) : r;
    }),
    c
  );
}
function _u(e, t, n) {
  var r = null,
    o = Fe(!0),
    s = null,
    l = gf,
    c = null,
    f = fg(d);
  ((e = typeof e == "function" ? e : e === void 0 ? WA : Fe(+e)),
    (t = typeof t == "function" ? t : Fe(t === void 0 ? 0 : +t)),
    (n = typeof n == "function" ? n : n === void 0 ? KA : Fe(+n)));
  function d(m) {
    var g,
      x,
      b,
      w = (m = dg(m)).length,
      S,
      C = !1,
      A,
      k = new Array(w),
      O = new Array(w);
    for (s == null && (c = l((A = f()))), g = 0; g <= w; ++g) {
      if (!(g < w && o((S = m[g]), g, m)) === C)
        if ((C = !C)) ((x = g), c.areaStart(), c.lineStart());
        else {
          for (c.lineEnd(), c.lineStart(), b = g - 1; b >= x; --b) c.point(k[b], O[b]);
          (c.lineEnd(), c.areaEnd());
        }
      C &&
        ((k[g] = +e(S, g, m)),
        (O[g] = +t(S, g, m)),
        c.point(r ? +r(S, g, m) : k[g], n ? +n(S, g, m) : O[g]));
    }
    if (A) return ((c = null), A + "" || null);
  }
  function p() {
    return HA().defined(o).curve(l).context(s);
  }
  return (
    (d.x = function (m) {
      return arguments.length ? ((e = typeof m == "function" ? m : Fe(+m)), (r = null), d) : e;
    }),
    (d.x0 = function (m) {
      return arguments.length ? ((e = typeof m == "function" ? m : Fe(+m)), d) : e;
    }),
    (d.x1 = function (m) {
      return arguments.length
        ? ((r = m == null ? null : typeof m == "function" ? m : Fe(+m)), d)
        : r;
    }),
    (d.y = function (m) {
      return arguments.length ? ((t = typeof m == "function" ? m : Fe(+m)), (n = null), d) : t;
    }),
    (d.y0 = function (m) {
      return arguments.length ? ((t = typeof m == "function" ? m : Fe(+m)), d) : t;
    }),
    (d.y1 = function (m) {
      return arguments.length
        ? ((n = m == null ? null : typeof m == "function" ? m : Fe(+m)), d)
        : n;
    }),
    (d.lineX0 = d.lineY0 =
      function () {
        return p().x(e).y(t);
      }),
    (d.lineY1 = function () {
      return p().x(e).y(n);
    }),
    (d.lineX1 = function () {
      return p().x(r).y(t);
    }),
    (d.defined = function (m) {
      return arguments.length ? ((o = typeof m == "function" ? m : Fe(!!m)), d) : o;
    }),
    (d.curve = function (m) {
      return arguments.length ? ((l = m), s != null && (c = l(s)), d) : l;
    }),
    (d.context = function (m) {
      return arguments.length ? (m == null ? (s = c = null) : (c = l((s = m))), d) : s;
    }),
    d
  );
}
class qA {
  constructor(t, n) {
    ((this._context = t), (this._x = n));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0: {
        ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              n,
              t,
              n,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + n) / 2),
              t,
              this._y0,
              t,
              n,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = n));
  }
}
function p$(e) {
  return new qA(e, !0);
}
function m$(e) {
  return new qA(e, !1);
}
const hg = {
    draw(e, t) {
      const n = Un(t / gc);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, vf));
    },
  },
  v$ = {
    draw(e, t) {
      const n = Un(t / 5) / 2;
      (e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath());
    },
  },
  YA = Un(1 / 3),
  g$ = YA * 2,
  y$ = {
    draw(e, t) {
      const n = Un(t / g$),
        r = n * YA;
      (e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath());
    },
  },
  x$ = {
    draw(e, t) {
      const n = Un(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  w$ = 0.8908130915292852,
  GA = vc(gc / 10) / vc((7 * gc) / 10),
  b$ = vc(vf / 10) * GA,
  S$ = -VA(vf / 10) * GA,
  P$ = {
    draw(e, t) {
      const n = Un(t * w$),
        r = b$ * n,
        o = S$ * n;
      (e.moveTo(0, -n), e.lineTo(r, o));
      for (let s = 1; s < 5; ++s) {
        const l = (vf * s) / 5,
          c = VA(l),
          f = vc(l);
        (e.lineTo(f * n, -c * n), e.lineTo(c * r - f * o, f * r + c * o));
      }
      e.closePath();
    },
  },
  pp = Un(3),
  E$ = {
    draw(e, t) {
      const n = -Un(t / (pp * 3));
      (e.moveTo(0, n * 2), e.lineTo(-pp * n, -n), e.lineTo(pp * n, -n), e.closePath());
    },
  },
  vn = -0.5,
  gn = Un(3) / 2,
  Qm = 1 / Un(12),
  C$ = (Qm / 2 + 1) * 3,
  A$ = {
    draw(e, t) {
      const n = Un(t / C$),
        r = n / 2,
        o = n * Qm,
        s = r,
        l = n * Qm + n,
        c = -s,
        f = l;
      (e.moveTo(r, o),
        e.lineTo(s, l),
        e.lineTo(c, f),
        e.lineTo(vn * r - gn * o, gn * r + vn * o),
        e.lineTo(vn * s - gn * l, gn * s + vn * l),
        e.lineTo(vn * c - gn * f, gn * c + vn * f),
        e.lineTo(vn * r + gn * o, vn * o - gn * r),
        e.lineTo(vn * s + gn * l, vn * l - gn * s),
        e.lineTo(vn * c + gn * f, vn * f - gn * c),
        e.closePath());
    },
  };
function T$(e, t) {
  let n = null,
    r = fg(o);
  ((e = typeof e == "function" ? e : Fe(e || hg)),
    (t = typeof t == "function" ? t : Fe(t === void 0 ? 64 : +t)));
  function o() {
    let s;
    if ((n || (n = s = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), s))
      return ((n = null), s + "" || null);
  }
  return (
    (o.type = function (s) {
      return arguments.length ? ((e = typeof s == "function" ? s : Fe(s)), o) : e;
    }),
    (o.size = function (s) {
      return arguments.length ? ((t = typeof s == "function" ? s : Fe(+s)), o) : t;
    }),
    (o.context = function (s) {
      return arguments.length ? ((n = s ?? null), o) : n;
    }),
    o
  );
}
function yc() {}
function xc(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function XA(e) {
  this._context = e;
}
XA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        xc(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
      default:
        xc(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function k$(e) {
  return new XA(e);
}
function ZA(e) {
  this._context = e;
}
ZA.prototype = {
  areaStart: yc,
  areaEnd: yc,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        xc(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function O$(e) {
  return new ZA(e);
}
function QA(e) {
  this._context = e;
}
QA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        xc(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function _$(e) {
  return new QA(e);
}
function JA(e) {
  this._context = e;
}
JA.prototype = {
  areaStart: yc,
  areaEnd: yc,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function M$(e) {
  return new JA(e);
}
function qw(e) {
  return e < 0 ? -1 : 1;
}
function Yw(e, t, n) {
  var r = e._x1 - e._x0,
    o = t - e._x1,
    s = (e._y1 - e._y0) / (r || (o < 0 && -0)),
    l = (n - e._y1) / (o || (r < 0 && -0)),
    c = (s * o + l * r) / (r + o);
  return (qw(s) + qw(l)) * Math.min(Math.abs(s), Math.abs(l), 0.5 * Math.abs(c)) || 0;
}
function Gw(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function mp(e, t, n) {
  var r = e._x0,
    o = e._y0,
    s = e._x1,
    l = e._y1,
    c = (s - r) / 3;
  e._context.bezierCurveTo(r + c, o + c * t, s - c, l - c * n, s, l);
}
function wc(e) {
  this._context = e;
}
wc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        mp(this, this._t0, Gw(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), mp(this, Gw(this, (n = Yw(this, e, t))), n));
          break;
        default:
          mp(this, this._t0, (n = Yw(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function eT(e) {
  this._context = new tT(e);
}
(eT.prototype = Object.create(wc.prototype)).point = function (e, t) {
  wc.prototype.point.call(this, t, e);
};
function tT(e) {
  this._context = e;
}
tT.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, o, s) {
    this._context.bezierCurveTo(t, e, r, n, s, o);
  },
};
function I$(e) {
  return new wc(e);
}
function D$(e) {
  return new eT(e);
}
function nT(e) {
  this._context = e;
}
nT.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n)
      if (
        (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = Xw(e), o = Xw(t), s = 0, l = 1; l < n; ++s, ++l)
          this._context.bezierCurveTo(r[0][s], o[0][s], r[1][s], o[1][s], e[l], t[l]);
    ((this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function Xw(e) {
  var t,
    n = e.length - 1,
    r,
    o = new Array(n),
    s = new Array(n),
    l = new Array(n);
  for (o[0] = 0, s[0] = 2, l[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    ((o[t] = 1), (s[t] = 4), (l[t] = 4 * e[t] + 2 * e[t + 1]));
  for (o[n - 1] = 2, s[n - 1] = 7, l[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    ((r = o[t] / s[t - 1]), (s[t] -= r), (l[t] -= r * l[t - 1]));
  for (o[n - 1] = l[n - 1] / s[n - 1], t = n - 2; t >= 0; --t) o[t] = (l[t] - o[t + 1]) / s[t];
  for (s[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) s[t] = 2 * e[t + 1] - o[t + 1];
  return [o, s];
}
function j$(e) {
  return new nT(e);
}
function yf(e, t) {
  ((this._context = e), (this._t = t));
}
yf.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function N$(e) {
  return new yf(e, 0.5);
}
function R$(e) {
  return new yf(e, 0);
}
function L$(e) {
  return new yf(e, 1);
}
function Ji(e, t) {
  if ((l = e.length) > 1)
    for (var n = 1, r, o, s = e[t[0]], l, c = s.length; n < l; ++n)
      for (o = s, s = e[t[n]], r = 0; r < c; ++r)
        s[r][1] += s[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function Jm(e) {
  for (var t = e.length, n = new Array(t); --t >= 0;) n[t] = t;
  return n;
}
function $$(e, t) {
  return e[t];
}
function z$(e) {
  const t = [];
  return ((t.key = e), t);
}
function F$() {
  var e = Fe([]),
    t = Jm,
    n = Ji,
    r = $$;
  function o(s) {
    var l = Array.from(e.apply(this, arguments), z$),
      c,
      f = l.length,
      d = -1,
      p;
    for (const m of s) for (c = 0, ++d; c < f; ++c) (l[c][d] = [0, +r(m, l[c].key, d, s)]).data = m;
    for (c = 0, p = dg(t(l)); c < f; ++c) l[p[c]].index = c;
    return (n(l, p), l);
  }
  return (
    (o.keys = function (s) {
      return arguments.length ? ((e = typeof s == "function" ? s : Fe(Array.from(s))), o) : e;
    }),
    (o.value = function (s) {
      return arguments.length ? ((r = typeof s == "function" ? s : Fe(+s)), o) : r;
    }),
    (o.order = function (s) {
      return arguments.length
        ? ((t = s == null ? Jm : typeof s == "function" ? s : Fe(Array.from(s))), o)
        : t;
    }),
    (o.offset = function (s) {
      return arguments.length ? ((n = s ?? Ji), o) : n;
    }),
    o
  );
}
function V$(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, o = 0, s = e[0].length, l; o < s; ++o) {
      for (l = n = 0; n < r; ++n) l += e[n][o][1] || 0;
      if (l) for (n = 0; n < r; ++n) e[n][o][1] /= l;
    }
    Ji(e, t);
  }
}
function B$(e, t) {
  if ((o = e.length) > 0) {
    for (var n = 0, r = e[t[0]], o, s = r.length; n < s; ++n) {
      for (var l = 0, c = 0; l < o; ++l) c += e[l][n][1] || 0;
      r[n][1] += r[n][0] = -c / 2;
    }
    Ji(e, t);
  }
}
function U$(e, t) {
  if (!(!((l = e.length) > 0) || !((s = (o = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, o, s, l; r < s; ++r) {
      for (var c = 0, f = 0, d = 0; c < l; ++c) {
        for (
          var p = e[t[c]], m = p[r][1] || 0, g = p[r - 1][1] || 0, x = (m - g) / 2, b = 0;
          b < c;
          ++b
        ) {
          var w = e[t[b]],
            S = w[r][1] || 0,
            C = w[r - 1][1] || 0;
          x += S - C;
        }
        ((f += m), (d += x * m));
      }
      ((o[r - 1][1] += o[r - 1][0] = n), f && (n -= d / f));
    }
    ((o[r - 1][1] += o[r - 1][0] = n), Ji(e, t));
  }
}
var vp = {},
  gp = {},
  Zw;
function W$() {
  return (
    Zw ||
      ((Zw = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          return n === "__proto__";
        }
        e.isUnsafeProperty = t;
      })(gp)),
    gp
  );
}
var yp = {},
  Qw;
function K$() {
  return (
    Qw ||
      ((Qw = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          switch (typeof n) {
            case "number":
            case "symbol":
              return !1;
            case "string":
              return n.includes(".") || n.includes("[") || n.includes("]");
          }
        }
        e.isDeepKey = t;
      })(yp)),
    yp
  );
}
var xp = {},
  Jw;
function rT() {
  return (
    Jw ||
      ((Jw = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          var r;
          return typeof n == "string" || typeof n == "symbol"
            ? n
            : Object.is((r = n == null ? void 0 : n.valueOf) == null ? void 0 : r.call(n), -0)
              ? "-0"
              : String(n);
        }
        e.toKey = t;
      })(xp)),
    xp
  );
}
var wp = {},
  bp = {},
  eb;
function H$() {
  return (
    eb ||
      ((eb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          if (n == null) return "";
          if (typeof n == "string") return n;
          if (Array.isArray(n)) return n.map(t).join(",");
          const r = String(n);
          return r === "0" && Object.is(Number(n), -0) ? "-0" : r;
        }
        e.toString = t;
      })(bp)),
    bp
  );
}
var tb;
function iT() {
  return (
    tb ||
      ((tb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = H$(),
          n = rT();
        function r(o) {
          if (Array.isArray(o)) return o.map(n.toKey);
          if (typeof o == "symbol") return [o];
          o = t.toString(o);
          const s = [],
            l = o.length;
          if (l === 0) return s;
          let c = 0,
            f = "",
            d = "",
            p = !1;
          for (o.charCodeAt(0) === 46 && (s.push(""), c++); c < l;) {
            const m = o[c];
            (d
              ? m === "\\" && c + 1 < l
                ? (c++, (f += o[c]))
                : m === d
                  ? (d = "")
                  : (f += m)
              : p
                ? m === '"' || m === "'"
                  ? (d = m)
                  : m === "]"
                    ? ((p = !1), s.push(f), (f = ""))
                    : (f += m)
                : m === "["
                  ? ((p = !0), f && (s.push(f), (f = "")))
                  : m === "."
                    ? f && (s.push(f), (f = ""))
                    : (f += m),
              c++);
          }
          return (f && s.push(f), s);
        }
        e.toPath = r;
      })(wp)),
    wp
  );
}
var nb;
function q$() {
  return (
    nb ||
      ((nb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = W$(),
          n = K$(),
          r = rT(),
          o = iT();
        function s(c, f, d) {
          if (c == null) return d;
          switch (typeof f) {
            case "string": {
              if (t.isUnsafeProperty(f)) return d;
              const p = c[f];
              return p === void 0 ? (n.isDeepKey(f) ? s(c, o.toPath(f), d) : d) : p;
            }
            case "number":
            case "symbol": {
              typeof f == "number" && (f = r.toKey(f));
              const p = c[f];
              return p === void 0 ? d : p;
            }
            default: {
              if (Array.isArray(f)) return l(c, f, d);
              if (
                (Object.is(f == null ? void 0 : f.valueOf(), -0) ? (f = "-0") : (f = String(f)),
                t.isUnsafeProperty(f))
              )
                return d;
              const p = c[f];
              return p === void 0 ? d : p;
            }
          }
        }
        function l(c, f, d) {
          if (f.length === 0) return d;
          let p = c;
          for (let m = 0; m < f.length; m++) {
            if (p == null || t.isUnsafeProperty(f[m])) return d;
            p = p[f[m]];
          }
          return p === void 0 ? d : p;
        }
        e.get = s;
      })(vp)),
    vp
  );
}
var Sp, rb;
function Y$() {
  return (rb || ((rb = 1), (Sp = q$().get)), Sp);
}
var G$ = Y$();
const bc = ao(G$);
var X$ = 4;
function ii(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X$,
    n = 10 ** t,
    r = Math.round(e * n) / n;
  return Object.is(r, -0) ? 0 : r;
}
function Qe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return e.reduce((o, s, l) => {
    var c = n[l - 1];
    return typeof c == "string" ? o + c + s : c !== void 0 ? o + ii(c) + s : o + s;
  }, "");
}
var wn = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  ur = (e) => typeof e == "number" && e != +e,
  eo = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1,
  Ee = (e) => (typeof e == "number" || e instanceof Number) && !ur(e),
  Ds = (e) => Ee(e) || typeof e == "string",
  Z$ = 0,
  js = (e) => {
    var t = ++Z$;
    return "".concat(e || "").concat(t);
  },
  Vn = function (t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!Ee(t) && typeof t != "string") return r;
    var s;
    if (eo(t)) {
      if (n == null) return r;
      var l = t.indexOf("%");
      s = (n * parseFloat(t.slice(0, l))) / 100;
    } else s = +t;
    return (ur(s) && (s = r), o && n != null && s > n && (s = n), s);
  },
  oT = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[String(e[r])]) n[String(e[r])] = !0;
      else return !0;
    return !1;
  };
function At(e, t, n) {
  return Ee(e) && Ee(t) ? ii(e + n * (t - e)) : t;
}
function Q$(e, t, n) {
  if (!(!e || !e.length))
    return e.find((r) => r && (typeof t == "function" ? t(r) : bc(r, t)) === n);
}
var mt = (e) => e === null || typeof e > "u",
  Zs = (e) => (mt(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function nr(e) {
  return e != null;
}
function Qs() {}
var J$ = ["type", "size", "sizeType"];
function ev() {
  return (
    (ev = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ev.apply(null, arguments)
  );
}
function ib(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ob(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ib(Object(n), !0).forEach(function (r) {
          e3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ib(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function e3(e, t, n) {
  return (
    (t = t3(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function t3(e) {
  var t = n3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function n3(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r3(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = i3(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function i3(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var aT = {
    symbolCircle: hg,
    symbolCross: v$,
    symbolDiamond: y$,
    symbolSquare: x$,
    symbolStar: P$,
    symbolTriangle: E$,
    symbolWye: A$,
  },
  o3 = Math.PI / 180,
  a3 = (e) => {
    var t = "symbol".concat(Zs(e));
    return aT[t] || hg;
  },
  s3 = (e, t, n) => {
    if (t === "area") return e;
    switch (n) {
      case "cross":
        return (5 * e * e) / 9;
      case "diamond":
        return (0.5 * e * e) / Math.sqrt(3);
      case "square":
        return e * e;
      case "star": {
        var r = 18 * o3;
        return 1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2);
      }
      case "triangle":
        return (Math.sqrt(3) * e * e) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  l3 = (e, t) => {
    aT["symbol".concat(Zs(e))] = t;
  },
  sT = (e) => {
    var { type: t = "circle", size: n = 64, sizeType: r = "area" } = e,
      o = r3(e, J$),
      s = ob(ob({}, o), {}, { type: t, size: n, sizeType: r }),
      l = "circle";
    typeof t == "string" && (l = t);
    var c = () => {
        var g = a3(l),
          x = T$()
            .type(g)
            .size(s3(n, r, l)),
          b = x();
        if (b !== null) return b;
      },
      { className: f, cx: d, cy: p } = s,
      m = Fn(s);
    return Ee(d) && Ee(p) && Ee(n)
      ? E.createElement(
          "path",
          ev({}, m, {
            className: un("recharts-symbols", f),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: c(),
          }),
        )
      : null;
  };
sT.registerSymbol = l3;
var u3 = (e, t) => {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var n = e;
    if ((E.isValidElement(e) && (n = e.props), typeof n != "object" && typeof n != "function"))
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((o) => {
        cg(o) && typeof n[o] == "function" && (r[o] = (s) => n[o](n, s));
      }),
      r
    );
  },
  c3 = (e, t, n) => (r) => (e(t, n, r), null),
  lT = (e, t, n) => {
    if (e === null || (typeof e != "object" && typeof e != "function")) return null;
    var r = null;
    return (
      Object.keys(e).forEach((o) => {
        var s = e[o];
        cg(o) && typeof s == "function" && (r || (r = {}), (r[o] = c3(s, t, n)));
      }),
      r
    );
  };
function ab(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function f3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ab(Object(n), !0).forEach(function (r) {
          d3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ab(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function d3(e, t, n) {
  return (
    (t = h3(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function h3(e) {
  var t = p3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function p3(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pi(e, t) {
  var n = f3({}, e),
    r = t,
    o = Object.keys(t),
    s = o.reduce((l, c) => (l[c] === void 0 && r[c] !== void 0 && (l[c] = r[c]), l), n);
  return s;
}
var Pp = {},
  Ep = {},
  sb;
function m3() {
  return (
    sb ||
      ((sb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          return Number.isSafeInteger(n) && n >= 0;
        }
        e.isLength = t;
      })(Ep)),
    Ep
  );
}
var lb;
function v3() {
  return (
    lb ||
      ((lb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = m3();
        function n(r) {
          return r != null && typeof r != "function" && t.isLength(r.length);
        }
        e.isArrayLike = n;
      })(Pp)),
    Pp
  );
}
var Cp = {},
  ub;
function g3() {
  return (
    ub ||
      ((ub = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          return n !== null && (typeof n == "object" || typeof n == "function");
        }
        e.isObject = t;
      })(Cp)),
    Cp
  );
}
var Ap = {},
  cb;
function y3() {
  return (
    cb ||
      ((cb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n, r) {
          return n === r || (Number.isNaN(n) && Number.isNaN(r));
        }
        e.isEqualsSameValueZero = t;
      })(Ap)),
    Ap
  );
}
var Tp = {},
  fb;
function x3() {
  return (
    fb ||
      ((fb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = /^(?:0|[1-9]\d*)$/;
        function n(r, o = Number.MAX_SAFE_INTEGER) {
          switch (typeof r) {
            case "number":
              return Number.isInteger(r) && r >= 0 && r < o;
            case "symbol":
              return !1;
            case "string":
              return t.test(r);
          }
        }
        e.isIndex = n;
      })(Tp)),
    Tp
  );
}
var kp = { exports: {} },
  Op = {},
  _p = { exports: {} },
  Mp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var db;
function w3() {
  if (db) return Mp;
  db = 1;
  var e = da();
  function t(m, g) {
    return (m === g && (m !== 0 || 1 / m === 1 / g)) || (m !== m && g !== g);
  }
  var n = typeof Object.is == "function" ? Object.is : t,
    r = e.useState,
    o = e.useEffect,
    s = e.useLayoutEffect,
    l = e.useDebugValue;
  function c(m, g) {
    var x = g(),
      b = r({ inst: { value: x, getSnapshot: g } }),
      w = b[0].inst,
      S = b[1];
    return (
      s(
        function () {
          ((w.value = x), (w.getSnapshot = g), f(w) && S({ inst: w }));
        },
        [m, x, g],
      ),
      o(
        function () {
          return (
            f(w) && S({ inst: w }),
            m(function () {
              f(w) && S({ inst: w });
            })
          );
        },
        [m],
      ),
      l(x),
      x
    );
  }
  function f(m) {
    var g = m.getSnapshot;
    m = m.value;
    try {
      var x = g();
      return !n(m, x);
    } catch {
      return !0;
    }
  }
  function d(m, g) {
    return g();
  }
  var p =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? d
      : c;
  return (
    (Mp.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p),
    Mp
  );
}
var hb;
function b3() {
  return (hb || ((hb = 1), (_p.exports = w3())), _p.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pb;
function S3() {
  if (pb) return Op;
  pb = 1;
  var e = da(),
    t = b3();
  function n(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : n,
    o = t.useSyncExternalStore,
    s = e.useRef,
    l = e.useEffect,
    c = e.useMemo,
    f = e.useDebugValue;
  return (
    (Op.useSyncExternalStoreWithSelector = function (d, p, m, g, x) {
      var b = s(null);
      if (b.current === null) {
        var w = { hasValue: !1, value: null };
        b.current = w;
      } else w = b.current;
      b = c(
        function () {
          function C(I) {
            if (!A) {
              if (((A = !0), (k = I), (I = g(I)), x !== void 0 && w.hasValue)) {
                var R = w.value;
                if (x(R, I)) return (O = R);
              }
              return (O = I);
            }
            if (((R = O), r(k, I))) return R;
            var F = g(I);
            return x !== void 0 && x(R, F) ? ((k = I), R) : ((k = I), (O = F));
          }
          var A = !1,
            k,
            O,
            _ = m === void 0 ? null : m;
          return [
            function () {
              return C(p());
            },
            _ === null
              ? void 0
              : function () {
                  return C(_());
                },
          ];
        },
        [p, m, g, x],
      );
      var S = o(d, b[0], b[1]);
      return (
        l(
          function () {
            ((w.hasValue = !0), (w.value = S));
          },
          [S],
        ),
        f(S),
        S
      );
    }),
    Op
  );
}
var mb;
function P3() {
  return (mb || ((mb = 1), (kp.exports = S3())), kp.exports);
}
var E3 = P3(),
  pg = E.createContext(null),
  C3 = (e) => e,
  vt = () => {
    var e = E.useContext(pg);
    return e ? e.store.dispatch : C3;
  },
  tc = () => {},
  A3 = () => tc,
  T3 = (e, t) => e === t;
function Ve(e) {
  var t = E.useContext(pg),
    n = E.useMemo(
      () =>
        t
          ? (r) => {
              if (r != null) return e(r);
            }
          : tc,
      [t, e],
    );
  return E3.useSyncExternalStoreWithSelector(
    t ? t.subscription.addNestedSub : A3,
    t ? t.store.getState : tc,
    t ? t.store.getState : tc,
    n,
    T3,
  );
}
function k3(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function O3(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function _3(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) => (typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r))
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var vb = (e) => (Array.isArray(e) ? e : [e]);
function M3(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    _3(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function I3(e, t) {
  const n = [],
    { length: r } = e;
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
  return n;
}
var D3 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  j3 = typeof WeakRef < "u" ? WeakRef : D3,
  N3 = 0,
  gb = 1;
function Mu() {
  return { s: N3, v: void 0, o: null, p: null };
}
function uT(e, t = {}) {
  let n = Mu();
  const { resultEqualityCheck: r } = t;
  let o,
    s = 0;
  function l() {
    var m;
    let c = n;
    const { length: f } = arguments;
    for (let g = 0, x = f; g < x; g++) {
      const b = arguments[g];
      if (typeof b == "function" || (typeof b == "object" && b !== null)) {
        let w = c.o;
        w === null && (c.o = w = new WeakMap());
        const S = w.get(b);
        S === void 0 ? ((c = Mu()), w.set(b, c)) : (c = S);
      } else {
        let w = c.p;
        w === null && (c.p = w = new Map());
        const S = w.get(b);
        S === void 0 ? ((c = Mu()), w.set(b, c)) : (c = S);
      }
    }
    const d = c;
    let p;
    if (c.s === gb) p = c.v;
    else if (((p = e.apply(null, arguments)), s++, r)) {
      const g = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      (g != null && r(g, p) && ((p = g), s !== 0 && s--),
        (o = (typeof p == "object" && p !== null) || typeof p == "function" ? new j3(p) : p));
    }
    return ((d.s = gb), (d.v = p), p);
  }
  return (
    (l.clearCache = () => {
      ((n = Mu()), l.resetResultsCount());
    }),
    (l.resultsCount = () => s),
    (l.resetResultsCount = () => {
      s = 0;
    }),
    l
  );
}
function R3(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...o) => {
      let s = 0,
        l = 0,
        c,
        f = {},
        d = o.pop();
      (typeof d == "object" && ((f = d), (d = o.pop())),
        k3(
          d,
          `createSelector expects an output function after the inputs, but received: [${typeof d}]`,
        ));
      const p = { ...n, ...f },
        { memoize: m, memoizeOptions: g = [], argsMemoize: x = uT, argsMemoizeOptions: b = [] } = p,
        w = vb(g),
        S = vb(b),
        C = M3(o),
        A = m(
          function () {
            return (s++, d.apply(null, arguments));
          },
          ...w,
        ),
        k = x(
          function () {
            l++;
            const _ = I3(C, arguments);
            return ((c = A.apply(null, _)), c);
          },
          ...S,
        );
      return Object.assign(k, {
        resultFunc: d,
        memoizedResultFunc: A,
        dependencies: C,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0;
        },
        lastResult: () => c,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: m,
        argsMemoize: x,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var z = R3(uT),
  L3 = Object.assign(
    (e, t = z) => {
      O3(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        r = n.map((s) => e[s]);
      return t(r, (...s) => s.reduce((l, c, f) => ((l[n[f]] = c), l), {}));
    },
    { withTypes: () => L3 },
  ),
  Ip = {},
  Dp = {},
  jp = {},
  yb;
function $3() {
  return (
    yb ||
      ((yb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return typeof r == "symbol" ? 1 : r === null ? 2 : r === void 0 ? 3 : r !== r ? 4 : 0;
        }
        const n = (r, o, s) => {
          if (r !== o) {
            const l = t(r),
              c = t(o);
            if (l === c && l === 0) {
              if (r < o) return s === "desc" ? 1 : -1;
              if (r > o) return s === "desc" ? -1 : 1;
            }
            return s === "desc" ? c - l : l - c;
          }
          return 0;
        };
        e.compareValues = n;
      })(jp)),
    jp
  );
}
var Np = {},
  Rp = {},
  xb;
function cT() {
  return (
    xb ||
      ((xb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          return typeof n == "symbol" || n instanceof Symbol;
        }
        e.isSymbol = t;
      })(Rp)),
    Rp
  );
}
var wb;
function z3() {
  return (
    wb ||
      ((wb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = cT(),
          n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          r = /^\w*$/;
        function o(s, l) {
          return Array.isArray(s)
            ? !1
            : typeof s == "number" || typeof s == "boolean" || s == null || t.isSymbol(s)
              ? !0
              : (typeof s == "string" && (r.test(s) || !n.test(s))) ||
                (l != null && Object.hasOwn(l, s));
        }
        e.isKey = o;
      })(Np)),
    Np
  );
}
var bb;
function F3() {
  return (
    bb ||
      ((bb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = $3(),
          n = z3(),
          r = iT();
        function o(s, l, c, f) {
          if (s == null) return [];
          ((c = f ? void 0 : c),
            Array.isArray(s) || (s = Object.values(s)),
            Array.isArray(l) || (l = l == null ? [null] : [l]),
            l.length === 0 && (l = [null]),
            Array.isArray(c) || (c = c == null ? [] : [c]),
            (c = c.map((x) => String(x))));
          const d = (x, b) => {
              let w = x;
              for (let S = 0; S < b.length && w != null; ++S) w = w[b[S]];
              return w;
            },
            p = (x, b) =>
              b == null || x == null
                ? b
                : typeof x == "object" && "key" in x
                  ? Object.hasOwn(b, x.key)
                    ? b[x.key]
                    : d(b, x.path)
                  : typeof x == "function"
                    ? x(b)
                    : Array.isArray(x)
                      ? d(b, x)
                      : typeof b == "object"
                        ? b[x]
                        : b,
            m = l.map(
              (x) => (
                Array.isArray(x) && x.length === 1 && (x = x[0]),
                x == null || typeof x == "function" || Array.isArray(x) || n.isKey(x)
                  ? x
                  : { key: x, path: r.toPath(x) }
              ),
            );
          return s
            .map((x) => ({ original: x, criteria: m.map((b) => p(b, x)) }))
            .slice()
            .sort((x, b) => {
              for (let w = 0; w < m.length; w++) {
                const S = t.compareValues(x.criteria[w], b.criteria[w], c[w]);
                if (S !== 0) return S;
              }
              return 0;
            })
            .map((x) => x.original);
        }
        e.orderBy = o;
      })(Dp)),
    Dp
  );
}
var Lp = {},
  Sb;
function V3() {
  return (
    Sb ||
      ((Sb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n, r = 1) {
          const o = [],
            s = Math.floor(r),
            l = (c, f) => {
              for (let d = 0; d < c.length; d++) {
                const p = c[d];
                Array.isArray(p) && f < s ? l(p, f + 1) : o.push(p);
              }
            };
          return (l(n, 0), o);
        }
        e.flatten = t;
      })(Lp)),
    Lp
  );
}
var $p = {},
  Pb;
function fT() {
  return (
    Pb ||
      ((Pb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = x3(),
          n = v3(),
          r = g3(),
          o = y3();
        function s(l, c, f) {
          return r.isObject(f) &&
            ((typeof c == "number" && n.isArrayLike(f) && t.isIndex(c) && c < f.length) ||
              (typeof c == "string" && c in f))
            ? o.isEqualsSameValueZero(f[c], l)
            : !1;
        }
        e.isIterateeCall = s;
      })($p)),
    $p
  );
}
var Eb;
function B3() {
  return (
    Eb ||
      ((Eb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = F3(),
          n = V3(),
          r = fT();
        function o(s, ...l) {
          const c = l.length;
          return (
            c > 1 && r.isIterateeCall(s, l[0], l[1])
              ? (l = [])
              : c > 2 && r.isIterateeCall(l[0], l[1], l[2]) && (l = [l[0]]),
            t.orderBy(s, n.flatten(l), ["asc"])
          );
        }
        e.sortBy = o;
      })(Ip)),
    Ip
  );
}
var zp, Cb;
function U3() {
  return (Cb || ((Cb = 1), (zp = B3().sortBy)), zp);
}
var W3 = U3();
const mg = ao(W3);
var dT = (e) => e.legend.settings,
  K3 = (e) => e.legend.size,
  H3 = (e) => e.legend.payload;
z([H3, dT], (e, t) => {
  var { itemSorter: n } = t,
    r = e.flat(1);
  return n ? mg(r, n) : r;
});
function Pt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var q3 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Ab = q3,
  Fp = () => Math.random().toString(36).substring(7).split("").join("."),
  Y3 = {
    INIT: `@@redux/INIT${Fp()}`,
    REPLACE: `@@redux/REPLACE${Fp()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Fp()}`,
  },
  Sc = Y3;
function vg(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function hT(e, t, n) {
  if (typeof e != "function") throw new Error(Pt(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Pt(0));
  if ((typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)), typeof n < "u")) {
    if (typeof n != "function") throw new Error(Pt(1));
    return n(hT)(e, t);
  }
  let r = e,
    o = t,
    s = new Map(),
    l = s,
    c = 0,
    f = !1;
  function d() {
    l === s &&
      ((l = new Map()),
      s.forEach((S, C) => {
        l.set(C, S);
      }));
  }
  function p() {
    if (f) throw new Error(Pt(3));
    return o;
  }
  function m(S) {
    if (typeof S != "function") throw new Error(Pt(4));
    if (f) throw new Error(Pt(5));
    let C = !0;
    d();
    const A = c++;
    return (
      l.set(A, S),
      function () {
        if (C) {
          if (f) throw new Error(Pt(6));
          ((C = !1), d(), l.delete(A), (s = null));
        }
      }
    );
  }
  function g(S) {
    if (!vg(S)) throw new Error(Pt(7));
    if (typeof S.type > "u") throw new Error(Pt(8));
    if (typeof S.type != "string") throw new Error(Pt(17));
    if (f) throw new Error(Pt(9));
    try {
      ((f = !0), (o = r(o, S)));
    } finally {
      f = !1;
    }
    return (
      (s = l).forEach((A) => {
        A();
      }),
      S
    );
  }
  function x(S) {
    if (typeof S != "function") throw new Error(Pt(10));
    ((r = S), g({ type: Sc.REPLACE }));
  }
  function b() {
    const S = m;
    return {
      subscribe(C) {
        if (typeof C != "object" || C === null) throw new Error(Pt(11));
        function A() {
          const O = C;
          O.next && O.next(p());
        }
        return (A(), { unsubscribe: S(A) });
      },
      [Ab]() {
        return this;
      },
    };
  }
  return (
    g({ type: Sc.INIT }),
    { dispatch: g, subscribe: m, getState: p, replaceReducer: x, [Ab]: b }
  );
}
function G3(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Sc.INIT }) > "u") throw new Error(Pt(12));
    if (typeof n(void 0, { type: Sc.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(Pt(13));
  });
}
function pT(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const l = t[s];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let o;
  try {
    G3(n);
  } catch (s) {
    o = s;
  }
  return function (l = {}, c) {
    if (o) throw o;
    let f = !1;
    const d = {};
    for (let p = 0; p < r.length; p++) {
      const m = r[p],
        g = n[m],
        x = l[m],
        b = g(x, c);
      if (typeof b > "u") throw (c && c.type, new Error(Pt(14)));
      ((d[m] = b), (f = f || b !== x));
    }
    return ((f = f || r.length !== Object.keys(l).length), f ? d : l);
  };
}
function Pc(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function X3(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let s = () => {
      throw new Error(Pt(15));
    };
    const l = { getState: o.getState, dispatch: (f, ...d) => s(f, ...d) },
      c = e.map((f) => f(l));
    return ((s = Pc(...c)(o.dispatch)), { ...o, dispatch: s });
  };
}
function mT(e) {
  return vg(e) && "type" in e && typeof e.type == "string";
}
var vT = Symbol.for("immer-nothing"),
  Tb = Symbol.for("immer-draftable"),
  Bt = Symbol.for("immer-state");
function Rn(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var nn = Object,
  na = nn.getPrototypeOf,
  Ec = "constructor",
  xf = "prototype",
  tv = "configurable",
  Cc = "enumerable",
  nc = "writable",
  Ns = "value",
  Cr = (e) => !!e && !!e[Bt];
function Bn(e) {
  var t;
  return e ? gT(e) || bf(e) || !!e[Tb] || !!((t = e[Ec]) != null && t[Tb]) || Sf(e) || Pf(e) : !1;
}
var Z3 = nn[xf][Ec].toString(),
  kb = new WeakMap();
function gT(e) {
  if (!e || !gg(e)) return !1;
  const t = na(e);
  if (t === null || t === nn[xf]) return !0;
  const n = nn.hasOwnProperty.call(t, Ec) && t[Ec];
  if (n === Object) return !0;
  if (!Ko(n)) return !1;
  let r = kb.get(n);
  return (r === void 0 && ((r = Function.toString.call(n)), kb.set(n, r)), r === Z3);
}
function wf(e, t, n = !0) {
  Js(e) === 0
    ? (n ? Reflect.ownKeys(e) : nn.keys(e)).forEach((o) => {
        t(o, e[o], e);
      })
    : e.forEach((r, o) => t(o, r, e));
}
function Js(e) {
  const t = e[Bt];
  return t ? t.type_ : bf(e) ? 1 : Sf(e) ? 2 : Pf(e) ? 3 : 0;
}
var Ob = (e, t, n = Js(e)) => (n === 2 ? e.has(t) : nn[xf].hasOwnProperty.call(e, t)),
  nv = (e, t, n = Js(e)) => (n === 2 ? e.get(t) : e[t]),
  Ac = (e, t, n, r = Js(e)) => {
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
  };
function Q3(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var bf = Array.isArray,
  Sf = (e) => e instanceof Map,
  Pf = (e) => e instanceof Set,
  gg = (e) => typeof e == "object",
  Ko = (e) => typeof e == "function",
  Vp = (e) => typeof e == "boolean";
function J3(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var br = (e) => e.copy_ || e.base_,
  yg = (e) => (e.modified_ ? e.copy_ : e.base_);
function rv(e, t) {
  if (Sf(e)) return new Map(e);
  if (Pf(e)) return new Set(e);
  if (bf(e)) return Array[xf].slice.call(e);
  const n = gT(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = nn.getOwnPropertyDescriptors(e);
    delete r[Bt];
    let o = Reflect.ownKeys(r);
    for (let s = 0; s < o.length; s++) {
      const l = o[s],
        c = r[l];
      (c[nc] === !1 && ((c[nc] = !0), (c[tv] = !0)),
        (c.get || c.set) && (r[l] = { [tv]: !0, [nc]: !0, [Cc]: c[Cc], [Ns]: e[l] }));
    }
    return nn.create(na(e), r);
  } else {
    const r = na(e);
    if (r !== null && n) return { ...e };
    const o = nn.create(r);
    return nn.assign(o, e);
  }
}
function xg(e, t = !1) {
  return (
    Ef(e) ||
      Cr(e) ||
      !Bn(e) ||
      (Js(e) > 1 && nn.defineProperties(e, { set: Iu, add: Iu, clear: Iu, delete: Iu }),
      nn.freeze(e),
      t &&
        wf(
          e,
          (n, r) => {
            xg(r, !0);
          },
          !1,
        )),
    e
  );
}
function e4() {
  Rn(2);
}
var Iu = { [Ns]: e4 };
function Ef(e) {
  return e === null || !gg(e) ? !0 : nn.isFrozen(e);
}
var Tc = "MapSet",
  iv = "Patches",
  _b = "ArrayMethods",
  yT = {};
function to(e) {
  const t = yT[e];
  return (t || Rn(0, e), t);
}
var Mb = (e) => !!yT[e],
  Rs,
  xT = () => Rs,
  t4 = (e, t) => ({
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: Mb(Tc) ? to(Tc) : void 0,
    arrayMethodsPlugin_: Mb(_b) ? to(_b) : void 0,
  });
function Ib(e, t) {
  t &&
    ((e.patchPlugin_ = to(iv)),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function ov(e) {
  (av(e), e.drafts_.forEach(n4), (e.drafts_ = null));
}
function av(e) {
  e === Rs && (Rs = e.parent_);
}
var Db = (e) => (Rs = t4(Rs, e));
function n4(e) {
  const t = e[Bt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function jb(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  if (e !== void 0 && e !== n) {
    (n[Bt].modified_ && (ov(t), Rn(4)), Bn(e) && (e = Nb(t, e)));
    const { patchPlugin_: o } = t;
    o && o.generateReplacementPatches_(n[Bt].base_, e, t);
  } else e = Nb(t, n);
  return (
    r4(t, e, !0),
    ov(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== vT ? e : void 0
  );
}
function Nb(e, t) {
  if (Ef(t)) return t;
  const n = t[Bt];
  if (!n) return kc(t, e.handledSet_, e);
  if (!Cf(n, e)) return t;
  if (!n.modified_) return n.base_;
  if (!n.finalized_) {
    const { callbacks_: r } = n;
    if (r) for (; r.length > 0;) r.pop()(e);
    ST(n, e);
  }
  return n.copy_;
}
function r4(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && xg(t, n);
}
function wT(e) {
  ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
}
var Cf = (e, t) => e.scope_ === t,
  i4 = [];
function bT(e, t, n, r) {
  const o = br(e),
    s = e.type_;
  if (r !== void 0 && nv(o, r, s) === t) {
    Ac(o, r, n, s);
    return;
  }
  if (!e.draftLocations_) {
    const c = (e.draftLocations_ = new Map());
    wf(o, (f, d) => {
      if (Cr(d)) {
        const p = c.get(d) || [];
        (p.push(f), c.set(d, p));
      }
    });
  }
  const l = e.draftLocations_.get(t) ?? i4;
  for (const c of l) Ac(o, c, n, s);
}
function o4(e, t, n) {
  e.callbacks_.push(function (o) {
    var c;
    const s = t;
    if (!s || !Cf(s, o)) return;
    (c = o.mapSetPlugin_) == null || c.fixSetContents(s);
    const l = yg(s);
    (bT(e, s.draft_ ?? s, l, n), ST(s, o));
  });
}
function ST(e, t) {
  var r;
  if (
    e.modified_ &&
    !e.finalized_ &&
    (e.type_ === 3 ||
      (e.type_ === 1 && e.allIndicesReassigned_) ||
      (((r = e.assigned_) == null ? void 0 : r.size) ?? 0) > 0)
  ) {
    const { patchPlugin_: o } = t;
    if (o) {
      const s = o.getPath(e);
      s && o.generatePatches_(e, s, t);
    }
    wT(e);
  }
}
function a4(e, t, n) {
  const { scope_: r } = e;
  if (Cr(n)) {
    const o = n[Bt];
    Cf(o, r) &&
      o.callbacks_.push(function () {
        rc(e);
        const l = yg(o);
        bT(e, n, l, t);
      });
  } else
    Bn(n) &&
      e.callbacks_.push(function () {
        const s = br(e);
        e.type_ === 3
          ? s.has(n) && kc(n, r.handledSet_, r)
          : nv(s, t, e.type_) === n &&
            r.drafts_.length > 1 &&
            (e.assigned_.get(t) ?? !1) === !0 &&
            e.copy_ &&
            kc(nv(e.copy_, t, e.type_), r.handledSet_, r);
      });
}
function kc(e, t, n) {
  return (
    (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
      Cr(e) ||
      t.has(e) ||
      !Bn(e) ||
      Ef(e) ||
      (t.add(e),
      wf(e, (r, o) => {
        if (Cr(o)) {
          const s = o[Bt];
          if (Cf(s, n)) {
            const l = yg(s);
            (Ac(e, r, l, e.type_), wT(s));
          }
        } else Bn(o) && kc(o, t, n);
      })),
    e
  );
}
function s4(e, t) {
  const n = bf(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : xT(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    };
  let o = r,
    s = Oc;
  n && ((o = [r]), (s = Ls));
  const { revoke: l, proxy: c } = Proxy.revocable(o, s);
  return ((r.draft_ = c), (r.revoke_ = l), [c, r]);
}
var Oc = {
    get(e, t) {
      if (t === Bt) return e;
      let n = e.scope_.arrayMethodsPlugin_;
      const r = e.type_ === 1 && typeof t == "string";
      if (r && n != null && n.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
      const o = br(e);
      if (!Ob(o, t, e.type_)) return l4(e, o, t);
      const s = o[t];
      if (
        e.finalized_ ||
        !Bn(s) ||
        (r && e.operationMethod && n != null && n.isMutatingArrayMethod(e.operationMethod) && J3(t))
      )
        return s;
      if (s === Bp(e.base_, t)) {
        rc(e);
        const l = e.type_ === 1 ? +t : t,
          c = lv(e.scope_, s, e, l);
        return (e.copy_[l] = c);
      }
      return s;
    },
    has(e, t) {
      return t in br(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(br(e));
    },
    set(e, t, n) {
      const r = PT(br(e), t);
      if (r != null && r.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        const o = Bp(br(e), t),
          s = o == null ? void 0 : o[Bt];
        if (s && s.base_ === n) return ((e.copy_[t] = n), e.assigned_.set(t, !1), !0);
        if (Q3(n, o) && (n !== void 0 || Ob(e.base_, t, e.type_))) return !0;
        (rc(e), sv(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), e.assigned_.set(t, !0), a4(e, t, n)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        rc(e),
        Bp(e.base_, t) !== void 0 || t in e.base_
          ? (e.assigned_.set(t, !1), sv(e))
          : e.assigned_.delete(t),
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = br(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return r && { [nc]: !0, [tv]: e.type_ !== 1 || t !== "length", [Cc]: r[Cc], [Ns]: n[t] };
    },
    defineProperty() {
      Rn(11);
    },
    getPrototypeOf(e) {
      return na(e.base_);
    },
    setPrototypeOf() {
      Rn(12);
    },
  },
  Ls = {};
for (let e in Oc) {
  let t = Oc[e];
  Ls[e] = function () {
    const n = arguments;
    return ((n[0] = n[0][0]), t.apply(this, n));
  };
}
Ls.deleteProperty = function (e, t) {
  return Ls.set.call(this, e, t, void 0);
};
Ls.set = function (e, t, n) {
  return Oc.set.call(this, e[0], t, n, e[0]);
};
function Bp(e, t) {
  const n = e[Bt];
  return (n ? br(n) : e)[t];
}
function l4(e, t, n) {
  var o;
  const r = PT(t, n);
  return r ? (Ns in r ? r[Ns] : (o = r.get) == null ? void 0 : o.call(e.draft_)) : void 0;
}
function PT(e, t) {
  if (!(t in e)) return;
  let n = na(e);
  for (; n;) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = na(n);
  }
}
function sv(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && sv(e.parent_));
}
function rc(e) {
  e.copy_ ||
    ((e.assigned_ = new Map()), (e.copy_ = rv(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
}
var u4 = class {
  constructor(t) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (n, r, o) => {
        if (Ko(n) && !Ko(r)) {
          const l = r;
          r = n;
          const c = this;
          return function (d = l, ...p) {
            return c.produce(d, (m) => r.call(this, m, ...p));
          };
        }
        (Ko(r) || Rn(6), o !== void 0 && !Ko(o) && Rn(7));
        let s;
        if (Bn(n)) {
          const l = Db(this),
            c = lv(l, n, void 0);
          let f = !0;
          try {
            ((s = r(c)), (f = !1));
          } finally {
            f ? ov(l) : av(l);
          }
          return (Ib(l, o), jb(s, l));
        } else if (!n || !gg(n)) {
          if (
            ((s = r(n)),
            s === void 0 && (s = n),
            s === vT && (s = void 0),
            this.autoFreeze_ && xg(s, !0),
            o)
          ) {
            const l = [],
              c = [];
            (to(iv).generateReplacementPatches_(n, s, { patches_: l, inversePatches_: c }),
              o(l, c));
          }
          return s;
        } else Rn(1, n);
      }),
      (this.produceWithPatches = (n, r) => {
        if (Ko(n)) return (c, ...f) => this.produceWithPatches(c, (d) => n(d, ...f));
        let o, s;
        return [
          this.produce(n, r, (c, f) => {
            ((o = c), (s = f));
          }),
          o,
          s,
        ];
      }),
      Vp(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze),
      Vp(t == null ? void 0 : t.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy),
      Vp(t == null ? void 0 : t.useStrictIteration) &&
        this.setUseStrictIteration(t.useStrictIteration));
  }
  createDraft(t) {
    (Bn(t) || Rn(8), Cr(t) && (t = bn(t)));
    const n = Db(this),
      r = lv(n, t, void 0);
    return ((r[Bt].isManual_ = !0), av(n), r);
  }
  finishDraft(t, n) {
    const r = t && t[Bt];
    (!r || !r.isManual_) && Rn(9);
    const { scope_: o } = r;
    return (Ib(o, n), jb(void 0, o));
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, n) {
    let r;
    for (r = n.length - 1; r >= 0; r--) {
      const s = n[r];
      if (s.path.length === 0 && s.op === "replace") {
        t = s.value;
        break;
      }
    }
    r > -1 && (n = n.slice(r + 1));
    const o = to(iv).applyPatches_;
    return Cr(t) ? o(t, n) : this.produce(t, (s) => o(s, n));
  }
};
function lv(e, t, n, r) {
  const [o, s] = Sf(t) ? to(Tc).proxyMap_(t, n) : Pf(t) ? to(Tc).proxySet_(t, n) : s4(t, n);
  return (
    ((n == null ? void 0 : n.scope_) ?? xT()).drafts_.push(o),
    (s.callbacks_ = (n == null ? void 0 : n.callbacks_) ?? []),
    (s.key_ = r),
    n && r !== void 0
      ? o4(n, s, r)
      : s.callbacks_.push(function (f) {
          var p;
          (p = f.mapSetPlugin_) == null || p.fixSetContents(s);
          const { patchPlugin_: d } = f;
          s.modified_ && d && d.generatePatches_(s, [], f);
        }),
    o
  );
}
function bn(e) {
  return (Cr(e) || Rn(10, e), ET(e));
}
function ET(e) {
  if (!Bn(e) || Ef(e)) return e;
  const t = e[Bt];
  let n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = rv(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = rv(e, !0);
  return (
    wf(
      n,
      (o, s) => {
        Ac(n, o, ET(s));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var c4 = new u4(),
  CT = c4.produce;
function AT(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : o(s);
}
var f4 = AT(),
  d4 = AT,
  h4 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object" ? Pc : Pc.apply(null, arguments);
        };
function sn(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(an(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return ((n.toString = () => `${e}`), (n.type = e), (n.match = (r) => mT(r) && r.type === e), n);
}
var TT = class Ss extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, Ss.prototype));
  }
  static get [Symbol.species]() {
    return Ss;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ss(...t[0].concat(this))
      : new Ss(...t.concat(this));
  }
};
function Rb(e) {
  return Bn(e) ? CT(e, () => {}) : e;
}
function Du(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function p4(e) {
  return typeof e == "boolean";
}
var m4 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let l = new TT();
      return (n && (p4(n) ? l.push(f4) : l.push(d4(n.extraArgument))), l);
    },
  kT = "RTK_autoBatch",
  We = () => (e) => ({ payload: e, meta: { [kT]: !0 } }),
  Lb = (e) => (t) => {
    setTimeout(t, e);
  },
  v4 = (e, t) => (n) => {
    let r = !1;
    const o = () => {
        r || ((r = !0), cancelAnimationFrame(s), clearTimeout(l), n());
      },
      s = e(o),
      l = setTimeout(o, t);
  },
  OT =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        s = !1,
        l = !1;
      const c = new Set(),
        f =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? v4(window.requestAnimationFrame, 100)
                : Lb(10)
              : e.type === "callback"
                ? e.queueNotification
                : Lb(e.timeout),
        d = () => {
          ((l = !1), s && ((s = !1), c.forEach((p) => p())));
        };
      return Object.assign({}, r, {
        subscribe(p) {
          const m = () => o && p(),
            g = r.subscribe(m);
          return (
            c.add(p),
            () => {
              (g(), c.delete(p));
            }
          );
        },
        dispatch(p) {
          var m;
          try {
            return (
              (o = !((m = p == null ? void 0 : p.meta) != null && m[kT])),
              (s = !o),
              s && (l || ((l = !0), f(d))),
              r.dispatch(p)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  g4 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new TT(e);
      return (r && o.push(OT(typeof r == "object" ? r : void 0)), o);
    };
function y4(e) {
  const t = m4(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: s = void 0,
      enhancers: l = void 0,
    } = e || {};
  let c;
  if (typeof n == "function") c = n;
  else if (vg(n)) c = pT(n);
  else throw new Error(an(1));
  let f;
  typeof r == "function" ? (f = r(t)) : (f = t());
  let d = Pc;
  o && (d = h4({ trace: !1, ...(typeof o == "object" && o) }));
  const p = X3(...f),
    m = g4(p);
  let g = typeof l == "function" ? l(m) : m();
  const x = d(...g);
  return hT(c, s, x);
}
function _T(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(s, l) {
      const c = typeof s == "string" ? s : s.type;
      if (!c) throw new Error(an(28));
      if (c in t) throw new Error(an(29));
      return ((t[c] = l), o);
    },
    addAsyncThunk(s, l) {
      return (
        l.pending && (t[s.pending.type] = l.pending),
        l.rejected && (t[s.rejected.type] = l.rejected),
        l.fulfilled && (t[s.fulfilled.type] = l.fulfilled),
        l.settled && n.push({ matcher: s.settled, reducer: l.settled }),
        o
      );
    },
    addMatcher(s, l) {
      return (n.push({ matcher: s, reducer: l }), o);
    },
    addDefaultCase(s) {
      return ((r = s), o);
    },
  };
  return (e(o), [t, n, r]);
}
function x4(e) {
  return typeof e == "function";
}
function w4(e, t) {
  let [n, r, o] = _T(t),
    s;
  if (x4(e)) s = () => Rb(e());
  else {
    const c = Rb(e);
    s = () => c;
  }
  function l(c = s(), f) {
    let d = [n[f.type], ...r.filter(({ matcher: p }) => p(f)).map(({ reducer: p }) => p)];
    return (
      d.filter((p) => !!p).length === 0 && (d = [o]),
      d.reduce((p, m) => {
        if (m)
          if (Cr(p)) {
            const x = m(p, f);
            return x === void 0 ? p : x;
          } else {
            if (Bn(p)) return CT(p, (g) => m(g, f));
            {
              const g = m(p, f);
              if (g === void 0) {
                if (p === null) return p;
                throw Error("A case reducer on a non-draftable value must not return undefined");
              }
              return g;
            }
          }
        return p;
      }, c)
    );
  }
  return ((l.getInitialState = s), l);
}
var b4 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  S4 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--;) t += b4[(Math.random() * 64) | 0];
    return t;
  },
  P4 = Symbol.for("rtk-slice-createasyncthunk");
function E4(e, t) {
  return `${e}/${t}`;
}
function C4({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[P4];
  return function (o) {
    const { name: s, reducerPath: l = s } = o;
    if (!s) throw new Error(an(11));
    const c = (typeof o.reducers == "function" ? o.reducers(T4()) : o.reducers) || {},
      f = Object.keys(c),
      d = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(O, _) {
          const I = typeof O == "string" ? O : O.type;
          if (!I) throw new Error(an(12));
          if (I in d.sliceCaseReducersByType) throw new Error(an(13));
          return ((d.sliceCaseReducersByType[I] = _), p);
        },
        addMatcher(O, _) {
          return (d.sliceMatchers.push({ matcher: O, reducer: _ }), p);
        },
        exposeAction(O, _) {
          return ((d.actionCreators[O] = _), p);
        },
        exposeCaseReducer(O, _) {
          return ((d.sliceCaseReducersByName[O] = _), p);
        },
      };
    f.forEach((O) => {
      const _ = c[O],
        I = { reducerName: O, type: E4(s, O), createNotation: typeof o.reducers == "function" };
      O4(_) ? M4(I, _, p, t) : k4(I, _, p);
    });
    function m() {
      const [O = {}, _ = [], I = void 0] =
          typeof o.extraReducers == "function" ? _T(o.extraReducers) : [o.extraReducers],
        R = { ...O, ...d.sliceCaseReducersByType };
      return w4(o.initialState, (F) => {
        for (let W in R) F.addCase(W, R[W]);
        for (let W of d.sliceMatchers) F.addMatcher(W.matcher, W.reducer);
        for (let W of _) F.addMatcher(W.matcher, W.reducer);
        I && F.addDefaultCase(I);
      });
    }
    const g = (O) => O,
      x = new Map(),
      b = new WeakMap();
    let w;
    function S(O, _) {
      return (w || (w = m()), w(O, _));
    }
    function C() {
      return (w || (w = m()), w.getInitialState());
    }
    function A(O, _ = !1) {
      function I(F) {
        let W = F[O];
        return (typeof W > "u" && _ && (W = Du(b, I, C)), W);
      }
      function R(F = g) {
        const W = Du(x, _, () => new WeakMap());
        return Du(W, F, () => {
          const B = {};
          for (const [q, U] of Object.entries(o.selectors ?? {}))
            B[q] = A4(U, F, () => Du(b, F, C), _);
          return B;
        });
      }
      return {
        reducerPath: O,
        getSelectors: R,
        get selectors() {
          return R(I);
        },
        selectSlice: I,
      };
    }
    const k = {
      name: s,
      reducer: S,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: C,
      ...A(l),
      injectInto(O, { reducerPath: _, ...I } = {}) {
        const R = _ ?? l;
        return (O.inject({ reducerPath: R, reducer: S }, I), { ...k, ...A(R, !0) });
      },
    };
    return k;
  };
}
function A4(e, t, n, r) {
  function o(s, ...l) {
    let c = t(s);
    return (typeof c > "u" && r && (c = n()), e(c, ...l));
  }
  return ((o.unwrapped = e), o);
}
var Nt = C4();
function T4() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: n };
      },
      asyncThunk: e,
    }
  );
}
function k4({ type: e, reducerName: t, createNotation: n }, r, o) {
  let s, l;
  if ("reducer" in r) {
    if (n && !_4(r)) throw new Error(an(17));
    ((s = r.reducer), (l = r.prepare));
  } else s = r;
  o.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, l ? sn(e, l) : sn(e));
}
function O4(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function _4(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function M4({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(an(18));
  const { payloadCreator: s, fulfilled: l, pending: c, rejected: f, settled: d, options: p } = n,
    m = o(e, s, p);
  (r.exposeAction(t, m),
    l && r.addCase(m.fulfilled, l),
    c && r.addCase(m.pending, c),
    f && r.addCase(m.rejected, f),
    d && r.addMatcher(m.settled, d),
    r.exposeCaseReducer(t, {
      fulfilled: l || ju,
      pending: c || ju,
      rejected: f || ju,
      settled: d || ju,
    }));
}
function ju() {}
var I4 = "task",
  MT = "listener",
  IT = "completed",
  wg = "cancelled",
  D4 = `task-${wg}`,
  j4 = `task-${IT}`,
  uv = `${MT}-${wg}`,
  N4 = `${MT}-${IT}`,
  Af = class {
    constructor(e) {
      Pu(this, "code");
      Pu(this, "name", "TaskAbortError");
      Pu(this, "message");
      ((this.code = e), (this.message = `${I4} ${wg} (reason: ${e})`));
    }
  },
  bg = (e, t) => {
    if (typeof e != "function") throw new TypeError(an(32));
  },
  _c = () => {},
  DT = (e, t = _c) => (e.catch(t), e),
  jT = (e, t) => (
    e.addEventListener("abort", t, { once: !0 }),
    () => e.removeEventListener("abort", t)
  ),
  Gi = (e) => {
    if (e.aborted) throw new Af(e.reason);
  };
function NT(e, t) {
  let n = _c;
  return new Promise((r, o) => {
    const s = () => o(new Af(e.reason));
    if (e.aborted) {
      s();
      return;
    }
    ((n = jT(e, s)), t.finally(() => n()).then(r, o));
  }).finally(() => {
    n = _c;
  });
}
var R4 = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: "ok", value: await e() });
    } catch (n) {
      return { status: n instanceof Af ? "cancelled" : "rejected", error: n };
    } finally {
      t == null || t();
    }
  },
  Mc = (e) => (t) => DT(NT(e, t).then((n) => (Gi(e), n))),
  RT = (e) => {
    const t = Mc(e);
    return (n) => t(new Promise((r) => setTimeout(r, n)));
  },
  { assign: Zo } = Object,
  $b = {},
  Tf = "listenerMiddleware",
  L4 = (e, t) => {
    const n = (r) => jT(e, () => r.abort(e.reason));
    return (r, o) => {
      bg(r);
      const s = new AbortController();
      n(s);
      const l = R4(
        async () => {
          (Gi(e), Gi(s.signal));
          const c = await r({ pause: Mc(s.signal), delay: RT(s.signal), signal: s.signal });
          return (Gi(s.signal), c);
        },
        () => s.abort(j4),
      );
      return (
        o != null && o.autoJoin && t.push(l.catch(_c)),
        {
          result: Mc(e)(l),
          cancel() {
            s.abort(D4);
          },
        }
      );
    };
  },
  $4 = (e, t) => {
    const n = async (r, o) => {
      Gi(t);
      let s = () => {};
      const c = [
        new Promise((f, d) => {
          let p = e({
            predicate: r,
            effect: (m, g) => {
              (g.unsubscribe(), f([m, g.getState(), g.getOriginalState()]));
            },
          });
          s = () => {
            (p(), d());
          };
        }),
      ];
      o != null && c.push(new Promise((f) => setTimeout(f, o, null)));
      try {
        const f = await NT(t, Promise.race(c));
        return (Gi(t), f);
      } finally {
        s();
      }
    };
    return (r, o) => DT(n(r, o));
  },
  LT = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: o, effect: s } = e;
    if (t) o = sn(t).match;
    else if (n) ((t = n.type), (o = n.match));
    else if (r) o = r;
    else if (!o) throw new Error(an(21));
    return (bg(s), { predicate: o, type: t, effect: s });
  },
  $T = Zo(
    (e) => {
      const { type: t, predicate: n, effect: r } = LT(e);
      return {
        id: S4(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(an(22));
        },
      };
    },
    { withTypes: () => $T },
  ),
  zb = (e, t) => {
    const { type: n, effect: r, predicate: o } = LT(t);
    return Array.from(e.values()).find(
      (s) => (typeof n == "string" ? s.type === n : s.predicate === o) && s.effect === r,
    );
  },
  cv = (e) => {
    e.pending.forEach((t) => {
      t.abort(uv);
    });
  },
  z4 = (e, t) => () => {
    for (const n of t.keys()) cv(n);
    e.clear();
  },
  Fb = (e, t, n) => {
    try {
      e(t, n);
    } catch (r) {
      setTimeout(() => {
        throw r;
      }, 0);
    }
  },
  zT = Zo(sn(`${Tf}/add`), { withTypes: () => zT }),
  F4 = sn(`${Tf}/removeAll`),
  FT = Zo(sn(`${Tf}/remove`), { withTypes: () => FT }),
  V4 = (...e) => {
    console.error(`${Tf}/error`, ...e);
  },
  el = (e = {}) => {
    const t = new Map(),
      n = new Map(),
      r = (x) => {
        const b = n.get(x) ?? 0;
        n.set(x, b + 1);
      },
      o = (x) => {
        const b = n.get(x) ?? 1;
        b === 1 ? n.delete(x) : n.set(x, b - 1);
      },
      { extra: s, onError: l = V4 } = e;
    bg(l);
    const c = (x) => (
        (x.unsubscribe = () => t.delete(x.id)),
        t.set(x.id, x),
        (b) => {
          (x.unsubscribe(), b != null && b.cancelActive && cv(x));
        }
      ),
      f = (x) => {
        const b = zb(t, x) ?? $T(x);
        return c(b);
      };
    Zo(f, { withTypes: () => f });
    const d = (x) => {
      const b = zb(t, x);
      return (b && (b.unsubscribe(), x.cancelActive && cv(b)), !!b);
    };
    Zo(d, { withTypes: () => d });
    const p = async (x, b, w, S) => {
        const C = new AbortController(),
          A = $4(f, C.signal),
          k = [];
        try {
          (x.pending.add(C),
            r(x),
            await Promise.resolve(
              x.effect(
                b,
                Zo({}, w, {
                  getOriginalState: S,
                  condition: (O, _) => A(O, _).then(Boolean),
                  take: A,
                  delay: RT(C.signal),
                  pause: Mc(C.signal),
                  extra: s,
                  signal: C.signal,
                  fork: L4(C.signal, k),
                  unsubscribe: x.unsubscribe,
                  subscribe: () => {
                    t.set(x.id, x);
                  },
                  cancelActiveListeners: () => {
                    x.pending.forEach((O, _, I) => {
                      O !== C && (O.abort(uv), I.delete(O));
                    });
                  },
                  cancel: () => {
                    (C.abort(uv), x.pending.delete(C));
                  },
                  throwIfCancelled: () => {
                    Gi(C.signal);
                  },
                }),
              ),
            ));
        } catch (O) {
          O instanceof Af || Fb(l, O, { raisedBy: "effect" });
        } finally {
          (await Promise.all(k), C.abort(N4), o(x), x.pending.delete(C));
        }
      },
      m = z4(t, n);
    return {
      middleware: (x) => (b) => (w) => {
        if (!mT(w)) return b(w);
        if (zT.match(w)) return f(w.payload);
        if (F4.match(w)) {
          m();
          return;
        }
        if (FT.match(w)) return d(w.payload);
        let S = x.getState();
        const C = () => {
          if (S === $b) throw new Error(an(23));
          return S;
        };
        let A;
        try {
          if (((A = b(w)), t.size > 0)) {
            const k = x.getState(),
              O = Array.from(t.values());
            for (const _ of O) {
              let I = !1;
              try {
                I = _.predicate(w, k, S);
              } catch (R) {
                ((I = !1), Fb(l, R, { raisedBy: "predicate" }));
              }
              I && p(_, w, x, C);
            }
          }
        } finally {
          S = $b;
        }
        return A;
      },
      startListening: f,
      stopListening: d,
      clearListeners: m,
    };
  };
function an(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var B4 = {
    layoutType: "horizontal",
    width: 0,
    height: 0,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    scale: 1,
  },
  VT = Nt({
    name: "chartLayout",
    initialState: B4,
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        var n, r, o, s;
        ((e.margin.top = (n = t.payload.top) !== null && n !== void 0 ? n : 0),
          (e.margin.right = (r = t.payload.right) !== null && r !== void 0 ? r : 0),
          (e.margin.bottom = (o = t.payload.bottom) !== null && o !== void 0 ? o : 0),
          (e.margin.left = (s = t.payload.left) !== null && s !== void 0 ? s : 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: U4, setLayout: W4, setChartSize: K4, setScale: H4 } = VT.actions,
  q4 = VT.reducer;
function BT(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function _e(e) {
  return Number.isFinite(e);
}
function ci(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function Vb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vb(Object(n), !0).forEach(function (r) {
          Y4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vb(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Y4(e, t, n) {
  return (
    (t = G4(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function G4(e) {
  var t = X4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function X4(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pt(e, t, n) {
  return mt(e) || mt(t) ? n : Ds(t) ? bc(e, t, n) : typeof t == "function" ? t(e) : n;
}
var Z4 = (e, t, n) => {
    if (t && n) {
      var { width: r, height: o } = n,
        { align: s, verticalAlign: l, layout: c } = t;
      if (
        (c === "vertical" || (c === "horizontal" && l === "middle")) &&
        s !== "center" &&
        Ee(e[s])
      )
        return Go(Go({}, e), {}, { [s]: e[s] + (r || 0) });
      if (
        (c === "horizontal" || (c === "vertical" && s === "center")) &&
        l !== "middle" &&
        Ee(e[l])
      )
        return Go(Go({}, e), {}, { [l]: e[l] + (o || 0) });
    }
    return e;
  },
  mi = (e, t) =>
    (e === "horizontal" && t === "xAxis") ||
    (e === "vertical" && t === "yAxis") ||
    (e === "centric" && t === "angleAxis") ||
    (e === "radial" && t === "radiusAxis"),
  Q4 = (e, t) => {
    if (!t || t.length !== 2 || !Ee(t[0]) || !Ee(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      o = [e[0], e[1]];
    return (
      (!Ee(e[0]) || e[0] < n) && (o[0] = n),
      (!Ee(e[1]) || e[1] > r) && (o[1] = r),
      o[0] > r && (o[0] = r),
      o[1] < n && (o[1] = n),
      o
    );
  },
  J4 = (e) => {
    var t,
      n = e.length;
    if (!(n <= 0)) {
      var r = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
      if (!(r == null || r <= 0))
        for (var o = 0; o < r; ++o)
          for (var s = 0, l = 0, c = 0; c < n; ++c) {
            var f = e[c],
              d = f == null ? void 0 : f[o];
            if (d != null) {
              var p = d[1],
                m = d[0],
                g = ur(p) ? m : p;
              g >= 0 ? ((d[0] = s), (s += g), (d[1] = s)) : ((d[0] = l), (l += g), (d[1] = l));
            }
          }
    }
  },
  ez = (e) => {
    var t,
      n = e.length;
    if (!(n <= 0)) {
      var r = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
      if (!(r == null || r <= 0))
        for (var o = 0; o < r; ++o)
          for (var s = 0, l = 0; l < n; ++l) {
            var c = e[l],
              f = c == null ? void 0 : c[o];
            if (f != null) {
              var d = ur(f[1]) ? f[0] : f[1];
              d >= 0 ? ((f[0] = s), (s += d), (f[1] = s)) : ((f[0] = 0), (f[1] = 0));
            }
          }
    }
  },
  tz = { sign: J4, expand: V$, none: Ji, silhouette: B$, wiggle: U$, positive: ez },
  nz = (e, t, n) => {
    var r,
      o = (r = tz[n]) !== null && r !== void 0 ? r : Ji,
      s = F$()
        .keys(t)
        .value((c, f) => Number(pt(c, f, 0)))
        .order(Jm)
        .offset(o),
      l = s(e);
    return (
      l.forEach((c, f) => {
        c.forEach((d, p) => {
          var m = pt(e[p], t[f], 0);
          Array.isArray(m) &&
            m.length === 2 &&
            Ee(m[0]) &&
            Ee(m[1]) &&
            ((d[0] = m[0]), (d[1] = m[1]));
        });
      }),
      l
    );
  };
function rz(e) {
  return e == null ? void 0 : String(e);
}
var Bb = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: o, entry: s, index: l } = e;
    if (t.type === "category") return n[l] ? n[l].coordinate + r : null;
    var c = pt(s, t.dataKey, t.scale.domain()[l]);
    if (mt(c)) return null;
    var f = t.scale.map(c);
    return Ee(f) ? f - o / 2 + r : null;
  },
  iz = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === "number") {
      var r = Math.min(n[0], n[1]),
        o = Math.max(n[0], n[1]);
      return r <= 0 && o >= 0 ? 0 : o < 0 ? o : r;
    }
    return n[0];
  },
  oz = (e) => {
    var t = e.flat(2).filter(Ee);
    return [Math.min(...t), Math.max(...t)];
  },
  az = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  sz = (e, t, n) => {
    if (e != null)
      return az(
        Object.keys(e).reduce(
          (r, o) => {
            var s = e[o];
            if (!s) return r;
            var { stackedData: l } = s,
              c = l.reduce(
                (f, d) => {
                  var p = BT(d, t, n),
                    m = oz(p);
                  return !_e(m[0]) || !_e(m[1]) ? f : [Math.min(f[0], m[0]), Math.max(f[1], m[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(c[0], r[0]), Math.max(c[1], r[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  Ub = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Wb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  UT = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (var o = mg(t, (p) => p.coordinate), s = 1 / 0, l = 1, c = o.length; l < c; l++) {
        var f = o[l],
          d = o[l - 1];
        s = Math.min(
          ((f == null ? void 0 : f.coordinate) || 0) - ((d == null ? void 0 : d.coordinate) || 0),
          s,
        );
      }
      return s === 1 / 0 ? 0 : s;
    }
    return n ? void 0 : 0;
  };
function Kb(e) {
  var { tooltipEntrySettings: t, dataKey: n, payload: r, value: o, name: s } = e;
  return Go(Go({}, t), {}, { dataKey: n, payload: r, value: o, name: s });
}
function WT(e, t) {
  if (e) return String(e);
  if (typeof t == "string") return t;
}
var lz = (e, t) => {
    if (t === "horizontal") return e.relativeX;
    if (t === "vertical") return e.relativeY;
  },
  uz = (e, t) => (t === "centric" ? e.angle : e.radius),
  Or = (e) => e.layout.width,
  _r = (e) => e.layout.height,
  cz = (e) => e.layout.scale,
  KT = (e) => e.layout.margin,
  kf = z(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Of = z(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  fz = "data-recharts-item-index",
  dz = "data-recharts-item-id",
  tl = 60;
function Hb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hb(Object(n), !0).forEach(function (r) {
          hz(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hb(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function hz(e, t, n) {
  return (
    (t = pz(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function pz(e) {
  var t = mz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mz(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vz = (e) => e.brush.height;
function gz(e) {
  var t = Of(e);
  return t.reduce((n, r) => {
    if (r.orientation === "left" && !r.mirror && !r.hide) {
      var o = typeof r.width == "number" ? r.width : tl;
      return n + o;
    }
    return n;
  }, 0);
}
function yz(e) {
  var t = Of(e);
  return t.reduce((n, r) => {
    if (r.orientation === "right" && !r.mirror && !r.hide) {
      var o = typeof r.width == "number" ? r.width : tl;
      return n + o;
    }
    return n;
  }, 0);
}
function xz(e) {
  var t = kf(e);
  return t.reduce(
    (n, r) => (r.orientation === "top" && !r.mirror && !r.hide ? n + r.height : n),
    0,
  );
}
function wz(e) {
  var t = kf(e);
  return t.reduce(
    (n, r) => (r.orientation === "bottom" && !r.mirror && !r.hide ? n + r.height : n),
    0,
  );
}
var kt = z([Or, _r, KT, vz, gz, yz, xz, wz, dT, K3], (e, t, n, r, o, s, l, c, f, d) => {
    var p = { left: (n.left || 0) + o, right: (n.right || 0) + s },
      m = { top: (n.top || 0) + l, bottom: (n.bottom || 0) + c },
      g = Nu(Nu({}, m), p),
      x = g.bottom;
    ((g.bottom += r), (g = Z4(g, f, d)));
    var b = e - g.left - g.right,
      w = t - g.top - g.bottom;
    return Nu(Nu({ brushBottom: x }, g), {}, { width: Math.max(b, 0), height: Math.max(w, 0) });
  }),
  bz = z(kt, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
  Sz = z(Or, _r, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  Pz = E.createContext(null),
  Wn = () => E.useContext(Pz) != null,
  _f = (e) => e.brush,
  Mf = z([_f, kt, KT], (e, t, n) => ({
    height: e.height,
    x: Ee(e.x) ? e.x : t.left,
    y: Ee(e.y) ? e.y : t.top + t.height + t.brushBottom - ((n == null ? void 0 : n.bottom) || 0),
    width: Ee(e.width) ? e.width : t.width,
  })),
  Up = {},
  Wp = {},
  Kp = {},
  qb;
function Ez() {
  return (
    qb ||
      ((qb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n, r, { signal: o, edges: s } = {}) {
          let l,
            c = null;
          const f = s != null && s.includes("leading"),
            d = s == null || s.includes("trailing"),
            p = () => {
              c !== null && (n.apply(l, c), (l = void 0), (c = null));
            },
            m = () => {
              (d && p(), w());
            };
          let g = null;
          const x = () => {
              (g != null && clearTimeout(g),
                (g = setTimeout(() => {
                  ((g = null), m());
                }, r)));
            },
            b = () => {
              g !== null && (clearTimeout(g), (g = null));
            },
            w = () => {
              (b(), (l = void 0), (c = null));
            },
            S = () => {
              p();
            },
            C = function (...A) {
              if (o != null && o.aborted) return;
              ((l = this), (c = A));
              const k = g == null;
              (x(), f && k && p());
            };
          return (
            (C.schedule = x),
            (C.cancel = w),
            (C.flush = S),
            o == null || o.addEventListener("abort", w, { once: !0 }),
            C
          );
        }
        e.debounce = t;
      })(Kp)),
    Kp
  );
}
var Yb;
function Cz() {
  return (
    Yb ||
      ((Yb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Ez();
        function n(r, o = 0, s = {}) {
          typeof s != "object" && (s = {});
          const { leading: l = !1, trailing: c = !0, maxWait: f } = s,
            d = Array(2);
          (l && (d[0] = "leading"), c && (d[1] = "trailing"));
          let p,
            m = null;
          const g = t.debounce(
              function (...w) {
                ((p = r.apply(this, w)), (m = null));
              },
              o,
              { edges: d },
            ),
            x = function (...w) {
              return f != null && (m === null && (m = Date.now()), Date.now() - m >= f)
                ? ((p = r.apply(this, w)), (m = Date.now()), g.cancel(), g.schedule(), p)
                : (g.apply(this, w), p);
            },
            b = () => (g.flush(), p);
          return ((x.cancel = g.cancel), (x.flush = b), x);
        }
        e.debounce = n;
      })(Wp)),
    Wp
  );
}
var Gb;
function Az() {
  return (
    Gb ||
      ((Gb = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Cz();
        function n(r, o = 0, s = {}) {
          const { leading: l = !0, trailing: c = !0 } = s;
          return t.debounce(r, o, { leading: l, maxWait: o, trailing: c });
        }
        e.throttle = n;
      })(Up)),
    Up
  );
}
var Hp, Xb;
function Tz() {
  return (Xb || ((Xb = 1), (Hp = Az().throttle)), Hp);
}
var kz = Tz();
const Oz = ao(kz);
var Zb = function (t, n) {
    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
      o[s - 2] = arguments[s];
    if (
      typeof console < "u" &&
      console.warn &&
      (n === void 0 && console.warn("LogUtils requires an error message argument"), !t)
    )
      if (n === void 0)
        console.warn(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var l = 0;
        console.warn(n.replace(/%s/g, () => o[l++]));
      }
  },
  rr = {
    width: "100%",
    height: "100%",
    debounce: 0,
    minWidth: 0,
    initialDimension: { width: -1, height: -1 },
  },
  HT = (e, t, n) => {
    var { width: r = rr.width, height: o = rr.height, aspect: s, maxHeight: l } = n,
      c = eo(r) ? e : Number(r),
      f = eo(o) ? t : Number(o);
    return (
      s && s > 0 && (c ? (f = c / s) : f && (c = f * s), l && f != null && f > l && (f = l)),
      { calculatedWidth: c, calculatedHeight: f }
    );
  },
  _z = { width: 0, height: 0, overflow: "visible" },
  Mz = { width: 0, overflowX: "visible" },
  Iz = { height: 0, overflowY: "visible" },
  Dz = {},
  jz = (e) => {
    var { width: t, height: n } = e,
      r = eo(t),
      o = eo(n);
    return r && o ? _z : r ? Mz : o ? Iz : Dz;
  };
function Nz(e) {
  var { width: t, height: n, aspect: r } = e,
    o = t,
    s = n;
  return (
    o === void 0 && s === void 0
      ? ((o = rr.width), (s = rr.height))
      : o === void 0
        ? (o = r && r > 0 ? void 0 : rr.width)
        : s === void 0 && (s = r && r > 0 ? void 0 : rr.height),
    { width: o, height: s }
  );
}
function fv() {
  return (
    (fv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fv.apply(null, arguments)
  );
}
function Qb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Jb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qb(Object(n), !0).forEach(function (r) {
          Rz(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qb(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Rz(e, t, n) {
  return (
    (t = Lz(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Lz(e) {
  var t = $z(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $z(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qT = E.createContext(rr.initialDimension);
function zz(e) {
  return ci(e.width) && ci(e.height);
}
function YT(e) {
  var { children: t, width: n, height: r } = e,
    o = E.useMemo(() => ({ width: n, height: r }), [n, r]);
  return zz(o) ? E.createElement(qT.Provider, { value: o }, t) : null;
}
var Sg = () => E.useContext(qT),
  Fz = E.forwardRef((e, t) => {
    var {
        aspect: n,
        initialDimension: r = rr.initialDimension,
        width: o,
        height: s,
        minWidth: l = rr.minWidth,
        minHeight: c,
        maxHeight: f,
        children: d,
        debounce: p = rr.debounce,
        id: m,
        className: g,
        onResize: x,
        style: b = {},
      } = e,
      w = E.useRef(null),
      S = E.useRef();
    ((S.current = x), E.useImperativeHandle(t, () => w.current));
    var [C, A] = E.useState({ containerWidth: r.width, containerHeight: r.height }),
      k = E.useCallback((F, W) => {
        A((B) => {
          var q = Math.round(F),
            U = Math.round(W);
          return B.containerWidth === q && B.containerHeight === U
            ? B
            : { containerWidth: q, containerHeight: U };
        });
      }, []);
    E.useEffect(() => {
      if (w.current == null || typeof ResizeObserver > "u") return Qs;
      var F = (U) => {
        var fe,
          ie = U[0];
        if (ie != null) {
          var { width: ve, height: ye } = ie.contentRect;
          (k(ve, ye), (fe = S.current) === null || fe === void 0 || fe.call(S, ve, ye));
        }
      };
      p > 0 && (F = Oz(F, p, { trailing: !0, leading: !1 }));
      var W = new ResizeObserver(F),
        { width: B, height: q } = w.current.getBoundingClientRect();
      return (
        k(B, q),
        W.observe(w.current),
        () => {
          W.disconnect();
        }
      );
    }, [k, p]);
    var { containerWidth: O, containerHeight: _ } = C;
    Zb(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var { calculatedWidth: I, calculatedHeight: R } = HT(O, _, {
      width: o,
      height: s,
      aspect: n,
      maxHeight: f,
    });
    return (
      Zb(
        (I != null && I > 0) || (R != null && R > 0),
        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
        I,
        R,
        o,
        s,
        l,
        c,
        n,
      ),
      E.createElement(
        "div",
        {
          id: m ? "".concat(m) : void 0,
          className: un("recharts-responsive-container", g),
          style: Jb(
            Jb({}, b),
            {},
            { width: o, height: s, minWidth: l, minHeight: c, maxHeight: f },
          ),
          ref: w,
        },
        E.createElement(
          "div",
          { style: jz({ width: o, height: s }) },
          E.createElement(YT, { width: I, height: R }, d),
        ),
      )
    );
  }),
  Vz = E.forwardRef((e, t) => {
    var n = Sg();
    if (ci(n.width) && ci(n.height)) return e.children;
    var { width: r, height: o } = Nz({ width: e.width, height: e.height, aspect: e.aspect }),
      { calculatedWidth: s, calculatedHeight: l } = HT(void 0, void 0, {
        width: r,
        height: o,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return Ee(s) && Ee(l)
      ? E.createElement(YT, { width: s, height: l }, e.children)
      : E.createElement(Fz, fv({}, e, { width: r, height: o, ref: t }));
  });
function Pg(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height,
    };
}
var GT = () => {
    var e,
      t = Wn(),
      n = Ve(bz),
      r = Ve(Mf),
      o = (e = Ve(_f)) === null || e === void 0 ? void 0 : e.padding;
    return !t || !r || !o
      ? n
      : {
          width: r.width - o.left - o.right,
          height: r.height - o.top - o.bottom,
          x: o.left,
          y: o.top,
        };
  },
  Bz = () => Ve(Or),
  Uz = () => Ve(_r),
  $e = (e) => e.layout.layoutType,
  If = () => Ve($e),
  XT = (e) => {
    var t = e.layout.layoutType;
    if (t === "centric" || t === "radial") return t;
  },
  Wz = () => {
    var e = If();
    return e !== void 0;
  },
  nl = (e) => {
    var t = vt(),
      n = Wn(),
      { width: r, height: o } = e,
      s = Sg(),
      l = r,
      c = o;
    return (
      s && ((l = s.width > 0 ? s.width : r), (c = s.height > 0 ? s.height : o)),
      E.useEffect(() => {
        !n && ci(l) && ci(c) && t(K4({ width: l, height: c }));
      }, [t, n, l, c]),
      null
    );
  },
  ZT = Symbol.for("immer-nothing"),
  eS = Symbol.for("immer-draftable"),
  ln = Symbol.for("immer-state");
function Ln(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var $s = Object.getPrototypeOf;
function ra(e) {
  return !!e && !!e[ln];
}
function no(e) {
  var t;
  return e
    ? QT(e) ||
        Array.isArray(e) ||
        !!e[eS] ||
        !!((t = e.constructor) != null && t[eS]) ||
        rl(e) ||
        jf(e)
    : !1;
}
var Kz = Object.prototype.constructor.toString(),
  tS = new WeakMap();
function QT(e) {
  if (!e || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (n === Object) return !0;
  if (typeof n != "function") return !1;
  let r = tS.get(n);
  return (r === void 0 && ((r = Function.toString.call(n)), tS.set(n, r)), r === Kz);
}
function Ic(e, t, n = !0) {
  Df(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((o) => {
        t(o, e[o], e);
      })
    : e.forEach((r, o) => t(o, r, e));
}
function Df(e) {
  const t = e[ln];
  return t ? t.type_ : Array.isArray(e) ? 1 : rl(e) ? 2 : jf(e) ? 3 : 0;
}
function dv(e, t) {
  return Df(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function JT(e, t, n) {
  const r = Df(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Hz(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function rl(e) {
  return e instanceof Map;
}
function jf(e) {
  return e instanceof Set;
}
function Fi(e) {
  return e.copy_ || e.base_;
}
function hv(e, t) {
  if (rl(e)) return new Map(e);
  if (jf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = QT(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ln];
    let o = Reflect.ownKeys(r);
    for (let s = 0; s < o.length; s++) {
      const l = o[s],
        c = r[l];
      (c.writable === !1 && ((c.writable = !0), (c.configurable = !0)),
        (c.get || c.set) &&
          (r[l] = { configurable: !0, writable: !0, enumerable: c.enumerable, value: e[l] }));
    }
    return Object.create($s(e), r);
  } else {
    const r = $s(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Eg(e, t = !1) {
  return (
    Nf(e) ||
      ra(e) ||
      !no(e) ||
      (Df(e) > 1 && Object.defineProperties(e, { set: Ru, add: Ru, clear: Ru, delete: Ru }),
      Object.freeze(e),
      t && Object.values(e).forEach((n) => Eg(n, !0))),
    e
  );
}
function qz() {
  Ln(2);
}
var Ru = { value: qz };
function Nf(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var Yz = {};
function ro(e) {
  const t = Yz[e];
  return (t || Ln(0, e), t);
}
var zs;
function ek() {
  return zs;
}
function Gz(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function nS(e, t) {
  t && (ro("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function pv(e) {
  (mv(e), e.drafts_.forEach(Xz), (e.drafts_ = null));
}
function mv(e) {
  e === zs && (zs = e.parent_);
}
function rS(e) {
  return (zs = Gz(zs, e));
}
function Xz(e) {
  const t = e[ln];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function iS(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[ln].modified_ && (pv(t), Ln(4)),
        no(e) && ((e = Dc(t, e)), t.parent_ || jc(t, e)),
        t.patches_ &&
          ro("Patches").generateReplacementPatches_(n[ln].base_, e, t.patches_, t.inversePatches_))
      : (e = Dc(t, n, [])),
    pv(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== ZT ? e : void 0
  );
}
function Dc(e, t, n) {
  if (Nf(t)) return t;
  const r = e.immer_.shouldUseStrictIteration(),
    o = t[ln];
  if (!o) return (Ic(t, (s, l) => oS(e, o, t, s, l, n), r), t);
  if (o.scope_ !== e) return t;
  if (!o.modified_) return (jc(e, o.base_, !0), o.base_);
  if (!o.finalized_) {
    ((o.finalized_ = !0), o.scope_.unfinalizedDrafts_--);
    const s = o.copy_;
    let l = s,
      c = !1;
    (o.type_ === 3 && ((l = new Set(s)), s.clear(), (c = !0)),
      Ic(l, (f, d) => oS(e, o, s, f, d, n, c), r),
      jc(e, s, !1),
      n && e.patches_ && ro("Patches").generatePatches_(o, n, e.patches_, e.inversePatches_));
  }
  return o.copy_;
}
function oS(e, t, n, r, o, s, l) {
  if (o == null || (typeof o != "object" && !l)) return;
  const c = Nf(o);
  if (!(c && !l)) {
    if (ra(o)) {
      const f = s && t && t.type_ !== 3 && !dv(t.assigned_, r) ? s.concat(r) : void 0,
        d = Dc(e, o, f);
      if ((JT(n, r, d), ra(d))) e.canAutoFreeze_ = !1;
      else return;
    } else l && n.add(o);
    if (no(o) && !c) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === o && c)
      )
        return;
      (Dc(e, o),
        (!t || !t.scope_.parent_) &&
          typeof r != "symbol" &&
          (rl(n) ? n.has(r) : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          jc(e, o));
    }
  }
}
function jc(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Eg(t, n);
}
function Zz(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : ek(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    s = Cg;
  n && ((o = [r]), (s = Fs));
  const { revoke: l, proxy: c } = Proxy.revocable(o, s);
  return ((r.draft_ = c), (r.revoke_ = l), c);
}
var Cg = {
    get(e, t) {
      if (t === ln) return e;
      const n = Fi(e);
      if (!dv(n, t)) return Qz(e, n, t);
      const r = n[t];
      return e.finalized_ || !no(r)
        ? r
        : r === qp(e.base_, t)
          ? (Yp(e), (e.copy_[t] = gv(r, e)))
          : r;
    },
    has(e, t) {
      return t in Fi(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Fi(e));
    },
    set(e, t, n) {
      const r = tk(Fi(e), t);
      if (r != null && r.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        const o = qp(Fi(e), t),
          s = o == null ? void 0 : o[ln];
        if (s && s.base_ === n) return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (Hz(n, o) && (n !== void 0 || dv(e.base_, t))) return !0;
        (Yp(e), vv(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        qp(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Yp(e), vv(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Fi(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Ln(11);
    },
    getPrototypeOf(e) {
      return $s(e.base_);
    },
    setPrototypeOf() {
      Ln(12);
    },
  },
  Fs = {};
Ic(Cg, (e, t) => {
  Fs[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
});
Fs.deleteProperty = function (e, t) {
  return Fs.set.call(this, e, t, void 0);
};
Fs.set = function (e, t, n) {
  return Cg.set.call(this, e[0], t, n, e[0]);
};
function qp(e, t) {
  const n = e[ln];
  return (n ? Fi(n) : e)[t];
}
function Qz(e, t, n) {
  var o;
  const r = tk(t, n);
  return r ? ("value" in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_)) : void 0;
}
function tk(e, t) {
  if (!(t in e)) return;
  let n = $s(e);
  for (; n;) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = $s(n);
  }
}
function vv(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && vv(e.parent_));
}
function Yp(e) {
  e.copy_ || (e.copy_ = hv(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Jz = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const l = this;
          return function (f = s, ...d) {
            return l.produce(f, (p) => n.call(this, p, ...d));
          };
        }
        (typeof n != "function" && Ln(6), r !== void 0 && typeof r != "function" && Ln(7));
        let o;
        if (no(t)) {
          const s = rS(this),
            l = gv(t, void 0);
          let c = !0;
          try {
            ((o = n(l)), (c = !1));
          } finally {
            c ? pv(s) : mv(s);
          }
          return (nS(s, r), iS(o, s));
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === ZT && (o = void 0),
            this.autoFreeze_ && Eg(o, !0),
            r)
          ) {
            const s = [],
              l = [];
            (ro("Patches").generateReplacementPatches_(t, o, s, l), r(s, l));
          }
          return o;
        } else Ln(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...c) => this.produceWithPatches(l, (f) => t(f, ...c));
        let r, o;
        return [
          this.produce(t, n, (l, c) => {
            ((r = l), (o = c));
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      typeof (e == null ? void 0 : e.useStrictIteration) == "boolean" &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (no(e) || Ln(8), ra(e) && (e = eF(e)));
    const t = rS(this),
      n = gv(e, void 0);
    return ((n[ln].isManual_ = !0), mv(t), n);
  }
  finishDraft(e, t) {
    const n = e && e[ln];
    (!n || !n.isManual_) && Ln(9);
    const { scope_: r } = n;
    return (nS(r, t), iS(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ro("Patches").applyPatches_;
    return ra(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function gv(e, t) {
  const n = rl(e) ? ro("MapSet").proxyMap_(e, t) : jf(e) ? ro("MapSet").proxySet_(e, t) : Zz(e, t);
  return ((t ? t.scope_ : ek()).drafts_.push(n), n);
}
function eF(e) {
  return (ra(e) || Ln(10, e), nk(e));
}
function nk(e) {
  if (!no(e) || Nf(e)) return e;
  const t = e[ln];
  let n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = hv(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = hv(e, !0);
  return (
    Ic(
      n,
      (o, s) => {
        JT(n, o, nk(s));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var tF = new Jz();
tF.produce;
var nF = {
    settings: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      itemSorter: "value",
    },
    size: { width: 0, height: 0 },
    payload: [],
  },
  rk = Nt({
    name: "legend",
    initialState: nF,
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(t.payload);
        },
        prepare: We(),
      },
      replaceLegendPayload: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            o = bn(e).payload.indexOf(n);
          o > -1 && (e.payload[o] = r);
        },
        prepare: We(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = bn(e).payload.indexOf(t.payload);
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: We(),
      },
    },
  }),
  {
    setLegendSize: G7,
    setLegendSettings: X7,
    addLegendPayload: rF,
    replaceLegendPayload: iF,
    removeLegendPayload: oF,
  } = rk.actions,
  aF = rk.reducer,
  Gp = { exports: {} },
  Xp = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aS;
function sF() {
  if (aS) return Xp;
  aS = 1;
  var e = da();
  function t(f, d) {
    return (f === d && (f !== 0 || 1 / f === 1 / d)) || (f !== f && d !== d);
  }
  var n = typeof Object.is == "function" ? Object.is : t,
    r = e.useSyncExternalStore,
    o = e.useRef,
    s = e.useEffect,
    l = e.useMemo,
    c = e.useDebugValue;
  return (
    (Xp.useSyncExternalStoreWithSelector = function (f, d, p, m, g) {
      var x = o(null);
      if (x.current === null) {
        var b = { hasValue: !1, value: null };
        x.current = b;
      } else b = x.current;
      x = l(
        function () {
          function S(_) {
            if (!C) {
              if (((C = !0), (A = _), (_ = m(_)), g !== void 0 && b.hasValue)) {
                var I = b.value;
                if (g(I, _)) return (k = I);
              }
              return (k = _);
            }
            if (((I = k), n(A, _))) return I;
            var R = m(_);
            return g !== void 0 && g(I, R) ? ((A = _), I) : ((A = _), (k = R));
          }
          var C = !1,
            A,
            k,
            O = p === void 0 ? null : p;
          return [
            function () {
              return S(d());
            },
            O === null
              ? void 0
              : function () {
                  return S(O());
                },
          ];
        },
        [d, p, m, g],
      );
      var w = r(f, x[0], x[1]);
      return (
        s(
          function () {
            ((b.hasValue = !0), (b.value = w));
          },
          [w],
        ),
        c(w),
        w
      );
    }),
    Xp
  );
}
var sS;
function lF() {
  return (sS || ((sS = 1), (Gp.exports = sF())), Gp.exports);
}
lF();
function uF(e) {
  e();
}
function cF() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      uF(() => {
        let n = e;
        for (; n;) (n.callback(), (n = n.next));
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r;) (n.push(r), (r = r.next));
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var lS = { notify() {}, get: () => [] };
function fF(e, t) {
  let n,
    r = lS,
    o = 0,
    s = !1;
  function l(w) {
    p();
    const S = r.subscribe(w);
    let C = !1;
    return () => {
      C || ((C = !0), S(), m());
    };
  }
  function c() {
    r.notify();
  }
  function f() {
    b.onStateChange && b.onStateChange();
  }
  function d() {
    return s;
  }
  function p() {
    (o++, n || ((n = e.subscribe(f)), (r = cF())));
  }
  function m() {
    (o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = lS)));
  }
  function g() {
    s || ((s = !0), p());
  }
  function x() {
    s && ((s = !1), m());
  }
  const b = {
    addNestedSub: l,
    notifyNestedSubs: c,
    handleChangeWrapper: f,
    isSubscribed: d,
    trySubscribe: g,
    tryUnsubscribe: x,
    getListeners: () => r,
  };
  return b;
}
var dF = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  hF = dF(),
  pF = () => typeof navigator < "u" && navigator.product === "ReactNative",
  mF = pF(),
  vF = () => (hF || mF ? E.useLayoutEffect : E.useEffect),
  gF = vF();
function uS(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function yF(e, t) {
  if (uS(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !uS(e[n[o]], t[n[o]])) return !1;
  return !0;
}
var Zp = Symbol.for("react-redux-context"),
  Qp = typeof globalThis < "u" ? globalThis : {};
function xF() {
  if (!E.createContext) return {};
  const e = Qp[Zp] ?? (Qp[Zp] = new Map());
  let t = e.get(E.createContext);
  return (t || ((t = E.createContext(null)), e.set(E.createContext, t)), t);
}
var wF = xF();
function bF(e) {
  const { children: t, context: n, serverState: r, store: o } = e,
    s = E.useMemo(() => {
      const f = fF(o);
      return { store: o, subscription: f, getServerState: r ? () => r : void 0 };
    }, [o, r]),
    l = E.useMemo(() => o.getState(), [o]);
  gF(() => {
    const { subscription: f } = s;
    return (
      (f.onStateChange = f.notifyNestedSubs),
      f.trySubscribe(),
      l !== o.getState() && f.notifyNestedSubs(),
      () => {
        (f.tryUnsubscribe(), (f.onStateChange = void 0));
      }
    );
  }, [s, l]);
  const c = n || wF;
  return E.createElement(c.Provider, { value: s }, t);
}
var SF = bF,
  PF = new Set([
    "axisLine",
    "tickLine",
    "activeBar",
    "activeDot",
    "activeLabel",
    "activeShape",
    "allowEscapeViewBox",
    "background",
    "cursor",
    "dot",
    "label",
    "line",
    "margin",
    "padding",
    "position",
    "shape",
    "style",
    "tick",
    "wrapperStyle",
    "radius",
    "throttledEvents",
  ]);
function EF(e, t) {
  return e == null && t == null
    ? !0
    : typeof e == "number" && typeof t == "number"
      ? e === t || (e !== e && t !== t)
      : e === t;
}
function Ag(e, t) {
  var n = new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var r of n)
    if (PF.has(r)) {
      if (e[r] == null && t[r] == null) continue;
      if (!yF(e[r], t[r])) return !1;
    } else if (!EF(e[r], t[r])) return !1;
  return !0;
}
var CF = () =>
    !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout),
  Rf = { isSsr: CF() };
function AF() {
  var [e, t] = E.useState(() =>
    Rf.isSsr || !window.matchMedia
      ? !1
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  return (
    E.useEffect(() => {
      if (window.matchMedia) {
        var n = window.matchMedia("(prefers-reduced-motion: reduce)"),
          r = () => {
            t(n.matches);
          };
        return (
          n.addEventListener("change", r),
          () => {
            n.removeEventListener("change", r);
          }
        );
      }
    }, []),
    e
  );
}
var TF = () => {
  var e;
  return (e = Ve((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function yv() {
  return (
    (yv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yv.apply(null, arguments)
  );
}
function cS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cS(Object(n), !0).forEach(function (r) {
          kF(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cS(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function kF(e, t, n) {
  return (
    (t = OF(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function OF(e) {
  var t = _F(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _F(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dS = {
    curveBasisClosed: O$,
    curveBasisOpen: _$,
    curveBasis: k$,
    curveBumpX: p$,
    curveBumpY: m$,
    curveLinearClosed: M$,
    curveLinear: gf,
    curveMonotoneX: I$,
    curveMonotoneY: D$,
    curveNatural: j$,
    curveStep: N$,
    curveStepAfter: L$,
    curveStepBefore: R$,
  },
  Nc = (e) => _e(e.x) && _e(e.y),
  hS = (e) => e.base != null && Nc(e.base) && Nc(e),
  ds = (e) => e.x,
  hs = (e) => e.y,
  MF = (e, t) => {
    if (typeof e == "function") return e;
    var n = "curve".concat(Zs(e));
    if ((n === "curveMonotone" || n === "curveBump") && t) {
      var r = dS["".concat(n).concat(t === "vertical" ? "Y" : "X")];
      if (r) return r;
    }
    return dS[n] || gf;
  },
  pS = { connectNulls: !1, type: "linear" },
  IF = (e) => {
    var {
        type: t = pS.type,
        points: n = [],
        baseLine: r,
        layout: o,
        connectNulls: s = pS.connectNulls,
      } = e,
      l = MF(t, o),
      c = s ? n.filter(Nc) : n;
    if (Array.isArray(r)) {
      var f,
        d = n.map((b, w) => fS(fS({}, b), {}, { base: r[w] }));
      o === "vertical"
        ? (f = _u()
            .y(hs)
            .x1(ds)
            .x0((b) => b.base.x))
        : (f = _u()
            .x(ds)
            .y1(hs)
            .y0((b) => b.base.y));
      var p = f.defined(hS).curve(l),
        m = s ? d.filter(hS) : d;
      return p(m);
    }
    var g;
    o === "vertical" && Ee(r)
      ? (g = _u().y(hs).x1(ds).x0(r))
      : Ee(r)
        ? (g = _u().x(ds).y1(hs).y0(r))
        : (g = HA().x(ds).y(hs));
    var x = g.defined(Nc).curve(l);
    return x(c);
  },
  DF = (e) => {
    var { className: t, points: n, path: r, pathRef: o } = e,
      s = If();
    if ((!n || !n.length) && !r) return null;
    var l = {
        type: e.type,
        points: e.points,
        baseLine: e.baseLine,
        layout: e.layout || s,
        connectNulls: e.connectNulls,
      },
      c = n && n.length ? IF(l) : r;
    return E.createElement(
      "path",
      yv({}, Is(e), u3(e), {
        className: un("recharts-curve", t),
        d: c === null ? void 0 : c,
        ref: o,
      }),
    );
  };
function mS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function vS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mS(Object(n), !0).forEach(function (r) {
          jF(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mS(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function jF(e, t, n) {
  return (
    (t = NF(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function NF(e) {
  var t = RF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function RF(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var LF = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())),
  ik = (e, t, n) => e.map((r) => "".concat(LF(r), " ").concat(t, "ms ").concat(n)).join(","),
  $F = (e, t) => [Object.keys(e), Object.keys(t)].reduce((n, r) => n.filter((o) => r.includes(o))),
  Vs = (e, t) => Object.keys(t).reduce((n, r) => vS(vS({}, n), {}, { [r]: e(r, t[r]) }), {});
function gS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gS(Object(n), !0).forEach(function (r) {
          zF(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gS(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function zF(e, t, n) {
  return (
    (t = FF(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function FF(e) {
  var t = VF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VF(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rc = (e, t, n) => e + (t - e) * n,
  xv = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  ok = (e, t, n) => {
    var r = Vs((o, s) => {
      if (xv(s)) {
        var [l, c] = e(s.from, s.to, s.velocity);
        return lt(lt({}, s), {}, { from: l, velocity: c });
      }
      return s;
    }, t);
    return n < 1
      ? Vs(
          (o, s) =>
            xv(s) && r[o] != null
              ? lt(
                  lt({}, s),
                  {},
                  { velocity: Rc(s.velocity, r[o].velocity, n), from: Rc(s.from, r[o].from, n) },
                )
              : s,
          t,
        )
      : ok(e, r, n - 1);
  };
function BF(e, t, n, r, o, s) {
  var l,
    c = r.reduce((g, x) => lt(lt({}, g), {}, { [x]: { from: e[x], velocity: 0, to: t[x] } }), {}),
    f = () => Vs((g, x) => x.from, c),
    d = () => !Object.values(c).filter(xv).length,
    p = null,
    m = (g) => {
      l || (l = g);
      var x = g - l,
        b = x / n.dt;
      ((c = ok(n, c, b)), o(lt(lt(lt({}, e), t), f())), (l = g), d() || (p = s.setTimeout(m)));
    };
  return () => (
    (p = s.setTimeout(m)),
    () => {
      var g;
      (g = p) === null || g === void 0 || g();
    }
  );
}
function UF(e, t, n, r, o, s, l) {
  var c = null,
    f = o.reduce((m, g) => {
      var x = e[g],
        b = t[g];
      return x == null || b == null ? m : lt(lt({}, m), {}, { [g]: [x, b] });
    }, {}),
    d,
    p = (m) => {
      d || (d = m);
      var g = (m - d) / r,
        x = Vs((w, S) => Rc(...S, n(g)), f);
      if ((s(lt(lt(lt({}, e), t), x)), g < 1)) c = l.setTimeout(p);
      else {
        var b = Vs((w, S) => Rc(...S, n(1)), f);
        s(lt(lt(lt({}, e), t), b));
      }
    };
  return () => (
    (c = l.setTimeout(p)),
    () => {
      var m;
      (m = c) === null || m === void 0 || m();
    }
  );
}
const WF = (e, t, n, r, o, s) => {
  var l = $F(e, t);
  return n == null
    ? () => (o(lt(lt({}, e), t)), () => {})
    : n.isStepper === !0
      ? BF(e, t, n, l, o, s)
      : UF(e, t, n, r, l, o, s);
};
var Lc = 1e-4,
  ak = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  sk = (e, t) => e.map((n, r) => n * t ** r).reduce((n, r) => n + r),
  yS = (e, t) => (n) => {
    var r = ak(e, t);
    return sk(r, n);
  },
  KF = (e, t) => (n) => {
    var r = ak(e, t),
      o = [...r.map((s, l) => s * l).slice(1), 0];
    return sk(o, n);
  },
  HF = (e) => {
    var t,
      n = e.split("(");
    if (n.length !== 2 || n[0] !== "cubic-bezier") return null;
    var r =
      (t = n[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0
        ? void 0
        : t.split(",");
    if (r == null || r.length !== 4) return null;
    var o = r.map((s) => parseFloat(s));
    return [o[0], o[1], o[2], o[3]];
  },
  qF = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    if (n.length === 1)
      switch (n[0]) {
        case "linear":
          return [0, 0, 1, 1];
        case "ease":
          return [0.25, 0.1, 0.25, 1];
        case "ease-in":
          return [0.42, 0, 1, 1];
        case "ease-out":
          return [0.42, 0, 0.58, 1];
        case "ease-in-out":
          return [0, 0, 0.58, 1];
        default: {
          var o = HF(n[0]);
          if (o) return o;
        }
      }
    return n.length === 4 ? n : [0, 0, 1, 1];
  },
  YF = (e, t, n, r) => {
    var o = yS(e, n),
      s = yS(t, r),
      l = KF(e, n),
      c = (d) => (d > 1 ? 1 : d < 0 ? 0 : d),
      f = (d) => {
        for (var p = d > 1 ? 1 : d, m = p, g = 0; g < 8; ++g) {
          var x = o(m) - p,
            b = l(m);
          if (Math.abs(x - p) < Lc || b < Lc) return s(m);
          m = c(m - x / b);
        }
        return s(m);
      };
    return ((f.isStepper = !1), f);
  },
  xS = function () {
    return YF(...qF(...arguments));
  },
  GF = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { stiff: n = 100, damping: r = 8, dt: o = 17 } = t,
      s = (l, c, f) => {
        var d = -(l - c) * n,
          p = f * r,
          m = f + ((d - p) * o) / 1e3,
          g = (f * o) / 1e3 + l;
        return Math.abs(g - c) < Lc && Math.abs(m) < Lc ? [c, 0] : [g, m];
      };
    return ((s.isStepper = !0), (s.dt = o), s);
  },
  XF = (e) => {
    if (typeof e == "string")
      switch (e) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return xS(e);
        case "spring":
          return GF();
        default:
          if (e.split("(")[0] === "cubic-bezier") return xS(e);
      }
    return typeof e == "function" ? e : null;
  };
function ZF(e) {
  var t,
    n = () => null,
    r = !1,
    o = null,
    s = (l) => {
      if (!r) {
        if (Array.isArray(l)) {
          if (!l.length) return;
          var c = l,
            [f, ...d] = c;
          if (typeof f == "number") {
            o = e.setTimeout(s.bind(null, d), f);
            return;
          }
          (s(f), (o = e.setTimeout(s.bind(null, d))));
          return;
        }
        (typeof l == "string" && ((t = l), n(t)),
          typeof l == "object" && ((t = l), n(t)),
          typeof l == "function" && l());
      }
    };
  return {
    stop: () => {
      r = !0;
    },
    start: (l) => {
      ((r = !1), o && (o(), (o = null)), s(l));
    },
    subscribe: (l) => (
      (n = l),
      () => {
        n = () => null;
      }
    ),
    getTimeoutController: () => e,
  };
}
class QF {
  setTimeout(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      r = performance.now(),
      o = null,
      s = (l) => {
        l - r >= n
          ? t(l)
          : typeof requestAnimationFrame == "function" && (o = requestAnimationFrame(s));
      };
    return (
      (o = requestAnimationFrame(s)),
      () => {
        o != null && cancelAnimationFrame(o);
      }
    );
  }
}
function JF() {
  return ZF(new QF());
}
var e5 = E.createContext(JF);
function t5(e, t) {
  var n = E.useContext(e5);
  return E.useMemo(() => t ?? n(e), [e, t, n]);
}
var n5 = {
    begin: 0,
    duration: 1e3,
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  wS = { t: 0 },
  Jp = { t: 1 };
function Tg(e) {
  var t = pi(e, n5),
    {
      isActive: n,
      canBegin: r,
      duration: o,
      easing: s,
      begin: l,
      onAnimationEnd: c,
      onAnimationStart: f,
      children: d,
    } = t,
    p = AF(),
    m = n === "auto" ? !Rf.isSsr && !p : n,
    g = t5(t.animationId, t.animationManager),
    [x, b] = E.useState(m ? wS : Jp),
    w = E.useRef(null);
  return (
    E.useEffect(() => {
      m || b(Jp);
    }, [m]),
    E.useEffect(() => {
      if (!m || !r) return Qs;
      var S = WF(wS, Jp, XF(s), o, b, g.getTimeoutController()),
        C = () => {
          w.current = S();
        };
      return (
        g.start([f, l, C, o, c]),
        () => {
          (g.stop(), w.current && w.current(), c());
        }
      );
    }, [m, r, o, s, l, f, c, g]),
    d(x.t)
  );
}
function kg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-",
    n = E.useRef(js(t)),
    r = E.useRef(e);
  return (r.current !== e && ((n.current = js(t)), (r.current = e)), n.current);
}
var r5 = ["radius"],
  i5 = ["radius"],
  bS,
  SS,
  PS,
  ES,
  CS,
  AS,
  TS,
  kS,
  OS,
  _S;
function MS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function IS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? MS(Object(n), !0).forEach(function (r) {
          o5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MS(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function o5(e, t, n) {
  return (
    (t = a5(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function a5(e) {
  var t = s5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s5(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $c() {
  return (
    ($c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $c.apply(null, arguments)
  );
}
function DS(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = l5(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function l5(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Zn(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var jS = (e, t, n, r, o) => {
    var s = ii(n),
      l = ii(r),
      c = Math.min(Math.abs(s) / 2, Math.abs(l) / 2),
      f = l >= 0 ? 1 : -1,
      d = s >= 0 ? 1 : -1,
      p = (l >= 0 && s >= 0) || (l < 0 && s < 0) ? 1 : 0,
      m;
    if (c > 0 && Array.isArray(o)) {
      for (var g = [0, 0, 0, 0], x = 0, b = 4; x < b; x++) {
        var w,
          S = (w = o[x]) !== null && w !== void 0 ? w : 0;
        g[x] = S > c ? c : S;
      }
      ((m = Qe(bS || (bS = Zn(["M", ",", ""])), e, t + f * g[0])),
        g[0] > 0 &&
          (m += Qe(
            SS || (SS = Zn(["A ", ",", ",0,0,", ",", ",", ""])),
            g[0],
            g[0],
            p,
            e + d * g[0],
            t,
          )),
        (m += Qe(PS || (PS = Zn(["L ", ",", ""])), e + n - d * g[1], t)),
        g[1] > 0 &&
          (m += Qe(
            ES ||
              (ES = Zn([
                "A ",
                ",",
                ",0,0,",
                `,
        `,
                ",",
                "",
              ])),
            g[1],
            g[1],
            p,
            e + n,
            t + f * g[1],
          )),
        (m += Qe(CS || (CS = Zn(["L ", ",", ""])), e + n, t + r - f * g[2])),
        g[2] > 0 &&
          (m += Qe(
            AS ||
              (AS = Zn([
                "A ",
                ",",
                ",0,0,",
                `,
        `,
                ",",
                "",
              ])),
            g[2],
            g[2],
            p,
            e + n - d * g[2],
            t + r,
          )),
        (m += Qe(TS || (TS = Zn(["L ", ",", ""])), e + d * g[3], t + r)),
        g[3] > 0 &&
          (m += Qe(
            kS ||
              (kS = Zn([
                "A ",
                ",",
                ",0,0,",
                `,
        `,
                ",",
                "",
              ])),
            g[3],
            g[3],
            p,
            e,
            t + r - f * g[3],
          )),
        (m += "Z"));
    } else if (c > 0 && o === +o && o > 0) {
      var C = Math.min(c, o);
      m = Qe(
        OS ||
          (OS = Zn([
            "M ",
            ",",
            `
            A `,
            ",",
            ",0,0,",
            ",",
            ",",
            `
            L `,
            ",",
            `
            A `,
            ",",
            ",0,0,",
            ",",
            ",",
            `
            L `,
            ",",
            `
            A `,
            ",",
            ",0,0,",
            ",",
            ",",
            `
            L `,
            ",",
            `
            A `,
            ",",
            ",0,0,",
            ",",
            ",",
            " Z",
          ])),
        e,
        t + f * C,
        C,
        C,
        p,
        e + d * C,
        t,
        e + n - d * C,
        t,
        C,
        C,
        p,
        e + n,
        t + f * C,
        e + n,
        t + r - f * C,
        C,
        C,
        p,
        e + n - d * C,
        t + r,
        e + d * C,
        t + r,
        C,
        C,
        p,
        e,
        t + r - f * C,
      );
    } else m = Qe(_S || (_S = Zn(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, n, r, -n);
    return m;
  },
  NS = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  u5 = (e) => {
    var t = pi(e, NS),
      n = E.useRef(null),
      [r, o] = E.useState(-1);
    E.useEffect(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var pe = n.current.getTotalLength();
          pe && o(pe);
        } catch {}
    }, []);
    var { x: s, y: l, width: c, height: f, radius: d, className: p } = t,
      {
        animationEasing: m,
        animationDuration: g,
        animationBegin: x,
        isAnimationActive: b,
        isUpdateAnimationActive: w,
      } = t,
      S = E.useRef(c),
      C = E.useRef(f),
      A = E.useRef(s),
      k = E.useRef(l),
      O = E.useMemo(() => ({ x: s, y: l, width: c, height: f, radius: d }), [s, l, c, f, d]),
      _ = kg(O, "rectangle-");
    if (s !== +s || l !== +l || c !== +c || f !== +f || c === 0 || f === 0) return null;
    var I = un("recharts-rectangle", p);
    if (!w) {
      var R = Fn(t),
        { radius: F } = R,
        W = DS(R, r5);
      return E.createElement(
        "path",
        $c({}, W, {
          x: ii(s),
          y: ii(l),
          width: ii(c),
          height: ii(f),
          radius: typeof d == "number" ? d : void 0,
          className: I,
          d: jS(s, l, c, f, d),
        }),
      );
    }
    var B = S.current,
      q = C.current,
      U = A.current,
      fe = k.current,
      ie = "0px ".concat(r === -1 ? 1 : r, "px"),
      ve = "".concat(r, "px ").concat(r, "px"),
      ye = ik(["strokeDasharray"], g, typeof m == "string" ? m : NS.animationEasing);
    return E.createElement(
      Tg,
      { animationId: _, key: _, canBegin: r > 0, duration: g, easing: m, isActive: w, begin: x },
      (pe) => {
        var H = At(B, c, pe),
          ne = At(q, f, pe),
          X = At(U, s, pe),
          j = At(fe, l, pe);
        n.current && ((S.current = H), (C.current = ne), (A.current = X), (k.current = j));
        var K;
        b
          ? pe > 0
            ? (K = { transition: ye, strokeDasharray: ve })
            : (K = { strokeDasharray: ie })
          : (K = { strokeDasharray: ve });
        var me = Fn(t),
          { radius: xe } = me,
          we = DS(me, i5);
        return E.createElement(
          "path",
          $c({}, we, {
            radius: typeof d == "number" ? d : void 0,
            className: I,
            d: jS(X, j, H, ne, d),
            ref: n,
            style: IS(IS({}, K), t.style),
          }),
        );
      },
    );
  };
function RS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function LS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? RS(Object(n), !0).forEach(function (r) {
          c5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : RS(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function c5(e, t, n) {
  return (
    (t = f5(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function f5(e) {
  var t = d5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function d5(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zc = Math.PI / 180,
  h5 = (e) => (e * 180) / Math.PI,
  rn = (e, t, n, r) => ({ x: e + Math.cos(-zc * r) * n, y: t + Math.sin(-zc * r) * n }),
  p5 = function (t, n) {
    var r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(t - (r.left || 0) - (r.right || 0)),
        Math.abs(n - (r.top || 0) - (r.bottom || 0)),
      ) / 2
    );
  },
  m5 = (e, t) => {
    var { x: n, y: r } = e,
      { x: o, y: s } = t;
    return Math.sqrt((n - o) ** 2 + (r - s) ** 2);
  },
  v5 = (e, t) => {
    var { x: n, y: r } = e,
      { cx: o, cy: s } = t,
      l = m5({ x: n, y: r }, { x: o, y: s });
    if (l <= 0) return { radius: l, angle: 0 };
    var c = (n - o) / l,
      f = Math.acos(c);
    return (r > s && (f = 2 * Math.PI - f), { radius: l, angle: h5(f), angleInRadian: f });
  },
  g5 = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      o = Math.floor(n / 360),
      s = Math.min(r, o);
    return { startAngle: t - s * 360, endAngle: n - s * 360 };
  },
  y5 = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      o = Math.floor(n / 360),
      s = Math.floor(r / 360),
      l = Math.min(o, s);
    return e + l * 360;
  },
  x5 = (e, t) => {
    var { relativeX: n, relativeY: r } = e,
      { radius: o, angle: s } = v5({ x: n, y: r }, t),
      { innerRadius: l, outerRadius: c } = t;
    if (o < l || o > c || o === 0) return null;
    var { startAngle: f, endAngle: d } = g5(t),
      p = s,
      m;
    if (f <= d) {
      for (; p > d;) p -= 360;
      for (; p < f;) p += 360;
      m = p >= f && p <= d;
    } else {
      for (; p > f;) p -= 360;
      for (; p < d;) p += 360;
      m = p >= d && p <= f;
    }
    return m ? LS(LS({}, t), {}, { radius: o, angle: y5(p, t) }) : null;
  },
  $S,
  zS,
  FS,
  VS,
  BS,
  US,
  WS;
function wv() {
  return (
    (wv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wv.apply(null, arguments)
  );
}
function Wi(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var w5 = (e, t) => {
    var n = wn(t - e),
      r = Math.min(Math.abs(t - e), 359.999);
    return n * r;
  },
  Lu = (e) => {
    var {
        cx: t,
        cy: n,
        radius: r,
        angle: o,
        sign: s,
        isExternal: l,
        cornerRadius: c,
        cornerIsExternal: f,
      } = e,
      d = c * (l ? 1 : -1) + r,
      p = Math.asin(c / d) / zc,
      m = f ? o : o + s * p,
      g = rn(t, n, d, m),
      x = rn(t, n, r, m),
      b = f ? o - s * p : o,
      w = rn(t, n, d * Math.cos(p * zc), b);
    return { center: g, circleTangency: x, lineTangency: w, theta: p };
  },
  lk = (e) => {
    var { cx: t, cy: n, innerRadius: r, outerRadius: o, startAngle: s, endAngle: l } = e,
      c = w5(s, l),
      f = s + c,
      d = rn(t, n, o, s),
      p = rn(t, n, o, f),
      m = Qe(
        $S ||
          ($S = Wi([
            "M ",
            ",",
            `
    A `,
            ",",
            `,0,
    `,
            ",",
            `,
    `,
            ",",
            `
  `,
          ])),
        d.x,
        d.y,
        o,
        o,
        +(Math.abs(c) > 180),
        +(s > f),
        p.x,
        p.y,
      );
    if (r > 0) {
      var g = rn(t, n, r, s),
        x = rn(t, n, r, f);
      m += Qe(
        zS ||
          (zS = Wi([
            "L ",
            ",",
            `
            A `,
            ",",
            `,0,
            `,
            ",",
            `,
            `,
            ",",
            " Z",
          ])),
        x.x,
        x.y,
        r,
        r,
        +(Math.abs(c) > 180),
        +(s <= f),
        g.x,
        g.y,
      );
    } else m += Qe(FS || (FS = Wi(["L ", ",", " Z"])), t, n);
    return m;
  },
  b5 = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: o,
        cornerRadius: s,
        forceCornerRadius: l,
        cornerIsExternal: c,
        startAngle: f,
        endAngle: d,
      } = e,
      p = wn(d - f),
      {
        circleTangency: m,
        lineTangency: g,
        theta: x,
      } = Lu({ cx: t, cy: n, radius: o, angle: f, sign: p, cornerRadius: s, cornerIsExternal: c }),
      {
        circleTangency: b,
        lineTangency: w,
        theta: S,
      } = Lu({ cx: t, cy: n, radius: o, angle: d, sign: -p, cornerRadius: s, cornerIsExternal: c }),
      C = c ? Math.abs(f - d) : Math.abs(f - d) - x - S;
    if (C < 0)
      return l
        ? Qe(
            VS ||
              (VS = Wi([
                "M ",
                ",",
                `
        a`,
                ",",
                ",0,0,1,",
                `,0
        a`,
                ",",
                ",0,0,1,",
                `,0
      `,
              ])),
            g.x,
            g.y,
            s,
            s,
            s * 2,
            s,
            s,
            -s * 2,
          )
        : lk({ cx: t, cy: n, innerRadius: r, outerRadius: o, startAngle: f, endAngle: d });
    var A = Qe(
      BS ||
        (BS = Wi([
          "M ",
          ",",
          `
    A`,
          ",",
          ",0,0,",
          ",",
          ",",
          `
    A`,
          ",",
          ",0,",
          ",",
          ",",
          ",",
          `
    A`,
          ",",
          ",0,0,",
          ",",
          ",",
          `
  `,
        ])),
      g.x,
      g.y,
      s,
      s,
      +(p < 0),
      m.x,
      m.y,
      o,
      o,
      +(C > 180),
      +(p < 0),
      b.x,
      b.y,
      s,
      s,
      +(p < 0),
      w.x,
      w.y,
    );
    if (r > 0) {
      var {
          circleTangency: k,
          lineTangency: O,
          theta: _,
        } = Lu({
          cx: t,
          cy: n,
          radius: r,
          angle: f,
          sign: p,
          isExternal: !0,
          cornerRadius: s,
          cornerIsExternal: c,
        }),
        {
          circleTangency: I,
          lineTangency: R,
          theta: F,
        } = Lu({
          cx: t,
          cy: n,
          radius: r,
          angle: d,
          sign: -p,
          isExternal: !0,
          cornerRadius: s,
          cornerIsExternal: c,
        }),
        W = c ? Math.abs(f - d) : Math.abs(f - d) - _ - F;
      if (W < 0 && s === 0) return "".concat(A, "L").concat(t, ",").concat(n, "Z");
      A += Qe(
        US ||
          (US = Wi([
            "L",
            ",",
            `
      A`,
            ",",
            ",0,0,",
            ",",
            ",",
            `
      A`,
            ",",
            ",0,",
            ",",
            ",",
            ",",
            `
      A`,
            ",",
            ",0,0,",
            ",",
            ",",
            "Z",
          ])),
        R.x,
        R.y,
        s,
        s,
        +(p < 0),
        I.x,
        I.y,
        r,
        r,
        +(W > 180),
        +(p > 0),
        k.x,
        k.y,
        s,
        s,
        +(p < 0),
        O.x,
        O.y,
      );
    } else A += Qe(WS || (WS = Wi(["L", ",", "Z"])), t, n);
    return A;
  },
  S5 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  P5 = (e) => {
    var t = pi(e, S5),
      {
        cx: n,
        cy: r,
        innerRadius: o,
        outerRadius: s,
        cornerRadius: l,
        forceCornerRadius: c,
        cornerIsExternal: f,
        startAngle: d,
        endAngle: p,
        className: m,
      } = t;
    if (s < o || d === p) return null;
    var g = un("recharts-sector", m),
      x = s - o,
      b = Vn(l, x, 0, !0),
      w;
    return (
      b > 0 && Math.abs(d - p) < 360
        ? (w = b5({
            cx: n,
            cy: r,
            innerRadius: o,
            outerRadius: s,
            cornerRadius: Math.min(b, x / 2),
            forceCornerRadius: c,
            cornerIsExternal: f,
            startAngle: d,
            endAngle: p,
          }))
        : (w = lk({ cx: n, cy: r, innerRadius: o, outerRadius: s, startAngle: d, endAngle: p })),
      E.createElement("path", wv({}, Fn(t), { className: g, d: w }))
    );
  },
  em = {},
  tm = {},
  nm = {},
  KS;
function E5() {
  return (
    KS ||
      ((KS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = cT();
        function n(r) {
          return t.isSymbol(r) ? NaN : Number(r);
        }
        e.toNumber = n;
      })(nm)),
    nm
  );
}
var HS;
function C5() {
  return (
    HS ||
      ((HS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = E5();
        function n(r) {
          return r
            ? ((r = t.toNumber(r)),
              r === 1 / 0 || r === -1 / 0 ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r === r ? r : 0)
            : r === 0
              ? r
              : 0;
        }
        e.toFinite = n;
      })(tm)),
    tm
  );
}
var qS;
function A5() {
  return (
    qS ||
      ((qS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = fT(),
          n = C5();
        function r(o, s, l) {
          (l && typeof l != "number" && t.isIterateeCall(o, s, l) && (s = l = void 0),
            (o = n.toFinite(o)),
            s === void 0 ? ((s = o), (o = 0)) : (s = n.toFinite(s)),
            (l = l === void 0 ? (o < s ? 1 : -1) : n.toFinite(l)));
          const c = Math.max(Math.ceil((s - o) / (l || 1)), 0),
            f = new Array(c);
          for (let d = 0; d < c; d++) ((f[d] = o), (o += l));
          return f;
        }
        e.range = r;
      })(em)),
    em
  );
}
var rm, YS;
function T5() {
  return (YS || ((YS = 1), (rm = A5().range)), rm);
}
var k5 = T5();
const uk = ao(k5);
var Kn = (e) => e.chartData,
  Og = z([Kn], (e) => {
    var t = e.chartData != null ? e.chartData.length - 1 : 0;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Lf = (e, t, n, r) => (r ? Og(e) : Kn(e)),
  O5 = (e, t, n) => (n ? Og(e) : Kn(e)),
  _5 = z([Lf], (e) => {
    var { chartData: t, dataStartIndex: n, dataEndIndex: r } = e;
    return t != null ? t.slice(n, r + 1) : [];
  });
z([Og], (e) => {
  var { chartData: t, dataStartIndex: n, dataEndIndex: r } = e;
  return t != null ? t.slice(n, r + 1) : [];
});
var M5 = z([Kn], (e) => {
  var { chartData: t, dataStartIndex: n, dataEndIndex: r } = e;
  return t != null ? t.slice(n, r + 1) : [];
});
function ar(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (_e(t) && _e(n)) return !0;
  }
  return !1;
}
function GS(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function ck(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      o,
      s;
    if (_e(n)) o = n;
    else if (typeof n == "function") return;
    if (_e(r)) s = r;
    else if (typeof r == "function") return;
    var l = [o, s];
    if (ar(l)) return l;
  }
}
function I5(e, t, n) {
  if (!(!n && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var r = e(t, n);
        if (ar(r)) return GS(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [o, s] = e,
        l,
        c;
      if (o === "auto") t != null && (l = Math.min(...t));
      else if (Ee(o)) l = o;
      else if (typeof o == "function")
        try {
          t != null && (l = o(t == null ? void 0 : t[0]));
        } catch {}
      else if (typeof o == "string" && Ub.test(o)) {
        var f = Ub.exec(o);
        if (f == null || f[1] == null || t == null) l = void 0;
        else {
          var d = +f[1];
          l = t[0] - d;
        }
      } else l = t == null ? void 0 : t[0];
      if (s === "auto") t != null && (c = Math.max(...t));
      else if (Ee(s)) c = s;
      else if (typeof s == "function")
        try {
          t != null && (c = s(t == null ? void 0 : t[1]));
        } catch {}
      else if (typeof s == "string" && Wb.test(s)) {
        var p = Wb.exec(s);
        if (p == null || p[1] == null || t == null) c = void 0;
        else {
          var m = +p[1];
          c = t[1] + m;
        }
      } else c = t == null ? void 0 : t[1];
      var g = [l, c];
      if (ar(g)) return t == null ? g : GS(g, t, n);
    }
  }
}
var ga = 1e9,
  D5 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Mg,
  qe = !0,
  En = "[DecimalError] ",
  Xi = En + "Invalid argument: ",
  _g = En + "Exponent out of range: ",
  ya = Math.floor,
  Vi = Math.pow,
  j5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  tn,
  ht = 1e7,
  Ke = 7,
  fk = 9007199254740991,
  Fc = ya(fk / Ke),
  ae = {};
ae.absoluteValue = ae.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
ae.comparedTo = ae.cmp = function (e) {
  var t,
    n,
    r,
    o,
    s = this;
  if (((e = new s.constructor(e)), s.s !== e.s)) return s.s || -e.s;
  if (s.e !== e.e) return (s.e > e.e) ^ (s.s < 0) ? 1 : -1;
  for (r = s.d.length, o = e.d.length, t = 0, n = r < o ? r : o; t < n; ++t)
    if (s.d[t] !== e.d[t]) return (s.d[t] > e.d[t]) ^ (s.s < 0) ? 1 : -1;
  return r === o ? 0 : (r > o) ^ (s.s < 0) ? 1 : -1;
};
ae.decimalPlaces = ae.dp = function () {
  var e = this,
    t = e.d.length - 1,
    n = (t - e.e) * Ke;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
  return n < 0 ? 0 : n;
};
ae.dividedBy = ae.div = function (e) {
  return Er(this, new this.constructor(e));
};
ae.dividedToIntegerBy = ae.idiv = function (e) {
  var t = this,
    n = t.constructor;
  return Le(Er(t, new n(e), 0, 1), n.precision);
};
ae.equals = ae.eq = function (e) {
  return !this.cmp(e);
};
ae.exponent = function () {
  return rt(this);
};
ae.greaterThan = ae.gt = function (e) {
  return this.cmp(e) > 0;
};
ae.greaterThanOrEqualTo = ae.gte = function (e) {
  return this.cmp(e) >= 0;
};
ae.isInteger = ae.isint = function () {
  return this.e > this.d.length - 2;
};
ae.isNegative = ae.isneg = function () {
  return this.s < 0;
};
ae.isPositive = ae.ispos = function () {
  return this.s > 0;
};
ae.isZero = function () {
  return this.s === 0;
};
ae.lessThan = ae.lt = function (e) {
  return this.cmp(e) < 0;
};
ae.lessThanOrEqualTo = ae.lte = function (e) {
  return this.cmp(e) < 1;
};
ae.logarithm = ae.log = function (e) {
  var t,
    n = this,
    r = n.constructor,
    o = r.precision,
    s = o + 5;
  if (e === void 0) e = new r(10);
  else if (((e = new r(e)), e.s < 1 || e.eq(tn))) throw Error(En + "NaN");
  if (n.s < 1) throw Error(En + (n.s ? "NaN" : "-Infinity"));
  return n.eq(tn) ? new r(0) : ((qe = !1), (t = Er(Bs(n, s), Bs(e, s), s)), (qe = !0), Le(t, o));
};
ae.minus = ae.sub = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? pk(t, e) : dk(t, ((e.s = -e.s), e)));
};
ae.modulo = ae.mod = function (e) {
  var t,
    n = this,
    r = n.constructor,
    o = r.precision;
  if (((e = new r(e)), !e.s)) throw Error(En + "NaN");
  return n.s ? ((qe = !1), (t = Er(n, e, 0, 1).times(e)), (qe = !0), n.minus(t)) : Le(new r(n), o);
};
ae.naturalExponential = ae.exp = function () {
  return hk(this);
};
ae.naturalLogarithm = ae.ln = function () {
  return Bs(this);
};
ae.negated = ae.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
ae.plus = ae.add = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? dk(t, e) : pk(t, ((e.s = -e.s), e)));
};
ae.precision = ae.sd = function (e) {
  var t,
    n,
    r,
    o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xi + e);
  if (((t = rt(o) + 1), (r = o.d.length - 1), (n = r * Ke + 1), (r = o.d[r]), r)) {
    for (; r % 10 == 0; r /= 10) n--;
    for (r = o.d[0]; r >= 10; r /= 10) n++;
  }
  return e && t > n ? t : n;
};
ae.squareRoot = ae.sqrt = function () {
  var e,
    t,
    n,
    r,
    o,
    s,
    l,
    c = this,
    f = c.constructor;
  if (c.s < 1) {
    if (!c.s) return new f(0);
    throw Error(En + "NaN");
  }
  for (
    e = rt(c),
      qe = !1,
      o = Math.sqrt(+c),
      o == 0 || o == 1 / 0
        ? ((t = ir(c.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (o = Math.sqrt(t)),
          (e = ya((e + 1) / 2) - (e < 0 || e % 2)),
          o == 1 / 0
            ? (t = "5e" + e)
            : ((t = o.toExponential()), (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (r = new f(t)))
        : (r = new f(o.toString())),
      n = f.precision,
      o = l = n + 3;
    ;
  )
    if (
      ((s = r),
      (r = s.plus(Er(c, s, l + 2)).times(0.5)),
      ir(s.d).slice(0, l) === (t = ir(r.d)).slice(0, l))
    ) {
      if (((t = t.slice(l - 3, l + 1)), o == l && t == "4999")) {
        if ((Le(s, n + 1, 0), s.times(s).eq(c))) {
          r = s;
          break;
        }
      } else if (t != "9999") break;
      l += 4;
    }
  return ((qe = !0), Le(r, n));
};
ae.times = ae.mul = function (e) {
  var t,
    n,
    r,
    o,
    s,
    l,
    c,
    f,
    d,
    p = this,
    m = p.constructor,
    g = p.d,
    x = (e = new m(e)).d;
  if (!p.s || !e.s) return new m(0);
  for (
    e.s *= p.s,
      n = p.e + e.e,
      f = g.length,
      d = x.length,
      f < d && ((s = g), (g = x), (x = s), (l = f), (f = d), (d = l)),
      s = [],
      l = f + d,
      r = l;
    r--;
  )
    s.push(0);
  for (r = d; --r >= 0;) {
    for (t = 0, o = f + r; o > r;)
      ((c = s[o] + x[r] * g[o - r - 1] + t), (s[o--] = (c % ht) | 0), (t = (c / ht) | 0));
    s[o] = ((s[o] + t) % ht) | 0;
  }
  for (; !s[--l];) s.pop();
  return (t ? ++n : s.shift(), (e.d = s), (e.e = n), qe ? Le(e, m.precision) : e);
};
ae.toDecimalPlaces = ae.todp = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    (n = new r(n)),
    e === void 0
      ? n
      : (cr(e, 0, ga), t === void 0 ? (t = r.rounding) : cr(t, 0, 8), Le(n, e + rt(n) + 1, t))
  );
};
ae.toExponential = function (e, t) {
  var n,
    r = this,
    o = r.constructor;
  return (
    e === void 0
      ? (n = io(r, !0))
      : (cr(e, 0, ga),
        t === void 0 ? (t = o.rounding) : cr(t, 0, 8),
        (r = Le(new o(r), e + 1, t)),
        (n = io(r, !0, e + 1))),
    n
  );
};
ae.toFixed = function (e, t) {
  var n,
    r,
    o = this,
    s = o.constructor;
  return e === void 0
    ? io(o)
    : (cr(e, 0, ga),
      t === void 0 ? (t = s.rounding) : cr(t, 0, 8),
      (r = Le(new s(o), e + rt(o) + 1, t)),
      (n = io(r.abs(), !1, e + rt(r) + 1)),
      o.isneg() && !o.isZero() ? "-" + n : n);
};
ae.toInteger = ae.toint = function () {
  var e = this,
    t = e.constructor;
  return Le(new t(e), rt(e) + 1, t.rounding);
};
ae.toNumber = function () {
  return +this;
};
ae.toPower = ae.pow = function (e) {
  var t,
    n,
    r,
    o,
    s,
    l,
    c = this,
    f = c.constructor,
    d = 12,
    p = +(e = new f(e));
  if (!e.s) return new f(tn);
  if (((c = new f(c)), !c.s)) {
    if (e.s < 1) throw Error(En + "Infinity");
    return c;
  }
  if (c.eq(tn)) return c;
  if (((r = f.precision), e.eq(tn))) return Le(c, r);
  if (((t = e.e), (n = e.d.length - 1), (l = t >= n), (s = c.s), l)) {
    if ((n = p < 0 ? -p : p) <= fk) {
      for (
        o = new f(tn), t = Math.ceil(r / Ke + 4), qe = !1;
        n % 2 && ((o = o.times(c)), ZS(o.d, t)), (n = ya(n / 2)), n !== 0;
      )
        ((c = c.times(c)), ZS(c.d, t));
      return ((qe = !0), e.s < 0 ? new f(tn).div(o) : Le(o, r));
    }
  } else if (s < 0) throw Error(En + "NaN");
  return (
    (s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
    (c.s = 1),
    (qe = !1),
    (o = e.times(Bs(c, r + d))),
    (qe = !0),
    (o = hk(o)),
    (o.s = s),
    o
  );
};
ae.toPrecision = function (e, t) {
  var n,
    r,
    o = this,
    s = o.constructor;
  return (
    e === void 0
      ? ((n = rt(o)), (r = io(o, n <= s.toExpNeg || n >= s.toExpPos)))
      : (cr(e, 1, ga),
        t === void 0 ? (t = s.rounding) : cr(t, 0, 8),
        (o = Le(new s(o), e, t)),
        (n = rt(o)),
        (r = io(o, e <= n || n <= s.toExpNeg, e))),
    r
  );
};
ae.toSignificantDigits = ae.tosd = function (e, t) {
  var n = this,
    r = n.constructor;
  return (
    e === void 0
      ? ((e = r.precision), (t = r.rounding))
      : (cr(e, 1, ga), t === void 0 ? (t = r.rounding) : cr(t, 0, 8)),
    Le(new r(n), e, t)
  );
};
ae.toString =
  ae.valueOf =
  ae.val =
  ae.toJSON =
  ae[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = rt(e),
        n = e.constructor;
      return io(e, t <= n.toExpNeg || t >= n.toExpPos);
    };
function dk(e, t) {
  var n,
    r,
    o,
    s,
    l,
    c,
    f,
    d,
    p = e.constructor,
    m = p.precision;
  if (!e.s || !t.s) return (t.s || (t = new p(e)), qe ? Le(t, m) : t);
  if (((f = e.d), (d = t.d), (l = e.e), (o = t.e), (f = f.slice()), (s = l - o), s)) {
    for (
      s < 0 ? ((r = f), (s = -s), (c = d.length)) : ((r = d), (o = l), (c = f.length)),
        l = Math.ceil(m / Ke),
        c = l > c ? l + 1 : c + 1,
        s > c && ((s = c), (r.length = 1)),
        r.reverse();
      s--;
    )
      r.push(0);
    r.reverse();
  }
  for (c = f.length, s = d.length, c - s < 0 && ((s = c), (r = d), (d = f), (f = r)), n = 0; s;)
    ((n = ((f[--s] = f[s] + d[s] + n) / ht) | 0), (f[s] %= ht));
  for (n && (f.unshift(n), ++o), c = f.length; f[--c] == 0;) f.pop();
  return ((t.d = f), (t.e = o), qe ? Le(t, m) : t);
}
function cr(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(Xi + e);
}
function ir(e) {
  var t,
    n,
    r,
    o = e.length - 1,
    s = "",
    l = e[0];
  if (o > 0) {
    for (s += l, t = 1; t < o; t++)
      ((r = e[t] + ""), (n = Ke - r.length), n && (s += ti(n)), (s += r));
    ((l = e[t]), (r = l + ""), (n = Ke - r.length), n && (s += ti(n)));
  } else if (l === 0) return "0";
  for (; l % 10 === 0;) l /= 10;
  return s + l;
}
var Er = (function () {
  function e(r, o) {
    var s,
      l = 0,
      c = r.length;
    for (r = r.slice(); c--;) ((s = r[c] * o + l), (r[c] = (s % ht) | 0), (l = (s / ht) | 0));
    return (l && r.unshift(l), r);
  }
  function t(r, o, s, l) {
    var c, f;
    if (s != l) f = s > l ? 1 : -1;
    else
      for (c = f = 0; c < s; c++)
        if (r[c] != o[c]) {
          f = r[c] > o[c] ? 1 : -1;
          break;
        }
    return f;
  }
  function n(r, o, s) {
    for (var l = 0; s--;) ((r[s] -= l), (l = r[s] < o[s] ? 1 : 0), (r[s] = l * ht + r[s] - o[s]));
    for (; !r[0] && r.length > 1;) r.shift();
  }
  return function (r, o, s, l) {
    var c,
      f,
      d,
      p,
      m,
      g,
      x,
      b,
      w,
      S,
      C,
      A,
      k,
      O,
      _,
      I,
      R,
      F,
      W = r.constructor,
      B = r.s == o.s ? 1 : -1,
      q = r.d,
      U = o.d;
    if (!r.s) return new W(r);
    if (!o.s) throw Error(En + "Division by zero");
    for (
      f = r.e - o.e, R = U.length, _ = q.length, x = new W(B), b = x.d = [], d = 0;
      U[d] == (q[d] || 0);
    )
      ++d;
    if (
      (U[d] > (q[d] || 0) && --f,
      s == null ? (A = s = W.precision) : l ? (A = s + (rt(r) - rt(o)) + 1) : (A = s),
      A < 0)
    )
      return new W(0);
    if (((A = (A / Ke + 2) | 0), (d = 0), R == 1))
      for (p = 0, U = U[0], A++; (d < _ || p) && A--; d++)
        ((k = p * ht + (q[d] || 0)), (b[d] = (k / U) | 0), (p = (k % U) | 0));
    else {
      for (
        p = (ht / (U[0] + 1)) | 0,
          p > 1 && ((U = e(U, p)), (q = e(q, p)), (R = U.length), (_ = q.length)),
          O = R,
          w = q.slice(0, R),
          S = w.length;
        S < R;
      )
        w[S++] = 0;
      ((F = U.slice()), F.unshift(0), (I = U[0]), U[1] >= ht / 2 && ++I);
      do
        ((p = 0),
          (c = t(U, w, R, S)),
          c < 0
            ? ((C = w[0]),
              R != S && (C = C * ht + (w[1] || 0)),
              (p = (C / I) | 0),
              p > 1
                ? (p >= ht && (p = ht - 1),
                  (m = e(U, p)),
                  (g = m.length),
                  (S = w.length),
                  (c = t(m, w, g, S)),
                  c == 1 && (p--, n(m, R < g ? F : U, g)))
                : (p == 0 && (c = p = 1), (m = U.slice())),
              (g = m.length),
              g < S && m.unshift(0),
              n(w, m, S),
              c == -1 &&
                ((S = w.length), (c = t(U, w, R, S)), c < 1 && (p++, n(w, R < S ? F : U, S))),
              (S = w.length))
            : c === 0 && (p++, (w = [0])),
          (b[d++] = p),
          c && w[0] ? (w[S++] = q[O] || 0) : ((w = [q[O]]), (S = 1)));
      while ((O++ < _ || w[0] !== void 0) && A--);
    }
    return (b[0] || b.shift(), (x.e = f), Le(x, l ? s + rt(x) + 1 : s));
  };
})();
function hk(e, t) {
  var n,
    r,
    o,
    s,
    l,
    c,
    f = 0,
    d = 0,
    p = e.constructor,
    m = p.precision;
  if (rt(e) > 16) throw Error(_g + rt(e));
  if (!e.s) return new p(tn);
  for (qe = !1, c = m, l = new p(0.03125); e.abs().gte(0.1);) ((e = e.times(l)), (d += 5));
  for (
    r = ((Math.log(Vi(2, d)) / Math.LN10) * 2 + 5) | 0,
      c += r,
      n = o = s = new p(tn),
      p.precision = c;
    ;
  ) {
    if (
      ((o = Le(o.times(e), c)),
      (n = n.times(++f)),
      (l = s.plus(Er(o, n, c))),
      ir(l.d).slice(0, c) === ir(s.d).slice(0, c))
    ) {
      for (; d--;) s = Le(s.times(s), c);
      return ((p.precision = m), t == null ? ((qe = !0), Le(s, m)) : s);
    }
    s = l;
  }
}
function rt(e) {
  for (var t = e.e * Ke, n = e.d[0]; n >= 10; n /= 10) t++;
  return t;
}
function im(e, t, n) {
  if (t > e.LN10.sd())
    throw ((qe = !0), n && (e.precision = n), Error(En + "LN10 precision limit exceeded"));
  return Le(new e(e.LN10), t);
}
function ti(e) {
  for (var t = ""; e--;) t += "0";
  return t;
}
function Bs(e, t) {
  var n,
    r,
    o,
    s,
    l,
    c,
    f,
    d,
    p,
    m = 1,
    g = 10,
    x = e,
    b = x.d,
    w = x.constructor,
    S = w.precision;
  if (x.s < 1) throw Error(En + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(tn)) return new w(0);
  if ((t == null ? ((qe = !1), (d = S)) : (d = t), x.eq(10)))
    return (t == null && (qe = !0), im(w, d));
  if (
    ((d += g), (w.precision = d), (n = ir(b)), (r = n.charAt(0)), (s = rt(x)), Math.abs(s) < 15e14)
  ) {
    for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3);)
      ((x = x.times(e)), (n = ir(x.d)), (r = n.charAt(0)), m++);
    ((s = rt(x)), r > 1 ? ((x = new w("0." + n)), s++) : (x = new w(r + "." + n.slice(1))));
  } else
    return (
      (f = im(w, d + 2, S).times(s + "")),
      (x = Bs(new w(r + "." + n.slice(1)), d - g).plus(f)),
      (w.precision = S),
      t == null ? ((qe = !0), Le(x, S)) : x
    );
  for (c = l = x = Er(x.minus(tn), x.plus(tn), d), p = Le(x.times(x), d), o = 3; ;) {
    if (
      ((l = Le(l.times(p), d)),
      (f = c.plus(Er(l, new w(o), d))),
      ir(f.d).slice(0, d) === ir(c.d).slice(0, d))
    )
      return (
        (c = c.times(2)),
        s !== 0 && (c = c.plus(im(w, d + 2, S).times(s + ""))),
        (c = Er(c, new w(m), d)),
        (w.precision = S),
        t == null ? ((qe = !0), Le(c, S)) : c
      );
    ((c = f), (o += 2));
  }
}
function XS(e, t) {
  var n, r, o;
  for (
    (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (r = t.search(/e/i)) > 0
        ? (n < 0 && (n = r), (n += +t.slice(r + 1)), (t = t.substring(0, r)))
        : n < 0 && (n = t.length),
      r = 0;
    t.charCodeAt(r) === 48;
  )
    ++r;
  for (o = t.length; t.charCodeAt(o - 1) === 48;) --o;
  if (((t = t.slice(r, o)), t)) {
    if (
      ((o -= r),
      (n = n - r - 1),
      (e.e = ya(n / Ke)),
      (e.d = []),
      (r = (n + 1) % Ke),
      n < 0 && (r += Ke),
      r < o)
    ) {
      for (r && e.d.push(+t.slice(0, r)), o -= Ke; r < o;) e.d.push(+t.slice(r, (r += Ke)));
      ((t = t.slice(r)), (r = Ke - t.length));
    } else r -= o;
    for (; r--;) t += "0";
    if ((e.d.push(+t), qe && (e.e > Fc || e.e < -Fc))) throw Error(_g + n);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function Le(e, t, n) {
  var r,
    o,
    s,
    l,
    c,
    f,
    d,
    p,
    m = e.d;
  for (l = 1, s = m[0]; s >= 10; s /= 10) l++;
  if (((r = t - l), r < 0)) ((r += Ke), (o = t), (d = m[(p = 0)]));
  else {
    if (((p = Math.ceil((r + 1) / Ke)), (s = m.length), p >= s)) return e;
    for (d = s = m[p], l = 1; s >= 10; s /= 10) l++;
    ((r %= Ke), (o = r - Ke + l));
  }
  if (
    (n !== void 0 &&
      ((s = Vi(10, l - o - 1)),
      (c = ((d / s) % 10) | 0),
      (f = t < 0 || m[p + 1] !== void 0 || d % s),
      (f =
        n < 4
          ? (c || f) && (n == 0 || n == (e.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (n == 4 ||
                f ||
                (n == 6 && ((r > 0 ? (o > 0 ? d / Vi(10, l - o) : 0) : m[p - 1]) % 10) & 1) ||
                n == (e.s < 0 ? 8 : 7))))),
    t < 1 || !m[0])
  )
    return (
      f
        ? ((s = rt(e)),
          (m.length = 1),
          (t = t - s - 1),
          (m[0] = Vi(10, (Ke - (t % Ke)) % Ke)),
          (e.e = ya(-t / Ke) || 0))
        : ((m.length = 1), (m[0] = e.e = e.s = 0)),
      e
    );
  if (
    (r == 0
      ? ((m.length = p), (s = 1), p--)
      : ((m.length = p + 1),
        (s = Vi(10, Ke - r)),
        (m[p] = o > 0 ? (((d / Vi(10, l - o)) % Vi(10, o)) | 0) * s : 0)),
    f)
  )
    for (;;)
      if (p == 0) {
        (m[0] += s) == ht && ((m[0] = 1), ++e.e);
        break;
      } else {
        if (((m[p] += s), m[p] != ht)) break;
        ((m[p--] = 0), (s = 1));
      }
  for (r = m.length; m[--r] === 0;) m.pop();
  if (qe && (e.e > Fc || e.e < -Fc)) throw Error(_g + rt(e));
  return e;
}
function pk(e, t) {
  var n,
    r,
    o,
    s,
    l,
    c,
    f,
    d,
    p,
    m,
    g = e.constructor,
    x = g.precision;
  if (!e.s || !t.s) return (t.s ? (t.s = -t.s) : (t = new g(e)), qe ? Le(t, x) : t);
  if (((f = e.d), (m = t.d), (r = t.e), (d = e.e), (f = f.slice()), (l = d - r), l)) {
    for (
      p = l < 0,
        p ? ((n = f), (l = -l), (c = m.length)) : ((n = m), (r = d), (c = f.length)),
        o = Math.max(Math.ceil(x / Ke), c) + 2,
        l > o && ((l = o), (n.length = 1)),
        n.reverse(),
        o = l;
      o--;
    )
      n.push(0);
    n.reverse();
  } else {
    for (o = f.length, c = m.length, p = o < c, p && (c = o), o = 0; o < c; o++)
      if (f[o] != m[o]) {
        p = f[o] < m[o];
        break;
      }
    l = 0;
  }
  for (p && ((n = f), (f = m), (m = n), (t.s = -t.s)), c = f.length, o = m.length - c; o > 0; --o)
    f[c++] = 0;
  for (o = m.length; o > l;) {
    if (f[--o] < m[o]) {
      for (s = o; s && f[--s] === 0;) f[s] = ht - 1;
      (--f[s], (f[o] += ht));
    }
    f[o] -= m[o];
  }
  for (; f[--c] === 0;) f.pop();
  for (; f[0] === 0; f.shift()) --r;
  return f[0] ? ((t.d = f), (t.e = r), qe ? Le(t, x) : t) : new g(0);
}
function io(e, t, n) {
  var r,
    o = rt(e),
    s = ir(e.d),
    l = s.length;
  return (
    t
      ? (n && (r = n - l) > 0
          ? (s = s.charAt(0) + "." + s.slice(1) + ti(r))
          : l > 1 && (s = s.charAt(0) + "." + s.slice(1)),
        (s = s + (o < 0 ? "e" : "e+") + o))
      : o < 0
        ? ((s = "0." + ti(-o - 1) + s), n && (r = n - l) > 0 && (s += ti(r)))
        : o >= l
          ? ((s += ti(o + 1 - l)), n && (r = n - o - 1) > 0 && (s = s + "." + ti(r)))
          : ((r = o + 1) < l && (s = s.slice(0, r) + "." + s.slice(r)),
            n && (r = n - l) > 0 && (o + 1 === l && (s += "."), (s += ti(r)))),
    e.s < 0 ? "-" + s : s
  );
}
function ZS(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function mk(e) {
  var t, n, r;
  function o(s) {
    var l = this;
    if (!(l instanceof o)) return new o(s);
    if (((l.constructor = o), s instanceof o)) {
      ((l.s = s.s), (l.e = s.e), (l.d = (s = s.d) ? s.slice() : s));
      return;
    }
    if (typeof s == "number") {
      if (s * 0 !== 0) throw Error(Xi + s);
      if (s > 0) l.s = 1;
      else if (s < 0) ((s = -s), (l.s = -1));
      else {
        ((l.s = 0), (l.e = 0), (l.d = [0]));
        return;
      }
      if (s === ~~s && s < 1e7) {
        ((l.e = 0), (l.d = [s]));
        return;
      }
      return XS(l, s.toString());
    } else if (typeof s != "string") throw Error(Xi + s);
    if ((s.charCodeAt(0) === 45 ? ((s = s.slice(1)), (l.s = -1)) : (l.s = 1), j5.test(s))) XS(l, s);
    else throw Error(Xi + s);
  }
  if (
    ((o.prototype = ae),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.clone = mk),
    (o.config = o.set = N5),
    e === void 0 && (e = {}),
    e)
  )
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < r.length;)
      e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
  return (o.config(e), o);
}
function N5(e) {
  if (!e || typeof e != "object") throw Error(En + "Object expected");
  var t,
    n,
    r,
    o = ["precision", 1, ga, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < o.length; t += 3)
    if ((r = e[(n = o[t])]) !== void 0)
      if (ya(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
      else throw Error(Xi + n + ": " + r);
  if ((r = e[(n = "LN10")]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error(Xi + n + ": " + r);
  return this;
}
var Mg = mk(D5);
tn = new Mg(1);
const Ce = Mg;
function vk(e) {
  var t;
  return (e === 0 ? (t = 1) : (t = Math.floor(new Ce(e).abs().log(10).toNumber()) + 1), t);
}
function gk(e, t, n) {
  for (var r = new Ce(e), o = 0, s = []; r.lt(t) && o < 1e5;)
    (s.push(r.toNumber()), (r = r.add(n)), o++);
  return s;
}
var yk = (e) => {
    var [t, n] = e,
      [r, o] = [t, n];
    return (t > n && ([r, o] = [n, t]), [r, o]);
  },
  Ig = (e, t, n) => {
    if (e.lte(0)) return new Ce(0);
    var r = vk(e.toNumber()),
      o = new Ce(10).pow(r),
      s = e.div(o),
      l = r !== 1 ? 0.05 : 0.1,
      c = new Ce(Math.ceil(s.div(l).toNumber())).add(n).mul(l),
      f = c.mul(o);
    return t ? new Ce(f.toNumber()) : new Ce(Math.ceil(f.toNumber()));
  },
  xk = (e, t, n) => {
    var r;
    if (e.lte(0)) return new Ce(0);
    var o = [1, 2, 2.5, 5],
      s = e.toNumber(),
      l = Math.floor(new Ce(s).abs().log(10).toNumber()),
      c = new Ce(10).pow(l),
      f = e.div(c).toNumber(),
      d = o.findIndex((x) => x >= f - 1e-10);
    if ((d === -1 && ((c = c.mul(10)), (d = 0)), (d += n), d >= o.length)) {
      var p = Math.floor(d / o.length);
      ((d %= o.length), (c = c.mul(new Ce(10).pow(p))));
    }
    var m = (r = o[d]) !== null && r !== void 0 ? r : 1,
      g = new Ce(m).mul(c);
    return t ? g : new Ce(Math.ceil(g.toNumber()));
  },
  R5 = (e, t, n) => {
    var r = new Ce(1),
      o = new Ce(e);
    if (!o.isint() && n) {
      var s = Math.abs(e);
      s < 1
        ? ((r = new Ce(10).pow(vk(e) - 1)), (o = new Ce(Math.floor(o.div(r).toNumber())).mul(r)))
        : s > 1 && (o = new Ce(Math.floor(e)));
    } else e === 0 ? (o = new Ce(Math.floor((t - 1) / 2))) : n || (o = new Ce(Math.floor(e)));
    for (var l = Math.floor((t - 1) / 2), c = [], f = 0; f < t; f++)
      c.push(o.add(new Ce(f - l).mul(r)).toNumber());
    return c;
  },
  wk = function (t, n, r, o) {
    var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
      l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Ig;
    if (!Number.isFinite((n - t) / (r - 1)))
      return { step: new Ce(0), tickMin: new Ce(0), tickMax: new Ce(0) };
    var c = l(new Ce(n).sub(t).div(r - 1), o, s),
      f;
    t <= 0 && n >= 0
      ? (f = new Ce(0))
      : ((f = new Ce(t).add(n).div(2)), (f = f.sub(new Ce(f).mod(c))));
    var d = Math.ceil(f.sub(t).div(c).toNumber()),
      p = Math.ceil(new Ce(n).sub(f).div(c).toNumber()),
      m = d + p + 1;
    return m > r
      ? wk(t, n, r, o, s + 1, l)
      : (m < r && ((p = n > 0 ? p + (r - m) : p), (d = n > 0 ? d : d + (r - m))),
        { step: c, tickMin: f.sub(new Ce(d).mul(c)), tickMax: f.add(new Ce(p).mul(c)) });
  },
  QS = function (t) {
    var [n, r] = t,
      o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto",
      c = Math.max(o, 2),
      [f, d] = yk([n, r]);
    if (f === -1 / 0 || d === 1 / 0) {
      var p = d === 1 / 0 ? [f, ...Array(o - 1).fill(1 / 0)] : [...Array(o - 1).fill(-1 / 0), d];
      return n > r ? p.reverse() : p;
    }
    if (f === d) return R5(f, o, s);
    var m = l === "snap125" ? xk : Ig,
      { step: g, tickMin: x, tickMax: b } = wk(f, d, c, s, 0, m),
      w = gk(x, b.add(new Ce(0.1).mul(g)), g);
    return n > r ? w.reverse() : w;
  },
  JS = function (t, n) {
    var [r, o] = t,
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto",
      [c, f] = yk([r, o]);
    if (c === -1 / 0 || f === 1 / 0) return [r, o];
    if (c === f) return [c];
    var d = l === "snap125" ? xk : Ig,
      p = Math.max(n, 2),
      m = d(new Ce(f).sub(c).div(p - 1), s, 0),
      g = [...gk(new Ce(c), new Ce(f), m), f];
    return (s === !1 && (g = g.map((x) => Math.round(x))), r > o ? g.reverse() : g);
  },
  bk = (e) => e.rootProps.maxBarSize,
  L5 = (e) => e.rootProps.barGap,
  Sk = (e) => e.rootProps.barCategoryGap,
  $5 = (e) => e.rootProps.barSize,
  $f = (e) => e.rootProps.stackOffset,
  Pk = (e) => e.rootProps.reverseStackOrder,
  Ek = (e) => e.options.chartName,
  Ck = (e) => e.rootProps.syncId,
  z5 = (e) => e.rootProps.syncMethod,
  Ak = (e) => e.options.eventEmitter,
  vi = {
    grid: -100,
    barBackground: -50,
    area: 100,
    cursorRectangle: 200,
    bar: 300,
    line: 400,
    axis: 500,
    scatter: 600,
    activeBar: 1e3,
    cursorLine: 1100,
    activeDot: 1200,
    label: 2e3,
  },
  ji = {
    allowDecimals: !1,
    allowDataOverflow: !1,
    angleAxisId: 0,
    reversed: !1,
    scale: "auto",
    tick: !0,
    type: "auto",
  },
  Qn = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !0,
    includeHidden: !1,
    radiusAxisId: 0,
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    type: "auto",
  },
  zf = (e, t) => {
    if (!(!e || !t)) return e != null && e.reversed ? [t[1], t[0]] : t;
  };
function Tk(e, t, n) {
  if (n !== "auto") return n;
  if (e != null) return mi(e, t) ? "category" : "number";
}
function eP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? eP(Object(n), !0).forEach(function (r) {
          F5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function F5(e, t, n) {
  return (
    (t = V5(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function V5(e) {
  var t = B5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B5(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tP = {
    allowDataOverflow: ji.allowDataOverflow,
    allowDecimals: ji.allowDecimals,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: ji.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: ji.reversed,
    scale: ji.scale,
    tick: ji.tick,
    tickCount: void 0,
    ticks: void 0,
    type: ji.type,
    unit: void 0,
    niceTicks: "auto",
  },
  nP = {
    allowDataOverflow: Qn.allowDataOverflow,
    allowDecimals: Qn.allowDecimals,
    allowDuplicatedCategory: Qn.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Qn.radiusAxisId,
    includeHidden: Qn.includeHidden,
    name: void 0,
    reversed: Qn.reversed,
    scale: Qn.scale,
    tick: Qn.tick,
    tickCount: Qn.tickCount,
    ticks: void 0,
    type: Qn.type,
    unit: void 0,
    niceTicks: "auto",
  },
  U5 = (e, t) => {
    if (t != null) return e.polarAxis.angleAxis[t];
  },
  Dg = z([U5, XT], (e, t) => {
    var n;
    if (e != null) return e;
    var r = (n = Tk(t, "angleAxis", tP.type)) !== null && n !== void 0 ? n : "category";
    return Vc(Vc({}, tP), {}, { type: r });
  }),
  W5 = (e, t) => e.polarAxis.radiusAxis[t],
  jg = z([W5, XT], (e, t) => {
    var n;
    if (e != null) return e;
    var r = (n = Tk(t, "radiusAxis", nP.type)) !== null && n !== void 0 ? n : "category";
    return Vc(Vc({}, nP), {}, { type: r });
  }),
  Ff = (e) => e.polarOptions,
  Ng = z([Or, _r, kt], p5),
  kk = z([Ff, Ng], (e, t) => {
    if (e != null) return Vn(e.innerRadius, t, 0);
  }),
  Ok = z([Ff, Ng], (e, t) => {
    if (e != null) return Vn(e.outerRadius, t, t * 0.8);
  }),
  K5 = (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  },
  _k = z([Ff], K5);
z([Dg, _k], zf);
var Mk = z([Ng, kk, Ok], (e, t, n) => {
  if (!(e == null || t == null || n == null)) return [t, n];
});
z([jg, Mk], zf);
var Ik = z([$e, Ff, kk, Ok, Or, _r], (e, t, n, r, o, s) => {
    if (!((e !== "centric" && e !== "radial") || t == null || n == null || r == null)) {
      var { cx: l, cy: c, startAngle: f, endAngle: d } = t;
      return {
        cx: Vn(l, o, o / 2),
        cy: Vn(c, s, s / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: f,
        endAngle: d,
        clockWise: !1,
      };
    }
  }),
  gt = (e, t) => t,
  Vf = (e, t, n) => n;
function Rg(e) {
  return e == null ? void 0 : e.id;
}
function Dk(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: o, dataKey: s } = n,
    l = new Map();
  return (
    e.forEach((c) => {
      var f,
        d = (f = c.data) !== null && f !== void 0 ? f : r;
      if (!(d == null || d.length === 0)) {
        var p = Rg(c);
        d.forEach((m, g) => {
          var x = s == null || o ? g : String(pt(m, s, null)),
            b = pt(m, c.dataKey, 0),
            w;
          (l.has(x) ? (w = l.get(x)) : (w = {}), Object.assign(w, { [p]: b }), l.set(x, w));
        });
      }
    }),
    Array.from(l.values())
  );
}
function Bf(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var Uf = (e, t) => (e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1]);
function Wf(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function H5(e, t) {
  if (e.length === t.length) {
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return !1;
}
var yt = (e) => {
    var t = $e(e);
    return t === "horizontal"
      ? "xAxis"
      : t === "vertical"
        ? "yAxis"
        : t === "centric"
          ? "angleAxis"
          : "radiusAxis";
  },
  xa = (e) => e.tooltip.settings.axisId;
function Lg(e) {
  if (e != null) {
    var t = e.ticks,
      n = e.bandwidth,
      r = e.range(),
      o = [Math.min(...r), Math.max(...r)];
    return {
      domain: () => e.domain(),
      range: (function (s) {
        function l() {
          return s.apply(this, arguments);
        }
        return (
          (l.toString = function () {
            return s.toString();
          }),
          l
        );
      })(() => o),
      rangeMin: () => o[0],
      rangeMax: () => o[1],
      isInRange(s) {
        var l = o[0],
          c = o[1];
        return l <= c ? s >= l && s <= c : s >= c && s <= l;
      },
      bandwidth: n ? () => n.call(e) : void 0,
      ticks: t ? (s) => t.call(e, s) : void 0,
      map: (s, l) => {
        var c = e(s);
        if (c != null) {
          if (e.bandwidth && l !== null && l !== void 0 && l.position) {
            var f = e.bandwidth();
            switch (l.position) {
              case "middle":
                c += f / 2;
                break;
              case "end":
                c += f;
                break;
            }
          }
          return c;
        }
      },
    };
  }
}
var q5 = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!ar(t)) {
          for (var n, r, o = 0; o < t.length; o++) {
            var s = t[o];
            _e(s) && ((n === void 0 || s < n) && (n = s), (r === void 0 || s > r) && (r = s));
          }
          return n !== void 0 && r !== void 0 ? [n, r] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function ai(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Y5(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function $g(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = ai), (n = (c, f) => ai(e(c), f)), (r = (c, f) => e(c) - f))
    : ((t = e === ai || e === Y5 ? e : G5), (n = e), (r = e));
  function o(c, f, d = 0, p = c.length) {
    if (d < p) {
      if (t(f, f) !== 0) return p;
      do {
        const m = (d + p) >>> 1;
        n(c[m], f) < 0 ? (d = m + 1) : (p = m);
      } while (d < p);
    }
    return d;
  }
  function s(c, f, d = 0, p = c.length) {
    if (d < p) {
      if (t(f, f) !== 0) return p;
      do {
        const m = (d + p) >>> 1;
        n(c[m], f) <= 0 ? (d = m + 1) : (p = m);
      } while (d < p);
    }
    return d;
  }
  function l(c, f, d = 0, p = c.length) {
    const m = o(c, f, d, p - 1);
    return m > d && r(c[m - 1], f) > -r(c[m], f) ? m - 1 : m;
  }
  return { left: o, center: l, right: s };
}
function G5() {
  return 0;
}
function jk(e) {
  return e === null ? NaN : +e;
}
function* X5(e, t) {
  for (let n of e) n != null && (n = +n) >= n && (yield n);
}
const Z5 = $g(ai),
  il = Z5.right;
$g(jk).center;
class rP extends Map {
  constructor(t, n = eV) {
    if (
      (super(),
      Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } }),
      t != null)
    )
      for (const [r, o] of t) this.set(r, o);
  }
  get(t) {
    return super.get(iP(this, t));
  }
  has(t) {
    return super.has(iP(this, t));
  }
  set(t, n) {
    return super.set(Q5(this, t), n);
  }
  delete(t) {
    return super.delete(J5(this, t));
  }
}
function iP({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Q5({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function J5({ _intern: e, _key: t }, n) {
  const r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function eV(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function tV(e = ai) {
  if (e === ai) return Nk;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, n) => {
    const r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function Nk(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const nV = Math.sqrt(50),
  rV = Math.sqrt(10),
  iV = Math.sqrt(2);
function Bc(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    o = Math.floor(Math.log10(r)),
    s = r / Math.pow(10, o),
    l = s >= nV ? 10 : s >= rV ? 5 : s >= iV ? 2 : 1;
  let c, f, d;
  return (
    o < 0
      ? ((d = Math.pow(10, -o) / l),
        (c = Math.round(e * d)),
        (f = Math.round(t * d)),
        c / d < e && ++c,
        f / d > t && --f,
        (d = -d))
      : ((d = Math.pow(10, o) * l),
        (c = Math.round(e / d)),
        (f = Math.round(t / d)),
        c * d < e && ++c,
        f * d > t && --f),
    f < c && 0.5 <= n && n < 2 ? Bc(e, t, n * 2) : [c, f, d]
  );
}
function bv(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [o, s, l] = r ? Bc(t, e, n) : Bc(e, t, n);
  if (!(s >= o)) return [];
  const c = s - o + 1,
    f = new Array(c);
  if (r)
    if (l < 0) for (let d = 0; d < c; ++d) f[d] = (s - d) / -l;
    else for (let d = 0; d < c; ++d) f[d] = (s - d) * l;
  else if (l < 0) for (let d = 0; d < c; ++d) f[d] = (o + d) / -l;
  else for (let d = 0; d < c; ++d) f[d] = (o + d) * l;
  return f;
}
function Sv(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), Bc(e, t, n)[2]);
}
function Pv(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  const r = t < e,
    o = r ? Sv(t, e, n) : Sv(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function oP(e, t) {
  let n;
  for (const r of e) r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
  return n;
}
function aP(e, t) {
  let n;
  for (const r of e) r != null && (n > r || (n === void 0 && r >= r)) && (n = r);
  return n;
}
function Rk(e, t, n = 0, r = 1 / 0, o) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (o = o === void 0 ? Nk : tV(o); r > n;) {
    if (r - n > 600) {
      const f = r - n + 1,
        d = t - n + 1,
        p = Math.log(f),
        m = 0.5 * Math.exp((2 * p) / 3),
        g = 0.5 * Math.sqrt((p * m * (f - m)) / f) * (d - f / 2 < 0 ? -1 : 1),
        x = Math.max(n, Math.floor(t - (d * m) / f + g)),
        b = Math.min(r, Math.floor(t + ((f - d) * m) / f + g));
      Rk(e, t, x, b, o);
    }
    const s = e[t];
    let l = n,
      c = r;
    for (ps(e, n, t), o(e[r], s) > 0 && ps(e, n, r); l < c;) {
      for (ps(e, l, c), ++l, --c; o(e[l], s) < 0;) ++l;
      for (; o(e[c], s) > 0;) --c;
    }
    (o(e[n], s) === 0 ? ps(e, n, c) : (++c, ps(e, c, r)),
      c <= t && (n = c + 1),
      t <= c && (r = c - 1));
  }
  return e;
}
function ps(e, t, n) {
  const r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function oV(e, t, n) {
  if (((e = Float64Array.from(X5(e))), !(!(r = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || r < 2) return aP(e);
    if (t >= 1) return oP(e);
    var r,
      o = (r - 1) * t,
      s = Math.floor(o),
      l = oP(Rk(e, s).subarray(0, s + 1)),
      c = aP(e.subarray(s + 1));
    return l + (c - l) * (o - s);
  }
}
function aV(e, t, n = jk) {
  if (!(!(r = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      o = (r - 1) * t,
      s = Math.floor(o),
      l = +n(e[s], s, e),
      c = +n(e[s + 1], s + 1, e);
    return l + (c - l) * (o - s);
  }
}
function sV(e, t, n) {
  ((e = +e), (t = +t), (n = (o = arguments.length) < 2 ? ((t = e), (e = 0), 1) : o < 3 ? 1 : +n));
  for (var r = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++r < o;)
    s[r] = e + r * n;
  return s;
}
function Cn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Mr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const Ev = Symbol("implicit");
function zg() {
  var e = new rP(),
    t = [],
    n = [],
    r = Ev;
  function o(s) {
    let l = e.get(s);
    if (l === void 0) {
      if (r !== Ev) return r;
      e.set(s, (l = t.push(s) - 1));
    }
    return n[l % n.length];
  }
  return (
    (o.domain = function (s) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new rP()));
      for (const l of s) e.has(l) || e.set(l, t.push(l) - 1);
      return o;
    }),
    (o.range = function (s) {
      return arguments.length ? ((n = Array.from(s)), o) : n.slice();
    }),
    (o.unknown = function (s) {
      return arguments.length ? ((r = s), o) : r;
    }),
    (o.copy = function () {
      return zg(t, n).unknown(r);
    }),
    Cn.apply(o, arguments),
    o
  );
}
function Fg() {
  var e = zg().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    o = 1,
    s,
    l,
    c = !1,
    f = 0,
    d = 0,
    p = 0.5;
  delete e.unknown;
  function m() {
    var g = t().length,
      x = o < r,
      b = x ? o : r,
      w = x ? r : o;
    ((s = (w - b) / Math.max(1, g - f + d * 2)),
      c && (s = Math.floor(s)),
      (b += (w - b - s * (g - f)) * p),
      (l = s * (1 - f)),
      c && ((b = Math.round(b)), (l = Math.round(l))));
    var S = sV(g).map(function (C) {
      return b + s * C;
    });
    return n(x ? S.reverse() : S);
  }
  return (
    (e.domain = function (g) {
      return arguments.length ? (t(g), m()) : t();
    }),
    (e.range = function (g) {
      return arguments.length ? (([r, o] = g), (r = +r), (o = +o), m()) : [r, o];
    }),
    (e.rangeRound = function (g) {
      return (([r, o] = g), (r = +r), (o = +o), (c = !0), m());
    }),
    (e.bandwidth = function () {
      return l;
    }),
    (e.step = function () {
      return s;
    }),
    (e.round = function (g) {
      return arguments.length ? ((c = !!g), m()) : c;
    }),
    (e.padding = function (g) {
      return arguments.length ? ((f = Math.min(1, (d = +g))), m()) : f;
    }),
    (e.paddingInner = function (g) {
      return arguments.length ? ((f = Math.min(1, g)), m()) : f;
    }),
    (e.paddingOuter = function (g) {
      return arguments.length ? ((d = +g), m()) : d;
    }),
    (e.align = function (g) {
      return arguments.length ? ((p = Math.max(0, Math.min(1, g))), m()) : p;
    }),
    (e.copy = function () {
      return Fg(t(), [r, o]).round(c).paddingInner(f).paddingOuter(d).align(p);
    }),
    Cn.apply(m(), arguments)
  );
}
function Lk(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Lk(t());
    }),
    e
  );
}
function lV() {
  return Lk(Fg.apply(null, arguments).paddingInner(1));
}
function Vg(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function $k(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ol() {}
var Us = 0.7,
  Uc = 1 / Us,
  Qo = "\\s*([+-]?\\d+)\\s*",
  Ws = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  uV = /^#([0-9a-f]{3,8})$/,
  cV = new RegExp(`^rgb\\(${Qo},${Qo},${Qo}\\)$`),
  fV = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`),
  dV = new RegExp(`^rgba\\(${Qo},${Qo},${Qo},${Ws}\\)$`),
  hV = new RegExp(`^rgba\\(${sr},${sr},${sr},${Ws}\\)$`),
  pV = new RegExp(`^hsl\\(${Ws},${sr},${sr}\\)$`),
  mV = new RegExp(`^hsla\\(${Ws},${sr},${sr},${Ws}\\)$`),
  sP = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Vg(ol, Ks, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: lP,
  formatHex: lP,
  formatHex8: vV,
  formatHsl: gV,
  formatRgb: uP,
  toString: uP,
});
function lP() {
  return this.rgb().formatHex();
}
function vV() {
  return this.rgb().formatHex8();
}
function gV() {
  return zk(this).formatHsl();
}
function uP() {
  return this.rgb().formatRgb();
}
function Ks(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = uV.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? cP(t)
          : n === 3
            ? new Xt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? $u((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : n === 4
                ? $u(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = cV.exec(e))
        ? new Xt(t[1], t[2], t[3], 1)
        : (t = fV.exec(e))
          ? new Xt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = dV.exec(e))
            ? $u(t[1], t[2], t[3], t[4])
            : (t = hV.exec(e))
              ? $u((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = pV.exec(e))
                ? hP(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = mV.exec(e))
                  ? hP(t[1], t[2] / 100, t[3] / 100, t[4])
                  : sP.hasOwnProperty(e)
                    ? cP(sP[e])
                    : e === "transparent"
                      ? new Xt(NaN, NaN, NaN, 0)
                      : null
  );
}
function cP(e) {
  return new Xt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function $u(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new Xt(e, t, n, r));
}
function yV(e) {
  return (
    e instanceof ol || (e = Ks(e)),
    e ? ((e = e.rgb()), new Xt(e.r, e.g, e.b, e.opacity)) : new Xt()
  );
}
function Cv(e, t, n, r) {
  return arguments.length === 1 ? yV(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Vg(
  Xt,
  Cv,
  $k(ol, {
    brighter(e) {
      return (
        (e = e == null ? Uc : Math.pow(Uc, e)),
        new Xt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Us : Math.pow(Us, e)),
        new Xt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Xt(Zi(this.r), Zi(this.g), Zi(this.b), Wc(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: fP,
    formatHex: fP,
    formatHex8: xV,
    formatRgb: dP,
    toString: dP,
  }),
);
function fP() {
  return `#${Ki(this.r)}${Ki(this.g)}${Ki(this.b)}`;
}
function xV() {
  return `#${Ki(this.r)}${Ki(this.g)}${Ki(this.b)}${Ki((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dP() {
  const e = Wc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zi(this.r)}, ${Zi(this.g)}, ${Zi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Wc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ki(e) {
  return ((e = Zi(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function hP(e, t, n, r) {
  return (
    r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new $n(e, t, n, r)
  );
}
function zk(e) {
  if (e instanceof $n) return new $n(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ol || (e = Ks(e)), !e)) return new $n();
  if (e instanceof $n) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    o = Math.min(t, n, r),
    s = Math.max(t, n, r),
    l = NaN,
    c = s - o,
    f = (s + o) / 2;
  return (
    c
      ? (t === s
          ? (l = (n - r) / c + (n < r) * 6)
          : n === s
            ? (l = (r - t) / c + 2)
            : (l = (t - n) / c + 4),
        (c /= f < 0.5 ? s + o : 2 - s - o),
        (l *= 60))
      : (c = f > 0 && f < 1 ? 0 : l),
    new $n(l, c, f, e.opacity)
  );
}
function wV(e, t, n, r) {
  return arguments.length === 1 ? zk(e) : new $n(e, t, n, r ?? 1);
}
function $n(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Vg(
  $n,
  wV,
  $k(ol, {
    brighter(e) {
      return (
        (e = e == null ? Uc : Math.pow(Uc, e)),
        new $n(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Us : Math.pow(Us, e)),
        new $n(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        o = 2 * n - r;
      return new Xt(
        om(e >= 240 ? e - 240 : e + 120, o, r),
        om(e, o, r),
        om(e < 120 ? e + 240 : e - 120, o, r),
        this.opacity,
      );
    },
    clamp() {
      return new $n(pP(this.h), zu(this.s), zu(this.l), Wc(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Wc(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${pP(this.h)}, ${zu(this.s) * 100}%, ${zu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function pP(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function zu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function om(e, t, n) {
  return (
    (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
    255
  );
}
const Bg = (e) => () => e;
function bV(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function SV(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function PV(e) {
  return (e = +e) == 1
    ? Fk
    : function (t, n) {
        return n - t ? SV(t, n, e) : Bg(isNaN(t) ? n : t);
      };
}
function Fk(e, t) {
  var n = t - e;
  return n ? bV(e, n) : Bg(isNaN(e) ? t : e);
}
const mP = (function e(t) {
  var n = PV(t);
  function r(o, s) {
    var l = n((o = Cv(o)).r, (s = Cv(s)).r),
      c = n(o.g, s.g),
      f = n(o.b, s.b),
      d = Fk(o.opacity, s.opacity);
    return function (p) {
      return ((o.r = l(p)), (o.g = c(p)), (o.b = f(p)), (o.opacity = d(p)), o + "");
    };
  }
  return ((r.gamma = e), r);
})(1);
function EV(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    o;
  return function (s) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - s) + t[o] * s;
    return r;
  };
}
function CV(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AV(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    o = new Array(r),
    s = new Array(n),
    l;
  for (l = 0; l < r; ++l) o[l] = wa(e[l], t[l]);
  for (; l < n; ++l) s[l] = t[l];
  return function (c) {
    for (l = 0; l < r; ++l) s[l] = o[l](c);
    return s;
  };
}
function TV(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Kc(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function kV(e, t) {
  var n = {},
    r = {},
    o;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (o in t) o in e ? (n[o] = wa(e[o], t[o])) : (r[o] = t[o]);
  return function (s) {
    for (o in n) r[o] = n[o](s);
    return r;
  };
}
var Av = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  am = new RegExp(Av.source, "g");
function OV(e) {
  return function () {
    return e;
  };
}
function _V(e) {
  return function (t) {
    return e(t) + "";
  };
}
function MV(e, t) {
  var n = (Av.lastIndex = am.lastIndex = 0),
    r,
    o,
    s,
    l = -1,
    c = [],
    f = [];
  for (e = e + "", t = t + ""; (r = Av.exec(e)) && (o = am.exec(t));)
    ((s = o.index) > n && ((s = t.slice(n, s)), c[l] ? (c[l] += s) : (c[++l] = s)),
      (r = r[0]) === (o = o[0])
        ? c[l]
          ? (c[l] += o)
          : (c[++l] = o)
        : ((c[++l] = null), f.push({ i: l, x: Kc(r, o) })),
      (n = am.lastIndex));
  return (
    n < t.length && ((s = t.slice(n)), c[l] ? (c[l] += s) : (c[++l] = s)),
    c.length < 2
      ? f[0]
        ? _V(f[0].x)
        : OV(t)
      : ((t = f.length),
        function (d) {
          for (var p = 0, m; p < t; ++p) c[(m = f[p]).i] = m.x(d);
          return c.join("");
        })
  );
}
function wa(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? Bg(t)
    : (n === "number"
        ? Kc
        : n === "string"
          ? (r = Ks(t))
            ? ((t = r), mP)
            : MV
          : t instanceof Ks
            ? mP
            : t instanceof Date
              ? TV
              : CV(t)
                ? EV
                : Array.isArray(t)
                  ? AV
                  : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
                    ? kV
                    : Kc)(e, t);
}
function Ug(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function IV(e, t) {
  t === void 0 && ((t = e), (e = wa));
  for (var n = 0, r = t.length - 1, o = t[0], s = new Array(r < 0 ? 0 : r); n < r;)
    s[n] = e(o, (o = t[++n]));
  return function (l) {
    var c = Math.max(0, Math.min(r - 1, Math.floor((l *= r))));
    return s[c](l - c);
  };
}
function DV(e) {
  return function () {
    return e;
  };
}
function Hc(e) {
  return +e;
}
var vP = [0, 1];
function Vt(e) {
  return e;
}
function Tv(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : DV(isNaN(t) ? NaN : 0.5);
}
function jV(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function NV(e, t, n) {
  var r = e[0],
    o = e[1],
    s = t[0],
    l = t[1];
  return (
    o < r ? ((r = Tv(o, r)), (s = n(l, s))) : ((r = Tv(r, o)), (s = n(s, l))),
    function (c) {
      return s(r(c));
    }
  );
}
function RV(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    o = new Array(r),
    s = new Array(r),
    l = -1;
  for (e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++l < r;)
    ((o[l] = Tv(e[l], e[l + 1])), (s[l] = n(t[l], t[l + 1])));
  return function (c) {
    var f = il(e, c, 1, r) - 1;
    return s[f](o[f](c));
  };
}
function al(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Kf() {
  var e = vP,
    t = vP,
    n = wa,
    r,
    o,
    s,
    l = Vt,
    c,
    f,
    d;
  function p() {
    var g = Math.min(e.length, t.length);
    return (l !== Vt && (l = jV(e[0], e[g - 1])), (c = g > 2 ? RV : NV), (f = d = null), m);
  }
  function m(g) {
    return g == null || isNaN((g = +g)) ? s : (f || (f = c(e.map(r), t, n)))(r(l(g)));
  }
  return (
    (m.invert = function (g) {
      return l(o((d || (d = c(t, e.map(r), Kc)))(g)));
    }),
    (m.domain = function (g) {
      return arguments.length ? ((e = Array.from(g, Hc)), p()) : e.slice();
    }),
    (m.range = function (g) {
      return arguments.length ? ((t = Array.from(g)), p()) : t.slice();
    }),
    (m.rangeRound = function (g) {
      return ((t = Array.from(g)), (n = Ug), p());
    }),
    (m.clamp = function (g) {
      return arguments.length ? ((l = g ? !0 : Vt), p()) : l !== Vt;
    }),
    (m.interpolate = function (g) {
      return arguments.length ? ((n = g), p()) : n;
    }),
    (m.unknown = function (g) {
      return arguments.length ? ((s = g), m) : s;
    }),
    function (g, x) {
      return ((r = g), (o = x), p());
    }
  );
}
function Wg() {
  return Kf()(Vt, Vt);
}
function LV(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function qc(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function ia(e) {
  return ((e = qc(Math.abs(e))), e ? e[1] : NaN);
}
function $V(e, t) {
  return function (n, r) {
    for (
      var o = n.length, s = [], l = 0, c = e[0], f = 0;
      o > 0 &&
      c > 0 &&
      (f + c + 1 > r && (c = Math.max(1, r - f)),
      s.push(n.substring((o -= c), o + c)),
      !((f += c + 1) > r));
    )
      c = e[(l = (l + 1) % e.length)];
    return s.reverse().join(t);
  };
}
function zV(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var FV = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Hs(e) {
  if (!(t = FV.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Kg({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Hs.prototype = Kg.prototype;
function Kg(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
Kg.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function VV(e) {
  e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        (r === 0 && (r = n), (o = n));
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var Yc;
function BV(e, t) {
  var n = qc(e, t);
  if (!n) return ((Yc = void 0), e.toPrecision(t));
  var r = n[0],
    o = n[1],
    s = o - (Yc = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
    l = r.length;
  return s === l
    ? r
    : s > l
      ? r + new Array(s - l + 1).join("0")
      : s > 0
        ? r.slice(0, s) + "." + r.slice(s)
        : "0." + new Array(1 - s).join("0") + qc(e, Math.max(0, t + s - 1))[0];
}
function gP(e, t) {
  var n = qc(e, t);
  if (!n) return e + "";
  var r = n[0],
    o = n[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + r
    : r.length > o + 1
      ? r.slice(0, o + 1) + "." + r.slice(o + 1)
      : r + new Array(o - r.length + 2).join("0");
}
const yP = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: LV,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => gP(e * 100, t),
  r: gP,
  s: BV,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function xP(e) {
  return e;
}
var wP = Array.prototype.map,
  bP = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function UV(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? xP
        : $V(wP.call(e.grouping, Number), e.thousands + ""),
    n = e.currency === void 0 ? "" : e.currency[0] + "",
    r = e.currency === void 0 ? "" : e.currency[1] + "",
    o = e.decimal === void 0 ? "." : e.decimal + "",
    s = e.numerals === void 0 ? xP : zV(wP.call(e.numerals, String)),
    l = e.percent === void 0 ? "%" : e.percent + "",
    c = e.minus === void 0 ? "−" : e.minus + "",
    f = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(m, g) {
    m = Hs(m);
    var x = m.fill,
      b = m.align,
      w = m.sign,
      S = m.symbol,
      C = m.zero,
      A = m.width,
      k = m.comma,
      O = m.precision,
      _ = m.trim,
      I = m.type;
    (I === "n" ? ((k = !0), (I = "g")) : yP[I] || (O === void 0 && (O = 12), (_ = !0), (I = "g")),
      (C || (x === "0" && b === "=")) && ((C = !0), (x = "0"), (b = "=")));
    var R =
        (g && g.prefix !== void 0 ? g.prefix : "") +
        (S === "$" ? n : S === "#" && /[boxX]/.test(I) ? "0" + I.toLowerCase() : ""),
      F = (S === "$" ? r : /[%p]/.test(I) ? l : "") + (g && g.suffix !== void 0 ? g.suffix : ""),
      W = yP[I],
      B = /[defgprs%]/.test(I);
    O =
      O === void 0
        ? 6
        : /[gprs]/.test(I)
          ? Math.max(1, Math.min(21, O))
          : Math.max(0, Math.min(20, O));
    function q(U) {
      var fe = R,
        ie = F,
        ve,
        ye,
        pe;
      if (I === "c") ((ie = W(U) + ie), (U = ""));
      else {
        U = +U;
        var H = U < 0 || 1 / U < 0;
        if (
          ((U = isNaN(U) ? f : W(Math.abs(U), O)),
          _ && (U = VV(U)),
          H && +U == 0 && w !== "+" && (H = !1),
          (fe = (H ? (w === "(" ? w : c) : w === "-" || w === "(" ? "" : w) + fe),
          (ie =
            (I === "s" && !isNaN(U) && Yc !== void 0 ? bP[8 + Yc / 3] : "") +
            ie +
            (H && w === "(" ? ")" : "")),
          B)
        ) {
          for (ve = -1, ye = U.length; ++ve < ye;)
            if (((pe = U.charCodeAt(ve)), 48 > pe || pe > 57)) {
              ((ie = (pe === 46 ? o + U.slice(ve + 1) : U.slice(ve)) + ie), (U = U.slice(0, ve)));
              break;
            }
        }
      }
      k && !C && (U = t(U, 1 / 0));
      var ne = fe.length + U.length + ie.length,
        X = ne < A ? new Array(A - ne + 1).join(x) : "";
      switch ((k && C && ((U = t(X + U, X.length ? A - ie.length : 1 / 0)), (X = "")), b)) {
        case "<":
          U = fe + U + ie + X;
          break;
        case "=":
          U = fe + X + U + ie;
          break;
        case "^":
          U = X.slice(0, (ne = X.length >> 1)) + fe + U + ie + X.slice(ne);
          break;
        default:
          U = X + fe + U + ie;
          break;
      }
      return s(U);
    }
    return (
      (q.toString = function () {
        return m + "";
      }),
      q
    );
  }
  function p(m, g) {
    var x = Math.max(-8, Math.min(8, Math.floor(ia(g) / 3))) * 3,
      b = Math.pow(10, -x),
      w = d(((m = Hs(m)), (m.type = "f"), m), { suffix: bP[8 + x / 3] });
    return function (S) {
      return w(b * S);
    };
  }
  return { format: d, formatPrefix: p };
}
var Fu, Hg, Vk;
WV({ thousands: ",", grouping: [3], currency: ["$", ""] });
function WV(e) {
  return ((Fu = UV(e)), (Hg = Fu.format), (Vk = Fu.formatPrefix), Fu);
}
function KV(e) {
  return Math.max(0, -ia(Math.abs(e)));
}
function HV(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ia(t) / 3))) * 3 - ia(Math.abs(e)));
}
function qV(e, t) {
  return ((e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, ia(t) - ia(e)) + 1);
}
function Bk(e, t, n, r) {
  var o = Pv(e, t, n),
    s;
  switch (((r = Hs(r ?? ",f")), r.type)) {
    case "s": {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return (r.precision == null && !isNaN((s = HV(o, l))) && (r.precision = s), Vk(r, l));
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((s = qV(o, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = s - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN((s = KV(o))) && (r.precision = s - (r.type === "%") * 2);
      break;
    }
  }
  return Hg(r);
}
function gi(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return bv(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var o = t();
      return Bk(o[0], o[o.length - 1], n ?? 10, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        o = 0,
        s = r.length - 1,
        l = r[o],
        c = r[s],
        f,
        d,
        p = 10;
      for (c < l && ((d = l), (l = c), (c = d), (d = o), (o = s), (s = d)); p-- > 0;) {
        if (((d = Sv(l, c, n)), d === f)) return ((r[o] = l), (r[s] = c), t(r));
        if (d > 0) ((l = Math.floor(l / d) * d), (c = Math.ceil(c / d) * d));
        else if (d < 0) ((l = Math.ceil(l * d) / d), (c = Math.floor(c * d) / d));
        else break;
        f = d;
      }
      return e;
    }),
    e
  );
}
function Uk() {
  var e = Wg();
  return (
    (e.copy = function () {
      return al(e, Uk());
    }),
    Cn.apply(e, arguments),
    gi(e)
  );
}
function Wk(e) {
  var t;
  function n(r) {
    return r == null || isNaN((r = +r)) ? t : r;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (r) {
        return arguments.length ? ((e = Array.from(r, Hc)), n) : e.slice();
      }),
    (n.unknown = function (r) {
      return arguments.length ? ((t = r), n) : t;
    }),
    (n.copy = function () {
      return Wk(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Hc) : [0, 1]),
    gi(n)
  );
}
function Kk(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    o = e[n],
    s = e[r],
    l;
  return (
    s < o && ((l = n), (n = r), (r = l), (l = o), (o = s), (s = l)),
    (e[n] = t.floor(o)),
    (e[r] = t.ceil(s)),
    e
  );
}
function SP(e) {
  return Math.log(e);
}
function PP(e) {
  return Math.exp(e);
}
function YV(e) {
  return -Math.log(-e);
}
function GV(e) {
  return -Math.exp(-e);
}
function XV(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ZV(e) {
  return e === 10 ? XV : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function QV(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function EP(e) {
  return (t, n) => -e(-t, n);
}
function qg(e) {
  const t = e(SP, PP),
    n = t.domain;
  let r = 10,
    o,
    s;
  function l() {
    return (
      (o = QV(r)),
      (s = ZV(r)),
      n()[0] < 0 ? ((o = EP(o)), (s = EP(s)), e(YV, GV)) : e(SP, PP),
      t
    );
  }
  return (
    (t.base = function (c) {
      return arguments.length ? ((r = +c), l()) : r;
    }),
    (t.domain = function (c) {
      return arguments.length ? (n(c), l()) : n();
    }),
    (t.ticks = (c) => {
      const f = n();
      let d = f[0],
        p = f[f.length - 1];
      const m = p < d;
      m && ([d, p] = [p, d]);
      let g = o(d),
        x = o(p),
        b,
        w;
      const S = c == null ? 10 : +c;
      let C = [];
      if (!(r % 1) && x - g < S) {
        if (((g = Math.floor(g)), (x = Math.ceil(x)), d > 0)) {
          for (; g <= x; ++g)
            for (b = 1; b < r; ++b)
              if (((w = g < 0 ? b / s(-g) : b * s(g)), !(w < d))) {
                if (w > p) break;
                C.push(w);
              }
        } else
          for (; g <= x; ++g)
            for (b = r - 1; b >= 1; --b)
              if (((w = g > 0 ? b / s(-g) : b * s(g)), !(w < d))) {
                if (w > p) break;
                C.push(w);
              }
        C.length * 2 < S && (C = bv(d, p, S));
      } else C = bv(g, x, Math.min(x - g, S)).map(s);
      return m ? C.reverse() : C;
    }),
    (t.tickFormat = (c, f) => {
      if (
        (c == null && (c = 10),
        f == null && (f = r === 10 ? "s" : ","),
        typeof f != "function" &&
          (!(r % 1) && (f = Hs(f)).precision == null && (f.trim = !0), (f = Hg(f))),
        c === 1 / 0)
      )
        return f;
      const d = Math.max(1, (r * c) / t.ticks().length);
      return (p) => {
        let m = p / s(Math.round(o(p)));
        return (m * r < r - 0.5 && (m *= r), m <= d ? f(p) : "");
      };
    }),
    (t.nice = () =>
      n(Kk(n(), { floor: (c) => s(Math.floor(o(c))), ceil: (c) => s(Math.ceil(o(c))) }))),
    t
  );
}
function Hk() {
  const e = qg(Kf()).domain([1, 10]);
  return ((e.copy = () => al(e, Hk()).base(e.base())), Cn.apply(e, arguments), e);
}
function CP(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function AP(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Yg(e) {
  var t = 1,
    n = e(CP(t), AP(t));
  return (
    (n.constant = function (r) {
      return arguments.length ? e(CP((t = +r)), AP(t)) : t;
    }),
    gi(n)
  );
}
function qk() {
  var e = Yg(Kf());
  return (
    (e.copy = function () {
      return al(e, qk()).constant(e.constant());
    }),
    Cn.apply(e, arguments)
  );
}
function TP(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function JV(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function eB(e) {
  return e < 0 ? -e * e : e * e;
}
function Gg(e) {
  var t = e(Vt, Vt),
    n = 1;
  function r() {
    return n === 1 ? e(Vt, Vt) : n === 0.5 ? e(JV, eB) : e(TP(n), TP(1 / n));
  }
  return (
    (t.exponent = function (o) {
      return arguments.length ? ((n = +o), r()) : n;
    }),
    gi(t)
  );
}
function Xg() {
  var e = Gg(Kf());
  return (
    (e.copy = function () {
      return al(e, Xg()).exponent(e.exponent());
    }),
    Cn.apply(e, arguments),
    e
  );
}
function tB() {
  return Xg.apply(null, arguments).exponent(0.5);
}
function kP(e) {
  return Math.sign(e) * e * e;
}
function nB(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Yk() {
  var e = Wg(),
    t = [0, 1],
    n = !1,
    r;
  function o(s) {
    var l = nB(e(s));
    return isNaN(l) ? r : n ? Math.round(l) : l;
  }
  return (
    (o.invert = function (s) {
      return e.invert(kP(s));
    }),
    (o.domain = function (s) {
      return arguments.length ? (e.domain(s), o) : e.domain();
    }),
    (o.range = function (s) {
      return arguments.length ? (e.range((t = Array.from(s, Hc)).map(kP)), o) : t.slice();
    }),
    (o.rangeRound = function (s) {
      return o.range(s).round(!0);
    }),
    (o.round = function (s) {
      return arguments.length ? ((n = !!s), o) : n;
    }),
    (o.clamp = function (s) {
      return arguments.length ? (e.clamp(s), o) : e.clamp();
    }),
    (o.unknown = function (s) {
      return arguments.length ? ((r = s), o) : r;
    }),
    (o.copy = function () {
      return Yk(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Cn.apply(o, arguments),
    gi(o)
  );
}
function Gk() {
  var e = [],
    t = [],
    n = [],
    r;
  function o() {
    var l = 0,
      c = Math.max(1, t.length);
    for (n = new Array(c - 1); ++l < c;) n[l - 1] = aV(e, l / c);
    return s;
  }
  function s(l) {
    return l == null || isNaN((l = +l)) ? r : t[il(n, l)];
  }
  return (
    (s.invertExtent = function (l) {
      var c = t.indexOf(l);
      return c < 0 ? [NaN, NaN] : [c > 0 ? n[c - 1] : e[0], c < n.length ? n[c] : e[e.length - 1]];
    }),
    (s.domain = function (l) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let c of l) c != null && !isNaN((c = +c)) && e.push(c);
      return (e.sort(ai), o());
    }),
    (s.range = function (l) {
      return arguments.length ? ((t = Array.from(l)), o()) : t.slice();
    }),
    (s.unknown = function (l) {
      return arguments.length ? ((r = l), s) : r;
    }),
    (s.quantiles = function () {
      return n.slice();
    }),
    (s.copy = function () {
      return Gk().domain(e).range(t).unknown(r);
    }),
    Cn.apply(s, arguments)
  );
}
function Xk() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    o = [0, 1],
    s;
  function l(f) {
    return f != null && f <= f ? o[il(r, f, 0, n)] : s;
  }
  function c() {
    var f = -1;
    for (r = new Array(n); ++f < n;) r[f] = ((f + 1) * t - (f - n) * e) / (n + 1);
    return l;
  }
  return (
    (l.domain = function (f) {
      return arguments.length ? (([e, t] = f), (e = +e), (t = +t), c()) : [e, t];
    }),
    (l.range = function (f) {
      return arguments.length ? ((n = (o = Array.from(f)).length - 1), c()) : o.slice();
    }),
    (l.invertExtent = function (f) {
      var d = o.indexOf(f);
      return d < 0 ? [NaN, NaN] : d < 1 ? [e, r[0]] : d >= n ? [r[n - 1], t] : [r[d - 1], r[d]];
    }),
    (l.unknown = function (f) {
      return (arguments.length && (s = f), l);
    }),
    (l.thresholds = function () {
      return r.slice();
    }),
    (l.copy = function () {
      return Xk().domain([e, t]).range(o).unknown(s);
    }),
    Cn.apply(gi(l), arguments)
  );
}
function Zk() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function o(s) {
    return s != null && s <= s ? t[il(e, s, 0, r)] : n;
  }
  return (
    (o.domain = function (s) {
      return arguments.length
        ? ((e = Array.from(s)), (r = Math.min(e.length, t.length - 1)), o)
        : e.slice();
    }),
    (o.range = function (s) {
      return arguments.length
        ? ((t = Array.from(s)), (r = Math.min(e.length, t.length - 1)), o)
        : t.slice();
    }),
    (o.invertExtent = function (s) {
      var l = t.indexOf(s);
      return [e[l - 1], e[l]];
    }),
    (o.unknown = function (s) {
      return arguments.length ? ((n = s), o) : n;
    }),
    (o.copy = function () {
      return Zk().domain(e).range(t).unknown(n);
    }),
    Cn.apply(o, arguments)
  );
}
const sm = new Date(),
  lm = new Date();
function ut(e, t, n, r) {
  function o(s) {
    return (e((s = arguments.length === 0 ? new Date() : new Date(+s))), s);
  }
  return (
    (o.floor = (s) => (e((s = new Date(+s))), s)),
    (o.ceil = (s) => (e((s = new Date(s - 1))), t(s, 1), e(s), s)),
    (o.round = (s) => {
      const l = o(s),
        c = o.ceil(s);
      return s - l < c - s ? l : c;
    }),
    (o.offset = (s, l) => (t((s = new Date(+s)), l == null ? 1 : Math.floor(l)), s)),
    (o.range = (s, l, c) => {
      const f = [];
      if (((s = o.ceil(s)), (c = c == null ? 1 : Math.floor(c)), !(s < l) || !(c > 0))) return f;
      let d;
      do (f.push((d = new Date(+s))), t(s, c), e(s));
      while (d < s && s < l);
      return f;
    }),
    (o.filter = (s) =>
      ut(
        (l) => {
          if (l >= l) for (; e(l), !s(l);) l.setTime(l - 1);
        },
        (l, c) => {
          if (l >= l)
            if (c < 0) for (; ++c <= 0;) for (; t(l, -1), !s(l););
            else for (; --c >= 0;) for (; t(l, 1), !s(l););
        },
      )),
    n &&
      ((o.count = (s, l) => (sm.setTime(+s), lm.setTime(+l), e(sm), e(lm), Math.floor(n(sm, lm)))),
      (o.every = (s) => (
        (s = Math.floor(s)),
        !isFinite(s) || !(s > 0)
          ? null
          : s > 1
            ? o.filter(r ? (l) => r(l) % s === 0 : (l) => o.count(0, l) % s === 0)
            : o
      ))),
    o
  );
}
const Gc = ut(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Gc.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? ut(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : Gc
);
Gc.range;
const Sr = 1e3,
  Sn = Sr * 60,
  Pr = Sn * 60,
  Ar = Pr * 24,
  Zg = Ar * 7,
  OP = Ar * 30,
  um = Ar * 365,
  Hi = ut(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Sr);
    },
    (e, t) => (t - e) / Sr,
    (e) => e.getUTCSeconds(),
  );
Hi.range;
const Qg = ut(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Sr);
  },
  (e, t) => {
    e.setTime(+e + t * Sn);
  },
  (e, t) => (t - e) / Sn,
  (e) => e.getMinutes(),
);
Qg.range;
const Jg = ut(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Sn);
  },
  (e, t) => (t - e) / Sn,
  (e) => e.getUTCMinutes(),
);
Jg.range;
const ey = ut(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Sr - e.getMinutes() * Sn);
  },
  (e, t) => {
    e.setTime(+e + t * Pr);
  },
  (e, t) => (t - e) / Pr,
  (e) => e.getHours(),
);
ey.range;
const ty = ut(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Pr);
  },
  (e, t) => (t - e) / Pr,
  (e) => e.getUTCHours(),
);
ty.range;
const sl = ut(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Sn) / Ar,
  (e) => e.getDate() - 1,
);
sl.range;
const Hf = ut(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Ar,
  (e) => e.getUTCDate() - 1,
);
Hf.range;
const Qk = ut(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Ar,
  (e) => Math.floor(e / Ar),
);
Qk.range;
function so(e) {
  return ut(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Sn) / Zg,
  );
}
const qf = so(0),
  Xc = so(1),
  rB = so(2),
  iB = so(3),
  oa = so(4),
  oB = so(5),
  aB = so(6);
qf.range;
Xc.range;
rB.range;
iB.range;
oa.range;
oB.range;
aB.range;
function lo(e) {
  return ut(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0));
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / Zg,
  );
}
const Yf = lo(0),
  Zc = lo(1),
  sB = lo(2),
  lB = lo(3),
  aa = lo(4),
  uB = lo(5),
  cB = lo(6);
Yf.range;
Zc.range;
sB.range;
lB.range;
aa.range;
uB.range;
cB.range;
const ny = ut(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
ny.range;
const ry = ut(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
ry.range;
const Tr = ut(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Tr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : ut(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      );
Tr.range;
const kr = ut(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
kr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : ut(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      );
kr.range;
function Jk(e, t, n, r, o, s) {
  const l = [
    [Hi, 1, Sr],
    [Hi, 5, 5 * Sr],
    [Hi, 15, 15 * Sr],
    [Hi, 30, 30 * Sr],
    [s, 1, Sn],
    [s, 5, 5 * Sn],
    [s, 15, 15 * Sn],
    [s, 30, 30 * Sn],
    [o, 1, Pr],
    [o, 3, 3 * Pr],
    [o, 6, 6 * Pr],
    [o, 12, 12 * Pr],
    [r, 1, Ar],
    [r, 2, 2 * Ar],
    [n, 1, Zg],
    [t, 1, OP],
    [t, 3, 3 * OP],
    [e, 1, um],
  ];
  function c(d, p, m) {
    const g = p < d;
    g && ([d, p] = [p, d]);
    const x = m && typeof m.range == "function" ? m : f(d, p, m),
      b = x ? x.range(d, +p + 1) : [];
    return g ? b.reverse() : b;
  }
  function f(d, p, m) {
    const g = Math.abs(p - d) / m,
      x = $g(([, , S]) => S).right(l, g);
    if (x === l.length) return e.every(Pv(d / um, p / um, m));
    if (x === 0) return Gc.every(Math.max(Pv(d, p, m), 1));
    const [b, w] = l[g / l[x - 1][2] < l[x][2] / g ? x - 1 : x];
    return b.every(w);
  }
  return [c, f];
}
const [fB, dB] = Jk(kr, ry, Yf, Qk, ty, Jg),
  [hB, pB] = Jk(Tr, ny, qf, sl, ey, Qg);
function cm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function fm(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ms(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function mB(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    o = e.periods,
    s = e.days,
    l = e.shortDays,
    c = e.months,
    f = e.shortMonths,
    d = vs(o),
    p = gs(o),
    m = vs(s),
    g = gs(s),
    x = vs(l),
    b = gs(l),
    w = vs(c),
    S = gs(c),
    C = vs(f),
    A = gs(f),
    k = {
      a: pe,
      A: H,
      b: ne,
      B: X,
      c: null,
      d: NP,
      e: NP,
      f: $B,
      g: YB,
      G: XB,
      H: NB,
      I: RB,
      j: LB,
      L: eO,
      m: zB,
      M: FB,
      p: j,
      q: K,
      Q: $P,
      s: zP,
      S: VB,
      u: BB,
      U: UB,
      V: WB,
      w: KB,
      W: HB,
      x: null,
      X: null,
      y: qB,
      Y: GB,
      Z: ZB,
      "%": LP,
    },
    O = {
      a: me,
      A: xe,
      b: we,
      B: Pe,
      c: null,
      d: RP,
      e: RP,
      f: t8,
      g: f8,
      G: h8,
      H: QB,
      I: JB,
      j: e8,
      L: nO,
      m: n8,
      M: r8,
      p: Me,
      q: Ae,
      Q: $P,
      s: zP,
      S: i8,
      u: o8,
      U: a8,
      V: s8,
      w: l8,
      W: u8,
      x: null,
      X: null,
      y: c8,
      Y: d8,
      Z: p8,
      "%": LP,
    },
    _ = {
      a: B,
      A: q,
      b: U,
      B: fe,
      c: ie,
      d: DP,
      e: DP,
      f: MB,
      g: IP,
      G: MP,
      H: jP,
      I: jP,
      j: TB,
      L: _B,
      m: AB,
      M: kB,
      p: W,
      q: CB,
      Q: DB,
      s: jB,
      S: OB,
      u: wB,
      U: bB,
      V: SB,
      w: xB,
      W: PB,
      x: ve,
      X: ye,
      y: IP,
      Y: MP,
      Z: EB,
      "%": IB,
    };
  ((k.x = I(n, k)),
    (k.X = I(r, k)),
    (k.c = I(t, k)),
    (O.x = I(n, O)),
    (O.X = I(r, O)),
    (O.c = I(t, O)));
  function I(J, te) {
    return function (Se) {
      var Q = [],
        it = -1,
        Ie = 0,
        Ot = J.length,
        _t,
        An,
        Ea;
      for (Se instanceof Date || (Se = new Date(+Se)); ++it < Ot;)
        J.charCodeAt(it) === 37 &&
          (Q.push(J.slice(Ie, it)),
          (An = _P[(_t = J.charAt(++it))]) != null
            ? (_t = J.charAt(++it))
            : (An = _t === "e" ? " " : "0"),
          (Ea = te[_t]) && (_t = Ea(Se, An)),
          Q.push(_t),
          (Ie = it + 1));
      return (Q.push(J.slice(Ie, it)), Q.join(""));
    };
  }
  function R(J, te) {
    return function (Se) {
      var Q = ms(1900, void 0, 1),
        it = F(Q, J, (Se += ""), 0),
        Ie,
        Ot;
      if (it != Se.length) return null;
      if ("Q" in Q) return new Date(Q.Q);
      if ("s" in Q) return new Date(Q.s * 1e3 + ("L" in Q ? Q.L : 0));
      if (
        (te && !("Z" in Q) && (Q.Z = 0),
        "p" in Q && (Q.H = (Q.H % 12) + Q.p * 12),
        Q.m === void 0 && (Q.m = "q" in Q ? Q.q : 0),
        "V" in Q)
      ) {
        if (Q.V < 1 || Q.V > 53) return null;
        ("w" in Q || (Q.w = 1),
          "Z" in Q
            ? ((Ie = fm(ms(Q.y, 0, 1))),
              (Ot = Ie.getUTCDay()),
              (Ie = Ot > 4 || Ot === 0 ? Zc.ceil(Ie) : Zc(Ie)),
              (Ie = Hf.offset(Ie, (Q.V - 1) * 7)),
              (Q.y = Ie.getUTCFullYear()),
              (Q.m = Ie.getUTCMonth()),
              (Q.d = Ie.getUTCDate() + ((Q.w + 6) % 7)))
            : ((Ie = cm(ms(Q.y, 0, 1))),
              (Ot = Ie.getDay()),
              (Ie = Ot > 4 || Ot === 0 ? Xc.ceil(Ie) : Xc(Ie)),
              (Ie = sl.offset(Ie, (Q.V - 1) * 7)),
              (Q.y = Ie.getFullYear()),
              (Q.m = Ie.getMonth()),
              (Q.d = Ie.getDate() + ((Q.w + 6) % 7))));
      } else
        ("W" in Q || "U" in Q) &&
          ("w" in Q || (Q.w = "u" in Q ? Q.u % 7 : "W" in Q ? 1 : 0),
          (Ot = "Z" in Q ? fm(ms(Q.y, 0, 1)).getUTCDay() : cm(ms(Q.y, 0, 1)).getDay()),
          (Q.m = 0),
          (Q.d =
            "W" in Q
              ? ((Q.w + 6) % 7) + Q.W * 7 - ((Ot + 5) % 7)
              : Q.w + Q.U * 7 - ((Ot + 6) % 7)));
      return "Z" in Q ? ((Q.H += (Q.Z / 100) | 0), (Q.M += Q.Z % 100), fm(Q)) : cm(Q);
    };
  }
  function F(J, te, Se, Q) {
    for (var it = 0, Ie = te.length, Ot = Se.length, _t, An; it < Ie;) {
      if (Q >= Ot) return -1;
      if (((_t = te.charCodeAt(it++)), _t === 37)) {
        if (
          ((_t = te.charAt(it++)),
          (An = _[_t in _P ? te.charAt(it++) : _t]),
          !An || (Q = An(J, Se, Q)) < 0)
        )
          return -1;
      } else if (_t != Se.charCodeAt(Q++)) return -1;
    }
    return Q;
  }
  function W(J, te, Se) {
    var Q = d.exec(te.slice(Se));
    return Q ? ((J.p = p.get(Q[0].toLowerCase())), Se + Q[0].length) : -1;
  }
  function B(J, te, Se) {
    var Q = x.exec(te.slice(Se));
    return Q ? ((J.w = b.get(Q[0].toLowerCase())), Se + Q[0].length) : -1;
  }
  function q(J, te, Se) {
    var Q = m.exec(te.slice(Se));
    return Q ? ((J.w = g.get(Q[0].toLowerCase())), Se + Q[0].length) : -1;
  }
  function U(J, te, Se) {
    var Q = C.exec(te.slice(Se));
    return Q ? ((J.m = A.get(Q[0].toLowerCase())), Se + Q[0].length) : -1;
  }
  function fe(J, te, Se) {
    var Q = w.exec(te.slice(Se));
    return Q ? ((J.m = S.get(Q[0].toLowerCase())), Se + Q[0].length) : -1;
  }
  function ie(J, te, Se) {
    return F(J, t, te, Se);
  }
  function ve(J, te, Se) {
    return F(J, n, te, Se);
  }
  function ye(J, te, Se) {
    return F(J, r, te, Se);
  }
  function pe(J) {
    return l[J.getDay()];
  }
  function H(J) {
    return s[J.getDay()];
  }
  function ne(J) {
    return f[J.getMonth()];
  }
  function X(J) {
    return c[J.getMonth()];
  }
  function j(J) {
    return o[+(J.getHours() >= 12)];
  }
  function K(J) {
    return 1 + ~~(J.getMonth() / 3);
  }
  function me(J) {
    return l[J.getUTCDay()];
  }
  function xe(J) {
    return s[J.getUTCDay()];
  }
  function we(J) {
    return f[J.getUTCMonth()];
  }
  function Pe(J) {
    return c[J.getUTCMonth()];
  }
  function Me(J) {
    return o[+(J.getUTCHours() >= 12)];
  }
  function Ae(J) {
    return 1 + ~~(J.getUTCMonth() / 3);
  }
  return {
    format: function (J) {
      var te = I((J += ""), k);
      return (
        (te.toString = function () {
          return J;
        }),
        te
      );
    },
    parse: function (J) {
      var te = R((J += ""), !1);
      return (
        (te.toString = function () {
          return J;
        }),
        te
      );
    },
    utcFormat: function (J) {
      var te = I((J += ""), O);
      return (
        (te.toString = function () {
          return J;
        }),
        te
      );
    },
    utcParse: function (J) {
      var te = R((J += ""), !0);
      return (
        (te.toString = function () {
          return J;
        }),
        te
      );
    },
  };
}
var _P = { "-": "", _: " ", 0: "0" },
  xt = /^\s*\d+/,
  vB = /^%/,
  gB = /[\\^$*+?|[\]().{}]/g;
function Oe(e, t, n) {
  var r = e < 0 ? "-" : "",
    o = (r ? -e : e) + "",
    s = o.length;
  return r + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function yB(e) {
  return e.replace(gB, "\\$&");
}
function vs(e) {
  return new RegExp("^(?:" + e.map(yB).join("|") + ")", "i");
}
function gs(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function xB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function wB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function bB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function SB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function PB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function MP(e, t, n) {
  var r = xt.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function IP(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function EB(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length) : -1;
}
function CB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function AB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function DP(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function TB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function jP(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function kB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function OB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function _B(e, t, n) {
  var r = xt.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function MB(e, t, n) {
  var r = xt.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function IB(e, t, n) {
  var r = vB.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function DB(e, t, n) {
  var r = xt.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function jB(e, t, n) {
  var r = xt.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function NP(e, t) {
  return Oe(e.getDate(), t, 2);
}
function NB(e, t) {
  return Oe(e.getHours(), t, 2);
}
function RB(e, t) {
  return Oe(e.getHours() % 12 || 12, t, 2);
}
function LB(e, t) {
  return Oe(1 + sl.count(Tr(e), e), t, 3);
}
function eO(e, t) {
  return Oe(e.getMilliseconds(), t, 3);
}
function $B(e, t) {
  return eO(e, t) + "000";
}
function zB(e, t) {
  return Oe(e.getMonth() + 1, t, 2);
}
function FB(e, t) {
  return Oe(e.getMinutes(), t, 2);
}
function VB(e, t) {
  return Oe(e.getSeconds(), t, 2);
}
function BB(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function UB(e, t) {
  return Oe(qf.count(Tr(e) - 1, e), t, 2);
}
function tO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? oa(e) : oa.ceil(e);
}
function WB(e, t) {
  return ((e = tO(e)), Oe(oa.count(Tr(e), e) + (Tr(e).getDay() === 4), t, 2));
}
function KB(e) {
  return e.getDay();
}
function HB(e, t) {
  return Oe(Xc.count(Tr(e) - 1, e), t, 2);
}
function qB(e, t) {
  return Oe(e.getFullYear() % 100, t, 2);
}
function YB(e, t) {
  return ((e = tO(e)), Oe(e.getFullYear() % 100, t, 2));
}
function GB(e, t) {
  return Oe(e.getFullYear() % 1e4, t, 4);
}
function XB(e, t) {
  var n = e.getDay();
  return ((e = n >= 4 || n === 0 ? oa(e) : oa.ceil(e)), Oe(e.getFullYear() % 1e4, t, 4));
}
function ZB(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : ((t *= -1), "+")) + Oe((t / 60) | 0, "0", 2) + Oe(t % 60, "0", 2);
}
function RP(e, t) {
  return Oe(e.getUTCDate(), t, 2);
}
function QB(e, t) {
  return Oe(e.getUTCHours(), t, 2);
}
function JB(e, t) {
  return Oe(e.getUTCHours() % 12 || 12, t, 2);
}
function e8(e, t) {
  return Oe(1 + Hf.count(kr(e), e), t, 3);
}
function nO(e, t) {
  return Oe(e.getUTCMilliseconds(), t, 3);
}
function t8(e, t) {
  return nO(e, t) + "000";
}
function n8(e, t) {
  return Oe(e.getUTCMonth() + 1, t, 2);
}
function r8(e, t) {
  return Oe(e.getUTCMinutes(), t, 2);
}
function i8(e, t) {
  return Oe(e.getUTCSeconds(), t, 2);
}
function o8(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function a8(e, t) {
  return Oe(Yf.count(kr(e) - 1, e), t, 2);
}
function rO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? aa(e) : aa.ceil(e);
}
function s8(e, t) {
  return ((e = rO(e)), Oe(aa.count(kr(e), e) + (kr(e).getUTCDay() === 4), t, 2));
}
function l8(e) {
  return e.getUTCDay();
}
function u8(e, t) {
  return Oe(Zc.count(kr(e) - 1, e), t, 2);
}
function c8(e, t) {
  return Oe(e.getUTCFullYear() % 100, t, 2);
}
function f8(e, t) {
  return ((e = rO(e)), Oe(e.getUTCFullYear() % 100, t, 2));
}
function d8(e, t) {
  return Oe(e.getUTCFullYear() % 1e4, t, 4);
}
function h8(e, t) {
  var n = e.getUTCDay();
  return ((e = n >= 4 || n === 0 ? aa(e) : aa.ceil(e)), Oe(e.getUTCFullYear() % 1e4, t, 4));
}
function p8() {
  return "+0000";
}
function LP() {
  return "%";
}
function $P(e) {
  return +e;
}
function zP(e) {
  return Math.floor(+e / 1e3);
}
var $o, iO, oO;
m8({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});
function m8(e) {
  return (($o = mB(e)), (iO = $o.format), $o.parse, (oO = $o.utcFormat), $o.utcParse, $o);
}
function v8(e) {
  return new Date(e);
}
function g8(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function iy(e, t, n, r, o, s, l, c, f, d) {
  var p = Wg(),
    m = p.invert,
    g = p.domain,
    x = d(".%L"),
    b = d(":%S"),
    w = d("%I:%M"),
    S = d("%I %p"),
    C = d("%a %d"),
    A = d("%b %d"),
    k = d("%B"),
    O = d("%Y");
  function _(I) {
    return (
      f(I) < I
        ? x
        : c(I) < I
          ? b
          : l(I) < I
            ? w
            : s(I) < I
              ? S
              : r(I) < I
                ? o(I) < I
                  ? C
                  : A
                : n(I) < I
                  ? k
                  : O
    )(I);
  }
  return (
    (p.invert = function (I) {
      return new Date(m(I));
    }),
    (p.domain = function (I) {
      return arguments.length ? g(Array.from(I, g8)) : g().map(v8);
    }),
    (p.ticks = function (I) {
      var R = g();
      return e(R[0], R[R.length - 1], I ?? 10);
    }),
    (p.tickFormat = function (I, R) {
      return R == null ? _ : d(R);
    }),
    (p.nice = function (I) {
      var R = g();
      return (
        (!I || typeof I.range != "function") && (I = t(R[0], R[R.length - 1], I ?? 10)),
        I ? g(Kk(R, I)) : p
      );
    }),
    (p.copy = function () {
      return al(p, iy(e, t, n, r, o, s, l, c, f, d));
    }),
    p
  );
}
function y8() {
  return Cn.apply(
    iy(hB, pB, Tr, ny, qf, sl, ey, Qg, Hi, iO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
function x8() {
  return Cn.apply(
    iy(fB, dB, kr, ry, Yf, Hf, ty, Jg, Hi, oO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
function Gf() {
  var e = 0,
    t = 1,
    n,
    r,
    o,
    s,
    l = Vt,
    c = !1,
    f;
  function d(m) {
    return m == null || isNaN((m = +m))
      ? f
      : l(o === 0 ? 0.5 : ((m = (s(m) - n) * o), c ? Math.max(0, Math.min(1, m)) : m));
  }
  ((d.domain = function (m) {
    return arguments.length
      ? (([e, t] = m), (n = s((e = +e))), (r = s((t = +t))), (o = n === r ? 0 : 1 / (r - n)), d)
      : [e, t];
  }),
    (d.clamp = function (m) {
      return arguments.length ? ((c = !!m), d) : c;
    }),
    (d.interpolator = function (m) {
      return arguments.length ? ((l = m), d) : l;
    }));
  function p(m) {
    return function (g) {
      var x, b;
      return arguments.length ? (([x, b] = g), (l = m(x, b)), d) : [l(0), l(1)];
    };
  }
  return (
    (d.range = p(wa)),
    (d.rangeRound = p(Ug)),
    (d.unknown = function (m) {
      return arguments.length ? ((f = m), d) : f;
    }),
    function (m) {
      return ((s = m), (n = m(e)), (r = m(t)), (o = n === r ? 0 : 1 / (r - n)), d);
    }
  );
}
function yi(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function aO() {
  var e = gi(Gf()(Vt));
  return (
    (e.copy = function () {
      return yi(e, aO());
    }),
    Mr.apply(e, arguments)
  );
}
function sO() {
  var e = qg(Gf()).domain([1, 10]);
  return (
    (e.copy = function () {
      return yi(e, sO()).base(e.base());
    }),
    Mr.apply(e, arguments)
  );
}
function lO() {
  var e = Yg(Gf());
  return (
    (e.copy = function () {
      return yi(e, lO()).constant(e.constant());
    }),
    Mr.apply(e, arguments)
  );
}
function oy() {
  var e = Gg(Gf());
  return (
    (e.copy = function () {
      return yi(e, oy()).exponent(e.exponent());
    }),
    Mr.apply(e, arguments)
  );
}
function w8() {
  return oy.apply(null, arguments).exponent(0.5);
}
function uO() {
  var e = [],
    t = Vt;
  function n(r) {
    if (r != null && !isNaN((r = +r))) return t((il(e, r, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (r) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let o of r) o != null && !isNaN((o = +o)) && e.push(o);
      return (e.sort(ai), n);
    }),
    (n.interpolator = function (r) {
      return arguments.length ? ((t = r), n) : t;
    }),
    (n.range = function () {
      return e.map((r, o) => t(o / (e.length - 1)));
    }),
    (n.quantiles = function (r) {
      return Array.from({ length: r + 1 }, (o, s) => oV(e, s / r));
    }),
    (n.copy = function () {
      return uO(t).domain(e);
    }),
    Mr.apply(n, arguments)
  );
}
function Xf() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    o,
    s,
    l,
    c,
    f,
    d = Vt,
    p,
    m = !1,
    g;
  function x(w) {
    return isNaN((w = +w))
      ? g
      : ((w = 0.5 + ((w = +p(w)) - s) * (r * w < r * s ? c : f)),
        d(m ? Math.max(0, Math.min(1, w)) : w));
  }
  ((x.domain = function (w) {
    return arguments.length
      ? (([e, t, n] = w),
        (o = p((e = +e))),
        (s = p((t = +t))),
        (l = p((n = +n))),
        (c = o === s ? 0 : 0.5 / (s - o)),
        (f = s === l ? 0 : 0.5 / (l - s)),
        (r = s < o ? -1 : 1),
        x)
      : [e, t, n];
  }),
    (x.clamp = function (w) {
      return arguments.length ? ((m = !!w), x) : m;
    }),
    (x.interpolator = function (w) {
      return arguments.length ? ((d = w), x) : d;
    }));
  function b(w) {
    return function (S) {
      var C, A, k;
      return arguments.length ? (([C, A, k] = S), (d = IV(w, [C, A, k])), x) : [d(0), d(0.5), d(1)];
    };
  }
  return (
    (x.range = b(wa)),
    (x.rangeRound = b(Ug)),
    (x.unknown = function (w) {
      return arguments.length ? ((g = w), x) : g;
    }),
    function (w) {
      return (
        (p = w),
        (o = w(e)),
        (s = w(t)),
        (l = w(n)),
        (c = o === s ? 0 : 0.5 / (s - o)),
        (f = s === l ? 0 : 0.5 / (l - s)),
        (r = s < o ? -1 : 1),
        x
      );
    }
  );
}
function cO() {
  var e = gi(Xf()(Vt));
  return (
    (e.copy = function () {
      return yi(e, cO());
    }),
    Mr.apply(e, arguments)
  );
}
function fO() {
  var e = qg(Xf()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return yi(e, fO()).base(e.base());
    }),
    Mr.apply(e, arguments)
  );
}
function dO() {
  var e = Yg(Xf());
  return (
    (e.copy = function () {
      return yi(e, dO()).constant(e.constant());
    }),
    Mr.apply(e, arguments)
  );
}
function ay() {
  var e = Gg(Xf());
  return (
    (e.copy = function () {
      return yi(e, ay()).exponent(e.exponent());
    }),
    Mr.apply(e, arguments)
  );
}
function b8() {
  return ay.apply(null, arguments).exponent(0.5);
}
const hO = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Fg,
      scaleDiverging: cO,
      scaleDivergingLog: fO,
      scaleDivergingPow: ay,
      scaleDivergingSqrt: b8,
      scaleDivergingSymlog: dO,
      scaleIdentity: Wk,
      scaleImplicit: Ev,
      scaleLinear: Uk,
      scaleLog: Hk,
      scaleOrdinal: zg,
      scalePoint: lV,
      scalePow: Xg,
      scaleQuantile: Gk,
      scaleQuantize: Xk,
      scaleRadial: Yk,
      scaleSequential: aO,
      scaleSequentialLog: sO,
      scaleSequentialPow: oy,
      scaleSequentialQuantile: uO,
      scaleSequentialSqrt: w8,
      scaleSequentialSymlog: lO,
      scaleSqrt: tB,
      scaleSymlog: qk,
      scaleThreshold: Zk,
      scaleTime: y8,
      scaleUtc: x8,
      tickFormat: Bk,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function S8(e) {
  var t = hO;
  if (e in t && typeof t[e] == "function") return t[e]();
  var n = "scale".concat(Zs(e));
  if (n in t && typeof t[n] == "function") return t[n]();
}
function FP(e, t, n) {
  if (typeof e == "function") return e.copy().domain(t).range(n);
  if (e != null) {
    var r = S8(e);
    if (r != null) return (r.domain(t).range(n), r);
  }
}
function sy(e, t, n, r) {
  if (!(n == null || r == null))
    return typeof e.scale == "function" ? FP(e.scale, n, r) : FP(t, n, r);
}
function P8(e) {
  return "scale".concat(Zs(e));
}
function E8(e) {
  return P8(e) in hO;
}
var pO = (e, t, n) => {
  if (e != null) {
    var { scale: r, type: o } = e;
    if (r === "auto")
      return o === "category" &&
        n &&
        (n.indexOf("LineChart") >= 0 ||
          n.indexOf("AreaChart") >= 0 ||
          (n.indexOf("ComposedChart") >= 0 && !t))
        ? "point"
        : o === "category"
          ? "band"
          : "linear";
    if (typeof r == "string") return E8(r) ? r : "point";
  }
};
function C8(e, t) {
  for (var n = 0, r = e.length, o = e[0] < e[e.length - 1]; n < r;) {
    var s = Math.floor((n + r) / 2);
    (o ? e[s] < t : e[s] > t) ? (n = s + 1) : (r = s);
  }
  return n;
}
function mO(e, t) {
  if (e) {
    var n = t ?? e.domain(),
      r = n.map((s) => {
        var l;
        return (l = e(s)) !== null && l !== void 0 ? l : 0;
      }),
      o = e.range();
    if (!(n.length === 0 || o.length < 2))
      return (s) => {
        var l,
          c,
          f = C8(r, s);
        if (f <= 0) return n[0];
        if (f >= n.length) return n[n.length - 1];
        var d = (l = r[f - 1]) !== null && l !== void 0 ? l : 0,
          p = (c = r[f]) !== null && c !== void 0 ? c : 0;
        return Math.abs(s - d) <= Math.abs(s - p) ? n[f - 1] : n[f];
      };
  }
}
function A8(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : mO(e, void 0);
}
function VP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? VP(Object(n), !0).forEach(function (r) {
          T8(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : VP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function T8(e, t, n) {
  return (
    (t = k8(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function k8(e) {
  var t = O8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function O8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kv = [0, "auto"],
  vO = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "bottom",
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "category",
    unit: void 0,
    niceTicks: "auto",
  },
  _8 = (e, t) => e.cartesianAxis.xAxis[t],
  Ir = (e, t) => {
    var n = _8(e, t);
    return n ?? vO;
  },
  gO = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: kv,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "left",
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
    niceTicks: "auto",
    width: tl,
  },
  M8 = (e, t) => e.cartesianAxis.yAxis[t],
  Dr = (e, t) => {
    var n = M8(e, t);
    return n ?? gO;
  },
  I8 = {
    domain: [0, "auto"],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: "",
    range: [64, 64],
    scale: "auto",
    type: "number",
    unit: "",
  },
  ly = (e, t) => {
    var n = e.cartesianAxis.zAxis[t];
    return n ?? I8;
  },
  Ut = (e, t, n) => {
    switch (t) {
      case "xAxis":
        return Ir(e, n);
      case "yAxis":
        return Dr(e, n);
      case "zAxis":
        return ly(e, n);
      case "angleAxis":
        return Dg(e, n);
      case "radiusAxis":
        return jg(e, n);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  D8 = (e, t, n) => {
    switch (t) {
      case "xAxis":
        return Ir(e, n);
      case "yAxis":
        return Dr(e, n);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  ll = (e, t, n) => {
    switch (t) {
      case "xAxis":
        return Ir(e, n);
      case "yAxis":
        return Dr(e, n);
      case "angleAxis":
        return Dg(e, n);
      case "radiusAxis":
        return jg(e, n);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  yO = (e) =>
    e.graphicalItems.cartesianItems.some((t) => t.type === "bar") ||
    e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function xO(e, t) {
  return (n) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in n && n.xAxisId === t;
      case "yAxis":
        return "yAxisId" in n && n.yAxisId === t;
      case "zAxis":
        return "zAxisId" in n && n.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in n && n.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in n && n.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var uy = (e) => e.graphicalItems.cartesianItems,
  j8 = z([gt, Vf], xO),
  wO = (e, t, n) =>
    e.filter(n).filter((r) => ((t == null ? void 0 : t.includeHidden) === !0 ? !0 : !r.hide)),
  ba = z([uy, Ut, j8], wO, { memoizeOptions: { resultEqualityCheck: Wf } }),
  bO = z([ba], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Bf)),
  SO = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0),
  N8 = z([ba], SO),
  PO = (e) =>
    e
      .map((t) => t.data)
      .filter(Boolean)
      .flat(1),
  R8 = z([ba], (e) => e.some((t) => !t.data)),
  EO = z([ba], PO, { memoizeOptions: { resultEqualityCheck: Wf } }),
  CO = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: o } = t;
    return e.length > 0 ? e : n.slice(r, o + 1);
  },
  cy = z([EO, Lf], CO),
  L8 = (e, t, n) =>
    (t == null ? void 0 : t.dataKey) != null
      ? e.map((r) => ({ value: pt(r, t.dataKey) }))
      : n.length > 0
        ? n.map((r) => r.dataKey).flatMap((r) => e.map((o) => ({ value: pt(o, r) })))
        : e.map((r) => ({ value: r })),
  AO = (e, t, n, r, o, s) => {
    var { chartData: l = [], dataStartIndex: c, dataEndIndex: f } = r,
      d = L8(e, t, n);
    if (o && (t == null ? void 0 : t.dataKey) != null && s.length > 0) {
      var p = l.slice(c, f + 1),
        m = p.map((g) => ({ value: pt(g, t.dataKey) })).filter((g) => g.value != null);
      return [...m, ...d];
    }
    return d;
  },
  ul = z([cy, Ut, ba, Lf, R8, EO], AO);
function Jo(e) {
  if (Ds(e) || e instanceof Date) {
    var t = Number(e);
    if (_e(t)) return t;
  }
}
function BP(e) {
  if (Array.isArray(e)) {
    var t = [Jo(e[0]), Jo(e[1])];
    return ar(t) ? t : void 0;
  }
  var n = Jo(e);
  if (n != null) return [n, n];
}
function fr(e) {
  return e.map(Jo).filter(nr);
}
function $8(e, t) {
  var n = Jo(e),
    r = Jo(t);
  return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
}
var z8 = z([ul], (e) => (e == null ? void 0 : e.map((t) => t.value).sort($8)));
function TO(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function F8(e, t, n) {
  if (!n) return [];
  if (!n.length) return [];
  var r;
  if (typeof t == "number" && !ur(t)) r = t;
  else if (Array.isArray(t)) {
    var o = fr(t);
    o.length > 0 && (r = Math.max(...o));
  }
  return r == null
    ? []
    : fr(
        n.flatMap((s) => {
          var l = pt(e, s.dataKey),
            c,
            f;
          if ((Array.isArray(l) ? ([c, f] = l) : (c = f = l), !(!_e(c) || !_e(f))))
            return [r - c, r + f];
        }),
      );
}
var wt = (e) => {
    var t = yt(e),
      n = xa(e);
    return ll(e, t, n);
  },
  sa = z([wt], (e) => (e == null ? void 0 : e.dataKey)),
  V8 = z([bO, Lf, wt], Dk),
  kO = (e, t, n, r) => {
    var o = {},
      s = t.reduce((l, c) => {
        if (c.stackId == null) return l;
        var f = l[c.stackId];
        return (f == null && (f = []), f.push(c), (l[c.stackId] = f), l);
      }, o);
    return Object.fromEntries(
      Object.entries(s).map((l) => {
        var [c, f] = l,
          d = r ? [...f].reverse() : f,
          p = d.map(Rg);
        return [c, { stackedData: nz(e, p, n), graphicalItems: d }];
      }),
    );
  },
  Ov = z([V8, bO, $f, Pk], kO),
  OO = (e, t, n, r) => {
    var { dataStartIndex: o, dataEndIndex: s } = t;
    if (r == null && n !== "zAxis") {
      var l = sz(e, o, s);
      if (!(l != null && l[0] === 0 && l[1] === 0)) return l;
    }
  },
  B8 = z([Ut], (e) => e.allowDataOverflow),
  fy = (e) => {
    var t;
    if (e == null || !("domain" in e)) return kv;
    if (e.domain != null) return e.domain;
    if ("ticks" in e && e.ticks != null) {
      if (e.type === "number") {
        var n = fr(e.ticks);
        return [Math.min(...n), Math.max(...n)];
      }
      if (e.type === "category") return e.ticks.map(String);
    }
    return (t = e == null ? void 0 : e.domain) !== null && t !== void 0 ? t : kv;
  },
  _O = z([Ut], fy),
  MO = z([_O, B8], ck),
  U8 = z([Ov, Kn, gt, MO], OO, { memoizeOptions: { resultEqualityCheck: Uf } }),
  dy = (e) => e.errorBars,
  W8 = (e, t, n) =>
    e
      .flatMap((r) => t[r.id])
      .filter(Boolean)
      .filter((r) => TO(n, r)),
  Jc = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    var o = n.filter(Boolean);
    if (o.length !== 0) {
      var s = o.flat(),
        l = Math.min(...s),
        c = Math.max(...s);
      return [l, c];
    }
  },
  IO = function (t, n, r, o, s) {
    var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
      c,
      f;
    if (
      (r.length > 0 &&
        r.forEach((d) => {
          var p,
            m = d.data != null ? [...d.data] : l,
            g = (p = o[d.id]) === null || p === void 0 ? void 0 : p.filter((x) => TO(s, x));
          m.forEach((x) => {
            var b,
              w = pt(x, (b = n.dataKey) !== null && b !== void 0 ? b : d.dataKey),
              S = F8(x, w, g);
            if (S.length >= 2) {
              var C = Math.min(...S),
                A = Math.max(...S);
              ((c == null || C < c) && (c = C), (f == null || A > f) && (f = A));
            }
            var k = BP(w);
            k != null &&
              ((c = c == null ? k[0] : Math.min(c, k[0])),
              (f = f == null ? k[1] : Math.max(f, k[1])));
          });
        }),
      (n == null ? void 0 : n.dataKey) != null &&
        r.length === 0 &&
        t.forEach((d) => {
          var p = BP(pt(d, n.dataKey));
          p != null &&
            ((c = c == null ? p[0] : Math.min(c, p[0])),
            (f = f == null ? p[1] : Math.max(f, p[1])));
        }),
      _e(c) && _e(f))
    )
      return [c, f];
  },
  K8 = z([cy, Ut, N8, dy, gt, _5], IO, { memoizeOptions: { resultEqualityCheck: Uf } });
function H8(e) {
  var { value: t } = e;
  if (Ds(t) || t instanceof Date) return t;
}
var q8 = (e, t, n) => {
    var r = e.map(H8).filter((o) => o != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && oT(r)))
      ? uk(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  DO = (e) => e.referenceElements.dots,
  Sa = (e, t, n) =>
    e
      .filter((r) => r.ifOverflow === "extendDomain")
      .filter((r) => (t === "xAxis" ? r.xAxisId === n : r.yAxisId === n)),
  Y8 = z([DO, gt, Vf], Sa),
  jO = (e) => e.referenceElements.areas,
  G8 = z([jO, gt, Vf], Sa),
  NO = (e) => e.referenceElements.lines,
  X8 = z([NO, gt, Vf], Sa),
  RO = (e, t) => {
    if (e != null) {
      var n = fr(e.map((r) => (t === "xAxis" ? r.x : r.y)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Z8 = z(Y8, gt, RO),
  LO = (e, t) => {
    if (e != null) {
      var n = fr(e.flatMap((r) => [t === "xAxis" ? r.x1 : r.y1, t === "xAxis" ? r.x2 : r.y2]));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  Q8 = z([G8, gt], LO);
function J8(e) {
  var t;
  if (e.x != null) return fr([e.x]);
  var n = (t = e.segment) === null || t === void 0 ? void 0 : t.map((r) => r.x);
  return n == null || n.length === 0 ? [] : fr(n);
}
function eU(e) {
  var t;
  if (e.y != null) return fr([e.y]);
  var n = (t = e.segment) === null || t === void 0 ? void 0 : t.map((r) => r.y);
  return n == null || n.length === 0 ? [] : fr(n);
}
var $O = (e, t) => {
    if (e != null) {
      var n = e.flatMap((r) => (t === "xAxis" ? J8(r) : eU(r)));
      if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
    }
  },
  tU = z([X8, gt], $O),
  nU = z(Z8, tU, Q8, (e, t, n) => Jc(e, n, t)),
  zO = (e, t, n, r, o, s, l, c) => {
    if (n != null) return n;
    var f = (l === "vertical" && c === "xAxis") || (l === "horizontal" && c === "yAxis"),
      d = f ? Jc(r, s, o) : Jc(s, o);
    return I5(t, d, e.allowDataOverflow);
  },
  rU = z([Ut, _O, MO, U8, K8, nU, $e, gt], zO, { memoizeOptions: { resultEqualityCheck: Uf } }),
  iU = [0, 1],
  FO = (e, t, n, r, o, s, l) => {
    if (!((e == null || n == null || n.length === 0) && l === void 0)) {
      var { dataKey: c, type: f } = e,
        d = mi(t, s);
      if (d && c == null) {
        var p;
        return uk(0, (p = n == null ? void 0 : n.length) !== null && p !== void 0 ? p : 0);
      }
      return f === "category" ? q8(r, e, d) : o === "expand" && !d ? iU : l;
    }
  },
  hy = z([Ut, $e, cy, ul, $f, gt, rU], FO),
  Pa = z([Ut, yO, Ek], pO),
  VO = (e, t, n) => {
    var { niceTicks: r } = t;
    if (r !== "none") {
      var o = fy(t),
        s = Array.isArray(o) && (o[0] === "auto" || o[1] === "auto");
      if ((r === "snap125" || r === "adaptive") && t != null && t.tickCount && ar(e)) {
        if (s) return QS(e, t.tickCount, t.allowDecimals, r);
        if (t.type === "number") return JS(e, t.tickCount, t.allowDecimals, r);
      }
      if (r === "auto" && n === "linear" && t != null && t.tickCount) {
        if (s && ar(e)) return QS(e, t.tickCount, t.allowDecimals, "adaptive");
        if (t.type === "number" && ar(e)) return JS(e, t.tickCount, t.allowDecimals, "adaptive");
      }
    }
  },
  py = z([hy, ll, Pa], VO),
  BO = (e, t, n, r) => {
    if (
      r !== "angleAxis" &&
      (e == null ? void 0 : e.type) === "number" &&
      ar(t) &&
      Array.isArray(n) &&
      n.length > 0
    ) {
      var o,
        s,
        l = t[0],
        c = (o = n[0]) !== null && o !== void 0 ? o : 0,
        f = t[1],
        d = (s = n[n.length - 1]) !== null && s !== void 0 ? s : 0;
      return [Math.min(l, c), Math.max(f, d)];
    }
    return t;
  },
  oU = z([Ut, hy, py, gt], BO),
  aU = z(ul, Ut, (e, t) => {
    if (!(!t || t.type !== "number")) {
      var n = 1 / 0,
        r = Array.from(fr(e.map((m) => m.value))).sort((m, g) => m - g),
        o = r[0],
        s = r[r.length - 1];
      if (o == null || s == null) return 1 / 0;
      var l = s - o;
      if (l === 0) return 1 / 0;
      for (var c = 0; c < r.length - 1; c++) {
        var f = r[c],
          d = r[c + 1];
        if (!(f == null || d == null)) {
          var p = d - f;
          n = Math.min(n, p);
        }
      }
      return n / l;
    }
  }),
  UO = z(
    aU,
    $e,
    Sk,
    kt,
    (e, t, n, r, o) => o,
    (e, t, n, r, o) => {
      if (!_e(e)) return 0;
      var s = t === "vertical" ? r.height : r.width;
      if (o === "gap") return (e * s) / 2;
      if (o === "no-gap") {
        var l = Vn(n, e * s),
          c = (e * s) / 2;
        return c - l - ((c - l) / s) * l;
      }
      return 0;
    },
  ),
  sU = (e, t, n) => {
    var r = Ir(e, t);
    return r == null || typeof r.padding != "string" ? 0 : UO(e, "xAxis", t, n, r.padding);
  },
  lU = (e, t, n) => {
    var r = Dr(e, t);
    return r == null || typeof r.padding != "string" ? 0 : UO(e, "yAxis", t, n, r.padding);
  },
  uU = z(Ir, sU, (e, t) => {
    var n, r;
    if (e == null) return { left: 0, right: 0 };
    var { padding: o } = e;
    return typeof o == "string"
      ? { left: t, right: t }
      : {
          left: ((n = o.left) !== null && n !== void 0 ? n : 0) + t,
          right: ((r = o.right) !== null && r !== void 0 ? r : 0) + t,
        };
  }),
  cU = z(Dr, lU, (e, t) => {
    var n, r;
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: o } = e;
    return typeof o == "string"
      ? { top: t, bottom: t }
      : {
          top: ((n = o.top) !== null && n !== void 0 ? n : 0) + t,
          bottom: ((r = o.bottom) !== null && r !== void 0 ? r : 0) + t,
        };
  }),
  fU = z([kt, uU, Mf, _f, (e, t, n) => n], (e, t, n, r, o) => {
    var { padding: s } = r;
    return o ? [s.left, n.width - s.right] : [e.left + t.left, e.left + e.width - t.right];
  }),
  dU = z([kt, $e, cU, Mf, _f, (e, t, n) => n], (e, t, n, r, o, s) => {
    var { padding: l } = o;
    return s
      ? [r.height - l.bottom, l.top]
      : t === "horizontal"
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  cl = (e, t, n, r) => {
    var o;
    switch (t) {
      case "xAxis":
        return fU(e, n, r);
      case "yAxis":
        return dU(e, n, r);
      case "zAxis":
        return (o = ly(e, n)) === null || o === void 0 ? void 0 : o.range;
      case "angleAxis":
        return _k(e);
      case "radiusAxis":
        return Mk(e, n);
      default:
        return;
    }
  },
  WO = z([Ut, cl], zf),
  hU = z([Pa, oU], q5),
  my = z([Ut, Pa, hU, WO], sy),
  KO = (e, t, n, r) => {
    if (!(n == null || n.dataKey == null)) {
      var { type: o, scale: s } = n,
        l = mi(e, r);
      if (l && (o === "number" || s !== "auto")) return t.map((c) => c.value);
    }
  },
  vy = z([$e, ul, ll, gt], KO),
  Zf = z([my], Lg);
z([my], A8);
z([my, z8], mO);
z([ba, dy, gt], W8);
function HO(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Qf = (e, t) => t,
  Jf = (e, t, n) => n,
  pU = z(kf, Qf, Jf, (e, t, n) =>
    e
      .filter((r) => r.orientation === t)
      .filter((r) => r.mirror === n)
      .sort(HO),
  ),
  mU = z(Of, Qf, Jf, (e, t, n) =>
    e
      .filter((r) => r.orientation === t)
      .filter((r) => r.mirror === n)
      .sort(HO),
  ),
  qO = (e, t) => ({ width: e.width, height: t.height }),
  vU = (e, t) => {
    var n = typeof t.width == "number" ? t.width : tl;
    return { width: n, height: e.height };
  },
  gU = z(kt, Ir, qO),
  yU = (e, t, n) => {
    switch (t) {
      case "top":
        return e.top;
      case "bottom":
        return n - e.bottom;
      default:
        return 0;
    }
  },
  xU = (e, t, n) => {
    switch (t) {
      case "left":
        return e.left;
      case "right":
        return n - e.right;
      default:
        return 0;
    }
  },
  wU = z(_r, kt, pU, Qf, Jf, (e, t, n, r, o) => {
    var s = {},
      l;
    return (
      n.forEach((c) => {
        var f = qO(t, c);
        l == null && (l = yU(t, r, e));
        var d = (r === "top" && !o) || (r === "bottom" && o);
        ((s[c.id] = l - Number(d) * f.height), (l += (d ? -1 : 1) * f.height));
      }),
      s
    );
  }),
  bU = z(Or, kt, mU, Qf, Jf, (e, t, n, r, o) => {
    var s = {},
      l;
    return (
      n.forEach((c) => {
        var f = vU(t, c);
        l == null && (l = xU(t, r, e));
        var d = (r === "left" && !o) || (r === "right" && o);
        ((s[c.id] = l - Number(d) * f.width), (l += (d ? -1 : 1) * f.width));
      }),
      s
    );
  }),
  SU = (e, t) => {
    var n = Ir(e, t);
    if (n != null) return wU(e, n.orientation, n.mirror);
  };
z([kt, Ir, SU, (e, t) => t], (e, t, n, r) => {
  if (t != null) {
    var o = n == null ? void 0 : n[r];
    return o == null ? { x: e.left, y: 0 } : { x: e.left, y: o };
  }
});
var PU = (e, t) => {
  var n = Dr(e, t);
  if (n != null) return bU(e, n.orientation, n.mirror);
};
z([kt, Dr, PU, (e, t) => t], (e, t, n, r) => {
  if (t != null) {
    var o = n == null ? void 0 : n[r];
    return o == null ? { x: 0, y: e.top } : { x: o, y: e.top };
  }
});
var EU = z(kt, Dr, (e, t) => {
    var n = typeof t.width == "number" ? t.width : tl;
    return { width: n, height: e.height };
  }),
  UP = (e, t, n) => {
    switch (t) {
      case "xAxis":
        return gU(e, n).width;
      case "yAxis":
        return EU(e, n).height;
      default:
        return;
    }
  },
  YO = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: o, type: s, dataKey: l } = n,
        c = mi(e, r),
        f = t.map((p) => p.value),
        d = f.filter((p) => p != null);
      if (l && c && s === "category" && o && oT(d)) return f;
    }
  },
  gy = z([$e, ul, Ut, gt], YO);
z([$e, D8, Pa, Zf, gy, vy, cl, py, gt], (e, t, n, r, o, s, l, c, f) => {
  if (t != null) {
    var d = mi(e, f);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: f,
      categoricalDomain: s,
      duplicateDomain: o,
      isCategorical: d,
      niceTicks: c,
      range: l,
      realScaleType: n,
      scale: r,
    };
  }
});
var CU = (e, t, n, r, o, s, l, c, f) => {
  if (!(t == null || r == null)) {
    var d = mi(e, f),
      { type: p, ticks: m, tickCount: g } = t,
      x = n === "scaleBand" && typeof r.bandwidth == "function" ? r.bandwidth() / 2 : 2,
      b = p === "category" && r.bandwidth ? r.bandwidth() / x : 0;
    b = f === "angleAxis" && s != null && s.length >= 2 ? wn(s[0] - s[1]) * 2 * b : b;
    var w = m || o;
    return w
      ? w
          .map((S, C) => {
            var A = l ? l.indexOf(S) : S,
              k = r.map(A);
            return _e(k) ? { index: C, coordinate: k + b, value: S, offset: b } : null;
          })
          .filter(nr)
      : d && c
        ? c
            .map((S, C) => {
              var A = r.map(S);
              return _e(A) ? { coordinate: A + b, value: S, index: C, offset: b } : null;
            })
            .filter(nr)
        : r.ticks
          ? r
              .ticks(g)
              .map((S, C) => {
                var A = r.map(S);
                return _e(A) ? { coordinate: A + b, value: S, index: C, offset: b } : null;
              })
              .filter(nr)
          : r
              .domain()
              .map((S, C) => {
                var A = r.map(S);
                return _e(A)
                  ? { coordinate: A + b, value: l ? l[S] : S, index: C, offset: b }
                  : null;
              })
              .filter(nr);
  }
};
z([$e, ll, Pa, Zf, py, cl, gy, vy, gt], CU);
var AU = (e, t, n, r, o, s, l) => {
    if (!(t == null || n == null || r == null || r[0] === r[1])) {
      var c = mi(e, l),
        { tickCount: f } = t,
        d = 0;
      return (
        (d =
          l === "angleAxis" && (r == null ? void 0 : r.length) >= 2 ? wn(r[0] - r[1]) * 2 * d : d),
        c && s
          ? s
              .map((p, m) => {
                var g = n.map(p);
                return _e(g) ? { coordinate: g + d, value: p, index: m, offset: d } : null;
              })
              .filter(nr)
          : n.ticks
            ? n
                .ticks(f)
                .map((p, m) => {
                  var g = n.map(p);
                  return _e(g) ? { coordinate: g + d, value: p, index: m, offset: d } : null;
                })
                .filter(nr)
            : n
                .domain()
                .map((p, m) => {
                  var g = n.map(p);
                  return _e(g)
                    ? { coordinate: g + d, value: o ? o[p] : p, index: m, offset: d }
                    : null;
                })
                .filter(nr)
      );
    }
  },
  la = z([$e, ll, Zf, cl, gy, vy, gt], AU),
  ua = z(Ut, Zf, (e, t) => {
    if (!(e == null || t == null)) return Qc(Qc({}, e), {}, { scale: t });
  }),
  TU = z([Ut, Pa, hy, WO], sy),
  kU = z([TU], Lg);
z(
  (e, t, n) => ly(e, n),
  kU,
  (e, t) => {
    if (!(e == null || t == null)) return Qc(Qc({}, e), {}, { scale: t });
  },
);
var OU = z([$e, kf, Of], (e, t, n) => {
    switch (e) {
      case "horizontal":
        return t.some((r) => r.reversed) ? "right-to-left" : "left-to-right";
      case "vertical":
        return n.some((r) => r.reversed) ? "bottom-to-top" : "top-to-bottom";
      case "centric":
      case "radial":
        return "left-to-right";
      default:
        return;
    }
  }),
  _U = (e, t, n) => {
    var r;
    return (r = e.renderedTicks[t]) === null || r === void 0 ? void 0 : r[n];
  };
z([_U], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var n,
        r = 1 / 0,
        o = e[0];
      for (var s of e) {
        var l = Math.abs(s.coordinate - t);
        l < r && ((r = l), (o = s));
      }
      return (n = o) === null || n === void 0 ? void 0 : n.value;
    };
});
var GO = (e) => e.options.defaultTooltipEventType,
  XO = (e) => e.options.validateTooltipEventTypes;
function ZO(e, t, n) {
  if (e == null) return t;
  var r = e ? "axis" : "item";
  return n == null ? t : n.includes(r) ? r : t;
}
function ed(e, t) {
  var n = GO(e),
    r = XO(e);
  return ZO(t, n, r);
}
var QO = (e, t) => {
    var n,
      r = Number(t);
    if (!(ur(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) === null || n === void 0
          ? void 0
          : n.value
        : void 0;
  },
  MU = (e) => e.tooltip.settings,
  ni = { active: !1, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 },
  IU = {
    itemInteraction: { click: ni, hover: ni },
    axisInteraction: { click: ni, hover: ni },
    keyboardInteraction: ni,
    syncInteraction: {
      active: !1,
      index: null,
      dataKey: void 0,
      label: void 0,
      coordinate: void 0,
      sourceViewBox: void 0,
      graphicalItemId: void 0,
    },
    tooltipItemPayloads: [],
    settings: { shared: void 0, trigger: "hover", axisId: 0, active: !1, defaultIndex: void 0 },
  },
  JO = Nt({
    name: "tooltip",
    initialState: IU,
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(t.payload);
        },
        prepare: We(),
      },
      replaceTooltipEntrySettings: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            o = bn(e).tooltipItemPayloads.indexOf(n);
          o > -1 && (e.tooltipItemPayloads[o] = r);
        },
        prepare: We(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = bn(e).tooltipItemPayloads.indexOf(t.payload);
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: We(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1), (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.syncInteraction.sourceViewBox = void 0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
      },
    },
  }),
  {
    addTooltipEntrySettings: DU,
    replaceTooltipEntrySettings: jU,
    removeTooltipEntrySettings: NU,
    setTooltipSettingsState: Z7,
    setActiveMouseOverItemIndex: e_,
    mouseLeaveItem: RU,
    mouseLeaveChart: t_,
    setActiveClickItemIndex: LU,
    setMouseOverAxisIndex: n_,
    setMouseClickAxisIndex: $U,
    setSyncInteraction: Vu,
    setKeyboardInteraction: ef,
  } = JO.actions,
  zU = JO.reducer;
function WP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Bu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? WP(Object(n), !0).forEach(function (r) {
          FU(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : WP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function FU(e, t, n) {
  return (
    (t = VU(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function VU(e) {
  var t = BU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BU(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UU(e, t, n) {
  return t === "axis"
    ? n === "click"
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === "click"
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function WU(e) {
  return e.index != null;
}
var r_ = (e, t, n, r) => {
  if (t == null) return ni;
  var o = UU(e, t, n);
  if (o == null) return ni;
  if (o.active) return o;
  if (e.keyboardInteraction.active) return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null) return e.syncInteraction;
  var s = e.settings.active === !0;
  if (WU(o)) {
    if (s) return Bu(Bu({}, o), {}, { active: !0 });
  } else if (r != null)
    return { active: !0, coordinate: void 0, dataKey: void 0, index: r, graphicalItemId: void 0 };
  return Bu(Bu({}, ni), {}, { coordinate: o.coordinate });
};
function KU(e) {
  if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var n = Number(e);
  return Number.isFinite(n) ? n : void 0;
}
function HU(e, t) {
  var n = KU(e),
    r = t[0],
    o = t[1];
  if (n === void 0) return !1;
  var s = Math.min(r, o),
    l = Math.max(r, o);
  return n >= s && n <= l;
}
function qU(e, t, n) {
  if (n == null || t == null) return !0;
  var r = pt(e, t);
  return r == null || !ar(n) ? !0 : HU(r, n);
}
var Ts = (e, t, n, r) => {
    var o = e == null ? void 0 : e.index;
    if (o == null) return null;
    var s = Number(o);
    if (!_e(s)) return o;
    var l = 0,
      c = 1 / 0;
    t.length > 0 && (c = t.length - 1);
    var f = Math.max(l, Math.min(s, c)),
      d = t[f];
    return d == null || qU(d, n, r) ? String(f) : null;
  },
  i_ = (e, t, n, r, o, s, l) => {
    if (s != null) {
      var c = l[0],
        f = c == null ? void 0 : c.getPosition(s);
      if (f != null) return f;
      var d = o == null ? void 0 : o[Number(s)];
      if (d)
        switch (n) {
          case "horizontal":
            return { x: d.coordinate, y: (r.top + t) / 2 };
          default:
            return { x: (r.left + e) / 2, y: d.coordinate };
        }
    }
  },
  o_ = (e, t, n, r) => {
    if (t === "axis") return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var o;
    if (
      (n === "hover"
        ? (o = e.itemInteraction.hover.graphicalItemId)
        : (o = e.itemInteraction.click.graphicalItemId),
      e.syncInteraction.active && o == null)
    )
      return e.tooltipItemPayloads;
    if (o == null && (r != null || e.keyboardInteraction.active)) {
      var s = e.tooltipItemPayloads[0];
      return s != null ? [s] : [];
    }
    return e.tooltipItemPayloads.filter((l) => {
      var c;
      return ((c = l.settings) === null || c === void 0 ? void 0 : c.graphicalItemId) === o;
    });
  },
  a_ = (e) => e.options.tooltipPayloadSearcher,
  fl = (e) => e.tooltip;
function KP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function HP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? KP(Object(n), !0).forEach(function (r) {
          YU(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function YU(e, t, n) {
  return (
    (t = GU(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function GU(e) {
  var t = XU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XU(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZU(e) {
  if (typeof e == "string" || typeof e == "number") return e;
}
function QU(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
}
function JU(e) {
  if (typeof e == "string" || typeof e == "number") return e;
  if (typeof e == "function") return (t) => e(t);
}
function qP(e) {
  if (typeof e == "string") return e;
}
function e6(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? ZU(e.name) : void 0,
      n = "unit" in e ? QU(e.unit) : void 0,
      r = "dataKey" in e ? JU(e.dataKey) : void 0,
      o = "payload" in e ? e.payload : void 0,
      s = "color" in e ? qP(e.color) : void 0,
      l = "fill" in e ? qP(e.fill) : void 0;
    return { name: t, unit: n, dataKey: r, payload: o, color: s, fill: l };
  }
}
function t6(e, t) {
  return e ?? t;
}
var s_ = (e, t, n, r, o, s, l) => {
    if (!(t == null || s == null)) {
      var { chartData: c, computedData: f, dataStartIndex: d, dataEndIndex: p } = n,
        m = [];
      return e.reduce((g, x) => {
        var b,
          { dataDefinedOnItem: w, settings: S } = x,
          C = t6(w, c),
          A = Array.isArray(C) ? BT(C, d, p) : C,
          k = (b = S == null ? void 0 : S.dataKey) !== null && b !== void 0 ? b : r,
          O = S == null ? void 0 : S.nameKey,
          _;
        if (
          (r && Array.isArray(A) && !Array.isArray(A[0]) && l === "axis"
            ? (_ = Q$(A, r, o))
            : (_ = s(A, t, f, O)),
          Array.isArray(_))
        )
          _.forEach((R) => {
            var F,
              W,
              B = e6(R),
              q = B == null ? void 0 : B.name,
              U = B == null ? void 0 : B.dataKey,
              fe = B == null ? void 0 : B.payload,
              ie = HP(
                HP({}, S),
                {},
                {
                  name: q,
                  unit: B == null ? void 0 : B.unit,
                  color:
                    (F = B == null ? void 0 : B.color) !== null && F !== void 0
                      ? F
                      : S == null
                        ? void 0
                        : S.color,
                  fill:
                    (W = B == null ? void 0 : B.fill) !== null && W !== void 0
                      ? W
                      : S == null
                        ? void 0
                        : S.fill,
                },
              );
            g.push(
              Kb({
                tooltipEntrySettings: ie,
                dataKey: U,
                payload: fe,
                value: pt(fe, U),
                name: q == null ? void 0 : String(q),
              }),
            );
          });
        else {
          var I;
          g.push(
            Kb({
              tooltipEntrySettings: S,
              dataKey: k,
              payload: _,
              value: pt(_, k),
              name: (I = pt(_, O)) !== null && I !== void 0 ? I : S == null ? void 0 : S.name,
            }),
          );
        }
        return g;
      }, m);
    }
  },
  yy = z([wt, yO, Ek], pO),
  n6 = z([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [
    ...e,
    ...t,
  ]),
  r6 = z([yt, xa], xO),
  uo = z([n6, wt, r6], wO, { memoizeOptions: { resultEqualityCheck: Wf } }),
  i6 = z([uo], (e) => e.filter(Bf)),
  l_ = z([uo], PO, { memoizeOptions: { resultEqualityCheck: Wf } }),
  o6 = z([uo], (e) => e.some((t) => !t.data)),
  oo = z([l_, Kn], CO),
  a6 = z([i6, Kn, wt], Dk),
  xy = z([oo, wt, uo, Kn, o6, l_], AO),
  u_ = z([wt], fy),
  s6 = z([wt], (e) => e.allowDataOverflow),
  c_ = z([u_, s6], ck),
  l6 = z([uo], (e) => e.filter(Bf)),
  u6 = z([a6, l6, $f, Pk], kO),
  c6 = z([u6, Kn, yt, c_], OO),
  f6 = z([uo], SO),
  d6 = z([oo, wt, f6, dy, yt, M5], IO, { memoizeOptions: { resultEqualityCheck: Uf } }),
  h6 = z([DO, yt, xa], Sa),
  p6 = z([h6, yt], RO),
  m6 = z([jO, yt, xa], Sa),
  v6 = z([m6, yt], LO),
  g6 = z([NO, yt, xa], Sa),
  y6 = z([g6, yt], $O),
  x6 = z([p6, y6, v6], Jc),
  w6 = z([wt, u_, c_, c6, d6, x6, $e, yt], zO),
  ca = z([wt, $e, oo, xy, $f, yt, w6], FO),
  b6 = z([ca, wt, yy], VO),
  S6 = z([wt, ca, b6, yt], BO),
  f_ = (e) => {
    var t = yt(e),
      n = xa(e),
      r = !1;
    return cl(e, t, n, r);
  },
  d_ = z([wt, f_], zf),
  P6 = z([wt, yy, S6, d_], sy),
  E6 = z([P6], Lg),
  C6 = z([$e, xy, wt, yt], YO),
  A6 = z([$e, xy, wt, yt], KO),
  T6 = (e, t, n, r, o, s, l, c) => {
    if (t) {
      var { type: f } = t,
        d = mi(e, c);
      if (r) {
        var p = n === "scaleBand" && r.bandwidth ? r.bandwidth() / 2 : 2,
          m = f === "category" && r.bandwidth ? r.bandwidth() / p : 0;
        return (
          (m =
            c === "angleAxis" && o != null && (o == null ? void 0 : o.length) >= 2
              ? wn(o[0] - o[1]) * 2 * m
              : m),
          d && l
            ? l
                .map((g, x) => {
                  var b = r.map(g);
                  return _e(b) ? { coordinate: b + m, value: g, index: x, offset: m } : null;
                })
                .filter(nr)
            : r
                .domain()
                .map((g, x) => {
                  var b = r.map(g);
                  return _e(b)
                    ? { coordinate: b + m, value: s ? s[g] : g, index: x, offset: m }
                    : null;
                })
                .filter(nr)
        );
      }
    }
  },
  xi = z([$e, wt, yy, E6, f_, C6, A6, yt], T6),
  wy = z([GO, XO, MU], (e, t, n) => ZO(n.shared, e, t)),
  h_ = (e) => e.tooltip.settings.trigger,
  by = (e) => e.tooltip.settings.defaultIndex,
  dl = z([fl, wy, h_, by], r_),
  fa = z([dl, oo, sa, ca], Ts),
  p_ = z([xi, fa], QO),
  m_ = z([dl], (e) => {
    if (e) return e.dataKey;
  });
z([dl], (e) => {
  if (e) return e.graphicalItemId;
});
var v_ = z([fl, wy, h_, by], o_),
  k6 = z([Or, _r, $e, kt, xi, by, v_], i_),
  O6 = z([dl, k6], (e, t) => (e != null && e.coordinate ? e.coordinate : t)),
  _6 = z([dl], (e) => {
    var t;
    return (t = e == null ? void 0 : e.active) !== null && t !== void 0 ? t : !1;
  }),
  M6 = z([v_, fa, Kn, sa, p_, a_, wy], s_);
z([M6], (e) => {
  if (e != null) {
    var t = e.map((n) => n.payload).filter((n) => n != null);
    return Array.from(new Set(t));
  }
});
function YP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? YP(Object(n), !0).forEach(function (r) {
          I6(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : YP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function I6(e, t, n) {
  return (
    (t = D6(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function D6(e) {
  var t = j6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function j6(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var N6 = (e, t, n, r) => {
    var o = t.find((s) => s && s.index === n);
    if (o) {
      if (e === "horizontal") return { x: o.coordinate, y: r.relativeY };
      if (e === "vertical") return { x: r.relativeX, y: o.coordinate };
    }
    return { x: 0, y: 0 };
  },
  R6 = (e, t, n, r) => {
    var o = t.find((d) => d && d.index === n);
    if (o) {
      if (e === "centric") {
        var s = o.coordinate,
          { radius: l } = r;
        return zo(zo(zo({}, r), rn(r.cx, r.cy, l, s)), {}, { angle: s, radius: l });
      }
      var c = o.coordinate,
        { angle: f } = r;
      return zo(zo(zo({}, r), rn(r.cx, r.cy, c, f)), {}, { angle: f, radius: c });
    }
    return {
      angle: 0,
      clockWise: !1,
      cx: 0,
      cy: 0,
      endAngle: 0,
      innerRadius: 0,
      outerRadius: 0,
      radius: 0,
      startAngle: 0,
      x: 0,
      y: 0,
    };
  };
function L6(e, t) {
  var { relativeX: n, relativeY: r } = e;
  return n >= t.left && n <= t.left + t.width && r >= t.top && r <= t.top + t.height;
}
var g_ = (e, t, n, r, o) => {
    var s,
      l = (s = t == null ? void 0 : t.length) !== null && s !== void 0 ? s : 0;
    if (l <= 1 || e == null) return 0;
    if (r === "angleAxis" && o != null && Math.abs(Math.abs(o[1] - o[0]) - 360) <= 1e-6)
      for (var c = 0; c < l; c++) {
        var f,
          d,
          p,
          m,
          g,
          x =
            c > 0
              ? (f = n[c - 1]) === null || f === void 0
                ? void 0
                : f.coordinate
              : (d = n[l - 1]) === null || d === void 0
                ? void 0
                : d.coordinate,
          b = (p = n[c]) === null || p === void 0 ? void 0 : p.coordinate,
          w =
            c >= l - 1
              ? (m = n[0]) === null || m === void 0
                ? void 0
                : m.coordinate
              : (g = n[c + 1]) === null || g === void 0
                ? void 0
                : g.coordinate,
          S = void 0;
        if (!(x == null || b == null || w == null))
          if (wn(b - x) !== wn(w - b)) {
            var C = [];
            if (wn(w - b) === wn(o[1] - o[0])) {
              S = w;
              var A = b + o[1] - o[0];
              ((C[0] = Math.min(A, (A + x) / 2)), (C[1] = Math.max(A, (A + x) / 2)));
            } else {
              S = x;
              var k = w + o[1] - o[0];
              ((C[0] = Math.min(b, (k + b) / 2)), (C[1] = Math.max(b, (k + b) / 2)));
            }
            var O = [Math.min(b, (S + b) / 2), Math.max(b, (S + b) / 2)];
            if ((e > O[0] && e <= O[1]) || (e >= C[0] && e <= C[1])) {
              var _;
              return (_ = n[c]) === null || _ === void 0 ? void 0 : _.index;
            }
          } else {
            var I = Math.min(x, w),
              R = Math.max(x, w);
            if (e > (I + b) / 2 && e <= (R + b) / 2) {
              var F;
              return (F = n[c]) === null || F === void 0 ? void 0 : F.index;
            }
          }
      }
    else if (t)
      for (var W = 0; W < l; W++) {
        var B = t[W];
        if (B != null) {
          var q = t[W + 1],
            U = t[W - 1];
          if (
            (W === 0 && q != null && e <= (B.coordinate + q.coordinate) / 2) ||
            (W === l - 1 && U != null && e > (B.coordinate + U.coordinate) / 2) ||
            (W > 0 &&
              W < l - 1 &&
              U != null &&
              q != null &&
              e > (B.coordinate + U.coordinate) / 2 &&
              e <= (B.coordinate + q.coordinate) / 2)
          )
            return B.index;
        }
      }
    return -1;
  },
  Sy = (e, t) => t,
  y_ = (e, t, n) => n,
  Py = (e, t, n, r) => r,
  $6 = z(xi, (e) => mg(e, (t) => t.coordinate)),
  Ey = z([fl, Sy, y_, Py], r_),
  Cy = z([Ey, oo, sa, ca], Ts),
  x_ = z([fl, Sy, y_, Py], o_),
  tf = z([Or, _r, $e, kt, xi, Py, x_], i_);
z([Ey, tf], (e, t) => {
  var n;
  return (n = e.coordinate) !== null && n !== void 0 ? n : t;
});
var z6 = z([xi, Cy], QO);
z([x_, Cy, Kn, sa, z6, a_, Sy], s_);
z([Ey, Cy], (e, t) => ({ isActive: e.active && t != null, activeIndex: t }));
var F6 = (e, t, n, r, o, s, l) => {
    if (!(!e || !n || !r || !o) && L6(e, l)) {
      var c = lz(e, t),
        f = g_(c, s, o, n, r),
        d = N6(t, o, f, e);
      return { activeIndex: String(f), activeCoordinate: d };
    }
  },
  V6 = (e, t, n, r, o, s, l) => {
    if (!(!e || !r || !o || !s || !n)) {
      var c = x5(e, n);
      if (c) {
        var f = uz(c, t),
          d = g_(f, l, s, r, o),
          p = R6(t, s, d, c);
        return { activeIndex: String(d), activeCoordinate: p };
      }
    }
  },
  B6 = (e, t, n, r, o, s, l, c) => {
    if (!(!e || !t || !r || !o || !s))
      return t === "horizontal" || t === "vertical"
        ? F6(e, t, r, o, s, l, c)
        : V6(e, t, n, r, o, s, l);
  },
  U6 = z(
    (e) => e.zIndex.zIndexMap,
    (e, t) => t,
    (e, t, n) => n,
    (e, t, n) => {
      if (t != null) {
        var r = e[t];
        if (r != null) return n ? r.panoramaElement : r.element;
      }
    },
  ),
  W6 = z(
    (e) => e.zIndex.zIndexMap,
    (e) => {
      var t = Object.keys(e)
          .map((r) => parseInt(r, 10))
          .concat(Object.values(vi)),
        n = Array.from(new Set(t));
      return n.sort((r, o) => r - o);
    },
    { memoizeOptions: { resultEqualityCheck: H5 } },
  );
function GP(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function XP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? GP(Object(n), !0).forEach(function (r) {
          K6(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GP(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function K6(e, t, n) {
  return (
    (t = H6(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function H6(e) {
  var t = q6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q6(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Y6 = {},
  G6 = {
    zIndexMap: Object.values(vi).reduce(
      (e, t) =>
        XP(XP({}, e), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }),
      Y6,
    ),
  },
  X6 = new Set(Object.values(vi));
function Z6(e) {
  return X6.has(e);
}
var w_ = Nt({
    name: "zIndex",
    initialState: G6,
    reducers: {
      registerZIndexPortal: {
        reducer: (e, t) => {
          var { zIndex: n } = t.payload;
          e.zIndexMap[n]
            ? (e.zIndexMap[n].consumers += 1)
            : (e.zIndexMap[n] = { consumers: 1, element: void 0, panoramaElement: void 0 });
        },
        prepare: We(),
      },
      unregisterZIndexPortal: {
        reducer: (e, t) => {
          var { zIndex: n } = t.payload;
          e.zIndexMap[n] &&
            ((e.zIndexMap[n].consumers -= 1),
            e.zIndexMap[n].consumers <= 0 && !Z6(n) && delete e.zIndexMap[n]);
        },
        prepare: We(),
      },
      registerZIndexPortalElement: {
        reducer: (e, t) => {
          var { zIndex: n, element: r, isPanorama: o } = t.payload;
          e.zIndexMap[n]
            ? o
              ? (e.zIndexMap[n].panoramaElement = r)
              : (e.zIndexMap[n].element = r)
            : (e.zIndexMap[n] = {
                consumers: 0,
                element: o ? void 0 : r,
                panoramaElement: o ? r : void 0,
              });
        },
        prepare: We(),
      },
      unregisterZIndexPortalElement: {
        reducer: (e, t) => {
          var { zIndex: n } = t.payload;
          e.zIndexMap[n] &&
            (t.payload.isPanorama
              ? (e.zIndexMap[n].panoramaElement = void 0)
              : (e.zIndexMap[n].element = void 0));
        },
        prepare: We(),
      },
    },
  }),
  {
    registerZIndexPortal: Q6,
    unregisterZIndexPortal: dm,
    registerZIndexPortalElement: J6,
    unregisterZIndexPortalElement: eW,
  } = w_.actions,
  tW = w_.reducer;
function hl(e) {
  var { zIndex: t, children: n } = e,
    r = Wz(),
    o = r && t !== void 0 && t !== 0,
    s = Wn(),
    l = E.useRef(void 0),
    c = E.useRef(new Set()),
    f = vt(),
    d = Ve((m) => U6(m, t, s));
  if (
    (E.useLayoutEffect(() => {
      if (!o) {
        var m = c.current;
        (m.forEach((x) => {
          f(dm({ zIndex: x }));
        }),
          m.clear(),
          (l.current = void 0));
        return;
      }
      if ((c.current.has(t) || (f(Q6({ zIndex: t })), c.current.add(t)), d)) {
        l.current = d;
        var g = c.current;
        g.forEach((x) => {
          x !== t && (f(dm({ zIndex: x })), g.delete(x));
        });
      }
    }, [f, t, o, d]),
    E.useLayoutEffect(() => {
      var m = c.current;
      return () => {
        (m.forEach((g) => {
          f(dm({ zIndex: g }));
        }),
          m.clear());
      };
    }, [f]),
    !o)
  )
    return n;
  var p = d ?? l.current;
  return p ? u$.createPortal(n, p) : null;
}
var nW = E.createContext(null),
  hm = { exports: {} },
  ZP;
function rW() {
  return (
    ZP ||
      ((ZP = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          n = "~";
        function r() {}
        Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1));
        function o(f, d, p) {
          ((this.fn = f), (this.context = d), (this.once = p || !1));
        }
        function s(f, d, p, m, g) {
          if (typeof p != "function") throw new TypeError("The listener must be a function");
          var x = new o(p, m || f, g),
            b = n ? n + d : d;
          return (
            f._events[b]
              ? f._events[b].fn
                ? (f._events[b] = [f._events[b], x])
                : f._events[b].push(x)
              : ((f._events[b] = x), f._eventsCount++),
            f
          );
        }
        function l(f, d) {
          --f._eventsCount === 0 ? (f._events = new r()) : delete f._events[d];
        }
        function c() {
          ((this._events = new r()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var d = [],
            p,
            m;
          if (this._eventsCount === 0) return d;
          for (m in (p = this._events)) t.call(p, m) && d.push(n ? m.slice(1) : m);
          return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(p)) : d;
        }),
          (c.prototype.listeners = function (d) {
            var p = n ? n + d : d,
              m = this._events[p];
            if (!m) return [];
            if (m.fn) return [m.fn];
            for (var g = 0, x = m.length, b = new Array(x); g < x; g++) b[g] = m[g].fn;
            return b;
          }),
          (c.prototype.listenerCount = function (d) {
            var p = n ? n + d : d,
              m = this._events[p];
            return m ? (m.fn ? 1 : m.length) : 0;
          }),
          (c.prototype.emit = function (d, p, m, g, x, b) {
            var w = n ? n + d : d;
            if (!this._events[w]) return !1;
            var S = this._events[w],
              C = arguments.length,
              A,
              k;
            if (S.fn) {
              switch ((S.once && this.removeListener(d, S.fn, void 0, !0), C)) {
                case 1:
                  return (S.fn.call(S.context), !0);
                case 2:
                  return (S.fn.call(S.context, p), !0);
                case 3:
                  return (S.fn.call(S.context, p, m), !0);
                case 4:
                  return (S.fn.call(S.context, p, m, g), !0);
                case 5:
                  return (S.fn.call(S.context, p, m, g, x), !0);
                case 6:
                  return (S.fn.call(S.context, p, m, g, x, b), !0);
              }
              for (k = 1, A = new Array(C - 1); k < C; k++) A[k - 1] = arguments[k];
              S.fn.apply(S.context, A);
            } else {
              var O = S.length,
                _;
              for (k = 0; k < O; k++)
                switch ((S[k].once && this.removeListener(d, S[k].fn, void 0, !0), C)) {
                  case 1:
                    S[k].fn.call(S[k].context);
                    break;
                  case 2:
                    S[k].fn.call(S[k].context, p);
                    break;
                  case 3:
                    S[k].fn.call(S[k].context, p, m);
                    break;
                  case 4:
                    S[k].fn.call(S[k].context, p, m, g);
                    break;
                  default:
                    if (!A) for (_ = 1, A = new Array(C - 1); _ < C; _++) A[_ - 1] = arguments[_];
                    S[k].fn.apply(S[k].context, A);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (d, p, m) {
            return s(this, d, p, m, !1);
          }),
          (c.prototype.once = function (d, p, m) {
            return s(this, d, p, m, !0);
          }),
          (c.prototype.removeListener = function (d, p, m, g) {
            var x = n ? n + d : d;
            if (!this._events[x]) return this;
            if (!p) return (l(this, x), this);
            var b = this._events[x];
            if (b.fn) b.fn === p && (!g || b.once) && (!m || b.context === m) && l(this, x);
            else {
              for (var w = 0, S = [], C = b.length; w < C; w++)
                (b[w].fn !== p || (g && !b[w].once) || (m && b[w].context !== m)) && S.push(b[w]);
              S.length ? (this._events[x] = S.length === 1 ? S[0] : S) : l(this, x);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (d) {
            var p;
            return (
              d
                ? ((p = n ? n + d : d), this._events[p] && l(this, p))
                : ((this._events = new r()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = n),
          (c.EventEmitter = c),
          (e.exports = c));
      })(hm)),
    hm.exports
  );
}
var iW = rW();
const oW = ao(iW);
var nf = new oW(),
  QP = "recharts.syncEvent.tooltip",
  JP = "recharts.syncEvent.brush",
  aW = (e, t) => {
    if (t && Array.isArray(e)) {
      var n = Number.parseInt(t, 10);
      if (!ur(n)) return e[n];
    }
  },
  sW = {
    chartName: "",
    tooltipPayloadSearcher: () => {},
    eventEmitter: void 0,
    defaultTooltipEventType: "axis",
  },
  b_ = Nt({
    name: "options",
    initialState: sW,
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
      },
    },
  }),
  lW = b_.reducer,
  { createEventEmitter: uW } = b_.actions,
  cW = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 },
  S_ = Nt({
    name: "chartData",
    initialState: cW,
    reducers: {
      setChartData(e, t) {
        if (((e.chartData = t.payload), t.payload == null)) {
          ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
          return;
        }
        t.payload.length > 0 &&
          e.dataEndIndex !== t.payload.length - 1 &&
          (e.dataEndIndex = t.payload.length - 1);
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: n, endIndex: r } = t.payload;
        (n != null && (e.dataStartIndex = n), r != null && (e.dataEndIndex = r));
      },
    },
  }),
  { setChartData: eE, setDataStartEndIndexes: fW, setComputedData: Q7 } = S_.actions,
  dW = S_.reducer,
  hW = ["x", "y"];
function tE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tE(Object(n), !0).forEach(function (r) {
          pW(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function pW(e, t, n) {
  return (
    (t = mW(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function mW(e) {
  var t = vW(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vW(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gW(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = yW(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function yW(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function xW() {
  var e = Ve(Ck),
    t = Ve(Ak),
    n = vt(),
    r = Ve(z5),
    o = Ve(xi),
    s = If(),
    l = GT(),
    c = Ve((f) => f.rootProps.className);
  E.useEffect(() => {
    if (e == null) return Qs;
    var f = (d, p, m) => {
      if (t !== m && e === d) {
        if (p.payload.active === !1) {
          n(
            Vu({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0,
            }),
          );
          return;
        }
        if (r === "index") {
          var g;
          if (
            l &&
            p !== null &&
            p !== void 0 &&
            (g = p.payload) !== null &&
            g !== void 0 &&
            g.coordinate &&
            p.payload.sourceViewBox
          ) {
            var x = p.payload.coordinate,
              { x: b, y: w } = x,
              S = gW(x, hW),
              { x: C, y: A, width: k, height: O } = p.payload.sourceViewBox,
              _ = Fo(
                Fo({}, S),
                {},
                {
                  x: l.x + (k ? (b - C) / k : 0) * l.width,
                  y: l.y + (O ? (w - A) / O : 0) * l.height,
                },
              );
            n(Fo(Fo({}, p), {}, { payload: Fo(Fo({}, p.payload), {}, { coordinate: _ }) }));
          } else n(p);
          return;
        }
        if (o != null) {
          var I;
          if (typeof r == "function") {
            var R = {
                activeTooltipIndex: p.payload.index == null ? void 0 : Number(p.payload.index),
                isTooltipActive: p.payload.active,
                activeIndex: p.payload.index == null ? void 0 : Number(p.payload.index),
                activeLabel: p.payload.label,
                activeDataKey: p.payload.dataKey,
                activeCoordinate: p.payload.coordinate,
              },
              F = r(o, R);
            I = o[F];
          } else r === "value" && (I = o.find((ye) => String(ye.value) === p.payload.label));
          var { coordinate: W } = p.payload;
          if (W == null || l == null) {
            n(
              Vu({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
                graphicalItemId: void 0,
              }),
            );
            return;
          }
          if (I == null) {
            n(
              Vu({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: p.payload.sourceViewBox,
                graphicalItemId: void 0,
              }),
            );
            return;
          }
          var { x: B, y: q } = W,
            U = Math.min(B, l.x + l.width),
            fe = Math.min(q, l.y + l.height),
            ie = {
              x: s === "horizontal" ? I.coordinate : U,
              y: s === "horizontal" ? fe : I.coordinate,
            },
            ve = Vu({
              active: p.payload.active,
              coordinate: ie,
              dataKey: p.payload.dataKey,
              index: String(I.index),
              label: p.payload.label,
              sourceViewBox: p.payload.sourceViewBox,
              graphicalItemId: p.payload.graphicalItemId,
            });
          n(ve);
        }
      }
    };
    return (
      nf.on(QP, f),
      () => {
        nf.off(QP, f);
      }
    );
  }, [c, n, t, e, r, o, s, l]);
}
function wW() {
  var e = Ve(Ck),
    t = Ve(Ak),
    n = vt();
  E.useEffect(() => {
    if (e == null) return Qs;
    var r = (o, s, l) => {
      t !== l && e === o && n(fW(s));
    };
    return (
      nf.on(JP, r),
      () => {
        nf.off(JP, r);
      }
    );
  }, [n, t, e]);
}
function bW() {
  var e = vt();
  (E.useEffect(() => {
    e(uW());
  }, [e]),
    xW(),
    wW());
}
var P_ = (e) => null;
P_.displayName = "Cell";
function SW(e, t, n) {
  return (
    (t = PW(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function PW(e) {
  var t = EW(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function EW(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class CW {
  constructor(t) {
    (SW(this, "cache", new Map()), (this.maxSize = t));
  }
  get(t) {
    var n = this.cache.get(t);
    return (n !== void 0 && (this.cache.delete(t), this.cache.set(t, n)), n);
  }
  set(t, n) {
    if (this.cache.has(t)) this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var r = this.cache.keys().next().value;
      r != null && this.cache.delete(r);
    }
    this.cache.set(t, n);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function nE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function AW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nE(Object(n), !0).forEach(function (r) {
          TW(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function TW(e, t, n) {
  return (
    (t = kW(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function kW(e) {
  var t = OW(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function OW(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _W = { cacheSize: 2e3, enableCache: !0 },
  E_ = AW({}, _W),
  rE = new CW(E_.cacheSize),
  MW = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  iE = "recharts_measurement_span";
function IW(e, t) {
  var n = t.fontSize || "",
    r = t.fontFamily || "",
    o = t.fontWeight || "",
    s = t.fontStyle || "",
    l = t.letterSpacing || "",
    c = t.textTransform || "";
  return ""
    .concat(e, "|")
    .concat(n, "|")
    .concat(r, "|")
    .concat(o, "|")
    .concat(s, "|")
    .concat(l, "|")
    .concat(c);
}
var oE = (e, t) => {
    try {
      var n = document.getElementById(iE);
      (n ||
        ((n = document.createElement("span")),
        n.setAttribute("id", iE),
        n.setAttribute("aria-hidden", "true"),
        document.body.appendChild(n)),
        Object.assign(n.style, MW, t),
        (n.textContent = "".concat(e)));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  aE = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || Rf.isSsr) return { width: 0, height: 0 };
    if (!E_.enableCache) return oE(t, n);
    var r = IW(t, n),
      o = rE.get(r);
    if (o) return o;
    var s = oE(t, n);
    return (rE.set(r, s), s);
  },
  C_;
function DW(e, t, n) {
  return (
    (t = jW(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function jW(e) {
  var t = NW(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NW(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  lE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  RW = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,
  LW = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  $W = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  zW = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function FW(e) {
  return zW.includes(e);
}
var Xo = "NaN";
function VW(e, t) {
  return e * $W[t];
}
class Ct {
  static parse(t) {
    var n,
      [, r, o] = (n = LW.exec(t)) !== null && n !== void 0 ? n : [];
    return r == null ? Ct.NaN : new Ct(parseFloat(r), o ?? "");
  }
  constructor(t, n) {
    ((this.num = t),
      (this.unit = n),
      (this.num = t),
      (this.unit = n),
      ur(t) && (this.unit = ""),
      n !== "" && !RW.test(n) && ((this.num = NaN), (this.unit = "")),
      FW(n) && ((this.num = VW(t, n)), (this.unit = "px")));
  }
  add(t) {
    return this.unit !== t.unit ? new Ct(NaN, "") : new Ct(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Ct(NaN, "") : new Ct(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new Ct(NaN, "")
      : new Ct(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new Ct(NaN, "")
      : new Ct(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return ur(this.num);
  }
}
C_ = Ct;
DW(Ct, "NaN", new C_(NaN, ""));
function A_(e) {
  if (e == null || e.includes(Xo)) return Xo;
  for (var t = e; t.includes("*") || t.includes("/");) {
    var n,
      [, r, o, s] = (n = sE.exec(t)) !== null && n !== void 0 ? n : [],
      l = Ct.parse(r ?? ""),
      c = Ct.parse(s ?? ""),
      f = o === "*" ? l.multiply(c) : l.divide(c);
    if (f.isNaN()) return Xo;
    t = t.replace(sE, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t);) {
    var d,
      [, p, m, g] = (d = lE.exec(t)) !== null && d !== void 0 ? d : [],
      x = Ct.parse(p ?? ""),
      b = Ct.parse(g ?? ""),
      w = m === "+" ? x.add(b) : x.subtract(b);
    if (w.isNaN()) return Xo;
    t = t.replace(lE, w.toString());
  }
  return t;
}
var uE = /\(([^()]*)\)/;
function BW(e) {
  for (var t = e, n; (n = uE.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(uE, A_(r));
  }
  return t;
}
function UW(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = BW(t)), (t = A_(t)), t);
}
function WW(e) {
  try {
    return UW(e);
  } catch {
    return Xo;
  }
}
function pm(e) {
  var t = WW(e.slice(5, -1));
  return t === Xo ? "" : t;
}
var KW = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "fill",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
  ],
  HW = ["dx", "dy", "angle", "className", "breakAll"];
function _v() {
  return (
    (_v = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _v.apply(null, arguments)
  );
}
function cE(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = qW(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function qW(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var T_ = /[ \f\n\r\t\v\u2028\u2029]+/,
  k_ = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var o = [];
      mt(t) || (n ? (o = t.toString().split("")) : (o = t.toString().split(T_)));
      var s = o.map((c) => ({ word: c, width: aE(c, r).width })),
        l = n ? 0 : aE(" ", r).width;
      return { wordsWithComputedWidth: s, spaceWidth: l };
    } catch {
      return null;
    }
  };
function YW(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function GW(e) {
  return mt(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var O_ = (e, t, n, r) =>
    e.reduce((o, s) => {
      var { word: l, width: c } = s,
        f = o[o.length - 1];
      if (f && c != null && (t == null || r || f.width + c + n < Number(t)))
        (f.words.push(l), (f.width += c + n));
      else {
        var d = { words: [l], width: c };
        o.push(d);
      }
      return o;
    }, []),
  __ = (e) => e.reduce((t, n) => (t.width > n.width ? t : n)),
  XW = "…",
  fE = (e, t, n, r, o, s, l, c) => {
    var f = e.slice(0, t),
      d = k_({ breakAll: n, style: r, children: f + XW });
    if (!d) return [!1, []];
    var p = O_(d.wordsWithComputedWidth, s, l, c),
      m = p.length > o || __(p).width > Number(s);
    return [m, p];
  },
  ZW = (e, t, n, r, o) => {
    var { maxLines: s, children: l, style: c, breakAll: f } = e,
      d = Ee(s),
      p = String(l),
      m = O_(t, r, n, o);
    if (!d || o) return m;
    var g = m.length > s || __(m).width > Number(r);
    if (!g) return m;
    for (var x = 0, b = p.length - 1, w = 0, S; x <= b && w <= p.length - 1;) {
      var C = Math.floor((x + b) / 2),
        A = C - 1,
        [k, O] = fE(p, A, f, c, s, r, n, o),
        [_] = fE(p, C, f, c, s, r, n, o);
      if ((!k && !_ && (x = C + 1), k && _ && (b = C - 1), !k && _)) {
        S = O;
        break;
      }
      w++;
    }
    return S || m;
  },
  dE = (e) => {
    var t = mt(e) ? [] : e.toString().split(T_);
    return [{ words: t, width: void 0 }];
  },
  QW = (e) => {
    var { width: t, scaleToFit: n, children: r, style: o, breakAll: s, maxLines: l } = e;
    if ((t || n) && !Rf.isSsr) {
      var c,
        f,
        d = k_({ breakAll: s, children: r, style: o });
      if (d) {
        var { wordsWithComputedWidth: p, spaceWidth: m } = d;
        ((c = p), (f = m));
      } else return dE(r);
      return ZW({ breakAll: s, children: r, maxLines: l, style: o }, c, f, t, !!n);
    }
    return dE(r);
  },
  M_ = "#808080",
  JW = {
    angle: 0,
    breakAll: !1,
    capHeight: "0.71em",
    fill: M_,
    lineHeight: "1em",
    scaleToFit: !1,
    textAnchor: "start",
    verticalAnchor: "end",
    x: 0,
    y: 0,
  },
  I_ = E.forwardRef((e, t) => {
    var n = pi(e, JW),
      {
        x: r,
        y: o,
        lineHeight: s,
        capHeight: l,
        fill: c,
        scaleToFit: f,
        textAnchor: d,
        verticalAnchor: p,
      } = n,
      m = cE(n, KW),
      g = E.useMemo(
        () =>
          QW({
            breakAll: m.breakAll,
            children: m.children,
            maxLines: m.maxLines,
            scaleToFit: f,
            style: m.style,
            width: m.width,
          }),
        [m.breakAll, m.children, m.maxLines, f, m.style, m.width],
      ),
      { dx: x, dy: b, angle: w, className: S, breakAll: C } = m,
      A = cE(m, HW);
    if (!Ds(r) || !Ds(o) || g.length === 0) return null;
    var k = Number(r) + (Ee(x) ? x : 0),
      O = Number(o) + (Ee(b) ? b : 0);
    if (!_e(k) || !_e(O)) return null;
    var _;
    switch (p) {
      case "start":
        _ = pm("calc(".concat(l, ")"));
        break;
      case "middle":
        _ = pm(
          "calc("
            .concat((g.length - 1) / 2, " * -")
            .concat(s, " + (")
            .concat(l, " / 2))"),
        );
        break;
      default:
        _ = pm("calc(".concat(g.length - 1, " * -").concat(s, ")"));
        break;
    }
    var I = [],
      R = g[0];
    if (f && R != null) {
      var F = R.width,
        { width: W } = m;
      I.push("scale(".concat(Ee(W) && Ee(F) ? W / F : 1, ")"));
    }
    return (
      w && I.push("rotate(".concat(w, ", ").concat(k, ", ").concat(O, ")")),
      I.length && (A.transform = I.join(" ")),
      E.createElement(
        "text",
        _v({}, Fn(A), {
          ref: t,
          x: k,
          y: O,
          className: un("recharts-text", S),
          textAnchor: d,
          fill: c.includes("url") ? M_ : c,
        }),
        g.map((B, q) => {
          var U = B.words.join(C ? "" : " ");
          return E.createElement(
            "tspan",
            { x: k, dy: q === 0 ? _ : s, key: "".concat(U, "-").concat(q) },
            U,
          );
        }),
      )
    );
  });
I_.displayName = "Text";
function hE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hE(Object(n), !0).forEach(function (r) {
          eK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function eK(e, t, n) {
  return (
    (t = tK(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function tK(e) {
  var t = nK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nK(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rK = (e) => {
    var { viewBox: t, position: n, offset: r = 0, parentViewBox: o } = e,
      { x: s, y: l, height: c, upperWidth: f, lowerWidth: d } = Pg(t),
      p = s,
      m = s + (f - d) / 2,
      g = (p + m) / 2,
      x = (f + d) / 2,
      b = p + f / 2,
      w = c >= 0 ? 1 : -1,
      S = w * r,
      C = w > 0 ? "end" : "start",
      A = w > 0 ? "start" : "end",
      k = f >= 0 ? 1 : -1,
      O = k * r,
      _ = k > 0 ? "end" : "start",
      I = k > 0 ? "start" : "end",
      R = o;
    if (n === "top") {
      var F = { x: p + f / 2, y: l - S, horizontalAnchor: "middle", verticalAnchor: C };
      return (R && ((F.height = Math.max(l - R.y, 0)), (F.width = f)), F);
    }
    if (n === "bottom") {
      var W = { x: m + d / 2, y: l + c + S, horizontalAnchor: "middle", verticalAnchor: A };
      return (R && ((W.height = Math.max(R.y + R.height - (l + c), 0)), (W.width = d)), W);
    }
    if (n === "left") {
      var B = { x: g - O, y: l + c / 2, horizontalAnchor: _, verticalAnchor: "middle" };
      return (R && ((B.width = Math.max(B.x - R.x, 0)), (B.height = c)), B);
    }
    if (n === "right") {
      var q = { x: g + x + O, y: l + c / 2, horizontalAnchor: I, verticalAnchor: "middle" };
      return (R && ((q.width = Math.max(R.x + R.width - q.x, 0)), (q.height = c)), q);
    }
    var U = R ? { width: x, height: c } : {};
    return n === "insideLeft"
      ? Jn({ x: g + O, y: l + c / 2, horizontalAnchor: I, verticalAnchor: "middle" }, U)
      : n === "insideRight"
        ? Jn({ x: g + x - O, y: l + c / 2, horizontalAnchor: _, verticalAnchor: "middle" }, U)
        : n === "insideTop"
          ? Jn({ x: p + f / 2, y: l + S, horizontalAnchor: "middle", verticalAnchor: A }, U)
          : n === "insideBottom"
            ? Jn({ x: m + d / 2, y: l + c - S, horizontalAnchor: "middle", verticalAnchor: C }, U)
            : n === "insideTopLeft"
              ? Jn({ x: p + O, y: l + S, horizontalAnchor: I, verticalAnchor: A }, U)
              : n === "insideTopRight"
                ? Jn({ x: p + f - O, y: l + S, horizontalAnchor: _, verticalAnchor: A }, U)
                : n === "insideBottomLeft"
                  ? Jn({ x: m + O, y: l + c - S, horizontalAnchor: I, verticalAnchor: C }, U)
                  : n === "insideBottomRight"
                    ? Jn({ x: m + d - O, y: l + c - S, horizontalAnchor: _, verticalAnchor: C }, U)
                    : n && typeof n == "object" && (Ee(n.x) || eo(n.x)) && (Ee(n.y) || eo(n.y))
                      ? Jn(
                          {
                            x: s + Vn(n.x, x),
                            y: l + Vn(n.y, c),
                            horizontalAnchor: "end",
                            verticalAnchor: "end",
                          },
                          U,
                        )
                      : Jn(
                          {
                            x: b,
                            y: l + c / 2,
                            horizontalAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          U,
                        );
  },
  iK = ["labelRef"],
  oK = ["content"];
function pE(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = aK(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function aK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function mE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Uu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mE(Object(n), !0).forEach(function (r) {
          sK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function sK(e, t, n) {
  return (
    (t = lK(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function lK(e) {
  var t = uK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uK(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rf() {
  return (
    (rf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rf.apply(null, arguments)
  );
}
var cK = E.createContext(null),
  fK = () => {
    var e = E.useContext(cK),
      t = GT();
    return e || (t ? Pg(t) : void 0);
  },
  dK = E.createContext(null),
  hK = () => {
    var e = E.useContext(dK),
      t = Ve(Ik);
    return e || t;
  },
  pK = (e) => {
    var { value: t, formatter: n } = e,
      r = mt(e.children) ? t : e.children;
    return typeof n == "function" ? n(r) : r;
  },
  mK = (e) => e != null && typeof e == "function",
  vK = (e, t) => {
    var n = wn(t - e),
      r = Math.min(Math.abs(t - e), 360);
    return n * r;
  },
  gK = (e, t, n, r, o) => {
    var { offset: s, className: l } = e,
      {
        cx: c,
        cy: f,
        innerRadius: d,
        outerRadius: p,
        startAngle: m,
        endAngle: g,
        clockWise: x,
      } = o,
      b = (d + p) / 2,
      w = vK(m, g),
      S = w >= 0 ? 1 : -1,
      C,
      A;
    switch (t) {
      case "insideStart":
        ((C = m + S * s), (A = x));
        break;
      case "insideEnd":
        ((C = g - S * s), (A = !x));
        break;
      case "end":
        ((C = g + S * s), (A = x));
        break;
      default:
        throw new Error("Unsupported position ".concat(t));
    }
    A = w <= 0 ? A : !A;
    var k = rn(c, f, b, C),
      O = rn(c, f, b, C + (A ? 1 : -1) * 359),
      _ = "M"
        .concat(k.x, ",")
        .concat(
          k.y,
          `
    A`,
        )
        .concat(b, ",")
        .concat(b, ",0,1,")
        .concat(
          A ? 0 : 1,
          `,
    `,
        )
        .concat(O.x, ",")
        .concat(O.y),
      I = mt(e.id) ? js("recharts-radial-line-") : e.id;
    return E.createElement(
      "text",
      rf({}, r, { dominantBaseline: "central", className: un("recharts-radial-bar-label", l) }),
      E.createElement("defs", null, E.createElement("path", { id: I, d: _ })),
      E.createElement("textPath", { xlinkHref: "#".concat(I) }, n),
    );
  },
  yK = (e, t, n) => {
    var { cx: r, cy: o, innerRadius: s, outerRadius: l, startAngle: c, endAngle: f } = e,
      d = (c + f) / 2;
    if (n === "outside") {
      var { x: p, y: m } = rn(r, o, l + t, d);
      return { x: p, y: m, textAnchor: p >= r ? "start" : "end", verticalAnchor: "middle" };
    }
    if (n === "center") return { x: r, y: o, textAnchor: "middle", verticalAnchor: "middle" };
    if (n === "centerTop") return { x: r, y: o, textAnchor: "middle", verticalAnchor: "start" };
    if (n === "centerBottom") return { x: r, y: o, textAnchor: "middle", verticalAnchor: "end" };
    var g = (s + l) / 2,
      { x, y: b } = rn(r, o, g, d);
    return { x, y: b, textAnchor: "middle", verticalAnchor: "middle" };
  },
  ic = (e) => e != null && "cx" in e && Ee(e.cx),
  xK = { angle: 0, offset: 5, zIndex: vi.label, position: "middle", textBreakAll: !1 };
function wK(e) {
  if (!ic(e)) return e;
  var { cx: t, cy: n, outerRadius: r } = e,
    o = r * 2;
  return { x: t - r, y: n - r, width: o, upperWidth: o, lowerWidth: o, height: o };
}
function D_(e) {
  var t = pi(e, xK),
    {
      viewBox: n,
      parentViewBox: r,
      position: o,
      value: s,
      children: l,
      content: c,
      className: f = "",
      textBreakAll: d,
      labelRef: p,
    } = t,
    m = hK(),
    g = fK(),
    x = o === "center" ? g : (m ?? g),
    b,
    w,
    S;
  n == null ? (b = x) : ic(n) ? (b = n) : (b = Pg(n));
  var C = wK(b);
  if (!b || (mt(s) && mt(l) && !E.isValidElement(c) && typeof c != "function")) return null;
  var A = Uu(Uu({}, t), {}, { viewBox: b });
  if (E.isValidElement(c)) {
    var { labelRef: k } = A,
      O = pE(A, iK);
    return E.cloneElement(c, O);
  }
  if (typeof c == "function") {
    var { content: _ } = A,
      I = pE(A, oK);
    if (((w = E.createElement(c, I)), E.isValidElement(w))) return w;
  } else w = pK(t);
  var R = Fn(t);
  if (ic(b)) {
    if (o === "insideStart" || o === "insideEnd" || o === "end") return gK(t, o, w, R, b);
    S = yK(b, t.offset, t.position);
  } else {
    if (!C) return null;
    var F = rK({ viewBox: C, position: o, offset: t.offset, parentViewBox: ic(r) ? void 0 : r });
    S = Uu(
      Uu(
        { x: F.x, y: F.y, textAnchor: F.horizontalAnchor, verticalAnchor: F.verticalAnchor },
        F.width !== void 0 ? { width: F.width } : {},
      ),
      F.height !== void 0 ? { height: F.height } : {},
    );
  }
  return E.createElement(
    hl,
    { zIndex: t.zIndex },
    E.createElement(
      I_,
      rf({ ref: p, className: un("recharts-label", f) }, R, S, {
        textAnchor: YW(R.textAnchor) ? R.textAnchor : S.textAnchor,
        breakAll: d,
      }),
      w,
    ),
  );
}
D_.displayName = "Label";
var bK = ["valueAccessor"],
  SK = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function of() {
  return (
    (of = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    of.apply(null, arguments)
  );
}
function vE(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = PK(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function PK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var EK = (e) => {
    var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
    if (GW(t)) return t;
  },
  j_ = E.createContext(void 0),
  CK = j_.Provider,
  N_ = E.createContext(void 0);
N_.Provider;
function AK() {
  return E.useContext(j_);
}
function TK() {
  return E.useContext(N_);
}
function oc(e) {
  var { valueAccessor: t = EK } = e,
    n = vE(e, bK),
    { dataKey: r, clockWise: o, id: s, textBreakAll: l, zIndex: c } = n,
    f = vE(n, SK),
    d = AK(),
    p = TK(),
    m = d || p;
  return !m || !m.length
    ? null
    : E.createElement(
        hl,
        { zIndex: c ?? vi.label },
        E.createElement(
          Qi,
          { className: "recharts-label-list" },
          m.map((g, x) => {
            var b,
              w = mt(r) ? t(g, x) : pt(g.payload, r),
              S = mt(s) ? {} : { id: "".concat(s, "-").concat(x) };
            return E.createElement(
              D_,
              of({ key: "label-".concat(x) }, Fn(g), f, S, {
                fill: (b = n.fill) !== null && b !== void 0 ? b : g.fill,
                parentViewBox: g.parentViewBox,
                value: w,
                textBreakAll: l,
                viewBox: g.viewBox,
                index: x,
                zIndex: 0,
              }),
            );
          }),
        ),
      );
}
oc.displayName = "LabelList";
function kK(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? E.createElement(oc, { key: "labelList-implicit" })
      : E.isValidElement(t) || mK(t)
        ? E.createElement(oc, { key: "labelList-implicit", content: t })
        : typeof t == "object"
          ? E.createElement(oc, of({ key: "labelList-implicit" }, t, { type: String(t.type) }))
          : null
    : null;
}
var OK = { radiusAxis: {}, angleAxis: {} },
  R_ = Nt({
    name: "polarAxis",
    initialState: OK,
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = t.payload;
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = t.payload;
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  { addRadiusAxis: J7, removeRadiusAxis: eq, addAngleAxis: tq, removeAngleAxis: nq } = R_.actions,
  _K = R_.reducer,
  mm = { exports: {} },
  je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gE;
function MK() {
  if (gE) return je;
  gE = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    d = Symbol.for("react.suspense_list"),
    p = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    g = Symbol.for("react.view_transition"),
    x = Symbol.for("react.client.reference");
  function b(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case e:
          switch (((w = w.type), w)) {
            case n:
            case o:
            case r:
            case f:
            case d:
            case g:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case l:
                case c:
                case m:
                case p:
                  return w;
                case s:
                  return w;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return (
    (je.ContextConsumer = s),
    (je.ContextProvider = l),
    (je.Element = e),
    (je.ForwardRef = c),
    (je.Fragment = n),
    (je.Lazy = m),
    (je.Memo = p),
    (je.Portal = t),
    (je.Profiler = o),
    (je.StrictMode = r),
    (je.Suspense = f),
    (je.SuspenseList = d),
    (je.isContextConsumer = function (w) {
      return b(w) === s;
    }),
    (je.isContextProvider = function (w) {
      return b(w) === l;
    }),
    (je.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }),
    (je.isForwardRef = function (w) {
      return b(w) === c;
    }),
    (je.isFragment = function (w) {
      return b(w) === n;
    }),
    (je.isLazy = function (w) {
      return b(w) === m;
    }),
    (je.isMemo = function (w) {
      return b(w) === p;
    }),
    (je.isPortal = function (w) {
      return b(w) === t;
    }),
    (je.isProfiler = function (w) {
      return b(w) === o;
    }),
    (je.isStrictMode = function (w) {
      return b(w) === r;
    }),
    (je.isSuspense = function (w) {
      return b(w) === f;
    }),
    (je.isSuspenseList = function (w) {
      return b(w) === d;
    }),
    (je.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === o ||
        w === r ||
        w === f ||
        w === d ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === m ||
            w.$$typeof === p ||
            w.$$typeof === l ||
            w.$$typeof === s ||
            w.$$typeof === c ||
            w.$$typeof === x ||
            w.getModuleId !== void 0))
      );
    }),
    (je.typeOf = b),
    je
  );
}
var yE;
function IK() {
  return (yE || ((yE = 1), (mm.exports = MK())), mm.exports);
}
var DK = IK(),
  xE = (e) => (typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : ""),
  wE = null,
  vm = null,
  L_ = (e) => {
    if (e === wE && Array.isArray(vm)) return vm;
    var t = [];
    return (
      E.Children.forEach(e, (n) => {
        mt(n) || (DK.isFragment(n) ? (t = t.concat(L_(n.props.children))) : t.push(n));
      }),
      (vm = t),
      (wE = e),
      t
    );
  };
function jK(e, t) {
  var n = [],
    r = [];
  return (
    Array.isArray(t) ? (r = t.map((o) => xE(o))) : (r = [xE(t)]),
    L_(e).forEach((o) => {
      var s = bc(o, "type.displayName") || bc(o, "type.name");
      s && r.indexOf(s) !== -1 && n.push(o);
    }),
    n
  );
}
var gm = {},
  bE;
function NK() {
  return (
    bE ||
      ((bE = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n) {
          var o;
          if (typeof n != "object" || n == null) return !1;
          if (Object.getPrototypeOf(n) === null) return !0;
          if (Object.prototype.toString.call(n) !== "[object Object]") {
            const s = n[Symbol.toStringTag];
            return s == null ||
              !((o = Object.getOwnPropertyDescriptor(n, Symbol.toStringTag)) != null && o.writable)
              ? !1
              : n.toString() === `[object ${s}]`;
          }
          let r = n;
          for (; Object.getPrototypeOf(r) !== null;) r = Object.getPrototypeOf(r);
          return Object.getPrototypeOf(n) === r;
        }
        e.isPlainObject = t;
      })(gm)),
    gm
  );
}
var ym, SE;
function RK() {
  return (SE || ((SE = 1), (ym = NK().isPlainObject)), ym);
}
var LK = RK();
const $K = ao(LK);
var PE, EE, CE, AE, TE;
function kE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function OE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kE(Object(n), !0).forEach(function (r) {
          zK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function zK(e, t, n) {
  return (
    (t = FK(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function FK(e) {
  var t = VK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VK(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function af() {
  return (
    (af = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    af.apply(null, arguments)
  );
}
function ys(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
  );
}
var _E = (e, t, n, r, o) => {
    var s = n - r,
      l;
    return (
      (l = Qe(PE || (PE = ys(["M ", ",", ""])), e, t)),
      (l += Qe(EE || (EE = ys(["L ", ",", ""])), e + n, t)),
      (l += Qe(CE || (CE = ys(["L ", ",", ""])), e + n - s / 2, t + o)),
      (l += Qe(AE || (AE = ys(["L ", ",", ""])), e + n - s / 2 - r, t + o)),
      (l += Qe(TE || (TE = ys(["L ", ",", " Z"])), e, t)),
      l
    );
  },
  BK = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  UK = (e) => {
    var t = pi(e, BK),
      { x: n, y: r, upperWidth: o, lowerWidth: s, height: l, className: c } = t,
      {
        animationEasing: f,
        animationDuration: d,
        animationBegin: p,
        isUpdateAnimationActive: m,
      } = t,
      g = E.useRef(null),
      [x, b] = E.useState(-1),
      w = E.useRef(o),
      S = E.useRef(s),
      C = E.useRef(l),
      A = E.useRef(n),
      k = E.useRef(r),
      O = kg(e, "trapezoid-");
    if (
      (E.useEffect(() => {
        if (g.current && g.current.getTotalLength)
          try {
            var ie = g.current.getTotalLength();
            ie && b(ie);
          } catch {}
      }, []),
      n !== +n || r !== +r || o !== +o || s !== +s || l !== +l || (o === 0 && s === 0) || l === 0)
    )
      return null;
    var _ = un("recharts-trapezoid", c);
    if (!m)
      return E.createElement(
        "g",
        null,
        E.createElement("path", af({}, Fn(t), { className: _, d: _E(n, r, o, s, l) })),
      );
    var I = w.current,
      R = S.current,
      F = C.current,
      W = A.current,
      B = k.current,
      q = "0px ".concat(x === -1 ? 1 : x, "px"),
      U = "".concat(x, "px ").concat(x, "px"),
      fe = ik(["strokeDasharray"], d, f);
    return E.createElement(
      Tg,
      { animationId: O, key: O, canBegin: x > 0, duration: d, easing: f, isActive: m, begin: p },
      (ie) => {
        var ve = At(I, o, ie),
          ye = At(R, s, ie),
          pe = At(F, l, ie),
          H = At(W, n, ie),
          ne = At(B, r, ie);
        g.current &&
          ((w.current = ve), (S.current = ye), (C.current = pe), (A.current = H), (k.current = ne));
        var X = ie > 0 ? { transition: fe, strokeDasharray: U } : { strokeDasharray: q };
        return E.createElement(
          "path",
          af({}, Fn(t), {
            className: _,
            d: _E(H, ne, ve, ye, pe),
            ref: g,
            style: OE(OE({}, X), t.style),
          }),
        );
      },
    );
  },
  WK = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function KK(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = HK(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function HK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ME(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ME(Object(n), !0).forEach(function (r) {
          qK(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ME(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function qK(e, t, n) {
  return (
    (t = YK(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function YK(e) {
  var t = GK(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GK(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XK(e, t) {
  return sf(sf({}, t), e);
}
function ZK(e, t) {
  return e === "symbols";
}
function IE(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case "rectangle":
      return E.createElement(u5, n);
    case "trapezoid":
      return E.createElement(UK, n);
    case "sector":
      return E.createElement(P5, n);
    case "symbols":
      if (ZK(t)) return E.createElement(sT, n);
      break;
    case "curve":
      return E.createElement(DF, n);
    default:
      return null;
  }
}
function QK(e) {
  return E.isValidElement(e) ? e.props : e;
}
function JK(e) {
  var {
      option: t,
      shapeType: n,
      activeClassName: r = "recharts-active-shape",
      inActiveClassName: o = "recharts-shape",
    } = e,
    s = KK(e, WK),
    l;
  if (E.isValidElement(t)) l = E.cloneElement(t, sf(sf({}, s), QK(t)));
  else if (typeof t == "function") l = t(s, s.index);
  else if ($K(t) && typeof t != "boolean") {
    var c = XK(t, s);
    l = E.createElement(IE, { shapeType: n, elementProps: c });
  } else {
    var f = s;
    l = E.createElement(IE, { shapeType: n, elementProps: f });
  }
  return s.isActive
    ? E.createElement(Qi, { className: r }, l)
    : E.createElement(Qi, { className: o }, l);
}
var $_ = (e, t, n) => {
    var r = vt();
    return (o, s) => (l) => {
      (e == null || e(o, s, l),
        r(
          e_({
            activeIndex: String(s),
            activeDataKey: t,
            activeCoordinate: o.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  },
  z_ = (e) => {
    var t = vt();
    return (n, r) => (o) => {
      (e == null || e(n, r, o), t(RU()));
    };
  },
  F_ = (e, t, n) => {
    var r = vt();
    return (o, s) => (l) => {
      (e == null || e(o, s, l),
        r(
          LU({
            activeIndex: String(s),
            activeDataKey: t,
            activeCoordinate: o.tooltipPosition,
            activeGraphicalItemId: n,
          }),
        ));
    };
  };
function e9(e) {
  var { tooltipEntrySettings: t } = e,
    n = vt(),
    r = Wn(),
    o = E.useRef(null);
  return (
    E.useLayoutEffect(() => {
      r ||
        (o.current === null ? n(DU(t)) : o.current !== t && n(jU({ prev: o.current, next: t })),
        (o.current = t));
    }, [t, n, r]),
    E.useLayoutEffect(
      () => () => {
        o.current && (n(NU(o.current)), (o.current = null));
      },
      [n],
    ),
    null
  );
}
function t9(e) {
  var { legendPayload: t } = e,
    n = vt(),
    r = Wn(),
    o = E.useRef(null);
  return (
    E.useLayoutEffect(() => {
      r ||
        (o.current === null ? n(rF(t)) : o.current !== t && n(iF({ prev: o.current, next: t })),
        (o.current = t));
    }, [n, r, t]),
    E.useLayoutEffect(
      () => () => {
        o.current && (n(oF(o.current)), (o.current = null));
      },
      [n],
    ),
    null
  );
}
var xm,
  n9 = () => {
    var [e] = E.useState(() => js("uid-"));
    return e;
  },
  r9 = (xm = xI.useId) !== null && xm !== void 0 ? xm : n9;
function i9(e, t) {
  var n = r9();
  return t || (e ? "".concat(e, "-").concat(n) : n);
}
var o9 = E.createContext(void 0),
  a9 = (e) => {
    var { id: t, type: n, children: r } = e,
      o = i9("recharts-".concat(n), t);
    return E.createElement(o9.Provider, { value: o }, r(o));
  },
  s9 = { cartesianItems: [], polarItems: [] },
  V_ = Nt({
    name: "graphicalItems",
    initialState: s9,
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(t.payload);
        },
        prepare: We(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            o = bn(e).cartesianItems.indexOf(n);
          o > -1 && (e.cartesianItems[o] = r);
        },
        prepare: We(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = bn(e).cartesianItems.indexOf(t.payload);
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: We(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(t.payload);
        },
        prepare: We(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = bn(e).polarItems.indexOf(t.payload);
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: We(),
      },
      replacePolarGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            o = bn(e).polarItems.indexOf(n);
          o > -1 && (e.polarItems[o] = r);
        },
        prepare: We(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: l9,
    replaceCartesianGraphicalItem: u9,
    removeCartesianGraphicalItem: c9,
    addPolarGraphicalItem: rq,
    removePolarGraphicalItem: iq,
    replacePolarGraphicalItem: oq,
  } = V_.actions,
  f9 = V_.reducer,
  d9 = (e) => {
    var t = vt(),
      n = E.useRef(null);
    return (
      E.useLayoutEffect(() => {
        (n.current === null ? t(l9(e)) : n.current !== e && t(u9({ prev: n.current, next: e })),
          (n.current = e));
      }, [t, e]),
      E.useLayoutEffect(
        () => () => {
          n.current && (t(c9(n.current)), (n.current = null));
        },
        [t],
      ),
      null
    );
  },
  h9 = E.memo(d9);
function DE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function jE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? DE(Object(n), !0).forEach(function (r) {
          p9(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function p9(e, t, n) {
  return (
    (t = m9(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function m9(e) {
  var t = v9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function v9(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B_ = 0,
  g9 = { xAxis: {}, yAxis: {}, zAxis: {} },
  U_ = Nt({
    name: "cartesianAxis",
    initialState: g9,
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = t.payload;
        },
        prepare: We(),
      },
      replaceXAxis: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload;
          e.xAxis[n.id] !== void 0 && (n.id !== r.id && delete e.xAxis[n.id], (e.xAxis[r.id] = r));
        },
        prepare: We(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: We(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = t.payload;
        },
        prepare: We(),
      },
      replaceYAxis: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload;
          e.yAxis[n.id] !== void 0 && (n.id !== r.id && delete e.yAxis[n.id], (e.yAxis[r.id] = r));
        },
        prepare: We(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: We(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = t.payload;
        },
        prepare: We(),
      },
      replaceZAxis: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload;
          e.zAxis[n.id] !== void 0 && (n.id !== r.id && delete e.zAxis[n.id], (e.zAxis[r.id] = r));
        },
        prepare: We(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: We(),
      },
      updateYAxisWidth(e, t) {
        var { id: n, width: r } = t.payload,
          o = e.yAxis[n];
        if (o) {
          var s,
            l = o.widthHistory || [];
          if (
            l.length === 3 &&
            l[0] === l[2] &&
            r === l[1] &&
            r !== o.width &&
            Math.abs(r - ((s = l[0]) !== null && s !== void 0 ? s : 0)) <= 1
          )
            return;
          var c = [...l, r].slice(-3);
          e.yAxis[n] = jE(jE({}, o), {}, { width: r, widthHistory: c });
        }
      },
    },
  }),
  {
    addXAxis: aq,
    replaceXAxis: sq,
    removeXAxis: lq,
    addYAxis: uq,
    replaceYAxis: cq,
    removeYAxis: fq,
    addZAxis: dq,
    replaceZAxis: hq,
    removeZAxis: pq,
    updateYAxisWidth: mq,
  } = U_.actions,
  y9 = U_.reducer,
  x9 = z([kt], (e) => ({ top: e.top, bottom: e.bottom, left: e.left, right: e.right })),
  w9 = z([x9, Or, _r], (e, t, n) => {
    if (!(!e || t == null || n == null))
      return {
        x: e.left,
        y: e.top,
        width: Math.max(0, t - e.left - e.right),
        height: Math.max(0, n - e.top - e.bottom),
      };
  }),
  W_ = () => Ve(w9),
  NE = (e, t, n) => {
    var r = n ?? e;
    if (!mt(r)) return Vn(r, t, 0);
  },
  b9 = (e, t, n) => {
    var r = {},
      o = e.filter(Bf),
      s = e.filter((d) => d.stackId == null),
      l = o.reduce((d, p) => {
        var m = d[p.stackId];
        return (m == null && (m = []), m.push(p), (d[p.stackId] = m), d);
      }, r),
      c = Object.entries(l).map((d) => {
        var p,
          [m, g] = d,
          x = g.map((w) => w.dataKey),
          b = NE(t, n, (p = g[0]) === null || p === void 0 ? void 0 : p.barSize);
        return { stackId: m, dataKeys: x, barSize: b };
      }),
      f = s.map((d) => {
        var p = [d.dataKey].filter((g) => g != null),
          m = NE(t, n, d.barSize);
        return { stackId: void 0, dataKeys: p, barSize: m };
      });
    return [...c, ...f];
  };
function RE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? RE(Object(n), !0).forEach(function (r) {
          S9(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : RE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function S9(e, t, n) {
  return (
    (t = P9(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function P9(e) {
  var t = E9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E9(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function C9(e, t, n, r, o) {
  var s,
    l = r.length;
  if (!(l < 1)) {
    var c = Vn(e, n, 0, !0),
      f,
      d = [];
    if (_e((s = r[0]) === null || s === void 0 ? void 0 : s.barSize)) {
      var p = !1,
        m = n / l,
        g = r.reduce((A, k) => A + (k.barSize || 0), 0);
      ((g += (l - 1) * c),
        g >= n && ((g -= (l - 1) * c), (c = 0)),
        g >= n && m > 0 && ((p = !0), (m *= 0.9), (g = l * m)));
      var x = ((n - g) / 2) >> 0,
        b = { offset: x - c, size: 0 };
      f = r.reduce((A, k) => {
        var O,
          _ = {
            stackId: k.stackId,
            dataKeys: k.dataKeys,
            position: {
              offset: b.offset + b.size + c,
              size: p ? m : (O = k.barSize) !== null && O !== void 0 ? O : 0,
            },
          },
          I = [...A, _];
        return ((b = _.position), I);
      }, d);
    } else {
      var w = Vn(t, n, 0, !0);
      n - 2 * w - (l - 1) * c <= 0 && (c = 0);
      var S = (n - 2 * w - (l - 1) * c) / l;
      S > 1 && (S >>= 0);
      var C = _e(o) ? Math.min(S, o) : S;
      f = r.reduce(
        (A, k, O) => [
          ...A,
          {
            stackId: k.stackId,
            dataKeys: k.dataKeys,
            position: { offset: w + (S + c) * O + (S - C) / 2, size: C },
          },
        ],
        d,
      );
    }
    return f;
  }
}
var A9 = (e, t, n, r, o, s, l) => {
    var c = mt(l) ? t : l,
      f = C9(n, r, o !== s ? o : s, e, c);
    return (
      o !== s &&
        f != null &&
        (f = f.map((d) =>
          Wu(
            Wu({}, d),
            {},
            { position: Wu(Wu({}, d.position), {}, { offset: d.position.offset - o / 2 }) },
          ),
        )),
      f
    );
  },
  T9 = (e, t) => {
    var n = Rg(t);
    if (!(!e || n == null || t == null)) {
      var { stackId: r } = t;
      if (r != null) {
        var o = e[r];
        if (o) {
          var { stackedData: s } = o;
          if (s) return s.find((l) => l.key === n);
        }
      }
    }
  },
  k9 = (e, t) => {
    if (!(e == null || t == null)) {
      var n = e.find(
        (r) => r.stackId === t.stackId && t.dataKey != null && r.dataKeys.includes(t.dataKey),
      );
      if (n != null) return n.position;
    }
  };
function O9(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && _e(e.zIndex)
    ? e.zIndex
    : t;
}
var _9 = (e) => {
    var { chartData: t } = e,
      n = vt(),
      r = Wn();
    return (
      E.useEffect(
        () =>
          r
            ? () => {}
            : (n(eE(t)),
              () => {
                n(eE(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  LE = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
  K_ = Nt({
    name: "brush",
    initialState: LE,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? LE : t.payload;
      },
    },
  }),
  { setBrushSettings: vq } = K_.actions,
  M9 = K_.reducer,
  I9 = { dots: [], areas: [], lines: [] },
  H_ = Nt({
    name: "referenceElements",
    initialState: I9,
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = bn(e).dots.findIndex((r) => r === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = bn(e).areas.findIndex((r) => r === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = bn(e).lines.findIndex((r) => r === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: gq,
    removeDot: yq,
    addArea: xq,
    removeArea: wq,
    addLine: bq,
    removeLine: Sq,
  } = H_.actions,
  D9 = H_.reducer,
  j9 = E.createContext(void 0),
  N9 = (e) => {
    var { children: t } = e,
      [n] = E.useState("".concat(js("recharts"), "-clip")),
      r = W_();
    if (r == null) return null;
    var { x: o, y: s, width: l, height: c } = r;
    return E.createElement(
      j9.Provider,
      { value: n },
      E.createElement(
        "defs",
        null,
        E.createElement(
          "clipPath",
          { id: n },
          E.createElement("rect", { x: o, y: s, height: c, width: l }),
        ),
      ),
      t,
    );
  },
  R9 = { xAxis: {}, yAxis: {} },
  q_ = Nt({
    name: "renderedTicks",
    initialState: R9,
    reducers: {
      setRenderedTicks: (e, t) => {
        var { axisType: n, axisId: r, ticks: o } = t.payload;
        e[n][r] = o;
      },
      removeRenderedTicks: (e, t) => {
        var { axisType: n, axisId: r } = t.payload;
        delete e[n][r];
      },
    },
  }),
  { setRenderedTicks: Pq, removeRenderedTicks: Eq } = q_.actions,
  L9 = q_.reducer,
  $9 = {},
  Y_ = Nt({
    name: "errorBars",
    initialState: $9,
    reducers: {
      addErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        (e[n] || (e[n] = []), e[n].push(r));
      },
      replaceErrorBar: (e, t) => {
        var { itemId: n, prev: r, next: o } = t.payload;
        e[n] &&
          (e[n] = e[n].map((s) =>
            s.dataKey === r.dataKey && s.direction === r.direction ? o : s,
          ));
      },
      removeErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        e[n] && (e[n] = e[n].filter((o) => o.dataKey !== r.dataKey || o.direction !== r.direction));
      },
    },
  }),
  { addErrorBar: Cq, replaceErrorBar: Aq, removeErrorBar: Tq } = Y_.actions,
  z9 = Y_.reducer,
  F9 = ["children"];
function V9(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = B9(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function B9(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var U9 = {
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
    errorBarOffset: 0,
  },
  W9 = E.createContext(U9);
function K9(e) {
  var { children: t } = e,
    n = V9(e, F9);
  return E.createElement(W9.Provider, { value: n }, t);
}
function G_(e, t) {
  var n,
    r,
    o = Ve((d) => Ir(d, e)),
    s = Ve((d) => Dr(d, t)),
    l =
      (n = o == null ? void 0 : o.allowDataOverflow) !== null && n !== void 0
        ? n
        : vO.allowDataOverflow,
    c =
      (r = s == null ? void 0 : s.allowDataOverflow) !== null && r !== void 0
        ? r
        : gO.allowDataOverflow,
    f = l || c;
  return { needClip: f, needClipX: l, needClipY: c };
}
function H9(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    o = W_(),
    { needClipX: s, needClipY: l, needClip: c } = G_(t, n);
  if (!c || !o) return null;
  var { x: f, y: d, width: p, height: m } = o;
  return E.createElement(
    "clipPath",
    { id: "clipPath-".concat(r) },
    E.createElement("rect", {
      x: s ? f : f - p / 2,
      y: l ? d : d - m / 2,
      width: s ? p : p * 2,
      height: l ? m : m * 2,
    }),
  );
}
function co(e, t) {
  var n, r;
  return (n =
    (r = e.graphicalItems.cartesianItems.find((o) => o.id === t)) === null || r === void 0
      ? void 0
      : r.xAxisId) !== null && n !== void 0
    ? n
    : B_;
}
function fo(e, t) {
  var n, r;
  return (n =
    (r = e.graphicalItems.cartesianItems.find((o) => o.id === t)) === null || r === void 0
      ? void 0
      : r.yAxisId) !== null && n !== void 0
    ? n
    : B_;
}
var q9 = "Invariant failed";
function Y9(e, t) {
  throw new Error(q9);
}
function Mv() {
  return (
    (Mv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mv.apply(null, arguments)
  );
}
function Ay(e) {
  return E.createElement(
    JK,
    Mv(
      {
        shapeType: "rectangle",
        activeClassName: "recharts-active-bar",
        inActiveClassName: "recharts-inactive-bar",
      },
      e,
    ),
  );
}
var G9 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (r, o) => {
      if (Ee(t)) return t;
      var s = Ee(r) || mt(r);
      return s ? t(r, o) : (s || Y9(), n);
    };
  },
  X9 = (e, t, n) => n,
  Z9 = (e, t) => t,
  pl = z([uy, Z9], (e, t) => e.filter((n) => n.type === "bar").find((n) => n.id === t)),
  Q9 = z([pl], (e) => (e == null ? void 0 : e.maxBarSize)),
  J9 = (e, t, n, r) => r,
  eH = z([$e, uy, co, fo, X9], (e, t, n, r, o) =>
    t
      .filter((s) => (e === "horizontal" ? s.xAxisId === n : s.yAxisId === r))
      .filter((s) => s.isPanorama === o)
      .filter((s) => s.hide === !1)
      .filter((s) => s.type === "bar"),
  ),
  tH = (e, t, n) => {
    var r = $e(e),
      o = co(e, t),
      s = fo(e, t);
    if (!(o == null || s == null))
      return r === "horizontal" ? Ov(e, "yAxis", s, n) : Ov(e, "xAxis", o, n);
  },
  nH = (e, t) => {
    var n = $e(e),
      r = co(e, t),
      o = fo(e, t);
    if (!(r == null || o == null))
      return n === "horizontal" ? UP(e, "xAxis", r) : UP(e, "yAxis", o);
  },
  rH = z([eH, $5, nH], b9),
  iH = (e, t, n) => {
    var r,
      o,
      s = pl(e, t);
    if (s == null) return 0;
    var l = co(e, t),
      c = fo(e, t);
    if (l == null || c == null) return 0;
    var f = $e(e),
      d = bk(e),
      { maxBarSize: p } = s,
      m = mt(p) ? d : p,
      g,
      x;
    return (
      f === "horizontal"
        ? ((g = ua(e, "xAxis", l, n)), (x = la(e, "xAxis", l, n)))
        : ((g = ua(e, "yAxis", c, n)), (x = la(e, "yAxis", c, n))),
      (r = (o = UT(g, x, !0)) !== null && o !== void 0 ? o : m) !== null && r !== void 0 ? r : 0
    );
  },
  X_ = (e, t, n) => {
    var r = $e(e),
      o = co(e, t),
      s = fo(e, t);
    if (!(o == null || s == null)) {
      var l, c;
      return (
        r === "horizontal"
          ? ((l = ua(e, "xAxis", o, n)), (c = la(e, "xAxis", o, n)))
          : ((l = ua(e, "yAxis", s, n)), (c = la(e, "yAxis", s, n))),
        UT(l, c)
      );
    }
  },
  oH = z([rH, bk, L5, Sk, iH, X_, Q9], A9),
  aH = (e, t, n) => {
    var r = co(e, t);
    if (r != null) return ua(e, "xAxis", r, n);
  },
  sH = (e, t, n) => {
    var r = fo(e, t);
    if (r != null) return ua(e, "yAxis", r, n);
  },
  lH = (e, t, n) => {
    var r = co(e, t);
    if (r != null) return la(e, "xAxis", r, n);
  },
  uH = (e, t, n) => {
    var r = fo(e, t);
    if (r != null) return la(e, "yAxis", r, n);
  },
  cH = z([oH, pl], k9),
  fH = z([tH, pl], T9),
  dH = z(
    [kt, Sz, aH, sH, lH, uH, cH, $e, O5, X_, fH, pl, J9],
    (e, t, n, r, o, s, l, c, f, d, p, m, g) => {
      var { chartData: x, dataStartIndex: b, dataEndIndex: w } = f;
      if (!(
        m == null ||
        l == null ||
        t == null ||
        (c !== "horizontal" && c !== "vertical") ||
        n == null ||
        r == null ||
        o == null ||
        s == null ||
        d == null
      )) {
        var { data: S } = m,
          C;
        if (
          (S != null && S.length > 0 ? (C = S) : (C = x == null ? void 0 : x.slice(b, w + 1)),
          C != null)
        )
          return FH({
            layout: c,
            barSettings: m,
            pos: l,
            parentViewBox: t,
            bandSize: d,
            xAxis: n,
            yAxis: r,
            xAxisTicks: o,
            yAxisTicks: s,
            stackedData: p,
            displayedData: C,
            offset: e,
            cells: g,
            dataStartIndex: b,
          });
      }
    },
  ),
  hH = ["index"];
function Iv() {
  return (
    (Iv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Iv.apply(null, arguments)
  );
}
function pH(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = mH(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function mH(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Z_ = E.createContext(void 0),
  vH = (e) => {
    var t = E.useContext(Z_);
    if (t != null) return t.stackId;
    if (e != null) return rz(e);
  },
  gH = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t),
  yH = (e) => {
    var t = E.useContext(Z_);
    if (t != null) {
      var { stackId: n } = t;
      return "url(#".concat(gH(n, e), ")");
    }
  },
  Q_ = (e) => {
    var { index: t } = e,
      n = pH(e, hH),
      r = yH(t);
    return E.createElement(Qi, Iv({ className: "recharts-bar-stack-layer", clipPath: r }, n));
  },
  xH = ["onMouseEnter", "onMouseLeave", "onClick"],
  wH = ["value", "background", "tooltipPosition"],
  bH = ["id"],
  SH = ["onMouseEnter", "onClick", "onMouseLeave"];
function fi() {
  return (
    (fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fi.apply(null, arguments)
  );
}
function $E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $E(Object(n), !0).forEach(function (r) {
          PH(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $E(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function PH(e, t, n) {
  return (
    (t = EH(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function EH(e) {
  var t = CH(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CH(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lf(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = AH(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function AH(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var TH = (e) => {
    var { dataKey: t, name: n, fill: r, legendType: o, hide: s } = e;
    return [{ inactive: s, dataKey: t, type: o, color: r, value: WT(n, t), payload: e }];
  },
  kH = E.memo((e) => {
    var {
        dataKey: t,
        stroke: n,
        strokeWidth: r,
        fill: o,
        name: s,
        hide: l,
        unit: c,
        tooltipType: f,
        id: d,
      } = e,
      p = {
        dataDefinedOnItem: void 0,
        getPosition: Qs,
        settings: {
          stroke: n,
          strokeWidth: r,
          fill: o,
          dataKey: t,
          nameKey: void 0,
          name: WT(s, t),
          hide: l,
          type: f,
          color: o,
          unit: c,
          graphicalItemId: d,
        },
      };
    return E.createElement(e9, { tooltipEntrySettings: p });
  });
function OH(e) {
  var t = Ve(fa),
    { data: n, dataKey: r, background: o, allOtherBarProps: s } = e,
    { onMouseEnter: l, onMouseLeave: c, onClick: f } = s,
    d = lf(s, xH),
    p = $_(l, r, s.id),
    m = z_(c),
    g = F_(f, r, s.id);
  if (!o || n == null) return null;
  var x = n$(o);
  return E.createElement(
    hl,
    { zIndex: O9(o, vi.barBackground) },
    n.map((b, w) => {
      var { value: S, background: C, tooltipPosition: A } = b,
        k = lf(b, wH);
      if (!C) return null;
      var O = p(b, w),
        _ = m(b, w),
        I = g(b, w),
        R = $t(
          $t(
            $t($t($t({ option: o, isActive: String(w) === t }, k), {}, { fill: "#eee" }, C), x),
            lT(d, b, w),
          ),
          {},
          {
            onMouseEnter: O,
            onMouseLeave: _,
            onClick: I,
            dataKey: r,
            index: w,
            className: "recharts-bar-background-rectangle",
          },
        );
      return E.createElement(Ay, fi({ key: "background-bar-".concat(w) }, R));
    }),
  );
}
function _H(e) {
  var { showLabels: t, children: n, rects: r } = e,
    o =
      r == null
        ? void 0
        : r.map((s) => {
            var l = {
              x: s.x,
              y: s.y,
              width: s.width,
              lowerWidth: s.width,
              upperWidth: s.width,
              height: s.height,
            };
            return $t(
              $t({}, l),
              {},
              {
                value: s.value,
                payload: s.payload,
                parentViewBox: s.parentViewBox,
                viewBox: l,
                fill: s.fill,
              },
            );
          });
  return E.createElement(CK, { value: t ? o : void 0 }, n);
}
function MH(e) {
  var { shape: t, activeBar: n, baseProps: r, entry: o, index: s, dataKey: l } = e,
    c = Ve(fa),
    f = Ve(m_),
    d = n && String(o.originalDataIndex) === c && (f == null || l === f),
    [p, m] = E.useState(!1),
    [g, x] = E.useState(!1);
  E.useEffect(() => {
    var k;
    return (
      d
        ? (m(!0),
          (k = requestAnimationFrame(() => {
            x(!0);
          })))
        : x(!1),
      () => {
        cancelAnimationFrame(k);
      }
    );
  }, [d]);
  var b = E.useCallback(() => {
      d || m(!1);
    }, [d]),
    w = d && g,
    S = d || p,
    C;
  d ? (n === !0 ? (C = t) : (C = n)) : (C = t);
  var A = E.createElement(
    Ay,
    fi({}, r, { name: String(r.name) }, o, {
      isActive: w,
      option: C,
      index: s,
      dataKey: l,
      onTransitionEnd: b,
    }),
  );
  return S
    ? E.createElement(
        hl,
        { zIndex: vi.activeBar },
        E.createElement(Q_, { index: o.originalDataIndex }, A),
      )
    : A;
}
function IH(e) {
  var { shape: t, baseProps: n, entry: r, index: o, dataKey: s } = e;
  return E.createElement(
    Ay,
    fi({}, n, { name: String(n.name) }, r, { isActive: !1, option: t, index: o, dataKey: s }),
  );
}
function DH(e) {
  var t,
    { data: n, props: r } = e,
    o = (t = Is(r)) !== null && t !== void 0 ? t : {},
    { id: s } = o,
    l = lf(o, bH),
    { shape: c, dataKey: f, activeBar: d } = r,
    { onMouseEnter: p, onClick: m, onMouseLeave: g } = r,
    x = lf(r, SH),
    b = $_(p, f, s),
    w = z_(g),
    S = F_(m, f, s);
  return n
    ? E.createElement(
        E.Fragment,
        null,
        n.map((C, A) =>
          E.createElement(
            Q_,
            fi(
              {
                index: C.originalDataIndex,
                key: "rectangle-"
                  .concat(C == null ? void 0 : C.x, "-")
                  .concat(C == null ? void 0 : C.y, "-")
                  .concat(C == null ? void 0 : C.value, "-")
                  .concat(A),
                className: "recharts-bar-rectangle",
              },
              lT(x, C, A),
              { onMouseEnter: b(C, A), onMouseLeave: w(C, A), onClick: S(C, A) },
            ),
            d
              ? E.createElement(MH, {
                  shape: c,
                  activeBar: d,
                  baseProps: l,
                  entry: C,
                  index: A,
                  dataKey: f,
                })
              : E.createElement(IH, { shape: c, baseProps: l, entry: C, index: A, dataKey: f }),
          ),
        ),
      )
    : null;
}
function jH(e) {
  var { props: t, previousRectanglesRef: n } = e,
    {
      data: r,
      layout: o,
      isAnimationActive: s,
      animationBegin: l,
      animationDuration: c,
      animationEasing: f,
      onAnimationEnd: d,
      onAnimationStart: p,
    } = t,
    m = n.current,
    g = kg(t, "recharts-bar-"),
    [x, b] = E.useState(!1),
    w = !x,
    S = E.useCallback(() => {
      (typeof d == "function" && d(), b(!1));
    }, [d]),
    C = E.useCallback(() => {
      (typeof p == "function" && p(), b(!0));
    }, [p]);
  return E.createElement(
    _H,
    { showLabels: w, rects: r },
    E.createElement(
      Tg,
      {
        animationId: g,
        begin: l,
        duration: c,
        isActive: s,
        easing: f,
        onAnimationEnd: S,
        onAnimationStart: C,
        key: g,
      },
      (A) => {
        var k =
          A === 1
            ? r
            : r == null
              ? void 0
              : r.map((O, _) => {
                  var I = m && m[_];
                  if (I)
                    return $t(
                      $t({}, O),
                      {},
                      {
                        x: At(I.x, O.x, A),
                        y: At(I.y, O.y, A),
                        width: At(I.width, O.width, A),
                        height: At(I.height, O.height, A),
                      },
                    );
                  if (o === "horizontal") {
                    var R = At(0, O.height, A),
                      F = At(O.stackedBarStart, O.y, A);
                    return $t($t({}, O), {}, { y: F, height: R });
                  }
                  var W = At(0, O.width, A),
                    B = At(O.stackedBarStart, O.x, A);
                  return $t($t({}, O), {}, { width: W, x: B });
                });
        return (
          A > 0 && (n.current = k ?? null),
          k == null ? null : E.createElement(Qi, null, E.createElement(DH, { props: t, data: k }))
        );
      },
    ),
    E.createElement(kK, { label: t.label }),
    t.children,
  );
}
function NH(e) {
  var t = E.useRef(null);
  return E.createElement(jH, { previousRectanglesRef: t, props: e });
}
var J_ = 0,
  RH = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: pt(e, t) };
  };
class LH extends E.PureComponent {
  render() {
    var {
      hide: t,
      data: n,
      dataKey: r,
      className: o,
      xAxisId: s,
      yAxisId: l,
      needClip: c,
      background: f,
      id: d,
    } = this.props;
    if (t || n == null) return null;
    var p = un("recharts-bar", o),
      m = d;
    return E.createElement(
      Qi,
      { className: p, id: d },
      c &&
        E.createElement(
          "defs",
          null,
          E.createElement(H9, { clipPathId: m, xAxisId: s, yAxisId: l }),
        ),
      E.createElement(
        Qi,
        {
          className: "recharts-bar-rectangles",
          clipPath: c ? "url(#clipPath-".concat(m, ")") : void 0,
        },
        E.createElement(OH, { data: n, dataKey: r, background: f, allOtherBarProps: this.props }),
        E.createElement(NH, this.props),
      ),
    );
  }
}
var $H = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: J_,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: vi.bar,
};
function zH(e) {
  var {
      xAxisId: t,
      yAxisId: n,
      hide: r,
      legendType: o,
      minPointSize: s,
      activeBar: l,
      animationBegin: c,
      animationDuration: f,
      animationEasing: d,
      isAnimationActive: p,
    } = e,
    { needClip: m } = G_(t, n),
    g = If(),
    x = Wn(),
    b = jK(e.children, P_),
    w = Ve((A) => dH(A, e.id, x, b));
  if (g !== "vertical" && g !== "horizontal") return null;
  var S,
    C = w == null ? void 0 : w[0];
  return (
    C == null || C.height == null || C.width == null
      ? (S = 0)
      : (S = g === "vertical" ? C.height / 2 : C.width / 2),
    E.createElement(
      K9,
      { xAxisId: t, yAxisId: n, data: w, dataPointFormatter: RH, errorBarOffset: S },
      E.createElement(
        LH,
        fi({}, e, {
          layout: g,
          needClip: m,
          data: w,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: o,
          minPointSize: s,
          activeBar: l,
          animationBegin: c,
          animationDuration: f,
          animationEasing: d,
          isAnimationActive: p,
        }),
      ),
    )
  );
}
function FH(e) {
  var {
      layout: t,
      barSettings: { dataKey: n, minPointSize: r, hasCustomShape: o },
      pos: s,
      bandSize: l,
      xAxis: c,
      yAxis: f,
      xAxisTicks: d,
      yAxisTicks: p,
      stackedData: m,
      displayedData: g,
      offset: x,
      cells: b,
      parentViewBox: w,
      dataStartIndex: S,
    } = e,
    C = t === "horizontal" ? f : c,
    A = m ? C.scale.domain() : null,
    k = iz({ numericAxis: C }),
    O = C.scale.map(k);
  return g
    .map((_, I) => {
      var R, F, W, B, q, U;
      if (m) {
        var fe = m[I + S];
        if (fe == null) return null;
        R = Q4(fe, A);
      } else ((R = pt(_, n)), Array.isArray(R) || (R = [k, R]));
      var ie = G9(r, J_)(R[1], I);
      if (t === "horizontal") {
        var ve,
          ye = f.scale.map(R[0]),
          pe = f.scale.map(R[1]);
        if (ye == null || pe == null) return null;
        ((F = Bb({ axis: c, ticks: d, bandSize: l, offset: s.offset, entry: _, index: I })),
          (W = (ve = pe ?? ye) !== null && ve !== void 0 ? ve : void 0),
          (B = s.size));
        var H = ye - pe;
        if (
          ((q = ur(H) ? 0 : H),
          (U = { x: F, y: x.top, width: B, height: x.height }),
          Math.abs(ie) > 0 && Math.abs(q) < Math.abs(ie))
        ) {
          var ne = wn(q || ie) * (Math.abs(ie) - Math.abs(q));
          ((W -= ne), (q += ne));
        }
      } else {
        var X = c.scale.map(R[0]),
          j = c.scale.map(R[1]);
        if (X == null || j == null) return null;
        if (
          ((F = X),
          (W = Bb({ axis: f, ticks: p, bandSize: l, offset: s.offset, entry: _, index: I })),
          (B = j - X),
          (q = s.size),
          (U = { x: x.left, y: W, width: x.width, height: q }),
          Math.abs(ie) > 0 && Math.abs(B) < Math.abs(ie))
        ) {
          var K = wn(B || ie) * (Math.abs(ie) - Math.abs(B));
          B += K;
        }
      }
      if (F == null || W == null || B == null || q == null || (!o && (B === 0 || q === 0)))
        return null;
      var me = $t(
        $t({}, _),
        {},
        {
          stackedBarStart: O,
          x: F,
          y: W,
          width: B,
          height: q,
          value: m ? R : R[1],
          payload: _,
          background: U,
          tooltipPosition: { x: F + B / 2, y: W + q / 2 },
          parentViewBox: w,
          originalDataIndex: I,
        },
        b && b[I] && b[I].props,
      );
      return me;
    })
    .filter(Boolean);
}
function VH(e) {
  var t = pi(e, $H),
    n = vH(t.stackId),
    r = Wn();
  return E.createElement(a9, { id: t.id, type: "bar" }, (o) =>
    E.createElement(
      E.Fragment,
      null,
      E.createElement(t9, { legendPayload: TH(t) }),
      E.createElement(kH, {
        dataKey: t.dataKey,
        stroke: t.stroke,
        strokeWidth: t.strokeWidth,
        fill: t.fill,
        name: t.name,
        hide: t.hide,
        unit: t.unit,
        tooltipType: t.tooltipType,
        id: o,
      }),
      E.createElement(h9, {
        type: "bar",
        id: o,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: n,
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: r,
        hasCustomShape: t.shape != null,
      }),
      E.createElement(hl, { zIndex: t.zIndex }, E.createElement(zH, fi({}, t, { id: o }))),
    ),
  );
}
var eM = E.memo(VH, Ag);
eM.displayName = "Bar";
var BH = (e, t) => t,
  Ty = z([BH, $e, Ik, yt, d_, xi, $6, kt], B6);
function UH(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function ky(e) {
  var t = e.currentTarget.getBoundingClientRect(),
    n,
    r;
  if (UH(e)) {
    var o = e.currentTarget.getBBox();
    ((n = o.width > 0 ? t.width / o.width : 1), (r = o.height > 0 ? t.height / o.height : 1));
  } else {
    var s = e.currentTarget;
    ((n = s.offsetWidth > 0 ? t.width / s.offsetWidth : 1),
      (r = s.offsetHeight > 0 ? t.height / s.offsetHeight : 1));
  }
  var l = (c, f) => ({
    relativeX: Math.round((c - t.left) / n),
    relativeY: Math.round((f - t.top) / r),
  });
  return "touches" in e
    ? Array.from(e.touches).map((c) => l(c.clientX, c.clientY))
    : l(e.clientX, e.clientY);
}
var tM = sn("mouseClick"),
  nM = el();
nM.startListening({
  actionCreator: tM,
  effect: (e, t) => {
    var n = e.payload,
      r = Ty(t.getState(), ky(n));
    (r == null ? void 0 : r.activeIndex) != null &&
      t.dispatch(
        $U({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var Dv = sn("mouseMove"),
  rM = el(),
  Vo = null,
  Ni = null,
  wm = null;
rM.startListening({
  actionCreator: Dv,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      { throttleDelay: o, throttledEvents: s } = r.eventSettings,
      l = s === "all" || (s == null ? void 0 : s.includes("mousemove"));
    (Vo !== null && (cancelAnimationFrame(Vo), (Vo = null)),
      Ni !== null && (typeof o != "number" || !l) && (clearTimeout(Ni), (Ni = null)),
      (wm = ky(n)));
    var c = () => {
      var f = t.getState(),
        d = ed(f, f.tooltip.settings.shared);
      if (!wm) {
        ((Vo = null), (Ni = null));
        return;
      }
      if (d === "axis") {
        var p = Ty(f, wm);
        (p == null ? void 0 : p.activeIndex) != null
          ? t.dispatch(
              n_({
                activeIndex: p.activeIndex,
                activeDataKey: void 0,
                activeCoordinate: p.activeCoordinate,
              }),
            )
          : t.dispatch(t_());
      }
      ((Vo = null), (Ni = null));
    };
    if (!l) {
      c();
      return;
    }
    o === "raf"
      ? (Vo = requestAnimationFrame(c))
      : typeof o == "number" && Ni === null && (Ni = setTimeout(c, o));
  },
});
function WH(e, t) {
  return t instanceof HTMLElement
    ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">')
    : t === window
      ? "global.window"
      : e === "children" && typeof t == "object" && t !== null
        ? "<<CHILDREN>>"
        : t;
}
var zE = {
    accessibilityLayer: !0,
    barCategoryGap: "10%",
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: "none",
    syncId: void 0,
    syncMethod: "index",
    baseValue: void 0,
    reverseStackOrder: !1,
  },
  iM = Nt({
    name: "rootProps",
    initialState: zE,
    reducers: {
      updateOptions: (e, t) => {
        var n;
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = (n = t.payload.barGap) !== null && n !== void 0 ? n : zE.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className),
          (e.baseValue = t.payload.baseValue),
          (e.reverseStackOrder = t.payload.reverseStackOrder));
      },
    },
  }),
  KH = iM.reducer,
  { updateOptions: HH } = iM.actions,
  qH = null,
  YH = {
    updatePolarOptions: (e, t) =>
      e === null
        ? t.payload
        : ((e.startAngle = t.payload.startAngle),
          (e.endAngle = t.payload.endAngle),
          (e.cx = t.payload.cx),
          (e.cy = t.payload.cy),
          (e.innerRadius = t.payload.innerRadius),
          (e.outerRadius = t.payload.outerRadius),
          e),
  },
  oM = Nt({ name: "polarOptions", initialState: qH, reducers: YH }),
  { updatePolarOptions: kq } = oM.actions,
  GH = oM.reducer,
  aM = sn("keyDown"),
  sM = sn("focus"),
  lM = sn("blur"),
  td = el(),
  Bo = null,
  Ri = null,
  Ku = null;
td.startListening({
  actionCreator: aM,
  effect: (e, t) => {
    ((Ku = e.payload), Bo !== null && (cancelAnimationFrame(Bo), (Bo = null)));
    var n = t.getState(),
      { throttleDelay: r, throttledEvents: o } = n.eventSettings,
      s = o === "all" || o.includes("keydown");
    Ri !== null && (typeof r != "number" || !s) && (clearTimeout(Ri), (Ri = null));
    var l = () => {
      try {
        var c = t.getState(),
          f = c.rootProps.accessibilityLayer !== !1;
        if (!f) return;
        var { keyboardInteraction: d } = c.tooltip,
          p = Ku;
        if (p !== "ArrowRight" && p !== "ArrowLeft" && p !== "Enter") return;
        var m = Ts(d, oo(c), sa(c), ca(c)),
          g = m == null ? -1 : Number(m),
          x = !Number.isFinite(g) || g < 0,
          b = xi(c),
          w = oo(c),
          S = ed(c, c.tooltip.settings.shared);
        if (p === "Enter") {
          if (x) return;
          var C = tf(c, S, "hover", String(d.index));
          t.dispatch(ef({ active: !d.active, activeIndex: d.index, activeCoordinate: C }));
          return;
        }
        var A = OU(c),
          k = A === "left-to-right" ? 1 : -1,
          O = p === "ArrowRight" ? 1 : -1,
          _;
        if (x) {
          var I = sa(c),
            R = ca(c),
            F = O * k,
            W = (ie) => ({
              active: !1,
              index: String(ie),
              dataKey: void 0,
              graphicalItemId: void 0,
              coordinate: void 0,
            });
          if (((_ = -1), F > 0)) {
            for (var B = 0; B < w.length; B++)
              if (Ts(W(B), w, I, R) != null) {
                _ = B;
                break;
              }
          } else
            for (var q = w.length - 1; q >= 0; q--)
              if (Ts(W(q), w, I, R) != null) {
                _ = q;
                break;
              }
          if (_ < 0) return;
        } else {
          _ = g + O * k;
          var U = (b == null ? void 0 : b.length) || w.length;
          if (U === 0 || _ >= U || _ < 0) return;
        }
        var fe = tf(c, S, "hover", String(_));
        t.dispatch(ef({ active: !0, activeIndex: _.toString(), activeCoordinate: fe }));
      } finally {
        ((Bo = null), (Ri = null));
      }
    };
    if (!s) {
      l();
      return;
    }
    r === "raf"
      ? (Bo = requestAnimationFrame(l))
      : typeof r == "number" &&
        Ri === null &&
        (l(),
        (Ku = null),
        (Ri = setTimeout(() => {
          Ku ? l() : ((Ri = null), (Bo = null));
        }, r)));
  },
});
td.startListening({
  actionCreator: sM,
  effect: (e, t) => {
    var n = t.getState(),
      r = n.rootProps.accessibilityLayer !== !1;
    if (r) {
      var { keyboardInteraction: o } = n.tooltip;
      if (!o.active && o.index == null) {
        var s = "0",
          l = ed(n, n.tooltip.settings.shared),
          c = tf(n, l, "hover", String(s));
        t.dispatch(ef({ active: !0, activeIndex: s, activeCoordinate: c }));
      }
    }
  },
});
td.startListening({
  actionCreator: lM,
  effect: (e, t) => {
    var n = t.getState(),
      r = n.rootProps.accessibilityLayer !== !1;
    if (r) {
      var { keyboardInteraction: o } = n.tooltip;
      o.active &&
        t.dispatch(ef({ active: !1, activeIndex: o.index, activeCoordinate: o.coordinate }));
    }
  },
});
function uM(e) {
  e.persist();
  var { currentTarget: t } = e;
  return new Proxy(e, {
    get: (n, r) => {
      if (r === "currentTarget") return t;
      var o = Reflect.get(n, r);
      return typeof o == "function" ? o.bind(n) : o;
    },
  });
}
var yn = sn("externalEvent"),
  cM = el(),
  Hu = new Map(),
  xs = new Map(),
  bm = new Map();
cM.startListening({
  actionCreator: yn,
  effect: (e, t) => {
    var { handler: n, reactEvent: r } = e.payload;
    if (n != null) {
      var o = r.type,
        s = uM(r);
      bm.set(o, { handler: n, reactEvent: s });
      var l = Hu.get(o);
      l !== void 0 && (cancelAnimationFrame(l), Hu.delete(o));
      var c = t.getState(),
        { throttleDelay: f, throttledEvents: d } = c.eventSettings,
        p = d,
        m = p === "all" || (p == null ? void 0 : p.includes(o)),
        g = xs.get(o);
      g !== void 0 && (typeof f != "number" || !m) && (clearTimeout(g), xs.delete(o));
      var x = () => {
        var S = bm.get(o);
        try {
          if (!S) return;
          var { handler: C, reactEvent: A } = S,
            k = t.getState(),
            O = {
              activeCoordinate: O6(k),
              activeDataKey: m_(k),
              activeIndex: fa(k),
              activeLabel: p_(k),
              activeTooltipIndex: fa(k),
              isTooltipActive: _6(k),
            };
          C && C(O, A);
        } finally {
          (Hu.delete(o), xs.delete(o), bm.delete(o));
        }
      };
      if (!m) {
        x();
        return;
      }
      if (f === "raf") {
        var b = requestAnimationFrame(x);
        Hu.set(o, b);
      } else if (typeof f == "number") {
        if (!xs.has(o)) {
          x();
          var w = setTimeout(x, f);
          xs.set(o, w);
        }
      } else x();
    }
  },
});
var XH = z([fl], (e) => e.tooltipItemPayloads),
  ZH = z([XH, (e, t) => t, (e, t, n) => n], (e, t, n) => {
    if (t != null) {
      var r = e.find((s) => s.settings.graphicalItemId === n);
      if (r != null) {
        var { getPosition: o } = r;
        if (o != null) return o(t);
      }
    }
  }),
  fM = sn("touchMove"),
  dM = el(),
  Li = null,
  Jr = null,
  FE = null,
  ws = null;
dM.startListening({
  actionCreator: fM,
  effect: (e, t) => {
    var n = e.payload;
    if (!(n.touches == null || n.touches.length === 0)) {
      ws = uM(n);
      var r = t.getState(),
        { throttleDelay: o, throttledEvents: s } = r.eventSettings,
        l = s === "all" || s.includes("touchmove");
      (Li !== null && (cancelAnimationFrame(Li), (Li = null)),
        Jr !== null && (typeof o != "number" || !l) && (clearTimeout(Jr), (Jr = null)),
        (FE = Array.from(n.touches).map((f) =>
          ky({ clientX: f.clientX, clientY: f.clientY, currentTarget: n.currentTarget }),
        )));
      var c = () => {
        if (ws != null) {
          var f = t.getState(),
            d = ed(f, f.tooltip.settings.shared);
          if (d === "axis") {
            var p,
              m = (p = FE) === null || p === void 0 ? void 0 : p[0];
            if (m == null) {
              ((Li = null), (Jr = null));
              return;
            }
            var g = Ty(f, m);
            (g == null ? void 0 : g.activeIndex) != null &&
              t.dispatch(
                n_({
                  activeIndex: g.activeIndex,
                  activeDataKey: void 0,
                  activeCoordinate: g.activeCoordinate,
                }),
              );
          } else if (d === "item") {
            var x,
              b = ws.touches[0];
            if (document.elementFromPoint == null || b == null) return;
            var w = document.elementFromPoint(b.clientX, b.clientY);
            if (!w || !w.getAttribute) return;
            var S = w.getAttribute(fz),
              C = (x = w.getAttribute(dz)) !== null && x !== void 0 ? x : void 0,
              A = uo(f).find((_) => _.id === C);
            if (S == null || A == null || C == null) return;
            var { dataKey: k } = A,
              O = ZH(f, S, C);
            t.dispatch(
              e_({
                activeDataKey: k,
                activeIndex: S,
                activeCoordinate: O,
                activeGraphicalItemId: C,
              }),
            );
          }
          ((Li = null), (Jr = null));
        }
      };
      if (!l) {
        c();
        return;
      }
      o === "raf"
        ? (Li = requestAnimationFrame(c))
        : typeof o == "number" &&
          Jr === null &&
          (c(),
          (ws = null),
          (Jr = setTimeout(() => {
            ws ? c() : ((Jr = null), (Li = null));
          }, o)));
    }
  },
});
var hM = {
    throttleDelay: "raf",
    throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"],
  },
  pM = Nt({
    name: "eventSettings",
    initialState: hM,
    reducers: {
      setEventSettings: (e, t) => {
        (t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay),
          t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents));
      },
    },
  }),
  { setEventSettings: QH } = pM.actions,
  JH = pM.reducer,
  e7 = pT({
    brush: M9,
    cartesianAxis: y9,
    chartData: dW,
    errorBars: z9,
    eventSettings: JH,
    graphicalItems: f9,
    layout: q4,
    legend: aF,
    options: lW,
    polarAxis: _K,
    polarOptions: GH,
    referenceElements: D9,
    renderedTicks: L9,
    rootProps: KH,
    tooltip: zU,
    zIndex: tW,
  }),
  t7 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
    return y4({
      reducer: e7,
      preloadedState: t,
      middleware: (r) => {
        var o;
        return r({
          serializableCheck: !1,
          immutableCheck: !["commonjs", "es6", "production"].includes(
            (o = "es6") !== null && o !== void 0 ? o : "",
          ),
        }).concat([nM.middleware, rM.middleware, td.middleware, cM.middleware, dM.middleware]);
      },
      enhancers: (r) => {
        var o = r;
        return (typeof r == "function" && (o = r()), o.concat(OT({ type: "raf" })));
      },
      devTools: { serialize: { replacer: WH }, name: "recharts-".concat(n) },
    });
  };
function n7(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    o = Wn(),
    s = E.useRef(null);
  if (o) return n;
  s.current == null && (s.current = t7(t, r));
  var l = pg;
  return E.createElement(SF, { context: l, store: s.current }, n);
}
function r7(e) {
  var { layout: t, margin: n } = e,
    r = vt(),
    o = Wn();
  return (
    E.useEffect(() => {
      o || (r(W4(t)), r(U4(n)));
    }, [r, o, t, n]),
    null
  );
}
var i7 = E.memo(r7, Ag);
function o7(e) {
  var t = vt();
  return (
    E.useEffect(() => {
      t(HH(e));
    }, [t, e]),
    null
  );
}
var a7 = (e) => {
    var t = vt();
    return (
      E.useEffect(() => {
        t(QH(e));
      }, [t, e]),
      null
    );
  },
  s7 = E.memo(a7, Ag);
function VE(e) {
  var { zIndex: t, isPanorama: n } = e,
    r = E.useRef(null),
    o = vt();
  return (
    E.useLayoutEffect(
      () => (
        r.current && o(J6({ zIndex: t, element: r.current, isPanorama: n })),
        () => {
          o(eW({ zIndex: t, isPanorama: n }));
        }
      ),
      [o, t, n],
    ),
    E.createElement("g", { tabIndex: -1, ref: r, className: "recharts-zIndex-layer_".concat(t) })
  );
}
function BE(e) {
  var { children: t, isPanorama: n } = e,
    r = Ve(W6);
  if (!r || r.length === 0) return t;
  var o = r.filter((l) => l < 0),
    s = r.filter((l) => l > 0);
  return E.createElement(
    E.Fragment,
    null,
    o.map((l) => E.createElement(VE, { key: l, zIndex: l, isPanorama: n })),
    t,
    s.map((l) => E.createElement(VE, { key: l, zIndex: l, isPanorama: n })),
  );
}
var l7 = ["children"];
function u7(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = c7(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function c7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function uf() {
  return (
    (uf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uf.apply(null, arguments)
  );
}
var f7 = { width: "100%", height: "100%", display: "block" },
  d7 = E.forwardRef((e, t) => {
    var n = Bz(),
      r = Uz(),
      o = TF();
    if (!ci(n) || !ci(r)) return null;
    var { children: s, otherAttributes: l, title: c, desc: f } = e,
      d,
      p;
    return (
      l != null &&
        (typeof l.tabIndex == "number" ? (d = l.tabIndex) : (d = o ? 0 : void 0),
        typeof l.role == "string" ? (p = l.role) : (p = o ? "application" : void 0)),
      E.createElement(
        FA,
        uf({}, l, {
          title: c,
          desc: f,
          role: p,
          tabIndex: d,
          width: n,
          height: r,
          style: f7,
          ref: t,
        }),
        s,
      )
    );
  }),
  h7 = (e) => {
    var { children: t } = e,
      n = Ve(Mf);
    if (!n) return null;
    var { width: r, height: o, y: s, x: l } = n;
    return E.createElement(FA, { width: r, height: o, x: l, y: s }, t);
  },
  UE = E.forwardRef((e, t) => {
    var { children: n } = e,
      r = u7(e, l7),
      o = Wn();
    return o
      ? E.createElement(h7, null, E.createElement(BE, { isPanorama: !0 }, n))
      : E.createElement(d7, uf({ ref: t }, r), E.createElement(BE, { isPanorama: !1 }, n));
  });
function p7() {
  var e = vt(),
    [t, n] = E.useState(null),
    r = Ve(cz);
  return (
    E.useEffect(() => {
      if (t != null) {
        var o = t.getBoundingClientRect(),
          s = o.width / t.offsetWidth;
        _e(s) && s !== r && e(H4(s));
      }
    }, [t, e, r]),
    n
  );
}
function WE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function m7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? WE(Object(n), !0).forEach(function (r) {
          v7(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : WE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function v7(e, t, n) {
  return (
    (t = g7(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function g7(e) {
  var t = y7(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function si() {
  return (
    (si = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    si.apply(null, arguments)
  );
}
var x7 = () => (bW(), null);
function cf(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var w7 = E.forwardRef((e, t) => {
    var n,
      r,
      o = E.useRef(null),
      [s, l] = E.useState({
        containerWidth: cf((n = e.style) === null || n === void 0 ? void 0 : n.width),
        containerHeight: cf((r = e.style) === null || r === void 0 ? void 0 : r.height),
      }),
      c = E.useCallback((d, p) => {
        l((m) => {
          var g = Math.round(d),
            x = Math.round(p);
          return m.containerWidth === g && m.containerHeight === x
            ? m
            : { containerWidth: g, containerHeight: x };
        });
      }, []),
      f = E.useCallback(
        (d) => {
          if (
            (typeof t == "function" && t(d),
            o.current != null && (o.current.disconnect(), (o.current = null)),
            d != null && typeof ResizeObserver < "u")
          ) {
            var { width: p, height: m } = d.getBoundingClientRect();
            c(p, m);
            var g = (b) => {
                var w = b[0];
                if (w != null) {
                  var { width: S, height: C } = w.contentRect;
                  c(S, C);
                }
              },
              x = new ResizeObserver(g);
            (x.observe(d), (o.current = x));
          }
        },
        [t, c],
      );
    return (
      E.useEffect(
        () => () => {
          var d = o.current;
          d != null && d.disconnect();
        },
        [c],
      ),
      E.createElement(
        E.Fragment,
        null,
        E.createElement(nl, { width: s.containerWidth, height: s.containerHeight }),
        E.createElement("div", si({ ref: f }, e)),
      )
    );
  }),
  b7 = E.forwardRef((e, t) => {
    var { width: n, height: r } = e,
      [o, s] = E.useState({ containerWidth: cf(n), containerHeight: cf(r) }),
      l = E.useCallback((f, d) => {
        s((p) => {
          var m = Math.round(f),
            g = Math.round(d);
          return p.containerWidth === m && p.containerHeight === g
            ? p
            : { containerWidth: m, containerHeight: g };
        });
      }, []),
      c = E.useCallback(
        (f) => {
          if ((typeof t == "function" && t(f), f != null)) {
            var { width: d, height: p } = f.getBoundingClientRect();
            l(d, p);
          }
        },
        [t, l],
      );
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(nl, { width: o.containerWidth, height: o.containerHeight }),
      E.createElement("div", si({ ref: c }, e)),
    );
  }),
  S7 = E.forwardRef((e, t) => {
    var { width: n, height: r } = e;
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(nl, { width: n, height: r }),
      E.createElement("div", si({ ref: t }, e)),
    );
  }),
  P7 = E.forwardRef((e, t) => {
    var { width: n, height: r } = e;
    return typeof n == "string" || typeof r == "string"
      ? E.createElement(b7, si({}, e, { ref: t }))
      : typeof n == "number" && typeof r == "number"
        ? E.createElement(S7, si({}, e, { width: n, height: r, ref: t }))
        : E.createElement(
            E.Fragment,
            null,
            E.createElement(nl, { width: n, height: r }),
            E.createElement("div", si({ ref: t }, e)),
          );
  });
function E7(e) {
  return e ? w7 : P7;
}
var C7 = E.forwardRef((e, t) => {
    var {
        children: n,
        className: r,
        height: o,
        onClick: s,
        onContextMenu: l,
        onDoubleClick: c,
        onMouseDown: f,
        onMouseEnter: d,
        onMouseLeave: p,
        onMouseMove: m,
        onMouseUp: g,
        onTouchEnd: x,
        onTouchMove: b,
        onTouchStart: w,
        style: S,
        width: C,
        responsive: A,
        dispatchTouchEvents: k = !0,
      } = e,
      O = E.useRef(null),
      _ = vt(),
      [I, R] = E.useState(null),
      [F, W] = E.useState(null),
      B = p7(),
      q = Sg(),
      U = (q == null ? void 0 : q.width) > 0 ? q.width : C,
      fe = (q == null ? void 0 : q.height) > 0 ? q.height : o,
      ie = E.useCallback(
        (te) => {
          (B(te), typeof t == "function" && t(te), R(te), W(te), te != null && (O.current = te));
        },
        [B, t, R, W],
      ),
      ve = E.useCallback(
        (te) => {
          (_(tM(te)), _(yn({ handler: s, reactEvent: te })));
        },
        [_, s],
      ),
      ye = E.useCallback(
        (te) => {
          (_(Dv(te)), _(yn({ handler: d, reactEvent: te })));
        },
        [_, d],
      ),
      pe = E.useCallback(
        (te) => {
          (_(t_()), _(yn({ handler: p, reactEvent: te })));
        },
        [_, p],
      ),
      H = E.useCallback(
        (te) => {
          (_(Dv(te)), _(yn({ handler: m, reactEvent: te })));
        },
        [_, m],
      ),
      ne = E.useCallback(() => {
        _(sM());
      }, [_]),
      X = E.useCallback(() => {
        _(lM());
      }, [_]),
      j = E.useCallback(
        (te) => {
          _(aM(te.key));
        },
        [_],
      ),
      K = E.useCallback(
        (te) => {
          _(yn({ handler: l, reactEvent: te }));
        },
        [_, l],
      ),
      me = E.useCallback(
        (te) => {
          _(yn({ handler: c, reactEvent: te }));
        },
        [_, c],
      ),
      xe = E.useCallback(
        (te) => {
          _(yn({ handler: f, reactEvent: te }));
        },
        [_, f],
      ),
      we = E.useCallback(
        (te) => {
          _(yn({ handler: g, reactEvent: te }));
        },
        [_, g],
      ),
      Pe = E.useCallback(
        (te) => {
          _(yn({ handler: w, reactEvent: te }));
        },
        [_, w],
      ),
      Me = E.useCallback(
        (te) => {
          (k && _(fM(te)), _(yn({ handler: b, reactEvent: te })));
        },
        [_, k, b],
      ),
      Ae = E.useCallback(
        (te) => {
          _(yn({ handler: x, reactEvent: te }));
        },
        [_, x],
      ),
      J = E7(A);
    return E.createElement(
      nW.Provider,
      { value: I },
      E.createElement(
        c$.Provider,
        { value: F },
        E.createElement(
          J,
          {
            width: U ?? (S == null ? void 0 : S.width),
            height: fe ?? (S == null ? void 0 : S.height),
            className: un("recharts-wrapper", r),
            style: m7({ position: "relative", cursor: "default", width: U, height: fe }, S),
            onClick: ve,
            onContextMenu: K,
            onDoubleClick: me,
            onFocus: ne,
            onBlur: X,
            onKeyDown: j,
            onMouseDown: xe,
            onMouseEnter: ye,
            onMouseLeave: pe,
            onMouseMove: H,
            onMouseUp: we,
            onTouchEnd: Ae,
            onTouchMove: Me,
            onTouchStart: Pe,
            ref: ie,
          },
          E.createElement(x7, null),
          n,
        ),
      ),
    );
  }),
  A7 = [
    "width",
    "height",
    "responsive",
    "children",
    "className",
    "style",
    "compact",
    "title",
    "desc",
  ];
function T7(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = k7(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function k7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var O7 = E.forwardRef((e, t) => {
  var {
      width: n,
      height: r,
      responsive: o,
      children: s,
      className: l,
      style: c,
      compact: f,
      title: d,
      desc: p,
    } = e,
    m = T7(e, A7),
    g = Is(m);
  return f
    ? E.createElement(
        E.Fragment,
        null,
        E.createElement(nl, { width: n, height: r }),
        E.createElement(UE, { otherAttributes: g, title: d, desc: p }, s),
      )
    : E.createElement(
        C7,
        {
          className: l,
          style: c,
          width: n,
          height: r,
          responsive: o ?? !1,
          onClick: e.onClick,
          onMouseLeave: e.onMouseLeave,
          onMouseEnter: e.onMouseEnter,
          onMouseMove: e.onMouseMove,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onContextMenu: e.onContextMenu,
          onDoubleClick: e.onDoubleClick,
          onTouchStart: e.onTouchStart,
          onTouchMove: e.onTouchMove,
          onTouchEnd: e.onTouchEnd,
        },
        E.createElement(
          UE,
          { otherAttributes: g, title: d, desc: p, ref: t },
          E.createElement(N9, null, s),
        ),
      );
});
function jv() {
  return (
    (jv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jv.apply(null, arguments)
  );
}
function KE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? KE(Object(n), !0).forEach(function (r) {
          M7(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KE(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function M7(e, t, n) {
  return (
    (t = I7(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function I7(e) {
  var t = D7(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var j7 = { top: 5, right: 5, bottom: 5, left: 5 },
  N7 = _7(
    {
      accessibilityLayer: !0,
      barCategoryGap: "10%",
      barGap: 4,
      layout: "horizontal",
      margin: j7,
      responsive: !1,
      reverseStackOrder: !1,
      stackOffset: "none",
      syncMethod: "index",
    },
    hM,
  ),
  R7 = E.forwardRef(function (t, n) {
    var r,
      o = pi(t.categoricalChartProps, N7),
      {
        chartName: s,
        defaultTooltipEventType: l,
        validateTooltipEventTypes: c,
        tooltipPayloadSearcher: f,
        categoricalChartProps: d,
      } = t,
      p = {
        chartName: s,
        defaultTooltipEventType: l,
        validateTooltipEventTypes: c,
        tooltipPayloadSearcher: f,
        eventEmitter: void 0,
      };
    return E.createElement(
      n7,
      {
        preloadedState: { options: p },
        reduxStoreName: (r = d.id) !== null && r !== void 0 ? r : s,
      },
      E.createElement(_9, { chartData: d.data }),
      E.createElement(i7, { layout: o.layout, margin: o.margin }),
      E.createElement(s7, { throttleDelay: o.throttleDelay, throttledEvents: o.throttledEvents }),
      E.createElement(o7, {
        baseValue: o.baseValue,
        accessibilityLayer: o.accessibilityLayer,
        barCategoryGap: o.barCategoryGap,
        maxBarSize: o.maxBarSize,
        stackOffset: o.stackOffset,
        barGap: o.barGap,
        barSize: o.barSize,
        syncId: o.syncId,
        syncMethod: o.syncMethod,
        className: o.className,
        reverseStackOrder: o.reverseStackOrder,
      }),
      E.createElement(O7, jv({}, o, { ref: n })),
    );
  }),
  L7 = ["axis", "item"],
  $7 = E.forwardRef((e, t) =>
    E.createElement(R7, {
      chartName: "BarChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: L7,
      tooltipPayloadSearcher: aW,
      categoricalChartProps: e,
      ref: t,
    }),
  );
function z7(e) {
  const { x: t = 0, y: n = 0, width: r = 0, height: o = 0 } = e;
  return N.jsxs("g", {
    children: [
      N.jsx("rect", { x: t, y: n, width: r, height: o, fill: "#141414", fillOpacity: 0.05 }),
      N.jsx("rect", { x: t, y: n, width: r, height: 2, fill: "#141414" }),
    ],
  });
}
function F7() {
  return N.jsx("section", {
    id: "investment",
    className: "px-5 py-20 md:px-10 md:py-28",
    children: N.jsxs("div", {
      className: "mx-auto max-w-7xl",
      children: [
        N.jsxs("div", {
          className: "mb-14 grid grid-cols-1 gap-8 md:grid-cols-12",
          children: [
            N.jsx("h2", {
              className:
                "text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-6 md:text-5xl",
              "data-editable": !0,
              "data-preset-text": "investment-headline",
              children: "Trusted frameworks for secure growth",
            }),
            N.jsxs("div", {
              className:
                "space-y-4 text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-5 md:col-start-8",
              children: [
                N.jsx("p", {
                  "data-editable": !0,
                  children:
                    "Our holdings go beyond floor plans; they represent a vehicle for your wealth to thrive consistently.",
                }),
                N.jsx("p", {
                  "data-editable": !0,
                  children:
                    "We meticulously vet the premier market offerings for our valued partners.",
                }),
              ],
            }),
          ],
        }),
        N.jsx("div", {
          className: "grid gap-6 md:grid-cols-3",
          children: GL.map((e) => {
            const t = e.data.map((n, r) => ({ index: r, value: n }));
            return N.jsxs(
              "div",
              {
                className:
                  "flex aspect-video flex-col justify-between bg-white p-6 md:aspect-[1.8/1]",
                children: [
                  N.jsxs("div", {
                    children: [
                      N.jsx("p", {
                        className:
                          "text-[12px] font-medium uppercase tracking-tight text-[#141414]/40",
                        "data-editable": !0,
                        children: e.title,
                      }),
                      N.jsx("p", {
                        className: "mt-2 text-4xl font-medium text-[#141414]",
                        "data-editable": !0,
                        children: e.value,
                      }),
                    ],
                  }),
                  N.jsx("div", {
                    className: "h-24 w-full",
                    children: N.jsx(Vz, {
                      width: "100%",
                      height: "100%",
                      children: N.jsx($7, {
                        data: t,
                        margin: { top: 0, right: 0, left: 0, bottom: 0 },
                        children: N.jsx(eM, { dataKey: "value", shape: N.jsx(z7, {}) }),
                      }),
                    }),
                  }),
                ],
              },
              e.title,
            );
          }),
        }),
      ],
    }),
  });
}
function mM({ property: e }) {
  const t = [
    { icon: NL, label: `${e.area} m²` },
    { icon: DL, label: `${e.floors} floor${e.floors > 1 ? "s" : ""}` },
    { icon: ML, label: `${e.beds} beds` },
    { icon: _L, label: `${e.baths} bath${e.baths > 1 ? "s" : ""}` },
  ];
  return N.jsxs("article", {
    className: "group bg-white",
    children: [
      N.jsx("div", {
        className: "aspect-[4/3] overflow-hidden md:aspect-square",
        children: N.jsx("img", {
          src: e.image,
          alt: e.title,
          className:
            "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
        }),
      }),
      N.jsxs("div", {
        className: "space-y-3 p-5 md:p-6",
        children: [
          N.jsxs("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              N.jsx("h3", {
                className: "text-lg font-medium tracking-tight text-[#141414]",
                "data-editable": !0,
                children: e.title,
              }),
              N.jsx("p", {
                className: "shrink-0 text-[15px] font-medium text-[#141414]",
                "data-editable": !0,
                children: e.price,
              }),
            ],
          }),
          N.jsx("p", {
            className: "text-[12px] text-[#A5A5A5]",
            "data-editable": !0,
            children: e.location,
          }),
          N.jsx("div", {
            className: "flex flex-wrap items-center gap-x-4 gap-y-2",
            children: t.map(({ icon: n, label: r }) =>
              N.jsxs(
                "span",
                {
                  className: "flex items-center gap-1.5 text-[11px] font-medium text-[#141414]",
                  children: [
                    N.jsx(n, { className: "size-[13px] text-[#A5A5A5]", strokeWidth: 2.5 }),
                    r,
                  ],
                },
                r,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function V7() {
  return N.jsx("section", {
    id: "properties",
    className: "px-5 py-20 md:px-10 md:py-28",
    children: N.jsxs("div", {
      className: "mx-auto max-w-7xl",
      children: [
        N.jsxs("div", {
          className: "mb-14 grid grid-cols-1 gap-8 md:grid-cols-12",
          children: [
            N.jsx("h2", {
              className:
                "text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-8 md:text-5xl",
              "data-editable": !0,
              "data-preset-text": "properties-headline",
              children: "Guiding you toward the residence of your dreams",
            }),
            N.jsx("p", {
              className: "text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-4 md:col-start-9",
              "data-editable": !0,
              "data-preset-text": "properties-subcopy",
              children:
                "Our vision bridges balance, design, and attention so that every client resides in a space reflecting their values.",
            }),
          ],
        }),
        N.jsx("div", {
          className: "grid gap-8 md:grid-cols-3",
          children: qm.map((e, t) =>
            N.jsx(
              oi.div,
              {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { delay: t * 0.15, duration: 0.7 },
                children: N.jsx(mM, { property: e }),
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  });
}
function HE() {
  return N.jsxs(N.Fragment, {
    children: [N.jsx(XL, {}), N.jsx(V7, {}), N.jsx(QL, {}), N.jsx(F7, {})],
  });
}
const B7 = [
  { name: "Fixed 30-year", rate: "6.12%", note: "Stable payments for primary residences" },
  { name: "ARM 7/1", rate: "5.48%", note: "Lower intro rate with annual cap protection" },
  {
    name: "Portfolio line",
    rate: "Custom",
    note: "For investors holding multiple Zenith listings",
  },
];
function U7() {
  return N.jsx(va, {
    title: "Mortgage guidance",
    subtitle:
      "Partner lenders, transparent terms, and advisors who align financing with your property goals.",
    children: N.jsx("div", {
      className: "grid gap-6 md:grid-cols-3",
      children: B7.map((e) =>
        N.jsxs(
          "article",
          {
            className: "bg-white p-8",
            children: [
              N.jsx("p", {
                className: "text-[12px] font-medium uppercase tracking-tight text-[#141414]/40",
                children: e.name,
              }),
              N.jsx("p", {
                className: "mt-3 text-3xl font-medium text-[#141414]",
                children: e.rate,
              }),
              N.jsx("p", {
                className: "mt-4 text-[14px] leading-relaxed text-[#A5A5A5]",
                children: e.note,
              }),
            ],
          },
          e.name,
        ),
      ),
    }),
  });
}
function W7() {
  return N.jsx(va, {
    title: "Curated properties",
    subtitle: "Browse residences selected for design integrity, location, and long-term value.",
    children: N.jsx("div", {
      className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
      children: [...qm, ...qm].map((e, t) =>
        N.jsx(
          oi.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { delay: (t % 3) * 0.1, duration: 0.6 },
            children: N.jsx(mM, { property: e }),
          },
          `${e.title}-${t}`,
        ),
      ),
    }),
  });
}
function K7() {
  return (
    E.useEffect(() => {
      XE();
    }, []),
    N.jsxs("div", {
      className: "min-h-screen bg-[#F8F8F8] font-lato text-[#141414]",
      children: [
        N.jsx(LL, {}),
        N.jsx(kI, {
          routes: {
            "": N.jsx(HE, {}),
            home: N.jsx(HE, {}),
            properties: N.jsx(W7, {}),
            mortgage: N.jsx(U7, {}),
            company: N.jsx(BL, {}),
            careers: N.jsx(VL, {}),
            blog: N.jsx(zL, {}),
            contact: N.jsx(UL, {}),
          },
        }),
      ],
    })
  );
}
EI.createRoot(document.getElementById("root")).render(
  N.jsx(E.StrictMode, { children: N.jsx(K7, {}) }),
);
