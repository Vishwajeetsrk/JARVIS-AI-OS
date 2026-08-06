(function () {
  const F = document.createElement("link").relList;
  if (F && F.supports && F.supports("modulepreload")) return;
  for (const A of document.querySelectorAll('link[rel="modulepreload"]')) ve(A);
  new MutationObserver((A) => {
    for (const B of A)
      if (B.type === "childList")
        for (const te of B.addedNodes)
          te.tagName === "LINK" && te.rel === "modulepreload" && ve(te);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(A) {
    const B = {};
    return (
      A.integrity && (B.integrity = A.integrity),
      A.referrerPolicy && (B.referrerPolicy = A.referrerPolicy),
      A.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : A.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function ve(A) {
    if (A.ep) return;
    A.ep = !0;
    const B = m(A);
    fetch(A.href, B);
  }
})();
var Ei = { exports: {} },
  gr = {},
  _i = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Tf() {
  if (Ca) return D;
  Ca = 1;
  var L = Symbol.for("react.element"),
    F = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    ve = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    te = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    J = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    $ = Symbol.iterator;
  function I(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = ($ && c[$]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var se = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ae = Object.assign,
    X = {};
  function V(c, v, M) {
    ((this.props = c), (this.context = v), (this.refs = X), (this.updater = M || se));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (V.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function pe() {}
  pe.prototype = V.prototype;
  function we(c, v, M) {
    ((this.props = c), (this.context = v), (this.refs = X), (this.updater = M || se));
  }
  var ye = (we.prototype = new pe());
  ((ye.constructor = we), ae(ye, V.prototype), (ye.isPureReactComponent = !0));
  var ce = Array.isArray,
    Ie = Object.prototype.hasOwnProperty,
    xe = { current: null },
    Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(c, v, M) {
    var U,
      Q = {},
      K = null,
      b = null;
    if (v != null)
      for (U in (v.ref !== void 0 && (b = v.ref), v.key !== void 0 && (K = "" + v.key), v))
        Ie.call(v, U) && !Ne.hasOwnProperty(U) && (Q[U] = v[U]);
    var G = arguments.length - 2;
    if (G === 1) Q.children = M;
    else if (1 < G) {
      for (var le = Array(G), Qe = 0; Qe < G; Qe++) le[Qe] = arguments[Qe + 2];
      Q.children = le;
    }
    if (c && c.defaultProps) for (U in ((G = c.defaultProps), G)) Q[U] === void 0 && (Q[U] = G[U]);
    return { $$typeof: L, type: c, key: K, ref: b, props: Q, _owner: xe.current };
  }
  function nt(c, v) {
    return { $$typeof: L, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function wt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === L;
  }
  function Yt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (M) {
        return v[M];
      })
    );
  }
  var dt = /\/+/g;
  function $e(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : v.toString(36);
  }
  function rt(c, v, M, U, Q) {
    var K = typeof c;
    (K === "undefined" || K === "boolean") && (c = null);
    var b = !1;
    if (c === null) b = !0;
    else
      switch (K) {
        case "string":
        case "number":
          b = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case L:
            case F:
              b = !0;
          }
      }
    if (b)
      return (
        (b = c),
        (Q = Q(b)),
        (c = U === "" ? "." + $e(b, 0) : U),
        ce(Q)
          ? ((M = ""),
            c != null && (M = c.replace(dt, "$&/") + "/"),
            rt(Q, v, M, "", function (Qe) {
              return Qe;
            }))
          : Q != null &&
            (wt(Q) &&
              (Q = nt(
                Q,
                M +
                  (!Q.key || (b && b.key === Q.key) ? "" : ("" + Q.key).replace(dt, "$&/") + "/") +
                  c,
              )),
            v.push(Q)),
        1
      );
    if (((b = 0), (U = U === "" ? "." : U + ":"), ce(c)))
      for (var G = 0; G < c.length; G++) {
        K = c[G];
        var le = U + $e(K, G);
        b += rt(K, v, M, le, Q);
      }
    else if (((le = I(c)), typeof le == "function"))
      for (c = le.call(c), G = 0; !(K = c.next()).done;)
        ((K = K.value), (le = U + $e(K, G++)), (b += rt(K, v, M, le, Q)));
    else if (K === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return b;
  }
  function pt(c, v, M) {
    if (c == null) return c;
    var U = [],
      Q = 0;
    return (
      rt(c, U, "", "", function (K) {
        return v.call(M, K, Q++);
      }),
      U
    );
  }
  function De(c) {
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
  var fe = { current: null },
    S = { transition: null },
    R = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: S, ReactCurrentOwner: xe };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (D.Children = {
      map: pt,
      forEach: function (c, v, M) {
        pt(
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
          pt(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          pt(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!wt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (D.Component = V),
    (D.Fragment = m),
    (D.Profiler = A),
    (D.PureComponent = we),
    (D.StrictMode = ve),
    (D.Suspense = j),
    (D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (D.act = E),
    (D.cloneElement = function (c, v, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var U = ae({}, c.props),
        Q = c.key,
        K = c.ref,
        b = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((K = v.ref), (b = xe.current)),
          v.key !== void 0 && (Q = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var G = c.type.defaultProps;
        for (le in v)
          Ie.call(v, le) &&
            !Ne.hasOwnProperty(le) &&
            (U[le] = v[le] === void 0 && G !== void 0 ? G[le] : v[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) U.children = M;
      else if (1 < le) {
        G = Array(le);
        for (var Qe = 0; Qe < le; Qe++) G[Qe] = arguments[Qe + 2];
        U.children = G;
      }
      return { $$typeof: L, type: c.type, key: Q, ref: K, props: U, _owner: b };
    }),
    (D.createContext = function (c) {
      return (
        (c = {
          $$typeof: te,
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
    (D.createElement = Pe),
    (D.createFactory = function (c) {
      var v = Pe.bind(null, c);
      return ((v.type = c), v);
    }),
    (D.createRef = function () {
      return { current: null };
    }),
    (D.forwardRef = function (c) {
      return { $$typeof: T, render: c };
    }),
    (D.isValidElement = wt),
    (D.lazy = function (c) {
      return { $$typeof: q, _payload: { _status: -1, _result: c }, _init: De };
    }),
    (D.memo = function (c, v) {
      return { $$typeof: J, type: c, compare: v === void 0 ? null : v };
    }),
    (D.startTransition = function (c) {
      var v = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = v;
      }
    }),
    (D.unstable_act = E),
    (D.useCallback = function (c, v) {
      return fe.current.useCallback(c, v);
    }),
    (D.useContext = function (c) {
      return fe.current.useContext(c);
    }),
    (D.useDebugValue = function () {}),
    (D.useDeferredValue = function (c) {
      return fe.current.useDeferredValue(c);
    }),
    (D.useEffect = function (c, v) {
      return fe.current.useEffect(c, v);
    }),
    (D.useId = function () {
      return fe.current.useId();
    }),
    (D.useImperativeHandle = function (c, v, M) {
      return fe.current.useImperativeHandle(c, v, M);
    }),
    (D.useInsertionEffect = function (c, v) {
      return fe.current.useInsertionEffect(c, v);
    }),
    (D.useLayoutEffect = function (c, v) {
      return fe.current.useLayoutEffect(c, v);
    }),
    (D.useMemo = function (c, v) {
      return fe.current.useMemo(c, v);
    }),
    (D.useReducer = function (c, v, M) {
      return fe.current.useReducer(c, v, M);
    }),
    (D.useRef = function (c) {
      return fe.current.useRef(c);
    }),
    (D.useState = function (c) {
      return fe.current.useState(c);
    }),
    (D.useSyncExternalStore = function (c, v, M) {
      return fe.current.useSyncExternalStore(c, v, M);
    }),
    (D.useTransition = function () {
      return fe.current.useTransition();
    }),
    (D.version = "18.3.1"),
    D
  );
}
var Na;
function Li() {
  return (Na || ((Na = 1), (_i.exports = Tf())), _i.exports);
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
function Of() {
  if (Pa) return gr;
  Pa = 1;
  var L = Li(),
    F = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    ve = Object.prototype.hasOwnProperty,
    A = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(T, j, J) {
    var q,
      $ = {},
      I = null,
      se = null;
    (J !== void 0 && (I = "" + J),
      j.key !== void 0 && (I = "" + j.key),
      j.ref !== void 0 && (se = j.ref));
    for (q in j) ve.call(j, q) && !B.hasOwnProperty(q) && ($[q] = j[q]);
    if (T && T.defaultProps) for (q in ((j = T.defaultProps), j)) $[q] === void 0 && ($[q] = j[q]);
    return { $$typeof: F, type: T, key: I, ref: se, props: $, _owner: A.current };
  }
  return ((gr.Fragment = m), (gr.jsx = te), (gr.jsxs = te), gr);
}
var za;
function jf() {
  return (za || ((za = 1), (Ei.exports = Of())), Ei.exports);
}
var W = jf(),
  ft = Li(),
  Ll = {},
  Ci = { exports: {} },
  Be = {},
  Ni = { exports: {} },
  Pi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Mf() {
  return (
    La ||
      ((La = 1),
      (function (L) {
        function F(S, R) {
          var E = S.length;
          S.push(R);
          e: for (; 0 < E;) {
            var c = (E - 1) >>> 1,
              v = S[c];
            if (0 < A(v, R)) ((S[c] = R), (S[E] = v), (E = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function ve(S) {
          if (S.length === 0) return null;
          var R = S[0],
            E = S.pop();
          if (E !== R) {
            S[0] = E;
            e: for (var c = 0, v = S.length, M = v >>> 1; c < M;) {
              var U = 2 * (c + 1) - 1,
                Q = S[U],
                K = U + 1,
                b = S[K];
              if (0 > A(Q, E))
                K < v && 0 > A(b, Q)
                  ? ((S[c] = b), (S[K] = E), (c = K))
                  : ((S[c] = Q), (S[U] = E), (c = U));
              else if (K < v && 0 > A(b, E)) ((S[c] = b), (S[K] = E), (c = K));
              else break e;
            }
          }
          return R;
        }
        function A(S, R) {
          var E = S.sortIndex - R.sortIndex;
          return E !== 0 ? E : S.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var B = performance;
          L.unstable_now = function () {
            return B.now();
          };
        } else {
          var te = Date,
            T = te.now();
          L.unstable_now = function () {
            return te.now() - T;
          };
        }
        var j = [],
          J = [],
          q = 1,
          $ = null,
          I = 3,
          se = !1,
          ae = !1,
          X = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          pe = typeof clearTimeout == "function" ? clearTimeout : null,
          we = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ye(S) {
          for (var R = m(J); R !== null;) {
            if (R.callback === null) ve(J);
            else if (R.startTime <= S) (ve(J), (R.sortIndex = R.expirationTime), F(j, R));
            else break;
            R = m(J);
          }
        }
        function ce(S) {
          if (((X = !1), ye(S), !ae))
            if (m(j) !== null) ((ae = !0), De(Ie));
            else {
              var R = m(J);
              R !== null && fe(ce, R.startTime - S);
            }
        }
        function Ie(S, R) {
          ((ae = !1), X && ((X = !1), pe(Pe), (Pe = -1)), (se = !0));
          var E = I;
          try {
            for (ye(R), $ = m(j); $ !== null && (!($.expirationTime > R) || (S && !Yt()));) {
              var c = $.callback;
              if (typeof c == "function") {
                (($.callback = null), (I = $.priorityLevel));
                var v = c($.expirationTime <= R);
                ((R = L.unstable_now()),
                  typeof v == "function" ? ($.callback = v) : $ === m(j) && ve(j),
                  ye(R));
              } else ve(j);
              $ = m(j);
            }
            if ($ !== null) var M = !0;
            else {
              var U = m(J);
              (U !== null && fe(ce, U.startTime - R), (M = !1));
            }
            return M;
          } finally {
            (($ = null), (I = E), (se = !1));
          }
        }
        var xe = !1,
          Ne = null,
          Pe = -1,
          nt = 5,
          wt = -1;
        function Yt() {
          return !(L.unstable_now() - wt < nt);
        }
        function dt() {
          if (Ne !== null) {
            var S = L.unstable_now();
            wt = S;
            var R = !0;
            try {
              R = Ne(!0, S);
            } finally {
              R ? $e() : ((xe = !1), (Ne = null));
            }
          } else xe = !1;
        }
        var $e;
        if (typeof we == "function")
          $e = function () {
            we(dt);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            pt = rt.port2;
          ((rt.port1.onmessage = dt),
            ($e = function () {
              pt.postMessage(null);
            }));
        } else
          $e = function () {
            V(dt, 0);
          };
        function De(S) {
          ((Ne = S), xe || ((xe = !0), $e()));
        }
        function fe(S, R) {
          Pe = V(function () {
            S(L.unstable_now());
          }, R);
        }
        ((L.unstable_IdlePriority = 5),
          (L.unstable_ImmediatePriority = 1),
          (L.unstable_LowPriority = 4),
          (L.unstable_NormalPriority = 3),
          (L.unstable_Profiling = null),
          (L.unstable_UserBlockingPriority = 2),
          (L.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (L.unstable_continueExecution = function () {
            ae || se || ((ae = !0), De(Ie));
          }),
          (L.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (nt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (L.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (L.unstable_getFirstCallbackNode = function () {
            return m(j);
          }),
          (L.unstable_next = function (S) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = I;
            }
            var E = I;
            I = R;
            try {
              return S();
            } finally {
              I = E;
            }
          }),
          (L.unstable_pauseExecution = function () {}),
          (L.unstable_requestPaint = function () {}),
          (L.unstable_runWithPriority = function (S, R) {
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
            var E = I;
            I = S;
            try {
              return R();
            } finally {
              I = E;
            }
          }),
          (L.unstable_scheduleCallback = function (S, R, E) {
            var c = L.unstable_now();
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? c + E : c))
                : (E = c),
              S)
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
              (S = {
                id: q++,
                callback: R,
                priorityLevel: S,
                startTime: E,
                expirationTime: v,
                sortIndex: -1,
              }),
              E > c
                ? ((S.sortIndex = E),
                  F(J, S),
                  m(j) === null &&
                    S === m(J) &&
                    (X ? (pe(Pe), (Pe = -1)) : (X = !0), fe(ce, E - c)))
                : ((S.sortIndex = v), F(j, S), ae || se || ((ae = !0), De(Ie))),
              S
            );
          }),
          (L.unstable_shouldYield = Yt),
          (L.unstable_wrapCallback = function (S) {
            var R = I;
            return function () {
              var E = I;
              I = R;
              try {
                return S.apply(this, arguments);
              } finally {
                I = E;
              }
            };
          }));
      })(Pi)),
    Pi
  );
}
var Ra;
function Ff() {
  return (Ra || ((Ra = 1), (Ni.exports = Mf())), Ni.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function If() {
  if (Ta) return Be;
  Ta = 1;
  var L = Li(),
    F = Ff();
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
  var ve = new Set(),
    A = {};
  function B(e, t) {
    (te(e, t), te(e + "Capture", t));
  }
  function te(e, t) {
    for (A[e] = t, e = 0; e < t.length; e++) ve.add(t[e]);
  }
  var T = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    j = Object.prototype.hasOwnProperty,
    J =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    q = {},
    $ = {};
  function I(e) {
    return j.call($, e) ? !0 : j.call(q, e) ? !1 : J.test(e) ? ($[e] = !0) : ((q[e] = !0), !1);
  }
  function se(e, t, n, r) {
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
  function ae(e, t, n, r) {
    if (t === null || typeof t > "u" || se(e, t, n, r)) return !0;
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
  function X(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var V = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      V[e] = new X(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new X(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      V[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        V[e] = new X(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        V[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      V[e] = new X(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      V[e] = new X(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      V[e] = new X(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      V[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var pe = /[\-:]([a-z])/g;
  function we(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(pe, we);
      V[t] = new X(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(pe, we);
        V[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(pe, we);
      V[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      V[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      V[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ye(e, t, n, r) {
    var l = V.hasOwnProperty(t) ? V[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (ae(t, n, l, r) && (n = null),
      r || l === null
        ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var ce = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ie = Symbol.for("react.element"),
    xe = Symbol.for("react.portal"),
    Ne = Symbol.for("react.fragment"),
    Pe = Symbol.for("react.strict_mode"),
    nt = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    dt = Symbol.for("react.forward_ref"),
    $e = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    pt = Symbol.for("react.memo"),
    De = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
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
  function U(e, t) {
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
  function Q(e) {
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
        return ((e = U(e.type, !1)), e);
      case 11:
        return ((e = U(e.type.render, !1)), e);
      case 1:
        return ((e = U(e.type, !0)), e);
      default:
        return "";
    }
  }
  function K(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ne:
        return "Fragment";
      case xe:
        return "Portal";
      case nt:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case $e:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer";
        case wt:
          return (e._context.displayName || "Context") + ".Provider";
        case dt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case pt:
          return ((t = e.displayName || null), t !== null ? t : K(e.type) || "Memo");
        case De:
          ((t = e._payload), (e = e._init));
          try {
            return K(e(t));
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
        return K(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
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
  function G(e) {
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
  function Qe(e) {
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
  function wr(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function Ri(e) {
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
  function Ti(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = G(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Oi(e, t) {
    ((t = t.checked), t != null && ye(e, "checked", t, !1));
  }
  function Tl(e, t) {
    Oi(e, t);
    var n = G(t.value),
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
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, G(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function ji(e, t, n) {
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
  var jn = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + G(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jl(e, t) {
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
        if (jn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: G(n) };
  }
  function Fi(e, t) {
    var n = G(t.value),
      r = G(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ii(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Di(e) {
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
      ? Di(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kr,
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
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild;
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
  var Fn = {
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
    Ma = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fn).forEach(function (e) {
    Ma.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]));
    });
  });
  function Ai(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Vi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ai(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Fa = E(
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
  function Fl(e, t) {
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
  var Dl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    an = null,
    cn = null;
  function Wi(e) {
    if ((e = rr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = $r(t)), Al(e.stateNode, e.type, t));
    }
  }
  function Hi(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Bi() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
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
      ((Vl = !1), (an !== null || cn !== null) && (Qi(), Bi()));
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $r(n);
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
  if (T)
    try {
      var Dn = {};
      (Object.defineProperty(Dn, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Dn, Dn),
        window.removeEventListener("test", Dn, Dn));
    } catch {
      Wl = !1;
    }
  function Ia(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1,
    xr = null,
    Er = !1,
    Hl = null,
    Da = {
      onError: function (e) {
        ((Un = !0), (xr = e));
      },
    };
  function Ua(e, t, n, r, l, u, i, o, s) {
    ((Un = !1), (xr = null), Ia.apply(Da, arguments));
  }
  function Aa(e, t, n, r, l, u, i, o, s) {
    if ((Ua.apply(this, arguments), Un)) {
      if (Un) {
        var p = xr;
        ((Un = !1), (xr = null));
      } else throw Error(m(198));
      Er || ((Er = !0), (Hl = p));
    }
  }
  function Xt(e) {
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
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Va(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(m(188));
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
    return ((e = Va(e)), e !== null ? Zi(e) : null);
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
  var Ji = F.unstable_scheduleCallback,
    qi = F.unstable_cancelCallback,
    Wa = F.unstable_shouldYield,
    Ha = F.unstable_requestPaint,
    me = F.unstable_now,
    Ba = F.unstable_getCurrentPriorityLevel,
    Bl = F.unstable_ImmediatePriority,
    bi = F.unstable_UserBlockingPriority,
    _r = F.unstable_NormalPriority,
    $a = F.unstable_LowPriority,
    eo = F.unstable_IdlePriority,
    Cr = null,
    mt = null;
  function Qa(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
      try {
        mt.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : Xa,
    Ka = Math.log,
    Ya = Math.LN2;
  function Xa(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ka(e) / Ya) | 0)) | 0);
  }
  var Nr = 64,
    Pr = 4194304;
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
  function zr(e, t) {
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
        ((n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Ga(e, t) {
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
  function Za(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - lt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = Ga(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function $l(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function to() {
    var e = Nr;
    return ((Nr <<= 1), (Nr & 4194240) === 0 && (Nr = 64), e);
  }
  function Ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - lt(t)),
      (e[t] = n));
  }
  function Ja(e, t) {
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
      var l = 31 - lt(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - lt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Z = 0;
  function no(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ro,
    Yl,
    lo,
    uo,
    io,
    Xl = !1,
    Lr = [],
    zt = null,
    Lt = null,
    Rt = null,
    Wn = new Map(),
    Hn = new Map(),
    Tt = [],
    qa =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function oo(e, t) {
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
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Bn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Yl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ba(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Bn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Bn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Bn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Wn.set(u, Bn(Wn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Hn.set(u, Bn(Hn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function so(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
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
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Dl = r), n.target.dispatchEvent(r), (Dl = null));
      } else return ((t = rr(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ao(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function ec() {
    ((Xl = !1),
      zt !== null && Rr(zt) && (zt = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Rt !== null && Rr(Rt) && (Rt = null),
      Wn.forEach(ao),
      Hn.forEach(ao));
  }
  function $n(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl || ((Xl = !0), F.unstable_scheduleCallback(F.unstable_NormalPriority, ec)));
  }
  function Qn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Lr.length) {
      $n(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && $n(zt, e),
        Lt !== null && $n(Lt, e),
        Rt !== null && $n(Rt, e),
        Wn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (so(n), n.blockedOn === null && Tt.shift());
  }
  var fn = ce.ReactCurrentBatchConfig,
    Tr = !0;
  function tc(e, t, n, r) {
    var l = Z,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Z = 1), Gl(e, t, n, r));
    } finally {
      ((Z = l), (fn.transition = u));
    }
  }
  function nc(e, t, n, r) {
    var l = Z,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Z = 4), Gl(e, t, n, r));
    } finally {
      ((Z = l), (fn.transition = u));
    }
  }
  function Gl(e, t, n, r) {
    if (Tr) {
      var l = Zl(e, t, n, r);
      if (l === null) (pu(e, t, r, Or, n), oo(e, r));
      else if (ba(l, e, t, n, r)) r.stopPropagation();
      else if ((oo(e, r), t & 4 && -1 < qa.indexOf(e))) {
        for (; l !== null;) {
          var u = rr(l);
          if (
            (u !== null && ro(u), (u = Zl(e, t, n, r)), u === null && pu(e, t, r, Or, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, t, r, null, n);
    }
  }
  var Or = null;
  function Zl(e, t, n, r) {
    if (((Or = null), (e = Ul(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
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
        switch (Ba()) {
          case Bl:
            return 1;
          case bi:
            return 4;
          case _r:
          case $a:
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
  var Ot = null,
    Jl = null,
    jr = null;
  function fo() {
    if (jr) return jr;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = "value" in Ot ? Ot.value : Ot.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Mr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fr() {
    return !0;
  }
  function po() {
    return !1;
  }
  function Ke(e) {
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
          ? Fr
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
            (this.isDefaultPrevented = Fr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fr));
        },
        persist: function () {},
        isPersistent: Fr,
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
    ql = Ke(dn),
    Kn = E({}, dn, { view: 0, detail: 0 }),
    rc = Ke(Kn),
    bl,
    eu,
    Yn,
    Ir = E({}, Kn, {
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
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((bl = e.screenX - Yn.screenX), (eu = e.screenY - Yn.screenY))
                : (eu = bl = 0),
              (Yn = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    mo = Ke(Ir),
    lc = E({}, Ir, { dataTransfer: 0 }),
    uc = Ke(lc),
    ic = E({}, Kn, { relatedTarget: 0 }),
    tu = Ke(ic),
    oc = E({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sc = Ke(oc),
    ac = E({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cc = Ke(ac),
    fc = E({}, dn, { data: 0 }),
    ho = Ke(fc),
    dc = {
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
    pc = {
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
    mc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mc[e]) ? !!t[e] : !1;
  }
  function nu() {
    return hc;
  }
  var vc = E({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = dc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? pc[e.keyCode] || "Unidentified"
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
        return e.type === "keypress" ? Mr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Mr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    yc = Ke(vc),
    gc = E({}, Ir, {
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
    vo = Ke(gc),
    wc = E({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu,
    }),
    Sc = Ke(wc),
    kc = E({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xc = Ke(kc),
    Ec = E({}, Ir, {
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
    _c = Ke(Ec),
    Cc = [9, 13, 27, 32],
    ru = T && "CompositionEvent" in window,
    Xn = null;
  T && "documentMode" in document && (Xn = document.documentMode);
  var Nc = T && "TextEvent" in window && !Xn,
    yo = T && (!ru || (Xn && 8 < Xn && 11 >= Xn)),
    go = " ",
    wo = !1;
  function So(e, t) {
    switch (e) {
      case "keyup":
        return Cc.indexOf(t.keyCode) !== -1;
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
  function ko(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var pn = !1;
  function Pc(e, t) {
    switch (e) {
      case "compositionend":
        return ko(t);
      case "keypress":
        return t.which !== 32 ? null : ((wo = !0), go);
      case "textInput":
        return ((e = t.data), e === go && wo ? null : e);
      default:
        return null;
    }
  }
  function zc(e, t) {
    if (pn)
      return e === "compositionend" || (!ru && So(e, t))
        ? ((e = fo()), (jr = Jl = Ot = null), (pn = !1), e)
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
  var Lc = {
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
    return t === "input" ? !!Lc[e.type] : t === "textarea";
  }
  function Eo(e, t, n, r) {
    (Hi(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ql("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Zn = null;
  function Rc(e) {
    Wo(e, 0);
  }
  function Dr(e) {
    var t = gn(e);
    if (Ri(t)) return e;
  }
  function Tc(e, t) {
    if (e === "change") return t;
  }
  var _o = !1;
  if (T) {
    var lu;
    if (T) {
      var uu = "oninput" in document;
      if (!uu) {
        var Co = document.createElement("div");
        (Co.setAttribute("oninput", "return;"), (uu = typeof Co.oninput == "function"));
      }
      lu = uu;
    } else lu = !1;
    _o = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Gn && (Gn.detachEvent("onpropertychange", Po), (Zn = Gn = null));
  }
  function Po(e) {
    if (e.propertyName === "value" && Dr(Zn)) {
      var t = [];
      (Eo(t, Zn, e, Ul(e)), Ki(Rc, t));
    }
  }
  function Oc(e, t, n) {
    e === "focusin"
      ? (No(), (Gn = t), (Zn = n), Gn.attachEvent("onpropertychange", Po))
      : e === "focusout" && No();
  }
  function jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dr(Zn);
  }
  function Mc(e, t) {
    if (e === "click") return Dr(t);
  }
  function Fc(e, t) {
    if (e === "input" || e === "change") return Dr(t);
  }
  function Ic(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ut = typeof Object.is == "function" ? Object.is : Ic;
  function Jn(e, t) {
    if (ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!j.call(t, l) || !ut(e[l], t[l])) return !1;
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
  function Ro(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ro(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function To() {
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
  function Dc(e) {
    var t = To(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ro(n.ownerDocument.documentElement, n)) {
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
  var Uc = T && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    ou = null,
    qn = null,
    su = !1;
  function Oo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    su ||
      mn == null ||
      mn !== Sr(r) ||
      ((r = mn),
      "selectionStart" in r && iu(r)
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
        (r = Wr(ou, "onSelect")),
        0 < r.length &&
          ((t = new ql("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    au = {},
    jo = {};
  T &&
    ((jo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (au[e]) return au[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in jo) return (au[e] = t[n]);
    return e;
  }
  var Mo = Ar("animationend"),
    Fo = Ar("animationiteration"),
    Io = Ar("animationstart"),
    Do = Ar("transitionend"),
    Uo = new Map(),
    Ao =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function jt(e, t) {
    (Uo.set(e, t), B(t, [e]));
  }
  for (var cu = 0; cu < Ao.length; cu++) {
    var fu = Ao[cu],
      Ac = fu.toLowerCase(),
      Vc = fu[0].toUpperCase() + fu.slice(1);
    jt(Ac, "on" + Vc);
  }
  (jt(Mo, "onAnimationEnd"),
    jt(Fo, "onAnimationIteration"),
    jt(Io, "onAnimationStart"),
    jt("dblclick", "onDoubleClick"),
    jt("focusin", "onFocus"),
    jt("focusout", "onBlur"),
    jt(Do, "onTransitionEnd"),
    te("onMouseEnter", ["mouseout", "mouseover"]),
    te("onMouseLeave", ["mouseout", "mouseover"]),
    te("onPointerEnter", ["pointerout", "pointerover"]),
    te("onPointerLeave", ["pointerout", "pointerover"]),
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
    Wc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Vo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Aa(r, t, void 0, e), (e.currentTarget = null));
  }
  function Wo(e, t) {
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
            (Vo(l, o, p), (u = s));
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
            (Vo(l, o, p), (u = s));
          }
      }
    }
    if (Er) throw ((e = Hl), (Er = !1), (Hl = null), e);
  }
  function ne(e, t) {
    var n = t[wu];
    n === void 0 && (n = t[wu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ho(t, e, 2, !1), n.add(r));
  }
  function du(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ho(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        ve.forEach(function (n) {
          n !== "selectionchange" && (Wc.has(n) || du(n, !1, e), du(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), du("selectionchange", !1, t));
    }
  }
  function Ho(e, t, n, r) {
    switch (co(t)) {
      case 1:
        var l = tc;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Gl;
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
            if (((i = Gt(o)), i === null)) return;
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
        y = Ul(n),
        g = [];
      e: {
        var h = Uo.get(e);
        if (h !== void 0) {
          var k = ql,
            _ = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = yc;
              break;
            case "focusin":
              ((_ = "focus"), (k = tu));
              break;
            case "focusout":
              ((_ = "blur"), (k = tu));
              break;
            case "beforeblur":
            case "afterblur":
              k = tu;
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
              k = mo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Sc;
              break;
            case Mo:
            case Fo:
            case Io:
              k = sc;
              break;
            case Do:
              k = xc;
              break;
            case "scroll":
              k = rc;
              break;
            case "wheel":
              k = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = cc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = vo;
          }
          var C = (t & 4) !== 0,
            he = !C && e === "scroll",
            f = C ? (h !== null ? h + "Capture" : null) : h;
          C = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = In(a, f)), w != null && C.push(tr(a, w, d)))),
              he)
            )
              break;
            a = a.return;
          }
          0 < C.length && ((h = new k(h, _, null, n, y)), g.push({ event: h, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            h && n !== Dl && (_ = n.relatedTarget || n.fromElement) && (Gt(_) || _[St]))
          )
            break e;
          if (
            (k || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            k
              ? ((_ = n.relatedTarget || n.toElement),
                (k = p),
                (_ = _ ? Gt(_) : null),
                _ !== null &&
                  ((he = Xt(_)), _ !== he || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((k = null), (_ = p)),
            k !== _)
          ) {
            if (
              ((C = mo),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((C = vo), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (he = k == null ? h : gn(k)),
              (d = _ == null ? h : gn(_)),
              (h = new C(w, a + "leave", k, n, y)),
              (h.target = he),
              (h.relatedTarget = d),
              (w = null),
              Gt(y) === p &&
                ((C = new C(f, a + "enter", _, n, y)),
                (C.target = d),
                (C.relatedTarget = he),
                (w = C)),
              (he = w),
              k && _)
            )
              t: {
                for (C = k, f = _, a = 0, d = C; d; d = vn(d)) a++;
                for (d = 0, w = f; w; w = vn(w)) d++;
                for (; 0 < a - d;) ((C = vn(C)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (C === f || (f !== null && C === f.alternate)) break t;
                  ((C = vn(C)), (f = vn(f)));
                }
                C = null;
              }
            else C = null;
            (k !== null && Bo(g, h, k, C, !1), _ !== null && he !== null && Bo(g, he, _, C, !0));
          }
        }
        e: {
          if (
            ((h = p ? gn(p) : window),
            (k = h.nodeName && h.nodeName.toLowerCase()),
            k === "select" || (k === "input" && h.type === "file"))
          )
            var N = Tc;
          else if (xo(h))
            if (_o) N = Fc;
            else {
              N = jc;
              var P = Oc;
            }
          else
            (k = h.nodeName) &&
              k.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (N = Mc);
          if (N && (N = N(e, p))) {
            Eo(g, N, n, y);
            break e;
          }
          (P && P(e, h, p),
            e === "focusout" &&
              (P = h._wrapperState) &&
              P.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value));
        }
        switch (((P = p ? gn(p) : window), e)) {
          case "focusin":
            (xo(P) || P.contentEditable === "true") && ((mn = P), (ou = p), (qn = null));
            break;
          case "focusout":
            qn = ou = mn = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((su = !1), Oo(g, n, y));
            break;
          case "selectionchange":
            if (Uc) break;
          case "keydown":
          case "keyup":
            Oo(g, n, y);
        }
        var z;
        if (ru)
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
            ? So(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (yo &&
            n.locale !== "ko" &&
            (pn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && pn && (z = fo())
              : ((Ot = y), (Jl = "value" in Ot ? Ot.value : Ot.textContent), (pn = !0))),
          (P = Wr(p, O)),
          0 < P.length &&
            ((O = new ho(O, e, null, n, y)),
            g.push({ event: O, listeners: P }),
            z ? (O.data = z) : ((z = ko(n)), z !== null && (O.data = z)))),
          (z = Nc ? Pc(e, n) : zc(e, n)) &&
            ((p = Wr(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new ho("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = z))));
      }
      Wo(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = In(e, n)),
        u != null && r.unshift(tr(e, u, l)),
        (u = In(e, t)),
        u != null && r.push(tr(e, u, l))),
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
  function Bo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = In(n, u)), s != null && i.unshift(tr(n, s, o)))
          : l || ((s = In(n, u)), s != null && i.push(tr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Hc = /\r\n?/g,
    Bc = /\u0000|\uFFFD/g;
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Hc,
        `
`,
      )
      .replace(Bc, "");
  }
  function Hr(e, t, n) {
    if (((t = $o(t)), $o(e) !== t && n)) throw Error(m(425));
  }
  function Br() {}
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
    $c = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qo = typeof Promise == "function" ? Promise : void 0,
    Qc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qo < "u"
          ? function (e) {
              return Qo.resolve(null).then(e).catch(Kc);
            }
          : yu;
  function Kc(e) {
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
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Mt(e) {
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
  var yn = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + yn,
    nr = "__reactProps$" + yn,
    St = "__reactContainer$" + yn,
    wu = "__reactEvents$" + yn,
    Yc = "__reactListeners$" + yn,
    Xc = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[ht];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[St] || n[ht])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ko(e); e !== null;) {
            if ((n = e[ht])) return n;
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
      (e = e[ht] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var Su = [],
    wn = -1;
  function Ft(e) {
    return { current: e };
  }
  function re(e) {
    0 > wn || ((e.current = Su[wn]), (Su[wn] = null), wn--);
  }
  function ee(e, t) {
    (wn++, (Su[wn] = e.current), (e.current = t));
  }
  var It = {},
    Re = Ft(It),
    Ue = Ft(!1),
    Zt = It;
  function Sn(e, t) {
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
  function Ae(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Qr() {
    (re(Ue), re(Re));
  }
  function Yo(e, t, n) {
    if (Re.current !== It) throw Error(m(168));
    (ee(Re, t), ee(Ue, n));
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, b(e) || "Unknown", l));
    return E({}, n, r);
  }
  function Kr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = Re.current),
      ee(Re, e),
      ee(Ue, Ue.current),
      !0
    );
  }
  function Go(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Xo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        re(Ue),
        re(Re),
        ee(Re, e))
      : re(Ue),
      ee(Ue, n));
  }
  var kt = null,
    Yr = !1,
    ku = !1;
  function Zo(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function Gc(e) {
    ((Yr = !0), Zo(e));
  }
  function Dt() {
    if (!ku && kt !== null) {
      ku = !0;
      var e = 0,
        t = Z;
      try {
        var n = kt;
        for (Z = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Yr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), Ji(Bl, Dt), l);
      } finally {
        ((Z = t), (ku = !1));
      }
    }
    return null;
  }
  var kn = [],
    xn = 0,
    Xr = null,
    Gr = 0,
    Ze = [],
    Je = 0,
    Jt = null,
    xt = 1,
    Et = "";
  function qt(e, t) {
    ((kn[xn++] = Gr), (kn[xn++] = Xr), (Xr = e), (Gr = t));
  }
  function Jo(e, t, n) {
    ((Ze[Je++] = xt), (Ze[Je++] = Et), (Ze[Je++] = Jt), (Jt = e));
    var r = xt;
    e = Et;
    var l = 32 - lt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - lt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xt = (1 << (32 - lt(t) + l)) | (n << l) | r),
        (Et = u + e));
    } else ((xt = (1 << u) | (n << l) | r), (Et = e));
  }
  function xu(e) {
    e.return !== null && (qt(e, 1), Jo(e, 1, 0));
  }
  function Eu(e) {
    for (; e === Xr;) ((Xr = kn[--xn]), (kn[xn] = null), (Gr = kn[--xn]), (kn[xn] = null));
    for (; e === Jt;)
      ((Jt = Ze[--Je]),
        (Ze[Je] = null),
        (Et = Ze[--Je]),
        (Ze[Je] = null),
        (xt = Ze[--Je]),
        (Ze[Je] = null));
  }
  var Ye = null,
    Xe = null,
    ue = !1,
    it = null;
  function qo(e, t) {
    var n = tt(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (Ye = e), (Xe = Mt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Xe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: xt, overflow: Et } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = tt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ye = e),
              (Xe = null),
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
  function Cu(e) {
    if (ue) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!bo(e, t)) {
          if (_u(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = Ye;
          t && bo(e, t) ? qo(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ye = e));
        }
      } else {
        if (_u(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ye = e));
      }
    }
  }
  function es(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ye = e;
  }
  function Zr(e) {
    if (e !== Ye) return !1;
    if (!ue) return (es(e), (ue = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps))),
      t && (t = Xe))
    ) {
      if (_u(e)) throw (ts(), Error(m(418)));
      for (; t;) (qo(e, t), (t = Mt(t.nextSibling)));
    }
    if ((es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Xe = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Xe = null;
      }
    } else Xe = Ye ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Xe; e;) e = Mt(e.nextSibling);
  }
  function En() {
    ((Xe = Ye = null), (ue = !1));
  }
  function Nu(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var Zc = ce.ReactCurrentBatchConfig;
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
  function Jr(e, t) {
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
      return ((f = Qt(f, a)), (f.index = 0), (f.sibling = null), f);
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
      var N = d.type;
      return N === Ne
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === N ||
              (typeof N == "object" && N !== null && N.$$typeof === De && ns(N) === a.type))
          ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
          : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = lr(f, a, d)),
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
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, w, N)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = yi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ie:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case xe:
            return ((a = gi(a, f.mode, d)), (a.return = f), a);
          case De:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (jn(a) || R(a)) return ((a = on(a, f.mode, d, null)), (a.return = f), a);
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return N !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ie:
            return d.key === N ? s(f, a, d, w) : null;
          case xe:
            return d.key === N ? p(f, a, d, w) : null;
          case De:
            return ((N = d._init), h(f, a, N(d._payload), w));
        }
        if (jn(d) || R(d)) return N !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, N) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, N));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ie:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, N));
          case xe:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, N));
          case De:
            var P = w._init;
            return k(f, a, d, P(w._payload), N);
        }
        if (jn(w) || R(w)) return ((f = f.get(d) || null), y(a, f, w, N, null));
        Jr(a, w);
      }
      return null;
    }
    function _(f, a, d, w) {
      for (var N = null, P = null, z = a, O = (a = 0), Ce = null; z !== null && O < d.length; O++) {
        z.index > O ? ((Ce = z), (z = null)) : (Ce = z.sibling);
        var Y = h(f, z, d[O], w);
        if (Y === null) {
          z === null && (z = Ce);
          break;
        }
        (e && z && Y.alternate === null && t(f, z),
          (a = u(Y, a, O)),
          P === null ? (N = Y) : (P.sibling = Y),
          (P = Y),
          (z = Ce));
      }
      if (O === d.length) return (n(f, z), ue && qt(f, O), N);
      if (z === null) {
        for (; O < d.length; O++)
          ((z = g(f, d[O], w)),
            z !== null && ((a = u(z, a, O)), P === null ? (N = z) : (P.sibling = z), (P = z)));
        return (ue && qt(f, O), N);
      }
      for (z = r(f, z); O < d.length; O++)
        ((Ce = k(z, f, O, d[O], w)),
          Ce !== null &&
            (e && Ce.alternate !== null && z.delete(Ce.key === null ? O : Ce.key),
            (a = u(Ce, a, O)),
            P === null ? (N = Ce) : (P.sibling = Ce),
            (P = Ce)));
      return (
        e &&
          z.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ue && qt(f, O),
        N
      );
    }
    function C(f, a, d, w) {
      var N = R(d);
      if (typeof N != "function") throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var P = (N = null), z = a, O = (a = 0), Ce = null, Y = d.next();
        z !== null && !Y.done;
        O++, Y = d.next()
      ) {
        z.index > O ? ((Ce = z), (z = null)) : (Ce = z.sibling);
        var Kt = h(f, z, Y.value, w);
        if (Kt === null) {
          z === null && (z = Ce);
          break;
        }
        (e && z && Kt.alternate === null && t(f, z),
          (a = u(Kt, a, O)),
          P === null ? (N = Kt) : (P.sibling = Kt),
          (P = Kt),
          (z = Ce));
      }
      if (Y.done) return (n(f, z), ue && qt(f, O), N);
      if (z === null) {
        for (; !Y.done; O++, Y = d.next())
          ((Y = g(f, Y.value, w)),
            Y !== null && ((a = u(Y, a, O)), P === null ? (N = Y) : (P.sibling = Y), (P = Y)));
        return (ue && qt(f, O), N);
      }
      for (z = r(f, z); !Y.done; O++, Y = d.next())
        ((Y = k(z, f, O, Y.value, w)),
          Y !== null &&
            (e && Y.alternate !== null && z.delete(Y.key === null ? O : Y.key),
            (a = u(Y, a, O)),
            P === null ? (N = Y) : (P.sibling = Y),
            (P = Y)));
      return (
        e &&
          z.forEach(function (Rf) {
            return t(f, Rf);
          }),
        ue && qt(f, O),
        N
      );
    }
    function he(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Ne &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case Ie:
            e: {
              for (var N = d.key, P = a; P !== null;) {
                if (P.key === N) {
                  if (((N = d.type), N === Ne)) {
                    if (P.tag === 7) {
                      (n(f, P.sibling), (a = l(P, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    P.elementType === N ||
                    (typeof N == "object" && N !== null && N.$$typeof === De && ns(N) === P.type)
                  ) {
                    (n(f, P.sibling),
                      (a = l(P, d.props)),
                      (a.ref = lr(f, P, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, P);
                  break;
                } else t(f, P);
                P = P.sibling;
              }
              d.type === Ne
                ? ((a = on(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = kl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case xe:
            e: {
              for (P = d.key; a !== null;) {
                if (a.key === P)
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
          case De:
            return ((P = d._init), he(f, a, P(d._payload), w));
        }
        if (jn(d)) return _(f, a, d, w);
        if (R(d)) return C(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = yi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return he;
  }
  var _n = rs(!0),
    ls = rs(!1),
    qr = Ft(null),
    br = null,
    Cn = null,
    Pu = null;
  function zu() {
    Pu = Cn = br = null;
  }
  function Lu(e) {
    var t = qr.current;
    (re(qr), (e._currentValue = t));
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
  function Nn(e, t) {
    ((br = e),
      (Pu = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ve = !0), (e.firstContext = null)));
  }
  function qe(e) {
    var t = e._currentValue;
    if (Pu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (br === null) throw Error(m(308));
        ((Cn = e), (br.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Tu(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Tu(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      _t(e, r)
    );
  }
  function _t(e, t) {
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
  function Ct(e, t) {
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
        _t(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Tu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      _t(e, n)
    );
  }
  function el(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
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
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
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
          k = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var _ = e,
              C = o;
            switch (((h = t), (k = n), C.tag)) {
              case 1:
                if (((_ = C.payload), typeof _ == "function")) {
                  g = _.call(k, g, h);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = C.payload), (h = typeof _ == "function" ? _.call(k, g, h) : _), h == null)
                )
                  break e;
                g = E({}, g, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [o]) : h.push(o));
        } else
          ((k = {
            eventTime: k,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = k), (s = g)) : (y = y.next = k),
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
      ((nn |= i), (e.lanes = i), (e.memoizedState = g));
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
    vt = Ft(ur),
    ir = Ft(ur),
    or = Ft(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function ju(e, t) {
    switch ((ee(or, t), ee(ir, e), ee(vt, ur), (e = t.nodeType), e)) {
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
    (re(vt), ee(vt, t));
  }
  function Pn() {
    (re(vt), re(ir), re(or));
  }
  function as(e) {
    en(or.current);
    var t = en(vt.current),
      n = Ml(t, e.type);
    t !== n && (ee(ir, e), ee(vt, n));
  }
  function Mu(e) {
    ir.current === e && (re(vt), re(ir));
  }
  var ie = Ft(0);
  function nl(e) {
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
  var Fu = [];
  function Iu() {
    for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var rl = ce.ReactCurrentDispatcher,
    Du = ce.ReactCurrentBatchConfig,
    tn = 0,
    oe = null,
    Se = null,
    Ee = null,
    ll = !1,
    sr = !1,
    ar = 0,
    Jc = 0;
  function Te() {
    throw Error(m(321));
  }
  function Uu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
    return !0;
  }
  function Au(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? tf : nf),
      (e = n(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (Ee = Se = null), (t.updateQueue = null), (rl.current = rf), (e = n(r, l)));
      } while (sr);
    }
    if (
      ((rl.current = ol),
      (t = Se !== null && Se.next !== null),
      (tn = 0),
      (Ee = Se = oe = null),
      (ll = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ee === null ? (oe.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee);
  }
  function be() {
    if (Se === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = Ee === null ? oe.memoizedState : Ee.next;
    if (t !== null) ((Ee = t), (Se = e));
    else {
      if (e === null) throw Error(m(310));
      ((Se = e),
        (e = {
          memoizedState: Se.memoizedState,
          baseState: Se.baseState,
          baseQueue: Se.baseQueue,
          queue: Se.queue,
          next: null,
        }),
        Ee === null ? (oe.memoizedState = Ee = e) : (Ee = Ee.next = e));
    }
    return Ee;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
    var t = be(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = Se,
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
        if ((tn & y) === y)
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
          (s === null ? ((o = s = g), (i = r)) : (s = s.next = g), (oe.lanes |= y), (nn |= y));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        ut(r, t.memoizedState) || (Ve = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (oe.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hu(e) {
    var t = be(),
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
      (ut(u, t.memoizedState) || (Ve = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function cs() {}
  function fs(e, t) {
    var n = oe,
      r = be(),
      l = t(),
      u = !ut(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ve = !0)),
      (r = r.queue),
      Bu(ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (Ee !== null && Ee.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), fr(9, ps.bind(null, n, r, l, t), void 0, null), _e === null))
        throw Error(m(349));
      (tn & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (oe.updateQueue = t), (t.stores = [e]))
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
      return !ut(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = _t(e, 1);
    t !== null && ct(t, e, 1, -1);
  }
  function ys(e) {
    var t = yt();
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
      (e = e.dispatch = ef.bind(null, oe, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (oe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function gs() {
    return be().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = yt();
    ((oe.flags |= e), (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function il(e, t, n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Se !== null) {
      var i = Se.memoizedState;
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    ((oe.flags |= e), (l.memoizedState = fr(1 | t, n, u, r)));
  }
  function ws(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Bu(e, t) {
    return il(2048, 8, e, t);
  }
  function Ss(e, t) {
    return il(4, 2, e, t);
  }
  function ks(e, t) {
    return il(4, 4, e, t);
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
    return ((n = n != null ? n.concat([e]) : null), il(4, 4, xs.bind(null, t, e), n));
  }
  function $u() {}
  function _s(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Cs(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ns(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n))
      : (ut(n, t) || ((n = to()), (oe.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function qc(e, t) {
    var n = Z;
    ((Z = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Du.transition;
    Du.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Z = n), (Du.transition = r));
    }
  }
  function Ps() {
    return be().memoizedState;
  }
  function bc(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), zs(e)))
      Ls(t, n);
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = Fe();
      (ct(n, e, r, l), Rs(n, t, r));
    }
  }
  function ef(e, t, n) {
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
          if (((l.hasEagerState = !0), (l.eagerState = o), ut(o, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Tu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = us(e, t, l, r)), n !== null && ((l = Fe()), ct(n, e, r, l), Rs(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === oe || (t !== null && t === oe);
  }
  function Ls(e, t) {
    sr = ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n));
    }
  }
  var ol = {
      readContext: qe,
      useCallback: Te,
      useContext: Te,
      useEffect: Te,
      useImperativeHandle: Te,
      useInsertionEffect: Te,
      useLayoutEffect: Te,
      useMemo: Te,
      useReducer: Te,
      useRef: Te,
      useState: Te,
      useDebugValue: Te,
      useDeferredValue: Te,
      useTransition: Te,
      useMutableSource: Te,
      useSyncExternalStore: Te,
      useId: Te,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: qe,
      useCallback: function (e, t) {
        return ((yt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: qe,
      useEffect: ws,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ul(4194308, 4, xs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ul(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ul(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = yt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = yt();
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
          (e = e.dispatch = bc.bind(null, oe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ys,
      useDebugValue: $u,
      useDeferredValue: function (e) {
        return (yt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return ((e = qc.bind(null, e[1])), (yt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = oe,
          l = yt();
        if (ue) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), _e === null)) throw Error(m(349));
          (tn & 30) !== 0 || ds(r, t, n);
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
        var e = yt(),
          t = _e.identifierPrefix;
        if (ue) {
          var n = Et,
            r = xt;
          ((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Jc++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: qe,
      useCallback: _s,
      useContext: qe,
      useEffect: Bu,
      useImperativeHandle: Es,
      useInsertionEffect: Ss,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: Wu,
      useRef: gs,
      useState: function () {
        return Wu(cr);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var t = be();
        return Ns(t, Se.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(cr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: qe,
      useCallback: _s,
      useContext: qe,
      useEffect: Bu,
      useImperativeHandle: Es,
      useInsertionEffect: Ss,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: Hu,
      useRef: gs,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: $u,
      useDeferredValue: function (e) {
        var t = be();
        return Se === null ? (t.memoizedState = e) : Ns(t, Se.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = E({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Qu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : E({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        l = Bt(e),
        u = Ct(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ct(t, e, l, r), el(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        l = Bt(e),
        u = Ct(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ct(t, e, l, r), el(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Fe(),
        r = Bt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ct(t, e, r, n), el(t, e, r)));
    },
  };
  function Ts(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function Os(e, t, n) {
    var r = !1,
      l = It,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = qe(u))
        : ((l = Ae(t) ? Zt : Re.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? Sn(e, l) : It)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function js(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && sl.enqueueReplaceState(t, t.state, null));
  }
  function Ku(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ou(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = qe(u))
      : ((u = Ae(t) ? Zt : Re.current), (l.context = Sn(e, u))),
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
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Q(r)), (r = r.return));
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
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ms(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (hl || ((hl = !0), (ai = r)), Xu(e, t));
      }),
      n
    );
  }
  function Fs(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3));
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
            typeof r != "function" && (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Is(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new lf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = wf.bind(null, e, t, n)), t.then(e, e));
  }
  function Ds(e) {
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
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var uf = ce.ReactCurrentOwner,
    Ve = !1;
  function Me(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : _n(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = Au(e, t, n, r, u, l)),
      (n = Vu()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (ue && n && xu(t), (t.flags |= 1), Me(e, t, r, l), t.child)
    );
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !vi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Ws(e, t, u, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref))
        return Nt(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else return ((t.lanes = e.lanes), Nt(e, t, l));
    }
    return Gu(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ee(Rn, Ge),
          (Ge |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ee(Rn, Ge),
            (Ge |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          ee(Rn, Ge),
          (Ge |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ee(Rn, Ge),
        (Ge |= r));
    return (Me(e, t, l, n), t.child);
  }
  function Bs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Gu(e, t, n, r, l) {
    var u = Ae(n) ? Zt : Re.current;
    return (
      (u = Sn(t, u)),
      Nn(t, l),
      (n = Au(e, t, n, r, u, l)),
      (r = Vu()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (ue && r && xu(t), (t.flags |= 1), Me(e, t, n, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (Ae(n)) {
      var u = !0;
      Kr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (cl(e, t), Os(t, n, r), Ku(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = qe(p))
        : ((p = Ae(n) ? Zt : Re.current), (p = Sn(t, p)));
      var y = n.getDerivedStateFromProps,
        g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && js(t, i, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((i.state = h),
        tl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || Ue.current || Ut
          ? (typeof y == "function" && (Qu(t, n, y, r), (s = t.memoizedState)),
            (o = Ut || Ts(t, n, o, r, h, s, p))
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
        (p = t.type === t.elementType ? o : ot(t.type, o)),
        (i.props = p),
        (g = t.pendingProps),
        (h = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = qe(s))
          : ((s = Ae(n) ? Zt : Re.current), (s = Sn(t, s))));
      var k = n.getDerivedStateFromProps;
      ((y = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && js(t, i, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (i.state = h),
        tl(t, r, i, l));
      var _ = t.memoizedState;
      o !== g || h !== _ || Ue.current || Ut
        ? (typeof k == "function" && (Qu(t, n, k, r), (_ = t.memoizedState)),
          (p = Ut || Ts(t, n, p, r, h, _, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, _, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, _, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (i.props = r),
          (i.state = _),
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
    return Zu(e, t, n, r, u, l);
  }
  function Zu(e, t, n, r, l, u) {
    Bs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Go(t, n, !1), Nt(e, t, u));
    ((r = t.stateNode), (uf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = _n(t, e.child, null, u)), (t.child = _n(t, null, o, u)))
        : Me(e, t, o, u),
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
      ju(e, t.containerInfo));
  }
  function Ks(e, t, n, r, l) {
    return (En(), Nu(l), (t.flags |= 256), Me(e, t, n, r), t.child);
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = ie.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ee(ie, l & 1),
      e === null)
    )
      return (
        Cu(t),
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
                  : (u = xl(i, r, 0, null)),
                (e = on(e, r, n, null)),
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
      return of(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qt(o, u)) : ((u = on(u, i, n, null)), (u.flags |= 2)),
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
      (r = Qt(u, { mode: "visible", children: r.children })),
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
      (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Nu(r),
      _n(t, e.child, null, n),
      (e = bu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function of(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Yu(Error(m(422)))), al(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, i),
            (t.child.memoizedState = qu(i)),
            (t.memoizedState = Ju),
            u);
    if ((t.mode & 1) === 0) return al(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), al(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Ve || o)) {
      if (((r = _e), r !== null)) {
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), _t(e, l), ct(r, e, l, -1)));
      }
      return (hi(), (r = Yu(Error(m(421)))), al(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Sf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Xe = Mt(l.nextSibling)),
        (Ye = t),
        (ue = !0),
        (it = null),
        e !== null &&
          ((Ze[Je++] = xt),
          (Ze[Je++] = Et),
          (Ze[Je++] = Jt),
          (xt = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = bu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ru(e.return, t, n));
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
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Me(e, t, r.children, n), (r = ie.current), (r & 2) !== 0))
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
    if ((ee(ie, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && nl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ei(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
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
  function cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Nt(e, t, n) {
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
  function sf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Qs(t), En());
        break;
      case 5:
        as(t);
        break;
      case 1:
        Ae(t.type) && Kr(t);
        break;
      case 4:
        ju(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ee(qr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ee(ie, ie.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ys(e, t, n)
              : (ee(ie, ie.current & 1), (e = Nt(e, t, n)), e !== null ? e.sibling : null);
        ee(ie, ie.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ee(ie, ie.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Hs(e, t, n));
    }
    return Nt(e, t, n);
  }
  var Zs, ti, Js, qs;
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
    (ti = function () {}),
    (Js = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(vt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (u = []));
            break;
          case "select":
            ((l = E({}, l, { value: void 0 })), (r = E({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = jl(e, l)), (r = jl(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Br);
        }
        Fl(n, r);
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
                (A.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (A.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && ne("scroll", e), u || o === s || (u = []))
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
    if (!ue)
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
  function Oe(e) {
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
  function af(e, t, n) {
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
        return (Oe(t), null);
      case 1:
        return (Ae(t.type) && Qr(), Oe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          re(Ue),
          re(Re),
          Iu(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (di(it), (it = null)))),
          ti(e, t),
          Oe(t),
          null
        );
      case 5:
        Mu(t);
        var l = en(or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Js(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Oe(t), null);
          }
          if (((e = en(vt.current)), Zr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[ht] = t), (r[nr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ne("cancel", r), ne("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) ne(bn[l], r);
                break;
              case "source":
                ne("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ne("error", r), ne("load", r));
                break;
              case "details":
                ne("toggle", r);
                break;
              case "input":
                (Ti(r, u), ne("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), ne("invalid", r));
                break;
              case "textarea":
                (Mi(r, u), ne("invalid", r));
            }
            (Fl(n, u), (l = null));
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
                  : A.hasOwnProperty(i) && o != null && i === "onScroll" && ne("scroll", r);
              }
            switch (n) {
              case "input":
                (wr(r), ji(r, u, !0));
                break;
              case "textarea":
                (wr(r), Ii(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Br);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Di(n)),
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
              (e[ht] = t),
              (e[nr] = r),
              Zs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Il(n, r)), n)) {
                case "dialog":
                  (ne("cancel", e), ne("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ne("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) ne(bn[l], e);
                  l = r;
                  break;
                case "source":
                  (ne("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ne("error", e), ne("load", e), (l = r));
                  break;
                case "details":
                  (ne("toggle", e), (l = r));
                  break;
                case "input":
                  (Ti(e, r), (l = Rl(e, r)), ne("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    ne("invalid", e));
                  break;
                case "textarea":
                  (Mi(e, r), (l = jl(e, r)), ne("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Vi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Ui(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Mn(e, s)
                          : typeof s == "number" && Mn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (A.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && ne("scroll", e)
                            : s != null && ye(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (wr(e), ji(e, r, !1));
                  break;
                case "textarea":
                  (wr(e), Ii(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + G(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Br);
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
        return (Oe(t), null);
      case 6:
        if (e && t.stateNode != null) qs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(or.current)), en(vt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[ht] = t),
              (u = r.nodeValue !== n) && ((e = Ye), e !== null))
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
              (r[ht] = t),
              (t.stateNode = r));
        }
        return (Oe(t), null);
      case 13:
        if (
          (re(ie),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && Xe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ts(), En(), (t.flags |= 98560), (u = !1));
          else if (((u = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[ht] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Oe(t), (u = !1));
          } else (it !== null && (di(it), (it = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ie.current & 1) !== 0 ? ke === 0 && (ke = 3) : hi())),
            t.updateQueue !== null && (t.flags |= 4),
            Oe(t),
            null);
      case 4:
        return (Pn(), ti(e, t), e === null && er(t.stateNode.containerInfo), Oe(t), null);
      case 10:
        return (Lu(t.type._context), Oe(t), null);
      case 17:
        return (Ae(t.type) && Qr(), Oe(t), null);
      case 19:
        if ((re(ie), (u = t.memoizedState), u === null)) return (Oe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = nl(e)), i !== null)) {
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
                  return (ee(ie, (ie.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              me() > Tn &&
              ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ue)
              )
                return (Oe(t), null);
            } else
              2 * me() - u.renderingStartTime > Tn &&
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
            (u.renderingStartTime = me()),
            (t.sibling = null),
            (n = ie.current),
            ee(ie, r ? (n & 1) | 2 : n & 1),
            t)
          : (Oe(t), null);
      case 22:
      case 23:
        return (
          mi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ge & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Oe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function cf(e, t) {
    switch ((Eu(t), t.tag)) {
      case 1:
        return (
          Ae(t.type) && Qr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          re(Ue),
          re(Re),
          Iu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Mu(t), null);
      case 13:
        if ((re(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (re(ie), null);
      case 4:
        return (Pn(), null);
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
  var fl = !1,
    je = !1,
    ff = typeof WeakSet == "function" ? WeakSet : Set,
    x = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          de(e, t, r);
        }
      else n.current = null;
  }
  function ni(e, t, n) {
    try {
      n();
    } catch (r) {
      de(e, t, r);
    }
  }
  var bs = !1;
  function df(e, t) {
    if (((mu = Tr), (e = To()), iu(e))) {
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
                var k;
                g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (k = g.firstChild) !== null;
              )
                ((h = g), (g = k));
              for (;;) {
                if (g === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (k = g.nextSibling) !== null)
                )
                  break;
                ((g = h), (h = g.parentNode));
              }
              g = k;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (hu = { focusedElem: e, selectionRange: n }, Tr = !1, x = t; x !== null;)
      if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (x = e));
      else
        for (; x !== null;) {
          t = x;
          try {
            var _ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps,
                      he = _.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? C : ot(t.type, C),
                        he,
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
            de(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (x = e));
            break;
          }
          x = t.return;
        }
    return ((_ = bs), (bs = !1), _);
  }
  function pr(e, t, n) {
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
  function dl(e, t) {
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
  function ea(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ea(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[ht], delete t[nr], delete t[wu], delete t[Yc], delete t[Xc])),
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
            n != null || t.onclick !== null || (t.onclick = Br)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, t, n), e = e.sibling; e !== null;) (li(e, t, n), (e = e.sibling));
  }
  function ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, t, n), e = e.sibling; e !== null;) (ui(e, t, n), (e = e.sibling));
  }
  var ze = null,
    st = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (ra(e, t, n), (n = n.sibling));
  }
  function ra(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Cr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        je || Ln(n, t);
      case 6:
        var r = ze,
          l = st;
        ((ze = null),
          Vt(e, t, n),
          (ze = r),
          (st = l),
          ze !== null &&
            (st
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ze.removeChild(n.stateNode)));
        break;
      case 18:
        ze !== null &&
          (st
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? gu(e.parentNode, n) : e.nodeType === 1 && gu(e, n),
              Qn(e))
            : gu(ze, n.stateNode));
        break;
      case 4:
        ((r = ze),
          (l = st),
          (ze = n.stateNode.containerInfo),
          (st = !0),
          Vt(e, t, n),
          (ze = r),
          (st = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ni(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!je && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            de(n, t, o);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((je = (r = je) || n.memoizedState !== null), Vt(e, t, n), (je = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new ff()),
        t.forEach(function (r) {
          var l = kf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function at(e, t) {
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
                ((ze = o.stateNode), (st = !1));
                break e;
              case 3:
                ((ze = o.stateNode.containerInfo), (st = !0));
                break e;
              case 4:
                ((ze = o.stateNode.containerInfo), (st = !0));
                break e;
            }
            o = o.return;
          }
          if (ze === null) throw Error(m(160));
          (ra(u, i, l), (ze = null), (st = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          de(l, t, p);
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
        if ((at(t, e), gt(e), r & 4)) {
          try {
            (pr(3, e, e.return), dl(3, e));
          } catch (C) {
            de(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            de(e, e.return, C);
          }
        }
        break;
      case 1:
        (at(t, e), gt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((at(t, e), gt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Mn(l, "");
          } catch (C) {
            de(e, e.return, C);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Oi(l, u), Il(o, i));
              var p = Il(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Vi(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Ui(l, g)
                    : y === "children"
                      ? Mn(l, g)
                      : ye(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Tl(l, u);
                  break;
                case "textarea":
                  Fi(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null
                    ? sn(l, !!u.multiple, k, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (C) {
              de(e, e.return, C);
            }
        }
        break;
      case 6:
        if ((at(t, e), gt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (C) {
            de(e, e.return, C);
          }
        }
        break;
      case 3:
        if ((at(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Qn(t.containerInfo);
          } catch (C) {
            de(e, e.return, C);
          }
        break;
      case 4:
        (at(t, e), gt(e));
        break;
      case 13:
        (at(t, e),
          gt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (si = me())),
          r & 4 && la(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((je = (p = je) || y), at(t, e), (je = p)) : at(t, e),
          gt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (x = e, y = e.child; y !== null;) {
              for (g = x = y; x !== null;) {
                switch (((h = x), (k = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    Ln(h, h.return);
                    var _ = h.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (_.props = t.memoizedProps),
                          (_.state = t.memoizedState),
                          _.componentWillUnmount());
                      } catch (C) {
                        de(r, n, C);
                      }
                    }
                    break;
                  case 5:
                    Ln(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      sa(g);
                      continue;
                    }
                }
                k !== null ? ((k.return = h), (x = k)) : sa(g);
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
                } catch (C) {
                  de(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (C) {
                  de(e, e.return, C);
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
        (at(t, e), gt(e), r & 4 && la(e));
        break;
      case 21:
        break;
      default:
        (at(t, e), gt(e));
    }
  }
  function gt(e) {
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
            ui(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            li(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        de(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pf(e, t, n) {
    ((x = e), ia(e));
  }
  function ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null;) {
      var l = x,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || je;
          o = fl;
          var p = je;
          if (((fl = i), (je = s) && !p))
            for (x = l; x !== null;)
              ((i = x),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? aa(l)
                  : s !== null
                    ? ((s.return = i), (x = s))
                    : aa(l));
          for (; u !== null;) ((x = u), ia(u), (u = u.sibling));
          ((x = l), (fl = o), (je = p));
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
                je || dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !je)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
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
          je || (t.flags & 512 && ri(t));
        } catch (h) {
          de(t, t.return, h);
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
              dl(4, t);
            } catch (s) {
              de(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                de(t, l, s);
              }
            }
            var u = t.return;
            try {
              ri(t);
            } catch (s) {
              de(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ri(t);
            } catch (s) {
              de(t, i, s);
            }
        }
      } catch (s) {
        de(t, t.return, s);
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
  var mf = Math.ceil,
    pl = ce.ReactCurrentDispatcher,
    ii = ce.ReactCurrentOwner,
    et = ce.ReactCurrentBatchConfig,
    H = 0,
    _e = null,
    ge = null,
    Le = 0,
    Ge = 0,
    Rn = Ft(0),
    ke = 0,
    mr = null,
    nn = 0,
    ml = 0,
    oi = 0,
    hr = null,
    We = null,
    si = 0,
    Tn = 1 / 0,
    Pt = null,
    hl = !1,
    ai = null,
    Wt = null,
    vl = !1,
    Ht = null,
    yl = 0,
    vr = 0,
    ci = null,
    gl = -1,
    wl = 0;
  function Fe() {
    return (H & 6) !== 0 ? me() : gl !== -1 ? gl : (gl = me());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && Le !== 0
        ? Le & -Le
        : Zc.transition !== null
          ? (wl === 0 && (wl = to()), wl)
          : ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : co(e.type))), e);
  }
  function ct(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (ci = null), Error(m(185)));
    (Vn(e, n, r),
      ((H & 2) === 0 || e !== _e) &&
        (e === _e && ((H & 2) === 0 && (ml |= n), ke === 4 && $t(e, Le)),
        He(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Tn = me() + 500), Yr && Dt())));
  }
  function He(e, t) {
    var n = e.callbackNode;
    Za(e, t);
    var r = zr(e, e === _e ? Le : 0);
    if (r === 0) (n !== null && qi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && qi(n), t === 1))
        (e.tag === 0 ? Gc(fa.bind(null, e)) : Zo(fa.bind(null, e)),
          Qc(function () {
            (H & 6) === 0 && Dt();
          }),
          (n = null));
      else {
        switch (no(r)) {
          case 1:
            n = Bl;
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
    if (((gl = -1), (wl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = zr(e, e === _e ? Le : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var u = pa();
      (_e !== e || Le !== t) && ((Pt = null), (Tn = me() + 500), ln(e, t));
      do
        try {
          yf();
          break;
        } catch (o) {
          da(e, o);
        }
      while (!0);
      (zu(), (pl.current = u), (H = l), ge !== null ? (t = 0) : ((_e = null), (Le = 0), (t = ke)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = $l(e)), l !== 0 && ((r = l), (t = fi(e, l)))), t === 1))
        throw ((n = mr), ln(e, 0), $t(e, r), He(e, me()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !hf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = $l(e)), u !== 0 && ((r = u), (t = fi(e, u)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), $t(e, r), He(e, me()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, We, Pt);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = si + 500 - me()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Fe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = yu(un.bind(null, e, We, Pt), t);
              break;
            }
            un(e, We, Pt);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - lt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = me() - r),
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
                            : 1960 * mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(un.bind(null, e, We, Pt), r);
              break;
            }
            un(e, We, Pt);
            break;
          case 5:
            un(e, We, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (He(e, me()), e.callbackNode === n ? ca.bind(null, e) : null);
  }
  function fi(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = We), (We = n), t !== null && di(t)),
      e
    );
  }
  function di(e) {
    We === null ? (We = e) : We.push.apply(We, e);
  }
  function hf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!ut(u(), l)) return !1;
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
  function $t(e, t) {
    for (
      t &= ~oi, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - lt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function fa(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    On();
    var t = zr(e, 0);
    if ((t & 1) === 0) return (He(e, me()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $l(e);
      r !== 0 && ((t = r), (n = fi(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), $t(e, t), He(e, me()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, We, Pt),
      He(e, me()),
      null
    );
  }
  function pi(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Tn = me() + 500), Yr && Dt()));
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && (H & 6) === 0 && On();
    var t = H;
    H |= 1;
    var n = et.transition,
      r = Z;
    try {
      if (((et.transition = null), (Z = 1), e)) return e();
    } finally {
      ((Z = r), (et.transition = n), (H = t), (H & 6) === 0 && Dt());
    }
  }
  function mi() {
    ((Ge = Rn.current), re(Rn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $c(n)), ge !== null))
      for (n = ge.return; n !== null;) {
        var r = n;
        switch ((Eu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Qr());
            break;
          case 3:
            (Pn(), re(Ue), re(Re), Iu());
            break;
          case 5:
            Mu(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            re(ie);
            break;
          case 19:
            re(ie);
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
      ((_e = e),
      (ge = e = Qt(e.current, null)),
      (Le = Ge = t),
      (ke = 0),
      (mr = null),
      (oi = ml = nn = 0),
      (We = hr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function da(e, t) {
    do {
      var n = ge;
      try {
        if ((zu(), (rl.current = ol), ll)) {
          for (var r = oe.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ll = !1;
        }
        if (
          ((tn = 0),
          (Ee = Se = oe = null),
          (sr = !1),
          (ar = 0),
          (ii.current = null),
          n === null || n.return === null)
        ) {
          ((ke = 1), (mr = t), (ge = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = Le),
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
            var k = Ds(i);
            if (k !== null) {
              ((k.flags &= -257), Us(k, i, o, u, t), k.mode & 1 && Is(u, p, t), (t = k), (s = p));
              var _ = t.updateQueue;
              if (_ === null) {
                var C = new Set();
                (C.add(s), (t.updateQueue = C));
              } else _.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Is(u, p, t), hi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ue && o.mode & 1) {
            var he = Ds(i);
            if (he !== null) {
              ((he.flags & 65536) === 0 && (he.flags |= 256), Us(he, i, o, u, t), Nu(zn(s, o)));
              break e;
            }
          }
          ((u = s = zn(s, o)),
            ke !== 4 && (ke = 2),
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
                  var w = Fs(u, o, t);
                  os(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha(n);
      } catch (N) {
        ((t = N), ge === n && n !== null && (ge = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = pl.current;
    return ((pl.current = ol), e === null ? ol : e);
  }
  function hi() {
    ((ke === 0 || ke === 3 || ke === 2) && (ke = 4),
      _e === null || ((nn & 268435455) === 0 && (ml & 268435455) === 0) || $t(_e, Le));
  }
  function Sl(e, t) {
    var n = H;
    H |= 2;
    var r = pa();
    (_e !== e || Le !== t) && ((Pt = null), ln(e, t));
    do
      try {
        vf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if ((zu(), (H = n), (pl.current = r), ge !== null)) throw Error(m(261));
    return ((_e = null), (Le = 0), ke);
  }
  function vf() {
    for (; ge !== null;) ma(ge);
  }
  function yf() {
    for (; ge !== null && !Wa();) ma(ge);
  }
  function ma(e) {
    var t = ga(e.alternate, e, Ge);
    ((e.memoizedProps = e.pendingProps), t === null ? ha(e) : (ge = t), (ii.current = null));
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = af(n, t, Ge)), n !== null)) {
          ge = n;
          return;
        }
      } else {
        if (((n = cf(n, t)), n !== null)) {
          ((n.flags &= 32767), (ge = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ke = 6), (ge = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function un(e, t, n) {
    var r = Z,
      l = et.transition;
    try {
      ((et.transition = null), (Z = 1), gf(e, t, n, r));
    } finally {
      ((et.transition = l), (Z = r));
    }
    return null;
  }
  function gf(e, t, n, r) {
    do On();
    while (Ht !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (Ja(e, u),
      e === _e && ((ge = _e = null), (Le = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        vl ||
        ((vl = !0),
        wa(_r, function () {
          return (On(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = et.transition), (et.transition = null));
      var i = Z;
      Z = 1;
      var o = H;
      ((H |= 4),
        (ii.current = null),
        df(e, n),
        ua(n, e),
        Dc(hu),
        (Tr = !!mu),
        (hu = mu = null),
        (e.current = n),
        pf(n),
        Ha(),
        (H = o),
        (Z = i),
        (et.transition = u));
    } else e.current = n;
    if (
      (vl && ((vl = !1), (Ht = e), (yl = l)),
      (u = e.pendingLanes),
      u === 0 && (Wt = null),
      Qa(n.stateNode),
      He(e, me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (hl) throw ((hl = !1), (e = ai), (ai = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && On(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === ci ? vr++ : ((vr = 0), (ci = e))) : (vr = 0),
      Dt(),
      null
    );
  }
  function On() {
    if (Ht !== null) {
      var e = no(yl),
        t = et.transition,
        n = Z;
      try {
        if (((et.transition = null), (Z = 16 > e ? 16 : e), Ht === null)) var r = !1;
        else {
          if (((e = Ht), (Ht = null), (yl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, x = e.current; x !== null;) {
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
                          k = y.return;
                        if ((ea(y), y === p)) {
                          x = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = k), (x = h));
                          break;
                        }
                        x = k;
                      }
                  }
                }
                var _ = u.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var he = C.sibling;
                      ((C.sibling = null), (C = he));
                    } while (C !== null);
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
                        dl(9, o);
                    }
                  } catch (N) {
                    de(o, o.return, N);
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
          if (((H = l), Dt(), mt && typeof mt.onPostCommitFiberRoot == "function"))
            try {
              mt.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Z = n), (et.transition = t));
      }
    }
    return !1;
  }
  function va(e, t, n) {
    ((t = zn(n, t)),
      (t = Ms(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Fe()),
      e !== null && (Vn(e, 1, t), He(e, t)));
  }
  function de(e, t, n) {
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
            ((e = zn(n, e)),
              (e = Fs(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Fe()),
              t !== null && (Vn(t, 1, e), He(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function wf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Fe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _e === e &&
        (Le & n) === n &&
        (ke === 4 || (ke === 3 && (Le & 130023424) === Le && 500 > me() - si)
          ? ln(e, 0)
          : (oi |= n)),
      He(e, t));
  }
  function ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Fe();
    ((e = _t(e, t)), e !== null && (Vn(e, t, n), He(e, n)));
  }
  function Sf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ya(e, n));
  }
  function kf(e, t) {
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
      if (e.memoizedProps !== t.pendingProps || Ue.current) Ve = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ve = !1), sf(e, t, n));
        Ve = (e.flags & 131072) !== 0;
      }
    else ((Ve = !1), ue && (t.flags & 1048576) !== 0 && Jo(t, Gr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (cl(e, t), (e = t.pendingProps));
        var l = Sn(t, Re.current);
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
              Ae(r) ? ((u = !0), Kr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(t),
              (l.updater = sl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ku(t, r, e, n),
              (t = Zu(null, t, r, !0, u, n)))
            : ((t.tag = 0), ue && u && xu(t), Me(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ef(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = Gu(null, t, r, e, n);
              break e;
            case 1:
              t = $s(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Gu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          $s(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Qs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            is(e, t),
            tl(t, r, null, n));
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
              ((l = zn(Error(m(423)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else
              for (
                Xe = Mt(t.stateNode.containerInfo.firstChild),
                  Ye = t,
                  ue = !0,
                  it = null,
                  n = ls(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
              t = Nt(e, t, n);
              break e;
            }
            Me(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          as(t),
          e === null && Cu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          vu(r, l) ? (i = null) : u !== null && vu(r, u) && (t.flags |= 32),
          Bs(e, t),
          Me(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Cu(t), null);
      case 13:
        return Ys(e, t, n);
      case 4:
        return (
          ju(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Me(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          As(e, t, r, l, n)
        );
      case 7:
        return (Me(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Me(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Me(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            ee(qr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (ut(u.value, i)) {
              if (u.children === l.children && !Ue.current) {
                t = Nt(e, t, n);
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
                        ((s = Ct(-1, n & -n)), (s.tag = 2));
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
          (Me(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = qe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Me(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ot(r, t.pendingProps)), (l = ot(r.type, l)), Vs(e, t, r, l, n));
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          cl(e, t),
          (t.tag = 1),
          Ae(r) ? ((e = !0), Kr(t)) : (e = !1),
          Nn(t, n),
          Os(t, r, l),
          Ku(t, r, l, n),
          Zu(null, t, r, !0, e, n)
        );
      case 19:
        return Gs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return Ji(e, t);
  }
  function xf(e, t, n, r) {
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
  function tt(e, t, n, r) {
    return new xf(e, t, n, r);
  }
  function vi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ef(e) {
    if (typeof e == "function") return vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === dt)) return 11;
      if (e === pt) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = tt(e.tag, t, e.key, e.mode)),
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
  function kl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) vi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Ne:
          return on(n.children, l, u, t);
        case Pe:
          ((i = 8), (l |= 8));
          break;
        case nt:
          return ((e = tt(12, n, t, l | 2)), (e.elementType = nt), (e.lanes = u), e);
        case $e:
          return ((e = tt(13, n, t, l)), (e.elementType = $e), (e.lanes = u), e);
        case rt:
          return ((e = tt(19, n, t, l)), (e.elementType = rt), (e.lanes = u), e);
        case fe:
          return xl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wt:
                i = 10;
                break e;
              case Yt:
                i = 9;
                break e;
              case dt:
                i = 11;
                break e;
              case pt:
                i = 14;
                break e;
              case De:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function on(e, t, n, r) {
    return ((e = tt(7, e, r, t)), (e.lanes = n), e);
  }
  function xl(e, t, n, r) {
    return (
      (e = tt(22, e, r, t)),
      (e.elementType = fe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, t, n) {
    return ((e = tt(6, e, null, t)), (e.lanes = n), e);
  }
  function gi(e, t, n) {
    return (
      (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function _f(e, t, n, r, l) {
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
  function wi(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new _f(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = tt(3, null, null, t)),
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
  function Cf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: xe,
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
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
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
      if (Ae(n)) return Xo(e, n, t);
    }
    return t;
  }
  function ka(e, t, n, r, l, u, i, o, s) {
    return (
      (e = wi(n, r, !0, e, l, u, i, o, s)),
      (e.context = Sa(null)),
      (n = e.current),
      (r = Fe()),
      (l = Bt(n)),
      (u = Ct(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      He(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      u = Fe(),
      i = Bt(l);
    return (
      (n = Sa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (ct(e, l, i, u), el(e, l, i)),
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
  function Nf() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ki(e) {
    this._internalRoot = e;
  }
  ((Cl.prototype.render = ki.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      El(e, t, null, null);
    }),
    (Cl.prototype.unmount = ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            El(null, e, null, null);
          }),
            (t[St] = null));
        }
      }));
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && so(e));
    }
  };
  function xi(e) {
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
  function _a() {}
  function Pf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = ka(t, r, e, 0, null, !1, !1, "", _a);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rn(),
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
    var s = wi(e, 0, !1, null, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        El(t, s, n, r);
      }),
      s
    );
  }
  function Pl(e, t, n, r, l) {
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
      El(t, i, e, l);
    } else i = Pf(n, t, e, l, r);
    return _l(i);
  }
  ((ro = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Kl(t, n | 1), He(t, me()), (H & 6) === 0 && ((Tn = me() + 500), Dt()));
        }
        break;
      case 13:
        (rn(function () {
          var r = _t(e, 1);
          if (r !== null) {
            var l = Fe();
            ct(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Fe();
          ct(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (lo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = _t(e, t);
        if (n !== null) {
          var r = Fe();
          ct(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (uo = function () {
      return Z;
    }),
    (io = function (e, t) {
      var n = Z;
      try {
        return ((Z = e), t());
      } finally {
        Z = n;
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
                var l = $r(r);
                if (!l) throw Error(m(90));
                (Ri(r), Tl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    ($i = pi),
    (Qi = rn));
  var zf = { usingClientEntryPoint: !1, Events: [rr, gn, $r, Hi, Bi, pi] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Lf = {
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
      currentDispatcherRef: ce.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Gi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Nf,
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
        ((Cr = zl.inject(Lf)), (mt = zl));
      } catch {}
  }
  return (
    (Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf),
    (Be.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xi(t)) throw Error(m(200));
      return Cf(e, t, null, n);
    }),
    (Be.createRoot = function (e, t) {
      if (!xi(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Ea;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = wi(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new ki(t)
      );
    }),
    (Be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Gi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Be.flushSync = function (e) {
      return rn(e);
    }),
    (Be.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Pl(null, e, t, !0, n);
    }),
    (Be.hydrateRoot = function (e, t, n) {
      if (!xi(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ea;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = ka(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[St] = t.current),
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
      return new Cl(t);
    }),
    (Be.render = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Pl(null, e, t, !1, n);
    }),
    (Be.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[St] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Be.unstable_batchedUpdates = pi),
    (Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, t, n, !1, r);
    }),
    (Be.version = "18.3.1-next-f1338f8080-20240426"),
    Be
  );
}
var Oa;
function Df() {
  if (Oa) return Ci.exports;
  Oa = 1;
  function L() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (F) {
        console.error(F);
      }
  }
  return (L(), (Ci.exports = If()), Ci.exports);
}
var ja;
function Uf() {
  if (ja) return Ll;
  ja = 1;
  var L = Df();
  return ((Ll.createRoot = L.createRoot), (Ll.hydrateRoot = L.hydrateRoot), Ll);
}
var Af = Uf();
const Vf =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4",
  Wf =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260507_181851_f7a6e930-087d-4ce3-978d-f982e804b7df.png&w=1280&q=85",
  Hf = 960,
  Bf = 30;
function $f(L, F, m, ve, A, B) {
  const te = F.width,
    T = F.height,
    j = (A * ve) / B,
    J = te / T;
  let q, $, I, se;
  J > j
    ? ((se = T), (I = T * j), ($ = 0), (q = (te - I) / 2))
    : ((I = te), (se = te / j), (q = 0), ($ = (T - se) / 2));
  const ae = I / ve,
    X = q + ae * m;
  L.drawImage(F, X, $, ae, se, 0, 0, A, B);
}
function zi({ className: L, color: F }) {
  return W.jsx("div", {
    className: `absolute pointer-events-none z-10 rounded-full mix-blend-screen blur-[20px] ${L}`,
    style: { background: `radial-gradient(circle, ${F} 0%, transparent 70%)` },
    "aria-hidden": !0,
  });
}
function Qf() {
  const L = ft.useRef(null),
    F = [ft.useRef(null), ft.useRef(null), ft.useRef(null)],
    m = ft.useRef([]),
    [ve, A] = ft.useState(!1),
    [B, te] = ft.useState(1);
  return (
    ft.useEffect(() => {
      const T = window.matchMedia("(min-width: 640px)"),
        j = () => te(T.matches ? 3 : 1);
      return (j(), T.addEventListener("change", j), () => T.removeEventListener("change", j));
    }, []),
    ft.useEffect(() => {
      const T = L.current;
      if (!T) return;
      const j = [];
      let J = !0,
        q = -1;
      const $ = () => {
          if (!J || T.readyState < 2 || T.currentTime === q) return;
          q = T.currentTime;
          const ye = T.videoWidth,
            ce = T.videoHeight;
          if (!ye || !ce) return;
          const Ie = Math.min(1, Hf / ye),
            xe = Math.round(ye * Ie),
            Ne = Math.round(ce * Ie),
            Pe = document.createElement("canvas");
          ((Pe.width = xe), (Pe.height = Ne));
          const nt = Pe.getContext("2d");
          nt && (nt.drawImage(T, 0, 0, xe, Ne), j.push(Pe));
        },
        I = T,
        se = typeof I.requestVideoFrameCallback == "function";
      let ae = 0;
      const X = () => {
          ($(), J && (ae = requestAnimationFrame(X)));
        },
        V = () => {
          ($(), J && I.requestVideoFrameCallback && I.requestVideoFrameCallback(V));
        },
        pe = () => {
          ((J = !1), j.length > 0 && ((m.current = j), A(!0)));
        },
        we = () => {
          (T.play().catch(() => {}),
            se ? I.requestVideoFrameCallback(V) : (ae = requestAnimationFrame(X)));
        };
      return (
        T.addEventListener("loadedmetadata", we),
        T.addEventListener("ended", pe),
        T.readyState >= 1 && we(),
        () => {
          ((J = !1),
            cancelAnimationFrame(ae),
            T.removeEventListener("loadedmetadata", we),
            T.removeEventListener("ended", pe));
        }
      );
    }, []),
    ft.useEffect(() => {
      if (!ve) return;
      const T = m.current;
      if (T.length === 0) return;
      let j = 0,
        J = 1,
        q = performance.now();
      const $ = 1e3 / Bf;
      let I = 0;
      const se = (ae) => {
        if (ae - q >= $) {
          q = ae;
          const X = T[j];
          for (let V = 0; V < B; V++) {
            const pe = F[V].current;
            if (!pe) continue;
            const we = pe.clientWidth,
              ye = pe.clientHeight;
            if (!we || !ye) continue;
            (pe.width !== we || pe.height !== ye) && ((pe.width = we), (pe.height = ye));
            const ce = pe.getContext("2d");
            ce && $f(ce, X, V, B, we, ye);
          }
          ((j += J),
            j >= T.length - 1 ? ((j = T.length - 1), (J = -1)) : j <= 0 && ((j = 0), (J = 1)));
        }
        I = requestAnimationFrame(se);
      };
      return ((I = requestAnimationFrame(se)), () => cancelAnimationFrame(I));
    }, [ve, B]),
    W.jsxs(W.Fragment, {
      children: [
        W.jsx("video", {
          ref: L,
          src: Vf,
          muted: !0,
          playsInline: !0,
          preload: "auto",
          className: "pointer-events-none absolute h-px w-px opacity-0",
          style: { left: -9999, top: -9999 },
        }),
        W.jsxs("div", {
          className: "flex min-h-0 flex-1 gap-2 p-2 lg:p-5",
          children: [
            W.jsxs("div", {
              className: "relative flex-1 overflow-hidden rounded-[22px]",
              children: [
                W.jsx("canvas", { ref: F[0], className: "absolute inset-0 h-full w-full" }),
                W.jsx(zi, {
                  className: "left-[16%] top-[14%] h-[100px] w-[100px]",
                  color: "rgba(255,255,255,0.70)",
                }),
              ],
            }),
            W.jsxs("div", {
              className: "relative hidden flex-1 overflow-hidden rounded-[22px] sm:block",
              children: [
                W.jsx("canvas", { ref: F[1], className: "absolute inset-0 h-full w-full" }),
                W.jsx(zi, {
                  className: "left-1/2 top-[8%] h-[72px] w-[72px] -translate-x-1/2",
                  color: "rgba(200,215,255,0.55)",
                }),
                W.jsx("div", {
                  className:
                    "absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full",
                  style: {
                    width: 130,
                    height: 225,
                    boxShadow: "0 0 0 1.5px rgba(255,255,255,0.10)",
                  },
                  children: W.jsx("img", {
                    src: Wf,
                    alt: "",
                    className: "h-full w-full object-cover object-center",
                  }),
                }),
              ],
            }),
            W.jsxs("div", {
              className: "relative hidden flex-1 overflow-hidden rounded-[22px] sm:block",
              children: [
                W.jsx("canvas", { ref: F[2], className: "absolute inset-0 h-full w-full" }),
                W.jsx(zi, {
                  className: "right-[10%] top-[20%] h-[110px] w-[110px]",
                  color: "rgba(185,210,235,0.55)",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Kf() {
  return W.jsxs("div", {
    className: "flex h-screen w-screen flex-col overflow-hidden",
    style: {
      backgroundColor: "#0E1114",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    },
    children: [
      W.jsxs("header", {
        className: "flex shrink-0 items-center justify-between px-7 py-7",
        children: [
          W.jsx("span", {
            className: "text-2xl font-semibold tracking-tight text-white",
            style: { letterSpacing: "-0.02em" },
            children: "micro",
          }),
          W.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              W.jsx("button", {
                type: "button",
                className:
                  "rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white",
                children: "Login",
              }),
              W.jsx("button", {
                type: "button",
                className:
                  "rounded-full border border-white bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95",
                children: "Join the Waitlist",
              }),
            ],
          }),
        ],
      }),
      W.jsxs("main", {
        className: "relative mx-2 mb-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[32px]",
        style: { backgroundColor: "#030404" },
        children: [
          W.jsx(Qf, {}),
          W.jsx("div", {
            className: "pointer-events-none absolute bottom-0 left-0 right-0 z-10",
            style: {
              height: 260,
              background:
                "linear-gradient(to top, rgba(3,4,4,0.88) 0%, rgba(3,4,4,0.50) 45%, transparent 100%)",
            },
          }),
          W.jsxs("div", {
            className:
              "pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4 p-6 pb-10 md:flex-row md:items-end md:justify-between md:gap-0 md:p-8 md:pb-14",
            children: [
              W.jsxs("div", {
                className: "pointer-events-auto flex flex-col gap-4",
                children: [
                  W.jsx("p", {
                    className: "max-w-[280px] text-sm leading-relaxed text-white/70",
                    children:
                      "An all-in-one tool for email, CRM, project management and more that automatically organizes itself.",
                  }),
                  W.jsx("button", {
                    type: "button",
                    className:
                      "self-start rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95",
                    style: { backgroundColor: "#ffffff", color: "#030404" },
                    children: "Join the Waitlist",
                  }),
                ],
              }),
              W.jsxs("div", {
                className: "flex flex-col md:items-end",
                children: [
                  W.jsx("h1", {
                    className: "text-white md:text-right",
                    style: {
                      fontSize: "clamp(52px, 10vw, 110px)",
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    },
                    children: "Organized.",
                  }),
                  W.jsx("p", {
                    className: "text-base italic tracking-wide text-white/60 md:text-right",
                    children: "So you don't have to be.",
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
Af.createRoot(document.getElementById("root")).render(
  W.jsx(ft.StrictMode, { children: W.jsx(Kf, {}) }),
);
