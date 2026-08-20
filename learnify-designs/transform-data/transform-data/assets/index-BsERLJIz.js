(function () {
  const R = document.createElement("link").relList;
  if (R && R.supports && R.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) B(z);
  new MutationObserver((z) => {
    for (const D of z)
      if (D.type === "childList")
        for (const F of D.addedNodes) F.tagName === "LINK" && F.rel === "modulepreload" && B(F);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(z) {
    const D = {};
    return (
      z.integrity && (D.integrity = z.integrity),
      z.referrerPolicy && (D.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === "use-credentials"
        ? (D.credentials = "include")
        : z.crossOrigin === "anonymous"
          ? (D.credentials = "omit")
          : (D.credentials = "same-origin"),
      D
    );
  }
  function B(z) {
    if (z.ep) return;
    z.ep = !0;
    const D = m(z);
    fetch(z.href, D);
  }
})();
var No = { exports: {} },
  xr = {},
  _o = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Df() {
  if (Na) return U;
  Na = 1;
  var k = Symbol.for("react.element"),
    R = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    F = Symbol.for("react.context"),
    te = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    le = Symbol.for("react.lazy"),
    Y = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (Y && c[Y]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var we = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ve = Object.assign,
    q = {};
  function G(c, v, I) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = I || we));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (G.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function gt() {}
  gt.prototype = G.prototype;
  function ct(c, v, I) {
    ((this.props = c), (this.context = v), (this.refs = q), (this.updater = I || we));
  }
  var be = (ct.prototype = new gt());
  ((be.constructor = ct), ve(be, G.prototype), (be.isPureReactComponent = !0));
  var Ee = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    je = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, v, I) {
    var V,
      $ = {},
      Q = null,
      b = null;
    if (v != null)
      for (V in (v.ref !== void 0 && (b = v.ref), v.key !== void 0 && (Q = "" + v.key), v))
        et.call(v, V) && !Re.hasOwnProperty(V) && ($[V] = v[V]);
    var Z = arguments.length - 2;
    if (Z === 1) $.children = I;
    else if (1 < Z) {
      for (var ie = Array(Z), Be = 0; Be < Z; Be++) ie[Be] = arguments[Be + 2];
      $.children = ie;
    }
    if (c && c.defaultProps) for (V in ((Z = c.defaultProps), Z)) $[V] === void 0 && ($[V] = Z[V]);
    return { $$typeof: k, type: c, key: Q, ref: b, props: $, _owner: je.current };
  }
  function jt(c, v) {
    return { $$typeof: k, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function xt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
  }
  function Xt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (I) {
        return v[I];
      })
    );
  }
  var ft = /\/+/g;
  function Ve(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Xt("" + c.key) : v.toString(36);
  }
  function tt(c, v, I, V, $) {
    var Q = typeof c;
    (Q === "undefined" || Q === "boolean") && (c = null);
    var b = !1;
    if (c === null) b = !0;
    else
      switch (Q) {
        case "string":
        case "number":
          b = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case k:
            case R:
              b = !0;
          }
      }
    if (b)
      return (
        (b = c),
        ($ = $(b)),
        (c = V === "" ? "." + Ve(b, 0) : V),
        Ee($)
          ? ((I = ""),
            c != null && (I = c.replace(ft, "$&/") + "/"),
            tt($, v, I, "", function (Be) {
              return Be;
            }))
          : $ != null &&
            (xt($) &&
              ($ = jt(
                $,
                I +
                  (!$.key || (b && b.key === $.key) ? "" : ("" + $.key).replace(ft, "$&/") + "/") +
                  c,
              )),
            v.push($)),
        1
      );
    if (((b = 0), (V = V === "" ? "." : V + ":"), Ee(c)))
      for (var Z = 0; Z < c.length; Z++) {
        Q = c[Z];
        var ie = V + Ve(Q, Z);
        b += tt(Q, v, I, ie, $);
      }
    else if (((ie = X(c)), typeof ie == "function"))
      for (c = ie.call(c), Z = 0; !(Q = c.next()).done;)
        ((Q = Q.value), (ie = V + Ve(Q, Z++)), (b += tt(Q, v, I, ie, $)));
    else if (Q === "object")
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
  function dt(c, v, I) {
    if (c == null) return c;
    var V = [],
      $ = 0;
    return (
      tt(c, V, "", "", function (Q) {
        return v.call(I, Q, $++);
      }),
      V
    );
  }
  function Me(c) {
    if (c._status === -1) {
      var v = c._result;
      ((v = v()),
        v.then(
          function (I) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = I));
          },
          function (I) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = I));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = v)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ae = { current: null },
    S = { transition: null },
    M = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: S, ReactCurrentOwner: je };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: dt,
      forEach: function (c, v, I) {
        dt(
          c,
          function () {
            v.apply(this, arguments);
          },
          I,
        );
      },
      count: function (c) {
        var v = 0;
        return (
          dt(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          dt(c, function (v) {
            return v;
          }) || []
        );
      },
      only: function (c) {
        if (!xt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (U.Component = G),
    (U.Fragment = m),
    (U.Profiler = z),
    (U.PureComponent = ct),
    (U.StrictMode = B),
    (U.Suspense = W),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (U.act = N),
    (U.cloneElement = function (c, v, I) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var V = ve({}, c.props),
        $ = c.key,
        Q = c.ref,
        b = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((Q = v.ref), (b = je.current)),
          v.key !== void 0 && ($ = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var Z = c.type.defaultProps;
        for (ie in v)
          et.call(v, ie) &&
            !Re.hasOwnProperty(ie) &&
            (V[ie] = v[ie] === void 0 && Z !== void 0 ? Z[ie] : v[ie]);
      }
      var ie = arguments.length - 2;
      if (ie === 1) V.children = I;
      else if (1 < ie) {
        Z = Array(ie);
        for (var Be = 0; Be < ie; Be++) Z[Be] = arguments[Be + 2];
        V.children = Z;
      }
      return { $$typeof: k, type: c.type, key: $, ref: Q, props: V, _owner: b };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: F,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: D, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Ke),
    (U.createFactory = function (c) {
      var v = Ke.bind(null, c);
      return ((v.type = c), v);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: te, render: c };
    }),
    (U.isValidElement = xt),
    (U.lazy = function (c) {
      return { $$typeof: le, _payload: { _status: -1, _result: c }, _init: Me };
    }),
    (U.memo = function (c, v) {
      return { $$typeof: A, type: c, compare: v === void 0 ? null : v };
    }),
    (U.startTransition = function (c) {
      var v = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = v;
      }
    }),
    (U.unstable_act = N),
    (U.useCallback = function (c, v) {
      return ae.current.useCallback(c, v);
    }),
    (U.useContext = function (c) {
      return ae.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return ae.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, v) {
      return ae.current.useEffect(c, v);
    }),
    (U.useId = function () {
      return ae.current.useId();
    }),
    (U.useImperativeHandle = function (c, v, I) {
      return ae.current.useImperativeHandle(c, v, I);
    }),
    (U.useInsertionEffect = function (c, v) {
      return ae.current.useInsertionEffect(c, v);
    }),
    (U.useLayoutEffect = function (c, v) {
      return ae.current.useLayoutEffect(c, v);
    }),
    (U.useMemo = function (c, v) {
      return ae.current.useMemo(c, v);
    }),
    (U.useReducer = function (c, v, I) {
      return ae.current.useReducer(c, v, I);
    }),
    (U.useRef = function (c) {
      return ae.current.useRef(c);
    }),
    (U.useState = function (c) {
      return ae.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, v, I) {
      return ae.current.useSyncExternalStore(c, v, I);
    }),
    (U.useTransition = function () {
      return ae.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var _a;
function Lo() {
  return (_a || ((_a = 1), (_o.exports = Df())), _o.exports);
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
function Ff() {
  if (Pa) return xr;
  Pa = 1;
  var k = Lo(),
    R = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    B = Object.prototype.hasOwnProperty,
    z = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(te, W, A) {
    var le,
      Y = {},
      X = null,
      we = null;
    (A !== void 0 && (X = "" + A),
      W.key !== void 0 && (X = "" + W.key),
      W.ref !== void 0 && (we = W.ref));
    for (le in W) B.call(W, le) && !D.hasOwnProperty(le) && (Y[le] = W[le]);
    if (te && te.defaultProps)
      for (le in ((W = te.defaultProps), W)) Y[le] === void 0 && (Y[le] = W[le]);
    return { $$typeof: R, type: te, key: X, ref: we, props: Y, _owner: z.current };
  }
  return ((xr.Fragment = m), (xr.jsx = F), (xr.jsxs = F), xr);
}
var ja;
function If() {
  return (ja || ((ja = 1), (No.exports = Ff())), No.exports);
}
var g = If(),
  Te = Lo(),
  Ll = {},
  Po = { exports: {} },
  Ae = {},
  jo = { exports: {} },
  zo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Uf() {
  return (
    za ||
      ((za = 1),
      (function (k) {
        function R(S, M) {
          var N = S.length;
          S.push(M);
          e: for (; 0 < N;) {
            var c = (N - 1) >>> 1,
              v = S[c];
            if (0 < z(v, M)) ((S[c] = M), (S[N] = v), (N = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function B(S) {
          if (S.length === 0) return null;
          var M = S[0],
            N = S.pop();
          if (N !== M) {
            S[0] = N;
            e: for (var c = 0, v = S.length, I = v >>> 1; c < I;) {
              var V = 2 * (c + 1) - 1,
                $ = S[V],
                Q = V + 1,
                b = S[Q];
              if (0 > z($, N))
                Q < v && 0 > z(b, $)
                  ? ((S[c] = b), (S[Q] = N), (c = Q))
                  : ((S[c] = $), (S[V] = N), (c = V));
              else if (Q < v && 0 > z(b, N)) ((S[c] = b), (S[Q] = N), (c = Q));
              else break e;
            }
          }
          return M;
        }
        function z(S, M) {
          var N = S.sortIndex - M.sortIndex;
          return N !== 0 ? N : S.id - M.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var D = performance;
          k.unstable_now = function () {
            return D.now();
          };
        } else {
          var F = Date,
            te = F.now();
          k.unstable_now = function () {
            return F.now() - te;
          };
        }
        var W = [],
          A = [],
          le = 1,
          Y = null,
          X = 3,
          we = !1,
          ve = !1,
          q = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          gt = typeof clearTimeout == "function" ? clearTimeout : null,
          ct = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var M = m(A); M !== null;) {
            if (M.callback === null) B(A);
            else if (M.startTime <= S) (B(A), (M.sortIndex = M.expirationTime), R(W, M));
            else break;
            M = m(A);
          }
        }
        function Ee(S) {
          if (((q = !1), be(S), !ve))
            if (m(W) !== null) ((ve = !0), Me(et));
            else {
              var M = m(A);
              M !== null && ae(Ee, M.startTime - S);
            }
        }
        function et(S, M) {
          ((ve = !1), q && ((q = !1), gt(Ke), (Ke = -1)), (we = !0));
          var N = X;
          try {
            for (be(M), Y = m(W); Y !== null && (!(Y.expirationTime > M) || (S && !Xt()));) {
              var c = Y.callback;
              if (typeof c == "function") {
                ((Y.callback = null), (X = Y.priorityLevel));
                var v = c(Y.expirationTime <= M);
                ((M = k.unstable_now()),
                  typeof v == "function" ? (Y.callback = v) : Y === m(W) && B(W),
                  be(M));
              } else B(W);
              Y = m(W);
            }
            if (Y !== null) var I = !0;
            else {
              var V = m(A);
              (V !== null && ae(Ee, V.startTime - M), (I = !1));
            }
            return I;
          } finally {
            ((Y = null), (X = N), (we = !1));
          }
        }
        var je = !1,
          Re = null,
          Ke = -1,
          jt = 5,
          xt = -1;
        function Xt() {
          return !(k.unstable_now() - xt < jt);
        }
        function ft() {
          if (Re !== null) {
            var S = k.unstable_now();
            xt = S;
            var M = !0;
            try {
              M = Re(!0, S);
            } finally {
              M ? Ve() : ((je = !1), (Re = null));
            }
          } else je = !1;
        }
        var Ve;
        if (typeof ct == "function")
          Ve = function () {
            ct(ft);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            dt = tt.port2;
          ((tt.port1.onmessage = ft),
            (Ve = function () {
              dt.postMessage(null);
            }));
        } else
          Ve = function () {
            G(ft, 0);
          };
        function Me(S) {
          ((Re = S), je || ((je = !0), Ve()));
        }
        function ae(S, M) {
          Ke = G(function () {
            S(k.unstable_now());
          }, M);
        }
        ((k.unstable_IdlePriority = 5),
          (k.unstable_ImmediatePriority = 1),
          (k.unstable_LowPriority = 4),
          (k.unstable_NormalPriority = 3),
          (k.unstable_Profiling = null),
          (k.unstable_UserBlockingPriority = 2),
          (k.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (k.unstable_continueExecution = function () {
            ve || we || ((ve = !0), Me(et));
          }),
          (k.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (jt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (k.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (k.unstable_getFirstCallbackNode = function () {
            return m(W);
          }),
          (k.unstable_next = function (S) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = X;
            }
            var N = X;
            X = M;
            try {
              return S();
            } finally {
              X = N;
            }
          }),
          (k.unstable_pauseExecution = function () {}),
          (k.unstable_requestPaint = function () {}),
          (k.unstable_runWithPriority = function (S, M) {
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
            var N = X;
            X = S;
            try {
              return M();
            } finally {
              X = N;
            }
          }),
          (k.unstable_scheduleCallback = function (S, M, N) {
            var c = k.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
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
              (v = N + v),
              (S = {
                id: le++,
                callback: M,
                priorityLevel: S,
                startTime: N,
                expirationTime: v,
                sortIndex: -1,
              }),
              N > c
                ? ((S.sortIndex = N),
                  R(A, S),
                  m(W) === null &&
                    S === m(A) &&
                    (q ? (gt(Ke), (Ke = -1)) : (q = !0), ae(Ee, N - c)))
                : ((S.sortIndex = v), R(W, S), ve || we || ((ve = !0), Me(et))),
              S
            );
          }),
          (k.unstable_shouldYield = Xt),
          (k.unstable_wrapCallback = function (S) {
            var M = X;
            return function () {
              var N = X;
              X = M;
              try {
                return S.apply(this, arguments);
              } finally {
                X = N;
              }
            };
          }));
      })(zo)),
    zo
  );
}
var La;
function Af() {
  return (La || ((La = 1), (jo.exports = Uf())), jo.exports);
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
function Vf() {
  if (Ta) return Ae;
  Ta = 1;
  var k = Lo(),
    R = Af();
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
  var B = new Set(),
    z = {};
  function D(e, t) {
    (F(e, t), F(e + "Capture", t));
  }
  function F(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) B.add(t[e]);
  }
  var te = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    W = Object.prototype.hasOwnProperty,
    A =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    le = {},
    Y = {};
  function X(e) {
    return W.call(Y, e) ? !0 : W.call(le, e) ? !1 : A.test(e) ? (Y[e] = !0) : ((le[e] = !0), !1);
  }
  function we(e, t, n, r) {
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
  function ve(e, t, n, r) {
    if (t === null || typeof t > "u" || we(e, t, n, r)) return !0;
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
  function q(e, t, n, r, l, i, o) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o));
  }
  var G = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      G[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      G[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        G[e] = new q(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        G[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      G[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      G[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      G[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      G[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var gt = /[\-:]([a-z])/g;
  function ct(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(gt, ct);
      G[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(gt, ct);
        G[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(gt, ct);
      G[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      G[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      G[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (ve(t, n, l, r) && (n = null),
      r || l === null
        ? X(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var Ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    je = Symbol.for("react.portal"),
    Re = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    jt = Symbol.for("react.profiler"),
    xt = Symbol.for("react.provider"),
    Xt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Ve = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function M(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var N = Object.assign,
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
  var I = !1;
  function V(e, t) {
    if (!e || I) return "";
    I = !0;
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
      ((I = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function $(e) {
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
        return ((e = V(e.type, !1)), e);
      case 11:
        return ((e = V(e.type.render, !1)), e);
      case 1:
        return ((e = V(e.type, !0)), e);
      default:
        return "";
    }
  }
  function Q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case je:
        return "Portal";
      case jt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ve:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xt:
          return (e.displayName || "Context") + ".Consumer";
        case xt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return ((t = e.displayName || null), t !== null ? t : Q(e.type) || "Memo");
        case Me:
          ((t = e._payload), (e = e._init));
          try {
            return Q(e(t));
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
        return Q(t);
      case 8:
        return t === Ke ? "StrictMode" : "Mode";
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
  function Z(e) {
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
  function ie(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Be(e) {
    var t = ie(e) ? "checked" : "value",
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
  function wr(e) {
    e._valueTracker || (e._valueTracker = Be(e));
  }
  function To(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ie(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ro(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Z(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Mo(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Rl(e, t) {
    Mo(e, t);
    var n = Z(t.value),
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
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Z(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Oo(e, t, n) {
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
  function Ml(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Z(n), t = null, l = 0; l < e.length; l++) {
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
    return N({}, t, {
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
        if (On(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Z(n) };
  }
  function Fo(e, t) {
    var n = Z(t.value),
      r = Z(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Io(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Uo(e) {
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
      ? Uo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Sr,
    Ao = (function (e) {
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
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Sr.firstChild;
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
    Ua = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fn).forEach(function (e) {
    Ua.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]));
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Bo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Vo(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Aa = N(
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
      if (Aa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Ul = null;
  function Al(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    cn = null,
    fn = null;
  function Wo(e) {
    if ((e = lr(e))) {
      if (typeof Vl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Ho(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function $o() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
    }
  }
  function Qo(e, t) {
    return e(t);
  }
  function Ko() {}
  var Bl = !1;
  function Yo(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Qo(e, t, n);
    } finally {
      ((Bl = !1), (cn !== null || fn !== null) && (Ko(), $o()));
    }
  }
  function In(e, t) {
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
  var Wl = !1;
  if (te)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      Wl = !1;
    }
  function Va(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var An = !1,
    Er = null,
    Cr = !1,
    Hl = null,
    Ba = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Wa(e, t, n, r, l, i, o, u, s) {
    ((An = !1), (Er = null), Va.apply(Ba, arguments));
  }
  function Ha(e, t, n, r, l, i, o, u, s) {
    if ((Wa.apply(this, arguments), An)) {
      if (An) {
        var p = Er;
        ((An = !1), (Er = null));
      } else throw Error(m(198));
      Cr || ((Cr = !0), (Hl = p));
    }
  }
  function Gt(e) {
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
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Go(e) {
    if (Gt(e) !== e) throw Error(m(188));
  }
  function $a(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gt(e)), t === null)) throw Error(m(188));
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
          if (i === n) return (Go(l), e);
          if (i === r) return (Go(l), t);
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
    return ((e = $a(e)), e !== null ? Zo(e) : null);
  }
  function Zo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Zo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Jo = R.unstable_scheduleCallback,
    bo = R.unstable_cancelCallback,
    Qa = R.unstable_shouldYield,
    Ka = R.unstable_requestPaint,
    fe = R.unstable_now,
    Ya = R.unstable_getCurrentPriorityLevel,
    $l = R.unstable_ImmediatePriority,
    eu = R.unstable_UserBlockingPriority,
    Nr = R.unstable_NormalPriority,
    Xa = R.unstable_LowPriority,
    tu = R.unstable_IdlePriority,
    _r = null,
    pt = null;
  function Ga(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : Ja,
    qa = Math.log,
    Za = Math.LN2;
  function Ja(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((qa(e) / Za) | 0)) | 0);
  }
  var Pr = 64,
    jr = 4194304;
  function Vn(e) {
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
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Vn(u)) : ((i &= o), i !== 0 && (r = Vn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Vn(o)) : i !== 0 && (r = Vn(i)));
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
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ba(e, t) {
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
  function ec(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = ba(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Ql(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function nu() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function tc(e, t) {
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
      var l = 31 - nt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var J = 0;
  function ru(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var lu,
    Xl,
    iu,
    ou,
    uu,
    Gl = !1,
    Lr = [],
    zt = null,
    Lt = null,
    Tt = null,
    Wn = new Map(),
    Hn = new Map(),
    Rt = [],
    nc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function su(e, t) {
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
        Tt = null;
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
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = $n(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = $n(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Wn.set(i, $n(Wn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function au(e) {
    var t = qt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xo(n)), t !== null)) {
            ((e.blockedOn = t),
              uu(e.priority, function () {
                iu(n);
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
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = lr(n)), t !== null && Xl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function cu(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function lc() {
    ((Gl = !1),
      zt !== null && Tr(zt) && (zt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      Tt !== null && Tr(Tt) && (Tt = null),
      Wn.forEach(cu),
      Hn.forEach(cu));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl || ((Gl = !0), R.unstable_scheduleCallback(R.unstable_NormalPriority, lc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Lr.length) {
      Qn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        Tt !== null && Qn(Tt, e),
        Wn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (au(n), n.blockedOn === null && Rt.shift());
  }
  var dn = Ee.ReactCurrentBatchConfig,
    Rr = !0;
  function ic(e, t, n, r) {
    var l = J,
      i = dn.transition;
    dn.transition = null;
    try {
      ((J = 1), ql(e, t, n, r));
    } finally {
      ((J = l), (dn.transition = i));
    }
  }
  function oc(e, t, n, r) {
    var l = J,
      i = dn.transition;
    dn.transition = null;
    try {
      ((J = 4), ql(e, t, n, r));
    } finally {
      ((J = l), (dn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = Zl(e, t, n, r);
      if (l === null) (mi(e, t, r, Mr, n), su(e, r));
      else if (rc(l, e, t, n, r)) r.stopPropagation();
      else if ((su(e, r), t & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null;) {
          var i = lr(l);
          if (
            (i !== null && lu(i), (i = Zl(e, t, n, r)), i === null && mi(e, t, r, Mr, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Zl(e, t, n, r) {
    if (((Mr = null), (e = Al(r)), (e = qt(e)), e !== null))
      if (((t = Gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function fu(e) {
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
        switch (Ya()) {
          case $l:
            return 1;
          case eu:
            return 4;
          case Nr:
          case Xa:
            return 16;
          case tu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    Jl = null,
    Or = null;
  function du() {
    if (Or) return Or;
    var e,
      t = Jl,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
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
  function pu() {
    return !1;
  }
  function We(e) {
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
          ? Fr
          : pu),
        (this.isPropagationStopped = pu),
        this
      );
    }
    return (
      N(t.prototype, {
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
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = We(pn),
    Yn = N({}, pn, { view: 0, detail: 0 }),
    uc = We(Yn),
    ei,
    ti,
    Xn,
    Ir = N({}, Yn, {
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
      getModifierState: ri,
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
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((ei = e.screenX - Xn.screenX), (ti = e.screenY - Xn.screenY))
                : (ti = ei = 0),
              (Xn = e)),
            ei);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ti;
      },
    }),
    mu = We(Ir),
    sc = N({}, Ir, { dataTransfer: 0 }),
    ac = We(sc),
    cc = N({}, Yn, { relatedTarget: 0 }),
    ni = We(cc),
    fc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = We(fc),
    pc = N({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mc = We(pc),
    hc = N({}, pn, { data: 0 }),
    hu = We(hc),
    vc = {
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
    yc = {
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
    gc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function xc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = gc[e]) ? !!t[e] : !1;
  }
  function ri() {
    return xc;
  }
  var wc = N({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = vc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? yc[e.keyCode] || "Unidentified"
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
      getModifierState: ri,
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
    kc = We(wc),
    Sc = N({}, Ir, {
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
    vu = We(Sc),
    Ec = N({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ri,
    }),
    Cc = We(Ec),
    Nc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _c = We(Nc),
    Pc = N({}, Ir, {
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
    jc = We(Pc),
    zc = [9, 13, 27, 32],
    li = te && "CompositionEvent" in window,
    Gn = null;
  te && "documentMode" in document && (Gn = document.documentMode);
  var Lc = te && "TextEvent" in window && !Gn,
    yu = te && (!li || (Gn && 8 < Gn && 11 >= Gn)),
    gu = " ",
    xu = !1;
  function wu(e, t) {
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
  function ku(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mn = !1;
  function Tc(e, t) {
    switch (e) {
      case "compositionend":
        return ku(t);
      case "keypress":
        return t.which !== 32 ? null : ((xu = !0), gu);
      case "textInput":
        return ((e = t.data), e === gu && xu ? null : e);
      default:
        return null;
    }
  }
  function Rc(e, t) {
    if (mn)
      return e === "compositionend" || (!li && wu(e, t))
        ? ((e = du()), (Or = Jl = Mt = null), (mn = !1), e)
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
        return yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mc = {
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
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mc[e.type] : t === "textarea";
  }
  function Eu(e, t, n, r) {
    (Ho(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var qn = null,
    Zn = null;
  function Oc(e) {
    Bu(e, 0);
  }
  function Ur(e) {
    var t = xn(e);
    if (To(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var Cu = !1;
  if (te) {
    var ii;
    if (te) {
      var oi = "oninput" in document;
      if (!oi) {
        var Nu = document.createElement("div");
        (Nu.setAttribute("oninput", "return;"), (oi = typeof Nu.oninput == "function"));
      }
      ii = oi;
    } else ii = !1;
    Cu = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function _u() {
    qn && (qn.detachEvent("onpropertychange", Pu), (Zn = qn = null));
  }
  function Pu(e) {
    if (e.propertyName === "value" && Ur(Zn)) {
      var t = [];
      (Eu(t, Zn, e, Al(e)), Yo(Oc, t));
    }
  }
  function Fc(e, t, n) {
    e === "focusin"
      ? (_u(), (qn = t), (Zn = n), qn.attachEvent("onpropertychange", Pu))
      : e === "focusout" && _u();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Zn);
  }
  function Uc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Ac(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Vc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Vc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ju(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function zu(e, t) {
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
  function Lu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Lu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Tu() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function ui(e) {
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
  function Bc(e) {
    var t = Tu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lu(n.ownerDocument.documentElement, n)) {
      if (r !== null && ui(n)) {
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
            (l = zu(n, i)));
          var o = zu(n, r);
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
  var Wc = te && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    si = null,
    bn = null,
    ai = !1;
  function Ru(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai ||
      hn == null ||
      hn !== kr(r) ||
      ((r = hn),
      "selectionStart" in r && ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && Jn(bn, r)) ||
        ((bn = r),
        (r = Wr(si, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
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
  var vn = {
      animationend: Ar("Animation", "AnimationEnd"),
      animationiteration: Ar("Animation", "AnimationIteration"),
      animationstart: Ar("Animation", "AnimationStart"),
      transitionend: Ar("Transition", "TransitionEnd"),
    },
    ci = {},
    Mu = {};
  te &&
    ((Mu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Vr(e) {
    if (ci[e]) return ci[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return (ci[e] = t[n]);
    return e;
  }
  var Ou = Vr("animationend"),
    Du = Vr("animationiteration"),
    Fu = Vr("animationstart"),
    Iu = Vr("transitionend"),
    Uu = new Map(),
    Au =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Uu.set(e, t), D(t, [e]));
  }
  for (var fi = 0; fi < Au.length; fi++) {
    var di = Au[fi],
      Hc = di.toLowerCase(),
      $c = di[0].toUpperCase() + di.slice(1);
    Ot(Hc, "on" + $c);
  }
  (Ot(Ou, "onAnimationEnd"),
    Ot(Du, "onAnimationIteration"),
    Ot(Fu, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Iu, "onTransitionEnd"),
    F("onMouseEnter", ["mouseout", "mouseover"]),
    F("onMouseLeave", ["mouseout", "mouseover"]),
    F("onPointerEnter", ["pointerout", "pointerover"]),
    F("onPointerLeave", ["pointerout", "pointerover"]),
    D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    D(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    D(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    D(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Vu(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ha(r, t, void 0, e), (e.currentTarget = null));
  }
  function Bu(e, t) {
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
            (Vu(l, u, p), (i = s));
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
            (Vu(l, u, p), (i = s));
          }
      }
    }
    if (Cr) throw ((e = Hl), (Cr = !1), (Hl = null), e);
  }
  function ne(e, t) {
    var n = t[wi];
    n === void 0 && (n = t[wi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wu(n, e, r, t));
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        B.forEach(function (n) {
          n !== "selectionchange" && (Qc.has(n) || pi(n, !1, e), pi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), pi("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, r) {
    switch (fu(t)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = oc;
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
  function mi(e, t, n, r, l) {
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
            if (((o = qt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Yo(function () {
      var p = i,
        y = Al(n),
        x = [];
      e: {
        var h = Uu.get(e);
        if (h !== void 0) {
          var E = bl,
            _ = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = kc;
              break;
            case "focusin":
              ((_ = "focus"), (E = ni));
              break;
            case "focusout":
              ((_ = "blur"), (E = ni));
              break;
            case "beforeblur":
            case "afterblur":
              E = ni;
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
              E = mu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Cc;
              break;
            case Ou:
            case Du:
            case Fu:
              E = dc;
              break;
            case Iu:
              E = _c;
              break;
            case "scroll":
              E = uc;
              break;
            case "wheel":
              E = jc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = vu;
          }
          var P = (t & 4) !== 0,
            de = !P && e === "scroll",
            f = P ? (h !== null ? h + "Capture" : null) : h;
          P = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = In(a, f)), w != null && P.push(nr(a, w, d)))),
              de)
            )
              break;
            a = a.return;
          }
          0 < P.length && ((h = new E(h, _, null, n, y)), x.push({ event: h, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            h && n !== Ul && (_ = n.relatedTarget || n.fromElement) && (qt(_) || _[wt]))
          )
            break e;
          if (
            (E || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            E
              ? ((_ = n.relatedTarget || n.toElement),
                (E = p),
                (_ = _ ? qt(_) : null),
                _ !== null &&
                  ((de = Gt(_)), _ !== de || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((E = null), (_ = p)),
            E !== _)
          ) {
            if (
              ((P = mu),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((P = vu), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (de = E == null ? h : xn(E)),
              (d = _ == null ? h : xn(_)),
              (h = new P(w, a + "leave", E, n, y)),
              (h.target = de),
              (h.relatedTarget = d),
              (w = null),
              qt(y) === p &&
                ((P = new P(f, a + "enter", _, n, y)),
                (P.target = d),
                (P.relatedTarget = de),
                (w = P)),
              (de = w),
              E && _)
            )
              t: {
                for (P = E, f = _, a = 0, d = P; d; d = yn(d)) a++;
                for (d = 0, w = f; w; w = yn(w)) d++;
                for (; 0 < a - d;) ((P = yn(P)), a--);
                for (; 0 < d - a;) ((f = yn(f)), d--);
                for (; a--;) {
                  if (P === f || (f !== null && P === f.alternate)) break t;
                  ((P = yn(P)), (f = yn(f)));
                }
                P = null;
              }
            else P = null;
            (E !== null && Hu(x, h, E, P, !1), _ !== null && de !== null && Hu(x, de, _, P, !0));
          }
        }
        e: {
          if (
            ((h = p ? xn(p) : window),
            (E = h.nodeName && h.nodeName.toLowerCase()),
            E === "select" || (E === "input" && h.type === "file"))
          )
            var j = Dc;
          else if (Su(h))
            if (Cu) j = Ac;
            else {
              j = Ic;
              var L = Fc;
            }
          else
            (E = h.nodeName) &&
              E.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (j = Uc);
          if (j && (j = j(e, p))) {
            Eu(x, j, n, y);
            break e;
          }
          (L && L(e, h, p),
            e === "focusout" &&
              (L = h._wrapperState) &&
              L.controlled &&
              h.type === "number" &&
              Ml(h, "number", h.value));
        }
        switch (((L = p ? xn(p) : window), e)) {
          case "focusin":
            (Su(L) || L.contentEditable === "true") && ((hn = L), (si = p), (bn = null));
            break;
          case "focusout":
            bn = si = hn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ai = !1), Ru(x, n, y));
            break;
          case "selectionchange":
            if (Wc) break;
          case "keydown":
          case "keyup":
            Ru(x, n, y);
        }
        var T;
        if (li)
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
          mn
            ? wu(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (yu &&
            n.locale !== "ko" &&
            (mn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && mn && (T = du())
              : ((Mt = y), (Jl = "value" in Mt ? Mt.value : Mt.textContent), (mn = !0))),
          (L = Wr(p, O)),
          0 < L.length &&
            ((O = new hu(O, e, null, n, y)),
            x.push({ event: O, listeners: L }),
            T ? (O.data = T) : ((T = ku(n)), T !== null && (O.data = T)))),
          (T = Lc ? Tc(e, n) : Rc(e, n)) &&
            ((p = Wr(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new hu("onBeforeInput", "beforeinput", null, n, y)),
              x.push({ event: y, listeners: p }),
              (y.data = T))));
      }
      Bu(x, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = In(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = In(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Hu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = In(n, i)), s != null && o.unshift(nr(n, s, u)))
          : l || ((s = In(n, i)), s != null && o.push(nr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Kc = /\r\n?/g,
    Yc = /\u0000|\uFFFD/g;
  function $u(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Kc,
        `
`,
      )
      .replace(Yc, "");
  }
  function Hr(e, t, n) {
    if (((t = $u(t)), $u(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
  var hi = null,
    vi = null;
  function yi(e, t) {
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
  var gi = typeof setTimeout == "function" ? setTimeout : void 0,
    Xc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qu = typeof Promise == "function" ? Promise : void 0,
    Gc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qu < "u"
          ? function (e) {
              return Qu.resolve(null).then(e).catch(qc);
            }
          : gi;
  function qc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Kn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Dt(e) {
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
  function Ku(e) {
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
  var gn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + gn,
    rr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    wi = "__reactEvents$" + gn,
    Zc = "__reactListeners$" + gn,
    Jc = "__reactHandles$" + gn;
  function qt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ku(e); e !== null;) {
            if ((n = e[mt])) return n;
            e = Ku(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[mt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var ki = [],
    wn = -1;
  function Ft(e) {
    return { current: e };
  }
  function re(e) {
    0 > wn || ((e.current = ki[wn]), (ki[wn] = null), wn--);
  }
  function ee(e, t) {
    (wn++, (ki[wn] = e.current), (e.current = t));
  }
  var It = {},
    Ce = Ft(It),
    Oe = Ft(!1),
    Zt = It;
  function kn(e, t) {
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
  function De(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (re(Oe), re(Ce));
  }
  function Yu(e, t, n) {
    if (Ce.current !== It) throw Error(m(168));
    (ee(Ce, t), ee(Oe, n));
  }
  function Xu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, b(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Zt = Ce.current),
      ee(Ce, e),
      ee(Oe, Oe.current),
      !0
    );
  }
  function Gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Xu(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        re(Oe),
        re(Ce),
        ee(Ce, e))
      : re(Oe),
      ee(Oe, n));
  }
  var kt = null,
    Xr = !1,
    Si = !1;
  function qu(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function bc(e) {
    ((Xr = !0), qu(e));
  }
  function Ut() {
    if (!Si && kt !== null) {
      Si = !0;
      var e = 0,
        t = J;
      try {
        var n = kt;
        for (J = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Xr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), Jo($l, Ut), l);
      } finally {
        ((J = t), (Si = !1));
      }
    }
    return null;
  }
  var Sn = [],
    En = 0,
    Gr = null,
    qr = 0,
    Ye = [],
    Xe = 0,
    Jt = null,
    St = 1,
    Et = "";
  function bt(e, t) {
    ((Sn[En++] = qr), (Sn[En++] = Gr), (Gr = e), (qr = t));
  }
  function Zu(e, t, n) {
    ((Ye[Xe++] = St), (Ye[Xe++] = Et), (Ye[Xe++] = Jt), (Jt = e));
    var r = St;
    e = Et;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (Et = i + e));
    } else ((St = (1 << i) | (n << l) | r), (Et = e));
  }
  function Ei(e) {
    e.return !== null && (bt(e, 1), Zu(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Gr;) ((Gr = Sn[--En]), (Sn[En] = null), (qr = Sn[--En]), (Sn[En] = null));
    for (; e === Jt;)
      ((Jt = Ye[--Xe]),
        (Ye[Xe] = null),
        (Et = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var He = null,
    $e = null,
    oe = !1,
    lt = null;
  function Ju(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), ($e = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), ($e = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: Et } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (He = e),
              ($e = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _i(e) {
    if (oe) {
      var t = $e;
      if (t) {
        var n = t;
        if (!bu(e, t)) {
          if (Ni(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = He;
          t && bu(e, t) ? Ju(r, n) : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (He = e));
        }
      } else {
        if (Ni(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (oe = !1), (He = e));
      }
    }
  }
  function es(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    He = e;
  }
  function Zr(e) {
    if (e !== He) return !1;
    if (!oe) return (es(e), (oe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
      t && (t = $e))
    ) {
      if (Ni(e)) throw (ts(), Error(m(418)));
      for (; t;) (Ju(e, t), (t = Dt(t.nextSibling)));
    }
    if ((es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                $e = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        $e = null;
      }
    } else $e = He ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = $e; e;) e = Dt(e.nextSibling);
  }
  function Cn() {
    (($e = He = null), (oe = !1));
  }
  function Pi(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var ef = Ee.ReactCurrentBatchConfig;
  function ir(e, t, n) {
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
      return ((f = Kt(f, a)), (f.index = 0), (f.sibling = null), f);
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
    function u(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = xo(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var j = d.type;
      return j === Re
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === j ||
              (typeof j == "object" && j !== null && j.$$typeof === Me && ns(j) === a.type))
          ? ((w = l(a, d.props)), (w.ref = ir(f, a, d)), (w.return = f), w)
          : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = ir(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wo(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, j) {
      return a === null || a.tag !== 7
        ? ((a = sn(d, f.mode, w, j)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = xo("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case je:
            return ((a = wo(a, f.mode, d)), (a.return = f), a);
          case Me:
            var w = a._init;
            return x(f, w(a._payload), d);
        }
        if (On(a) || M(a)) return ((a = sn(a, f.mode, d, null)), (a.return = f), a);
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var j = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return j !== null ? null : u(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === j ? s(f, a, d, w) : null;
          case je:
            return d.key === j ? p(f, a, d, w) : null;
          case Me:
            return ((j = d._init), h(f, a, j(d._payload), w));
        }
        if (On(d) || M(d)) return j !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, j) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), u(a, f, "" + w, j));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, j));
          case je:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, j));
          case Me:
            var L = w._init;
            return E(f, a, d, L(w._payload), j);
        }
        if (On(w) || M(w)) return ((f = f.get(d) || null), y(a, f, w, j, null));
        Jr(a, w);
      }
      return null;
    }
    function _(f, a, d, w) {
      for (var j = null, L = null, T = a, O = (a = 0), xe = null; T !== null && O < d.length; O++) {
        T.index > O ? ((xe = T), (T = null)) : (xe = T.sibling);
        var K = h(f, T, d[O], w);
        if (K === null) {
          T === null && (T = xe);
          break;
        }
        (e && T && K.alternate === null && t(f, T),
          (a = i(K, a, O)),
          L === null ? (j = K) : (L.sibling = K),
          (L = K),
          (T = xe));
      }
      if (O === d.length) return (n(f, T), oe && bt(f, O), j);
      if (T === null) {
        for (; O < d.length; O++)
          ((T = x(f, d[O], w)),
            T !== null && ((a = i(T, a, O)), L === null ? (j = T) : (L.sibling = T), (L = T)));
        return (oe && bt(f, O), j);
      }
      for (T = r(f, T); O < d.length; O++)
        ((xe = E(T, f, O, d[O], w)),
          xe !== null &&
            (e && xe.alternate !== null && T.delete(xe.key === null ? O : xe.key),
            (a = i(xe, a, O)),
            L === null ? (j = xe) : (L.sibling = xe),
            (L = xe)));
      return (
        e &&
          T.forEach(function (Yt) {
            return t(f, Yt);
          }),
        oe && bt(f, O),
        j
      );
    }
    function P(f, a, d, w) {
      var j = M(d);
      if (typeof j != "function") throw Error(m(150));
      if (((d = j.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (j = null), T = a, O = (a = 0), xe = null, K = d.next();
        T !== null && !K.done;
        O++, K = d.next()
      ) {
        T.index > O ? ((xe = T), (T = null)) : (xe = T.sibling);
        var Yt = h(f, T, K.value, w);
        if (Yt === null) {
          T === null && (T = xe);
          break;
        }
        (e && T && Yt.alternate === null && t(f, T),
          (a = i(Yt, a, O)),
          L === null ? (j = Yt) : (L.sibling = Yt),
          (L = Yt),
          (T = xe));
      }
      if (K.done) return (n(f, T), oe && bt(f, O), j);
      if (T === null) {
        for (; !K.done; O++, K = d.next())
          ((K = x(f, K.value, w)),
            K !== null && ((a = i(K, a, O)), L === null ? (j = K) : (L.sibling = K), (L = K)));
        return (oe && bt(f, O), j);
      }
      for (T = r(f, T); !K.done; O++, K = d.next())
        ((K = E(T, f, O, K.value, w)),
          K !== null &&
            (e && K.alternate !== null && T.delete(K.key === null ? O : K.key),
            (a = i(K, a, O)),
            L === null ? (j = K) : (L.sibling = K),
            (L = K)));
      return (
        e &&
          T.forEach(function (Of) {
            return t(f, Of);
          }),
        oe && bt(f, O),
        j
      );
    }
    function de(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Re &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var j = d.key, L = a; L !== null;) {
                if (L.key === j) {
                  if (((j = d.type), j === Re)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === j ||
                    (typeof j == "object" && j !== null && j.$$typeof === Me && ns(j) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = ir(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === Re
                ? ((a = sn(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = ir(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return o(f);
          case je:
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
              ((a = wo(d, f.mode, w)), (a.return = f), (f = a));
            }
            return o(f);
          case Me:
            return ((L = d._init), de(f, a, L(d._payload), w));
        }
        if (On(d)) return _(f, a, d, w);
        if (M(d)) return P(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = xo(d, f.mode, w)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return de;
  }
  var Nn = rs(!0),
    ls = rs(!1),
    br = Ft(null),
    el = null,
    _n = null,
    ji = null;
  function zi() {
    ji = _n = el = null;
  }
  function Li(e) {
    var t = br.current;
    (re(br), (e._currentValue = t));
  }
  function Ti(e, t, n) {
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
  function Pn(e, t) {
    ((el = e),
      (ji = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Fe = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (ji !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (el === null) throw Error(m(308));
        ((_n = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var en = null;
  function Ri(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function is(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
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
  var At = !1;
  function Mi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function os(e, t) {
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
  function Vt(e, t, n) {
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
      l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    );
  }
  function tl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  function us(e, t) {
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
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      ((s.next = null), o === null ? (i = p) : (o.next = p), (o = s));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== o && (u === null ? (y.firstBaseUpdate = p) : (u.next = p), (y.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((o = 0), (y = p = s = null), (u = i));
      do {
        var h = u.lane,
          E = u.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: E,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var _ = e,
              P = u;
            switch (((h = t), (E = n), P.tag)) {
              case 1:
                if (((_ = P.payload), typeof _ == "function")) {
                  x = _.call(E, x, h);
                  break e;
                }
                x = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = P.payload), (h = typeof _ == "function" ? _.call(E, x, h) : _), h == null)
                )
                  break e;
                x = N({}, x, h);
                break e;
              case 2:
                At = !0;
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
            y === null ? ((p = y = E), (s = x)) : (y = y.next = E),
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
        (y === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((o |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((rn |= o), (e.lanes = o), (e.memoizedState = x));
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
  var or = {},
    ht = Ft(or),
    ur = Ft(or),
    sr = Ft(or);
  function tn(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Oi(e, t) {
    switch ((ee(sr, t), ee(ur, e), ee(ht, or), (e = t.nodeType), e)) {
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
    (re(ht), ee(ht, t));
  }
  function jn() {
    (re(ht), re(ur), re(sr));
  }
  function as(e) {
    tn(sr.current);
    var t = tn(ht.current),
      n = Dl(t, e.type);
    t !== n && (ee(ur, e), ee(ht, n));
  }
  function Di(e) {
    ur.current === e && (re(ht), re(ur));
  }
  var ue = Ft(0);
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
  var Fi = [];
  function Ii() {
    for (var e = 0; e < Fi.length; e++) Fi[e]._workInProgressVersionPrimary = null;
    Fi.length = 0;
  }
  var ll = Ee.ReactCurrentDispatcher,
    Ui = Ee.ReactCurrentBatchConfig,
    nn = 0,
    se = null,
    me = null,
    ye = null,
    il = !1,
    ar = !1,
    cr = 0,
    tf = 0;
  function Ne() {
    throw Error(m(321));
  }
  function Ai(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((nn = i),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? of : uf),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (ye = me = null), (t.updateQueue = null), (ll.current = sf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = me !== null && me.next !== null),
      (nn = 0),
      (ye = me = se = null),
      (il = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bi() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function qe() {
    if (me === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ye === null ? se.memoizedState : ye.next;
    if (t !== null) ((ye = t), (me = e));
    else {
      if (e === null) throw Error(m(310));
      ((me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e));
    }
    return ye;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = qe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = me,
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
        var y = p.lane;
        if ((nn & y) === y)
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
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((u = s = x), (o = r)) : (s = s.next = x), (se.lanes |= y), (rn |= y));
        }
        p = p.next;
      } while (p !== null && p !== i);
      (s === null ? (o = r) : (s.next = u),
        rt(r, t.memoizedState) || (Fe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (se.lanes |= i), (rn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hi(e) {
    var t = qe(),
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
      (rt(i, t.memoizedState) || (Fe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function cs() {}
  function fs(e, t) {
    var n = se,
      r = qe(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Fe = !0)),
      (r = r.queue),
      $i(ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, ps.bind(null, n, r, l, t), void 0, null), ge === null))
        throw Error(m(349));
      (nn & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.stores = [e]))
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
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = Ct(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function ys(e) {
    var t = vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lf.bind(null, se, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
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
  function gs() {
    return qe().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = vt();
    ((se.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ul(e, t, n, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (((i = o.destroy), r !== null && Ai(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = dr(1 | t, n, i, r)));
  }
  function xs(e, t) {
    return ol(8390656, 8, e, t);
  }
  function $i(e, t) {
    return ul(2048, 8, e, t);
  }
  function ws(e, t) {
    return ul(4, 2, e, t);
  }
  function ks(e, t) {
    return ul(4, 4, e, t);
  }
  function Ss(e, t) {
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
    return ((n = n != null ? n.concat([e]) : null), ul(4, 4, Ss.bind(null, t, e), n));
  }
  function Qi() {}
  function Cs(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ns(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function _s(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = nu()), (se.lanes |= n), (rn |= n), (e.baseState = !0)), t);
  }
  function nf(e, t) {
    var n = J;
    ((J = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ui.transition;
    Ui.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((J = n), (Ui.transition = r));
    }
  }
  function Ps() {
    return qe().memoizedState;
  }
  function rf(e, t, n) {
    var r = $t(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), js(e)))
      zs(t, n);
    else if (((n = is(e, t, n, r)), n !== null)) {
      var l = Le();
      (st(n, e, r, l), Ls(n, t, r));
    }
  }
  function lf(e, t, n) {
    var r = $t(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) zs(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, o))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Ri(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = is(e, t, l, r)), n !== null && ((l = Le()), st(n, e, r, l), Ls(n, t, r)));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function zs(e, t) {
    ar = il = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ls(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  var sl = {
      readContext: Ge,
      useCallback: Ne,
      useContext: Ne,
      useEffect: Ne,
      useImperativeHandle: Ne,
      useInsertionEffect: Ne,
      useLayoutEffect: Ne,
      useMemo: Ne,
      useReducer: Ne,
      useRef: Ne,
      useState: Ne,
      useDebugValue: Ne,
      useDeferredValue: Ne,
      useTransition: Ne,
      useMutableSource: Ne,
      useSyncExternalStore: Ne,
      useId: Ne,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: xs,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ol(4194308, 4, Ss.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = vt();
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
          (e = e.dispatch = rf.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ys,
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        return (vt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return ((e = nf.bind(null, e[1])), (vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = se,
          l = vt();
        if (oe) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(m(349));
          (nn & 30) !== 0 || ds(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          xs(ms.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ps.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = ge.identifierPrefix;
        if (oe) {
          var n = Et,
            r = St;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = tf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: $i,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: Ns,
      useReducer: Wi,
      useRef: gs,
      useState: function () {
        return Wi(fr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = qe();
        return _s(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(fr)[0],
          t = qe().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: $i,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: Ns,
      useReducer: Hi,
      useRef: gs,
      useState: function () {
        return Hi(fr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = qe();
        return me === null ? (t.memoizedState = e) : _s(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(fr)[0],
          t = qe().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
    if (e && e.defaultProps) {
      ((t = N({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ki(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        l = $t(e),
        i = Nt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        l = $t(e),
        i = Nt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Le(),
        r = $t(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (st(t, e, r, n), tl(t, e, r)));
    },
  };
  function Ts(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, i)
          : !0
    );
  }
  function Rs(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = De(t) ? Zt : Ce.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : It)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Ms(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Yi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = De(t) ? Zt : Ce.current), (l.context = kn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ki(e, t, i, n), (l.state = e.memoizedState)),
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
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += $(r)), (r = r.return));
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
  function Xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (co = r)), Gi(e, t));
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
          Gi(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (Gi(e, t),
            typeof r != "function" && (Wt === null ? (Wt = new Set([this])) : Wt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
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
  function Us(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var cf = Ee.ReactCurrentOwner,
    Fe = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Pn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Bi()),
      e !== null && !Fe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (oe && n && Ei(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    );
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !go(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Bs(e, t, i, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(o, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Kt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Bs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Jn(i, r) && e.ref === t.ref)
        if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Fe = !0);
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
          ee(Tn, Qe),
          (Qe |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ee(Tn, Qe),
            (Qe |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          ee(Tn, Qe),
          (Qe |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ee(Tn, Qe),
        (Qe |= r));
    return (ze(e, t, l, n), t.child);
  }
  function Hs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = De(n) ? Zt : Ce.current;
    return (
      (i = kn(t, i)),
      Pn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Bi()),
      e !== null && !Fe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (oe && r && Ei(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (De(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if ((Pn(t, l), t.stateNode === null)) (fl(e, t), Rs(t, n, r), Yi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = De(n) ? Zt : Ce.current), (p = kn(t, p)));
      var y = n.getDerivedStateFromProps,
        x = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && Ms(t, o, r, p)),
        (At = !1));
      var h = t.memoizedState;
      ((o.state = h),
        nl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || h !== s || Oe.current || At
          ? (typeof y == "function" && (Ki(t, n, y, r), (s = t.memoizedState)),
            (u = At || Ts(t, n, u, r, h, s, p))
              ? (x ||
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
        os(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = p),
        (x = t.pendingProps),
        (h = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = De(n) ? Zt : Ce.current), (s = kn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((y = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || h !== s) && Ms(t, o, r, s)),
        (At = !1),
        (h = t.memoizedState),
        (o.state = h),
        nl(t, r, o, l));
      var _ = t.memoizedState;
      u !== x || h !== _ || Oe.current || At
        ? (typeof E == "function" && (Ki(t, n, E, r), (_ = t.memoizedState)),
          (p = At || Ts(t, n, p, r, h, _, s) || !1)
            ? (y ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, _, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (o.props = r),
          (o.state = _),
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
    return Zi(e, t, n, r, i, l);
  }
  function Zi(e, t, n, r, l, i) {
    Hs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && Gu(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (cf.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Nn(t, e.child, null, i)), (t.child = Nn(t, null, u, i)))
        : ze(e, t, u, i),
      (t.memoizedState = r.state),
      l && Gu(t, n, !0),
      t.child
    );
  }
  function Qs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Yu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Yu(e, t.context, !1),
      Oi(e, t.containerInfo));
  }
  function Ks(e, t, n, r, l) {
    return (Cn(), Pi(l), (t.flags |= 256), ze(e, t, n, r), t.child);
  }
  var Ji = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, t, n) {
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
        _i(t),
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
                  : (i = El(o, r, 0, null)),
                (e = sn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = bi(n)),
                (t.memoizedState = Ji),
                e)
              : eo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return ff(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Kt(u, i)) : ((i = sn(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? bi(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ji),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Kt(i, { mode: "visible", children: r.children })),
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
  function eo(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Pi(r),
      Nn(t, e.child, null, n),
      (e = eo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xi(Error(m(422)))), cl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (i = sn(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Nn(t, e.child, null, o),
            (t.child.memoizedState = bi(o)),
            (t.memoizedState = Ji),
            i);
    if ((t.mode & 1) === 0) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(m(419))), (r = Xi(i, r, void 0)), cl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Fe || u)) {
      if (((r = ge), r !== null)) {
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
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ct(e, l), st(r, e, l, -1)));
      }
      return (yo(), (r = Xi(Error(m(421)))), cl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Cf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        ($e = Dt(l.nextSibling)),
        (He = t),
        (oe = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = St),
          (Ye[Xe++] = Et),
          (Ye[Xe++] = Jt),
          (St = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = eo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ti(e.return, t, n));
  }
  function to(e, t, n, r, l) {
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
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((ze(e, t, r.children, n), (r = ue.current), (r & 2) !== 0))
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
    if ((ee(ue, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            to(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          to(t, !0, n, null, i);
          break;
        case "together":
          to(t, !1, null, null, void 0);
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
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (rn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        (Qs(t), Cn());
        break;
      case 5:
        as(t);
        break;
      case 1:
        De(t.type) && Yr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ee(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ee(ue, ue.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ys(e, t, n)
              : (ee(ue, ue.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        ee(ue, ue.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Gs(e, t, n);
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
  var qs, no, Zs, Js;
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
    (no = function () {}),
    (Zs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(ht.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Tl(e, l)), (r = Tl(e, r)), (i = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })), (r = N({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Ol(e, l)), (r = Ol(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
        }
        Fl(n, r);
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
                (z.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
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
                    (z.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && ne("scroll", e), i || u === s || (i = []))
                      : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (Js = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!oe)
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
  function _e(e) {
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
  function pf(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
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
        return (_e(t), null);
      case 1:
        return (De(t.type) && Kr(), _e(t), null);
      case 3:
        return (
          (r = t.stateNode),
          jn(),
          re(Oe),
          re(Ce),
          Ii(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (mo(lt), (lt = null)))),
          no(e, t),
          _e(t),
          null
        );
      case 5:
        Di(t);
        var l = tn(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Zs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (_e(t), null);
          }
          if (((e = tn(ht.current)), Zr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[mt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < er.length; l++) ne(er[l], r);
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
                (Ro(r, i), ne("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), ne("invalid", r));
                break;
              case "textarea":
                (Do(r, i), ne("invalid", r));
            }
            (Fl(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : z.hasOwnProperty(o) && u != null && o === "onScroll" && ne("scroll", r);
              }
            switch (n) {
              case "input":
                (wr(r), Oo(r, i, !0));
                break;
              case "textarea":
                (wr(r), Io(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)),
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
              (e[mt] = t),
              (e[rr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Il(n, r)), n)) {
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
                  for (l = 0; l < er.length; l++) ne(er[l], e);
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
                  (Ro(e, r), (l = Tl(e, r)), ne("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    ne("invalid", e));
                  break;
                case "textarea":
                  (Do(e, r), (l = Ol(e, r)), ne("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Bo(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Ao(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (z.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && ne("scroll", e)
                            : s != null && be(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (wr(e), Oo(e, r, !1));
                  break;
                case "textarea":
                  (wr(e), Io(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0));
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
        return (_e(t), null);
      case 6:
        if (e && t.stateNode != null) Js(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = tn(sr.current)), tn(ht.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (i = r.nodeValue !== n) && ((e = He), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (_e(t), null);
      case 13:
        if (
          (re(ue),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (oe && $e !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ts(), Cn(), (t.flags |= 98560), (i = !1));
          else if (((i = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[mt] = t;
            } else (Cn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (i = !1));
          } else (lt !== null && (mo(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ue.current & 1) !== 0 ? he === 0 && (he = 3) : yo())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (jn(), no(e, t), e === null && tr(t.stateNode.containerInfo), _e(t), null);
      case 10:
        return (Li(t.type._context), _e(t), null);
      case 17:
        return (De(t.type) && Kr(), _e(t), null);
      case 19:
        if ((re(ue), (i = t.memoizedState), i === null)) return (_e(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = rl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
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
              fe() > Rn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !oe)
              )
                return (_e(t), null);
            } else
              2 * fe() - i.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
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
          : (_e(t), null);
      case 22:
      case 23:
        return (
          vo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Qe & 1073741824) !== 0 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function mf(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          De(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          jn(),
          re(Oe),
          re(Ce),
          Ii(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Di(t), null);
      case 13:
        if ((re(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Cn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (re(ue), null);
      case 4:
        return (jn(), null);
      case 10:
        return (Li(t.type._context), null);
      case 22:
      case 23:
        return (vo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Pe = !1,
    hf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
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
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var bs = !1;
  function vf(e, t) {
    if (((hi = Rr), (e = Tu()), ui(e))) {
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
              y = 0,
              x = e,
              h = null;
            t: for (;;) {
              for (
                var E;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (E = x.firstChild) !== null;
              )
                ((h = x), (x = E));
              for (;;) {
                if (x === e) break t;
                if (
                  (h === n && ++p === l && (u = o),
                  h === i && ++y === r && (s = o),
                  (E = x.nextSibling) !== null)
                )
                  break;
                ((x = h), (h = x.parentNode));
              }
              x = E;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vi = { focusedElem: e, selectionRange: n }, Rr = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
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
                    var P = _.memoizedProps,
                      de = _.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? P : it(t.type, P),
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
          } catch (w) {
            ce(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((_ = bs), (bs = !1), _);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && ro(t, n, i));
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
  function lo(e) {
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
        t !== null && (delete t[mt], delete t[rr], delete t[wi], delete t[Zc], delete t[Jc])),
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
  function io(e, t, n) {
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
      for (io(e, t, n), e = e.sibling; e !== null;) (io(e, t, n), (e = e.sibling));
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oo(e, t, n), e = e.sibling; e !== null;) (oo(e, t, n), (e = e.sibling));
  }
  var ke = null,
    ot = !1;
  function Bt(e, t, n) {
    for (n = n.child; n !== null;) (ra(e, t, n), (n = n.sibling));
  }
  function ra(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Pe || Ln(n, t);
      case 6:
        var r = ke,
          l = ot;
        ((ke = null),
          Bt(e, t, n),
          (ke = r),
          (ot = l),
          ke !== null &&
            (ot
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ke.removeChild(n.stateNode)));
        break;
      case 18:
        ke !== null &&
          (ot
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? xi(e.parentNode, n) : e.nodeType === 1 && xi(e, n),
              Kn(e))
            : xi(ke, n.stateNode));
        break;
      case 4:
        ((r = ke),
          (l = ot),
          (ke = n.stateNode.containerInfo),
          (ot = !0),
          Bt(e, t, n),
          (ke = r),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ro(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Bt(e, t, n);
        break;
      case 1:
        if (!Pe && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            ce(n, t, u);
          }
        Bt(e, t, n);
        break;
      case 21:
        Bt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Pe = (r = Pe) || n.memoizedState !== null), Bt(e, t, n), (Pe = r))
          : Bt(e, t, n);
        break;
      default:
        Bt(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new hf()),
        t.forEach(function (r) {
          var l = Nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ut(e, t) {
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
                ((ke = u.stateNode), (ot = !1));
                break e;
              case 3:
                ((ke = u.stateNode.containerInfo), (ot = !0));
                break e;
              case 4:
                ((ke = u.stateNode.containerInfo), (ot = !0));
                break e;
            }
            u = u.return;
          }
          if (ke === null) throw Error(m(160));
          (ra(i, o, l), (ke = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ce(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (ia(t, e), (t = t.sibling));
  }
  function ia(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), yt(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (P) {
            ce(e, e.return, P);
          }
          try {
            mr(5, e, e.return);
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        break;
      case 1:
        (ut(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((ut(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Mo(l, i), Il(u, o));
              var p = Il(u, i);
              for (o = 0; o < s.length; o += 2) {
                var y = s[o],
                  x = s[o + 1];
                y === "style"
                  ? Bo(l, x)
                  : y === "dangerouslySetInnerHTML"
                    ? Ao(l, x)
                    : y === "children"
                      ? Dn(l, x)
                      : be(l, y, x, p);
              }
              switch (u) {
                case "input":
                  Rl(l, i);
                  break;
                case "textarea":
                  Fo(l, i);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (P) {
              ce(e, e.return, P);
            }
        }
        break;
      case 6:
        if ((ut(t, e), yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        break;
      case 3:
        if ((ut(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (P) {
            ce(e, e.return, P);
          }
        break;
      case 4:
        (ut(t, e), yt(e));
        break;
      case 13:
        (ut(t, e),
          yt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (ao = fe())),
          r & 4 && la(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Pe = (p = Pe) || y), ut(t, e), (Pe = p)) : ut(t, e),
          yt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (C = e, y = e.child; y !== null;) {
              for (x = C = y; C !== null;) {
                switch (((h = C), (E = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, h, h.return);
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
                      } catch (P) {
                        ce(r, n, P);
                      }
                    }
                    break;
                  case 5:
                    Ln(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      sa(x);
                      continue;
                    }
                }
                E !== null ? ((E.return = h), (C = E)) : sa(x);
              }
              y = y.sibling;
            }
          e: for (y = null, x = e; ;) {
            if (x.tag === 5) {
              if (y === null) {
                y = x;
                try {
                  ((l = x.stateNode),
                    p
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = x.stateNode),
                        (s = x.memoizedProps.style),
                        (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (u.style.display = Vo("display", o))));
                } catch (P) {
                  ce(e, e.return, P);
                }
              }
            } else if (x.tag === 6) {
              if (y === null)
                try {
                  x.stateNode.nodeValue = p ? "" : x.memoizedProps;
                } catch (P) {
                  ce(e, e.return, P);
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
              (y === x && (y = null), (x = x.return));
            }
            (y === x && (y = null), (x.sibling.return = x.return), (x = x.sibling));
          }
        }
        break;
      case 19:
        (ut(t, e), yt(e), r & 4 && la(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), yt(e));
    }
  }
  function yt(e) {
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
            r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
            var i = na(e);
            oo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = na(e);
            io(e, u, o);
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
  function yf(e, t, n) {
    ((C = e), oa(e));
  }
  function oa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Pe;
          u = dl;
          var p = Pe;
          if (((dl = o), (Pe = s) && !p))
            for (C = l; C !== null;)
              ((o = C),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? aa(l)
                  : s !== null
                    ? ((s.return = o), (C = s))
                    : aa(l));
          for (; i !== null;) ((C = i), oa(i), (i = i.sibling));
          ((C = l), (dl = u), (Pe = p));
        }
        ua(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (C = i)) : ua(e);
    }
  }
  function ua(e) {
    for (; C !== null;) {
      var t = C;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Pe || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Pe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ss(t, i, r);
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
                  ss(t, o, n);
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
                    var y = p.memoizedState;
                    if (y !== null) {
                      var x = y.dehydrated;
                      x !== null && Kn(x);
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
          Pe || (t.flags & 512 && lo(t));
        } catch (h) {
          ce(t, t.return, h);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function sa(e) {
    for (; C !== null;) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function aa(e) {
    for (; C !== null;) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
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
              lo(t);
            } catch (s) {
              ce(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              ce(t, o, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (C = u));
        break;
      }
      C = t.return;
    }
  }
  var gf = Math.ceil,
    ml = Ee.ReactCurrentDispatcher,
    uo = Ee.ReactCurrentOwner,
    Ze = Ee.ReactCurrentBatchConfig,
    H = 0,
    ge = null,
    pe = null,
    Se = 0,
    Qe = 0,
    Tn = Ft(0),
    he = 0,
    hr = null,
    rn = 0,
    hl = 0,
    so = 0,
    vr = null,
    Ie = null,
    ao = 0,
    Rn = 1 / 0,
    Pt = null,
    vl = !1,
    co = null,
    Wt = null,
    yl = !1,
    Ht = null,
    gl = 0,
    yr = 0,
    fo = null,
    xl = -1,
    wl = 0;
  function Le() {
    return (H & 6) !== 0 ? fe() : xl !== -1 ? xl : (xl = fe());
  }
  function $t(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && Se !== 0
        ? Se & -Se
        : ef.transition !== null
          ? (wl === 0 && (wl = nu()), wl)
          : ((e = J), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fu(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (fo = null), Error(m(185)));
    (Bn(e, n, r),
      ((H & 2) === 0 || e !== ge) &&
        (e === ge && ((H & 2) === 0 && (hl |= n), he === 4 && Qt(e, Se)),
        Ue(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((Rn = fe() + 500), Xr && Ut())));
  }
  function Ue(e, t) {
    var n = e.callbackNode;
    ec(e, t);
    var r = zr(e, e === ge ? Se : 0);
    if (r === 0) (n !== null && bo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && bo(n), t === 1))
        (e.tag === 0 ? bc(fa.bind(null, e)) : qu(fa.bind(null, e)),
          Gc(function () {
            (H & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (ru(r)) {
          case 1:
            n = $l;
            break;
          case 4:
            n = eu;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = tu;
            break;
          default:
            n = Nr;
        }
        n = xa(n, ca.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ca(e, t) {
    if (((xl = -1), (wl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = zr(e, e === ge ? Se : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = pa();
      (ge !== e || Se !== t) && ((Pt = null), (Rn = fe() + 500), on(e, t));
      do
        try {
          kf();
          break;
        } catch (u) {
          da(e, u);
        }
      while (!0);
      (zi(), (ml.current = i), (H = l), pe !== null ? (t = 0) : ((ge = null), (Se = 0), (t = he)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (t = po(e, l)))), t === 1))
        throw ((n = hr), on(e, 0), Qt(e, r), Ue(e, fe()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !xf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = po(e, i)))),
            t === 1))
        )
          throw ((n = hr), on(e, 0), Qt(e, r), Ue(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Ie, Pt);
            break;
          case 3:
            if ((Qt(e, r), (r & 130023424) === r && ((t = ao + 500 - fe()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Le(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = gi(un.bind(null, e, Ie, Pt), t);
              break;
            }
            un(e, Ie, Pt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - nt(r);
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
                            : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = gi(un.bind(null, e, Ie, Pt), r);
              break;
            }
            un(e, Ie, Pt);
            break;
          case 5:
            un(e, Ie, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ue(e, fe()), e.callbackNode === n ? ca.bind(null, e) : null);
  }
  function po(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Ie), (Ie = n), t !== null && mo(t)),
      e
    );
  }
  function mo(e) {
    Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
  }
  function xf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(i(), l)) return !1;
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
  function Qt(e, t) {
    for (
      t &= ~so, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function fa(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    Mn();
    var t = zr(e, 0);
    if ((t & 1) === 0) return (Ue(e, fe()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = po(e, r)));
    }
    if (n === 1) throw ((n = hr), on(e, 0), Qt(e, t), Ue(e, fe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Ie, Pt),
      Ue(e, fe()),
      null
    );
  }
  function ho(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((Rn = fe() + 500), Xr && Ut()));
    }
  }
  function ln(e) {
    Ht !== null && Ht.tag === 0 && (H & 6) === 0 && Mn();
    var t = H;
    H |= 1;
    var n = Ze.transition,
      r = J;
    try {
      if (((Ze.transition = null), (J = 1), e)) return e();
    } finally {
      ((J = r), (Ze.transition = n), (H = t), (H & 6) === 0 && Ut());
    }
  }
  function vo() {
    ((Qe = Tn.current), re(Tn));
  }
  function on(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xc(n)), pe !== null))
      for (n = pe.return; n !== null;) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (jn(), re(Oe), re(Ce), Ii());
            break;
          case 5:
            Di(r);
            break;
          case 4:
            jn();
            break;
          case 13:
            re(ue);
            break;
          case 19:
            re(ue);
            break;
          case 10:
            Li(r.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        n = n.return;
      }
    if (
      ((ge = e),
      (pe = e = Kt(e.current, null)),
      (Se = Qe = t),
      (he = 0),
      (hr = null),
      (so = hl = rn = 0),
      (Ie = vr = null),
      en !== null)
    ) {
      for (t = 0; t < en.length; t++)
        if (((n = en[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      en = null;
    }
    return e;
  }
  function da(e, t) {
    do {
      var n = pe;
      try {
        if ((zi(), (ll.current = sl), il)) {
          for (var r = se.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          il = !1;
        }
        if (
          ((nn = 0),
          (ye = me = se = null),
          (ar = !1),
          (cr = 0),
          (uo.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (hr = t), (pe = null));
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = Se),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = u,
              x = y.tag;
            if ((y.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var E = Is(o);
            if (E !== null) {
              ((E.flags &= -257), Us(E, o, u, i, t), E.mode & 1 && Fs(i, p, t), (t = E), (s = p));
              var _ = t.updateQueue;
              if (_ === null) {
                var P = new Set();
                (P.add(s), (t.updateQueue = P));
              } else _.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Fs(i, p, t), yo());
                break e;
              }
              s = Error(m(426));
            }
          } else if (oe && u.mode & 1) {
            var de = Is(o);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256), Us(de, o, u, i, t), Pi(zn(s, u)));
              break e;
            }
          }
          ((i = s = zn(s, u)),
            he !== 4 && (he = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Os(i, s, t);
                us(i, f);
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
                      (Wt === null || !Wt.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var w = Ds(i, u, t);
                  us(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ha(n);
      } catch (j) {
        ((t = j), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function yo() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ge === null || ((rn & 268435455) === 0 && (hl & 268435455) === 0) || Qt(ge, Se));
  }
  function kl(e, t) {
    var n = H;
    H |= 2;
    var r = pa();
    (ge !== e || Se !== t) && ((Pt = null), on(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if ((zi(), (H = n), (ml.current = r), pe !== null)) throw Error(m(261));
    return ((ge = null), (Se = 0), he);
  }
  function wf() {
    for (; pe !== null;) ma(pe);
  }
  function kf() {
    for (; pe !== null && !Qa();) ma(pe);
  }
  function ma(e) {
    var t = ga(e.alternate, e, Qe);
    ((e.memoizedProps = e.pendingProps), t === null ? ha(e) : (pe = t), (uo.current = null));
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = pf(n, t, Qe)), n !== null)) {
          pe = n;
          return;
        }
      } else {
        if (((n = mf(n, t)), n !== null)) {
          ((n.flags &= 32767), (pe = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((he = 6), (pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function un(e, t, n) {
    var r = J,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (J = 1), Sf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (J = r));
    }
    return null;
  }
  function Sf(e, t, n, r) {
    do Mn();
    while (Ht !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (tc(e, i),
      e === ge && ((pe = ge = null), (Se = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        xa(Nr, function () {
          return (Mn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var o = J;
      J = 1;
      var u = H;
      ((H |= 4),
        (uo.current = null),
        vf(e, n),
        ia(n, e),
        Bc(vi),
        (Rr = !!hi),
        (vi = hi = null),
        (e.current = n),
        yf(n),
        Ka(),
        (H = u),
        (J = o),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Ht = e), (gl = l)),
      (i = e.pendingLanes),
      i === 0 && (Wt = null),
      Ga(n.stateNode),
      Ue(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = co), (co = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Mn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === fo ? yr++ : ((yr = 0), (fo = e))) : (yr = 0),
      Ut(),
      null
    );
  }
  function Mn() {
    if (Ht !== null) {
      var e = ru(gl),
        t = Ze.transition,
        n = J;
      try {
        if (((Ze.transition = null), (J = 16 > e ? 16 : e), Ht === null)) var r = !1;
        else {
          if (((e = Ht), (Ht = null), (gl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, C = e.current; C !== null;) {
            var i = C,
              o = i.child;
            if ((C.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (C = p; C !== null;) {
                    var y = C;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, y, i);
                    }
                    var x = y.child;
                    if (x !== null) ((x.return = y), (C = x));
                    else
                      for (; C !== null;) {
                        y = C;
                        var h = y.sibling,
                          E = y.return;
                        if ((ea(y), y === p)) {
                          C = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = E), (C = h));
                          break;
                        }
                        C = E;
                      }
                  }
                }
                var _ = i.alternate;
                if (_ !== null) {
                  var P = _.child;
                  if (P !== null) {
                    _.child = null;
                    do {
                      var de = P.sibling;
                      ((P.sibling = null), (P = de));
                    } while (P !== null);
                  }
                }
                C = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (C = o));
            else
              e: for (; C !== null;) {
                if (((i = C), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (C = f));
                  break e;
                }
                C = i.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null;) {
            o = C;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = o), (C = d));
            else
              e: for (o = a; C !== null;) {
                if (((u = C), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, u);
                    }
                  } catch (j) {
                    ce(u, u.return, j);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  ((w.return = u.return), (C = w));
                  break e;
                }
                C = u.return;
              }
          }
          if (((H = l), Ut(), pt && typeof pt.onPostCommitFiberRoot == "function"))
            try {
              pt.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((J = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function va(e, t, n) {
    ((t = zn(n, t)),
      (t = Os(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = Le()),
      e !== null && (Bn(e, 1, t), Ue(e, t)));
  }
  function ce(e, t, n) {
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
              (e = Ds(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = Le()),
              t !== null && (Bn(t, 1, e), Ue(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Le()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (Se & n) === n &&
        (he === 4 || (he === 3 && (Se & 130023424) === Se && 500 > fe() - ao)
          ? on(e, 0)
          : (so |= n)),
      Ue(e, t));
  }
  function ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = jr), (jr <<= 1), (jr & 130023424) === 0 && (jr = 4194304)));
    var n = Le();
    ((e = Ct(e, t)), e !== null && (Bn(e, t, n), Ue(e, n)));
  }
  function Cf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ya(e, n));
  }
  function Nf(e, t) {
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
      if (e.memoizedProps !== t.pendingProps || Oe.current) Fe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Fe = !1), df(e, t, n));
        Fe = (e.flags & 131072) !== 0;
      }
    else ((Fe = !1), oe && (t.flags & 1048576) !== 0 && Zu(t, qr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = kn(t, Ce.current);
        (Pn(t, n), (l = Vi(null, t, r, e, l, n)));
        var i = Bi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              De(r) ? ((i = !0), Yr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Mi(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yi(t, r, e, n),
              (t = Zi(null, t, r, !0, i, n)))
            : ((t.tag = 0), oe && i && Ei(t), ze(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Pf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = $s(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          $s(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Qs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            os(e, t),
            nl(t, r, null, n));
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
              ((l = zn(Error(m(423)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else
              for (
                $e = Dt(t.stateNode.containerInfo.firstChild),
                  He = t,
                  oe = !0,
                  lt = null,
                  n = ls(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Cn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          as(t),
          e === null && _i(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          yi(r, l) ? (o = null) : i !== null && yi(r, i) && (t.flags |= 32),
          Hs(e, t),
          ze(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && _i(t), null);
      case 13:
        return Ys(e, t, n);
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Nn(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          As(e, t, r, l, n)
        );
      case 7:
        return (ze(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ze(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            ee(br, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !Oe.current) {
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
                          var y = p.pending;
                          (y === null ? (s.next = s) : ((s.next = y.next), (y.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ti(i.return, n, t),
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
                    Ti(o, n, t),
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
          (ze(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), Vs(e, t, r, l, n));
      case 15:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          fl(e, t),
          (t.tag = 1),
          De(r) ? ((e = !0), Yr(t)) : (e = !1),
          Pn(t, n),
          Rs(t, r, l),
          Yi(t, r, l, n),
          Zi(null, t, r, !0, e, n)
        );
      case 19:
        return Gs(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function xa(e, t) {
    return Jo(e, t);
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
  function go(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Pf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
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
  function Sl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Re:
          return sn(n.children, l, i, t);
        case Ke:
          ((o = 8), (l |= 8));
          break;
        case jt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = jt), (e.lanes = i), e);
        case Ve:
          return ((e = Je(13, n, t, l)), (e.elementType = Ve), (e.lanes = i), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e);
        case ae:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xt:
                o = 10;
                break e;
              case Xt:
                o = 9;
                break e;
              case ft:
                o = 11;
                break e;
              case dt:
                o = 14;
                break e;
              case Me:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function sn(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function xo(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function wo(e, t, n) {
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
  function jf(e, t, n, r, l) {
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
  function ko(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new jf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Je(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mi(i),
      e
    );
  }
  function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: je,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function wa(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (De(t.type)) {
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
      if (De(n)) return Xu(e, n, t);
    }
    return t;
  }
  function ka(e, t, n, r, l, i, o, u, s) {
    return (
      (e = ko(n, r, !0, e, l, i, o, u, s)),
      (e.context = wa(null)),
      (n = e.current),
      (r = Le()),
      (l = $t(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      Vt(n, i, l),
      (e.current.lanes = l),
      Bn(e, l, r),
      Ue(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      i = Le(),
      o = $t(l);
    return (
      (n = wa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, o)),
      e !== null && (st(e, l, o, i), tl(e, l, o)),
      o
    );
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Sa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function So(e, t) {
    (Sa(e, t), (e = e.alternate) && Sa(e, t));
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
  function Eo(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = Eo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Cl(e, t, null, null);
    }),
    (_l.prototype.unmount = Eo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ln(function () {
            Cl(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ou();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && au(e));
    }
  };
  function Co(e) {
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
        var i = r;
        r = function () {
          var p = Nl(o);
          i.call(p);
        };
      }
      var o = ka(t, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
        o
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = Nl(s);
        u.call(p);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
        Cl(t, s, n, r);
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
          var s = Nl(o);
          u.call(s);
        };
      }
      Cl(t, o, e, l);
    } else o = Tf(n, t, e, l, r);
    return Nl(o);
  }
  ((lu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), Ue(t, fe()), (H & 6) === 0 && ((Rn = fe() + 500), Ut()));
        }
        break;
      case 13:
        (ln(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Le();
            st(r, e, 1, l);
          }
        }),
          So(e, 1));
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var n = Le();
          st(t, e, 134217728, n);
        }
        So(e, 134217728);
      }
    }),
    (iu = function (e) {
      if (e.tag === 13) {
        var t = $t(e),
          n = Ct(e, t);
        if (n !== null) {
          var r = Le();
          st(n, e, t, r);
        }
        So(e, t);
      }
    }),
    (ou = function () {
      return J;
    }),
    (uu = function (e, t) {
      var n = J;
      try {
        return ((J = e), t());
      } finally {
        J = n;
      }
    }),
    (Vl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                (To(r), Rl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Qo = ho),
    (Ko = ln));
  var Rf = { usingClientEntryPoint: !1, Events: [lr, xn, Qr, Ho, $o, ho] },
    gr = {
      findFiberByHostInstance: qt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Mf = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = qo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Lf,
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
        ((_r = zl.inject(Mf)), (pt = zl));
      } catch {}
  }
  return (
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
    (Ae.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Co(t)) throw Error(m(200));
      return zf(e, t, null, n);
    }),
    (Ae.createRoot = function (e, t) {
      if (!Co(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Ea;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ko(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Eo(t)
      );
    }),
    (Ae.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = qo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ae.flushSync = function (e) {
      return ln(e);
    }),
    (Ae.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return jl(null, e, t, !0, n);
    }),
    (Ae.hydrateRoot = function (e, t, n) {
      if (!Co(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Ea;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ka(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        tr(e),
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
    (Ae.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return jl(null, e, t, !1, n);
    }),
    (Ae.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (ln(function () {
            jl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ae.unstable_batchedUpdates = ho),
    (Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return jl(e, t, n, !1, r);
    }),
    (Ae.version = "18.3.1-next-f1338f8080-20240426"),
    Ae
  );
}
var Ra;
function Bf() {
  if (Ra) return Po.exports;
  Ra = 1;
  function k() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (R) {
        console.error(R);
      }
  }
  return (k(), (Po.exports = Vf()), Po.exports);
}
var Ma;
function Wf() {
  if (Ma) return Ll;
  Ma = 1;
  var k = Bf();
  return ((Ll.createRoot = k.createRoot), (Ll.hydrateRoot = k.hydrateRoot), Ll);
}
var Hf = Wf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Da = (...k) =>
    k
      .filter((R, m, B) => !!R && R.trim() !== "" && B.indexOf(R) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Qf = {
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
 */ const Kf = Te.forwardRef(
  (
    {
      color: k = "currentColor",
      size: R = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: B,
      className: z = "",
      children: D,
      iconNode: F,
      ...te
    },
    W,
  ) =>
    Te.createElement(
      "svg",
      {
        ref: W,
        ...Qf,
        width: R,
        height: R,
        stroke: k,
        strokeWidth: B ? (Number(m) * 24) / Number(R) : m,
        className: Da("lucide", z),
        ...te,
      },
      [...F.map(([A, le]) => Te.createElement(A, le)), ...(Array.isArray(D) ? D : [D])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const at = (k, R) => {
  const m = Te.forwardRef(({ className: B, ...z }, D) =>
    Te.createElement(Kf, { ref: D, iconNode: R, className: Da(`lucide-${$f(k)}`, B), ...z }),
  );
  return ((m.displayName = `${k}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oa = at("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = at("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = at("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = at("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = at("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = at("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fa = at("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = at("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = at("Sparkles", [
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
 */ const ed = at("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = at("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  nd = 250;
function rd({ src: k, className: R, style: m }) {
  const B = Te.useRef(null),
    z = Te.useRef(null),
    D = Te.useRef(!1),
    [F, te] = Te.useState(!1),
    W = (A, le = nd) => {
      const Y = B.current;
      if (!Y || F) return;
      z.current !== null && (cancelAnimationFrame(z.current), (z.current = null));
      const X = Y.style.opacity ? parseFloat(Y.style.opacity) : 0,
        we = performance.now(),
        ve = (q) => {
          const G = Math.min((q - we) / le, 1);
          ((Y.style.opacity = String(X + (A - X) * G)),
            G < 1 ? (z.current = requestAnimationFrame(ve)) : (z.current = null));
        };
      z.current = requestAnimationFrame(ve);
    };
  return (
    Te.useEffect(() => {
      te(!1);
      const A = B.current;
      if (!A) return;
      ((A.loop = !1), (A.style.opacity = "0"), (D.current = !1));
      const le = () => {
          ((A.style.opacity = "0"),
            A.play()
              .then(() => W(1))
              .catch(() => W(1)));
        },
        Y = () => {
          const ve = A.duration;
          if (!ve || D.current) return;
          const q = ve - A.currentTime;
          q <= 0.35 && q > 0 && ((D.current = !0), W(0));
        },
        X = () => {
          ((A.style.opacity = "0"),
            z.current !== null && cancelAnimationFrame(z.current),
            window.setTimeout(() => {
              B.current &&
                ((B.current.currentTime = 0),
                B.current
                  .play()
                  .then(() => {
                    ((D.current = !1), W(1));
                  })
                  .catch(() => {}));
            }, 80));
        },
        we = () => te(!0);
      return (
        A.addEventListener("loadeddata", le),
        A.addEventListener("timeupdate", Y),
        A.addEventListener("ended", X),
        A.addEventListener("error", we),
        A.readyState >= 2 && le(),
        () => {
          (A.removeEventListener("loadeddata", le),
            A.removeEventListener("timeupdate", Y),
            A.removeEventListener("ended", X),
            A.removeEventListener("error", we),
            z.current !== null && cancelAnimationFrame(z.current));
        }
      );
    }, [k, F]),
    F
      ? g.jsx("div", { className: `video-fallback ${R ?? ""}`, style: m, "aria-hidden": !0 })
      : g.jsx("video", {
          ref: B,
          src: k,
          className: R,
          style: { opacity: 0, ...m },
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          preload: "auto",
        })
  );
}
function ld(k) {
  const R = document.getElementById(k);
  R && R.scrollIntoView({ behavior: "smooth", block: "start" });
}
function id({ open: k, onClose: R, onNavigate: m }) {
  if (!k) return null;
  const B = (z) => {
    (m(z), R());
  };
  return g.jsx("div", {
    className: "fixed inset-0 z-40 bg-canvas/95 backdrop-blur-lg lg:hidden",
    children: g.jsxs("div", {
      className: "flex h-full flex-col gap-6 px-6 pb-8 pt-20",
      children: [
        g.jsxs("label", {
          className: "liquid-glass flex items-center gap-2 rounded-full px-4 py-3",
          children: [
            g.jsx(Fa, { className: "h-4 w-4 text-white/50" }),
            g.jsx("input", {
              type: "search",
              placeholder: "Search datasets, jobs…",
              className:
                "w-full border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "flex flex-col gap-1 font-sans",
          children: [
            g.jsx("button", {
              type: "button",
              onClick: () => B("platform"),
              className: "rounded-xl px-3 py-3 text-left text-lg text-white",
              children: "Platform",
            }),
            g.jsx("p", {
              className: "px-3 pt-2 text-xs font-medium uppercase tracking-widest text-white/40",
              children: "Features",
            }),
            Ia.map((z) =>
              g.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => B(z.id),
                  className: "rounded-xl px-5 py-2 text-left text-base text-white/80",
                  children: z.label,
                },
                z.id,
              ),
            ),
            ["projects", "community", "contact"].map((z) =>
              g.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => B(z),
                  className: "rounded-xl px-3 py-3 text-left text-lg capitalize text-white",
                  children: z,
                },
                z,
              ),
            ),
          ],
        }),
      ],
    }),
  });
}
const od = [
    { label: "Platform", id: "platform" },
    { label: "Projects", id: "projects" },
    { label: "Community", id: "community" },
    { label: "Contact", id: "contact" },
  ],
  Ia = [
    { label: "Pipelines", id: "features-pipelines" },
    { label: "Catalog", id: "features-catalog" },
    { label: "Quality", id: "features-quality" },
    { label: "Access", id: "features-access" },
  ];
function ud() {
  const [k, R] = Te.useState(!1),
    [m, B] = Te.useState(!1),
    z = Te.useRef(null);
  Te.useEffect(() => {
    const F = (te) => {
      z.current && !z.current.contains(te.target) && B(!1);
    };
    return (
      document.addEventListener("mousedown", F),
      () => document.removeEventListener("mousedown", F)
    );
  }, []);
  const D = (F) => {
    (R(!1), B(!1), ld(F));
  };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("header", {
        className:
          "fixed left-0 right-0 top-0 z-50 border-b border-line/80 bg-canvas/70 backdrop-blur-md",
        children: g.jsxs("nav", {
          className:
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10",
          children: [
            g.jsx("button", {
              type: "button",
              onClick: () => D("platform"),
              className: "font-display text-left text-lg font-semibold tracking-tight text-white",
              children: "Transform Data",
            }),
            g.jsxs("div", {
              className: "hidden items-center gap-1 lg:flex",
              children: [
                g.jsx("button", {
                  type: "button",
                  onClick: () => D("platform"),
                  className:
                    "rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white",
                  children: "Platform",
                }),
                g.jsxs("div", {
                  ref: z,
                  className: "relative",
                  children: [
                    g.jsxs("button", {
                      type: "button",
                      onClick: () => B((F) => !F),
                      className:
                        "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white",
                      "aria-expanded": m,
                      "aria-haspopup": "true",
                      children: [
                        "Features",
                        g.jsx(Xf, {
                          className: `h-4 w-4 transition-transform ${m ? "rotate-180" : ""}`,
                        }),
                      ],
                    }),
                    m &&
                      g.jsxs("div", {
                        className:
                          "absolute left-0 top-full mt-2 min-w-[200px] rounded-2xl border border-line bg-panel/95 p-2 shadow-2xl backdrop-blur-xl",
                        children: [
                          Ia.map((F) =>
                            g.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => D(F.id),
                                className:
                                  "block w-full rounded-xl px-3 py-2 text-left text-sm text-white/85 transition hover:bg-white/10 hover:text-white",
                                children: F.label,
                              },
                              F.id,
                            ),
                          ),
                          g.jsx("button", {
                            type: "button",
                            onClick: () => D("features"),
                            className:
                              "mt-1 block w-full rounded-xl border-t border-line px-3 py-2 text-left text-xs text-cyan/90 transition hover:bg-white/5",
                            children: "View all features",
                          }),
                        ],
                      }),
                  ],
                }),
                od.slice(1).map((F) =>
                  g.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => D(F.id),
                      className:
                        "rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white",
                      children: F.label,
                    },
                    F.id,
                  ),
                ),
              ],
            }),
            g.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                g.jsxs("label", {
                  className:
                    "liquid-glass hidden items-center gap-2 rounded-full px-3 py-2 sm:flex md:min-w-[200px]",
                  children: [
                    g.jsx(Fa, { className: "h-4 w-4 shrink-0 text-white/50", strokeWidth: 2 }),
                    g.jsx("input", {
                      type: "search",
                      placeholder: "Search datasets, jobs…",
                      className:
                        "w-full min-w-0 border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none",
                      "aria-label": "Search",
                    }),
                  ],
                }),
                g.jsx("button", {
                  type: "button",
                  className:
                    "hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-canvas transition hover:bg-white/90 sm:inline-flex",
                  children: "Get started",
                }),
                g.jsx("button", {
                  type: "button",
                  className:
                    "liquid-glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
                  "aria-label": k ? "Close menu" : "Open menu",
                  onClick: () => R((F) => !F),
                  children: k
                    ? g.jsx(td, { className: "h-5 w-5" })
                    : g.jsx(Zf, { className: "h-5 w-5" }),
                }),
              ],
            }),
          ],
        }),
      }),
      g.jsx(id, { open: k, onClose: () => R(!1), onNavigate: D }),
    ],
  });
}
const sd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4",
  ad = [
    {
      id: "features-pipelines",
      icon: qf,
      title: "Pipelines",
      body: "Orchestrate batch and streaming jobs with lineage-aware DAGs, retries, and SLA monitors baked in.",
      stat: "12M events / hr",
    },
    {
      id: "features-catalog",
      icon: Gf,
      title: "Catalog",
      body: "Discover tables, models, and contracts in a unified graph with ownership, tags, and freshness scores.",
      stat: "4.2k assets",
    },
    {
      id: "features-quality",
      icon: Yf,
      title: "Quality",
      body: "Declarative checks, anomaly detection, and incident routing keep downstream dashboards trustworthy.",
      stat: "99.97% pass rate",
    },
    {
      id: "features-access",
      icon: Jf,
      title: "Access",
      body: "Row-level policies, audit trails, and federated grants sync with your identity provider in minutes.",
      stat: "SOC2 ready",
    },
  ],
  cd = [
    { name: "Northwind Analytics", domain: "Retail", status: "Live" },
    { name: "Helios Telemetry", domain: "IoT", status: "Pilot" },
    { name: "Ledger Core", domain: "Finance", status: "Live" },
  ];
function fd() {
  return g.jsxs("div", {
    className: "bg-canvas text-white",
    children: [
      g.jsx(ud, {}),
      g.jsxs("section", {
        id: "platform",
        className: "section-scroll-mt relative min-h-screen overflow-hidden",
        children: [
          g.jsx("div", {
            className: "fixed inset-0 z-0",
            children: g.jsx(rd, { src: sd, className: "h-full w-full object-cover" }),
          }),
          g.jsx("div", {
            className:
              "pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay",
            "aria-hidden": !0,
          }),
          g.jsx("div", {
            className:
              "pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-canvas/30 via-transparent to-canvas",
            "aria-hidden": !0,
          }),
          g.jsxs("div", {
            className:
              "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:px-10 md:pb-24",
            children: [
              g.jsxs("div", {
                className:
                  "animate-blur-fade-up mb-6 inline-flex max-w-fit items-center gap-2 rounded-full border border-line liquid-glass px-1 py-1 pr-4",
                style: { animationDelay: "120ms" },
                children: [
                  g.jsx("span", {
                    className:
                      "rounded-full bg-cyan px-3 py-1 text-xs font-semibold text-canvas font-accent",
                    children: "New",
                  }),
                  g.jsx("span", {
                    className: "text-xs text-white/80 sm:text-sm font-body",
                    children: "Unified lakehouse — now with real-time contracts",
                  }),
                ],
              }),
              g.jsxs("h1", {
                className:
                  "animate-blur-fade-up font-display max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl",
                style: { animationDelay: "220ms" },
                children: [
                  g.jsx("span", { className: "data-gradient-text", children: "Transform" }),
                  " raw signals into trusted data products",
                ],
              }),
              g.jsx("p", {
                className:
                  "animate-blur-fade-up mt-5 max-w-2xl text-base text-white/65 font-body sm:text-lg",
                style: { animationDelay: "340ms" },
                children:
                  "Ship governed pipelines, searchable catalogs, and quality gates on one platform built for analytics and ML teams.",
              }),
              g.jsxs("div", {
                className:
                  "animate-blur-fade-up mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center",
                style: { animationDelay: "460ms" },
                children: [
                  g.jsxs("label", {
                    className: "liquid-glass flex flex-1 items-center gap-2 rounded-full px-4 py-3",
                    children: [
                      g.jsx(bf, { className: "h-4 w-4 shrink-0 text-cyan" }),
                      g.jsx("input", {
                        type: "search",
                        placeholder: "Search tables, pipelines, owners…",
                        className:
                          "w-full border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none font-sans",
                      }),
                    ],
                  }),
                  g.jsxs("button", {
                    type: "button",
                    className:
                      "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-white/90 font-accent",
                    children: ["Launch console", g.jsx(Oa, { className: "h-4 w-4" })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      g.jsx("section", {
        id: "features",
        className: "section-scroll-mt border-t border-line bg-panel",
        children: g.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28",
          children: [
            g.jsx("p", {
              className: "font-accent text-xs font-semibold uppercase tracking-[0.28em] text-cyan",
              children: "Features",
            }),
            g.jsx("h2", {
              className: "mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl",
              children: "Everything your data platform needs",
            }),
            g.jsx("p", {
              className: "mt-4 max-w-2xl text-white/60 font-body",
              children:
                "Use the nav dropdown to jump directly into pipelines, catalog, quality, or access — each block anchors for smooth scroll.",
            }),
            g.jsx("div", {
              className: "mt-12 grid gap-6 md:grid-cols-2",
              children: ad.map((k) => {
                const R = k.icon;
                return g.jsxs(
                  "article",
                  {
                    id: k.id,
                    className:
                      "section-scroll-mt rounded-2xl border border-line bg-canvas/80 p-6 md:p-8",
                    children: [
                      g.jsxs("div", {
                        className: "mb-4 flex items-center justify-between gap-4",
                        children: [
                          g.jsx("div", {
                            className:
                              "flex h-11 w-11 items-center justify-center rounded-xl bg-white/5",
                            children: g.jsx(R, {
                              className: "h-5 w-5 text-cyan",
                              strokeWidth: 1.75,
                            }),
                          }),
                          g.jsx("span", {
                            className: "font-accent text-sm font-semibold text-violet",
                            children: k.stat,
                          }),
                        ],
                      }),
                      g.jsx("h3", {
                        className: "font-display text-xl font-semibold",
                        children: k.title,
                      }),
                      g.jsx("p", {
                        className: "mt-2 text-sm leading-relaxed text-white/60 font-body",
                        children: k.body,
                      }),
                    ],
                  },
                  k.id,
                );
              }),
            }),
          ],
        }),
      }),
      g.jsx("section", {
        id: "projects",
        className: "section-scroll-mt border-t border-line bg-canvas",
        children: g.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28",
          children: [
            g.jsx("p", {
              className:
                "font-accent text-xs font-semibold uppercase tracking-[0.28em] text-violet",
              children: "Projects",
            }),
            g.jsx("h2", {
              className: "mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl",
              children: "Active workspaces",
            }),
            g.jsx("ul", {
              className: "mt-10 divide-y divide-line rounded-2xl border border-line",
              children: cd.map((k) =>
                g.jsxs(
                  "li",
                  {
                    className:
                      "flex flex-wrap items-center justify-between gap-4 px-5 py-5 font-sans sm:px-8",
                    children: [
                      g.jsxs("div", {
                        children: [
                          g.jsx("p", {
                            className: "font-display text-lg font-medium",
                            children: k.name,
                          }),
                          g.jsx("p", {
                            className: "text-sm text-white/50 font-body",
                            children: k.domain,
                          }),
                        ],
                      }),
                      g.jsx("span", {
                        className: `rounded-full px-3 py-1 text-xs font-semibold font-accent ${k.status === "Live" ? "bg-cyan/15 text-cyan" : "bg-white/10 text-white/70"}`,
                        children: k.status,
                      }),
                    ],
                  },
                  k.name,
                ),
              ),
            }),
          ],
        }),
      }),
      g.jsx("section", {
        id: "community",
        className: "section-scroll-mt border-t border-line bg-panel",
        children: g.jsx("div", {
          className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28",
          children: g.jsxs("div", {
            className: "flex flex-col gap-10 md:flex-row md:items-center md:justify-between",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("p", {
                    className:
                      "font-accent text-xs font-semibold uppercase tracking-[0.28em] text-cyan",
                    children: "Community",
                  }),
                  g.jsx("h2", {
                    className:
                      "mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl",
                    children: "Builders sharing playbooks",
                  }),
                  g.jsx("p", {
                    className: "mt-4 max-w-xl text-white/60 font-body",
                    children:
                      "Join office hours, schema design reviews, and open RFCs with practitioners shipping on Transform Data every week.",
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "liquid-glass flex items-center gap-4 rounded-2xl px-6 py-5",
                children: [
                  g.jsx(ed, { className: "h-10 w-10 text-cyan", strokeWidth: 1.5 }),
                  g.jsxs("div", {
                    children: [
                      g.jsx("p", { className: "font-accent text-2xl font-bold", children: "18k+" }),
                      g.jsx("p", {
                        className: "text-sm text-white/50 font-body",
                        children: "members in Slack & forums",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      g.jsx("section", {
        id: "contact",
        className: "section-scroll-mt border-t border-line bg-canvas pb-24",
        children: g.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28",
          children: [
            g.jsx("p", {
              className:
                "font-accent text-xs font-semibold uppercase tracking-[0.28em] text-violet",
              children: "Contact",
            }),
            g.jsx("h2", {
              className: "mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl",
              children: "Talk with our data team",
            }),
            g.jsxs("form", {
              className: "mt-10 grid max-w-xl gap-4 font-sans",
              onSubmit: (k) => k.preventDefault(),
              children: [
                g.jsx("input", {
                  type: "email",
                  placeholder: "Work email",
                  className:
                    "rounded-xl border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan/50 focus:outline-none",
                }),
                g.jsx("textarea", {
                  rows: 4,
                  placeholder: "What are you building?",
                  className:
                    "resize-none rounded-xl border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan/50 focus:outline-none",
                }),
                g.jsxs("button", {
                  type: "submit",
                  className:
                    "inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-canvas font-accent",
                  children: ["Request demo", g.jsx(Oa, { className: "h-4 w-4" })],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
Hf.createRoot(document.getElementById("root")).render(
  g.jsx(Te.StrictMode, { children: g.jsx(fd, {}) }),
);
