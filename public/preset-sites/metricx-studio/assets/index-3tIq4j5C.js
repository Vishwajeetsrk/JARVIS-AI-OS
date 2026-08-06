(function () {
  const O = document.createElement("link").relList;
  if (O && O.supports && O.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) se(F);
  new MutationObserver((F) => {
    for (const B of F)
      if (B.type === "childList")
        for (const ae of B.addedNodes)
          ae.tagName === "LINK" && ae.rel === "modulepreload" && se(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(F) {
    const B = {};
    return (
      F.integrity && (B.integrity = F.integrity),
      F.referrerPolicy && (B.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : F.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function se(F) {
    if (F.ep) return;
    F.ep = !0;
    const B = m(F);
    fetch(F.href, B);
  }
})();
var Ci = { exports: {} },
  gr = {},
  _i = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function Mf() {
  if (_a) return I;
  _a = 1;
  var P = Symbol.for("react.element"),
    O = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    se = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    te = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (te && c[te]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var He = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    q = {};
  function K(c, v, M) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = M || He));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (K.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function vt() {}
  vt.prototype = K.prototype;
  function st(c, v, M) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = M || He));
  }
  var qe = (st.prototype = new vt());
  ((qe.constructor = st), $e(qe, K.prototype), (qe.isPureReactComponent = !0));
  var Se = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, M) {
    var D,
      A = {},
      W = null,
      Y = null;
    if (v != null)
      for (D in (v.ref !== void 0 && (Y = v.ref), v.key !== void 0 && (W = "" + v.key), v))
        be.call(v, D) && !Le.hasOwnProperty(D) && (A[D] = v[D]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = M;
    else if (1 < $) {
      for (var b = Array($), Ue = 0; Ue < $; Ue++) b[Ue] = arguments[Ue + 2];
      A.children = b;
    }
    if (c && c.defaultProps) for (D in (($ = c.defaultProps), $)) A[D] === void 0 && (A[D] = $[D]);
    return { $$typeof: P, type: c, key: W, ref: Y, props: A, _owner: Ne.current };
  }
  function Nt(c, v) {
    return { $$typeof: P, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === P;
  }
  function Kt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (M) {
        return v[M];
      })
    );
  }
  var at = /\/+/g;
  function Fe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Kt("" + c.key) : v.toString(36);
  }
  function et(c, v, M, D, A) {
    var W = typeof c;
    (W === "undefined" || W === "boolean") && (c = null);
    var Y = !1;
    if (c === null) Y = !0;
    else
      switch (W) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case P:
            case O:
              Y = !0;
          }
      }
    if (Y)
      return (
        (Y = c),
        (A = A(Y)),
        (c = D === "" ? "." + Fe(Y, 0) : D),
        Se(A)
          ? ((M = ""),
            c != null && (M = c.replace(at, "$&/") + "/"),
            et(A, v, M, "", function (Ue) {
              return Ue;
            }))
          : A != null &&
            (yt(A) &&
              (A = Nt(
                A,
                M +
                  (!A.key || (Y && Y.key === A.key) ? "" : ("" + A.key).replace(at, "$&/") + "/") +
                  c,
              )),
            v.push(A)),
        1
      );
    if (((Y = 0), (D = D === "" ? "." : D + ":"), Se(c)))
      for (var $ = 0; $ < c.length; $++) {
        W = c[$];
        var b = D + Fe(W, $);
        Y += et(W, v, M, b, A);
      }
    else if (((b = J(c)), typeof b == "function"))
      for (c = b.call(c), $ = 0; !(W = c.next()).done;)
        ((W = W.value), (b = D + Fe(W, $++)), (Y += et(W, v, M, b, A)));
    else if (W === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Y;
  }
  function ct(c, v, M) {
    if (c == null) return c;
    var D = [],
      A = 0;
    return (
      et(c, D, "", "", function (W) {
        return v.call(M, W, A++);
      }),
      D
    );
  }
  function Te(c) {
    if (c._status === -1) {
      var v = c._result;
      ((v = v()),
        v.then(
          function (M) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = M));
          },
          function (M) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = M));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = v)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var le = { current: null },
    k = { transition: null },
    T = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ne };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: ct,
      forEach: function (c, v, M) {
        ct(
          c,
          function () {
            v.apply(this, arguments);
          },
          M,
        );
      },
      count: function (c) {
        var v = 0;
        return (
          ct(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          ct(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (I.Component = K),
    (I.Fragment = m),
    (I.Profiler = F),
    (I.PureComponent = st),
    (I.StrictMode = se),
    (I.Suspense = H),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (I.act = E),
    (I.cloneElement = function (c, v, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var D = $e({}, c.props),
        A = c.key,
        W = c.ref,
        Y = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((W = v.ref), (Y = Ne.current)),
          v.key !== void 0 && (A = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (b in v)
          be.call(v, b) &&
            !Le.hasOwnProperty(b) &&
            (D[b] = v[b] === void 0 && $ !== void 0 ? $[b] : v[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) D.children = M;
      else if (1 < b) {
        $ = Array(b);
        for (var Ue = 0; Ue < b; Ue++) $[Ue] = arguments[Ue + 2];
        D.children = $;
      }
      return { $$typeof: P, type: c.type, key: A, ref: W, props: D, _owner: Y };
    }),
    (I.createContext = function (c) {
      return (
        (c = {
          $$typeof: ae,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: B, _context: c }),
        (c.Consumer = c)
      );
    }),
    (I.createElement = Qe),
    (I.createFactory = function (c) {
      var v = Qe.bind(null, c);
      return ((v.type = c), v);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (I.isValidElement = yt),
    (I.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Te };
    }),
    (I.memo = function (c, v) {
      return { $$typeof: ge, type: c, compare: v === void 0 ? null : v };
    }),
    (I.startTransition = function (c) {
      var v = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = v;
      }
    }),
    (I.unstable_act = E),
    (I.useCallback = function (c, v) {
      return le.current.useCallback(c, v);
    }),
    (I.useContext = function (c) {
      return le.current.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c) {
      return le.current.useDeferredValue(c);
    }),
    (I.useEffect = function (c, v) {
      return le.current.useEffect(c, v);
    }),
    (I.useId = function () {
      return le.current.useId();
    }),
    (I.useImperativeHandle = function (c, v, M) {
      return le.current.useImperativeHandle(c, v, M);
    }),
    (I.useInsertionEffect = function (c, v) {
      return le.current.useInsertionEffect(c, v);
    }),
    (I.useLayoutEffect = function (c, v) {
      return le.current.useLayoutEffect(c, v);
    }),
    (I.useMemo = function (c, v) {
      return le.current.useMemo(c, v);
    }),
    (I.useReducer = function (c, v, M) {
      return le.current.useReducer(c, v, M);
    }),
    (I.useRef = function (c) {
      return le.current.useRef(c);
    }),
    (I.useState = function (c) {
      return le.current.useState(c);
    }),
    (I.useSyncExternalStore = function (c, v, M) {
      return le.current.useSyncExternalStore(c, v, M);
    }),
    (I.useTransition = function () {
      return le.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var Na;
function Li() {
  return (Na || ((Na = 1), (_i.exports = Mf())), _i.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function If() {
  if (Pa) return gr;
  Pa = 1;
  var P = Li(),
    O = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    se = Object.prototype.hasOwnProperty,
    F = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, H, ge) {
    var me,
      te = {},
      J = null,
      He = null;
    (ge !== void 0 && (J = "" + ge),
      H.key !== void 0 && (J = "" + H.key),
      H.ref !== void 0 && (He = H.ref));
    for (me in H) se.call(H, me) && !B.hasOwnProperty(me) && (te[me] = H[me]);
    if (ce && ce.defaultProps)
      for (me in ((H = ce.defaultProps), H)) te[me] === void 0 && (te[me] = H[me]);
    return { $$typeof: O, type: ce, key: J, ref: He, props: te, _owner: F.current };
  }
  return ((gr.Fragment = m), (gr.jsx = ae), (gr.jsxs = ae), gr);
}
var za;
function Df() {
  return (za || ((za = 1), (Ci.exports = If())), Ci.exports);
}
var R = Df(),
  jn = Li(),
  Tl = {},
  Ni = { exports: {} },
  De = {},
  Pi = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Ff() {
  return (
    La ||
      ((La = 1),
      (function (P) {
        function O(k, T) {
          var E = k.length;
          k.push(T);
          e: for (; 0 < E;) {
            var c = (E - 1) >>> 1,
              v = k[c];
            if (0 < F(v, T)) ((k[c] = T), (k[E] = v), (E = c));
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function se(k) {
          if (k.length === 0) return null;
          var T = k[0],
            E = k.pop();
          if (E !== T) {
            k[0] = E;
            e: for (var c = 0, v = k.length, M = v >>> 1; c < M;) {
              var D = 2 * (c + 1) - 1,
                A = k[D],
                W = D + 1,
                Y = k[W];
              if (0 > F(A, E))
                W < v && 0 > F(Y, A)
                  ? ((k[c] = Y), (k[W] = E), (c = W))
                  : ((k[c] = A), (k[D] = E), (c = D));
              else if (W < v && 0 > F(Y, E)) ((k[c] = Y), (k[W] = E), (c = W));
              else break e;
            }
          }
          return T;
        }
        function F(k, T) {
          var E = k.sortIndex - T.sortIndex;
          return E !== 0 ? E : k.id - T.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var B = performance;
          P.unstable_now = function () {
            return B.now();
          };
        } else {
          var ae = Date,
            ce = ae.now();
          P.unstable_now = function () {
            return ae.now() - ce;
          };
        }
        var H = [],
          ge = [],
          me = 1,
          te = null,
          J = 3,
          He = !1,
          $e = !1,
          q = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          vt = typeof clearTimeout == "function" ? clearTimeout : null,
          st = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(k) {
          for (var T = m(ge); T !== null;) {
            if (T.callback === null) se(ge);
            else if (T.startTime <= k) (se(ge), (T.sortIndex = T.expirationTime), O(H, T));
            else break;
            T = m(ge);
          }
        }
        function Se(k) {
          if (((q = !1), qe(k), !$e))
            if (m(H) !== null) (($e = !0), Te(be));
            else {
              var T = m(ge);
              T !== null && le(Se, T.startTime - k);
            }
        }
        function be(k, T) {
          (($e = !1), q && ((q = !1), vt(Qe), (Qe = -1)), (He = !0));
          var E = J;
          try {
            for (qe(T), te = m(H); te !== null && (!(te.expirationTime > T) || (k && !Kt()));) {
              var c = te.callback;
              if (typeof c == "function") {
                ((te.callback = null), (J = te.priorityLevel));
                var v = c(te.expirationTime <= T);
                ((T = P.unstable_now()),
                  typeof v == "function" ? (te.callback = v) : te === m(H) && se(H),
                  qe(T));
              } else se(H);
              te = m(H);
            }
            if (te !== null) var M = !0;
            else {
              var D = m(ge);
              (D !== null && le(Se, D.startTime - T), (M = !1));
            }
            return M;
          } finally {
            ((te = null), (J = E), (He = !1));
          }
        }
        var Ne = !1,
          Le = null,
          Qe = -1,
          Nt = 5,
          yt = -1;
        function Kt() {
          return !(P.unstable_now() - yt < Nt);
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
            K(at, 0);
          };
        function Te(k) {
          ((Le = k), Ne || ((Ne = !0), Fe()));
        }
        function le(k, T) {
          Qe = K(function () {
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
            $e || He || (($e = !0), Te(be));
          }),
          (P.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Nt = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (P.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (P.unstable_getFirstCallbackNode = function () {
            return m(H);
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
            var E = J;
            J = T;
            try {
              return k();
            } finally {
              J = E;
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
            var E = J;
            J = k;
            try {
              return T();
            } finally {
              J = E;
            }
          }),
          (P.unstable_scheduleCallback = function (k, T, E) {
            var c = P.unstable_now();
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? c + E : c))
                : (E = c),
              k)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = E + v),
              (k = {
                id: me++,
                callback: T,
                priorityLevel: k,
                startTime: E,
                expirationTime: v,
                sortIndex: -1,
              }),
              E > c
                ? ((k.sortIndex = E),
                  O(ge, k),
                  m(H) === null &&
                    k === m(ge) &&
                    (q ? (vt(Qe), (Qe = -1)) : (q = !0), le(Se, E - c)))
                : ((k.sortIndex = v), O(H, k), $e || He || (($e = !0), Te(be))),
              k
            );
          }),
          (P.unstable_shouldYield = Kt),
          (P.unstable_wrapCallback = function (k) {
            var T = J;
            return function () {
              var E = J;
              J = T;
              try {
                return k.apply(this, arguments);
              } finally {
                J = E;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var Ta;
function Uf() {
  return (Ta || ((Ta = 1), (Pi.exports = Ff())), Pi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Af() {
  if (Ra) return De;
  Ra = 1;
  var P = Li(),
    O = Uf();
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
  var se = new Set(),
    F = {};
  function B(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) se.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    H = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    te = {};
  function J(e) {
    return H.call(te, e) ? !0 : H.call(me, e) ? !1 : ge.test(e) ? (te[e] = !0) : ((me[e] = !0), !1);
  }
  function He(e, t, n, r) {
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
    if (t === null || typeof t > "u" || He(e, t, n, r)) return !0;
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
  var K = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      K[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      K[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        K[e] = new q(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(vt, st);
      K[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(vt, st);
        K[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(vt, st);
      K[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function qe(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
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
  var Se = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Nt = Symbol.for("react.profiler"),
    yt = Symbol.for("react.provider"),
    Kt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ct = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    le = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var E = Object.assign,
    c;
  function v(e) {
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
  var M = !1;
  function D(e, t) {
    if (!e || M) return "";
    M = !0;
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
      ((M = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
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
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ne:
        return "Portal";
      case Nt:
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
          return ((t = e.displayName || null), t !== null ? t : W(e.type) || "Memo");
        case Te:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  function Y(e) {
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
        return W(t);
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
  function $(e) {
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
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Ti(e) {
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
  function Sr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return E({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ri(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = $(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function ji(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function jl(e, t) {
    ji(e, t);
    var n = $(t.value),
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
      ? Ol(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, $(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Oi(e, t, n) {
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
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function on(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + $(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ml(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return E({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Mi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (On(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: $(n) };
  }
  function Ii(e, t) {
    var n = $(t.value),
      r = $(t.defaultValue);
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
  function Fi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Fi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var xr,
    Ui = (function (e) {
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
          xr = xr || document.createElement("div"),
            xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = xr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
    Fa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Fa.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function Ai(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ai(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ua = E(
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
      if (Ua[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Fl(e, t) {
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
  var Ul = null;
  function Al(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wl = null,
    sn = null,
    an = null;
  function Vi(e) {
    if ((e = rr(e))) {
      if (typeof Wl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Wl(e.stateNode, e.type, t));
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
  function $i(e, t) {
    return e(t);
  }
  function Qi() {}
  var Vl = !1;
  function Ki(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return $i(e, t, n);
    } finally {
      ((Vl = !1), (sn !== null || an !== null) && (Qi(), Hi()));
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
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
  if (ce)
    try {
      var Fn = {};
      (Object.defineProperty(Fn, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Fn, Fn),
        window.removeEventListener("test", Fn, Fn));
    } catch {
      Bl = !1;
    }
  function Aa(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1,
    Er = null,
    Cr = !1,
    Hl = null,
    Wa = {
      onError: function (e) {
        ((Un = !0), (Er = e));
      },
    };
  function Va(e, t, n, r, l, u, i, o, s) {
    ((Un = !1), (Er = null), Aa.apply(Wa, arguments));
  }
  function Ba(e, t, n, r, l, u, i, o, s) {
    if ((Va.apply(this, arguments), Un)) {
      if (Un) {
        var p = Er;
        ((Un = !1), (Er = null));
      } else throw Error(m(198));
      Cr || ((Cr = !0), (Hl = p));
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
  function Yi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Xi(e) {
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
          if (u === n) return (Xi(l), e);
          if (u === r) return (Xi(l), t);
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
  function Gi(e) {
    return ((e = Ha(e)), e !== null ? Zi(e) : null);
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Zi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ji = O.unstable_scheduleCallback,
    qi = O.unstable_cancelCallback,
    $a = O.unstable_shouldYield,
    Qa = O.unstable_requestPaint,
    ie = O.unstable_now,
    Ka = O.unstable_getCurrentPriorityLevel,
    $l = O.unstable_ImmediatePriority,
    bi = O.unstable_UserBlockingPriority,
    _r = O.unstable_NormalPriority,
    Ya = O.unstable_LowPriority,
    eo = O.unstable_IdlePriority,
    Nr = null,
    ft = null;
  function Xa(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : Ja,
    Ga = Math.log,
    Za = Math.LN2;
  function Ja(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ga(e) / Za) | 0)) | 0);
  }
  var Pr = 64,
    zr = 4194304;
  function An(e) {
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
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = An(o)) : ((u &= i), u !== 0 && (r = An(u)));
    } else ((i = n & ~l), i !== 0 ? (r = An(i)) : u !== 0 && (r = An(u)));
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
  function qa(e, t) {
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
  function ba(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - tt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = qa(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Ql(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function to() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n));
  }
  function ec(e, t) {
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
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Q = 0;
  function no(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ro,
    Xl,
    lo,
    uo,
    io,
    Gl = !1,
    Tr = [],
    Pt = null,
    zt = null,
    Lt = null,
    Vn = new Map(),
    Bn = new Map(),
    Tt = [],
    tc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function oo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
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
        t !== null && ((t = rr(t)), t !== null && Xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function nc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = Hn(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((zt = Hn(zt, e, t, n, r, l)), !0);
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
  function so(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Yi(n)), t !== null)) {
            ((e.blockedOn = t),
              io(e.priority, function () {
                lo(n);
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
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = rr(n)), t !== null && Xl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ao(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function rc() {
    ((Gl = !1),
      Pt !== null && Rr(Pt) && (Pt = null),
      zt !== null && Rr(zt) && (zt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Vn.forEach(ao),
      Bn.forEach(ao));
  }
  function $n(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl || ((Gl = !0), O.unstable_scheduleCallback(O.unstable_NormalPriority, rc)));
  }
  function Qn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Tr.length) {
      $n(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && $n(Pt, e),
        zt !== null && $n(zt, e),
        Lt !== null && $n(Lt, e),
        Vn.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (so(n), n.blockedOn === null && Tt.shift());
  }
  var cn = Se.ReactCurrentBatchConfig,
    jr = !0;
  function lc(e, t, n, r) {
    var l = Q,
      u = cn.transition;
    cn.transition = null;
    try {
      ((Q = 1), Zl(e, t, n, r));
    } finally {
      ((Q = l), (cn.transition = u));
    }
  }
  function uc(e, t, n, r) {
    var l = Q,
      u = cn.transition;
    cn.transition = null;
    try {
      ((Q = 4), Zl(e, t, n, r));
    } finally {
      ((Q = l), (cn.transition = u));
    }
  }
  function Zl(e, t, n, r) {
    if (jr) {
      var l = Jl(e, t, n, r);
      if (l === null) (mu(e, t, r, Or, n), oo(e, r));
      else if (nc(l, e, t, n, r)) r.stopPropagation();
      else if ((oo(e, r), t & 4 && -1 < tc.indexOf(e))) {
        for (; l !== null;) {
          var u = rr(l);
          if (
            (u !== null && ro(u), (u = Jl(e, t, n, r)), u === null && mu(e, t, r, Or, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, t, r, null, n);
    }
  }
  var Or = null;
  function Jl(e, t, n, r) {
    if (((Or = null), (e = Al(r)), (e = Xt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Yi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Or = e), null);
  }
  function co(e) {
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
        switch (Ka()) {
          case $l:
            return 1;
          case bi:
            return 4;
          case _r:
          case Ya:
            return 16;
          case eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    ql = null,
    Mr = null;
  function fo() {
    if (Mr) return Mr;
    var e,
      t = ql,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function po() {
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
          ? Dr
          : po),
        (this.isPropagationStopped = po),
        this
      );
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
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
    bl = Ae(fn),
    Kn = E({}, fn, { view: 0, detail: 0 }),
    ic = Ae(Kn),
    eu,
    tu,
    Yn,
    Fr = E({}, Kn, {
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
      getModifierState: ru,
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
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((eu = e.screenX - Yn.screenX), (tu = e.screenY - Yn.screenY))
                : (tu = eu = 0),
              (Yn = e)),
            eu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : tu;
      },
    }),
    mo = Ae(Fr),
    oc = E({}, Fr, { dataTransfer: 0 }),
    sc = Ae(oc),
    ac = E({}, Kn, { relatedTarget: 0 }),
    nu = Ae(ac),
    cc = E({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fc = Ae(cc),
    dc = E({}, fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    pc = Ae(dc),
    mc = E({}, fn, { data: 0 }),
    ho = Ae(mc),
    hc = {
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
    vc = {
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
    yc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yc[e]) ? !!t[e] : !1;
  }
  function ru() {
    return gc;
  }
  var wc = E({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = hc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? vc[e.keyCode] || "Unidentified"
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
      getModifierState: ru,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    kc = Ae(wc),
    Sc = E({}, Fr, {
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
    vo = Ae(Sc),
    xc = E({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ru,
    }),
    Ec = Ae(xc),
    Cc = E({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _c = Ae(Cc),
    Nc = E({}, Fr, {
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
    Pc = Ae(Nc),
    zc = [9, 13, 27, 32],
    lu = ce && "CompositionEvent" in window,
    Xn = null;
  ce && "documentMode" in document && (Xn = document.documentMode);
  var Lc = ce && "TextEvent" in window && !Xn,
    yo = ce && (!lu || (Xn && 8 < Xn && 11 >= Xn)),
    go = " ",
    wo = !1;
  function ko(e, t) {
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
  function So(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var dn = !1;
  function Tc(e, t) {
    switch (e) {
      case "compositionend":
        return So(t);
      case "keypress":
        return t.which !== 32 ? null : ((wo = !0), go);
      case "textInput":
        return ((e = t.data), e === go && wo ? null : e);
      default:
        return null;
    }
  }
  function Rc(e, t) {
    if (dn)
      return e === "compositionend" || (!lu && ko(e, t))
        ? ((e = fo()), (Mr = ql = Rt = null), (dn = !1), e)
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
        return yo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jc = {
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
  function xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jc[e.type] : t === "textarea";
  }
  function Eo(e, t, n, r) {
    (Bi(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Zn = null;
  function Oc(e) {
    Vo(e, 0);
  }
  function Ur(e) {
    var t = yn(e);
    if (Ti(t)) return e;
  }
  function Mc(e, t) {
    if (e === "change") return t;
  }
  var Co = !1;
  if (ce) {
    var uu;
    if (ce) {
      var iu = "oninput" in document;
      if (!iu) {
        var _o = document.createElement("div");
        (_o.setAttribute("oninput", "return;"), (iu = typeof _o.oninput == "function"));
      }
      uu = iu;
    } else uu = !1;
    Co = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Gn && (Gn.detachEvent("onpropertychange", Po), (Zn = Gn = null));
  }
  function Po(e) {
    if (e.propertyName === "value" && Ur(Zn)) {
      var t = [];
      (Eo(t, Zn, e, Al(e)), Ki(Oc, t));
    }
  }
  function Ic(e, t, n) {
    e === "focusin"
      ? (No(), (Gn = t), (Zn = n), Gn.attachEvent("onpropertychange", Po))
      : e === "focusout" && No();
  }
  function Dc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Zn);
  }
  function Fc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Uc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Ac(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Ac;
  function Jn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!H.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Lo(e, t) {
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
  function To(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? To(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ro() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ou(e) {
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
  function Wc(e) {
    var t = Ro(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && To(n.ownerDocument.documentElement, n)) {
      if (r !== null && ou(n)) {
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
            (l = Lo(n, u)));
          var i = Lo(n, r);
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
  var Vc = ce && "documentMode" in document && 11 >= document.documentMode,
    pn = null,
    su = null,
    qn = null,
    au = !1;
  function jo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au ||
      pn == null ||
      pn !== Sr(r) ||
      ((r = pn),
      "selectionStart" in r && ou(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qn && Jn(qn, r)) ||
        ((qn = r),
        (r = Br(su, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = pn))));
  }
  function Ar(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var mn = {
      animationend: Ar("Animation", "AnimationEnd"),
      animationiteration: Ar("Animation", "AnimationIteration"),
      animationstart: Ar("Animation", "AnimationStart"),
      transitionend: Ar("Transition", "TransitionEnd"),
    },
    cu = {},
    Oo = {};
  ce &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mn.animationend.animation,
      delete mn.animationiteration.animation,
      delete mn.animationstart.animation),
    "TransitionEvent" in window || delete mn.transitionend.transition);
  function Wr(e) {
    if (cu[e]) return cu[e];
    if (!mn[e]) return e;
    var t = mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Oo) return (cu[e] = t[n]);
    return e;
  }
  var Mo = Wr("animationend"),
    Io = Wr("animationiteration"),
    Do = Wr("animationstart"),
    Fo = Wr("transitionend"),
    Uo = new Map(),
    Ao =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function jt(e, t) {
    (Uo.set(e, t), B(t, [e]));
  }
  for (var fu = 0; fu < Ao.length; fu++) {
    var du = Ao[fu],
      Bc = du.toLowerCase(),
      Hc = du[0].toUpperCase() + du.slice(1);
    jt(Bc, "on" + Hc);
  }
  (jt(Mo, "onAnimationEnd"),
    jt(Io, "onAnimationIteration"),
    jt(Do, "onAnimationStart"),
    jt("dblclick", "onDoubleClick"),
    jt("focusin", "onFocus"),
    jt("focusout", "onBlur"),
    jt(Fo, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
    B("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    B(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    B("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    B("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    B(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    B(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    $c = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Wo(e, t, n) {
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
            (Wo(l, o, p), (u = s));
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
            (Wo(l, o, p), (u = s));
          }
      }
    }
    if (Cr) throw ((e = Hl), (Cr = !1), (Hl = null), e);
  }
  function G(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Bo(t, e, 2, !1), n.add(r));
  }
  function pu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Bo(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        se.forEach(function (n) {
          n !== "selectionchange" && ($c.has(n) || pu(n, !1, e), pu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), pu("selectionchange", !1, t));
    }
  }
  function Bo(e, t, n, r) {
    switch (co(t)) {
      case 1:
        var l = lc;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = Zl;
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
  function mu(e, t, n, r, l) {
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
    Ki(function () {
      var p = u,
        y = Al(n),
        g = [];
      e: {
        var h = Uo.get(e);
        if (h !== void 0) {
          var S = bl,
            C = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              S = kc;
              break;
            case "focusin":
              ((C = "focus"), (S = nu));
              break;
            case "focusout":
              ((C = "blur"), (S = nu));
              break;
            case "beforeblur":
            case "afterblur":
              S = nu;
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
              S = mo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Ec;
              break;
            case Mo:
            case Io:
            case Do:
              S = fc;
              break;
            case Fo:
              S = _c;
              break;
            case "scroll":
              S = ic;
              break;
            case "wheel":
              S = Pc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = pc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = vo;
          }
          var _ = (t & 4) !== 0,
            oe = !_ && e === "scroll",
            f = _ ? (h !== null ? h + "Capture" : null) : h;
          _ = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = Dn(a, f)), w != null && _.push(tr(a, w, d)))),
              oe)
            )
              break;
            a = a.return;
          }
          0 < _.length && ((h = new S(h, C, null, n, y)), g.push({ event: h, listeners: _ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h && n !== Ul && (C = n.relatedTarget || n.fromElement) && (Xt(C) || C[gt]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            S
              ? ((C = n.relatedTarget || n.toElement),
                (S = p),
                (C = C ? Xt(C) : null),
                C !== null &&
                  ((oe = Yt(C)), C !== oe || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((S = null), (C = p)),
            S !== C)
          ) {
            if (
              ((_ = mo),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_ = vo), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (oe = S == null ? h : yn(S)),
              (d = C == null ? h : yn(C)),
              (h = new _(w, a + "leave", S, n, y)),
              (h.target = oe),
              (h.relatedTarget = d),
              (w = null),
              Xt(y) === p &&
                ((_ = new _(f, a + "enter", C, n, y)),
                (_.target = d),
                (_.relatedTarget = oe),
                (w = _)),
              (oe = w),
              S && C)
            )
              t: {
                for (_ = S, f = C, a = 0, d = _; d; d = hn(d)) a++;
                for (d = 0, w = f; w; w = hn(w)) d++;
                for (; 0 < a - d;) ((_ = hn(_)), a--);
                for (; 0 < d - a;) ((f = hn(f)), d--);
                for (; a--;) {
                  if (_ === f || (f !== null && _ === f.alternate)) break t;
                  ((_ = hn(_)), (f = hn(f)));
                }
                _ = null;
              }
            else _ = null;
            (S !== null && Ho(g, h, S, _, !1), C !== null && oe !== null && Ho(g, oe, C, _, !0));
          }
        }
        e: {
          if (
            ((h = p ? yn(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var N = Mc;
          else if (xo(h))
            if (Co) N = Uc;
            else {
              N = Dc;
              var z = Ic;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (N = Fc);
          if (N && (N = N(e, p))) {
            Eo(g, N, n, y);
            break e;
          }
          (z && z(e, h, p),
            e === "focusout" &&
              (z = h._wrapperState) &&
              z.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value));
        }
        switch (((z = p ? yn(p) : window), e)) {
          case "focusin":
            (xo(z) || z.contentEditable === "true") && ((pn = z), (su = p), (qn = null));
            break;
          case "focusout":
            qn = su = pn = null;
            break;
          case "mousedown":
            au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((au = !1), jo(g, n, y));
            break;
          case "selectionchange":
            if (Vc) break;
          case "keydown":
          case "keyup":
            jo(g, n, y);
        }
        var L;
        if (lu)
          e: {
            switch (e) {
              case "compositionstart":
                var j = "onCompositionStart";
                break e;
              case "compositionend":
                j = "onCompositionEnd";
                break e;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break e;
            }
            j = void 0;
          }
        else
          dn
            ? ko(e, n) && (j = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        (j &&
          (yo &&
            n.locale !== "ko" &&
            (dn || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && dn && (L = fo())
              : ((Rt = y), (ql = "value" in Rt ? Rt.value : Rt.textContent), (dn = !0))),
          (z = Br(p, j)),
          0 < z.length &&
            ((j = new ho(j, e, null, n, y)),
            g.push({ event: j, listeners: z }),
            L ? (j.data = L) : ((L = So(n)), L !== null && (j.data = L)))),
          (L = Lc ? Tc(e, n) : Rc(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new ho("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = L))));
      }
      Vo(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dn(e, n)),
        u != null && r.unshift(tr(e, u, l)),
        (u = Dn(e, t)),
        u != null && r.push(tr(e, u, l))),
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
          ? ((s = Dn(n, u)), s != null && i.unshift(tr(n, s, o)))
          : l || ((s = Dn(n, u)), s != null && i.push(tr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Qc = /\r\n?/g,
    Kc = /\u0000|\uFFFD/g;
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Qc,
        `
`,
      )
      .replace(Kc, "");
  }
  function Hr(e, t, n) {
    if (((t = $o(t)), $o(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
  var hu = null,
    vu = null;
  function yu(e, t) {
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
  var gu = typeof setTimeout == "function" ? setTimeout : void 0,
    Yc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qo = typeof Promise == "function" ? Promise : void 0,
    Xc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qo < "u"
          ? function (e) {
              return Qo.resolve(null).then(e).catch(Gc);
            }
          : gu;
  function Gc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wu(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
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
  function Ko(e) {
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
    nr = "__reactProps$" + vn,
    gt = "__reactContainer$" + vn,
    ku = "__reactEvents$" + vn,
    Zc = "__reactListeners$" + vn,
    Jc = "__reactHandles$" + vn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[gt] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ko(e); e !== null;) {
            if ((n = e[dt])) return n;
            e = Ko(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[dt] || e[gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[nr] || null;
  }
  var Su = [],
    gn = -1;
  function Mt(e) {
    return { current: e };
  }
  function Z(e) {
    0 > gn || ((e.current = Su[gn]), (Su[gn] = null), gn--);
  }
  function X(e, t) {
    (gn++, (Su[gn] = e.current), (e.current = t));
  }
  var It = {},
    xe = Mt(It),
    Re = Mt(!1),
    Gt = It;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
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
  function je(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (Z(Re), Z(xe));
  }
  function Yo(e, t, n) {
    if (xe.current !== It) throw Error(m(168));
    (X(xe, t), X(Re, n));
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Y(e) || "Unknown", l));
    return E({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Gt = xe.current),
      X(xe, e),
      X(Re, Re.current),
      !0
    );
  }
  function Go(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Xo(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Re),
        Z(xe),
        X(xe, e))
      : Z(Re),
      X(Re, n));
  }
  var wt = null,
    Xr = !1,
    xu = !1;
  function Zo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function qc(e) {
    ((Xr = !0), Zo(e));
  }
  function Dt() {
    if (!xu && wt !== null) {
      xu = !0;
      var e = 0,
        t = Q;
      try {
        var n = wt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((wt = null), (Xr = !1));
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), Ji($l, Dt), l);
      } finally {
        ((Q = t), (xu = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Gr = null,
    Zr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    kt = 1,
    St = "";
  function Jt(e, t) {
    ((kn[Sn++] = Zr), (kn[Sn++] = Gr), (Gr = e), (Zr = t));
  }
  function Jo(e, t, n) {
    ((Ke[Ye++] = kt), (Ke[Ye++] = St), (Ke[Ye++] = Zt), (Zt = e));
    var r = kt;
    e = St;
    var l = 32 - tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - tt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (kt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (St = u + e));
    } else ((kt = (1 << u) | (n << l) | r), (St = e));
  }
  function Eu(e) {
    e.return !== null && (Jt(e, 1), Jo(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Gr;) ((Gr = kn[--Sn]), (kn[Sn] = null), (Zr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Zt;)
      ((Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var We = null,
    Ve = null,
    ee = !1,
    rt = null;
  function qo(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function bo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (We = e), (Ve = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (We = e), (Ve = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (We = e),
              (Ve = null),
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
      var t = Ve;
      if (t) {
        var n = t;
        if (!bo(e, t)) {
          if (_u(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = We;
          t && bo(e, t) ? qo(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (We = e));
        }
      } else {
        if (_u(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ee = !1), (We = e));
      }
    }
  }
  function es(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    We = e;
  }
  function Jr(e) {
    if (e !== We) return !1;
    if (!ee) return (es(e), (ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (_u(e)) throw (ts(), Error(m(418)));
      for (; t;) (qo(e, t), (t = Ot(t.nextSibling)));
    }
    if ((es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = We ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Ve; e;) e = Ot(e.nextSibling);
  }
  function xn() {
    ((Ve = We = null), (ee = !1));
  }
  function Pu(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var bc = Se.ReactCurrentBatchConfig;
  function lr(e, t, n) {
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
  function qr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function ns(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rs(e) {
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
        ? ((a = gi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var N = d.type;
      return N === Le
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === N ||
              (typeof N == "object" && N !== null && N.$$typeof === Te && ns(N) === a.type))
          ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
          : ((w = xl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = lr(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, w, N)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = gi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = xl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = wi(a, f.mode, d)), (a.return = f), a);
          case Te:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (On(a) || T(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return N !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(f, a, d, w) : null;
          case Ne:
            return d.key === N ? p(f, a, d, w) : null;
          case Te:
            return ((N = d._init), h(f, a, N(d._payload), w));
        }
        if (On(d) || T(d)) return N !== null ? null : y(f, a, d, w, null);
        qr(f, d);
      }
      return null;
    }
    function S(f, a, d, w, N) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, N));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, N));
          case Ne:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, N));
          case Te:
            var z = w._init;
            return S(f, a, d, z(w._payload), N);
        }
        if (On(w) || T(w)) return ((f = f.get(d) || null), y(a, f, w, N, null));
        qr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var N = null, z = null, L = a, j = (a = 0), ye = null; L !== null && j < d.length; j++) {
        L.index > j ? ((ye = L), (L = null)) : (ye = L.sibling);
        var V = h(f, L, d[j], w);
        if (V === null) {
          L === null && (L = ye);
          break;
        }
        (e && L && V.alternate === null && t(f, L),
          (a = u(V, a, j)),
          z === null ? (N = V) : (z.sibling = V),
          (z = V),
          (L = ye));
      }
      if (j === d.length) return (n(f, L), ee && Jt(f, j), N);
      if (L === null) {
        for (; j < d.length; j++)
          ((L = g(f, d[j], w)),
            L !== null && ((a = u(L, a, j)), z === null ? (N = L) : (z.sibling = L), (z = L)));
        return (ee && Jt(f, j), N);
      }
      for (L = r(f, L); j < d.length; j++)
        ((ye = S(L, f, j, d[j], w)),
          ye !== null &&
            (e && ye.alternate !== null && L.delete(ye.key === null ? j : ye.key),
            (a = u(ye, a, j)),
            z === null ? (N = ye) : (z.sibling = ye),
            (z = ye)));
      return (
        e &&
          L.forEach(function (Qt) {
            return t(f, Qt);
          }),
        ee && Jt(f, j),
        N
      );
    }
    function _(f, a, d, w) {
      var N = T(d);
      if (typeof N != "function") throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var z = (N = null), L = a, j = (a = 0), ye = null, V = d.next();
        L !== null && !V.done;
        j++, V = d.next()
      ) {
        L.index > j ? ((ye = L), (L = null)) : (ye = L.sibling);
        var Qt = h(f, L, V.value, w);
        if (Qt === null) {
          L === null && (L = ye);
          break;
        }
        (e && L && Qt.alternate === null && t(f, L),
          (a = u(Qt, a, j)),
          z === null ? (N = Qt) : (z.sibling = Qt),
          (z = Qt),
          (L = ye));
      }
      if (V.done) return (n(f, L), ee && Jt(f, j), N);
      if (L === null) {
        for (; !V.done; j++, V = d.next())
          ((V = g(f, V.value, w)),
            V !== null && ((a = u(V, a, j)), z === null ? (N = V) : (z.sibling = V), (z = V)));
        return (ee && Jt(f, j), N);
      }
      for (L = r(f, L); !V.done; j++, V = d.next())
        ((V = S(L, f, j, V.value, w)),
          V !== null &&
            (e && V.alternate !== null && L.delete(V.key === null ? j : V.key),
            (a = u(V, a, j)),
            z === null ? (N = V) : (z.sibling = V),
            (z = V)));
      return (
        e &&
          L.forEach(function (Of) {
            return t(f, Of);
          }),
        ee && Jt(f, j),
        N
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
              for (var N = d.key, z = a; z !== null;) {
                if (z.key === N) {
                  if (((N = d.type), N === Le)) {
                    if (z.tag === 7) {
                      (n(f, z.sibling), (a = l(z, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    z.elementType === N ||
                    (typeof N == "object" && N !== null && N.$$typeof === Te && ns(N) === z.type)
                  ) {
                    (n(f, z.sibling),
                      (a = l(z, d.props)),
                      (a.ref = lr(f, z, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, z);
                  break;
                } else t(f, z);
                z = z.sibling;
              }
              d.type === Le
                ? ((a = un(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = xl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Ne:
            e: {
              for (z = d.key; a !== null;) {
                if (a.key === z)
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
              ((a = wi(d, f.mode, w)), (a.return = f), (f = a));
            }
            return i(f);
          case Te:
            return ((z = d._init), oe(f, a, z(d._payload), w));
        }
        if (On(d)) return C(f, a, d, w);
        if (T(d)) return _(f, a, d, w);
        qr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = gi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return oe;
  }
  var En = rs(!0),
    ls = rs(!1),
    br = Mt(null),
    el = null,
    Cn = null,
    zu = null;
  function Lu() {
    zu = Cn = el = null;
  }
  function Tu(e) {
    var t = br.current;
    (Z(br), (e._currentValue = t));
  }
  function Ru(e, t, n) {
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
  function _n(e, t) {
    ((el = e),
      (zu = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (el === null) throw Error(m(308));
        ((Cn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var qt = null;
  function ju(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ju(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      xt(e, r)
    );
  }
  function xt(e, t) {
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
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function is(e, t) {
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
    if (((r = r.shared), (U & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        xt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ju(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      xt(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  function os(e, t) {
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
  function nl(e, t, n, r) {
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
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i && (o === null ? (y.firstBaseUpdate = p) : (o.next = p), (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      ((i = 0), (y = p = s = null), (o = u));
      do {
        var h = o.lane,
          S = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var C = e,
              _ = o;
            switch (((h = t), (S = n), _.tag)) {
              case 1:
                if (((C = _.payload), typeof C == "function")) {
                  g = C.call(S, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = _.payload), (h = typeof C == "function" ? C.call(S, g, h) : C), h == null)
                )
                  break e;
                g = E({}, g, h);
                break e;
              case 2:
                Ft = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [o]) : h.push(o));
        } else
          ((S = {
            eventTime: S,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = S), (s = g)) : (y = y.next = S),
            (i |= h));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((tn |= i), (e.lanes = i), (e.memoizedState = g));
    }
  }
  function ss(e, t, n) {
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
  var ur = {},
    pt = Mt(ur),
    ir = Mt(ur),
    or = Mt(ur);
  function bt(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Mu(e, t) {
    switch ((X(or, t), X(ir, e), X(pt, ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e)));
    }
    (Z(pt), X(pt, t));
  }
  function Nn() {
    (Z(pt), Z(ir), Z(or));
  }
  function as(e) {
    bt(or.current);
    var t = bt(pt.current),
      n = Il(t, e.type);
    t !== n && (X(ir, e), X(pt, n));
  }
  function Iu(e) {
    ir.current === e && (Z(pt), Z(ir));
  }
  var ne = Mt(0);
  function rl(e) {
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
  function Fu() {
    for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var ll = Se.ReactCurrentDispatcher,
    Uu = Se.ReactCurrentBatchConfig,
    en = 0,
    re = null,
    de = null,
    he = null,
    ul = !1,
    sr = !1,
    ar = 0,
    ef = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Wu(e, t, n, r, l, u) {
    if (
      ((en = u),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? lf : uf),
      (e = n(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (he = de = null), (t.updateQueue = null), (ll.current = of), (e = n(r, l)));
      } while (sr);
    }
    if (
      ((ll.current = sl),
      (t = de !== null && de.next !== null),
      (en = 0),
      (he = de = re = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (re.memoizedState = he = e) : (he = he.next = e), he);
  }
  function Ge() {
    if (de === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null) ((he = t), (de = e));
    else {
      if (e === null) throw Error(m(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        he === null ? (re.memoizedState = he = e) : (he = he.next = e));
    }
    return he;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bu(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
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
        var y = p.lane;
        if ((en & y) === y)
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
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = g), (i = r)) : (s = s.next = g), (re.lanes |= y), (tn |= y));
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
  function cs() {}
  function fs(e, t) {
    var n = re,
      r = Ge(),
      l = t(),
      u = !nt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      $u(ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), fr(9, ps.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(m(349));
      (en & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ps(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), hs(t) && vs(e));
  }
  function ms(e, t, n) {
    return n(function () {
      hs(t) && vs(e);
    });
  }
  function hs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = xt(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function ys(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = rf.bind(null, re, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
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
  function gs() {
    return Ge().memoizedState;
  }
  function il(e, t, n, r) {
    var l = mt();
    ((re.flags |= e), (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (de !== null) {
      var i = de.memoizedState;
      if (((u = i.destroy), r !== null && Au(r, i.deps))) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    ((re.flags |= e), (l.memoizedState = fr(1 | t, n, u, r)));
  }
  function ws(e, t) {
    return il(8390656, 8, e, t);
  }
  function $u(e, t) {
    return ol(2048, 8, e, t);
  }
  function ks(e, t) {
    return ol(4, 2, e, t);
  }
  function Ss(e, t) {
    return ol(4, 4, e, t);
  }
  function xs(e, t) {
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
  function Es(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), ol(4, 4, xs.bind(null, t, e), n));
  }
  function Qu() {}
  function Cs(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function _s(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ns(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = to()), (re.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function tf(e, t) {
    var n = Q;
    ((Q = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Uu.transition;
    Uu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Q = n), (Uu.transition = r));
    }
  }
  function Ps() {
    return Ge().memoizedState;
  }
  function nf(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), zs(e)))
      Ls(t, n);
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = ze();
      (ot(n, e, r, l), Ts(n, t, r));
    }
  }
  function rf(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (zs(e)) Ls(t, l);
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
            (s === null ? ((l.next = l), ju(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = us(e, t, l, r)), n !== null && ((l = ze()), ot(n, e, r, l), Ts(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function Ls(e, t) {
    sr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ts(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  var sl = {
      readContext: Xe,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    lf = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: ws,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), il(4194308, 4, xs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
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
          (e = e.dispatch = nf.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ys,
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return ((e = tf.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = re,
          l = mt();
        if (ee) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          (en & 30) !== 0 || ds(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          ws(ms.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ps.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = ve.identifierPrefix;
        if (ee) {
          var n = St,
            r = kt;
          ((n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = ef++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Xe,
      useCallback: Cs,
      useContext: Xe,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Bu,
      useRef: gs,
      useState: function () {
        return Bu(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = Ge();
        return Ns(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(cr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Xe,
      useCallback: Cs,
      useContext: Xe,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: _s,
      useReducer: Hu,
      useRef: gs,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = Ge();
        return de === null ? (t.memoizedState = e) : Ns(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      ((t = E({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ku(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : E({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        u = Et(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Ut(e, u, l)),
        t !== null && (ot(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ze(),
        l = Bt(e),
        u = Et(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Ut(e, u, l)),
        t !== null && (ot(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ze(),
        r = Bt(e),
        l = Et(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (ot(t, e, r, n), tl(t, e, r)));
    },
  };
  function Rs(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function js(e, t, n) {
    var r = !1,
      l = It,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = je(t) ? Gt : xe.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? wn(e, l) : It)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Os(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Yu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ou(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = je(t) ? Gt : xe.current), (l.context = wn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Ku(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += A(r)), (r = r.return));
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
  function Xu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ms(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (ci = r)), Gu(e, t));
      }),
      n
    );
  }
  function Is(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Gu(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Gu(e, t),
            typeof r != "function" && (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Ds(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
  }
  function Fs(e) {
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
  function Us(e, t, n, r, l) {
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
  var af = Se.ReactCurrentOwner,
    Oe = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : En(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      _n(t, l),
      (r = Wu(e, t, n, r, u, l)),
      (n = Vu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (ee && n && Eu(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !yi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Vs(e, t, u, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = $t(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Vs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return Zu(e, t, n, r, l);
  }
  function Bs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          X(Ln, Be),
          (Be |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(Ln, Be),
            (Be |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          X(Ln, Be),
          (Be |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Ln, Be),
        (Be |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Hs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zu(e, t, n, r, l) {
    var u = je(n) ? Gt : xe.current;
    return (
      (u = wn(t, u)),
      _n(t, l),
      (n = Wu(e, t, n, r, u, l)),
      (r = Vu()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (ee && r && Eu(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (je(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((_n(t, l), t.stateNode === null)) (fl(e, t), js(t, n, r), Yu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Xe(p))
        : ((p = je(n) ? Gt : xe.current), (p = wn(t, p)));
      var y = n.getDerivedStateFromProps,
        g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Os(t, i, r, p)),
        (Ft = !1));
      var h = t.memoizedState;
      ((i.state = h),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || Re.current || Ft
          ? (typeof y == "function" && (Ku(t, n, y, r), (s = t.memoizedState)),
            (o = Ft || Rs(t, n, o, r, h, s, p))
              ? (g ||
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
        is(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : lt(t.type, o)),
        (i.props = p),
        (g = t.pendingProps),
        (h = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = je(n) ? Gt : xe.current), (s = wn(t, s))));
      var S = n.getDerivedStateFromProps;
      ((y = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Os(t, i, r, s)),
        (Ft = !1),
        (h = t.memoizedState),
        (i.state = h),
        nl(t, r, i, l));
      var C = t.memoizedState;
      o !== g || h !== C || Re.current || Ft
        ? (typeof S == "function" && (Ku(t, n, S, r), (C = t.memoizedState)),
          (p = Ft || Rs(t, n, p, r, h, C, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, C, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = C)),
          (i.props = r),
          (i.state = C),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ju(e, t, n, r, u, l);
  }
  function Ju(e, t, n, r, l, u) {
    Hs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Go(t, n, !1), Ct(e, t, u));
    ((r = t.stateNode), (af.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = En(t, e.child, null, u)), (t.child = En(t, null, o, u)))
        : Pe(e, t, o, u),
      (t.memoizedState = r.state),
      l && Go(t, n, !0),
      t.child
    );
  }
  function Qs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Yo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Yo(e, t.context, !1),
      Mu(e, t.containerInfo));
  }
  function Ks(e, t, n, r, l) {
    return (xn(), Pu(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = ne.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(ne, l & 1),
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
                  : (u = El(i, r, 0, null)),
                (e = un(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = bu(n)),
                (t.memoizedState = qu),
                e)
              : ei(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return cf(e, t, i, r, o, l, n);
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
            ? bu(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = qu),
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
  function ei(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Pu(r),
      En(t, e.child, null, n),
      (e = ei(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xu(Error(m(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (u = un(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, i),
            (t.child.memoizedState = bu(i)),
            (t.memoizedState = qu),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Xu(u, r, void 0)), cl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Oe || o)) {
      if (((r = ve), r !== null)) {
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), xt(e, l), ot(r, e, l, -1)));
      }
      return (vi(), (r = Xu(Error(m(421)))), cl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Ef.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Ve = Ot(l.nextSibling)),
        (We = t),
        (ee = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = kt),
          (Ke[Ye++] = St),
          (Ke[Ye++] = Zt),
          (kt = e.id),
          (St = e.overflow),
          (Zt = t)),
        (t = ei(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ru(e.return, t, n));
  }
  function ti(e, t, n, r, l) {
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
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Pe(e, t, r.children, n), (r = ne.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
          else if (e.tag === 19) Xs(e, n, t);
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
    if ((X(ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ti(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ti(t, !0, n, null, u);
          break;
        case "together":
          ti(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
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
  function ff(e, t, n) {
    switch (t.tag) {
      case 3:
        (Qs(t), xn());
        break;
      case 5:
        as(t);
        break;
      case 1:
        je(t.type) && Yr(t);
        break;
      case 4:
        Mu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (X(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(ne, ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ys(e, t, n)
              : (X(ne, ne.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
        X(ne, ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(ne, ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Bs(e, t, n));
    }
    return Ct(e, t, n);
  }
  var Zs, ni, Js, qs;
  ((Zs = function (e, t) {
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
    (ni = function () {}),
    (Js = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), bt(pt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (u = []));
            break;
          case "select":
            ((l = E({}, l, { value: void 0 })), (r = E({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Ml(e, l)), (r = Ml(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
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
                (F.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (F.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && G("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (qs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function dr(e, t) {
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
  function Ce(e) {
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
  function df(e, t, n) {
    var r = t.pendingProps;
    switch ((Cu(t), t.tag)) {
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
        return (Ce(t), null);
      case 1:
        return (je(t.type) && Kr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Nn(),
          Z(Re),
          Z(xe),
          Fu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (pi(rt), (rt = null)))),
          ni(e, t),
          Ce(t),
          null
        );
      case 5:
        Iu(t);
        var l = bt(or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Js(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ce(t), null);
          }
          if (((e = bt(pt.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[dt] = t), (r[nr] = u), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < bn.length; l++) G(bn[l], r);
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
                (Ri(r, u), G("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), G("invalid", r));
                break;
              case "textarea":
                (Mi(r, u), G("invalid", r));
            }
            (Dl(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : F.hasOwnProperty(i) && o != null && i === "onScroll" && G("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Oi(r, u, !0));
                break;
              case "textarea":
                (kr(r), Di(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Fi(n)),
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
              (e[nr] = r),
              Zs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Fl(n, r)), n)) {
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
                  for (l = 0; l < bn.length; l++) G(bn[l], e);
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
                  (Ri(e, r), (l = Rl(e, r)), G("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    G("invalid", e));
                  break;
                case "textarea":
                  (Mi(e, r), (l = Ml(e, r)), G("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Dl(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Wi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Ui(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Mn(e, s)
                          : typeof s == "number" && Mn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (F.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && G("scroll", e)
                            : s != null && qe(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (kr(e), Oi(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Di(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? on(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && on(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
        return (Ce(t), null);
      case 6:
        if (e && t.stateNode != null) qs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = bt(or.current)), bt(pt.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (u = r.nodeValue !== n) && ((e = We), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r));
        }
        return (Ce(t), null);
      case 13:
        if (
          (Z(ne),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ts(), xn(), (t.flags |= 98560), (u = !1));
          else if (((u = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[dt] = t;
            } else (xn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ce(t), (u = !1));
          } else (rt !== null && (pi(rt), (rt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ne.current & 1) !== 0 ? pe === 0 && (pe = 3) : vi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (Nn(), ni(e, t), e === null && er(t.stateNode.containerInfo), Ce(t), null);
      case 10:
        return (Tu(t.type._context), Ce(t), null);
      case 17:
        return (je(t.type) && Kr(), Ce(t), null);
      case 19:
        if ((Z(ne), (u = t.memoizedState), u === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      dr(u, !1),
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
                  return (X(ne, (ne.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ie() > Tn &&
              ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ee)
              )
                return (Ce(t), null);
            } else
              2 * ie() - u.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
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
            X(ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          hi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Be & 1073741824) !== 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function pf(e, t) {
    switch ((Cu(t), t.tag)) {
      case 1:
        return (
          je(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          Z(Re),
          Z(xe),
          Fu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Iu(t), null);
      case 13:
        if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          xn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(ne), null);
      case 4:
        return (Nn(), null);
      case 10:
        return (Tu(t.type._context), null);
      case 22:
      case 23:
        return (hi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    _e = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    x = null;
  function zn(e, t) {
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
  function ri(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var bs = !1;
  function hf(e, t) {
    if (((hu = jr), (e = Ro()), ou(e))) {
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
              y = 0,
              g = e,
              h = null;
            t: for (;;) {
              for (
                var S;
                g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (S = g.firstChild) !== null;
              )
                ((h = g), (g = S));
              for (;;) {
                if (g === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (S = g.nextSibling) !== null)
                )
                  break;
                ((g = h), (h = g.parentNode));
              }
              g = S;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vu = { focusedElem: e, selectionRange: n }, jr = !1, x = t; x !== null;)
      if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (x = e));
      else
        for (; x !== null;) {
          t = x;
          try {
            var C = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var _ = C.memoizedProps,
                      oe = C.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? _ : lt(t.type, _),
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
            ((e.return = t.return), (x = e));
            break;
          }
          x = t.return;
        }
    return ((C = bs), (bs = !1), C);
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && ri(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
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
  function li(e) {
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
  function ea(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ea(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[dt], delete t[nr], delete t[ku], delete t[Zc], delete t[Jc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ta(e.return)) return null;
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
  function ui(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = $r)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, t, n), e = e.sibling; e !== null;) (ui(e, t, n), (e = e.sibling));
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, t, n), e = e.sibling; e !== null;) (ii(e, t, n), (e = e.sibling));
  }
  var we = null,
    ut = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null;) (ra(e, t, n), (n = n.sibling));
  }
  function ra(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || zn(n, t);
      case 6:
        var r = we,
          l = ut;
        ((we = null),
          At(e, t, n),
          (we = r),
          (ut = l),
          we !== null &&
            (ut
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : we.removeChild(n.stateNode)));
        break;
      case 18:
        we !== null &&
          (ut
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n),
              Qn(e))
            : wu(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ut),
          (we = n.stateNode.containerInfo),
          (ut = !0),
          At(e, t, n),
          (we = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ri(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!_e && (zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
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
          ? ((_e = (r = _e) || n.memoizedState !== null), At(e, t, n), (_e = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new mf()),
        t.forEach(function (r) {
          var l = Cf.bind(null, e, r);
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
                ((we = o.stateNode), (ut = !1));
                break e;
              case 3:
                ((we = o.stateNode.containerInfo), (ut = !0));
                break e;
              case 4:
                ((we = o.stateNode.containerInfo), (ut = !0));
                break e;
            }
            o = o.return;
          }
          if (we === null) throw Error(m(160));
          (ra(u, i, l), (we = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ue(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (ua(t, e), (t = t.sibling));
  }
  function ua(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((it(t, e), ht(e), r & 4)) {
          try {
            (pr(3, e, e.return), pl(3, e));
          } catch (_) {
            ue(e, e.return, _);
          }
          try {
            pr(5, e, e.return);
          } catch (_) {
            ue(e, e.return, _);
          }
        }
        break;
      case 1:
        (it(t, e), ht(e), r & 512 && n !== null && zn(n, n.return));
        break;
      case 5:
        if ((it(t, e), ht(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Mn(l, "");
          } catch (_) {
            ue(e, e.return, _);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && ji(l, u), Fl(o, i));
              var p = Fl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Wi(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Ui(l, g)
                    : y === "children"
                      ? Mn(l, g)
                      : qe(l, y, g, p);
              }
              switch (o) {
                case "input":
                  jl(l, u);
                  break;
                case "textarea":
                  Ii(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? on(l, !!u.multiple, S, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? on(l, !!u.multiple, u.defaultValue, !0)
                        : on(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (_) {
              ue(e, e.return, _);
            }
        }
        break;
      case 6:
        if ((it(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (_) {
            ue(e, e.return, _);
          }
        }
        break;
      case 3:
        if ((it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Qn(t.containerInfo);
          } catch (_) {
            ue(e, e.return, _);
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
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (ai = ie())),
          r & 4 && la(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (p = _e) || y), it(t, e), (_e = p)) : it(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (x = e, y = e.child; y !== null;) {
              for (g = x = y; x !== null;) {
                switch (((h = x), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    zn(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (C.props = t.memoizedProps),
                          (C.state = t.memoizedState),
                          C.componentWillUnmount());
                      } catch (_) {
                        ue(r, n, _);
                      }
                    }
                    break;
                  case 5:
                    zn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      sa(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (x = S)) : sa(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ;) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  ((l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Ai("display", i))));
                } catch (_) {
                  ue(e, e.return, _);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (_) {
                  ue(e, e.return, _);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) || g.memoizedState === null || g === e) &&
              g.child !== null
            ) {
              ((g.child.return = g), (g = g.child));
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null;) {
              if (g.return === null || g.return === e) break e;
              (y === g && (y = null), (g = g.return));
            }
            (y === g && (y = null), (g.sibling.return = g.return), (g = g.sibling));
          }
        }
        break;
      case 19:
        (it(t, e), ht(e), r & 4 && la(e));
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
            if (ta(n)) {
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
            r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
            var u = na(e);
            ii(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            ui(e, o, i);
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
  function vf(e, t, n) {
    ((x = e), ia(e));
  }
  function ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null;) {
      var l = x,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || _e;
          o = dl;
          var p = _e;
          if (((dl = i), (_e = s) && !p))
            for (x = l; x !== null;)
              ((i = x),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? aa(l)
                  : s !== null
                    ? ((s.return = i), (x = s))
                    : aa(l));
          for (; u !== null;) ((x = u), ia(u), (u = u.sibling));
          ((x = l), (dl = o), (_e = p));
        }
        oa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (x = u)) : oa(e);
    }
  }
  function oa(e) {
    for (; x !== null;) {
      var t = x;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && ss(t, u, r);
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
                  ss(t, i, n);
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
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Qn(g);
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
          _e || (t.flags & 512 && li(t));
        } catch (h) {
          ue(t, t.return, h);
        }
      }
      if (t === e) {
        x = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (x = n));
        break;
      }
      x = t.return;
    }
  }
  function sa(e) {
    for (; x !== null;) {
      var t = x;
      if (t === e) {
        x = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (x = n));
        break;
      }
      x = t.return;
    }
  }
  function aa(e) {
    for (; x !== null;) {
      var t = x;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
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
              li(t);
            } catch (s) {
              ue(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              li(t);
            } catch (s) {
              ue(t, i, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        x = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (x = o));
        break;
      }
      x = t.return;
    }
  }
  var yf = Math.ceil,
    ml = Se.ReactCurrentDispatcher,
    oi = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    U = 0,
    ve = null,
    fe = null,
    ke = 0,
    Be = 0,
    Ln = Mt(0),
    pe = 0,
    mr = null,
    tn = 0,
    hl = 0,
    si = 0,
    hr = null,
    Me = null,
    ai = 0,
    Tn = 1 / 0,
    _t = null,
    vl = !1,
    ci = null,
    Wt = null,
    yl = !1,
    Vt = null,
    gl = 0,
    vr = 0,
    fi = null,
    wl = -1,
    kl = 0;
  function ze() {
    return (U & 6) !== 0 ? ie() : wl !== -1 ? wl : (wl = ie());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (U & 2) !== 0 && ke !== 0
        ? ke & -ke
        : bc.transition !== null
          ? (kl === 0 && (kl = to()), kl)
          : ((e = Q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : co(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (fi = null), Error(m(185)));
    (Wn(e, n, r),
      ((U & 2) === 0 || e !== ve) &&
        (e === ve && ((U & 2) === 0 && (hl |= n), pe === 4 && Ht(e, ke)),
        Ie(e, r),
        n === 1 && U === 0 && (t.mode & 1) === 0 && ((Tn = ie() + 500), Xr && Dt())));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    ba(e, t);
    var r = Lr(e, e === ve ? ke : 0);
    if (r === 0) (n !== null && qi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && qi(n), t === 1))
        (e.tag === 0 ? qc(fa.bind(null, e)) : Zo(fa.bind(null, e)),
          Xc(function () {
            (U & 6) === 0 && Dt();
          }),
          (n = null));
      else {
        switch (no(r)) {
          case 1:
            n = $l;
            break;
          case 4:
            n = bi;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = eo;
            break;
          default:
            n = _r;
        }
        n = wa(n, ca.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ca(e, t) {
    if (((wl = -1), (kl = 0), (U & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === ve ? ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = U;
      U |= 2;
      var u = pa();
      (ve !== e || ke !== t) && ((_t = null), (Tn = ie() + 500), rn(e, t));
      do
        try {
          kf();
          break;
        } catch (o) {
          da(e, o);
        }
      while (!0);
      (Lu(), (ml.current = u), (U = l), fe !== null ? (t = 0) : ((ve = null), (ke = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (t = di(e, l)))), t === 1))
        throw ((n = mr), rn(e, 0), Ht(e, r), Ie(e, ie()), n);
      if (t === 6) Ht(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !gf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = Ql(e)), u !== 0 && ((r = u), (t = di(e, u)))),
            t === 1))
        )
          throw ((n = mr), rn(e, 0), Ht(e, r), Ie(e, ie()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, Me, _t);
            break;
          case 3:
            if ((Ht(e, r), (r & 130023424) === r && ((t = ai + 500 - ie()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = gu(ln.bind(null, e, Me, _t), t);
              break;
            }
            ln(e, Me, _t);
            break;
          case 4:
            if ((Ht(e, r), (r & 4194240) === r)) break;
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
                            : 1960 * yf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = gu(ln.bind(null, e, Me, _t), r);
              break;
            }
            ln(e, Me, _t);
            break;
          case 5:
            ln(e, Me, _t);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ie(e, ie()), e.callbackNode === n ? ca.bind(null, e) : null);
  }
  function di(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Me), (Me = n), t !== null && pi(t)),
      e
    );
  }
  function pi(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function gf(e) {
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
  function Ht(e, t) {
    for (
      t &= ~si, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function fa(e) {
    if ((U & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (Ie(e, ie()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = di(e, r)));
    }
    if (n === 1) throw ((n = mr), rn(e, 0), Ht(e, t), Ie(e, ie()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, Me, _t),
      Ie(e, ie()),
      null
    );
  }
  function mi(e, t) {
    var n = U;
    U |= 1;
    try {
      return e(t);
    } finally {
      ((U = n), U === 0 && ((Tn = ie() + 500), Xr && Dt()));
    }
  }
  function nn(e) {
    Vt !== null && Vt.tag === 0 && (U & 6) === 0 && Rn();
    var t = U;
    U |= 1;
    var n = Ze.transition,
      r = Q;
    try {
      if (((Ze.transition = null), (Q = 1), e)) return e();
    } finally {
      ((Q = r), (Ze.transition = n), (U = t), (U & 6) === 0 && Dt());
    }
  }
  function hi() {
    ((Be = Ln.current), Z(Ln));
  }
  function rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Yc(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((Cu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (Nn(), Z(Re), Z(xe), Fu());
            break;
          case 5:
            Iu(r);
            break;
          case 4:
            Nn();
            break;
          case 13:
            Z(ne);
            break;
          case 19:
            Z(ne);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            hi();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = $t(e.current, null)),
      (ke = Be = t),
      (pe = 0),
      (mr = null),
      (si = hl = tn = 0),
      (Me = hr = null),
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
  function da(e, t) {
    do {
      var n = fe;
      try {
        if ((Lu(), (ll.current = sl), ul)) {
          for (var r = re.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((en = 0),
          (he = de = re = null),
          (sr = !1),
          (ar = 0),
          (oi.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (mr = t), (fe = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = ke),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var S = Fs(i);
            if (S !== null) {
              ((S.flags &= -257), Us(S, i, o, u, t), S.mode & 1 && Ds(u, p, t), (t = S), (s = p));
              var C = t.updateQueue;
              if (C === null) {
                var _ = new Set();
                (_.add(s), (t.updateQueue = _));
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Ds(u, p, t), vi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ee && o.mode & 1) {
            var oe = Fs(i);
            if (oe !== null) {
              ((oe.flags & 65536) === 0 && (oe.flags |= 256), Us(oe, i, o, u, t), Pu(Pn(s, o)));
              break e;
            }
          }
          ((u = s = Pn(s, o)),
            pe !== 4 && (pe = 2),
            hr === null ? (hr = [u]) : hr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Ms(u, s, t);
                os(u, f);
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
                      (Wt === null || !Wt.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var w = Is(u, o, t);
                  os(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha(n);
      } catch (N) {
        ((t = N), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function vi() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((tn & 268435455) === 0 && (hl & 268435455) === 0) || Ht(ve, ke));
  }
  function Sl(e, t) {
    var n = U;
    U |= 2;
    var r = pa();
    (ve !== e || ke !== t) && ((_t = null), rn(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if ((Lu(), (U = n), (ml.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (ke = 0), pe);
  }
  function wf() {
    for (; fe !== null;) ma(fe);
  }
  function kf() {
    for (; fe !== null && !$a();) ma(fe);
  }
  function ma(e) {
    var t = ga(e.alternate, e, Be);
    ((e.memoizedProps = e.pendingProps), t === null ? ha(e) : (fe = t), (oi.current = null));
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = df(n, t, Be)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = pf(n, t)), n !== null)) {
          ((n.flags &= 32767), (fe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((pe = 6), (fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function ln(e, t, n) {
    var r = Q,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (Q = 1), Sf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (Q = r));
    }
    return null;
  }
  function Sf(e, t, n, r) {
    do Rn();
    while (Vt !== null);
    if ((U & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (ec(e, u),
      e === ve && ((fe = ve = null), (ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        wa(_r, function () {
          return (Rn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ze.transition), (Ze.transition = null));
      var i = Q;
      Q = 1;
      var o = U;
      ((U |= 4),
        (oi.current = null),
        hf(e, n),
        ua(n, e),
        Wc(vu),
        (jr = !!hu),
        (vu = hu = null),
        (e.current = n),
        vf(n),
        Qa(),
        (U = o),
        (Q = i),
        (Ze.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Vt = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Wt = null),
      Xa(n.stateNode),
      Ie(e, ie()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = ci), (ci = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Rn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === fi ? vr++ : ((vr = 0), (fi = e))) : (vr = 0),
      Dt(),
      null
    );
  }
  function Rn() {
    if (Vt !== null) {
      var e = no(gl),
        t = Ze.transition,
        n = Q;
      try {
        if (((Ze.transition = null), (Q = 16 > e ? 16 : e), Vt === null)) var r = !1;
        else {
          if (((e = Vt), (Vt = null), (gl = 0), (U & 6) !== 0)) throw Error(m(331));
          var l = U;
          for (U |= 4, x = e.current; x !== null;) {
            var u = x,
              i = u.child;
            if ((x.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (x = p; x !== null;) {
                    var y = x;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) ((g.return = y), (x = g));
                    else
                      for (; x !== null;) {
                        y = x;
                        var h = y.sibling,
                          S = y.return;
                        if ((ea(y), y === p)) {
                          x = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = S), (x = h));
                          break;
                        }
                        x = S;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var _ = C.child;
                  if (_ !== null) {
                    C.child = null;
                    do {
                      var oe = _.sibling;
                      ((_.sibling = null), (_ = oe));
                    } while (_ !== null);
                  }
                }
                x = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (x = i));
            else
              e: for (; x !== null;) {
                if (((u = x), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (x = f));
                  break e;
                }
                x = u.return;
              }
          }
          var a = e.current;
          for (x = a; x !== null;) {
            i = x;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (x = d));
            else
              e: for (i = a; x !== null;) {
                if (((o = x), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (N) {
                    ue(o, o.return, N);
                  }
                if (o === i) {
                  x = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  ((w.return = o.return), (x = w));
                  break e;
                }
                x = o.return;
              }
          }
          if (((U = l), Dt(), ft && typeof ft.onPostCommitFiberRoot == "function"))
            try {
              ft.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Q = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function va(e, t, n) {
    ((t = Pn(n, t)),
      (t = Ms(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = ze()),
      e !== null && (Wn(e, 1, t), Ie(e, t)));
  }
  function ue(e, t, n) {
    if (e.tag === 3) va(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          va(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = Is(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = ze()),
              t !== null && (Wn(t, 1, e), Ie(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function xf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (ke & n) === n &&
        (pe === 4 || (pe === 3 && (ke & 130023424) === ke && 500 > ie() - ai)
          ? rn(e, 0)
          : (si |= n)),
      Ie(e, t));
  }
  function ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = ze();
    ((e = xt(e, t)), e !== null && (Wn(e, t, n), Ie(e, n)));
  }
  function Ef(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ya(e, n));
  }
  function Cf(e, t) {
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
    (r !== null && r.delete(t), ya(e, n));
  }
  var ga;
  ga = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), ff(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), ee && (t.flags & 1048576) !== 0 && Jo(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = wn(t, xe.current);
        (_n(t, n), (l = Wu(null, t, r, e, l, n)));
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
              je(r) ? ((u = !0), Yr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yu(t, r, e, n),
              (t = Ju(null, t, r, !0, u, n)))
            : ((t.tag = 0), ee && u && Eu(t), Pe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = $s(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, lt(r.type, e), n);
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
          Zu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          $s(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Qs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            is(e, t),
            nl(t, r, null, n));
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
              ((l = Pn(Error(m(423)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(m(424)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else
              for (
                Ve = Ot(t.stateNode.containerInfo.firstChild),
                  We = t,
                  ee = !0,
                  rt = null,
                  n = ls(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((xn(), r === l)) {
              t = Ct(e, t, n);
              break e;
            }
            Pe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          as(t),
          e === null && Nu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          yu(r, l) ? (i = null) : u !== null && yu(r, u) && (t.flags |= 32),
          Hs(e, t),
          Pe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Nu(t), null);
      case 13:
        return Ys(e, t, n);
      case 4:
        return (
          Mu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          As(e, t, r, l, n)
        );
      case 7:
        return (Pe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            X(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (nt(u.value, i)) {
              if (u.children === l.children && !Re.current) {
                t = Ct(e, t, n);
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
                          var y = p.pending;
                          (y === null ? (s.next = s) : ((s.next = y.next), (y.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        Ru(u.return, n, t),
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
                    Ru(i, n, t),
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
          (Pe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = lt(r, t.pendingProps)), (l = lt(r.type, l)), Ws(e, t, r, l, n));
      case 15:
        return Vs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          fl(e, t),
          (t.tag = 1),
          je(r) ? ((e = !0), Yr(t)) : (e = !1),
          _n(t, n),
          js(t, r, l),
          Yu(t, r, l, n),
          Ju(null, t, r, !0, e, n)
        );
      case 19:
        return Gs(e, t, n);
      case 22:
        return Bs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return Ji(e, t);
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
  function yi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Nf(e) {
    if (typeof e == "function") return yi(e) ? 1 : 0;
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
  function xl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) yi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Le:
          return un(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case Nt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Nt), (e.lanes = u), e);
        case Fe:
          return ((e = Je(13, n, t, l)), (e.elementType = Fe), (e.lanes = u), e);
        case et:
          return ((e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = u), e);
        case le:
          return El(n, l, u, t);
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
              case Te:
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
  function El(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function gi(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function wi(e, t, n) {
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
  function Pf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Kl(0)),
      (this.expirationTimes = Kl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ki(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Pf(e, t, n, o, s)),
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
      Ou(u),
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
  function ka(e) {
    if (!e) return It;
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
            if (je(t.type)) {
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
      if (je(n)) return Xo(e, n, t);
    }
    return t;
  }
  function Sa(e, t, n, r, l, u, i, o, s) {
    return (
      (e = ki(n, r, !0, e, l, u, i, o, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = ze()),
      (l = Bt(n)),
      (u = Et(r, l)),
      (u.callback = t ?? null),
      Ut(n, u, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      Ie(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      u = ze(),
      i = Bt(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, i)),
      e !== null && (ot(e, l, i, u), tl(e, l, i)),
      i
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function xa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Si(e, t) {
    (xa(e, t), (e = e.alternate) && xa(e, t));
  }
  function Lf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xi(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = xi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Cl(e, t, null, null);
    }),
    (Nl.prototype.unmount = xi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (nn(function () {
            Cl(null, e, null, null);
          }),
            (t[gt] = null));
        }
      }));
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && so(e));
    }
  };
  function Ei(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function Tf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = Sa(t, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = i),
        (e[gt] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = _l(s);
        o.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        Cl(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = _l(i);
          o.call(s);
        };
      }
      Cl(t, i, e, l);
    } else i = Tf(n, t, e, l, r);
    return _l(i);
  }
  ((ro = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), Ie(t, ie()), (U & 6) === 0 && ((Tn = ie() + 500), Dt()));
        }
        break;
      case 13:
        (nn(function () {
          var r = xt(e, 1);
          if (r !== null) {
            var l = ze();
            ot(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
          var n = ze();
          ot(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (lo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = xt(e, t);
        if (n !== null) {
          var r = ze();
          ot(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (uo = function () {
      return Q;
    }),
    (io = function (e, t) {
      var n = Q;
      try {
        return ((Q = e), t());
      } finally {
        Q = n;
      }
    }),
    (Wl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Qr(r);
                if (!l) throw Error(m(90));
                (Ti(r), jl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ii(e, n);
          break;
        case "select":
          ((t = n.value), t != null && on(e, !!n.multiple, t, !1));
      }
    }),
    ($i = mi),
    (Qi = nn));
  var Rf = { usingClientEntryPoint: !1, Events: [rr, yn, Qr, Bi, Hi, mi] },
    yr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    jf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Gi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Lf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((Nr = Ll.inject(jf)), (ft = Ll));
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
    (De.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ei(t)) throw Error(m(200));
      return zf(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!Ei(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Ea;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[gt] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new xi(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Gi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (De.flushSync = function (e) {
      return nn(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!Ei(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ea;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Sa(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[gt] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Nl(t);
    }),
    (De.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (nn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[gt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = mi),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var ja;
function Wf() {
  if (ja) return Ni.exports;
  ja = 1;
  function P() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (O) {
        console.error(O);
      }
  }
  return (P(), (Ni.exports = Af()), Ni.exports);
}
var Oa;
function Vf() {
  if (Oa) return Tl;
  Oa = 1;
  var P = Wf();
  return ((Tl.createRoot = P.createRoot), (Tl.hydrateRoot = P.hydrateRoot), Tl);
}
var Bf = Vf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = (P) => P.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ia = (...P) =>
    P.filter((O, m, se) => !!O && O.trim() !== "" && se.indexOf(O) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var $f = {
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
 */ const Qf = jn.forwardRef(
  (
    {
      color: P = "currentColor",
      size: O = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: se,
      className: F = "",
      children: B,
      iconNode: ae,
      ...ce
    },
    H,
  ) =>
    jn.createElement(
      "svg",
      {
        ref: H,
        ...$f,
        width: O,
        height: O,
        stroke: P,
        strokeWidth: se ? (Number(m) * 24) / Number(O) : m,
        className: Ia("lucide", F),
        ...ce,
      },
      [...ae.map(([ge, me]) => jn.createElement(ge, me)), ...(Array.isArray(B) ? B : [B])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Da = (P, O) => {
  const m = jn.forwardRef(({ className: se, ...F }, B) =>
    jn.createElement(Qf, { ref: B, iconNode: O, className: Ia(`lucide-${Hf(P)}`, se), ...F }),
  );
  return ((m.displayName = `${P}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = Da("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = Da("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
function Xf() {
  return R.jsxs("svg", {
    width: 26,
    height: 20,
    viewBox: "0 0 30 22",
    fill: "none",
    "aria-hidden": !0,
    children: [
      R.jsx("path", {
        d: "M2 4C2 4 8 1 15 6C22 11 28 8 28 8",
        stroke: "#e02b10",
        strokeWidth: "3.5",
        strokeLinecap: "round",
      }),
      R.jsx("path", {
        d: "M2 16C2 16 8 13 15 18C22 23 28 20 28 20",
        stroke: "#e02b10",
        strokeWidth: "3.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Gf() {
  return R.jsxs("svg", {
    width: 30,
    height: 22,
    viewBox: "0 0 30 22",
    fill: "none",
    "aria-hidden": !0,
    children: [
      R.jsx("path", {
        d: "M2 4C2 4 8 1 15 6C22 11 28 8 28 8",
        stroke: "white",
        strokeWidth: "3.5",
        strokeLinecap: "round",
      }),
      R.jsx("path", {
        d: "M2 16C2 16 8 13 15 18C22 23 28 20 28 20",
        stroke: "white",
        strokeWidth: "3.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
const Zf =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_213626_db1bde2b-521c-4b22-91f3-35c072eb8771.mp4",
  Jf = ["RITUALS", "RATES"],
  qf = [
    ["80%", "Reach uplift"],
    ["92%", "Client loyalty"],
  ],
  Ma = { fontFamily: "Inter, sans-serif", fontWeight: 700 },
  bf = { fontFamily: "Inter, sans-serif", fontWeight: 400 },
  wr = { fontFamily: "Inter, sans-serif" };
function ed() {
  return R.jsxs("div", {
    className: "relative w-full min-h-screen overflow-hidden",
    style: { backgroundColor: "#e02b10" },
    children: [
      R.jsx("video", {
        className: "absolute inset-0 h-full w-full object-cover",
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        src: Zf,
      }),
      R.jsxs("nav", {
        className:
          "absolute left-0 right-0 top-0 z-30 flex items-center justify-between gap-2 px-4 py-4 sm:px-6 md:px-10 md:py-5",
        children: [
          R.jsxs("div", {
            className: "flex items-center gap-3 sm:gap-6",
            children: [
              R.jsx(Gf, {}),
              R.jsxs("div", {
                className: "hidden items-center gap-2 sm:flex",
                children: [
                  R.jsx("button", {
                    type: "button",
                    className: "rounded-full bg-white px-5 py-2 text-xs text-black",
                    style: Ma,
                    children: "HOME",
                  }),
                  Jf.map((P) =>
                    R.jsx(
                      "button",
                      {
                        type: "button",
                        className:
                          "rounded-full border border-white/60 px-5 py-2 text-xs text-white transition-all hover:border-white",
                        style: bf,
                        children: P,
                      },
                      P,
                    ),
                  ),
                ],
              }),
            ],
          }),
          R.jsxs("div", {
            className: "flex items-center gap-3 sm:gap-4",
            children: [
              R.jsx("button", {
                type: "button",
                className: "text-white transition-opacity hover:opacity-70",
                "aria-label": "Instagram",
                children: R.jsx(Kf, { size: 18, strokeWidth: 1.5 }),
              }),
              R.jsx("button", {
                type: "button",
                className: "hidden text-white transition-opacity hover:opacity-70 sm:block",
                "aria-label": "Send",
                children: R.jsx(Yf, { size: 16, strokeWidth: 1.5 }),
              }),
              R.jsx("button", {
                type: "button",
                className:
                  "whitespace-nowrap rounded-full border border-white px-3 py-2 text-xs text-white transition-all hover:bg-white hover:text-red-600 sm:px-5",
                style: wr,
                children: "Reservations",
              }),
            ],
          }),
        ],
      }),
      R.jsxs("div", {
        className: "relative z-20 flex min-h-screen flex-col px-4 sm:px-6 md:px-10",
        children: [
          R.jsx("div", { className: "h-[72px] shrink-0" }),
          R.jsxs("div", {
            className:
              "mx-auto flex flex-1 flex-col gap-10 py-8 md:flex-row md:items-center md:justify-between md:gap-32 md:py-0",
            style: { maxWidth: "1100px", width: "100%" },
            children: [
              R.jsxs("div", {
                className: "max-w-[260px]",
                children: [
                  R.jsxs("p", {
                    className:
                      "mb-2 text-[13px] uppercase leading-snug tracking-[0.22em] text-white",
                    style: Ma,
                    children: ["MARKETING", R.jsx("br", {}), "COLLECTIVE"],
                  }),
                  R.jsxs("p", {
                    className: "text-[13px] leading-relaxed text-white",
                    style: { ...wr, opacity: 0.8 },
                    children: [
                      "Creative growth blueprints",
                      R.jsx("br", {}),
                      "for bold brands in Web3 era",
                    ],
                  }),
                ],
              }),
              R.jsxs("div", {
                className: "max-w-[260px] text-left",
                children: [
                  R.jsx("div", { className: "mb-2 flex justify-start", children: R.jsx(Xf, {}) }),
                  R.jsx("p", {
                    className: "mb-3 text-[14px] leading-relaxed text-white",
                    style: wr,
                    children:
                      "MetricX is the essential growth dashboard for bold agencies. Monitor reach, refine spend, steer campaigns, surface insights, delight your clients every day.",
                  }),
                  R.jsxs("p", {
                    className: "text-[13px] leading-loose text-white",
                    style: { ...wr, opacity: 0.7 },
                    children: [
                      "Audiences Dashboards Spend",
                      R.jsx("br", {}),
                      "Performance Channels Growth",
                    ],
                  }),
                ],
              }),
            ],
          }),
          R.jsxs("div", {
            className:
              "flex shrink-0 flex-col gap-8 pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6",
            children: [
              R.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [
                  R.jsxs("h1", {
                    className: "mb-6 select-none text-white md:mb-10",
                    style: {
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(56px, 13vw, 155px)",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.78,
                      width: "fit-content",
                    },
                    children: ["creative", R.jsx("br", {}), "studio"],
                  }),
                  R.jsxs("div", {
                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6",
                    children: [
                      R.jsxs("p", {
                        className: "text-[14px] leading-relaxed text-white",
                        style: { ...wr, minWidth: "160px" },
                        children: [
                          "Sharp ideas only. We craft",
                          R.jsx("br", {}),
                          "brands that own Web3.",
                        ],
                      }),
                      R.jsx("button", {
                        type: "button",
                        className:
                          "w-full rounded-full bg-white text-black shadow-lg transition-all hover:bg-gray-100 active:scale-95 sm:w-auto",
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "15px",
                          whiteSpace: "nowrap",
                          padding: "24px 60px",
                        },
                        children: "begin now",
                      }),
                    ],
                  }),
                ],
              }),
              R.jsx("div", {
                className: "flex gap-4 sm:gap-6",
                children: qf.map(([P, O]) =>
                  R.jsxs(
                    "div",
                    {
                      className:
                        "flex flex-1 flex-col items-start justify-between rounded-2xl px-5 py-5 text-left sm:px-6 lg:flex-initial",
                      style: {
                        minWidth: "150px",
                        minHeight: "150px",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(10px)",
                      },
                      children: [
                        R.jsx("p", {
                          className: "leading-none",
                          style: {
                            fontFamily: "Britanica-Black, sans-serif",
                            fontSize: "clamp(2rem, 6vw, 2.6rem)",
                            color: "#111",
                          },
                          children: P,
                        }),
                        R.jsx("p", {
                          className: "mt-auto text-[12px]",
                          style: { fontFamily: "Inter, sans-serif", color: "#888" },
                          children: O,
                        }),
                      ],
                    },
                    O,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
Bf.createRoot(document.getElementById("root")).render(
  R.jsx(jn.StrictMode, { children: R.jsx(ed, {}) }),
);
