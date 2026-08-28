(function () {
  const B = document.createElement("link").relList;
  if (B && B.supports && B.supports("modulepreload")) return;
  for (const V of document.querySelectorAll('link[rel="modulepreload"]')) Pe(V);
  new MutationObserver((V) => {
    for (const X of V)
      if (X.type === "childList")
        for (const fe of X.addedNodes)
          fe.tagName === "LINK" && fe.rel === "modulepreload" && Pe(fe);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(V) {
    const X = {};
    return (
      V.integrity && (X.integrity = V.integrity),
      V.referrerPolicy && (X.referrerPolicy = V.referrerPolicy),
      V.crossOrigin === "use-credentials"
        ? (X.credentials = "include")
        : V.crossOrigin === "anonymous"
          ? (X.credentials = "omit")
          : (X.credentials = "same-origin"),
      X
    );
  }
  function Pe(V) {
    if (V.ep) return;
    V.ep = !0;
    const X = m(V);
    fetch(V.href, X);
  }
})();
var Ei = { exports: {} },
  yr = {},
  _i = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Of() {
  if (_a) return M;
  _a = 1;
  var P = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    Pe = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    fe = Symbol.for("react.context"),
    de = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    _e = Symbol.for("react.memo"),
    ge = Symbol.for("react.lazy"),
    te = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (te && c[te]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    q = {};
  function Q(c, y, O) {
    ((this.props = c), (this.context = y), (this.refs = q), (this.updater = O || We));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (Q.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function vt() {}
  vt.prototype = Q.prototype;
  function st(c, y, O) {
    ((this.props = c), (this.context = y), (this.refs = q), (this.updater = O || We));
  }
  var qe = (st.prototype = new vt());
  ((qe.constructor = st), $e(qe, Q.prototype), (qe.isPureReactComponent = !0));
  var xe = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, y, O) {
    var D,
      F = {},
      U = null,
      K = null;
    if (y != null)
      for (D in (y.ref !== void 0 && (K = y.ref), y.key !== void 0 && (U = "" + y.key), y))
        be.call(y, D) && !Le.hasOwnProperty(D) && (F[D] = y[D]);
    var H = arguments.length - 2;
    if (H === 1) F.children = O;
    else if (1 < H) {
      for (var b = Array(H), Ue = 0; Ue < H; Ue++) b[Ue] = arguments[Ue + 2];
      F.children = b;
    }
    if (c && c.defaultProps) for (D in ((H = c.defaultProps), H)) F[D] === void 0 && (F[D] = H[D]);
    return { $$typeof: P, type: c, key: U, ref: K, props: F, _owner: Ne.current };
  }
  function Ct(c, y) {
    return { $$typeof: P, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === P;
  }
  function Kt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (O) {
        return y[O];
      })
    );
  }
  var at = /\/+/g;
  function Fe(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Kt("" + c.key) : y.toString(36);
  }
  function et(c, y, O, D, F) {
    var U = typeof c;
    (U === "undefined" || U === "boolean") && (c = null);
    var K = !1;
    if (c === null) K = !0;
    else
      switch (U) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case P:
            case B:
              K = !0;
          }
      }
    if (K)
      return (
        (K = c),
        (F = F(K)),
        (c = D === "" ? "." + Fe(K, 0) : D),
        xe(F)
          ? ((O = ""),
            c != null && (O = c.replace(at, "$&/") + "/"),
            et(F, y, O, "", function (Ue) {
              return Ue;
            }))
          : F != null &&
            (yt(F) &&
              (F = Ct(
                F,
                O +
                  (!F.key || (K && K.key === F.key) ? "" : ("" + F.key).replace(at, "$&/") + "/") +
                  c,
              )),
            y.push(F)),
        1
      );
    if (((K = 0), (D = D === "" ? "." : D + ":"), xe(c)))
      for (var H = 0; H < c.length; H++) {
        U = c[H];
        var b = D + Fe(U, H);
        K += et(U, y, O, b, F);
      }
    else if (((b = J(c)), typeof b == "function"))
      for (c = b.call(c), H = 0; !(U = c.next()).done;)
        ((U = U.value), (b = D + Fe(U, H++)), (K += et(U, y, O, b, F)));
    else if (U === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return K;
  }
  function ct(c, y, O) {
    if (c == null) return c;
    var D = [],
      F = 0;
    return (
      et(c, D, "", "", function (U) {
        return y.call(O, U, F++);
      }),
      D
    );
  }
  function je(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = O));
          },
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = O));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var le = { current: null },
    k = { transition: null },
    T = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ne };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (M.Children = {
      map: ct,
      forEach: function (c, y, O) {
        ct(
          c,
          function () {
            y.apply(this, arguments);
          },
          O,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          ct(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          ct(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (M.Component = Q),
    (M.Fragment = m),
    (M.Profiler = V),
    (M.PureComponent = st),
    (M.StrictMode = Pe),
    (M.Suspense = $),
    (M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (M.act = _),
    (M.cloneElement = function (c, y, O) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var D = $e({}, c.props),
        F = c.key,
        U = c.ref,
        K = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((U = y.ref), (K = Ne.current)),
          y.key !== void 0 && (F = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var H = c.type.defaultProps;
        for (b in y)
          be.call(y, b) &&
            !Le.hasOwnProperty(b) &&
            (D[b] = y[b] === void 0 && H !== void 0 ? H[b] : y[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) D.children = O;
      else if (1 < b) {
        H = Array(b);
        for (var Ue = 0; Ue < b; Ue++) H[Ue] = arguments[Ue + 2];
        D.children = H;
      }
      return { $$typeof: P, type: c.type, key: F, ref: U, props: D, _owner: K };
    }),
    (M.createContext = function (c) {
      return (
        (c = {
          $$typeof: fe,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: X, _context: c }),
        (c.Consumer = c)
      );
    }),
    (M.createElement = Qe),
    (M.createFactory = function (c) {
      var y = Qe.bind(null, c);
      return ((y.type = c), y);
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (c) {
      return { $$typeof: de, render: c };
    }),
    (M.isValidElement = yt),
    (M.lazy = function (c) {
      return { $$typeof: ge, _payload: { _status: -1, _result: c }, _init: je };
    }),
    (M.memo = function (c, y) {
      return { $$typeof: _e, type: c, compare: y === void 0 ? null : y };
    }),
    (M.startTransition = function (c) {
      var y = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = y;
      }
    }),
    (M.unstable_act = _),
    (M.useCallback = function (c, y) {
      return le.current.useCallback(c, y);
    }),
    (M.useContext = function (c) {
      return le.current.useContext(c);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (c) {
      return le.current.useDeferredValue(c);
    }),
    (M.useEffect = function (c, y) {
      return le.current.useEffect(c, y);
    }),
    (M.useId = function () {
      return le.current.useId();
    }),
    (M.useImperativeHandle = function (c, y, O) {
      return le.current.useImperativeHandle(c, y, O);
    }),
    (M.useInsertionEffect = function (c, y) {
      return le.current.useInsertionEffect(c, y);
    }),
    (M.useLayoutEffect = function (c, y) {
      return le.current.useLayoutEffect(c, y);
    }),
    (M.useMemo = function (c, y) {
      return le.current.useMemo(c, y);
    }),
    (M.useReducer = function (c, y, O) {
      return le.current.useReducer(c, y, O);
    }),
    (M.useRef = function (c) {
      return le.current.useRef(c);
    }),
    (M.useState = function (c) {
      return le.current.useState(c);
    }),
    (M.useSyncExternalStore = function (c, y, O) {
      return le.current.useSyncExternalStore(c, y, O);
    }),
    (M.useTransition = function () {
      return le.current.useTransition();
    }),
    (M.version = "18.3.1"),
    M
  );
}
var Na;
function Pi() {
  return (Na || ((Na = 1), (_i.exports = Of())), _i.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Mf() {
  if (Ca) return yr;
  Ca = 1;
  var P = Pi(),
    B = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    Pe = Object.prototype.hasOwnProperty,
    V = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(de, $, _e) {
    var ge,
      te = {},
      J = null,
      We = null;
    (_e !== void 0 && (J = "" + _e),
      $.key !== void 0 && (J = "" + $.key),
      $.ref !== void 0 && (We = $.ref));
    for (ge in $) Pe.call($, ge) && !X.hasOwnProperty(ge) && (te[ge] = $[ge]);
    if (de && de.defaultProps)
      for (ge in (($ = de.defaultProps), $)) te[ge] === void 0 && (te[ge] = $[ge]);
    return { $$typeof: B, type: de, key: J, ref: We, props: te, _owner: V.current };
  }
  return ((yr.Fragment = m), (yr.jsx = fe), (yr.jsxs = fe), yr);
}
var za;
function Df() {
  return (za || ((za = 1), (Ei.exports = Mf())), Ei.exports);
}
var h = Df(),
  If = Pi(),
  Pl = {},
  Ni = { exports: {} },
  Ie = {},
  Ci = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Ff() {
  return (
    Pa ||
      ((Pa = 1),
      (function (P) {
        function B(k, T) {
          var _ = k.length;
          k.push(T);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              y = k[c];
            if (0 < V(y, T)) ((k[c] = T), (k[_] = y), (_ = c));
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function Pe(k) {
          if (k.length === 0) return null;
          var T = k[0],
            _ = k.pop();
          if (_ !== T) {
            k[0] = _;
            e: for (var c = 0, y = k.length, O = y >>> 1; c < O;) {
              var D = 2 * (c + 1) - 1,
                F = k[D],
                U = D + 1,
                K = k[U];
              if (0 > V(F, _))
                U < y && 0 > V(K, F)
                  ? ((k[c] = K), (k[U] = _), (c = U))
                  : ((k[c] = F), (k[D] = _), (c = D));
              else if (U < y && 0 > V(K, _)) ((k[c] = K), (k[U] = _), (c = U));
              else break e;
            }
          }
          return T;
        }
        function V(k, T) {
          var _ = k.sortIndex - T.sortIndex;
          return _ !== 0 ? _ : k.id - T.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var X = performance;
          P.unstable_now = function () {
            return X.now();
          };
        } else {
          var fe = Date,
            de = fe.now();
          P.unstable_now = function () {
            return fe.now() - de;
          };
        }
        var $ = [],
          _e = [],
          ge = 1,
          te = null,
          J = 3,
          We = !1,
          $e = !1,
          q = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          vt = typeof clearTimeout == "function" ? clearTimeout : null,
          st = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(k) {
          for (var T = m(_e); T !== null;) {
            if (T.callback === null) Pe(_e);
            else if (T.startTime <= k) (Pe(_e), (T.sortIndex = T.expirationTime), B($, T));
            else break;
            T = m(_e);
          }
        }
        function xe(k) {
          if (((q = !1), qe(k), !$e))
            if (m($) !== null) (($e = !0), je(be));
            else {
              var T = m(_e);
              T !== null && le(xe, T.startTime - k);
            }
        }
        function be(k, T) {
          (($e = !1), q && ((q = !1), vt(Qe), (Qe = -1)), (We = !0));
          var _ = J;
          try {
            for (qe(T), te = m($); te !== null && (!(te.expirationTime > T) || (k && !Kt()));) {
              var c = te.callback;
              if (typeof c == "function") {
                ((te.callback = null), (J = te.priorityLevel));
                var y = c(te.expirationTime <= T);
                ((T = P.unstable_now()),
                  typeof y == "function" ? (te.callback = y) : te === m($) && Pe($),
                  qe(T));
              } else Pe($);
              te = m($);
            }
            if (te !== null) var O = !0;
            else {
              var D = m(_e);
              (D !== null && le(xe, D.startTime - T), (O = !1));
            }
            return O;
          } finally {
            ((te = null), (J = _), (We = !1));
          }
        }
        var Ne = !1,
          Le = null,
          Qe = -1,
          Ct = 5,
          yt = -1;
        function Kt() {
          return !(P.unstable_now() - yt < Ct);
        }
        function at() {
          if (Le !== null) {
            var k = P.unstable_now();
            yt = k;
            var T = !0;
            try {
              T = Le(!0, k);
            } finally {
              T ? Fe() : ((Ne = !1), (Le = null));
            }
          } else Ne = !1;
        }
        var Fe;
        if (typeof st == "function")
          Fe = function () {
            st(at);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            ct = et.port2;
          ((et.port1.onmessage = at),
            (Fe = function () {
              ct.postMessage(null);
            }));
        } else
          Fe = function () {
            Q(at, 0);
          };
        function je(k) {
          ((Le = k), Ne || ((Ne = !0), Fe()));
        }
        function le(k, T) {
          Qe = Q(function () {
            k(P.unstable_now());
          }, T);
        }
        ((P.unstable_IdlePriority = 5),
          (P.unstable_ImmediatePriority = 1),
          (P.unstable_LowPriority = 4),
          (P.unstable_NormalPriority = 3),
          (P.unstable_Profiling = null),
          (P.unstable_UserBlockingPriority = 2),
          (P.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (P.unstable_continueExecution = function () {
            $e || We || (($e = !0), je(be));
          }),
          (P.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ct = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (P.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (P.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (P.unstable_next = function (k) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = J;
            }
            var _ = J;
            J = T;
            try {
              return k();
            } finally {
              J = _;
            }
          }),
          (P.unstable_pauseExecution = function () {}),
          (P.unstable_requestPaint = function () {}),
          (P.unstable_runWithPriority = function (k, T) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var _ = J;
            J = k;
            try {
              return T();
            } finally {
              J = _;
            }
          }),
          (P.unstable_scheduleCallback = function (k, T, _) {
            var c = P.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              k)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = _ + y),
              (k = {
                id: ge++,
                callback: T,
                priorityLevel: k,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > c
                ? ((k.sortIndex = _),
                  B(_e, k),
                  m($) === null &&
                    k === m(_e) &&
                    (q ? (vt(Qe), (Qe = -1)) : (q = !0), le(xe, _ - c)))
                : ((k.sortIndex = y), B($, k), $e || We || (($e = !0), je(be))),
              k
            );
          }),
          (P.unstable_shouldYield = Kt),
          (P.unstable_wrapCallback = function (k) {
            var T = J;
            return function () {
              var _ = J;
              J = T;
              try {
                return k.apply(this, arguments);
              } finally {
                J = _;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var La;
function Uf() {
  return (La || ((La = 1), (Ci.exports = Ff())), Ci.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Af() {
  if (ja) return Ie;
  ja = 1;
  var P = Pi(),
    B = Uf();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Pe = new Set(),
    V = {};
  function X(e, t) {
    (fe(e, t), fe(e + "Capture", t));
  }
  function fe(e, t) {
    for (V[e] = t, e = 0; e < t.length; e++) Pe.add(t[e]);
  }
  var de = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    _e =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ge = {},
    te = {};
  function J(e) {
    return $.call(te, e) ? !0 : $.call(ge, e) ? !1 : _e.test(e) ? (te[e] = !0) : ((ge[e] = !0), !1);
  }
  function We(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $e(e, t, n, r) {
    if (t === null || typeof t > "u" || We(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function q(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var Q = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Q[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Q[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Q[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Q[e] = new q(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Q[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Q[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Q[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Q[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Q[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(vt, st);
      Q[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(vt, st);
        Q[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(vt, st);
      Q[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Q.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function qe(e, t, n, r) {
    var l = Q.hasOwnProperty(t) ? Q[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      ($e(t, n, l, r) && (n = null),
      r || l === null
        ? J(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var xe = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Ct = Symbol.for("react.profiler"),
    yt = Symbol.for("react.provider"),
    Kt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ct = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var O = !1;
  function D(e, t) {
    if (!e || O) return "";
    O = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];
        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((O = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function F(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = D(e.type, !1)), e);
      case 11:
        return ((e = D(e.type.render, !1)), e);
      case 1:
        return ((e = D(e.type, !0)), e);
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ne:
        return "Portal";
      case Ct:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Kt:
          return (e.displayName || "Context") + ".Consumer";
        case yt:
          return (e._context.displayName || "Context") + ".Provider";
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ct:
          return ((t = e.displayName || null), t !== null ? t : U(e.type) || "Memo");
        case je:
          ((t = e._payload), (e = e._init));
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function K(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function H(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function b(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = b(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Li(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = b(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function xr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jl(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ji(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = H(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Ti(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function Tl(e, t) {
    Ti(e, t);
    var n = H(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Rl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Rl(e, t.type, H(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Ri(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Rl(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Rn = Array.isArray;
  function on(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + H(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Oi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Rn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: H(n) };
  }
  function Mi(e, t) {
    var n = H(t.value),
      r = H(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Di(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ii(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ii(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var wr,
    Fi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          wr = wr || document.createElement("div"),
            wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = wr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mn = {
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
    Ia = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function (e) {
    Ia.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
    });
  });
  function Ui(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ai(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ui(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Fa = _(
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
  function Dl(e, t) {
    if (t) {
      if (Fa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Il(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var Fl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    sn = null,
    an = null;
  function Vi(e) {
    if ((e = nr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Wr(t)), Al(e.stateNode, e.type, t));
    }
  }
  function Bi(e) {
    sn ? (an ? an.push(e) : (an = [e])) : (sn = e);
  }
  function Hi() {
    if (sn) {
      var e = sn,
        t = an;
      if (((an = sn = null), Vi(e), t)) for (e = 0; e < t.length; e++) Vi(t[e]);
    }
  }
  function Wi(e, t) {
    return e(t);
  }
  function $i() {}
  var Vl = !1;
  function Qi(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Wi(e, t, n);
    } finally {
      ((Vl = !1), (sn !== null || an !== null) && ($i(), Hi()));
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (de)
    try {
      var In = {};
      (Object.defineProperty(In, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In));
    } catch {
      Bl = !1;
    }
  function Ua(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var Fn = !1,
    kr = null,
    Sr = !1,
    Hl = null,
    Aa = {
      onError: function (e) {
        ((Fn = !0), (kr = e));
      },
    };
  function Va(e, t, n, r, l, u, i, o, s) {
    ((Fn = !1), (kr = null), Ua.apply(Aa, arguments));
  }
  function Ba(e, t, n, r, l, u, i, o, s) {
    if ((Va.apply(this, arguments), Fn)) {
      if (Fn) {
        var p = kr;
        ((Fn = !1), (kr = null));
      } else throw Error(m(198));
      Sr || ((Sr = !0), (Hl = p));
    }
  }
  function Yt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ki(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Yi(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function Ha(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u;) {
          if (u === n) return (Yi(l), e);
          if (u === r) return (Yi(l), t);
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = u));
      else {
        for (var i = !1, o = l.child; o;) {
          if (o === n) {
            ((i = !0), (n = l), (r = u));
            break;
          }
          if (o === r) {
            ((i = !0), (r = l), (n = u));
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o;) {
            if (o === n) {
              ((i = !0), (n = u), (r = l));
              break;
            }
            if (o === r) {
              ((i = !0), (r = u), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xi(e) {
    return ((e = Ha(e)), e !== null ? Gi(e) : null);
  }
  function Gi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Gi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Zi = B.unstable_scheduleCallback,
    Ji = B.unstable_cancelCallback,
    Wa = B.unstable_shouldYield,
    $a = B.unstable_requestPaint,
    ie = B.unstable_now,
    Qa = B.unstable_getCurrentPriorityLevel,
    Wl = B.unstable_ImmediatePriority,
    qi = B.unstable_UserBlockingPriority,
    Er = B.unstable_NormalPriority,
    Ka = B.unstable_LowPriority,
    bi = B.unstable_IdlePriority,
    _r = null,
    ft = null;
  function Ya(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : Za,
    Xa = Math.log,
    Ga = Math.LN2;
  function Za(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xa(e) / Ga) | 0)) | 0);
  }
  var Nr = 64,
    Cr = 4194304;
  function Un(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Un(o)) : ((u &= i), u !== 0 && (r = Un(u)));
    } else ((i = n & ~l), i !== 0 ? (r = Un(i)) : u !== 0 && (r = Un(u)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Ja(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function qa(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - tt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = Ja(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function $l(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function eo() {
    var e = Nr;
    return ((Nr <<= 1), (Nr & 4194240) === 0 && (Nr = 64), e);
  }
  function Ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function An(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n));
  }
  function ba(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var l = 31 - tt(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var W = 0;
  function to(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var no,
    Yl,
    ro,
    lo,
    uo,
    Xl = !1,
    Pr = [],
    zt = null,
    Pt = null,
    Lt = null,
    Vn = new Map(),
    Bn = new Map(),
    jt = [],
    ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function io(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = nr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Hn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Pt = Hn(Pt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = Hn(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Vn.set(u, Hn(Vn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Bn.set(u, Hn(Bn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function oo(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ki(n)), t !== null)) {
            ((e.blockedOn = t),
              uo(e.priority, function () {
                ro(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Fl = r), n.target.dispatchEvent(r), (Fl = null));
      } else return ((t = nr(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function so(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function nc() {
    ((Xl = !1),
      zt !== null && Lr(zt) && (zt = null),
      Pt !== null && Lr(Pt) && (Pt = null),
      Lt !== null && Lr(Lt) && (Lt = null),
      Vn.forEach(so),
      Bn.forEach(so));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl || ((Xl = !0), B.unstable_scheduleCallback(B.unstable_NormalPriority, nc)));
  }
  function $n(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Pr.length) {
      Wn(Pr[0], e);
      for (var n = 1; n < Pr.length; n++) {
        var r = Pr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Wn(zt, e),
        Pt !== null && Wn(Pt, e),
        Lt !== null && Wn(Lt, e),
        Vn.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < jt.length;
      n++
    )
      ((r = jt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null);)
      (oo(n), n.blockedOn === null && jt.shift());
  }
  var cn = xe.ReactCurrentBatchConfig,
    jr = !0;
  function rc(e, t, n, r) {
    var l = W,
      u = cn.transition;
    cn.transition = null;
    try {
      ((W = 1), Gl(e, t, n, r));
    } finally {
      ((W = l), (cn.transition = u));
    }
  }
  function lc(e, t, n, r) {
    var l = W,
      u = cn.transition;
    cn.transition = null;
    try {
      ((W = 4), Gl(e, t, n, r));
    } finally {
      ((W = l), (cn.transition = u));
    }
  }
  function Gl(e, t, n, r) {
    if (jr) {
      var l = Zl(e, t, n, r);
      if (l === null) (pu(e, t, r, Tr, n), io(e, r));
      else if (tc(l, e, t, n, r)) r.stopPropagation();
      else if ((io(e, r), t & 4 && -1 < ec.indexOf(e))) {
        for (; l !== null;) {
          var u = nr(l);
          if (
            (u !== null && no(u), (u = Zl(e, t, n, r)), u === null && pu(e, t, r, Tr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, t, r, null, n);
    }
  }
  var Tr = null;
  function Zl(e, t, n, r) {
    if (((Tr = null), (e = Ul(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ki(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Tr = e), null);
  }
  function ao(e) {
    switch (e) {
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
        switch (Qa()) {
          case Wl:
            return 1;
          case qi:
            return 4;
          case Er:
          case Ka:
            return 16;
          case bi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tt = null,
    Jl = null,
    Rr = null;
  function co() {
    if (Rr) return Rr;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = "value" in Tt ? Tt.value : Tt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mr() {
    return !0;
  }
  function fo() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, u, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Mr
          : fo),
        (this.isPropagationStopped = fo),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Mr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Mr));
        },
        persist: function () {},
        isPersistent: Mr,
      }),
      t
    );
  }
  var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ae(fn),
    Qn = _({}, fn, { view: 0, detail: 0 }),
    uc = Ae(Qn),
    bl,
    eu,
    Kn,
    Dr = _({}, Qn, {
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
      getModifierState: nu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kn &&
              (Kn && e.type === "mousemove"
                ? ((bl = e.screenX - Kn.screenX), (eu = e.screenY - Kn.screenY))
                : (eu = bl = 0),
              (Kn = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    po = Ae(Dr),
    ic = _({}, Dr, { dataTransfer: 0 }),
    oc = Ae(ic),
    sc = _({}, Qn, { relatedTarget: 0 }),
    tu = Ae(sc),
    ac = _({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cc = Ae(ac),
    fc = _({}, fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    dc = Ae(fc),
    pc = _({}, fn, { data: 0 }),
    mo = Ae(pc),
    mc = {
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
    hc = {
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
    vc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vc[e]) ? !!t[e] : !1;
  }
  function nu() {
    return yc;
  }
  var gc = _({}, Qn, {
      key: function (e) {
        if (e.key) {
          var t = mc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? hc[e.keyCode] || "Unidentified"
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
      getModifierState: nu,
      charCode: function (e) {
        return e.type === "keypress" ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Or(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    xc = Ae(gc),
    wc = _({}, Dr, {
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
    ho = Ae(wc),
    kc = _({}, Qn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu,
    }),
    Sc = Ae(kc),
    Ec = _({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _c = Ae(Ec),
    Nc = _({}, Dr, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Cc = Ae(Nc),
    zc = [9, 13, 27, 32],
    ru = de && "CompositionEvent" in window,
    Yn = null;
  de && "documentMode" in document && (Yn = document.documentMode);
  var Pc = de && "TextEvent" in window && !Yn,
    vo = de && (!ru || (Yn && 8 < Yn && 11 >= Yn)),
    yo = " ",
    go = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return zc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wo(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var dn = !1;
  function Lc(e, t) {
    switch (e) {
      case "compositionend":
        return wo(t);
      case "keypress":
        return t.which !== 32 ? null : ((go = !0), yo);
      case "textInput":
        return ((e = t.data), e === yo && go ? null : e);
      default:
        return null;
    }
  }
  function jc(e, t) {
    if (dn)
      return e === "compositionend" || (!ru && xo(e, t))
        ? ((e = co()), (Rr = Jl = Tt = null), (dn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return vo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tc = {
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
  function ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tc[e.type] : t === "textarea";
  }
  function So(e, t, n, r) {
    (Bi(r),
      (t = Vr(t, "onChange")),
      0 < t.length &&
        ((n = new ql("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Xn = null,
    Gn = null;
  function Rc(e) {
    Vo(e, 0);
  }
  function Ir(e) {
    var t = yn(e);
    if (Li(t)) return e;
  }
  function Oc(e, t) {
    if (e === "change") return t;
  }
  var Eo = !1;
  if (de) {
    var lu;
    if (de) {
      var uu = "oninput" in document;
      if (!uu) {
        var _o = document.createElement("div");
        (_o.setAttribute("oninput", "return;"), (uu = typeof _o.oninput == "function"));
      }
      lu = uu;
    } else lu = !1;
    Eo = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Xn && (Xn.detachEvent("onpropertychange", Co), (Gn = Xn = null));
  }
  function Co(e) {
    if (e.propertyName === "value" && Ir(Gn)) {
      var t = [];
      (So(t, Gn, e, Ul(e)), Qi(Rc, t));
    }
  }
  function Mc(e, t, n) {
    e === "focusin"
      ? (No(), (Xn = t), (Gn = n), Xn.attachEvent("onpropertychange", Co))
      : e === "focusout" && No();
  }
  function Dc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ir(Gn);
  }
  function Ic(e, t) {
    if (e === "click") return Ir(t);
  }
  function Fc(e, t) {
    if (e === "input" || e === "change") return Ir(t);
  }
  function Uc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Uc;
  function Zn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!$.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Po(e, t) {
    var n = zo(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zo(n);
    }
  }
  function Lo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Lo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function jo() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ac(e) {
    var t = jo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lo(n.ownerDocument.documentElement, n)) {
      if (r !== null && iu(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          ((r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Po(n, u)));
          var i = Po(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Vc = de && "documentMode" in document && 11 >= document.documentMode,
    pn = null,
    ou = null,
    Jn = null,
    su = !1;
  function To(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    su ||
      pn == null ||
      pn !== xr(r) ||
      ((r = pn),
      "selectionStart" in r && iu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Jn && Zn(Jn, r)) ||
        ((Jn = r),
        (r = Vr(ou, "onSelect")),
        0 < r.length &&
          ((t = new ql("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = pn))));
  }
  function Fr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var mn = {
      animationend: Fr("Animation", "AnimationEnd"),
      animationiteration: Fr("Animation", "AnimationIteration"),
      animationstart: Fr("Animation", "AnimationStart"),
      transitionend: Fr("Transition", "TransitionEnd"),
    },
    au = {},
    Ro = {};
  de &&
    ((Ro = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mn.animationend.animation,
      delete mn.animationiteration.animation,
      delete mn.animationstart.animation),
    "TransitionEvent" in window || delete mn.transitionend.transition);
  function Ur(e) {
    if (au[e]) return au[e];
    if (!mn[e]) return e;
    var t = mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ro) return (au[e] = t[n]);
    return e;
  }
  var Oo = Ur("animationend"),
    Mo = Ur("animationiteration"),
    Do = Ur("animationstart"),
    Io = Ur("transitionend"),
    Fo = new Map(),
    Uo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rt(e, t) {
    (Fo.set(e, t), X(t, [e]));
  }
  for (var cu = 0; cu < Uo.length; cu++) {
    var fu = Uo[cu],
      Bc = fu.toLowerCase(),
      Hc = fu[0].toUpperCase() + fu.slice(1);
    Rt(Bc, "on" + Hc);
  }
  (Rt(Oo, "onAnimationEnd"),
    Rt(Mo, "onAnimationIteration"),
    Rt(Do, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(Io, "onTransitionEnd"),
    fe("onMouseEnter", ["mouseout", "mouseover"]),
    fe("onMouseLeave", ["mouseout", "mouseover"]),
    fe("onPointerEnter", ["pointerout", "pointerover"]),
    fe("onPointerLeave", ["pointerout", "pointerover"]),
    X("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    X(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    X("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    X("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    X(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    X(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var qn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Wc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
  function Ao(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ba(r, t, void 0, e), (e.currentTarget = null));
  }
  function Vo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped())) break e;
            (Ao(l, o, p), (u = s));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            (Ao(l, o, p), (u = s));
          }
      }
    }
    if (Sr) throw ((e = Hl), (Sr = !1), (Hl = null), e);
  }
  function G(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Bo(t, e, 2, !1), n.add(r));
  }
  function du(e, t, n) {
    var r = 0;
    (t && (r |= 4), Bo(n, e, r, t));
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bn(e) {
    if (!e[Ar]) {
      ((e[Ar] = !0),
        Pe.forEach(function (n) {
          n !== "selectionchange" && (Wc.has(n) || du(n, !1, e), du(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || ((t[Ar] = !0), du("selectionchange", !1, t));
    }
  }
  function Bo(e, t, n, r) {
    switch (ao(t)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = Gl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Bl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function pu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null;) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null;) {
            if (((i = Xt(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Qi(function () {
      var p = u,
        g = Ul(n),
        x = [];
      e: {
        var v = Fo.get(e);
        if (v !== void 0) {
          var S = ql,
            N = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              S = xc;
              break;
            case "focusin":
              ((N = "focus"), (S = tu));
              break;
            case "focusout":
              ((N = "blur"), (S = tu));
              break;
            case "beforeblur":
            case "afterblur":
              S = tu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = po;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Sc;
              break;
            case Oo:
            case Mo:
            case Do:
              S = cc;
              break;
            case Io:
              S = _c;
              break;
            case "scroll":
              S = uc;
              break;
            case "wheel":
              S = Cc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = dc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = ho;
          }
          var C = (t & 4) !== 0,
            oe = !C && e === "scroll",
            f = C ? (v !== null ? v + "Capture" : null) : v;
          C = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = Dn(a, f)), w != null && C.push(er(a, w, d)))),
              oe)
            )
              break;
            a = a.return;
          }
          0 < C.length && ((v = new S(v, N, null, n, g)), x.push({ event: v, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            v && n !== Fl && (N = n.relatedTarget || n.fromElement) && (Xt(N) || N[gt]))
          )
            break e;
          if (
            (S || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            S
              ? ((N = n.relatedTarget || n.toElement),
                (S = p),
                (N = N ? Xt(N) : null),
                N !== null &&
                  ((oe = Yt(N)), N !== oe || (N.tag !== 5 && N.tag !== 6)) &&
                  (N = null))
              : ((S = null), (N = p)),
            S !== N)
          ) {
            if (
              ((C = po),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = ho), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (oe = S == null ? v : yn(S)),
              (d = N == null ? v : yn(N)),
              (v = new C(w, a + "leave", S, n, g)),
              (v.target = oe),
              (v.relatedTarget = d),
              (w = null),
              Xt(g) === p &&
                ((C = new C(f, a + "enter", N, n, g)),
                (C.target = d),
                (C.relatedTarget = oe),
                (w = C)),
              (oe = w),
              S && N)
            )
              t: {
                for (C = S, f = N, a = 0, d = C; d; d = hn(d)) a++;
                for (d = 0, w = f; w; w = hn(w)) d++;
                for (; 0 < a - d;) ((C = hn(C)), a--);
                for (; 0 < d - a;) ((f = hn(f)), d--);
                for (; a--;) {
                  if (C === f || (f !== null && C === f.alternate)) break t;
                  ((C = hn(C)), (f = hn(f)));
                }
                C = null;
              }
            else C = null;
            (S !== null && Ho(x, v, S, C, !1), N !== null && oe !== null && Ho(x, oe, N, C, !0));
          }
        }
        e: {
          if (
            ((v = p ? yn(p) : window),
            (S = v.nodeName && v.nodeName.toLowerCase()),
            S === "select" || (S === "input" && v.type === "file"))
          )
            var z = Oc;
          else if (ko(v))
            if (Eo) z = Fc;
            else {
              z = Dc;
              var L = Mc;
            }
          else
            (S = v.nodeName) &&
              S.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Ic);
          if (z && (z = z(e, p))) {
            So(x, z, n, g);
            break e;
          }
          (L && L(e, v, p),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Rl(v, "number", v.value));
        }
        switch (((L = p ? yn(p) : window), e)) {
          case "focusin":
            (ko(L) || L.contentEditable === "true") && ((pn = L), (ou = p), (Jn = null));
            break;
          case "focusout":
            Jn = ou = pn = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((su = !1), To(x, n, g));
            break;
          case "selectionchange":
            if (Vc) break;
          case "keydown":
          case "keyup":
            To(x, n, g);
        }
        var j;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart";
                break e;
              case "compositionend":
                R = "onCompositionEnd";
                break e;
              case "compositionupdate":
                R = "onCompositionUpdate";
                break e;
            }
            R = void 0;
          }
        else
          dn
            ? xo(e, n) && (R = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
        (R &&
          (vo &&
            n.locale !== "ko" &&
            (dn || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && dn && (j = co())
              : ((Tt = g), (Jl = "value" in Tt ? Tt.value : Tt.textContent), (dn = !0))),
          (L = Vr(p, R)),
          0 < L.length &&
            ((R = new mo(R, e, null, n, g)),
            x.push({ event: R, listeners: L }),
            j ? (R.data = j) : ((j = wo(n)), j !== null && (R.data = j)))),
          (j = Pc ? Lc(e, n) : jc(e, n)) &&
            ((p = Vr(p, "onBeforeInput")),
            0 < p.length &&
              ((g = new mo("onBeforeInput", "beforeinput", null, n, g)),
              x.push({ event: g, listeners: p }),
              (g.data = j))));
      }
      Vo(x, t);
    });
  }
  function er(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dn(e, n)),
        u != null && r.unshift(er(e, u, l)),
        (u = Dn(e, t)),
        u != null && r.push(er(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ho(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Dn(n, u)), s != null && i.unshift(er(n, s, o)))
          : l || ((s = Dn(n, u)), s != null && i.push(er(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var $c = /\r\n?/g,
    Qc = /\u0000|\uFFFD/g;
  function Wo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        $c,
        `
`,
      )
      .replace(Qc, "");
  }
  function Br(e, t, n) {
    if (((t = Wo(t)), Wo(e) !== t && n)) throw Error(m(425));
  }
  function Hr() {}
  var mu = null,
    hu = null;
  function vu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yu = typeof setTimeout == "function" ? setTimeout : void 0,
    Kc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $o = typeof Promise == "function" ? Promise : void 0,
    Yc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $o < "u"
          ? function (e) {
              return $o.resolve(null).then(e).catch(Xc);
            }
          : yu;
  function Xc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gu(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), $n(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    $n(t);
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Qo(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vn = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + vn,
    tr = "__reactProps$" + vn,
    gt = "__reactContainer$" + vn,
    xu = "__reactEvents$" + vn,
    Gc = "__reactListeners$" + vn,
    Zc = "__reactHandles$" + vn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[gt] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Qo(e); e !== null;) {
            if ((n = e[dt])) return n;
            e = Qo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function nr(e) {
    return (
      (e = e[dt] || e[gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var wu = [],
    gn = -1;
  function Mt(e) {
    return { current: e };
  }
  function Z(e) {
    0 > gn || ((e.current = wu[gn]), (wu[gn] = null), gn--);
  }
  function Y(e, t) {
    (gn++, (wu[gn] = e.current), (e.current = t));
  }
  var Dt = {},
    we = Mt(Dt),
    Te = Mt(!1),
    Gt = Dt;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function $r() {
    (Z(Te), Z(we));
  }
  function Ko(e, t, n) {
    if (we.current !== Dt) throw Error(m(168));
    (Y(we, t), Y(Te, n));
  }
  function Yo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, K(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Qr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Gt = we.current),
      Y(we, e),
      Y(Te, Te.current),
      !0
    );
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Yo(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Te),
        Z(we),
        Y(we, e))
      : Z(Te),
      Y(Te, n));
  }
  var xt = null,
    Kr = !1,
    ku = !1;
  function Go(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function Jc(e) {
    ((Kr = !0), Go(e));
  }
  function It() {
    if (!ku && xt !== null) {
      ku = !0;
      var e = 0,
        t = W;
      try {
        var n = xt;
        for (W = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Kr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), Zi(Wl, It), l);
      } finally {
        ((W = t), (ku = !1));
      }
    }
    return null;
  }
  var wn = [],
    kn = 0,
    Yr = null,
    Xr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    wt = 1,
    kt = "";
  function Jt(e, t) {
    ((wn[kn++] = Xr), (wn[kn++] = Yr), (Yr = e), (Xr = t));
  }
  function Zo(e, t, n) {
    ((Ke[Ye++] = wt), (Ke[Ye++] = kt), (Ke[Ye++] = Zt), (Zt = e));
    var r = wt;
    e = kt;
    var l = 32 - tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - tt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (wt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (kt = u + e));
    } else ((wt = (1 << u) | (n << l) | r), (kt = e));
  }
  function Su(e) {
    e.return !== null && (Jt(e, 1), Zo(e, 1, 0));
  }
  function Eu(e) {
    for (; e === Yr;) ((Yr = wn[--kn]), (wn[kn] = null), (Xr = wn[--kn]), (wn[kn] = null));
    for (; e === Zt;)
      ((Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null),
        (wt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var Ve = null,
    Be = null,
    ee = !1,
    rt = null;
  function Jo(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function qo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: wt, overflow: kt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Nu(e) {
    if (ee) {
      var t = Be;
      if (t) {
        var n = t;
        if (!qo(e, t)) {
          if (_u(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = Ve;
          t && qo(e, t) ? Jo(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e));
        }
      } else {
        if (_u(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e));
      }
    }
  }
  function bo(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function Gr(e) {
    if (e !== Ve) return !1;
    if (!ee) return (bo(e), (ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (_u(e)) throw (es(), Error(m(418)));
      for (; t;) (Jo(e, t), (t = Ot(t.nextSibling)));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ve ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Be; e;) e = Ot(e.nextSibling);
  }
  function Sn() {
    ((Be = Ve = null), (ee = !1));
  }
  function Cu(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var qc = xe.ReactCurrentBatchConfig;
  function rr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
          ? t.ref
          : ((t = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function ts(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ns(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null;) (t(f, a), (a = a.sibling));
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null;)
        (a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling));
      return f;
    }
    function l(f, a) {
      return ((f = $t(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = yi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var z = d.type;
      return z === Le
        ? g(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === je && ts(z) === a.type))
          ? ((w = l(a, d.props)), (w.ref = rr(f, a, d)), (w.return = f), w)
          : ((w = wl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = rr(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = gi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, w, z) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, w, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = yi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = wl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = rr(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = gi(a, f.mode, d)), (a.return = f), a);
          case je:
            var w = a._init;
            return x(f, w(a._payload), d);
        }
        if (Rn(a) || T(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        Zr(f, a);
      }
      return null;
    }
    function v(f, a, d, w) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === z ? s(f, a, d, w) : null;
          case Ne:
            return d.key === z ? p(f, a, d, w) : null;
          case je:
            return ((z = d._init), v(f, a, z(d._payload), w));
        }
        if (Rn(d) || T(d)) return z !== null ? null : g(f, a, d, w, null);
        Zr(f, d);
      }
      return null;
    }
    function S(f, a, d, w, z) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, z));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, z));
          case Ne:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, z));
          case je:
            var L = w._init;
            return S(f, a, d, L(w._payload), z);
        }
        if (Rn(w) || T(w)) return ((f = f.get(d) || null), g(a, f, w, z, null));
        Zr(a, w);
      }
      return null;
    }
    function N(f, a, d, w) {
      for (var z = null, L = null, j = a, R = (a = 0), he = null; j !== null && R < d.length; R++) {
        j.index > R ? ((he = j), (j = null)) : (he = j.sibling);
        var A = v(f, j, d[R], w);
        if (A === null) {
          j === null && (j = he);
          break;
        }
        (e && j && A.alternate === null && t(f, j),
          (a = u(A, a, R)),
          L === null ? (z = A) : (L.sibling = A),
          (L = A),
          (j = he));
      }
      if (R === d.length) return (n(f, j), ee && Jt(f, R), z);
      if (j === null) {
        for (; R < d.length; R++)
          ((j = x(f, d[R], w)),
            j !== null && ((a = u(j, a, R)), L === null ? (z = j) : (L.sibling = j), (L = j)));
        return (ee && Jt(f, R), z);
      }
      for (j = r(f, j); R < d.length; R++)
        ((he = S(j, f, R, d[R], w)),
          he !== null &&
            (e && he.alternate !== null && j.delete(he.key === null ? R : he.key),
            (a = u(he, a, R)),
            L === null ? (z = he) : (L.sibling = he),
            (L = he)));
      return (
        e &&
          j.forEach(function (Qt) {
            return t(f, Qt);
          }),
        ee && Jt(f, R),
        z
      );
    }
    function C(f, a, d, w) {
      var z = T(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (z = null), j = a, R = (a = 0), he = null, A = d.next();
        j !== null && !A.done;
        R++, A = d.next()
      ) {
        j.index > R ? ((he = j), (j = null)) : (he = j.sibling);
        var Qt = v(f, j, A.value, w);
        if (Qt === null) {
          j === null && (j = he);
          break;
        }
        (e && j && Qt.alternate === null && t(f, j),
          (a = u(Qt, a, R)),
          L === null ? (z = Qt) : (L.sibling = Qt),
          (L = Qt),
          (j = he));
      }
      if (A.done) return (n(f, j), ee && Jt(f, R), z);
      if (j === null) {
        for (; !A.done; R++, A = d.next())
          ((A = x(f, A.value, w)),
            A !== null && ((a = u(A, a, R)), L === null ? (z = A) : (L.sibling = A), (L = A)));
        return (ee && Jt(f, R), z);
      }
      for (j = r(f, j); !A.done; R++, A = d.next())
        ((A = S(j, f, R, A.value, w)),
          A !== null &&
            (e && A.alternate !== null && j.delete(A.key === null ? R : A.key),
            (a = u(A, a, R)),
            L === null ? (z = A) : (L.sibling = A),
            (L = A)));
      return (
        e &&
          j.forEach(function (Rf) {
            return t(f, Rf);
          }),
        ee && Jt(f, R),
        z
      );
    }
    function oe(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Le &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var z = d.key, L = a; L !== null;) {
                if (L.key === z) {
                  if (((z = d.type), z === Le)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === je && ts(z) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = rr(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === Le
                ? ((a = un(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = wl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = rr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Ne:
            e: {
              for (L = d.key; a !== null;) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    (n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a));
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              ((a = gi(d, f.mode, w)), (a.return = f), (f = a));
            }
            return i(f);
          case je:
            return ((L = d._init), oe(f, a, L(d._payload), w));
        }
        if (Rn(d)) return N(f, a, d, w);
        if (T(d)) return C(f, a, d, w);
        Zr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = yi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return oe;
  }
  var En = ns(!0),
    rs = ns(!1),
    Jr = Mt(null),
    qr = null,
    _n = null,
    zu = null;
  function Pu() {
    zu = _n = qr = null;
  }
  function Lu(e) {
    var t = Jr.current;
    (Z(Jr), (e._currentValue = t));
  }
  function ju(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    ((qr = e),
      (zu = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (qr === null) throw Error(m(308));
        ((_n = e), (qr.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var qt = null;
  function Tu(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function ls(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Tu(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      St(e, r)
    );
  }
  function St(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ft = !1;
  function Ru(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Et(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (I & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        St(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Tu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      St(e, n)
    );
  }
  function br(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
    }
  }
  function is(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (u === null ? (l = u = i) : (u = u.next = i), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function el(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      ((s.next = null), i === null ? (u = p) : (i.next = p), (i = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== i && (o === null ? (g.firstBaseUpdate = p) : (o.next = p), (g.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var x = l.baseState;
      ((i = 0), (g = p = s = null), (o = u));
      do {
        var v = o.lane,
          S = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var N = e,
              C = o;
            switch (((v = t), (S = n), C.tag)) {
              case 1:
                if (((N = C.payload), typeof N == "function")) {
                  x = N.call(S, x, v);
                  break e;
                }
                x = N;
                break e;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = C.payload), (v = typeof N == "function" ? N.call(S, x, v) : N), v == null)
                )
                  break e;
                x = _({}, x, v);
                break e;
              case 2:
                Ft = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((S = {
            eventTime: S,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((p = g = S), (s = x)) : (g = g.next = S),
            (i |= v));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (g === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((tn |= i), (e.lanes = i), (e.memoizedState = x));
    }
  }
  function os(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function")) throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var lr = {},
    pt = Mt(lr),
    ur = Mt(lr),
    ir = Mt(lr);
  function bt(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Ou(e, t) {
    switch ((Y(ir, t), Y(ur, e), Y(pt, lr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ml(t, e)));
    }
    (Z(pt), Y(pt, t));
  }
  function Cn() {
    (Z(pt), Z(ur), Z(ir));
  }
  function ss(e) {
    bt(ir.current);
    var t = bt(pt.current),
      n = Ml(t, e.type);
    t !== n && (Y(ur, e), Y(pt, n));
  }
  function Mu(e) {
    ur.current === e && (Z(pt), Z(ur));
  }
  var ne = Mt(0);
  function tl(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Du = [];
  function Iu() {
    for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var nl = xe.ReactCurrentDispatcher,
    Fu = xe.ReactCurrentBatchConfig,
    en = 0,
    re = null,
    ae = null,
    pe = null,
    rl = !1,
    or = !1,
    sr = 0,
    bc = 0;
  function ke() {
    throw Error(m(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Au(e, t, n, r, l, u) {
    if (
      ((en = u),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (nl.current = e === null || e.memoizedState === null ? rf : lf),
      (e = n(r, l)),
      or)
    ) {
      u = 0;
      do {
        if (((or = !1), (sr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (pe = ae = null), (t.updateQueue = null), (nl.current = uf), (e = n(r, l)));
      } while (or);
    }
    if (
      ((nl.current = il),
      (t = ae !== null && ae.next !== null),
      (en = 0),
      (pe = ae = re = null),
      (rl = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = sr !== 0;
    return ((sr = 0), e);
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e), pe);
  }
  function Ge() {
    if (ae === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ae.next;
    var t = pe === null ? re.memoizedState : pe.next;
    if (t !== null) ((pe = t), (ae = e));
    else {
      if (e === null) throw Error(m(310));
      ((ae = e),
        (e = {
          memoizedState: ae.memoizedState,
          baseState: ae.baseState,
          baseQueue: ae.baseQueue,
          queue: ae.queue,
          next: null,
        }),
        pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e));
    }
    return pe;
  }
  function ar(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ae,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = u.next), (u.next = i));
      }
      ((r.baseQueue = l = u), (n.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (r = r.baseState));
      var o = (i = null),
        s = null,
        p = u;
      do {
        var g = p.lane;
        if ((en & g) === g)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action)));
        else {
          var x = {
            lane: g,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = x), (i = r)) : (s = s.next = x), (re.lanes |= g), (tn |= g));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        nt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (re.lanes |= u), (tn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== l);
      (nt(u, t.memoizedState) || (Oe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function as() {}
  function cs(e, t) {
    var n = re,
      r = Ge(),
      l = t(),
      u = !nt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Wu(ps.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (pe !== null && pe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), cr(9, ds.bind(null, n, r, l, t), void 0, null), me === null))
        throw Error(m(349));
      (en & 30) !== 0 || fs(n, t, l);
    }
    return l;
  }
  function fs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ds(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ms(t) && hs(e));
  }
  function ps(e, t, n) {
    return n(function () {
      ms(t) && hs(e);
    });
  }
  function ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var t = St(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function vs(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ar,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nf.bind(null, re, e)),
      [t.memoizedState, e]
    );
  }
  function cr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ys() {
    return Ge().memoizedState;
  }
  function ll(e, t, n, r) {
    var l = mt();
    ((re.flags |= e), (l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ul(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ae !== null) {
      var i = ae.memoizedState;
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = cr(t, n, u, r);
        return;
      }
    }
    ((re.flags |= e), (l.memoizedState = cr(1 | t, n, u, r)));
  }
  function gs(e, t) {
    return ll(8390656, 8, e, t);
  }
  function Wu(e, t) {
    return ul(2048, 8, e, t);
  }
  function xs(e, t) {
    return ul(4, 2, e, t);
  }
  function ws(e, t) {
    return ul(4, 4, e, t);
  }
  function ks(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ss(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), ul(4, 4, ks.bind(null, t, e), n));
  }
  function $u() {}
  function Es(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function _s(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ns(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = eo()), (re.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function ef(e, t) {
    var n = W;
    ((W = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Fu.transition;
    Fu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((W = n), (Fu.transition = r));
    }
  }
  function Cs() {
    return Ge().memoizedState;
  }
  function tf(e, t, n) {
    var r = Ht(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), zs(e)))
      Ps(t, n);
    else if (((n = ls(e, t, n, r)), n !== null)) {
      var l = ze();
      (ot(n, e, r, l), Ls(n, t, r));
    }
  }
  function nf(e, t, n) {
    var r = Ht(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (zs(e)) Ps(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            o = u(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), nt(o, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Tu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ls(e, t, l, r)), n !== null && ((l = ze()), ot(n, e, r, l), Ls(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function Ps(e, t) {
    or = rl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ls(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
    }
  }
  var il = {
      readContext: Xe,
      useCallback: ke,
      useContext: ke,
      useEffect: ke,
      useImperativeHandle: ke,
      useInsertionEffect: ke,
      useLayoutEffect: ke,
      useMemo: ke,
      useReducer: ke,
      useRef: ke,
      useState: ke,
      useDebugValue: ke,
      useDeferredValue: ke,
      useTransition: ke,
      useMutableSource: ke,
      useSyncExternalStore: ke,
      useId: ke,
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: gs,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ll(4194308, 4, ks.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ll(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ll(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = mt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = mt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = tf.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: vs,
      useDebugValue: $u,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          t = e[0];
        return ((e = ef.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = re,
          l = mt();
        if (ee) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), me === null)) throw Error(m(349));
          (en & 30) !== 0 || fs(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          cr(9, ds.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = me.identifierPrefix;
        if (ee) {
          var n = kt,
            r = wt;
          ((n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = sr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = bc++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: Xe,
      useCallback: Es,
      useContext: Xe,
      useEffect: Wu,
      useImperativeHandle: Ss,
      useInsertionEffect: xs,
      useLayoutEffect: ws,
      useMemo: _s,
      useReducer: Bu,
      useRef: ys,
      useState: function () {
        return Bu(ar);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var t = Ge();
        return Ns(t, ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(ar)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Cs,
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Xe,
      useCallback: Es,
      useContext: Xe,
      useEffect: Wu,
      useImperativeHandle: Ss,
      useInsertionEffect: xs,
      useLayoutEffect: ws,
      useMemo: _s,
      useReducer: Hu,
      useRef: ys,
      useState: function () {
        return Hu(ar);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var t = Ge();
        return ae === null ? (t.memoizedState = e) : Ns(t, ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(ar)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Cs,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Qu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Ht(e),
        u = Et(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Ut(e, u, l)),
        t !== null && (ot(t, e, l, r), br(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Ht(e),
        u = Et(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Ut(e, u, l)),
        t !== null && (ot(t, e, l, r), br(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Ht(e),
        l = Et(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (ot(t, e, r, n), br(t, e, r)));
    },
  };
  function js(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Zn(n, r) || !Zn(l, u)
          : !0
    );
  }
  function Ts(e, t, n) {
    var r = !1,
      l = Dt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = Re(t) ? Gt : we.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? xn(e, l) : Dt)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ol),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Rs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ol.enqueueReplaceState(t, t.state, null));
  }
  function Ku(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ru(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = Re(t) ? Gt : we.current), (l.context = xn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Qu(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && ol.enqueueReplaceState(l, l.state, null),
        el(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += F(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Yu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var of = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (ml || ((ml = !0), (ai = r)), Xu(e, t));
      }),
      n
    );
  }
  function Ms(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xu(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Xu(e, t),
            typeof r != "function" && (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Ds(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new of();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = kf.bind(null, e, t, n)), t.then(e, e));
  }
  function Is(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Et(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var sf = xe.ReactCurrentOwner,
    Oe = !1;
  function Ce(e, t, n, r) {
    t.child = e === null ? rs(t, null, n, r) : En(t, e.child, n, r);
  }
  function Us(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = Au(e, t, n, r, u, l)),
      (n = Vu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ee && n && Su(t), (t.flags |= 1), Ce(e, t, r, l), t.child)
    );
  }
  function As(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !vi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Vs(e, t, u, r, l))
        : ((e = wl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = $t(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Vs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zn(u, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return Gu(e, t, n, r, l);
  }
  function Bs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Y(Ln, He),
          (He |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Y(Ln, He),
            (He |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          Y(Ln, He),
          (He |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Y(Ln, He),
        (He |= r));
    return (Ce(e, t, l, n), t.child);
  }
  function Hs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Gu(e, t, n, r, l) {
    var u = Re(n) ? Gt : we.current;
    return (
      (u = xn(t, u)),
      Nn(t, l),
      (n = Au(e, t, n, r, u, l)),
      (r = Vu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ee && r && Su(t), (t.flags |= 1), Ce(e, t, n, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (Re(n)) {
      var u = !0;
      Qr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (al(e, t), Ts(t, n, r), Ku(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Xe(p))
        : ((p = Re(n) ? Gt : we.current), (p = xn(t, p)));
      var g = n.getDerivedStateFromProps,
        x = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Rs(t, i, r, p)),
        (Ft = !1));
      var v = t.memoizedState;
      ((i.state = v),
        el(t, r, i, l),
        (s = t.memoizedState),
        o !== r || v !== s || Te.current || Ft
          ? (typeof g == "function" && (Qu(t, n, g, r), (s = t.memoizedState)),
            (o = Ft || js(t, n, o, r, v, s, p))
              ? (x ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((i = t.stateNode),
        us(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : lt(t.type, o)),
        (i.props = p),
        (x = t.pendingProps),
        (v = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = Re(n) ? Gt : we.current), (s = xn(t, s))));
      var S = n.getDerivedStateFromProps;
      ((g = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== x || v !== s) && Rs(t, i, r, s)),
        (Ft = !1),
        (v = t.memoizedState),
        (i.state = v),
        el(t, r, i, l));
      var N = t.memoizedState;
      o !== x || v !== N || Te.current || Ft
        ? (typeof S == "function" && (Qu(t, n, S, r), (N = t.memoizedState)),
          (p = Ft || js(t, n, p, r, v, N, s) || !1)
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, N, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = N)),
          (i.props = r),
          (i.state = N),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Zu(e, t, n, r, u, l);
  }
  function Zu(e, t, n, r, l, u) {
    Hs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Xo(t, n, !1), _t(e, t, u));
    ((r = t.stateNode), (sf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = En(t, e.child, null, u)), (t.child = En(t, null, o, u)))
        : Ce(e, t, o, u),
      (t.memoizedState = r.state),
      l && Xo(t, n, !0),
      t.child
    );
  }
  function $s(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ko(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ko(e, t.context, !1),
      Ou(e, t.containerInfo));
  }
  function Qs(e, t, n, r, l) {
    return (Sn(), Cu(l), (t.flags |= 256), Ce(e, t, n, r), t.child);
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = ne.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      Y(ne, l & 1),
      e === null)
    )
      return (
        Nu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = kl(i, r, 0, null)),
                (e = un(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = qu(n)),
                (t.memoizedState = Ju),
                e)
              : bu(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return af(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = $t(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = $t(o, u)) : ((u = un(u, i, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? qu(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = $t(u, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function bu(e, t) {
    return (
      (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function sl(e, t, n, r) {
    return (
      r !== null && Cu(r),
      En(t, e.child, null, n),
      (e = bu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function af(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yu(Error(m(422)))), sl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = kl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = un(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, i),
            (t.child.memoizedState = qu(i)),
            (t.memoizedState = Ju),
            u);
    if ((t.mode & 1) === 0) return sl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), sl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Oe || o)) {
      if (((r = me), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), St(e, l), ot(r, e, l, -1)));
      }
      return (hi(), (r = Yu(Error(m(421)))), sl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Sf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Be = Ot(l.nextSibling)),
        (Ve = t),
        (ee = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = wt),
          (Ke[Ye++] = kt),
          (Ke[Ye++] = Zt),
          (wt = e.id),
          (kt = e.overflow),
          (Zt = t)),
        (t = bu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ys(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ju(e.return, t, n));
  }
  function ei(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Ce(e, t, r.children, n), (r = ne.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, n, t);
          else if (e.tag === 19) Ys(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Y(ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && tl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ei(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ei(t, !0, n, null, u);
          break;
        case "together":
          ei(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function al(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (tn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function cf(e, t, n) {
    switch (t.tag) {
      case 3:
        ($s(t), Sn());
        break;
      case 5:
        ss(t);
        break;
      case 1:
        Re(t.type) && Qr(t);
        break;
      case 4:
        Ou(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (Y(Jr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ks(e, t, n)
              : (Y(ne, ne.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        Y(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Xs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Y(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Bs(e, t, n));
    }
    return _t(e, t, n);
  }
  var Gs, ti, Zs, Js;
  ((Gs = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ti = function () {}),
    (Zs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), bt(pt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = jl(e, l)), (r = jl(e, r)), (u = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
        }
        Dl(n, r);
        var i;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (V.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
              } else (n || (u || (u = []), u.push(p, n)), (n = s));
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") || (u = u || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (V.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && G("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (Js = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function fr(e, t) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function ff(e, t, n) {
    var r = t.pendingProps;
    switch ((Eu(t), t.tag)) {
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
        return (Se(t), null);
      case 1:
        return (Re(t.type) && $r(), Se(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Cn(),
          Z(Te),
          Z(we),
          Iu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Gr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (di(rt), (rt = null)))),
          ti(e, t),
          Se(t),
          null
        );
      case 5:
        Mu(t);
        var l = bt(ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Zs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Se(t), null);
          }
          if (((e = bt(pt.current)), Gr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[dt] = t), (r[tr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (G("cancel", r), G("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qn.length; l++) G(qn[l], r);
                break;
              case "source":
                G("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (G("error", r), G("load", r));
                break;
              case "details":
                G("toggle", r);
                break;
              case "input":
                (ji(r, u), G("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), G("invalid", r));
                break;
              case "textarea":
                (Oi(r, u), G("invalid", r));
            }
            (Dl(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : V.hasOwnProperty(i) && o != null && i === "onScroll" && G("scroll", r);
              }
            switch (n) {
              case "input":
                (gr(r), Ri(r, u, !0));
                break;
              case "textarea":
                (gr(r), Di(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ii(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[dt] = t),
              (e[tr] = r),
              Gs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Il(n, r)), n)) {
                case "dialog":
                  (G("cancel", e), G("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (G("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qn.length; l++) G(qn[l], e);
                  l = r;
                  break;
                case "source":
                  (G("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (G("error", e), G("load", e), (l = r));
                  break;
                case "details":
                  (G("toggle", e), (l = r));
                  break;
                case "input":
                  (ji(e, r), (l = jl(e, r)), G("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    G("invalid", e));
                  break;
                case "textarea":
                  (Oi(e, r), (l = Ol(e, r)), G("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Dl(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Ai(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Fi(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && On(e, s)
                          : typeof s == "number" && On(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (V.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && G("scroll", e)
                            : s != null && qe(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (gr(e), Ri(e, r, !1));
                  break;
                case "textarea":
                  (gr(e), Di(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? on(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && on(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Se(t), null);
      case 6:
        if (e && t.stateNode != null) Js(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = bt(ir.current)), bt(pt.current), Gr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (u = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Br(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r));
        }
        return (Se(t), null);
      case 13:
        if (
          (Z(ne),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (es(), Sn(), (t.flags |= 98560), (u = !1));
          else if (((u = Gr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[dt] = t;
            } else (Sn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Se(t), (u = !1));
          } else (rt !== null && (di(rt), (rt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ne.current & 1) !== 0 ? ce === 0 && (ce = 3) : hi())),
            t.updateQueue !== null && (t.flags |= 4),
            Se(t),
            null);
      case 4:
        return (Cn(), ti(e, t), e === null && bn(t.stateNode.containerInfo), Se(t), null);
      case 10:
        return (Lu(t.type._context), Se(t), null);
      case 17:
        return (Re(t.type) && $r(), Se(t), null);
      case 19:
        if ((Z(ne), (u = t.memoizedState), u === null)) return (Se(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) fr(u, !1);
          else {
            if (ce !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = tl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      fr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (Y(ne, (ne.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ie() > jn &&
              ((t.flags |= 128), (r = !0), fr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = tl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                fr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ee)
              )
                return (Se(t), null);
            } else
              2 * ie() - u.renderingStartTime > jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), fr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last), n !== null ? (n.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = ie()),
            (t.sibling = null),
            (n = ne.current),
            Y(ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (Se(t), null);
      case 22:
      case 23:
        return (
          mi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (He & 1073741824) !== 0 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Se(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function df(e, t) {
    switch ((Eu(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && $r(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Cn(),
          Z(Te),
          Z(we),
          Iu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Mu(t), null);
      case 13:
        if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Sn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(ne), null);
      case 4:
        return (Cn(), null);
      case 10:
        return (Lu(t.type._context), null);
      case 22:
      case 23:
        return (mi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1,
    Ee = !1,
    pf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Pn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ue(e, t, r);
        }
      else n.current = null;
  }
  function ni(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var qs = !1;
  function mf(e, t) {
    if (((mu = jr), (e = jo()), iu(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              g = 0,
              x = e,
              v = null;
            t: for (;;) {
              for (
                var S;
                x !== n || (l !== 0 && x.nodeType !== 3) || (o = i + l),
                  x !== u || (r !== 0 && x.nodeType !== 3) || (s = i + r),
                  x.nodeType === 3 && (i += x.nodeValue.length),
                  (S = x.firstChild) !== null;
              )
                ((v = x), (x = S));
              for (;;) {
                if (x === e) break t;
                if (
                  (v === n && ++p === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (S = x.nextSibling) !== null)
                )
                  break;
                ((x = v), (v = x.parentNode));
              }
              x = S;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (hu = { focusedElem: e, selectionRange: n }, jr = !1, E = t; E !== null;)
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (E = e));
      else
        for (; E !== null;) {
          t = E;
          try {
            var N = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (N !== null) {
                    var C = N.memoizedProps,
                      oe = N.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? C : lt(t.type, C),
                        oe,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ue(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((N = qs), (qs = !1), N);
  }
  function dr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && ni(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ri(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function bs(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), bs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[dt], delete t[tr], delete t[xu], delete t[Gc], delete t[Zc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ta(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Hr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, t, n), e = e.sibling; e !== null;) (li(e, t, n), (e = e.sibling));
  }
  function ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, t, n), e = e.sibling; e !== null;) (ui(e, t, n), (e = e.sibling));
  }
  var ve = null,
    ut = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null;) (na(e, t, n), (n = n.sibling));
  }
  function na(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ee || Pn(n, t);
      case 6:
        var r = ve,
          l = ut;
        ((ve = null),
          At(e, t, n),
          (ve = r),
          (ut = l),
          ve !== null &&
            (ut
              ? ((e = ve),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ve.removeChild(n.stateNode)));
        break;
      case 18:
        ve !== null &&
          (ut
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? gu(e.parentNode, n) : e.nodeType === 1 && gu(e, n),
              $n(e))
            : gu(ve, n.stateNode));
        break;
      case 4:
        ((r = ve),
          (l = ut),
          (ve = n.stateNode.containerInfo),
          (ut = !0),
          At(e, t, n),
          (ve = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ee && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ni(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!Ee && (Pn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ue(n, t, o);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ee = (r = Ee) || n.memoizedState !== null), At(e, t, n), (Ee = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ra(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new pf()),
        t.forEach(function (r) {
          var l = Ef.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function it(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            i = t,
            o = i;
          e: for (; o !== null;) {
            switch (o.tag) {
              case 5:
                ((ve = o.stateNode), (ut = !1));
                break e;
              case 3:
                ((ve = o.stateNode.containerInfo), (ut = !0));
                break e;
              case 4:
                ((ve = o.stateNode.containerInfo), (ut = !0));
                break e;
            }
            o = o.return;
          }
          if (ve === null) throw Error(m(160));
          (na(u, i, l), (ve = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ue(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (la(t, e), (t = t.sibling));
  }
  function la(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((it(t, e), ht(e), r & 4)) {
          try {
            (dr(3, e, e.return), fl(3, e));
          } catch (C) {
            ue(e, e.return, C);
          }
          try {
            dr(5, e, e.return);
          } catch (C) {
            ue(e, e.return, C);
          }
        }
        break;
      case 1:
        (it(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return));
        break;
      case 5:
        if ((it(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (C) {
            ue(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Ti(l, u), Il(o, i));
              var p = Il(o, u);
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  x = s[i + 1];
                g === "style"
                  ? Ai(l, x)
                  : g === "dangerouslySetInnerHTML"
                    ? Fi(l, x)
                    : g === "children"
                      ? On(l, x)
                      : qe(l, g, x, p);
              }
              switch (o) {
                case "input":
                  Tl(l, u);
                  break;
                case "textarea":
                  Mi(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? on(l, !!u.multiple, S, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? on(l, !!u.multiple, u.defaultValue, !0)
                        : on(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[tr] = u;
            } catch (C) {
              ue(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((it(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (C) {
            ue(e, e.return, C);
          }
        }
        break;
      case 3:
        if ((it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            $n(t.containerInfo);
          } catch (C) {
            ue(e, e.return, C);
          }
        break;
      case 4:
        (it(t, e), ht(e));
        break;
      case 13:
        (it(t, e),
          ht(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (si = ie())),
          r & 4 && ra(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ee = (p = Ee) || g), it(t, e), (Ee = p)) : it(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !g && (e.mode & 1) !== 0)
          )
            for (E = e, g = e.child; g !== null;) {
              for (x = E = g; E !== null;) {
                switch (((v = E), (S = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, v, v.return);
                    break;
                  case 1:
                    Pn(v, v.return);
                    var N = v.stateNode;
                    if (typeof N.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (N.props = t.memoizedProps),
                          (N.state = t.memoizedState),
                          N.componentWillUnmount());
                      } catch (C) {
                        ue(r, n, C);
                      }
                    }
                    break;
                  case 5:
                    Pn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      oa(x);
                      continue;
                    }
                }
                S !== null ? ((S.return = v), (E = S)) : oa(x);
              }
              g = g.sibling;
            }
          e: for (g = null, x = e; ;) {
            if (x.tag === 5) {
              if (g === null) {
                g = x;
                try {
                  ((l = x.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = x.stateNode),
                        (s = x.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Ui("display", i))));
                } catch (C) {
                  ue(e, e.return, C);
                }
              }
            } else if (x.tag === 6) {
              if (g === null)
                try {
                  x.stateNode.nodeValue = p ? "" : x.memoizedProps;
                } catch (C) {
                  ue(e, e.return, C);
                }
            } else if (
              ((x.tag !== 22 && x.tag !== 23) || x.memoizedState === null || x === e) &&
              x.child !== null
            ) {
              ((x.child.return = x), (x = x.child));
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null;) {
              if (x.return === null || x.return === e) break e;
              (g === x && (g = null), (x = x.return));
            }
            (g === x && (g = null), (x.sibling.return = x.return), (x = x.sibling));
          }
        }
        break;
      case 19:
        (it(t, e), ht(e), r & 4 && ra(e));
        break;
      case 21:
        break;
      default:
        (it(t, e), ht(e));
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ea(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), (r.flags &= -33));
            var u = ta(e);
            ui(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ta(e);
            li(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hf(e, t, n) {
    ((E = e), ua(e));
  }
  function ua(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null;) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || cl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ee;
          o = cl;
          var p = Ee;
          if (((cl = i), (Ee = s) && !p))
            for (E = l; E !== null;)
              ((i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : sa(l));
          for (; u !== null;) ((E = u), ua(u), (u = u.sibling));
          ((E = l), (cl = o), (Ee = p));
        }
        ia(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (E = u)) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null;) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ee || fl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ee)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && os(t, u, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  os(t, i, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
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
                if (t.memoizedState === null) {
                  var p = t.alternate;
                  if (p !== null) {
                    var g = p.memoizedState;
                    if (g !== null) {
                      var x = g.dehydrated;
                      x !== null && $n(x);
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
                throw Error(m(163));
            }
          Ee || (t.flags & 512 && ri(t));
        } catch (v) {
          ue(t, t.return, v);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function oa(e) {
    for (; E !== null;) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function sa(e) {
    for (; E !== null;) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              fl(4, t);
            } catch (s) {
              ue(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ue(t, l, s);
              }
            }
            var u = t.return;
            try {
              ri(t);
            } catch (s) {
              ue(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ri(t);
            } catch (s) {
              ue(t, i, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (E = o));
        break;
      }
      E = t.return;
    }
  }
  var vf = Math.ceil,
    dl = xe.ReactCurrentDispatcher,
    ii = xe.ReactCurrentOwner,
    Ze = xe.ReactCurrentBatchConfig,
    I = 0,
    me = null,
    se = null,
    ye = 0,
    He = 0,
    Ln = Mt(0),
    ce = 0,
    pr = null,
    tn = 0,
    pl = 0,
    oi = 0,
    mr = null,
    Me = null,
    si = 0,
    jn = 1 / 0,
    Nt = null,
    ml = !1,
    ai = null,
    Vt = null,
    hl = !1,
    Bt = null,
    vl = 0,
    hr = 0,
    ci = null,
    yl = -1,
    gl = 0;
  function ze() {
    return (I & 6) !== 0 ? ie() : yl !== -1 ? yl : (yl = ie());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (I & 2) !== 0 && ye !== 0
        ? ye & -ye
        : qc.transition !== null
          ? (gl === 0 && (gl = eo()), gl)
          : ((e = W), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < hr) throw ((hr = 0), (ci = null), Error(m(185)));
    (An(e, n, r),
      ((I & 2) === 0 || e !== me) &&
        (e === me && ((I & 2) === 0 && (pl |= n), ce === 4 && Wt(e, ye)),
        De(e, r),
        n === 1 && I === 0 && (t.mode & 1) === 0 && ((jn = ie() + 500), Kr && It())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    qa(e, t);
    var r = zr(e, e === me ? ye : 0);
    if (r === 0) (n !== null && Ji(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ji(n), t === 1))
        (e.tag === 0 ? Jc(ca.bind(null, e)) : Go(ca.bind(null, e)),
          Yc(function () {
            (I & 6) === 0 && It();
          }),
          (n = null));
      else {
        switch (to(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = qi;
            break;
          case 16:
            n = Er;
            break;
          case 536870912:
            n = bi;
            break;
          default:
            n = Er;
        }
        n = ga(n, aa.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function aa(e, t) {
    if (((yl = -1), (gl = 0), (I & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = zr(e, e === me ? ye : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = I;
      I |= 2;
      var u = da();
      (me !== e || ye !== t) && ((Nt = null), (jn = ie() + 500), rn(e, t));
      do
        try {
          xf();
          break;
        } catch (o) {
          fa(e, o);
        }
      while (!0);
      (Pu(), (dl.current = u), (I = l), se !== null ? (t = 0) : ((me = null), (ye = 0), (t = ce)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = $l(e)), l !== 0 && ((r = l), (t = fi(e, l)))), t === 1))
        throw ((n = pr), rn(e, 0), Wt(e, r), De(e, ie()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !yf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((u = $l(e)), u !== 0 && ((r = u), (t = fi(e, u)))),
            t === 1))
        )
          throw ((n = pr), rn(e, 0), Wt(e, r), De(e, ie()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, Me, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = si + 500 - ie()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = yu(ln.bind(null, e, Me, Nt), t);
              break;
            }
            ln(e, Me, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - tt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = ie() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * vf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(ln.bind(null, e, Me, Nt), r);
              break;
            }
            ln(e, Me, Nt);
            break;
          case 5:
            ln(e, Me, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (De(e, ie()), e.callbackNode === n ? aa.bind(null, e) : null);
  }
  function fi(e, t) {
    var n = mr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = Me), (Me = n), t !== null && di(t)),
      e
    );
  }
  function di(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function yf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!nt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Wt(e, t) {
    for (
      t &= ~oi, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ca(e) {
    if ((I & 6) !== 0) throw Error(m(327));
    Tn();
    var t = zr(e, 0);
    if ((t & 1) === 0) return (De(e, ie()), null);
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $l(e);
      r !== 0 && ((t = r), (n = fi(e, r)));
    }
    if (n === 1) throw ((n = pr), rn(e, 0), Wt(e, t), De(e, ie()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Me, Nt),
      De(e, ie()),
      null
    );
  }
  function pi(e, t) {
    var n = I;
    I |= 1;
    try {
      return e(t);
    } finally {
      ((I = n), I === 0 && ((jn = ie() + 500), Kr && It()));
    }
  }
  function nn(e) {
    Bt !== null && Bt.tag === 0 && (I & 6) === 0 && Tn();
    var t = I;
    I |= 1;
    var n = Ze.transition,
      r = W;
    try {
      if (((Ze.transition = null), (W = 1), e)) return e();
    } finally {
      ((W = r), (Ze.transition = n), (I = t), (I & 6) === 0 && It());
    }
  }
  function mi() {
    ((He = Ln.current), Z(Ln));
  }
  function rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Kc(n)), se !== null))
      for (n = se.return; n !== null;) {
        var r = n;
        switch ((Eu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && $r());
            break;
          case 3:
            (Cn(), Z(Te), Z(we), Iu());
            break;
          case 5:
            Mu(r);
            break;
          case 4:
            Cn();
            break;
          case 13:
            Z(ne);
            break;
          case 19:
            Z(ne);
            break;
          case 10:
            Lu(r.type._context);
            break;
          case 22:
          case 23:
            mi();
        }
        n = n.return;
      }
    if (
      ((me = e),
      (se = e = $t(e.current, null)),
      (ye = He = t),
      (ce = 0),
      (pr = null),
      (oi = pl = tn = 0),
      (Me = mr = null),
      qt !== null)
    ) {
      for (t = 0; t < qt.length; t++)
        if (((n = qt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
          }
          n.pending = r;
        }
      qt = null;
    }
    return e;
  }
  function fa(e, t) {
    do {
      var n = se;
      try {
        if ((Pu(), (nl.current = il), rl)) {
          for (var r = re.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          rl = !1;
        }
        if (
          ((en = 0),
          (pe = ae = re = null),
          (or = !1),
          (sr = 0),
          (ii.current = null),
          n === null || n.return === null)
        ) {
          ((ce = 1), (pr = t), (se = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = ye),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              g = o,
              x = g.tag;
            if ((g.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var S = Is(i);
            if (S !== null) {
              ((S.flags &= -257), Fs(S, i, o, u, t), S.mode & 1 && Ds(u, p, t), (t = S), (s = p));
              var N = t.updateQueue;
              if (N === null) {
                var C = new Set();
                (C.add(s), (t.updateQueue = C));
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ds(u, p, t), hi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ee && o.mode & 1) {
            var oe = Is(i);
            if (oe !== null) {
              ((oe.flags & 65536) === 0 && (oe.flags |= 256), Fs(oe, i, o, u, t), Cu(zn(s, o)));
              break e;
            }
          }
          ((u = s = zn(s, o)),
            ce !== 4 && (ce = 2),
            mr === null ? (mr = [u]) : mr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Os(u, s, t);
                is(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Vt === null || !Vt.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var w = Ms(u, o, t);
                  is(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ma(n);
      } catch (z) {
        ((t = z), se === n && n !== null && (se = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = dl.current;
    return ((dl.current = il), e === null ? il : e);
  }
  function hi() {
    ((ce === 0 || ce === 3 || ce === 2) && (ce = 4),
      me === null || ((tn & 268435455) === 0 && (pl & 268435455) === 0) || Wt(me, ye));
  }
  function xl(e, t) {
    var n = I;
    I |= 2;
    var r = da();
    (me !== e || ye !== t) && ((Nt = null), rn(e, t));
    do
      try {
        gf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((Pu(), (I = n), (dl.current = r), se !== null)) throw Error(m(261));
    return ((me = null), (ye = 0), ce);
  }
  function gf() {
    for (; se !== null;) pa(se);
  }
  function xf() {
    for (; se !== null && !Wa();) pa(se);
  }
  function pa(e) {
    var t = ya(e.alternate, e, He);
    ((e.memoizedProps = e.pendingProps), t === null ? ma(e) : (se = t), (ii.current = null));
  }
  function ma(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = ff(n, t, He)), n !== null)) {
          se = n;
          return;
        }
      } else {
        if (((n = df(n, t)), n !== null)) {
          ((n.flags &= 32767), (se = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ce = 6), (se = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    ce === 0 && (ce = 5);
  }
  function ln(e, t, n) {
    var r = W,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (W = 1), wf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (W = r));
    }
    return null;
  }
  function wf(e, t, n, r) {
    do Tn();
    while (Bt !== null);
    if ((I & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (ba(e, u),
      e === me && ((se = me = null), (ye = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        hl ||
        ((hl = !0),
        ga(Er, function () {
          return (Tn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ze.transition), (Ze.transition = null));
      var i = W;
      W = 1;
      var o = I;
      ((I |= 4),
        (ii.current = null),
        mf(e, n),
        la(n, e),
        Ac(hu),
        (jr = !!mu),
        (hu = mu = null),
        (e.current = n),
        hf(n),
        $a(),
        (I = o),
        (W = i),
        (Ze.transition = u));
    } else e.current = n;
    if (
      (hl && ((hl = !1), (Bt = e), (vl = l)),
      (u = e.pendingLanes),
      u === 0 && (Vt = null),
      Ya(n.stateNode),
      De(e, ie()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (ml) throw ((ml = !1), (e = ai), (ai = null), e);
    return (
      (vl & 1) !== 0 && e.tag !== 0 && Tn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === ci ? hr++ : ((hr = 0), (ci = e))) : (hr = 0),
      It(),
      null
    );
  }
  function Tn() {
    if (Bt !== null) {
      var e = to(vl),
        t = Ze.transition,
        n = W;
      try {
        if (((Ze.transition = null), (W = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (vl = 0), (I & 6) !== 0)) throw Error(m(331));
          var l = I;
          for (I |= 4, E = e.current; E !== null;) {
            var u = E,
              i = u.child;
            if ((E.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null;) {
                    var g = E;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, g, u);
                    }
                    var x = g.child;
                    if (x !== null) ((x.return = g), (E = x));
                    else
                      for (; E !== null;) {
                        g = E;
                        var v = g.sibling,
                          S = g.return;
                        if ((bs(g), g === p)) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = S), (E = v));
                          break;
                        }
                        E = S;
                      }
                  }
                }
                var N = u.alternate;
                if (N !== null) {
                  var C = N.child;
                  if (C !== null) {
                    N.child = null;
                    do {
                      var oe = C.sibling;
                      ((C.sibling = null), (C = oe));
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (E = i));
            else
              e: for (; E !== null;) {
                if (((u = E), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (E = f));
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null;) {
            i = E;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (E = d));
            else
              e: for (i = a; E !== null;) {
                if (((o = E), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fl(9, o);
                    }
                  } catch (z) {
                    ue(o, o.return, z);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  ((w.return = o.return), (E = w));
                  break e;
                }
                E = o.return;
              }
          }
          if (((I = l), It(), ft && typeof ft.onPostCommitFiberRoot == "function"))
            try {
              ft.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((W = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function ha(e, t, n) {
    ((t = zn(n, t)),
      (t = Os(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = ze()),
      e !== null && (An(e, 1, t), De(e, t)));
  }
  function ue(e, t, n) {
    if (e.tag === 3) ha(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ha(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = Ms(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = ze()),
              t !== null && (An(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function kf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      me === e &&
        (ye & n) === n &&
        (ce === 4 || (ce === 3 && (ye & 130023424) === ye && 500 > ie() - si)
          ? rn(e, 0)
          : (oi |= n)),
      De(e, t));
  }
  function va(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Cr), (Cr <<= 1), (Cr & 130023424) === 0 && (Cr = 4194304)));
    var n = ze();
    ((e = St(e, t)), e !== null && (An(e, t, n), De(e, n)));
  }
  function Sf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), va(e, n));
  }
  function Ef(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), va(e, n));
  }
  var ya;
  ya = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), cf(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), ee && (t.flags & 1048576) !== 0 && Zo(t, Xr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (al(e, t), (e = t.pendingProps));
        var l = xn(t, we.current);
        (Nn(t, n), (l = Au(null, t, r, e, l, n)));
        var u = Vu();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((u = !0), Qr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Ru(t),
              (l.updater = ol),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ku(t, r, e, n),
              (t = Zu(null, t, r, !0, u, n)))
            : ((t.tag = 0), ee && u && Su(t), Ce(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (al(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Gu(null, t, r, e, n);
              break e;
            case 1:
              t = Ws(null, t, r, e, n);
              break e;
            case 11:
              t = Us(null, t, r, e, n);
              break e;
            case 14:
              t = As(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Gu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Ws(e, t, r, l, n)
        );
      case 3:
        e: {
          if (($s(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            us(e, t),
            el(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = zn(Error(m(423)), t)), (t = Qs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Qs(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = Ot(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  ee = !0,
                  rt = null,
                  n = rs(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Sn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Ce(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ss(t),
          e === null && Nu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          vu(r, l) ? (i = null) : u !== null && vu(r, u) && (t.flags |= 32),
          Hs(e, t),
          Ce(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Nu(t), null);
      case 13:
        return Ks(e, t, n);
      case 4:
        return (
          Ou(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Ce(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Us(e, t, r, l, n)
        );
      case 7:
        return (Ce(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ce(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ce(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            Y(Jr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (nt(u.value, i)) {
              if (u.children === l.children && !Te.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        ((s = Et(-1, n & -n)), (s.tag = 2));
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var g = p.pending;
                          (g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        ju(u.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  ((i.lanes |= n),
                    (o = i.alternate),
                    o !== null && (o.lanes |= n),
                    ju(i, n, t),
                    (i = u.sibling));
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      ((u.return = i.return), (i = u));
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          (Ce(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ce(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = lt(r, t.pendingProps)), (l = lt(r.type, l)), As(e, t, r, l, n));
      case 15:
        return Vs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          al(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Qr(t)) : (e = !1),
          Nn(t, n),
          Ts(t, r, l),
          Ku(t, r, l, n),
          Zu(null, t, r, !0, e, n)
        );
      case 19:
        return Xs(e, t, n);
      case 22:
        return Bs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function ga(e, t) {
    return Zi(e, t);
  }
  function _f(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Je(e, t, n, r) {
    return new _f(e, t, n, r);
  }
  function vi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Nf(e) {
    if (typeof e == "function") return vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function $t(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Je(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function wl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) vi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Le:
          return un(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case Ct:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Ct), (e.lanes = u), e);
        case Fe:
          return ((e = Je(13, n, t, l)), (e.elementType = Fe), (e.lanes = u), e);
        case et:
          return ((e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = u), e);
        case le:
          return kl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yt:
                i = 10;
                break e;
              case Kt:
                i = 9;
                break e;
              case at:
                i = 11;
                break e;
              case ct:
                i = 14;
                break e;
              case je:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function un(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function kl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function gi(e, t, n) {
    return (
      (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Cf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function xi(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Cf(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Je(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ru(u),
      e
    );
  }
  function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function xa(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Re(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return Yo(e, n, t);
    }
    return t;
  }
  function wa(e, t, n, r, l, u, i, o, s) {
    return (
      (e = xi(n, r, !0, e, l, u, i, o, s)),
      (e.context = xa(null)),
      (n = e.current),
      (r = ze()),
      (l = Ht(n)),
      (u = Et(r, l)),
      (u.callback = t ?? null),
      Ut(n, u, l),
      (e.current.lanes = l),
      An(e, l, r),
      De(e, r),
      e
    );
  }
  function Sl(e, t, n, r) {
    var l = t.current,
      u = ze(),
      i = Ht(l);
    return (
      (n = xa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, i)),
      e !== null && (ot(e, l, i, u), br(e, l, i)),
      i
    );
  }
  function El(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ka(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function wi(e, t) {
    (ka(e, t), (e = e.alternate) && ka(e, t));
  }
  function Pf() {
    return null;
  }
  var Sa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ki(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = ki.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Sl(e, t, null, null);
    }),
    (_l.prototype.unmount = ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (nn(function () {
            Sl(null, e, null, null);
          }),
            (t[gt] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = lo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
      (jt.splice(n, 0, e), n === 0 && oo(e));
    }
  };
  function Si(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ea() {}
  function Lf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = El(i);
          u.call(p);
        };
      }
      var i = wa(t, r, e, 0, null, !1, !1, "", Ea);
      return (
        (e._reactRootContainer = i),
        (e[gt] = i.current),
        bn(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = El(s);
        o.call(p);
      };
    }
    var s = xi(e, 0, !1, null, null, !1, !1, "", Ea);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      bn(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        Sl(t, s, n, r);
      }),
      s
    );
  }
  function Cl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = El(i);
          o.call(s);
        };
      }
      Sl(t, i, e, l);
    } else i = Lf(n, t, e, l, r);
    return El(i);
  }
  ((no = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes);
          n !== 0 && (Kl(t, n | 1), De(t, ie()), (I & 6) === 0 && ((jn = ie() + 500), It()));
        }
        break;
      case 13:
        (nn(function () {
          var r = St(e, 1);
          if (r !== null) {
            var l = ze();
            ot(r, e, 1, l);
          }
        }),
          wi(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = St(e, 134217728);
        if (t !== null) {
          var n = ze();
          ot(t, e, 134217728, n);
        }
        wi(e, 134217728);
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = St(e, t);
        if (n !== null) {
          var r = ze();
          ot(n, e, t, r);
        }
        wi(e, t);
      }
    }),
    (lo = function () {
      return W;
    }),
    (uo = function (e, t) {
      var n = W;
      try {
        return ((W = e), t());
      } finally {
        W = n;
      }
    }),
    (Al = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Tl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Wr(r);
                if (!l) throw Error(m(90));
                (Li(r), Tl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Mi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && on(e, !!n.multiple, t, !1));
      }
    }),
    (Wi = pi),
    ($i = nn));
  var jf = { usingClientEntryPoint: !1, Events: [nr, yn, Wr, Bi, Hi, pi] },
    vr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Tf = {
      bundleType: vr.bundleType,
      version: vr.version,
      rendererPackageName: vr.rendererPackageName,
      rendererConfig: vr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Xi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: vr.findFiberByHostInstance || Pf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        ((_r = zl.inject(Tf)), (ft = zl));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Si(t)) throw Error(m(200));
      return zf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Si(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Sa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = xi(e, 1, !1, null, null, n, !1, r, l)),
        (e[gt] = t.current),
        bn(e.nodeType === 8 ? e.parentNode : e),
        new ki(t)
      );
    }),
    (Ie.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Xi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return nn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Cl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Si(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Sa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = wa(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[gt] = t.current),
        bn(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new _l(t);
    }),
    (Ie.render = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Cl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (nn(function () {
            Cl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[gt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = pi),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Cl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Ta;
function Vf() {
  if (Ta) return Ni.exports;
  Ta = 1;
  function P() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (B) {
        console.error(B);
      }
  }
  return (P(), (Ni.exports = Af()), Ni.exports);
}
var Ra;
function Bf() {
  if (Ra) return Pl;
  Ra = 1;
  var P = Vf();
  return ((Pl.createRoot = P.createRoot), (Pl.hydrateRoot = P.hydrateRoot), Pl);
}
var Hf = Bf();
const Wf =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_074215_f4339e1c-0b1a-4f60-98b2-90e3d7840cb7.mp4",
  $f =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4",
  Qf =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4",
  Kf = ["products", "offerings", "mission", "contact"],
  Ma = "linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)";
function Yf({ className: P = "" }) {
  return h.jsx("svg", {
    viewBox: "0 0 256 256",
    className: P,
    fill: "white",
    "aria-hidden": !0,
    children: h.jsx("path", {
      d: "M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z",
    }),
  });
}
function Da({ src: P }) {
  return h.jsx("video", {
    className: "absolute inset-0 h-full w-full object-cover",
    src: P,
    autoPlay: !0,
    loop: !0,
    muted: !0,
    playsInline: !0,
  });
}
function Xf() {
  return h.jsxs("nav", {
    className:
      "absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-3 pt-4 sm:px-6 sm:pt-6 md:px-10",
    children: [
      h.jsxs("div", {
        className:
          "flex items-center gap-2 rounded-full bg-neutral-900/90 py-2.5 pl-3 pr-4 backdrop-blur sm:gap-2.5 sm:py-3 sm:pl-4 sm:pr-6",
        children: [
          h.jsx(Yf, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
          h.jsx("span", { className: "text-xs text-white sm:text-sm", children: "guardnet" }),
        ],
      }),
      h.jsx("div", {
        className: "hidden rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex",
        children: Kf.map((P) =>
          h.jsx(
            "a",
            {
              href: `#${P}`,
              className:
                "rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white",
              children: P,
            },
            P,
          ),
        ),
      }),
      h.jsx("button", {
        type: "button",
        className:
          "rounded-full bg-white px-4 py-2.5 text-xs text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3 sm:text-sm",
        children: "start today",
      }),
    ],
  });
}
function Gf() {
  return h.jsxs("section", {
    className: "relative h-screen min-h-screen w-full overflow-hidden bg-black",
    children: [
      h.jsx(Da, { src: Wf }),
      h.jsxs("div", {
        className: "relative mx-auto h-full w-full max-w-[1320px]",
        children: [
          h.jsx("h1", {
            className:
              "hero-title absolute left-3 top-[20%] text-[24vw] font-medium text-white sm:left-4 sm:top-[18%] md:left-10 md:text-[18vw]",
            children: "shelter",
          }),
          h.jsx("h1", {
            className:
              "hero-title absolute right-3 top-[36%] text-[24vw] font-medium text-white sm:right-4 sm:top-[38%] md:right-10 md:text-[18vw]",
            children: "user",
          }),
          h.jsx("h1", {
            className:
              "hero-title absolute left-[10%] top-[56%] text-[24vw] font-medium text-white sm:left-[18%] sm:top-[58%] md:left-[28%] md:text-[18vw]",
            children: "info",
          }),
          h.jsx("p", {
            className:
              "absolute left-4 top-[48%] max-w-[220px] text-[13px] font-light leading-relaxed text-white/90 sm:left-6 sm:top-[46%] sm:max-w-[300px] sm:text-[18px] md:left-10",
            children:
              "we are holding each file with supreme care, granting user with safety in all place",
          }),
          h.jsx("div", {
            className: "absolute bottom-20 left-4 sm:bottom-24 sm:left-6 md:left-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      children: "+2.7b",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      children: "mb info was concealed",
                    }),
                  ],
                }),
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(-20deg)" },
                  "aria-hidden": !0,
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "absolute right-4 top-[22%] sm:right-6 md:right-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(20deg)" },
                  "aria-hidden": !0,
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      children: "+90k",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      children: "ventures run",
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "absolute bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(-20deg)" },
                  "aria-hidden": !0,
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      children: "+450k",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      children: "transfers",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      h.jsx("div", {
        className:
          "pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black",
        "aria-hidden": !0,
      }),
    ],
  });
}
function Zf() {
  return h.jsxs("section", {
    className: "relative h-screen min-h-[600px] w-full overflow-hidden bg-black",
    children: [
      h.jsx(Da, { src: $f }),
      h.jsx("div", {
        className:
          "pointer-events-none absolute left-0 right-0 top-0 z-10 h-48 bg-gradient-to-b from-black to-transparent",
        "aria-hidden": !0,
      }),
      h.jsxs("div", {
        className: "relative mx-auto h-full w-full max-w-[1100px]",
        children: [
          h.jsx("div", {
            className:
              "absolute left-1/2 top-6 z-20 w-max max-w-[95vw] -translate-x-1/2 rounded-full bg-neutral-900/80 p-2 backdrop-blur sm:top-10 sm:p-3",
            children: h.jsxs("div", {
              className: "flex items-center gap-1 sm:gap-2",
              children: [
                h.jsx("button", {
                  type: "button",
                  className:
                    "whitespace-nowrap rounded-full px-4 py-2 text-xs text-white/90 transition-colors hover:text-white sm:px-7 sm:py-3 sm:text-sm",
                  children: "confirm real person",
                }),
                h.jsx("button", {
                  type: "button",
                  className:
                    "whitespace-nowrap rounded-full px-4 py-2 text-xs text-black sm:px-7 sm:py-3 sm:text-sm",
                  style: { background: Ma },
                  children: "run demo",
                }),
              ],
            }),
          }),
          h.jsx("p", {
            className:
              "absolute left-4 top-[62%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/80 sm:left-6 sm:top-[56%] sm:max-w-[440px] sm:text-[18px] md:left-16",
            children:
              "shielding users info with premier tech, granting them with safety in all place",
          }),
          h.jsx("p", {
            className:
              "absolute right-4 top-[26%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/90 sm:right-6 sm:top-[34%] sm:max-w-[500px] sm:text-[18px] md:right-16",
            children:
              "By teaming up with a defender service, a business can dramatically improve the safeguard of its important info. This covers applying strong obfuscation protocols, gateway barriers, and observation engines to shield against unauthorized entries, info escapes, and malicious cyberhacks.",
          }),
        ],
      }),
    ],
  });
}
function Ll({ icon: P, label: B, twoLine: m }) {
  return h.jsxs("div", {
    className: "relative z-10 flex items-center gap-2 sm:gap-3",
    children: [
      P,
      m
        ? h.jsxs("div", {
            className: "text-lg font-semibold leading-tight tracking-tight text-white sm:text-2xl",
            children: [h.jsx("div", { children: "Eastern" }), h.jsx("div", { children: "Delta" })],
          })
        : h.jsx("span", {
            className: "text-xl font-semibold tracking-tight text-white sm:text-3xl",
            children: B,
          }),
    ],
  });
}
function Jf() {
  return h.jsxs("section", {
    className: "relative w-full bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10",
    children: [
      h.jsxs("div", {
        className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
        children: [
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsx(Ll, {
                label: "Apex",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#FA8453] opacity-30 blur-3xl",
              }),
              h.jsx("div", {
                className:
                  "absolute -bottom-24 -right-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-25 blur-3xl",
              }),
              h.jsx(Ll, {
                label: "forge",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46zM8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04zM16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3zm-.53-.3L12 16.02l-3.52-2.02v-4.02L12 7.96l3.52 2.02v4.02z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-30 blur-3xl",
              }),
              h.jsx(Ll, {
                label: "Eastern Delta",
                twoLine: !0,
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -right-28 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsx(Ll, {
                label: "Skybank",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className:
          "mt-16 flex flex-col items-start justify-between gap-6 sm:mt-28 sm:gap-8 md:ml-auto md:w-[70%] md:flex-row md:items-center",
        children: [
          h.jsx("p", {
            className:
              "max-w-md text-[13px] font-light leading-relaxed text-white/70 sm:text-[18px]",
            children:
              "shielding users info with premier tech, granting them with safety in all place",
          }),
          h.jsx("div", {
            className: "relative rounded-full p-[1.5px]",
            style: { background: Ma },
            children: h.jsx("button", {
              type: "button",
              className:
                "block rounded-full bg-black px-8 py-2.5 text-sm text-white sm:px-10 sm:py-3",
              children: "Run Demo",
            }),
          }),
        ],
      }),
    ],
  });
}
const Oa =
  "Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure.";
function qf() {
  return h.jsxs("section", {
    className: "relative w-full bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10",
    children: [
      h.jsx("h2", {
        className:
          "mb-12 text-center text-3xl font-light text-white sm:mb-24 sm:text-4xl md:text-5xl",
        style: { letterSpacing: "-0.04em" },
        children: "Key Benefits",
      }),
      h.jsxs("div", {
        className: "grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3",
        children: [
          h.jsxs("div", {
            className:
              "relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8",
            children: [
              h.jsx("div", {
                className:
                  "absolute top-1/2 -left-[420px] h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsxs("div", {
                className: "relative z-10",
                children: [
                  h.jsxs("h3", {
                    className: "text-xl font-light leading-tight sm:text-2xl",
                    children: ["Preemptive Risks", h.jsx("br", {}), "Scouting and Reactions"],
                  }),
                  h.jsx("p", {
                    className:
                      "mt-12 max-w-[280px] text-[13px] font-light leading-relaxed text-white/70 sm:mt-20 sm:text-[14px]",
                    children: Oa,
                  }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 sm:h-[460px]",
            children: [
              h.jsxs("div", {
                className: "relative w-full overflow-hidden",
                style: { height: "75%" },
                children: [
                  h.jsx("video", {
                    className: "block h-full w-full object-cover",
                    src: Qf,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                  }),
                  h.jsx("div", {
                    className:
                      "pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950",
                    "aria-hidden": !0,
                  }),
                ],
              }),
              h.jsx("div", {
                className: "flex flex-1 items-center justify-start p-6 sm:p-8",
                children: h.jsxs("h3", {
                  className: "text-xl font-light leading-tight sm:text-2xl",
                  children: ["Know-how and Sectoral", h.jsx("br", {}), "Awareness"],
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8",
            children: [
              h.jsx("div", {
                className:
                  "absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsxs("div", {
                className: "relative z-10 flex h-full flex-col",
                children: [
                  h.jsxs("h3", {
                    className: "text-xl font-light leading-tight sm:text-2xl",
                    children: ["Preemptive Risks", h.jsx("br", {}), "Scouting and Reactions"],
                  }),
                  h.jsx("p", {
                    className:
                      "mt-auto max-w-[320px] text-[13px] font-light leading-relaxed text-white/70 sm:text-[14px]",
                    children: Oa,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function bf() {
  return h.jsxs("div", {
    className:
      "flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-black text-white",
    children: [
      h.jsxs("div", { className: "relative w-full", children: [h.jsx(Xf, {}), h.jsx(Gf, {})] }),
      h.jsxs("div", {
        className: "w-full max-w-[1400px]",
        children: [h.jsx(Zf, {}), h.jsx(Jf, {}), h.jsx(qf, {})],
      }),
    ],
  });
}
Hf.createRoot(document.getElementById("root")).render(
  h.jsx(If.StrictMode, { children: h.jsx(bf, {}) }),
);
