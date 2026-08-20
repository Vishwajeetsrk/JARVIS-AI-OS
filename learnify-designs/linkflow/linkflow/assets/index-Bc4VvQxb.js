(function () {
  const C = document.createElement("link").relList;
  if (C && C.supports && C.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) F(M);
  new MutationObserver((M) => {
    for (const V of M)
      if (V.type === "childList")
        for (const oe of V.addedNodes) oe.tagName === "LINK" && oe.rel === "modulepreload" && F(oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(M) {
    const V = {};
    return (
      M.integrity && (V.integrity = M.integrity),
      M.referrerPolicy && (V.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (V.credentials = "include")
        : M.crossOrigin === "anonymous"
          ? (V.credentials = "omit")
          : (V.credentials = "same-origin"),
      V
    );
  }
  function F(M) {
    if (M.ep) return;
    M.ep = !0;
    const V = m(M);
    fetch(M.href, V);
  }
})();
var Po = { exports: {} },
  kr = {},
  zo = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Vf() {
  if (Pa) return U;
  Pa = 1;
  var v = Symbol.for("react.element"),
    C = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    V = Symbol.for("react.provider"),
    oe = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    Z = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    W = Symbol.iterator;
  function G(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (W && c[W]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var pe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ne = Object.assign,
    Q = {};
  function B(c, y, D) {
    ((this.props = c), (this.context = y), (this.refs = Q), (this.updater = D || pe));
  }
  ((B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (B.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function Te() {}
  Te.prototype = B.prototype;
  function We(c, y, D) {
    ((this.props = c), (this.context = y), (this.refs = Q), (this.updater = D || pe));
  }
  var Re = (We.prototype = new Te());
  ((Re.constructor = We), Ne(Re, B.prototype), (Re.isPureReactComponent = !0));
  var me = Array.isArray,
    Ie = Object.prototype.hasOwnProperty,
    ge = { current: null },
    Se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(c, y, D) {
    var A,
      K = {},
      X = null,
      b = null;
    if (y != null)
      for (A in (y.ref !== void 0 && (b = y.ref), y.key !== void 0 && (X = "" + y.key), y))
        Ie.call(y, A) && !Se.hasOwnProperty(A) && (K[A] = y[A]);
    var J = arguments.length - 2;
    if (J === 1) K.children = D;
    else if (1 < J) {
      for (var le = Array(J), Xe = 0; Xe < J; Xe++) le[Xe] = arguments[Xe + 2];
      K.children = le;
    }
    if (c && c.defaultProps) for (A in ((J = c.defaultProps), J)) K[A] === void 0 && (K[A] = J[A]);
    return { $$typeof: v, type: c, key: X, ref: b, props: K, _owner: ge.current };
  }
  function Qe(c, y) {
    return { $$typeof: v, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function qe(c) {
    return typeof c == "object" && c !== null && c.$$typeof === v;
  }
  function Xt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (D) {
        return y[D];
      })
    );
  }
  var pt = /\/+/g;
  function Ke(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? Xt("" + c.key) : y.toString(36);
  }
  function it(c, y, D, A, K) {
    var X = typeof c;
    (X === "undefined" || X === "boolean") && (c = null);
    var b = !1;
    if (c === null) b = !0;
    else
      switch (X) {
        case "string":
        case "number":
          b = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case v:
            case C:
              b = !0;
          }
      }
    if (b)
      return (
        (b = c),
        (K = K(b)),
        (c = A === "" ? "." + Ke(b, 0) : A),
        me(K)
          ? ((D = ""),
            c != null && (D = c.replace(pt, "$&/") + "/"),
            it(K, y, D, "", function (Xe) {
              return Xe;
            }))
          : K != null &&
            (qe(K) &&
              (K = Qe(
                K,
                D +
                  (!K.key || (b && b.key === K.key) ? "" : ("" + K.key).replace(pt, "$&/") + "/") +
                  c,
              )),
            y.push(K)),
        1
      );
    if (((b = 0), (A = A === "" ? "." : A + ":"), me(c)))
      for (var J = 0; J < c.length; J++) {
        X = c[J];
        var le = A + Ke(X, J);
        b += it(X, y, D, le, K);
      }
    else if (((le = G(c)), typeof le == "function"))
      for (c = le.call(c), J = 0; !(X = c.next()).done;)
        ((X = X.value), (le = A + Ke(X, J++)), (b += it(X, y, D, le, K)));
    else if (X === "object")
      throw (
        (y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return b;
  }
  function mt(c, y, D) {
    if (c == null) return c;
    var A = [],
      K = 0;
    return (
      it(c, A, "", "", function (X) {
        return y.call(D, X, K++);
      }),
      A
    );
  }
  function De(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = D));
          },
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = D));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ae = { current: null },
    S = { transition: null },
    R = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: S, ReactCurrentOwner: ge };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: mt,
      forEach: function (c, y, D) {
        mt(
          c,
          function () {
            y.apply(this, arguments);
          },
          D,
        );
      },
      count: function (c) {
        var y = 0;
        return (
          mt(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          mt(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!qe(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (U.Component = B),
    (U.Fragment = m),
    (U.Profiler = M),
    (U.PureComponent = We),
    (U.StrictMode = F),
    (U.Suspense = $),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (U.act = _),
    (U.cloneElement = function (c, y, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = Ne({}, c.props),
        K = c.key,
        X = c.ref,
        b = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((X = y.ref), (b = ge.current)),
          y.key !== void 0 && (K = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var J = c.type.defaultProps;
        for (le in y)
          Ie.call(y, le) &&
            !Se.hasOwnProperty(le) &&
            (A[le] = y[le] === void 0 && J !== void 0 ? J[le] : y[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) A.children = D;
      else if (1 < le) {
        J = Array(le);
        for (var Xe = 0; Xe < le; Xe++) J[Xe] = arguments[Xe + 2];
        A.children = J;
      }
      return { $$typeof: v, type: c.type, key: K, ref: X, props: A, _owner: b };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: oe,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: V, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Me),
    (U.createFactory = function (c) {
      var y = Me.bind(null, c);
      return ((y.type = c), y);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: I, render: c };
    }),
    (U.isValidElement = qe),
    (U.lazy = function (c) {
      return { $$typeof: re, _payload: { _status: -1, _result: c }, _init: De };
    }),
    (U.memo = function (c, y) {
      return { $$typeof: Z, type: c, compare: y === void 0 ? null : y };
    }),
    (U.startTransition = function (c) {
      var y = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = y;
      }
    }),
    (U.unstable_act = _),
    (U.useCallback = function (c, y) {
      return ae.current.useCallback(c, y);
    }),
    (U.useContext = function (c) {
      return ae.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return ae.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, y) {
      return ae.current.useEffect(c, y);
    }),
    (U.useId = function () {
      return ae.current.useId();
    }),
    (U.useImperativeHandle = function (c, y, D) {
      return ae.current.useImperativeHandle(c, y, D);
    }),
    (U.useInsertionEffect = function (c, y) {
      return ae.current.useInsertionEffect(c, y);
    }),
    (U.useLayoutEffect = function (c, y) {
      return ae.current.useLayoutEffect(c, y);
    }),
    (U.useMemo = function (c, y) {
      return ae.current.useMemo(c, y);
    }),
    (U.useReducer = function (c, y, D) {
      return ae.current.useReducer(c, y, D);
    }),
    (U.useRef = function (c) {
      return ae.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ae.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, y, D) {
      return ae.current.useSyncExternalStore(c, y, D);
    }),
    (U.useTransition = function () {
      return ae.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var za;
function Ro() {
  return (za || ((za = 1), (zo.exports = Vf())), zo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function $f() {
  if (La) return kr;
  La = 1;
  var v = Ro(),
    C = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    F = Object.prototype.hasOwnProperty,
    M = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(I, $, Z) {
    var re,
      W = {},
      G = null,
      pe = null;
    (Z !== void 0 && (G = "" + Z),
      $.key !== void 0 && (G = "" + $.key),
      $.ref !== void 0 && (pe = $.ref));
    for (re in $) F.call($, re) && !V.hasOwnProperty(re) && (W[re] = $[re]);
    if (I && I.defaultProps)
      for (re in (($ = I.defaultProps), $)) W[re] === void 0 && (W[re] = $[re]);
    return { $$typeof: C, type: I, key: G, ref: pe, props: W, _owner: M.current };
  }
  return ((kr.Fragment = m), (kr.jsx = oe), (kr.jsxs = oe), kr);
}
var ja;
function Bf() {
  return (ja || ((ja = 1), (Po.exports = $f())), Po.exports);
}
var k = Bf(),
  je = Ro(),
  Rl = {},
  Lo = { exports: {} },
  He = {},
  jo = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Hf() {
  return (
    Ta ||
      ((Ta = 1),
      (function (v) {
        function C(S, R) {
          var _ = S.length;
          S.push(R);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              y = S[c];
            if (0 < M(y, R)) ((S[c] = R), (S[_] = y), (_ = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function F(S) {
          if (S.length === 0) return null;
          var R = S[0],
            _ = S.pop();
          if (_ !== R) {
            S[0] = _;
            e: for (var c = 0, y = S.length, D = y >>> 1; c < D;) {
              var A = 2 * (c + 1) - 1,
                K = S[A],
                X = A + 1,
                b = S[X];
              if (0 > M(K, _))
                X < y && 0 > M(b, K)
                  ? ((S[c] = b), (S[X] = _), (c = X))
                  : ((S[c] = K), (S[A] = _), (c = A));
              else if (X < y && 0 > M(b, _)) ((S[c] = b), (S[X] = _), (c = X));
              else break e;
            }
          }
          return R;
        }
        function M(S, R) {
          var _ = S.sortIndex - R.sortIndex;
          return _ !== 0 ? _ : S.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var V = performance;
          v.unstable_now = function () {
            return V.now();
          };
        } else {
          var oe = Date,
            I = oe.now();
          v.unstable_now = function () {
            return oe.now() - I;
          };
        }
        var $ = [],
          Z = [],
          re = 1,
          W = null,
          G = 3,
          pe = !1,
          Ne = !1,
          Q = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          Te = typeof clearTimeout == "function" ? clearTimeout : null,
          We = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Re(S) {
          for (var R = m(Z); R !== null;) {
            if (R.callback === null) F(Z);
            else if (R.startTime <= S) (F(Z), (R.sortIndex = R.expirationTime), C($, R));
            else break;
            R = m(Z);
          }
        }
        function me(S) {
          if (((Q = !1), Re(S), !Ne))
            if (m($) !== null) ((Ne = !0), De(Ie));
            else {
              var R = m(Z);
              R !== null && ae(me, R.startTime - S);
            }
        }
        function Ie(S, R) {
          ((Ne = !1), Q && ((Q = !1), Te(Me), (Me = -1)), (pe = !0));
          var _ = G;
          try {
            for (Re(R), W = m($); W !== null && (!(W.expirationTime > R) || (S && !Xt()));) {
              var c = W.callback;
              if (typeof c == "function") {
                ((W.callback = null), (G = W.priorityLevel));
                var y = c(W.expirationTime <= R);
                ((R = v.unstable_now()),
                  typeof y == "function" ? (W.callback = y) : W === m($) && F($),
                  Re(R));
              } else F($);
              W = m($);
            }
            if (W !== null) var D = !0;
            else {
              var A = m(Z);
              (A !== null && ae(me, A.startTime - R), (D = !1));
            }
            return D;
          } finally {
            ((W = null), (G = _), (pe = !1));
          }
        }
        var ge = !1,
          Se = null,
          Me = -1,
          Qe = 5,
          qe = -1;
        function Xt() {
          return !(v.unstable_now() - qe < Qe);
        }
        function pt() {
          if (Se !== null) {
            var S = v.unstable_now();
            qe = S;
            var R = !0;
            try {
              R = Se(!0, S);
            } finally {
              R ? Ke() : ((ge = !1), (Se = null));
            }
          } else ge = !1;
        }
        var Ke;
        if (typeof We == "function")
          Ke = function () {
            We(pt);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            mt = it.port2;
          ((it.port1.onmessage = pt),
            (Ke = function () {
              mt.postMessage(null);
            }));
        } else
          Ke = function () {
            B(pt, 0);
          };
        function De(S) {
          ((Se = S), ge || ((ge = !0), Ke()));
        }
        function ae(S, R) {
          Me = B(function () {
            S(v.unstable_now());
          }, R);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            Ne || pe || ((Ne = !0), De(Ie));
          }),
          (v.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Qe = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return G;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return m($);
          }),
          (v.unstable_next = function (S) {
            switch (G) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = G;
            }
            var _ = G;
            G = R;
            try {
              return S();
            } finally {
              G = _;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (S, R) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var _ = G;
            G = S;
            try {
              return R();
            } finally {
              G = _;
            }
          }),
          (v.unstable_scheduleCallback = function (S, R, _) {
            var c = v.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              S)
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
              (S = {
                id: re++,
                callback: R,
                priorityLevel: S,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  C(Z, S),
                  m($) === null &&
                    S === m(Z) &&
                    (Q ? (Te(Me), (Me = -1)) : (Q = !0), ae(me, _ - c)))
                : ((S.sortIndex = y), C($, S), Ne || pe || ((Ne = !0), De(Ie))),
              S
            );
          }),
          (v.unstable_shouldYield = Xt),
          (v.unstable_wrapCallback = function (S) {
            var R = G;
            return function () {
              var _ = G;
              G = R;
              try {
                return S.apply(this, arguments);
              } finally {
                G = _;
              }
            };
          }));
      })(To)),
    To
  );
}
var Ra;
function Wf() {
  return (Ra || ((Ra = 1), (jo.exports = Hf())), jo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Qf() {
  if (Ma) return He;
  Ma = 1;
  var v = Ro(),
    C = Wf();
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
  var F = new Set(),
    M = {};
  function V(e, t) {
    (oe(e, t), oe(e + "Capture", t));
  }
  function oe(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) F.add(t[e]);
  }
  var I = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $ = Object.prototype.hasOwnProperty,
    Z =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    re = {},
    W = {};
  function G(e) {
    return $.call(W, e) ? !0 : $.call(re, e) ? !1 : Z.test(e) ? (W[e] = !0) : ((re[e] = !0), !1);
  }
  function pe(e, t, n, r) {
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
  function Ne(e, t, n, r) {
    if (t === null || typeof t > "u" || pe(e, t, n, r)) return !0;
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
  function Q(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var B = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      B[e] = new Q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      B[t] = new Q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      B[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        B[e] = new Q(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        B[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      B[e] = new Q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      B[e] = new Q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      B[e] = new Q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      B[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Te = /[\-:]([a-z])/g;
  function We(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Te, We);
      B[t] = new Q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Te, We);
        B[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Te, We);
      B[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      B[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (B.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      B[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Re(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (Ne(t, n, l, r) && (n = null),
      r || l === null
        ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var me = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ie = Symbol.for("react.element"),
    ge = Symbol.for("react.portal"),
    Se = Symbol.for("react.fragment"),
    Me = Symbol.for("react.strict_mode"),
    Qe = Symbol.for("react.profiler"),
    qe = Symbol.for("react.provider"),
    Xt = Symbol.for("react.context"),
    pt = Symbol.for("react.forward_ref"),
    Ke = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    mt = Symbol.for("react.memo"),
    De = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
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
  var D = !1;
  function A(e, t) {
    if (!e || D) return "";
    D = !0;
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
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];
        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((D = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function K(e) {
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
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Se:
        return "Fragment";
      case ge:
        return "Portal";
      case Qe:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xt:
          return (e.displayName || "Context") + ".Consumer";
        case qe:
          return (e._context.displayName || "Context") + ".Provider";
        case pt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case mt:
          return ((t = e.displayName || null), t !== null ? t : X(e.type) || "Memo");
        case De:
          ((t = e._payload), (e = e._init));
          try {
            return X(e(t));
          } catch {}
      }
    return null;
  }
  function b(e) {
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
        return X(t);
      case 8:
        return t === Me ? "StrictMode" : "Mode";
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
  function J(e) {
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
  function le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xe(e) {
    var t = le(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Mo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Er(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Oo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = J(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Fo(e, t) {
    ((t = t.checked), t != null && Re(e, "checked", t, !1));
  }
  function Ol(e, t) {
    Fo(e, t);
    var n = J(t.value),
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
      ? Fl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Fl(e, t.type, J(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Io(e, t, n) {
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
  function Fl(e, t, n) {
    (t !== "number" || Er(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var In = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + J(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Do(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (In(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: J(n) };
  }
  function Uo(e, t) {
    var n = J(t.value),
      r = J(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Vo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Cr,
    $o = (function (e) {
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
          Cr = Cr || document.createElement("div"),
            Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Cr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Un = {
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
    Ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Un).forEach(function (e) {
    Ha.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]));
    });
  });
  function Bo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Un.hasOwnProperty(e) && Un[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bo(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Wa = _(
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
  function Ul(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Al(e, t) {
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
  var Vl = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bl = null,
    an = null,
    cn = null;
  function Wo(e) {
    if ((e = or(e))) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Xr(t)), Bl(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Ko() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Yo() {}
  var Hl = !1;
  function Go(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      ((Hl = !1), (an !== null || cn !== null) && (Yo(), Ko()));
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Xr(n);
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
  var Wl = !1;
  if (I)
    try {
      var Vn = {};
      (Object.defineProperty(Vn, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Vn, Vn),
        window.removeEventListener("test", Vn, Vn));
    } catch {
      Wl = !1;
    }
  function Qa(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var $n = !1,
    Nr = null,
    _r = !1,
    Ql = null,
    Ka = {
      onError: function (e) {
        (($n = !0), (Nr = e));
      },
    };
  function Xa(e, t, n, r, l, i, o, u, s) {
    (($n = !1), (Nr = null), Qa.apply(Ka, arguments));
  }
  function Ya(e, t, n, r, l, i, o, u, s) {
    if ((Xa.apply(this, arguments), $n)) {
      if ($n) {
        var p = Nr;
        (($n = !1), (Nr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Ql = p));
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
  function Zo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Jo(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function Ga(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i;) {
          if (i === n) return (Jo(l), e);
          if (i === r) return (Jo(l), t);
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, u = l.child; u;) {
          if (u === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (u === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u;) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function qo(e) {
    return ((e = Ga(e)), e !== null ? bo(e) : null);
  }
  function bo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = bo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var eu = C.unstable_scheduleCallback,
    tu = C.unstable_cancelCallback,
    Za = C.unstable_shouldYield,
    Ja = C.unstable_requestPaint,
    fe = C.unstable_now,
    qa = C.unstable_getCurrentPriorityLevel,
    Kl = C.unstable_ImmediatePriority,
    nu = C.unstable_UserBlockingPriority,
    Pr = C.unstable_NormalPriority,
    ba = C.unstable_LowPriority,
    ru = C.unstable_IdlePriority,
    zr = null,
    ht = null;
  function ec(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function")
      try {
        ht.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ot = Math.clz32 ? Math.clz32 : rc,
    tc = Math.log,
    nc = Math.LN2;
  function rc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((tc(e) / nc) | 0)) | 0);
  }
  var Lr = 64,
    jr = 4194304;
  function Bn(e) {
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Bn(u)) : ((i &= o), i !== 0 && (r = Bn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Bn(o)) : i !== 0 && (r = Bn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - ot(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function lc(e, t) {
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
  function ic(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - ot(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = lc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Xl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function lu() {
    var e = Lr;
    return ((Lr <<= 1), (Lr & 4194240) === 0 && (Lr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ot(t)),
      (e[t] = n));
  }
  function oc(e, t) {
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
      var l = 31 - ot(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Gl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - ot(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var q = 0;
  function iu(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ou,
    Zl,
    uu,
    su,
    au,
    Jl = !1,
    Rr = [],
    zt = null,
    Lt = null,
    jt = null,
    Wn = new Map(),
    Qn = new Map(),
    Tt = [],
    uc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function Kn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = or(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Kn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Kn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((jt = Kn(jt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Wn.set(i, Kn(Wn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Qn.set(i, Kn(Qn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function fu(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Zo(n)), t !== null)) {
            ((e.blockedOn = t),
              au(e.priority, function () {
                uu(n);
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
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Vl = r), n.target.dispatchEvent(r), (Vl = null));
      } else return ((t = or(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function du(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function ac() {
    ((Jl = !1),
      zt !== null && Mr(zt) && (zt = null),
      Lt !== null && Mr(Lt) && (Lt = null),
      jt !== null && Mr(jt) && (jt = null),
      Wn.forEach(du),
      Qn.forEach(du));
  }
  function Xn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), C.unstable_scheduleCallback(C.unstable_NormalPriority, ac)));
  }
  function Yn(e) {
    function t(l) {
      return Xn(l, e);
    }
    if (0 < Rr.length) {
      Xn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Xn(zt, e),
        Lt !== null && Xn(Lt, e),
        jt !== null && Xn(jt, e),
        Wn.forEach(t),
        Qn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (fu(n), n.blockedOn === null && Tt.shift());
  }
  var fn = me.ReactCurrentBatchConfig,
    Or = !0;
  function cc(e, t, n, r) {
    var l = q,
      i = fn.transition;
    fn.transition = null;
    try {
      ((q = 1), ql(e, t, n, r));
    } finally {
      ((q = l), (fn.transition = i));
    }
  }
  function fc(e, t, n, r) {
    var l = q,
      i = fn.transition;
    fn.transition = null;
    try {
      ((q = 4), ql(e, t, n, r));
    } finally {
      ((q = l), (fn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Or) {
      var l = bl(e, t, n, r);
      if (l === null) (vi(e, t, r, Fr, n), cu(e, r));
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if ((cu(e, r), t & 4 && -1 < uc.indexOf(e))) {
        for (; l !== null;) {
          var i = or(l);
          if (
            (i !== null && ou(i), (i = bl(e, t, n, r)), i === null && vi(e, t, r, Fr, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Fr = null;
  function bl(e, t, n, r) {
    if (((Fr = null), (e = $l(r)), (e = Gt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Zo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Fr = e), null);
  }
  function pu(e) {
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
        switch (qa()) {
          case Kl:
            return 1;
          case nu:
            return 4;
          case Pr:
          case ba:
            return 16;
          case ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null,
    ei = null,
    Ir = null;
  function mu() {
    if (Ir) return Ir;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ur() {
    return !0;
  }
  function hu() {
    return !1;
  }
  function Ye(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Ur
          : hu),
        (this.isPropagationStopped = hu),
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
            (this.isDefaultPrevented = Ur));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ur));
        },
        persist: function () {},
        isPersistent: Ur,
      }),
      t
    );
  }
  var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Ye(dn),
    Gn = _({}, dn, { view: 0, detail: 0 }),
    dc = Ye(Gn),
    ni,
    ri,
    Zn,
    Ar = _({}, Gn, {
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
      getModifierState: ii,
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
          : (e !== Zn &&
              (Zn && e.type === "mousemove"
                ? ((ni = e.screenX - Zn.screenX), (ri = e.screenY - Zn.screenY))
                : (ri = ni = 0),
              (Zn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    vu = Ye(Ar),
    pc = _({}, Ar, { dataTransfer: 0 }),
    mc = Ye(pc),
    hc = _({}, Gn, { relatedTarget: 0 }),
    li = Ye(hc),
    vc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = Ye(vc),
    gc = _({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wc = Ye(gc),
    xc = _({}, dn, { data: 0 }),
    yu = Ye(xc),
    kc = {
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
    Sc = {
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
    Ec = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ec[e]) ? !!t[e] : !1;
  }
  function ii() {
    return Cc;
  }
  var Nc = _({}, Gn, {
      key: function (e) {
        if (e.key) {
          var t = kc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Sc[e.keyCode] || "Unidentified"
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
      getModifierState: ii,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    _c = Ye(Nc),
    Pc = _({}, Ar, {
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
    gu = Ye(Pc),
    zc = _({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Lc = Ye(zc),
    jc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tc = Ye(jc),
    Rc = _({}, Ar, {
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
    Mc = Ye(Rc),
    Oc = [9, 13, 27, 32],
    oi = I && "CompositionEvent" in window,
    Jn = null;
  I && "documentMode" in document && (Jn = document.documentMode);
  var Fc = I && "TextEvent" in window && !Jn,
    wu = I && (!oi || (Jn && 8 < Jn && 11 >= Jn)),
    xu = " ",
    ku = !1;
  function Su(e, t) {
    switch (e) {
      case "keyup":
        return Oc.indexOf(t.keyCode) !== -1;
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
  function Eu(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var pn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return Eu(t);
      case "keypress":
        return t.which !== 32 ? null : ((ku = !0), xu);
      case "textInput":
        return ((e = t.data), e === xu && ku ? null : e);
      default:
        return null;
    }
  }
  function Dc(e, t) {
    if (pn)
      return e === "compositionend" || (!oi && Su(e, t))
        ? ((e = mu()), (Ir = ei = Rt = null), (pn = !1), e)
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
        return wu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uc = {
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
  function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uc[e.type] : t === "textarea";
  }
  function Nu(e, t, n, r) {
    (Qo(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var qn = null,
    bn = null;
  function Ac(e) {
    Hu(e, 0);
  }
  function Vr(e) {
    var t = gn(e);
    if (Mo(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var _u = !1;
  if (I) {
    var ui;
    if (I) {
      var si = "oninput" in document;
      if (!si) {
        var Pu = document.createElement("div");
        (Pu.setAttribute("oninput", "return;"), (si = typeof Pu.oninput == "function"));
      }
      ui = si;
    } else ui = !1;
    _u = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function zu() {
    qn && (qn.detachEvent("onpropertychange", Lu), (bn = qn = null));
  }
  function Lu(e) {
    if (e.propertyName === "value" && Vr(bn)) {
      var t = [];
      (Nu(t, bn, e, $l(e)), Go(Ac, t));
    }
  }
  function $c(e, t, n) {
    e === "focusin"
      ? (zu(), (qn = t), (bn = n), qn.attachEvent("onpropertychange", Lu))
      : e === "focusout" && zu();
  }
  function Bc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vr(bn);
  }
  function Hc(e, t) {
    if (e === "click") return Vr(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Vr(t);
  }
  function Qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ut = typeof Object.is == "function" ? Object.is : Qc;
  function er(e, t) {
    if (ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!$.call(t, l) || !ut(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ju(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Tu(e, t) {
    var n = ju(e);
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
      n = ju(n);
    }
  }
  function Ru(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ru(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Mu() {
    for (var e = window, t = Er(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Er(e.document);
    }
    return t;
  }
  function ai(e) {
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
  function Kc(e) {
    var t = Mu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && ai(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Tu(n, i)));
          var o = Tu(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Xc = I && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ci = null,
    tr = null,
    fi = !1;
  function Ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      mn == null ||
      mn !== Er(r) ||
      ((r = mn),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (tr && er(tr, r)) ||
        ((tr = r),
        (r = Wr(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function $r(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: $r("Animation", "AnimationEnd"),
      animationiteration: $r("Animation", "AnimationIteration"),
      animationstart: $r("Animation", "AnimationStart"),
      transitionend: $r("Transition", "TransitionEnd"),
    },
    di = {},
    Fu = {};
  I &&
    ((Fu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Br(e) {
    if (di[e]) return di[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fu) return (di[e] = t[n]);
    return e;
  }
  var Iu = Br("animationend"),
    Du = Br("animationiteration"),
    Uu = Br("animationstart"),
    Au = Br("transitionend"),
    Vu = new Map(),
    $u =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Mt(e, t) {
    (Vu.set(e, t), V(t, [e]));
  }
  for (var pi = 0; pi < $u.length; pi++) {
    var mi = $u[pi],
      Yc = mi.toLowerCase(),
      Gc = mi[0].toUpperCase() + mi.slice(1);
    Mt(Yc, "on" + Gc);
  }
  (Mt(Iu, "onAnimationEnd"),
    Mt(Du, "onAnimationIteration"),
    Mt(Uu, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Au, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    V("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    V(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    V("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    V("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    V(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    V(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
  function Bu(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ya(r, t, void 0, e), (e.currentTarget = null));
  }
  function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              p = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
            (Bu(l, u, p), (i = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (p = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Bu(l, u, p), (i = s));
          }
      }
    }
    if (_r) throw ((e = Ql), (_r = !1), (Ql = null), e);
  }
  function te(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wu(n, e, r, t));
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Hr]) {
      ((e[Hr] = !0),
        F.forEach(function (n) {
          n !== "selectionchange" && (Zc.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || ((t[Hr] = !0), hi("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, r) {
    switch (pu(t)) {
      case 1:
        var l = cc;
        break;
      case 4:
        l = fc;
        break;
      default:
        l = ql;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Wl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function vi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null;) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null;) {
            if (((o = Gt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Go(function () {
      var p = i,
        g = $l(n),
        w = [];
      e: {
        var h = Vu.get(e);
        if (h !== void 0) {
          var E = ti,
            P = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = _c;
              break;
            case "focusin":
              ((P = "focus"), (E = li));
              break;
            case "focusout":
              ((P = "blur"), (E = li));
              break;
            case "beforeblur":
            case "afterblur":
              E = li;
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
              E = vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Lc;
              break;
            case Iu:
            case Du:
            case Uu:
              E = yc;
              break;
            case Au:
              E = Tc;
              break;
            case "scroll":
              E = dc;
              break;
            case "wheel":
              E = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = gu;
          }
          var z = (t & 4) !== 0,
            de = !z && e === "scroll",
            f = z ? (h !== null ? h + "Capture" : null) : h;
          z = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var x = d.stateNode;
            if (
              (d.tag === 5 &&
                x !== null &&
                ((d = x), f !== null && ((x = An(a, f)), x != null && z.push(lr(a, x, d)))),
              de)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((h = new E(h, P, null, n, g)), w.push({ event: h, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            h && n !== Vl && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[xt]))
          )
            break e;
          if (
            (E || h) &&
            ((h =
              g.window === g
                ? g
                : (h = g.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = p),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((de = Yt(P)), P !== de || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = p)),
            E !== P)
          ) {
            if (
              ((z = vu),
              (x = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = gu), (x = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (de = E == null ? h : gn(E)),
              (d = P == null ? h : gn(P)),
              (h = new z(x, a + "leave", E, n, g)),
              (h.target = de),
              (h.relatedTarget = d),
              (x = null),
              Gt(g) === p &&
                ((z = new z(f, a + "enter", P, n, g)),
                (z.target = d),
                (z.relatedTarget = de),
                (x = z)),
              (de = x),
              E && P)
            )
              t: {
                for (z = E, f = P, a = 0, d = z; d; d = vn(d)) a++;
                for (d = 0, x = f; x; x = vn(x)) d++;
                for (; 0 < a - d;) ((z = vn(z)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = vn(z)), (f = vn(f)));
                }
                z = null;
              }
            else z = null;
            (E !== null && Qu(w, h, E, z, !1), P !== null && de !== null && Qu(w, de, P, z, !0));
          }
        }
        e: {
          if (
            ((h = p ? gn(p) : window),
            (E = h.nodeName && h.nodeName.toLowerCase()),
            E === "select" || (E === "input" && h.type === "file"))
          )
            var L = Vc;
          else if (Cu(h))
            if (_u) L = Wc;
            else {
              L = Bc;
              var j = $c;
            }
          else
            (E = h.nodeName) &&
              E.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (L = Hc);
          if (L && (L = L(e, p))) {
            Nu(w, L, n, g);
            break e;
          }
          (j && j(e, h, p),
            e === "focusout" &&
              (j = h._wrapperState) &&
              j.controlled &&
              h.type === "number" &&
              Fl(h, "number", h.value));
        }
        switch (((j = p ? gn(p) : window), e)) {
          case "focusin":
            (Cu(j) || j.contentEditable === "true") && ((mn = j), (ci = p), (tr = null));
            break;
          case "focusout":
            tr = ci = mn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fi = !1), Ou(w, n, g));
            break;
          case "selectionchange":
            if (Xc) break;
          case "keydown":
          case "keyup":
            Ou(w, n, g);
        }
        var T;
        if (oi)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          pn
            ? Su(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (wu &&
            n.locale !== "ko" &&
            (pn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && pn && (T = mu())
              : ((Rt = g), (ei = "value" in Rt ? Rt.value : Rt.textContent), (pn = !0))),
          (j = Wr(p, O)),
          0 < j.length &&
            ((O = new yu(O, e, null, n, g)),
            w.push({ event: O, listeners: j }),
            T ? (O.data = T) : ((T = Eu(n)), T !== null && (O.data = T)))),
          (T = Fc ? Ic(e, n) : Dc(e, n)) &&
            ((p = Wr(p, "onBeforeInput")),
            0 < p.length &&
              ((g = new yu("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: p }),
              (g.data = T))));
      }
      Hu(w, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = An(e, n)),
        i != null && r.unshift(lr(e, i, l)),
        (i = An(e, t)),
        i != null && r.push(lr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = An(n, i)), s != null && o.unshift(lr(n, s, u)))
          : l || ((s = An(n, i)), s != null && o.push(lr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Jc = /\r\n?/g,
    qc = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Jc,
        `
`,
      )
      .replace(qc, "");
  }
  function Qr(e, t, n) {
    if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(m(425));
  }
  function Kr() {}
  var yi = null,
    gi = null;
  function wi(e, t) {
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
  var xi = typeof setTimeout == "function" ? setTimeout : void 0,
    bc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xu = typeof Promise == "function" ? Promise : void 0,
    ef =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xu < "u"
          ? function (e) {
              return Xu.resolve(null).then(e).catch(tf);
            }
          : xi;
  function tf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ki(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Yn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Yn(t);
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
  function Yu(e) {
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
  var yn = Math.random().toString(36).slice(2),
    vt = "__reactFiber$" + yn,
    ir = "__reactProps$" + yn,
    xt = "__reactContainer$" + yn,
    Si = "__reactEvents$" + yn,
    nf = "__reactListeners$" + yn,
    rf = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[xt] || n[vt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Yu(e); e !== null;) {
            if ((n = e[vt])) return n;
            e = Yu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[vt] || e[xt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Xr(e) {
    return e[ir] || null;
  }
  var Ei = [],
    wn = -1;
  function Ft(e) {
    return { current: e };
  }
  function ne(e) {
    0 > wn || ((e.current = Ei[wn]), (Ei[wn] = null), wn--);
  }
  function ee(e, t) {
    (wn++, (Ei[wn] = e.current), (e.current = t));
  }
  var It = {},
    _e = Ft(It),
    Ue = Ft(!1),
    Zt = It;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ae(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Yr() {
    (ne(Ue), ne(_e));
  }
  function Gu(e, t, n) {
    if (_e.current !== It) throw Error(m(168));
    (ee(_e, t), ee(Ue, n));
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, b(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = _e.current),
      ee(_e, e),
      ee(Ue, Ue.current),
      !0
    );
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Zu(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ne(Ue),
        ne(_e),
        ee(_e, e))
      : ne(Ue),
      ee(Ue, n));
  }
  var kt = null,
    Zr = !1,
    Ci = !1;
  function qu(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function lf(e) {
    ((Zr = !0), qu(e));
  }
  function Dt() {
    if (!Ci && kt !== null) {
      Ci = !0;
      var e = 0,
        t = q;
      try {
        var n = kt;
        for (q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Zr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), eu(Kl, Dt), l);
      } finally {
        ((q = t), (Ci = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Jr = null,
    qr = 0,
    be = [],
    et = 0,
    Jt = null,
    St = 1,
    Et = "";
  function qt(e, t) {
    ((kn[Sn++] = qr), (kn[Sn++] = Jr), (Jr = e), (qr = t));
  }
  function bu(e, t, n) {
    ((be[et++] = St), (be[et++] = Et), (be[et++] = Jt), (Jt = e));
    var r = St;
    e = Et;
    var l = 32 - ot(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - ot(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - ot(t) + l)) | (n << l) | r),
        (Et = i + e));
    } else ((St = (1 << i) | (n << l) | r), (Et = e));
  }
  function Ni(e) {
    e.return !== null && (qt(e, 1), bu(e, 1, 0));
  }
  function _i(e) {
    for (; e === Jr;) ((Jr = kn[--Sn]), (kn[Sn] = null), (qr = kn[--Sn]), (kn[Sn] = null));
    for (; e === Jt;)
      ((Jt = be[--et]),
        (be[et] = null),
        (Et = be[--et]),
        (be[et] = null),
        (St = be[--et]),
        (be[et] = null));
  }
  var Ge = null,
    Ze = null,
    ie = !1,
    st = null;
  function es(e, t) {
    var n = lt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ge = e), (Ze = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ge = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: Et } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = lt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ge = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Pi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zi(e) {
    if (ie) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Pi(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = Ge;
          t && ts(e, t) ? es(r, n) : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e));
        }
      } else {
        if (Pi(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e));
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ge = e;
  }
  function br(e) {
    if (e !== Ge) return !1;
    if (!ie) return (ns(e), (ie = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if (Pi(e)) throw (rs(), Error(m(418)));
      for (; t;) (es(e, t), (t = Ot(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Ge ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = Ze; e;) e = Ot(e.nextSibling);
  }
  function En() {
    ((Ze = Ge = null), (ie = !1));
  }
  function Li(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var of = me.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
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
      return ((f = Qt(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function i(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function u(f, a, d, x) {
      return a === null || a.tag !== 6
        ? ((a = ko(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, x) {
      var L = d.type;
      return L === Se
        ? g(f, a, d.props.children, x, d.key)
        : a !== null &&
            (a.elementType === L ||
              (typeof L == "object" && L !== null && L.$$typeof === De && ls(L) === a.type))
          ? ((x = l(a, d.props)), (x.ref = ur(f, a, d)), (x.return = f), x)
          : ((x = Cl(d.type, d.key, d.props, null, f.mode, x)),
            (x.ref = ur(f, a, d)),
            (x.return = f),
            x);
    }
    function p(f, a, d, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = So(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, x, L) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, x, L)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ko("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ie:
            return (
              (d = Cl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case ge:
            return ((a = So(a, f.mode, d)), (a.return = f), a);
          case De:
            var x = a._init;
            return w(f, x(a._payload), d);
        }
        if (In(a) || R(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        el(f, a);
      }
      return null;
    }
    function h(f, a, d, x) {
      var L = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return L !== null ? null : u(f, a, "" + d, x);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ie:
            return d.key === L ? s(f, a, d, x) : null;
          case ge:
            return d.key === L ? p(f, a, d, x) : null;
          case De:
            return ((L = d._init), h(f, a, L(d._payload), x));
        }
        if (In(d) || R(d)) return L !== null ? null : g(f, a, d, x, null);
        el(f, d);
      }
      return null;
    }
    function E(f, a, d, x, L) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return ((f = f.get(d) || null), u(a, f, "" + x, L));
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Ie:
            return ((f = f.get(x.key === null ? d : x.key) || null), s(a, f, x, L));
          case ge:
            return ((f = f.get(x.key === null ? d : x.key) || null), p(a, f, x, L));
          case De:
            var j = x._init;
            return E(f, a, d, j(x._payload), L);
        }
        if (In(x) || R(x)) return ((f = f.get(d) || null), g(a, f, x, L, null));
        el(a, x);
      }
      return null;
    }
    function P(f, a, d, x) {
      for (var L = null, j = null, T = a, O = (a = 0), ke = null; T !== null && O < d.length; O++) {
        T.index > O ? ((ke = T), (T = null)) : (ke = T.sibling);
        var Y = h(f, T, d[O], x);
        if (Y === null) {
          T === null && (T = ke);
          break;
        }
        (e && T && Y.alternate === null && t(f, T),
          (a = i(Y, a, O)),
          j === null ? (L = Y) : (j.sibling = Y),
          (j = Y),
          (T = ke));
      }
      if (O === d.length) return (n(f, T), ie && qt(f, O), L);
      if (T === null) {
        for (; O < d.length; O++)
          ((T = w(f, d[O], x)),
            T !== null && ((a = i(T, a, O)), j === null ? (L = T) : (j.sibling = T), (j = T)));
        return (ie && qt(f, O), L);
      }
      for (T = r(f, T); O < d.length; O++)
        ((ke = E(T, f, O, d[O], x)),
          ke !== null &&
            (e && ke.alternate !== null && T.delete(ke.key === null ? O : ke.key),
            (a = i(ke, a, O)),
            j === null ? (L = ke) : (j.sibling = ke),
            (j = ke)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ie && qt(f, O),
        L
      );
    }
    function z(f, a, d, x) {
      var L = R(d);
      if (typeof L != "function") throw Error(m(150));
      if (((d = L.call(d)), d == null)) throw Error(m(151));
      for (
        var j = (L = null), T = a, O = (a = 0), ke = null, Y = d.next();
        T !== null && !Y.done;
        O++, Y = d.next()
      ) {
        T.index > O ? ((ke = T), (T = null)) : (ke = T.sibling);
        var Kt = h(f, T, Y.value, x);
        if (Kt === null) {
          T === null && (T = ke);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = i(Kt, a, O)),
          j === null ? (L = Kt) : (j.sibling = Kt),
          (j = Kt),
          (T = ke));
      }
      if (Y.done) return (n(f, T), ie && qt(f, O), L);
      if (T === null) {
        for (; !Y.done; O++, Y = d.next())
          ((Y = w(f, Y.value, x)),
            Y !== null && ((a = i(Y, a, O)), j === null ? (L = Y) : (j.sibling = Y), (j = Y)));
        return (ie && qt(f, O), L);
      }
      for (T = r(f, T); !Y.done; O++, Y = d.next())
        ((Y = E(T, f, O, Y.value, x)),
          Y !== null &&
            (e && Y.alternate !== null && T.delete(Y.key === null ? O : Y.key),
            (a = i(Y, a, O)),
            j === null ? (L = Y) : (j.sibling = Y),
            (j = Y)));
      return (
        e &&
          T.forEach(function (Af) {
            return t(f, Af);
          }),
        ie && qt(f, O),
        L
      );
    }
    function de(f, a, d, x) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Se &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case Ie:
            e: {
              for (var L = d.key, j = a; j !== null;) {
                if (j.key === L) {
                  if (((L = d.type), L === Se)) {
                    if (j.tag === 7) {
                      (n(f, j.sibling), (a = l(j, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    j.elementType === L ||
                    (typeof L == "object" && L !== null && L.$$typeof === De && ls(L) === j.type)
                  ) {
                    (n(f, j.sibling),
                      (a = l(j, d.props)),
                      (a.ref = ur(f, j, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, j);
                  break;
                } else t(f, j);
                j = j.sibling;
              }
              d.type === Se
                ? ((a = un(d.props.children, f.mode, x, d.key)), (a.return = f), (f = a))
                : ((x = Cl(d.type, d.key, d.props, null, f.mode, x)),
                  (x.ref = ur(f, a, d)),
                  (x.return = f),
                  (f = x));
            }
            return o(f);
          case ge:
            e: {
              for (j = d.key; a !== null;) {
                if (a.key === j)
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
              ((a = So(d, f.mode, x)), (a.return = f), (f = a));
            }
            return o(f);
          case De:
            return ((j = d._init), de(f, a, j(d._payload), x));
        }
        if (In(d)) return P(f, a, d, x);
        if (R(d)) return z(f, a, d, x);
        el(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ko(d, f.mode, x)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return de;
  }
  var Cn = is(!0),
    os = is(!1),
    tl = Ft(null),
    nl = null,
    Nn = null,
    ji = null;
  function Ti() {
    ji = Nn = nl = null;
  }
  function Ri(e) {
    var t = tl.current;
    (ne(tl), (e._currentValue = t));
  }
  function Mi(e, t, n) {
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
    ((nl = e),
      (ji = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ve = !0), (e.firstContext = null)));
  }
  function tt(e) {
    var t = e._currentValue;
    if (ji !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (nl === null) throw Error(m(308));
        ((Nn = e), (nl.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
    return t;
  }
  var bt = null;
  function Oi(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ct(e, r)
    );
  }
  function Ct(e, t) {
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
  var Ut = !1;
  function Fi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ss(e, t) {
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
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (H & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ct(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    );
  }
  function rl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
    }
  }
  function as(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
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
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      ((s.next = null), o === null ? (i = p) : (o.next = p), (o = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (u = g.lastBaseUpdate),
        u !== o && (u === null ? (g.firstBaseUpdate = p) : (u.next = p), (g.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var w = l.baseState;
      ((o = 0), (g = p = s = null), (u = i));
      do {
        var h = u.lane,
          E = u.eventTime;
        if ((r & h) === h) {
          g !== null &&
            (g = g.next =
              {
                eventTime: E,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var P = e,
              z = u;
            switch (((h = t), (E = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == "function")) {
                  w = P.call(E, w, h);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = z.payload), (h = typeof P == "function" ? P.call(E, w, h) : P), h == null)
                )
                  break e;
                w = _({}, w, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [u]) : h.push(u));
        } else
          ((E = {
            eventTime: E,
            lane: h,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            g === null ? ((p = g = E), (s = w)) : (g = g.next = E),
            (o |= h));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((h = u),
            (u = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((nn |= o), (e.lanes = o), (e.memoizedState = w));
    }
  }
  function cs(e, t, n) {
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
  var sr = {},
    yt = Ft(sr),
    ar = Ft(sr),
    cr = Ft(sr);
  function en(e) {
    if (e === sr) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch ((ee(cr, t), ee(ar, e), ee(yt, sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Dl(t, e)));
    }
    (ne(yt), ee(yt, t));
  }
  function Pn() {
    (ne(yt), ne(ar), ne(cr));
  }
  function fs(e) {
    en(cr.current);
    var t = en(yt.current),
      n = Dl(t, e.type);
    t !== n && (ee(ar, e), ee(yt, n));
  }
  function Di(e) {
    ar.current === e && (ne(yt), ne(ar));
  }
  var ue = Ft(0);
  function il(e) {
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
  var Ui = [];
  function Ai() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var ol = me.ReactCurrentDispatcher,
    Vi = me.ReactCurrentBatchConfig,
    tn = 0,
    se = null,
    ve = null,
    we = null,
    ul = !1,
    fr = !1,
    dr = 0,
    uf = 0;
  function Pe() {
    throw Error(m(321));
  }
  function $i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? ff : df),
      (e = n(r, l)),
      fr)
    ) {
      i = 0;
      do {
        if (((fr = !1), (dr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (we = ve = null), (t.updateQueue = null), (ol.current = pf), (e = n(r, l)));
      } while (fr);
    }
    if (
      ((ol.current = cl),
      (t = ve !== null && ve.next !== null),
      (tn = 0),
      (we = ve = se = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Hi() {
    var e = dr !== 0;
    return ((dr = 0), e);
  }
  function gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (we === null ? (se.memoizedState = we = e) : (we = we.next = e), we);
  }
  function nt() {
    if (ve === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = we === null ? se.memoizedState : we.next;
    if (t !== null) ((we = t), (ve = e));
    else {
      if (e === null) throw Error(m(310));
      ((ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        we === null ? (se.memoizedState = we = e) : (we = we.next = e));
    }
    return we;
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = nt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ve,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var u = (o = null),
        s = null,
        p = i;
      do {
        var g = p.lane;
        if ((tn & g) === g)
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
          var w = {
            lane: g,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((u = s = w), (o = r)) : (s = s.next = w), (se.lanes |= g), (nn |= g));
        }
        p = p.next;
      } while (p !== null && p !== i);
      (s === null ? (o = r) : (s.next = u),
        ut(r, t.memoizedState) || (Ve = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (se.lanes |= i), (nn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = nt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (ut(i, t.memoizedState) || (Ve = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ds() {}
  function ps(e, t) {
    var n = se,
      r = nt(),
      l = t(),
      i = !ut(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ve = !0)),
      (r = r.queue),
      Ki(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), mr(9, hs.bind(null, n, r, l, t), void 0, null), xe === null))
        throw Error(m(349));
      (tn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function hs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ys(t) && gs(e));
  }
  function vs(e, t, n) {
    return n(function () {
      ys(t) && gs(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ut(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = Ct(e, 1);
    t !== null && dt(t, e, 1, -1);
  }
  function ws(e) {
    var t = gt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cf.bind(null, se, e)),
      [t.memoizedState, e]
    );
  }
  function mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function xs() {
    return nt().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = gt();
    ((se.flags |= e), (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function al(e, t, n, r) {
    var l = nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
      var o = ve.memoizedState;
      if (((i = o.destroy), r !== null && $i(r, o.deps))) {
        l.memoizedState = mr(t, n, i, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = mr(1 | t, n, i, r)));
  }
  function ks(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return al(2048, 8, e, t);
  }
  function Ss(e, t) {
    return al(4, 2, e, t);
  }
  function Es(e, t) {
    return al(4, 4, e, t);
  }
  function Cs(e, t) {
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
  function Ns(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), al(4, 4, Cs.bind(null, t, e), n));
  }
  function Xi() {}
  function _s(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ps(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function zs(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n))
      : (ut(n, t) || ((n = lu()), (se.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function sf(e, t) {
    var n = q;
    ((q = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vi.transition;
    Vi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((q = n), (Vi.transition = r));
    }
  }
  function Ls() {
    return nt().memoizedState;
  }
  function af(e, t, n) {
    var r = Ht(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), js(e)))
      Ts(t, n);
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = Fe();
      (dt(n, e, r, l), Rs(n, t, r));
    }
  }
  function cf(e, t, n) {
    var r = Ht(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Ts(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), ut(u, o))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Oi(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = us(e, t, l, r)), n !== null && ((l = Fe()), dt(n, e, r, l), Rs(n, t, r)));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function Ts(e, t) {
    fr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
    }
  }
  var cl = {
      readContext: tt,
      useCallback: Pe,
      useContext: Pe,
      useEffect: Pe,
      useImperativeHandle: Pe,
      useInsertionEffect: Pe,
      useLayoutEffect: Pe,
      useMemo: Pe,
      useReducer: Pe,
      useRef: Pe,
      useState: Pe,
      useDebugValue: Pe,
      useDeferredValue: Pe,
      useTransition: Pe,
      useMutableSource: Pe,
      useSyncExternalStore: Pe,
      useId: Pe,
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: tt,
      useCallback: function (e, t) {
        return ((gt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: tt,
      useEffect: ks,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), sl(4194308, 4, Cs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = gt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = gt();
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
          (e = e.dispatch = af.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = gt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ws,
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        return (gt().memoizedState = e);
      },
      useTransition: function () {
        var e = ws(!1),
          t = e[0];
        return ((e = sf.bind(null, e[1])), (gt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = se,
          l = gt();
        if (ie) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), xe === null)) throw Error(m(349));
          (tn & 30) !== 0 || ms(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          ks(vs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          mr(9, hs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = gt(),
          t = xe.identifierPrefix;
        if (ie) {
          var n = Et,
            r = St;
          ((n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = dr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = uf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: tt,
      useCallback: _s,
      useContext: tt,
      useEffect: Ki,
      useImperativeHandle: Ns,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: Wi,
      useRef: xs,
      useState: function () {
        return Wi(pr);
      },
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        var t = nt();
        return zs(t, ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(pr)[0],
          t = nt().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    },
    pf = {
      readContext: tt,
      useCallback: _s,
      useContext: tt,
      useEffect: Ki,
      useImperativeHandle: Ns,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: Qi,
      useRef: xs,
      useState: function () {
        return Qi(pr);
      },
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        var t = nt();
        return ve === null ? (t.memoizedState = e) : zs(t, ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(pr)[0],
          t = nt().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    };
  function at(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        l = Ht(e),
        i = Nt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (dt(t, e, l, r), rl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        l = Ht(e),
        i = Nt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = At(e, i, l)),
        t !== null && (dt(t, e, l, r), rl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Fe(),
        r = Ht(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (dt(t, e, r, n), rl(t, e, r)));
    },
  };
  function Ms(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !er(n, r) || !er(l, i)
          : !0
    );
  }
  function Os(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = tt(i))
        : ((l = Ae(t) ? Zt : _e.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? xn(e, l) : It)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Fs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null));
  }
  function Gi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = tt(i))
      : ((i = Ae(t) ? Zt : _e.current), (l.context = xn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Yi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += K(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (gl || ((gl = !0), (po = r)), Ji(e, t));
      }),
      n
    );
  }
  function Ds(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ji(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ji(e, t),
            typeof r != "function" && ($t === null ? ($t = new Set([this])) : $t.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = zf.bind(null, e, t, n)), t.then(e, e));
  }
  function As(e) {
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
  function Vs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var hf = me.ReactCurrentOwner,
    Ve = !1;
  function Oe(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      _n(t, l),
      (r = Bi(e, t, n, r, i, l)),
      (n = Hi()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ie && n && Ni(t), (t.flags |= 1), Oe(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !xo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Hs(e, t, i, r, l))
        : ((e = Cl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (er(i, r) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ee(jn, Je),
          (Je |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ee(jn, Je),
            (Je |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          ee(jn, Je),
          (Je |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ee(jn, Je),
        (Je |= r));
    return (Oe(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = Ae(n) ? Zt : _e.current;
    return (
      (i = xn(t, i)),
      _n(t, l),
      (n = Bi(e, t, n, r, i, l)),
      (r = Hi()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (ie && r && Ni(t), (t.flags |= 1), Oe(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Ae(n)) {
      var i = !0;
      Gr(t);
    } else i = !1;
    if ((_n(t, l), t.stateNode === null)) (pl(e, t), Os(t, n, r), Gi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = tt(p))
        : ((p = Ae(n) ? Zt : _e.current), (p = xn(t, p)));
      var g = n.getDerivedStateFromProps,
        w = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && Fs(t, o, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((o.state = h),
        ll(t, r, o, l),
        (s = t.memoizedState),
        u !== r || h !== s || Ue.current || Ut
          ? (typeof g == "function" && (Yi(t, n, g, r), (s = t.memoizedState)),
            (u = Ut || Ms(t, n, u, r, h, s, p))
              ? (w ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((o = t.stateNode),
        ss(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : at(t.type, u)),
        (o.props = p),
        (w = t.pendingProps),
        (h = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = tt(s))
          : ((s = Ae(n) ? Zt : _e.current), (s = xn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((g = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== w || h !== s) && Fs(t, o, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (o.state = h),
        ll(t, r, o, l));
      var P = t.memoizedState;
      u !== w || h !== P || Ue.current || Ut
        ? (typeof E == "function" && (Yi(t, n, E, r), (P = t.memoizedState)),
          (p = Ut || Ms(t, n, p, r, h, P, s) || !1)
            ? (g ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, P, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Qs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Ju(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (hf.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
        : Oe(e, t, u, i),
      (t.memoizedState = r.state),
      l && Ju(t, n, !0),
      t.child
    );
  }
  function Xs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gu(e, t.context, !1),
      Ii(e, t.containerInfo));
  }
  function Ys(e, t, n, r, l) {
    return (En(), Li(l), (t.flags |= 256), Oe(e, t, n, r), t.child);
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = ue.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ee(ue, l & 1),
      e === null)
    )
      return (
        zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Nl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = to(n)),
                (t.memoizedState = eo),
                e)
              : no(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return vf(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Qt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? to(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = eo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Qt(i, { mode: "visible", children: r.children })),
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
  function no(e, t) {
    return (
      (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && Li(r),
      Cn(t, e.child, null, n),
      (e = no(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), dl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, o),
            (t.child.memoizedState = to(o)),
            (t.memoizedState = eo),
            i);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(m(419))), (r = Zi(i, r, void 0)), dl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Ve || u)) {
      if (((r = xe), r !== null)) {
        switch (o & -o) {
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
        ((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ct(e, l), dt(r, e, l, -1)));
      }
      return (wo(), (r = Zi(Error(m(421)))), dl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Lf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (Ze = Ot(l.nextSibling)),
        (Ge = t),
        (ie = !0),
        (st = null),
        e !== null &&
          ((be[et++] = St),
          (be[et++] = Et),
          (be[et++] = Jt),
          (St = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = no(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Mi(e.return, t, n));
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Oe(e, t, r.children, n), (r = ue.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
          else if (e.tag === 19) Zs(e, n, t);
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
    if ((ee(ue, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && il(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ro(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ro(t, !0, n, null, i);
          break;
        case "together":
          ro(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (nn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Xs(t), En());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Ae(t.type) && Gr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ee(tl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ee(ue, ue.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Gs(e, t, n)
              : (ee(ue, ue.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        ee(ue, ue.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ee(ue, ue.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ws(e, t, n));
    }
    return _t(e, t, n);
  }
  var qs, lo, bs, ea;
  ((qs = function (e, t) {
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
    (lo = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(yt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Ml(e, l)), (r = Ml(e, r)), (i = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
        }
        Ul(n, r);
        var o;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var u = l[p];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (M.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((u = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== u && (s != null || u != null))
          )
            if (p === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
              } else (n || (i || (i = []), i.push(p, n)), (n = s));
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (M.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && te("scroll", e), i || u === s || (i = []))
                      : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function hr(e, t) {
    if (!ie)
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
  function ze(e) {
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
  function gf(e, t, n) {
    var r = t.pendingProps;
    switch ((_i(t), t.tag)) {
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
        return (ze(t), null);
      case 1:
        return (Ae(t.type) && Yr(), ze(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          ne(Ue),
          ne(_e),
          Ai(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), st !== null && (vo(st), (st = null)))),
          lo(e, t),
          ze(t),
          null
        );
      case 5:
        Di(t);
        var l = en(cr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (ze(t), null);
          }
          if (((e = en(yt.current)), br(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[vt] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (te("cancel", r), te("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) te(nr[l], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (te("error", r), te("load", r));
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                (Oo(r, i), te("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), te("invalid", r));
                break;
              case "textarea":
                (Do(r, i), te("invalid", r));
            }
            (Ul(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : M.hasOwnProperty(o) && u != null && o === "onScroll" && te("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Io(r, i, !0));
                break;
              case "textarea":
                (Sr(r), Ao(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Kr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Vo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[vt] = t),
              (e[ir] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Al(n, r)), n)) {
                case "dialog":
                  (te("cancel", e), te("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (te("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) te(nr[l], e);
                  l = r;
                  break;
                case "source":
                  (te("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (te("error", e), te("load", e), (l = r));
                  break;
                case "details":
                  (te("toggle", e), (l = r));
                  break;
                case "input":
                  (Oo(e, r), (l = Ml(e, r)), te("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    te("invalid", e));
                  break;
                case "textarea":
                  (Do(e, r), (l = Il(e, r)), te("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Ho(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && $o(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (M.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && te("scroll", e)
                            : s != null && Re(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Io(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), Ao(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + J(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? sn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Kr);
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
        return (ze(t), null);
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(cr.current)), en(yt.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[vt] = t),
              (i = r.nodeValue !== n) && ((e = Ge), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[vt] = t),
              (t.stateNode = r));
        }
        return (ze(t), null);
      case 13:
        if (
          (ne(ue),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), En(), (t.flags |= 98560), (i = !1));
          else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[vt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (ze(t), (i = !1));
          } else (st !== null && (vo(st), (st = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ue.current & 1) !== 0 ? ye === 0 && (ye = 3) : wo())),
            t.updateQueue !== null && (t.flags |= 4),
            ze(t),
            null);
      case 4:
        return (Pn(), lo(e, t), e === null && rr(t.stateNode.containerInfo), ze(t), null);
      case 10:
        return (Ri(t.type._context), ze(t), null);
      case 17:
        return (Ae(t.type) && Yr(), ze(t), null);
      case 19:
        if ((ne(ue), (i = t.memoizedState), i === null)) return (ze(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) hr(i, !1);
          else {
            if (ye !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      hr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (ee(ue, (ue.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              fe() > Tn &&
              ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                hr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !ie)
              )
                return (ze(t), null);
            } else
              2 * fe() - i.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = fe()),
            (t.sibling = null),
            (n = ue.current),
            ee(ue, r ? (n & 1) | 2 : n & 1),
            t)
          : (ze(t), null);
      case 22:
      case 23:
        return (
          go(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Je & 1073741824) !== 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function wf(e, t) {
    switch ((_i(t), t.tag)) {
      case 1:
        return (
          Ae(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          ne(Ue),
          ne(_e),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Di(t), null);
      case 13:
        if ((ne(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ne(ue), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Ri(t.type._context), null);
      case 22:
      case 23:
        return (go(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    Le = !1,
    xf = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ce(e, t, r);
        }
      else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var ta = !1;
  function kf(e, t) {
    if (((yi = Or), (e = Mu()), ai(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              p = 0,
              g = 0,
              w = e,
              h = null;
            t: for (;;) {
              for (
                var E;
                w !== n || (l !== 0 && w.nodeType !== 3) || (u = o + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (s = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (E = w.firstChild) !== null;
              )
                ((h = w), (w = E));
              for (;;) {
                if (w === e) break t;
                if (
                  (h === n && ++p === l && (u = o),
                  h === i && ++g === r && (s = o),
                  (E = w.nextSibling) !== null)
                )
                  break;
                ((w = h), (h = w.parentNode));
              }
              w = E;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gi = { focusedElem: e, selectionRange: n }, Or = !1, N = t; N !== null;)
      if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (N = e));
      else
        for (; N !== null;) {
          t = N;
          try {
            var P = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (P !== null) {
                    var z = P.memoizedProps,
                      de = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : at(t.type, z),
                        de,
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
          } catch (x) {
            ce(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (N = e));
            break;
          }
          N = t.return;
        }
    return ((P = ta), (ta = !1), P);
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && io(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
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
  function oo(e) {
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
  function na(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), na(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[vt], delete t[ir], delete t[Si], delete t[nf], delete t[rf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ra(e.return)) return null;
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
  function uo(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Kr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uo(e, t, n), e = e.sibling; e !== null;) (uo(e, t, n), (e = e.sibling));
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null;) (so(e, t, n), (e = e.sibling));
  }
  var Ee = null,
    ct = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (ia(e, t, n), (n = n.sibling));
  }
  function ia(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Le || Ln(n, t);
      case 6:
        var r = Ee,
          l = ct;
        ((Ee = null),
          Vt(e, t, n),
          (Ee = r),
          (ct = l),
          Ee !== null &&
            (ct
              ? ((e = Ee),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ee.removeChild(n.stateNode)));
        break;
      case 18:
        Ee !== null &&
          (ct
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n),
              Yn(e))
            : ki(Ee, n.stateNode));
        break;
      case 4:
        ((r = Ee),
          (l = ct),
          (Ee = n.stateNode.containerInfo),
          (ct = !0),
          Vt(e, t, n),
          (Ee = r),
          (ct = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Le && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Le && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            ce(n, t, u);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Le = (r = Le) || n.memoizedState !== null), Vt(e, t, n), (Le = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new xf()),
        t.forEach(function (r) {
          var l = jf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null;) {
            switch (u.tag) {
              case 5:
                ((Ee = u.stateNode), (ct = !1));
                break e;
              case 3:
                ((Ee = u.stateNode.containerInfo), (ct = !0));
                break e;
              case 4:
                ((Ee = u.stateNode.containerInfo), (ct = !0));
                break e;
            }
            u = u.return;
          }
          if (Ee === null) throw Error(m(160));
          (ia(i, o, l), (Ee = null), (ct = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ce(l, t, p);
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
        if ((ft(t, e), wt(e), r & 4)) {
          try {
            (vr(3, e, e.return), hl(3, e));
          } catch (z) {
            ce(e, e.return, z);
          }
          try {
            vr(5, e, e.return);
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        break;
      case 1:
        (ft(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((ft(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Fo(l, i), Al(u, o));
              var p = Al(u, i);
              for (o = 0; o < s.length; o += 2) {
                var g = s[o],
                  w = s[o + 1];
                g === "style"
                  ? Ho(l, w)
                  : g === "dangerouslySetInnerHTML"
                    ? $o(l, w)
                    : g === "children"
                      ? Dn(l, w)
                      : Re(l, g, w, p);
              }
              switch (u) {
                case "input":
                  Ol(l, i);
                  break;
                case "textarea":
                  Uo(l, i);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? sn(l, !!i.multiple, E, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? sn(l, !!i.multiple, i.defaultValue, !0)
                        : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[ir] = i;
            } catch (z) {
              ce(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ft(t, e), wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (z) {
            ce(e, e.return, z);
          }
        }
        break;
      case 3:
        if ((ft(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Yn(t.containerInfo);
          } catch (z) {
            ce(e, e.return, z);
          }
        break;
      case 4:
        (ft(t, e), wt(e));
        break;
      case 13:
        (ft(t, e),
          wt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (fo = fe())),
          r & 4 && oa(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Le = (p = Le) || g), ft(t, e), (Le = p)) : ft(t, e),
          wt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !g && (e.mode & 1) !== 0)
          )
            for (N = e, g = e.child; g !== null;) {
              for (w = N = g; N !== null;) {
                switch (((h = N), (E = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, h, h.return);
                    break;
                  case 1:
                    Ln(h, h.return);
                    var P = h.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (z) {
                        ce(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Ln(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ca(w);
                      continue;
                    }
                }
                E !== null ? ((E.return = h), (N = E)) : ca(w);
              }
              g = g.sibling;
            }
          e: for (g = null, w = e; ;) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  ((l = w.stateNode),
                    p
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = w.stateNode),
                        (s = w.memoizedProps.style),
                        (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (u.style.display = Bo("display", o))));
                } catch (z) {
                  ce(e, e.return, z);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = p ? "" : w.memoizedProps;
                } catch (z) {
                  ce(e, e.return, z);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) || w.memoizedState === null || w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null;) {
              if (w.return === null || w.return === e) break e;
              (g === w && (g = null), (w = w.return));
            }
            (g === w && (g = null), (w.sibling.return = w.return), (w = w.sibling));
          }
        }
        break;
      case 19:
        (ft(t, e), wt(e), r & 4 && oa(e));
        break;
      case 21:
        break;
      default:
        (ft(t, e), wt(e));
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ra(n)) {
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
            r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
            var i = la(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = la(e);
            uo(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ce(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sf(e, t, n) {
    ((N = e), sa(e));
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
      var l = N,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Le;
          u = ml;
          var p = Le;
          if (((ml = o), (Le = s) && !p))
            for (N = l; N !== null;)
              ((o = N),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = o), (N = s))
                    : fa(l));
          for (; i !== null;) ((N = i), sa(i), (i = i.sibling));
          ((N = l), (ml = u), (Le = p));
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (N = i)) : aa(e);
    }
  }
  function aa(e) {
    for (; N !== null;) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Le || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Le)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && cs(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cs(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
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
                      var w = g.dehydrated;
                      w !== null && Yn(w);
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
          Le || (t.flags & 512 && oo(t));
        } catch (h) {
          ce(t, t.return, h);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function ca(e) {
    for (; N !== null;) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function fa(e) {
    for (; N !== null;) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (s) {
              ce(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ce(t, l, s);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (s) {
              ce(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              ce(t, o, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
      }
      if (t === e) {
        N = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (N = u));
        break;
      }
      N = t.return;
    }
  }
  var Ef = Math.ceil,
    vl = me.ReactCurrentDispatcher,
    ao = me.ReactCurrentOwner,
    rt = me.ReactCurrentBatchConfig,
    H = 0,
    xe = null,
    he = null,
    Ce = 0,
    Je = 0,
    jn = Ft(0),
    ye = 0,
    yr = null,
    nn = 0,
    yl = 0,
    co = 0,
    gr = null,
    $e = null,
    fo = 0,
    Tn = 1 / 0,
    Pt = null,
    gl = !1,
    po = null,
    $t = null,
    wl = !1,
    Bt = null,
    xl = 0,
    wr = 0,
    mo = null,
    kl = -1,
    Sl = 0;
  function Fe() {
    return (H & 6) !== 0 ? fe() : kl !== -1 ? kl : (kl = fe());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && Ce !== 0
        ? Ce & -Ce
        : of.transition !== null
          ? (Sl === 0 && (Sl = lu()), Sl)
          : ((e = q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pu(e.type))), e);
  }
  function dt(e, t, n, r) {
    if (50 < wr) throw ((wr = 0), (mo = null), Error(m(185)));
    (Hn(e, n, r),
      ((H & 2) === 0 || e !== xe) &&
        (e === xe && ((H & 2) === 0 && (yl |= n), ye === 4 && Wt(e, Ce)),
        Be(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Tn = fe() + 500), Zr && Dt())));
  }
  function Be(e, t) {
    var n = e.callbackNode;
    ic(e, t);
    var r = Tr(e, e === xe ? Ce : 0);
    if (r === 0) (n !== null && tu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && tu(n), t === 1))
        (e.tag === 0 ? lf(pa.bind(null, e)) : qu(pa.bind(null, e)),
          ef(function () {
            (H & 6) === 0 && Dt();
          }),
          (n = null));
      else {
        switch (iu(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = nu;
            break;
          case 16:
            n = Pr;
            break;
          case 536870912:
            n = ru;
            break;
          default:
            n = Pr;
        }
        n = ka(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((kl = -1), (Sl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === xe ? Ce : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = ha();
      (xe !== e || Ce !== t) && ((Pt = null), (Tn = fe() + 500), ln(e, t));
      do
        try {
          _f();
          break;
        } catch (u) {
          ma(e, u);
        }
      while (!0);
      (Ti(), (vl.current = i), (H = l), he !== null ? (t = 0) : ((xe = null), (Ce = 0), (t = ye)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = ho(e, l)))), t === 1))
        throw ((n = yr), ln(e, 0), Wt(e, r), Be(e, fe()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Cf(l) &&
            ((t = El(e, r)),
            t === 2 && ((i = Xl(e)), i !== 0 && ((r = i), (t = ho(e, i)))),
            t === 1))
        )
          throw ((n = yr), ln(e, 0), Wt(e, r), Be(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, $e, Pt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = fo + 500 - fe()), 10 < t))) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Fe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xi(on.bind(null, e, $e, Pt), t);
              break;
            }
            on(e, $e, Pt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - ot(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = fe() - r),
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
                            : 1960 * Ef(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xi(on.bind(null, e, $e, Pt), r);
              break;
            }
            on(e, $e, Pt);
            break;
          case 5:
            on(e, $e, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Be(e, fe()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function ho(e, t) {
    var n = gr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = El(e, t)),
      e !== 2 && ((t = $e), ($e = n), t !== null && vo(t)),
      e
    );
  }
  function vo(e) {
    $e === null ? ($e = e) : $e.push.apply($e, e);
  }
  function Cf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!ut(i(), l)) return !1;
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
      t &= ~co, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - ot(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Be(e, fe()), null);
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = ho(e, r)));
    }
    if (n === 1) throw ((n = yr), ln(e, 0), Wt(e, t), Be(e, fe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, $e, Pt),
      Be(e, fe()),
      null
    );
  }
  function yo(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Tn = fe() + 500), Zr && Dt()));
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (H & 6) === 0 && Rn();
    var t = H;
    H |= 1;
    var n = rt.transition,
      r = q;
    try {
      if (((rt.transition = null), (q = 1), e)) return e();
    } finally {
      ((q = r), (rt.transition = n), (H = t), (H & 6) === 0 && Dt());
    }
  }
  function go() {
    ((Je = jn.current), ne(jn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), bc(n)), he !== null))
      for (n = he.return; n !== null;) {
        var r = n;
        switch ((_i(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Yr());
            break;
          case 3:
            (Pn(), ne(Ue), ne(_e), Ai());
            break;
          case 5:
            Di(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            ne(ue);
            break;
          case 19:
            ne(ue);
            break;
          case 10:
            Ri(r.type._context);
            break;
          case 22:
          case 23:
            go();
        }
        n = n.return;
      }
    if (
      ((xe = e),
      (he = e = Qt(e.current, null)),
      (Ce = Je = t),
      (ye = 0),
      (yr = null),
      (co = yl = nn = 0),
      ($e = gr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = he;
      try {
        if ((Ti(), (ol.current = cl), ul)) {
          for (var r = se.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (we = ve = se = null),
          (fr = !1),
          (dr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ((ye = 1), (yr = t), (he = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = Ce),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              g = u,
              w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var h = g.alternate;
              h
                ? ((g.updateQueue = h.updateQueue),
                  (g.memoizedState = h.memoizedState),
                  (g.lanes = h.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var E = As(o);
            if (E !== null) {
              ((E.flags &= -257), Vs(E, o, u, i, t), E.mode & 1 && Us(i, p, t), (t = E), (s = p));
              var P = t.updateQueue;
              if (P === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Us(i, p, t), wo());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ie && u.mode & 1) {
            var de = As(o);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256), Vs(de, o, u, i, t), Li(zn(s, u)));
              break e;
            }
          }
          ((i = s = zn(s, u)),
            ye !== 4 && (ye = 2),
            gr === null ? (gr = [i]) : gr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Is(i, s, t);
                as(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      ($t === null || !$t.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var x = Ds(i, u, t);
                  as(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ya(n);
      } catch (L) {
        ((t = L), he === n && n !== null && (he = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = vl.current;
    return ((vl.current = cl), e === null ? cl : e);
  }
  function wo() {
    ((ye === 0 || ye === 3 || ye === 2) && (ye = 4),
      xe === null || ((nn & 268435455) === 0 && (yl & 268435455) === 0) || Wt(xe, Ce));
  }
  function El(e, t) {
    var n = H;
    H |= 2;
    var r = ha();
    (xe !== e || Ce !== t) && ((Pt = null), ln(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if ((Ti(), (H = n), (vl.current = r), he !== null)) throw Error(m(261));
    return ((xe = null), (Ce = 0), ye);
  }
  function Nf() {
    for (; he !== null;) va(he);
  }
  function _f() {
    for (; he !== null && !Za();) va(he);
  }
  function va(e) {
    var t = xa(e.alternate, e, Je);
    ((e.memoizedProps = e.pendingProps), t === null ? ya(e) : (he = t), (ao.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = gf(n, t, Je)), n !== null)) {
          he = n;
          return;
        }
      } else {
        if (((n = wf(n, t)), n !== null)) {
          ((n.flags &= 32767), (he = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ye = 6), (he = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    ye === 0 && (ye = 5);
  }
  function on(e, t, n) {
    var r = q,
      l = rt.transition;
    try {
      ((rt.transition = null), (q = 1), Pf(e, t, n, r));
    } finally {
      ((rt.transition = l), (q = r));
    }
    return null;
  }
  function Pf(e, t, n, r) {
    do Rn();
    while (Bt !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (oc(e, i),
      e === xe && ((he = xe = null), (Ce = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wl ||
        ((wl = !0),
        ka(Pr, function () {
          return (Rn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = rt.transition), (rt.transition = null));
      var o = q;
      q = 1;
      var u = H;
      ((H |= 4),
        (ao.current = null),
        kf(e, n),
        ua(n, e),
        Kc(gi),
        (Or = !!yi),
        (gi = yi = null),
        (e.current = n),
        Sf(n),
        Ja(),
        (H = u),
        (q = o),
        (rt.transition = i));
    } else e.current = n;
    if (
      (wl && ((wl = !1), (Bt = e), (xl = l)),
      (i = e.pendingLanes),
      i === 0 && ($t = null),
      ec(n.stateNode),
      Be(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (gl) throw ((gl = !1), (e = po), (po = null), e);
    return (
      (xl & 1) !== 0 && e.tag !== 0 && Rn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === mo ? wr++ : ((wr = 0), (mo = e))) : (wr = 0),
      Dt(),
      null
    );
  }
  function Rn() {
    if (Bt !== null) {
      var e = iu(xl),
        t = rt.transition,
        n = q;
      try {
        if (((rt.transition = null), (q = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (xl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, N = e.current; N !== null;) {
            var i = N,
              o = i.child;
            if ((N.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (N = p; N !== null;) {
                    var g = N;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, g, i);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (N = w));
                    else
                      for (; N !== null;) {
                        g = N;
                        var h = g.sibling,
                          E = g.return;
                        if ((na(g), g === p)) {
                          N = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = E), (N = h));
                          break;
                        }
                        N = E;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var z = P.child;
                  if (z !== null) {
                    P.child = null;
                    do {
                      var de = z.sibling;
                      ((z.sibling = null), (z = de));
                    } while (z !== null);
                  }
                }
                N = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (N = o));
            else
              e: for (; N !== null;) {
                if (((i = N), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (N = f));
                  break e;
                }
                N = i.return;
              }
          }
          var a = e.current;
          for (N = a; N !== null;) {
            o = N;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = o), (N = d));
            else
              e: for (o = a; N !== null;) {
                if (((u = N), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, u);
                    }
                  } catch (L) {
                    ce(u, u.return, L);
                  }
                if (u === o) {
                  N = null;
                  break e;
                }
                var x = u.sibling;
                if (x !== null) {
                  ((x.return = u.return), (N = x));
                  break e;
                }
                N = u.return;
              }
          }
          if (((H = l), Dt(), ht && typeof ht.onPostCommitFiberRoot == "function"))
            try {
              ht.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((q = n), (rt.transition = t));
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    ((t = zn(n, t)),
      (t = Is(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Fe()),
      e !== null && (Hn(e, 1, t), Be(e, t)));
  }
  function ce(e, t, n) {
    if (e.tag === 3) ga(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ga(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = Ds(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Fe()),
              t !== null && (Hn(t, 1, e), Be(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Fe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      xe === e &&
        (Ce & n) === n &&
        (ye === 4 || (ye === 3 && (Ce & 130023424) === Ce && 500 > fe() - fo)
          ? ln(e, 0)
          : (co |= n)),
      Be(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = jr), (jr <<= 1), (jr & 130023424) === 0 && (jr = 4194304)));
    var n = Fe();
    ((e = Ct(e, t)), e !== null && (Hn(e, t, n), Be(e, n)));
  }
  function Lf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wa(e, n));
  }
  function jf(e, t) {
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
    (r !== null && r.delete(t), wa(e, n));
  }
  var xa;
  xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current) Ve = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ve = !1), yf(e, t, n));
        Ve = (e.flags & 131072) !== 0;
      }
    else ((Ve = !1), ie && (t.flags & 1048576) !== 0 && bu(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (pl(e, t), (e = t.pendingProps));
        var l = xn(t, _e.current);
        (_n(t, n), (l = Bi(null, t, r, e, l, n)));
        var i = Hi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ae(r) ? ((i = !0), Gr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Fi(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Gi(t, r, e, n),
              (t = bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), ie && i && Ni(t), Oe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rf(r)),
            (e = at(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = $s(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, at(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ss(e, t),
            ll(t, r, null, n));
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = zn(Error(m(423)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else
              for (
                Ze = Ot(t.stateNode.containerInfo.firstChild),
                  Ge = t,
                  ie = !0,
                  st = null,
                  n = os(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Oe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fs(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
          Qs(e, t),
          Oe(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && zi(t), null);
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Oe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          $s(e, t, r, l, n)
        );
      case 7:
        return (Oe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Oe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Oe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            ee(tl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (ut(i.value, o)) {
              if (i.children === l.children && !Ue.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null;) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var s = u.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Nt(-1, n & -n)), (s.tag = 2));
                        var p = i.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var g = p.pending;
                          (g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Mi(i.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(m(341));
                  ((o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Mi(o, n, t),
                    (o = i.sibling));
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null;) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      ((i.return = o.return), (o = i));
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          (Oe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (l = tt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Oe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = at(r, t.pendingProps)), (l = at(r.type, l)), Bs(e, t, r, l, n));
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          pl(e, t),
          (t.tag = 1),
          Ae(r) ? ((e = !0), Gr(t)) : (e = !1),
          _n(t, n),
          Os(t, r, l),
          Gi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        );
      case 19:
        return Js(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function ka(e, t) {
    return eu(e, t);
  }
  function Tf(e, t, n, r) {
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
  function lt(e, t, n, r) {
    return new Tf(e, t, n, r);
  }
  function xo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Rf(e) {
    if (typeof e == "function") return xo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pt)) return 11;
      if (e === mt) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = lt(e.tag, t, e.key, e.mode)),
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
  function Cl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) xo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Se:
          return un(n.children, l, i, t);
        case Me:
          ((o = 8), (l |= 8));
          break;
        case Qe:
          return ((e = lt(12, n, t, l | 2)), (e.elementType = Qe), (e.lanes = i), e);
        case Ke:
          return ((e = lt(13, n, t, l)), (e.elementType = Ke), (e.lanes = i), e);
        case it:
          return ((e = lt(19, n, t, l)), (e.elementType = it), (e.lanes = i), e);
        case ae:
          return Nl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case qe:
                o = 10;
                break e;
              case Xt:
                o = 9;
                break e;
              case pt:
                o = 11;
                break e;
              case mt:
                o = 14;
                break e;
              case De:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = lt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function un(e, t, n, r) {
    return ((e = lt(7, e, r, t)), (e.lanes = n), e);
  }
  function Nl(e, t, n, r) {
    return (
      (e = lt(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ko(e, t, n) {
    return ((e = lt(6, e, null, t)), (e.lanes = n), e);
  }
  function So(e, t, n) {
    return (
      (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Mf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Eo(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Mf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = lt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fi(i),
      e
    );
  }
  function Of(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ge,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Sa(e) {
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
            if (Ae(t.type)) {
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
      if (Ae(n)) return Zu(e, n, t);
    }
    return t;
  }
  function Ea(e, t, n, r, l, i, o, u, s) {
    return (
      (e = Eo(n, r, !0, e, l, i, o, u, s)),
      (e.context = Sa(null)),
      (n = e.current),
      (r = Fe()),
      (l = Ht(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      At(n, i, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      Be(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = Fe(),
      o = Ht(l);
    return (
      (n = Sa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, o)),
      e !== null && (dt(e, l, o, i), rl(e, l, o)),
      o
    );
  }
  function Pl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Co(e, t) {
    (Ca(e, t), (e = e.alternate) && Ca(e, t));
  }
  function Ff() {
    return null;
  }
  var Na =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function No(e) {
    this._internalRoot = e;
  }
  ((zl.prototype.render = No.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (zl.prototype.unmount = No.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            _l(null, e, null, null);
          }),
            (t[xt] = null));
        }
      }));
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = su();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && fu(e));
    }
  };
  function _o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ll(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function _a() {}
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = Pl(o);
          i.call(p);
        };
      }
      var o = Ea(t, r, e, 0, null, !1, !1, "", _a);
      return (
        (e._reactRootContainer = o),
        (e[xt] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = Pl(s);
        u.call(p);
      };
    }
    var s = Eo(e, 0, !1, null, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Pl(o);
          u.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = If(n, t, e, l, r);
    return Pl(o);
  }
  ((ou = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), Be(t, fe()), (H & 6) === 0 && ((Tn = fe() + 500), Dt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Fe();
            dt(r, e, 1, l);
          }
        }),
          Co(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var n = Fe();
          dt(t, e, 134217728, n);
        }
        Co(e, 134217728);
      }
    }),
    (uu = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = Ct(e, t);
        if (n !== null) {
          var r = Fe();
          dt(n, e, t, r);
        }
        Co(e, t);
      }
    }),
    (su = function () {
      return q;
    }),
    (au = function (e, t) {
      var n = q;
      try {
        return ((q = e), t());
      } finally {
        q = n;
      }
    }),
    (Bl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Xr(r);
                if (!l) throw Error(m(90));
                (Mo(r), Ol(r, l));
              }
            }
          }
          break;
        case "textarea":
          Uo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Xo = yo),
    (Yo = rn));
  var Df = { usingClientEntryPoint: !1, Events: [or, gn, Xr, Qo, Ko, yo] },
    xr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Uf = {
      bundleType: xr.bundleType,
      version: xr.version,
      rendererPackageName: xr.rendererPackageName,
      rendererConfig: xr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: me.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = qo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xr.findFiberByHostInstance || Ff,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        ((zr = Tl.inject(Uf)), (ht = Tl));
      } catch {}
  }
  return (
    (He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (He.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_o(t)) throw Error(m(200));
      return Of(e, t, null, n);
    }),
    (He.createRoot = function (e, t) {
      if (!_o(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Na;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Eo(e, 1, !1, null, null, n, !1, r, l)),
        (e[xt] = t.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new No(t)
      );
    }),
    (He.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = qo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (He.flushSync = function (e) {
      return rn(e);
    }),
    (He.hydrate = function (e, t, n) {
      if (!Ll(t)) throw Error(m(200));
      return jl(null, e, t, !0, n);
    }),
    (He.hydrateRoot = function (e, t, n) {
      if (!_o(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Na;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Ea(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[xt] = t.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new zl(t);
    }),
    (He.render = function (e, t, n) {
      if (!Ll(t)) throw Error(m(200));
      return jl(null, e, t, !1, n);
    }),
    (He.unmountComponentAtNode = function (e) {
      if (!Ll(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            jl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[xt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (He.unstable_batchedUpdates = yo),
    (He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ll(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return jl(e, t, n, !1, r);
    }),
    (He.version = "18.3.1-next-f1338f8080-20240426"),
    He
  );
}
var Oa;
function Kf() {
  if (Oa) return Lo.exports;
  Oa = 1;
  function v() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (C) {
        console.error(C);
      }
  }
  return (v(), (Lo.exports = Qf()), Lo.exports);
}
var Fa;
function Xf() {
  if (Fa) return Rl;
  Fa = 1;
  var v = Kf();
  return ((Rl.createRoot = v.createRoot), (Rl.hydrateRoot = v.hydrateRoot), Rl);
}
var Yf = Xf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Aa = (...v) =>
    v
      .filter((C, m, F) => !!C && C.trim() !== "" && F.indexOf(C) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zf = {
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
 */ const Jf = je.forwardRef(
  (
    {
      color: v = "currentColor",
      size: C = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: F,
      className: M = "",
      children: V,
      iconNode: oe,
      ...I
    },
    $,
  ) =>
    je.createElement(
      "svg",
      {
        ref: $,
        ...Zf,
        width: C,
        height: C,
        stroke: v,
        strokeWidth: F ? (Number(m) * 24) / Number(C) : m,
        className: Aa("lucide", M),
        ...I,
      },
      [...oe.map(([Z, re]) => je.createElement(Z, re)), ...(Array.isArray(V) ? V : [V])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fn = (v, C) => {
  const m = je.forwardRef(({ className: F, ...M }, V) =>
    je.createElement(Jf, { ref: V, iconNode: C, className: Aa(`lucide-${Gf(v)}`, F), ...M }),
  );
  return ((m.displayName = `${v}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ia = Fn("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = Fn("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = Fn("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = Fn("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Da = Fn("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = Fn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Va(v) {
  return `#${v}`;
}
function $a(v) {
  const C = v.replace(/^\//, "").replace(/\/$/, "");
  return C ? `#/${C}` : "#/";
}
function nd(v) {
  const C = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return C
    ? C.startsWith("/")
      ? { kind: "route", path: C.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: C }
    : null;
}
function Ba(v, C = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(v);
  return m ? (m.scrollIntoView({ behavior: C, block: "start" }), !0) : !1;
}
function On(v, C = "smooth") {
  if (typeof window > "u") return;
  const m = Va(v);
  if (Ba(v, C)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function rd(v) {
  typeof window > "u" || (window.location.hash = $a(v));
}
function ld(v) {
  return v.kind === "route" ? $a(v.path) : Va(v.id);
}
function id(v, C) {
  if ((v.preventDefault(), C.kind === "route")) {
    rd(C.path);
    return;
  }
  On(C.id);
}
function od() {
  if (typeof window > "u") return;
  const v = nd();
  (v == null ? void 0 : v.kind) === "section" && requestAnimationFrame(() => Ba(v.id, "auto"));
}
function Mn({ target: v, children: C, className: m, onClick: F, ...M }) {
  return k.jsx("a", {
    href: ld(v),
    className: m,
    onClick: (V) => {
      (id(V, v), F == null || F(V));
    },
    ...M,
    children: C,
  });
}
function ud({ src: v, className: C }) {
  const m = je.useRef(null),
    F = je.useRef(null),
    [M, V] = je.useState(!1),
    oe = je.useRef([]);
  return (
    je.useEffect(() => {
      const I = m.current;
      if (!I) return;
      const $ = [];
      let Z = !0,
        re = -1;
      const W = 960,
        G = () => {
          if (!Z || I.readyState < 2 || I.currentTime === re) return;
          re = I.currentTime;
          const me = I.videoWidth,
            Ie = I.videoHeight;
          if (!me || !Ie) return;
          const ge = Math.min(1, W / me),
            Se = Math.round(me * ge),
            Me = Math.round(Ie * ge),
            Qe = document.createElement("canvas");
          ((Qe.width = Se), (Qe.height = Me));
          const qe = Qe.getContext("2d");
          qe && (qe.drawImage(I, 0, 0, Se, Me), $.push(Qe));
        },
        pe = I,
        Ne = typeof pe.requestVideoFrameCallback == "function";
      let Q = 0;
      const B = () => {
          (G(), Z && (Q = requestAnimationFrame(B)));
        },
        Te = () => {
          (G(), Z && pe.requestVideoFrameCallback && pe.requestVideoFrameCallback(Te));
        },
        We = () => {
          ((Z = !1), $.length > 0 && ((oe.current = $), V(!0)));
        },
        Re = () => {
          (I.play().catch(() => {}),
            Ne ? pe.requestVideoFrameCallback(Te) : (Q = requestAnimationFrame(B)));
        };
      return (
        I.addEventListener("loadedmetadata", Re),
        I.addEventListener("ended", We),
        I.readyState >= 1 && Re(),
        () => {
          ((Z = !1),
            cancelAnimationFrame(Q),
            I.removeEventListener("loadedmetadata", Re),
            I.removeEventListener("ended", We));
        }
      );
    }, [v]),
    je.useEffect(() => {
      if (!M) return;
      const I = F.current;
      if (!I) return;
      const $ = I.getContext("2d");
      if (!$) return;
      const Z = oe.current;
      if (Z.length === 0) return;
      const re = Z[0];
      ((I.width = re.width), (I.height = re.height));
      let W = 0,
        G = 1,
        pe = performance.now();
      const Ne = 1e3 / 30;
      let Q = 0;
      const B = (Te) => {
        (Te - pe >= Ne &&
          ((pe = Te),
          $.drawImage(Z[W], 0, 0),
          (W += G),
          W >= Z.length - 1 ? ((W = Z.length - 1), (G = -1)) : W <= 0 && ((W = 0), (G = 1))),
          (Q = requestAnimationFrame(B)));
      };
      return ((Q = requestAnimationFrame(B)), () => cancelAnimationFrame(Q));
    }, [M]),
    k.jsxs("div", {
      className: C ?? "absolute inset-0 w-full h-full",
      children: [
        k.jsx("video", {
          ref: m,
          src: v,
          className: "w-full h-full object-cover",
          style: { display: M ? "none" : "block" },
          muted: !0,
          playsInline: !0,
          preload: "auto",
          crossOrigin: "anonymous",
        }),
        k.jsx("canvas", {
          ref: F,
          className: "w-full h-full object-cover",
          style: { display: M ? "block" : "none" },
        }),
      ],
    })
  );
}
function sd() {
  const v = "border-t border-[#1f2a1d]/10 py-20 md:py-28 px-6 md:px-10 scroll-mt-24 bg-[#f4f7f2]",
    C = "text-3xl md:text-4xl font-normal tracking-tight text-[#336443]",
    m = "text-[#4b5b47] text-base leading-relaxed max-w-2xl mt-4";
  return k.jsxs(k.Fragment, {
    children: [
      k.jsx("section", {
        id: "mission",
        className: v,
        children: k.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            k.jsx("p", {
              className: "text-xs uppercase tracking-[0.2em] text-[#85AB8B]",
              children: "Purpose",
            }),
            k.jsx("h2", { className: `${C} mt-3`, children: "Unite signals into outcomes" }),
            k.jsx("p", {
              className: m,
              children:
                "LinkFlow connects the tools your team already uses so data moves between systems without brittle scripts or manual handoffs.",
            }),
          ],
        }),
      }),
      k.jsx("section", {
        id: "how",
        className: `${v} bg-white`,
        children: k.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            k.jsx("p", {
              className: "text-xs uppercase tracking-[0.2em] text-[#85AB8B]",
              children: "The Process",
            }),
            k.jsx("h2", { className: `${C} mt-3`, children: "How we build workflows" }),
            k.jsx("p", {
              className: m,
              children:
                "Map integrations, define triggers, and let FluxEngine orchestrate AI-assisted paths from raw signals to verified actions.",
            }),
          ],
        }),
      }),
      k.jsx("section", {
        id: "pricing",
        className: v,
        children: k.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            k.jsx("p", {
              className: "text-xs uppercase tracking-[0.2em] text-[#85AB8B]",
              children: "Tariffs",
            }),
            k.jsx("h2", { className: `${C} mt-3`, children: "Plans that scale with you" }),
            k.jsx("p", {
              className: m,
              children:
                "Start free, add connectors as you grow, and upgrade when your automation volume needs dedicated throughput.",
            }),
          ],
        }),
      }),
      k.jsx("section", {
        id: "signup",
        className: `${v} bg-[#1f2a1d] text-white`,
        children: k.jsxs("div", {
          className: "mx-auto max-w-6xl text-center",
          children: [
            k.jsx("h2", {
              className: "text-3xl md:text-4xl font-normal tracking-tight",
              children: "Sign Me Up!",
            }),
            k.jsx("p", {
              className: "mt-4 text-white/75 max-w-md mx-auto",
              children: "Create your workspace and connect your first integrations in minutes.",
            }),
            k.jsx("button", {
              type: "button",
              className:
                "mt-8 bg-white text-[#1f2a1d] hover:bg-white/90 text-sm font-semibold px-8 py-3 rounded-full transition-colors",
              children: "Try it Live",
            }),
          ],
        }),
      }),
      k.jsx("section", {
        id: "login",
        className: `${v} bg-white`,
        children: k.jsxs("div", {
          className: "mx-auto max-w-6xl text-center",
          children: [
            k.jsx("h2", { className: C, children: "Enter" }),
            k.jsx("p", {
              className: m + " mx-auto",
              children: "Sign in to your LinkFlow dashboard.",
            }),
            k.jsx("button", {
              type: "button",
              className:
                "mt-8 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors",
              children: "Log in",
            }),
          ],
        }),
      }),
    ],
  });
}
const ad =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4",
  Ua = [
    { id: "mission", label: "Purpose" },
    { id: "how", label: "The Process" },
    { id: "pricing", label: "Tariffs" },
  ],
  cd =
    '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif';
function fd() {
  const [v, C] = je.useState(!1);
  (je.useEffect(() => {
    od();
  }, []),
    je.useEffect(
      () => (
        v ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [v],
    ),
    je.useEffect(() => {
      if (!v) return;
      const F = (M) => {
        M.key === "Escape" && C(!1);
      };
      return (
        window.addEventListener("keydown", F),
        () => window.removeEventListener("keydown", F)
      );
    }, [v]));
  const m = () => C(!1);
  return k.jsxs("div", {
    className: "min-h-screen bg-[#f4f7f2]",
    children: [
      k.jsxs("section", {
        className: "relative w-full min-h-screen sm:h-screen overflow-hidden",
        children: [
          k.jsx(ud, { src: ad, className: "absolute inset-0 w-full h-full" }),
          k.jsxs("nav", {
            className:
              "absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6",
            children: [
              k.jsx("div", {
                className: "flex items-center gap-2 text-[#2d3a2a]",
                children: k.jsxs("span", {
                  className: "text-lg sm:text-xl md:text-2xl font-semibold tracking-tight",
                  children: [
                    "LinkFlow",
                    k.jsx("sup", {
                      className: "text-[10px] sm:text-xs font-medium",
                      children: "TM",
                    }),
                  ],
                }),
              }),
              k.jsxs("div", {
                className:
                  "hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60",
                children: [
                  Ua.map((F, M) =>
                    k.jsx(
                      Mn,
                      {
                        target: { kind: "section", id: F.id },
                        className: `text-sm px-3 py-2 transition-colors ${M === 0 ? "font-semibold text-[#1f2a1d]" : "font-medium text-[#4b5b47] hover:text-[#1f2a1d]"}`,
                        children: F.label,
                      },
                      F.id,
                    ),
                  ),
                  k.jsx("button", {
                    type: "button",
                    onClick: () => On("signup"),
                    className:
                      "ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors",
                    children: "Try it Live",
                  }),
                ],
              }),
              k.jsxs("div", {
                className: "flex items-center gap-3 sm:gap-6 text-[#2d3a2a]",
                children: [
                  k.jsxs(Mn, {
                    target: { kind: "section", id: "signup" },
                    className:
                      "hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity",
                    children: [k.jsx(Da, { className: "w-4 h-4" }), "Sign Me Up!"],
                  }),
                  k.jsxs(Mn, {
                    target: { kind: "section", id: "login" },
                    className:
                      "hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity",
                    children: [k.jsx(Ia, { className: "w-4 h-4" }), "Enter"],
                  }),
                  k.jsxs("button", {
                    type: "button",
                    onClick: () => C((F) => !F),
                    className:
                      "lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90",
                    "aria-label": v ? "Close menu" : "Open menu",
                    "aria-expanded": v,
                    children: [
                      k.jsx(qf, {
                        className: `w-5 h-5 absolute transition-all duration-300 ${v ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`,
                      }),
                      k.jsx(td, {
                        className: `w-5 h-5 absolute transition-all duration-300 ${v ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          k.jsx("div", {
            className: `lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${v ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
            onClick: m,
            role: "presentation",
            children: k.jsx("div", {
              className: "absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm",
            }),
          }),
          k.jsx("div", {
            className: `lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${v ? "translate-x-0" : "translate-x-full"}`,
            children: k.jsxs("div", {
              className: "flex flex-col h-full pt-24 px-8 pb-8",
              children: [
                k.jsx("div", {
                  className: "flex flex-col gap-1",
                  children: Ua.map((F, M) =>
                    k.jsx(
                      Mn,
                      {
                        target: { kind: "section", id: F.id },
                        onClick: m,
                        className: `text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${v ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`,
                        style: { transitionDelay: v ? `${150 + M * 70}ms` : "0ms" },
                        children: F.label,
                      },
                      F.id,
                    ),
                  ),
                }),
                k.jsxs("div", {
                  className: `mt-8 flex flex-col gap-4 transition-all duration-500 ${v ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`,
                  style: { transitionDelay: v ? "400ms" : "0ms" },
                  children: [
                    k.jsxs(Mn, {
                      target: { kind: "section", id: "signup" },
                      onClick: m,
                      className:
                        "flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden",
                      children: [k.jsx(Da, { className: "w-4 h-4" }), "Sign Me Up!"],
                    }),
                    k.jsxs(Mn, {
                      target: { kind: "section", id: "login" },
                      onClick: m,
                      className:
                        "flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden",
                      children: [k.jsx(Ia, { className: "w-4 h-4" }), "Enter"],
                    }),
                    k.jsx("button", {
                      type: "button",
                      onClick: () => {
                        (m(), On("signup"));
                      },
                      className:
                        "mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors",
                      children: "Try it Live",
                    }),
                  ],
                }),
              ],
            }),
          }),
          k.jsxs("div", {
            className:
              "relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6",
            children: [
              k.jsxs("h1", {
                className:
                  "font-normal leading-[0.95] text-[#336443] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl",
                style: { fontFamily: cd, letterSpacing: "-0.035em" },
                children: [
                  "Close the rift",
                  " ",
                  k.jsxs("span", {
                    className: "text-[#85AB8B]",
                    children: [
                      "linking",
                      k.jsx("br", { className: "hidden sm:block" }),
                      " signals and action",
                    ],
                  }),
                ],
              }),
              k.jsx("p", {
                className:
                  "mt-6 sm:mt-8 text-[#4b5b47] text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2",
                children:
                  "Shape scattered signals into meaningful outcomes via AI-driven workflows.",
              }),
            ],
          }),
          k.jsxs("div", {
            className:
              "absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm",
            children: [
              k.jsxs("div", {
                className: "flex items-center gap-2 text-[#3d5638] sm:text-white/95 mb-3",
                children: [
                  k.jsx(ed, { className: "w-4 h-4" }),
                  k.jsxs("span", {
                    className: "text-sm font-semibold sm:font-medium",
                    children: [
                      "FluxEngine",
                      k.jsx("sup", { className: "text-[10px]", children: "TM" }),
                    ],
                  }),
                ],
              }),
              k.jsx("p", {
                className:
                  "text-[#3d5638]/90 sm:text-white/85 text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal",
                children:
                  "LinkFlow smoothly unites your company systems, streamlining data paths between services without having to write custom scripts.",
              }),
              k.jsxs("div", {
                className: "flex items-center gap-4 flex-wrap",
                children: [
                  k.jsx("button", {
                    type: "button",
                    onClick: () => On("signup"),
                    className:
                      "bg-[#3d5638] sm:bg-white hover:bg-[#2d4228] sm:hover:bg-white/90 text-white sm:text-[#1f2a1d] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm",
                    children: "Try it Live",
                  }),
                  k.jsx("button", {
                    type: "button",
                    onClick: () => On("mission"),
                    className:
                      "text-[#3d5638] sm:text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity",
                    children: "Know More.",
                  }),
                ],
              }),
            ],
          }),
          k.jsxs("button", {
            type: "button",
            onClick: () => On("how"),
            className:
              "hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm",
            children: [
              k.jsx("span", {
                className:
                  "flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors",
                children: k.jsx(bf, { className: "w-3 h-3 fill-white text-white ml-0.5" }),
              }),
              k.jsx("span", { className: "font-medium", children: "How we build?" }),
              k.jsx("span", { className: "text-white/60", children: "1:35" }),
            ],
          }),
        ],
      }),
      k.jsx(sd, {}),
    ],
  });
}
Yf.createRoot(document.getElementById("root")).render(
  k.jsx(je.StrictMode, { children: k.jsx(fd, {}) }),
);
